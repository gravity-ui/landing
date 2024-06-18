import {Gear, Moon, Sun, TextAlignCenter, TextAlignJustify, TextAlignLeft} from '@gravity-ui/icons';
import {ActionBar, AsideHeader, FooterItem} from '@gravity-ui/navigation';
import {Avatar, Breadcrumbs, Flex, Icon, RadioButton, Text, ThemeProvider} from '@gravity-ui/uikit';
import React, {CSSProperties, Fragment, PropsWithChildren, useState} from 'react';

import userAvatar from '../../../../assets/avatar-2.png';
import gravityUi from '../../../../assets/icons/gravity-ui.svg';
import {block} from '../../../../utils';
import {useThemeCreator} from '../../hooks';
import {exportTheme} from '../../lib/themeCreatorExport';

import './PreviewTab.scss';

const bLayout = block('themes-preview-layout');

interface PreviewLayoutProps extends PropsWithChildren {
    title: string;
    breadCrumbsItems: string[];
    styles: ReturnType<typeof exportTheme>;
}

const PreviewLayout = ({breadCrumbsItems, children, styles}: PreviewLayoutProps) => {
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
                <Flex justifyContent={justify}>{children}</Flex>
            </Fragment>
        );
    };

    return (
        <>
            <ThemeProvider theme={theme} scoped rootClassName={`${bLayout()} ${bLayout({theme})}`}>
                {styles ? (
                    <style>{`.gravity-ui-landing-themes-preview-layout_theme_${theme} {${styles[theme]}}`}</style>
                ) : null}

                <div className={bLayout()}>
                    <AsideHeader
                        menuItems={[
                            {
                                id: 'first',
                                title: 'Item 1',
                                icon: Gear,
                                iconSize: 18,
                                current: true,
                            },
                            {
                                id: 'second',
                                title: 'Item 2',
                                icon: Gear,
                                iconSize: 18,
                            },
                            {
                                id: 'third',
                                title: 'Item 3',
                                icon: Gear,
                                iconSize: 18,
                            },
                        ]}
                        className={bLayout('aside-header')}
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
                                        title: 'User Settings with panel',
                                        tooltipText: 'User Settings with panel',
                                        onItemClick: () => {},
                                    }}
                                    compact={compact}
                                />
                                <FooterItem
                                    compact={compact}
                                    item={{
                                        id: 'user-account',
                                        title: 'User',
                                        itemWrapper: () => (
                                            <Avatar size="m" imgUrl={userAvatar.src} />
                                        ),
                                    }}
                                />
                            </React.Fragment>
                        )}
                    />
                </div>
            </ThemeProvider>
        </>
    );
};

const TablePreview = () => {
    return <span>table</span>;
};

const FormPreview = () => {
    return <span>form</span>;
};

const DashboardPreview = () => {
    return <span>dashboard</span>;
};

const CardsPreview = () => {
    return <span>card</span>;
};

const previewComponents = [
    {Component: TablePreview, title: 'Table', breadCrumbsItems: ['Table']},
    {Component: FormPreview, title: 'User edit', breadCrumbsItems: ['Table', 'User edit']},
    {Component: DashboardPreview, title: 'Dashboard', breadCrumbsItems: ['Dashboard']},
    {Component: CardsPreview, title: 'Cards', breadCrumbsItems: ['Cards']},
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

            {previewComponents.map(({Component, title, breadCrumbsItems}, index) => {
                return (
                    <PreviewLayout
                        key={index}
                        title={title}
                        breadCrumbsItems={breadCrumbsItems}
                        styles={themeStyles}
                    >
                        <Component />
                    </PreviewLayout>
                );
            })}
        </Flex>
    );
};
