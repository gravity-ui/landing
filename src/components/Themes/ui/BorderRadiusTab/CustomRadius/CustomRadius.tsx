import {Col, Flex, Row, Text, TextInput} from 'landing-uikit';
import {useTranslation} from 'next-i18next';
import React, {useCallback, useMemo} from 'react';
import {UpdateCustomRadiusPresetInThemeParams} from 'src/components/Themes/lib/themeCreatorUtils';
import {RadiusSizeName, RadiusValue} from 'src/components/Themes/lib/types';

import {block} from '../../../../../utils';
import {ThemeSection} from '../../ThemeSection';

import './CustomRadius.scss';

const b = block('custom-radius');

type RadiusInputProps = {
    radiusSizeName: RadiusSizeName;
    onUpdate: (param: UpdateCustomRadiusPresetInThemeParams) => void;
    value?: string;
};

const RadiusInputRow = ({radiusSizeName, onUpdate, value}: RadiusInputProps) => {
    const {t} = useTranslation('themes');

    const text = useMemo(() => t('radius') + ` ${radiusSizeName.toUpperCase()}`, [radiusSizeName]);

    const handleUpdate = useCallback(
        (newValue: string) => {
            onUpdate({radiusValue: {[radiusSizeName]: newValue}});
        },
        [radiusSizeName],
    );

    return (
        <Row space={4} className={b('radius-input-row')}>
            <Col m="6" l="4">
                <Text variant="body-3">{text}</Text>
            </Col>
            <Col m="6" l="4">
                <TextInput
                    value={value}
                    size="xl"
                    onUpdate={handleUpdate}
                    type="number"
                    controlProps={{min: 0}}
                    endContent={
                        <Text variant="caption-2" color="secondary" className={b('px')}>
                            px
                        </Text>
                    }
                />
            </Col>
        </Row>
    );
};

type CustomRadiusProps = {
    values: RadiusValue;
    onUpdate: (param: UpdateCustomRadiusPresetInThemeParams) => void;
};

export const CustomRadius = ({onUpdate, values}: CustomRadiusProps) => {
    const {t} = useTranslation('themes');

    return (
        <ThemeSection className={b()} title={t('choose_border_radius')}>
            <Flex direction="column" gap={6}>
                <RadiusInputRow onUpdate={onUpdate} radiusSizeName="xs" value={values.xs} />
                <RadiusInputRow onUpdate={onUpdate} radiusSizeName="s" value={values.s} />
                <RadiusInputRow onUpdate={onUpdate} radiusSizeName="m" value={values.m} />
                <RadiusInputRow onUpdate={onUpdate} radiusSizeName="l" value={values.l} />
                <RadiusInputRow onUpdate={onUpdate} radiusSizeName="xl" value={values.xl} />
            </Flex>
        </ThemeSection>
    );
};
