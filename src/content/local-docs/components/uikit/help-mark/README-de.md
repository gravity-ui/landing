<!--GITHUB_BLOCK-->

# HelpMark

<!--/GITHUB_BLOCK-->

Ein Hilfe-Symbol, das kontextbezogene Informationen in einem Popover bei Hover oder Klick anzeigt. Ideal, um Tipps, Erklärungen oder unterstützende Inhalte anzuzeigen, ohne zusätzlichen Platz in der Benutzeroberfläche einzunehmen.

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## Beispiele

Komponente mit gerendertem rohem HTML und Schließen bei Mausverlassen:

<!--SANDBOX
import {HelpMark} from '@gravity-ui/uikit';

export default function () {
    return (
        <HelpMark onClick={() => console.log('just action happened')}>
            <b>Lorem ipsum</b> dolor sit{' '}
            <a href="https://example.com" target="_blank" rel="noreferrer">
                amet
            </a>
            , at scelerisque suspendisse
        </HelpMark>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<HelpMark onClick={() => console.log('just action happened')}>
  <b>Lorem ipsum</b> dolor sit{' '}
  <a href="https://example.com" target="_blank" rel="noreferrer">
    amet
  </a>
  , at scelerisque suspendisse
</HelpMark>
```

<!--/GITHUB_BLOCK-->

## Eigenschaften

`HelpMark` akzeptiert zusätzlich zu diesen alle gültigen `button`-Element-Eigenschaften:

| Name         | Beschreibung                          |           Typ           | Standard |
| :----------- | :----------------------------------- | :----------------------: | :------: |
| iconSize     | Legt die Symbolgröße fest            | `"s"` `"m"` `"l"` `"xl"` |  `"m"`   |
| popoverProps | Überschreibt `Popover`-Eigenschaften |      `PopoverProps`      |          |
| children     | Inhalt, der im Popover angezeigt wird |    `React.ReactNode`     |          |
