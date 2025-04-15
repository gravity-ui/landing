import {ControlGroupOption, Divider, Flex, SegmentedRadioGroup, Text} from '@gravity-ui/uikit';
import {
    unstable_TreeList as TreeList,
    unstable_TreeListProps as TreeListProps,
    unstable_useList as useList,
} from '@gravity-ui/uikit/unstable';
import {useCallback, useRef, useState} from 'react';
import {block} from 'src/utils';

import {Header} from '../Header/Header';
import {getBlockName} from '../cn';
import {Email} from '../types';

import {EmailCard, EmailCardProps} from './EmailCard/EmailCard';
import './EmailList.scss';
import {Filter} from './Filter/Filter';

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
    const filterRef = useRef<{option: OptionValue; textFilter: string}>({
        textFilter: '',
        option: 'All mail',
    });
    const [listItems, setListItems] = useState(emailList);
    const list = useList({
        items: listItems,
        controlledState: {
            selectedById: {[selectedEmailId]: true},
            activeItemId: selectedEmailId,
        },
    });

    const handleOptionChange = useCallback(
        (newOption: OptionValue) => {
            filterRef.current.option = newOption;
            setListItems(
                filterItems(filterRef.current.option, filterRef.current.textFilter, emailList),
            );
        },
        [emailList],
    );
    const handleFilterChange = useCallback(
        (newValue: string) => {
            filterRef.current.textFilter = newValue;
            setListItems(
                filterItems(filterRef.current.option, filterRef.current.textFilter, emailList),
            );
        },
        [emailList],
    );

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
                    onUpdate={handleOptionChange}
                    defaultValue="All mail"
                />
            </Header>
            <Divider />
            <Filter onUpdate={handleFilterChange} />
            <TreeList
                list={list}
                mapItemDataToContentProps={mapItemDataToContentProps}
                renderItem={renderItem(handleItemClick)}
                className={b()}
            />
        </Flex>
    );
};

function filterItems(option: OptionValue, textFilter: string, items: Email[]) {
    if (option === 'All mail' && !textFilter) {
        return items;
    }
    return items.filter(({read, fromEmail, fromTitle, subject, body}) => {
        const optionCondition = option === 'Unread' ? !read : true;
        const textCondition = textFilter
            ? fromEmail.toLowerCase().includes(textFilter) ||
              fromTitle.toLowerCase().includes(textFilter) ||
              subject.toLowerCase().includes(textFilter) ||
              body.toLowerCase().includes(textFilter)
            : true;
        return optionCondition && textCondition;
    });
}
