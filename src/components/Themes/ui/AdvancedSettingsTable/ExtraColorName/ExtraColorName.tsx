import {PencilToLine, TrashBin} from '@gravity-ui/icons';
import {Button, Flex, Icon, Text, TextInput} from '@gravity-ui/uikit';
import {useCallback, useRef, useState} from 'react';

import {block} from '../../../../../utils';
import {useThemeCreatorMethods} from '../../../hooks';
import {createColorToken, createTitleFromToken} from '../../../lib/themeCreatorUtils';

import './ExtraColorName.scss';

export interface ExtraColorNameProps {
    token: string;
}

const b = block('extra-color-name');

export const ExtraColorName = ({token}: ExtraColorNameProps) => {
    const [mode, setMode] = useState<'edit' | 'view'>('view');

    const {removeColor, renameColor} = useThemeCreatorMethods();
    const nameInputRef = useRef<HTMLInputElement | null>(null);

    const handleChangeMode = useCallback(() => {
        if (mode === 'view') {
            setMode('edit');
            return;
        } else if (nameInputRef.current && nameInputRef.current.value) {
            const newToken = createColorToken(nameInputRef.current?.value);

            if (newToken !== token) {
                renameColor({oldTitle: token, newTitle: newToken});
            }
        }

        setMode('view');
    }, [mode]);

    const handleDelete = useCallback(() => {
        removeColor(token);
    }, [removeColor, name]);

    return (
        <Flex gap={2} justifyContent="space-between" alignItems="center">
            {mode === 'view' ? (
                <Text variant="body-1" color="primary">
                    {token}
                </Text>
            ) : (
                <TextInput
                    defaultValue={token}
                    controlRef={(node) => {
                        if (node) {
                            nameInputRef.current = node;
                            nameInputRef.current.value = createTitleFromToken(token);
                        }
                    }}
                    onBlur={handleChangeMode}
                />
            )}
            <Flex gap={2}>
                <Button
                    view={mode === 'view' ? 'flat' : 'action'}
                    size="s"
                    onClick={handleChangeMode}
                >
                    <Icon data={PencilToLine} />
                </Button>

                <Button view="flat" size="s" onClick={handleDelete}>
                    <Icon data={TrashBin} className={b('delete-icon')} />
                </Button>
            </Flex>
        </Flex>
    );
};
