GRAVITY_TRANSLATION_BLOCK_0_END

```tsx
import {RelativeDateField} from '@gravity-ui/date-components';
```

Die Komponente `RelativeDateField` wird nur zur Eingabe relativer Daten verwendet. Sie kann nicht als "normales" `DateField` verwendet werden.

## Relativer Input

Die Komponente erhält Werte in einem speziellen relativen Format. Sie setzen Werte als Formeln, die Ihnen helfen, das genaue Datum zu berechnen. Wir können es `grafana-ähnliches Format` nennen, da es dem Format der relativen Zeitfelder von Grafana sehr ähnlich ist. Um mehr über relative Zeitwerte in Grafana zu erfahren, lesen Sie [die Dokumentation](https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/).

Mit diesem Modus können Sie Ihre Daten von der Quelle zum Ziel liefern und den genauen Wert direkt am benötigten Endpunkt ohne Ungenauigkeiten berechnen.

## Gültige Eingaberegeln

- Ein Wert sollte mit dem Schlüsselwort `now` beginnen.
- Ein relativer Datumsdruck sieht im Allgemeinen so aus: `now${operand}${count}${unit}`
- Verfügbare Werte für `operand`:
  - `-` - Subtraktion
  - `+` - Addition
  - `/` - Auf den Beginn der `unit` setzen
- Gültige Werte für `count` - jede natürliche Zahl
- Gültige Werte für `unit`:
  - `d` - Tag
  - `w` - Woche
  - `M` - Monat
  - `Q` - Quartal
  - `y` - Jahr
  - `h` - Stunde
  - `m` - Minute

### Anwendungsbeispiele

> `now-1d`
>
> `now/w`
>
> `now+10d-5d/M`

## Eigenschaften

| Name             | Beschreibung                                                                                                         |                     Typ                      |     Standard     |
| :--------------- | :------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: | :--------------: |
| aria-describedby | Das `aria-describedby`-Attribut des Steuerelements                                                                   |                   `string`                   |                  |
| aria-details     | Das `aria-details`-Attribut des Steuerelements                                                                       |                   `string`                   |                  |
| aria-label       | Das `aria-label`-Attribut des Steuerelements                                                                         |                   `string`                   |                  |
| aria-labelledby  | Das `aria-labelledby`-Attribut des Steuerelements                                                                    |                   `string`                   |                  |
| autoFocus        | Das `autofocus`-Attribut des Steuerelements                                                                          |                   `boolean`                  |                  |
| className        | Der Klassenname der Wrapper-Komponente                                                                               |                   `string`                   |                  |
| defaultValue     | Legt den Anfangswert für eine unkontrollierte Komponente fest.                                                       |                   `string`                   |                  |
| disabled         | Zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann                                            |                   `boolean`                  |     `false`      |
| errorMessage     | Fehlermeldungstext                                                                                                   |                  `ReactNode`                 |                  |
| hasClear         | Zeigt das Symbol zum Löschen des Werts des Steuerelements an                                                         |                   `boolean`                  |     `false`      |
| hasTime          | Zeigt das Zeitfeld im Popup-Wert an                                                                                  |                   `boolean`                  |     `false`      |
| id               | Das `id`-Attribut des Steuerelements                                                                                 |                   `string`                   |                  |
| label            | Hilfetext, der links vom Eingabefeld gerendert wird                                                                  |                   `string`                   |                  |
| leftContent      | Der vom Benutzer bereitgestellte Knoten, der vor dem Label und der Eingabe gerendert wird                            |               `React.ReactNode`              |                  |
| onBlur           | Wird ausgelöst, wenn das Steuerelement den Fokus verliert. Stellt das Fokusereignis als Argument des Rückrufs bereit | `((e: FocusEvent<Element, Element>) => void)` |                  |
| onFocus          | Wird ausgelöst, wenn das Steuerelement den Fokus erhält. Stellt das Fokusereignis als Argument des Rückrufs bereit   | `((e: FocusEvent<Element, Element>) => void)` |                  |
| onKeyDown        | Wird ausgelöst, wenn eine Taste gedrückt wird. Stellt das Tastaturereignis als Argument des Rückrufs bereit          |    `((e: KeyboardEvent<Element>) => void)`     |                  |
| onKeyUp          | Wird ausgelöst, wenn eine Taste losgelassen wird. Stellt das Tastaturereignis als Argument des Rückrufs bereit        |    `((e: KeyboardEvent<Element>) => void)`     |                  |
| onUpdate         | Wird ausgelöst, wenn der Wert vom Benutzer geändert wird. Stellt den neuen Wert als Argument des Rückrufs bereit      |      `((value: string \| null) => void`       |                  |
| pin              | Eckabrundung                                                                                                         |                   `string`                   |  `'round-round'` |
| placeholder      | Text, der im Steuerelement angezeigt wird, wenn kein Wert festgelegt ist                                             |                   `string`                   |                  |
| readOnly         | Ob der Wert der Komponente unveränderlich ist.                                                                      |                   `boolean`                  |     `false`      |
| rightContent     | Vom Benutzer bereitgestellter Knoten, der nach dem Eingabefeld und dem Löschschaltfläche gerendert wird              |               `React.ReactNode`              |                  |
| size             | Die Größe des Steuerelements                                                                                         |           `"s"` `"m"` `"l"` `"xl"`           |      `"m"`       |
| style            | Legt Inline-Stile für das Element fest.                                                                              |                `CSSProperties`               |                  |
| timeZone         | Legt die Zeitzone fest. [Mehr über Zeitzonen erfahren](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                   `string`                   |                  |
| validationState  | Validierungsstatus                                                                                                   |                  `"invalid"`                 |                  |
| value            | Der Wert des Steuerelements                                                                                          |                `string` `null`               |                  |
| view             | Die Ansicht des Steuerelements                                                                                       |             `"normal"` `"clear"`             |   `"normal"`     |