import {CircleQuestion} from '@gravity-ui/icons';
import {Button, Flex, Icon} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import {useMemo} from 'react';

import {block} from '../../../../../utils';
import {type TagItem, Tags} from '../../../../Tags/Tags';
import {useThemeCreator, useThemeCreatorMethods} from '../../../hooks/useThemeCreator';
import type {AdvancedColorType} from '../../../lib/types';
import {AdvancedSettingsTable} from '../../AdvancedSettingsTable/AdvancedSettingsTable';
import {ThemeSection} from '../../ThemeSection';

const b = block('advanced-color-settings');

export const AdvancedSettings = () => {
    const {t} = useTranslation('themes');
    const {advancedColorType} = useThemeCreator();
    const {setAdvancedColorType} = useThemeCreatorMethods();

    const tags: TagItem<AdvancedColorType>[] = useMemo(
        () => [
            {
                value: 'basic-palette',
                title: t('title_advance-color-settings-basic-palette'),
            },
            {
                value: 'brand-summary',
                title: t('title_advance-color-settings-brand-summary'),
            },
            {
                value: 'texts',
                title: t('title_advance-color-settings-texts'),
            },
            {
                value: 'backgrounds',
                title: t('title_advance-color-settings-backgrounds'),
            },
            {
                value: 'lines',
                title: t('title_advance-color-settings-lines'),
            },
            {
                value: 'effects',
                title: t('title_advance-color-settings-effects'),
            },
            {
                value: 'misc',
                title: t('title_advance-color-settings-misc'),
            },
        ],
        [t],
    );

    return (
        <ThemeSection
            title="Colors setup"
            titleActions={
                <Button size="xl" className={b('learn-more-button')} disabled>
                    <Icon data={CircleQuestion} />
                    {t('action_learn-more')}
                </Button>
            }
        >
            <Flex direction="column">
                <Tags
                    className={b('tags')}
                    items={tags}
                    value={advancedColorType}
                    onChange={setAdvancedColorType}
                />
            </Flex>

            <AdvancedSettingsTable colorType={advancedColorType} />
        </ThemeSection>
    );
};
