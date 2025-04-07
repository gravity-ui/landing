<!--GITHUB_BLOCK-->

## 桌子

<!--/GITHUB_BLOCK-->

```jsx
import {Table} from '@gravity-ui/uikit';
```

A `Table` 允许对行进行选择和排序，以及对行执行操作。

<!--GITHUB_BLOCK-->

其他功能可通过 HOC 启用：

- [withTableActions](#usage-with-hoc-withtableactions)
- [withTableCopy](#usage-with-hoc-withtablecopy)
- [withTableSelection](#usage-with-hoc-withtableselection)
- [withTableSettings](#usage-with-hoc-withtablesettings)
- [withTableSorting](#usage-with-hoc-withtablesorting)

<!--/GITHUB_BLOCK-->

## 属性

| 姓名                             | 描述                                                                                                     |                                       类型                                       |    默认     |
| :------------------------------- | :------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------: | :---------: |
| 数据                             | 数据                                                                                                     |                                     `any[]`                                      |             |
| 列                               | 列设置                                                                                                   |                              `TableColumnConfig[]`                               |             |
| verticalAlign                    | 内容的垂直对齐                                                                                           |                                `"top"` `"middle"`                                |             |
| getRowDescriptor                 | 获取行描述符的处理程序                                                                                   |                  `(item: any, index: number) => DescriptorType`                  |             |
| getRowId                         | 选择和排序行时使用的行 ID。如果您跳过一行，其 ID 将是行数据中与列 ID 同名的字段的值。                    |                `string` `((item: any, index: number) => string)`                 |             |
| getRowClassNames                 | 行 CSS 类                                                                                                |                     `(item: any, index: number) => string[]`                     |             |
| isRowDisabled                    | 禁用列的条件                                                                                             |                     `(item: any, index: number) => boolean`                      |             |
| onRowClick                       | 行点击处理器                                                                                             | `（项目：任意，索引：数字，事件：react.mouseEvent<HTMLTableRowElement>) = 无效>` |             |
| onRowMouseEnter                  | Row 鼠标输入处理器                                                                                       | `（项目：任意，索引：数字，事件：react.mouseEvent<HTMLTableRowElement>) = 无效>` |             |
| onRowMouseLeave                  | Row mouseLeave 处理器                                                                                    | `（项目：任意，索引：数字，事件：react.mouseEvent<HTMLTableRowElement>) = 无效>` |             |
| emptyMessage                     | 如果数据丢失，则返回一条消息                                                                             |                                     `string`                                     | `"No data"` |
| className                        | 表 CSS 类                                                                                                |                                     `string`                                     |             |
| edgePadding                      | 为边缘单元格添加水平边距                                                                                 |                                    `boolean`                                     |             |
| stickyHorizontalScroll           | 在表格中添加水平粘滞滚动。注意：表格不能同时具有固定高度和粘性滚动。如果表格有溢出，则粘性滚动不起作用。 |                                    `boolean`                                     |   `false`   |
| stickyHorizontalScrollBreakpoint | 在使滚动粘合之前，父方块应达到的阈值。这在控制台中很有用，例如当 `groupActions` 栏与滚动条重叠时。       |                                     `number`                                     |     `0`     |

### DescriptorType

| 姓名       | 描述                      |    类型    | 默认 |
| :--------- | :------------------------ | :--------: | :--: |
| id         | 选择和排序行时使用的行 ID |  `string`  |      |
| 残疾的     | 禁用列的条件              | `boolean`  |      |
| 互动的     | 显示行悬停                | `boolean`  |      |
| classNames | 行 CSS 类                 | `string[]` |      |

### TableColumnConfig

| 姓名      | 描述                                                               |                            类型                            |           默认           |
| :-------- | :----------------------------------------------------------------- | :--------------------------------------------------------: | :----------------------: |
| id        | 列 ID                                                              |                          `string`                          |                          |
| 名称      | 列名（标题）                                                       |             `string` `(() => React.ReactNode)`             |          列 ID           |
| className | 将添加到列中所有单元格的 CSS 类                                    |                          `string`                          |                          |
| 占位符    | 单元格中没有数据时存根                                             | `string` `((item: any, index: number) => React.ReactNode)` |      `— (&mdash;)`       |
| 模板      | 单元格内容。如果您跳过一行，则单元格内容将是与该行同名的字段的值。 | `string` `((item: any, index: number) => React.ReactNode)` | 名称等于列 ID 的字段的值 |
| 对齐      | 内容对齐                                                           |                     `"start"` `"end"`                      |                          |
| 粘        | 置顶专栏                                                           |                     `"start"` `"end"`                      |                          |
| 主要的    | 将一列标识为主列而不是其他列                                       |                         `boolean`                          |                          |
| 宽度      | 列的内容宽度（以像素为单位）                                       |                     `number` `string`                      |                          |
| 元        | 其他数据，包括 HOC 设置                                            |                    `记录<string, any>`                     |                          |

## 与 `withTableActions` HOC `Table` 一起使用

此 HOC 向表列添加了一个带有操作的特殊列。

### 属性

| 姓名             | 描述                       |                           类型                           |
| :--------------- | :------------------------- | :------------------------------------------------------: |
| getRowActions    | 每行的操作配置数组         |   `(item: any, index: number) => TableActionConfig[]`    |
| renderRowActions | 动作单元的渲染函数         | `(props: {item: any; index: number}) => React.ReactNode` |
| rowActionsSize   | 操作按钮和弹出菜单项的大小 |                       `"s"` `"xl"`                       |

### TableActionConfig

```ts
type TableActionConfig = TableAction | TableActionGroup;
```

#### TableAction

| 姓名   | 描述                                         |                 类型                 |    默认    |
| :----- | :------------------------------------------- | :----------------------------------: | :--------: |
| 文本   | 文本                                         |               `string`               |            |
| 处理者 | 点击处理器                                   | `(item: any, index: number) => void` |            |
| 残疾的 | 操作已禁用                                   |              `boolean`               |            |
| href   | 具有此属性的菜单项将成为指向指定位置的链接。 |               `string`               |            |
| 目标   | 与 `<a>` 标签的 `target` 属性相同。          |               `string`               |            |
| 真实   | 与 `<a>` 标签的 `rel` 属性相同。             |               `string`               |            |
| 主题   | 主题                                         |        `"normal"` `"danger"`         | `"normal"` |
| 图标   | 显示在文本旁边的图标                         |          `React.ReactNode`           |            |

#### TableActionGroup

| 姓名 | 描述       |         类型          |
| :--- | :--------- | :-------------------: |
| 标题 | 操作组标题 |       `string`        |
| 项目 | 操作组物品 | `TableActionConfig[]` |

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

## 与 `withTableCopy` HOC `Table` 一起使用

此 HOC 允许复制单元格的内容或任何其他文本。

### ColumnMeta

| 姓名 | 描述                                                  |                        类型                        |
| :--- | :---------------------------------------------------- | :------------------------------------------------: |
| 复制 | 要复制的文本。如果该值为 true，则允许复制单元格内容。 | `boolean` `((item: any, index: number) => number)` |

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

## 与 `withTableSelection` HOC `Table` 一起使用

此 HOC 允许选择表行。

### 属性

| 姓名              | 描述               |           类型            |
| :---------------- | :----------------- | :-----------------------: |
| selectedIds       | 所选行             |        `string[]`         |
| onSelectionChange | 选定的行更改处理器 | `(ids: string[]) => void` |

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

## 与 `withTableSettings` HOC `Table` 一起使用

此 HOC 启用了表列设置的功能。你可以通过两种方式使用它：

```jsx
import {Table, withTableSettings} from './withTableSettings';

// No options passed
const MyTable1 = withTableSettings(Table);
// or with options
const MyTable1 = withTableSettings({sortable: false})(Table);
```

### 选项

| 姓名   | 描述                   |       类型       |  默认   |
| :----- | :--------------------- | :--------------: | :-----: |
| 宽度   | 设置弹出窗口宽度       | `number` `"fit"` |         |
| 可排序 | 启用或禁用排序设置项目 |    `boolean`     | `true`  |
| 可过滤 | 启用或禁用筛选设置项目 |    `boolean`     | `false` |

### ColumnMeta

| 姓名              | 描述                                         |   类型    |  默认   |
| :---------------- | :------------------------------------------- | :-------: | :-----: |
| selectedByDefault | 如果设置中缺少某列，则启用或禁用选择该列     | `boolean` | `true`  |
| selectedAlways    | 使该列始终处于选中状态。您无法更改其可见性。 | `boolean` | `false` |

### 属性

| 姓名                       | 描述                             |                           类型                           |
| :------------------------- | :------------------------------- | :------------------------------------------------------: |
| settingsPopupWidth         | `TableColumnSetup` 弹出窗口宽度  |                     `number` `"fit"`                     |
| 设置                       | 当前设置                         |                   `TableSettingsData`                    |
| updateSettings             | 设置更新处理器                   |      `（数据：TableSettingsData) = Promise><void>`       |
| renderControls             | 启用呈现自定义动作               |                     `RenderControls`                     |
| settingsFilterPlaceholder  | 未设置搜索值时显示在控件中的文本 |                         `string`                         |
| settingsFilterEmptyMessage | 找不到商品时显示的文本           |                         `string`                         |
| filterSettings             | 筛选物品的功能                   | `(value: string, item: TableColumnSetupItem) => boolean` |

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

## 与 `withTableSorting` HOC `Table` 一起使用

此 HOC 支持列排序。

### ColumnMeta

| 姓名             | 描述                                                                                        |                       类型                       | 默认  |
| :--------------- | :------------------------------------------------------------------------------------------ | :----------------------------------------------: | :---: |
| defaultSortOrder | 设置主要排序顺序                                                                            |                 `"asc"` `"desc"`                 | `asc` |
| 分类             | 排序功能。它应该返回一个按升序排序的值。如果设置为 true，则单元格值将按升序进行比较和排序。 | `boolean` `((itemA: any, itemB: any) => number)` |       |

### 属性

| 姓名              | 描述                       |                 类型                  |
| :---------------- | :------------------------- | :-----------------------------------: |
| defaultSortState  | 不受控制组件的默认排序状态 |           `TableSortState`            |
| sortState         | 排序状态                   |           `TableSortState`            |
| onSortStateChange | 排序状态更改句柄           | `(sortState: TableSortState) => void` |

如果缺少 `sortState` 和 `onSortStateChange` 属性，则排序状态存储在组件本身中。

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
