<!--GITHUB_BLOCK-->

# Loader

<!--/GITHUB_BLOCK-->

Le composant `Loader` affiche la progression du chargement sous forme de barres clignotantes. Contrairement à `Spin`, ce composant est utilisé dans des scénarios globaux, par exemple pour une page entière ou une `Dialog`.

```tsx
import {Loader} from '@gravity-ui/uikit';
```

### Taille

<!--SANDBOX
import {Loader} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Loader size="s" />
            <Loader size="m" />
            <Loader size="l" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Loader size="s" />
<Loader size="m" />
<Loader size="l" />
```

<!--/GITHUB_BLOCK-->

`S` : Petite taille, utilisée lorsque le chargeur normal est trop grand.

`M` : Taille moyenne (de base), utilisée dans la plupart des cas.

`L` : Grande taille, utilisée lorsque le chargeur normal est trop petit.

## Propriétés

| Nom      | Description                           |       Type        | Défaut |
| :-------- | :------------------------------------ | :---------------: | :-----: |
| size      | Taille du chargeur                           | `"s"` `"m"` `"l"` |  `"s"`  |
| className | Classe CSS personnalisée pour l'élément racine |     `string`      |         |
