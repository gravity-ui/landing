Utilisez un `ActionsPanel` pour afficher plusieurs boutons côte à côte.
Lorsqu'il n'y a pas assez d'espace, les boutons qui ne rentrent pas seront ajoutés à un menu de dépassement.
Le dépassement utilise `Menu` ; `menu.item` accepte `MenuItemProps`.

## Exemple

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Icônes d'action

Utilisez les propriétés `Button` ou `menu.item` pour définir les icônes.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Remarque

Utilisez la propriété `renderNote` pour afficher une note.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Groupes dans le menu de dépassement

Utilisez `action.menu.group` pour regrouper les actions dans le menu de dépassement.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Sous-menu d'action et menu imbriqué

Passez un `Menu` comme enfant direct de `menu.item.children` pour ajouter un sous-menu. Un bouton d'action visible utilise le même sous-menu.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Propriétés

| Nom          | Description                                                              |          Type           | Défaut |
| :----------- | :----------------------------------------------------------------------- | :---------------------: | :----: |
| actions      | Tableau d'actions                                                        |  `ActionsPanelItem[]`   |        |
| onClose      | Gestionnaire de clic optionnel pour le bouton de fermeture                 |      `() => void`       |        |
| renderNote   | Render-prop optionnel pour afficher le contenu d'une note                | `() => React.ReactNode` |        |
| className    | Attribut `class` HTML optionnel                                          |        `string`         |        |
| noteClassName| Attribut `class` HTML optionnel                                          |        `string`         |        |
| maxRowActions| Nombre maximum d'actions par ligne                                       |        `number`         |   `4`  |

## ActionsPanelItem

| Nom      | Description                                        |                  Type                   | Défaut |
| :------- | :------------------------------------------------- | :-------------------------------------: | :----: |
| id       | Identifiant unique de l'action                     |                `string`                 |        |
| menu     | Paramètres pour l'action dans le menu de dépassement | `{item: MenuItemProps; group?: string}` |        |
| button   | Paramètres pour l'action de bouton                 |         `{props: ButtonProps}`          |        |
| collapsed| Si vrai, alors l'élément est toujours dans le menu de dépassement |                `boolean`                |        |