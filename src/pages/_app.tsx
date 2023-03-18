import {NextComponentType} from 'next';

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
