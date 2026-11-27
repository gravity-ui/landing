<!--GITHUB_BLOCK-->

# RelativeDatePicker

<!--/GITHUB_BLOCK-->

```tsx
import {RelativeDatePicker} from '@gravity-ui/date-components';
```

`RelativeDatePicker` ist fast die gleiche Komponente wie `DatePicker`, aber sie hat die Fähigkeit, relative Daten zu verwenden.

## Unterschied zu `DatePicker`

`RelativeDatePicker` kann in zwei Modi arbeiten: `absolute` und `relative`. Sie können ihn interaktiv durch Klicken auf die Schaltfläche `f(x)` umschalten. Oder Sie können das Feld `type` im `value`- oder `defaultValue`-Objekt festlegen.

### Absolut

Das Verhalten von `RelativeDatePicker` im Modus `absolute` ähnelt stark dem einfachen `DatePicker`.

<!--LANDING_BLOCK

[Learn more about DatePicker](/components/date-components/date-picker)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about DatePicker](/src/components/DatePicker)

<!--/GITHUB_BLOCK-->

### Relativ

In diesem Modus erhält und gibt `RelativeDatePicker` Werte in einem speziellen relativen Format zurück.

<!--LANDING_BLOCK

[Learn more about rules of relative formulas](/components/date-components/relative-date-field#relative-input)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about rules of relative formulas](/src/components/RelativeDateField#relative-input)

<!--/GITHUB_BLOCK-->

## Eigenschaften

| Name              | Beschreibung                                                                                                                               |                     Typ                      |          Standard          |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: | :------------------------: |
| aria-describedby  | Das `aria-describedby` des Steuerelements. Identifiziert das Element (oder die Elemente), das/die das Objekt beschreibt. Attribut         |                   `string`                   |                            |
| aria-details      | Das `aria-details` des Steuerelements. Identifiziert das Element (oder die Elemente), das/die eine detaillierte, erweiterte Beschreibung für das Objekt bereitstellt. Attribut |                   `string`                   |                            |
| aria-label        | Das `aria-label` des Steuerelements. Definiert einen Zeichenfolgenwert, der das aktuelle Element beschriftet. Attribut                   |                   `string`                   |                            |
| aria-labelledby   | Das `aria-labelledby` des Steuerelements. Identifiziert das Element (oder die Elemente), das/die das aktuelle Element beschriftet. Attribut |                   `string`                   |                            |
| autoFocus         | Das `autofocus` des Steuerelements. Ob das Element beim Rendern den Fokus erhalten soll. Attribut                                          |                   `boolean`                  |                            |
| className         | Der Klassenname des Wrapper-Elements des Steuerelements                                                                                    |                   `string`                   |                            |
| defaultValue      | Legt den Anfangswert für eine unkontrollierte Komponente fest.                                                                             |                    `Value`                   |                            |
| disabled          | Zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann                                                                  |                   `boolean`                  |          `false`           |
| errorMessage      | Fehlermeldungstext                                                                                                                         |                  `ReactNode`                 |                            |
| format            | Format des Datums, wenn es in der Eingabe angezeigt wird. [Verfügbare Formate](https://day.js.org/docs/en/display/format)                   |                   `string`                   |                            |
| hasClear          | Zeigt das Symbol zum Löschen des Werts des Steuerelements an                                                                               |                   `boolean`                  |          `false`           |
| id                | Das `id`-Attribut des Steuerelements                                                                                                       |                   `string`                   |                            |
| isDateUnavailable | Callback, der für jedes Datum des Kalenders aufgerufen wird. Wenn er `true` zurückgibt, ist das Datum nicht verfügbar.                   |        `((date: DateTime) => boolean)`       |                            |
| label             | Hilfetext, der links neben dem Eingabeelement gerendert wird                                                                               |                   `string`                   |                            |
| maxValue          | Das maximal zulässige Datum, das ein Benutzer auswählen kann.                                                                               |                  `DateTime`                  |                            |
| minValue          | Das minimal zulässige Datum, das ein Benutzer auswählen kann.                                                                               |                  `DateTime`                  |                            |
| onBlur            | Wird ausgelöst, wenn das Steuerelement den Fokus verliert. Stellt das Fokusereignis als Argument des Callbacks bereit                        | `((e: FocusEvent<Element, Element>) => void)` |                            |
| onFocus           | Wird ausgelöst, wenn das Steuerelement den Fokus erhält. Stellt das Fokusereignis als Argument des Callbacks bereit                         | `((e: FocusEvent<Element, Element>) => void)` |                            |
| onKeyDown         | Wird ausgelöst, wenn eine Taste gedrückt wird. Stellt das Tastaturereignis als Argument des Callbacks bereit                               |    `((e: KeyboardEvent<Element>) => void)`     |                            |
| onKeyUp           | Wird ausgelöst, wenn eine Taste losgelassen wird. Stellt das Tastaturereignis als Argument des Callbacks bereit                              |    `((e: KeyboardEvent<Element>) => void)`     |                            |
| onUpdate          | Wird ausgelöst, wenn der Wert vom Benutzer geändert wird. Stellt den neuen Wert als Argument des Callbacks bereit                           |       `((value: Value \| null) => void`       |                            |
| pin               | Eckabrundung                                                                                                                               |                `TextInputPin`                |      `'round-round'`       |
| placeholder       | Text, der im Steuerelement angezeigt wird, wenn kein Wert festgelegt ist                                                                   |                   `string`                   |                            |
| placeholderValue  | Ein Platzhalterdatum, das die Standardwerte jedes Segments steuert, wenn der Benutzer zum ersten Mal damit interagiert.                   |                  `DateTime`                  | `heutiges Datum um Mitternacht` |
| readOnly          | Ob der Wert der Komponente unveränderlich ist.                                                                                            |                   `boolean`                  |          `false`           |
| size              | Die Größe des Steuerelements                                                                                                               |           `"s"` `"m"` `"l"` `"xl"`           |           `"m"`            |
| style             | Legt Inline-Stile für das Element fest.                                                                                                    |                `CSSProperties`               |                            |
| timeZone          | Legt die Zeitzone fest. [Mehr über Zeitzonen erfahren](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)                  |                   `string`                   |                            |
| validationState   | Validierungsstatus                                                                                                                         |                  `"invalid"`                 |                            |
| value             | Der Wert des Steuerelements                                                                                                                |                `Value` `null`                |                            |
| view              | Die Ansicht des Steuerelements                                                                                                             |             `"normal"` `"clear"`             |        `"normal"`          |

GRAVITY_TRANSL
