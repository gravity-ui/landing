`Disclosure` ist eine aufklappbare Komponente, die es ermöglicht, ihren verschachtelten Inhalt anzuzeigen und auszublenden.

```tsx
import {Disclosure} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

## Steuerung des Erweiterungszustands

Sie können den Erweiterungszustand mit den Eigenschaften `expanded` und `onUpdate` steuern.

Beispiel für eine gesteuerte Komponente:

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Größe

Verwenden Sie die Eigenschaft `size`, um die Größe von `Disclosure` zu steuern. Die Standardgröße ist `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Pfeilposition

`start`: Der Pfeil wird am Anfang des Headers positioniert (Standard).

`end`: Der Pfeil wird am Ende des Headers positioniert.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Benutzerdefinierter Inhalt

Verwenden Sie die Komponente `Disclosure.Summary`, um eine benutzerdefinierte Kopfzeile zu erstellen, und `Disclosure.Details`, um benutzerdefinierten Inhalt bereitzustellen.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Deaktivierter Zustand

`Disclosure` kann mit der Eigenschaft `disabled` deaktiviert werden.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Eigenschaften

### Disclosure

| Name             | Beschreibung                                                              | Typ                                                  | Standardwert |
| :--------------- | :------------------------------------------------------------------------ | :--------------------------------------------------- | :----------- |
| size             | Komponentengröße                                                          | `"m"` `"l"` `"xl"`                                   | `"m"`        |
| className        | CSS-Klassenname des Wurzelelements                                        | `string`                                             |              |
| disabled         | Deaktivierter Zustand                                                     | `boolean`                                            | `false`      |
| defaultExpanded  | Standard-Öffnungszustand                                                  | `boolean`                                            | `false`      |
| expanded         | Gesteuerter Öffnungszustand                                               | `boolean`                                            |              |
| arrowPosition    | Steuerelementposition                                                     | `"start"` `"end"`                                    | `"start"`    |
| summary          | Zusammenfassung des Inhalts                                               | `React.ReactNode`                                    |              |
| keepMounted      | Inhalt auch im eingeklappten Zustand im DOM behalten                      | `boolean`                                            | `true`       |
| onUpdate         | Callback, der ausgelöst wird, wenn sich der Erweiterungs-/Einklappzustand ändert. | `(expanded: boolean) => void`                        |              |
| onSummaryKeyDown | Callback, der bei Tastaturereignissen ausgelöst wird, wenn die Zusammenfassung fokussiert ist. | `(e: React.KeyboardEvent<HTMLButtonElement>) => void` |              |
| children         | Inhalt                                                                    | `React.ReactNode`                                    |              |
| qa               | Testidentifikator                                                         | `string`                                             |              |

### Disclosure.Summary

| Name     | Beschreibung                                | Typ                                            | Standardwert         |
| :------- | :------------------------------------------ | :--------------------------------------------- | :------------------- |
| children | Renderfunktion                              | `(props, defaultSummary) => React.ReactElement` |                      |
| qa       | Testidentifikator                           | `string`                                       | `disclosure-summary` |

### Disclosure.Details
GRAVITY_TRANSLATION_BLOCK_11_END

| Name     | Beschreibung                                  | Typ               | Standardwert         |
| :------- | :-------------------------------------------- | :---------------- | :------------------- |
| children | Inhalt                                        | `React.ReactNode` |                      |
| qa       | Test-Identifikator                            | `string`          | `disclosure-details` |

## CSS API

| Name                                 | Beschreibung                                             |
| :----------------------------------- | :------------------------------------------------------- |
| `--g-disclosure-text-color`          | Textfarbe für die Inhaltszusammenfassung                 |
| `--g-disclosure-text-color-disabled` | Textfarbe für die Inhaltszusammenfassung im deaktivierten Zustand |