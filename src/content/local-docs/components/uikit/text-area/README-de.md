GRAVITY_TRANSLATION_BLOCK_0_END

```tsx
import {TextArea} from '@gravity-ui/uikit';
```

`TextArea` ermöglicht es Benutzern, Text in eine Benutzeroberfläche einzugeben.

## Aussehen

Das Aussehen des `TextArea` wird durch die Eigenschaften `view` und `pin` gesteuert.

### View

`normal` - ist die Hauptansicht des `TextArea` (wird standardmäßig verwendet).

GRAVITY_TRANSLATION_BLOCK_1_END

`clear` - kann verwendet werden, wenn ein benutzerdefinierter Wrapper für das `TextArea` verwendet wird.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Pin

Ermöglicht die Steuerung des Aussehens der rechten und linken Kanten des `TextArea`-Rahmens.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Zustände

### Disabled

Der Zustand des `TextArea`, in dem der Benutzer nicht mit der Komponente interagieren kann.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Error

Der Zustand des `TextArea`, in dem falsche Benutzereingaben angezeigt werden sollen. Um das Aussehen des `TextArea` zu ändern, verwenden Sie die Eigenschaft `validationState` mit dem Wert "invalid".
Eine optionale Nachricht kann über die Eigenschaft `errorMessage` hinzugefügt werden.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Größe

`s` – Wird verwendet, wenn Standardsteuerelemente zu groß sind (Tabellen, kleine Karten).

`m` – Die Basisgröße, die in den meisten Komponenten verwendet wird.

`l` – Wird für grundlegende Steuerelemente im Header einer Seite, in modalen Fenstern oder Pop-ups verwendet.

`xl` – Wird auf Promo- und Landingpages verwendet.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Zeilenverwaltung

Die Anzahl der Zeilen des `TextArea` wird durch die Eigenschaften `rows`, `minRows` und `maxRows` gesteuert. Die Eigenschaft `rows` deaktiviert die automatische Höhenberechnung.
Um die gewünschte Höhe des `TextArea` einzustellen, verwenden Sie die Eigenschaft `className` oder `style` mit der Eigenschaft `rows` auf 1 gesetzt.

GRAVITY_TRANSLATION_BLOCK_12_END

## Größenveränderbares TextArea

Sie können ein größenveränderbares Verhalten erzielen, indem Sie den `resize`-Stil der Eigenschaft `controlProps` zuweisen. Stellen Sie sicher, dass Sie die Eigenschaft `rows` angeben, wenn Sie die Höhe des Textbereichs ändern können, da die Größenänderung sonst mit der automatischen Höhenberechnung kollidiert.

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

## Eigenschaften

| Name            | Beschreibung                                                                                                                       |                        Typ                         |     Standard     |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------: | :--------------: |
| autoComplete    | Das `autocomplete`-Attribut des Steuerelements                                                                                     |                 `boolean` `string`                  |                 |
| autoFocus       | Das `autofocus`-Attribut des Steuerelements                                                                                        |                      `boolean`                      |                 |
| className       | Der Klassenname des Wrapper-Elements des Steuerelements                                                                            |                      `string`                       |                 |
| controlProps    | Die HTML-Attribute des Steuerelements                                                                                              | `React.TextareaHTMLAttributes<HTMLTextAreaElement>` |                 |
| controlRef      | React-Referenz, die dem Steuerelement zur Verfügung gestellt wird                                                                   |          `React.Ref<HTMLTextAreaElement>`           |                 |
| defaultValue    | Der Standardwert des Steuerelements. Wird verwendet, wenn die Komponente nicht gesteuert wird                                     |                      `string`                       |                 |
| disabled        | Zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann                                                          |                      `boolean`                      |     `false`     |
| errorMessage    | Fehlermeldungstext                                                                                                                 |                      `string`                       |                 |
| hasClear        | Zeigt das Symbol zum Löschen des Werts des Steuerelements an                                                                       |                      `boolean`                      |     `false`     |
| id              | Das `id`-Attribut des Steuerelements                                                                                               |                      `string`                       |                 |
| maxRows         | Die maximale Anzahl sichtbarer Textzeilen für das Steuerelement. Wird ignoriert, wenn `rows` angegeben ist                          |                      `number`                       |                 |
| minRows         | Die minimale Anzahl sichtbarer Textzeilen für das Steuerelement. Wird ignoriert, wenn `rows` angegeben ist                          |                      `number`                       |                 |
| name            | Das `name`-Attribut des Steuerelements. Wenn nicht angegeben, wird es automatisch generiert.                                      |                      `string`                       |                 |
| note            | Ein optionales Element, das unter der rechten unteren Ecke des Steuerelements angezeigt wird und den Platz mit dem Fehlercontainer teilt |                  `React.ReactNode`                  |                 |
| onBlur          | Wird ausgelöst, wenn das Steuerelement den Fokus verliert. Stellt das Fokusereignis als Argument des Callbacks bereit              |                     `function`                      |                 |
| onChange        | Wird ausgelöst, wenn sich der Wert des Eingabefelds durch den Benutzer ändert. Stellt das Änderungsereignis als Argument des Callbacks bereit |                     `function`                      |                 |
| onFocus         | Wird ausgelöst, wenn das Steuerelement den Fokus erhält. Stellt das Fokusereignis als Argument des Callbacks bereit                |                     `function`                      |                 |
| onKeyDown       | Wird ausgelöst, wenn eine Taste gedrückt wird. Stellt das Tastaturereignis als Argument des Callbacks bereit                      |                     `function`                      |                 |
| onKeyUp         | Wird ausgelöst, wenn eine Taste losgelassen wird. Stellt das Tastaturereignis als Argument des Callbacks bereit                    |                     `function`                      |                 |
| onUpdate        | Wird ausgelöst, wenn sich der Wert des Eingabefelds durch den Benutzer ändert. Stellt den neuen Wert als Argument des Callbacks bereit |                     `function`                      |                 |
| pin             | Die Randansicht des Steuerelements                                                                                                 |                      `string`                       | `"round-round"` |
| placeholder     | Text, der im Steuerelement angezeigt wird, wenn kein Wert festgelegt ist                                                           |                      `string`                       |                 |
| qa              | Test-ID-Attribut (`data-qa`)                                                                                                       |                      `string`                       |                 |
| readOnly        | Zeigt an, dass der Benutzer den Wert des Steuerelements nicht ändern kann                                                          |                      `boolean`                      |     `false`     |
| rows            | Die Anzahl der sichtbaren Textzeilen für das Steuerelement. Wenn nicht angegeben, wird die Höhe automatisch basierend auf dem Inhalt berechnet |                      `number`                       |                 |
| size            | Die Größe des Steuerelements                                                                                                       |              `"s"` `"m"` `"l"` `"xl"`               |      `"m"`      |
| tabIndex        | Das `tabindex`-Attribut des Steuerelements                                                                                         |                      `string`                       |                 |
| type            | Der Typ des Steuerelements                                                                                                         |                      `string`                       |                 |
| validationState | Validierungsstatus                                                                                                                 |                     `"invalid"`                     |                 |
| value           | Der Wert des Steuerelements                                                                                                        |                      `string`                       |                 |
| view            | Die Ansicht des Steuerelements                                                                                                     |                `"normal"` `"clear"`                 |   `"normal"`    |

## CSS API

| Name                                | Beschreibung                                         |
| :---------------------------------- | :-------------------------------------------------- |
| `--g-text-area-text-color`          | Textfarbe                                           |
| `--g-text-area-placeholder-color`   | Platzhalterfarbe                                    |
| `--g-text-area-background-color`    | Hintergrundfarbe                                    |
| `--g-text-area-border-radius`       | Randradius                                          |
| `--g-text-area-border-width`        | Randbreite                                          |
| `--g-text-area-border-color`        | Randfarbe                                           |
| `--g-text-area-border-color-hover`  | Randfarbe bei Hover                                 |
| `--g-text-area-border-color-active` | Randfarbe bei Aktivierung                           |
| `--g-text-area-focus-outline-color` | Umrissfarbe bei Fokus (standardmäßig nicht vorhanden) |