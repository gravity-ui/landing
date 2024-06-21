import {Col, Row} from '@gravity-ui/uikit';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {RadiusPresetName} from 'src/components/Themes/lib/constants';

import {block} from '../../../../../utils';
import {ThemeSection} from '../../ThemeSection';
import {BorderCard, BorderCardProps} from '../BorderCard/BorderCard';

const b = block('border-options');

const ColCard = (props: BorderCardProps) => (
    <Col s="6" m="3">
        <BorderCard {...props} />
    </Col>
);

const OPTIONS_ORDER = [
    RadiusPresetName.Regular,
    RadiusPresetName.Circled,
    RadiusPresetName.Squared,
    RadiusPresetName.Custom,
];

export const BorderOptions = () => {
    const {t} = useTranslation('themes');
    const [selectedPreset, setSelectedPreset] = useState(RadiusPresetName.Regular);

    return (
        <ThemeSection title={t('tags_borderRadius')}>
            <Row space={4} className={b()}>
                {OPTIONS_ORDER.map((preset) => (
                    <ColCard
                        key={preset}
                        onClick={setSelectedPreset}
                        preset={preset}
                        selected={selectedPreset === preset}
                    />
                ))}
            </Row>
        </ThemeSection>
    );
};
