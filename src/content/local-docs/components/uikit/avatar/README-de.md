<!--GITHUB_BLOCK-->

# Avatar

<!--/GITHUB_BLOCK-->

Diese Komponente dient zur Darstellung von Avataren. Sie hat drei grundlegende Avatartypen: Bild, Symbol und Text (Namenskürzel). Alle diese Typen verfügen über spezielle Eigenschaften zur Konfiguration des Verhaltens und Erscheinungsbilds.

```tsx
import {Avatar} from '@gravity-ui/uikit';
```

## Typen

### Bild

Diese Komponente kann zur Darstellung von Avataren mit Bildern verwendet werden. Um ein Bild bereitzustellen, verwenden Sie die Eigenschaft `imgUrl`.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return <Avatar imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352" size="l" />;
}
SANDBOX-->

Sie können auch die Eigenschaft `srcSet` bereitstellen, um Bilder unterschiedlicher Größe zu laden.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <Avatar
            imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352"
            srcSet="https://loremflickr.com/57/43/cats?lock=2879400393572352 1x, https://loremflickr.com/131/98/cats?lock=4373954936438784 2x, https://loremflickr.com/164/123/cats?lock=3007328513163264 3x, https://loremflickr.com/225/169/cats?lock=8243879964835840 4x"
            size="l"
        />
    );
}
SANDBOX-->

Die Komponente `Avatar` verfügt über die Eigenschaft `fallbackImgUrl`, mit der Sie ein Bild bereitstellen können, das angezeigt wird, wenn ein Fehler beim Laden des Bildes auftritt (CSP-Fehler oder kein Originalbild).

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <Avatar
            imgUrl="random_link"
            fallbackImgUrl="https://loremflickr.com/640/480/cats?lock=3552647338524672"
            size="l"
        />
    );
}
SANDBOX-->

### Symbol

Diese Komponente kann zur Darstellung von Avataren mit Symbolen verwendet werden. Verwenden Sie die Eigenschaft `icon`, um ein Symbol bereitzustellen, genau wie Sie es bei der Komponente `Icon` tun würden.

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return <Avatar icon={GraduationCap} size="l" />;
}
SANDBOX-->

### Text

Diese Komponente kann zur Darstellung von Avataren mit Text verwendet werden. Verwenden Sie dazu die Eigenschaft `text`. Der Text wird als Initialen (erste Buchstaben von zwei Wörtern) oder nur als die ersten beiden Buchstaben eines einzelnen Wortes gerendert.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" size="l" />
            <Avatar text="Guardian" size="l" />
        </>
    );
}
SANDBOX-->

## Erscheinungsbild

### Thema und Ansicht

Die Komponente `Avatar` verfügt über vordefinierte Themen (`normal`, `brand`) und Ansichten (`filled`, `outlined`).

Das Standardthema ist `normal` und die Standardansicht ist `filled`.

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar icon={GraduationCap} size="l" theme="normal" view="filled" />
            <Avatar icon={GraduationCap} size="l" theme="brand" view="filled" />
            <Avatar icon={GraduationCap} size="l" theme="normal" view="outlined" />
            <Avatar icon={GraduationCap} size="l" theme="brand" view="outlined" />
        </>
    );
}
SANDBOX-->

### Benutzerdefinierte Farben

Sie können auch benutzerdefinierte Farben über die Eigenschaften `backgroundColor`, `borderColor` und `color` bereitstellen (letztere funktioniert nur für Symbol- und Text-Avatare). Diese Farben haben eine höhere Priorität als die Themenfarben.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar
                text="Charles Darwin"
                size="l"
                backgroundColor="var(--g-color-base-danger-medium)"
                color="var(--g-color-text-primary)"
            />
            <Avatar text="Charles Darwin" size="l" borderColor="var(--g-color-line-misc)" />
        </>
    );
}
SANDBOX-->

### Größe

Verwenden Sie die Eigenschaft `size`, um die Größe des `Avatar` zu verwalten. Die Standardgröße ist `m`. Mögliche Werte sind `3xs`, `2xs`, `xs`, `s`, `m`, `l` und `xl`.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" theme="brand" size="3xs" />
            <Avatar text="Charles Darwin" theme="brand" size="2xs" />
            <Avatar text="Charles Darwin" theme="brand" size="xs" />
            <Avatar text="Charles Darwin" theme="brand" size="s" />
            <Avatar text="Charles Darwin" theme="brand" size="m" />
            <Avatar text="Charles Darwin" theme="brand" size="l" />
            <Avatar text="Charles Darwin" theme="brand" size="xl" />
        </>
    );
}
SANDBOX-->

### Form

Verwenden Sie die Eigenschaft `shape`, um die Form des `Avatar` zu verwalten. Die Standardform ist `circle`. Mögliche Werte sind `circle` und `square`.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" theme="brand" shape="circle" />
            <Avatar text="Charles Darwin" theme="brand" shape="square" />
        </>
    );
}
SANDBOX-->

## Eigenschaften

### Allgemein

| Name             | Beschreibung                               |                      Typ                       | Standard  |
| :--------------- | :----------------------------------------- | :---------------------------------------------: | :-------: |
| size             | Avatar-Größe                               | `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'` |   `m`     |
| theme            | Avatar-Thema                               |              `'normal'` `'brand'`               | `normal`  |
| view             | Avatar-Füll- und Umrissoptionen            |             `'filled'` `'outlined'`             | `filled`  |
| shape            | Avatar-Form                                |              `'circle'` `'square'`              | `circle`  |
| backgroundColor  | Benutzerdefinierte Hintergrundfarbe        |                    `string`                     |           |
| borderColor      | Benutzerdefinierte Randfarbe               |                    `string`                     |           |
| title            | `title` HTML-Attribut                      |                    `string`                     |           |
| aria-label       | `aria-label` für den Avatar-Bereich        |                    `string`                     |           |
| aria-labelledby  | `aria-labelledby` für den Avatar-Bereich   |                    `string`                     |           |
| aria-describedby | `aria-describedby` für den Avatar-Block      |                    `string`                     |           |
| aria-details     | `aria-details` für den Avatar-Block        |                    `string`                     |           |
| className        | Benutzerdefinierte CSS-Klasse für das Root-Element |                    `string`                     |           |
| style            | `style` HTML-Attribut                      |              `React.CSSProperties`              |           |
| qa               | `data-qa` HTML-Attribut, für Tests verwendet |                    `string`                     |           |

### Bildspezifisch

| Name            | Beschreibung                               |        Typ        |   Standard   |
| :-------------- | :----------------------------------------- | :----------------: | :----------: |
| imgUrl          | `img` `src` HTML-Attribut                  |      `string`      |              |
| fallbackImgUrl  | Fallback-Bild, das bei einem Fehler angezeigt wird |      `string`      |              |
| sizes           | `img` `sizes` HTML-Attribut                |      `string`      |              |
| srcSet          | `img` `srcSet` HTML-Attribut               |      `string`      |              |
| alt             | `img` `alt` HTML-Attribut                  |      `string`      | props.title  |
| loading         | `img` `loading` HTML-Attribut              | `'eager'` `'lazy'` |              |
| withImageBorder | Standardrand für das Bild hinzufügen       |     `boolean`      |              |

### Ikonspezifisch

| Name  | Beschreibung        |    Typ    | Standard |
| :---- | :------------------ | :-------: | :------: |
| icon  | Quelle des SVG-Icons | `IconData` |          |
| color | Benutzerdefinierte Ikonsfarbe |  `string`  |          |

### Textspezifisch

| Name  | Beschreibung       |   Typ   | Standard |
| :---- | :----------------- | :-----: | :------: |
| text  | Avatar-Text        | `string` |          |
| color | Benutzerdefinierte Textfarbe | `string` |          |

## CSS API

| Name                            | Beschreibung            |
| :------------------------------ | :---------------------- |
| `--g-avatar-size`               | Größe (Breite und Höhe) |
| `--g-avatar-border-width`       | Randbreite              |
| `--g-avatar-inner-border-width` | Innere Randbreite       |
| `--g-avatar-border-color`       | Randfarbe               |
| `--g-avatar-background-color`   | Hintergrundfarbe        |
| `--g-avatar-text-color`         | Icon- und Textfarbe     |
| `--g-avatar-font-weight`        | Text-Schriftstärke      |
| `--g-avatar-font-size`          | Text-Schriftgröße       |
| `--g-avatar-line-height`        | Text-Zeilenhöhe         |