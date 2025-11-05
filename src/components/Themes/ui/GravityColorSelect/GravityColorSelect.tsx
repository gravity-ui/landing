import {ChevronDown, PencilToLine} from '@gravity-ui/icons';
import {
    Button,
    type ButtonProps,
    Flex,
    Icon,
    Popup,
    Sheet,
    TextInput,
    type TextInputProps,
    ThemeProvider,
} from '@gravity-ui/uikit';
import {
    isInternalPrivateColorReference,
    isInternalUtilityColorReference,
    parseInternalUtilityColorReference,
} from '@gravity-ui/uikit-themer';
import React from 'react';

import {useIsMobile} from '../../../../hooks/useIsMobile';
import {block} from '../../../../utils';
import type {SemanticColorGroup} from '../../hooks/useThemeSemanticColorOption';
import {ColorPickerInput} from '../ColorPickerInput/ColorPickerInput';
import {ColorPreview} from '../ColorPreview/ColorPreview';

import {ColorSelectPopupContent} from './ColorSelectPopupContent';
import './GravityColorSelect.scss';
import type {BaseColor, ColorGroup} from './types';

const b = block('private-colors-select');

interface GravityColorSelectProps {
    value?: string;
    defaultValue: string;
    onChange: (color: string, ref?: string) => void;
    privateGroups: ColorGroup[];
    semanticGroups?: SemanticColorGroup[];
    inputProps?: Pick<TextInputProps, 'size' | 'view'>;
    buttonProps?: Pick<ButtonProps, 'size'>;
}

export const GravityColorSelect = ({
    privateGroups,
    semanticGroups,
    value,
    defaultValue,
    onChange,
    inputProps,
    buttonProps,
}: GravityColorSelectProps) => {
    const isMobile = useIsMobile();

    const [containerElement, setContainerElement] = React.useState<HTMLDivElement | null>(null);
    const [showPopup, setShowPopup] = React.useState(false);
    const isCustomValue =
        !isInternalPrivateColorReference(value) && !isInternalUtilityColorReference(value);

    const handleChange = React.useCallback(
        (newVal: string, newRef?: string) => {
            onChange(newVal, newRef);
            setShowPopup(false);
        },
        [onChange],
    );

    const switchMode = React.useCallback(() => {
        if (isCustomValue) {
            onChange(defaultValue);
        } else {
            onChange('');
            setShowPopup(false);
        }
    }, [isCustomValue, onChange, defaultValue, showPopup]);

    const selectedColor = React.useMemo(() => {
        const isUtilityColor = isInternalUtilityColorReference(value);

        if (isUtilityColor && value) {
            const tokenName = parseInternalUtilityColorReference(value);
            let semanticItem: BaseColor | undefined;

            semanticGroups?.forEach((group) =>
                group.groups.forEach((nestedGroup) =>
                    nestedGroup.items.forEach((item) => {
                        if (item.name === tokenName) {
                            semanticItem = item;
                            return;
                        }
                    }),
                ),
            );

            return semanticItem;
        }

        const colorGroup = value
            ? privateGroups.find((group) =>
                  group.privateColors.some((color) => color.token === value),
              )
            : undefined;

        return value
            ? colorGroup?.privateColors?.find((color) => color.token === value)
            : undefined;
    }, [privateGroups, value]);

    const toggleShowPopup = React.useCallback(() => setShowPopup((prev) => !prev), []);
    const closePopup = React.useCallback(() => setShowPopup(false), []);

    const handleClickArrowButton = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
            event.stopPropagation();
            toggleShowPopup();
        },
        [toggleShowPopup],
    );

    return (
        <Flex className={b()} ref={setContainerElement} gap={1}>
            {isCustomValue ? (
                <ColorPickerInput
                    value={value}
                    withBorderInPreview
                    size={inputProps?.size}
                    defaultValue={value || ''}
                    onChange={onChange}
                    view={inputProps?.view}
                />
            ) : (
                <TextInput
                    className={b('input')}
                    value={selectedColor?.title || ''}
                    view={inputProps?.view}
                    size={inputProps?.size ?? 'l'}
                    startContent={
                        <ColorPreview
                            className={b('preview')}
                            color={selectedColor?.color}
                            withBorders
                        />
                    }
                    endContent={
                        <Flex gap={1}>
                            <Button
                                className={b('arrow-button')}
                                view="flat-secondary"
                                onClick={handleClickArrowButton}
                            >
                                <Icon data={ChevronDown} />
                            </Button>
                        </Flex>
                    }
                    controlProps={{
                        readOnly: true,
                    }}
                    onFocus={toggleShowPopup}
                />
            )}
            <Button
                className={b('customize-button')}
                size={buttonProps?.size ?? 'l'}
                view="flat"
                onClick={switchMode}
                selected={isCustomValue}
            >
                <Icon data={PencilToLine} />
            </Button>
            <ThemeProvider theme="dark">
                {isMobile ? (
                    <Sheet
                        title="Pick color"
                        contentClassName={b('sheet-content')}
                        visible={showPopup}
                        onClose={closePopup}
                    >
                        <ColorSelectPopupContent
                            privateGroups={privateGroups}
                            value={value}
                            onChange={handleChange}
                            version="mobile"
                        />
                    </Sheet>
                ) : (
                    <Popup
                        anchorElement={containerElement}
                        open={showPopup}
                        returnFocus={false}
                        onOpenChange={(open) => {
                            if (!open) {
                                closePopup();
                            }
                        }}
                    >
                        <ColorSelectPopupContent
                            privateGroups={privateGroups}
                            semanticGroups={semanticGroups}
                            value={value}
                            onChange={handleChange}
                        />
                    </Popup>
                )}
            </ThemeProvider>
        </Flex>
    );
};
