import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {Col, Flex} from '@gravity-ui/uikit';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {useThemeCreatorMethods, useThemePalette} from '../../hooks';
import {Palette, ThemeVariant} from '../../lib/types';
import {ThemeSection} from '../ThemeSection';

import {AddColorButton} from './AddColorButton';
import {PaletteColorEditor, PaletteColors} from './PaletteColors';
import {ThemePaletteCard} from './ThemePaletteCard';

const hiddenColors = new Set(['white', 'black', 'brand']);

export const BasicPalette = () => {
    const {t} = useTranslation('themes');

    const {addColor, removeColor, updateColor, renameColor} = useThemeCreatorMethods();
    const origPalette = useThemePalette();

    const palette = React.useMemo(
        () => origPalette.filter(({title}) => !hiddenColors.has(title.toLowerCase())),
        [origPalette],
    );

    const renderEditor = React.useCallback(
        (paletteColorData: Palette[0]) => (
            <PaletteColorEditor
                paletteColorData={paletteColorData}
                onDelete={removeColor}
                onUpdateTitle={renameColor}
            />
        ),
        [removeColor, renameColor],
    );

    const [theme, setTheme] = React.useState<ThemeVariant>('light');

    const breakpoint = useWindowBreakpoint();
    const isTabletOrMobile = breakpoint < BREAKPOINTS.lg;
    const isMobile = breakpoint < BREAKPOINTS.md;

    return (
        <ThemeSection title={t('basic_palette')}>
            <Flex gap={9}>
                {!isMobile && (
                    <Flex width={isTabletOrMobile ? 328 : 380}>
                        <PaletteColors
                            palette={palette}
                            onAddColorClick={addColor}
                            onDeleteColor={removeColor}
                            onUpdateColorTitle={renameColor}
                        />
                    </Flex>
                )}
                <Flex gap={4} grow={true}>
                    <Col l={6}>
                        <ThemePaletteCard
                            theme={isTabletOrMobile ? theme : 'light'}
                            palette={palette}
                            onUpdate={updateColor}
                            onChangeTheme={isTabletOrMobile ? setTheme : undefined}
                            showTitle={!isTabletOrMobile}
                            onDeleteColor={removeColor}
                            onUpdateColorTitle={renameColor}
                            renderEditor={isMobile ? renderEditor : undefined}
                        />
                        {isMobile && <AddColorButton onClick={addColor} />}
                    </Col>
                    {!isTabletOrMobile && (
                        <Col l={6}>
                            <ThemePaletteCard
                                theme="dark"
                                palette={palette}
                                onUpdate={updateColor}
                            />
                        </Col>
                    )}
                </Flex>
            </Flex>
        </ThemeSection>
    );
};
