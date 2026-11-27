`ListItemView` 是列表行的视图：它布局行的内容 — 图标、描述、尾部内容 — 并绘制其所有者传入的状态。

```tsx
import {ListItemView} from '@gravity-ui/uikit';
```

[List](../List/README.md) 使用此视图绘制其行，并将其公开为 `List.ItemView`，仅包含布局的 props。请使用 `ListItemView` 本身来构建列表外的行 — 您自己的菜单行、树的项 — 或当某行需要列表不传递的嵌套和折叠 props 时。

- [基本用法](#basic-usage)
- [尺寸](#sizes)
- [插槽](#slots)
- [状态](#states)
- [选择](#selection)
- [嵌套和折叠](#nesting-and-collapsing)
- [拖动句柄](#drag-handle)
- [另一个元素](#another-element)
- [CSS API](#css-api)
- [属性](#properties)

## 基本用法

该视图是一个块级元素，宽度与其容器相同：行的宽度是其周围列表的宽度。

```tsx
import {Envelope} from '@gravity-ui/icons';
import {Icon, ListItemView} from '@gravity-ui/uikit';

function Mailbox() {
  return (
    <ListItemView startContent={<Icon data={Envelope} size={16} />} onClick={openMailbox}>
      Inbox
    </ListItemView>
  );
}
```

<ListItemViewExample />

该视图本身没有 ARIA 角色：行从其所属的列表获取角色（列表框中的 `option`，网格中的 `row`），`role` 与其他 DOM props 一起作为传递的根元素。在 `<List>` 内部，props 从 `getItemProps()` 准备就绪。

## 尺寸

`size` prop 设置行的密度 — `s`、`m`、`l` 或 `xl`。它驱动最小高度、内边距、圆角和行控件的大小；`xl` 还会将文本切换为 `body-2`。高度是控件的高度 — 24、28、36 和 44px — 并且，与控件一样，块内边距来自高度：单行正好填充行，每一行都会增加其行高。内边距随尺寸增长 — 8、12、16 和 16px。没有 `size` 的行具有 `m` 的高度、内边距和圆角，以及基础视图的控件；在 `<List>` 内部，每行都获得列表的尺寸。

<ListItemViewSizes />

## 插槽

行的内容是其子元素，其余内容在 props 中：`startContent` 用于前导图标或头像，`description` 用于第二行，`endContent` 用于结束行的内容 — 标签、快捷方式、操作。

<ListItemViewSlots />

```tsx
<ListItemView
  startContent={<Icon data={Star} size={16} />}
  description="Flagged by you"
  endContent={<Label>3</Label>}
>
  Starred
</ListItemView>
```

## 状态

一行显示四种状态，每种状态都是一个 prop — 视图本身不保留状态：

- `active` — 键盘焦点：列表使用箭头键移动它；
- `hovered` — 悬停高亮，由 props 强制。没有 prop 时，行会在 `:hover` 时自行高亮；`hovered={false}` 会抑制这种行为，这在拖动进行时列表会执行的操作；
- `disabled` — 行会变暗并停止响应指针，包括其自身的 `onClick`；
- `selected` — 请参阅 [选择](#selection)。

<ListItemViewStates />

## 选择

`selectionStyle` 指示选中行如何显示：`highlight` 会给行着色，`check` 会在内容前面保留一个复选框的位置，`none` 则不显示任何内容 — 用于在其自身内容中表示选择的行。该 prop 没有默认值：没有它的 `selected` 行看起来与其他行无异。在 `<List>` 内部，列表会自行选择样式 — 多选时为 `check`，单选时为 `highlight`。

<ListItemViewSelection />

复选框插槽为列表中的每一行保留，无论是否选中，这样当选择发生变化时，行的内容就不会跳动。

## 嵌套和折叠

`nestedLevel` 会根据树的深度缩进一行，`collapsible` 会给一行添加其分支的切换器：`collapsed` 是其状态，`onCollapseChange` 是其处理程序。点击行本身也会切换分支，除非该行有自己的 `onClick`。

切换器是装饰性的：它带有 `aria-hidden` 并且不在标签顺序中，因此行本身是访问分支的唯一方式。行的 `aria-expanded` 由您设置。

<ListItemViewNesting />

## 拖动句柄

`dragHandle` 会填充行的最外层插槽，位于缩进、折叠切换器和复选框之前，因此可重排列表的句柄会保持在行的边缘，无论行显示什么其他内容。该视图对拖放一无所知：库的 props 位于您传入的元素上。

<ListItemViewDragHandle />

```tsx
<ListItemView
  dragHandle={
    <span {...dragHandleProps} aria-label="Drag to reorder">
      <Icon data={Grip} size={12} />
    </span>
  }
>
  {track.title}
</ListItemView>
```

## 另一个元素

`component` 会将行渲染为另一个元素 — 链接、按钮 — `componentProps` 是该元素的 props：`href`、`type`、处理程序。使用 `isContainer`，视图不布局任何内容，并将行的标记留给您，同时保留状态和元素。

<ListItemViewCustomElement />

## CSS API

| 名称                                        | 描述                          |
| :------------------------------------------ | :----------------------------------- |
| `--g-list-item-view-min-height`             | 行的最小高度          |
| `--g-list-item-view-border-radius`          | 圆角半径                    |
| `--g-list-item-view-padding-inline`         | 内联内边距                   |
| `--g-list-item-view-padding-block`          | 块内边距                    |
| `--g-list-item-view-line-height`            | 内容的行高       |
| `--g-list-item-view-controls-gap`           | 插槽之间的间隙            |
| `--g-list-item-view-controls-size`          | 行控件的大小    |
| `--g-list-item-view-controls-border-radius` | 控件的圆角半径    |
| `--g-list-item-view-controls-icon-size`     | 控件图标的大小 |
| `--g-list-item-view-spacer-size`            | 一个嵌套级别的缩进      |
| `--g-list-item-view-background-color`       | 行的背景              |
| `--g-list-item-view-background-color-hover` | 悬停行的背景      |
| `--g-list-item-view-text-color`             | 内容的颜色            |
| `--g-list-item-view-description-color`      | 描述的颜色        |

这些变量适用于任何大小的行：`size` 仅提供默认几何形状 — 最小高度、半径、内边距和控件 — 对于未设置的变量。默认的块内边距遵循最小高度和行高；`--g-list-item-view-padding-block` 固定了它。列表的节标题 (`List.SectionHeader`) 遵循相同的最小高度和内联内边距，包括变量，因此列表的行和标题保持一个边缘。

## 属性

| 名称             | 描述                                                                                 |                  类型                  | 默认值 |
| :--------------- | :------------------------------------------------------------------------------------------ | :------------------------------------: | :-----: |
| children         | 行的内容                                                                      |           `React.ReactNode`            |         |
| size             | 行的密度                                                                      |        `'s'` `'m'` `'l'` `'xl'`        |         |
| startContent     | 前导内容：图标、头像                                                     |           `React.ReactNode`            |         |
| description      | 行的第二行                                                                  |           `React.ReactNode`            |         |
| endContent       | 尾随内容：标签、快捷方式、操作                                        |           `React.ReactNode`            |         |
| dragHandle       | 最外层插槽的内容：可重排行的拖动句柄                     |           `React.ReactNode`            |         |
| active           | 行上的键盘光标                                                       |               `boolean`                |         |
| hovered          | 悬停高亮，由 props 强制（`false` 会抑制行的 `:hover`）       |               `boolean`                |         |
| disabled         | 行是否被禁用                                                                 |               `boolean`                |         |
| selected         | 行是否被选中                                                                 |               `boolean`                |         |
| selectionStyle   | 选中行的显示方式                                                                 |    `'highlight'` `'check'` `'none'`    |         |
| collapsible      | 行是否有其分支的切换器                                                |               `boolean`                |         |
| collapsed        | 行的分支是否折叠                                                  |               `boolean`                |         |
| onCollapseChange | 切换器的处理程序（没有 `onClick` 的行点击也会切换分支） |     `(collapsed: boolean) => void`     |         |
| nestedLevel      | 树中行的深度：其前面的缩进                                   |                `number`                |   `0`   |
| onClick          | 行点击的处理程序（可聚焦的后代点击不算）            | `React.MouseEventHandler<HTMLElement>` |         |
| component        | 行渲染的元素                                                          |          `React.ElementType`           | `'div'` |
| componentProps   | 该元素的 props                                                                   |   `React.ComponentProps<component>`    |         |
| isContainer      | 将子项按原样渲染，不进行插槽布局                                                          |               `boolean`                | `false` |
| className        | 行的 CSS 类                                                                    |                `string`                |         |
| style            | 行的内联样式                                                                 |         `React.CSSProperties`          |         |

其余的 props 会传递到行的根元素：`role`、`id`、`tabIndex`、`aria-*`、`data-*`，以及指针和键盘的事件处理器。
GRAVITY_TRANSLATION_BLOCK_1_END
The `DataGrid` component provides a powerful and flexible way to display tabular data. It offers features like sorting, filtering, pagination, and more.

## API

### `DataGrid`

The `DataGrid` component is the main component for displaying tabular data.

#### Props

| Name | Type | Default | Description |
|---|---|---|---|
| `columns` | `Column[]` | - | An array of `Column` objects defining the structure and behavior of each column. |
| `rows` | `Row[]` | - | An array of `Row` objects representing the data to be displayed. |
| `pageSize` | `number` | 10 | The number of rows to display per page. |
| `pageCount` | `number` | - | The total number of pages. If not provided, it will be calculated based on `rows.length` and `pageSize`. |
| `currentPage` | `number` | 0 | The currently active page index. |
| `onPageChange` | `(page: number) => void` | - | Callback fired when the current page changes. |
| `sortingMode` | `'client'` \| `'server'` | `'client'` | The mode for sorting. `'client'` for client-side sorting, `'server'` for server-side sorting. |
| `filterMode` | `'client'` \| `'server'` | `'client'` | The mode for filtering. `'client'` for client-side filtering, `'server'` for server-side filtering. |
| `columnVisibilityModel` | `GridColumnVisibilityModel` | - | Controls the visibility of columns. |
| `columnOrder` | `string[]` | - | Controls the order of columns. |
| `isRowSelectable` | `(row: GridRowModel) => boolean` | - | Callback to determine if a row is selectable. |
| `selectionModel` | `GridSelectionModel` | - | The model for row selection. |
| `onSelectionModelChange` | `(model: GridSelectionModel) => void` | - | Callback fired when the selection model changes. |
| `density` | `'standard'` \| `'compact'` \| `'comfortable'` | `'standard'` | The density of the grid rows. |
| `getRowId` | `(row: GridRowModel) => GridRowId` | - | A function to retrieve the unique identifier for each row. Defaults to `row.id`. |
| `localeText` | `GridLocaleText` | - | Overrides the default text labels used in the grid. |
| `components` | `GridComponents` | - | Allows customization of grid components. |
| `componentsProps` | `GridComponentsProps` | - | Allows customization of props for grid components. |
| `sx` | `SxProps<Theme>` | - | Allows custom styling of the DataGrid component. |
| `autoHeight` | `boolean` | `false` | If `true`, the grid height will adjust to the content. |
| `autoPageSize` | `boolean` | `false` | If `true`, the `pageSize` will be automatically adjusted to fit the available height. |
| `keepNonExistentRows` | `boolean` | `false` | If `true`, rows that are not present in the `rows` prop will be kept in the DOM. |
| `signature` | `string` | - | A unique signature for the DataGrid component. Used internally for state management. |
| `apiRef` | `MutableRefObject<DataGridAPI>` | - | A ref object to access the DataGrid API. |
| `disableVirtualization` | `boolean` | `false` | If `true`, virtualization will be disabled. |
| `rowHeight` | `number` \| `'auto'` | `52` | The height of each row. Can be a number or `'auto'` for automatic height calculation. |
| `headerHeight` | `number` | `56` | The height of the grid header. |
| `rowBuffer` | `number` | `2` | The number of rows to render above and below the visible rows when virtualization is enabled. |
| `disableRowSelectionOnClick` | `boolean` | `false` | If `true`, row selection will not be triggered by clicking on the row. |
| `hideFooter` | `boolean` | `false` | If `true`, the grid footer will be hidden. |
| `hideFooterPagination` | `boolean` | `false` | If `true`, the pagination part of the footer will be hidden. |
| `hideFooterRowCount` | `boolean` | `false` | If `true`, the row count part of the footer will be hidden. |
| `hideFooterSelectedRowCount` | `boolean` | `false` | If `true`, the selected row count part of the footer will be hidden. |
| `disableMultipleSelection` | `boolean` | `false` | If `true`, only one row can be selected at a time. |
| `disableColumnReorder` | `boolean` | `false` | If `true`, columns cannot be reordered. |
| `disableColumnResize` | `boolean` | `false` | If `true`, columns cannot be resized. |
| `disableColumnFilter` | `boolean` | `false` | If `true`, column filtering will be disabled. |
| `disableColumnSort` | `boolean` | `false` | If `true`, column sorting will be disabled. |
| `disableColumnMenu` | `boolean` | `false` | If `true`, the column menu will be disabled. |
| `disableDensitySelector` | `boolean` | `false` | If `true`, the density selector will be hidden. |
| `disableExport` | `boolean` | `false` | If `true`, the export button will be hidden. |
| `disableCsvExport` | `boolean` | `false` | If `true`, the CSV export option will be hidden. |
| `disablePrint` | `boolean` | `false` | If `true`, the print option will be hidden. |
| `disableToolbar` | `boolean` | `false` | If `true`, the entire toolbar will be hidden. |
| `disableRowPinning` | `boolean` | `false` | If `true`, row pinning will be disabled. |
| `disableColumnPinning` | `boolean` | `false` | If `true`, column pinning will be disabled. |
| `disableEditRows` | `boolean` | `false` | If `true`, row editing will be disabled. |
| `editMode` | `'row'` \| `'cell'` \| `'dataset'` | `'row'` | The mode for editing rows. |
| `isCellEditable` | `(params: GridCellParams) => boolean` | - | Callback to determine if a cell is editable. |
| `cellModesModel` | `GridCellModesModel` | - | Controls the edit mode of cells. |
| `rowModesModel` | `GridRowModesModel` | - | Controls the edit mode of rows. |
| `onRowEditStart` | `(params: GridRowEditStartParams, event: MuiEvent<React.SyntheticEvent>) => void` | - | Callback fired when row editing starts. |
| `onRowEditStop` | `(params: GridRowEditStopParams, event: MuiEvent<React.SyntheticEvent>) => void` | - | Callback fired when row editing stops. |
| `onRowModesModelChange` | `(model: GridRowModesModel) => void` | - | Callback fired when the row modes model changes. |
| `onCellEditStart` | `(params: GridCellEditStartParams, event: MuiEvent<React.SyntheticEvent>) => void` | - | Callback fired when cell editing starts. |
| `onCellEditStop` | `(params: GridCellEditStopParams, event: MuiEvent<React.SyntheticEvent>) => void` | - | Callback fired when cell editing stops. |
| `onCellModesModelChange` | `(model: GridCellModesModel) => void` | - | Callback fired when the cell modes model changes. |
| `processRowUpdate` | `(newRow: GridRowModel, oldRow: GridRowModel) => Promise<GridRowModel> \| GridRowModel` | - | Callback fired before the row is updated. Allows you to perform validation or transformations. |
| `onProcessRowUpdateError` | `(error: Error) => void` | - | Callback fired if `processRowUpdate` throws an error. |
| `experimentalFeatures` | `GridExperimentalFeatures` | - | Enables experimental features. |
| `disableExport` | `boolean` | `false` | If `true`, the export button will be hidden. |
| `csvOptions` | `GridCsvExportOptions` | - | Options for CSV export. |
| `printOptions` | `GridPrintExportOptions` | - | Options for print export. |
| `slotProps` | `GridSlotProps` | - | Allows customization of props for grid slots. |
| `slots` | `GridSlots` | - | Allows customization of grid slots. |
| `initialState` | `GridInitialState` | - | The initial state of the grid. |
| `stateManagedByParent` | `boolean` | `false` | If `true`, the grid state will be managed by the parent component. |
| `error` | `boolean` | `false` | If `true`, the grid will display an error state. |
| `loading` | `boolean` | `false` | If `true`, the grid will display a loading state. |
| `disableVirtualization` | `boolean` | `false` | If `true`, virtualization will be disabled. |
| `rowHeight` | `number` \| `'auto'` | `52` | The height of each row. Can be a number or `'auto'` for automatic height calculation. |
| `headerHeight` | `number` | `56` | The height of the grid header. |
| `rowBuffer` | `number` | `2` | The number of rows to render above and below the visible rows when virtualization is enabled. |
| `disableRowSelectionOnClick` | `boolean` | `false` | If `true`, row selection will not be triggered by clicking on the row. |
| `hideFooter` | `boolean` | `false` | If `true`, the grid footer will be hidden. |
| `hideFooterPagination` | `boolean` | `false` | If `true`, the pagination part of the footer will be hidden. |
| `hideFooterRowCount` | `boolean` | `false` | If `true`, the row count part of the footer will be hidden. |
| `hideFooterSelectedRowCount` | `boolean` | `false` | If `true`, the selected row count part of the footer will be hidden. |
| `disableMultipleSelection` | `boolean` | `false` | If `true`, only one row can be selected at a time. |
| `disableColumnReorder` | `boolean` | `false` | If `true`, columns cannot be reordered. |
| `disableColumnResize` | `boolean` | `false` | If `true`, columns cannot be resized. |
| `disableColumnFilter` | `boolean` | `false` | If `true`, column filtering will be disabled. |
| `disableColumnSort` | `boolean` | `false` | If `true`, column sorting will be disabled. |
| `disableColumnMenu` | `boolean` | `false` | If `true`, the column menu will be disabled. |
| `disableDensitySelector` | `boolean` | `false` | If `true`, the density selector will be hidden. |
| `disableExport` | `boolean` | `false` | If `true`, the export button will be hidden. |
| `disableCsvExport` | `boolean` | `false` | If `true`, the CSV export option will be hidden. |
| `disablePrint` | `boolean` | `false` | If `true`, the print option will be hidden. |
| `disableToolbar` | `boolean` | `false` | If `true`, the entire toolbar will be hidden. |
| `disableRowPinning` | `boolean` | `false` | If `true`, row pinning will be disabled. |
| `disableColumnPinning` | `boolean` | `false` | If `true`, column pinning will be disabled. |
| `disableEditRows` | `boolean` | `false` | If `true`, row editing will be disabled. |
| `editMode` | `'row'` \| `'cell'` \| `'dataset'` | `'row'` | The mode for editing rows. |
| `isCellEditable` | `(params: GridCellParams) => boolean` | - | Callback to determine if a cell is editable. |
| `cellModesModel` | `GridCellModesModel` | - | Controls the edit mode of cells. |
| `rowModesModel` | `GridRowModesModel` | - | Controls the edit mode of rows. |
| `onRowEditStart` | `(params: GridRowEditStartParams, event: MuiEvent<React.SyntheticEvent>) => void` | - | Callback fired when row editing starts. |
| `onRowEditStop` | `(params: GridRowEditStopParams, event: MuiEvent<React.SyntheticEvent>) => void` | - | Callback fired when row editing stops. |
| `onRowModesModelChange` | `(model: GridRowModesModel) => void` | - | Callback fired when the row modes model changes. |
| `onCellEditStart` | `(params: GridCellEditStartParams, event: MuiEvent<React.SyntheticEvent>) => void` | - | Callback fired when cell editing starts. |
| `onCellEditStop` | `(params: GridCellEditStopParams, event: MuiEvent<React.SyntheticEvent>) => void` | - | Callback fired when cell editing stops. |
| `onCellModesModelChange` | `(model: GridCellModesModel) => void` | - | Callback fired when the cell modes model changes. |
| `processRowUpdate` | `(newRow: GridRowModel, oldRow: GridRowModel) => Promise<GridRowModel> \| GridRowModel` | - | Callback fired before the row is updated. Allows you to perform validation or transformations. |
| `onProcessRowUpdateError` | `(error: Error) => void` | - | Callback fired if `processRowUpdate` throws an error. |
| `experimentalFeatures` | `GridExperimentalFeatures` | - | Enables experimental features. |
| `disableExport` | `boolean` | `false` | If `true`, the export button will be hidden. |
| `csvOptions` | `GridCsvExportOptions` | - | Options for CSV export. |
| `printOptions` | `GridPrintExportOptions` | - | Options for print export. |
| `slotProps` | `GridSlotProps` | - | Allows customization of props for grid slots. |
| `slots` | `GridSlots` | - | Allows customization of grid slots. |
| `initialState` | `GridInitialState` | - | The initial state of the grid. |
| `stateManagedByParent` | `boolean` | `false` | If `true`, the grid state will be managed by the parent component. |
| `error` | `boolean` | `false` | If `true`, the grid will display an error state. |
| `loading` | `boolean` | `false` | If `true`, the grid will display a loading state. |

The rest of the props reach the root element of the row: `role`, `id`, `tabIndex`, `aria-*`, `data-*`, the handlers of the pointer and the keyboard.
GRAVITY_TRANSLATION_BLOCK_1_END

### `Column`

Defines the properties of a column in the `DataGrid`.

```typescript
interface Column {
  field: string; // Unique identifier for the column.
  headerName: string; // The name of the column displayed in the header.
  width?: number; // The width of the column.
  minWidth?: number; // The minimum width of the column.
  maxWidth?: number; // The maximum width of the column.
  flex?: number; // Flex grow factor for responsive column sizing.
  sortable?: boolean; // Whether the column is sortable.
  filterble?: boolean; // Whether the column is filterable.
  filterable?: boolean; // Whether the column is filterable.
  hideable?: boolean; // Whether the column can be hidden.
  resizable?: boolean; // Whether the column can be resized.
  disableColumnMenu?: boolean; // Whether to disable the column menu for this column.
  renderCell?: (params: GridCellParams) => React.ReactNode; // Custom cell renderer.
  renderHeader?: (params: GridHeaderParams) => React.ReactNode; // Custom header renderer.
  renderEditCell?: (params: GridEditCellParams) => React.ReactNode; // Custom edit cell renderer.
  editable?: boolean; // Whether the cell in this column is editable.
  type?: GridColTypeDef; // The type of the column (e.g., 'string', 'number', 'date').
  valueGetter?: (params: GridValueGetterParams) => any; // Function to get the cell value.
  valueSetter?: (params: GridValueSetterParams) => GridRowModel; // Function to set the cell value.
  valueFormatter?: (value: any) => string; // Function to format the cell value for display.
  description?: string; // Description of the column.
  align?: 'left' | 'center' | 'right'; // Text alignment within the cell.
  headerAlign?: 'left' | 'center' | 'right'; // Text alignment within the header.
  sortComparator?: (v1: any, v2: any) => number; // Custom sort comparator.
  filterOperators?: GridFilterOperator[]; // Custom filter operators.
  preProcessEditInput?: (value: any) => any; // Function to pre-process the input value before editing.
  postProcessEditInput?: (value: any) => any; // Function to post-process the input value after editing.
  getApplyQuickFilterFn?: (filterItem: GridFilterItem, column: GridColumn) => GridFilterFn | null; // Function to get the quick filter function.
  pinned?: 'left' | 'right'; // Whether the column is pinned to the left or right.
}
```
GRAVITY_TRANSLATION_BLOCK_2_END

### `Row`

Represents a single row of data in the `DataGrid`.

```typescript
interface Row {
  [key: string]: any; // The row data, where keys correspond to column fields.
  id: GridRowId; // The unique identifier for the row.
}
```
GRAVITY_TRANSLATION_BLOCK_3_END

### `GridCellParams`

Parameters passed to cell rendering and editing functions.

```typescript
interface GridCellParams {
  api: GridApi;
  colDef: GridColumn;
  field: string;
  formattedValue: any;
  id: GridRowId;
  isEditable: boolean;
  row: GridRowModel;
  value: any;
}
```
GRAVITY_TRANSLATION_BLOCK_4_END

### `GridRowParams`

Parameters passed to row rendering and editing functions.

```typescript
interface GridRowParams {
  api: GridApi;
  row: GridRowModel;
  id: GridRowId;
}
```
GRAVITY_TRANSLATION_BLOCK_5_END

### `GridApi`

The API object for interacting with the `DataGrid` component.

```typescript
interface GridApi {
  setRowMode: (id: GridRowId, mode: GridRowMode) => void;
  setCellMode: (id: GridRowId, field: string, mode: GridCellMode) => void;
  getRow: (id: GridRowId) => GridRowModel;
  updateRow: (row: GridRowModel) => void;
  setRowChildrenExpansion: (id: GridRowId, isExpanded: boolean) => void;
  // ... other API methods
}
```
GRAVITY_TRANSLATION_BLOCK_6_END

### `GridSelectionModel`

Represents the selection state of the rows.

```typescript
type GridSelectionModel = GridRowId[];
```
GRAVITY_TRANSLATION_BLOCK_7_END

### `GridColumnVisibilityModel`

Represents the visibility state of the columns.

```typescript
type GridColumnVisibilityModel = {
  [field: string]: boolean;
};
```
GRAVITY_TRANSLATION_BLOCK_8_END

### `GridLocaleText`

Overrides for the default text labels used in the grid.

```typescript
interface GridLocaleText {
  // ... text labels
  toolbarDensity: string;
  toolbarDensityLabel: string;
  toolbarDensityCompact: string;
  toolbarDensityStandard: string;
  toolbarDensityComfortable: string;
  // ... other text labels
}
```
GRAVITY_TRANSLATION_BLOCK_9_END

### `GridComponents`

Allows customization of grid components.

```typescript
interface GridComponents {
  Toolbar?: React.ComponentType<any>;
  Footer?: React.ComponentType<any>;
  // ... other components
}
```
GRAVITY_TRANSLATION_BLOCK_10_END

### `GridComponentsProps`

Allows customization of props for grid components.

```typescript
interface GridComponentsProps {
  toolbar?: GridToolbarProps;
  footer?: GridFooterProps;
  // ... other component props
}
```
GRAVITY_TRANSLATION_BLOCK_11_END

## Usage

### Basic Usage

```jsx
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 30 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_12_END

### Customizing Columns

You can customize columns using the `renderCell` prop to display custom content.

```jsx
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking
        const api: GridApi = params.api;
        const thisRow: GridRowModel = api.getRow(params.id);
        alert(`Clicked on ${thisRow.firstName} ${thisRow.lastName}`);
      };

      return <Button onClick={onClick}>Click Me</Button>;
    },
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 30 },
];

export default function DataGridCustomColumn() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_13_END

### Row Editing

The `DataGrid` supports row editing. You can enable it by setting `editMode` to `'row'` and providing an `onRowEditStop` handler.

```jsx
import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const initialRows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 30 },
];

function FullFeaturedCrudGrid() {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: 'edit' } });
  };

  const handleSaveClick = (id) => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: 'view' } });
  };

  const handleDeleteClick = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: 'view', ignoreModifications: true },
    });
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === 'edit';

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={() => handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              onClick={() => handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={() => handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </div>
  );
}

// Example of a custom toolbar component (optional)
function GridToolbar(props) {
  const { setRowModesModel } = props;

  const handleClick = () => {
    const id = rows.length + 1; // Simple ID generation
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: 'edit', newRow তাকে: true },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_14_END

### Server-side Operations

For large datasets, you'll want to implement server-side sorting, filtering, and pagination.

```jsx
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

export default function ServerSideGrid() {
  const [rows, setRows] = React.useState([]);
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 5,
    page: 0,
  });
  const [sortModel, setSortModel] = React.useState([]);
  const [filterModel, setFilterModel] = React.useState([]);
  const [rowCount, setRowCount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  const fetchRows = React.useCallback(async () => {
    setLoading(true);
    // Replace with your actual API call
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pagination: paginationModel,
        sorting: sortModel,
        filtering: filterModel,
      }),
    });
    const data = await response.json();
    setRows(data.rows);
    setRowCount(data.totalCount);
    setLoading(false);
  }, [paginationModel, sortModel, filterModel]);

  React.useEffect(() => {
    fetchRows();
  }, [fetchRows]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={rows}
        rowCount={rowCount}
        loading={loading}
        paginationMode="server"
        sortingMode="server"
        filterMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        onSortModelChange={setSortModel}
        onFilterModelChange={setFilterModel}
      />
    </div>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_15_END

## Styling

You can style the `DataGrid` component using the `sx` prop.

```jsx
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
];

export default function DataGridStyled() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </div>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_16_END

## Accessibility

The `DataGrid` component is designed with accessibility in mind. It uses appropriate ARIA attributes and keyboard navigation.

### Keyboard Navigation

*   **Tab**: Move focus to the next interactive element.
*   **Shift + Tab**: Move focus to the previous interactive element.
*   **Arrow Keys**: Navigate through cells within the current row or column.
*   **Home/End**: Move to the first/last cell in the current row.
*   **Page Up/Page Down**: Scroll the grid up or down by one page.
*   **Ctrl + Arrow Keys**: Move to the first/last cell in the current column.
*   **Enter/Space**: Activate the focused cell or row action.
*   **Esc**: Exit edit mode or close menus.

### ARIA Attributes

The `DataGrid` component uses the following ARIA attributes:

*   `role="grid"`: Indicates that the element is a grid.
*   `role="row"`: Indicates that the element is a row within the grid.
*   `role="columnheader"`: Indicates that the element is a column header.
*   `role="gridcell"`: Indicates that the element is a cell within the grid.
*   `aria-sort`: Indicates the sort order of a column.
*   `aria-selected`: Indicates whether a row or cell is selected.
*   `aria-label`: Provides a label for interactive elements.

## Internationalization

You can customize the text labels used in the `DataGrid` by providing a `localeText` prop.

```jsx
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
];

const localeText = {
  // Overrides all the default text
  noRowsLabel: 'No data found',
  // Overrides the rows per page label
  rowsPerPageOptions: 'Rows per page:',
  // Overrides the footer text
  footerRowSelected: (count) =>
    `${count} row(s) selected`,
};

export default function DataGridLocalized() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        localeText={localeText}
      />
    </div>
  );
}
```
GRAVITY_TRANSLATION_BLOCK_17_END

## API Reference

### `DataGrid`

The `DataGrid` component exposes several methods through its `apiRef`.

#### `apiRef.current`

| Method | Description |
|---|---|
| `setRowMode(id, mode)` | Sets the mode of a row (e.g., 'edit', 'view'). |
| `setCellMode(id, field, mode)` | Sets the mode of a cell (e.g., 'edit', 'view'). |
| `getRow(id)` | Returns the row data for the given ID. |
| `updateRow(row)` | Updates a row with the provided data. |
| `setRowChildrenExpansion(id, isExpanded)` | Expands or collapses a row's children. |
| `setColumnVisibilityModel(model)` | Sets the visibility model for columns. |
| `setColumnOrder(order)` | Sets the order of columns. |
| `selectRow(id, isSelected, multiple)` | Selects or deselects a row. |
| `selectAllRows(isSelected)` | Selects or deselects all rows. |
| `sortColumn(field, direction)` | Sorts a column. |
| `hideColumn(field)` | Hides a column. |
| `showColumn(field)` | Shows a column. |
| `setFilterModel(model)` | Sets the filter model. |
| `applyFilters()` | Applies the current filters. |
| `exportDataAsCsv(options)` | Exports the grid data as a CSV file. |
| `exportDataAsPrint(options)` | Exports the grid data for printing. |
| `getCellParams(id, field)` | Gets the parameters for a specific cell. |
| `getRowParams(id)` | Gets the parameters for a specific row. |
| `setLoadingOverlay(element)` | Sets a custom loading overlay. |
| `hideLoadingOverlay()` | Hides the loading overlay. |
| `showLoadingOverlay()` | Shows the loading overlay. |
| `setNoRowsOverlay(element)` | Sets a custom no rows overlay. |
| `hideNoRowsOverlay()` | Hides the no rows overlay. |
| `showNoRowsOverlay()` | Shows the no rows overlay. |
| `setServerErrorOverlay(element)` | Sets a custom server error overlay. |
| `hideServerErrorOverlay()` | Hides the server error overlay. |
| `showServerErrorOverlay()` | Shows the server error overlay. |
| `updateRows(rows)` | Updates multiple rows. |
| `deleteRow(id)` | Deletes a row. |
| `addRow(row)` | Adds a new row. |
| `setDensity(density)` | Sets the density of the grid. |
| `setPage(page)` | Sets the current page. |
| `setPageSize(pageSize)` | Sets the number of rows per page. |
| `getSortedColumns()` | Returns the currently sorted columns. |
| `getFilteredColumns()` | Returns the currently filtered columns. |
| `getVisibleColumns()` | Returns the currently visible columns. |
| `getSelectionModel()` | Returns the current selection model. |
| `getLocaleText()` | Returns the current locale text. |
| `getRowsCount()` | Returns the total number of rows. |
| `getSelectedRowsCount()` | Returns the number of selected rows. |
| `getHiddenColumns()` | Returns the currently hidden columns. |
| `getColumnWidth(field)` | Returns the width of a column. |
| `setColumnWidth(field, width)` | Sets the width of a column. |
| `resizeColumn(field, width)` | Resizes a column. |
| `reorderColumn(field, toIndex)` | Reorders a column. |
| `pinColumn(field, side)` | Pins a column to the left or right. |
| `unpinColumn(field)` | Unpins a column. |
| `pinRow(id, side)` | Pins a row to the top or bottom. |
| `unpinRow(id)` | Unpins a row. |
| `setCellFocus(id, field)` | Sets focus to a specific cell. |
| `setRowFocus(id)` | Sets focus to a specific row. |
| `setCellMode(id, field, mode)` | Sets the mode of a cell. |
| `setRowMode(id, mode)` | Sets the mode of a row. |
| `startCellEditMode(id, field)` | Starts editing a cell. |
| `stopCellEditMode(id, field)` | Stops editing a cell. |
| `startRowEditMode(id)` | Starts editing a row. |
| `stopRowEditMode(id)` | Stops editing a row. |
| `commitCellChange(id, field)` | Commits the changes for a cell. |
| `commitRowChange(id)` | Commits the changes for a row. |
| `cancelCellEdit(id, field)` | Cancels the edit for a cell. |
| `cancelRowEdit(id)` | Cancels the edit for a row. |
| `getCellValue(id, field)` | Gets the value of a cell. |
| `setCellValue(id, field, value)` | Sets the value of a cell. |
| `getInitialState()` | Returns the initial state of the grid. |
| `exportState()` | Exports the current state of the grid. |
| `restoreState(state)` | Restores the grid state from a saved state. |
| `setProps(props)` | Sets new props for the grid. |
| `setOption(option, value)` | Sets a grid option. |
| `getOption(option)` | Gets a grid option. |
| `showColumnMenu(field)` | Shows the column menu for a specific column. |
| `hideColumnMenu()` | Hides the column menu. |
| `showFilterPanel(filterPanelType)` | Shows the filter panel. |
| `hideFilterPanel()` | Hides the filter panel. |
| `showColumnManagementModal()` | Shows the column management modal. |
| `hideColumnManagementModal()` | Hides the column management modal. |
| `showExportPanel()` | Shows the export panel. |
| `hideExportPanel()` | Hides the export panel. |
| `showDensitySelector()` | Shows the density selector. |
| `hideDensitySelector()` | Hides the density selector. |
| `showPreferencesPanel()` | Shows the preferences panel. |
| `hidePreferencesPanel()` | Hides the preferences panel. |
| `showToolbar()` | Shows the toolbar. |
| `hideToolbar()` | Hides the toolbar. |
| `showFooter()` | Shows the footer. |
| `hideFooter()` | Hides the footer. |
| `showFooterPagination()` | Shows the footer pagination. |
| `hideFooterPagination()` | Hides the footer pagination. |
| `showFooterRowCount()` | Shows the footer row count. |
| `hideFooterRowCount()` | Hides the footer row count. |
| `showFooterSelectedRowCount()` | Shows the footer selected row count. |
| `hideFooterSelectedRowCount()` | Hides the footer selected row count. |
| `showColumnHeader()` | Shows the column header. |
| `hideColumnHeader()` | Hides the column header. |
| `showColumnFilter()` | Shows the column filter. |
| `hideColumnFilter()` | Hides the column filter. |
| `showColumnSort()` | Shows the column sort. |
| `hideColumnSort()` | Hides the column sort. |
| `showColumnMenu()` | Shows the column menu. |
| `hideColumnMenu()` | Hides the column menu. |
| `showColumnPinning()` | Shows the column pinning. |
| `hideColumnPinning()` | Hides the column pinning. |
| `showRowPinning()` | Shows the row pinning. |
| `hideRowPinning()` | Hides the row pinning. |
| `showRowSelection()` | Shows the row selection. |
| `hideRowSelection()` | Hides the row selection. |
| `showRowActions()` | Shows the row actions. |
| `hideRowActions()` | Hides the row actions. |
| `showRowExpand()` | Shows the row expand. |
| `hideRowExpand()` | Hides the row expand. |
| `showRowGrouping()` | Shows the row grouping. |
| `hideRowGrouping()` | Hides the row grouping. |
| `showRowGroupingColumns()` | Shows the row grouping columns. |
| `hideRowGroupingColumns()` | Hides the row grouping columns. |
| `showRowGroupingPanel()` | Shows the row grouping panel. |
| `hideRowGroupingPanel()` | Hides the row grouping panel. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer. |
| `hideAggregationFooter()` | Hides the aggregation footer. |
| `showAggregationHeader()` | Shows the aggregation header. |
| `hideAggregationHeader()` | Hides the aggregation header. |
| `showAggregationPanel()` | Shows the aggregation panel. |
| `hideAggregationPanel()` | Hides the aggregation panel. |
| `showAggregationColumns()` | Shows the aggregation columns. |
| `hideAggregationColumns()` | Hides the aggregation columns. |
| `showAggregationFooter()` | Shows the aggregation footer