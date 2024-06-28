import {Dialog, Flex, Select, SelectOption} from '@gravity-ui/uikit';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {block} from '../../../../utils';
import {CodeExample} from '../../../CodeExample/CodeExample';
import {useThemeCreator} from '../../hooks';
import {ExportFormat, exportThemeForDialog} from '../../lib/themeCreatorExport';

import './ThemeExportDialog.scss';

const b = block('theme-export-dialog');

const formatOptions: SelectOption[] = [
    {
        content: 'SCSS',
        value: 'scss',
    },
    {
        content: 'Figma',
        value: 'json',
    },
];

interface ThemeExportDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ThemeExportDialog: React.FC<ThemeExportDialogProps> = ({isOpen, onClose}) => {
    const {t} = useTranslation('themes');
    const themeState = useThemeCreator();

    const [format, setFormat] = React.useState<ExportFormat>('scss');

    const themeStyles = React.useMemo(
        () => exportThemeForDialog({themeState, format}),
        [themeState, format],
    );

    const handleChangeFormat = React.useCallback((value: string[]) => {
        setFormat(value[0] as ExportFormat);
    }, []);

    return (
        <Dialog className={b()} open={isOpen} onClose={onClose} size="l">
            <Dialog.Header caption={t('export_theme_config')} />
            <Dialog.Body>
                <Flex direction="column" gap={2}>
                    <Flex gap={2}>
                        <Select
                            size="m"
                            options={formatOptions}
                            value={[format]}
                            onUpdate={handleChangeFormat}
                        />
                    </Flex>
                    <CodeExample code={themeStyles} className={b('code')} />
                </Flex>
            </Dialog.Body>
            <Dialog.Footer onClickButtonCancel={onClose} textButtonCancel={t('cancel')} />
        </Dialog>
    );
};
