<!--GITHUB_BLOCK-->

# Portal

<!--/GITHUB_BLOCK-->

`Portal` es un componente de utilidad. Básicamente, es un simple envoltorio de [`createPortal`](https://react.dev/reference/react-dom/createPortal) de React que te permite renderizar hijos en un nodo DOM fuera del componente padre.

```tsx
import {Portal} from '@gravity-ui/uikit';
```

## Contenedor

Por defecto, `Portal` renderiza sus hijos en `document.body`; sin embargo, puedes cambiar esto con la propiedad `container`.
Adicionalmente, puedes proporcionar un contenedor a todos los `Portal` en el subárbol de React usando el componente `PortalProvder`.

```tsx
import {Portal, PortalProvider} from '@gravity-ui/uikit'

const myRoot = document.getElementById('my-root');

<Portal>This is rendered inside document.body</Portal>
<Portal container={myRoot}>This is rendered inside #my-root node</Portal>
<PortalProvider container={myRoot}>
    <Portal>This is also rendered inside #my-root</Portal>
</PortalProvider>
```

## Propiedades

| Nombre          | Descripción                                                    |       Tipo        |     Por defecto     |
| :-------------- | :------------------------------------------------------------- | :---------------: | :-----------------: |
| children      | Cualquier contenido de React                                              | `React.ReactNode` |                     |
| container     | Elemento DOM donde montar los hijos                                |   `HTMLElement`   | `document.body` |
| disablePortal | Si es verdadero, renderiza los hijos dentro de la jerarquía DOM normal. |     `boolean`     |                     |
