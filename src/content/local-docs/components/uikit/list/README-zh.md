<!--GITHUB_BLOCK-->

# 清单

<!--/GITHUB_BLOCK-->

```tsx
import {List} from '@gravity-ui/uikit';
```

### ItemsHeight

确定项目列表的高度（或返回列表高度值的函数）。它在动态设置列表高度时会很有用，例如， `(items: []) => number`。

### 物品

为列表提供项目数组：

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<List items={["one", "two", "three", "four", "five", "six", "seven"]} itemsHeight={160} />
`}>
    <UIKit.List items={["one", "two", "three", "four", "five", "six", "seven"]} itemsHeight={160} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<List items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']} itemsHeight={160} />
```

<!--/GITHUB_BLOCK-->

一个项目可以是标量或任意值，无论如何都必须是 `truthy`。
如果是任意值，请务必指定过滤和渲染函数。
默认渲染仅以文本形式提供项目。

特殊 `item.disabled` 字段禁用项目。

渲染和高度自定义为实验提供了充足的空间。
例如，下面的代码允许你模拟群组：

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<List items={[{title: 'one', group: true,disabled: true}, {title: 'two'},
    {
      title: 'three',
      group: true,
      disabled: true,
    },
    {
      title: 'four',
    },
  ]} onItemClick={(value) => console.log(value)}
  renderItem={(item) => {
    if (item.group) {
      return (
        <div className={'group'}>
          <div className={'select-text'}>{item.title}</div>
        </div>
      );
    }
    return (
      <div className={'select'}>
        <div className={'select-text'}>{item.title}</div>
      </div>
    );
  }}
  itemHeight={(item) => (item.group ? 24 : 36)}
  itemsHeight={160}
  filterItem={(filter) => (item) => item.title.includes(filter)}
/>
`}>
    <UIKit.List items={[
    {
      title: 'one',
      group: true,
      disabled: true,
    },
    {
      title: 'two',
    },
    {
      title: 'three',
      group: true,
      disabled: true,
    },
    {
      title: 'four',
    },
  ]} onItemClick={(value) => console.log(value)}
  renderItem={(item) => {
    if (item.group) {
      return (
        <div className={'group'}>
          <div className={'select-text'}>{item.title}</div>
        </div>
      );
    }
    return (
      <div className={'select'}>
        <div className={'select-text'}>{item.title}</div>
      </div>
    );
  }}
  itemHeight={(item) => (item.group ? 24 : 36)}
  itemsHeight={160}
  filterItem={(filter) => (item) => item.title.includes(filter)}
/>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={[
    {
      title: 'one',
      group: true,
      disabled: true,
    },
    {
      title: 'two',
    },
    {
      title: 'three',
      group: true,
      disabled: true,
    },
    {
      title: 'four',
    },
  ]}
  onItemClick={(value) => console.log(value)}
  renderItem={(item) => {
    if (item.group) {
      return (
        <div className={'group'}>
          <div className={'select-text'}>{item.title}</div>
        </div>
      );
    }
    return (
      <div className={'select'}>
        <div className={'select-text'}>{item.title}</div>
      </div>
    );
  }}
  itemHeight={(item) => (item.group ? 24 : 36)}
  itemsHeight={160}
  filterItem={(filter) => (item) => item.title.includes(filter)}
/>
```

<!--/GITHUB_BLOCK-->

### 可筛选

如果项目的值为，则该 `filterable` 属性禁用搜索项目的输入。 `false`它的默认值是 `true`。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<List items={["one", "two", "three", "four", "five", "six", "seven"]} itemsHeight={160} filterable={false} />
`}>
    <UIKit.List items={["one", "two", "three", "four", "five", "six", "seven"]} itemsHeight={160} filterable={false} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
  itemsHeight={160}
  filterable={false}
/>
```

<!--/GITHUB_BLOCK-->

### 可排序

如果该 `sortable` 属性的值为，则允许交换列表项。 `true`它的默认值是 `false`。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<List items={["one", "two", "three", "four", "five", "six", "seven"]} itemsHeight={160} sortable={true} />
`}>
    <UIKit.List items={["one", "two", "three", "four", "five", "six", "seven"]} itemsHeight={160} sortable={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
  itemsHeight={160}
  sortable={true}
/>
```

<!--/GITHUB_BLOCK-->

### 虚拟化

要启用虚拟化，请确保满足以下两个条件之一：

1.您设置了该 `itemsHeight` 属性。在这种情况下，列表高度将是固定的，等于该值。 2.您可以为列表父容器设置 `display: flex` 样式。在这种情况下，列表将适应容器宽度。

### 外部管理

有时，您可能需要通过将注意力集中在外部项目上来管理键盘上项目的活动。
将 `onKeyDown` 事件转发到列表可能会对您有所帮助。
同样，当活动物品丢失时， `onBlur` 如果需要重复该操作，也可以向前 `onFocus` 移动。

### 筛选

该 `filter` 属性提供用于外部排序的过滤器值。

### PropTypes

| 姓名              | 描述                                                                                                                                | 类型              | 默认 |
| :---------------- | :---------------------------------------------------------------------------------------------------------------------------------- | :---------------- | :--- |
| [物品](#items)    | 物品清单                                                                                                                            | `Array`           | []   |
| itemHeight        | 中的项目高度 `px` 或返回项目高度值的函数: `(item: any) => number`.                                                                  | `Number/Function` | 28   |
| itemsHeight       | 项目列表高度或返回列表高度值的函数。动态设置列表高度时会很有帮助: `(items: []) => number`.                                          | `Number/Function` |      |
| renderItem        | 渲染函数，将一个项目作为输入接收，返回一个 React 节点: `(item: any, isItemActive: bool, itemIndex: number) => React.ReactNode`.     | `Function`        |      |
| filterItem        | 过滤函数，接收指定字符串作为搜索或筛选器输入，返回接收项目作为输入并输出布尔值的函数: `(filter: string) => (item: any) => boolean`. | `Function`        |      |
| 可过滤            | 启用筛选字段的标志。                                                                                                                | `Boolean`         | 真的 |
| filterPlaceholder | 过滤器字段的占位符。                                                                                                                | `String`          |      |
| 过滤              | 筛选值（如果使用外部排序）。                                                                                                        | `String`          |      |
| filterClassName   | 过滤器输入样式的类。                                                                                                                | `String`          |      |
| onChangeFilter    | 过滤器更改处理程序（如果使用外部排序）： `(filter: string) => void`。                                                               | `Function`        |      |
| onFilterEnd       | 内部过滤完成后调用的函数： `({items}: {items: T[]}) => void`                                                                        | `Function`        |      |
| emptyPlaceholder  | 空列表的占位符。                                                                                                                    | `React.ReactNode` |      |
| 可排序            | 启用列表排序的标志。                                                                                                                | `Boolean`         |      |
| sortHandleAlign   | 排序指示器对齐方式（左或右）。                                                                                                      | `left` `right`    |      |
| onSortEnd         | 排序事件处理器: `({oldIndex: number, newIndex: number}) => void`.                                                                   | `Function`        |      |
| 虚拟化            | 启用虚拟化的标志。如果处于非活动状态，则会同时渲染所有项目。                                                                        | `Boolean`         | 真的 |
| onItemClick       | 物品点击处理器: `(item: any, index: number, fromKeyboard?: bool) => void`.                                                          | `Function`        |      |
| deactivateOnLeave | 如果设置了此标志，则一旦光标离开项目或列表失去焦点，项目选择就会停用。如果未设置，则将始终选择最后选择的项目。                      | `Boolean`         | 真的 |
| activeItemIndex   | 如果设置了值，则具有此索引的项目将呈现为活动状态。                                                                                  | `Number`          |      |
| selectedItemIndex | 如果设置了值，则具有此索引的项目将呈现为选定项（背景颜色取自 `--g-color-base-selection`）。                                         | `Number/Array`    |      |
| itemClassName     | 要添加到项目容器的自定义类名。                                                                                                      | `String`          |      |
| itemsClassName    | 要添加到项目列表的自定义类名。                                                                                                      | `String`          |      |
| 角色              | `role` HTML 属性                                                                                                                    | `String`          | 列表 |
| id                | `id` HTML 属性                                                                                                                      | `string`          |      |
| onChangeActive    | 当列表框中以键盘对焦方式直观地突出显示的选项的索引发生变化时触发: `(index?: number) => void`.                                       | `Function`        |      |
