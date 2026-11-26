Le composant `Menu` permet de créer facilement des vues pour des listes d'actions.

```tsx
import {Menu} from '@gravity-ui/uikit';
```

Il dispose de composants dédiés pour les éléments (`Menu.Item`) et les groupes (`Menu.Group`). Vous pouvez les combiner pour créer des menus plus complexes.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Taille

Cette propriété est utilisée pour sélectionner la taille du menu. La valeur par défaut est `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Propriétés

| Nom      | Description                                |           Type           | Défaut |
| :-------- | :----------------------------------------- | :----------------------: | :-----: |
| size      | Taille du menu                             | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| children  | Élément enfant                             |    `React.ReactNode`     |         |
| className | Attribut HTML `class`                      |         `string`         |         |
| style     | Attribut HTML `style`                      |  `React.CSSProperties`   |         |
| qa        | Attribut HTML `data-qa`, utilisé pour les tests |         `string`         |         |

## Menu.Item

Cette propriété est utilisée pour rendre les éléments du menu.

### Icône

Utilisez la propriété `iconStart` ou `iconEnd` pour afficher une icône au début ou à la fin d'un élément de menu :

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### États

En utilisant cette propriété, vous pouvez activer ou désactiver (griser) des éléments de menu spécifiques :

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Thème

Cela vous permet de changer le thème de l'élément de menu. Le thème par défaut est `normal`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

### Propriétés

| Nom             | Description                                    |           Type            |  Défaut   |
| :-------------- | :--------------------------------------------- | :-----------------------: | :--------: |
| iconStart       | Icône de menu avant le texte de l'élément      |        `ReactNode`        |            |
| iconEnd         | Icône de menu après le texte de l'élément      |        `ReactNode`        |            |
| selected        | Indicateur de sélection de l'élément de menu   |         `boolean`         |  `false`   |
| disabled        | Indicateur de désactivation de l'élément de menu |         `boolean`         |  `false`   |
| active          | Indicateur d'activité de l'élément de menu     |         `boolean`         |  `false`   |
| href            | URL                                            |         `string`          |            |
| title           | Attribut title                                 |         `string`          |            |
| target          | Attribut target                                |         `string`          |            |
| rel             | Attribut rel                                   |         `string`          |            |
| onClick         | Gestionnaire de l'événement onclick              | `React.MouseEventHandler` |            |
| theme           | Thème de l'élément de menu                     |   `"normal"` `"danger"`   | `"normal"` |
| children        | Élément enfant                                 |     `React.ReactNode`     |            |
| className       | Attribut HTML `class` pour l'élément racine    |         `string`          |            |
| contentClassName | Attribut HTML `class` pour l'élément de contenu |         `string`          |            |
| style           | Attribut HTML `style`                          |   `React.CSSProperties`   |            |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests |         `string`          |            |
| extraProps      | Attributs HTML supplémentaires                 |         `Record`          |            |

## Menu.Group

Vous pouvez regrouper des éléments par thèmes au sein d'un même menu :

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### Propriétés

| Nom       | Description                                |         Type          | Défaut |
| :-------- | :----------------------------------------- | :-------------------: | :----: |
| label     | Libellé du groupe de menu                  |       `string`        |        |
| children  | Élément enfant                             |   `React.ReactNode`   |        |
| className | Attribut HTML `class`                      |       `string`        |        |
| style     | Attribut HTML `style`                      | `React.CSSProperties` |        |
| qa        | Attribut HTML `data-qa`, utilisé pour les tests |       `string`        |        |