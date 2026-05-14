import '@diplodoc/transform/dist/css/base.css';
import '@gravity-ui/blog-constructor/styles/styles.css';
import '@gravity-ui/markdown-editor/styles/styles.css';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {NextComponentType} from 'next';
import {appWithTranslation} from 'next-i18next';
import 'overlayscrollbars/overlayscrollbars.css';

import {useReportWebVitals} from '../hooks/useReportWebVitals';
import {ScrollbarInitializer} from '../hooks/useScrollbarVisibility';
import {WindowBreakpointProvider} from '../hooks/useWindowBreakpoint';
import '../scrollbars.scss';
import '../styles.scss';
import '../vendors.scss';

export const App = ({
    Component,
    pageProps,
}: {
    Component: NextComponentType;
    pageProps: Record<string, unknown>;
}) => {
    useReportWebVitals();

    return (
        <WindowBreakpointProvider>
            <ScrollbarInitializer />
            <Component {...pageProps} />
        </WindowBreakpointProvider>
    );
};

export default appWithTranslation(App);
