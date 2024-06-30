import {Menu} from 'landing-uikit';

import {block} from '../../../../utils';
import {InteractiveCard} from '../InteractiveCard';

import './MenuCard.scss';

const b = block('menu-card');

export const MenuCard = () => {
    return (
        <InteractiveCard>
            <Menu size="l" className={b()}>
                <Menu.Item className={b('item')}>{'Work it harder'}</Menu.Item>
                <Menu.Group>
                    <Menu.Item className={b('item')}>{'Make it better'}</Menu.Item>
                    <Menu.Item className={b('item')} selected>
                        {'Do it faster'}
                    </Menu.Item>
                    <Menu.Item className={b('item')}>{'Makes us stronger'}</Menu.Item>
                </Menu.Group>
            </Menu>
        </InteractiveCard>
    );
};
