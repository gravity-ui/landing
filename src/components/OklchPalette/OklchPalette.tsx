import {
    Button,
    Card,
    ClipboardButton,
    Flex,
    Label,
    SegmentedRadioGroup,
    Slider,
    Switch,
    Text,
    ThemeProvider,
    Tooltip,
} from '@gravity-ui/uikit';
import chroma from 'chroma-js';
import React from 'react';

import {block} from '../../utils';

import './OklchPalette.scss';
import {
    BASE_COLORS,
    type BaseColorDef,
    DEFAULT_DARK_BG,
    DEFAULT_LIGHT_BG,
    type SolidShade,
    type ThemeVariant,
    bestApcaText,
    buildCssVariables,
    generateRamp,
} from './colorGenerator';

const b = block('oklch-palette');

// Hover delay (ms) before a swatch's color readout shows — well below the native
// `title` tooltip's ~700ms so it appears quickly while comparing shades.
const TOOLTIP_OPEN_DELAY = 150;

interface DisplayShade {
    code: number;
    /** Swatch background — sRGB hex, or an oklch() string on the P3 ramp. */
    css: string;
    /** sRGB hex, used for APCA and copy. */
    hex: string;
    isAnchor: boolean;
    /** Chroma beyond sRGB (P3 ramp) — flags the swatch with a dot. */
    wide: boolean;
    title: string;
}

const solidToDisplay = (s: SolidShade): DisplayShade => ({
    code: s.code,
    css: s.css,
    hex: s.hex,
    isAnchor: s.isAnchor,
    wide: s.wide,
    title: `${s.code}-solid\n${s.hex}\n${s.oklch}${s.wide ? '\nP3 — beyond sRGB' : ''}`,
});

const toHex = (value: string): string => {
    try {
        return chroma(value).hex();
    } catch {
        return '#000000';
    }
};

const copy = (text: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
        navigator.clipboard.writeText(text);
    }
};

interface ColorInputProps {
    value: string;
    onChange: (hex: string) => void;
}

// A square swatch that opens the native OS color picker on click.
const ColorInput: React.FC<ColorInputProps> = ({value, onChange}) => (
    <label className={b('picker')} style={{backgroundColor: toHex(value)}}>
        <input type="color" value={toHex(value)} onChange={(e) => onChange(e.target.value)} />
    </label>
);

interface RampProps {
    label: string;
    shades: DisplayShade[];
    showApca: boolean;
    primary?: boolean;
    /** Optional hint under the label (e.g. why white/black is anchor-only here). */
    note?: string;
}

const Ramp: React.FC<RampProps> = ({label, shades, showApca, primary, note}) => {
    // A near-empty ramp (white/black in their alpha-only theme) shouldn't stretch a
    // lone swatch across the full row — pack it left at a fixed width instead.
    const sparse = shades.length <= 3;
    return (
        <div className={b('ramp', {primary})}>
            <Text
                variant="caption-2"
                color={primary ? 'primary' : 'secondary'}
                className={b('ramp-label')}
            >
                {primary ? <span className={b('dot')} /> : null}
                {label}
            </Text>
            {note ? (
                <Text variant="caption-2" color="hint">
                    {note}
                </Text>
            ) : null}
            <div className={b('swatches', {sparse})}>
                {shades.map((s) => {
                    const apca = showApca ? bestApcaText(s.hex) : null;
                    return (
                        <div className={b('col')} key={s.code}>
                            <Tooltip
                                content={<div className={b('tip')}>{s.title}</div>}
                                openDelay={TOOLTIP_OPEN_DELAY}
                            >
                                <button
                                    type="button"
                                    className={b('swatch', {anchor: s.isAnchor})}
                                    style={{backgroundColor: s.css}}
                                    onClick={() => copy(s.hex)}
                                >
                                    {s.wide ? <span className={b('badge')} /> : null}
                                    {apca ? (
                                        <span className={b('apca')} style={{color: apca.textColor}}>
                                            {Math.round(Math.abs(apca.lc))}
                                        </span>
                                    ) : null}
                                </button>
                            </Tooltip>
                            <span className={b('code', {anchor: s.isAnchor})}>{s.code}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

interface ColorRowProps {
    def: BaseColorDef;
    theme: ThemeVariant;
    lightBg: string;
    darkBg: string;
    holdHue: boolean;
    chromaScale: number;
    showP3: boolean;
    showApca: boolean;
    onChange: (token: string, theme: ThemeVariant, value: string) => void;
}

const ColorRow: React.FC<ColorRowProps> = ({
    def,
    theme,
    lightBg,
    darkBg,
    holdHue,
    chromaScale,
    showP3,
    showApca,
    onChange,
}) => {
    const value = def[theme];

    // White's solid ramp lives only in the dark theme, black's only in the light
    // one; in the opposite theme the themer ships them as alpha overlays, so the
    // sole solid token is the pure color at 1000 (see colorGenerator).
    const alphaOnly =
        (def.token === 'white' && theme === 'light') || (def.token === 'black' && theme === 'dark');
    const note = alphaOnly
        ? `Alpha-only in the ${theme} theme — the only solid token is 1000 (pure ${def.label.toLowerCase()}); the rest ship as ${
              def.token
          }-alpha overlays.`
        : undefined;

    // OKLCH perceptual mix toward the theme background; with hue held it moves
    // only L and C so the dark edge keeps the seed hue.
    const mix = React.useMemo(
        () =>
            generateRamp({
                token: def.token,
                theme,
                colorValue: value,
                lightBg,
                darkBg,
                mode: 'oklch',
                holdHue,
                chromaScale,
            }),
        [def.token, theme, value, lightBg, darkBg, holdHue, chromaScale],
    );

    // The same OKLCH mix computed in the full P3 gamut — chroma that bulges past
    // sRGB survives and renders via oklch() (only differs on a P3 display).
    const p3 = React.useMemo(
        () =>
            showP3
                ? generateRamp({
                      token: def.token,
                      theme,
                      colorValue: value,
                      lightBg,
                      darkBg,
                      mode: 'oklch',
                      holdHue,
                      chromaScale,
                      gamut: 'p3',
                  })
                : null,
        [showP3, def.token, theme, value, lightBg, darkBg, holdHue, chromaScale],
    );

    // The current @gravity-ui themer scale — base mixed toward the background in RGB.
    const rgb = React.useMemo(
        () =>
            generateRamp({
                token: def.token,
                theme,
                colorValue: value,
                lightBg,
                darkBg,
                mode: 'rgb',
            }),
        [def.token, theme, value, lightBg, darkBg],
    );

    // CSS export tracks the OKLCH-mix ramp (solid 50–1000 + alpha 50–550).
    const css = React.useMemo(
        () =>
            `.g-root {\n${buildCssVariables(
                def.token,
                mix.solid.map((s) => ({code: s.code, hex: s.hex})),
                mix.alpha.map((s) => ({code: s.code, value: s.value})),
            )}\n}`,
        [def.token, mix],
    );

    return (
        <Card view="outlined" className={b('color')}>
            <div className={b('color-head')}>
                <Flex alignItems="center" gap={3}>
                    <ColorInput value={value} onChange={(hex) => onChange(def.token, theme, hex)} />
                    <Flex direction="column">
                        <Text variant="subheader-2">{def.label}</Text>
                        <Text variant="caption-2" color="secondary">
                            {value}
                        </Text>
                    </Flex>
                </Flex>
                <Flex alignItems="center" gap={2}>
                    <Label theme="normal" size="s">{`--g-color-private-${def.token}-*`}</Label>
                    <ClipboardButton text={css} size="s" view="flat-secondary" />
                </Flex>
            </div>

            <Ramp
                label={
                    holdHue ? 'OKLCH mix · hue held (L, C only)' : 'OKLCH mix (toward background)'
                }
                shades={mix.solid.map(solidToDisplay)}
                showApca={showApca}
                note={note}
                primary
            />
            {p3 ? (
                <Ramp
                    label={`OKLCH mix · P3 full gamut${holdHue ? ' · hue held' : ''}`}
                    shades={p3.solid.map(solidToDisplay)}
                    showApca={showApca}
                />
            ) : null}
            <Ramp
                label="Themer RGB (toward background)"
                shades={rgb.solid.map(solidToDisplay)}
                showApca={showApca}
            />
        </Card>
    );
};

interface ControlProps {
    label: string;
    children: React.ReactNode;
}

const Control: React.FC<ControlProps> = ({label, children}) => (
    <div className={b('control')}>
        <Text variant="caption-2" color="secondary">
            {label}
        </Text>
        {children}
    </div>
);

// APCA "Bronze" readability levels — the Lc a background needs against its text,
// by text role. APCA is use-based, so larger/bolder text is fine at lower Lc.
const APCA_LEVELS: {lc: string; theme: 'success' | 'warning' | 'danger'; use: string}[] = [
    {
        lc: 'Lc 90',
        theme: 'success',
        use: 'Body text, ideal — required for small (<18px) or thin text',
    },
    {
        lc: 'Lc 75',
        theme: 'success',
        use: 'Minimum for body & column text (~16px normal, 14px bold)',
    },
    {
        lc: 'Lc 60',
        theme: 'warning',
        use: 'Larger content text (~24px normal, 16px bold) — fluent floor',
    },
    {lc: 'Lc 45', theme: 'warning', use: 'Headlines & large bold (~36px normal, 24px bold)'},
    {lc: 'Lc 30', theme: 'danger', use: 'Non-text UI, placeholder, disabled — absolute text floor'},
    {lc: 'Lc 15', theme: 'danger', use: 'Minimum for any discernible non-text (borders, icons)'},
];

const ApcaLegend: React.FC = () => (
    <Card view="filled" className={b('legend')}>
        <Text variant="subheader-2">APCA contrast — best practices</Text>
        <div className={b('legend-list')}>
            {APCA_LEVELS.map((level) => (
                <div className={b('legend-item')} key={level.lc}>
                    <Label theme={level.theme} size="s">
                        {level.lc}
                    </Label>
                    <Text variant="caption-2" color="secondary">
                        {level.use}
                    </Text>
                </div>
            ))}
        </div>
        <Text variant="caption-2" color="hint">
            APCA is <b>use-based</b>: required Lc depends on font size and weight — bigger or bolder
            text needs less, so there is no single pass/fail like WCAG&nbsp;2. The number on each
            swatch is |Lc| against the better of black/white text; its sign marks polarity
            (dark-on-light vs light-on-dark). Computed in sRGB. Rules of thumb: aim for ≥ <b>75</b>{' '}
            for primary body text, ≥ <b>60</b> for secondary, ≥ <b>45</b> for large headings, and
            never rely on &lt;&nbsp;15 for anything that must be seen.
        </Text>
    </Card>
);

type DisplayGamut = 'srgb' | 'p3' | 'rec2020';

// Reads the actual display gamut via media queries (client-only, SSR-safe).
function useColorGamut(): DisplayGamut | null {
    const [gamut, setGamut] = React.useState<DisplayGamut | null>(null);
    React.useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) {
            return;
        }
        if (window.matchMedia('(color-gamut: rec2020)').matches) {
            setGamut('rec2020');
        } else if (window.matchMedia('(color-gamut: p3)').matches) {
            setGamut('p3');
        } else {
            setGamut('srgb');
        }
    }, []);
    return gamut;
}

export const OklchPalette: React.FC = () => {
    const [theme, setTheme] = React.useState<ThemeVariant>('light');
    const [holdHue, setHoldHue] = React.useState(true);
    const [chromaScale, setChromaScale] = React.useState(1);
    const [showP3, setShowP3] = React.useState(true);
    const [showApca, setShowApca] = React.useState(false);
    const [lightBg, setLightBg] = React.useState(DEFAULT_LIGHT_BG);
    const [darkBg, setDarkBg] = React.useState(DEFAULT_DARK_BG);
    const [colors, setColors] = React.useState<BaseColorDef[]>(BASE_COLORS);

    const displayGamut = useColorGamut();
    const bg = theme === 'dark' ? darkBg : lightBg;

    const handleColorChange = React.useCallback(
        (token: string, themeKey: ThemeVariant, value: string) => {
            setColors((prev) =>
                prev.map((c) => (c.token === token ? {...c, [themeKey]: value} : c)),
            );
        },
        [],
    );

    const reset = React.useCallback(() => {
        setColors(BASE_COLORS);
        setLightBg(DEFAULT_LIGHT_BG);
        setDarkBg(DEFAULT_DARK_BG);
        setChromaScale(1);
    }, []);

    const allCss = React.useMemo(
        () =>
            colors
                .map((def) => {
                    const {solid, alpha} = generateRamp({
                        token: def.token,
                        theme,
                        colorValue: def[theme],
                        lightBg,
                        darkBg,
                        mode: 'oklch',
                        holdHue,
                        chromaScale,
                    });
                    return buildCssVariables(
                        def.token,
                        solid.map((s) => ({code: s.code, hex: s.hex})),
                        alpha.map((s) => ({code: s.code, value: s.value})),
                    );
                })
                .join('\n'),
        [colors, theme, lightBg, darkBg, holdHue, chromaScale],
    );

    return (
        <ThemeProvider theme={theme}>
            <div className={b()} style={{backgroundColor: bg}}>
                <div className={b('inner')}>
                    <header className={b('header')}>
                        <Text as="h1" variant="header-2">
                            Background-adaptive palette — themer vs OKLCH mix
                        </Text>
                        <Text color="secondary" variant="body-2">
                            Every shade is the base color <b>mixed toward the theme background</b>:
                            codes <b>50–500</b> blend toward the near (current-theme) background,{' '}
                            <b>600–1000</b> toward the far one, and <b>550</b> is the untouched
                            base. <b>White</b> and <b>black</b> are special-cased exactly as the
                            themer does: a solid neutral ramp exists only where it&apos;s needed —{' '}
                            <b>black</b> in the light theme (white→black) and <b>white</b> in the
                            dark theme (dark→white), anchored at <b>1000</b> (the pure color). In
                            the opposite theme they ship as alpha overlays, so only the single pure{' '}
                            <b>1000</b> solid is shown. The <b>Themer RGB</b> row interpolates in
                            RGB — the current <code>@gravity-ui</code> behavior — while the{' '}
                            <b>OKLCH mix</b> row interpolates perceptually in OKLCH. Toggle{' '}
                            <b>Hold hue</b> to move only lightness and chroma toward the background,
                            pinning the seed&apos;s hue so the dark edge stops drifting into the
                            background&apos;s tint. Change the <b>backgrounds</b> below to see the
                            ramps re-adapt; click any swatch to copy it.
                        </Text>
                        <div className={b('badges')}>
                            {displayGamut ? (
                                <Label
                                    theme={displayGamut === 'srgb' ? 'warning' : 'success'}
                                    size="s"
                                    title={
                                        displayGamut === 'srgb'
                                            ? 'sRGB display — the P3 mix row is mapped down, so it cannot look different'
                                            : 'Wide-gamut display — the P3 mix row can show colors beyond sRGB'
                                    }
                                >
                                    {`Display gamut: ${displayGamut.toUpperCase()}`}
                                </Label>
                            ) : null}
                            <div className={b('gamut-test')}>
                                <span
                                    className={b('gamut-chip')}
                                    style={{background: 'rgb(0, 255, 0)'}}
                                    title="sRGB green — rgb(0 255 0)"
                                />
                                <span
                                    className={b('gamut-chip')}
                                    style={{background: 'color(display-p3 0 1 0)'}}
                                    title="P3 green — color(display-p3 0 1 0)"
                                />
                                <Text variant="caption-2" color="hint">
                                    P3 test — if these two greens look identical, your display or
                                    browser is sRGB and the P3 mix row can&apos;t differ.
                                </Text>
                            </div>
                        </div>
                    </header>

                    <Card view="filled" className={b('controls')}>
                        <div className={b('controls-row')}>
                            <Control label="Theme">
                                <SegmentedRadioGroup
                                    value={theme}
                                    onUpdate={(v) => setTheme(v as ThemeVariant)}
                                    options={[
                                        {value: 'light', content: 'Light'},
                                        {value: 'dark', content: 'Dark'},
                                    ]}
                                />
                            </Control>
                            <Control label="OKLCH mix">
                                <Flex alignItems="center" gap={4} className={b('switches')}>
                                    <Switch checked={holdHue} onUpdate={setHoldHue}>
                                        Hold hue
                                    </Switch>
                                </Flex>
                            </Control>
                            <Control label={`Chroma · ×${chromaScale.toFixed(2)}`}>
                                <div className={b('slider')}>
                                    <Slider
                                        value={chromaScale}
                                        onUpdate={(v) => setChromaScale(v as number)}
                                        min={0}
                                        max={1.5}
                                        step={0.05}
                                        startPoint={1}
                                        marks={[0, 1, 1.5]}
                                        markFormat={(v) => `×${v}`}
                                        tooltipFormat={(v) => `×${v.toFixed(2)}`}
                                        size="m"
                                    />
                                </div>
                            </Control>
                            <Control label="Display">
                                <Flex alignItems="center" gap={4} className={b('switches')}>
                                    <Switch checked={showP3} onUpdate={setShowP3}>
                                        P3 mix row
                                    </Switch>
                                    <Switch checked={showApca} onUpdate={setShowApca}>
                                        APCA contrast
                                    </Switch>
                                </Flex>
                            </Control>
                            <Control label="Backgrounds">
                                <Flex alignItems="center" gap={2}>
                                    <ColorInput value={lightBg} onChange={setLightBg} />
                                    <ColorInput value={darkBg} onChange={setDarkBg} />
                                    <Text variant="caption-2" color="hint">
                                        light / dark
                                    </Text>
                                </Flex>
                            </Control>
                            <Control label="Actions">
                                <Flex alignItems="center" gap={2}>
                                    <ClipboardButton text={allCss} size="m" view="outlined">
                                        Copy all CSS
                                    </ClipboardButton>
                                    <Button view="flat" onClick={reset}>
                                        Reset
                                    </Button>
                                </Flex>
                            </Control>
                        </div>
                    </Card>

                    {showApca ? <ApcaLegend /> : null}

                    <div className={b('list')}>
                        {colors.map((def) => (
                            <ColorRow
                                key={def.token}
                                def={def}
                                theme={theme}
                                lightBg={lightBg}
                                darkBg={darkBg}
                                holdHue={holdHue}
                                chromaScale={chromaScale}
                                showP3={showP3}
                                showApca={showApca}
                                onChange={handleColorChange}
                            />
                        ))}
                    </div>

                    <Text variant="caption-2" color="hint" className={b('note')}>
                        Both ramps adapt to the <b>backgrounds</b> above — the light shades mix
                        toward the near background and the dark shades toward the far one, so the
                        same seed yields a different scale per theme. The <b>Themer RGB</b> row
                        mixes in RGB (current production); the <b>OKLCH mix</b> row mixes
                        perceptually. With <b>Hold hue</b> on, the OKLCH mix interpolates only
                        lightness and chroma, so a green ramp no longer swings through cyan and blue
                        into purple at the dark end — it stays green and just darkens toward a
                        faint, near-neutral tint of the background. The <b>P3 mix row</b> is the
                        same OKLCH mix (it follows <b>Hold hue</b> too), but the chroma that bulges
                        past sRGB along the interpolation survives instead of being clipped:
                        it&apos;s clamped to the wider P3 boundary and rendered via{' '}
                        <code>oklch()</code>. Swatches marked with a dot exceed sRGB and only reach
                        full saturation on a P3 display — colors that already fit sRGB (e.g. this
                        green) look identical on both rows. <b>APCA</b> prints each shade&apos;s Lc
                        against the better of black/white text (|Lc| ≥ 60 ≈ body text, 75+
                        comfortable). <b>Copy all CSS</b> and each row&apos;s copy button emit the
                        sRGB OKLCH-mix ramp as themer <code>--g-color-private-*</code> variables
                        (solid 50–1000 + alpha 50–550).
                    </Text>
                </div>
            </div>
        </ThemeProvider>
    );
};
