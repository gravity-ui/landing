<!--GITHUB_BLOCK-->

## Password Input

<!--/GITHUB_BLOCK-->

```tsx
import {PasswordInput} from '@gravity-ui/uikit';
```

`PasswordInput` para escribir contraseñas y otra información sensible. Puede renderizarse con botones de copiar y mostrar para un uso más conveniente.

### Botón de copiar

Este botón permite a los usuarios copiar fácilmente el valor del campo de entrada a su portapapeles. Puedes ocultar este botón con la prop booleana `hideCopyButton`.

<!--SANDBOX
import {PasswordInput} from '@gravity-ui/uikit';

export default function () {
    return <PasswordInput hideCopyButton />;
}
SANDBOX-->

### Botón de mostrar

La prop `hideRevealButton` permite a los usuarios alternar la visibilidad de la contraseña.

<!--SANDBOX
import {PasswordInput} from '@gravity-ui/uikit';

export default function () {
    return <PasswordInput hideRevealButton />;
}
SANDBOX-->

### Propiedades

`PasswordInput` [propiedades](https://github.com/gravity-ui/uikit/blob/main/src/components/controls/TextInput/README.md#properties), con algunas excepciones y adiciones:

- `type` se omite;

| Nombre                | Descripción                                                                |    Tipo    | Por defecto |
| :------------------ | :------------------------------------------------------------------------- | :--------: | :---------: |
| hideCopyButton      | Mostrar botón de copiar                                                    | `boolean`  | `false` |
| hideRevealButton    | Mostrar botón de mostrar                                                   | `boolean`  | `false` |
| showCopyTooltip     | Determina si se muestra la información emergente para el botón de copiar   | `boolean`  | `false` |
| showRevealTooltip   | Determina si se muestra la información emergente para el botón de mostrar   | `boolean`  | `false` |
| revealValue         | Determina el estado de visibilidad del campo de entrada de contraseña      | `boolean`  | `false` |
| onRevealValueUpdate | Una función de devolución de llamada que se invoca cada vez que cambia el estado de `revealValue` | `function` |         |

<!--GITHUB_BLOCK-->

#### Usage example

```tsx
function MyComponent() {
  const [value, setValue] = React.useState('');

  return <PasswordInput onUpdate={setValue} value={value} />;
}
```

<!--/GITHUB_BLOCK-->
