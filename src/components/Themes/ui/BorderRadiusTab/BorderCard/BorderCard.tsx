import {useTranslation} from 'next-i18next';
import React, {useCallback} from 'react';
import {SelectableCard} from 'src/components/SelectableCard/SelectableCard';
import {RADIUS_PRESETS} from 'src/components/Themes/lib/constants';
import {RadiusPresetName} from 'src/components/Themes/lib/types';

export type BorderCardProps = {
    preset: RadiusPresetName;
    selected: boolean;
    onClick: (preset: RadiusPresetName) => void;
};

export const BorderCard = ({selected, preset, onClick}: BorderCardProps) => {
    const {t} = useTranslation('themes');

    const handleClick = useCallback(() => {
        onClick(preset);
    }, [preset]);

    const displayName = t(preset);
    const borderRadiusStyle = {borderRadius: RADIUS_PRESETS[preset]?.m};

    return (
        <SelectableCard
            text={displayName}
            onClick={handleClick}
            selected={selected}
            pureText={preset === RadiusPresetName.Custom}
            textProps={{style: borderRadiusStyle}}
        />
    );
};
