import {PageConstructorProvider, Theme as PageConstructorTheme} from '@gravity-ui/page-constructor';
import {Lang, ThemeProvider, configure as configureUiKit} from '@gravity-ui/uikit';
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
import {Meta, MetaProps} from './Meta/Meta';

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const b = block('layout');

export type LayoutProps = {
    title?: string;
    children?: React.ReactNode;
    isPageConstrucor?: boolean;
    isRtl?: boolean;
    showOnlyContent?: boolean;
    hideFooter?: boolean;
    noScroll?: boolean;
    meta?: MetaProps;
};

export const Layout: React.FC<LayoutProps> = ({
    title,
    children,
    isPageConstrucor = false,
    isRtl = false,
    showOnlyContent = false,
    hideFooter = false,
    noScroll = false,
    meta = {},
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

    // Gravity animation 1th april
    React.useEffect(() => {
        const wordTriggerEn = 'gravity';
        const wordTriggerRu = 'пкфмшен'; // если набрали на русской QERTY  hfcrkflrt
        const typingDebounceTime = 1_500;
        const animatedClassName = 'g-fun-gravity';

        let lastTypingTime = 0;
        let typedString = '';

        document.addEventListener('keydown', (event) => {
            if (lastTypingTime && Date.now() - lastTypingTime >= typingDebounceTime) {
                lastTypingTime = Date.now();
                typedString = '';
            } else {
                lastTypingTime = Date.now();
            }

            if (
                wordTriggerEn.includes(event.key.toLowerCase()) ||
                wordTriggerRu.includes(event.key.toLowerCase())
            ) {
                typedString += event.key.toLowerCase();
            }

            if (typedString === wordTriggerEn || typedString === wordTriggerRu) {
                document.querySelector('html')?.classList.toggle(animatedClassName);
                typedString = '';
                lastTypingTime = 0;
            } else if (typedString.length > wordTriggerEn?.length) {
                typedString = '';
                lastTypingTime = 0;
            }
        });
    });

    const pageConent = (
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

    return (
        <EnvironmentContext.Provider value={{isClient, isRtl}}>
            <Head>
                <title>{`Gravity UI${title ? ` – ${title}` : ''}`}</title>
                <Meta {...meta} />
            </Head>
            <ThemeProvider theme={DEFAULT_THEME} direction={isRtl ? 'rtl' : 'ltr'}>
                <React.Fragment>
                    {isPageConstrucor ? (
                        <PageConstructorProvider theme={DEFAULT_THEME as PageConstructorTheme}>
                            {pageConent}
                        </PageConstructorProvider>
                    ) : (
                        pageConent
                    )}
                </React.Fragment>
            </ThemeProvider>
        </EnvironmentContext.Provider>
    );
};
