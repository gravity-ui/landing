Die Komponente `Alert` zeigt eine auffällige Nachricht an, um die Aufmerksamkeit des Benutzers auf wichtige Informationen zu lenken.

```tsx
import {Alert} from '@gravity-ui/uikit';
```

### Theme

`normal`: Hauptthema (standardmäßig verwendet).

`info`: Wird für jede Art von regulärer Information verwendet.

`success`: Wird für positive Informationen verwendet.

`warning`: Wird für Informationen verwendet, die Aufmerksamkeit erfordern.

`danger`: Wird für kritische Fehler verwendet.

`utility`: Wird für nützliche Tipps verwendet.

`clear`: Keine Stile, geeignet für die Verwendung in anderen Komponenten (z. B. als `content` in `Popover`).

GRAVITY_TRANSLATION_BLOCK_0_END

### View

`filled`: Wird verwendet, um die Hintergrundfarbe des Alerts anzupassen (standardmäßig verwendet).

`outlined`: Wird verwendet, um die Rahmenfarbe des Alerts anzupassen.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Layout

`vertical`: Wird verwendet, um Benutzer zu Inhalten zu leiten, wenn eine `actions`-Eigenschaft mit Schaltflächen vorhanden ist. Ermöglicht das Anzeigen von Schaltflächen unter dem Text (standardmäßig verwendet).

`horizontal`: Wird verwendet, um Benutzer zu Inhalten zu leiten, wenn eine `actions`-Eigenschaft mit Schaltflächen vorhanden ist. Ermöglicht das Anzeigen von Schaltflächen rechts neben dem Text.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Corners

`rounded`: Aktiviert abgerundete Ecken des Alert-Fensters (standardmäßig verwendet).

`square`: Aktiviert eckige Ecken des Alert-Fensters.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Alert-Titel

`title`: Alert-Titel. Hat eine niedrigere Priorität als `Alert.Title`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Alert-Nachricht

`message`: Alert-Nachricht. Sie sollte aussagekräftig genug sein, um vollständig zu erklären, worum es in dem Alert geht.

## `onClose`

`onClose`: Callback-Funktion, die aufgerufen wird, wenn ein Benutzer auf die Schließen-Schaltfläche des Alerts klickt. Wenn diese Eigenschaft definiert ist, wird die Schließen-Schaltfläche sichtbar.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

### Align

Bestimmt, wie der Inhalt innerhalb der `Alert`-Komponente vertikal ausgerichtet wird.

`baseline`: Standardausrichtung.

`center`: Der Inhalt wird vertikal in der Mitte der `Alert`-Komponente ausgerichtet. Dies kann nützlich sein, wenn Aktionen mehr Platz als Text einnehmen oder wenn das Symbol in der Mitte des Inhalts stehen muss.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Eigenschaften

| Name          | Beschreibung                                                                 |                                     Typ                                     |   Standard    |
| :------------ | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------: | :-----------: |
| theme         | Aussehen des Alerts                                                         | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` `"clear"` |  `"normal"`  |
| size          | Größe des Alerts                                                            |                              `"s"` `"m"` `"l"`                               |    `"m"`     |
| view          | Hintergrundfarbe des Alerts aktivieren/deaktivieren                         |                           `"filled"` `"outlined"`                            |  `"filled"`  |
| layout        | Wird verwendet, um Benutzer zu Inhalten zu leiten, wenn die Eigenschaft `actions` mit Schaltflächen vorhanden ist |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| actionsLayout | Wird verwendet, um die Ausrichtung der Aktionsschaltflächen zu steuern.     |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| corners       | Wird für runde/eckige Ecken des Alert-Fensters verwendet                     |                            `"rounded"` `"square"`                            | `"rounded"`  |
| title         | Titel des Alerts                                                            |                                   `string`                                   |              |
| message       | Nachricht des Alerts                                                        |                              `React.ReactNode`                               |              |
| onClose       | Eine Callback-Funktion, die aufgerufen wird, wenn der Benutzer auf die Schließen-Schaltfläche des Alerts klickt |                                  `Function`                                  |              |
| actions       | Array von Schaltflächen oder vollständigen benutzerdefinierten Komponenten |                      `React.ReactNode` `"AlertAction"`                       |              |
| align         | Bestimmt, wie der Inhalt der Alert-Komponente vertikal ausgerichtet wird   |                           `"center"` `"baseline"`                            | `"baseline"` |
| style         | HTML-Stilattribut                                                           |                            `React.CSSProperties`                             |              |
| className     | Name der Alert-Klasse                                                       |                                   `string`                                   |              |
| icon          | Standardikone überschreiben                                                 |                              `React.ReactNode`                               |              |
| qa            | HTML `data-qa`-Attribut, das in Tests verwendet wird.                       |                                   `string`                                   |              |

## CSS API

| Name                               | Beschreibung                                                                    |
| :--------------------------------- | :----------------------------------------------------------------------------- |
| `--g-alert-padding`                | Seitenabstände.                                                                 |
| `--g-alert-border-radius`          | Radius der Ecken.                                                               |
| `--g-alert-icon-margin-inline-end` | Der Abstand zwischen dem Symbol und dem Inhaltsbereich (Textinhalt + Aktionen) |
| `--g-alert-close-btn-margin`       | Der Abstand zwischen dem Inhaltsbereich (Textinhalt + Aktionen) und dem Schließen-Button |
| `--g-alert-actions-margin`         | Abstand zwischen Textinhalt und Aktionen.                                          |
| `--g-alert-message-title-indent`   | Abstand zwischen Titel und Nachricht.                                                 |
| `--g-alert-actions-gap`            | Abstand zwischen Aktionsschaltflächen.                                                    |
| `--g-alert-title-text-color`       | Titelfarbe.                                                                   |
| `--g-alert-title-font-size`        | Schriftgröße des Titels.                                                               |
| `--g-alert-title-line-height`      | Zeilenhöhe des Titels.                                                             |
| `--g-alert-message-text-color`     | Nachrichtenfarbe.                                                                 |
| `--g-alert-message-font-size`      | Schriftgröße der Nachricht.                                                             |
| `--g-alert-message-font-weight`    | Schriftstärke der Nachricht.                                                           |
| `--g-alert-message-line-height`    | Zeilenhöhe der Nachricht.                                                           |