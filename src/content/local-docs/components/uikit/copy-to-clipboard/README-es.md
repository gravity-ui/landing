<!--GITHUB_BLOCK-->

# CopyToClipboard

<!--/GITHUB_BLOCK-->

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

<!--SANDBOX
import {Button, CopyToClipboard} from '@gravity-ui/uikit';

const buttonText = {
    pending: 'Click Me',
    success: 'Copied!',
    error: "Couldn't copy...",
};

export default function () {
    return (
        <CopyToClipboard text="Some text to copy" timeout={500}>
            {(status) => (
                <Button view="normal" size="l">
                    {buttonText[status]}
                </Button>
            )}
        </CopyToClipboard>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const buttonText = {
  pending: 'Click Me',
  success: 'Copied!',
  error: "Couldn't copy...",
};

<CopyToClipboard text="Some text to copy" timeout={500}>
  {(status) => <button>{buttonText[status]}</button>}
</CopyToClipboard>;
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre     | Descripción                                                             |           Tipo           | Por defecto |
| :--------- | :---------------------------------------------------------------------- | :----------------------: | :---------: |
| children | Función de renderizado `(status: CopyToClipboardStatus) => React.ReactElement` |        `Function`        |             |
| onCopy   | Manejador de eventos `copy`                                             |        `Function`        |             |
| text     | Texto a copiar (puede ser una cadena o una función que devuelve una cadena) | `string \| () => string` |             |
| timeout  | Tiempo en ms para restaurar el estado inicial                           |         `number`         |             |
