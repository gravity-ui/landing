GRAVITY_TRANSLATION_BLOCK_0_END

Le composant `Toc` est conçu pour afficher une table des matières de la page, présentant une liste d'éléments avec deux niveaux de hiérarchie.

```tsx
import {Toc} from '@gravity-ui/uikit';
```

## Utilisation

Vous pouvez utiliser `Toc` de deux manières :

1. Avec des éléments comme liens.
2. Avec des éléments comme boutons cliquables.

Pour utiliser la première option, fournissez le lien approprié à chaque élément `Toc` via la propriété `href`. Vous pourrez toujours utiliser un gestionnaire de clic pour contrôler l'élément `Toc` actif.

Si vous omettez cela, le composant utilisera l'autre option.

## Propriétés

| Nom      | Description                                                                                             |    Type     | Défaut |
| :------- | :------------------------------------------------------------------------------------------------------ | :---------: | :----: |
| className | Classe CSS                                                                                              |  `string`   |        |
| items     | Éléments de la table des matières                                                                       | `TocItem[]` |        |
| value     | Élément actif actuel                                                                                    |  `string`   |        |
| onUpdate  | Gestionnaire de clic sur un élément                                                                     | `Function`  |        |
| qa        | La valeur à fournir à l'attribut `data-qa` du conteneur `Toc`                                           |  `string`   |        |

#### TocItem

| Nom    | Description                                                                                                                            |        Type         | Défaut |
| :----- | :------------------------------------------------------------------------------------------------------------------------------------- | :-----------------: | :----: |
| value   | Valeur de l'élément                                                                                                                    |      `string`       |        |
| content | Contenu de l'élément à afficher                                                                                                        | `React.ReactNode[]` |        |
| href    | La propriété `href` de l'élément `<a>`, dans lequel un élément sera converti s'il est fourni                                           |      `string`       |        |
| items   | Éléments enfants                                                                                                                       |     `TocItem[]`     |        |