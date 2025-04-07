<!--GITHUB_BLOCK-->

# PinInput

<!--/GITHUB_BLOCK-->

```tsx
import {PinInput} from '@gravity-ui/uikit';
```

`PinInput` es un grupo de entradas para introducir rápidamente una secuencia de valores numéricos o alfanuméricos. Su caso de uso más común es introducir códigos OTP o de confirmación recibidos a través de mensajes de texto (SMS), correos electrónicos o aplicaciones de autenticación.

Cada entrada recopila un carácter a la vez. Cuando se acepta un valor, el foco se mueve a la siguiente entrada, hasta que se rellenen todos los campos.

## Tipo

De forma predeterminada, las entradas solo aceptan valores numéricos. Para permitir valores alfanuméricos, defina la `type` propiedad en `"alphanumeric"`:

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<PinInput type="alphanumeric" />
`}
>
    <UIKit.PinInput type="alphanumeric" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput type="alphanumeric" />
```

<!--/GITHUB_BLOCK-->

## Tamaño

Este componente viene en cuatro tamaños: `s` `m`, `l`, y `xl`. El tamaño predeterminado es `m`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<PinInput size="s" />
<PinInput size="m" />
<PinInput size="l" />
<PinInput size="xl" />
`}
>
    <UIKit.PinInput size="s" />
    <UIKit.PinInput size="m" />
    <UIKit.PinInput size="l" />
    <UIKit.PinInput size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput size="s" />
<PinInput size="m" />
<PinInput size="l" />
<PinInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## Estado

Si no desea que el usuario interactúe con el componente, defina la `disabled` propiedad:

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<PinInput disabled />
`}
>
    <UIKit.PinInput disabled />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput disabled />
```

<!--/GITHUB_BLOCK-->

Para mostrar un estado no válido del componente, utilice la `validationState` propiedad con el `"invalid"` valor. Si lo desea, puede establecer el texto de un mensaje de error con la `errorMessage` propiedad:

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<PinInput validationState="invalid" errorMessage="Incorrect PIN" />
`}
>
    <UIKit.PinInput validationState="invalid" errorMessage="Incorrect PIN" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput validationState="invalid" errorMessage="Incorrect PIN" />
```

<!--/GITHUB_BLOCK-->

## Marcador de posición

De forma predeterminada, no hay ningún marcador de posición para las entradas. Puede configurarlo con la `placeholder` propiedad:

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<PinInput placeholder="😎" />
`}
>
    <UIKit.PinInput placeholder="😎" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput placeholder="😎" />
```

<!--/GITHUB_BLOCK-->

## máscara

Si necesita enmascarar los valores introducidos, utilice la `mask` propiedad. Es similar al `<input type="password"/>` comportamiento.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<PinInput mask />
`}
>
    <UIKit.PinInput mask />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<PinInput mask />
```

<!--/GITHUB_BLOCK-->

## ARRIBA

Si desea que el navegador sugiera códigos de un solo uso desde el contexto externo (por ejemplo, SMS), defina la `otp` propiedad.

## API

- `focus(): void`: Establece el foco en la entrada activa actual.

## API CSS

| Nombre                     | Descripción                                                              |
| :------------------------- | :----------------------------------------------------------------------- |
| `--g-pin-input-item-width` | Establece el ancho de cada entrada, a menos que `responsive` sea `true`. |
| `--g-pin-input-item-gap`   | Establece un espacio entre las entradas.                                 |

## Propiedades

| Nombre                | Descripción                                                                                                                                                                                |                       Tipo                       | Predeterminado |
| :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------: | :------------: |
| apiRef                | Consulta la [API](#api).                                                                                                                                                                   |                `React.RefObject`                 |                |
| aria, descrita por    | `aria-describedby` Atributo HTML                                                                                                                                                           |                     `string`                     |                |
| etiqueta aria         | `aria-label` Atributo HTML                                                                                                                                                                 |                     `string`                     |                |
| aria - etiquetada por | `aria-labelledby` Atributo HTML                                                                                                                                                            |                     `string`                     |                |
| autoFocus             | Activa o desactiva el enfoque en la primera entrada del modelizado inicial.                                                                                                                |                    `boolean`                     |                |
| className             | `class` Atributo HTML                                                                                                                                                                      |                     `string`                     |                |
| defaultValue          | Valor inicial de un componente no controlado.                                                                                                                                              |                    `string[]`                    |                |
| inhabilitado          | Alterna el estado `disabled`                                                                                                                                                               |                    `boolean`                     |                |
| errorMessage          | Texto de error colocado debajo de la esquina inferior inicial que comparte espacio con el contenedor de notas. Solo está visible cuando `validationState` está establecido en `"invalid"`. |                `React.ReactNode`                 |                |
| identificación        | `id` Prefijo de atributo HTML para entradas. El identificador resultante también contendrá la `"-${index}"` pieza.                                                                         |                     `string`                     |                |
| longitud              | Número de campos de entrada.                                                                                                                                                               |                     `number`                     |      `4`       |
| máscara               | Cuando se establece en `true`, los valores de entrada se enmascararán como el campo de contraseña.                                                                                         |                    `boolean`                     |                |
| nombre                | `name` Atributo HTML para la entrada.                                                                                                                                                      |                     `string`                     |                |
| formulario            | La forma asociada del elemento de entrada subyacente.                                                                                                                                      |                     `string`                     |                |
| nota                  | Elemento situado debajo de la esquina inferior que comparte espacio con el contenedor de errores.                                                                                          |                `React.ReactNode`                 |                |
| onUpdate              | La devolución de llamada se activa cuando cambia alguna de las entradas.                                                                                                                   |           `(value: string[]) => void`            |                |
| onUpdateComplete      | La devolución de llamada se activa cuando alguna de las entradas cambia y todas están llenas.                                                                                              |           `(value: string[]) => void`            |                |
| arriba                | Cuando se establece en `true`, se suma `autocomplete="one-time-code"` a las entradas.                                                                                                      |                    `boolean`                     |                |
| marcador de posición  | Marcador de posición para entradas                                                                                                                                                         |                     `string`                     |                |
| qa                    | `data-qa` Atributo HTML utilizado con fines de prueba.                                                                                                                                     |                     `string`                     |                |
| sensible              | El ancho de los padres se distribuye de manera uniforme entre las entradas.                                                                                                                |                    `boolean`                     |                |
| tamaño                | Tamaño del campo de entrada.                                                                                                                                                               |                   `"s"` `"xl"`                   |     `"m"`      |
| estilo                | `style` Atributo HTML                                                                                                                                                                      |              `React.CSSProperties`               |                |
| tipo                  | Determina qué tipos de valores de entrada están permitidos.                                                                                                                                |           `"numeric"` `"alphanumeric"`           |  `"numeric"`   |
| validationState       | Estado de validación que afecta al aspecto del componente.                                                                                                                                 |                   `"invalid"`                    |                |
| valor                 | Valor actual del componente controlado.                                                                                                                                                    |                    `string[]`                    |                |
| `onFocus`             | La devolución de llamada se activa cuando el componente recibe el foco.                                                                                                                    | `(evento: <Element> React.focusEvent () = nulo>` |                |
| `onBlur`              | La llamada se activa cuando el componente pierde el foco.                                                                                                                                  | `(evento: <Element> React.focusEvent () = nulo>` |                |
