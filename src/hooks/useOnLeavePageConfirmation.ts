import Router from 'next/router';
import {useEffect} from 'react';

export const useOnLeavePageConfirmation = (unsavedChanges: boolean) => {
    useEffect(() => {
        // For reloading.
        window.onbeforeunload = () => {
            if (unsavedChanges) {
                return 'You have unsaved changes. Do you really want to leave?';
            }
        };

        // For changing in-app route.
        if (unsavedChanges) {
            const routeChangeStart = () => {
                const ok = confirm('You have unsaved changes. Do you really want to leave?');
                if (!ok) {
                    Router.events.emit('routeChangeError');
                    throw 'Abort route change. Please ignore this error.';
                }
            };

            Router.events.on('routeChangeStart', routeChangeStart);
            return () => {
                Router.events.off('routeChangeStart', routeChangeStart);
            };
        }
    }, [unsavedChanges]);
};
