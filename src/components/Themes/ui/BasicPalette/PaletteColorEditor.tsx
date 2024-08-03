import {TrashBin} from '@gravity-ui/icons';
import {Button, Icon, Text, TextInput} from '@gravity-ui/uikit';
import debounce from 'lodash/debounce';
import React from 'react';

import {block} from '../../../../utils';
import {Palette} from '../../lib/types';

import './PaletteColorEditor.scss';

const b = block('theme-palette-color-editor');

interface PaletteColorEditorProps {
    paletteColorData: Palette[0];
    onUpdateTitle: (params: {oldTitle: string; newTitle: string}) => void;
    onDelete: (title: string) => void;
}

export const PaletteColorEditor: React.FC<PaletteColorEditorProps> = ({
    onDelete,
    onUpdateTitle,
    paletteColorData,
}) => {
    const {title, isCustom} = paletteColorData;

    const [localTitle, setLocalTitle] = React.useState(title);

    React.useEffect(() => {
        setLocalTitle(title);
    }, [title]);

    const handleDelete = React.useCallback(() => onDelete(title), [onDelete, title]);

    const updateTitle = React.useCallback(
        (newTitle: string) => onUpdateTitle({oldTitle: title, newTitle}),
        [title, onUpdateTitle],
    );

    const debouncedUpdateTitle = React.useMemo(() => debounce(updateTitle, 500), [updateTitle]);

    const handleUpdateTitle = React.useCallback(
        (newTitle: string) => {
            setLocalTitle(newTitle);
            debouncedUpdateTitle(newTitle);
        },
        [debouncedUpdateTitle],
    );

    if (!isCustom) {
        return (
            <div className={b('default-title')}>
                <Text variant="body-2">{title}</Text>
            </div>
        );
    }

    return (
        <div className={b()}>
            <TextInput
                controlProps={{
                    className: b('input'),
                }}
                size="l"
                view="normal"
                value={localTitle}
                onUpdate={handleUpdateTitle}
                startContent={
                    <Text variant="subheader-1" className={b('input-title')}>
                        Name:
                    </Text>
                }
            />
            <div className={b('header')}>
                <Text className={b('title')} variant="subheader-2">
                    New color
                </Text>
                <Button size="l" onClick={handleDelete}>
                    <Icon data={TrashBin} size={16} />
                </Button>
            </div>
        </div>
    );
};
