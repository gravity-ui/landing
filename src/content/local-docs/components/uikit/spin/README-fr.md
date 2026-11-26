Le composant `Spin` affiche l'état de chargement (un demi-cercle rotatif) dans des scénarios en ligne. Contrairement à `Loader`, ce composant est utilisé pour afficher l'état de chargement dans des scénarios en ligne, par exemple dans un `Button` ou un `Label`.

```tsx
import {Spin} from '@gravity-ui/uikit';
```

### Taille

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

`XS` : Extra petite.

`S` : Petite, utilisée lorsqu'une rotation de taille moyenne est trop grande.

`M` : Moyenne (de base), utilisée dans la plupart des cas.

`L` : Grande, utilisée lorsqu'une rotation de taille moyenne est trop petite.

`XL` : Extra grande.

## Propriétés

| Nom       | Description                               |              Type               | Défaut |
| :-------- | :---------------------------------------- | :-----------------------------: | :----: |
| size      | Taille de la rotation                     | `"xs"` `"s"` `"m"` `"l"` `"xl"` | `"m"`  |
| style     | Styles CSS personnalisés pour l'élément racine |      `React.CSSProperties`      |        |
| className | Classe CSS personnalisée pour l'élément racine |            `string`             |        |
| qa        | Attribut de test (`data-qa`)              |            `string`             |        |

### API CSS

| Nom              | Description                     |
| :--------------- | :------------------------------ |
| `--g-spin-color` | La couleur principale du composant |
GRAVITY_TRANSLATION_BLOCK_2_END