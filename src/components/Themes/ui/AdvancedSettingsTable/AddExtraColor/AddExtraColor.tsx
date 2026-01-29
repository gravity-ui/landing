import {Plus} from '@gravity-ui/icons';
import {Button, Icon} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import {useCallback} from 'react';

import {block} from '../../../../../utils';
import {useThemeCreatorMethods} from '../../../hooks/useThemeCreator';

import './AddExtraColor.scss';

const b = block('add-extra-color');

export const AddExtraColor = () => {
    const {t} = useTranslation('themes');

    const {addColor} = useThemeCreatorMethods();

    const handleAddColor = useCallback(() => {
        addColor({
            colors: {
                light: '#000000',
                dark: '#000000',
            },
        });
    }, [addColor]);

    return (
        <div className={b()}>
            <Button view="flat" size="l" className={b('button')} onClick={handleAddColor}>
                <Icon data={Plus} size={12} />
                {t('action_add-extra-color')}
            </Button>
        </div>
    );
};
