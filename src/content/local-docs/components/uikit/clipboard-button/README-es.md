GRAVITY_TRANSLATION_BLOCK_0_END

`ClipboardButton` es un botón listo para usar que copia el texto dado al portapapeles y reproduce una animación de éxito. Combina [`CopyToClipboard`](../CopyToClipboard/README.md) (el comportamiento de copia) con [`ClipboardIcon`](../ClipboardIcon/README.md) (el icono animado).

```tsx
import {ClipboardButton} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Tooltip

Usa `tooltipProps` para configurar el [`ActionTooltip`](../ActionTooltip/README.md) subyacente,
por ejemplo, su posición o comportamiento de portal:

```tsx
<ClipboardButton text="Some text to copy" tooltipProps={{placement: 'top', disablePortal: true}} />
```

Las propiedades admitidas son `onOpenChange`, `strategy`, `placement`, `offset`, `disabled`,
`container`, `disablePortal`, y las propiedades `DOMProps` (`className`, `style`) y `QAProps` (`qa`).

Establece `tooltipProps.disabled` en `true` para deshabilitar el tooltip. `hasTooltip={false}` y el tiempo de espera de
retroalimentación de copia también lo deshabilitan, incluso cuando `tooltipProps.disabled` es `false`. Usa
`tooltipInitialText`, `tooltipSuccessText` y `timeout` para configurar la retroalimentación de copia.

## Propiedades

Las propiedades de `ClipboardButton` se heredan de las [propiedades](../Button/README.md#properties) de `Button`.

| Nombre               | Descripción                                                               |            Tipo            |   Predeterminado   |
| :----------------- | :------------------------------------------------------------------------ | :------------------------: | :----------------: |
| hasTooltip         | Activa/desactiva la visualización del tooltip                                             |         `boolean`          |       `true`       |
| onCopy             | Callback después de copiar `(text: string, result: boolean) => void`          |         `Function`         |                    |
| text               | Texto a copiar (puede ser una cadena o una función que devuelve una cadena)        |  `string \| () => string`  |                    |
| timeout            | Tiempo antes de que el estado vuelva a la normalidad después de hacer clic en el botón |          `number`          |       `1000`       |
| tooltipInitialText | Texto que se muestra antes de copiar                                                 |          `string`          |      `"Copy"`      |
| tooltipSuccessText | Texto que se muestra después de copiar                                                  |          `string`          |     `"Copied!"`    |
| tooltipProps       | Configuración del tooltip. Ver [propiedades admitidas](#tooltip).              |          `object`          |                    |
| icon               | Icono personalizado                                                               |     `React.ReactNode`      |                    |
| iconPosition       | Posición del icono                                                          | `start          \|    end` |       `start`      |