<!--GITHUB_BLOCK-->

# Overlay

<!--/GITHUB_BLOCK-->

O componente `Overlay` renderiza uma sobreposição sobre o elemento pai com posição relativa, ou seja, o elemento pai deve ter a propriedade `position` definida como `relative`.
Por exemplo, ele pode ser usado para preservar o layout desejado enquanto os dados estão sendo carregados.

```tsx
import {Overlay} from '@gravity-ui/uikit';
```

```jsx
import {Box, Overlay, Loader} from '@gravity-ui/uikit';

<Box position="relative">
  <div>Some content to hide under overlay</div>
  <Overlay visible={loading}>
    <Loader />
  </Overlay>
</Box>;
```

## Aparência

### Fundo

Você pode usar as cores de fundo `base` ou `float`.

<!--GITHUB_BLOCK-->

```tsx
<Overlay background="base">
<Overlay background="float">
```

<!--/GITHUB_BLOCK-->

## Propriedades

| Nome       | Descrição                               |        Tipo        | Padrão |
| :--------- | :-------------------------------------- | :----------------: | :----: |
| className  | Nome da classe CSS do elemento raiz     |      `string`      |        |
| visible    | Estado de visibilidade da sobreposição  |     `boolean`      | `false` |
| background | Estilo do fundo da sobreposição         | `"base"` `"float"` | `base` |
| children   | Conteúdo (geralmente, um componente `Loader`) | `React.ReactNode`  |        |
