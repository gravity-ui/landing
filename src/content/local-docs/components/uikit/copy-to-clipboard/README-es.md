`CopyToClipboard` es un wrapper de tipo render-prop que copia texto al portapapeles y expone el estado de la copia a su hijo, permitiéndote renderizar tu propio disparador; para un botón listo para usar, utiliza `ClipboardButton`.

```tsx
import {CopyToClipboard} from '@gravity-ui/uikit';
```

### Hijos (función de renderizado)

Esta es una función de renderizado proporcionada como propiedad de los hijos. Puede actualizar su contenido dependiendo del estado que se devuelve como primer argumento en la función de renderizado.
Hay tres estados disponibles: `pending`, `success` y `error`.

`pending`: Estado inicial devuelto en la función de renderizado en el caso neutral.

`success`: Estado de resultado devuelto en la función de renderizado en caso de éxito.

`error`: Estado de resultado devuelto en la función de renderizado en caso de error.

La opción `timeout` establece el tiempo en ms para restaurar el estado inicial (`pending`) después de uno de los estados de resultado (`success` o `error`).

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Propiedades

| Nombre     | Descripción                                                             |           Tipo           | Por defecto |
| :--------- | :---------------------------------------------------------------------- | :----------------------: | :---------: |
| children | Función de renderizado `(status: CopyToClipboardStatus) => React.ReactElement` |        `Function`        |             |
| onCopy   | Manejador de eventos `copy`                                             |        `Function`        |             |
| text     | Texto a copiar (puede ser una cadena o una función que devuelve una cadena) | `string \| () => string` |             |
| timeout  | Tiempo en ms para restaurar el estado inicial                           |         `number`         |             |