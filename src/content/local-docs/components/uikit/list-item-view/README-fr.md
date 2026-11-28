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

`dragHandle` remplit l'emplacement le plus externe d'une ligne, devant le décalage, le basculeur de repliement et la coche, de sorte que la poignée d'une liste réorganisable reste sur le bord de la ligne, quoi qu'il en soit du reste du contenu de la ligne. La vue ne sait rien du glisser-déposer : les props de la bibliothèque résident sur l'élément que vous passez.

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
| component       | L'élément sur lequel la ligne est rendu                                                     |          `React.ElementType`           | `'div'` |
| componentProps  | Les props de cet élément                                                                    |   `React.ComponentProps<component>`    |         |
| isContainer     | Rend les enfants tels quels, sans la mise en page des slots                                |               `boolean`                | `false` |
| className       | La classe CSS de la ligne                                                                   |                `string`                |         |
| style           | Le style en ligne de la ligne                                                               |         `React.CSSProperties`          |         |

Les autres props atteignent l'élément racine de la ligne : `role`, `id`, `tabIndex`, `aria-*`, `data-*`, les gestionnaires du pointeur et du clavier.

GRAVITY_TRANSLATION_BLOCK_1_END

## `DataGrid`

Le composant `DataGrid` est un tableau de données hautement personnalisable et performant.

GRAVITY_TRANSLATION_BLOCK_2_END

### Props

| Nom de la prop | Type | Description | Valeur par défaut |
|---|---|---|---|
| `columnCount` | `number` | Le nombre de colonnes dans le tableau. | `undefined` |
| `columns` | `Array<Column>` | Un tableau d'objets décrivant les colonnes. Chaque objet colonne doit avoir une propriété `id` (string) et une propriété `renderCell` (function). | `[]` |
| `components` | `DataGridComponents` | Un objet permettant de remplacer les composants par défaut du tableau. | `undefined` |
| `density` | `'compact' | 'standard' | 'comfortable'` | La densité du tableau. Affecte la hauteur des lignes et l'espacement. | `'standard'` |
| `editMode` | `'cell' | 'row'` | Le mode d'édition du tableau. | `'cell'` |
| `error` | `Error` | Une erreur à afficher dans le tableau. | `undefined` |
| `filterModel` | `FilterModel` | Le modèle de filtrage actuel. | `undefined` |
| `hideFooter` | `boolean` | Si `true`, le pied de page du tableau sera masqué. | `false` |
| `hideHeader` | `boolean` | Si `true`, l'en-tête du tableau sera masqué. | `false` |
| `initialState` | `DataGridInitialState` | L'état initial du tableau. | `undefined` |
| `isRowSelectable` | `(row: GridRowModel) => boolean` | Une fonction qui détermine si une ligne est sélectionnable. | `() => true` |
| `localeText` | `Partial<DataGridLocaleText>` | Permet de personnaliser le texte affiché dans le tableau. | `undefined` |
| `loading` | `boolean` | Si `true`, une indication de chargement sera affichée. | `false` |
| `onCellClick` | `(params: GridCellParams, event: MuiEvent<React.MouseEvent>) => void` | Callback déclenché lorsqu'une cellule est cliquée. | `undefined` |
| `onRowClick` | `(params: GridRowParams, event: MuiEvent<React.MouseEvent>) => void` | Callback déclenché lorsqu'une ligne est cliquée. | `undefined` |
| `onRowSelectionModelChange` | `(model: GridRowSelectionModel) => void` | Callback déclenché lorsque le modèle de sélection de lignes change. | `undefined` |
| `pageSize` | `number` | Le nombre de lignes par page. | `100` |
| `rows` | `Array<GridRowData>` | Un tableau d'objets représentant les lignes du tableau. Chaque objet ligne doit avoir une propriété `id` (string ou number). | `[]` |
| `rowSelectionModel` | `GridRowSelectionModel` | Le modèle de sélection de lignes actuel. | `undefined` |
| `sortingMode` | `'client' | 'server'` | Le mode de tri du tableau. | `'client'` |
| `sx` | `SxProps<Theme>` | Permet de surcharger les styles du composant. | `undefined` |
| `apiRef` | `React.MutableRefObject<DataGridAPI>` | Une référence mutable vers l'API du tableau. | `undefined` |

GRAVITY_TRANSLATION_BLOCK_3_END

Les autres props atteignent l'élément racine de la ligne : `role`, `id`, `tabIndex`, `aria-*`, `data-*`, les gestionnaires du pointeur et du clavier.

GRAVITY_TRANSLATION_BLOCK_4_END

### `DataGridPro`

Le composant `DataGridPro` est une version améliorée du `DataGrid` avec des fonctionnalités supplémentaires telles que le tri, le filtrage, la sélection de lignes et la pagination côté serveur.

GRAVITY_TRANSLATION_BLOCK_5_END

### Props

Le composant `DataGridPro` hérite de toutes les props du composant `DataGrid` et ajoute les props suivantes :

| Nom de la prop | Type | Description | Valeur par défaut |
|---|---|---|---|
| `autoPageSize` | `boolean` | Si `true`, la taille de la page s'ajustera automatiquement à la hauteur du conteneur. | `false` |
| `checkboxSelection` | `boolean` | Si `true`, une colonne de cases à cocher sera ajoutée pour la sélection de lignes. | `false` |
| `disableRowSelectionOnClick` | `boolean` | Si `true`, la sélection de lignes ne sera pas déclenchée par un clic sur une ligne. | `false` |
| `filterDebounceMs` | `number` | Le délai en millisecondes avant que le filtrage ne soit appliqué après une modification. | `300` |
| `getDetailPanelContent` | `(params: GridRowParams) => React.ReactNode` | Une fonction qui retourne le contenu du panneau de détails pour une ligne donnée. | `undefined` |
| `getDetailPanelHeight` | `(params: GridRowParams) => number` | Une fonction qui retourne la hauteur du panneau de détails pour une ligne donnée. | `() => 300` |
| `keepNonExistentRows` | `boolean` | Si `true`, les lignes qui n'existent pas dans le tableau seront conservées. | `false` |
| `logContext` | `string` | Un contexte à inclure dans les logs. | `undefined` |
| `onFilterModelChange` | `(model: GridFilterModel) => void` | Callback déclenché lorsque le modèle de filtrage change. | `undefined` |
| `onRowOrderChange` | `(model: GridRowOrder) => void` | Callback déclenché lorsque l'ordre des lignes change. | `undefined` |
| `onSortModelChange` | `(model: GridSortModel) => void` | Callback déclenché lorsque le modèle de tri change. | `undefined` |
| `rowOrder` | `GridRowOrder` | L'ordre des lignes. | `undefined` |
| `rowReordering` | `boolean` | Si `true`, la réorganisation des lignes sera activée. | `false` |
| `sortModel` | `GridSortModel` | Le modèle de tri actuel. | `undefined` |

GRAVITY_TRANSLATION_BLOCK_6_END

Les autres props atteignent l'élément racine de la ligne : `role`, `id`, `tabIndex`, `aria-*`, `data-*`, les gestionnaires du pointeur et du clavier.

GRAVITY_TRANSLATION_BLOCK_7_END

### `DataGridPremium`

Le composant `DataGridPremium` est la version la plus complète du `DataGrid` avec des fonctionnalités avancées telles que l'exportation, la mise en cache des données, la virtualisation des lignes et des colonnes, et bien plus encore.

GRAVITY_TRANSLATION_BLOCK_8_END

### Props

Le composant `DataGridPremium` hérite de toutes les props des composants `DataGrid` et `DataGridPro` et ajoute les props suivantes :

| Nom de la prop | Type | Description | Valeur par défaut |
|---|---|---|---|
| `autoHeight` | `boolean` | Si `true`, la hauteur du tableau s'ajustera automatiquement au contenu. | `false` |
| `csvOptions` | `GridCsvExportOptions` | Options pour l'exportation CSV. | `undefined` |
| `disableExport` | `boolean` | Si `true`, l'exportation sera désactivée. | `false` |
| `disableVirtualization` | `boolean` | Si `true`, la virtualisation sera désactivée. | `false` |
| `excelOptions` | `GridExcelExportOptions` | Options pour l'exportation Excel. | `undefined` |
| `initialHiddenColumnVisibilityModel` | `GridColumnVisibilityModel` | Le modèle de visibilité des colonnes initial. | `undefined` |
| `initialState` | `DataGridPremiumInitialState` | L'état initial du tableau. | `undefined` |
| `onColumnVisibilityModelChange` | `(model: GridColumnVisibilityModel) => void` | Callback déclenché lorsque le modèle de visibilité des colonnes change. | `undefined` |
| `onExport` | `(data: GridExportData) => void` | Callback déclenché lors de l'exportation des données. | `undefined` |
| `rowHeight` | `number` | La hauteur de chaque ligne. | `52` |
| `rowGroupingModel` | `GridRowGroupingModel` | Le modèle de regroupement des lignes. | `undefined` |
| `treeData` | `boolean` | Si `true`, le tableau sera affiché en mode arborescence. | `false` |
| `treeDataCollapseIcon` | `React.ReactNode` | L'icône à utiliser pour réduire un nœud dans le mode arborescence. | `undefined` |
| `treeDataExpandIcon` | `React.ReactNode` | L'icône à utiliser pour développer un nœud dans le mode arborescence. | `undefined` |
| `treeDataState` | `GridTreeDataState` | L'état du mode arborescence. | `undefined` |
| `columnVisibilityModel` | `GridColumnVisibilityModel` | Le modèle de visibilité des colonnes actuel. | `undefined` |

GRAVITY_TRANSLATION_BLOCK_9_END

Les autres props atteignent l'élément racine de la ligne : `role`, `id`, `tabIndex`, `aria-*`, `data-*`, les gestionnaires du pointeur et du clavier.

GRAVITY_TRANSLATION_BLOCK_10_END

## `DataGridColumn`

Le type `DataGridColumn` définit la structure d'une colonne dans le `DataGrid`.

GRAVITY_TRANSLATION_BLOCK_11_END

```typescript
interface DataGridColumn {
  /**
   * L'identifiant unique de la colonne.
   */
  id: string;
  /**
   * La fonction de rendu de la cellule pour cette colonne.
   * Elle reçoit les `GridCellParams` et doit retourner un `ReactNode`.
   */
  renderCell: (params: GridCellParams) => React.ReactNode;
  /**
   * Le titre de la colonne.
   */
  headerName?: string;
  /**
   * La largeur de la colonne.
   */
  width?: number;
  /**
   * Si la colonne est triable.
   */
  sortable?: boolean;
  /**
   * Si la colonne est filtrable.
   */
  filterable?: boolean;
  /**
   * Si la colonne est sélectionnable.
   */
  hideable?: boolean;
  /**
   * Si la colonne est cachée.
   */
  field?: string;
  /**
   * Si la colonne est fixe.
   */
  fixed?: boolean;
}
```

GRAVITY_TRANSLATION_BLOCK_12_END

## `GridCellParams`

Le type `GridCellParams` contient les informations nécessaires pour rendre une cellule dans le `DataGrid`.

GRAVITY_TRANSLATION_BLOCK_13_END

```typescript
interface GridCellParams {
  /**
   * L'identifiant de la colonne.
   */
  colDef: DataGridColumn;
  /**
   * La valeur de la cellule.
   */
  value: any;
  /**
   * L'identifiant de la ligne.
   */
  id: GridRowId;
  /**
   * L'index de la ligne.
   */
  rowIndex: number;
  /**
   * L'objet ligne complet.
   */
  row: GridRowModel;
  /**
   * L'objet tableau complet.
   */
  api: DataGridAPI;
  /**
   * L'événement du pointeur.
   */
  event: React.MouseEvent | React.KeyboardEvent;
}
```

GRAVITY_TRANSLATION_BLOCK_14_END

## `GridRowParams`

Le type `GridRowParams` contient les informations nécessaires pour rendre une ligne dans le `DataGrid`.

GRAVITY_TRANSLATION_BLOCK_15_END

```typescript
interface GridRowParams {
  /**
   * L'identifiant de la ligne.
   */
  id: GridRowId;
  /**
   * L'index de la ligne.
   */
  index: number;
  /**
   * L'objet ligne complet.
   */
  row: GridRowModel;
  /**
   * L'objet tableau complet.
   */
  api: DataGridAPI;
  /**
   * L'événement du pointeur.
   */
  event: React.MouseEvent | React.KeyboardEvent;
}
```

GRAVITY_TRANSLATION_BLOCK_16_END

## `DataGridAPI`

Le type `DataGridAPI` fournit un accès à l'API du `DataGrid`, permettant de contrôler le tableau par programmation.

GRAVITY_TRANSLATION_BLOCK_17_END

```typescript
interface DataGridAPI {
  /**
   * Met à jour une cellule spécifique.
   */
  updateCell: (cell: GridCellParams) => void;
  /**
   * Met à jour une ligne spécifique.
   */
  updateRow: (row: GridRowModel) => void;
  /**
   * Ajoute une nouvelle ligne.
   */
  addRow: (row: GridRowModel) => void;
  /**
   * Supprime une ligne.
   */
  deleteRow: (id: GridRowId) => void;
  /**
   * Définit le modèle de tri.
   */
  setSortModel: (model: GridSortModel) => void;
  /**
   * Définit le modèle de filtrage.
   */
  setFilterModel: (model: GridFilterModel) => void;
  /**
   * Définit le modèle de sélection de lignes.
   */
  setRowSelectionModel: (model: GridRowSelectionModel) => void;
  /**
   * Définit la page actuelle.
   */
  setPage: (page: number) => void;
  /**
   * Définit la taille de la page.
   */
  setPageSize: (pageSize: number) => void;
  /**
   * Définit la visibilité d'une colonne.
   */
  setColumnVisibility: (field: string, visible: boolean) => void;
  /**
   * Définit le modèle de visibilité des colonnes.
   */
  setColumnVisibilityModel: (model: GridColumnVisibilityModel) => void;
  /**
   * Obtient les données du tableau au format CSV.
   */
  exportDataAsCsv: (options?: GridCsvExportOptions) => GridExportFileData;
  /**
   * Obtient les données du tableau au format Excel.
   */
  exportDataAsExcel: (options?: GridExcelExportOptions) => GridExportFileData;
}
```

GRAVITY_TRANSLATION_BLOCK_18_END

## `DataGridComponents`

Le type `DataGridComponents` permet de remplacer les composants par défaut du `DataGrid`.

GRAVITY_TRANSLATION_BLOCK_19_END

```typescript
interface DataGridComponents {
  /**
   * Le composant de l'en-tête du tableau.
   */
  Header?: React.ComponentType<any>;
  /**
   * Le composant de la ligne du tableau.
   */
  Row?: React.ComponentType<any>;
  /**
   * Le composant de la cellule du tableau.
   */
  Cell?: React.ComponentType<any>;
  /**
   * Le composant du pied de page du tableau.
   */
  Footer?: React.ComponentType<any>;
  /**
   * Le composant de la pagination.
   */
  Pagination?: React.ComponentType<any>;
  /**
   * Le composant de l'indicateur de chargement.
   */
  LoadingOverlay?: React.ComponentType<any>;
  /**
   * Le composant de l'overlay d'erreur.
   */
  ErrorOverlay?: React.ComponentType<any>;
  /**
   * Le composant du panneau de détails.
   */
  DetailPanel?: React.ComponentType<any>;
}
```

GRAVITY_TRANSLATION_BLOCK_20_END

## `DataGridInitialState`

Le type `DataGridInitialState` permet de définir l'état initial du `DataGrid`.

GRAVITY_TRANSLATION_BLOCK_21_END

```typescript
interface DataGridInitialState {
  /**
   * L'état initial du tri.
   */
  sorting?: GridSortModel;
  /**
   * L'état initial du filtrage.
   */
  filter?: GridFilterModel;
  /**
   * L'état initial de la sélection de lignes.
   */
  rowSelection?: GridRowSelectionModel;
  /**
   * L'état initial de la pagination.
   */
  pagination?: {
    page: number;
    pageSize: number;
  };
  /**
   * L'état initial de la visibilité des colonnes.
   */
  columns?: {
    hiddenColumnVisibilityModel?: GridColumnVisibilityModel;
  };
  /**
   * L'état initial du regroupement des lignes.
   */
  rowGrouping?: GridRowGroupingModel;
  /**
   * L'état initial du mode arborescence.
   */
  treeData?: GridTreeDataState;
}
```

GRAVITY_TRANSLATION_BLOCK_22_END

## `DataGridLocaleText`

Le type `DataGridLocaleText` permet de personnaliser le texte affiché dans le `DataGrid`.

GRAVITY_TRANSLATION_BLOCK_23_END

```typescript
interface DataGridLocaleText {
  /**
   * Le texte du bouton "Annuler".
   */
  cancelButtonLabel: string;
  /**
   * Le texte du bouton "Confirmer".
   */
  confirmButtonLabel: string;
  /**
   * Le texte affiché lorsqu'il n'y a pas de lignes.
   */
  noRowsLabel: string;
  /**
   * Le texte affiché lorsqu'il n'y a pas de résultats de recherche.
   */
  noResultsFoundLabel: string;
  /**
   * Le texte affiché lorsqu'une colonne est cachée.
   */
  columnHiddenTooltip: string;
  /**
   * Le texte affiché pour le bouton de colonne.
   */
  columnMenuButton: string;
  /**
   * Le texte affiché pour le bouton de tri ascendant.
   */
  columnSortingAscending: string;
  /**
   * Le texte affiché pour le bouton de tri descendant.
   */
  columnSortingDescending: string;
  /**
   * Le texte affiché pour le bouton de réinitialisation du tri.
   */
  columnSortingClear: string;
  /**
   * Le texte affiché pour le bouton de filtre.
   */
  filterButton: string;
  /**
   * Le texte affiché pour le bouton de fermeture du filtre.
   */
  filterPanelClose: string;
  /**
   * Le texte affiché pour le bouton d'ajout de filtre.
   */
  filterPanelAddFilter: string;
  /**
   * Le texte affiché pour le bouton d'opérateur "et".
   */
  filterPanelOperatorAnd: string;
  /**
   * Le texte affiché pour le bouton d'opérateur "ou".
   */
  filterPanelOperatorOr: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterPanelDeleteIconLabel: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterPanelShowSearch: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterPanelHideSearch: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterPanelColumns: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterPanelOperators: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterPanelValue: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterPanelAND: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterPanelOR: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterValuePlaceholder: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterOperatorPlaceholder: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterLogicPlaceholder: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterBooleanOperator: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateOperator: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDatePlaceholder: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateToday: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateTomorrow: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateYesterday: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateCreateDate: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateLastWeek: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateLastMonth: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateLastYear: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateNextWeek: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateNextMonth: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateNextYear: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateThisWeek: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateThisMonth: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateThisYear: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateAfter: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateOnOrAfter: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateBefore: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateOnOrBefore: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateOn: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateNotInRange: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInDateRange: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDate: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateYesterdayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateLastYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNextYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisWeekMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisMonthMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateThisYearMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateCreateDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateRangeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateNotInMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateOnOrBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateBeforeMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateAfterMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTodayMessage: string;
  /**
   * Le texte affiché pour le bouton de suppression de filtre.
   */
  filterDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateInvalidDateTomorrowMessage: string;