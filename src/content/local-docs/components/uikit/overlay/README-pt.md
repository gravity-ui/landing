O componente `Overlay` renderiza uma sobreposição sobre o elemento pai com posição relativa, ou seja, o elemento pai deve ter a propriedade `position` definida como `relative`.
Por exemplo, ele pode ser usado para preservar o layout desejado enquanto os dados estão sendo carregados.

```tsx
import {Overlay} from '@gravity-ui/uikit';
```

```jsx
import {Box, Overlay, Loader} from '@gravity-ui/uikit';

<Box position="relative">
  <div>Algum conteúdo para esconder sob a sobreposição</div>
  <Overlay visible={loading}>
    <Loader />
  </Overlay>
</Box>;
```

GRAVITY_TRANSLATION_BLOCK_0_END

## Aparência

### Fundo

Você pode usar as cores de fundo `base` ou `float`.

GRAVITY_TRANSLATION_BLOCK_1_END

## Propriedades

| Nome       | Descrição                               |        Tipo        | Padrão |
| :--------- | :-------------------------------------- | :----------------: | :----: |
| className  | Nome da classe CSS do elemento raiz     |      `string`      |        |
| visible    | Estado de visibilidade da sobreposição  |     `boolean`      | `false` |
| background | Estilo do fundo da sobreposição         | `"base"` `"float"` | `base` |
| children   | Conteúdo (geralmente, um componente `Loader`) | `React.ReactNode`  |        |