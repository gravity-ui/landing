import {PencilToSquare} from '@gravity-ui/icons';
import {Button, Divider, Flex, Label, Select, SelectProps, Text} from '@gravity-ui/uikit';
import {
    unstable_TreeList as TreeList,
    unstable_useList as useList,
} from '@gravity-ui/uikit/unstable';
import type {unstable_TreeListProps as TreeListProps} from '@gravity-ui/uikit/unstable';
import {useCallback, useMemo} from 'react';
import {block} from 'src/utils/block';

import {getBlockName} from '../cn';
import {INBOX_LIST, MAILBOX_FOLDER_LIST} from '../mock-data';
import {ItemForList} from '../types';

import './Navigation.scss';

export const mapItemDataToContentProps: TreeListProps<ItemForList>['mapItemDataToContentProps'] = ({
    icon,
    title,
    count,
}: ItemForList) => {
    return {id: title, title: title, startSlot: icon, endSlot: count ? undefined : count};
};

type NavigationProps = {
    accounts: string[];
    selectedAccount: SelectProps['value'];
    selectedFolder: string;
    onUpdateAccount: SelectProps['onUpdate'];
    onUpdateFolder: (value: string) => void;
};

const MailboxFolderList = ({
    onUpdateFolder,
    selectedFolder,
}: Pick<NavigationProps, 'onUpdateFolder' | 'selectedFolder'>) => {
    const list = useList({
        items: MAILBOX_FOLDER_LIST,
        controlledState: {selectedById: {[selectedFolder]: true}},
    });

    const handleUpdate = useCallback(
        ({id}: {id: string}) => {
            onUpdateFolder(id);
        },
        [onUpdateFolder],
    );

    return (
        <TreeList
            list={list}
            mapItemDataToContentProps={mapItemDataToContentProps}
            onItemClick={handleUpdate}
        />
    );
};

const b = block(getBlockName('navigation'));

const InboxList = () => {
    const list = useList({items: INBOX_LIST});
    const handleItemClick = ({id}: {id: string}) => {
        list.state.setSelected({[id]: true});
    };
    return (
        <TreeList
            list={list}
            mapItemDataToContentProps={mapItemDataToContentProps}
            renderItem={({props: {active}, data}) => (
                <Flex className={b('inbox-list-item', {active})} alignItems={'center'}>
                    <div>{data.icon}</div>
                    <Flex grow>
                        <Text>{data.title}</Text>
                    </Flex>
                    {active ? (
                        <Label size="xs" theme="clear">
                            {data.count}
                        </Label>
                    ) : (
                        <Text>{data.count}</Text>
                    )}
                </Flex>
            )}
            onItemClick={handleItemClick}
        />
    );
};

export const Navigation = ({
    accounts,
    onUpdateAccount,
    selectedAccount,
    selectedFolder,
    onUpdateFolder,
}: NavigationProps) => {
    const accountOptionList = useMemo(
        () =>
            accounts.map((account) => ({
                value: account,
                content: account,
            })),
        [accounts],
    );
    return (
        <Flex gap={4} direction="column" className={b()} grow>
            <Select
                onUpdate={onUpdateAccount}
                options={accountOptionList}
                value={selectedAccount}
            />
            <MailboxFolderList onUpdateFolder={onUpdateFolder} selectedFolder={selectedFolder} />
            <Divider orientation="horizontal" className={b('divider')} />
            <InboxList />
            <Button size="l" view="action" width="max">
                <Button.Icon>
                    <PencilToSquare />
                </Button.Icon>
                New mail
            </Button>
        </Flex>
    );
};
