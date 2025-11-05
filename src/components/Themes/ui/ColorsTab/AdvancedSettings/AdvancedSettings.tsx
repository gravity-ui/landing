import {CircleQuestion} from '@gravity-ui/icons';
import {Button, Flex, Icon} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import {useMemo, useState} from 'react';

import {block} from '../../../../../utils';
import {type TagItem, Tags} from '../../../../Tags/Tags';
import type {AdvancedColorType} from '../../../lib/types';
import {AdvancedSettingsTable} from '../../AdvancedSettingsTable/AdvancedSettingsTable';
import {ThemeSection} from '../../ThemeSection';

const b = block('advanced-color-settings');

export const AdvancedSettings = () => {
    const {t} = useTranslation('themes');
    const [activeTab, setActiveTab] = useState<AdvancedColorType>('basic-palette');

    const tags: TagItem<AdvancedColorType>[] = useMemo(
        () => [
            {
                value: 'basic-palette',
                title: 'Basic palette',
            },
            {
                value: 'brand-summary',
                title: 'Brand summary',
            },
            {
                value: 'texts',
                title: 'Texts',
            },
            {
                value: 'backgrounds',
                title: 'Backgrounds',
            },
            {
                value: 'lines',
                title: 'Lines',
            },
            {
                value: 'effects',
                title: 'Effects',
            },
            {
                value: 'misc',
                title: 'Misc',
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
                    Learn More
                </Button>
            }
        >
            <Flex direction="column">
                <Tags
                    className={b('tags')}
                    items={tags}
                    value={activeTab}
                    onChange={setActiveTab}
                />
            </Flex>

            <AdvancedSettingsTable colorType={activeTab} />
        </ThemeSection>
    );
};
