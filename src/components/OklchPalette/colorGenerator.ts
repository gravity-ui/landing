import chroma from 'chroma-js';

export type ThemeVariant = 'light' | 'dark';

/**
 * Color spaces in which the base color is mixed toward the background to build
 * a shade. All of these are valid `chroma.mix` interpolation modes.
 */
export type MixMode = 'oklch' | 'rgb' | 'lab' | 'lch' | 'hsl';

/**
 * Shade map ported verbatim from
 * `@gravity-ui/uikit-themer/dist/private-colors/constants.js` (COLORS_MAP).
 *
 * For each shade `a` is the weight kept from the base color and `c` is the mix
 * direction:
 *   - `c < 0` → mix toward the *near* background  → lighter shades (50–500)
 *   - `c > 0` → mix toward the *far* background    → darker shades  (600–1000)
 * `550` is the anchor — the untouched base color.
 */
export const COLORS_MAP: Record<number, {a: number; c: number}> = {
    50: {a: 0.1, c: -1},
    100: {a: 0.15, c: -1},
    150: {a: 0.2, c: -1},
    200: {a: 0.3, c: -1},
    250: {a: 0.4, c: -1},
    300: {a: 0.5, c: -1},
    350: {a: 0.6, c: -1},
    400: {a: 0.7, c: -1},
    450: {a: 0.8, c: -1},
    500: {a: 0.9, c: -1},
    550: {a: 1, c: 1},
    600: {a: 0.9, c: 1},
    650: {a: 0.8, c: 1},
    700: {a: 0.7, c: 1},
    750: {a: 0.6, c: 1},
    800: {a: 0.5, c: 1},
    850: {a: 0.4, c: 1},
    900: {a: 0.3, c: 1},
    950: {a: 0.2, c: 1},
    1000: {a: 0.15, c: 1},
};

/** All solid shade codes, light → dark. */
export const SHADE_CODES = Object.keys(COLORS_MAP).map(Number);

type ShadeMap = Record<number, {a: number; c: number}>;

/**
 * White and black are special-cased in the themer. Instead of the shared
 * COLORS_MAP they use a dedicated, theme-specific ramp (`THEME_PRESET`) that:
 *   - anchors the untouched base color at **1000**, not 550;
 *   - runs monotonically from the pure color to the opposite end (rather than
 *     fanning out in both directions from a mid-point), so white stays a real
 *     pure white and black a real pure black at the anchor;
 *   - sets `a = code / 1000` and keeps the mix direction `c` constant per
 *     theme/token (only light·white flips its faint `20` step toward the near
 *     background, matching the themer constants);
 *   - adds the extra `20` and `70` steps.
 */
const BLACK_WHITE_CODES = [
    20, 50, 70, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900,
    950, 1000,
];

/** White/black anchor — the untouched base color sits at 1000, not 550. */
const BLACK_WHITE_ANCHOR_CODE = 1000;

function buildBlackWhiteMap(c: number, c20: number): ShadeMap {
    const map: ShadeMap = {};
    for (const code of BLACK_WHITE_CODES) {
        map[code] = {a: code / 1000, c: code === 20 ? c20 : c};
    }
    return map;
}

/**
 * Ported from `THEME_PRESET[theme][token].colorsMap` in
 * `@gravity-ui/uikit-themer`. `c > 0` mixes toward the *far* background, `c < 0`
 * toward the *near* one — same convention as COLORS_MAP.
 */
const BLACK_WHITE_MAP: Record<ThemeVariant, Record<'white' | 'black', ShadeMap>> = {
    light: {
        white: buildBlackWhiteMap(1, -1),
        black: buildBlackWhiteMap(-1, -1),
    },
    dark: {
        white: buildBlackWhiteMap(-1, -1),
        black: buildBlackWhiteMap(1, 1),
    },
};

/**
 * Which solid tokens the themer actually emits for white/black depends on the
 * theme — verified against `generatePrivateColors`. A solid neutral ramp only
 * exists where it's useful: black on a light background (white→black) and white
 * on a dark one (dark→white). In the opposite theme white/black ship purely as
 * alpha overlays, so the single solid is the pure color at 1000. Rendering the
 * other, never-emitted solids is exactly what produced the misleading
 * 20 = white / 50 = near-black jump in light·white, so we show only the emitted
 * set. (light·black drops the `70` step; dark·white keeps it — matching themer.)
 */
const BLACK_WHITE_SOLID_CODES: Record<ThemeVariant, Record<'white' | 'black', number[]>> = {
    light: {
        white: [BLACK_WHITE_ANCHOR_CODE],
        black: BLACK_WHITE_CODES.filter((code) => code !== 70),
    },
    dark: {
        white: BLACK_WHITE_CODES,
        black: [BLACK_WHITE_ANCHOR_CODE],
    },
};

/**
 * Alpha (semi-transparent) tokens exposed by the themer, light → opaque.
 * Mirrors `BASE_PRIVATE_VARIABLES` (50…550). These are color-space independent.
 */
export const ALPHA_CODES = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550];

export const ANCHOR_CODE = 550;

export interface SolidShade {
    code: number;
    /** Opaque value (rgb string), base mixed toward a background in `mode`. */
    value: string;
    /** sRGB hex of `value`, for APCA, copy and CSS export (always sRGB-clamped). */
    hex: string;
    /** Swatch background: the sRGB hex, or an `oklch()` string on the P3 ramp. */
    css: string;
    /** `oklch(L% C H)` string of `value`, for inspection. */
    oklch: string;
    isAnchor: boolean;
    /** Chroma reaches beyond the sRGB gamut (only set on the P3 ramp). */
    wide: boolean;
}

export interface AlphaShade {
    code: number;
    a: number;
    /** Base color at the given alpha (rgba string). */
    value: string;
}

export interface Ramp {
    solid: SolidShade[];
    alpha: AlphaShade[];
}

export interface GenerateRampArgs {
    /**
     * Design-system token (`brand`, `red`, …). `white` and `black` switch to the
     * themer's dedicated theme-specific ramp (anchored at 1000); everything else
     * uses the shared COLORS_MAP (anchored at 550).
     */
    token: string;
    theme: ThemeVariant;
    colorValue: string;
    lightBg: string;
    darkBg: string;
    mode: MixMode;
    /**
     * Hold the seed's hue instead of interpolating it toward the target. Only the
     * L and C channels move toward the background; H stays put. Cancels the edge
     * hue drift a tinted background otherwise imparts in cylindrical mix modes
     * (e.g. a green ramp swinging to purple at the dark end). Ignores `mode` — the
     * interpolation always runs in OKLCH.
     */
    holdHue?: boolean;
    /**
     * Multiplier applied to every OKLCH-mix shade's chroma (saturation). `1` keeps
     * the themer-equivalent chroma, `< 1` mutes the palette toward neutral, `> 1`
     * pushes it louder (chroma past sRGB only shows on the P3 row). Ignored for
     * `mode: 'rgb'` (the themer baseline stays fixed for comparison).
     */
    chromaScale?: number;
    /**
     * Gamut the OKLCH mix is computed in. `'srgb'` (default) clamps each shade to
     * sRGB; `'p3'` keeps the full interpolated chroma, clamps it to the wider P3
     * boundary, and renders the swatch via `oklch()` so a P3 display shows colors
     * sRGB can't. Only affects `mode: 'oklch'`.
     */
    gamut?: Gamut;
}

export type Gamut = 'srgb' | 'p3';

// OKLCH → linear sRGB, using Björn Ottosson's OKLab matrices.
function oklchToLinearSrgb(l: number, c: number, h: number): [number, number, number] {
    const hr = (h * Math.PI) / 180;
    const a = c * Math.cos(hr);
    const bb = c * Math.sin(hr);
    const lp = l + 0.3963377774 * a + 0.2158037573 * bb;
    const mp = l - 0.1055613458 * a - 0.0638541728 * bb;
    const sp = l - 0.0894841775 * a - 1.291485548 * bb;
    const lc = lp ** 3;
    const mc = mp ** 3;
    const sc = sp ** 3;
    return [
        4.0767416621 * lc - 3.3077115913 * mc + 0.2309699292 * sc,
        -1.2684380046 * lc + 2.6097574011 * mc - 0.3413193965 * sc,
        -0.0041960863 * lc - 0.7034186147 * mc + 1.707614701 * sc,
    ];
}

// linear sRGB → XYZ (D65) → linear Display-P3 (D65).
function linearSrgbToP3([r, g, b]: [number, number, number]): [number, number, number] {
    const x = 0.4123908 * r + 0.35758434 * g + 0.18048079 * b;
    const y = 0.21263901 * r + 0.71516868 * g + 0.07219232 * b;
    const z = 0.01933082 * r + 0.11919478 * g + 0.95053215 * b;
    return [
        2.49349691 * x - 0.93138362 * y - 0.40271078 * z,
        -0.82948897 * x + 1.76266406 * y + 0.02362469 * z,
        0.03584583 * x - 0.07617239 * y + 1.0494851 * z,
    ];
}

const GAMUT_EPS = 1e-4;
const inRange = (v: number) => v >= -GAMUT_EPS && v <= 1 + GAMUT_EPS;

function inGamut(l: number, c: number, h: number, gamut: Gamut): boolean {
    const lin = oklchToLinearSrgb(l, c, h);
    const channels = gamut === 'srgb' ? lin : linearSrgbToP3(lin);
    return channels.every(inRange);
}

// Largest chroma displayable in the given gamut for a lightness/hue (binary search).
function maxChromaForGamut(l: number, h: number, gamut: Gamut): number {
    let lo = 0;
    let hi = 0.5;
    for (let i = 0; i < 26; i++) {
        const mid = (lo + hi) / 2;
        if (inGamut(l, mid, h, gamut)) {
            lo = mid;
        } else {
            hi = mid;
        }
    }
    return lo;
}

const oklchCss = (l: number, c: number, h: number): string =>
    `oklch(${(l * 100).toFixed(2)}% ${c.toFixed(4)} ${h.toFixed(2)})`;

// Raw OKLCH interpolation from the seed toward the target by weight `t`, with no
// gamut clamping — so chroma that bulges past sRGB along the path survives for
// the P3 ramp (chroma.mix would clip it on conversion to RGB). With `holdHue` the
// seed's hue is kept (only L and C move, killing the tinted-background drift);
// otherwise hue follows the shortest arc, matching chroma's OKLCH mix. Returns
// the raw [l, c, h].
function mixOklch(
    seed: chroma.Color,
    target: chroma.Color,
    t: number,
    holdHue: boolean,
): [number, number, number] {
    const [l1, c1, h1] = seed.oklch();
    const [l2, c2, h2] = target.oklch();
    const l = l1 + (l2 - l1) * t;
    const c = c1 + (c2 - c1) * t;
    if (holdHue) {
        // Keep the seed's hue. If the seed is achromatic (white/black/grey have no
        // hue), borrow the target's so the shade tints toward the actual
        // background instead of snapping to red.
        let h = h1;
        if (Number.isNaN(h1)) {
            h = Number.isNaN(h2) ? 0 : h2;
        }
        return [l, c, h];
    }
    let h: number;
    if (Number.isNaN(h1) && Number.isNaN(h2)) {
        h = 0;
    } else if (Number.isNaN(h1)) {
        h = h2;
    } else if (Number.isNaN(h2)) {
        h = h1;
    } else {
        // Shortest signed hue delta in (-180, 180].
        const dh = ((((h2 - h1) % 360) + 540) % 360) - 180;
        h = h1 + dh * t;
    }
    return [l, c, h];
}

const toOklchString = (color: chroma.Color): string => {
    const [l, c, h] = color.oklch();
    const hue = Number.isNaN(h) ? 0 : h;
    return `oklch(${(l * 100).toFixed(1)}% ${c.toFixed(3)} ${hue.toFixed(1)})`;
};

// Builds the themer private-color ramp (shades 50–1000 solid + 50–550 alpha) for
// a single base color. Faithful to `generatePrivateColors` in
// `@gravity-ui/uikit-themer`, except the solid mix runs in the requested `mode`
// color space instead of a hardcoded `'rgb'`: the base color and the `550` anchor
// match the themer, but every other solid shade is interpolated perceptually.
export function generateRamp({
    token,
    theme,
    colorValue,
    lightBg,
    darkBg,
    mode,
    holdHue = false,
    chromaScale = 1,
    gamut = 'srgb',
}: GenerateRampArgs): Ramp {
    if (!chroma.valid(colorValue)) {
        return {solid: [], alpha: []};
    }

    // White and black follow the themer's dedicated, theme-specific ramp (anchored
    // at 1000); every other color uses the shared COLORS_MAP (anchored at 550).
    const isBlackWhite = token === 'white' || token === 'black';
    const map = token === 'white' || token === 'black' ? BLACK_WHITE_MAP[theme][token] : COLORS_MAP;
    const codes =
        token === 'white' || token === 'black'
            ? BLACK_WHITE_SOLID_CODES[theme][token]
            : SHADE_CODES;
    const anchorCode = isBlackWhite ? BLACK_WHITE_ANCHOR_CODE : ANCHOR_CODE;

    // `near` is the current theme background, `far` is the opposite one —
    // matching the `light`/`dark` locals in the original implementation.
    const near = theme === 'dark' ? darkBg : lightBg;
    const far = theme === 'dark' ? lightBg : darkBg;
    const seed = chroma(colorValue);
    const p3 = mode === 'oklch' && gamut === 'p3';

    const solid: SolidShade[] = codes.map((code) => {
        const {a, c} = map[code];
        const target = c > 0 ? far : near;
        const t = 1 - a;

        if (p3) {
            // Interpolate in OKLCH without sRGB clamping, scale the chroma, then
            // clamp it to the wider P3 boundary and render via oklch() so a P3
            // display shows the colors sRGB can't. `hex` stays the sRGB fallback.
            const [l, cRaw, h] = mixOklch(seed, chroma(target), t, holdHue);
            const cP3 = Math.min(cRaw * chromaScale, maxChromaForGamut(l, h, 'p3'));
            const color = chroma.oklch(l, cP3, h);
            return {
                code,
                value: color.css(),
                hex: color.hex(),
                css: oklchCss(l, cP3, h),
                oklch: toOklchString(color),
                isAnchor: code === anchorCode,
                wide: cP3 > maxChromaForGamut(l, h, 'srgb') + 1e-3,
            };
        }

        let mixed: chroma.Color;
        if (mode === 'oklch') {
            // Same perceptual interpolation as the P3 row, with the chroma scaled
            // and then clamped to sRGB on build (`chromaScale` < 1 mutes, > 1 pushes
            // louder — anything past sRGB only surfaces on the P3 row).
            const [l, cRaw, h] = mixOklch(seed, chroma(target), t, holdHue);
            mixed = chroma.oklch(l, cRaw * chromaScale, h);
        } else {
            // Themer baseline — RGB mix, unaffected by chromaScale.
            mixed = chroma.mix(colorValue, target, t, mode);
        }
        const hex = mixed.hex();

        return {
            code,
            value: mixed.css(),
            hex,
            css: hex,
            oklch: toOklchString(mixed),
            isAnchor: code === anchorCode,
            wide: false,
        };
    });

    const alpha: AlphaShade[] = ALPHA_CODES.map((code) => {
        const {a} = map[code];
        return {
            code,
            a,
            value: chroma(colorValue).alpha(a).css(),
        };
    });

    return {solid, alpha};
}

const PRIVATE_COLOR_VARIABLE_PREFIX = '--g-color-private';

// Serializes a ramp to themer-compatible CSS custom properties, e.g.
// `--g-color-private-brand-550-solid: #cbff5c;`.
export function buildCssVariables(
    token: string,
    solids: {code: number; hex: string}[],
    alpha: {code: number; value: string}[] = [],
): string {
    const lines = [
        ...solids.map(
            (s) => `  ${PRIVATE_COLOR_VARIABLE_PREFIX}-${token}-${s.code}-solid: ${s.hex};`,
        ),
        ...alpha.map((s) => `  ${PRIVATE_COLOR_VARIABLE_PREFIX}-${token}-${s.code}: ${s.value};`),
    ];
    return lines.join('\n');
}

// ----------------------------------------------------------------------------
// APCA — Accessible Perceptual Contrast Algorithm (W3C / SAPC 0.1.9)
// ----------------------------------------------------------------------------

const apcaY = (hex: string): number => {
    const [r, g, b] = chroma(hex).rgb();
    const lin = (ch: number) => Math.pow(ch / 255, 2.4);
    return 0.2126729 * lin(r) + 0.7151522 * lin(g) + 0.072175 * lin(b);
};

// APCA lightness contrast (Lc). Positive ≈ dark text on a light background,
// negative the reverse. Rough thresholds: |Lc| 45 large text, 60 body text,
// 75+ comfortable, 90 ideal.
export function apcaContrast(textHex: string, bgHex: string): number {
    const blkThrs = 0.022;
    const blkClmp = 1.414;
    let txt = apcaY(textHex);
    let bg = apcaY(bgHex);
    txt = txt > blkThrs ? txt : txt + Math.pow(blkThrs - txt, blkClmp);
    bg = bg > blkThrs ? bg : bg + Math.pow(blkThrs - bg, blkClmp);
    if (Math.abs(bg - txt) < 0.0005) {
        return 0;
    }
    let contrast;
    if (bg > txt) {
        contrast = (Math.pow(bg, 0.56) - Math.pow(txt, 0.57)) * 1.14;
        contrast = contrast < 0.1 ? 0 : contrast - 0.027;
    } else {
        contrast = (Math.pow(bg, 0.65) - Math.pow(txt, 0.62)) * 1.14;
        contrast = contrast > -0.1 ? 0 : contrast + 0.027;
    }
    return contrast * 100;
}

export interface ApcaText {
    textColor: '#000000' | '#ffffff';
    lc: number;
}

// Picks black or white text for a background by larger absolute APCA contrast.
export function bestApcaText(bgHex: string): ApcaText {
    const black = apcaContrast('#000000', bgHex);
    const white = apcaContrast('#ffffff', bgHex);
    return Math.abs(black) >= Math.abs(white)
        ? {textColor: '#000000', lc: black}
        : {textColor: '#ffffff', lc: white};
}

export interface BaseColorDef {
    token: string;
    label: string;
    light: string;
    dark: string;
}

export const DEFAULT_LIGHT_BG = 'rgb(255, 255, 255)';
export const DEFAULT_DARK_BG = 'rgb(34, 29, 34)';

/**
 * The design-system base variables from the `/themer` section:
 * `brand` (landing default) + `@gravity-ui/uikit-themer` `DEFAULT_BASE_COLORS`,
 * reordered brand → chromatic → neutral for a nicer showcase.
 */
export const BASE_COLORS: BaseColorDef[] = [
    {token: 'brand', label: 'Brand', light: 'rgb(203, 255, 92)', dark: 'rgb(203, 255, 92)'},
    {token: 'red', label: 'Red', light: 'rgb(255, 0, 61)', dark: 'rgb(229, 50, 93)'},
    {token: 'orange', label: 'Orange', light: 'rgb(255, 119, 0)', dark: 'rgb(200, 99, 12)'},
    {token: 'yellow', label: 'Yellow', light: 'rgb(255, 190, 92)', dark: 'rgb(255, 190, 92)'},
    {token: 'green', label: 'Green', light: 'rgb(50, 186, 118)', dark: 'rgb(77, 176, 155)'},
    {token: 'blue', label: 'Blue', light: 'rgb(54, 151, 241)', dark: 'rgb(54, 151, 241)'},
    {token: 'purple', label: 'Purple', light: 'rgb(143, 82, 204)', dark: 'rgb(143, 82, 204)'},
    {
        token: 'cool-grey',
        label: 'Cool grey',
        light: 'rgb(107, 132, 153)',
        dark: 'rgb(96, 128, 156)',
    },
    {token: 'white', label: 'White', light: 'rgb(255, 255, 255)', dark: 'rgb(255, 255, 255)'},
    {token: 'black', label: 'Black', light: 'rgb(0, 0, 0)', dark: 'rgb(0, 0, 0)'},
];
