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
    Text,
    Theme,
    ThemeProvider,
} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React, {CSSProperties, Fragment, useState} from 'react';

import gravityUi from '../../../../assets/icons/gravity-ui.svg';
import {block} from '../../../../utils';
import {useThemeCreator} from '../../hooks';
import {exportTheme} from '../../lib/themeCreatorExport';

import {CardsPreview} from './CardsPreview/CardsPreview';
import {DashboardPreview} from './DashboardsPreview/DashboardPreview';
import {FormPreview} from './FormPreview/FormPreview';
import {KubernetesPreview} from './KubernetesPreview/KubernetesPreview';
import './PreviewTab.scss';
import {TablePreview} from './TablePreview/TablePreview';

const b = block('themes-preview-layout');

interface PreviewLayoutProps {
    title: string;
    id: string;
    breadCrumbsItems: string[];
    styles: ReturnType<typeof exportTheme>;
    children: (props: any) => React.ReactNode;
}

const PreviewLayout = ({breadCrumbsItems, children, styles, id}: PreviewLayoutProps) => {
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

            <div className={b()}>
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
    {
        id: 'kubernetes',
        Component: KubernetesPreview,
        title: 'Kubernetes preview',
        breadCrumbsItems: [],
    },
];

export const PreviewTab = () => {
    const {t} = useTranslation('themes');
    const themeState = useThemeCreator();

    const themeStyles = React.useMemo(
        () => exportTheme({themeState, ignoreDefaultValues: false}),
        [themeState],
    );
    return (
        <Flex direction="column" gap={8}>
            <Text variant="display-2">{t('title_ui-samples')}</Text>

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
