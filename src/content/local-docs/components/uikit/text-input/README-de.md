<!--GITHUB_BLOCK-->

# TextInput

<!--/GITHUB_BLOCK-->

```tsx
import {TextInput} from '@gravity-ui/uikit';
```

TextInput ermöglicht es Benutzern, Text in eine Benutzeroberfläche einzugeben.

## Darstellung

Die Darstellung von `TextInput` wird durch die Eigenschaften `view` und `pin` gesteuert.

### View

`normal` - die Hauptdarstellung von `TextInput` (wird standardmäßig verwendet).

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return <TextInput placeholder="Placeholder" />;
}
SANDBOX-->

`clear` - kann mit einem benutzerdefinierten Wrapper für `TextInput` verwendet werden.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return <TextInput view="clear" placeholder="Placeholder" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput view="normal" />
<TextInput view="clear" />
```

<!--/GITHUB_BLOCK-->

### Pin

Ermöglicht die Steuerung der Ansicht der rechten und linken Kanten des Rahmens von `TextInput`.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput placeholder="Placeholder" pin="round-brick" />
            <TextInput placeholder="Placeholder" pin="brick-brick" />
            <TextInput placeholder="Placeholder" pin="brick-round" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput pin="round-brick" />
<TextInput pin="brick-brick" />
<TextInput pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## Zustände

### Deaktiviert

Der Zustand von `TextInput`, bei dem der Benutzer nicht mit der Komponente interagieren kann.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return <TextInput placeholder="Placeholder" disabled />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput disabled />
```

<!--/GITHUB_BLOCK-->

### Fehler

Der Zustand von `TextInput`, in dem Sie ungültige Benutzereingaben anzeigen möchten. Um die Darstellung von `TextInput` zu ändern, verwenden Sie die Eigenschaft `validationState` mit dem Wert `"invalid"`. Ein optionaler Meldungstext kann über die Eigenschaft `errorMessage` hinzugefügt werden. Standardmäßig wird der Meldungstext außerhalb der Komponente gerendert.
Dieses Verhalten kann mit der Eigenschaft `errorPlacement` geändert werden.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput
                placeholder="Placeholder"
                errorMessage="Error message"
                validationState="invalid"
            />
            <TextInput
                placeholder="Placeholder"
                errorPlacement="inside"
                errorMessage="Error message"
                validationState="invalid"
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput errorMessage="Error message" validationState="invalid" />
<TextInput errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## Größe

`s` – Wird verwendet, wenn Standardsteuerelemente zu groß sind (Tabellen, kleine Karten).

`m` – Grundgröße, wird in den meisten Komponenten verwendet.

`l` – Grundlegende Steuerelemente, die im Kopfbereich einer Seite, in modalen Fenstern oder Popups verwendet werden.

`xl` – Wird auf Promo- und Landingpages verwendet.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput placeholder="Placeholder" size="s" />
            <TextInput placeholder="Placeholder" size="m" />
            <TextInput placeholder="Placeholder" size="l" />
            <TextInput placeholder="Placeholder" size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput size="s" />
<TextInput size="m" />
<TextInput size="l" />
<TextInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## Label

Ermöglicht das Setzen eines Labels links vom Steuerelement.

- Das Label nimmt die linkeste Position relativ zum Steuerelement ein. Das heißt, Elemente, die über die Eigenschaft `startContent` hinzugefügt werden, befinden sich rechts davon.
- Das Label kann nicht mehr als die Hälfte der Breite des gesamten `TextInput`-Bereichs einnehmen.

<!--SANDBOX
import {TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <TextInput placeholder="Placeholder" label="Label" />
            <TextInput placeholder="Placeholder" label="Very long label with huge amount of symbols" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput label="Label" />
```

<!--/GITHUB_BLOCK-->

## Zusätzlicher Inhalt

### Startinhalt

Ermöglicht das Hinzufügen von Inhalten links vom Steuerelement (oder rechts bei Verwendung von [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL)). Befindet sich links (oder rechts bei Verwendung von rtl) vom über die Eigenschaft `label` hinzugefügten Label.

<!--SANDBOX
import {Label, TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <TextInput
            placeholder="Search"
            label="Label"
            startContent={<Label size="s">Left</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput startContent={<Label>Left</Label>} />
```

<!--/GITHUB_BLOCK-->

### Endinhalt

Ermöglicht das Hinzufügen von Inhalten rechts vom Steuerelement (oder links bei Verwendung von [rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL)). Befindet sich rechts (oder links bei Verwendung von rtl) vom über die Eigenschaft `hasClear` hinzugefügten Lösch-Button.

<!--SANDBOX
import {Label, TextInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <TextInput
            hasClear
            placeholder="Placeholder"
            endContent={<Label size="s">Right</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TextInput endContent={<Label>Right</Label>} />
```

<!--/GITHUB_BLOCK-->

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
