import {TrashBin} from '@gravity-ui/icons';
import {Button, Flex, Icon, Text, TextInput, sp} from '@gravity-ui/uikit';
import debounce from 'lodash/debounce';
import React from 'react';

import {Palette} from '../../lib/types';

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
            <div className={sp({py: 2})}>
                <Text variant="body-2">{title}</Text>
            </div>
        );
    }

    return (
        <Flex gap={2}>
            <TextInput size="l" view="normal" value={localTitle} onUpdate={handleUpdateTitle} />
            <Button size="l" onClick={handleDelete}>
                <Icon data={TrashBin} size={16} />
            </Button>
        </Flex>
    );
};
