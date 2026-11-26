Ein Hilfe-Symbol, das kontextbezogene Informationen in einem Popover bei Hover oder Klick anzeigt. Ideal, um Tipps, Erklärungen oder unterstützende Inhalte anzuzeigen, ohne zusätzlichen Platz in der Benutzeroberfläche einzunehmen.

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## Beispiele

Komponente mit gerendertem rohem HTML und Schließen bei Mausverlassen:

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Eigenschaften

`HelpMark` akzeptiert zusätzlich zu diesen alle gültigen `button`-Element-Eigenschaften:

| Name         | Beschreibung                          |           Typ           | Standard |
| :----------- | :----------------------------------- | :----------------------: | :------: |
| iconSize     | Legt die Symbolgröße fest            | `"s"` `"m"` `"l"` `"xl"` |  `"m"`   |
| popoverProps | Überschreibt `Popover`-Eigenschaften |      `PopoverProps`      |          |
| children     | Inhalt, der im Popover angezeigt wird |    `React.ReactNode`     |          |