import {PageConstructorProvider, Theme as PageConstructorTheme} from '@gravity-ui/page-constructor';
import {Lang, LayoutProvider, ThemeProvider, configure as configureUiKit} from '@gravity-ui/uikit';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/ru.json';
import {useTranslation} from 'next-i18next';
import Head from 'next/head';
import React from 'react';

import {CONTENT_WRAPPER_ID, DEFAULT_THEME, MENU_ID} from '../../constants';
import {EnvironmentContext} from '../../contexts';
import {block} from '../../utils';
import {Footer} from '../Footer/Footer';
import {Menu} from '../Menu/Menu';

import './Layout.scss';
import {Meta} from './Meta/Meta';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const b = block('layout');

export type LayoutProps = {
    title?: string;
    children?: React.ReactNode;
    isPageConstrucor?: boolean;
    isRtl?: boolean;
    showOnlyContent?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({
    title,
    children,
    isPageConstrucor = false,
    isRtl = false,
    showOnlyContent = false,
}) => {
    const {i18n} = useTranslation();

    const lang = i18n.language as Lang;

    React.useEffect(() => {
        configureUiKit({lang});
    }, [lang]);

    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    // Workaround for missing direction 'ltr' in ThemeProvider
    React.useEffect(() => {
        if (isRtl) {
            document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
        }

        return () => {
            if (isRtl) {
                document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
            }
        };
    }, [isRtl]);

    const pageConent = (
        <div className={b()}>
            {!showOnlyContent && (
                <div className={b('menu')} id={MENU_ID}>
                    <Menu />
                </div>
            )}
            <div className={b('wrapper')} id={CONTENT_WRAPPER_ID}>
                <div className={b('content')}>{children}</div>
                {!showOnlyContent && <Footer />}
            </div>
        </div>
    );

    return (
        <EnvironmentContext.Provider value={{isClient, isRtl}}>
            <Head>
                <title>{`Gravity UI${title ? ` – ${title}` : ''}`}</title>
                <Meta />
            </Head>
            <LayoutProvider>
                <ThemeProvider theme={DEFAULT_THEME} direction={isRtl ? 'rtl' : 'ltr'}>
                    {isPageConstrucor ? (
                        <PageConstructorProvider theme={DEFAULT_THEME as PageConstructorTheme}>
                            {pageConent}
                        </PageConstructorProvider>
                    ) : (
                        pageConent
                    )}
                </ThemeProvider>
            </LayoutProvider>
        </EnvironmentContext.Provider>
    );
};
