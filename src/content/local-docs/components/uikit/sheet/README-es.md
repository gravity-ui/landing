<!--GITHUB_BLOCK-->

# Sheet

<!--/GITHUB_BLOCK-->

`Sheet` es un componente diseñado para usarse en el contexto móvil como un elemento informativo o interactivo. Puedes colocar contenido de cualquier tamaño en él, ya que se admiten el desplazamiento interno y el redimensionamiento dinámico.

```tsx
import {Sheet} from '@gravity-ui/uikit';
```

En dispositivos móviles, puedes mover un `Sheet` arrastrando su parte principal o el área de deslizamiento. Para cerrarlo, desliza hacia abajo o toca el área fuera del `Sheet`.

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

| Nombre                        | Descripción                                                                                                                                                      |     Tipo      |     Valor por defecto     |
| :-------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------: | :-----------------------: |
| allowHideOnContentScroll    | Habilita el comportamiento de cerrar la ventana de la hoja deslizando hacia abajo si el contenido está desplazado hasta su parte superior (`content Node.scrollTop === 0`) o no tiene desplazamiento alguno. |   `boolean`   |          `true`           |
| alwaysFullHeight            | La altura de `Sheet` siempre tendrá el valor máximo.                                                                                                             |   `boolean`   |       `undefined`       |
| className                   | Atributo `class` de HTML.                                                                                                                                        |   `string`    |       `undefined`       |
| container                   | Elemento DOM al que se monta el componente a través de `Portal`.                                                                                                 | `HTMLElement` |     `document.body`     |
| contentClassName            | Atributo `class` de HTML para el contenido de la hoja.                                                                                                           |   `string`    |       `undefined`       |
| disablePortal               | Deshabilita el uso de `Portal`.                                                                                                                                  |   `boolean`   |         `false`         |
| hideTopBar                  | Oculta la barra superior con el control deslizante.                                                                                                              |   `boolean`   |                           |
| id                          | ID de la hoja utilizado como hash en una URL. Asegúrate de especificar múltiples valores de `id` si puede haber más de una hoja en una página.                   |   `string`    |         `modal`         |
| maxContentHeightCoefficient | Coeficiente que determina la altura máxima de `Sheet` en relación con la altura de la ventana gráfica (rango 0-1).                                              |   `number`    |          `0.9`          |
| onClose                     | Manejador para el evento de cierre.                                                                                                                               |  `function`   |       `undefined`       |
| swipeAreaClassName          | Atributo `class` de HTML para el área de deslizamiento.                                                                                                          |   `string`    |       `undefined`       |
| title                       | Título de la ventana de la hoja.                                                                                                                                 |   `string`    |       `undefined`       |
| visible                     | Gestiona la visibilidad de `Sheet`.                                                                                                                              |   `boolean`   |         `false`         |

## API CSS

| Nombre                         | Descripción                                                                                                                                                            |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--g-sheet-content-padding`  | Relleno del contenido. El valor predeterminado incluye automáticamente `env(safe-area-inset-bottom)` para la parte inferior y `max(10px, env(safe-area-inset-left/right))` para los lados. |
| `--g-sheet-background-color` | Color de fondo                                                                                                                                                       |
