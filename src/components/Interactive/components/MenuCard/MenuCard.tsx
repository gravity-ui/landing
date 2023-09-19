import {Menu} from '@gravity-ui/uikit';

import {InteractiveCard} from '../InteractiveCard';

export const MenuCard = () => {
    return (
        <InteractiveCard>
            <Menu>
                <Menu.Item>{'Work it harder'}</Menu.Item>
                <Menu.Group>
                    <Menu.Item>{'Make it better'}</Menu.Item>
                    <Menu.Item>{'Do it faster'}</Menu.Item>
                    <Menu.Item>{'Makes us stronger'}</Menu.Item>
                </Menu.Group>
            </Menu>
        </InteractiveCard>
    );
};
