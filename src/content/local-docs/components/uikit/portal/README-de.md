GRAVITY_TRANSLATION_BLOCK_0_END

`Portal` ist eine Utility-Komponente. Im Grunde ist es ein einfacher Wrapper um Reacts [`createPortal`](https://react.dev/reference/react-dom/createPortal), der es Ihnen ermöglicht, Kinder in einem DOM-Knoten außerhalb der Elternkomponente zu rendern.

```tsx
import {Portal} from '@gravity-ui/uikit';
```

## Container

Standardmäßig rendert `Portal` seine Kinder in `document.body`; Sie können dies jedoch mit der Eigenschaft `container` ändern.
Zusätzlich können Sie einen Container für alle `Portal`s im React-Teilbaum über die Komponente `PortalProvider` bereitstellen.

```tsx
import {Portal, PortalProvider} from '@gravity-ui/uikit'

const myRoot = document.getElementById('my-root');

<Portal>This is rendered inside document.body</Portal>
<Portal container={myRoot}>This is rendered inside #my-root node</Portal>
<PortalProvider container={myRoot}>
    <Portal>This is also rendered inside #my-root</Portal>
</PortalProvider>
```

## Eigenschaften

| Name          | Beschreibung                                                                 |       Typ        |     Standard     |
| :------------ | :--------------------------------------------------------------------------- | :--------------: | :--------------: |
| children      | Beliebiger React-Inhalt                                                      | `React.ReactNode` |                  |
| container     | DOM-Element, in das die Kinder gemountet werden sollen                       |   `HTMLElement`  | `document.body`  |
| disablePortal | Wenn `true`, werden die Kinder innerhalb der normalen DOM-Hierarchie gerendert. |     `boolean`    |                  |