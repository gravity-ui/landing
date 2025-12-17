import {Sliders} from '@gravity-ui/icons';
import {Button, Flex, Icon} from '@gravity-ui/uikit';
import {Trans, useTranslation} from 'next-i18next';
import {Fragment, useCallback, useMemo} from 'react';

import {useLocale} from '../../../../../hooks/useLocale';
import {block} from '../../../../../utils';
import {useThemeCreator, useThemeCreatorMethods} from '../../../hooks/useThemeCreator';
import {BasicPalette} from '../../BasicPalette/BasicPalette';
import {MainSettings} from '../../MainSettings/MainSettings';
import {
    type EditableColorOption,
    PrivateColorsSettings,
} from '../../PrivateColorsSettings/PrivateColorsSettings';

import './BasicSettings.scss';

const b = block('basic-color-settings');

export const BasicSettings = () => {
    const {t} = useTranslation('themes');
    const locale = useLocale();

    const advancedColorsOptions = useMemo<EditableColorOption[]>(
        () => [
            {
                title: t('label_advanced-colors_base-brand-hover'),
                name: 'base-brand-hover',
            },
            {
                title: t('label_advanced-colors_text-brand'),
                name: 'text-brand',
            },
            {
                title: t('label_advanced-colors_text-brand-heavy'),
                name: 'text-brand-heavy',
            },
            {
                title: t('label_advanced-colors_line-brand'),
                name: 'line-brand',
            },
            {
                title: t('label_advanced-colors_base-selection'),
                name: 'base-selection',
            },
            {
                title: t('label_advanced-colors_base-selection-hover'),
                name: 'base-selection-hover',
            },
        ],
        [locale],
    );

    const additionalColorsOptions = useMemo<EditableColorOption[]>(
        () => [
            {
                title: t('label_additional-colors_text-link'),
                name: 'text-link',
            },
            {
                title: t('label_additional-colors_text-link-hover'),
                name: 'text-link-hover',
            },
            {
                title: t('label_additional-colors_text-link-visited'),
                name: 'text-link-visited',
            },
            {
                title: t('label_additional-colors_text-link-visited-hover'),
                name: 'text-link-visited-hover',
            },
        ],
        [locale],
    );

    const {advancedModeEnabled, showMainSettings} = useThemeCreator();
    const {setAdvancedMode, openMainSettings} = useThemeCreatorMethods();

    const toggleAdvancedMode = useCallback(
        () => setAdvancedMode(!advancedModeEnabled),
        [setAdvancedMode, advancedModeEnabled],
    );

    return (
        <Flex direction="column" className={b('wrapper')}>
            {showMainSettings ? (
                <MainSettings
                    advancedModeEnabled={advancedModeEnabled}
                    toggleAdvancedMode={toggleAdvancedMode}
                />
            ) : (
                <Button
                    className={b('switch-button')}
                    onClick={openMainSettings}
                    view="normal"
                    size="xl"
                >
                    <Icon data={Sliders} size={20} />
                    {t('action_edit-theme')}
                </Button>
            )}

            {advancedModeEnabled && (
                <Fragment>
                    <BasicPalette />
                    <PrivateColorsSettings
                        title={t('advanced_brand_palette')}
                        cardsTitle={
                            <Trans i18nKey="palette_colors_description" t={t}>
                                <br />
                            </Trans>
                        }
                        options={advancedColorsOptions}
                    />
                    <PrivateColorsSettings
                        title={t('additional_colors')}
                        cardsTitle={t('label_links-color')}
                        options={additionalColorsOptions}
                    />
                </Fragment>
            )}
        </Flex>
    );
};
