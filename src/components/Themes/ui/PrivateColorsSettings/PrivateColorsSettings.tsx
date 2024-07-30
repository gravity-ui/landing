import React from 'react';
import {Trans, useTranslation} from 'react-i18next';

import {block} from '../../../../utils';
import {useThemePrivateColorOptions, useThemeUtilityColor} from '../../hooks';
import {DEFAULT_THEME} from '../../lib/constants';
import {ThemeColorOption} from '../../lib/themeCreatorUtils';
import type {ColorsOptions, ThemeVariant} from '../../lib/types';
import {PrivateColorSelect} from '../PrivateColorSelect';
import {ThemableSettings} from '../ThemableSettings/ThemableSettings';
import {ThemableRow} from '../ThemableSettings/types';
import {ThemeSection} from '../ThemeSection';

import './PrivateColorsSettings.scss';

const b = block('private-colors-settings');

interface PrivateColorEditorProps {
    name: keyof ColorsOptions;
    theme: ThemeVariant;
    colorGroups: ThemeColorOption[];
}

const PrivateColorEditor: React.FC<PrivateColorEditorProps> = ({name, theme, colorGroups}) => {
    const [color, setColor] = useThemeUtilityColor({
        name,
        theme,
    });

    return (
        <PrivateColorSelect
            groups={colorGroups}
            defaultValue={DEFAULT_THEME.colors[theme][name]}
            value={color}
            onChange={setColor}
        />
    );
};

export type EditableColorOption = {
    title: string;
    name: keyof ColorsOptions;
};

interface PrivateColorsSettingsProps {
    title: string;
    options: EditableColorOption[];
}

export const PrivateColorsSettings: React.FC<PrivateColorsSettingsProps> = ({title, options}) => {
    const {t} = useTranslation('themes');

    const themePrivateColorLightOptions = useThemePrivateColorOptions('light');
    const themePrivateColorDarkOptions = useThemePrivateColorOptions('dark');

    const rows = React.useMemo<ThemableRow[]>(() => {
        return options.map((option) => ({
            id: option.name,
            title: option.title,
            render: (theme) => (
                <PrivateColorEditor
                    name={option.name}
                    theme={theme}
                    colorGroups={
                        theme === 'light'
                            ? themePrivateColorLightOptions
                            : themePrivateColorDarkOptions
                    }
                />
            ),
        }));
    }, [options, themePrivateColorLightOptions, themePrivateColorDarkOptions]);

    return (
        <ThemeSection className={b()} title={title}>
            <ThemableSettings
                title={
                    <Trans i18nKey="palette_colors_description" t={t}>
                        <br />
                    </Trans>
                }
                rows={rows}
            />
        </ThemeSection>
    );
};
