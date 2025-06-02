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
import {
    Breadcrumbs,
    Flex,
    Icon,
    SegmentedRadioGroup,
    Theme,
    ThemeProvider,
} from '@gravity-ui/uikit';
import React, {CSSProperties, Fragment, useState} from 'react';
import {exportTheme} from 'src/components/Themes/lib/themeCreatorExport';

import gravityUi from '../../../assets/icons/gravity-ui.svg';
import {block} from '../../../utils';

import './PreviewLayout.scss';

const b = block('themes-preview-layout');

interface PreviewLayoutProps {
    title: string;
    id: string;
    breadCrumbsItems: string[];
    styles?: ReturnType<typeof exportTheme>;
    children: (props: any) => React.ReactNode;
    hideAsideMenu?: boolean;
    scrollableContent?: boolean;
    noPadding?: boolean;
}

export const PreviewLayout = ({
    breadCrumbsItems,
    children,
    styles,
    id,
    hideAsideMenu,
    scrollableContent,
    noPadding,
}: PreviewLayoutProps) => {
    const [theme, setTheme] = useState<Theme>('dark');
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
                        <ActionBar.Group pull="left-grow">
                            <Breadcrumbs showRoot className={b('breadcrumbs')}>
                                {['Gravity UI', ...breadCrumbsItems].map((item, index) => (
                                    <Breadcrumbs.Item key={`${index}-${item}`}>
                                        {item}
                                    </Breadcrumbs.Item>
                                ))}
                            </Breadcrumbs>
                        </ActionBar.Group>
                        <ActionBar.Group pull="right">
                            {/* Hide alignment in MVP */}
                            <ActionBar.Item className={b('header-actions', {hidden: true})}>
                                <SegmentedRadioGroup
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
                                            value: 'space-between',
                                            content: <Icon data={TextAlignJustify} />,
                                        },
                                    ]}
                                />
                            </ActionBar.Item>
                            <ActionBar.Item className={b('header-actions')}>
                                <SegmentedRadioGroup
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
                <Flex justifyContent={justify} className={b('content')}>
                    {children({justify})}
                </Flex>
            </Fragment>
        );
    };

    return (
        <ThemeProvider theme={theme} scoped rootClassName={`${b()} ${b({theme})}`}>
            {styles ? (
                <style>{`${
                    styles.fontImports
                }\n.gravity-ui-landing-themes-preview-layout_theme_${theme} {${
                    styles[theme as 'light' | 'dark']
                }}`}</style>
            ) : null}

            <div
                className={b({
                    'hide-aside': hideAsideMenu,
                    'scrollable-content': scrollableContent,
                    'no-padding': noPadding,
                })}
            >
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
                    className={b('aside-header')}
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
