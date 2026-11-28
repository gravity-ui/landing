<!--GITHUB_BLOCK-->

# Text

<!--/GITHUB_BLOCK-->

El componente `Text` aplica estilos de tipografía como la variante de fuente, el color y el manejo de desbordamiento de texto a su contenido.

```tsx
import {Text} from '@gravity-ui/uikit';
```

## Variante

Estas son las fuentes predeterminadas que se pueden anular en el proyecto. Puede ver una lista de todas las fuentes disponibles [aquí](https://preview.gravity-ui.com/uikit/?path=/story/typography--variants).

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text variant="body-1">some text</Text>
            <Text variant="caption-2">some text</Text>
            <Text variant="display-3">some text</Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text variant="body-1">some text</Text>
<Text variant="caption-2">some text</Text>
<Text variant="display-3">some text</Text>
```

<!--/GITHUB_BLOCK-->

### Elipsis

Esta propiedad te permite ocultar el texto que se desborda:

`false`: Usado por defecto.

`true`: El contenido desbordado oculto se reemplazará con una elipsis (`…`).

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text ellipsis={false}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
            <Text ellipsis>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text ellipsis={false}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab
    rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente
    exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
<Text ellipsis={true}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab
    rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente
    exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
```

<!--/GITHUB_BLOCK-->

### Espacio en blanco

Esto representa la propiedad CSS `white-space`. Puede ser `nowrap` o `break-spaces`.

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            <Text whiteSpace="nowrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            <Text whiteSpace="break-spaces">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
<Text whiteSpace={"nowrap"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
<Text whiteSpace={"break-spaces"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
```

<!--/GITHUB_BLOCK-->

### Salto de palabra

Esto representa la propiedad CSS `word-break`. El único valor disponible es `break-all`. | `break-word`.

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
            <Text wordBreak="break-all">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic
    delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam
    quibusdam libero ipsa veritatis quisquam!</Text>
<Text wordBreak="break-all">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
    est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente
    exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
```

<!--/GITHUB_BLOCK-->

### Color

Especifica el color del texto. Los colores disponibles son:
`primary`, `complementary`, `secondary`, `hint`, `info`, `info-heavy`, `positive`, `positive-heavy`, `warning`, `warning-heavy`, `danger`, `danger-heavy`, `utility`, `utility-heavy`, `misc`, `misc-heavy`, `brand`, `link`, `link-hover`, `link-visited`, `link-visited-hover`, `dark-primary`, `dark-complementary`, `dark-secondary`, `light-primary`, `light-complementary`, `light-secondary`, `light-hint`, `inverted-primary`, `inverted-complementary`, `inverted-secondary`, e `inverted-hint`.

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text color="info">some text</Text>
            <Text color="positive">some text</Text>
            <Text color="warning">some text</Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text color="info">some text</Text>
<Text color="positive">some text</Text>
<Text color="warning">some text</Text>
```

<!--/GITHUB_BLOCK-->

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
