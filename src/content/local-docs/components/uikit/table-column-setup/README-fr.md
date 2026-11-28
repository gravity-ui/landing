Le composant `TableColumnSetup` fournit une interface utilisateur pour configurer la visibilité et l'ordre des colonnes d'un tableau. Il affiche un bouton qui ouvre une fenêtre contextuelle avec une liste des colonnes disponibles, permettant aux utilisateurs de montrer/masquer les colonnes et éventuellement de les réorganiser par glisser-déposer.

```tsx
import {TableColumnSetup} from '@gravity-ui/uikit/legacy';
```

Ce composant est obsolète : les nouvelles fonctionnalités se trouvent dans [`@gravity-ui/table`](https://github.com/gravity-ui/table), consultez le [guide de migration vers la v8](../../../../docs/migration-to-v8.md#table-and-tablecolumnsetup). Comme tout dans `@gravity-ui/uikit/legacy`, il nécessite les dépendances optionnelles peer installées à côté du package : `@hello-pangea/dnd`, `react-window` et `react-virtualized-auto-sizer`. Le point d'entrée les charge toutes, quelle que soit l'importation que vous en faites.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Colonnes triables

Activez la fonctionnalité de glisser-déposer pour permettre aux utilisateurs de réorganiser les colonnes en définissant la propriété `sortable` sur `true`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Modes d'application

Contrôlez quand les modifications sont appliquées en utilisant la propriété `hideApplyButton` :

- `true` - Les modifications sont appliquées immédiatement lorsque l'utilisateur bascule les colonnes
- `false` - Les modifications sont appliquées uniquement lorsque l'utilisateur clique sur le bouton Appliquer

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Affichage du statut

Affichez le nombre de colonnes sélectionnées dans le bouton du sélecteur en activant la propriété `showStatus`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Sélecteur personnalisé

Personnalisez le bouton de déclenchement à l'aide de la propriété `renderSwitcher`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Propriétés

| Nom            | Description                                                     |                            Type                             | Défaut |
| :------------- | :-------------------------------------------------------------- | :---------------------------------------------------------: | :-----: |
| items          | Tableau d'éléments de configuration de colonne                  |                  `TableColumnSetupItem[]`                   |         |
| onUpdate       | Callback déclenché lorsque la configuration de la colonne change |          `(items: TableColumnSetupItem[]) => void`          |         |
| disabled       | Désactive le bouton du sélecteur                                |                          `boolean`                          | `false` |
| sortable       | Active le tri des colonnes par glisser-déposer                  |                          `boolean`                          | `true`  |
| hideApplyButton | Quand appliquer les modifications : immédiatement ou manuellement via le bouton Appliquer |                          `boolean`                          | `false` |
| showStatus     | Affiche le nombre de colonnes sélectionnées/total dans le bouton du sélecteur |                          `boolean`                          | `false` |
| popupWidth     | Largeur de la fenêtre contextuelle                              |                      `number \| 'fit'`                      |         |
| popupPlacement | Placement de la fenêtre contextuelle par rapport au déclencheur |    [`PopupPlacement`](../../Popup/README.md#properties)     |         |
| renderSwitcher | Fonction de rendu personnalisée pour le bouton du sélecteur     | `(props: SwitcherProps) => React.ReactElement \| undefined` |         |
| switcher       | **Obsolète.** Utilisez `renderSwitcher` à la place             |              `React.ReactElement \| undefined`              |         |
| getItemTitle   | Fonction pour obtenir le titre de l'élément                     |      `(item: TableColumnSetupItem) => React.ReactNode`      |         |
| className      | Classe CSS personnalisée pour l'élément racine                 |                          `string`                           |         |

### TableColumnSetupItem

| Nom     | Description                                       |        Type         | Défaut |
| :------ | :------------------------------------------------ | :-----------------: | :-----: |
| id       | Identifiant unique pour la colonne                  |      `string`       |         |
| title    | Titre affiché pour la colonne                      |  `React.ReactNode`  |         |
| selected | Indique si la colonne est actuellement visible           |      `boolean`      |         |
| required | Indique si la colonne est requise (ne peut pas être masquée) |      `boolean`      |         |
| sticky   | Positionnement fixe pour la colonne                 | `'left' \| 'right'` |         |

### SwitcherProps

| Nom      | Description                            |                   Type                    |
| :-------- | :------------------------------------- | :---------------------------------------: |
| onClick   | Gestionnaire d'événement de clic pour le sélecteur   |  `React.MouseEventHandler<HTMLElement>`   |
| onKeyDown | Gestionnaire d'événement de touche enfoncée pour le sélecteur | `React.KeyboardEventHandler<HTMLElement>` |