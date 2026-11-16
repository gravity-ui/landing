import Router from 'next/router';
import {useEffect, useLayoutEffect} from 'react';

const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

export const useOnLeavePageConfirmation = (unsavedChanges: boolean) => {
    useBrowserLayoutEffect(() => {
        window.onbeforeunload = () => {
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
