import React from 'react';
import {flushSync} from 'react-dom';

import {
    SUBMISSION_STEP,
    SUBMISSION_STEP_COUNT,
    SUBMIT_RETURN_PARAM,
} from '../../../../api/themes/types';
import type {SubmissionErrorCode as ServerSubmissionErrorCode} from '../../../../api/themes/types';
import {useThemeNames} from '../../gallery';
import {useThemeCreator, useThemeCreatorMethods, useThemePaletteColor} from '../../hooks';
import {
    type SubmissionDraft,
    type SubmissionFieldErrors,
    validateSubmissionDraft,
} from '../../lib/submissionValidation';
import {exportTheme} from '../../lib/themeCreatorExport';
import {saveSubmitReturn, takeSignInFailed} from '../../lib/themeCreatorPersistence';

import {
    ACTIVE_JOB_KEY,
    API_BASE,
    advanceSubmission,
    clearSubmission,
    loadSubmission,
    saveSubmission,
} from './submissionJob';
import type {StoredSubmission} from './submissionJob';

const POLL_INTERVAL_MS = 2000;

export type SubmissionErrorCode = ServerSubmissionErrorCode | 'sign-in' | 'storage';

export interface GithubUser {
    id: number;
    login: string;
    name: string;
    avatarUrl: string;
}

type SubmissionState =
    | {status: 'idle'}
    | {status: 'submitting'; stepIndex: number; stepCount: number}
    | {status: 'success'; pullRequestUrl: string; pullRequestNumber: number}
    | {
          status: 'error';
          code: SubmissionErrorCode;
          forkUrl?: string;
          fields?: SubmissionFieldErrors;
      };

export function useThemeSubmission(isOpen: boolean, draft: SubmissionDraft) {
    const takenNames = useThemeNames(isOpen);
    const fieldErrors = React.useMemo(
        () => validateSubmissionDraft(draft, takenNames),
        [draft, takenNames],
    );
    const themeState = useThemeCreator();
    const {markSaved} = useThemeCreatorMethods();
    const [brandColor] = useThemePaletteColor({token: 'brand', theme: 'light'});
    const [user, setUser] = React.useState<GithubUser | null>(null);
    // Until the session is known the dialog shows neither sign-in nor the form.
    const [isUserLoading, setUserLoading] = React.useState(true);
    const [state, setState] = React.useState<SubmissionState>({status: 'idle'});
    const [activeJob, setActiveJob] = React.useState<StoredSubmission | null>(null);

    // Back from a GitHub sign-in that the server could not finish.
    React.useEffect(() => {
        if (isOpen && takeSignInFailed()) {
            setState({status: 'error', code: 'sign-in'});
        }
    }, [isOpen]);

    // The session is checked with the page, not on opening, so the dialog
    // opens straight on the right step.
    React.useEffect(() => {
        const controller = new AbortController();
        fetch(`${API_BASE}/auth/me`, {signal: controller.signal, credentials: 'same-origin'})
            .then((response) => (response.ok ? response.json() : null))
            .then((data: GithubUser | null) => {
                if (data && Number.isSafeInteger(data.id) && data.id > 0) {
                    setUser(data);
                }
                setUserLoading(false);
            })
            .catch(() => {
                if (!controller.signal.aborted) {
                    setUserLoading(false);
                }
            });
        return () => controller.abort();
    }, []);

    const requestBody = React.useMemo(() => {
        try {
            return JSON.stringify({
                meta: {...draft, brandColor: brandColor.value},
                theme: JSON.parse(exportTheme({themeState, format: 'json'})),
            });
        } catch {
            return null;
        }
    }, [draft, brandColor.value, themeState]);
    // GitHub sign-in leaves the page: the unsaved editor state is kept for the
    // way back, where the Themer restores it and reopens this dialog.
    const signIn = React.useCallback(() => {
        if (!saveSubmitReturn(themeState)) {
            setState({status: 'error', code: 'storage'});
            return;
        }
        // Commit the saved revision and its leave guard before navigation starts.
        flushSync(() => markSaved());
        const returnTo = `${window.location.pathname}?${SUBMIT_RETURN_PARAM}=1`;
        window.location.assign(`${API_BASE}/auth/login?returnTo=${encodeURIComponent(returnTo)}`);
    }, [themeState, markSaved]);

    const signOut = React.useCallback(() => {
        fetch(`${API_BASE}/auth/logout`, {method: 'POST', credentials: 'same-origin'}).catch(
            () => undefined,
        );
        setUser(null);
        setActiveJob(null);
        setState({status: 'idle'});
    }, []);

    const [pollAttempt, retryPolling] = React.useReducer((value: number) => value + 1, 0);
    const activeKey = user ? `${ACTIVE_JOB_KEY}:${user.id}` : null;
    React.useEffect(() => {
        try {
            const job = activeKey ? loadSubmission(activeKey) : null;
            if (
                job &&
                (job.userId !== user?.id ||
                    typeof job.receipt !== 'string' ||
                    !job.input ||
                    !Number.isFinite(job.expiresAt) ||
                    job.expiresAt <= Date.now())
            ) {
                if (activeKey) {
                    clearSubmission(activeKey);
                }
                setActiveJob(null);
                setState({status: 'error', code: 'receipt-expired'});
            } else {
                setActiveJob(job);
            }
        } catch {
            setState({status: 'error', code: 'storage'});
        }
    }, [activeKey, user?.id]);
    React.useEffect(() => {
        if (!activeJob || !user || !activeKey) {
            return undefined;
        }
        const controller = new AbortController();
        let timer: ReturnType<typeof setTimeout>;
        const poll = async () => {
            try {
                if (activeJob.userId !== user.id) {
                    return;
                }
                const event = await advanceSubmission(
                    activeJob,
                    activeKey,
                    controller.signal,
                    (count) => {
                        setState({
                            status: 'submitting',
                            stepIndex: SUBMISSION_STEP.pullRequest,
                            stepCount: count,
                        });
                    },
                );
                if (controller.signal.aborted) {
                    return;
                }
                if (event.type === 'error' && event.code === 'session-expired') {
                    setUser(null);
                }
                if (event.type === 'done') {
                    clearSubmission(activeKey);
                    setActiveJob(null);
                    setState({
                        status: 'success',
                        pullRequestUrl: event.pullRequestUrl,
                        pullRequestNumber: event.pullRequestNumber,
                    });
                    return;
                }
                if (event.type === 'step') {
                    setState({
                        status: 'submitting',
                        stepIndex: event.index,
                        stepCount: event.count,
                    });
                } else {
                    if (event.terminal) {
                        clearSubmission(activeKey);
                        setActiveJob(null);
                    }
                    setState({
                        status: 'error',
                        code: event.code,
                        fields: event.fields,
                        forkUrl: event.forkUrl,
                    });
                    return;
                }
            } catch {
                if (controller.signal.aborted) {
                    return;
                }
                // A lost response is not a new submission. Resume the same durable job.
            }
            timer = setTimeout(poll, POLL_INTERVAL_MS);
        };
        setState({
            status: 'submitting',
            stepIndex: SUBMISSION_STEP.sending,
            stepCount: SUBMISSION_STEP_COUNT,
        });
        poll();
        return () => {
            controller.abort();
            clearTimeout(timer);
        };
    }, [activeJob, user, activeKey, pollAttempt]);

    const submit = React.useCallback(async () => {
        if (!user || !activeKey) {
            return;
        }
        if (activeJob) {
            // Re-enter polling without reserving another attempt.
            retryPolling();
            return;
        }
        if (Object.keys(fieldErrors).length) {
            setState({status: 'error', code: 'invalid-metadata', fields: fieldErrors});
            return;
        }
        if (!requestBody) {
            setState({status: 'error', code: 'invalid'});
            return;
        }
        setState({
            status: 'submitting',
            stepIndex: SUBMISSION_STEP.sending,
            stepCount: SUBMISSION_STEP_COUNT,
        });
        try {
            const response = await fetch(`${API_BASE}/submit`, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {'Content-Type': 'application/json'},
                body: requestBody,
            });
            const result = await response.json();
            if (response.ok && typeof result.receipt === 'string') {
                const job: StoredSubmission = {
                    ...result,
                    userId: user.id,
                    dispatchAttempted: false,
                    requestFingerprint: requestBody,
                };
                // Both receipt and immutable canonical input are durable before dispatch starts.
                saveSubmission(activeKey, job);
                setActiveJob(job);
            } else {
                if (response.status === 401 || result.code === 'session-expired') {
                    setUser(null);
                }
                setState({
                    status: 'error',
                    code: response.status === 401 ? 'session-expired' : result.code || 'github',
                    fields: result.fields,
                });
            }
        } catch {
            setState({status: 'error', code: 'github'});
        }
    }, [activeJob, fieldErrors, requestBody, user, activeKey]);

    const reset = React.useCallback(() => {
        if (activeKey) {
            clearSubmission(activeKey);
        }
        setActiveJob(null);
        setState({status: 'idle'});
    }, [activeKey]);

    const isJobEdited = Boolean(
        state.status === 'error' && activeJob && activeJob.requestFingerprint !== requestBody,
    );
    // dispatchJob persists the flag before the request, so storage is fresher than activeJob.
    const isJobDispatched = React.useMemo(
        () =>
            Boolean(
                state.status === 'error' &&
                    activeJob &&
                    activeKey &&
                    loadSubmission(activeKey)?.dispatchAttempted,
            ),
        [state, activeJob, activeKey],
    );
    // A dispatched job has spent a daily attempt and the server finalizes the rendered input,
    // so it is kept until it completes or fails terminally. Only an undispatched job is dropped.
    React.useEffect(() => {
        if (isJobEdited && !isJobDispatched) {
            reset();
        }
    }, [isJobEdited, isJobDispatched, reset]);
    const isRenderedVersionStale = isJobEdited && isJobDispatched;

    return {
        user,
        isUserLoading,
        state,
        fieldErrors,
        isRenderedVersionStale,
        signIn,
        signOut,
        submit,
        reset,
    };
}
