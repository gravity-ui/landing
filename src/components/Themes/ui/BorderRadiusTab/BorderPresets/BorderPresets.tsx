import {Col, Row} from 'landing-uikit';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {ChangeRadiusPresetInThemeParams} from 'src/components/Themes/lib/themeCreatorUtils';
import {RadiusPresetName} from 'src/components/Themes/lib/types';

import {ThemeSection} from '../../ThemeSection';
import {BorderCard, BorderCardProps} from '../BorderCard/BorderCard';

const ColCard = (props: BorderCardProps) => (
    <Col s="6" m="3">
        <BorderCard {...props} />
    </Col>
);

const PRESETS_ORDER = [
    RadiusPresetName.Regular,
    RadiusPresetName.Circled,
    RadiusPresetName.Squared,
    RadiusPresetName.Custom,
];

export type BorderPresetsProps = {
    selectedPreset: RadiusPresetName;
    onClick: (preset: ChangeRadiusPresetInThemeParams) => void;
};

export const BorderPresets = ({selectedPreset, onClick}: BorderPresetsProps) => {
    const {t} = useTranslation('themes');

    const handleClick = useCallback((preset: RadiusPresetName) => {
        onClick({radiusPresetName: preset});
    }, []);

    return (
        <ThemeSection title={t('tags_borderRadius')}>
            <Row space={4}>
                {PRESETS_ORDER.map((preset) => (
                    <ColCard
                        key={preset}
                        onClick={handleClick}
                        preset={preset}
                        selected={selectedPreset === preset}
                    />
                ))}
            </Row>
        </ThemeSection>
    );
};
