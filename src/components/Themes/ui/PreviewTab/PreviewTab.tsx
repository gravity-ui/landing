import {
    ChartAreaStackedNormalized,
    Gear,
    LayoutList,
    Moon,
    Person,
    SquareBars,
    SquareChartBar,
    Sun,
    TextAlignCenter,
    TextAlignJustify,
    TextAlignLeft,
} from '@gravity-ui/icons';
import {ActionBar, AsideHeader, FooterItem} from '@gravity-ui/navigation';
import {Breadcrumbs, Flex, Icon, RadioButton, Text, ThemeProvider} from '@gravity-ui/uikit';
import React, {CSSProperties, Fragment, useState} from 'react';

import gravityUi from '../../../../assets/icons/gravity-ui.svg';
import {block} from '../../../../utils';
import {useThemeCreator} from '../../hooks';
import {exportTheme} from '../../lib/themeCreatorExport';

import {FormPreview} from './FormPreview';
import './PreviewTab.scss';
import {TablePreview} from './TablePreview';

export const b = block('themes-preview');

interface PreviewLayoutProps {
    title: string;
    id: string;
    breadCrumbsItems: string[];
    styles: ReturnType<typeof exportTheme>;
    children: (props: any) => React.ReactNode;
}

const PreviewLayout = ({breadCrumbsItems, children, styles, id}: PreviewLayoutProps) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [justify, setJustify] = useState<CSSProperties['justifyContent']>('flex-start');
    const [isCompact, setCompact] = useState<boolean>(true);

    const onAlignmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setJustify(event.target.value);
    };

    const onThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(event.target.value as 'light' | 'dark');
    };

    const renderContent = () => {
        return (
            <Fragment>
                <ActionBar aria-label="Actions bar">
                    <ActionBar.Section type="primary">
                        <ActionBar.Group pull="left">
                            <ActionBar.Item>
                                <Breadcrumbs
                                    lastDisplayedItemsCount={2}
                                    items={[
                                        {
                                            text: 'Gravity UI',
                                            action() {},
                                        },
                                        ...breadCrumbsItems.map((text) => ({text, action() {}})),
                                    ]}
                                    firstDisplayedItemsCount={1}
                                />
                            </ActionBar.Item>
                        </ActionBar.Group>

                        <ActionBar.Group pull="right">
                            <ActionBar.Item>
                                <RadioButton
                                    name="alignment"
                                    defaultValue="left"
                                    value={justify}
                                    onChange={onAlignmentChange}
                                    options={[
                                        {
                                            value: 'flex-start',
                                            content: <Icon data={TextAlignLeft} />,
                                        },
                                        {
                                            value: 'center',
                                            content: <Icon data={TextAlignCenter} />,
                                        },
                                        {
                                            value: 'stretch',
                                            content: <Icon data={TextAlignJustify} />,
                                        },
                                    ]}
                                />
                            </ActionBar.Item>
                            <ActionBar.Item>
                                <RadioButton
                                    name="theme"
                                    defaultValue="light"
                                    value={theme}
                                    onChange={onThemeChange}
                                    options={[
                                        {
                                            value: 'light',
                                            content: <Icon data={Sun} />,
                                        },
                                        {
                                            value: 'dark',
                                            content: <Icon data={Moon} />,
                                        },
                                    ]}
                                />
                            </ActionBar.Item>
                        </ActionBar.Group>
                    </ActionBar.Section>
                </ActionBar>
                <Flex justifyContent={justify} className={b('layout__content')}>
                    {children({justify})}
                </Flex>
            </Fragment>
        );
    };

    return (
        <ThemeProvider
            theme={theme}
            scoped
            rootClassName={`${b('layout')} ${b('layout', {theme})}`}
        >
            {styles ? (
                <style>{`.gravity-ui-landing-themes-preview__layout_theme_${theme} {${styles[theme]}}`}</style>
            ) : null}

            <div className={b('layout')}>
                <AsideHeader
                    menuItems={[
                        {
                            id: 'table',
                            title: 'Table',
                            icon: LayoutList,
                            iconSize: 18,
                            current: id === 'table',
                        },
                        {
                            id: 'form',
                            title: 'Form',
                            icon: SquareChartBar,
                            iconSize: 18,
                            current: id === 'form',
                        },
                        {
                            id: 'dashboard',
                            title: 'Dashboard',
                            icon: ChartAreaStackedNormalized,
                            iconSize: 18,
                            current: id === 'dashboard',
                        },
                        {
                            id: 'cards',
                            title: 'Cards',
                            icon: SquareBars,
                            iconSize: 18,
                            current: id === 'cards',
                        },
                    ]}
                    className={b('layout__aside-header')}
                    logo={{
                        text: 'Gravity UI',
                        href: '#',
                        icon: gravityUi,
                        iconSize: 38,
                    }}
                    compact={isCompact}
                    onChangeCompact={setCompact}
                    renderContent={renderContent}
                    renderFooter={({compact}) => (
                        <React.Fragment>
                            <FooterItem
                                item={{
                                    id: 'user-settings',
                                    icon: Gear,
                                    title: 'User Settings',
                                    tooltipText: 'User Settings',
                                    onItemClick: () => {},
                                }}
                                compact={compact}
                            />
                            <FooterItem
                                compact={compact}
                                item={{
                                    id: 'user-account',
                                    title: 'User',
                                    itemWrapper: (p, makeItem) =>
                                        makeItem({...p, icon: <Person />}),
                                }}
                            />
                        </React.Fragment>
                    )}
                />
            </div>
        </ThemeProvider>
    );
};

const DashboardPreview = () => {
    return <span>dashboard</span>;
};

const CardsPreview = () => {
    return <span>card</span>;
};

const previewComponents = [
    {id: 'table', Component: TablePreview, title: 'Table', breadCrumbsItems: ['Table']},
    {
        id: 'form',
        Component: FormPreview,
        title: 'User edit',
        breadCrumbsItems: ['Table', 'User edit'],
    },
    {
        id: 'dashboard',
        Component: DashboardPreview,
        title: 'Dashboard',
        breadCrumbsItems: ['Dashboard'],
    },
    {id: 'cards', Component: CardsPreview, title: 'Cards', breadCrumbsItems: ['Cards']},
];

export const PreviewTab = () => {
    const themeState = useThemeCreator();

    const themeStyles = React.useMemo(
        () => exportTheme({themeState, ignoreDefaultValues: false}),
        [themeState],
    );
    return (
        <Flex direction="column" gap={8}>
            <Text variant="display-2">UI Samples</Text>

            {previewComponents.map(({Component, title, breadCrumbsItems, id}, index) => {
                return (
                    <PreviewLayout
                        key={index}
                        id={id}
                        title={title}
                        breadCrumbsItems={breadCrumbsItems}
                        styles={themeStyles}
                    >
                        {(props) => <Component {...props} />}
                    </PreviewLayout>
                );
            })}
        </Flex>
    );
};
