`ListItemView` est la vue d'une ligne de liste : elle agence le contenu d'une ligne — l'icône, la
description, le contenu final — et dessine les états que son propriétaire lui transmet.

```tsx
import {ListItemView} from '@gravity-ui/uikit';
```

Le [List](../List/README.md) dessine ses lignes avec cette vue et l'expose comme `List.ItemView`, avec
uniquement les props de la mise en page. Utilisez `ListItemView` lui-même pour construire une ligne en dehors d'une liste — une
ligne d'un menu personnalisé, un élément d'un arbre — ou lorsqu'une ligne a besoin des props d'imbrication et de repliement qu'une liste ne transmet pas.

- [Utilisation de base](#basic-usage)
- [Tailles](#sizes)
- [Slots](#slots)
- [États](#states)
- [Sélection](#selection)
- [Imbrication et repliement](#nesting-and-collapsing)
- [Poignée de glisser-déposer](#drag-handle)
- [Autre élément](#another-element)
- [API CSS](#css-api)
- [Propriétés](#properties)

## Utilisation de base

La vue est un élément de type bloc aussi large que son conteneur : la largeur d'une ligne est la largeur de la liste
qui l'entoure.

```tsx
import {Envelope} from '@gravity-ui/icons';
import {Icon, ListItemView} from '@gravity-ui/uikit';

function Mailbox() {
  return (
    <ListItemView startContent={<Icon data={Envelope} size={16} />} onClick={openMailbox}>
      Boîte de réception
    </ListItemView>
  );
}
```

<ListItemViewExample />

La vue n'a pas de rôle ARIA propre : une ligne obtient son rôle de la liste à laquelle elle appartient (`option` dans une
liste déroulante, `row` dans une grille), et `role` ainsi que le reste des props DOM atteignent l'élément racine tel qu'il est transmis. À l'intérieur d'une `<List>`, les props proviennent de `getItemProps()`.

## Tailles

La prop `size` définit la densité d'une ligne — `s`, `m`, `l` ou `xl`. Elle détermine la hauteur minimale,
les marges intérieures, le rayon des coins et la taille des contrôles de la ligne ; `xl` passe également le
texte à `body-2`. Les hauteurs correspondent à celles des contrôles — 24, 28, 36 et 44px — et, comme pour les contrôles, les marges intérieures du bloc proviennent de la hauteur : une seule ligne remplit exactement la ligne, chaque ligne suivante ajoute sa hauteur de ligne. Les marges intérieures augmentent avec la taille — 8, 12, 16 et 16px. Une ligne sans `size` a la hauteur, les marges intérieures et le rayon de `m` avec les contrôles de la vue de base ; à l'intérieur d'une `<List>`, chaque ligne obtient la taille de la liste.

<ListItemViewSizes />

## Slots

Le contenu d'une ligne est ses enfants, et le reste est dans les props : `startContent` pour une icône de début ou un avatar, `description` pour la deuxième ligne, `endContent` pour ce qui termine la ligne — une étiquette, un raccourci, une action.

<ListItemViewSlots />

```tsx
<ListItemView
  startContent={<Icon data={Star} size={16} />}
  description="Marqué par vous"
  endContent={<Label>3</Label>}
>
  Favoris
</ListItemView>
```

## États

Une ligne affiche quatre états, et chacun d'eux est une prop — la vue ne conserve aucun état propre :

- `active` — le curseur du clavier : une liste le déplace avec les touches fléchées ;
- `hovered` — la surbrillance au survol, forcée par les props. Sans la prop, la ligne se met en surbrillance au `:hover` ; `hovered={false}` supprime cela, ce qu'une liste fait pendant un glisser-déposer en cours ;
- `disabled` — la ligne est estompée et cesse de réagir au pointeur, y compris à son propre `onClick` ;
- `selected` — voir [Sélection](#selection).

<ListItemViewStates />

## Sélection

`selectionStyle` indique comment une ligne sélectionnée est affichée : `highlight` teinte la ligne, `check` réserve un emplacement pour une coche devant le contenu, `none` n'affiche rien pour indiquer la sélection — pour une ligne qui l'indique dans son propre contenu. La prop n'a pas de valeur par défaut : une ligne `selected` sans elle ressemble à n'importe quelle autre. À l'intérieur d'une `<List>`, la liste choisit elle-même le style — `check` pour une sélection multiple, `highlight` pour une seule.

<ListItemViewSelection />

L'emplacement de la coche est réservé pour chaque ligne d'une liste, sélectionnée ou non, afin que le contenu des lignes ne saute pas lors du changement de sélection.

## Imbrication et repliement

`nestedLevel` décale une ligne en fonction de la profondeur d'un arbre, et `collapsible` donne à une ligne le basculeur de sa branche : `collapsed` est son état et `onCollapseChange` son gestionnaire. Un clic sur la ligne elle-même bascule également la branche, sauf si la ligne a son propre `onClick`.

Le basculeur est une décoration : il porte `aria-hidden` et est hors de l'ordre de tabulation, de sorte que la ligne elle-même est le seul moyen d'accéder à la branche. L'`aria-expanded` de la ligne vous appartient.

<ListItemViewNesting />

## Poignée de glisser-déposer

`dragHandle` remplit l'emplacement le plus externe d'une ligne, devant le décalage, le basculeur de repliement et la coche, de sorte que la poignée d'une liste réorganisable reste sur le bord de la ligne, quoi qu'elle affiche d'autre. La vue ne sait rien du glisser-déposer : les props de la bibliothèque résident sur l'élément que vous passez.

<ListItemViewDragHandle />

```tsx
<ListItemView
  dragHandle={
    <span {...dragHandleProps} aria-label="Glisser pour réorganiser">
      <Icon data={Grip} size={12} />
    </span>
  }
>
  {track.title}
</ListItemView>
```

## Autre élément

`component` rend la ligne comme un autre élément — un lien, un bouton — et `componentProps` sont les props de cet élément : `href`, `type`, les gestionnaires. Avec `isContainer`, la vue ne met en page rien et vous laisse le balisage de la ligne, en conservant les états et l'élément.

<ListItemViewCustomElement />

## API CSS

| Nom                                         | Description                          |
| :------------------------------------------ | :----------------------------------- |
| `--g-list-item-view-min-height`             | La hauteur minimale d'une ligne      |
| `--g-list-item-view-border-radius`          | Le rayon des coins                   |
| `--g-list-item-view-padding-inline`         | Le padding en ligne                  |
| `--g-list-item-view-padding-block`          | Le padding en bloc                   |
| `--g-list-item-view-line-height`            | La hauteur de ligne du contenu       |
| `--g-list-item-view-controls-gap`           | L'espacement entre les slots         |
| `--g-list-item-view-controls-size`          | La taille des contrôles d'une ligne  |
| `--g-list-item-view-controls-border-radius` | Le rayon des coins des contrôles     |
| `--g-list-item-view-controls-icon-size`     | La taille des icônes du contrôle     |
| `--g-list-item-view-spacer-size`            | L'indentation d'un niveau d'imbrication |
| `--g-list-item-view-background-color`       | L'arrière-plan d'une ligne           |
| `--g-list-item-view-background-color-hover` | L'arrière-plan d'une ligne survolée  |
| `--g-list-item-view-text-color`             | La couleur du contenu                |
| `--g-list-item-view-description-color`      | La couleur de la description         |

Les variables s'appliquent à une ligne de toute taille : `size` ne fournit que la géométrie par défaut — la hauteur minimale, le rayon, les paddings et les contrôles — pour une variable qui n'est pas définie. Le padding de bloc par défaut suit la hauteur minimale et la hauteur de ligne ; `--g-list-item-view-padding-block` le fixe. L'en-tête de section d'une liste (`List.SectionHeader`) suit la même hauteur minimale et le même padding en ligne, les variables incluses, de sorte que les lignes et les en-têtes d'une liste conservent un bord.

## Propriétés

| Nom             | Description                                                                                 |                  Type                  | Défaut |
| :-------------- | :------------------------------------------------------------------------------------------ | :------------------------------------: | :-----: |
| children        | Le contenu de la ligne                                                                      |           `React.ReactNode`            |         |
| size            | La densité de la ligne                                                                      |        `'s'` `'m'` `'l'` `'xl'`        |         |
| startContent    | Le contenu de début : une icône, un avatar                                                  |           `React.ReactNode`            |         |
| description     | La deuxième ligne de la ligne                                                                |           `React.ReactNode`            |         |
| endContent      | Le contenu de fin : une étiquette, un raccourci, une action                                 |           `React.ReactNode`            |         |
| dragHandle      | Le contenu du slot le plus externe : la poignée de déplacement d'une ligne réorganisable    |           `React.ReactNode`            |         |
| active          | Le curseur du clavier sur la ligne                                                          |               `boolean`                |         |
| hovered         | La surbrillance au survol, forcée par les props (`false` supprime le `:hover` de la ligne) |               `boolean`                |         |
| disabled        | Si la ligne est désactivée                                                                  |               `boolean`                |         |
| selected        | Si la ligne est sélectionnée                                                                |               `boolean`                |         |
| selectionStyle  | Comment une ligne sélectionnée est affichée                                                 |    `'highlight'` `'check'` `'none'`    |         |
| collapsible     | Si la ligne a le basculeur de sa branche                                                    |               `boolean`                |         |
| collapsed       | Si la branche de la ligne est repliée                                                       |               `boolean`                |         |
| onCollapseChange | Le gestionnaire du basculeur (un clic sur la ligne sans `onClick` bascule également la branche) |     `(collapsed: boolean) => void`     |         |
| nestedLevel     | La profondeur de la ligne dans un arbre : l'indentation devant elle                         |                `number`                |   `0`   |
| onClick         | Le gestionnaire d'un clic sur la ligne (un clic sur un descendant focusable n'en est pas un) | `React.MouseEventHandler<HTMLElement>` |         |
| component       | L'élément rendu comme ligne                                                                 |          `React.ElementType`           | `'div'` |
| componentProps  | Les props de cet élément                                                                    |   `React.ComponentProps<component>`    |         |
| isContainer     | Rend les enfants tels quels, sans la mise en page des slots                                |               `boolean`                | `false` |
| className       | La classe CSS de la ligne                                                                   |                `string`                |         |
| style           | Le style en ligne de la ligne                                                               |         `React.CSSProperties`          |         |

Les autres props atteignent l'élément racine de la ligne : `role`, `id`, `tabIndex`, `aria-*`, `data-*`, les gestionnaires du pointeur et du clavier.

GRAVITY_TRANSLATION_BLOCK_1_END

## `Table`

Le composant `Table` est utilisé pour afficher des données tabulaires.

GRAVITY_TRANSLATION_BLOCK_2_END

### Props

Le composant `Table` accepte les props suivantes :

| Nom de la prop | Type | Description | Valeur par défaut |
|---|---|---|---|
| `children` | `React.ReactNode` | Le contenu de la table, généralement des composants `TableHead`, `TableBody`, `TableRow`, `TableCell`, etc. | `undefined` |
| `className` | `string` | Classes CSS supplémentaires à appliquer à l'élément `<table>`. | `''` |
| `sx` | `object` | Styles personnalisés à appliquer à l'élément `<table>`. | `undefined` |

GRAVITY_TRANSLATION_BLOCK_3_END

Les autres props atteignent l'élément racine de la ligne : `role`, `id`, `tabIndex`, `aria-*`, `data-*`, les gestionnaires du pointeur et du clavier.

GRAVITY_TRANSLATION_BLOCK_4_END

## `TableBody`

Le composant `TableBody` est utilisé pour contenir les lignes de données d'un tableau.

GRAVITY_TRANSLATION_BLOCK_5_END

### Props

Le composant `TableBody` accepte les props suivantes :

| Nom de la prop | Type | Description | Valeur par défaut |
|---|---|---|---|
| `children` | `React.ReactNode` | Le contenu du corps du tableau, généralement des composants `TableRow`. | `undefined` |
| `className` | `string` | Classes CSS supplémentaires à appliquer à l'élément `<tbody>`. | `''` |
| `sx` | `object` | Styles personnalisés à appliquer à l'élément `<tbody>`. | `undefined` |

GRAVITY_TRANSLATION_BLOCK_6_END

Les autres props atteignent l'élément racine de la ligne : `role`, `id`, `tabIndex`, `aria-*`, `data-*`, les gestionnaires du pointeur et du clavier.

GRAVITY_TRANSLATION_BLOCK_7_END

## `TableCell`

Le composant `TableCell` est utilisé pour représenter une cellule de données dans un tableau.

GRAVITY_TRANSLATION_BLOCK_8_END

### Props

Le composant `TableCell` accepte les props suivantes :

| Nom de la prop | Type | Description | Valeur par défaut |
|---|---|---|---|
| `children` | `React.ReactNode` | Le contenu de la cellule. | `undefined` |
| `className` | `string` | Classes CSS supplémentaires à appliquer à l'élément `<td>` ou `<th>`. | `''` |
| `component` | `React.ElementType` | Permet de remplacer l'élément DOM rendu. Utile pour les cellules d'en-tête. | `'td'` |
| `scope` | `'col' | 'row' | 'colgroup' | 'rowgroup'` | Spécifie l'étendue des cellules d'en-tête. | `undefined` |
| `sx` | `object` | Styles personnalisés à appliquer à l'élément `<td>` ou `<th>`. | `undefined` |

GRAVITY_TRANSLATION_BLOCK_9_END

Les autres props atteignent l'élément racine de la ligne : `role`, `id`, `tabIndex`, `aria-*`, `data-*`, les gestionnaires du pointeur et du clavier.

GRAVITY_TRANSLATION_BLOCK_10_END

## `TableContainer`

Le composant `TableContainer` est utilisé pour envelopper un tableau et fournir des fonctionnalités de défilement.

GRAVITY_TRANSLATION_BLOCK_11_END

### Props

Le composant `TableContainer` accepte les props suivantes :

| Nom de la prop | Type | Description | Valeur par défaut |
|---|---|---|---|
| `children` | `React.ReactNode` | Le contenu du conteneur, généralement un composant `Table`. | `undefined` |
| `className` | `string` | Classes CSS supplémentaires à appliquer à l'élément conteneur. | `''` |
| `sx` | `object` | Styles personnalisés à appliquer à l'élément conteneur. | `undefined` |

GRAVITY_TRANSLATION_BLOCK_12_END

Les autres props atteignent l'élément racine de la ligne : `role`, `id`, `tabIndex`, `aria-*`, `data-*`, les gestionnaires du pointeur et du clavier.

GRAVITY_TRANSLATION_BLOCK_13_END

## `TableHead`

Le composant `TableHead` est utilisé pour contenir les en-têtes d'un tableau.

GRAVITY_TRANSLATION_BLOCK_14_END

### Props

Le composant `TableHead` accepte les props suivantes :

| Nom de la prop | Type | Description | Valeur par défaut |
|---|---|---|---|
| `children` | `React.ReactNode` | Le contenu de l'en-tête du tableau, généralement des composants `TableRow` contenant des `TableCell` avec `component="th"`. | `undefined` |
| `className` | `string` | Classes CSS supplémentaires à appliquer à l'élément `<thead>`. | `''` |
| `sx` | `object` | Styles personnalisés à appliquer à l'élément `<thead>`. | `undefined` |

GRAVITY_TRANSLATION_BLOCK_15_END

Les autres props atteignent l'élément racine de la ligne : `role`, `id`, `tabIndex`, `aria-*`, `data-*`, les gestionnaires du pointeur et du clavier.

GRAVITY_TRANSLATION_BLOCK_16_END

## `TablePagination`

Le composant `TablePagination` est utilisé pour ajouter la pagination à un tableau.

GRAVITY_TRANSLATION_BLOCK_17_END

### Props

Le composant `TablePagination` accepte les props suivantes :

| Nom de la prop | Type | Description | Valeur par défaut |
|---|---|---|---|
| `ActionsComponent` | `React.ElementType` | Composant personnalisé pour les contrôles de pagination (précédent, suivant, etc.). | `TablePaginationActions` |
| `backIconButtonProps` | `object` | Props à passer au bouton "précédent". | `undefined` |
| `count` | `number` | Nombre total d'éléments. | `0` |
| `currentPage` | `number` | L'index de la page actuelle (base 0). | `0` |
| `getItemAriaLabel` | `(type: 'first' | 'last' | 'next' | 'previous') => string` | Fonction de rappel pour générer l'étiquette ARIA pour chaque bouton d'action. | `(type) => \`Go to ${type} page\`` |
| `labelDisplayedRows` | `(paginationInfo: { from: number; to: number; count: number; }) => React.ReactNode` | Fonction de rappel pour générer le texte affiché indiquant les lignes affichées. | `({ from, to, count }) => \`${from}-${to} of ${count}\`` |
| `labelRowsPerPage` | `React.ReactNode` | Texte à afficher à côté du sélecteur de lignes par page. | `'Rows per page:'` |
| `nextIconButtonProps` | `object` | Props à passer au bouton "suivant". | `undefined` |
| `onPageChange` | `(event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void` | Fonction de rappel appelée lorsque la page change. | `() => {}` |
| `onRowsPerPageChange` | `(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void` | Fonction de rappel appelée lorsque le nombre de lignes par page change. | `() => {}` |
| `page` | `number` | L'index de la page actuelle (base 0). | `0` |
| `rowsPerPage` | `number` | Nombre d'éléments par page. | `10` |
| `rowsPerPageOptions` | `Array<{ label: React.ReactNode; value: number; }>` | Options pour le nombre de lignes par page. | `[10, 25, 100]` |
| `sx` | `object` | Styles personnalisés à appliquer à l'élément racine. | `undefined` |
| `slotProps` | `object` | Props à passer aux slots internes. | `undefined` |
| `slots` | `object` | Slots personnalisés pour remplacer les composants internes. | `undefined` |
| `sx` | `object` | Styles personnalisés à appliquer à l'élément racine. | `undefined` |

GRAVITY_TRANSLATION_BLOCK_18_END

Les autres props atteignent l'élément racine de la ligne : `role`, `id`, `tabIndex`, `aria-*`, `data-*`, les gestionnaires du pointeur et du clavier.

GRAVITY_TRANSLATION_BLOCK_19_END

## `TableRow`

Le composant `TableRow` est utilisé pour représenter une seule ligne dans un tableau.

GRAVITY_TRANSLATION_BLOCK_20_END

### Props

Le composant `TableRow` accepte les props suivantes :

| Nom de la prop | Type | Description | Valeur par défaut |
|---|---|---|---|
| `children` | `React.ReactNode` | Le contenu de la ligne, généralement des composants `TableCell`. | `undefined` |
| `className` | `string` | Classes CSS supplémentaires à appliquer à l'élément `<tr>`. | `''` |
| `sx` | `object` | Styles personnalisés à appliquer à l'élément `<tr>`. | `undefined` |

GRAVITY_TRANSLATION_BLOCK_21_END

Les autres props atteignent l'élément racine de la ligne : `role`, `id`, `tabIndex`, `aria-*`, `data-*`, les gestionnaires du pointeur et du clavier.

GRAVITY_TRANSLATION_BLOCK_22_END

## `useTablePagination`

Le hook `useTablePagination` fournit la logique pour gérer la pagination d'un tableau.

GRAVITY_TRANSLATION_BLOCK_23_END

### Arguments

Le hook `useTablePagination` accepte les arguments suivants :

| Nom de l'argument | Type | Description | Valeur par défaut |
|---|---|---|---|
| `count` | `number` | Nombre total d'éléments. | `0` |
| `page` | `number` | L'index de la page actuelle (base 0). | `0` |
| `rowsPerPage` | `number` | Nombre d'éléments par page. | `10` |
| `onChangePage` | `(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void` | Fonction de rappel appelée lorsque la page change. | `() => {}` |
| `onChangeRowsPerPage` | `(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void` | Fonction de rappel appelée lorsque le nombre de lignes par page change. | `() => {}` |

GRAVITY_TRANSLATION_BLOCK_24_END

### Valeur de retour

Le hook `useTablePagination` retourne un objet avec les propriétés suivantes :

| Nom de la propriété | Type | Description |
|---|---|---|
| `backButtonDisabled` | `boolean` | Indique si le bouton "précédent" doit être désactivé. |
| `nextButtonDisabled` | `boolean` | Indique si le bouton "suivant" doit être désactivé. |
| `page` | `number` | L'index de la page actuelle (base 0). |
| `rowsPerPage` | `number` | Nombre d'éléments par page. |
| `handleChangePage` | `(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void` | Gestionnaire d'événements pour le changement de page. |
| `handleChangeRowsPerPage` | `(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void` | Gestionnaire d'événements pour le changement de lignes par page. |

GRAVITY_TRANSLATION_BLOCK_25_END