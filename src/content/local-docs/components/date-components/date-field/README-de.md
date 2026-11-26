```tsx
import {DateField} from '@gravity-ui/date-components';
```

Die `DateField`-Komponente ist ein vielseitiges und praktisches Eingabefeld, das speziell für die Datumseingabe in React-Anwendungen entwickelt wurde. Mit einer intuitiven Benutzeroberfläche und einfacher Integration ist es perfekt für jedes Formular, das Datums- oder Zeiteingaben erfordert, wie z. B. Terminplaner, Buchungssysteme oder datengesteuerte Berichte. Es kann gesteuert werden, wenn Sie die Eigenschaft `value` festlegen. Oder es kann ungesteuert sein, wenn Sie keinen Wert festlegen, aber in diesem Fall können Sie den Anfangszustand mit der optionalen Eigenschaft `defaultValue` verwalten. Die Komponente ist standardmäßig ungesteuert.

## Nützliche Ergänzung

Um Daten im richtigen Format festzulegen, müssen Sie möglicherweise zusätzliche Hilfsprogramme aus der [Date Utils-Bibliothek](https://gravity-ui.com/libraries/date-utils) einbinden.

```tsx
import {dateTimeParse} from '@gravity-ui/date-utils';
```

## Darstellung

Die Darstellung von `DateField` wird durch die Eigenschaften `size`, `view` und `pin` gesteuert.

### Größe

Um die Größe von `DateField` zu steuern, verwenden Sie die Eigenschaft `size`. Die Standardgröße ist `m`.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Ansicht

`normal` - die Hauptansicht von `DateField` (standardmäßig verwendet).

GRAVITY_TRANSLATION_BLOCK_3_END

`clear` - Ansicht von `DateField` ohne sichtbare Ränder (kann mit einem benutzerdefinierten Wrapper verwendet werden)

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Pin

Die Eigenschaft `pin` ermöglicht es Ihnen, die Form der rechten und linken Kanten zu steuern und wird normalerweise zum Kombinieren mehrerer Steuerelemente zu einer einzigen Einheit verwendet.
Der Wert der Eigenschaft `pin` besteht aus Namen für die linke und die Kante, die durch einen Bindestrich getrennt sind, z. B. `"round-brick"`.
Die Kantenstile sind: `round` (Standard), `circle`, `brick` und `clear`.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Wert

### Minimaler und maximaler Wert

Die Eigenschaft `minValue` ermöglicht es Ihnen, das früheste Datum und die früheste Uhrzeit anzugeben, die vom Benutzer eingegeben werden können. Umgekehrt gibt die Eigenschaft `maxValue` das späteste Datum und die späteste Uhrzeit an, die eingegeben werden können. Wenn Sie einen Wert außerhalb dieser Grenzen eingeben, ändert die Komponente ihre Ansicht, wie im Falle eines ungültigen Validierungszustands.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Zustände

### Deaktiviert

Der Zustand von `DateField`, in dem Sie nicht möchten, dass der Benutzer mit der Komponente interagieren kann.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Nur-Lese-Zugriff

`readOnly` ist ein boolesches Attribut, das, wenn es auf true gesetzt ist, die `DateField`-Komponente für den Benutzer unveränderlich macht. Das bedeutet, dass der Benutzer zwar den aktuellen Wert der Eingabe sehen kann, ihn aber nicht ändern kann.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Fehler

Der Zustand von `DateField`, in dem Sie eine falsche Benutzereingabe anzeigen möchten. Um das Erscheinungsbild von `DateField` zu ändern, verwenden Sie die Eigenschaft `validationState` mit dem Wert `"invalid"`. Eine optionale Nachricht kann über die Eigenschaft `errorMessage` hinzugefügt werden. Die Nachricht wird unter der Komponente gerendert.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Zusätzlicher Inhalt

### Platzhalter

Diese Eigenschaft ermöglicht es Ihnen, einen kurzen Hinweis zu geben, der den erwarteten Wert des Eingabefelds beschreibt. Dieser Hinweis wird im Eingabefeld angezeigt, bevor der Benutzer einen Wert eingibt, und verschwindet, sobald Text eingegeben wird.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Beschriftung

Ermöglicht die Platzierung der Beschriftung im linken Teil des Feldes. Die Beschriftung kann nicht mehr als die Hälfte der Gesamtbreite des `DateField`-Bereichs einnehmen.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

### Löschschaltfläche

`hasClear` ist eine boolesche Eigenschaft, die Benutzern die Möglichkeit gibt, den Inhalt des Eingabefelds schnell zu löschen.

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

### Startinhalt

Ermöglicht das Hinzufügen von Inhalten zum Startteil des Feldes. Er wird vor allen anderen Komponenten platziert.

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### Endinhalt

Ermöglicht das Hinzufügen von Inhalten zum Endteil des Feldes. Er wird nach allen anderen Komponenten platziert.

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

## Format

Die Eigenschaft `format` ist eine Zeichenkette, die das Datums- und Zeitformat definiert, das die `DateField`-Komponente akzeptiert und anzeigt. Diese Eigenschaft bestimmt, wie das Datum und die Uhrzeit dem Benutzer visuell präsentiert werden und wie die Eingabe des Benutzers formatiert sein soll. [Verfügbare Formate](https://day.js.org/docs/en/display/format)

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

### Benutzerdefinierter Datumsparser

Sie können eine benutzerdefinierte Parserfunktion bereitstellen, um eingefügte Datumszeichenfolgen über die Eigenschaft `parseDateFromString` zu verarbeiten. Dies ist nützlich, wenn Sie bestimmte Datumsformate oder benutzerdefinierte Parsing-Logik unterstützen müssen, die vom Standardverhalten abweicht.

GRAVITY_TRANSLATION_BLOCK_28_END

## Zeitzone

`timeZone` ist die Eigenschaft zum Festlegen der Zeitzone des Werts in der Eingabe. [Mehr über Zeitzonen erfahren](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Eigenschaften

| Name                | Beschreibung                                                                                                         |                               Typ                                  |          Standard          |
| :------------------ | :------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------: | :------------------------: |
| aria-describedby    | Das `aria-describedby`-Attribut des Steuerelements                                                                   |                               `string`                               |                            |
| aria-details        | Das `aria-details`-Attribut des Steuerelements                                                                       |                               `string`                               |                            |
| aria-label          | Das `aria-label`-Attribut des Steuerelements                                                                         |                               `string`                               |                            |
| aria-labelledby     | Das `aria-labelledby`-Attribut des Steuerelements                                                                    |                               `string`                               |                            |
| autoFocus           | Das `autofocus`-Attribut des Steuerelements                                                                          |                              `boolean`                               |                            |
| className           | Der Klassenname des Wrapper-Elements des Steuerelements                                                              |                               `string`                               |                            |
| defaultValue        | Legt den Anfangswert für eine unkontrollierte Komponente fest.                                                       |                              `DateTime`                              |                            |
| disabled            | Zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann                                            |                              `boolean`                               |          `false`          |
| errorMessage        | Fehlermeldungstext                                                                                                   |                             `ReactNode`                              |                            |
| format              | Format des Datums, wenn es in der Eingabe angezeigt wird. [Verfügbare Formate](https://day.js.org/docs/en/display/format) |                               `string`                               |                            |
| hasClear            | Zeigt das Symbol zum Löschen des Werts des Steuerelements an                                                         |                              `boolean`                               |          `false`          |
| id                  | Das `id`-Attribut des Steuerelements                                                                                 |                               `string`                               |                            |
| isDateUnavailable   | Callback, der für jedes Datum im Kalender aufgerufen wird. Wenn er `true` zurückgibt, ist das Datum nicht verfügbar. |                   `((date: DateTime) => boolean)`                    |                            |
| label               | Hilfetext, der links neben dem Eingabeelement gerendert wird                                                         |                               `string`                               |                            |
| startContent        | Das vom Benutzer bereitgestellte Element, das vor dem Label und der Eingabe gerendert wird                           |                          `React.ReactNode`                           |                            |
| maxValue            | Das maximal zulässige Datum, das ein Benutzer auswählen kann.                                                         |                              `DateTime`                              |                            |
| minValue            | Das minimal zulässige Datum, das ein Benutzer auswählen kann.                                                         |                              `DateTime`                              |                            |
| onBlur              | Wird ausgelöst, wenn das Steuerelement den Fokus verliert. Stellt das Fokusereignis als Argument des Callbacks bereit |            `((e: FocusEvent<Element, Element>) => void)`             |                            |
| onFocus             | Wird ausgelöst, wenn das Steuerelement den Fokus erhält. Stellt das Fokusereignis als Argument des Callbacks bereit   |            `((e: FocusEvent<Element, Element>) => void)`             |                            |
| onKeyDown           | Wird ausgelöst, wenn eine Taste gedrückt wird. Stellt das Tastaturereignis als Argument des Callbacks bereit        |               `((e: KeyboardEvent<Element>) => void)`                |                            |
| onKeyUp             | Wird ausgelöst, wenn eine Taste losgelassen wird. Stellt das Tastaturereignis als Argument des Callbacks bereit       |               `((e: KeyboardEvent<Element>) => void)`                |                            |
| onUpdate            | Wird ausgelöst, wenn der Wert vom Benutzer geändert wird. Stellt den neuen Wert als Argument des Callbacks bereit     |                 `((value: DateTime \| null) => void`                 |                            |
| parseDateFromString | Benutzerdefinierte Parserfunktion zum Parsen von eingefügten Datumszeichenfolgen. Wenn nicht angegeben, wird der Standardparser verwendet. | `((dateStr: string, format: string, timeZone?: string) => DateTime)` |                            |
| pin                 | Eckabrundung                                                                                                         |                               `string`                               |      `'round-round'`      |
| placeholder         | Text, der im Steuerelement angezeigt wird, wenn kein Wert festgelegt ist                                             |                               `string`                               |                            |
| placeholderValue    | Ein Platzhalterdatum, das die Standardwerte jedes Segments steuert, wenn der Benutzer zum ersten Mal damit interagiert. |                              `DateTime`                              | `heutiges Datum um Mitternacht` |
| readOnly            | Ob der Wert der Komponente unveränderlich ist.                                                                      |                              `boolean`                               |          `false`          |
| endContent          | Das vom Benutzer bereitgestellte Element, das nach dem Eingabeelement und dem Löschschaltfläche gerendert wird       |                          `React.ReactNode`                           |                            |
| size                | Die Größe des Steuerelements                                                                                         |                       `"s"` `"m"` `"l"` `"xl"`                       |           `"m"`           |
| style               | Legt Inline-Stile für das Element fest.                                                                              |                           `CSSProperties`                            |                            |
| timeZone            | Legt die Zeitzone fest. [Mehr über Zeitzonen erfahren](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                               `string`                               |                            |
| validationState     | Validierungsstatus                                                                                                   |                             `"invalid"`                              |                            |
| value               | Der Wert des Steuerelements                                                                                          |                          `DateTime` `null`                           |                            |
| view                | Die Ansicht des Steuerelements                                                                                       |                         `"normal"` `"clear"`                         |        `"normal"`         |