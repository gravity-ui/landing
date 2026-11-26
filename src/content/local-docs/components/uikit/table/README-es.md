Una `Table` permite seleccionar y ordenar filas, así como realizar acciones sobre una fila.

```jsx
import {Table} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

## Propiedades

| Nombre                             | Descripción                                                                                                                                                                            |                                        Tipo                                        |   Predeterminado   |
| :------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------: | :----------------: |
| data                             | Datos                                                                                                                                                                                  |                                      `any[]`                                       |                    |
| columns                          | Configuración de columnas                                                                                                                                                              |                               `TableColumnConfig[]`                                |                    |
| verticalAlign                    | Alineación vertical del contenido                                                                                                                                                      |                                 `"top"` `"middle"`                                 |                    |
| getRowDescriptor                 | Manejador para obtener el descriptor de fila                                                                                                                                           |                   `(item: any, index: number) => DescriptorType`                   |                    |
| getRowId                         | ID de fila utilizado al seleccionar y ordenar filas. Si omites una fila, su ID será el valor del campo en los datos de la fila con el mismo nombre que el ID de la columna.             |                 `string` `((item: any, index: number) => string)`                  |                    |
| getRowClassNames                 | Clases CSS de fila                                                                                                                                                                     |                      `(item: any, index: number) => string[]`                      |                    |
| isRowDisabled                    | Condición para deshabilitar columnas                                                                                                                                                   |                      `(item: any, index: number) => boolean`                       |                    |
| onRowClick                       | Manejador de clic en fila                                                                                                                                                              | `(item: any, index: number, event: React.MouseEvent<HTMLTableRowElement>) => void` |                    |
| onRowMouseEnter                  | Manejador de mouseenter en fila                                                                                                                                                        | `(item: any, index: number, event: React.MouseEvent<HTMLTableRowElement>) => void` |                    |
| onRowMouseLeave                  | Manejador de mouseleave en fila                                                                                                                                                        | `(item: any, index: number, event: React.MouseEvent<HTMLTableRowElement>) => void` |                    |
| emptyMessage                     | Devolver un mensaje si faltan datos                                                                                                                                                    |                                      `string`                                      |     `"No data"`     |
| className                        | Clase CSS de la tabla                                                                                                                                                                  |                                      `string`                                      |                    |
| edgePadding                      | Agrega relleno horizontal para celdas de borde                                                                                                                                         |                                     `boolean`                                      |                    |
| stickyHorizontalScroll           | Agrega un desplazamiento horizontal fijo en una tabla. Nota: Una tabla no puede tener una altura fija y un desplazamiento fijo al mismo tiempo. Un desplazamiento fijo no funcionará si la tabla tiene desbordamiento. |                                     `boolean`                                      |       `false`       |
| stickyHorizontalScrollBreakpoint | Umbral que el bloque padre debe alcanzar antes de hacer que un desplazamiento sea fijo. Esto es útil en la consola, como cuando la barra `groupActions` se superpone al desplazamiento. |                                      `number`                                      |         `0`         |

### DescriptorType

| Nombre        | Descripción                                 |    Tipo    | Por defecto |
| :------------ | :------------------------------------------ | :--------: | :---------: |
| id          | ID de fila utilizado al seleccionar y ordenar filas |  `string`  |             |
| disabled    | Condición para deshabilitar columnas             | `boolean`  |             |
| interactive | Mostrar resaltado al pasar el ratón sobre la fila                              | `boolean`  |             |
| classNames  | Clases CSS de la fila                             | `string[]` |             |

### TableColumnConfig

| Nombre        | Descripción                                                                                                        |                            Tipo                            |                         Por defecto                         |
| :------------ | :----------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------: | :-----------------------------------------------------: |
| id          | ID de la columna                                                                                                   |                          `string`                          |                                                         |
| name        | Nombre de la columna (encabezado)                                                                                  |             `string` `(() => React.ReactNode)`             |                        id de la columna                        |
| className   | Clase CSS que se añadirá a todas las celdas de la columna                                                         |                          `string`                          |                                                         |
| placeholder | Marcador de posición cuando no hay datos en una celda                                                              | `string` `((item: any, index: number) => React.ReactNode)` |                      `— (&mdash;)`                      |
| template    | Contenido de la celda. Si omites una fila, el contenido de la celda será el valor del campo con el mismo nombre que esta fila. | `string` `((item: any, index: number) => React.ReactNode)` | Valor del campo con el nombre igual al ID de la columna |
| align       | Alineación del contenido                                                                                           |                `"start"` `"center"` `"end"`                |                                                         |
| sticky      | Columna fija                                                                                                       |                     `"start"` `"end"`                      |                                                         |
| primary     | Identifica una columna como primaria en contraposición a otras                                                     |                         `boolean`                          |                                                         |
| width       | Ancho del contenido de la columna en píxeles                                                                       |                     `number` `string`                      |                                                         |
| meta        | _displayName_: nombre que se mostrará en el widget de Configuración de Tabla; otros datos misceláneos, incluida la configuración de HOC |                   `Record<string, any>`                    |                                                         |

## Usando `Table` con el HOC `withTableActions`

Este HOC agrega una columna especial con acciones a las columnas de la tabla.

### Propiedades

| Nombre             | Descripción                                    |                           Tipo                           |
| :----------------- | :--------------------------------------------- | :------------------------------------------------------: |
| getRowActions    | Array de configuraciones de acciones para cada fila           |   `(item: any, index: number) => TableActionConfig[]`    |
| renderRowActions | Función de renderizado para la Celda de Acciones               | `(props: {item: any; index: number}) => React.ReactNode` |
| rowActionsSize   | Tamaño del botón de acción y los elementos del menú emergente |                 `"s"` `"m"` `"l"` `"xl"`                 |
| rowActionsIcon   | Icono personalizado para la Celda de Acciones                   |                    `React.ReactNode`                     |

### API de CSS

| Nombre                                     | Descripción                                                                             |
| :--------------------------------------- | :-------------------------------------------------------------------------------------- |
| `--g-table-action-popup-menu-max-height` | Altura máxima del menú emergente de acciones. Predeterminado: `200px`. Use `none` para eliminar el límite. |

### TableActionConfig

```ts
type TableActionConfig = TableAction | TableActionGroup;
```

#### TableAction

| Nombre     | Descripción                                                              |                 Type                 |  Predeterminado   |
| :------- | :----------------------------------------------------------------------- | :----------------------------------: | :--------: |
| text     | Texto                                                                     |               `string`               |            |
| handler  | Manejador de clics                                                            | `(item: any, index: number) => void` |            |
| disabled | Acción deshabilitada                                                          |              `boolean`               |            |
| href     | Un elemento de menú con esta propiedad se convierte en un enlace a la ubicación especificada. |               `string`               |            |
| target   | Igual que el atributo `target` de la etiqueta `<a>`.                         |               `string`               |            |
| rel      | Igual que el atributo `rel` de la etiqueta `<a>`.                            |               `string`               |            |
| theme    | Tema                                                                    |        `"normal"` `"danger"`         | `"normal"` |
| icon     | Icono para mostrar junto al texto                                         |          `React.ReactNode`           |            |

#### TableActionGroup

| Nombre  | Descripción         |         Type          |
| :---- | :------------------ | :-------------------: |
| title | Encabezado del grupo de acciones |       `string`        |
| items | Elementos del grupo de acciones  | `TableActionConfig[]` |

### Ejemplo

```jsx
import {Table, withTableActions} from '@gravity-ui/uikit';

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
import {Table, withTableActions, RenderRowActionsProps} from '@gravity-ui/uikit';

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

## Usando `Table` con el HOC `withTableCopy`

Este HOC permite copiar el contenido de una celda o cualquier otro texto.

### ColumnMeta

| Nombre | Descripción                                                           |                                            Tipo                                             |
| :----- | :-------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------: |
| copy | Texto para copiar. Si el valor es `true`, se permite copiar el contenido de la celda. | `boolean` `((item: any, index: number) => string)` `((item: any, index: number) => number)` |

### Ejemplo

```jsx
import {Table, withTableCopy} from '@gravity-ui/uikit';

const MyTable = withTableCopy(Table);
const data = [
  {id: 1, text: 'Hola'},
  {id: 2, text: 'Mundo'},
];
const columns = [
  {id: 'id', meta: {copy: ({id}) => `ID #${id}`}},
  {id: 'text', meta: {copy: true}},
];

const table = <MyTable data={data} columns={columns} />;
```

GRAVITY_TRANSLATION_BLOCK_1_END

## Usando `Table` con el HOC `withTableSelection`

Este HOC permite seleccionar filas de la tabla.

### Propiedades

| Nombre              | Descripción                 |           Type            |
| :---------------- | :-------------------------- | :-----------------------: |
| selectedIds       | Filas seleccionadas               |        `string[]`         |
| onSelectionChange | Manejador de cambio de selección de fila | `(ids: string[]) => void` |

### Ejemplo

```jsx
import {Table, withTableSelection} from '@gravity-ui/uikit';

const MyTable = withTableSelection(Table);
const data = [
  {id: 1, text: 'Hola'},
  {id: 2, text: 'Mundo'},
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

GRAVITY_TRANSLATION_BLOCK_2_END

## Usando `Table` con el HOC `withTableSettings`

Este HOC habilita funciones para la configuración de columnas de la tabla. Puedes usarlo de dos maneras:

```jsx
import {Table, withTableSettings} from './withTableSettings';

// Sin opciones pasadas
const MyTable1 = withTableSettings(Table);
// o con opciones
const MyTable1 = withTableSettings({sortable: false})(Table);
```

### Opciones

| Nombre       | Descripción                                  |       Type       | Default |
| :----------- | :------------------------------------------- | :--------------: | :-----: |
| width      | Ancho del popup de configuración                         | `number` `"fit"` |         |
| sortable   | Habilita o deshabilita los elementos de configuración de ordenación   |    `boolean`     | `true`  |
| filterable | Habilita o deshabilita los elementos de configuración de filtrado |    `boolean`     | `false` |

### ColumnMeta

| Nombre              | Descripción                                                               |   Type    | Default |
| :---------------- | :------------------------------------------------------------------------ | :-------: | :-----: |
| selectedByDefault | Habilita o deshabilita la selección de una columna si falta en la configuración | `boolean` | `true`  |
| selectedAlways    | Hace que la columna siempre esté seleccionada. No puedes cambiar su visibilidad.       | `boolean` | `false` |

### Propiedades
GRAVITY_TRANSLATION_BLOCK_3_END

| Nombre                       | Descripción                                                  |                           Tipo                           |
| :------------------------- | :----------------------------------------------------------- | :------------------------------------------------------: |
| settingsPopupWidth         | Ancho del pop-up de `TableColumnSetup`                       |                     `number` `"fit"`                     |
| settings                   | Configuración actual                                         |                   `TableSettingsData`                    |
| updateSettings             | Manejador de actualización de configuración                  |       `(data: TableSettingsData) => Promise<void>`       |
| renderControls             | Habilita la renderización de acciones personalizadas         |                     `RenderControls`                     |
| settingsFilterPlaceholder  | Texto que aparece en el control cuando no hay valor de búsqueda establecido |                         `string`                         |
| settingsFilterEmptyMessage | Texto que aparece cuando no se encuentra ningún elemento    |                         `string`                         |
| filterSettings             | Función para filtrar elementos                               | `(value: string, item: TableColumnSetupItem) => boolean` |

### TableSettingsData

```ts
type TableSettingsData = Array<{
  id: string;
  isSelected?: boolean;
}>;
```

GRAVITY_TRANSLATION_BLOCK_1_END

### RenderControls

```ts
type RenderControls = (params: {
  DefaultApplyButton: React.ComponentType;
  onApply: () => void;
}) => React.ReactNode;
```

GRAVITY_TRANSLATION_BLOCK_2_END

### Ejemplo

```jsx
import {Table, withTableSettings} from '@gravity-ui/uikit';

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
        <Flex gapRow="1" direction="column">
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

GRAVITY_TRANSLATION_BLOCK_3_END

## Usando `Table` con el HOC `withTableSorting`

Este HOC habilita la ordenación de columnas.

### ColumnMeta

| Nombre             | Descripción                                                                                                                                                    |                       Tipo                       | Predeterminado |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------: | :------------: |
| defaultSortOrder | Establece el orden de ordenación principal                                                                                                                     |                 `"asc"` `"desc"`                 |     `asc`      |
| sort             | Función de ordenación. Debe devolver un valor para ordenar en orden ascendente. Si se establece en `true`, los valores de las celdas se comparan y ordenan en orden ascendente. | `boolean` `((itemA: any, itemB: any) => number)` |                |

GRAVITY_TRANSLATION_BLOCK_4_END

### Propiedades

| Nombre              | Descripción                                         |                 Tipo                  |
| :---------------- | :-------------------------------------------------- | :-----------------------------------: |
| defaultSortState  | Estado de ordenación predeterminado para un componente no controlado |           `TableSortState`            |
| sortState         | Estado de ordenación                                |           `TableSortState`            |
| onSortStateChange | Manejador de cambio de estado de ordenación         | `(sortState: TableSortState) => void` |

Si faltan las propiedades `sortState` y `onSortStateChange`, el estado de ordenación se almacena en el propio componente.

### TableSortState

```ts
type TableSortState = Array<{
  column: string;
  order: 'asc' | 'desc';
}>;
```

### Ejemplo

```jsx
import {Table, withTableSorting} from '@gravity-ui/uikit';

const MyTable = withTableSorting(Table);
const data = [
  {id: 1, text: 'Hola', date: '2016-10-25'},
  {id: 2, text: 'Mundo', date: '2020-08-15'},
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