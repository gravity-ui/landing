import {Footer, FooterProps, MobileFooter} from '@gravity-ui/navigation';
import React from 'react';

import {block} from '../../../../utils/block';

import './FooterComponent.scss';
import {logo, menuItems} from './constants';

const b = block('navigation-footer');

type FooterComponentProps = Pick<FooterProps, 'withDivider' | 'view' | 'copyright'> & {
    mobile?: boolean;
};

export function FooterComponent({withDivider, view, copyright, mobile}: FooterComponentProps) {
    const Component = mobile ? MobileFooter : Footer;

    return (
        <div className={b()}>
            <div className={b('body')} />
            <Component
                className={b('footer')}
                menuItems={menuItems}
                copyright={copyright}
                logo={logo}
                withDivider={withDivider}
                view={view}
            />
        </div>
    );
}
