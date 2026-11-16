import {useTranslation} from 'next-i18next';
import React from 'react';

import {block} from '../../../../utils/block';
import {ThemeActionSheet} from '../ThemeActionSheet/ThemeActionSheet';

const b = block('theme-submit');

interface ThemeSubmitSheetProps extends React.PropsWithChildren {
    isOpen: boolean;
    onClose: () => void;
    buttons: React.ReactNode;
}

export const ThemeSubmitSheet = ({isOpen, onClose, buttons, children}: ThemeSubmitSheetProps) => {
    const {t} = useTranslation('themes');
    return (
        <ThemeActionSheet
            open={isOpen}
            onClose={onClose}
            title={t('submit_theme_title')}
            bottomContentWrapperClassName={b('sheet-buttons')}
            bottomContent={buttons}
        >
            {children}
        </ThemeActionSheet>
    );
};
