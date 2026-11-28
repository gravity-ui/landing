`Select` 是一个控件，提供用户可选择的选项列表。

```tsx
import {Select} from '@gravity-ui/uikit';
```

> [!NOTE]
> 在 v8 中，选项由新的列表绘制。对消费者而言，已发生的变化已收集在
> [迁移指南](https://github.com/gravity-ui/uikit/blob/main/docs/migration-select-v8.md)中。

## 选项

要选择的选项。

### 定义选项

您可以将选项定义为对象数组或组件的子项。第一种方法适用于需要复杂准备和可能需要记忆的选项。第二种方法在选项较少且其配置不需要复杂计算时很方便。

在 React Server Component 中，`Select.Option` 和 `Select.OptionGroup` 是无法访问的：请改用命名的
`SelectOption` 和 `SelectOptionGroup`。它们的 props 类型分别为 `SelectOptionProps` 和
`SelectOptionGroupProps`。

#### 扁平列表

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

#### 选项的文本

选项的文本是触发器为选定选项显示的内容、过滤器匹配的内容以及首字母搜索的内容。默认情况下，它是选项本身的内容（如果它是字符串或数字）、它的子项（如果它们是）以及它的 `value`。因此，渲染非纯字符串的选项需要 `getOptionText`，否则它将通过其值进行搜索和命名。

GRAVITY_TRANSLATION_BLOCK_3_END

`useSelectOptions` 接受相同的属性：当选项在组件外部过滤时，也将其传递给它。在组件外部定义函数或对其进行记忆化处理——它参与列表的记忆化，并且每次渲染时新函数都会重建行。

`getOptionText` 替换了已移除的选项的 `text` 属性：选项的文本是按需获取的，而不是存储的，因此一个函数覆盖所有选项，而不是在每个选项上重复一个字段。

选项的 `value` 标识其行，因此值在整个列表中必须是唯一的，包括组（对于[非字符串值](#non-string-values)——其键）。行的 DOM `id` 从中派生，该 `id` 是触发器的 `aria-activedescendant` 指向的内容——从那里读取，而不是手动构建：值的转义属于列表，而不是约定。

#### 分组列表

组标题是标题而不是选项：它带有 `role="presentation"`，不参与键盘导航和 `role="option"` 行的计数，并通过 `aria-describedby` 描述其下的选项。`label` 为空的组会绘制一条分隔线而不是标题——作为列表的第一行，它没有什么可分隔的，并且完全不占用空间。这是组的默认绘制方式：首先会询问 `renderOptionGroup` 和 `getOptionGroupHeight`，然后它们会渲染并测量它们喜欢的任何内容，无论标签是否为空。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### 在选项中存储数据

您可以通过使用 `option.data` 属性在每个选项中定义和存储唯一数据。当您需要在 `onUpdate` 回调中使用丰富数据时，或者例如在使用 `renderOption` 绘制选项时，这会很有用。

### 非字符串值

选项的值可以是任何类型：`value`、`defaultValue` 和 `onUpdate` 的类型遵循选项。Select 通过字符串键识别值——其行的 ID、表单字段以及两个值之间的比较都使用它。字符串是其自身的键，其他原始类型使用 `String()` 转换为键，对象需要 `getValueKey`。具有相同键的值是同一个值：来自新响应的对象会选择匹配的选项。在组件外部定义 `getValueKey` 或对其进行记忆化处理，就像 `getOptionText` 一样。

GRAVITY_TRANSLATION_BLOCK_6_END

对象值没有自己的文本：为选项提供字符串 `content` 或传递 `getOptionText`。`Select.Option` 子项接受字符串，除非其类型已命名：`<Select.Option<unknown, number> value={1}>`；Select 本身从 `value` 或类型化的 `onUpdate={(value: number[]) => …}` 中获取类型。没有选项的选定值通过其键显示；将其选项保留在 `options` 中或使用 `renderSelectedOptions` 渲染它。表单提交键，而不是值。在联合类型中，`1` 和 `"1"` 共享一个键并被视为一个值。

### 可为空值

`''`、`null` 和 `undefined` 表示无值，除非选项声明了它们。没有选项时，这样的值没有文本、清除按钮或计数，表单将其发送为 `''`，而 `value` 和 `onUpdate` 则保持原样。`0` 和 `false` 始终是值。

GRAVITY_TRANSLATION_BLOCK_7_END

## 选择多个选项

要启用多选，请使用 `multiple` 属性。其默认值为 `false`。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

Shift+click、Shift+↑/↓ 和 Shift+Space 会选择一个选项范围，从最后选择的选项到目标选项。

### 计数器

您可以使用 `hasCounter` 属性为组件添加已选项目的计数器。

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## 过滤选项

要启用过滤器部分，请使用 `filterable` 属性。其默认值为 `false`。

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## 首字母搜索

当弹出窗口打开且没有过滤器时，字符键会查找选项：列表会将活动移至文本**以**键入内容开头的第一个选项，缓冲区在最后一个键入字符后一秒重置，重复一个字符会循环遍历以该字符开头的选项。空格在键入时属于查询，因此带有空格的标签是可访问的——并且直到缓冲区再次为空时才选择任何内容。列表用于搜索的字符不会传递到其周围应用程序的热键。

在 `filterable` 的 Select 中，键会进入过滤器：在那里键入即为过滤。

## 尺寸

要管理默认控件和选项的大小，请使用 `size` 属性。其默认大小为 `m`。

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## 控件宽度

默认情况下，控件宽度会拉伸以匹配所选选项内容的宽度。您可以使用 `width` 属性进行管理：

`'max'`: 拉伸以匹配父级的全部宽度。

`number`: 以像素为单位应用宽度。

GRAVITY_TRANSLATION_BLOCK_16_END

## 弹出窗口宽度

您可以使用 `popupWidth` 属性管理弹出窗口的宽度。可用值如下：

`'fit'`: 应用控件宽度。

`number`: 以像素为单位应用宽度。

关于默认行为的注意事项：

- 弹出窗口的宽度等于最宽选项的宽度，但不能超过 `90vw`。这不适用于[虚拟化](#virtualized-list)的 `Select`。

- 较窄的选项会拉伸以适应控件的宽度。

GRAVITY_TRANSLATION_BLOCK_17_END

## 虚拟化列表

长列表选项会逐行渲染，除非你另有要求：每个选项都是一个 DOM 行。如果只想渲染可见的选项，请将 `Select` 组件包裹在 `@gravity-ui/uikit/virtualizer` 入口点提供的 `ListVirtualizer` 中。该包装器无需配置，并且弹出窗口会继续通过 portal 工作。当选项数量达到几百个时，这种方式会开始显现优势；超过 150 个时，`Select` 会在开发环境中发出警告。

该入口点需要 `@tanstack/react-virtual`：它是该包的可选 peer 依赖项，必须与该包一起安装。

```tsx
import {Select} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

<ListVirtualizer>
  <Select options={thousandsOfOptions} />
</ListVirtualizer>;
```

包装器不必紧挨着 `Select`：在应用根目录的一个包装器，并设置 `minItemsCount`，可以覆盖其下所有的 `Select` 组件。选项较少的 `Select` 会像没有包装器一样渲染——每个选项都是一个 DOM 行，弹出窗口的宽度与最宽的选项相同。`Select` 会计算所有选项，不包括分组标题和过滤器，因此输入不会切换列表。

```tsx
import {Provider} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

<Provider theme="light">
  <ListVirtualizer minItemsCount={50}>
    <App />
  </ListVirtualizer>
</Provider>;
```

要更改单个 `Select` 的设置，请在其正上方放置第二个包装器。它只会更改其自身的内容，其余的则继承根目录的设置：`overscan={20}` 保留阈值，`minItemsCount={0}` 会虚拟化该 `Select`，无论其选项数量多少，而 `minItemsCount={Infinity}` 则保持普通渲染。

```tsx
import {Select} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

// 在根目录的包装器下方：此 Select 将被虚拟化，无论其选项数量多少
<ListVirtualizer minItemsCount={0}>
  <Select options={options} />
</ListVirtualizer>;
```

虚拟化器的代码是独立的，不会为较短的 `Select` 加载。即将被虚拟化的 `Select` 会在挂载时开始加载它；在它加载完成之前打开的弹出窗口会显示其前几个选项，直到窗口接管，然后滚动到选定的选项。

关于虚拟化 `Select` 需要注意的事项：

- 弹出窗口的宽度不再根据最长选项的长度进行调整。

- 弹出窗口的最小宽度等于控件的宽度，如果控件较短，则为 `100px`。

- 渲染前行的高度取自 [getOptionHeight](#rendering-options-with-different-heights) 和 `Select` 的 `size`；包装器的 `estimateItemSize` 不会被使用，因为选项行的类型不会离开 `Select`——传递它会在开发环境中发出警告。包装器的 `measure` 和 `overscan` 属性按照 [描述](https://github.com/gravity-ui/uikit/blob/main/src/components/List/README.md#virtualization) 的方式用于 `List`。

- 服务器端渲染的弹出窗口会获得其第一个选项而不是窗口——没有视口可以测量它——窗口会在水合后接管。

- 包装器覆盖了此 `Select` 的列表，包括 [renderPopup](#rendering-options-list) 在页面上放置的列表。嵌套在该列表行中的列表，或者放置在该行中的 `Select`，会分别渲染自己的每一行：列表的虚拟化不会影响其行所绘制的内容。

- 在组件外部定义 `getOptionHeight` 和 `renderOption`，或者对它们进行 memoization：每次渲染时创建新函数都会导致虚拟化器重新开始测量，并重新渲染行。

GRAVITY_TRANSLATION_BLOCK_18_END

## 可访问名称

触发器需要一个名称：`label`、`aria-label`、`aria-labelledby` 或指向 `Select` 的 `id` 的 `<label htmlFor>`。`label` 用于命名触发器，但不会包含在其值中；占位符不是名称。使用 `renderControl` 时，标签不会被绘制，因此需要自己命名自定义控件。

## 高级用法

有多种方法可以自定义你的 `Select`。

### 渲染自定义控件

要渲染自定义控件，请使用 `renderControl` 属性。

将 `ref` 传递给你的元素，并将 `triggerProps` 展开到它上面：它们负责打开和关闭弹出窗口，携带列表的键盘事件以及 combobox 的 ARIA 属性（`role`、`aria-expanded`、`aria-controls`、`aria-activedescendant`）。一个将它们保留在自己内部的控件既不会打开也不会导航。`triggerProps` 还包含 `disabled`。在使用 `Button` 时，将泛型 `ref` 强制转换为按钮 ref。

GRAVITY_TRANSLATION_BLOCK_19_END

GRAVITY_TRANSLATION_BLOCK_20_END

### 渲染自定义过滤器部分

要渲染自定义过滤器部分，请使用 `renderFilter` 属性并将 `filterable` 属性设置为 `true`。

`inputProps` 包含了 combobox 输入所需的一切：值、处理程序、占位符和 ARIA 连接——`role`、`aria-label`、`aria-controls`、`aria-activedescendant`、`aria-expanded`、`aria-autocomplete`。它还包含 `size: 1`，这是一个宽度提示，而不是 ARIA 属性：它允许输入框收缩到弹出窗口的宽度，而不是默认的 20 个字符。没有它们，过滤器将没有可访问的名称，也无法为屏幕阅读器命名活动选项。将它们与 `ref` 一起展开到一个普通的 `input` 上。具有自己 API 的组件——例如 `TextInput`——会接收它拥有的属性（`value`、`placeholder`、`onChange`、`onKeyDown`），并通过 `controlProps` 将其余属性传递给元素，这可以通过一行解构完成；`onKeyDown` 必须包含在其中，它携带了整个列表的键盘事件。

GRAVITY_TRANSLATION_BLOCK_21_END

GRAVITY_TRANSLATION_BLOCK_22_END

### 渲染自定义选项

要渲染自定义选项，请使用 `renderOption` 属性。它会接收选项和该行的状态：`isItemActive`，即该行是否是活动行（`Enter` 键适用的行）；`selected`，即选项是否被选中；以及 `itemHeight`，即该行渲染出来的高度——由 [getOptionHeight](#rendering-options-with-different-heights) 返回或 [size](#size) 的最小值。该行本身会显示选中状态，以及你渲染的内容：在多选 `Select` 中是复选标记，在单选 `Select` 中是高亮。绘制自己指示符的选项（例如，基于 `selected` 的 `Radio` 或 `Checkbox`）会通过 `selectionStyle="none"` 关闭它；如果没有自己的指示符，则选中状态将不可见。这样的控件只是装饰——行负责选中选项，并且不允许在其中放置交互式元素：将控件包裹在一个带有 `inert` 属性的元素中（在 React 19 之前是 `inert=""`），并将选项的文本放在其外部。

`renderOptionGroup` 对于分组的标题也是类似的：接收分组信息和 `{isItemActive, itemHeight}`。

GRAVITY_TRANSLATION_BLOCK_23_END

GRAVITY_TRANSLATION_BLOCK_24_END

### 渲染自定义选中的选项

要渲染控件中的选中项，请使用 `renderSelectedOptions` 属性。它会接收按 `value` 顺序排列的所有选中的选项（单选时是一个数组），并且仅在有值时调用。没有对应选项的值会以 `{value}` 的形式出现，没有 `content`。当返回的元素包含状态时，请为其定义 `key`。标签、占位符、计数器和清除按钮会保留在 `Select` 中。如果没有此属性，控件将显示用 `, ` 连接的选项文本。

GRAVITY_TRANSLATION_BLOCK_25_END

GRAVITY_TRANSLATION_BLOCK_26_END

### 渲染不同高度的选项

行的高度与其内容一样高，并且不小于其 `size`（24、28、36 和 44 像素，与相同大小的控件一样；在移动设备上，每行都取 `xl` 的 44 像素）的最小值 — 除非您自己设置高度。如果您需要渲染不同高度的选项，可以使用 `option.data` 属性。它将存储有关您需要为选项设置的高度的信息，以及用于设置此值的 `getOptionHeight` 属性：它返回的数字将成为行的高度，并用于 [虚拟化列表](#virtualized-list) 对行进行定位。

GRAVITY_TRANSLATION_BLOCK_27_END

GRAVITY_TRANSLATION_BLOCK_28_END

### 渲染自定义计数器

要渲染自定义计数器，请使用 `renderCounter` 属性。仅当启用了多选 (`multiple={true}`) 且 `hasCounter={true}` 时，才会显示计数器。

GRAVITY_TRANSLATION_BLOCK_29_END

GRAVITY_TRANSLATION_BLOCK_30_END

### 渲染选项列表

`renderPopup` 属性允许您控制选项列表的内容：更改标准元素（过滤器、列表）的顺序、隐藏它们，或在它们之间、之前或之后添加自定义元素。

GRAVITY_TRANSLATION_BLOCK_31_END

GRAVITY_TRANSLATION_BLOCK_32_END

### 错误

此 `Select` 状态用于表示不正确的用户输入。要更改 `Select` 的外观，请使用 `validationState` 属性并将其值设置为 `"invalid"`。您还可以选择通过 `errorMessage` 属性提供错误消息。默认情况下，消息文本会渲染在组件外部。
您可以使用 `errorPlacement` 属性更改此行为。

GRAVITY_TRANSLATION_BLOCK_33_END

## 属性

| 名称                                                         | 描述                                                                                                                             | 类型                                     | 默认值                                                  |
| :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- | :------------------------------------------------------- |
| className                                                    | 控制 className                                                                                                                   | `string`                                 |                                                          |
| defaultValue                                                 | 在使用非受控状态时，表示所选选项的默认值                                                                                             | `V[]`                                    |                                                          |
| disabled                                                     | 表明用户无法与控件交互                                                                                                           | `boolean`                                | `false`                                                  |
| [filterable](#filtering-options)                             | 表明选择弹出窗口具有筛选器部分                                                                                                   | `boolean`                                | `false`                                                  |
| filterOption                                                 | 用于比较选项与筛选器                                                                                                             | `function`                               |                                                          |
| filterPlaceholder                                            | 默认筛选输入框的占位符文本                                                                                                       | `string`                                 |                                                          |
| [getOptionText](#the-text-of-an-option)                      | 选项的文本：触发器、筛选器和首字母搜索都使用它                                                                                       | `function`                               | 字符串内容，否则为值                                     |
| [getValueKey](#non-string-values)                            | 值的字符串键：其行的 ID、表单字段、值的相等性                                                                                      | `(value: V) => string`                   | 字符串本身，其他原始类型为 `String()`                      |
| [getOptionHeight](#rendering-options-with-different-heights) | 用于设置自定义用户选项的高度                                                                                                     | `function`                               |                                                          |
| getOptionGroupHeight                                         | 用于设置自定义用户选项组的高度                                                                                                   | `function`                               |                                                          |
| hasClear                                                     | 启用显示用于清除所选选项的图标                                                                                                   | `boolean`                                | `false`                                                  |
| id                                                           | `id` HTML 属性                                                                                                                   | `string`                                 |                                                          |
| label                                                        | 控件标签；在移动设备上也是工作表的标题                                                                                             | `string`                                 |                                                          |
| loading                                                      | 在选项列表末尾添加加载项。当选项列表为空时，它就像一个持久的加载指示器。                                                               | `boolean`                                |                                                          |
| [multiple](#selecting-multiple-options)                      | 表明列表中是否可以选择多个选项                                                                                                   | `boolean`                                | `false`                                                  |
| name                                                         | 控件名称                                                                                                                         | `string`                                 |                                                          |
| onBlur                                                       | 元素失去焦点时调用的处理程序。                                                                                                   | `function`                               |                                                          |
| filter                                                       | 受控筛选值                                                                                                                       | `string`                                 | `''`                                                     |
| onFilterChange                                               | 每次更改筛选器后触发                                                                                                             | `function`                               |                                                          |
| onFocus                                                      | 元素获得焦点时调用的处理程序                                                                                                     | `function`                               |                                                          |
| onLoadMore                                                   | 加载指示器可见时触发                                                                                                             | `function`                               |                                                          |
| onOpenChange                                                 | 每次更改弹出窗口可见性后触发                                                                                                     | `function`                               |                                                          |
| onUpdate                                                     | 用户提交对 `Select` 值的更改时触发                                                                                               | `function`                               |                                                          |
| [options](#options)                                          | 要选择的选项                                                                                                                     | `SelectOptions`                          |                                                          |
| pin                                                          | 控件边框视图                                                                                                                     | `string`                                 | `'round-round'`                                          |
| placeholder                                                  | 占位符文本                                                                                                                       | `string`                                 |                                                          |
| popupClassName                                               | 包含选项列表的弹出窗口 `className`                                                                                               | `string`                                 |                                                          |
| popupPlacement                                               | 弹出窗口位置                                                                                                                     | `PopupPlacement` `Array<PopupPlacement>` | `['bottom-start', 'bottom-end', 'top-start', 'top-end']` |
| [popupWidth](#popup-width)                                   | 弹出窗口宽度                                                                                                                     | `number \| 'fit'`                        |                                                          |
| sheetClassName                                               | 工作表的 `className`                                                                                                             | `string`                                 |                                                          |
| qa                                                           | 测试 ID 属性 (`data-qa`)                                                                                                         | `string`                                 |                                                          |
| [renderControl](#rendering-custom-control)                   | 用于渲染用户控件                                                                                                                 | `function`                               |                                                          |
| [renderCounter](#rendering-custom-counter)                   | 用于渲染用户计数器。仅在启用 [hasCounter](#counter) 时有效。                                                                         | `function`                               |                                                          |
| renderEmptyOptions                                           | 用于渲染空选项列表的节点                                                                                                         | `function`                               |                                                          |
| [renderFilter](#rendering-custom-filter-section)             | 用于渲染用户筛选器部分                                                                                                           | `function`                               |                                                          |
| [renderOption](#rendering-custom-options)                    | 用于渲染用户选项                                                                                                                 | `function`                               |                                                          |
| renderOptionGroup                                            | 用于渲染用户选项组                                                                                                               | `function`                               |                                                          |
| [renderSelectedOptions](#rendering-custom-selected-options)  | 用于渲染控件中的选择项                                                                                                           | `function`                               |                                                          |
| [renderPopup](#rendering-options-list)                       | 用于渲染选项列表内容                                                                                                             | `function`                               |                                                          |
| [selectionStyle](#rendering-custom-options)                  | 行如何显示其选项被选中：复选标记或高亮 (`auto`) 或无 (`none`)                                                                       | `'auto' \| 'none'`                       | `'auto'`                                                 |
| [size](#size)                                                | 控件 / 选项大小                                                                                                                  | `string`                                 | `'m'`                                                    |
| value                                                        | 表示所选选项的值                                                                                                                 | `V[]`                                    |                                                          |
| view                                                         | 控件视图                                                                                                                         | `string`                                 | `'normal'`                                               |
| [width](#control-width)                                      | 控件宽度                                                                                                                         | `string \| number`                       | `undefined`                                              |
| errorMessage                                                 | 错误文本                                                                                                                         | `string`                                 |                                                          |
| errorPlacement                                               | 错误位置                                                                                                                         | `outside` `inside`                       | `outside`                                                |
| validationState                                              | 验证状态                                                                                                                         | `"invalid"`                              |                                                          |
| [hasCounter](#counter)                                       | 显示所选选项计数。仅当启用 [multiple](#selecting-multiple-options) 选择时，计数器才会显示。                                             | `boolean`                                |                                                          |

## CSS API

标记的类名不是公共约定 — 弹出窗口的行由列表及其行视图渲染，它们的标记会随着套件而变化。支持以下内容：

- 下面的变量；
- 行的外观，通过[行视图](../ListItemView/README.md#css-api)的 `--g-list-item-view-*` 变量：其颜色、高度、内边距和圆角，这些会遵循 `Select` 的[大小](#size)。在 `popupClassName` 或 `sheetClassName` 上设置它们 — 例如，对于移动设备上更高的行，设置 `--g-list-item-view-min-height: 48px`。对[虚拟化列表](#virtualized-list)的估计和 `renderOption` 的 `itemHeight` 仍然来自大小：当精确数字很重要时，请使用 `getOptionHeight`；
- 行的内容，通过 `renderOption`、`renderOptionGroup` 和 `renderSelectedOptions`。

| 名称                             | 描述                                   |
| :------------------------------- | :-------------------------------------------- |
| `--g-select-focus-outline-color` | 聚焦时的轮廓颜色（默认情况下缺失） |