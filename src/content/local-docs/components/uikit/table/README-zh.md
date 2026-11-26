`Table` 组件允许用户选择和排序行，以及对行执行操作。

```jsx
import {Table} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

## 属性

| 名称                             | 描述                                                                                                                                                                                   |                                        类型                                        |   默认值   |
| :------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------: | :---------: |
| data                             | 数据                                                                                                                                                                                   |                                      `any[]`                                       |             |
| columns                          | 列设置                                                                                                                                                                                 |                               `TableColumnConfig[]`                                |             |
| verticalAlign                    | 内容的垂直对齐方式                                                                                                                                                                     |                                 `"top"` `"middle"`                                 |             |
| getRowDescriptor                 | 获取行描述符的处理器                                                                                                                                                                   |                   `(item: any, index: number) => DescriptorType`                   |             |
| getRowId                         | 用于选择和排序行的行 ID。如果您跳过某一行，其 ID 将是行数据中与列 ID 同名的字段的值。                                                                                                       |                 `string` `((item: any, index: number) => string)`                  |             |
| getRowClassNames                 | 行的 CSS 类名                                                                                                                                                                          |                      `(item: any, index: number) => string[]`                      |             |
| isRowDisabled                    | 禁用行的条件                                                                                                                                                                           |                      `(item: any, index: number) => boolean`                       |             |
| onRowClick                       | 行点击处理器                                                                                                                                                                           | `(item: any, index: number, event: React.MouseEvent<HTMLTableRowElement>) => void` |             |
| onRowMouseEnter                  | 行鼠标进入处理器                                                                                                                                                                       | `(item: any, index: number, event: React.MouseEvent<HTMLTableRowElement>) => void` |             |
| onRowMouseLeave                  | 行鼠标离开处理器                                                                                                                                                                       | `(item: any, index: number, event: React.MouseEvent<HTMLTableRowElement>) => void` |             |
| emptyMessage                     | 数据缺失时返回的消息                                                                                                                                                                   |                                      `string`                                      | `"No data"` |
| className                        | 表格的 CSS 类名                                                                                                                                                                        |                                      `string`                                      |             |
| edgePadding                      | 为边缘单元格添加水平内边距                                                                                                                                                             |                                     `boolean`                                      |             |
| stickyHorizontalScroll           | 为表格添加水平固定滚动。注意：表格不能同时具有固定高度和固定滚动。如果表格有溢出，固定滚动将不起作用。                                                                                             |                                     `boolean`                                      |   `false`   |
| stickyHorizontalScrollBreakpoint | 父容器块在使滚动条固定之前应达到的阈值。这在控制台中很有用，例如当 `groupActions` 条与滚动条重叠时。                                                                                             |                                      `number`                                      |     `0`     |

### DescriptorType

| 名称        | 描述                                     |    类型    | 默认值 |
| :---------- | :--------------------------------------- | :--------: | :-----: |
| id          | 选择和排序行时使用的行 ID                  |  `string`  |         |
| disabled    | 禁用列的条件                             | `boolean`  |         |
| interactive | 显示行悬停                             | `boolean`  |         |
| classNames  | 行 CSS 类                                | `string[]` |         |

### TableColumnConfig

| 名称        | 描述                                                                                                                            |                            类型                            |                         默认值                         |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------: | :-----------------------------------------------------: |
| id          | 列 ID                                                                                                                           |                          `string`                          |                                                         |
| name        | 列名（表头）                                                                                                                    |             `string` `(() => React.ReactNode)`             |                        列 ID                        |
| className   | 将添加到该列所有单元格的 CSS 类                                                                                                 |                          `string`                          |                                                         |
| placeholder | 单元格中没有数据时的占位符                                                                                                      | `string` `((item: any, index: number) => React.ReactNode)` |                      `— (&mdash;)`                      |
| template    | 单元格内容。如果跳过一行，单元格内容将是与该行同名的字段的值。                                                                    | `string` `((item: any, index: number) => React.ReactNode)` | 与列 ID 同名的字段的值 |
| align       | 内容对齐                                                                                                                        |                `"start"` `"center"` `"end"`                |                                                         |
| sticky      | 固定列                                                                                                                          |                     `"start"` `"end"`                      |                                                         |
| primary     | 标识一列为主要列，区别于其他列                                                                                                  |                         `boolean`                          |                                                         |
| width       | 列内容的宽度（像素）                                                                                                            |                     `number` `string`                      |                                                         |
| meta        | _displayName_: 显示在“表格设置”小部件中的名称；其他杂项数据，包括 HOC 设置                                                        |                   `Record<string, any>`                    |                                                         |

## 使用 `withTableActions` HOC 的 `Table`

此 HOC 在表格列中添加了一个特殊的操作列。

### 属性

| 名称             | 描述                                   |                           类型                           |
| :--------------- | :------------------------------------- | :------------------------------------------------------: |
| getRowActions    | 每行的操作配置数组                     |   `(item: any, index: number) => TableActionConfig[]`    |
| renderRowActions | 操作单元格的渲染函数                   | `(props: {item: any; index: number}) => React.ReactNode` |
| rowActionsSize   | 操作按钮和弹出菜单项的大小             |                 `"s"` `"m"` `"l"` `"xl"`                 |
| rowActionsIcon   | 操作单元格的自定义图标                 |                    `React.ReactNode`                     |

### CSS API

| 名称                                     | 描述                                                                             |
| :--------------------------------------- | :------------------------------------------------------------------------------- |
| `--g-table-action-popup-menu-max-height` | 操作弹出菜单的最大高度。默认值：`200px`。使用 `none` 可移除限制。 |

### TableActionConfig

```ts
type TableActionConfig = TableAction | TableActionGroup;
```

#### TableAction

| 名称     | 描述                                                                 |                 类型                 |  默认值   |
| :------- | :------------------------------------------------------------------- | :----------------------------------: | :--------: |
| text     | 文本                                                                 |               `string`               |            |
| handler  | 点击处理程序                                                         | `(item: any, index: number) => void` |            |
| disabled | 操作禁用                                                             |              `boolean`               |            |
| href     | 具有此属性的菜单项将成为指向指定位置的链接。                         |               `string`               |            |
| target   | 与 `<a>` 标签的 `target` 属性相同。                                  |               `string`               |            |
| rel      | 与 `<a>` 标签的 `rel` 属性相同。                                     |               `string`               |            |
| theme    | 主题                                                                 |        `"normal"` `"danger"`         | `"normal"` |
| icon     | 显示在文本旁边的图标                                                 |          `React.ReactNode`           |            |

#### TableActionGroup

| 名称  | 描述             |         类型          |
| :---- | :--------------- | :-------------------: |
| title | 操作组标题       |       `string`        |
| items | 操作组项目       | `TableActionConfig[]` |

### 示例

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

```jsx
const table = (
  <MyTable
    data={data}
    columns={columns}
    renderRowActions={RowAction}
  />
);
```

## 使用 `withTableCopy` HOC 的 `Table`

此 HOC 可实现复制单元格内容或其他任何文本。

### ColumnMeta

| 名称 | 描述                                                              |                                            类型                                             |
| :--- | :---------------------------------------------------------------- | :-----------------------------------------------------------------------------------------: |
| copy | 要复制的文本。如果值为 `true`，则允许复制单元格内容。 | `boolean` `((item: any, index: number) => string)` `((item: any, index: number) => number)` |

### 示例

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

GRAVITY_TRANSLATION_BLOCK_1_END

## 使用 `withTableSelection` HOC 的 `Table`

此 HOC 可实现选择表格行。

### 属性

| 名称              | 描述                 |           类型            |
| :---------------- | :------------------- | :-----------------------: |
| selectedIds       | 选中的行             |        `string[]`         |
| onSelectionChange | 选中行更改处理函数 | `(ids: string[]) => void` |

### 示例

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

GRAVITY_TRANSLATION_BLOCK_2_END

## 使用 `withTableSettings` HOC 的 `Table`

此 HOC 可实现表格列设置功能。您可以通过两种方式使用它：

```jsx
import {Table, withTableSettings} from './withTableSettings';

// 未传递任何选项
const MyTable1 = withTableSettings(Table);
// 或传递选项
const MyTable1 = withTableSettings({sortable: false})(Table);
```

### 选项

| 名称       | 描述                             |       类型       | 默认值 |
| :--------- | :------------------------------- | :--------------: | :-----: |
| width      | 设置弹出窗口的宽度               | `number` `"fit"` |         |
| sortable   | 启用或禁用排序设置项             |    `boolean`     | `true`  |
| filterable | 启用或禁用过滤设置项             |    `boolean`     | `false` |

### ColumnMeta

| 名称              | 描述                                                               |   类型    | 默认值 |
| :---------------- | :----------------------------------------------------------------- | :-------: | :-----: |
| selectedByDefault | 如果列在设置中缺失，则启用或禁用该列的选中状态                     | `boolean` | `true`  |
| selectedAlways    | 使列始终处于选中状态。您无法更改其可见性。                         | `boolean` | `false` |

### 属性
GRAVITY_TRANSLATION_BLOCK_3_END

| 名称                       | 描述                                                         |                           类型                           |
| :------------------------- | :----------------------------------------------------------- | :------------------------------------------------------: |
| settingsPopupWidth         | `TableColumnSetup` 弹出窗口宽度                              |                     `number` `"fit"`                     |
| settings                   | 当前设置                                                     |                   `TableSettingsData`                    |
| updateSettings             | 设置更新处理程序                                             |       `(data: TableSettingsData) => Promise<void>`       |
| renderControls             | 启用渲染自定义操作                                           |                     `RenderControls`                     |
| settingsFilterPlaceholder  | 在未设置搜索值时，控件中显示的文本                           |                         `string`                         |
| settingsFilterEmptyMessage | 未找到任何项目时显示的文本                                   |                         `string`                         |
| filterSettings             | 用于过滤项目的函数                                           | `(value: string, item: TableColumnSetupItem) => boolean` |

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

### 示例

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

## 使用 `withTableSorting` HOC 的 `Table`

此 HOC 启用了列排序。

### ColumnMeta

| 名称             | 描述                                                                                                                                                    |                       类型                       | 默认值 |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------: | :-----: |
| defaultSortOrder | 设置主要排序顺序                                                                                                                                        |                 `"asc"` `"desc"`                 |  `asc`  |
| sort             | 排序函数。它应返回升序排序的值。如果设置为 `true`，则将比较单元格值并按升序排序。 | `boolean` `((itemA: any, itemB: any) => number)` |         |

### 属性

| 名称              | 描述                                         |                 类型                  |
| :---------------- | :-------------------------------------------------- | :-----------------------------------: |
| defaultSortState  | 非受控组件的默认排序状态 |           `TableSortState`            |
| sortState         | 排序状态                                       |           `TableSortState`            |
| onSortStateChange | 排序状态更改处理程序                         | `(sortState: TableSortState) => void` |

如果缺少 `sortState` 和 `onSortStateChange` 属性，则排序状态将存储在组件本身中。

### TableSortState

```ts
type TableSortState = Array<{
  column: string;
  order: 'asc' | 'desc';
}>;
```

### 示例

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