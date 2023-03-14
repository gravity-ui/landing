import {Theme} from '@gravity-ui/page-constructor';
import block from 'bem-cn-lite';
import {Head, Html, Main, NextScript} from 'next/document';
const theme = Theme.Dark;
const b = block('yc-root');

export default function Document() {
    return (
        <Html>
            <Head />
            <body className={b({theme})}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
