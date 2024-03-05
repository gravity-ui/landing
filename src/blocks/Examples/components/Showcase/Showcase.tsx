import {
    Avatar,
    Button,
    Checkbox,
    Icon,
    Label,
    Loader,
    RadioButton,
    RadioGroup,
    Spin,
    Switch,
    Table,
    Tabs,
    Theme,
    ThemeProvider,
    withTableSelection,
} from '@gravity-ui/uikit';
import React from 'react';

import avatar1Asset from '../../../../assets/avatar-1.png';
import avatar2Asset from '../../../../assets/avatar-2.png';
import avatar3Asset from '../../../../assets/avatar-3.png';
import starFilledIcon from '../../../../assets/icons/star-filled.svg';
import starIcon from '../../../../assets/icons/star.svg';
import {block} from '../../../../utils';

import './Showcase.scss';

const b = block('examples-showcase');

const SelectionTable = withTableSelection(Table);

const tabs = [
    {id: 'active', title: 'Active tab'},
    {id: 'inactive', title: 'Inactive tab'},
];

const tableColumns = [
    {id: 'title', name: 'Title'},
    {id: 'createdBy', name: 'Created by'},
    {id: 'updated', name: 'Updated'},
    {id: 'created', name: 'Created'},
    {id: 'favorite', name: ''},
];

export type ShowcaseProps = {
    color: string;
    theme: Theme;
};

export const Showcase: React.FC<ShowcaseProps> = ({color, theme}) => {
    const [activeTab, setActiveTab] = React.useState(tabs[0].id);

    const [tableSelectedIds, setTableSelectedIds] = React.useState(['1']);

    const [tableFavoriteIds, setTableFavoriteIds] = React.useState(['1']);
    const handleStarClick = React.useCallback(
        (tabId: string) => {
            if (tableFavoriteIds.includes(tabId)) {
                setTableFavoriteIds(tableFavoriteIds.filter((item) => item !== tabId));
            } else {
                setTableFavoriteIds([...tableFavoriteIds, tabId]);
            }
        },
        [tableFavoriteIds],
    );

    return (
        <ThemeProvider theme={theme} scoped rootClassName={`${b()} ${b({color})}`}>
            <div className={b('row')}>
                <div className={b('col')}>
                    <div className={b('sub-row')}>
                        <div className={b('sub-col')}>
                            <div className={b('col-item')}>
                                <div className={b('col-item-elem', {'sm-gap': true})}>
                                    <Button size="xl" view="action">
                                        Action
                                    </Button>
                                </div>
                                <div className={b('col-item-elem', {'sm-gap': true})}>
                                    <Button size="xl" view="outlined">
                                        Normal
                                    </Button>
                                </div>
                            </div>
                            <div className={b('col-item')}>
                                <div className={b('col-item-elem')}>
                                    <Loader size="l" />
                                </div>
                                <div className={b('col-item-elem')}>
                                    <Spin />
                                </div>
                            </div>
                            <div className={b('col-item')}>
                                <div className={b('col-item-elem')}>
                                    <Checkbox size="l" />
                                </div>
                                <div className={b('col-item-elem')}>
                                    <RadioGroup size="l" defaultValue="0">
                                        <RadioGroup.Option value="0" />
                                        <RadioGroup.Option value="1" />
                                    </RadioGroup>
                                </div>
                                <div className={b('col-item-elem')}>
                                    <Switch />
                                </div>
                            </div>
                        </div>
                        <div className={b('sub-col')}>
                            <div className={b('col-item')}>
                                <Tabs
                                    items={tabs}
                                    activeTab={activeTab}
                                    onSelectTab={setActiveTab}
                                />
                            </div>
                            <div className={b('col-item')}>
                                <RadioButton name="group2" defaultValue="all" size="l">
                                    <RadioButton.Option content="All" value="all" />
                                    <RadioButton.Option content="My" value="my" />
                                </RadioButton>
                            </div>
                            <div className={b('col-item')}>
                                <Label theme="info" size="m">
                                    Accent
                                </Label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={b('col', {stretch: true})}>
                    <div className={b('table-wrapper')}>
                        <SelectionTable
                            columns={tableColumns}
                            data={[
                                {
                                    title: 'Weekly Sync',
                                    createdBy: <Avatar imgUrl={avatar1Asset.src} />,
                                    updated: '28.06.2022',
                                    created: '26.06.2022',
                                    favorite: (
                                        <div
                                            className={b('star')}
                                            onClick={() => {
                                                handleStarClick('0');
                                            }}
                                        >
                                            <Icon
                                                data={
                                                    tableFavoriteIds.includes('0')
                                                        ? starFilledIcon
                                                        : starIcon
                                                }
                                                size={16}
                                            />
                                        </div>
                                    ),
                                },
                                {
                                    title: 'Campaign brainstorm',
                                    createdBy: <Avatar imgUrl={avatar2Asset.src} />,
                                    updated: '7.06.2022',
                                    created: '16.06.2022',
                                    favorite: (
                                        <div
                                            className={b('star')}
                                            onClick={() => {
                                                handleStarClick('1');
                                            }}
                                        >
                                            <Icon
                                                data={
                                                    tableFavoriteIds.includes('1')
                                                        ? starFilledIcon
                                                        : starIcon
                                                }
                                                size={16}
                                            />
                                        </div>
                                    ),
                                },
                                {
                                    title: 'Logo redesign',
                                    createdBy: <Avatar imgUrl={avatar3Asset.src} />,
                                    updated: '7.06.2022',
                                    created: '20.06.2022',
                                    favorite: (
                                        <div
                                            className={b('star')}
                                            onClick={() => {
                                                handleStarClick('2');
                                            }}
                                        >
                                            <Icon
                                                data={
                                                    tableFavoriteIds.includes('2')
                                                        ? starFilledIcon
                                                        : starIcon
                                                }
                                                size={16}
                                            />
                                        </div>
                                    ),
                                },
                            ]}
                            selectedIds={tableSelectedIds}
                            onSelectionChange={setTableSelectedIds}
                        />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};
