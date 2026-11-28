Der Slider ist eine anpassbare und reaktionsfähige React-Komponente, die es Benutzern ermöglicht, einen einzelnen Wert oder einen Wertebereich aus einem angegebenen Datensatz auszuwählen.

```tsx
import {Slider} from '@gravity-ui/uikit';
```

## Slider-Varianten

### Einzelner Slider

Dies ist ein Slider mit einem Griff zur Auswahl eines einzelnen Wertes. Er wird standardmäßig verwendet.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Bereichs-Slider

Dies ist ein Slider mit zwei Griffen zur Auswahl eines Bereichs. Um ihn zu verwenden, setzen Sie `defaultValue` (für einen ungesteuerten Slider) oder `value` (für einen gesteuerten) für das Array.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Zustände

### Deaktiviert

Dies ist ein Zustand eines `Slider`, bei dem Sie dem Benutzer nicht erlauben möchten, mit dieser Komponente zu interagieren.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Fehler

Dieser `Slider`-Zustand ist für eine falsche Benutzereingabe vorgesehen. Um das Erscheinungsbild des `Slider` zu ändern, verwenden Sie die Eigenschaft `validationState` mit dem Wert `"invalid"`. Optional können Sie eine Fehlermeldung über die Eigenschaft `errorMessage` bereitstellen. Dieser Meldungstext wird unter dem Slider gerendert.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Größe

Verwenden Sie die Eigenschaft `size`, um die Größe des `Slider` zu verwalten. Die Standardgröße ist `m`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Wert

### Minimaler und maximaler Wert

Die Eigenschaften `min` und `max` definieren die Grenzen des Bereichs, den der `Slider` verarbeiten kann. Diese Eigenschaften sind entscheidend für die Festlegung der Grenzen der auswählbaren Werte.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Schrittweite

Die Eigenschaft `step` bestimmt die Inkremente innerhalb des minimalen und maximalen Wertebereichs. Das bedeutet, wie stark sich der Wert bei einer einzelnen Slider-Bewegung ändert.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Markierungen

Die Eigenschaft `marks` wird in der `Slider`-Komponente verwendet, um visuelle Markierungen entlang des Sliders festzulegen, die verschiedene Punkte zwischen dem minimalen und maximalen Wert anzeigen. Diese Eigenschaft verbessert die Benutzerfreundlichkeit und die visuelle Oberfläche des Sliders, insbesondere zur Kennzeichnung spezifischer Intervalle. Standardmäßig sind es 2 (minimale und maximale Werte). Sie können sie auf 2 verschiedene Arten verwenden:

- die Anzahl der visuellen Markierungen entlang des Sliders

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

- das Array der Markierungswerte entlang des Sliders

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

Ein Wert von `0` oder ein leeres Array `[]` in der Eigenschaft `marks` blendet alle Markierungen vom `Slider` aus.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

> Der Markierungswert ist zur Auswahl verfügbar, auch wenn er nicht der `step`-Bedingung entspricht.

Sie können das Anzeigeformat der Markierungswerte mit der Eigenschaft `marksFormat` ändern.

#### Verfügbare Werte definieren

Sie können die Eigenschaft `step` auf `null` setzen, um eine Reihe spezifischer Werte zu definieren, die der Slider verarbeiten kann, im Gegensatz zu einem kontinuierlichen Bereich. Dies ist besonders nützlich, wenn nur bestimmte diskrete Werte für die Auswahl gültig sind. In diesem Fall ermöglichen die Eigenschaften `min`, `max` und `marks` die Angabe eines Arrays von Zahlen, die die genauen Werte darstellen, die Benutzer mit dem `Slider` auswählen können.

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

## Startpunkt

Die Eigenschaft `startPoint` ermöglicht es Ihnen, den Startpunkt der Leiste festzulegen. Standardmäßig verwendet sie den minimalen `Slider`-Wert. Sie wird ignoriert, wenn Sie einen `Slider` mit Bereichswerten verwenden oder wenn Sie die Eigenschaft `inverted` setzen.

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

## Invertiert

Die Eigenschaft `inverted` ermöglicht es Ihnen, die invertierte Ansicht der Leiste des `Slider` festzulegen.
Standardmäßig (bei `false`) zeigt der `Slider` das Intervall vom `min` bis zum Griff an.
Wenn `true`, zeigt es das Intervall vom Griff bis zum `max` an.
Nur für einzelne `Slider`. Die Eigenschaft `startPoint` wird ignoriert.

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

## Tooltip

Die Eigenschaft `tooltipDisplay` wird in der `Slider`-Komponente verwendet, um das Anzeigeverhalten eines Tooltips zu steuern, der den aktuellen Wert anzeigt, während der Benutzer mit dem Slider interagiert. Der Wert `auto` zeigt den Tooltip nur an, wenn die Griffe des `Slider` mit der Maus überfahren oder fokussiert werden.

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

Sie können das Anzeigeformat des Tooltip-Wertes mit der Eigenschaft `tooltipFormat` ändern. Wenn Sie `tooltipformat` nicht angeben, wird `marksFormat` verwendet, um den Wert im Tooltip anzuzeigen.

## Eigenschaften

| Name                               | Description                                                                                                                                                                              |                         Type                         | Standardwert |
| :--------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------: | :----------: |
| apiRef                             | Ref zu den Slider-Komponenten-Props für Fokus und Blur                                                                                                                                   |                `RefObject<SliderRef>`                |              |
| autoFocus                          | Das `autofocus`-Attribut des Steuerelements                                                                                                                                             |                      `boolean`                       |              |
| className                          | Der Klassenname des Wrapper-Elements des Steuerelements                                                                                                                                  |                       `string`                       |              |
| [defaultValue](#slider-variations) | Der Standardwert des Steuerelements, der verwendet wird, wenn die Komponente nicht gesteuert wird. Standardmäßig wird der minimale `Slider`-Wert verwendet.                               |             `number` `[number, number]`              |              |
| [disabled](#disabled)              | Zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann                                                                                                                |                      `boolean`                       |    `false`   |
| [errorMessage](#error)             | Text einer anzuzeigenden Fehlermeldung                                                                                                                                                   |                       `string`                       |              |
| [marks](#marks)                    | Textmarkierungen unter dem Schieberegler. Kann auf die Anzahl der Markierungen des Schiebereglers gesetzt werden oder auf ein Array von Werten, für die Markierungen angezeigt werden sollen. `0` oder ein leeres Array blendet alle Markierungen aus. |                 `number` `number[]`                  |     `2`      |
| [marksFormat](#marks)              | Formatierer für den angezeigten Wert der Markierung                                                                                                                                      |             `(value: number) => string`              |              |
| [max](#minimum-and-maximum-value)  | Der Maximalwert der Komponente.                                                                                                                                                          |                       `number`                       |    `100`     |
| [min](#minimum-and-maximum-value)  | Der Minimalwert der Komponente.                                                                                                                                                          |                       `number`                       |     `0`      |
| onBlur                             | Wird ausgelöst, wenn das Steuerelement den Fokus verliert. Übergibt das Fokusereignis als Argument an die Callback-Funktion.                                                              | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |              |
| onUpdate                           | Wird ausgelöst, wenn der Wert des Schiebereglers vom Benutzer geändert wird. Übergibt das Änderungsereignis als Argument an die Callback-Funktion.                                       |   `((value: number \| [number, number]) => void)`    |              |
| onUpdateComplete                   | Wird ausgelöst, wenn `ontouchend` oder `onmouseup` ausgelöst wird. Übergibt das Änderungsereignis als Argument an die Callback-Funktion.                                                |   `((value: number \| [number, number]) => void)`    |              |
| onFocus                            | Wird ausgelöst, wenn das Steuerelement den Fokus erhält. Übergibt das Fokusereignis als Argument an die Callback-Funktion.                                                               | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |              |
| [size](#size)                      | Die Größe des Steuerelements                                                                                                                                                             |               `"s"` `"m"` `"l"` `"xl"`               |     `"m"`     |
| [step](#step)                      | Der Wert, der bei jedem Schritt des Schiebereglers hinzugefügt oder abgezogen wird. Kann auf `null` gesetzt werden, um `marks` als Schritte zu verwenden.                                 |                   `number` `null`                    |     `1`      |
| [startPoint](#start-point)         | Startpunkt der Leiste. Wird für Bereichsschieberegler und invertierte Schieberegler ignoriert.                                                                                           |                       `number`                       |              |
| [inverted](#inverted)              | Schieberegler mit invertierter Leiste (vom Griff bis `max`).                                                                                                                             |                      `boolean`                       |              |
| tabIndex                           | Das `tabIndex`-Attribut des Steuerelements                                                                                                                                              |             `number` `[number, number]`              |              |
| [tooltipDisplay](#tooltip)         | Das Anzeigeverhalten des Tooltips                                                                                                                                                        |                  `off` `on` `auto`                   |     `off`     |
| [tooltipFormat](#tooltip)          | Formatierer für den angezeigten Wert des Tooltips. Verwendet `marksFormat`, wenn nicht gesetzt.                                                                                           |             `(value: number) => string`              |              |
| [validationState](#error)          | Validierungsstatus                                                                                                                                                                       |                     `"invalid"`                      |              |
| [value](#slider-variations)        | Der Wert des Steuerelements                                                                                                                                                              |             `number` `[number, number]`              |              |