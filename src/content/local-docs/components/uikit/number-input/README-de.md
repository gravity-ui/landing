`NumberInput` ist ein Textfeld zur Eingabe numerischer Werte, mit optionalen Schrittreglern, Min/Max-Grenzen und Wertformatierung.

```tsx
import {NumberInput} from '@gravity-ui/uikit';
```

## Darstellung

Die Darstellung von `NumberInput` wird durch die Eigenschaften `view` und `pin` gesteuert.

### Ansicht

`normal` - die Hauptansicht von `NumberInput` (standardmäßig verwendet).

GRAVITY_TRANSLATION_BLOCK_1_END

`clear` - kann mit einem benutzerdefinierten Wrapper für `NumberInput` verwendet werden.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Pin

Ermöglicht die Steuerung der rechten und linken Kanten des Rahmens von `NumberInput`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Zustände

### Deaktiviert

Der Zustand von `NumberInput`, bei dem der Benutzer nicht mit der Komponente interagieren kann.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Fehler

Der Zustand von `NumberInput`, bei dem Sie eine falsche Benutzereingabe anzeigen möchten. Um die Darstellung von `NumberInput` zu ändern, verwenden Sie die Eigenschaft `validationState` mit dem Wert `"invalid"`. Eine optionale Nachricht kann über die Eigenschaft `errorMessage` hinzugefügt werden. Standardmäßig wird der Nachrichtentext außerhalb der Komponente gerendert.
Dieses Verhalten kann mit der Eigenschaft `errorPlacement` geändert werden.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Größe

`s` – Wird verwendet, wenn Standardsteuerelemente zu groß sind (Tabellen, kleine Karten).

`m` – Grundgröße, wird in den meisten Komponenten verwendet.

`l` – Grundlegende Steuerelemente, die im Kopfbereich einer Seite, in modalen Fenstern oder Popups ausgeführt werden.

`xl` – Wird auf Promo- und Landingpages verwendet.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Beschriftung

Ermöglicht das Setzen einer Beschriftung links vom Steuerelement.

- Die Beschriftung befindet sich rechts von den Elementen, die über die Eigenschaft `startContent` hinzugefügt wurden.
- Die Beschriftung kann nicht mehr als die Hälfte der Gesamtbreite des `NumberInput`-Bereichs einnehmen.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Zusätzlicher Inhalt

### Startinhalt

Ermöglicht das Hinzufügen von Inhalten links vom Steuerelement. Befindet sich links von der Beschriftung, die über die Eigenschaft `label` hinzugefügt wurde.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

### Endinhalt

Ermöglicht das Hinzufügen von Inhalten rechts vom Steuerelement. Befindet sich rechts von der Schaltfläche zum Löschen, die über die Eigenschaft `hasClear` hinzugefügt wurde, und dem internen Fehler-Icon.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Steuerelemente

Die Sichtbarkeit von Inkrement-/Dekrement-Pfeiltasten an der rechtesten Position in der Komponente kann über die Eigenschaft `hiddenControls` gesteuert werden.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

## Verhalten

### Min/Max-Werte

Ermöglicht das Festlegen von minimalen und maximalen Werten, die in das Eingabefeld eingegeben werden können. Werte, die nicht in den definierten Bereich passen, werden beim Verlassen des Feldes auf den nächstgelegenen zulässigen Wert begrenzt.

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

### Schrittweite

Ermöglicht das Festlegen des Betrags, um den der Wert im Eingabefeld mit den Pfeiltasten in den Steuerelementen der Komponente oder über die Tastatur erhöht oder verringert wird.

Dies schränkt auch die zulässigen Werte ein und ermöglicht das Begrenzen der eingegebenen Zahl beim Verlassen des Feldes auf zulässige Werte gemäß den folgenden Regeln:

- Wenn Schrittweite und Minimalwert als Ganzzahlen definiert sind, dann sind die zulässigen Werte definiert als `min + (step * n)`, wobei `n` eine ganze Zahl ist;
- Wenn die Schrittweite eine ganze Zahl ist und kein Minimalwert definiert ist, dann sind die zulässigen Werte als durch die Schrittweite teilbar definiert;
- Wenn die Schrittweite oder der Minimalwert Dezimalzahlen sind, dann ist die Begrenzung nicht anwendbar.

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### Schritt-Multiplikator

Ermöglicht das Festlegen des Werts, mit dem die Schrittweite multipliziert wird, wenn die Umschalttaste auf der Tastatur gedrückt wird, indem die Eigenschaft `shiftMultiplier` definiert wird.

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

### Einschränkung von Dezimalwerten

Ermöglicht das Umschalten der Fähigkeit, nur Ganzzahlen oder auch Dezimalzahlen über die Eigenschaft `allowDecimal` einzugeben.
Mit der Eigenschaft `allowDecimal={false}` wird ein in das Eingabefeld eingegebener Punkt ignoriert und eingefügte Dezimalwerte werden abgerundet.

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

## Eigenschaften

| Name            | Beschreibung                                                                                                             |                     Typ                      |      Standard       |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: | :-----------------: |
| allowDecimal    | Ermöglicht die Eingabe von Dezimalzahlen                                                                                |                   `boolean`                   |      `false`       |
| autoComplete    | Das `autocomplete`-Attribut des Steuerelements                                                                                  |              `boolean` `string`               |                    |
| autoFocus       | Das `autofocus`-Attribut des Steuerelements                                                                                     |                   `boolean`                   |                    |
| className       | Klassenname des Wrapper-Elements des Steuerelements                                                                                        |                   `string`                    |                    |
| controlProps    | HTML-Attribute des Steuerelements                                                                                           | `React.InputHTMLAttributes<HTMLInputElement>` |                    |
| controlRef      | React-Ref, die an das Steuerelement übergeben wird                                                                                       |         `React.Ref<HTMLInputElement>`         |                    |
| defaultValue    | Der Standardwert des Steuerelements, wird verwendet, wenn die Komponente nicht gesteuert wird                                                  |             `number` `undefined`              |                    |
| disabled        | Zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann                                                                |                   `boolean`                   |      `false`       |
| endContent      | Vom Benutzer bereitgestellter Knoten, der nach dem Eingabeknoten, dem Löschschaltflächen- und dem Fehlerikone-Knoten gerendert wird                                           |               `React.ReactNode`               |                    |
| errorMessage    | Fehlermeldungstext                                                                                                              |                   `string`                    |                    |
| errorPlacement  | Platzierung der Fehlermeldung                                                                                                         |              `outside` `inside`               |     `outside`      |
| hasClear        | Zeigt das Symbol zum Löschen des Werts des Steuerelements an                                                                             |                   `boolean`                   |      `false`       |
| hiddenControls  | Versteckt die Inkrement-/Dekrement-Schaltflächen am Ende des Steuerelements                                                                                                |                   `boolean`                   |                    |
| id              | Das `id`-Attribut des Steuerelements                                                                                            |                   `string`                    |                    |
| label           | Hilfetext, der links vom Eingabeknoten gerendert wird                                                                        |                   `string`                    |                    |
| max             | Maximal zulässiger Wert. Wird verwendet, um den eingegebenen Wert auf den zulässigen Bereich zu beschränken                                               |                   `number`                    | `MAX_SAFE_INTEGER` |
| min             | Minimal zulässiger Wert. Wird verwendet, um den eingegebenen Wert auf den zulässigen Bereich zu beschränken                                               |                   `number`                    | `MIN_SAFE_INTEGER` |
| name            | Das `name`-Attribut des Steuerelements. Wenn nicht angegeben, wird es automatisch generiert, wenn es nicht angegeben ist                          |                   `string`                    |                    |
| note            | Ein optionales Element, das unter der rechten unteren Ecke des Steuerelements angezeigt wird und sich den Platz mit dem Fehlercontainer teilt |               `React.ReactNode`               |                    |
| onBlur          | Wird ausgelöst, wenn das Steuerelement den Fokus verliert. Stellt das Fokusereignis als Argument des Rückrufs bereit                                        |                  `function`                   |                    |
| onChange        | Wird ausgelöst, wenn sich der Wert der Eingabe durch den Benutzer ändert. Stellt das Änderungsereignis als Argument des Rückrufs bereit                    |                  `function`                   |                    |
| onFocus         | Wird ausgelöst, wenn das Steuerelement den Fokus erhält. Stellt das Fokusereignis als Argument des Rückrufs bereit                                        |                  `function`                   |                    |
| onKeyDown       | Wird ausgelöst, wenn eine Taste gedrückt wird. Stellt das Tastaturereignis als Argument des Rückrufs bereit                                           |                  `function`                   |                    |
| onKeyUp         | Wird ausgelöst, wenn eine Taste losgelassen wird. Stellt das Tastaturereignis als Argument des Rückrufs bereit                                          |                  `function`                   |                    |
| onUpdate        | Wird ausgelöst, wenn sich der Wert der Eingabe durch den Benutzer ändert. Stellt den neuen Wert als Argument des Rückrufs bereit                       |                  `function`                   |                    |
| pin             | Die Randansicht des Steuerelements                                                                                               |                   `string`                    |  `'round-round'`   |
| placeholder     | Text, der im Steuerelement angezeigt wird, wenn kein Wert festgelegt ist                                                               |                   `string`                    |                    |
| qa              | Test-ID-Attribut (`data-qa`)                                                                                           |                   `string`                    |                    |
| readonly        | Zeigt an, dass der Benutzer den Wert des Steuerelements nicht ändern kann                                                                   |                   `boolean`                   |      `false`       |
| shiftMultiplier | Schrittmultiplikator, wenn die Umschalttaste gedrückt wird                                                                            |                   `number`                    |        `10`        |
| size            | Die Größe des Steuerelements                                                                                                 |           `"s"` `"m"` `"l"` `"xl"`            |       `"m"`        |
| step            | Delta zum Erhöhen/Verringern des eingegebenen Werts mit den Pfeiltasten der Tastatur oder den Steuerelementen der Komponente                     |                   `number`                    |        `1`         |
| startContent    | Der vom Benutzer bereitgestellte Knoten, der vor dem Label und der Eingabe gerendert wird                                                                         |               `React.ReactNode`               |                    |
| tabIndex        | Das `tabindex`-Attribut des Steuerelements                                                                                 |                   `string`                    |                    |
| validationState | Validierungsstatus                                                                                                        |                  `"invalid"`                  |                    |
| value           | Der Wert des Steuerelements                                                                                                |             `number` `undefined`              |                    |
| view            | Die Ansicht des Steuerelements                                                                                                 |             `"normal"` `"clear"`              |     `"normal"`     |

## CSS API

Die Komponente hat keine eigene CSS-API, aber sie erweitert die API der übergeordneten TextInput-Komponente.

GRAVITY_TRANSLATION_BLOCK_1_END