import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {NextComponentType} from 'next';
import 'prismjs/themes/prism-tomorrow.min.css';

import '../styles.scss';
import '../vendors.scss';

export const App = ({
    Component,
    pageProps,
}: {
    Component: NextComponentType;
    pageProps: Record<string, unknown>;
}) => {
    return <Component {...pageProps} />;
};

export default App;
