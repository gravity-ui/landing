<!--GITHUB_BLOCK-->

# Skeleton

<!--/GITHUB_BLOCK-->

Der Skeleton-Komponente zeigt eine Platzhaltervorschau Ihres Inhalts an, bevor die Daten geladen werden. Diese Vorschau wird angezeigt, um die Frustration durch Ladezeiten zu reduzieren.

```tsx
import {Skeleton} from '@gravity-ui/uikit';
```

## Animation

Verwenden Sie die `animation`-Eigenschaft, um die Ladeanimation zu steuern. Der Standardwert ist `'gradient'`.

| Wert         | Beschreibung                               |
| :----------- | :----------------------------------------- |
| `'gradient'` | Gleitender Gradienten-Schimmer – **Standard** |
| `'pulse'`    | Opazitäts-Puls                             |
| `'none'`     | Keine Animation                            |

## Variante

Verwenden Sie die `variant`-Eigenschaft, um ein voreingestelltes Erscheinungsbild auszuwählen. Der Standardwert ist `'rect'`.

| Wert       | Beschreibung                                                                                              |
| :--------- | :-------------------------------------------------------------------------------------------------------- |
| `'rect'`   | Abgerundete Ecken mit einem größenabhängigen Border-Radius-Token – **Standard**                            |
| `'circle'` | Vollständig kreisförmig (`border-radius: 50%`, `aspect-ratio: 1`)                                         |
| `'square'` | Quadratisches Seitenverhältnis (`aspect-ratio: 1`) mit der gleichen Abrundung wie `'rect'`                |
| `'text'`   | Textzeilen-Platzhalter – Höhe erbt `font-size` und `line-height` aus dem übergeordneten Kontext           |

## Größe

Verwenden Sie die `size`-Eigenschaft, um eine voreingestellte Skeleton-Höhe (und Breite für die Varianten `'circle'` / `'square'`) festzulegen. Jede Größe passt auch das Border-Radius-Token an, das von den Varianten `'rect'` und `'square'` verwendet wird. Wenn `size` weggelassen wird, legen Sie die Abmessungen stattdessen mit `width` und `height` fest.

| Wert  | Beschreibung   |
| :---- | :------------- |
| `'xs'` | Extra klein    |
| `'s'`  | Klein          |
| `'m'`  | Mittel         |
| `'l'`  | Groß           |
| `'xl'` | Extra groß     |

<!--GITHUB_BLOCK-->

```tsx
<Skeleton size="xs" width={120} />
<Skeleton size="m"  width={200} />
<Skeleton size="xl" width={280} />

<Skeleton variant="circle" size="l" />
<Skeleton variant="square" size="l" />
```

<!--/GITHUB_BLOCK-->

## Text-Platzhalter

Verwenden Sie `variant="text"`, um ein Skeleton zu rendern, das `font-size` und `line-height` vom übergeordneten Kontext erbt. Platzieren Sie mehrere Skeletons innerhalb eines `<Text variant="...">`-Elements für mehrzeilige Platzhalter.

<!--GITHUB_BLOCK-->

```tsx
<Text variant="body-1">
  <Skeleton variant="text" width={400} />
  <Skeleton variant="text" width={400} />
  <Skeleton variant="text" width={240} />
</Text>
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

| Name        | Beschreibung                                                                                                                 |                       Typ                       |  Standard  |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------: | :--------: |
| `style`     | Benutzerdefinierte CSS-Eigenschaften für das Wurzelelement                                                                    |              `React.CSSProperties`              |            |
| `className` | Benutzerdefinierte CSS-Klasse für das Wurzelelement                                                                          |                     `string`                    |            |
| `qa`        | `data-qa` HTML-Attribut, das für Tests verwendet wird                                                                         |                     `string`                    |            |
| `animation` | Animationstyp, der auf das Skelett angewendet werden soll                                                                    |      `'gradient'` \| `'pulse'` \| `'none'`      | `gradient` |
| `variant`   | Voreingestelltes Erscheinungsbild. `'circle'` und `'square'` erzwingen `aspect-ratio: 1`. `'text'` erbt Typografie vom übergeordneten Kontext. | `'rect'` \| `'square'` \| `'circle'` \| `'text'` |   `rect`   |
| `size`      | Voreingestellte Höhe (und Breite für `'circle'`/`'square'` Varianten). Steuert auch das `border-radius`-Token für `'rect'`/`'square'`. |   `'xs'` \| `'s'` \| `'m'` \| `'l'` \| `'xl'`   |            |
| `width`     | Benutzerdefinierte Breite. Alias für `style.width`                                                                         |              `number` \| `string`               |            |
| `height`    | Benutzerdefinierte Höhe. Alias für `style.height`                                                                          |              `number` \| `string`               |            |
