import type {NextApiRequest, NextApiResponse} from 'next';

import {readSubmissionSession} from '../../../api/themes/submission-request';
import {submissionValidationError} from '../../../api/themes/submission-validation';
import {submitTheme} from '../../../api/themes/submit';

export const config = {api: {bodyParser: {sizeLimit: '1mb'}}};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = readSubmissionSession(req, res);
    if (!session) return;
    try {
        res.status(202).json(await submitTheme(session.token, req.body));
    } catch (error) {
        const failure = submissionValidationError(error);
        if (error instanceof Error && error.message === 'rate-limit') failure.code = 'rate-limit';
        res.status(400).json({ok: false, ...failure});
    }
}
