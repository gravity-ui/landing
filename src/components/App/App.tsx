import React from 'react';
import block from 'bem-cn-lite';
import {
    PageConstructor,
    PageConstructorProvider,
    configure as configurePageConstructor,
    Lang,
    Theme,
} from '@gravity-ui/page-constructor';
import {configure as configureUiKit} from '@gravity-ui/uikit';
import {CustomBlock} from '../../blocks/constants';
import {CustomHeader} from '../../blocks/CustomHeader/CustomHeader';
import {CustomExtendedFeatures} from '../../blocks/CustomExtendedFeatures/CustomExtendedFeatures';
import {CustomBanner} from '../../blocks/CustomBanner/CustomBanner';
import {content} from '../../content/content';
import {menu} from '../../content/menu';
import {footer} from '../../content/footer';
import {Menu} from '../Menu/Menu';
import {Footer} from '../Footer/Footer';

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
            <Footer text={footer.text} />
        </React.Fragment>
    );
};
