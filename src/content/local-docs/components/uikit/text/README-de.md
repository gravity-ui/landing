<!--GITHUB_BLOCK-->

# Text

<!--/GITHUB_BLOCK-->

Die `Text`-Komponente wendet Typografie-Stile wie Schriftvariante, Farbe und Textüberlaufbehandlung auf ihren Inhalt an.

```tsx
import {Text} from '@gravity-ui/uikit';
```

## Variante

Dies sind die Standard-Schriftarten, die im Projekt überschrieben werden können. Eine Liste aller verfügbaren Schriftarten finden Sie [hier](https://preview.gravity-ui.com/uikit/?path=/story/typography--variants).

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text variant="body-1">some text</Text>
            <Text variant="caption-2">some text</Text>
            <Text variant="display-3">some text</Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text variant="body-1">some text</Text>
<Text variant="caption-2">some text</Text>
<Text variant="display-3">some text</Text>
```

<!--/GITHUB_BLOCK-->

### Ellipse

Diese Eigenschaft ermöglicht es Ihnen, überlaufenden Text auszublenden:

`false`: Wird standardmäßig verwendet.

`true`: Überlaufender Inhalt wird durch eine Ellipse (`…`) ersetzt.

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text ellipsis={false}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
            <Text ellipsis>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text ellipsis={false}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab
    rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente
    exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
<Text ellipsis={true}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab
    rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente
    exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
```

<!--/GITHUB_BLOCK-->

### Leerzeichen

Dies steht für die CSS-Eigenschaft `white-space`. Es kann entweder `nowrap` oder `break-spaces` sein.

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            <Text whiteSpace="nowrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            <Text whiteSpace="break-spaces">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
<Text whiteSpace={"nowrap"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
<Text whiteSpace={"break-spaces"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
```

<!--/GITHUB_BLOCK-->

### Wortumbruch

Dies steht für die CSS-Eigenschaft `word-break`. Der einzige verfügbare Wert ist `break-all`. | `break-word`.

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
            <Text wordBreak="break-all">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic
    delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam
    quibusdam libero ipsa veritatis quisquam!</Text>
<Text wordBreak="break-all">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
    est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente
    exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
```

<!--/GITHUB_BLOCK-->

### Farbe

Gibt die Textfarbe an. Die verfügbaren Farben sind:
`primary`, `complementary`, `secondary`, `hint`, `info`, `info-heavy`, `positive`, `positive-heavy`, `warning`, `warning-heavy`, `danger`, `danger-heavy`, `utility`, `utility-heavy`, `misc`, `misc-heavy`, `brand`, `link`, `link-hover`, `link-visited`, `link-visited-hover`, `dark-primary`, `dark-complementary`, `dark-secondary`, `light-primary`, `light-complementary`, `light-secondary`, `light-hint`, `inverted-primary`, `inverted-complementary`, `inverted-secondary` und `inverted-hint`.

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text color="info">some text</Text>
            <Text color="positive">some text</Text>
            <Text color="warning">some text</Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text color="info">some text</Text>
<Text color="positive">some text</Text>
<Text color="warning">some text</Text>
```

<!--/GITHUB_BLOCK-->

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
