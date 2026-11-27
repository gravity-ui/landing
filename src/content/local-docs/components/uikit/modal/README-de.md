GRAVITY_TRANSLATION_BLOCK_0_END

Die `Modal`-Komponente dient als Basis für die Erstellung von Pop-up-Fenstern mit einem Hintergrund über dem restlichen Inhalt einer Seite.
Sie deaktiviert das Scrollen während des Öffnens und verwaltet den Fokus für den Inhalt. Die `Modal`-Kindkomponenten werden innerhalb der [`Portal`](../Portal)-Komponente gerendert.
Mit `Modal` können Sie Dialoge, Warnungen, Bestätigungen und mehr implementieren.

```tsx
import {Modal} from '@gravity-ui/uikit';
```

## Verwendung

```tsx
import {useState} from 'react';
import {Button, Modal} from '@gravity-ui/uikit';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Modal öffnen</Button>
<Modal open={open} onOpenChange={setOpen}>
    Inhalt
</Modal>
```

## Eigenschaften

| Name                         | Beschreibung                                                                                             |                    Typ                     |     Standard     |
| :--------------------------- | :------------------------------------------------------------------------------------------------------- | :--------------------------------------: | :--------------: |
| children                     | Beliebiger React-Inhalt                                                                                  |              `React.ReactNode`             |                  |
| className                    | `class`-HTML-Attribut für den Root-Knoten                                                                |                 `string`                 |                  |
| container                    | DOM-Element, an das die Komponente über `Portal` angehängt wird                                          |               `HTMLElement`              | `document.body`  |
| contentClassName             | `class`-HTML-Attribut für den Inhaltsknoten                                                              |                 `string`                 |                  |
| disableBodyScrollLock        | Sperrt das Scrollen, während das Modal geöffnet ist                                                      |                `boolean`                 |     `false`      |
| disableTransition            | Überspringt die Öffnungs- und Schließanimationen, wenn `true`.                                           |                `boolean`                 |     `false`      |
| disableEscapeKeyDown         | Deaktiviert das Schließen durch Drücken der `Esc`-Taste                                                  |                `boolean`                 |     `false`      |
| disableOutsideClick          | Deaktiviert das Schließen durch Klicks außerhalb des Modals                                             |                `boolean`                 |     `false`      |
| disablePortal                | Deaktiviert die Verwendung von `Portal`                                                                  |                `boolean`                 |     `false`      |
| keepMounted                  | Das `Modal` wird beim Ausblenden nicht aus dem DOM entfernt                                              |                `boolean`                 |     `false`      |
| initialFocus                 | Ziel für den anfänglichen Fokus; standardmäßig der Inhaltsknoten                                        | `FloatingFocusManagerProps['initialFocus']` |                  |
| returnFocus                  | Steuert, wohin der Fokus nach dem Schließen zurückkehrt                                                  | `FloatingFocusManagerProps['returnFocus']`  |                  |
| disableVisuallyHiddenDismiss | Entfernt die für Screenreader bestimmten Schließen-Schaltflächen                                         |                `boolean`                 |     `false`      |
| floatingRef                  | Ref auf den Inhaltsknoten des Modals                                                                     |  `React.RefObject<HTMLDivElement \| null>` |                  |
| onOpenChange                 | Behandelt Änderungen des Öffnungszustands des `Modal`                                                    |                `Function`                |                  |
| onTransitionIn               | Handler für den Beginn der Öffnungsanimation                                                             |                `Function`                |                  |
| onTransitionOut              | Handler für den Beginn der Schließanimation                                                              |                `Function`                |                  |
| onTransitionInComplete       | Handler für das Ende der Öffnungsanimation                                                               |                `Function`                |                  |
| onTransitionOutComplete      | Handler für das Ende der Schließanimation                                                                |                `Function`                |                  |
| open                         | Verwaltet die Sichtbarkeit des `Modal`                                                                   |                `boolean`                 |     `false`      |
| qa                           | Testattribut (`data-qa`)                                                                                 |                 `string`                 |                  |
| style                        | `style`-HTML-Attribut für den Root-Knoten                                                                |                 `string`                 |                  |
| aria-label                   | `aria-label`-HTML-Attribut zur Beschreibung des `Modal`                                                  |                 `string`                 |                  |
| aria-labelledby              | ID des sichtbaren Beschriftungselements des `Modal`                                                      |                 `string`                 |                  |
| contentOverflow              | Bestimmt, ob das `Modal` eine Scrollanzeige im Inneren hat oder mit dem Inhalt größer wird              |              `visible` `auto`              |    `visible`     |

`onOpenChange` empfängt `escape-key` für die Escape-Taste, `outside-press` für einen Klick außerhalb und `undefined` für die Schließen-Schaltfläche des Screenreaders. Schließen, wenn `open` unabhängig vom Grund auf `false` gesetzt wird.

## CSS API

| Name                      | Beschreibung                       |
| :------------------------ | :-------------------------------- |
| `--g-modal-margin`        | Rand um den `Modal`-Inhalt |
| `--g-modal-border-radius` | `Modal`-Inhalt abgerundete Ecken     |
| `--g-modal-width`         | `Modal`-Inhalt Breite             |
| `--g-modal-min-width`     | `Modal`-Inhalt minimale Breite         |
| `--g-modal-max-width`     | `Modal`-Inhalt maximale Breite         |
| `--g-modal-height`        | `Modal`-Inhalt Höhe            |
| `--g-modal-min-height`    | `Modal`-Inhalt minimale Höhe        |
| `--g-modal-max-height`    | `Modal`-Inhalt maximale Höhe        |