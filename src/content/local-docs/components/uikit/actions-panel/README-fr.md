Utilisez un `ActionsPanel` pour afficher plusieurs boutons en ligne.
Lorsqu'il n'y a pas assez d'espace, les boutons qui ne rentrent pas seront ajoutés à un menu déroulant.

## Exemple

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Icônes d'action

Utilisez les propriétés `Button` ou `DropdownMenu` pour définir les icônes.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Note

Utilisez la propriété `renderNote` pour afficher une note.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Groupes dans le menu déroulant

Utilisez `action.dropdown.group` pour regrouper les actions dans le menu déroulant.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Sous-menu d'action et menu déroulant imbriqué

Voir l'exemple `actions` ci-dessous et la documentation du composant `DropdownMenu`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Propriétés

| Nom          | Description                                               |          Type           | Défaut |
| :----------- | :-------------------------------------------------------- | :---------------------: | :----: |
| actions      | Tableau d'actions                                         |  `ActionsPanelItem[]`   |        |
| onClose      | Gestionnaire de clic optionnel pour le bouton de fermeture |      `() => void`       |        |
| renderNote   | Render-prop optionnel pour afficher le contenu d'une note | `() => React.ReactNode` |        |
| className    | Attribut `class` HTML optionnel                           |        `string`         |        |
| noteClassName| Attribut `class` HTML optionnel                           |        `string`         |        |
| maxRowActions| Nombre maximum d'actions par ligne                        |        `number`         |  `4`   |

## ActionsPanelItem :

| Nom      | Description                                   |                    Type                    | Défaut |
| :------- | :-------------------------------------------- | :----------------------------------------: | :----: |
| id       | Identifiant unique de l'action                |                  `string`                  |        |
| dropdown | Paramètres pour l'action déroulante dans le menu | `{item: DropdownMenuItem; group?: string}` |        |
| button   | Paramètres pour l'action de bouton            |           `{props: ButtonProps}`           |        |
| collapsed| Si vrai, alors l'élément est toujours dans le menu |                 `boolean`                  |        |
GRAVITY_TRANSLATION_BLOCK_10_END