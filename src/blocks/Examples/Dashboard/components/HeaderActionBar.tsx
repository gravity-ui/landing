import {ArrowUpFromSquare, Bell, Magnifier, Person, Persons, Plus} from '@gravity-ui/icons';
import {ActionBar} from '@gravity-ui/navigation';
import {Avatar, AvatarStack, Button, Hotkey, Icon, TextInput} from '@gravity-ui/uikit';
import {block} from 'src/utils';

import './HeaderActionBar.scss';

const b = block('dashboard-example-header');

export const HeaderActionBar = () => {
    return (
        <ActionBar className={b()}>
            <ActionBar.Section type="primary">
                <ActionBar.Item className={b('centered')}>
                    <TextInput
                        placeholder="Search"
                        size="l"
                        type="search"
                        className={b('input')}
                        startContent={
                            <Icon size={16} data={Magnifier} className={b('search-icon')} />
                        }
                        endContent={<Hotkey value="mod+f" />}
                    />
                </ActionBar.Item>
                <ActionBar.Group>
                    <ActionBar.Item className={b('centered', {margin: true})}>
                        <AvatarStack className={b('users')} max={3}>
                            <Avatar icon={Person} />
                            <Avatar icon={Persons} />
                            <Avatar icon={Person} />
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
            </ActionBar.Section>
        </ActionBar>
    );
};
