<!--GITHUB_BLOCK-->

# Palette

<!--/GITHUB_BLOCK-->

El componente `Palette` se utiliza para mostrar una cuadrícula de iconos, emojis, reacciones y símbolos que puedes seleccionar o deseleccionar.

```tsx
import {Palette} from '@gravity-ui/uikit';
```

### Estado deshabilitado

Puedes deshabilitar todas las opciones usando la propiedad `disabled`. Si solo quieres deshabilitar ciertas opciones, puedes cambiar la propiedad `disabled` de esas `options` (`PaletteOption[]`).

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

const disabledOptions: PaletteOption[] = [{...options[0], disabled: true}, options[1]];

export default function () {
    return (
        <>
            <Palette options={disabledOptions} />
            <Palette options={options} disabled />
        </>
    );
}
SANDBOX-->

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

Usa la propiedad `size` para gestionar el tamaño de `Palette`. El tamaño predeterminado es `s`.

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return (
        <>
            <Palette options={options} size="xs" />
            <Palette options={options} size="s" />
            <Palette options={options} size="m" />
            <Palette options={options} size="l" />
            <Palette options={options} size="xl" />
        </>
    );
}
SANDBOX-->

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

Puedes cambiar el número de columnas en la cuadrícula cambiando la propiedad `columns` (el valor predeterminado es `6`).

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return <Palette options={options} columns={1} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

### Múltiple

Por defecto, puedes seleccionar y deseleccionar múltiples opciones. En caso de que solo quieras hacer que una sola opción sea seleccionable, puedes deshabilitar la propiedad `multiple`.

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return <Palette options={options} multiple={false} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

## Propiedades

`PaletteProps`:

| Nombre            | Descripción                                                                           |                          Tipo                          | Predeterminado |
| :---------------- | :------------------------------------------------------------------------------------ | :----------------------------------------------------: | :-----------: |
| aria-label      | Atributo HTML `aria-label`                                                           |                        `string`                        |               |
| aria-labelledby | ID del elemento visible de título de `Palette`                                           |                        `string`                        |               |
| className       | Atributo HTML `class`                                                                |                        `string`                        |               |
| columns         | Número de elementos por fila                                                            |                        `number`                        |      `6`      |
| defaultValue    | Establece el estado del valor inicial cuando el componente se monta                            |                       `string[]`                       |               |
| disabled        | Deshabilita las opciones                                                                  |                       `boolean`                        |     `false`     |
| multiple        | Habilita la selección de múltiples opciones                                                    |                       `boolean`                        |     `true`      |
| onBlur          | Manejador de eventos `onBlur`                                                                | `(event: React.FocusEvent<HTMLButtonElement>) => void` |               |
| onFocus         | Manejador de eventos `onFocus`                                                               | `(event: React.FocusEvent<HTMLButtonElement>) => void` |               |
| onUpdate        | Se activa cuando el usuario cambia el estado. Proporciona el nuevo valor como argumento de la devolución de llamada. |              `(value: string[]) => void`               |               |
| optionClassName | Atributo HTML `class` para el botón de paleta                                         |                        `string`                        |               |
| options         | Lista de opciones (elementos de paleta)                                                    |                   `PaletteOption[]`                    |      `[]`       |
| qa              | Atributo HTML `data-qa`, utilizado para pruebas                                            |                        `string`                        |               |
| rowClassName    | Atributo HTML `class` para una fila de paleta                                              |                        `string`                        |               |
| size            | Establece el tamaño de los elementos                                                         |                 `xs` `s` `m` `l` `xl`                  |      `m`      |
| style           | Atributo HTML `style`                                                                |                 `React.CSSProperties`                  |               |
| value           | Valor actual para el uso controlado del componente                                           |                       `string[]`                       |               |

`PaletteOption`:

| Nombre     | Descripción            |    Tipo     | Por defecto |
| :--------- | :--------------------- | :---------: | :---------: |
| content  | Atributo `class` de HTML | `ReactNode` |         |
| disabled | Deshabilita el botón    |  `boolean`  | `false` |
| title    | Atributo `title` de HTML |  `string`   |         |
| value    | Valor de control          |  `string`   |         |
