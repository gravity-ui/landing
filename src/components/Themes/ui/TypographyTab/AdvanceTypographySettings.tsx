import {FormRow} from '@gravity-ui/components';
import {Card, Flex, Select, Slider, Text, TextInput, TextProps} from '@gravity-ui/uikit';
import React, {useMemo} from 'react';

import {block} from '../../../../utils';
import {useThemeCreator, useThemeCreatorMethods} from '../../hooks';
import {DefaultFontFamilyType, FONT_WEIGHTS, TextVariants} from '../../lib/typography/constants';

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
                <Flex gap={8} key={key} className={b('raw-wrapper')} justifyContent="space-between">
                    <Flex direction="column" gap={8} width="400px">
                        <Text variant="display-2">{setting.title}</Text>

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
                                        key: key as TextVariants,
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
                        <FormRow direction="column" label="Font Weight">
                            <Slider
                                min={FONT_WEIGHTS[0]}
                                max={FONT_WEIGHTS[FONT_WEIGHTS.length - 1]}
                                availableValues={FONT_WEIGHTS}
                                value={setting.fontWeight}
                                onUpdate={(fontWeight) => {
                                    updateAdvancedTypographySettings({
                                        key: key as TextVariants,
                                        fontWeight: fontWeight as number,
                                    });
                                }}
                            />
                        </FormRow>
                    </Flex>

                    <Card className={b('settings-card')}>
                        <Flex
                            direction="column"
                            gap={5}
                            justifyContent="center"
                            width="100%"
                            height="100%"
                        >
                            {Object.entries(setting.sizes).map(([sizeKey, sizeData]) => (
                                <Flex
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    key={sizeKey}
                                >
                                    <Text variant="body-2">{sizeData.title}</Text>
                                    <Flex gap={4}>
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
                                                    key: key as TextVariants,
                                                    sizeKey: sizeKey as TextProps['variant'],
                                                    fontSize: calculatedFontSize,
                                                });
                                            }}
                                            type="number"
                                            endContent={<EndContent />}
                                        />

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
                                                    key: key as TextVariants,
                                                    sizeKey: sizeKey as TextProps['variant'],
                                                    lineHeight: calculatedLineHeight,
                                                });
                                            }}
                                            type="number"
                                            controlProps={{min: 1}}
                                            endContent={<EndContent />}
                                        />
                                    </Flex>
                                </Flex>
                            ))}
                        </Flex>
                    </Card>
                </Flex>
            ))}
        </Flex>
    );
};
