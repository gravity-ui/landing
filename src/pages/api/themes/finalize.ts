import type {NextApiRequest, NextApiResponse} from 'next';

import {ReceiptError} from '../../../api/themes/receipt';
import {submissionError} from '../../../api/themes/submission-errors';
import {readSubmissionSession} from '../../../api/themes/submission-request';
import {finalizeThemeJob} from '../../../api/themes/submit';

export const config = {api: {bodyParser: {sizeLimit: '1mb'}}};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = readSubmissionSession(req, res);
    if (!session) {
        return;
    }
    try {
        res.json(await finalizeThemeJob(session.token, req.body?.receipt, req.body?.runId));
    } catch (error) {
        res.status(400).json({
            type: 'error',
            terminal: error instanceof ReceiptError,
            ...submissionError(error),
        });
    }
}
