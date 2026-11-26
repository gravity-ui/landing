GRAVITY_TRANSLATION_BLOCK_0_END

Diese Komponente dient zur Darstellung von Avataren. Sie verfügt über drei grundlegende Avatartypen: Bild, Symbol und Text (Namenskürzel). Alle diese Typen haben spezielle Eigenschaften zur Konfiguration des Verhaltens und Erscheinungsbilds.

```tsx
import {Avatar} from '@gravity-ui/uikit';
```

## Typen

### Bild

Diese Komponente kann zur Darstellung von Avataren mithilfe von Bildern verwendet werden. Verwenden Sie die Eigenschaft `imgUrl`, um ein Bild bereitzustellen.

GRAVITY_TRANSLATION_BLOCK_1_END

Sie können auch die Eigenschaft `srcSet` bereitstellen, um Bilder unterschiedlicher Größe zu laden.

GRAVITY_TRANSLATION_BLOCK_2_END

Die Komponente `Avatar` verfügt über die Eigenschaft `fallbackImgUrl`, mit der Sie ein Bild bereitstellen können, das angezeigt wird, wenn ein Fehler beim Laden des Bildes auftritt (CSP-Fehler oder kein Originalbild).

GRAVITY_TRANSLATION_BLOCK_3_END

### Symbol

Diese Komponente kann zur Darstellung von Avataren mithilfe von Symbolen verwendet werden. Verwenden Sie die Eigenschaft `icon`, um ein Symbol bereitzustellen, genau wie Sie es bei der Komponente `Icon` tun würden.

GRAVITY_TRANSLATION_BLOCK_4_END

### Text

Diese Komponente kann zur Darstellung von Avataren mithilfe von Text verwendet werden. Verwenden Sie dazu die Eigenschaft `text`. Der Text wird als Initialen (erste Buchstaben von zwei Wörtern) oder nur als die ersten beiden Buchstaben eines einzelnen Wortes gerendert.

GRAVITY_TRANSLATION_BLOCK_5_END

## Erscheinungsbild

### Thema und Ansicht

Die Komponente `Avatar` verfügt über vordefinierte Themen (`normal`, `brand`) und Ansichten (`filled`, `outlined`).

Das Standardthema ist `normal` und die Standardansicht ist `filled`.

GRAVITY_TRANSLATION_BLOCK_6_END

### Benutzerdefinierte Farben

Sie können auch benutzerdefinierte Farben über die Eigenschaften `backgroundColor`, `borderColor` und `color` (letztere funktioniert nur für Symbol- und Text-Avatare) bereitstellen. Diese Farben haben eine höhere Priorität als die Themenfarben.

GRAVITY_TRANSLATION_BLOCK_7_END

### Größe

Verwenden Sie die Eigenschaft `size`, um die Größe des `Avatar` zu verwalten. Die Standardgröße ist `m`. Die möglichen Werte sind `3xs`, `2xs`, `xs`, `s`, `m`, `l` und `xl`.

GRAVITY_TRANSLATION_BLOCK_8_END

### Form

Verwenden Sie die Eigenschaft `shape`, um die Form des `Avatar` zu verwalten. Die Standardform ist `circle`. Die möglichen Werte sind `circle` und `square`.

GRAVITY_TRANSLATION_BLOCK_9_END

## Eigenschaften

### Allgemein

| Name             | Beschreibung                                |                      Type                       | Standard  |
| :--------------- | :------------------------------------------ | :---------------------------------------------: | :-------: |
| size             | Avatar-Größe                                | `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'` |   `m`     |
| theme            | Avatar-Thema                                |              `'normal'` `'brand'`               | `normal`  |
| view             | Optionen für Füllung und Umrandung des Avatars |             `'filled'` `'outlined'`             | `filled`  |
| shape            | Avatar-Form                                 |              `'circle'` `'square'`              | `circle`  |
| backgroundColor  | Benutzerdefinierte Hintergrundfarbe         |                    `string`                     |           |
| borderColor      | Benutzerdefinierte Randfarbe                |                    `string`                     |           |
| title            | `title`-HTML-Attribut                       |                    `string`                     |           |
| aria-label       | `aria-label` für den Avatar-Bereich         |                    `string`                     |           |
| aria-labelledby  | `aria-labelledby` für den Avatar-Bereich    |                    `string`                     |           |
| aria-describedby | `aria-describedby` für den Avatar-Block       |                    `string`                     |           |
| aria-details     | `aria-details` für den Avatar-Block         |                    `string`                     |           |
| className        | Benutzerdefinierte CSS-Klasse für das Wurzelelement |                    `string`                     |           |
| style            | `style`-HTML-Attribut                       |              `React.CSSProperties`              |           |
| qa               | `data-qa`-HTML-Attribut, für Tests verwendet |                    `string`                     |           |

### Bildspezifisch

| Name            | Beschreibung                               |        Typ        |   Standard   |
| :-------------- | :---------------------------------------- | :----------------: | :---------: |
| imgUrl          | `img` `src` HTML-Attribut                 |      `string`      |             |
| fallbackImgUrl  | Fallback-Bild, das bei einem Fehler angezeigt wird |      `string`      |             |
| sizes           | `img` `sizes` HTML-Attribut               |      `string`      |             |
| srcSet          | `img` `srcSet` HTML-Attribut              |      `string`      |             |
| alt             | `img` `alt` HTML-Attribut                 |      `string`      | props.title |
| loading         | `img` `loading` HTML-Attribut             | `'eager'` `'lazy'` |             |
| withImageBorder | Fügt dem Bild einen Standardrand hinzu    |     `boolean`      |             |

### Icon-spezifisch

| Name  | Beschreibung        |    Typ    | Standard |
| :---- | :----------------- | :--------: | :-----: |
| icon  | Quelle des SVG-Icons | `IconData` |         |
| color | Benutzerdefinierte Icon-Farbe  |  `string`  |         |

### Text-spezifisch

| Name  | Beschreibung       |   Typ   | Standard |
| :---- | :---------------- | :------: | :-----: |
| text  | Avatar-Text       | `string` |         |
| color | Benutzerdefinierte Textfarbe | `string` |         |

## CSS API

| Name                            | Beschreibung             |
| :------------------------------ | :---------------------- |
| `--g-avatar-size`               | Größe (Breite und Höhe) |
| `--g-avatar-border-width`       | Randbreite            |
| `--g-avatar-inner-border-width` | Innere Randbreite      |
| `--g-avatar-border-color`       | Randfarbe            |
| `--g-avatar-background-color`   | Hintergrundfarbe        |
| `--g-avatar-text-color`         | Icon- und Textfarbe     |
| `--g-avatar-font-weight`        | Text-Schriftstärke        |
| `--g-avatar-font-size`          | Text-Schriftgröße          |
| `--g-avatar-line-height`        | Text-Zeilenhöhe        |