Une `Table` permet de sélectionner et de trier des lignes, ainsi que d'effectuer des actions sur une ligne.

```jsx
import {Table} from '@gravity-ui/uikit/legacy';
```

Ce composant est obsolète : les nouvelles fonctionnalités se trouvent sur [`@gravity-ui/table`](https://github.com/gravity-ui/table), consultez le
[guide de migration vers v8](../../../../docs/migration-to-v8.md#table-and-tablecolumnsetup). Comme tout dans `@gravity-ui/uikit/legacy`, il nécessite les dépendances pair optionnelles
`@hello-pangea/dnd`, `react-window` et `react-virtualized-auto-sizer` installées en plus du package : le point d'entrée
charge toutes ces dépendances, quelle que soit celle que vous importez.

GRAVITY_TRANSLATION_BLOCK_1_END

## Propriétés

| Nom                             | Description                                                                                                                                                                            |                                        Type                                        |   Défaut   |
| :------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------: | :---------: |
| data                             | Données                                                                                                                                                                                |                                      `any[]`                                       |             |
| columns                          | Paramètres des colonnes                                                                                                                                                                |                               `TableColumnConfig[]`                                |             |
| verticalAlign                    | Alignement vertical du contenu                                                                                                                                                         |                                 `"top"` `"middle"`                                 |             |
| getRowDescriptor                 | Gestionnaire pour obtenir le descripteur de ligne                                                                                                                                      |                   `(item: any, index: number) => DescriptorType`                   |             |
| getRowId                         | ID de ligne utilisé pour la sélection et le tri des lignes. Si vous sautez une ligne, son ID sera la valeur du champ dans les données de la ligne portant le même nom que l'ID de la colonne. |                 `string` `((item: any, index: number) => string)`                  |             |
| getRowClassNames                 | Classes CSS des lignes                                                                                                                                                                 |                      `(item: any, index: number) => string[]`                      |             |
| isRowDisabled                    | Condition pour désactiver les colonnes                                                                                                                                                 |                      `(item: any, index: number) => boolean`                       |             |
| onRowClick                       | Gestionnaire de clic sur la ligne                                                                                                                                                      | `(item: any, index: number, event: React.MouseEvent<HTMLTableRowElement>) => void` |             |
| onRowMouseEnter                  | Gestionnaire de survol de souris sur la ligne                                                                                                                                          | `(item: any, index: number, event: React.MouseEvent<HTMLTableRowElement>) => void` |             |
| onRowMouseLeave                  | Gestionnaire de sortie de souris de la ligne                                                                                                                                           | `(item: any, index: number, event: React.MouseEvent<HTMLTableRowElement>) => void` |             |
| emptyMessage                     | Retourne un message si les données sont manquantes                                                                                                                                     |                                      `string`                                      | `"No data"` |
| className                        | Classe CSS de la table                                                                                                                                                                 |                                      `string`                                      |             |
| edgePadding                      | Ajoute un padding horizontal pour les cellules de bordure                                                                                                                              |                                     `boolean`                                      |             |
| stickyHorizontalScroll           | Ajoute un défilement horizontal fixe dans une table. Remarque : Une table ne peut pas avoir une hauteur fixe et un défilement fixe en même temps. Un défilement fixe ne fonctionnera pas si la table a un dépassement. |                                     `boolean`                                      |   `false`   |
| stickyHorizontalScrollBreakpoint | Seuil que le bloc parent doit atteindre avant de rendre le défilement fixe. Ceci est utile dans la console, par exemple lorsque la barre `groupActions` chevauche le défilement. |                                      `number`                                      |     `0`     |

### DescriptorType

| Nom        | Description                                 |    Type    | Défaut |
| :---------- | :------------------------------------------ | :--------: | :-----: |
| id          | ID de ligne utilisé lors de la sélection et du tri des lignes |  `string`  |         |
| disabled    | Condition pour désactiver les colonnes             | `boolean`  |         |
| interactive | Afficher le survol de la ligne                              | `boolean`  |         |
| classNames  | Classes CSS de la ligne                             | `string[]` |         |

### TableColumnConfig

| Nom         | Description                                                                                                        |                            Type                            |                         Défaut                         |
| :---------- | :----------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------: | :-----------------------------------------------------: |
| id          | ID de la colonne                                                                                                   |                          `string`                          |                                                         |
| name        | Nom de la colonne (en-tête)                                                                                        |             `string` `(() => React.ReactNode)`             | ID de la colonne                                        |
| className   | Classe CSS qui sera ajoutée à toutes les cellules de la colonne                                                    |                          `string`                          |                                                         |
| placeholder | Texte de substitution lorsqu'il n'y a pas de données dans une cellule                                                | `string` `((item: any, index: number) => React.ReactNode)` |                      `— (&mdash;)`                      |
| template    | Contenu de la cellule. Si vous sautez une ligne, le contenu de la cellule sera la valeur du champ portant le même nom que cette ligne. | `string` `((item: any, index: number) => React.ReactNode)` | Valeur du champ dont le nom est égal à l'ID de la colonne |
| align       | Alignement du contenu                                                                                              |                `"start"` `"center"` `"end"`                |                                                         |
| sticky      | Colonne fixe                                                                                                       |                     `"start"` `"end"`                      |                                                         |
| primary     | Identifie une colonne comme principale par opposition aux autres                                                   |                         `boolean`                          |                                                         |
| width       | Largeur du contenu de la colonne en pixels                                                                         |                     `number` `string`                      |                                                         |
| meta        | _displayName_: nom à afficher dans le widget de configuration du tableau ; autres données diverses, y compris les paramètres HOC |                   `Record<string, any>`                    |                                                         |

## Utilisation de `Table` avec le HOC `withTableActions`

Ce HOC ajoute une colonne spéciale avec des actions aux colonnes de la table.

### Propriétés

| Nom             | Description                                    |                           Type                           |
| :-------------- | :--------------------------------------------- | :------------------------------------------------------: |
| getRowActions    | Tableau de configurations d'actions pour chaque ligne           |   `(item: any, index: number) => TableActionConfig[]`    |
| renderRowActions | Fonction de rendu pour la cellule d'actions               | `(props: {item: any; index: number}) => React.ReactNode` |
| rowActionsSize   | Taille du bouton d'action et des éléments du menu contextuel |                 `"s"` `"m"` `"l"` `"xl"`                 |
| rowActionsIcon   | Icône personnalisée pour la cellule d'actions                   |                    `React.ReactNode`                     |

### API CSS

| Nom                                     | Description                                                                             |
| :--------------------------------------- | :-------------------------------------------------------------------------------------- |
| `--g-table-action-popup-menu-max-height` | Hauteur maximale du menu contextuel d'actions. Par défaut : `200px`. Utilisez `none` pour supprimer la limite. |

### TableActionConfig

```ts
type TableActionConfig = TableAction | TableActionGroup;
```

#### TableAction

| Nom     | Description                                                              |                 Type                 |  Défaut   |
| :------- | :----------------------------------------------------------------------- | :----------------------------------: | :--------: |
| text     | Texte                                                                     |               `string`               |            |
| handler  | Gestionnaire de clic                                                            | `(item: any, index: number) => void` |            |
| disabled | Action désactivée                                                          |              `boolean`               |            |
| href     | Un élément de menu avec cette propriété devient un lien vers l'emplacement spécifié. |               `string`               |            |
| target   | Identique à l'attribut `target` de la balise `<a>`.                         |               `string`               |            |
| rel      | Identique à l'attribut `rel` de la balise `<a>`.                            |               `string`               |            |
| theme    | Thème                                                                    |        `"normal"` `"danger"`         | `"normal"` |
| icon     | Icône à afficher à côté du texte                                         |          `React.ReactNode`           |            |

#### TableActionGroup

| Nom  | Description         |         Type          |
| :---- | :------------------ | :-------------------: |
| title | En-tête du groupe d'actions |       `string`        |
| items | Éléments du groupe d'actions  | `TableActionConfig[]` |

### Exemple

```jsx
import {Table, withTableActions} from '@gravity-ui/uikit/legacy';

const MyTable = withTableActions(Table);
const data = [
  {id: 1, text: 'Hello'},
  {id: 2, text: 'World'},
];
const columns = [{id: 'id'}, {id: 'text'}];
const getRowActions = () => {
  return [
    {
      text: 'Print',
      handler: () => {},
    },
    {
      text: 'Remove',
      handler: () => {},
      theme: 'danger',
    },
  ];
};

const table = <MyTable data={data} columns={columns} getRowActions={getRowActions} />;
```

```jsx
import {Table, withTableActions, RenderRowActionsProps} from '@gravity-ui/uikit/legacy';

const MyTable = withTableActions(Table);
type Item = {id: number; text: string};

const data: Item[] = [
  {id: 1, text: 'Hello'},
  {id: 2, text: 'World'},
];
const columns = [{id: 'id'}, {id: 'text'}];

const RowAction = ({item}: RenderRowActionsProps<Item>) => {
    return <React.Fragment>{`Action for - ${item.text}`}</React.Fragment>;
};
```

const table = (
  <MyTable
    data={data}
    columns={columns}
    renderRowActions={RowAction}
  />
);
```

## Utilisation de `Table` avec le HOC `withTableCopy`

Ce HOC permet de copier le contenu d'une cellule ou tout autre texte.

### ColumnMeta

| Nom  | Description                                                              |                                            Type                                             |
| :--- | :----------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------: |
| copy | Texte à copier. Si la valeur est `true`, la copie du contenu de la cellule est autorisée. | `boolean` `((item: any, index: number) => string)` `((item: any, index: number) => number)` |

### Exemple

```jsx
import {Table, withTableCopy} from '@gravity-ui/uikit/legacy';

const MyTable = withTableCopy(Table);
const data = [
  {id: 1, text: 'Hello'},
  {id: 2, text: 'World'},
];
const columns = [
  {id: 'id', meta: {copy: ({id}) => `ID #${id}`}},
  {id: 'text', meta: {copy: true}},
];

const table = <MyTable data={data} columns={columns} />;
```

## Utilisation de `Table` avec le HOC `withTableSelection`

Ce HOC permet la sélection des lignes du tableau.

### Propriétés

| Nom              | Description                 |           Type            |
| :--------------- | :-------------------------- | :-----------------------: |
| selectedIds      | Lignes sélectionnées        |        `string[]`         |
| onSelectionChange | Gestionnaire de changement de sélection de ligne | `(ids: string[]) => void` |

### Exemple

```jsx
import {Table, withTableSelection} from '@gravity-ui/uikit/legacy';

const MyTable = withTableSelection(Table);
const data = [
  {id: 1, text: 'Hello'},
  {id: 2, text: 'World'},
];
const columns = [{id: 'id'}, {id: 'text'}];
const getRowId = 'id';

function SelectionTable() {
  const [selectedIds, setSelectedIds] = React.useState([1]);

  return (
    <MyTable
      data={data}
      columns={columns}
      getRowId={getRowId}
      selectedIds={selectedIds}
      onSelectionChange={setSelectedIds}
    />
  );
}
```

## Utilisation de `Table` avec le HOC `withTableSettings`

Ce HOC active les fonctionnalités pour les paramètres des colonnes du tableau. Vous pouvez l'utiliser de deux manières :

```jsx
import {Table, withTableSettings} from '@gravity-ui/uikit/legacy';

// Aucune option passée
const MyTable1 = withTableSettings(Table);
// ou avec des options
const MyTable1 = withTableSettings({sortable: false})(Table);
```

### Options

| Nom       | Description                                  |       Type       | Défaut |
| :-------- | :------------------------------------------- | :--------------: | :-----: |
| width     | Largeur du popup des paramètres              | `number` `"fit"` |         |
| sortable  | Active ou désactive les éléments de tri des paramètres |    `boolean`     | `true`  |
| filterable | Active ou désactive les éléments de filtre des paramètres |    `boolean`     | `false` |

### ColumnMeta

| Nom              | Description                                                               |   Type    | Défaut |
| :--------------- | :------------------------------------------------------------------------ | :-------: | :-----: |
| selectedByDefault | Active ou désactive la sélection d'une colonne si elle est absente des paramètres | `boolean` | `true`  |
| selectedAlways    | Rend la colonne toujours sélectionnée. Vous ne pouvez pas changer sa visibilité. | `boolean` | `false` |

### Propriétés

| Nom                       | Description                                                  |                           Type                           |
| :------------------------ | :----------------------------------------------------------- | :------------------------------------------------------: |
| settingsPopupWidth        | Largeur du pop-up `TableColumnSetup`                         |                     `number` `"fit"`                     |
| settings                  | Paramètres actuels                                           |                   `TableSettingsData`                    |
| updateSettings            | Gestionnaire de mise à jour des paramètres                   |       `(data: TableSettingsData) => Promise<void>`       |
| renderControls            | Permet le rendu d'actions personnalisées                     |                     `RenderControls`                     |
| settingsFilterPlaceholder | Texte qui apparaît dans le contrôle lorsqu'aucune valeur de recherche n'est définie |                         `string`                         |
| settingsFilterEmptyMessage | Texte qui apparaît lorsqu'aucun élément n'est trouvé         |                         `string`                         |
| filterSettings            | Fonction pour filtrer les éléments                           | `(value: string, item: TableColumnSetupItem) => boolean` |

### TableSettingsData

```ts
type TableSettingsData = Array<{
  id: string;
  isSelected?: boolean;
}>;
```

### RenderControls

```ts
type RenderControls = (params: {
  DefaultApplyButton: React.ComponentType;
  onApply: () => void;
}) => React.ReactNode;
```

### Exemple

```jsx
import {Table, withTableSettings} from '@gravity-ui/uikit/legacy';

const MyTable = withTableSettings({width: 100, sortable: false})(Table);
const data = [
  {id: 1, text: 'Hello'},
  {id: 2, text: 'World'},
];
const columns = [{id: 'id'}, {id: 'text'}];
const initialSettings = [
  {id: 'id', isSelected: false},
  {id: 'text', isSelected: true},
];

function SelectionTable() {
  const [settings, setSettings] = React.useState(initialSettings);

  return (
    <MyTable
      data={data}
      columns={columns}
      settings={settings}
      updateSettings={(settings) => {
        setSettings(settings);
        return Promise.resolve();
      }}
      renderControls={({DefaultApplyButton, onApply}) => (
        <Flex rowGap="spacing-1" direction="column">
          <Button
            view="outlined-warning"
            onClick={() => {
              onApply();
              setSettings(initialSettings);
            }}
          >
            Reset
          </Button>
          <DefaultApplyButton />
        </Flex>
      )}
    />
  );
}
```

## Utilisation de `Table` avec le HOC `withTableSorting`

Ce HOC active le tri des colonnes.

### ColumnMeta

| Nom              | Description                                                                                                                                                    |                       Type                       | Défaut |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------: | :----: |
| defaultSortOrder | Définit l'ordre de tri principal                                                                                                                               |                 `"asc"` `"desc"`                 | `asc`  |
| sort             | Fonction de tri. Elle doit retourner une valeur pour le tri dans l'ordre croissant. Si défini à `true`, les valeurs des cellules sont comparées et triées par ordre croissant. | `boolean` `((itemA: any, itemB: any) => number)` |        |

### Propriétés

| Nom               | Description                                                                                |                 Type                  |
| :----------------- | :----------------------------------------------------------------------------------------- | :-----------------------------------: |
| defaultSortState   | État de tri par défaut pour un composant non contrôlé                                      |           `TableSortState`            |
| sortState          | État de tri                                                                                |           `TableSortState`            |
| onSortStateChange  | Gestionnaire de changement d'état de tri                                                   | `(sortState: TableSortState) => void` |
| disableDataSorting | Désactive le tri des données. La valeur par défaut est `true` si `sortState` et `onSortStateChange` sont passés |               `boolean`               |

GRAVITY_TRANSLATION_BLOCK_1_END

Si les propriétés `sortState` et `onSortStateChange` sont manquantes, l'état de tri est stocké dans le composant lui-même.

### TableSortState

```ts
type TableSortState = Array<{
  column: string;
  order: 'asc' | 'desc';
}>;
```

GRAVITY_TRANSLATION_BLOCK_2_END

### Exemple

```jsx
import {Table, withTableSorting} from '@gravity-ui/uikit/legacy';

const MyTable = withTableSorting(Table);
const data = [
  {id: 1, text: 'Hello', date: '2016-10-25'},
  {id: 2, text: 'World', date: '2020-08-15'},
];
const columns = [
  {id: 'id', meta: {sort: true}},
  {
    id: 'text',
    meta: {defaultSortOrder: 'desc', sort: (a, b) => Date.parse(a.date) - Date.parse(b.date)},
  },
];

const table = <MyTable data={data} columns={columns} />;
```