Le composant `Loader` affiche la progression du chargement sous forme de barres clignotantes. Contrairement à `Spin`, ce composant est utilisé dans des scénarios globaux, par exemple pour une page entière ou une `Dialog`.

```tsx
import {Loader} from '@gravity-ui/uikit';
```

### Taille

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

`S` : Petite taille, utilisée lorsque le chargeur normal est trop grand.

`M` : Taille moyenne (de base), utilisée dans la plupart des cas.

`L` : Grande taille, utilisée lorsque le chargeur normal est trop petit.

## Propriétés

| Nom      | Description                           |       Type        | Défaut |
| :-------- | :------------------------------------ | :---------------: | :-----: |
| size      | Taille du chargeur                           | `"s"` `"m"` `"l"` |  `"s"`  |
| className | Classe CSS personnalisée pour l'élément racine |     `string`      |         |