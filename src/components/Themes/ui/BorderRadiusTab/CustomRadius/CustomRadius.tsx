import {Col, Flex, Row, Text, TextInput, TextInputProps} from '@gravity-ui/uikit';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {block} from '../../../../../utils';
import {ThemeSection} from '../../ThemeSection';

import './CustomRadius.scss';

const b = block('custom-radius');

type RadiusInputProps = {
    radiusSizeName: string;
} & TextInputProps;

const RadiusInputRow = ({radiusSizeName: radiusName, ...textInputProps}: RadiusInputProps) => (
    <Row space={4} className={b('radius-input-row')}>
        <Col m="6" l="4">
            <Text variant="body-3">{radiusName}</Text>
        </Col>
        <Col m="6" l="4">
            <TextInput
                {...textInputProps}
                size="xl"
                endContent={
                    <Text variant="caption-2" color="secondary" className={b('px')}>
                        px
                    </Text>
                }
            />
        </Col>
    </Row>
);

export const CustomRadius = () => {
    const {t} = useTranslation('themes');

    return (
        <ThemeSection className={b()} title={t('choose_border_radius')}>
            <Flex direction="column" gap={6}>
                <RadiusInputRow radiusSizeName={t('radius') + ' XS'} />
                <RadiusInputRow radiusSizeName={t('radius') + ' M'} />
                <RadiusInputRow radiusSizeName={t('radius') + ' L'} />
                <RadiusInputRow radiusSizeName={t('radius') + ' XL'} />
                <RadiusInputRow radiusSizeName={t('radius') + ' 2XL'} />
            </Flex>
        </ThemeSection>
    );
};
