El componente `Palette` se utiliza para mostrar una cuadrícula de iconos, emojis, reacciones y símbolos que puedes seleccionar o deseleccionar.

```tsx
import {Palette} from '@gravity-ui/uikit';
```

### Estado deshabilitado

Puedes deshabilitar todas las opciones usando la propiedad `disabled`. Si solo quieres deshabilitar ciertas opciones, puedes cambiar la propiedad `disabled` de esas `options` (`PaletteOption[]`).

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Tamaño

Usa la propiedad `size` para gestionar el tamaño de `Palette`. El tamaño predeterminado es `s`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Columnas

Puedes cambiar el número de columnas en la cuadrícula cambiando la propiedad `columns` (el valor predeterminado es `6`).

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Múltiple

Por defecto, puedes seleccionar y deseleccionar múltiples opciones. En caso de que solo quieras hacer que una sola opción sea seleccionable, puedes deshabilitar la propiedad `multiple`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

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