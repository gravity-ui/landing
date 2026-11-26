<!--GITHUB_BLOCK-->

# ActionTooltip

<!--/GITHUB_BLOCK-->

[`Tooltip`](../Tooltip/README.md) para etiquetar botones de acción sin texto descriptivo (por ejemplo, botones con iconos).

## Uso

```tsx
import {ActionTooltip} from '@gravity-ui/uikit';

<ActionTooltip title="Acción">
  <div tabIndex={0}>Ancla</div>
</ActionTooltip>;
```

## Ancla

Para que `ActionTooltip` funcione, debes pasar un `ReactElement` válido como hijo que acepte la propiedad `ref` para `HTMLElement`
y otras propiedades para `HTMLElement`.

Alternativamente, puedes pasar una función como hijo para proporcionar `ref` y `props` manualmente a tus componentes subyacentes:

```tsx
import {ActionTooltip} from '@gravity-ui/uikit';

<ActionTooltip title="Acción">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</ActionTooltip>;
```

## Estado Controlado

Por defecto, `ActionTooltip` se abre y se oculta al pasar el ratón sobre el ancla. Puedes cambiar este comportamiento para establecer manualmente el estado abierto.
Pasa tu estado a la prop `open` y cámbialo desde la devolución de llamada `onOpenChange`.
La devolución de llamada `onOpenChange` tiene la siguiente firma: `(open: boolean, event?: Event, reason: 'hover' | 'focus') => void`.

## Propiedades

| Nombre          | Descripción                                                                                     |                       Tipo                       |     Predeterminado     |
| :-------------- | :---------------------------------------------------------------------------------------------- | :----------------------------------------------: | :--------------------: |
| children      | Elemento ancla para el `ActionTooltip`                                                          |         `React.ReactElement` `Function`          |                        |
| className     | Atributo HTML `class`                                                                           |                     `string`                     |                        |
| closeDelay    | Número de ms para retrasar el ocultamiento del `ActionTooltip` después de que finalice el hover |                     `number`                     |          `0`           |
| container     | Elemento DOM al que se monta el componente a través de `Portal`                                  |                  `HTMLElement`                   |    `document.body`     |
| description   | Contenido de la descripción                                                                     |                `React.ReactNode`                 |                        |
| disablePortal | Deshabilita el uso de `Portal`                                                                  |                    `boolean`                     |        `false`         |
| disabled      | Evita que se abra el `ActionTooltip`                                                            |                    `boolean`                     |                        |
| hotkey        | Valor de `Hotkey` que se mostrará en la esquina superior derecha                                |   [`Hotkey` value](../Hotkey/README.md#value)    |                        |
| offset        | Desplazamiento del `ActionTooltip` con respecto a su ancla                                      |                     `number`                     |          `4`           |
| onOpenChange  | Callback para manejar el cambio de estado abierto                                               |                    `Function`                    |                        |
| open          | Estado abierto controlado                                                                       |                    `boolean`                     |                        |
| openDelay     | Número de ms para retrasar la visualización del `ActionTooltip` después de que comience el hover |                     `number`                     |         `1000`         |
| placement     | Posición del `ActionTooltip` en relación con su ancla                                           | [`PopupPlacement`](../Popup/README.md#placement) |        `bottom`        |
| qa            | Atributo HTML `data-qa`, utilizado para pruebas                                                 |                     `string`                     |                        |
| rest          | Cuánto tiempo en ms debe permanecer el cursor en reposo antes de abrir.                          |                     `number`                     |          `0`           |
| strategy      | El tipo de propiedad de posición CSS a utilizar.                                                |                `absolute` `fixed`                |       `absolute`       |
| style         | Atributo HTML `style`                                                                           |              `React.CSSProperties`               |                        |
| title         | Contenido del título                                                                            |                     `string`                     |                        |
| trigger       | Tipo de evento que debería activar la apertura. El valor predeterminado `all` se refiere a `hover` y `focus`. |                `"all"` `"focus"`                 |        `"all"`         |