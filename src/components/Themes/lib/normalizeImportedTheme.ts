import {
    type ColorOptions,
    type GravityTheme,
    createInternalPrivateColorReference,
    createInternalUtilityColorReference,
    getUtilityColorTypeFromCssVariable,
    isPrivateColorCssVariable,
    isUtilityColorCssVariable,
    parsePrivateColorCssVariable,
} from '@gravity-ui/uikit-themer';

// Symmetric inverse of uikit-themer's `normalizeColorOptionsForExport` from
// json/generate.js. The exporter converts internal refs (`private.brand.550-
// solid`, `utility.base-brand`) into CSS-var-name refs (`--g-color-private-
// brand-550-solid`, `--g-color-base-brand`) on the way out. But its parseJSON
// counterpart drops the imported ref into state as-is. The downstream CSS
// generator only recognises the internal dotted form, so JSON-imported themes
// end up writing the raw CSS-var-name as the value and the browser falls back
// to the default theme. Bug filed against gravity-ui/uikit-themer; this shim
// restores symmetry on the import side until the upstream fix lands.

const normalizeRef = (ref: unknown): string | undefined => {
    if (typeof ref !== 'string' || !ref) {
        return undefined;
    }
    if (isPrivateColorCssVariable(ref)) {
        try {
            const {mainColorToken, privateColorToken} = parsePrivateColorCssVariable(ref);
            return createInternalPrivateColorReference(mainColorToken, privateColorToken);
        } catch {
            return undefined;
        }
    }
    if (isUtilityColorCssVariable(ref)) {
        const utilityColor = getUtilityColorTypeFromCssVariable(ref);
        return utilityColor ? createInternalUtilityColorReference(utilityColor) : undefined;
    }
    return undefined;
};

const normalizeColorOptions = (options: ColorOptions | undefined): ColorOptions | undefined => {
    if (!options) {
        return options;
    }
    const ref = normalizeRef(options.ref);
    return {value: options.value, ref};
};

// `generateJSON` writes `{value: ''}` for the private shades it has nothing to
// say about (the `-solid` / `-opaque` variants only exist in one of the two
// modes). `parseJSON` reads those blanks back as if they were authored values,
// and `generateCSS` then prints `--g-color-private-white-950-solid: ;` — an
// invalid declaration. A theme built in code never carries such keys at all,
// which is why only JSON-imported themes export them.
const isBlank = (options: ColorOptions | undefined) =>
    Boolean(options) && !options?.ref && !options?.value?.trim();

/**
 * Mutates the given `GravityTheme` in place so that any ref stored as a raw
 * CSS-var-name (the shape emitted by `generateJSON`) gets rewritten into the
 * internal dotted form (`private.brand.550-solid`, `utility.base-brand`) that
 * `generateCSS` actually understands. Without this, gallery themes imported
 * from JSON have their brand/text/line/selection mappings silently ignored.
 *
 * Also drops the blank private shades described above so the exported CSS
 * doesn't carry empty declarations.
 */
export function normalizeImportedTheme(theme: GravityTheme): GravityTheme {
    for (const utilityColor of Object.values(theme.utilityColors)) {
        utilityColor.light = normalizeColorOptions(utilityColor.light) ?? utilityColor.light;
        utilityColor.dark = normalizeColorOptions(utilityColor.dark) ?? utilityColor.dark;
    }
    for (const mainTokenPrivates of Object.values(theme.privateColors)) {
        for (const variant of ['light', 'dark'] as const) {
            const palette = mainTokenPrivates[variant];
            for (const shade of Object.keys(palette)) {
                const key = shade as keyof typeof palette;
                if (isBlank(palette[key])) {
                    delete palette[key];
                    continue;
                }
                const normalized = normalizeColorOptions(palette[key]);
                if (normalized) {
                    palette[key] = normalized;
                }
            }
        }
    }
    for (const baseColor of Object.values(theme.baseColors)) {
        baseColor.light = normalizeColorOptions(baseColor.light) ?? baseColor.light;
        baseColor.dark = normalizeColorOptions(baseColor.dark) ?? baseColor.dark;
    }
    return theme;
}
