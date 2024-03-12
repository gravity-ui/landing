import block from 'bem-cn-lite';
import {Head, Html, Main, NextScript} from 'next/document';
import Script from 'next/script';

import {DEFAULT_THEME, GA_ID, IS_PRODUCTION} from '../constants';

const b = block('g-root');

export const Document = () => {
    return (
        // Workaround for missing direction 'ltr' in ThemeProvider
        <Html dir="ltr">
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
            <body className={b({theme: DEFAULT_THEME})}>
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
