`Select` ist eine Steuerung, die eine Liste von Optionen bereitstellt, aus denen ein Benutzer auswählen kann.

```tsx
import {Select} from '@gravity-ui/uikit';
```

## Optionen

Optionen zur Auswahl.

### Optionen definieren

Sie können Optionen als Array von Objekten oder als Kinder einer Komponente definieren. Der erste Ansatz ist nützlich für Fälle, in denen Optionen eine komplexe Vorbereitung und möglicherweise eine Zwischenspeicherung erfordern. Der zweite ist praktisch, wenn es wenige Optionen gibt und ihre Konfiguration keine komplexen Berechnungen erfordert.

#### Flache Liste

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

#### Gruppierte Liste

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Daten in Optionen speichern

Sie können eindeutige Daten in jeder Option definieren und speichern, indem Sie die Eigenschaft `option.data` verwenden. Dies kann nützlich sein, wenn Sie die Daten beim Verwenden des `onUpdate`-Callbacks anreichern müssen oder beispielsweise beim Rendern Ihrer Optionen mit `renderOption`.

## Mehrere Optionen auswählen

Um die Mehrfachauswahl zu aktivieren, verwenden Sie die Eigenschaft `multiple`. Ihr Standardwert ist `false`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Zähler

Sie können dem Steuerelement mit der Eigenschaft `hasCounter` einen Zähler der ausgewählten Elemente hinzufügen.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Optionen filtern

Um den Filterbereich zu aktivieren, verwenden Sie die Eigenschaft `filterable`. Ihr Standardwert ist `false`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Größe

Um die Standardgröße des Steuerelements und der Optionen zu verwalten, verwenden Sie die Eigenschaft `size`. Ihre Standardgröße ist `m`.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Steuerelementbreite

Standardmäßig dehnt sich die Breite des Steuerelements aus, um der Breite des Inhalts der ausgewählten Optionen zu entsprechen. Sie können sie mit der Eigenschaft `width` verwalten:

`'max'`: Dehnt sich auf die volle Breite des übergeordneten Elements aus.

`number`: Wendet die Breite in Pixeln an.

GRAVITY_TRANSLATION_BLOCK_13_END

## Popup-Breite

Sie können die Popup-Breite mit der Eigenschaft `popupWidth` verwalten. Die verfügbaren Werte sind:

`'fit'`: Wendet die Steuerelementbreite an.

`number`: Wendet die Breite in Pixeln an.

Hinweise zum Standardverhalten:

- Die Popup-Breite entspricht der Breite der breitesten Option, aber nicht breiter als `90vw`. Dies gilt nicht, wenn Sie [Virtualisierung](#virtualisierte-liste) verwenden.

- Schmale Optionen werden auf die Breite des Steuerelements gestreckt.

GRAVITY_TRANSLATION_BLOCK_14_END

### Virtualisierte Liste

Für eine optimale Anzeige einer großen Anzahl von Optionen verfügt `Select` über ein integriertes Virtualisierungstool für Listen. Die Virtualisierung wird nach Überschreiten des Schwellenwerts für die Anzahl der Optionen (standardmäßig `50`) aktiviert. Sie können diesen Wert mit der Eigenschaft `virtualizationThreshold` verwalten.

Bei Verwendung der Virtualisierung gelten einige Einschränkungen für das Popup-Element:

- Die Popup-Breite wird nicht mehr an die Länge der längsten Option angepasst.

- Die Mindestbreite des Popups entspricht der Breite des Steuerelements oder `100px`, wenn das Steuerelement kürzer ist.

GRAVITY_TRANSLATION_BLOCK_15_END

## Erweiterte Nutzung

Es gibt viele Möglichkeiten, Ihr `Select` anzupassen.

### Benutzerdefiniertes Steuerelement rendern

Um ein benutzerdefiniertes Steuerelement zu rendern, verwenden Sie die Eigenschaft `renderControl`.
Hinweis: Sie sollten alle Argumente an Ihren Knoten weiterleiten, um ein konsistentes Verhalten zu ermöglichen, genau wie bei der Verwendung des Standardsteuerelements.

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Benutzerdefinierten Filterbereich rendern

Um einen benutzerdefinierten Filterbereich zu rendern, verwenden Sie die Eigenschaft `renderFilter` und setzen Sie die Eigenschaft `filterable` auf `true`.
Hinweis: Sie müssen alle Argumente an Ihren Knoten weiterleiten, um einen ordnungsgemäß funktionierenden Filter zu ermöglichen, genau wie bei der Verwendung der Standardkonfiguration.

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

### Benutzerdefinierte Optionen rendern

Um benutzerdefinierte Optionen zu rendern, verwenden Sie die Eigenschaft `renderOption`:

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

### Benutzerdefinierte ausgewählte Optionen rendern

Um benutzerdefinierte ausgewählte Optionen zu rendern, verwenden Sie die Eigenschaft `renderSelectedOption`:

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### Optionen mit unterschiedlichen Höhen rendern

Optionen haben eine feste Höhe gemäß der Eigenschaft `size`. Wenn Sie Optionen mit unterschiedlichen Höhen rendern müssen, können Sie die Eigenschaft `option.data` verwenden. Sie speichert Informationen darüber, welche Höhe Sie für die Optionen festlegen müssen, sowie die Eigenschaft `getOptionHeight`, um diesen Wert festzulegen.

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

### Benutzerdefinierten Zähler rendern

Um einen benutzerdefinierten Zähler zu rendern, verwenden Sie die Eigenschaft `renderCounter`. Der Zähler wird nur angezeigt, wenn die Mehrfachauswahl aktiviert ist (`multiple={true}`) und `hasCounter={true}`.

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

### Optionsliste rendern

Die Eigenschaft `renderPopup` ermöglicht es Ihnen, den Inhalt der Optionsliste zu steuern: Ändern Sie die Reihenfolge der Standardelemente (Filter, Liste), blenden Sie sie aus oder fügen Sie benutzerdefinierte Elemente dazwischen, davor oder danach ein.

GRAVITY_TRANSLATION_BLOCK_28_END

GRAVITY_TRANSLATION_BLOCK_29_END

### Fehler

Dieser `Select`-Zustand ist für eine fehlerhafte Benutzereingabe. Um das Erscheinungsbild von `Select` zu ändern, verwenden Sie die Eigenschaft `validationState` mit dem Wert `"invalid"`. Optional können Sie eine Fehlermeldung über die Eigenschaft `errorMessage` bereitstellen. Standardmäßig wird der Meldungstext außerhalb der Komponente gerendert.
Sie können dies mit der Eigenschaft `errorPlacement` ändern.

GRAVITY_TRANSLATION_BLOCK_30_END

## Eigenschaften

| Name                                                      | Description                                                                                                                      | Typ                                      | Standardwert                                             |
| :-------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                 | Steuert die Klasse des Elements                                                                                                  | `string`                                 |                                                          |
| defaultValue                                              | Standardwerte, die ausgewählte Optionen darstellen, falls ein unkontrollierter Zustand verwendet wird                            | `string[]`                               |                                                          |
| disabled                                                  | Zeigt an, dass der Benutzer nicht mit dem Steuerelement interagieren kann                                                        | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                          | Zeigt an, dass das Auswahl-Popup einen Filterbereich hat                                                                         | `boolean`                                | `false`                                                  |
| filterOption                                              | Wird verwendet, um eine Option mit dem Filter zu vergleichen                                                                     | `function`                               |                                                          |
| filterPlaceholder                                         | Standardtext für den Platzhalter des Filterfelds                                                                                 | `string`                                 |                                                          |
| [getOptionHeight](#render-options-with-different-heights) | Wird verwendet, um die Höhe von benutzerdefinierten Optionen festzulegen                                                         | `function`                               |                                                          |
| getOptionGroupHeight                                      | Wird verwendet, um die Höhe von benutzerdefinierten Optionsgruppen festzulegen                                                   | `function`                               |                                                          |
| hasClear                                                  | Ermöglicht die Anzeige eines Symbols zum Löschen ausgewählter Optionen                                                           | `boolean`                                | `false`                                                  |
| id                                                        | `id` HTML-Attribut                                                                                                               | `string`                                 |                                                          |
| label                                                     | Beschriftung des Steuerelements                                                                                                  | `string`                                 |                                                          |
| loading                                                   | Fügt das Ladeelement am Ende der Optionsliste hinzu. Funktioniert wie eine permanente Ladeanzeige, während die Optionsliste leer ist. | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                   | Zeigt an, ob mehrere Optionen in der Liste ausgewählt werden können                                                               | `boolean`                                | `false`                                                  |
| name                                                      | Name des Steuerelements                                                                                                          | `string`                                 |                                                          |
| onBlur                                                    | Handler, der aufgerufen wird, wenn das Element den Fokus verliert.                                                               | `function`                               |                                                          |
| filter                                                    | Gesteuerter Filterwert                                                                                                           | `string`                                 | `''`                                                     |
| onFilterChange                                            | Wird jedes Mal nach der Änderung des Filters ausgelöst                                                                          | `function`                               |                                                          |
| onFocus                                                   | Handler, der aufgerufen wird, wenn das Element den Fokus erhält                                                                  | `function`                               |                                                          |
| onLoadMore                                                | Wird ausgelöst, wenn die Ladeanzeige sichtbar wird                                                                              | `function`                               |                                                          |
| onOpenChange                                              | Wird jedes Mal nach der Änderung der Sichtbarkeit des Popups ausgelöst                                                          | `function`                               |                                                          |
| onUpdate                                                  | Wird ausgelöst, wenn eine Änderung am `Select`-Wert vom Benutzer bestätigt wird                                                  | `function`                               |                                                          |
| [options](#options)                                       | Optionen zur Auswahl                                                                                                             | `(SelectOption \| SelectOptionGroup)[]`  |                                                          |
| pin                                                       | Ansicht des Steuerelementrahmens                                                                                                 | `string`                                 | `'round-round'`                                          |
| placeholder                                               | Platzhaltertext                                                                                                                  | `string`                                 |                                                          |
| popupClassName                                            | Klasse des Popups mit der Optionsliste                                                                                           | `string`                                 |                                                          |
| popupPlacement                                            | Platzierung des Popups                                                                                                           | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                | Breite des Popups                                                                                                                | `number \| 'fit' \| 'outfit'`            | `'outfit'`                                               |
| qa                                                        | Test-ID-Attribut (`data-qa`)                                                                                                     | `string`                                 |                                                          |
| [renderControl](#render-custom-control)                   | Wird zum Rendern eines benutzerdefinierten Steuerelements verwendet                                                              | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                | Wird zum Rendern eines benutzerdefinierten Zählers verwendet. Funktioniert nur mit [hasCounter](#counter).                        | `function`                               |                                                          |
| renderEmptyOptions                                        | Wird zum Rendern eines Knotens für eine leere Optionsliste verwendet                                                             | `function`                               |                                                          |
| [renderFilter](#render-custom-filter-section)             | Wird zum Rendern eines benutzerdefinierten Filterbereichs verwendet                                                               | `function`                               |                                                          |
| [renderOption](#render-custom-options)                    | Wird zum Rendern von benutzerdefinierten Optionen verwendet                                                                       | `function`                               |                                                          |
| renderOptionGroup                                         | Wird zum Rendern von benutzerdefinierten Optionsgruppen verwendet                                                                | `function`                               |                                                          |
| [renderSelectedOption](#render-custom-selected-options)   | Wird zum Rendern von benutzerdefinierten ausgewählten Optionen verwendet                                                          | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                    | Wird zum Rendern des Inhalts der Optionsliste verwendet                                                                          | `function`                               |                                                          |
| [size](#size)                                             | Größe des Steuerelements / der Optionen                                                                                          | `string`                                 | `'m'`                                                    |
| value                                                     | Werte, die ausgewählte Optionen darstellen                                                                                      | `string[]`                               |                                                          |
| view                                                      | Ansicht des Steuerelements                                                                                                       | `string`                                 | `'normal'`                                               |
| [virtualizationThreshold](#virtualized-list)              | Schwellenwert für die Anzahl der Optionen, nach dem die Virtualisierung aktiviert wird                                          | `number`                                 | `50`                                                     |
| [width](#control-width)                                   | Breite des Steuerelements                                                                                                        | `string \| number`                       | `undefined`                                              |
| errorMessage                                              | Fehlermeldungstext                                                                                                               | `string`                                 |                                                          |
| errorPlacement                                            | Position des Fehlers                                                                                                             | `outside` `inside`                       | `outside`                                                |
| validationState                                           | Validierungsstatus                                                                                                               | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                    | Zeigt die Anzahl der ausgewählten Optionen an. Der Zähler erscheint nur, wenn die Mehrfachauswahl [multiple](#selecting-multiple-options) aktiviert ist. | `boolean`                                |                                                          |

## CSS API

| Name                             | Beschreibung                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | Umrissfarbe bei Fokus (standardmäßig fehlt) |