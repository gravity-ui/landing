```tsx
import {DatePicker} from '@gravity-ui/date-components';
```

`DatePicker` ist eine ausgefeilte, leichtgewichtige und vollständig anpassbare Komponente, die entwickelt wurde, um intuitive Datumsfunktionen in Ihren React-Anwendungen bereitzustellen. Entwickelt mit Blick auf Benutzerfreundlichkeit und einfache Integration, fügt sie sich nahtlos in Formulare, Modals oder jedes UI-Element ein, das eine Datumseingabe erfordert. Sie kann gesteuert werden, wenn Sie die `value`-Eigenschaft festlegen. Oder sie kann ungesteuert sein, wenn Sie keinen Wert festlegen. In diesem Fall können Sie den Anfangszustand mit der optionalen Eigenschaft `defaultValue` verwalten. Die Komponente ist standardmäßig ungesteuert.

### Nützliche Ergänzung

Um Daten im richtigen Format festzulegen, müssen Sie möglicherweise zusätzliche Hilfsprogramme aus der [Date Utils Bibliothek](https://gravity-ui.com/libraries/date-utils) einbeziehen.

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

## Darstellung

Die Darstellung von `DatePicker` wird durch die Eigenschaften `size`, `view` und `pin` gesteuert.

### Größe

Um die Größe von `DatePicker` zu steuern, verwenden Sie die Eigenschaft `size`. Die Standardgröße ist `m`.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Ansicht

`normal` - die Hauptansicht von `DatePicker` (standardmäßig verwendet).

GRAVITY_TRANSLATION_BLOCK_3_END

`clear` - Ansicht von `DatePicker` ohne sichtbare Ränder (kann mit einem benutzerdefinierten Wrapper verwendet werden).

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Pin

Die Eigenschaft `pin` ermöglicht es Ihnen, die Form der rechten und linken Kanten zu steuern und wird normalerweise verwendet, um mehrere Steuerelemente zu einer einzigen Einheit zu kombinieren.
Der Wert der Eigenschaft `pin` besteht aus linken und rechten Kantentypnamen, die durch einen Bindestrich getrennt sind, z. B. `"round-brick"`.
Die Kantentypen sind: `round` (Standard), `circle`, `brick` und `clear`.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Wert

### Minimaler und maximaler Wert

Die Eigenschaft `minValue` ermöglicht es Ihnen, das früheste Datum und die früheste Uhrzeit anzugeben, die vom Benutzer eingegeben werden können. Umgekehrt gibt die Eigenschaft `maxValue` das späteste Datum und die späteste Uhrzeit an, die eingegeben werden können. Wenn Sie einen Wert außerhalb dieser Grenzen eingeben, ändert die Komponente ihre Ansicht, wie im Falle eines ungültigen Validierungszustands.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Zustände

### Deaktiviert

Der Zustand von `DatePicker`, in dem Sie nicht möchten, dass der Benutzer mit der Komponente interagieren kann.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Nur-Lese-Zugriff

`readOnly` ist ein boolesches Attribut, das, wenn es auf true gesetzt ist, die `DatePicker`-Komponente für den Benutzer unveränderlich macht. Das bedeutet, dass die Eingabe zwar ihren aktuellen Wert anzeigt, Benutzer sie jedoch nicht ändern können.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Fehler

Der Zustand von `DatePicker`, in dem Sie eine falsche Benutzereingabe anzeigen möchten. Um das Erscheinungsbild von `DatePicker` zu ändern, verwenden Sie die Eigenschaft `validationState` mit dem Wert `"invalid"`. Ein optionaler Nachrichtentext kann über die Eigenschaft `errorMessage` hinzugefügt werden. Der Nachrichtentext wird unter der Komponente gerendert.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Zusätzlicher Inhalt

### Platzhalter

Diese Eigenschaft ermöglicht es Ihnen, einen kurzen Hinweis zu geben, der den erwarteten Wert des Eingabefelds beschreibt. Dieser Hinweis wird im Eingabefeld angezeigt, bevor der Benutzer einen Wert eingibt, und verschwindet, sobald Text eingegeben wird.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Beschriftung

Ermöglicht die Platzierung der Beschriftung im linken Teil des Feldes. Die Beschriftung kann nicht mehr als die Hälfte der Gesamtbreite des `DatePicker`-Bereichs einnehmen.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

### Löschtaste

`hasClear` ist eine boolesche Eigenschaft, die Benutzern die Möglichkeit gibt, den Inhalt des Eingabefelds schnell zu löschen.

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

## Format

Die Eigenschaft `format` ist eine Zeichenkette, die das Datums- und Zeitformat definiert, das die `DatePicker`-Komponente akzeptiert und anzeigt. Diese Eigenschaft bestimmt, wie das Datum und die Uhrzeit dem Benutzer visuell präsentiert werden und wie die Eingabe des Benutzers formatiert sein soll. [Verfügbare Formate](https://day.js.org/docs/en/display/format)

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### Benutzerdefinierter Datumsparser

Sie können eine benutzerdefinierte Parserfunktion bereitstellen, um eingefügte Datumszeichenketten über die Eigenschaft `parseDateFromString` zu verarbeiten. Dies ist nützlich, wenn Sie bestimmte Datumsformate oder benutzerdefinierte Parsing-Logik unterstützen müssen, die vom Standardverhalten abweicht.

GRAVITY_TRANSLATION_BLOCK_24_END

## Zeitzone

`timeZone` ist die Eigenschaft zum Festlegen der Zeitzone des Werts in der Eingabe. [Mehr über Zeitzonen erfahren](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## Anpassung

Wenn Sie eine benutzerdefinierte Kalenderkomponente innerhalb von `DatePicker` verwenden möchten, können Sie diese als `children` mit kalenderähnlichen Eigenschaften übergeben.

GRAVITY_TRANSLATION_BLOCK_25_END

GRAVITY_TRANSLATION_BLOCK_26_END

## Eigenschaften

| Name                           | Beschreibung                                                                                                                                |                               Typ                                  |          Standard          |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------: | :------------------------: |
| aria-describedby               | Das `aria-describedby` des Steuerelements. Identifiziert das Element (oder die Elemente), das/die das Objekt beschreibt. Attribut             |                               `string`                               |                            |
| aria-details                   | Das `aria-details` des Steuerelements. Identifiziert das Element (oder die Elemente), das/die eine detaillierte, erweiterte Beschreibung für das Objekt bereitstellt. Attribut |                               `string`                               |                            |
| aria-label                     | Das `aria-label` des Steuerelements. Definiert einen Zeichenfolgenwert, der das aktuelle Element beschriftet. Attribut                       |                               `string`                               |                            |
| aria-labelledby                | Das `aria-labelledby` des Steuerelements. Identifiziert das Element (oder die Elemente), das/die das aktuelle Element beschriftet. Attribut |                               `string`                               |                            |
| autoFocus                      | Der `autofocus` des Steuerelements. Ob das Element beim Rendern den Fokus erhalten soll. Attribut                                           |                              `boolean`                               |                            |
| className                      | Der Klassenname des Wrapper-Elements des Steuerelements                                                                                     |                               `string`                               |                            |
| [defaultValue](#datepicker)    | Legt den Anfangswert für eine unkontrollierte Komponente fest.                                                                              |                              `DateTime`                              |                            |
| [disabled](#disabled)          | Zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann                                                                   |                              `boolean`                               |          `false`          |
| [errorMessage](#error)         | Fehlermeldungstext                                                                                                                          |                             `ReactNode`                              |                            |
| [format](#format)              | Format des Datums, wenn es in der Eingabe angezeigt wird. [Verfügbare Formate](https://day.js.org/docs/en/display/format)                     |                               `string`                               |                            |
| [hasClear](#clear-button)      | Zeigt das Symbol zum Löschen des Werts des Steuerelements an                                                                                |                              `boolean`                               |          `false`          |
| id                             | Das `id`-Attribut des Steuerelements                                                                                                        |                               `string`                               |                            |
| isDateUnavailable              | Callback, der für jedes Datum des Kalenders aufgerufen wird. Wenn er `true` zurückgibt, ist das Datum nicht verfügbar.                      |                   `((date: DateTime) => boolean)`                    |                            |
| [label](#label)                | Hilfetext, der links neben dem Eingabeelement gerendert wird                                                                                |                               `string`                               |                            |
| [maxValue](#min-and-max-value) | Das maximal zulässige Datum, das ein Benutzer auswählen kann.                                                                                |                              `DateTime`                              |                            |
| [minValue](#min-and-max-value) | Das minimal zulässige Datum, das ein Benutzer auswählen kann.                                                                                |                              `DateTime`                              |                            |
| onBlur                         | Wird ausgelöst, wenn das Steuerelement den Fokus verliert. Stellt das Fokusereignis als Argument des Callbacks bereit                         |            `((e: FocusEvent<Element, Element>) => void)`             |                            |
| onFocus                        | Wird ausgelöst, wenn das Steuerelement den Fokus erhält. Stellt das Fokusereignis als Argument des Callbacks bereit                          |            `((e: FocusEvent<Element, Element>) => void)`             |                            |
| onKeyDown                      | Wird ausgelöst, wenn eine Taste gedrückt wird. Stellt das Tastaturereignis als Argument des Callbacks bereit                               |               `((e: KeyboardEvent<Element>) => void)`                |                            |
| onKeyUp                        | Wird ausgelöst, wenn eine Taste losgelassen wird. Stellt das Tastaturereignis als Argument des Callbacks bereit                              |               `((e: KeyboardEvent<Element>) => void)`                |                            |
| onUpdate                       | Wird ausgelöst, wenn der Wert vom Benutzer geändert wird. Stellt den neuen Wert als Argument des Callbacks bereit                            |                 `((value: DateTime \| null) => void`                 |                            |
| parseDateFromString            | Benutzerdefinierte Parserfunktion zum Parsen von eingefügten Datumszeichenfolgen. Wenn nicht angegeben, wird der Standardparser verwendet. | `((dateStr: string, format: string, timeZone?: string) => DateTime)` |                            |
| [pin](#pin)                    | Eckabrundung                                                                                                                                |                            `TextInputPin`                            |      `'round-round'`      |
| [placeholder](#placeholder)    | Text, der im Steuerelement angezeigt wird, wenn kein Wert festgelegt ist                                                                    |                               `string`                               |                            |
| placeholderValue               | Ein Platzhalterdatum, das die Standardwerte jedes Segments steuert, wenn der Benutzer zum ersten Mal mit ihnen interagiert.                |                              `DateTime`                              | `heutiges Datum um Mitternacht` |
| [readOnly](#readonly)          | Ob der Wert der Komponente unveränderlich ist.                                                                                             |                              `boolean`                               |          `false`          |
| [size](#size)                  | Die Größe des Steuerelements                                                                                                                |                       `"s"` `"m"` `"l"` `"xl"`                       |           `"m"`           |
| style                          | Legt Inline-Stile für das Element fest.                                                                                                     |                           `CSSProperties`                            |                            |
| [timeZone](#time-zone)         | Legt die Zeitzone fest. [Mehr über Zeitzonen erfahren](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)                     |                               `string`                               |                            |
| [validationState](#error)      | Validierungsstatus                                                                                                                          |                             `"invalid"`                              |                            |
| [value](#datepicker)           | Der Wert des Steuerelements                                                                                                                 |                          `DateTime` `null`                           |                            |
| [view](#view)                  | Die Ansicht des Steuerelements                                                                                                              |                         `"normal"` `"clear"`                         |        `"normal"`         |