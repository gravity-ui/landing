import {
    Lang,
    PageConstructorProvider,
    Theme,
    configure as configurePageConstructor,
} from '@gravity-ui/page-constructor';
import {ThemeProvider, configure as configureUiKit} from '@gravity-ui/uikit';
import Head from 'next/head';
import React from 'react';

import {CONTENT_WRAPPER_ID, MENU_ID} from '../../constants';
import {block} from '../../utils';
import {Footer} from '../Footer/Footer';
import {Menu} from '../Menu/Menu';

import './Layout.scss';
import {Meta} from './Meta/Meta';

const b = block('layout');

export type LayoutProps = {
    title?: string;
    children?: React.ReactNode;
    showOnlyContent?: boolean;
};

const lang = Lang.En;
const theme = Theme.Dark;

configureUiKit({lang});
configurePageConstructor({lang});

const getPageTitle = (title?: string) => `Gravity UI${title ? ` – ${title}` : ''}`;

export const MainPageLayout: React.FC<LayoutProps> = ({title, children}) => {
    return (
        <React.Fragment>
            <Head>
                <title>{getPageTitle(title)}</title>
                <Meta />
            </Head>

            <PageConstructorProvider theme={theme}>
                <div className={b()}>
                    <div className={b('menu')} id={MENU_ID}>
                        <Menu />
                    </div>
                    <div className={b('wrapper')} id={CONTENT_WRAPPER_ID}>
                        <div className={b('content')}>{children}</div>
                        <Footer />
                    </div>
                </div>
            </PageConstructorProvider>
        </React.Fragment>
    );
};

export const Layout: React.FC<LayoutProps> = ({title, children, showOnlyContent}) => {
    return (
        <React.Fragment>
            <Head>
                <title>{getPageTitle(title)}</title>
                <Meta />
            </Head>
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
        </React.Fragment>
    );
};
