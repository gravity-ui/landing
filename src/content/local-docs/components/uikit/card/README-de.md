`Card` ist eine wiederverwendbare React-Komponente, die im Grunde ein kartenähnlicher Container mit anpassbaren Stilen und Funktionen ist. Sie wird verwendet, um Informationen oder Inhalte visuell ansprechend und gut organisiert darzustellen.

```tsx
import {Card} from '@gravity-ui/uikit';
```

## Aussehen

`Card` kann mit mehreren Stil-Kombinationen angezeigt werden:

- `theme`: `normal`, `info`, `success`, `warning`, `danger` oder `utility`.
- `type`: `selection`, `action` oder `container`.
- `view`: `outlined`, `clear`, `outlined`, `filled` oder `raised` (abhängig vom `type`-Parameter).

## Theme

Dieser Parameter wird verwendet, um den Theme-Stil der Karte festzulegen. Er bestimmt das Farbschema und das Aussehen der Karte.

Durch die Angabe verschiedener Theme-Werte können Sie das visuelle Erscheinungsbild von `Card` an Ihren Zweck und den benötigten Stil anpassen.

- `normal`: Normales/Standard-Theme der Karte.
- `info`: Theme zur Anzeige neutraler Informationen.
- `success`: Theme zur Anzeige positiver oder bestätigender Inhalte.
- `warning`: Theme zur Anzeige von Warnungen.
- `danger`: Theme zur Anzeige von Inhalten, die sich auf kritische Probleme oder Fehler beziehen.
- `utility`: Theme zur Anzeige nützlicher Tipps.

GRAVITY_TRANSLATION_BLOCK_0_END

## Typ

Dieser Parameter wird verwendet, um den Typ der `Card`-Komponente zu definieren. Er ermöglicht es Ihnen, das Aussehen und Verhalten der Karte anzupassen.

- `container`: Karte, die als Container für andere Elemente dient. Sie bietet ein strukturiertes Layout für Inhalte.
- `action`: Karte mit einem interaktiven Element, wie z. B. einer Schaltfläche, die beim Klicken eine Aktion auslöst.
- `selection`: Karte, die ausgewählt oder angeklickt werden kann, um eine bestimmte Aktion auszuführen.

GRAVITY_TRANSLATION_BLOCK_1_END

## View

Dieser Parameter wird verwendet, um den `Card`-View oder Layout-Stil festzulegen. Er ermöglicht es Ihnen, das Aussehen und die Anordnung des Karteninhalts anzupassen.

- `clear`: Kein Stil.
- `outlined`: Wendet einen dünnen Rahmen an, um den Karteninhalt hervorzuheben.
- `filled`: Füllt den Karteninhalt aus.
- `raised`: Wendet einen Schatten an, um den Container leicht anzuheben.

GRAVITY_TRANSLATION_BLOCK_2_END

## Eigenschaften

| Name      | Beschreibung                                                                                             |    Typ     |    Standard    |
| :-------- | :------------------------------------------------------------------------------------------------------- | :--------: | :------------: |
| children  | Karteninhalt                                                                                             | `ReactNode` |                |
| type      | Der `Card`-Typ bestimmt, welche Eigenschaften verfügbar sind.                                            |  `string`  | `"container"`  |
| view      | Diese Eigenschaft ist nur für die `type`s `"container"` und `"selection"` verfügbar.                   |  `string`  | `"outlined"`   |
| theme     | Grundfarbe der Karte. Diese Eigenschaft ist nur für den `type` `"container"` verfügbar.                 |  `string`  |  `"normal"`    |
| size      | Die `Card`-Größe bestimmt, welche Eigenschaften verfügbar sind.                                          |  `string`  |     `"m"`      |
| className | CSS-Klasse                                                                                               |  `string`  |                |
| onClick   | Karten-Klick-Handler. Diese Eigenschaft ist nur für die `type`s `"selection"` und `"action"` verfügbar. | `Function` |                |
| selected  | Ausgewählte Karte. Diese Eigenschaft ist nur für den `type` `"selection"` verfügbar.                     |  `Boolean` |                |
| disabled  | Deaktivierte Karte. Diese Eigenschaft ist nur für die `type`s `"selection"` und `"action"` verfügbar.   |  `Boolean` |                |
| qa        | `data-qa` HTML-Attribut, verwendet für Tests                                                             |  `string`  |                |

## CSS API

| Name                        | Beschreibung     |
| :-------------------------- | :--------------- |
| `--g-card-background-color` | Hintergrundfarbe |
| `--g-card-border-width`     | Randbreite       |
| `--g-card-border-color`     | Randfarbe        |
| `--g-card-border-radius`    | Randradius       |
| `--g-card-box-shadow`       | Schatten         |

GRAVITY_TRANSLATION_BLOCK_3_END