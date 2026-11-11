import React from 'react';

import type {ThemeTag} from '../../gallery';
import {useThemeCreator, useThemePaletteColor} from '../../hooks';
import {exportTheme} from '../../lib/themeCreatorExport';

import {saveSubmitReturn, takeSignInFailed} from './submitReturn';

export type SubmissionErrorCode =
    | 'name-taken'
    | 'rate-limit'
    | 'github'
    | 'invalid'
    | 'sign-in'
    | 'fork-outdated'
    | 'session-expired';

export interface GithubUser {
    login: string;
    name: string;
    avatarUrl: string;
}

export interface ThemeSubmissionDraft {
    name: string;
    descriptionEn: string;
    descriptionRu: string;
    tags: ThemeTag[];
}

export type SubmissionState =
    | {status: 'idle'}
    | {status: 'submitting'; stepIndex: number; stepCount: number}
    | {status: 'success'; pullRequestUrl: string; pullRequestNumber: number}
    | {status: 'error'; code: SubmissionErrorCode; forkUrl?: string};

type SubmissionEvent =
    | {type: 'step'; index: number; count: number}
    | {type: 'done'; pullRequestUrl: string; pullRequestNumber: number}
    | {type: 'error'; code: SubmissionErrorCode; forkUrl?: string};

const API_BASE = '/api/themes';
const SUBMIT_RETURN_QUERY = 'submitTheme=1';

// Reads newline-delimited JSON events from a streamed response.
async function readEvents(response: Response, onEvent: (event: SubmissionEvent) => void) {
    if (!response.body) {
        return;
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    for (;;) {
        const {value, done} = await reader.read();
        buffer += decoder.decode(value, {stream: !done});
        const lines = buffer.split('\n');
        buffer = lines.pop() ?? '';
        lines.filter((line) => line.trim()).forEach((line) => onEvent(JSON.parse(line)));
        if (done) {
            break;
        }
    }
    if (buffer.trim()) {
        onEvent(JSON.parse(buffer));
    }
}

export function useThemeSubmission(isOpen: boolean) {
    const themeState = useThemeCreator();
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
                if (data) {
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

    // GitHub sign-in leaves the page: the unsaved theme is kept for the way
    // back, where the Themer restores it and reopens this dialog.
    const signIn = React.useCallback(() => {
        saveSubmitReturn(getThemeJson());
        const returnTo = `${window.location.pathname}?${SUBMIT_RETURN_QUERY}`;
        window.location.assign(`${API_BASE}/auth/login?returnTo=${encodeURIComponent(returnTo)}`);
    }, [getThemeJson]);

    const signOut = React.useCallback(() => {
        fetch(`${API_BASE}/auth/logout`, {method: 'POST', credentials: 'same-origin'}).catch(
            () => undefined,
        );
        setUser(null);
        setState({status: 'idle'});
    }, []);

    const submit = React.useCallback(
        async (draft: ThemeSubmissionDraft) => {
            // The step count comes with the first server event; until then the bar is empty.
            setState({status: 'submitting', stepIndex: 0, stepCount: 0});
            let finalState: SubmissionState = {status: 'error', code: 'github'};
            try {
                const response = await fetch(`${API_BASE}/submit`, {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        meta: {...draft, brandColor: brandColor.value},
                        theme: JSON.parse(getThemeJson()),
                    }),
                });
                if (response.status === 401) {
                    setUser(null);
                    setState({status: 'idle'});
                    return;
                }
                if (response.ok) {
                    await readEvents(response, (event) => {
                        if (event.type === 'step') {
                            setState({
                                status: 'submitting',
                                stepIndex: event.index,
                                stepCount: event.count,
                            });
                        } else if (event.type === 'done') {
                            finalState = {
                                status: 'success',
                                pullRequestUrl: event.pullRequestUrl,
                                pullRequestNumber: event.pullRequestNumber,
                            };
                        } else {
                            finalState = {
                                status: 'error',
                                code: event.code,
                                forkUrl: event.forkUrl,
                            };
                        }
                    });
                }
            } catch {
                // Network failure: reported as a GitHub error, the form keeps the draft.
            }
            // A dead token is dropped so the dialog goes back to sign-in with the reason.
            if (finalState.status === 'error' && finalState.code === 'session-expired') {
                fetch(`${API_BASE}/auth/logout`, {
                    method: 'POST',
                    credentials: 'same-origin',
                }).catch(() => undefined);
                setUser(null);
            }
            setState(finalState);
        },
        [brandColor.value, getThemeJson],
    );

    const reset = React.useCallback(() => setState({status: 'idle'}), []);

    return {user, isUserLoading, state, signIn, signOut, submit, reset};
}
