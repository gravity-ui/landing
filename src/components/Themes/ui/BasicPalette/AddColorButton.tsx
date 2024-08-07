import {Plus} from 'landing-icons';
import {Button, Icon} from 'landing-uikit';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {block} from '../../../../utils';

import './AddColorButton.scss';

const b = block('theme-palette-add-color-button');

interface AddColorButtonProps {
    onClick: () => void;
}

export const AddColorButton: React.FC<AddColorButtonProps> = ({onClick}) => {
    const {t} = useTranslation('themes');

    return (
        <Button className={b()} onClick={onClick} view="outlined-action" size="xl">
            <Icon data={Plus} size={20} /> {t('add_color')}
        </Button>
    );
};
