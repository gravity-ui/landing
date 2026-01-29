import '@gravity-ui/blog-constructor/styles/styles.css';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {NextComponentType} from 'next';
import {appWithTranslation} from 'next-i18next';
import 'prismjs/themes/prism-tomorrow.min.css';

import {useReportWebVitals} from '../hooks/useReportWebVitals';
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
    return <Component {...pageProps} />;
};

export default appWithTranslation(App);
