`Sheet` ist eine Komponente, die für die Verwendung im mobilen Kontext als Informations- oder interaktives Element konzipiert ist. Sie können Inhalte beliebiger Größe darin platzieren, da internes Scrollen und dynamische Größenänderung unterstützt werden.

```tsx
import {Sheet} from '@gravity-ui/uikit';
```

Auf Mobilgeräten können Sie ein `Sheet` verschieben, indem Sie dessen Hauptteil oder den Wischbereich ziehen. Um es zu schließen, wischen Sie nach unten oder tippen Sie auf den Bereich außerhalb des `Sheet`.

## Verwendung

```tsx
import React from 'react';
import {Button, Sheet} from '@gravity-ui/uikit';

const SheetExample = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setVisible(true)}>Open Sheet</Button>
      <Sheet visible={visible} onClose={() => setVisible(false)} title="Content Sheet">
        Content
      </Sheet>
    </React.Fragment>
  );
};
```

## Eigenschaften
GRAVITY_TRANSLATION_BLOCK_0_END

| Name                        | Beschreibung                                                                                                                                                                                             |     Typ      |     Standard     |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :------------: |
| allowHideOnContentScroll    | Ermöglicht das Schließen des Sheets durch Herunterwischen, wenn der Inhalt bis zum oberen Rand gescrollt ist (`content Node.scrollTop === 0`) oder gar nicht gescrollt werden kann. |   `boolean`  |     `true`     |
| alwaysFullHeight            | Die Höhe des `Sheet` hat immer den Maximalwert.                                                                                                                                                           |   `boolean`  |   `undefined`  |
| className                   | `class` HTML-Attribut.                                                                                                                                                                                   |   `string`   |   `undefined`  |
| container                   | DOM-Element, an das die Komponente über `Portal` angehängt wird.                                                                                                                                         | `HTMLElement` | `document.body` |
| contentClassName            | `class` HTML-Attribut für den Inhalt des Sheets.                                                                                                                                                         |   `string`   |   `undefined`  |
| disablePortal               | Deaktiviert die Verwendung von `Portal`.                                                                                                                                                                 |   `boolean`  |     `false`    |
| hideTopBar                  | Blendet die obere Leiste mit dem Größenänderungsgriff aus.                                                                                                                                               |   `boolean`  |                |
| id                          | Sheet-ID, die als Hash in einer URL verwendet wird. Stellen Sie sicher, dass Sie mehrere `id`-Werte angeben, wenn sich mehr als ein Sheet auf einer Seite befinden kann.                                |   `string`   |     `modal`    |
| maxContentHeightCoefficient | Koeffizient, der die maximale Höhe des `Sheet` relativ zur Höhe des Viewports bestimmt (Bereich 0-1).                                                                                                     |   `number`   |      `0.9`     |
| onClose                     | Handler für das Schließen-Ereignis.                                                                                                                                                                      |  `function`  |   `undefined`  |
| swipeAreaClassName          | `class` HTML-Attribut für den Wischbereich.                                                                                                                                                              |   `string`   |   `undefined`  |
| title                       | Titel des Sheet-Fensters.                                                                                                                                                                                |   `string`   |   `undefined`  |
| visible                     | Verwaltet die Sichtbarkeit des `Sheet`.                                                                                                                                                                  |   `boolean`  |     `false`    |

## CSS API

| Name                         | Beschreibung                                                                                                                                                            |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--g-sheet-content-padding`  | Inhaltsabstand. Der Standardwert enthält automatisch `env(safe-area-inset-bottom)` für unten und `max(10px, env(safe-area-inset-left/right))` für die Seiten. |
| `--g-sheet-background-color` | Hintergrundfarbe                                                                                                                                                       |