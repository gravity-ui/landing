import Router from 'next/router';
import {useEffect} from 'react';

export const useOnLeavePageConfirmation = (unsavedChanges: boolean) => {
    useEffect(() => {
        // For reloading.
        window.onbeforeunload = () => {
            if (unsavedChanges) {
                return 'You have unsaved changes. Do you really want to leave?';
            }

            return null;
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
