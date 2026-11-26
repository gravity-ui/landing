```tsx
import {TextInput} from '@gravity-ui/uikit';
```

TextInput ermöglicht es Benutzern, Text in eine Benutzeroberfläche einzugeben.

## Darstellung

Die Darstellung von `TextInput` wird durch die Eigenschaften `view` und `pin` gesteuert.

### View

`normal` - die Hauptdarstellung von `TextInput` (wird standardmäßig verwendet).

GRAVITY_TRANSLATION_BLOCK_1_END

`clear` - kann mit einem benutzerdefinierten Wrapper für `TextInput` verwendet werden.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Pin

Ermöglicht die Steuerung der Ansicht der rechten und linken Kanten des Rahmens von `TextInput`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Zustände

### Deaktiviert

Der Zustand von `TextInput`, bei dem der Benutzer nicht mit der Komponente interagieren kann.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Fehler

Der Zustand von `TextInput`, in dem Sie ungültige Benutzereingaben anzeigen möchten. Um die Darstellung von `TextInput` zu ändern, verwenden Sie die Eigenschaft `validationState` mit dem Wert `"invalid"`. Ein optionaler Meldungstext kann über die Eigenschaft `errorMessage` hinzugefügt werden. Standardmäßig wird der Meldungstext außerhalb der Komponente gerendert.
Dieses Verhalten kann mit der Eigenschaft `errorPlacement` geändert werden.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Größe

`s` – Wird verwendet, wenn Standardsteuerelemente zu groß sind (Tabellen, kleine Karten).

`m` – Grundgröße, wird in den meisten Komponenten verwendet.

`l` – Grundlegende Steuerelemente, die im Kopfbereich einer Seite, in modalen Fenstern oder Popups verwendet werden.

`xl` – Wird auf Promo- und Landingpages verwendet.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Label

Ermöglicht das Setzen eines Labels links vom Steuerelement.

- Das Label nimmt die linkeste Position relativ zum Steuerelement ein. Das heißt, Elemente, die über die Eigenschaft `startContent` hinzugefügt werden, befinden sich rechts davon.
- Das Label kann nicht mehr als die Hälfte der Breite des gesamten `TextInput`-Bereichs einnehmen.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Zusätzlicher Inhalt

### Startinhalt

Ermöglicht das Hinzufügen von Inhalten links vom Steuerelement (oder rechts bei Verwendung von [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL)). Befindet sich links (oder rechts bei Verwendung von rtl) vom über die Eigenschaft `label` hinzugefügten Label.

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

### Endinhalt

Ermöglicht das Hinzufügen von Inhalten rechts vom Steuerelement (oder links bei Verwendung von [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL)). Befindet sich rechts (oder links bei Verwendung von rtl) vom über die Eigenschaft `hasClear` hinzugefügten Lösch-Button.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

## Eigenschaften

| Name            | Beschreibung                                                                                                             |                                   Typ                                   |     Standard     |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------: | :--------------: |
| autoComplete    | Das `autocomplete`-Attribut des Steuerelements                                                                           |                          `boolean` `string`                           |                  |
| autoFocus       | Das `autofocus`-Attribut des Steuerelements                                                                              |                               `boolean`                               |                  |
| className       | Klassenname des Wrapper-Elements des Steuerelements                                                                      |                               `string`                                |                  |
| controlProps    | HTML-Attribute des Steuerelements                                                                                        |             `React.InputHTMLAttributes<HTMLInputElement>`             |                  |
| controlRef      | React-Ref, die dem Steuerelement übergeben wird                                                                          |                     `React.Ref<HTMLInputElement>`                     |                  |
| defaultValue    | Der Standardwert des Steuerelements, wenn die Komponente nicht gesteuert wird                                            |                               `string`                                |                  |
| disabled        | Zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann                                                |                           `React.ReactNode`                           |                  |
| endContent      | Vom Benutzer bereitgestellter Knoten, der nach dem Eingabeknoten, dem Löschschaltflächen- und dem Fehler-Icon gerendert wird |                               `string`                                |                  |
| errorMessage    | Fehlermeldungstext                                                                                                       |                               `string`                                |                  |
| errorPlacement  | Platzierung des Fehlers                                                                                                  |                          `outside` `inside`                           |    `outside`     |
| hasClear        | Zeigt das Symbol zum Löschen des Werts des Steuerelements an                                                             |                               `boolean`                               |     `false`      |
| id              | Das `id`-Attribut des Steuerelements                                                                                     |                               `string`                                |                  |
| label           | Hilfetext, der links vom Eingabeknoten gerendert wird                                                                    |                               `string`                                |                  |
| name            | Das `name`-Attribut des Steuerelements. Wenn nicht angegeben, wird es automatisch generiert, wenn es nicht spezifiziert ist |                               `string`                                |                  |
| note            | Ein optionales Element, das unter der unteren rechten Ecke des Steuerelements angezeigt wird und sich den Platz mit dem Fehlercontainer teilt |                           `React.ReactNode`                           |                  |
| onBlur          | Wird ausgelöst, wenn das Steuerelement den Fokus verliert. Stellt das Fokusereignis als Argument des Callbacks bereit      |                              `function`                               |                  |
| onChange        | Wird ausgelöst, wenn sich der Wert der Eingabe durch den Benutzer ändert. Stellt das Änderungsereignis als Argument des Callbacks bereit |                              `function`                               |                  |
| onFocus         | Wird ausgelöst, wenn das Steuerelement den Fokus erhält. Stellt das Fokusereignis als Argument des Callbacks bereit        |                              `function`                               |                  |
| onKeyDown       | Wird ausgelöst, wenn eine Taste gedrückt wird. Stellt das Tastaturereignis als Argument des Callbacks bereit             |                              `function`                               |                  |
| onKeyUp         | Wird ausgelöst, wenn eine Taste losgelassen wird. Stellt das Tastaturereignis als Argument des Callbacks bereit           |                              `function`                               |                  |
| onUpdate        | Wird ausgelöst, wenn sich der Wert der Eingabe durch den Benutzer ändert. Stellt den neuen Wert als Argument des Callbacks bereit |                              `function`                               |                  |
| pin             | Die Randansicht des Steuerelements                                                                                       |                               `string`                                |  `'round-round'` |
| placeholder     | Text, der im Steuerelement angezeigt wird, wenn kein Wert festgelegt ist                                                 |                               `string`                                |                  |
| qa              | Test-ID-Attribut (`data-qa`)                                                                                             |                               `string`                                |
| readOnly        | Zeigt an, dass der Benutzer den Wert des Steuerelements nicht ändern kann                                                |                               `boolean`                               |     `false`      |
| size            | Die Größe des Steuerelements                                                                                             |                       `"s"` `"m"` `"l"` `"xl"`                        |      `"m"`       |
| startContent    | Vom Benutzer bereitgestellter Knoten, der vor dem Label und dem Eingabeknoten gerendert wird                              |                           `React.ReactNode`                           |                  |
| tabIndex        | Das `tabindex`-Attribut des Steuerelements                                                                               |                               `string`                                |                  |
| type            | Der Typ des Steuerelements                                                                                               | `"email"` `"number"` `"password"` `"search"` `"tel"` `"text"` `"url"` |                  |
| validationState | Validierungsstatus                                                                                                       |                              `"invalid"`                              |                  |
| value           | Der Wert des Steuerelements                                                                                              |                               `string`                                |                  |
| view            | Die Ansicht des Steuerelements                                                                                           |                         `"normal"` `"clear"`                          |    `"normal"`    |

## CSS API

| Name                                 | Beschreibung                                         |
| :----------------------------------- | :-------------------------------------------------- |
| `--g-text-input-text-color`          | Textfarbe                                           |
| `--g-text-input-label-color`         | Label-Farbe                                         |
| `--g-text-input-placeholder-color`   | Platzhalterfarbe                                    |
| `--g-text-input-background-color`    | Hintergrundfarbe                                    |
| `--g-text-input-border-radius`       | Randradius                                          |
| `--g-text-input-border-width`        | Randbreite                                          |
| `--g-text-input-border-color`        | Randfarbe                                           |
| `--g-text-input-border-color-hover`  | Randfarbe bei Hover                                 |
| `--g-text-input-border-color-active` | Randfarbe bei Aktivierung                           |
| `--g-text-input-focus-outline-color` | Umrissfarbe bei Fokus (standardmäßig nicht vorhanden) |