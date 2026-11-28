`Sheet` es un componente diseñado para usarse en el contexto móvil como un elemento informativo o interactivo. Puedes colocar contenido de cualquier tamaño en él, ya que se admiten el desplazamiento interno y el redimensionamiento dinámico.

```tsx
import {Sheet} from '@gravity-ui/uikit';
```

En dispositivos móviles, puedes mover un `Sheet` arrastrando su parte principal o el área de deslizamiento. Para cerrarlo, desliza hacia abajo, toca el área fuera del `Sheet` o presiona `Escape`.

## Uso

```tsx
import React from 'react';
import {Button, Sheet} from '@gravity-ui/uikit';

const SheetExample = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Abrir Sheet</Button>
      <Sheet open={open} onOpenChange={setOpen} title="Sheet de Contenido">
        Contenido
      </Sheet>
    </React.Fragment>
  );
};
```

## Propiedades
GRAVITY_TRANSLATION_BLOCK_0_END

| Nombre                        | Descripción                                                                                                                                                                                                                                                                                                                                                  |     Tipo      |     Valor por defecto     |
| :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------: | :---------------------: |
| allowHideOnContentScroll    | Habilita el comportamiento de cerrar la ventana de la hoja deslizando hacia abajo si el contenido está desplazado hasta la parte superior (`content Node.scrollTop === 0`) o no tiene ningún desplazamiento.                                                                                                                                                              |   `boolean`   |     `true`      |
| alwaysFullHeight            | La altura de `Sheet` siempre tendrá el valor máximo                                                                                                                                                                                                                                                                                                            |   `boolean`   |   `undefined`   |
| className                   | Atributo HTML `class`                                                                                                                                                                                                                                                                                                                                        |   `string`    |   `undefined`   |
| container                   | Elemento DOM al que se monta el componente a través de `Portal`                                                                                                                                                                                                                                                                                                       | `HTMLElement` | `document.body` |
| contentClassName            | Atributo HTML `class` para el contenido de la hoja.                                                                                                                                                                                                                                                                                                                |   `string`    |   `undefined`   |
| defaultOpen                 | Abre la hoja al montarla cuando no se pasa `open`. Para reabrir una hoja cerrada, contrólala con `open`.                                                                                                                                                                                                                                                        |   `boolean`   |     `false`     |
| disableEscapeKeyDown        | Deshabilita el cierre de la hoja con la tecla Escape.                                                                                                                                                                                                                                                                                                         |   `boolean`   |     `false`     |
| disableOutsideClick         | Deshabilita el cierre de la hoja al hacer clic en el velo.                                                                                                                                                                                                                                                                                                             |   `boolean`   |     `false`     |
| disablePortal               | Deshabilita el uso de `Portal`                                                                                                                                                                                                                                                                                                                                      |   `boolean`   |     `false`     |
| hideTopBar                  | Oculta la barra superior con el control de redimensionamiento.                                                                                                                                                                                                                                                                                                                    |   `boolean`   |                 |
| id                          | ID de la hoja utilizado como hash en una URL. Asegúrate de especificar varios valores de `id` si puede haber más de una hoja en una página.                                                                                                                                                                                                                                     |   `string`    |     `sheet`     |
| keepMounted                 | `Sheet` no se eliminará del DOM al ocultarse                                                                                                                                                                                                                                                                                                         |   `boolean`   |     `false`     |
| maxContentHeightCoefficient | Coeficiente que determina la altura máxima de `Sheet` en relación con la altura de la ventana gráfica (rango 0-1)                                                                                                                                                                                                                                             |   `number`    |      `0.9`      |
| onOpenChange                | Callback `(open: boolean, event?: Event, reason?: SheetOpenChangeReason) => void`, como en [`Popup.onOpenChange`](../Popup/README.md#properties).<br>Las solicitudes de cierre `open=false` con la razón `escape-key`, `outside-press`, `swipe`, o `navigation`. Una hoja controlada se cierra una vez que el padre establece `open` a `false`; una no controlada se cierra sola. |  `function`   |   `undefined`   |
| onTransitionIn              | Se llama cuando comienza la transición de apertura.                                                                                                                                                                                                                                                                                                                   | `() => void`  |   `undefined`   |
| onTransitionInComplete      | Se llama cuando se completa la transición de apertura.                                                                                                                                                                                                                                                                                                                | `() => void`  |   `undefined`   |
| onTransitionOut             | Se llama cuando comienza la transición de cierre.                                                                                                                                                                                                                                                                                                                   | `() => void`  |   `undefined`   |
| onTransitionOutComplete     | Se llama cuando se completa la transición de cierre, incluido el cierre inmediato después de un deslizamiento a pantalla completa.                                                                                                                                                                                                                                                       | `() => void`  |   `undefined`   |
| open                        | Estado de apertura controlado. Sin él, la hoja se cierra sola al descartarse y `onOpenChange` solo informa del cambio.                                                                                                                                                                                                                                           |   `boolean`   |   `undefined`   |
| swipeAreaClassName          | Atributo HTML `class` para el área de deslizamiento.                                                                                                                                                                                                                                                                                                                   |   `string`    |   `undefined`   |
| title                       | Título de la ventana de la hoja.                                                                                                                                                                                                                                                                                                           |   `string`    |   `undefined`   |

Un toque que comienza en un manejador de arrastre — un elemento con `draggable="true"` o un manejador de `@hello-pangea/dnd` — se deja al arrastre y no desliza la hoja.

## API CSS

| Nombre                         | Descripción                                                                                                                                                            |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--g-sheet-content-padding`  | Relleno del contenido. El valor predeterminado incluye automáticamente `env(safe-area-inset-bottom)` para la parte inferior y `max(10px, env(safe-area-inset-left/right))` para los lados. |
| `--g-sheet-background-color` | Color de fondo                                                                                                                                                       |