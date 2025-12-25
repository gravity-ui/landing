import {PageConstructorProvider, Theme as PageConstructorTheme} from '@gravity-ui/page-constructor';
import {Lang, ThemeProvider, configure as configureUiKit} from '@gravity-ui/uikit';
import Head from 'next/head';
import React from 'react';
import {useGravityAnimation} from 'src/hooks/useGravityAnimation';

import {CONTENT_WRAPPER_ID, DEFAULT_THEME, MENU_ID} from '../../constants';
import {EnvironmentContext} from '../../contexts';
import {useLocale} from '../../hooks/useLocale';
import {block} from '../../utils';
import {Footer} from '../Footer/Footer';
import {Menu} from '../Menu/Menu';

import './Layout.scss';
import {Meta, MetaProps} from './Meta/Meta';
import {initDateUtils, initTimeAgo} from './utils';

initTimeAgo();
initDateUtils();

const b = block('layout');

export type LayoutProps = {
    title?: string;
    children?: React.ReactNode;
    isPageConstructor?: boolean;
    isRtl?: boolean;
    showOnlyContent?: boolean;
    hideFooter?: boolean;
    noScroll?: boolean;
    meta?: MetaProps;
    hideLocalePicker?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({
    title,
    children,
    isPageConstructor = false,
    isRtl = false,
    showOnlyContent = false,
    hideFooter = false,
    noScroll = false,
    hideLocalePicker = false,
    meta = {},
}) => {
    const locale = useLocale();

    useGravityAnimation();

    const lang = locale as Lang;

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

    const pageContent = (
        <div className={b()}>
            {!showOnlyContent && (
                <div className={b('menu')} id={MENU_ID}>
                    <Menu />
                </div>
            )}
            <div className={b('wrapper')} id={noScroll ? undefined : CONTENT_WRAPPER_ID}>
                <div className={b('content', {'no-scroll': noScroll})}>{children}</div>
                {!showOnlyContent && !hideFooter && <Footer />}
            </div>
        </div>
    );

    const environmentValue = React.useMemo(
        () => ({isClient, isRtl, hideLocalePicker}),
        [isClient, isRtl, hideLocalePicker],
    );

    return (
        <EnvironmentContext.Provider value={environmentValue}>
            <Head>
                <title>{`Gravity UI${title ? ` – ${title}` : ''}`}</title>
                <Meta {...meta} />
            </Head>
            <ThemeProvider theme={DEFAULT_THEME} direction={isRtl ? 'rtl' : 'ltr'}>
                <React.Fragment>
                    {isPageConstructor ? (
                        <PageConstructorProvider theme={DEFAULT_THEME as PageConstructorTheme}>
                            {pageContent}
                        </PageConstructorProvider>
                    ) : (
                        pageContent
                    )}
                </React.Fragment>
            </ThemeProvider>
        </EnvironmentContext.Provider>
    );
};
