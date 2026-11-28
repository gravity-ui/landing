GRAVITY_TRANSLATION_BLOCK_0_END

Una sugerencia de texto simple que utiliza su nodo hijo como ancla. Este componente solo acepta contenido de texto y puede ser una excelente alternativa al atributo `title` del navegador, con su pequeño tamaño y largo retraso de aparición.

## Uso

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Contenido">
  <div tabIndex={0}>Ancla</div>
</Tooltip>;
```

## Ancla

Para que `Tooltip` funcione, debes pasar un `ReactElement` válido como hijo que acepte la propiedad `ref` para `HTMLElement`
y otras propiedades para `HTMLElement`.

Alternativamente, puedes pasar una función como hijo para proporcionar `ref` y `props` manualmente a tus componentes subyacentes:

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Contenido">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</Tooltip>;
```

## Estado Controlado

Por defecto, `Tooltip` se abre y se oculta al pasar el cursor sobre el ancla. Puedes cambiar este comportamiento para establecer manualmente el estado abierto.
Pasa tu estado a la prop `open` y cámbialo desde la devolución de llamada `onOpenChange`.
La devolución de llamada `onOpenChange` tiene la siguiente firma: `(open: boolean, event?: Event, reason: 'hover' | 'focus') => void`.

## Rol

`Tooltip` acepta la propiedad `role` que cambia cómo debe actuar en términos de accesibilidad.
El rol `tooltip` debe usarse cuando el ancla tiene su propio texto y el rol `label` en caso contrario (por ejemplo, en un botón con icono).

## Grupo de Retraso

Todas las sugerencias (tooltips) renderizadas bajo `Provider` comparten el retraso de apertura. La primera sugerencia paga su propio `openDelay`,
por lo que un movimiento accidental del ratón aún no abre nada. Mientras el grupo está "caliente" —una sugerencia está abierta o se ha cerrado
hace menos de `skipDelay`— la siguiente sugerencia al pasar el cursor se abre instantáneamente, y no más de una sugerencia está abierta a la vez. Esto es adecuado para barras de herramientas y filas de botones con iconos, donde esperar el retraso en cada botón se siente lento.
La apertura por foco es instantánea con o sin un grupo, por lo que el teclado no se ve afectado.

`skipDelay` (300 ms por defecto) se configura con `defaultProps` de `Provider`:

```tsx
import {Provider} from '@gravity-ui/uikit';

<Provider defaultProps={{TooltipDelayGroup: {skipDelay: 500}}}>{/* ... */}</Provider>;
```

## Propiedades

| Nombre          | Descripción                                                                                     |                       Tipo                       |     Predeterminado     |
| :-------------- | :---------------------------------------------------------------------------------------------- | :----------------------------------------------: | :--------------------: |
| children      | Elemento ancla para el `Tooltip`                                                                |         `React.ReactElement` `Function`          |                        |
| className     | Atributo HTML `class`                                                                           |                     `string`                     |                        |
| closeDelay    | Número de ms para retrasar el ocultamiento del `Tooltip` después de que finalice el hover       |                     `number`                     |          `0`           |
| container     | Elemento DOM al que se monta el componente a través de `Portal`                                  |                  `HTMLElement`                   |    `document.body`     |
| content       | Contenido que se mostrará en el `Tooltip`                                                       |                `React.ReactNode`                 |                        |
| disablePortal | Deshabilita el uso de `Portal`                                                                  |                    `boolean`                     |        `false`         |
| disabled      | Evita que se abra el `Tooltip`                                                                  |                    `boolean`                     |                        |
| offset        | Desplazamiento del `Tooltip` desde su ancla                                                     |                     `number`                     |          `4`           |
| onOpenChange  | Callback para manejar el cambio de estado abierto                                               |                    `Function`                    |                        |
| open          | Estado abierto controlado                                                                       |                    `boolean`                     |                        |
| openDelay     | Número de ms para retrasar la visualización del `Tooltip` después de que comience el hover      |                     `number`                     |         `1000`         |
| placement     | Posición del `Tooltip` en relación con su ancla                                                 | [`PopupPlacement`](../Popup/README.md#placement) |       `bottom`       |
| qa            | Atributo HTML `data-qa`, utilizado para pruebas                                                 |                     `string`                     |                        |
| rest          | Cuánto tiempo en ms debe permanecer el cursor en reposo antes de abrir.                          |                     `number`                     |          `0`           |
| role          | El rol para el que se utiliza el `Tooltip`                                                      |              `"tooltip"` `"label"`               |      `"tooltip"`       |
| strategy      | El tipo de propiedad de posición CSS a utilizar.                                                |                `absolute` `fixed`                |      `absolute`      |
| style         | Atributo HTML `style`                                                                           |              `React.CSSProperties`               |                        |
| trigger       | Tipo de evento que debe activar la apertura. El valor predeterminado `all` se refiere a `hover` y `focus`. |                `"all"` `"focus"`                 |        `"all"`         |

## API CSS

| Nombre                           | Descripción      |
| :----------------------------- | :--------------- |
| `--g-tooltip-text-color`       | Color del texto       |
| `--g-tooltip-background-color` | Color de fondo |
| `--g-tooltip-padding`          | Relleno          |
| `--g-tooltip-border-radius`    | Radio del borde    |
| `--g-tooltip-box-shadow`       | Sombra           |