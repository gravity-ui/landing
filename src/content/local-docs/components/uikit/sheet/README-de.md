`Sheet` ist eine Komponente, die für die Verwendung im mobilen Kontext als Informations- oder interaktives Element konzipiert ist. Sie können beliebige Inhalte darin platzieren, da internes Scrollen und dynamische Größenänderung unterstützt werden.

```tsx
import {Sheet} from '@gravity-ui/uikit';
```

Auf Mobilgeräten können Sie ein `Sheet` verschieben, indem Sie dessen Hauptteil oder den Wischbereich ziehen. Um es zu schließen, wischen Sie nach unten, tippen Sie auf den Bereich außerhalb des `Sheet` oder drücken Sie `Escape`.

## Verwendung

```tsx
import React from 'react';
import {Button, Sheet} from '@gravity-ui/uikit';

const SheetExample = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Open Sheet</Button>
      <Sheet open={open} onOpenChange={setOpen} title="Content Sheet">
        Content
      </Sheet>
    </React.Fragment>
  );
};
```

## Eigenschaften

| Name                        | Beschreibung                                                                                                                                                                                                                                                                                                                                                  |     Typ      |     Standard     |
| :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :--------------: |
| allowHideOnContentScroll    | Ermöglicht das Schließen des Sheets durch Herunterwischen, wenn der Inhalt bis zum Anfang gescrollt ist (`content Node.scrollTop === 0`) oder gar nicht gescrollt werden kann.                                                                                                                                                                              |   `boolean`  |     `true`     |
| alwaysFullHeight            | Die Höhe des `Sheet` hat immer den Maximalwert.                                                                                                                                                                                                                                                                                                              |   `boolean`  |   `undefined`  |
| className                   | `class` HTML-Attribut.                                                                                                                                                                                                                                                                                                                                       |   `string`   |   `undefined`  |
| container                   | DOM-Element, an das die Komponente über `Portal` angehängt wird.                                                                                                                                                                                                                                                                                            | `HTMLElement`| `document.body`|
| contentClassName            | `class` HTML-Attribut für den Inhalt des Sheets.                                                                                                                                                                                                                                                                                                           |   `string`   |   `undefined`  |
| defaultOpen                 | Öffnet das Sheet beim Mounten, wenn `open` nicht übergeben wird. Um ein geschlossenes Sheet wieder zu öffnen, steuern Sie es mit `open`.                                                                                                                                                                                                                       |   `boolean`  |     `false`    |
| disableEscapeKeyDown        | Deaktiviert das Schließen des Sheets mit der Escape-Taste.                                                                                                                                                                                                                                                                                                  |   `boolean`  |     `false`    |
| disableOutsideClick         | Deaktiviert das Schließen des Sheets durch Klicken auf den Schleier.                                                                                                                                                                                                                                                                                        |   `boolean`  |     `false`    |
| disablePortal               | Deaktiviert die Verwendung von `Portal`.                                                                                                                                                                                                                                                                                                                     |   `boolean`  |     `false`    |
| hideTopBar                  | Blendet die obere Leiste mit dem Größenänderungsgriff aus.                                                                                                                                                                                                                                                                                                   |   `boolean`  |                |
| id                          | Sheet-ID, die als Hash in einer URL verwendet wird. Stellen Sie sicher, dass Sie mehrere `id`-Werte angeben, wenn sich mehr als ein Sheet auf einer Seite befinden kann.                                                                                                                                                                                      |   `string`   |     `sheet`    |
| keepMounted                 | Das `Sheet` wird beim Ausblenden nicht aus dem DOM entfernt.                                                                                                                                                                                                                                                                                                 |   `boolean`  |     `false`    |
| maxContentHeightCoefficient | Koeffizient, der die maximale Höhe des `Sheet` relativ zur Höhe des Viewports bestimmt (Bereich 0-1).                                                                                                                                                                                                                                                        |   `number`   |      `0.9`     |
| onOpenChange                | Callback `(open: boolean, event?: Event, reason?: SheetOpenChangeReason) => void`, wie bei [`Popup.onOpenChange`](../Popup/README.md#properties).<br>Abbruch-Anfragen `open=false` mit Grund `escape-key`, `outside-press`, `swipe` oder `navigation`. Ein gesteuertes Sheet schließt sich, sobald die übergeordnete Komponente `open` auf `false` setzt; ein ungesteuertes schließt sich selbst. |  `function`  |   `undefined`  |
| onTransitionIn              | Wird aufgerufen, wenn die Öffnungsanimation beginnt.                                                                                                                                                                                                                                                                                                        | `() => void` |   `undefined`  |
| onTransitionInComplete      | Wird aufgerufen, wenn die Öffnungsanimation abgeschlossen ist.                                                                                                                                                                                                                                                                                               | `() => void` |   `undefined`  |
| onTransitionOut             | Wird aufgerufen, wenn die Schließanimation beginnt.                                                                                                                                                                                                                                                                                                         | `() => void` |   `undefined`  |
| onTransitionOutComplete     | Wird aufgerufen, wenn die Schließanimation abgeschlossen ist, einschließlich des sofortigen Schließens nach einem Wischvorgang in voller Höhe.                                                                                                                                                                                                                | `() => void` |   `undefined`  |
| open                        | Gesteuerter Öffnungszustand. Ohne diese Eigenschaft schließt sich das Sheet bei Abbruch selbst und `onOpenChange` meldet nur die Änderung.                                                                                                                                                                                                                 |   `boolean`  |   `undefined`  |
| swipeAreaClassName          | `class` HTML-Attribut für den Wischbereich.                                                                                                                                                                                                                                                                                                                |   `string`   |   `undefined`  |
| title                       | Titel des Sheet-Fensters.                                                                                                                                                                                                                                                                                                                                    |   `string`   |   `undefined`  |
GRAVITY_TRANSLATION_BLOCK_1_END
GRAVITY_TRANSLATION_BLOCK_2_END
GRAVITY_TRANSLATION_BLOCK_3_END
GRAVITY_TRANSLATION_BLOCK_4_END
GRAVITY_TRANSLATION_BLOCK_5_END
GRAVITY_TRANSLATION_BLOCK_6_END
GRAVITY_TRANSLATION_BLOCK_7_END
GRAVITY_TRANSLATION_BLOCK_8_END
GRAVITY_TRANSLATION_BLOCK_9_END
GRAVITY_TRANSLATION_BLOCK_10_END
GRAVITY_TRANSLATION_BLOCK_11_END
GRAVITY_TRANSLATION_BLOCK_12_END
GRAVITY_TRANSLATION_BLOCK_13_END
GRAVITY_TRANSLATION_BLOCK_14_END
GRAVITY_TRANSLATION_BLOCK_15_END
GRAVITY_TRANSLATION_BLOCK_16_END
GRAVITY_TRANSLATION_BLOCK_17_END
GRAVITY_TRANSLATION_BLOCK_18_END
GRAVITY_TRANSLATION_BLOCK_19_END
GRAVITY_TRANSLATION_BLOCK_20_END
GRAVITY_TRANSLATION_BLOCK_21_END
GRAVITY_TRANSLATION_BLOCK_22_END

Ein Touch, der auf einem Ziehpunkt beginnt – einem Element mit `draggable="true"` oder einem Handle von `@hello-pangea/dnd` – wird dem Ziehvorgang überlassen und wischt das Sheet nicht.

## CSS API

| Name                         | Beschreibung                                                                                                                                                            |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--g-sheet-content-padding`  | Inhalts-Padding. Der Standardwert enthält automatisch `env(safe-area-inset-bottom)` für unten und `max(10px, env(safe-area-inset-left/right))` für die Seiten. |
| `--g-sheet-background-color` | Hintergrundfarbe                                                                                                                                                       |