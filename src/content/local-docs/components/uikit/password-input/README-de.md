GRAVITY_TRANSLATION_BLOCK_0_END

```tsx
import {PasswordInput} from '@gravity-ui/uikit';
```

`PasswordInput` für die Eingabe von Passwörtern und anderen sensiblen Informationen. Es kann mit Kopier- und Anzeige-Buttons für eine bequemere Nutzung gerendert werden.

### Kopier-Button

Dieser Button ermöglicht es Benutzern, den Eingabewert einfach in ihre Zwischenablage zu kopieren. Sie können diesen Button mit der booleschen Prop `hideCopyButton` ausblenden.

GRAVITY_TRANSLATION_BLOCK_1_END

### Anzeige-Button

Die Prop `hideRevealButton` ermöglicht es Benutzern, die Sichtbarkeit des Passworts umzuschalten.

GRAVITY_TRANSLATION_BLOCK_2_END

### Eigenschaften

`PasswordInput` [Eigenschaften](https://github.com/gravity-ui/uikit/blob/main/src/components/controls/TextInput/README.md#properties), mit einigen Ausnahmen und Ergänzungen:

- `type` wird weggelassen;

| Name                | Beschreibung                                                                |    Typ    | Standard |
| :------------------ | :-------------------------------------------------------------------------- | :-------: | :------: |
| hideCopyButton      | Zeigt den Kopier-Button an                                                  | `boolean` | `false`  |
| hideRevealButton    | Zeigt den Anzeige-Button an                                                 | `boolean` | `false`  |
| showCopyTooltip     | Bestimmt, ob der Tooltip für den Kopier-Button angezeigt werden soll        | `boolean` | `false`  |
| showRevealTooltip   | Bestimmt, ob der Tooltip für den Anzeige-Button angezeigt werden soll       | `boolean` | `false`  |
| revealValue         | Bestimmt den Sichtbarkeitsstatus des Passwort-Eingabefeldes                 | `boolean` | `false`  |
| onRevealValueUpdate | Eine Callback-Funktion, die aufgerufen wird, wenn sich der `revealValue`-Status ändert | `function` |          |

GRAVITY_TRANSLATION_BLOCK_3_END