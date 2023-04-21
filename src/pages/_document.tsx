import {Theme} from '@gravity-ui/page-constructor';
import block from 'bem-cn-lite';
import {Head, Html, Main, NextScript} from 'next/document';
import Script from 'next/script';

import {GA_ID, IS_PRODUCTION} from '../constants';

const theme = Theme.Dark;
const b = block('yc-root');

export const Document = () => {
    return (
        <Html>
            <Head>
                {IS_PRODUCTION && (
                    <Script
                        id="google-analytics"
                        strategy="beforeInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','${GA_ID}');
                            `,
                        }}
                    />
                )}
            </Head>
            <body className={b({theme})}>
                {IS_PRODUCTION && (
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GA_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                        }}
                    />
                )}
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
