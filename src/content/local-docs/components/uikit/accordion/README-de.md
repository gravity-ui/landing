Die Accordion-Komponente ermöglicht es Ihnen, ausklappbare Inhaltsbereiche zu erstellen, in denen Benutzer Informationen ein- oder ausblenden können. Dies ist nützlich, um große Mengen an Inhalten kompakt zu organisieren.

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

## Steuerung des Zustands des Akkordeons

Sie können den Zustand des Akkordeons über die Eigenschaften `value` und `onUpdate` der Stammkomponente oder pro Element steuern.

Beispiel für die Steuerung des Zustands von der Stammkomponente aus:

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

Beispiel für die Steuerung des Zustands pro Element über die `expanded`-Eigenschaft:

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Größe

Verwenden Sie die Eigenschaft `size`, um die Größe des `Accordion` zu steuern. Die Standardgröße ist `m`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Ansicht

`solid`: Hauptansicht mit Hintergrund (Standard).

`top-bottom`: Ansicht mit oberem und unterem Rand.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Pfeilposition

`end`: Der Pfeil ist am Ende des Headers positioniert (Standard).

`start`: Der Pfeil ist am Anfang des Headers positioniert.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Mehrere

Die Eigenschaft `multiple` ermöglicht es, dass mehrere Akkordeon-Elemente gleichzeitig erweitert werden können.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Benutzerdefinierte Zusammenfassung

Verwenden Sie die Komponente `Accordion.Summary`, um eine benutzerdefinierte Kopfzeile zu erstellen.

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

## Deaktivierter Zustand

Einzelne Akkordeon-Elemente können über die Eigenschaft `disabled` deaktiviert werden.

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

## Eigenschaften

### Accordion

| Name          | Beschreibung                                        |            Typ            |  Standard  |
| :------------ | :------------------------------------------------- | :------------------------: | :-------: |
| size          | Akkordeon-Größe                                    |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | Akkordeon-Erscheinungsbild                         |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | Ermöglicht das gleichzeitige Erweitern mehrerer Elemente |         `boolean`          |  `false`  |
| arrowPosition | Position des Pfeilindikators                       |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | Standardwert für ungesteuerten Zustand             | `string` `string[]` `null` |           |
| value         | Aktueller Wert für gesteuerten Zustand             | `string` `string[]` `null` |           |
| onUpdate      | Callback-Funktion, die aufgerufen wird, wenn sich der Zustand ändert |         `Function`         |           |
| ariaLevel     | Überschriftenebene für Barrierefreiheit            |          `number`          |    `3`    |
| className     | CSS-Klassenname                                    |          `string`          |           |
| qa            | HTML `data-qa`-Attribut, verwendet für Tests       |          `string`          |           |

### Accordion.Item

| Name            | Beschreibung                                      |       Type        | Standard |
| :-------------- | :----------------------------------------------- | :---------------: | :------: |
| value           | Eindeutiger Bezeichner für das Element            |     `string`      |          |
| summary         | Kopfzeile des Akkordeon-Elements                  | `React.ReactNode` |          |
| expanded        | Gesteuerter erweiterter Zustand                   |     `boolean`     |          |
| defaultExpanded | Standardmäßiger erweiterter Zustand               |     `boolean`     |          |
| disabled        | Deaktiviert das Akkordeon-Element                 |     `boolean`     | `false`  |
| keepMounted     | Inhalt im DOM behalten, auch wenn eingeklappt     |     `boolean`     |          |
| onUpdate        | Callback-Funktion, die aufgerufen wird, wenn sich der Zustand des Elements ändert |    `Function`     |          |
| className       | CSS-Klassenname                                   |     `string`      |          |
| qa              | HTML `data-qa`-Attribut, verwendet für Tests      |     `string`      |          |

### Accordion.Summary
GRAVITY_TRANSLATION_BLOCK_17_END

| Name     | Beschreibung                                                                             |                      Typ                       |                                          Standard                                          |
| :------- | :--------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | Benutzerdefinierte Renderfunktion für die Zusammenfassung                                | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | HTML `data-qa`-Attribut, das für Tests verwendet wird. Funktioniert nur, wenn `qa` in Accordion.Item übergeben wird |                    `string`                     | `${accordion-item}-summary` wenn `qa` in Accordion.Item übergeben wird, `disclosure-summary` wenn nicht |

## CSS API

| Name                           | Beschreibung                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | Inline (horizontale) Polsterung für das Akkordeon |