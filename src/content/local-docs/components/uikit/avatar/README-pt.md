Este componente destina-se à renderização de avatares. Possui três tipos básicos de avatar: imagem, ícone e texto (iniciais do nome). Todos esses tipos possuem propriedades especiais para configurar o comportamento e a aparência.

```tsx
import {Avatar} from '@gravity-ui/uikit';
```

## Tipos

### Imagem

Este componente pode ser usado para renderizar avatares usando imagens. Para fornecer uma imagem, use a propriedade `imgUrl`.

GRAVITY_TRANSLATION_BLOCK_1_END

Você também pode fornecer a propriedade `srcSet` para carregar imagens de diferentes tamanhos.

GRAVITY_TRANSLATION_BLOCK_2_END

O componente `Avatar` possui a propriedade `fallbackImgUrl`, que permite fornecer a imagem exibida quando ocorre um erro ao carregar a imagem, através do link `imgUrl` (erro CSP ou imagem original ausente).

GRAVITY_TRANSLATION_BLOCK_3_END

### Ícone

Este componente pode ser usado para renderizar avatares usando ícones. Use a propriedade `icon` para fornecer um ícone, assim como faria no caso do componente `Icon`.

GRAVITY_TRANSLATION_BLOCK_4_END

### Texto

Este componente pode ser usado para renderizar avatares usando texto. Use a propriedade `text` para isso. O texto é renderizado como iniciais (primeiras letras de duas palavras) ou apenas as duas primeiras letras de uma única palavra.

GRAVITY_TRANSLATION_BLOCK_5_END

## Aparência

### Tema e visualização

O componente `Avatar` possui temas predefinidos (`normal`, `brand`) e visualizações (`filled`, `outlined`).

O tema padrão é `normal` e a visualização padrão é `filled`.

GRAVITY_TRANSLATION_BLOCK_6_END

### Cores personalizadas

Você também pode fornecer cores personalizadas através das propriedades `backgroundColor`, `borderColor` e `color` (esta última funciona apenas para avatares de ícone e texto). Essas cores têm prioridade maior do que as cores do tema.

GRAVITY_TRANSLATION_BLOCK_7_END

### Tamanho

Use a propriedade `size` para gerenciar o tamanho do `Avatar`. O tamanho padrão é `m`. Os valores possíveis são `3xs`, `2xs`, `xs`, `s`, `m`, `l` e `xl`.

GRAVITY_TRANSLATION_BLOCK_8_END

### Formato

Use a propriedade `shape` para gerenciar o formato do `Avatar`. O formato padrão é `circle`. Os valores possíveis são `circle` e `square`.

GRAVITY_TRANSLATION_BLOCK_9_END

## Propriedades

### Comuns

| Nome             | Descrição                                |                      Tipo                       | Padrão  |
| :--------------- | :----------------------------------------- | :---------------------------------------------: | :------: |
| size             | Tamanho do avatar                          | `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'` |   `m`    |
| theme            | Tema do avatar                             |              `'normal'` `'brand'`               | `normal` |
| view             | Opções de preenchimento e contorno do avatar |             `'filled'` `'outlined'`             | `filled` |
| shape            | Formato do avatar                          |              `'circle'` `'square'`              | `circle` |
| backgroundColor  | Cor de fundo personalizada                 |                    `string`                     |          |
| borderColor      | Cor da borda personalizada                 |                    `string`                     |          |
| title            | Atributo HTML `title`                      |                    `string`                     |          |
| aria-label       | `aria-label` para a seção do avatar        |                    `string`                     |          |
| aria-labelledby  | `aria-labelledby` para a seção do avatar   |                    `string`                     |          |
| aria-describedby | `aria-describedby` para o bloco do avatar  |                    `string`                     |          |
| aria-details     | `aria-details` para o bloco do avatar      |                    `string`                     |          |
| className        | Classe CSS personalizada para o elemento raiz |                    `string`                     |          |
| style            | Atributo HTML `style`                      |              `React.CSSProperties`              |          |
| qa               | Atributo HTML `data-qa`, usado para testes |                    `string`                     |          |

### Específicas de imagem

| Nome            | Descrição                               |        Tipo        |   Padrão   |
| :-------------- | :-------------------------------------- | :----------------: | :--------: |
| imgUrl          | Atributo HTML `src` da tag `img`        |      `string`      |            |
| fallbackImgUrl  | Imagem de fallback exibida se ocorrer um erro |      `string`      |            |
| sizes           | Atributo HTML `sizes` da tag `img`      |      `string`      |            |
| srcSet          | Atributo HTML `srcSet` da tag `img`     |      `string`      |            |
| alt             | Atributo HTML `alt` da tag `img`        |      `string`      | props.title |
| loading         | Atributo HTML `loading` da tag `img`    | `'eager'` `'lazy'` |            |
| withImageBorder | Adiciona borda padrão para a imagem     |     `boolean`      |            |

### Específico para Ícones

| Nome  | Descrição        |    Tipo    | Padrão |
| :---- | :--------------- | :--------: | :----: |
| icon  | Fonte do ícone SVG | `IconData` |        |
| color | Cor personalizada do ícone |  `string`  |        |

### Específico para Texto

| Nome  | Descrição       |   Tipo   | Padrão |
| :---- | :-------------- | :------: | :----: |
| text  | Texto do avatar | `string` |        |
| color | Cor personalizada do texto | `string` |        |

## API CSS

| Nome                            | Descrição             |
| :------------------------------ | :-------------------- |
| `--g-avatar-size`               | Tamanho (largura e altura) |
| `--g-avatar-border-width`       | Largura da borda      |
| `--g-avatar-inner-border-width` | Largura da borda interna |
| `--g-avatar-border-color`       | Cor da borda          |
| `--g-avatar-background-color`   | Cor de fundo          |
| `--g-avatar-text-color`         | Cor do ícone e texto  |
| `--g-avatar-font-weight`        | Peso da fonte do texto |
| `--g-avatar-font-size`          | Tamanho da fonte do texto |
| `--g-avatar-line-height`        | Altura da linha do texto |