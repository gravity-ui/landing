import {PageConstructorProvider, Theme as PageConstructorTheme} from '@gravity-ui/page-constructor';
import {Lang, configure as configureUiKit, useThemeType} from '@gravity-ui/uikit';
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

configureUiKit({lang: Lang.En});

export const Layout: React.FC<LayoutProps> = ({title, children, showOnlyContent}) => {
    const theme = useThemeType() as PageConstructorTheme;

    return (
        <React.Fragment>
            <Head>
                <title>Gravity&nbsp;UI{title ? ` – ${title}` : ''}</title>
                <Meta />
            </Head>

            <PageConstructorProvider theme={theme}>
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
            </PageConstructorProvider>
        </React.Fragment>
    );
};
