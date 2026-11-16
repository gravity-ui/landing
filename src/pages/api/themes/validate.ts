import type {NextApiRequest, NextApiResponse} from 'next';

import {readSubmissionSession} from '../../../api/themes/submission-request';
import {
    submissionValidationError,
    validateThemeSubmission,
} from '../../../api/themes/submission-validation';
import type {SubmissionPreflightResult} from '../../../api/themes/types';

export const config = {api: {bodyParser: {sizeLimit: '1mb'}}};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<SubmissionPreflightResult | {error: string}>,
) {
    const session = readSubmissionSession(req, res);
    if (!session) {
        return;
    }
    try {
        await validateThemeSubmission(session.token, req.body);
        res.status(200).json({ok: true});
    } catch (error) {
        const result = submissionValidationError(error);
        let status = 200;
        if (result.code === 'session-expired') {
            status = 401;
        } else if (result.code === 'github') {
            status = 502;
        }
        res.status(status).json({ok: false, ...result});
    }
}
