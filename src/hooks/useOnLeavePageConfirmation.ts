import Router from 'next/router';
import {useEffect, useLayoutEffect} from 'react';

const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

let nextUnloadAllowed = false;

// Lets the next page unload pass without the prompt, for a navigation that
// keeps the unsaved changes elsewhere (e.g. parked for a sign-in round trip).
// The changes stay unsaved, so every later leave is guarded again.
export const allowNextPageUnload = () => {
    nextUnloadAllowed = true;
};

export const useOnLeavePageConfirmation = (unsavedChanges: boolean) => {
    useBrowserLayoutEffect(() => {
        window.onbeforeunload = () => {
            if (nextUnloadAllowed) {
                nextUnloadAllowed = false;
                return undefined;
            }
            if (unsavedChanges) {
                return 'You have unsaved changes. Do you really want to leave?';
            }
            return undefined;
        };

        const routeChangeStart = () => {
            if (unsavedChanges) {
                const ok = confirm('You have unsaved changes. Do you really want to leave?');
                if (!ok) {
                    Router.events.emit('routeChangeError');
                    // eslint-disable-next-line no-throw-literal
                    throw 'Abort route change. Please ignore this error.';
                }
            }
        };
        Router.events.on('routeChangeStart', routeChangeStart);
        return () => {
            Router.events.off('routeChangeStart', routeChangeStart);
            window.onbeforeunload = null;
        };
    }, [unsavedChanges]);
};
