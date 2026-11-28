<!--GITHUB_BLOCK-->

# Text

<!--/GITHUB_BLOCK-->

O componente `Text` aplica estilos de tipografia como variante de fonte, cor e tratamento de estouro de texto ao seu conteúdo.

```tsx
import {Text} from '@gravity-ui/uikit';
```

## Variante

Estas são as fontes padrão que podem ser substituídas no projeto. Você pode ver uma lista de todas as fontes disponíveis [aqui](https://preview.gravity-ui.com/uikit/?path=/story/typography--variants).

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

### Elipse

Esta propriedade permite ocultar o texto que transborda:

`false`: Usado por padrão.

`true`: O conteúdo oculto que transborda será substituído por uma elipse (`…`).

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

### Espaço em Branco

Isso representa a propriedade CSS `white-space`. Pode ser `nowrap` ou `break-spaces`.

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

### Quebra de Palavra

Isso representa a propriedade CSS `word-break`. O único valor disponível é `break-all`. | `break-word`.

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

### Cor

Especifica a cor do texto. As cores disponíveis são:
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

## Propriedades

| Nome          | Descrição                                                               |                        Tipo                        |  Padrão   |
| :------------ | :------------------------------------------------------------------------ | :------------------------------------------------: | :--------: |
| children      | Conteúdo de texto                                                              |                 `React.ReactNode`                  |            |
| className     | Atributo `class` do HTML                                                    |                      `string`                      |            |
| id            | Atributo `id` do HTML                                                       |                      `string`                      |            |
| as            | Permite substituir a tag HTML padrão                                       |              `React.ElementType<any>`              |            |
| style         | Atributo `style` do HTML                                                    |               `React.CSSProperties`                |            |
| variant       | Fonte do texto                                                                 |                      `string`                      | `"body-1"` |
| ellipsis      | Conteúdo oculto transbordante será substituído por reticências                 |                     `boolean`                      |            |
| ellipsisLines | O número de linhas inteiras de texto após as quais o conteúdo será cortado |                      `number`                      |            |
| whiteSpace    | Propriedade CSS `white-space`                                                |            `"nowrap"` `"break-spaces"`             |            |
| wordBreak     | Propriedade CSS `word-break`                                                 |            `"break-all"` `"break-word"`            |            |
| color         | Cor do texto                                                                | `string` (veja os valores na seção **Cor** ) |            |
| qa            | Atributo `data-qa` do HTML, usado para testes                                |                      `string`                      |            |
