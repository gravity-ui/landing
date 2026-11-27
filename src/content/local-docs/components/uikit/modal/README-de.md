<!--GITHUB_BLOCK-->

# Modal

<!--/GITHUB_BLOCK-->

Die Komponente `Modal` dient als Basis für die Erstellung von Pop-up-Fenstern mit einem Hintergrund über dem restlichen Inhalt einer Seite.
Sie deaktiviert das Scrollen während des Öffnens und verwaltet den Fokus für den Inhalt. Die Kindkomponenten von `Modal` werden innerhalb der Komponente [`Portal`](../Portal) gerendert.
Mit `Modal` können Sie Dialoge, Benachrichtigungen, Bestätigungen und mehr implementieren.

```tsx
import {Modal} from '@gravity-ui/uikit';
```

## Verwendung

```tsx
import {useState} from 'react';
import {Button, Modal} from '@gravity-ui/uikit';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal open={open} onClose={() => setOpen(false)}>
    Content
</Modal>
```

## Eigenschaften

| Name                  | Beschreibung                                                                                             |       Typ        |     Standard     |
| :-------------------- | :------------------------------------------------------------------------------------------------------- | :--------------: | :--------------: |
| autoFocus             | Solange geöffnet, wird der Fokus auf das erste interaktive Element im Inhalt gesetzt.                   |     `boolean`    |     `true`       |
| children              | Beliebiger React-Inhalt.                                                                                 | `React.ReactNode` |                  |
| className             | HTML-Attribut `class` für das Root-Element.                                                              |     `string`     |                  |
| container             | DOM-Element, an das die Komponente über `Portal` angehängt wird.                                         |   `HTMLElement`  | `document.body`  |
| contentClassName      | HTML-Attribut `class` für das Inhalts-Element.                                                           |     `string`     |                  |
| disableBodyScrollLock | Sperrt das Scrollen des Bodys, während das Modal geöffnet ist.                                           |     `boolean`    |     `false`      |
| disableEscapeKeyDown  | Deaktiviert das Schließen durch Drücken der `Esc`-Taste.                                                 |     `boolean`    |     `false`      |
| disableOutsideClick   | Deaktiviert das Schließen durch Klick außerhalb des Modals.                                              |     `boolean`    |     `false`      |
| disablePortal         | Deaktiviert die Verwendung von `Portal`.                                                                 |     `boolean`    |     `false`      |
| focusTrap             | Aktiviert das Fokus-Trapping-Verhalten.                                                                  |     `boolean`    |     `true`       |
| keepMounted           | Das `Modal` wird beim Ausblenden nicht aus dem DOM entfernt.                                             |     `boolean`    |     `false`      |
| onClose               | Behandelt das Schließen-Ereignis des `Modal`.                                                            |    `Function`    |                  |
| onEnterKeyDown        | Ereignisbehandlungsfunktion für das Drücken der `Enter`-Taste.                                           |    `Function`    |                  |
| onEscapeKeyDown       | Ereignisbehandlungsfunktion für das Drücken der `Esc`-Taste.                                             |    `Function`    |                  |
| onTransitionEnter     | Ereignisbehandlungsfunktion für den Beginn der Öffnungsübergangsphase.                                   |    `Function`    |                  |
| onTransitionExit      | Ereignisbehandlungsfunktion für den Beginn der Schließungsübergangsphase.                                |    `Function`    |                  |
| onTransitionEntered   | Ereignisbehandlungsfunktion für das Ende der Öffnungsübergangsphase.                                     |    `Function`    |                  |
| onTransitionExited    | Ereignisbehandlungsfunktion für das Ende der Schließungsübergangsphase.                                  |    `Function`    |                  |
| onOutsideClick        | Ereignisbehandlungsfunktion für Klicks außerhalb des Modals.                                             |    `Function`    |                  |
| open                  | Verwaltet die Sichtbarkeit des `Modal`.                                                                  |     `boolean`    |     `false`      |
| qa                    | Testattribut (`data-qa`).                                                                                |     `string`     |                  |
| restoreFocusRef       | Element, zu dem der Fokus wiederhergestellt wird.                                                        | `React.RefObject`|                  |
| style                 | HTML-Attribut `style` für das Root-Element.                                                              |     `string`     |                  |
| aria-label            | HTML-Attribut `aria-label` zur Beschreibung des `Modal`.                                                 |     `string`     |                  |
| aria-labelledby       | ID des sichtbaren `Modal`-Beschriftungselements.                                                        |     `string`     |                  |
| contentOverflow       | Bestimmt, ob das `Modal` einen Scrollbalken im Inneren hat oder mit dem Inhalt größer wird.            | `visible` `auto` |    `visible`     |

## CSS API

| Name                      | Beschreibung                       |
| :------------------------ | :--------------------------------- |
| `--g-modal-margin`        | Rand um den `Modal`-Inhalt         |
| `--g-modal-border-radius` | `Modal`-Inhalt-Randradius          |
| `--g-modal-width`         | `Modal`-Inhalt-Breite              |
| `--g-modal-max-width`     | `Modal`-Inhalt-Maximalbreite       |
| `--g-modal-height`        | `Modal`-Inhalt-Höhe                |
| `--g-modal-max-height`    | `Modal`-Inhalt-Maximalhöhe         |
