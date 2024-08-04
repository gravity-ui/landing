import {Dialog, Flex} from '@gravity-ui/uikit';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {block} from '../../../../utils';
import {CodeExample} from '../../../CodeExample/CodeExample';
import {useThemeCreator} from '../../hooks';
import {ExportFormat, exportThemeForDialog} from '../../lib/themeCreatorExport';

import './ThemeExportDialog.scss';

const b = block('theme-export-dialog');

interface ThemeExportDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ThemeExportDialog: React.FC<ThemeExportDialogProps> = ({isOpen, onClose}) => {
    const {t} = useTranslation('themes');
    const themeState = useThemeCreator();

    const [format] = React.useState<ExportFormat>('scss');

    const themeStyles = React.useMemo(
        () => exportThemeForDialog({themeState, format}),
        [themeState, format],
    );

    return (
        <Dialog className={b()} open={isOpen} onClose={onClose} size="l">
            <Dialog.Header caption={t('export_theme_config')} />
            <Dialog.Body>
                <Flex direction="column" gap={2}>
                    <CodeExample code={themeStyles} className={b('code')} />
                </Flex>
            </Dialog.Body>
            <div style={{height: '20px'}} />
        </Dialog>
    );
};
