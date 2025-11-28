import type {Theme, UtilityColor} from '@gravity-ui/uikit-themer';
import {
    DEFAULT_THEME,
    createInternalPrivateColorReference,
    isPrivateColorCssVariable,
    parsePrivateColorCssVariable,
} from '@gravity-ui/uikit-themer';
import React from 'react';

import {block} from '../../../../utils';
import {useThemePrivateColorOptions, useThemeUtilityColor} from '../../hooks';
import {ThemeColorOption} from '../../lib/themeCreatorUtils';
import {GravityColorSelect} from '../GravityColorSelect';
import {ThemableSettings} from '../ThemableSettings/ThemableSettings';
import {ThemableRow} from '../ThemableSettings/types';
import {ThemeSection} from '../ThemeSection';

import './PrivateColorsSettings.scss';

const b = block('private-colors-settings');

interface PrivateColorEditorProps {
    name: UtilityColor;
    theme: Theme;
    colorGroups: ThemeColorOption[];
}

const PrivateColorEditor: React.FC<PrivateColorEditorProps> = ({name, theme, colorGroups}) => {
    const [color, setColor] = useThemeUtilityColor({
        name,
        theme,
    });

    const defaultValue = React.useMemo(() => {
        const ref = DEFAULT_THEME.utilityColors[name][theme].ref;
        if (ref) {
            if (isPrivateColorCssVariable(ref)) {
                const {mainColorToken, privateColorToken} = parsePrivateColorCssVariable(ref);
                return createInternalPrivateColorReference(mainColorToken, privateColorToken);
            }

            return ref;
        }

        return DEFAULT_THEME.utilityColors[name][theme].value;
    }, [name, theme]);

    return (
        <GravityColorSelect
            privateGroups={colorGroups}
            defaultValue={defaultValue}
            value={color}
            onChange={setColor}
        />
    );
};

export type EditableColorOption = {
    title: string;
    name: UtilityColor;
};

interface PrivateColorsSettingsProps {
    title: string;
    cardsTitle: React.ReactNode;
    options: EditableColorOption[];
}

export const PrivateColorsSettings: React.FC<PrivateColorsSettingsProps> = ({
    title,
    cardsTitle,
    options,
}) => {
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
            <ThemableSettings title={cardsTitle} rows={rows} />
        </ThemeSection>
    );
};
