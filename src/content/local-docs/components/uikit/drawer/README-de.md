GRAVITY_TRANSLATION_BLOCK_0_END

Die `Drawer`-Komponente ist ein vielseitiges Interface-Element, das in Webanwendungen verwendet wird, um ein schiebendes Panel bereitzustellen, das vom Bildschirmrand aus erscheint. Dieses Panel kann Navigationen, Werkzeuge oder zusätzliche Inhalte enthalten. Die Komponente wird mit React und CSS-Übergängen für flüssige Animationen implementiert.

```tsx
import {Drawer} from '@gravity-ui/uikit';
```

## Verwendung

Hier ist ein einfaches Beispiel für die Verwendung der `Drawer`-Komponente:

```tsx
import React from 'react';
import {Drawer} from '@gravity-ui/uikit';

const App = () => {
  const [isVisible, setVisible] = React.useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Drawer öffnen</button>
      <Drawer onOpenChange={setVisible} open={isVisible}>
        <p>Inhalt des Drawers</p>
      </Drawer>
    </div>
  );
};

export default App;
```

## Platzierung

Um die Platzierung des `Drawer` zu steuern, können Sie die `placement`-Prop übergeben. Die möglichen Werte sind `left`, `right`, `top` und `bottom`.

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} placement="left">
  <p>Inhalt des Drawers</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="right">
  <p>Inhalt des Drawers</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="top">
  <p>Inhalt des Drawers</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="bottom">
  <p>Inhalt des Drawers</p>
</Drawer>
```

## Animation

Standardmäßig gleitet der `Drawer` mit einem Übergang ein und aus. Um ihn sofort anzuzeigen oder auszublenden, übergeben Sie die `disableTransition`-Prop.

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} disableTransition>
  <p>Inhalt des Drawers</p>
</Drawer>
```

## Größenveränderbar

Ein `Drawer` kann durch Übergabe der `resizable`-Prop in der Größe veränderbar sein.

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} resizable>
  <p>Inhalt des Drawers</p>
</Drawer>
```

Zusätzlich können Sie die `size`-Prop verwenden, um die Größe des `Drawer` zu steuern, und den `onResize`-Handler übergeben, um den geänderten Wert zu speichern.

```tsx
const [size, setSize] = useState(500);

<Drawer onOpenChange={setVisible} open={isVisible} resizable size={size} onResize={setSize}>
  <p>Inhalt des Drawers</p>
</Drawer>;
```

## Eigenschaften

| Name                    | Beschreibung                                                                                                                             |                Typ                |     Standard     |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------: | :--------------: |
| className               | `class` HTML-Attribut für den Root-Knoten                                                                                                |              `string`              |                  |
| qa                      | Testattribut (`data-qa`)                                                                                                                 |              `string`              |                  |
| style                   | `style` HTML-Attribut für den Root-Knoten                                                                                                |       `React.CSSProperties`       |                  |
| aria-label              | `aria-label` HTML-Attribut zur Beschreibung des `Drawer`                                                                                 |              `string`              |                  |
| aria-labelledby         | ID des sichtbaren `Drawer`-Beschriftungselements                                                                                        |              `string`              |                  |
| aria-describedby        | `aria-describedby` für das `Drawer`-Element                                                                                              |              `string`              |                  |
| aria-details            | `aria-details` für das `Drawer`-Element des Benutzers                                                                                     |              `string`              |                  |
| returnFocus             | Element, das beim Schließen fokussiert werden soll                                                                                       | `boolean` `React.Ref<HTMLElement>` |     `true`      |
| initialFocus            | Anfänglich zu fokussierendes Element. Eine positive Zahl ist der Index des fokussierbaren Elements.                                     | `number` `React.Ref<HTMLElement>`  |                  |
| placement               | Gibt die Seite an, von der der Drawer eingeblendet werden soll                                                                           |              `string`              |     `left`      |
| contentClassName        | `class` HTML-Attribut für den Inhaltsknoten                                                                                              |              `string`              |                  |
| children                | Beliebiger React-Inhalt                                                                                                                  |         `React.ReactNode`          |                  |
| container               | DOM-Element, an das die Komponente über `Portal` angehängt wird                                                                          |           `HTMLElement`            | `document.body` |
| contentOverflow         | Bestimmt, ob der `Drawer` einen eigenen Scrollbalken im Inneren hat. Standardmäßig hat er keinen.                                       |          `visible` `auto`          |    `visible`    |
| disableBodyScrollLock   | Deaktiviert die Sperrung des Scrollens, während der Drawer geöffnet ist                                                                   |             `boolean`              |     `false`     |
| disableEscapeKeyDown    | Deaktiviert das Schließen durch Drücken der `Esc`-Taste                                                                                  |             `boolean`              |     `false`     |
| disableOutsideClick     | Deaktiviert das Schließen durch Klicks außerhalb des Drawers                                                                             |             `boolean`              |     `false`     |
| disableTransition       | Deaktiviert die Animation des Drawers                                                                                                    |             `boolean`              |     `false`     |
| disableModal            | Deaktiviert die Modal-Fokusverwaltung                                                                                                    |             `boolean`              |     `false`     |
| disableLayer            | Deaktiviert die Registrierung des `Drawer` im Layer-Manager                                                                              |             `boolean`              |     `true`      |
| disablePortal           | Deaktiviert die Verwendung von `Portal`                                                                                                  |             `boolean`              |     `false`     |
| keepMounted             | Der `Drawer` wird beim Ausblenden nicht aus dem DOM entfernt                                                                              |             `boolean`              |     `false`     |
| resizable               | Ermöglicht die Größenänderung des Drawers per Zeiger                                                                                     |             `boolean`              |     `false`     |
| open                    | Verwaltet die Sichtbarkeit des `Drawer`                                                                                                  |             `boolean`              |     `false`     |
| hideVeil                | Entfernt den Schleier des `Drawer`, ohne die Handhabung von Klicks außerhalb zu ändern                                                   |             `boolean`              |     `false`     |
| onOpenChange            | Callback, der beim Ändern des Öffnungszustands aufgerufen wird                                                                            |             `Function`             |                  |
| onTransitionIn          | Der Callback, der beim Start der "Ein"-Transition ausgelöst wird                                                                         |             `Function`             |                  |
| onTransitionInComplete  | Der Callback, der nach Abschluss der "Ein"-Transition ausgelöst wird                                                                     |             `Function`             |                  |
| onTransitionOut         | Der Callback, der beim Start der "Aus"-Transition ausgelöst wird                                                                         |             `Function`             |                  |
| onTransitionOutComplete | Der Callback, der nach Abschluss der "Aus"-Transition ausgelöst wird                                                                    |             `Function`             |                  |
| onResizeEnd             | Callback, der am Ende der Größenänderung aufgerufen wird                                                                                 |             `Function`             |                  |
| onResize                | Callback, der aufgerufen wird, wenn die Größe des Drawers geändert wird                                                                  |             `Function`             |                  |
| onResizeStart           | Callback, der am Anfang der Größenänderung aufgerufen wird                                                                               |             `Function`             |                  |
| maxSize                 | Maximale Breite oder Höhe des Drawers in Pixeln                                                                                          |              `number`              |                  |
| minSize                 | Minimale Breite oder Höhe des Drawers in Pixeln                                                                                          |              `number`              |                  |
| size                    | Breite oder Höhe des Drawers in Pixeln. Wenn die Option `auto` übergeben wird, passt sich die Breite oder Höhe des Drawers an seinen Inhalt an. |         `number \| 'auto'`         |                  |