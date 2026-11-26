Die `Text`-Komponente wendet Typografie-Stile wie Schriftvariante, Farbe und Textüberlaufbehandlung auf ihren Inhalt an.

```tsx
import {Text} from '@gravity-ui/uikit';
```

## Variante

Dies sind die Standard-Schriftarten, die im Projekt überschrieben werden können. Eine Liste aller verfügbaren Schriftarten finden Sie [hier](https://preview.gravity-ui.com/uikit/?path=/story/typography--variants).

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Ellipse

Diese Eigenschaft ermöglicht es Ihnen, überlaufenden Text auszublenden:

`false`: Wird standardmäßig verwendet.

`true`: Überlaufender Inhalt wird durch eine Ellipse (`…`) ersetzt.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Leerzeichen

Dies steht für die CSS-Eigenschaft `white-space`. Es kann entweder `nowrap` oder `break-spaces` sein.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Wortumbruch

Dies steht für die CSS-Eigenschaft `word-break`. Der einzige verfügbare Wert ist `break-all`. | `break-word`.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Farbe

Gibt die Textfarbe an. Die verfügbaren Farben sind:
`primary`, `complementary`, `secondary`, `hint`, `info`, `info-heavy`, `positive`, `positive-heavy`, `warning`, `warning-heavy`, `danger`, `danger-heavy`, `utility`, `utility-heavy`, `misc`, `misc-heavy`, `brand`, `link`, `link-hover`, `link-visited`, `link-visited-hover`, `dark-primary`, `dark-complementary`, `dark-secondary`, `light-primary`, `light-complementary`, `light-secondary`, `light-hint`, `inverted-primary`, `inverted-complementary`, `inverted-secondary` und `inverted-hint`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Eigenschaften

| Name          | Beschreibung                                                               |                        Typ                        |  Standard   |
| :------------ | :------------------------------------------------------------------------ | :------------------------------------------------: | :--------: |
| children      | Textinhalt                                                                |                 `React.ReactNode`                  |            |
| className     | `class` HTML-Attribut                                                     |                      `string`                      |            |
| id            | `id` HTML-Attribut                                                        |                      `string`                      |            |
| as            | Ermöglicht das Überschreiben des Standard-HTML-Tags                       |              `React.ElementType<any>`              |            |
| style         | `style` HTML-Attribut                                                     |               `React.CSSProperties`                |            |
| variant       | Textschriftart                                                            |                      `string`                      | `"body-1"` |
| ellipsis      | Versteckter Überlaufinhalt wird durch Ellipsen ersetzt                    |                     `boolean`                      |            |
| ellipsisLines | Die Anzahl ganzer Textzeilen, nach denen der Inhalt abgeschnitten wird   |                      `number`                      |            |
| whiteSpace    | `white-space` CSS-Eigenschaft                                             |            `"nowrap"` `"break-spaces"`             |            |
| wordBreak     | `word-break` CSS-Eigenschaft                                              |            `"break-all"` `"break-word"`            |            |
| color         | Textfarbe                                                                 | `string` (siehe die Werte im Abschnitt **Farbe**) |            |
| qa            | `data-qa` HTML-Attribut, für Tests verwendet                              |                      `string`                      |            |