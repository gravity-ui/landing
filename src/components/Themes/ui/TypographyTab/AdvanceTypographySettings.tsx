import {FormRow} from '@gravity-ui/components';
import {Card, Col, Flex, Row, Select, Slider, Text, TextInput} from '@gravity-ui/uikit';
import {TEXT_VARIANTS, TextGroup} from '@gravity-ui/uikit-themer';
import capitalize from 'lodash/upperFirst';
import React, {useMemo} from 'react';

import {block} from '../../../../utils';
import {useThemeCreator, useThemeCreatorMethods} from '../../hooks';
import {
    DEFAULT_FONT_FAMILIES,
    DefaultFontFamily,
    DefaultFontFamilyType,
    FONT_WEIGHTS,
} from '../../lib/typography/constants';

import './TypographyTab.scss';

const b = block('typography-tab__advance-settings');

const EndContent = () => (
    <Text variant="caption-2" color="secondary" className={b('input-setting-end-content')}>
        px
    </Text>
);

export const AdvanceTypographySettings = () => {
    const {
        gravityTheme: {
            typography: {groups, variants, fontFamilies},
        },
    } = useThemeCreator();

    const {updateAdvancedTypographySettings} = useThemeCreatorMethods();

    const fontTypeOptions = useMemo(() => {
        return Object.keys(fontFamilies).map((key) => {
            let content = key.replaceAll('-', ' ');
            if (DEFAULT_FONT_FAMILIES.includes(key as DefaultFontFamily)) {
                content = `${content} Font Family`;
            }

            return {
                value: key,
                content: capitalize(content),
            };
        });
    }, [fontFamilies]);

    return (
        <Flex direction="column" className={b('wrapper')}>
            {Object.entries(groups).map(([group, setting]) => (
                <Row space={8} spaceRow={0} key={group} className={b('row')}>
                    <Col s="12" l="4">
                        <Row spaceRow={8} space={0}>
                            <Col s="12">
                                <Text variant="display-2">{capitalize(group)}</Text>
                            </Col>
                            <Col s="12">
                                <FormRow
                                    direction="column"
                                    fieldId={`font-family-${group}`}
                                    label="Font Family"
                                >
                                    <Select
                                        className={b('font-select')}
                                        size="xl"
                                        value={[setting['font-family']]}
                                        onUpdate={(fontFamilyType) => {
                                            updateAdvancedTypographySettings({
                                                key: group as TextGroup,
                                                selectedFontFamilyType:
                                                    fontFamilyType[0] as DefaultFontFamilyType,
                                            });
                                        }}
                                        width="max"
                                        name={`font-family-${group}`}
                                        id={`font-family-${group}`}
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
                                        step={100}
                                        value={
                                            typeof setting['font-weight'] === 'string'
                                                ? parseInt(setting['font-weight'], 10)
                                                : setting['font-weight']
                                        }
                                        onUpdate={(fontWeight) => {
                                            updateAdvancedTypographySettings({
                                                key: group as TextGroup,
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
                                {Object.values(TEXT_VARIANTS[group as TextGroup]).map((sizeKey) => (
                                    <Row
                                        key={sizeKey}
                                        space={4}
                                        spaceRow={5}
                                        style={{alignItems: 'center'}}
                                    >
                                        <Col s="12" m="3">
                                            <Text variant="body-2">
                                                {capitalize(sizeKey.replaceAll('-', ' '))}
                                            </Text>
                                        </Col>
                                        <Col s="12" m="9">
                                            <Row space={4}>
                                                <Col s="12" m="6">
                                                    <TextInput
                                                        className={b('setting-input')}
                                                        label="Font Size:"
                                                        value={variants[sizeKey][
                                                            'font-size'
                                                        ].replace('px', '')}
                                                        size="xl"
                                                        onUpdate={(fontSize) => {
                                                            const calculatedFontSize =
                                                                Number(fontSize) < 0
                                                                    ? 0
                                                                    : Number(fontSize) > 50
                                                                    ? 50
                                                                    : Number(fontSize);

                                                            updateAdvancedTypographySettings({
                                                                key: group as TextGroup,
                                                                sizeKey: sizeKey,
                                                                fontSize: `${calculatedFontSize}px`,
                                                            });
                                                        }}
                                                        type="number"
                                                        endContent={<EndContent />}
                                                    />
                                                </Col>
                                                <Col s="12" m="6">
                                                    <TextInput
                                                        label="Line Height:"
                                                        value={variants[sizeKey][
                                                            'line-height'
                                                        ].replace('px', '')}
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
                                                                key: group as TextGroup,
                                                                sizeKey: sizeKey,
                                                                lineHeight: `${calculatedLineHeight}px`,
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
