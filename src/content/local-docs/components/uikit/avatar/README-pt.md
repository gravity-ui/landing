<!--GITHUB_BLOCK-->

# Avatar

<!--/GITHUB_BLOCK-->

Este componente destina-se à renderização de avatares. Possui três tipos básicos de avatar: imagem, ícone e texto (iniciais do nome). Todos esses tipos possuem propriedades especiais para configurar o comportamento e a aparência.

```tsx
import {Avatar} from '@gravity-ui/uikit';
```

## Tipos

### Imagem

Este componente pode ser usado para renderizar avatares usando imagens. Para fornecer uma imagem, use a propriedade `imgUrl`.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return <Avatar imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352" size="l" />;
}
SANDBOX-->

Você também pode fornecer a propriedade `srcSet` para carregar imagens de diferentes tamanhos.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <Avatar
            imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352"
            srcSet="https://loremflickr.com/57/43/cats?lock=2879400393572352 1x, https://loremflickr.com/131/98/cats?lock=4373954936438784 2x, https://loremflickr.com/164/123/cats?lock=3007328513163264 3x, https://loremflickr.com/225/169/cats?lock=8243879964835840 4x"
            size="l"
        />
    );
}
SANDBOX-->

O componente `Avatar` possui a propriedade `fallbackImgUrl`, que permite fornecer a imagem exibida quando ocorre um erro ao carregar a imagem, através do link `imgUrl` (erro CSP ou imagem original ausente).

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <Avatar
            imgUrl="random_link"
            fallbackImgUrl="https://loremflickr.com/640/480/cats?lock=3552647338524672"
            size="l"
        />
    );
}
SANDBOX-->

### Ícone

Este componente pode ser usado para renderizar avatares usando ícones. Use a propriedade `icon` para fornecer um ícone, assim como faria no caso do componente `Icon`.

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return <Avatar icon={GraduationCap} size="l" />;
}
SANDBOX-->

### Texto

Este componente pode ser usado para renderizar avatares usando texto. Use a propriedade `text` para isso. O texto é renderizado como iniciais (primeiras letras de duas palavras) ou apenas as duas primeiras letras de uma única palavra.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" size="l" />
            <Avatar text="Guardian" size="l" />
        </>
    );
}
SANDBOX-->

## Aparência

### Tema e visualização

O componente `Avatar` possui temas predefinidos (`normal`, `brand`) e visualizações (`filled`, `outlined`).

O tema padrão é `normal` e a visualização padrão é `filled`.

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar icon={GraduationCap} size="l" theme="normal" view="filled" />
            <Avatar icon={GraduationCap} size="l" theme="brand" view="filled" />
            <Avatar icon={GraduationCap} size="l" theme="normal" view="outlined" />
            <Avatar icon={GraduationCap} size="l" theme="brand" view="outlined" />
        </>
    );
}
SANDBOX-->

### Cores personalizadas

Você também pode fornecer cores personalizadas através das propriedades `backgroundColor`, `borderColor` e `color` (esta última funciona apenas para avatares de ícone e texto). Essas cores têm prioridade maior do que as cores do tema.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar
                text="Charles Darwin"
                size="l"
                backgroundColor="var(--g-color-base-danger-medium)"
                color="var(--g-color-text-primary)"
            />
            <Avatar text="Charles Darwin" size="l" borderColor="var(--g-color-line-misc)" />
        </>
    );
}
SANDBOX-->

### Tamanho

Use a propriedade `size` para gerenciar o tamanho do `Avatar`. O tamanho padrão é `m`. Os valores possíveis são `3xs`, `2xs`, `xs`, `s`, `m`, `l` e `xl`.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" theme="brand" size="3xs" />
            <Avatar text="Charles Darwin" theme="brand" size="2xs" />
            <Avatar text="Charles Darwin" theme="brand" size="xs" />
            <Avatar text="Charles Darwin" theme="brand" size="s" />
            <Avatar text="Charles Darwin" theme="brand" size="m" />
            <Avatar text="Charles Darwin" theme="brand" size="l" />
            <Avatar text="Charles Darwin" theme="brand" size="xl" />
        </>
    );
}
SANDBOX-->

### Formato

Use a propriedade `shape` para gerenciar o formato do `Avatar`. O formato padrão é `circle`. Os valores possíveis são `circle` e `square`.

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" theme="brand" shape="circle" />
            <Avatar text="Charles Darwin" theme="brand" shape="square" />
        </>
    );
}
SANDBOX-->

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
