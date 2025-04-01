<!--GITHUB_BLOCK-->

# Paleta

<!--/GITHUB_BLOCK-->

```tsx
import {Palette} from '@gravity-ui/uikit';
```

El `Palette` componente se usa para mostrar una cuadrícula de íconos, emojis, reacciones y símbolos que puede seleccionar o deseleccionar.

### Estado desactivado

Puede desactivar todas las opciones utilizando la `disabled` propiedad. Si desea deshabilitar solo ciertas opciones, puede cambiar la `disabled` propiedad de esas `options` (`PaletteOption[]`).

<!--LANDING_BLOCK

<ExampleBlock
    code={`
const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];
// disable the first item
<Palette options={[{ ...options[0], disabled: true }, options[1]]} disabled={true} />
// or disable all of them
<Palette options={options} disabled={true} />
`}
>
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool', disabled: true},
            {content: '🥴', value: 'ID-woozy'},
        ]}
    />
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        disabled={true}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  // disable a single item
  {content: '😎', value: 'ID-cool', disabled: true},
  {content: '🥴', value: 'ID-woozy'},
];
// or disable all of them
<Palette options={options} disabled={true} />;
```

<!--/GITHUB_BLOCK-->

### Tamaño

Usa la `size` propiedad para administrar el `Palette` tamaño. El tamaño predeterminado es `s`.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} size={"xs"} />
<Palette options={options} size={"s"} />
<Palette options={options} size={"m"} />
<Palette options={options} size={"l"} />
<Palette options={options} size={"xl"} />
`}
>
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        size="xs"
    />
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        size="s"
    />
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        size="m"
    />
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        size="l"
    />
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        size="xl"
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} size={"xs"} />
<Palette options={options} size={"s"} />
<Palette options={options} size={"m"} />
<Palette options={options} size={"l"} />
<Palette options={options} size={"xl"} />
```

<!--/GITHUB_BLOCK-->

### Columnas

Puede cambiar el número de columnas de la cuadrícula cambiando la `columns` propiedad (el valor predeterminado es `6`).

<!--LANDING_BLOCK

<ExampleBlock
    code={`
const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />
`}
>
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        columns={1}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

### Múltiples

De forma predeterminada, puede seleccionar y deseleccionar varias opciones. En caso de que solo desee seleccionar una opción, puede deshabilitar la `multiple` propiedad.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} multiple={false} />
`}
>
    <UIKit.Palette
        options={[
            {content: '😎', value: 'ID-cool'},
            {content: '🥴', value: 'ID-woozy'},
        ]}
        multiple={false}
    />
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

### Propiedades

`PaletteProps`:

| Nombre                | Descripción                                                                                                         |                            Tipo                            | Predeterminado |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------: | :------------: |
| etiqueta aria         | `aria-label` Atributo HTML                                                                                          |                          `string`                          |                |
| aria - etiquetada por | ID del elemento de `Palette` subtítulo visible                                                                      |                          `string`                          |                |
| className             | `class` Atributo HTML                                                                                               |                          `string`                          |                |
| columnas              | Número de elementos por fila                                                                                        |                          `number`                          |      `6`       |
| defaultValue          | Establece el estado del valor inicial cuando se monta el componente                                                 |                         `string[]`                         |                |
| inhabilitado          | Desactiva las opciones                                                                                              |                         `boolean`                          |    `false`     |
| múltiple              | Permite seleccionar varias opciones                                                                                 |                         `boolean`                          |     `true`     |
| onBlur                | `onBlur` controlador de eventos                                                                                     | `(evento: <HTMLButtonElement> React.focusEvent () = nulo>` |                |
| onFocus               | `onFocus` controlador de eventos                                                                                    | `(evento: <HTMLButtonElement> React.focusEvent () = nulo>` |                |
| onUpdate              | Se activa cuando el usuario cambia el estado Proporciona el nuevo valor como argumento de una devolución de llamada |                `(value: string[]) => void`                 |                |
| optionClassName       | `class` Atributo HTML para el botón de paleta                                                                       |                          `string`                          |                |
| opciones              | Lista de opciones (elementos de paleta)                                                                             |                     `PaletteOption[]`                      |      `[]`      |
| qa                    | `data-qa` Atributo HTML, usado para realizar pruebas                                                                |                          `string`                          |                |
| rowClassName          | `class` Atributo HTML para una fila de paleta                                                                       |                          `string`                          |                |
| tamaño                | Establece el tamaño de los elementos                                                                                |                         `xs` `xl`                          |      `m`       |
| estilo                | `style` Atributo HTML                                                                                               |                   `React.CSSProperties`                    |                |
| valor                 | Valor actual para el uso controlado del componente                                                                  |                         `string[]`                         |                |

`PaletteOption`:

| Nombre       | Descripción           |    Tipo     | Predeterminado |
| :----------- | :-------------------- | :---------: | :------------: |
| contenido    | `class` Atributo HTML | `ReactNode` |                |
| inhabilitado | Desactiva el botón    |  `boolean`  |    `false`     |
| título       | `title` Atributo HTML |  `string`   |                |
| valor        | Valor de control      |  `string`   |                |
