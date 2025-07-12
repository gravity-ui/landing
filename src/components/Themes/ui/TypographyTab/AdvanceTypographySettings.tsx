import {FormRow} from '@gravity-ui/components';
import {Card, Col, Flex, Row, Select, Slider, Text, TextInput, TextProps} from '@gravity-ui/uikit';
import {TextGroup} from '@gravity-ui/uikit-themer';
import React, {useMemo} from 'react';

import {block} from '../../../../utils';
import {useThemeCreator, useThemeCreatorMethods} from '../../hooks';
import {DefaultFontFamilyType, FONT_WEIGHTS} from '../../lib/typography/constants';

import './TypographyTab.scss';

const b = block('typography-tab__advance-settings');

const EndContent = () => (
    <Text variant="caption-2" color="secondary" className={b('input-setting-end-content')}>
        px
    </Text>
);

export const AdvanceTypographySettings = () => {
    const {
        typography: {advanced, baseSetting},
    } = useThemeCreator();

    const {updateAdvancedTypographySettings} = useThemeCreatorMethods();

    const fontTypeOptions = useMemo(
        () => [...baseSetting.defaultFontFamilyType, ...baseSetting.customFontFamilyType],
        [baseSetting],
    );

    return (
        <Flex direction="column" className={b('wrapper')}>
            {Object.entries(advanced).map(([key, setting]) => (
                <Row space={8} spaceRow={0} key={key} className={b('row')}>
                    <Col s="12" l="4">
                        <Row spaceRow={8} space={0}>
                            <Col s="12">
                                <Text variant="display-2">{setting.title}</Text>
                            </Col>
                            <Col s="12">
                                <FormRow
                                    direction="column"
                                    fieldId={`font-family-${key}`}
                                    label="Font Family"
                                >
                                    <Select
                                        className={b('font-select')}
                                        size="xl"
                                        value={[setting.selectedFontFamilyType]}
                                        onUpdate={(fontFamilyType) => {
                                            updateAdvancedTypographySettings({
                                                key: key as TextGroup,
                                                selectedFontFamilyType:
                                                    fontFamilyType[0] as DefaultFontFamilyType,
                                            });
                                        }}
                                        width="max"
                                        name={`font-family-${key}`}
                                        id={`font-family-${key}`}
                                        placeholder="Choose font-family"
                                        options={fontTypeOptions}
                                    />
                                </FormRow>
                            </Col>
                            <Col s="12">
                                <FormRow direction="column" label="Font Weight">
                                    <Slider
                                        min={FONT_WEIGHTS[0]}
                                        max={FONT_WEIGHTS[FONT_WEIGHTS.length - 1]}
                                        marks={FONT_WEIGHTS}
                                        value={setting.fontWeight}
                                        onUpdate={(fontWeight) => {
                                            updateAdvancedTypographySettings({
                                                key: key as TextGroup,
                                                fontWeight: fontWeight as number,
                                            });
                                        }}
                                    />
                                </FormRow>
                            </Col>
                        </Row>
                    </Col>
                    <Col s="12" l="8">
                        <Card className={b('settings-card')}>
                            <Flex
                                direction="column"
                                gap={5}
                                justifyContent="center"
                                width="100%"
                                height="100%"
                            >
                                {Object.entries(setting.sizes).map(([sizeKey, sizeData]) => (
                                    <Row
                                        key={sizeKey}
                                        space={4}
                                        spaceRow={5}
                                        style={{alignItems: 'center'}}
                                    >
                                        <Col s="12" m="3">
                                            <Text variant="body-2">{sizeData.title}</Text>
                                        </Col>
                                        <Col s="12" m="9">
                                            <Row space={4}>
                                                <Col s="12" m="6">
                                                    <TextInput
                                                        className={b('setting-input')}
                                                        label="Font Size:"
                                                        value={sizeData.fontSize.toString()}
                                                        size="xl"
                                                        onUpdate={(fontSize) => {
                                                            const calculatedFontSize =
                                                                Number(fontSize) < 0
                                                                    ? 0
                                                                    : Number(fontSize) > 50
                                                                    ? 50
                                                                    : Number(fontSize);

                                                            updateAdvancedTypographySettings({
                                                                key: key as TextGroup,
                                                                sizeKey:
                                                                    sizeKey as TextProps['variant'],
                                                                fontSize: calculatedFontSize,
                                                            });
                                                        }}
                                                        type="number"
                                                        endContent={<EndContent />}
                                                    />
                                                </Col>
                                                <Col s="12" m="6">
                                                    <TextInput
                                                        label="Line Height:"
                                                        value={sizeData.lineHeight.toString()}
                                                        size="xl"
                                                        className={b('setting-input')}
                                                        onUpdate={(lineHeight) => {
                                                            const calculatedLineHeight =
                                                                Number(lineHeight) < 0
                                                                    ? 0
                                                                    : Number(lineHeight) > 50
                                                                    ? 50
                                                                    : Number(lineHeight);

                                                            updateAdvancedTypographySettings({
                                                                key: key as TextGroup,
                                                                sizeKey:
                                                                    sizeKey as TextProps['variant'],
                                                                lineHeight: calculatedLineHeight,
                                                            });
                                                        }}
                                                        type="number"
                                                        controlProps={{min: 1}}
                                                        endContent={<EndContent />}
                                                    />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                ))}
                            </Flex>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Flex>
    );
};
