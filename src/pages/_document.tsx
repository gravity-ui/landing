import block from 'bem-cn-lite';
import Document, {Head, Html, Main, NextScript} from 'next/document';
import Script from 'next/script';

import i18nextConfig from '../../next-i18next.config';
import {DEFAULT_THEME, GA_ID, IS_PRODUCTION} from '../constants';

const b = block('g-root');

class CustomDocument extends Document {
    render() {
        const queryLocale = this.props.__NEXT_DATA__.query.locale;
        const currentLocale =
            (typeof queryLocale === 'string' ? queryLocale : undefined) ??
            i18nextConfig.i18n.defaultLocale;

        return (
            <Html lang={currentLocale}>
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
    }
}

export default CustomDocument;
