<!--GITHUB_BLOCK-->

# ClipboardButton

<!--/GITHUB_BLOCK-->

`ClipboardButton` es un botón listo para usar que copia el texto dado al portapapeles y reproduce una animación de éxito. Combina [`CopyToClipboard`](../CopyToClipboard/README.md) (el comportamiento de copia) con [`ClipboardIcon`](../ClipboardIcon/README.md) (el icono animado).

```tsx
import {ClipboardButton} from '@gravity-ui/uikit';
```

<!--SANDBOX
import {ClipboardButton} from '@gravity-ui/uikit';

export default function () {
    return <ClipboardButton text="Some text to copy" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<ClipboardButton text="Some text to copy" />
```

<!--/GITHUB_BLOCK-->

## Propiedades

Las propiedades de `ClipboardButton` se heredan de las [propiedades](../Button/README.md#properties) de `Button`.

| Nombre               | Descripción                                                               |            Tipo            |   Por defecto   |
| :----------------- | :------------------------------------------------------------------------ | :------------------------: | :-------------: |
| hasTooltip         | Activa/desactiva la visualización del tooltip                             |         `boolean`          |     `true`      |
| onCopy             | Callback después de copiar `(text: string, result: boolean) => void`      |         `Function`         |                 |
| text               | Texto a copiar (puede ser una cadena o una función que devuelve una cadena) |  `string \| () => string`  |                 |
| timeout            | Tiempo antes de que el estado vuelva a la normalidad después de hacer clic en el botón |          `number`          |     `1000`      |
| tooltipInitialText | Texto que se muestra antes de copiar                                      |          `string`          |    `"Copy"`     |
| tooltipSuccessText | Texto que se muestra después de copiar                                    |          `string`          |   `"Copied!"`   |
| icon               | Icono personalizado                                                       |     `React.ReactNode`      |                 |
| iconPosition       | Posición del icono                                                        | `start          \|    end` |     `start`     |
