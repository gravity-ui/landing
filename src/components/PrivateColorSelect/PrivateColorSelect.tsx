import {ChevronDown, PencilToLine} from '@gravity-ui/icons';
import {Button, Flex, Icon, Popup, TextInput} from '@gravity-ui/uikit';
import React from 'react';

import {block} from '../../utils';
import {ColorPreview} from '../ColorPreview/ColorPreview';

import './PrivateColorSelect.scss';
import {PrivateColorSelectPopupContent} from './PrivateColorSelectPopupContent';
import type {ColorGroup} from './types';

const b = block('private-colors-select');

interface PrivateColorSelectProps {
    value?: string;
    onChange: (color: string) => void;
    groups: ColorGroup[];
}

export const PrivateColorSelect: React.FC<PrivateColorSelectProps> = ({
    groups,
    value,
    onChange,
}) => {
    const containerRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);

    const privateColor = React.useMemo(() => {
        const colorGroup = value
            ? groups.find((group) => group.privateColors.some((color) => color.token === value))
            : undefined;

        return value
            ? colorGroup?.privateColors?.find((color) => color.token === value)
            : undefined;
    }, [groups, value]);

    const togglePopup = React.useCallback(() => setOpen((prev) => !prev), []);
    const handleClosePopup = React.useCallback(() => setOpen(false), []);

    return (
        <Flex className={b()} ref={containerRef} gap={1}>
            <TextInput
                value={privateColor?.title || ''}
                view="normal"
                size="l"
                startContent={<ColorPreview className={b('preview')} color={privateColor?.color} />}
                endContent={
                    <Button view="flat-secondary" onClick={togglePopup}>
                        <Icon data={ChevronDown} />
                    </Button>
                }
                controlProps={{
                    readOnly: true,
                }}
                onFocus={togglePopup}
            />
            <Button size="l" view="flat" onClick={togglePopup}>
                <Icon data={PencilToLine} />
            </Button>
            <Popup
                anchorRef={containerRef}
                open={open}
                modifiers={[{name: 'preventOverflow', enabled: false}]}
                onClose={handleClosePopup}
            >
                <PrivateColorSelectPopupContent groups={groups} value={value} onChange={onChange} />
            </Popup>
        </Flex>
    );
};
