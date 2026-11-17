import {hkdfSync} from 'crypto';

import {SignJWT, jwtVerify} from 'jose';
import type {JWTPayload} from 'jose';

import {DISPATCH_WINDOW_MS} from './config';
import type {UpstreamState} from './github-pr';

const ISSUER = 'gravity-landing/themes';
const AUDIENCE = 'theme-submission';
export const RECEIPT_TTL_SECONDS = 24 * 60 * 60;

export interface ThemeJob {
    id: string;
    userId: number;
    createdAt: number;
    dispatchBefore: number;
    themeHash: string;
    revision: string;
    repository: string;
    rendererTag: string;
    upstream: UpstreamState;
}
export class ReceiptError extends Error {}

function receiptKey() {
    const secret = process.env.THEMES_SESSION_SECRET;
    if (!secret || secret.length < 32) throw new Error('Invalid THEMES_SESSION_SECRET');
    return new Uint8Array(
        hkdfSync('sha256', secret, 'gravity-landing-themes', 'submission-receipt-v1', 32),
    );
}

export async function signReceipt(job: ThemeJob) {
    return new SignJWT({...job})
        .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
        .setIssuer(ISSUER)
        .setAudience(AUDIENCE)
        .setSubject(String(job.userId))
        .setIssuedAt(Math.floor(job.createdAt / 1000))
        .setExpirationTime(Math.floor(job.createdAt / 1000) + RECEIPT_TTL_SECONDS)
        .sign(receiptKey());
}

async function readReceiptPayload(receipt: unknown) {
    if (typeof receipt !== 'string' || receipt.length > 4096)
        throw new ReceiptError('receipt-invalid');
    try {
        const {payload} = await jwtVerify(receipt, receiptKey(), {
            algorithms: ['HS256'],
            issuer: ISSUER,
            audience: AUDIENCE,
            typ: 'JWT',
            requiredClaims: ['sub', 'iat', 'exp'],
            maxTokenAge: RECEIPT_TTL_SECONDS,
        });
        return payload;
    } catch (error) {
        throw new ReceiptError(
            error instanceof Error && 'code' in error && error.code === 'ERR_JWT_EXPIRED'
                ? 'receipt-expired'
                : 'receipt-invalid',
        );
    }
}

function isReceiptJobValid(job: ThemeJob, payload: JWTPayload) {
    return (
        /^[a-f0-9-]{36}$/.test(job.id) &&
        /^[a-f0-9]{64}$/.test(job.themeHash) &&
        /^[a-f0-9]{40}$/.test(job.revision) &&
        Number.isSafeInteger(job.createdAt) &&
        Number.isSafeInteger(job.dispatchBefore) &&
        job.dispatchBefore === job.createdAt + DISPATCH_WINDOW_MS &&
        payload.iat === Math.floor(job.createdAt / 1000) &&
        payload.exp === payload.iat + RECEIPT_TTL_SECONDS &&
        /^[a-f0-9]{40}$/.test(job.upstream?.commitSha) &&
        /^[a-f0-9]{40}$/.test(job.upstream?.treeSha) &&
        typeof job.repository === 'string' &&
        typeof job.rendererTag === 'string'
    );
}

export async function verifyReceipt(receipt: unknown, userId: number): Promise<ThemeJob> {
    const payload = await readReceiptPayload(receipt);
    if (!Number.isSafeInteger(userId) || userId <= 0) throw new ReceiptError('receipt-owner');
    if (payload.sub !== String(userId) || payload.userId !== userId)
        throw new ReceiptError('receipt-owner');
    const job = payload as unknown as ThemeJob;
    if (!isReceiptJobValid(job, payload)) {
        throw new ReceiptError('receipt-invalid');
    }
    return job;
}
