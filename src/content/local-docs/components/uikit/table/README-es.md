<!--GITHUB_BLOCK-->

## Tabla

<!--/GITHUB_BLOCK-->

```jsx
import {Table} from '@gravity-ui/uikit';
```

A `Table` permite seleccionar y ordenar filas, así como realizar acciones en una fila.

<!--GITHUB_BLOCK-->

Las funciones adicionales se habilitan a través de los HOC:

- [withTableActions](#usage-with-hoc-withtableactions)
- [withTableCopy](#usage-with-hoc-withtablecopy)
- [withTableSelection](#usage-with-hoc-withtableselection)
- [withTableSettings](#usage-with-hoc-withtablesettings)
- [withTableSorting](#usage-with-hoc-withtablesorting)

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre                           | Descripción                                                                                                                                                                                                          |                                                Tipo                                                | Predeterminado |
| :------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------: | :------------: |
| dato                             | Datos                                                                                                                                                                                                                |                                              `any[]`                                               |                |
| columnas                         | Configuración de columna                                                                                                                                                                                             |                                       `TableColumnConfig[]`                                        |                |
| verticalAlign                    | Alineación vertical del contenido                                                                                                                                                                                    |                                         `"top"` `"middle"`                                         |                |
| getRowDescriptor                 | Controlador para obtener el descriptor de fila                                                                                                                                                                       |                           `(item: any, index: number) => DescriptorType`                           |                |
| getRowId                         | El identificador de fila se utiliza al seleccionar y ordenar las filas. Si omites una fila, su identificador será el valor del campo en los datos de la fila con el mismo nombre que el identificador de la columna. |                         `string` `((item: any, index: number) => string)`                          |                |
| getRowClassNames                 | Clases CSS de fila                                                                                                                                                                                                   |                              `(item: any, index: number) => string[]`                              |                |
| isRowDisabled                    | Condición para deshabilitar las columnas                                                                                                                                                                             |                              `(item: any, index: number) => boolean`                               |                |
| onRowClick                       | Controlador de clics de fila                                                                                                                                                                                         | `(artículo: cualquiera, índice: número, evento: <HTMLTableRowElement> React.mouseEvent () = nulo>` |                |
| onRowMouseEnter                  | controlador Row mouseenter                                                                                                                                                                                           | `(artículo: cualquiera, índice: número, evento: <HTMLTableRowElement> React.mouseEvent () = nulo>` |                |
| onRowMouseLeave                  | Controlador Row mouseleave                                                                                                                                                                                           | `(artículo: cualquiera, índice: número, evento: <HTMLTableRowElement> React.mouseEvent () = nulo>` |                |
| emptyMessage                     | Devolver un mensaje si faltan los datos                                                                                                                                                                              |                                              `string`                                              |  `"No data"`   |
| className                        | Clase CSS de tabla                                                                                                                                                                                                   |                                              `string`                                              |                |
| edgePadding                      | Añade un relleno horizontal para las celdas de los bordes                                                                                                                                                            |                                             `boolean`                                              |                |
| stickyHorizontalScroll           | Añade un rollo adhesivo horizontal a una tabla. Nota: Una mesa no puede tener una altura fija y un rollo adhesivo al mismo tiempo. Un rollo adhesivo no funcionará si la mesa está desbordada.                       |                                             `boolean`                                              |    `false`     |
| stickyHorizontalScrollBreakpoint | Umbral que debe alcanzar el bloque principal antes de hacer que un pergamino quede pegajoso. Esto es útil en la consola, por ejemplo, cuando la `groupActions` barra se superpone al rollo.                          |                                              `number`                                              |      `0`       |

### DescriptorType

| Nombre         | Descripción                                              |    Tipo    | Predeterminado |
| :------------- | :------------------------------------------------------- | :--------: | :------------: |
| identificación | ID de fila que se utiliza al seleccionar y ordenar filas |  `string`  |                |
| inhabilitado   | Condición para deshabilitar las columnas                 | `boolean`  |                |
| interactivo    | Mostrar fila al pasar el ratón                           | `boolean`  |                |
| classNames     | Clases CSS de fila                                       | `string[]` |                |

### TableColumnConfig

| Nombre               | Descripción                                                                                                                   |                            Tipo                            |                     Predeterminado                      |
| :------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------: | :-----------------------------------------------------: |
| identificación       | ID de columna                                                                                                                 |                          `string`                          |                                                         |
| nombre               | Nombre de columna (encabezado)                                                                                                |             `string` `(() => React.ReactNode)`             |                      ID de columna                      |
| className            | Clase CSS que se añadirá a todas las celdas de la columna                                                                     |                          `string`                          |                                                         |
| marcador de posición | Stub cuando no hay datos en una celda                                                                                         | `string` `((item: any, index: number) => React.ReactNode)` |                      `— (&mdash;)`                      |
| modelo               | Contenido de la celda. Si omite una fila, el contenido de la celda será el valor del campo con el mismo nombre que esta fila. | `string` `((item: any, index: number) => React.ReactNode)` | Valor del campo con el nombre igual al ID de la columna |
| alinear              | Alineación de contenido                                                                                                       |                     `"start"` `"end"`                      |                                                         |
| pegajoso             | Columna adhesiva                                                                                                              |                     `"start"` `"end"`                      |                                                         |
| primaria             | Identifica una columna como principal en lugar de otras                                                                       |                         `boolean`                          |                                                         |
| anchura              | Ancho del contenido de la columna en píxeles                                                                                  |                     `number` `string`                      |                                                         |
| meta                 | Datos varios, incluida la configuración HOC                                                                                   |                   `Récord<string, any>`                    |                                                         |

## Uso `Table` con el `withTableActions` HOC

Este HOC agrega una columna especial con acciones a las columnas de la tabla.

### Propiedades

| Nombre           | Descripción                                                      |                           Tipo                           |
| :--------------- | :--------------------------------------------------------------- | :------------------------------------------------------: |
| getRowActions    | Matriz de configuraciones de acción para cada fila               |   `(item: any, index: number) => TableActionConfig[]`    |
| renderRowActions | Función de renderizado para Actions Cell                         | `(props: {item: any; index: number}) => React.ReactNode` |
| rowActionsSize   | Tamaño del botón de acción y de los elementos del menú emergente |                       `"s"` `"xl"`                       |

### TableActionConfig

```ts
type TableActionConfig = TableAction | TableActionGroup;
```

#### TableAction

| Nombre       | Descripción                                                                                   |                 Tipo                 | Predeterminado |
| :----------- | :-------------------------------------------------------------------------------------------- | :----------------------------------: | :------------: |
| mensaje      | Texto                                                                                         |               `string`               |                |
| controlador  | Controlador de clics                                                                          | `(item: any, index: number) => void` |                |
| inhabilitado | Acción desactivada                                                                            |              `boolean`               |                |
| href         | Un elemento de menú con esta propiedad se convierte en un enlace a la ubicación especificada. |               `string`               |                |
| objetivo     | Igual que el `target` atributo de la `<a>` etiqueta.                                          |               `string`               |                |
| relé         | Igual que el `rel` atributo de la `<a>` etiqueta.                                             |               `string`               |                |
| canción      | Tema                                                                                          |        `"normal"` `"danger"`         |   `"normal"`   |
| icono        | Icono para mostrar junto al texto                                                             |          `React.ReactNode`           |                |

#### TableActionGroup

| Nombre    | Descripción                      |         Tipo          |
| :-------- | :------------------------------- | :-------------------: |
| título    | Encabezado del grupo de acciones |       `string`        |
| artículos | Elementos del grupo de acciones  | `TableActionConfig[]` |

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
type Item = {id: number, text: string};

const data: Item[] = [
  {id: 1, text: 'Hello'},
  {id: 2, text: 'World'},
];
const columns = [{id: 'id'}, {id: 'text'}];

const RowAction = ({item}: RenderRowActionsProps<Item>) => {
  return <React.Fragment>{`Action for - ${item.text}`}</React.Fragment>;
};

const table = <MyTable data={data} columns={columns} renderRowActions={RowAction} />;
```

## Uso `Table` con el `withTableCopy` HOC

Este HOC permite copiar el contenido de una celda o cualquier otro texto.

### ColumnMeta

| Nombre | Descripción                                                                              |                        Tipo                        |
| :----- | :--------------------------------------------------------------------------------------- | :------------------------------------------------: |
| copiar | Texto para copiar. Si el valor es verdadero, se permite copiar el contenido de la celda. | `boolean` `((item: any, index: number) => number)` |

### Ejemplo

```jsx
import {Table, withTableCopy} from '@gravity-ui/uikit';

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

## Uso `Table` con el `withTableSelection` HOC

Este HOC permite seleccionar filas de tablas.

### Propiedades

| Nombre            | Descripción                            |           Tipo            |
| :---------------- | :------------------------------------- | :-----------------------: |
| selectedIds       | Filas seleccionadas                    |        `string[]`         |
| onSelectionChange | Gestor de cambios de fila seleccionado | `(ids: string[]) => void` |

### Ejemplo

```jsx
import {Table, withTableSelection} from '@gravity-ui/uikit';

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

## Uso `Table` con el `withTableSettings` HOC

Este HOC habilita funciones para la configuración de las columnas de la tabla. Puedes usarlo de dos maneras:

```jsx
import {Table, withTableSettings} from './withTableSettings';

// No options passed
const MyTable1 = withTableSettings(Table);
// or with options
const MyTable1 = withTableSettings({sortable: false})(Table);
```

### Opciones

| Nombre       | Descripción                                                        |       Tipo       | Predeterminado |
| :----------- | :----------------------------------------------------------------- | :--------------: | :------------: |
| anchura      | Ancho de la ventana emergente de configuración                     | `number` `"fit"` |                |
| clasificable | Activa o desactiva los elementos de configuración de clasificación |    `boolean`     |     `true`     |
| filtrable    | Activa o desactiva los elementos de configuración de filtrado      |    `boolean`     |    `false`     |

### ColumnMeta

| Nombre            | Descripción                                                                     |   Tipo    | Predeterminado |
| :---------------- | :------------------------------------------------------------------------------ | :-------: | :------------: |
| selectedByDefault | Activa o desactiva la selección de una columna si falta en la configuración     | `boolean` |     `true`     |
| selectedAlways    | Hace que la columna esté siempre seleccionada. No puede cambiar su visibilidad. | `boolean` |    `false`     |

### Propiedades

| Nombre                     | Descripción                                                                        |                           Tipo                           |
| :------------------------- | :--------------------------------------------------------------------------------- | :------------------------------------------------------: |
| settingsPopupWidth         | `TableColumnSetup` ancho de ventana emergente                                      |                     `number` `"fit"`                     |
| ajustes                    | Ajustes actuales                                                                   |                   `TableSettingsData`                    |
| updateSettings             | Gestor de actualización de ajustes                                                 |     `(datos: TableSettingsData () = Promesa><void>`      |
| renderControls             | Permite renderizar acciones personalizadas                                         |                     `RenderControls`                     |
| settingsFilterPlaceholder  | Texto que aparece en el control cuando no hay ningún valor de búsqueda establecido |                         `string`                         |
| settingsFilterEmptyMessage | Texto que aparece cuando no se encuentra ningún elemento                           |                         `string`                         |
| filterSettings             | Función para filtrar artículos                                                     | `(value: string, item: TableColumnSetupItem) => boolean` |

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

## Uso `Table` con el `withTableSorting` HOC

Este HOC permite la clasificación de columnas.

### ColumnMeta

| Nombre           | Descripción                                                                                                                                                                           |                       Tipo                       | Predeterminado |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------: | :------------: |
| defaultSortOrder | Establece el orden de clasificación principal                                                                                                                                         |                 `"asc"` `"desc"`                 |     `asc`      |
| ordenar          | Función de clasificación. Debe devolver un valor para ordenar en orden ascendente. Si se establece en verdadero, los valores de las celdas se comparan y ordenan en orden ascendente. | `boolean` `((itemA: any, itemB: any) => number)` |                |

### Propiedades

| Nombre            | Descripción                                                             |                 Tipo                  |
| :---------------- | :---------------------------------------------------------------------- | :-----------------------------------: |
| defaultSortState  | Estado de clasificación predeterminado para un componente no controlado |           `TableSortState`            |
| sortState         | Estado de clasificación                                                 |           `TableSortState`            |
| onSortStateChange | Identificador de cambio de estado de clasificación                      | `(sortState: TableSortState) => void` |

Si faltan `onSortStateChange` las propiedades `sortState` y, el estado de clasificación se almacena en el propio componente.

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
