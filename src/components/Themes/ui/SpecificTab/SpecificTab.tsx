import {Flex} from '@gravity-ui/uikit';
import React, {useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {block} from 'src/utils';

import {ILLUSTRATION_COLORS} from '../../lib/constants';
import {AdvancedSettingsTable} from '../AdvancedSettingsTable/AdvancedSettingsTable';
import {ExpandableThemeSection} from '../ExpandableThemeSection/ExpandableThemeSection';

import {IllustrationsPreview} from './IllustrationsPreview/IllustrationsPreview';
import './SpecificTab.scss';

const b = block('specific-tab');

export const SpecificTab = () => {
    const {t} = useTranslation('themes');

    const groups = useMemo(() => {
        return [{variables: ILLUSTRATION_COLORS}];
    }, []);

    return (
        <ExpandableThemeSection
            title={t('title_advance-color-settings-illustrations')}
            initialExpanded={true}
        >
            <Flex direction="column" gap={10}>
                <AdvancedSettingsTable
                    colorGroups={groups}
                    variablesTitle={t('title_advance-settings-table_title-variable')}
                    className={b('illustration-settings')}
                />
                <Flex direction="column" gap={8}>
                    <IllustrationsPreview theme="dark" />
                    <IllustrationsPreview theme="light" />
                </Flex>
            </Flex>
        </ExpandableThemeSection>
    );
};
