Le composant `Overlay` rend un surlignage par-dessus l'élément parent avec une position relative, c'est-à-dire que l'élément parent doit avoir la propriété `position` définie sur `relative`.
Par exemple, il peut être utilisé pour préserver la mise en page souhaitée lors du chargement de données.

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

## Apparence

### Arrière-plan

Vous pouvez utiliser les couleurs d'arrière-plan `base` ou `float`.

GRAVITY_TRANSLATION_BLOCK_1_END

## Propriétés

| Nom       | Description                             |        Type        | Défaut |
| :-------- | :-------------------------------------- | :----------------: | :----: |
| className  | Nom de la classe CSS de l'élément racine |      `string`      |        |
| visible    | État de visibilité du surlignage        |     `boolean`      | `false` |
| background | Style de l'arrière-plan du surlignage   | `"base"` `"float"` | `base`  |
| children   | Contenu (généralement, un composant `Loader`) | `React.ReactNode`  |        |