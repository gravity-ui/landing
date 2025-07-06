import {Col, Flex, Row, Text, TextInput} from '@gravity-ui/uikit';
import type {BorderSize, BordersOptions} from '@gravity-ui/uikit-themer';
import {useTranslation} from 'next-i18next';
import React, {useCallback, useMemo} from 'react';
import {UpdateCustomRadiusPresetInThemeParams} from 'src/components/Themes/lib/themeCreatorUtils';

import {block} from '../../../../../utils';
import {ThemeSection} from '../../ThemeSection';

import './CustomRadius.scss';

const b = block('custom-radius');

type RadiusInputProps = {
    radiusSizeName: BorderSize;
    onUpdate: (param: UpdateCustomRadiusPresetInThemeParams) => void;
    value?: string;
};

const RadiusInputRow = ({radiusSizeName, onUpdate, value}: RadiusInputProps) => {
    const {t} = useTranslation('themes');

    const text = useMemo(() => t('radius') + ` ${radiusSizeName.toUpperCase()}`, [radiusSizeName]);

    const handleUpdate = useCallback(
        (newValue: string) => {
            onUpdate({radiusValue: {[radiusSizeName]: `${newValue}px`}});
        },
        [radiusSizeName],
    );

    const numberValue = useMemo(() => {
        if (!value) {
            return undefined;
        }

        const number = parseInt(value, 10);
        return Number.isNaN(number) ? undefined : number.toString();
    }, [value]);

    return (
        <Row space={4} className={b('radius-input-row')}>
            <Col m="6" l="4">
                <Text variant="body-3">{text}</Text>
            </Col>
            <Col m="6" l="4">
                <TextInput
                    value={numberValue}
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
    values: BordersOptions;
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
