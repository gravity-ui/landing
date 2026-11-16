import type {Octokit} from '@octokit/rest';

import {ciConfig} from './ci';

const WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_SUBMISSIONS = 3;

// Keep a UUID-shaped correlation id while making its owner visible in Actions run names.
export function submissionJobId(userId: number, uuid: string) {
    if (!Number.isSafeInteger(userId) || userId <= 0) throw new Error('invalid-user');
    const owner = userId.toString(16).padStart(15, '0');
    return `${owner.slice(0, 8)}-${owner.slice(8, 12)}-4${owner.slice(12)}-${uuid.slice(19)}`;
}

export async function reserveDispatch(octokit: Octokit, userId: number, now = Date.now()) {
    const prefix = `theme-job:${submissionJobId(
        userId,
        '00000000-0000-4000-8000-000000000000',
    ).slice(0, 18)}`;
    const {owner, repo} = ciConfig();
    let count = 0;
    // Read GitHub's durable history on every instance, including failed and queued runs.
    for (let page = 1; page <= 10; page++) {
        const {data} = await octokit.actions.listWorkflowRuns({
            owner,
            repo,
            workflow_id: 'render-submission.yml',
            event: 'workflow_dispatch',
            created: `>=${new Date(now - WINDOW_MS).toISOString()}`,
            per_page: 100,
            page,
        });
        count += data.workflow_runs.filter((run) => run.display_title.startsWith(prefix)).length;
        if (count >= MAX_SUBMISSIONS) throw new Error('rate-limit');
        if (page * 100 >= data.total_count) return;
    }
    // Never treat a truncated search as an unused budget.
    throw new Error('Workflow quota search exceeds safe bound');
}
