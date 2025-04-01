<!--GITHUB_BLOCK-->

# Portal

<!--/GITHUB_BLOCK-->

```tsx
import {Portal} from '@gravity-ui/uikit';
```

`Portal` es un componente de utilidad. Básicamente, es un simple envoltorio alrededor de React [`createPortal`](https://react.dev/reference/react-dom/createPortal) que te permite convertir los hijos en un nodo DOM fuera del componente principal.

## Contenedor

De forma predeterminada, `Portal` convierte sus hijos en `document.body`; sin embargo, puede cambiarlo con la `container` propiedad.
Además, puedes proporcionar un contenedor para todos los `Portal`s del subárbol de React mediante el `PortalProvder` componente.

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

| Nombre        | Descripción                                                                |       Tipo        | Predeterminado  |
| :------------ | :------------------------------------------------------------------------- | :---------------: | :-------------: |
| niños         | Cualquier contenido de React                                               | `React.ReactNode` |                 |
| contenedor    | Elementos secundarios del elemento DOM para montar                         |   `HTMLElement`   | `document.body` |
| disablePortal | Si es verdadero, representa a los hijos dentro de la jerarquía DOM normal. |     `boolean`     |                 |
