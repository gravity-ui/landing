GRAVITY_TRANSLATION_BLOCK_0_END

Le composant pour afficher une liste de définitions avec le terme et la définition séparés par des points.

```tsx
import {DefinitionList} from '@gravity-ui/uikit';
```

## Exemples

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Propriétés

| Nom               | Description                                                                                         |              Type              |   Défaut    |
| :---------------- | :-------------------------------------------------------------------------------------------------- | :----------------------------: | :---------: |
| [children](#items) | Éléments de la liste                                                                                |       `React.ReactNode`        |             |
| responsive         | Si défini à `true`, la liste occupera 100% de la largeur de son parent                               |           `boolean`            |             |
| direction          | Si défini à `vertical`, le contenu sera situé sous le nom et la liste occupera 100% de la largeur de son parent | `'horizontal'` \| `'vertical'` | 'horizontal' |
| nameMaxWidth       | Largeur maximale du terme                                                                           |            `number`            |             |
| contentMaxWidth    | Largeur maximale de la définition                                                                   |            `number`            |             |
| className          | Nom de classe pour la liste de définitions                                                          |            `string`            |             |

### Items

Les enfants de `DefinitionList` doivent être des composants de type `DefinitionList.Item` avec les propriétés suivantes :

| Nom     | Description                                      |           Type            | Défaut |
| -------- | ------------------------------------------------ | :-----------------------: | :----: |
| name     | Terme                                            |        `ReactNode`        |        |
| children | Définition                                       |        `ReactNode`        |        |
| copyText | S'il est défini, une icône sera affichée pour copier ce texte |         `string`          |        |
| note     | S'il est défini, `HelpMark` sera affiché à côté du terme      | `string \| HelpMarkProps` |        |

## API CSS

| Nom                           | Description                         |
| :----------------------------- | :---------------------------------- |
| `--g-definition-list-item-gap` | Espace entre les éléments de la liste de définitions |