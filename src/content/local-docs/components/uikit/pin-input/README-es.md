<!--GITHUB_BLOCK-->

# PinInput

<!--/GITHUB_BLOCK-->

`PinInput` es un grupo de entradas para introducir rápidamente una secuencia de valores numéricos o alfanuméricos. Su caso de uso más común es la introducción de códigos OTP o de confirmación recibidos a través de mensajes de texto (SMS), correos electrónicos o aplicaciones de autenticación.

Cada entrada recoge un carácter a la vez. Cuando se acepta un valor, el foco se traslada a la siguiente entrada, hasta que todos los campos estén completos.

```tsx
import {PinInput} from '@gravity-ui/uikit';
```

## Tipo

Por defecto, las entradas solo aceptan valores numéricos. Para permitir valores alfanuméricos, establezca la propiedad `type` en `"alphanumeric"`:

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return <PinInput type="alphanumeric" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput type="alphanumeric" />
```

<!--/GITHUB_BLOCK-->

## Tamaño

Este componente viene en cuatro tamaños: `s`, `m`, `l` y `xl`. El tamaño por defecto es `m`.

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <PinInput size="s" />
            <PinInput size="m" />
            <PinInput size="l" />
            <PinInput size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput size="s" />
<PinInput size="m" />
<PinInput size="l" />
<PinInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## Estado

Si no desea que el usuario interactúe con el componente, establezca la propiedad `disabled`:

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return <PinInput disabled />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput disabled />
```

<!--/GITHUB_BLOCK-->

Para mostrar un estado inválido del componente, utilice la propiedad `validationState` con el valor `"invalid"`. Opcionalmente, puede establecer un texto de mensaje de error con la propiedad `errorMessage`:

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return <PinInput validationState="invalid" errorMessage="Incorrect PIN" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput validationState="invalid" errorMessage="Incorrect PIN" />
```

<!--/GITHUB_BLOCK-->

## Marcador de posición

Por defecto, no hay marcador de posición para las entradas. Puede establecerlo con la propiedad `placeholder`:

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return <PinInput placeholder="😎" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput placeholder="😎" />
```

<!--/GITHUB_BLOCK-->

## Máscara

Si necesita enmascarar los valores introducidos, utilice la propiedad `mask`. Es similar al comportamiento de `<input type="password"/>`.

<!--SANDBOX
import {PinInput} from '@gravity-ui/uikit';

export default function () {
    return <PinInput mask />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput mask />
```

<!--/GITHUB_BLOCK-->

## OTP

Si desea que el navegador sugiera códigos de un solo uso del contexto externo (por ejemplo, SMS), establezca la propiedad `otp`.

## API

- `focus(): void`: Establece el foco en la entrada activa actual.

## API CSS

| Nombre                       | Descripción                                                  |
| :------------------------- | :----------------------------------------------------------- |
| `--g-pin-input-item-width` | Establece el ancho de cada entrada, a menos que `responsive` sea `true`. |
| `--g-pin-input-item-gap`   | Establece un espacio entre las entradas.                                   |

## Propiedades

| Nombre             | Descripción                                                                                                                                           |                     Tipo                     |   Predeterminado   |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: | :----------------: |
| apiRef             | Ref al [API](#api).                                                                                                                                   |              `React.RefObject`               |                    |
| aria-describedby | Atributo HTML `aria-describedby`                                                                                                                     |                   `string`                   |                    |
| aria-label       | Atributo HTML `aria-label`                                                                                                                           |                   `string`                   |                    |
| aria-labelledby  | Atributo HTML `aria-labelledby`                                                                                                                      |                   `string`                   |                    |
| autoFocus        | Habilita o deshabilita el enfoque en la primera entrada al renderizar inicialmente.                                                                                |                  `boolean`                   |                    |
| className        | Atributo HTML `class`                                                                                                                                |                   `string`                   |                    |
| defaultValue     | Valor inicial para un componente no controlado.                                                                                                          |                  `string[]`                  |                    |
| disabled         | Alterna el estado `disabled`                                                                                                                          |                  `boolean`                   |                    |
| errorMessage     | Texto de error colocado debajo de la esquina inferior izquierda que comparte espacio con el contenedor de notas. Solo visible cuando `validationState` está establecido en `"invalid"`. |              `React.ReactNode`               |                    |
| id               | Prefijo del atributo HTML `id` para las entradas. El ID resultante también contendrá la parte `"-${index}"`.                                                     |                   `string`                   |                    |
| length           | Número de campos de entrada.                                                                                                                               |                   `number`                   |        `4`         |
| mask             | Cuando se establece en `true`, los valores de entrada se enmascararán como campo de contraseña.                                                                            |                  `boolean`                   |                    |
| name             | Atributo HTML `name` para la entrada.                                                                                                                      |                   `string`                   |                    |
| form             | El formulario asociado del elemento de entrada subyacente.                                                                                                   |                   `string`                   |                    |
| note             | Un elemento colocado debajo de la esquina inferior derecha que comparte espacio con el contenedor de errores.                                                             |              `React.ReactNode`               |                    |
| onUpdate         | Callback que se activa cuando cualquiera de las entradas cambia.                                                                                                            |         `(value: string[]) => void`          |                    |
| onUpdateComplete | Callback que se activa cuando cualquiera de las entradas cambia y todas están completas.                                                                                 |         `(value: string[]) => void`          |                    |
| otp              | Cuando se establece en `true`, agrega `autocomplete="one-time-code"` a las entradas.                                                                                    |                  `boolean`                   |                    |
| placeholder      | Marcador de posición para las entradas                                                                                                                                |                   `string`                   |                    |
| qa               | Atributo HTML `data-qa` utilizado con fines de prueba.                                                                                                   |                   `string`                   |                    |
| responsive       | El ancho del padre se distribuye uniformemente entre las entradas.                                                                                                     |                  `boolean`                   |                    |
| size             | Tamaño del campo de entrada.                                                                                                                                     |           `"s"` `"m"` `"l"` `"xl"`           |        `"m"`       |
| style            | Atributo HTML `style`                                                                                                                                |            `React.CSSProperties`             |                    |
| type             | Determina qué tipos de valores de entrada se permiten.                                                                                                       |         `"numeric"` `"alphanumeric"`         |     `"numeric"`      |
| validationState  | Estado de validación que afecta la apariencia del componente.                                                                                               |                 `"invalid"`                  |                    |
| value            | Valor actual para el componente controlado.                                                                                                           |                  `string[]`                  |                    |
| `onFocus`        | Callback que se activa cuando el componente recibe el foco.                                                                                                     | `(event: React.FocusEvent<Element>) => void` |                    |
| `onBlur`         | Callback que se activa cuando el componente pierde el foco.                                                                                                        | `(event: React.FocusEvent<Element>) => void` |                    |
