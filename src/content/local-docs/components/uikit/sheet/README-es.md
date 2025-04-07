<!--GITHUB_BLOCK-->

# Hoja

<!--/GITHUB_BLOCK-->

```tsx
import {Sheet} from '@gravity-ui/uikit';
```

`Sheet` es un componente diseñado para usarse en el contexto móvil como elemento de información o interactivo. Puede colocar contenido de cualquier tamaño en él, ya que se admiten el desplazamiento interno y el cambio de tamaño dinámico.

En dispositivos móviles, puedes mover una `Sheet` tirando de su parte principal o de la zona de deslizamiento. Para cerrarlo, desliza el dedo hacia abajo o toca el área fuera del `Sheet`.

## Uso

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

## Propiedades

| Nombre                   | Descripción                                                                                                                                                                                     |    Tipo    | Predeterminado |
| :----------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------: | :------------: |
| visible                  | Gestiona `Sheet` la visibilidad                                                                                                                                                                 | `boolean`  |    `false`     |
| allowHideOnContentScroll | Activa el comportamiento de cerrar la ventana de la hoja deslizando el dedo hacia abajo si el contenido se desplaza hacia arriba (`content Node.scrollTop === 0`) o no se desplaza en absoluto. | `boolean`  |     `true`     |
| hideTopBar               | Oculta la barra superior con el controlador de cambio de tamaño.                                                                                                                                | `boolean`  |                |
| identificación           | ID de hoja usado como hash en una URL. Asegúrese de especificar varios `id` valores si puede haber más de una hoja en una página.                                                               |  `string`  |    `modal`     |
| título                   | Título de la ventana de la hoja.                                                                                                                                                                |  `string`  |  `undefined`   |
| className                | `class` Atributo HTML                                                                                                                                                                           |  `string`  |  `undefined`   |
| contentClassName         | `class` Atributo HTML para el contenido de la hoja.                                                                                                                                             |  `string`  |  `undefined`   |
| swipeAreaClassName       | `class` Atributo HTML para el área de deslizamiento.                                                                                                                                            |  `string`  |  `undefined`   |
| onClose                  | Manejador para eventos cercanos.                                                                                                                                                                | `function` |  `undefined`   |

## API CSS

| Nombre                       | Descripción          |
| :--------------------------- | :------------------- |
| `--g-sheet-content-padding`  | Relleno de contenido |
| `--g-sheet-background-color` | Color de fondo       |
