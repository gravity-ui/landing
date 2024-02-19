import {
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
    UserAvatar,
    withTableSelection,
} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
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

export type ShowcaseProps = {
    color: string;
    theme: Theme;
};

export const Showcase: React.FC<ShowcaseProps> = ({color, theme}) => {
    const {t} = useTranslation();

    const tabs = [
        {id: 'active', title: t('home:examples.items.activeTab')},
        {id: 'inactive', title: t('home:examples.items.inactiveTab')},
    ];

    const tableColumns = [
        {id: 'title', name: t('home:examples.items.table.title')},
        {id: 'createdBy', name: t('home:examples.items.table.createdBy')},
        {id: 'updated', name: t('home:examples.items.table.updated')},
        {id: 'created', name: t('home:examples.items.table.created')},
        {id: 'favorite', name: ''},
    ];

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
                                        {t('home:examples.items.actionButton')}
                                    </Button>
                                </div>
                                <div className={b('col-item-elem', {'sm-gap': true})}>
                                    <Button size="xl" view="outlined">
                                        {t('home:examples.items.normalButton')}
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
                                    <RadioButton.Option
                                        content={t('home:examples.items.all')}
                                        value="all"
                                    />
                                    <RadioButton.Option
                                        content={t('home:examples.items.my')}
                                        value="my"
                                    />
                                </RadioButton>
                            </div>
                            <div className={b('col-item')}>
                                <Label theme="info" size="m">
                                    {t('home:examples.items.accent')}
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
                                    title: t('home:examples.items.table.rows.row1'),
                                    createdBy: <UserAvatar imgUrl={avatar1Asset.src} />,
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
                                    title: t('home:examples.items.table.rows.row2'),
                                    createdBy: <UserAvatar imgUrl={avatar2Asset.src} />,
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
                                    title: t('home:examples.items.table.rows.row3'),
                                    createdBy: <UserAvatar imgUrl={avatar3Asset.src} />,
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
