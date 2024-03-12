import {ThemeProvider, useThemeValue} from '@gravity-ui/uikit';
import React, {useEffect} from 'react';

import {Landing} from '../components/Landing/Landing';
import {Layout} from '../components/Layout/Layout';

export const RTLPage = () => {
    const theme = useThemeValue();

    // Workaround for missing direction 'ltr' in ThemeProvider
    useEffect(() => {
        document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');

        return () => {
            document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
        };
    }, []);

    return (
        <ThemeProvider theme={theme} direction="rtl">
            <Layout>
                <Landing />
            </Layout>
        </ThemeProvider>
    );
};

export default RTLPage;
