import {Button, Checkbox, Flex, Icon, Text, TextInput} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import React from 'react';

import gravityLogo from '../../../../assets/logo-without-text.svg';
import {block} from '../../../../utils/block';
import type {ThemePreviewMode} from '../../gallery';
import {useThemeCreator} from '../../hooks';
import {exportTheme, replaceRootToCustomClassName} from '../../lib/themeCreatorExport';

const b = block('theme-submit');
const PREVIEW_SCOPE = b('sample');

function makePreviewInert(element: HTMLDivElement | null) {
    // React 18 does not forward the boolean inert prop.
    element?.setAttribute('inert', '');
}
const PROJECTS = [
    {name: 'submit_theme_sample_design', status: 'submit_theme_sample_active'},
    {name: 'submit_theme_sample_components', status: 'submit_theme_sample_active'},
    {name: 'submit_theme_sample_landing', status: 'submit_theme_sample_draft'},
];

interface ThemeCardLivePreviewProps {
    mode: ThemePreviewMode;
    language: string;
}

export const ThemeCardLivePreview: React.FC<ThemeCardLivePreviewProps> = ({mode, language}) => {
    const themeState = useThemeCreator();
    const {t} = useTranslation('themes', {lng: language});
    const styles = React.useMemo(
        () =>
            replaceRootToCustomClassName(
                exportTheme({themeState, ignoreDefaultValues: false}),
                PREVIEW_SCOPE,
            ),
        [themeState],
    );

    return (
        <div
            className={`g-root g-root_theme_${mode} ${PREVIEW_SCOPE} ${PREVIEW_SCOPE}_theme_${mode}`}
            ref={makePreviewInert}
            aria-hidden="true"
        >
            <style>{styles}</style>
            <div className={b('sample-window')}>
                <Flex gap={2} alignItems="center" className={b('sample-header')}>
                    <Icon data={gravityLogo} size={18} />
                    <Text variant="subheader-1">{t('submit_theme_sample_workspace')}</Text>
                    <Text color="secondary">/</Text>
                    <Text variant="subheader-1">{t('submit_theme_sample_projects')}</Text>
                </Flex>
                <div className={b('sample-content')}>
                    <Text variant="header-1">{t('submit_theme_sample_projects')}</Text>
                    <Flex gap={2} className={b('sample-search')}>
                        <TextInput placeholder={t('submit_theme_sample_search')} />
                        <Button view="action">{t('submit_theme_sample_new')}</Button>
                    </Flex>
                    {PROJECTS.map(({name, status}, index) => (
                        <Flex
                            key={name}
                            alignItems="center"
                            justifyContent="space-between"
                            className={b('sample-row', {selected: index === 1})}
                        >
                            <Checkbox checked={index === 1} size="m">
                                {t(name)}
                            </Checkbox>
                            <Text variant="caption-2" color="secondary">
                                {t(status)}
                            </Text>
                        </Flex>
                    ))}
                </div>
            </div>
        </div>
    );
};
