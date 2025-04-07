<!--GITHUB_BLOCK-->

# Texto

<!--/GITHUB_BLOCK-->

```tsx
import {Text} from '@gravity-ui/uikit';
```

## Variante

Estas son las fuentes predeterminadas que se pueden anular en el proyecto. Puedes ver una lista de todas las fuentes disponibles [aquí](https://preview.gravity-ui.com/uikit/?path=/story/typography--variants).

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Text variant="body-1">some text</Text>
<Text variant="caption-2">some text</Text>
<Text variant="display-3">some text</Text>
`}>
    <UIKit.Text variant="body-1">some text</UIKit.Text>
    <UIKit.Text variant="caption-2">some text</UIKit.Text>
    <UIKit.Text variant="display-3">some text</UIKit.Text>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Text variant="body-1">some text</Text>
<Text variant="caption-2">some text</Text>
<Text variant="display-3">some text</Text>
```

<!--/GITHUB_BLOCK-->

### Elipsis

Esta propiedad permite ocultar el texto que se desborda:

`false`: Se usa de forma predeterminada.

`true`: El contenido adicional oculto se reemplazará por puntos suspensivos ()`…`.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Text ellipsis={false}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
<Text ellipsis={true}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
`}>
    <UIKit.Text ellipsis={false}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</UIKit.Text>
    <UIKit.Text ellipsis={true}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</UIKit.Text>
</ExampleBlock>

LANDING_BLOCK-->

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

Esto significa la propiedad `white-space` CSS. Puede ser cualquiera `nowrap` de los dos `break-spaces`.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
<Text whiteSpace={"nowrap"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
<Text whiteSpace={"break-spaces"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
`}>
    <UIKit.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</UIKit.Text>
    <UIKit.Text whiteSpace={"nowrap"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</UIKit.Text>
    <UIKit.Text whiteSpace={"break-spaces"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</UIKit.Text>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
<Text whiteSpace={"nowrap"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
<Text whiteSpace={"break-spaces"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
```

<!--/GITHUB_BLOCK-->

### Interrupción de palabras

Esto significa la propiedad `word-break` CSS. El único valor disponible es `break-all`. | `break-word`.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
<Text wordBreak="break-all">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
`}>
    <UIKit.Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</UIKit.Text>
    <UIKit.Text wordBreak="break-all">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</UIKit.Text>
</ExampleBlock>

LANDING_BLOCK-->

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
`primary`, `complementary`, `secondary`, `hint`, `info`, `info-heavy`, `positive`, `positive-heavy`, `warning`, `warning-heavy`, `danger`, `danger-heavy`, , `utility`, `utility-heavy`, `misc`, `misc-heavy`, `brand`, `link`, `link-hover`, `link-visited`, `link-visited-hover`, `dark-primary`, `dark-complementary`, `dark-secondary`, `light-primary`, `light-complementary`, `light-secondary`, `light-hint`, `inverted-primary`, , `inverted-complementary`, `inverted-secondary`, y `inverted-hint`.

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Text color="info">some text</Text>
<Text color="positive">some text</Text>
<Text color="warning">some text</Text>
`}>
    <UIKit.Text color="info">some text</UIKit.Text>
    <UIKit.Text color="positive">some text</UIKit.Text>
    <UIKit.Text color="warning">some text</UIKit.Text>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Text color="info">some text</Text>
<Text color="positive">some text</Text>
<Text color="warning">some text</Text>
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre         | Descripción                                                                        |                          Tipo                           | Predeterminado |
| :------------- | :--------------------------------------------------------------------------------- | :-----------------------------------------------------: | :------------: |
| niños          | Contenido de texto                                                                 |                    `React.ReactNode`                    |                |
| className      | `class` Atributo HTML                                                              |                        `string`                         |                |
| identificación | `id` Atributo HTML                                                                 |                        `string`                         |                |
| tan            | Permite anular la etiqueta HTML predeterminada                                     |           `Tipo de elemento de reacción<any>`           |                |
| estilo         | `style` Atributo HTML                                                              |                  `React.CSSProperties`                  |                |
| variante       | Tipo de letra de texto                                                             |                        `string`                         |   `"body-1"`   |
| elipsis        | El contenido adicional oculto se reemplazará por puntos suspensivos                |                        `boolean`                        |                |
| ellipsisLines  | El número de líneas enteras de texto después de las cuales se cortará el contenido |                        `number`                         |                |
| whiteSpace     | `white-space` Propiedad CSS                                                        |               `"nowrap"` `"break-spaces"`               |                |
| wordBreak      | `word-break` Propiedad CSS                                                         |              `"break-all"` `"break-word"`               |                |
| color          | Color del texto                                                                    | `string` (consulte los valores en la **sección** Color) |                |
| qa             | `data-qa` Atributo HTML, usado para realizar pruebas                               |                        `string`                         |                |
