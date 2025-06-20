import {ChevronDown, PencilToLine} from '@gravity-ui/icons';
import {Button, Flex, Icon, Popup, Sheet, TextInput, ThemeProvider} from '@gravity-ui/uikit';
import React from 'react';

import {useIsMobile} from '../../../../hooks/useIsMobile';
import {block} from '../../../../utils';
import {isPrivateColorToken} from '../../lib/themeCreatorUtils';
import {ColorPickerInput} from '../ColorPickerInput/ColorPickerInput';
import {ColorPreview} from '../ColorPreview/ColorPreview';

import './PrivateColorSelect.scss';
import {PrivateColorSelectPopupContent} from './PrivateColorSelectPopupContent';
import type {ColorGroup} from './types';

const b = block('private-colors-select');

interface PrivateColorSelectProps {
    value?: string;
    defaultValue: string;
    onChange: (color: string) => void;
    groups: ColorGroup[];
}

export const PrivateColorSelect: React.FC<PrivateColorSelectProps> = ({
    groups,
    value,
    defaultValue,
    onChange,
}) => {
    const isMobile = useIsMobile();

    const [containerElement, setContainerElement] = React.useState<HTMLDivElement | null>(null);
    const [showPopup, setShowPopup] = React.useState(false);
    const isCustomValue = !isPrivateColorToken(value);

    const handleChange = React.useCallback(
        (newVal: string) => {
            onChange(newVal);
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

    const privateColor = React.useMemo(() => {
        const colorGroup = value
            ? groups.find((group) => group.privateColors.some((color) => color.token === value))
            : undefined;

        return value
            ? colorGroup?.privateColors?.find((color) => color.token === value)
            : undefined;
    }, [groups, value]);

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
                <ColorPickerInput value={value} defaultValue={value || ''} onChange={onChange} />
            ) : (
                <TextInput
                    className={b('input')}
                    value={privateColor?.title || ''}
                    view="normal"
                    size="l"
                    startContent={
                        <ColorPreview className={b('preview')} color={privateColor?.color} />
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
                size="l"
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
                        <PrivateColorSelectPopupContent
                            groups={groups}
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
                        <PrivateColorSelectPopupContent
                            groups={groups}
                            value={value}
                            onChange={handleChange}
                        />
                    </Popup>
                )}
            </ThemeProvider>
        </Flex>
    );
};
