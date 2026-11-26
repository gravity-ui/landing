O componente `Text` aplica estilos de tipografia como variante de fonte, cor e tratamento de estouro de texto ao seu conteúdo.

```tsx
import {Text} from '@gravity-ui/uikit';
```

## Variante

Estas são as fontes padrão que podem ser substituídas no projeto. Você pode ver uma lista de todas as fontes disponíveis [aqui](https://preview.gravity-ui.com/uikit/?path=/story/typography--variants).

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Elipse

Esta propriedade permite ocultar o texto que transborda:

`false`: Usado por padrão.

`true`: O conteúdo oculto que transborda será substituído por uma elipse (`…`).

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Espaço em Branco

Isso representa a propriedade CSS `white-space`. Pode ser `nowrap` ou `break-spaces`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Quebra de Palavra

Isso representa a propriedade CSS `word-break`. O único valor disponível é `break-all`. | `break-word`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Cor

Especifica a cor do texto. As cores disponíveis são:
`primary`, `complementary`, `secondary`, `hint`, `info`, `info-heavy`, `positive`, `positive-heavy`, `warning`, `warning-heavy`, `danger`, `danger-heavy`, `utility`, `utility-heavy`, `misc`, `misc-heavy`, `brand`, `link`, `link-hover`, `link-visited`, `link-visited-hover`, `dark-primary`, `dark-complementary`, `dark-secondary`, `light-primary`, `light-complementary`, `light-secondary`, `light-hint`, `inverted-primary`, `inverted-complementary`, `inverted-secondary`, e `inverted-hint`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

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