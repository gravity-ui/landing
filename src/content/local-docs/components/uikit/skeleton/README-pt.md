<!--GITHUB_BLOCK-->

# Skeleton

<!--/GITHUB_BLOCK-->

O componente `Skeleton` exibe uma prévia de espaço reservado para o seu conteúdo antes que os dados sejam carregados. Essa prévia é exibida para reduzir a frustração com o tempo de carregamento.

```tsx
import {Skeleton} from '@gravity-ui/uikit';
```

## Animação

Use a prop `animation` para controlar a animação de carregamento. O padrão é `'gradient'`.

| Valor        | Descrição                                  |
| :----------- | :----------------------------------------- |
| `'gradient'` | Brilho de gradiente deslizante — **padrão** |
| `'pulse'`    | Pulso de opacidade                         |
| `'none'`     | Sem animação                               |

## Variante

Use a prop `variant` para escolher uma aparência predefinida. O padrão é `'rect'`.

| Valor      | Descrição                                                                               |
| :--------- | :-------------------------------------------------------------------------------------- |
| `'rect'`   | Cantos arredondados usando um token de `border-radius` sensível ao tamanho — **padrão** |
| `'circle'` | Totalmente circular (`border-radius: 50%`, `aspect-ratio: 1`)                          |
| `'square'` | Proporção quadrada (`aspect-ratio: 1`) com o mesmo arredondamento de `'rect'`          |
| `'text'`   | Espaço reservado de linha de texto — a altura herda `font-size` e `line-height` do contexto pai |

## Tamanho

Use a prop `size` para definir uma altura predefinida para o esqueleto (e largura para variantes `'circle'` / `'square'`). Cada tamanho também ajusta o token de `border-radius` usado pelas variantes `'rect'` e `'square'`. Quando `size` é omitido, defina as dimensões com `width` e `height` em vez disso.

| Valor | Descrição     |
| :---- | :------------ |
| `'xs'` | Extra pequeno |
| `'s'`  | Pequeno       |
| `'m'`  | Médio         |
| `'l'`  | Grande        |
| `'xl'` | Extra grande  |

<!--GITHUB_BLOCK-->

```tsx
<Skeleton size="xs" width={120} />
<Skeleton size="m"  width={200} />
<Skeleton size="xl" width={280} />

<Skeleton variant="circle" size="l" />
<Skeleton variant="square" size="l" />
```

<!--/GITHUB_BLOCK-->

## Espaço reservado de texto

Use `variant="text"` para renderizar um esqueleto que herda `font-size` e `line-height` do contexto pai. Coloque múltiplos esqueletos dentro de um elemento `<Text variant="...">` para espaços reservados de várias linhas.

<!--GITHUB_BLOCK-->

```tsx
<Text variant="body-1">
  <Skeleton variant="text" width={400} />
  <Skeleton variant="text" width={400} />
  <Skeleton variant="text" width={240} />
</Text>
```

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome        | Descrição                                                                                                                    |                       Tipo                       | Padrão    |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------: | :-------: |
| `style`     | Propriedades CSS personalizadas para o elemento raiz                                                                         |              `React.CSSProperties`               |           |
| `className` | Classe CSS personalizada para o elemento raiz                                                                                |                     `string`                     |           |
| `qa`        | Atributo HTML `data-qa`, usado para testes                                                                                   |                     `string`                     |           |
| `animation` | Tipo de animação a ser aplicada ao esqueleto                                                                                 |      `'gradient'` \| `'pulse'` \| `'none'`       | `gradient` |
| `variant`   | Aparência predefinida. `'circle'` e `'square'` forçam `aspect-ratio: 1`. `'text'` herda a tipografia do contexto pai.        | `'rect'` \| `'square'` \| `'circle'` \| `'text'` |   `rect`   |
| `size`      | Altura predefinida (e largura para variantes `'circle'`/`'square'`). Também controla o token de `border-radius` para `'rect'`/`'square'`. |   `'xs'` \| `'s'` \| `'m'` \| `'l'` \| `'xl'`    |           |
| `width`     | Largura personalizada. Alias para `style.width`                                                                              |               `number` \| `string`               |           |
| `height`    | Altura personalizada. Alias para `style.height`                                                                              |               `number` \| `string`               |           |
