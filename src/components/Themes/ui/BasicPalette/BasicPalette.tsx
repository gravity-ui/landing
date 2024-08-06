import React from 'react';
import {useTranslation} from 'react-i18next';

import {useThemeCreatorMethods, useThemePalette} from '../../hooks';
import {ThemeVariant} from '../../lib/types';
import {ColorPickerInput} from '../ColorPickerInput/ColorPickerInput';
import {ThemableSettings} from '../ThemableSettings/ThemableSettings';
import {ThemableRow} from '../ThemableSettings/types';
import {ThemeSection} from '../ThemeSection';

import {AddColorButton} from './AddColorButton';
import {PaletteColorEditor} from './PaletteColorEditor';

const hiddenColors = new Set(['white', 'black', 'brand']);

export const BasicPalette = () => {
    const {t} = useTranslation('themes');

    const {addColor, removeColor, updateColor, renameColor} = useThemeCreatorMethods();
    const origPalette = useThemePalette();

    const palette = React.useMemo(
        () => origPalette.filter(({title}) => !hiddenColors.has(title.toLowerCase())),
        [origPalette],
    );

    const rows = React.useMemo<ThemableRow[]>(
        () =>
            palette.map((paletteColorData) => ({
                id: paletteColorData.title,
                title: paletteColorData.title,
                renderTitle: () => (
                    <PaletteColorEditor
                        paletteColorData={paletteColorData}
                        onDelete={removeColor}
                        onUpdateTitle={renameColor}
                    />
                ),
                render: (currentTheme: ThemeVariant) => (
                    <ColorPickerInput
                        value={paletteColorData.colors[currentTheme]}
                        defaultValue={paletteColorData.colors[currentTheme]}
                        onChange={(value) =>
                            updateColor({theme: currentTheme, title: paletteColorData.title, value})
                        }
                    />
                ),
            })),
        [palette, removeColor, renameColor],
    );

    return (
        <ThemeSection title={t('basic_palette')}>
            <ThemableSettings
                title="The colors to generate the palette"
                rows={rows}
                addButton={<AddColorButton onClick={addColor} />}
            />
        </ThemeSection>
    );
};
