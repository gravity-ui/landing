import React from 'react';
import {flushSync} from 'react-dom';

import type {
    SubmissionErrorCode as ServerSubmissionErrorCode,
    SubmissionEvent,
    ThemeInput,
} from '../../../../api/themes/types';
import {allThemes} from '../../gallery';
import {useThemeCreator, useThemeCreatorMethods, useThemePaletteColor} from '../../hooks';
import {
    type SubmissionDraft,
    type SubmissionFieldErrors,
    validateSubmissionDraft,
} from '../../lib/submissionValidation';
import {exportTheme} from '../../lib/themeCreatorExport';
import {saveSubmitReturn, takeSignInFailed} from '../../lib/themeCreatorPersistence';

export type SubmissionErrorCode = ServerSubmissionErrorCode | 'sign-in' | 'storage';

export interface GithubUser {
    id: number;
    login: string;
    name: string;
    avatarUrl: string;
}

export type ThemeSubmissionDraft = SubmissionDraft;

export type SubmissionState =
    | {status: 'idle'}
    | {status: 'submitting'; stepIndex: number; stepCount: number}
    | {status: 'success'; pullRequestUrl: string; pullRequestNumber: number}
    | {
          status: 'error';
          code: SubmissionErrorCode;
          forkUrl?: string;
          fields?: SubmissionFieldErrors;
      };

const API_BASE = '/api/themes';
const SUBMIT_RETURN_QUERY = 'submitTheme=1';

interface StoredSubmission {
    receipt: string;
    input: ThemeInput;
    expiresAt: number;
    dispatchAttempted: boolean;
    userId: number;
}

const ACTIVE_JOB_KEY = 'themes.activeSubmissionReceipt';
const PENDING_REQUEST_KEY = 'themes.pendingSubmissionRequest';

export function useThemeSubmission(isOpen: boolean, draft: ThemeSubmissionDraft) {
    const themeState = useThemeCreator();
    const {markSaved} = useThemeCreatorMethods();
    const [brandColor] = useThemePaletteColor({token: 'brand', theme: 'light'});
    const [user, setUser] = React.useState<GithubUser | null>(null);
    // Until the session is known the dialog shows neither sign-in nor the form.
    const [isUserLoading, setUserLoading] = React.useState(true);
    const [state, setState] = React.useState<SubmissionState>({status: 'idle'});

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

    const getThemeJson = React.useCallback(
        () => exportTheme({themeState, format: 'json'}),
        [themeState],
    );

    const requestBody = React.useMemo(() => {
        try {
            return JSON.stringify({
                meta: {...draft, brandColor: brandColor.value},
                theme: JSON.parse(getThemeJson()),
            });
        } catch {
            return null;
        }
    }, [draft, brandColor.value, getThemeJson]);
    // GitHub sign-in leaves the page: the unsaved editor state is kept for the
    // way back, where the Themer restores it and reopens this dialog.
    const signIn = React.useCallback(() => {
        if (!saveSubmitReturn(themeState)) {
            setState({status: 'error', code: 'storage'});
            return;
        }
        // Commit the saved revision and its leave guard before navigation starts.
        flushSync(() => markSaved());
        const returnTo = `${window.location.pathname}?${SUBMIT_RETURN_QUERY}`;
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

    const [activeJob, setActiveJob] = React.useState<StoredSubmission | null>(null);
    const [pollAttempt, retryPolling] = React.useReducer((value: number) => value + 1, 0);
    const activeKey = user ? `${ACTIVE_JOB_KEY}:${user.id}` : null;
    const pendingKey = user ? `${PENDING_REQUEST_KEY}:${user.id}` : null;
    React.useEffect(() => {
        try {
            // Unowned legacy browser state cannot be safely attributed to an account.
            localStorage.removeItem(ACTIVE_JOB_KEY);
            localStorage.removeItem(PENDING_REQUEST_KEY);
            localStorage.removeItem('themes.activeSubmissionJob');
            const saved = activeKey ? localStorage.getItem(activeKey) : null;
            const job = saved ? (JSON.parse(saved) as StoredSubmission) : null;
            if (
                job &&
                (job.userId !== user?.id ||
                    typeof job.receipt !== 'string' ||
                    !job.input ||
                    !Number.isFinite(job.expiresAt) ||
                    job.expiresAt <= Date.now())
            ) {
                if (activeKey) localStorage.removeItem(activeKey);
                setActiveJob(null);
                setState({status: 'error', code: 'receipt-expired'});
            } else setActiveJob(job);
        } catch {
            setState({status: 'error', code: 'storage'});
        }
    }, [activeKey, user?.id]);
    React.useEffect(() => {
        if (!activeJob || !user || !activeKey || !pendingKey) return undefined;
        const controller = new AbortController();
        let job = activeJob;
        let timer: ReturnType<typeof setTimeout>;
        const poll = async () => {
            try {
                if (job.userId !== user.id) return;
                if (!job.dispatchAttempted) {
                    // Persist intent before any network write. A lost response is only polled.
                    const saved = JSON.parse(
                        localStorage.getItem(activeKey) || 'null',
                    ) as StoredSubmission | null;
                    if (!saved?.dispatchAttempted) {
                        localStorage.setItem(
                            activeKey,
                            JSON.stringify({...job, dispatchAttempted: true}),
                        );
                        job = {...job, dispatchAttempted: true};
                        try {
                            const dispatched = await fetch(`${API_BASE}/dispatch`, {
                                method: 'POST',
                                credentials: 'same-origin',
                                signal: controller.signal,
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({
                                    receipt: activeJob.receipt,
                                    input: activeJob.input,
                                }),
                            });
                            if (!dispatched.ok) {
                                const error = await dispatched.json();
                                if (controller.signal.aborted) return;
                                if (dispatched.status === 401 || error.code === 'session-expired')
                                    setUser(null);
                                job = {...job, dispatchAttempted: false};
                                localStorage.setItem(activeKey, JSON.stringify(job));
                                if (error.terminal) {
                                    localStorage.removeItem(activeKey);
                                    setActiveJob(null);
                                }
                                setState({
                                    status: 'error',
                                    code:
                                        dispatched.status === 401
                                            ? 'session-expired'
                                            : error.code || 'github',
                                });
                                return;
                            }
                        } catch {
                            if (controller.signal.aborted) return;
                        }
                    } else job = {...job, dispatchAttempted: true};
                }
                const response = await fetch(`${API_BASE}/status`, {
                    method: 'POST',
                    credentials: 'same-origin',
                    signal: controller.signal,
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({receipt: activeJob.receipt}),
                });
                if (response.status === 401) {
                    setUser(null);
                    setState({status: 'error', code: 'session-expired'});
                    return;
                }
                let event: SubmissionEvent = await response.json();
                if (event.type === 'step' && event.index === 3 && !controller.signal.aborted) {
                    setState({status: 'submitting', stepIndex: 3, stepCount: event.count});
                    const finalized = await fetch(`${API_BASE}/finalize`, {
                        method: 'POST',
                        credentials: 'same-origin',
                        signal: controller.signal,
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({receipt: activeJob.receipt}),
                    });
                    if (controller.signal.aborted) return;
                    if (finalized.status === 401) {
                        setUser(null);
                        setState({status: 'error', code: 'session-expired'});
                        return;
                    }
                    event = await finalized.json();
                }
                if (controller.signal.aborted) return;
                if (event.type === 'error' && event.code === 'session-expired') setUser(null);
                if (event.type === 'done') {
                    localStorage.removeItem(activeKey);
                    localStorage.removeItem(pendingKey);
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
                        localStorage.removeItem(activeKey);
                        localStorage.removeItem(pendingKey);
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
                if (controller.signal.aborted) return;
                // A lost response is not a new submission. Resume the same durable job.
            }
            timer = setTimeout(poll, 2000);
        };
        setState({status: 'submitting', stepIndex: 0, stepCount: 5});
        poll();
        return () => {
            controller.abort();
            clearTimeout(timer);
        };
    }, [activeJob, user, activeKey, pendingKey, pollAttempt]);

    const submit = React.useCallback(async () => {
        if (!user || !activeKey || !pendingKey) return;
        if (activeJob) {
            // Re-enter polling without reserving another attempt.
            retryPolling();
            return;
        }
        const fields = validateSubmissionDraft(draft, allThemes);
        if (Object.keys(fields).length) {
            setState({status: 'error', code: 'invalid-metadata', fields});
            return;
        }
        if (!requestBody) {
            setState({status: 'error', code: 'invalid'});
            return;
        }
        setState({status: 'submitting', stepIndex: 0, stepCount: 5});
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
                };
                // Both receipt and immutable canonical input are durable before dispatch starts.
                localStorage.setItem(activeKey, JSON.stringify(job));
                setActiveJob(job);
            } else {
                if (response.status === 401 || result.code === 'session-expired') setUser(null);
                setState({
                    status: 'error',
                    code: response.status === 401 ? 'session-expired' : result.code || 'github',
                    fields: result.fields,
                });
            }
        } catch {
            setState({status: 'error', code: 'github'});
        }
    }, [activeJob, draft, requestBody, user, activeKey, pendingKey]);

    const reset = React.useCallback(() => {
        if (activeKey) localStorage.removeItem(activeKey);
        setActiveJob(null);
        setState({status: 'idle'});
    }, [activeKey]);

    const previousRequestBody = React.useRef(requestBody);
    React.useEffect(() => {
        if (previousRequestBody.current !== requestBody && state.status !== 'submitting') {
            reset();
        }
        previousRequestBody.current = requestBody;
    }, [requestBody, state.status, reset]);

    return {user, isUserLoading, state, signIn, signOut, submit, reset};
}
