Ein Hilfe-Symbol, das kontextbezogene Informationen in einem Popover auf dem Desktop und in einem Sheet auf Mobilgeräten anzeigt. Ideal, um Tipps, Erklärungen oder unterstützende Inhalte anzuzeigen, ohne zusätzlichen Platz in der Benutzeroberfläche einzunehmen.

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## Beispiele

Komponente mit gerendertem rohem HTML und Schließen bei Mausverlassen:

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Eigenschaften

`HelpMark` akzeptiert alle gültigen `button`-Element-Eigenschaften zusätzlich zu diesen:

| Name         | Beschreibung                                   |           Typ           | Standard |
| :----------- | :-------------------------------------------- | :----------------------: | :------: |
| size         | Legt die Symbolgröße fest                                | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| popoverProps | Überschreibt Desktop `Popover`-Eigenschaften              |      `PopoverProps`      |          |
| sheetProps   | Überschreibt Mobil `Sheet`-Eigenschaften                 |       `SheetProps`       |          |
| children     | Inhalt, der im Popover oder Sheet angezeigt wird |    `React.ReactNode`     |          |

## CSS API

| Name                 | Beschreibung     |
| :------------------- | :-------------- |
| `--g-help-mark-size` | Symbolgröße in px |