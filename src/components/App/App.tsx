import {
    Lang,
    PageConstructor,
    PageConstructorProvider,
    Theme,
    configure as configurePageConstructor,
} from '@gravity-ui/page-constructor';
import {configure as configureUiKit} from '@gravity-ui/uikit';
import block from 'bem-cn-lite';
import React from 'react';

import {CustomBanner} from '../../blocks/CustomBanner/CustomBanner';
import {CustomExtendedFeatures} from '../../blocks/CustomExtendedFeatures/CustomExtendedFeatures';
import {CustomHeader} from '../../blocks/CustomHeader/CustomHeader';
import {CustomBlock} from '../../blocks/constants';
import {content} from '../../content/content';
import {footer} from '../../content/footer';
import {menu} from '../../content/menu';
import {Footer} from '../Footer/Footer';
import {Menu} from '../Menu/Menu';

const lang = Lang.En;
const theme = Theme.Dark;

configureUiKit({lang});
configurePageConstructor({lang});

const b = block('yc-root');
document.body.classList.add(...b({theme}).split(' '));

export const App: React.FC = () => {
    return (
        <React.Fragment>
            <PageConstructorProvider theme={theme}>
                <PageConstructor
                    renderMenu={() => <Menu items={menu} />}
                    content={content}
                    custom={{
                        blocks: {
                            [CustomBlock.CustomHeader]: CustomHeader,
                            [CustomBlock.CustomExtendedFeatures]: CustomExtendedFeatures,
                            [CustomBlock.CustomBanner]: CustomBanner,
                        },
                    }}
                />
            </PageConstructorProvider>
            <Footer text={footer.text} menu={menu} />
        </React.Fragment>
    );
};
