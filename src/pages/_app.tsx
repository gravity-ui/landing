import {ThemeProvider} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import {NextComponentType} from 'next';
import 'prismjs/themes/prism-tomorrow.min.css';

import {DEFAULT_THEME} from '../constants';
import '../styles.scss';
import '../vendors.scss';

export const App = ({
    Component,
    pageProps,
}: {
    Component: NextComponentType;
    pageProps: Record<string, unknown>;
}) => {
    return (
        <ThemeProvider theme={DEFAULT_THEME}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
