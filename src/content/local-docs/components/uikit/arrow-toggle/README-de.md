`ArrowToggle` ist eine Komponente zur Anzeige des Chevron-Icons. Sie kann sich in vier Richtungen drehen und zur Anzeige von Dropdown-Listen, Cut-Komponenten usw. verwendet werden.

## Aussehen

`ArrowToggle` hat vier mögliche Richtungen: `top`, `right`, `bottom` und `left`.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Größe

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Verwendung als interaktives Element

Hier ist ein Beispiel für die Verwendung von ArrowToggle mit einem umschaltbaren Icon:

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Eigenschaften

| Name      | Beschreibung                                |   Typ   |  Standard   |
| :-------- | :------------------------------------------ | :-----: | :---------: |
| className | HTML-Attribut `class`                       | `string` |             |
| direction | Wird verwendet, um die `arrowToggle`-Richtung festzulegen | `string` | `"bottom"` |
| size      | `arrowToggle`-Größe (in Pixeln)             | `number` |    `16`     |
| qa        | `data-qa`-HTML-Attribut, für Tests verwendet | `string` |             |

## CSS API

| Name                                   | Beschreibung          |
| :------------------------------------- | :-------------------- |
| `--g-arrow-toggle-transition-duration` | Übergangsdauer      |