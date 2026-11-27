Les composants `Tabs` sont utilisés pour explorer, organiser le contenu et basculer entre différentes vues.

```tsx
import {TabProvider, TabList, Tab, TabPanel} from '@gravity-ui/uikit';
```

Migration depuis l'ancien `Tabs` ? Consultez le [guide de migration](https://github.com/gravity-ui/uikit/blob/main/docs/migration-from-legacy-tabs.md).

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Composants

- [TabProvider](#tabprovider)
- [TabList](#tablist)
- [Tab](#tab)
- [TabPanel](#tabpanel)

## TabProvider

Un composant qui fournit la fonctionnalité de sélection d'onglet

## Propriétés

| Nom     | Description                                                              |           Type            | Défaut |
| :------ | :----------------------------------------------------------------------- | :-----------------------: | :----: |
| children | Liste des onglets et des panneaux d'onglets, probablement avec des wrappers |     `React.ReactNode`     |        |
| value    | Valeur de l'onglet actif                                                |         `string`          |        |
| onUpdate | Gestionnaire de mise à jour de l'onglet                                  | `(value: string) => void` |        |

## TabList

Composant qui sert de conteneur pour un ensemble d'`onglets`

### Taille

Pour contrôler la taille des `onglets`, utilisez la propriété `size`. La taille par défaut est `m`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Propriétés

`TabList` accepte toutes les propriétés valides d'un élément `div` en plus de celles-ci :

| Nom             | Description                                                                                             |               Type               | Défaut  |
| :-------------- | :------------------------------------------------------------------------------------------------------ | :------------------------------: | :-----: |
| children        | Liste des onglets, probablement avec des wrappers                                                       |        `React.ReactNode`         |         |
| value           | Valeur de l'onglet actif                                                                               |             `string`             |         |
| onUpdate        | Gestionnaire de mise à jour de l'onglet                                                                  |    `(value: string) => void`     |         |
| className       | Classe CSS de l'élément                                                                                 |             `string`             |         |
| activateOnFocus | Active l'onglet au focus. Utilisez ceci uniquement si le contenu du panneau peut être affiché immédiatement |            `boolean`             | `false` |
| size            | Taille de l'élément                                                                                     |        `"m"` `"l"` `"xl"`        |  `"m"`  |
| contentOverflow | Comment gérer les éléments qui ne rentrent pas horizontalement (retour à la ligne, défilement ou menu **Plus**) | `"wrap"` `"scroll"` `"collapse"` | `"wrap"` |
| moreLabel       | Libellé du déclencheur de dépassement de collapse lorsque l'onglet actif est visible dans la liste        |        `React.ReactNode`         | `"More"` |
| qa              | Attribut HTML `data-qa`, utilisé dans les tests                                                         |             `string`             |         |

## Tab

Ce composant est utilisé pour rendre les éléments d'onglet.

### Icône

Utilisé si vous avez besoin d'afficher une icône pour un élément d'onglet.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### États

L'élément d'onglet a un indicateur désactivé.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Compteur

Utilisé si vous avez besoin d'afficher un nombre pour un élément d'onglets.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### Libellé

Utilisé si vous avez besoin d'afficher un libellé pour un élément d'onglets.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Dépassement de contenu

Utilisé si vous avez besoin de réduire les éléments d'onglets.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Propriétés

`Tab` accepte toutes les propriétés valides d'un élément `button` ou `a` en plus de celles-ci :

| Nom      | Description                             |        Type         | Défaut |
| :------- | :-------------------------------------- | :-----------------: | :----: |
| value    | Valeur de l'onglet                     |      `string`       |        |
| title    | Titre de l'onglet                      |      `string`       |        |
| icon     | Icône affichée au début               |  `React.ReactNode`  |        |
| counter  | Contenu affiché à la fin               |  `number` `string`  |        |
| href     | Une URL vers laquelle lier.             |      `string `      |        |
| label    | `<Label>` affiché à la fin              |  `React.ReactNode`  |        |
| disabled | État inactif                          |      `boolean`      |        |
| component| Remplace le composant racine          | `React.ElementType` |        |
| children | Contenu de l'onglet                   |  `React.ReactNode`  |        |
| qa       | Attribut HTML `data-qa`, utilisé dans les tests |      `string`       |        |

## TabPanel

Est un élément conteneur pour le contenu associé à un onglet

### Propriétés

`TabPanel` accepte toutes les propriétés valides d'un élément `div` en plus de celles-ci :

| Nom      | Description            |       Type        | Défaut |
| :------- | :--------------------- | :---------------: | :----: |
| children | Contenu du panneau     | `React.ReactNode` |        |
| value    | Valeur de l'onglet actif |     `string`      |        |
| qa       | Attribut HTML `data-qa`, utilisé dans les tests |     `string`      |        |

## API CSS

| Nom                         | Description            |
| :--------------------------- | :--------------------- |
| `--g-tabs-border-width`      | Largeur de la bordure des onglets |
| `--g-tabs-item-height`       | Hauteur de l'élément onglet |
| `--g-tabs-item-border-width` | Largeur de la bordure de l'élément onglet |
| `--g-tabs-item-gap`          | Distance entre les onglets |