El componente `Text` aplica estilos de tipografía como la variante de fuente, el color y el manejo de desbordamiento de texto a su contenido.

```tsx
import {Text} from '@gravity-ui/uikit';
```

## Variante

Estas son las fuentes predeterminadas que se pueden anular en el proyecto. Puede ver una lista de todas las fuentes disponibles [aquí](https://preview.gravity-ui.com/uikit/?path=/story/typography--variants).

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Elipsis

Esta propiedad te permite ocultar el texto que se desborda:

`false`: Usado por defecto.

`true`: El contenido desbordado oculto se reemplazará con una elipsis (`…`).

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Espacio en blanco

Esto representa la propiedad CSS `white-space`. Puede ser `nowrap` o `break-spaces`.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Salto de palabra

Esto representa la propiedad CSS `word-break`. El único valor disponible es `break-all`. | `break-word`.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Color

Especifica el color del texto. Los colores disponibles son:
`primary`, `complementary`, `secondary`, `hint`, `info`, `info-heavy`, `positive`, `positive-heavy`, `warning`, `warning-heavy`, `danger`, `danger-heavy`, `utility`, `utility-heavy`, `misc`, `misc-heavy`, `brand`, `link`, `link-hover`, `link-visited`, `link-visited-hover`, `dark-primary`, `dark-complementary`, `dark-secondary`, `light-primary`, `light-complementary`, `light-secondary`, `light-hint`, `inverted-primary`, `inverted-complementary`, `inverted-secondary`, e `inverted-hint`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Propiedades

| Nombre        | Descripción                                                               |                        Tipo                        |  Por defecto   |
| :------------ | :------------------------------------------------------------------------ | :------------------------------------------------: | :--------: |
| children      | Contenido de texto                                                        |                 `React.ReactNode`                  |            |
| className     | Atributo HTML `class`                                                     |                      `string`                      |            |
| id            | Atributo HTML `id`                                                        |                      `string`                      |            |
| as            | Permite anular la etiqueta HTML predeterminada                           |              `React.ElementType<any>`              |            |
| style         | Atributo HTML `style`                                                     |               `React.CSSProperties`                |            |
| variant       | Fuente del texto                                                          |                      `string`                      | `"body-1"` |
| ellipsis      | El contenido desbordado oculto se reemplazará con puntos suspensivos      |                     `boolean`                      |            |
| ellipsisLines | El número de líneas de texto completas después de las cuales se cortará el contenido |                      `number`                      |            |
| whiteSpace    | Propiedad CSS `white-space`                                               |            `"nowrap"` `"break-spaces"`             |            |
| wordBreak     | Propiedad CSS `word-break`                                                |            `"break-all"` `"break-word"`            |            |
| color         | Color del texto                                                           | `string` (ver los valores en la sección **Color**) |            |
| qa            | Atributo HTML `data-qa`, utilizado para pruebas                           |                      `string`                      |            |