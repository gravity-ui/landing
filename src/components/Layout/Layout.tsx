import {PageConstructorProvider, Theme as PageConstructorTheme} from '@gravity-ui/page-constructor';
import {Lang, configure as configureUiKit, useThemeType} from '@gravity-ui/uikit';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/ru.json';
import {useTranslation} from 'next-i18next';
import Head from 'next/head';
import React from 'react';

import {CONTENT_WRAPPER_ID, MENU_ID} from '../../constants';
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
    showOnlyContent?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({
    title,
    children,
    isPageConstrucor,
    showOnlyContent,
}) => {
    const {i18n} = useTranslation();
    const theme = useThemeType();

    const lang = i18n.language as Lang;

    React.useEffect(() => {
        configureUiKit({lang});
    }, [lang]);

    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
        setIsClient(true);
    }, []);

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
        <EnvironmentContext.Provider value={{isClient}}>
            <Head>
                <title>{`Gravity UI${title ? ` – ${title}` : ''}`}</title>
                <Meta />
            </Head>
            {isPageConstrucor ? (
                <PageConstructorProvider theme={theme as PageConstructorTheme}>
                    {pageConent}
                </PageConstructorProvider>
            ) : (
                pageConent
            )}
        </EnvironmentContext.Provider>
    );
};
