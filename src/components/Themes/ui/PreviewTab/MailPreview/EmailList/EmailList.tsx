import {ControlGroupOption, Divider, Flex, SegmentedRadioGroup, Text} from '@gravity-ui/uikit';
import {
    unstable_TreeList as TreeList,
    unstable_TreeListProps as TreeListProps,
    unstable_useList as useList,
} from '@gravity-ui/uikit/unstable';
import {useCallback, useState} from 'react';
import {block} from 'src/utils';

import {Header} from '../Header/Header';
import {getBlockName} from '../cn';
import {Email} from '../types';

import {EmailCard, EmailCardProps} from './EmailCard/EmailCard';
import './EmailList.scss';

export const mapItemDataToContentProps: TreeListProps<Email>['mapItemDataToContentProps'] = (
    email: Email,
) => {
    return {id: email.id, title: email.subject, subtitle: email.fromTitle};
};

const b = block(getBlockName('email-list'));

const EMPTY_ARRAY: Email[] = [];

type EmailListProps = {
    emailList: Email[];
    onItemClick: EmailCardProps['onClick'];
    selectedFolder: string;
    selectedEmailId: string;
};

type OptionValue = 'All mail' | 'Unread';
const RADIO_OPTIONS: ControlGroupOption<OptionValue>[] = [
    {value: 'All mail', title: 'All mail', content: 'All mail'},
    {value: 'Unread', title: 'Unread', content: 'Unread'},
];

const renderItem = (onClick: EmailCardProps['onClick']) =>
    (({data, props}) => (
        <EmailCard email={data} selected={props.selected} onClick={onClick} />
    )) as TreeListProps<Email>['renderItem'];

export const EmailList = ({
    emailList = EMPTY_ARRAY,
    onItemClick,
    selectedFolder,
    selectedEmailId,
}: EmailListProps) => {
    const [selectedOption, setSelectedOption] = useState<OptionValue>('All mail');
    const list = useList({
        items: emailList,
        controlledState: {
            selectedById: {[selectedEmailId]: true},
            activeItemId: selectedEmailId,
        },
    });

    const handleItemClick = useCallback<EmailCardProps['onClick']>(
        (email) => {
            list.state.setSelected({[email.id]: true});
            list.state.setActiveItemId(email.id);
            onItemClick(email);
        },
        [onItemClick, list],
    );

    return (
        <Flex direction="column" grow overflow="hidden">
            <Header>
                <Text variant="subheader-3">{selectedFolder}</Text>
                <SegmentedRadioGroup
                    options={RADIO_OPTIONS}
                    value={selectedOption}
                    onUpdate={setSelectedOption}
                />
            </Header>
            <Divider />
            <TreeList
                list={list}
                mapItemDataToContentProps={mapItemDataToContentProps}
                renderItem={renderItem(handleItemClick)}
                className={b()}
            />
        </Flex>
    );
};
