import {ArrowUpFromSquare, Bell, Magnifier, Plus} from '@gravity-ui/icons';
import {ActionBar} from '@gravity-ui/navigation';
import {Avatar, AvatarStack, Button, Hotkey, Icon, TextInput} from '@gravity-ui/uikit';
import type {ReactNode} from 'react';
import {block} from 'src/utils';

import avatar1Asset from '../../../../assets/avatar-1.png';
import avatar2Asset from '../../../../assets/avatar-2.png';
import avatar3Asset from '../../../../assets/avatar-3.png';

import './HeaderActionBar.scss';

const b = block('dashboard-example-header');

export const HeaderActionBar = ({themeSwitcher}: {themeSwitcher: ReactNode}) => {
    return (
        <ActionBar className={b()}>
            <ActionBar.Section type="primary">
                <ActionBar.Item className={b('centered')}>
                    <TextInput
                        placeholder="Search"
                        size="l"
                        type="search"
                        startContent={
                            <Icon size={16} data={Magnifier} className={b('search-icon')} />
                        }
                        endContent={<Hotkey className={b('hotkey')} value="mod+f" />}
                    />
                </ActionBar.Item>
                <ActionBar.Group className={b('grow')}>
                    <ActionBar.Item className={b('centered', {margin: true})}>
                        <AvatarStack className={b('users')} max={3}>
                            <Avatar imgUrl={avatar1Asset.src} />
                            <Avatar imgUrl={avatar2Asset.src} />
                            <Avatar imgUrl={avatar3Asset.src} />
                        </AvatarStack>
                        <Button size="m" view="outlined">
                            <Icon size={16} data={Plus} />
                        </Button>{' '}
                    </ActionBar.Item>
                    <ActionBar.Item>
                        <Button size="m" view="outlined">
                            <Icon size={16} data={Bell} />
                        </Button>
                    </ActionBar.Item>
                </ActionBar.Group>
            </ActionBar.Section>
            <ActionBar.Section type="secondary">
                <ActionBar.Item className={b('centered')}>
                    <Button className={b('export')} view="action" size="l">
                        <Icon size={16} data={ArrowUpFromSquare} />
                        Export
                    </Button>
                </ActionBar.Item>
                <ActionBar.Item className={b('centered')}>{themeSwitcher}</ActionBar.Item>
            </ActionBar.Section>
        </ActionBar>
    );
};
