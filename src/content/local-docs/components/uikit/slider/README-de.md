<!--GITHUB_BLOCK-->

# Slider

<!--/GITHUB_BLOCK-->

Der Slider ist eine anpassbare und reaktionsfähige React-Komponente, die es Benutzern ermöglicht, einen einzelnen Wert oder einen Wertebereich aus einem angegebenen Datensatz auszuwählen.

```tsx
import {Slider} from '@gravity-ui/uikit';
```

## Slider-Varianten

### Einzelner Slider

Dies ist ein Slider mit einem Griff zur Auswahl eines einzelnen Wertes. Er wird standardmäßig verwendet.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider />
```

<!--/GITHUB_BLOCK-->

### Bereichs-Slider

Dies ist ein Slider mit zwei Griffen zur Auswahl eines Bereichs. Um ihn zu verwenden, setzen Sie `defaultValue` (für einen ungesteuerten Slider) oder `value` (für einen gesteuerten) für das Array.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider defaultValue={[20, 40]} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider defaultValue={[20, 40]} />
```

<!--/GITHUB_BLOCK-->

## Zustände

### Deaktiviert

Dies ist ein Zustand eines `Slider`, bei dem Sie dem Benutzer nicht erlauben möchten, mit dieser Komponente zu interagieren.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider disabled />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider disabled={true} />
```

<!--/GITHUB_BLOCK-->

### Fehler

Dieser `Slider`-Zustand ist für eine falsche Benutzereingabe vorgesehen. Um das Erscheinungsbild des `Slider` zu ändern, verwenden Sie die Eigenschaft `validationState` mit dem Wert `"invalid"`. Optional können Sie eine Fehlermeldung über die Eigenschaft `errorMessage` bereitstellen. Dieser Meldungstext wird unter dem Slider gerendert.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider validationState="invalid" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider validationState="invalid" errorMessage="Error message" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider validationState={"invalid"} />
<Slider validationState={"invalid"} errorMessage="Error message" />
```

<!--/GITHUB_BLOCK-->

## Größe

Verwenden Sie die Eigenschaft `size`, um die Größe des `Slider` zu verwalten. Die Standardgröße ist `m`.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider size="s" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="m" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="l" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="xl" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider size="s" />
<Slider size="m" />
<Slider size="l" />
<Slider size="xl" />
```

<!--/GITHUB_BLOCK-->

## Wert

### Minimaler und maximaler Wert

Die Eigenschaften `min` und `max` definieren die Grenzen des Bereichs, den der `Slider` verarbeiten kann. Diese Eigenschaften sind entscheidend für die Festlegung der Grenzen der auswählbaren Werte.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider min={10} />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider max={50} />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider min={20} max={60} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider min={10} />
<Slider max={50} />
<Slider min={20} max={60} />
```

<!--/GITHUB_BLOCK-->

### Schrittweite

Die Eigenschaft `step` bestimmt die Inkremente innerhalb des minimalen und maximalen Wertebereichs. Das bedeutet, wie stark sich der Wert bei einer einzelnen Slider-Bewegung ändert.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider step={10} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider step={10} />
```

<!--/GITHUB_BLOCK-->

### Markierungen

Die Eigenschaft `marks` wird in der `Slider`-Komponente verwendet, um visuelle Markierungen entlang des Sliders festzulegen, die verschiedene Punkte zwischen dem minimalen und maximalen Wert anzeigen. Diese Eigenschaft verbessert die Benutzerfreundlichkeit und die visuelle Oberfläche des Sliders, insbesondere zur Kennzeichnung spezifischer Intervalle. Standardmäßig sind es 2 (minimale und maximale Werte). Sie können sie auf 2 verschiedene Arten verwenden:

- die Anzahl der visuellen Markierungen entlang des Sliders

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={11} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={11} />
```

<!--/GITHUB_BLOCK-->

- das Array der Markierungswerte entlang des Sliders

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={[0, 50, 100]} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[0, 50, 100]} />
```

<!--/GITHUB_BLOCK-->

Ein Wert von `0` oder ein leeres Array `[]` in der Eigenschaft `marks` blendet alle Markierungen vom `Slider` aus.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={0} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={0} />
```

<!--/GITHUB_BLOCK-->

> Der Markierungswert ist zur Auswahl verfügbar, auch wenn er nicht der `step`-Bedingung entspricht.

Sie können das Anzeigeformat der Markierungswerte mit der Eigenschaft `marksFormat` ändern.

#### Verfügbare Werte definieren

Sie können die Eigenschaft `step` auf `null` setzen, um eine Reihe spezifischer Werte zu definieren, die der Slider verarbeiten kann, im Gegensatz zu einem kontinuierlichen Bereich. Dies ist besonders nützlich, wenn nur bestimmte diskrete Werte für die Auswahl gültig sind. In diesem Fall ermöglichen die Eigenschaften `min`, `max` und `marks` die Angabe eines Arrays von Zahlen, die die genauen Werte darstellen, die Benutzer mit dem `Slider` auswählen können.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={[10, 20, 50, 55, 65, 80]} step={null} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[10, 20, 50, 55, 65, 80]} step={null} />
```

<!--/GITHUB_BLOCK-->

## Startpunkt

Die Eigenschaft `startPoint` ermöglicht es Ihnen, den Startpunkt der Leiste festzulegen. Standardmäßig verwendet sie den minimalen `Slider`-Wert. Sie wird ignoriert, wenn Sie einen `Slider` mit Bereichswerten verwenden oder wenn Sie die Eigenschaft `inverted` setzen.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider startPoint={50} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider startPoint={50} />
```

<!--/GITHUB_BLOCK-->

## Invertiert

Die Eigenschaft `inverted` ermöglicht es Ihnen, die invertierte Ansicht der Leiste des `Slider` festzulegen.
Standardmäßig (bei `false`) zeigt der `Slider` das Intervall vom `min` bis zum Griff an.
Wenn `true`, zeigt es das Intervall vom Griff bis zum `max` an.
Nur für einzelne `Slider`. Die Eigenschaft `startPoint` wird ignoriert.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider inverted />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider inverted />
```

<!--/GITHUB_BLOCK-->

## Tooltip

Die Eigenschaft `tooltipDisplay` wird in der `Slider`-Komponente verwendet, um das Anzeigeverhalten eines Tooltips zu steuern, der den aktuellen Wert anzeigt, während der Benutzer mit dem Slider interagiert. Der Wert `auto` zeigt den Tooltip nur an, wenn die Griffe des `Slider` mit der Maus überfahren oder fokussiert werden.

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider tooltipDisplay="on" />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider tooltipDisplay="on" />
```

<!--/GITHUB_BLOCK-->

Sie können das Anzeigeformat des Tooltip-Wertes mit der Eigenschaft `tooltipFormat` ändern. Wenn Sie `tooltipformat` nicht angeben, wird `marksFormat` verwendet, um den Wert im Tooltip anzuzeigen.

## Eigenschaften

| Name                             | Beschreibung                                                                                                                                                                              |                         Typ                         | Standard |
| :------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------: | :------: |
| apiRef                           | Ref zu den Slider-Komponenten-Props für Fokus und Blur                                                                                                                                     |                `RefObject<SliderRef>`                |          |
| autoFocus                        | Das `autofocus`-Attribut des Steuerelements                                                                                                                                              |                      `boolean`                       |          |
| className                        | Der Klassenname des Wrapper-Elements des Steuerelements                                                                                                                                  |                       `string`                       |          |
| [defaultValue](#slider-variants) | Der Standardwert des Steuerelements, der verwendet wird, wenn die Komponente nicht gesteuert wird. Standardmäßig wird der minimale `Slider`-Wert verwendet.                                |             `number` `[number, number]`              |          |
| [disabled](#disabled)            | Zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann                                                                                                                 |                      `boolean`                       | `false`  |
| [errorMessage](#error)           | Text einer anzuzeigenden Fehlermeldung                                                                                                                                                   |                       `string`                       |          |
| [marks](#marks)                  | Textmarkierungen unter dem Schieberegler. Kann auf die Anzahl der Markierungen des Schiebereglers gesetzt werden oder auf ein Array von Werten, die Markierungen haben sollen. `0` oder ein leeres Array versteckt alle Markierungen. |                 `number` `number[]`                  |   `2`    |
| [marksFormat](#marks)            | Formatierer für den angezeigten Wert der Markierung                                                                                                                                      |             `(value: number) => string`              |          |
| [max](#min-and-max-value)        | Der Maximalwert der Komponente.                                                                                                                                                          |                       `number`                       |  `100`   |
| [min](#min-and-max-value)        | Der Minimalwert der Komponente.                                                                                                                                                          |                       `number`                       |   `0`    |
| onBlur                           | Wird ausgelöst, wenn das Steuerelement den Fokus verliert. Stellt das Fokus-Ereignis als Argument des Callbacks bereit                                                                    | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |          |
| onUpdate                         | Wird ausgelöst, wenn der Wert des Schiebereglers vom Benutzer geändert wird. Stellt das Änderungsereignis als Argument des Callbacks bereit                                                |   `((value: number \| [number, number]) => void)`    |          |
| onUpdateComplete                 | Wird ausgelöst, wenn `ontouchend` oder `onmouseup` ausgelöst wird. Stellt das Änderungsereignis als Argument des Callbacks bereit                                                          |   `((value: number \| [number, number]) => void)`    |          |
| onFocus                          | Wird ausgelöst, wenn das Steuerelement den Fokus erhält. Stellt das Fokus-Ereignis als Argument des Callbacks bereit                                                                      | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |          |
| [size](#size)                    | Die Größe des Steuerelements                                                                                                                                                             |               `"s"` `"m"` `"l"` `"xl"`               |  `"m"`   |
| [step](#step)                    | Der Wert, der bei jedem Schritt des Schiebereglers hinzugefügt oder subtrahiert wird. Kann auf `null` gesetzt werden, um `marks` als Schritte zu verwenden.                               |                   `number` `null`                    |   `1`    |
| [startPoint](#start-point)       | Startpunkt der Schiene. Wird für Bereichsschieberegler und invertierte Schieberegler ignoriert.                                                                                           |                       `number`                       |          |
| [inverted](#inverted)            | Schieberegler mit invertierter Schiene (vom Griff bis zum `max`).                                                                                                                        |                      `boolean`                       |          |
| tabIndex                         | Das `tabIndex`-Attribut des Steuerelements                                                                                                                                               |             `number` `[number, number]`              |          |
| [tooltipDisplay](#tooltip)       | Das Anzeigeverhalten des Tooltips                                                                                                                                                        |                  `off` `on` `auto`                   |  `off`   |
| [tooltipFormat](#tooltip)        | Formatierer für den angezeigten Wert des Tooltips. Verwendet `marksFormat`, wenn nicht gesetzt                                                                                             |             `(value: number) => string`              |          |
| [validationState](#error)        | Validierungsstatus                                                                                                                                                                       |                     `"invalid"`                      |          |
| [value](#slider-variants)        | Der Wert des Steuerelements                                                                                                                                                              |             `number` `[number, number]`              |          |
