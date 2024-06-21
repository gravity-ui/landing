import {CircleCheckFill} from '@gravity-ui/icons';
import {Card, Text} from '@gravity-ui/uikit';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {RADIUS_PRESETS, RadiusPresetName, RadiusSize} from 'src/components/Themes/lib/constants';

import {block} from '../../../../../utils';

import './BorderCard.scss';

const b = block('border-card');

export type BorderCardProps = {
    preset: RadiusPresetName;
    selected: boolean;
    onClick: (preset: RadiusPresetName) => void;
};

const FakeButton = ({preset, text}: {preset: RadiusPresetName; text: string}) => (
    <div
        className={b('fake-button')}
        style={{borderRadius: RADIUS_PRESETS[preset]?.[RadiusSize.m]}}
    >
        <Text color="inverted-primary">{text}</Text>
    </div>
);

export const BorderCard = ({selected, preset, onClick}: BorderCardProps) => {
    const {t} = useTranslation('themes');

    const handleClick = useCallback(() => {
        onClick(preset);
    }, [preset]);

    const displayName = t(preset);

    return (
        <Card className={b()} type="selection" selected={selected} onClick={handleClick}>
            {preset === RadiusPresetName.Custom ? (
                <Text variant="body-2">{displayName}</Text>
            ) : (
                <FakeButton preset={preset} text={displayName} />
            )}
            {selected && <CircleCheckFill className={b('icon')} />}
        </Card>
    );
};
