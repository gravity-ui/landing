`ListItemView` 是列表行的视图：它布局行的内容 — 图标、描述、尾部内容 — 并绘制其所有者传入的状态。

```tsx
import {ListItemView} from '@gravity-ui/uikit';
```

[List](../List/README.md) 使用此视图绘制其行，并将其公开为 `List.ItemView`，仅包含布局的 props。请使用 `ListItemView` 本身来构建列表外的行 — 您自己的菜单行、树的项 — 或当行需要列表不传递的嵌套和折叠 props 时。

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

该视图本身没有 ARIA 角色：行从其所属的列表获取角色（列表框中的 `option`，网格中的 `row`），并且 `role` 与其他 DOM props 一起作为传递的根元素。在 `<List>` 内部，props 从 `getItemProps()` 准备就绪。

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
- `hovered` — 悬停高亮，由 props 强制。没有 prop 时，行会在 `:hover` 时自行高亮；`hovered={false}` 会抑制此行为，这在拖动进行时列表会执行的操作；
- `disabled` — 行会变暗并停止响应指针，包括其自身的 `onClick`；
- `selected` — 请参阅 [选择](#selection)。

<ListItemViewStates />

## 选择

`selectionStyle` 指示选中行如何显示：`highlight` 会给行着色，`check` 会在内容前面保留一个用于复选标记的槽，`none` 则不显示任何内容 — 用于在其自身内容中表示选择的行。该 prop 没有默认值：没有它的 `selected` 行看起来与其他行无异。在 `<List>` 内部，列表会自行选择样式 — 多选时为 `check`，单选时为 `highlight`。

<ListItemViewSelection />

列表的每一行都会保留一个复选槽，无论是否选中，这样当选择更改时，行的内容就不会跳动。

## 嵌套和折叠

`nestedLevel` 会根据树的深度缩进一行，`collapsible` 会给行添加其分支的切换器：`collapsed` 是其状态，`onCollapseChange` 是其处理程序。点击行本身也会切换分支，除非该行有自己的 `onClick`。

切换器是装饰性的：它带有 `aria-hidden` 并且不在标签顺序中，因此行本身是访问分支的唯一方式。行的 `aria-expanded` 由您设置。

<ListItemViewNesting />

## 拖动句柄

`dragHandle` 会填充行的最外层槽，位于缩进、折叠切换器和复选标记之前，因此可重排列表的句柄会保持在行的边缘，无论行显示什么其他内容。该视图对拖放一无所知：库的 props 位于您传入的元素上。

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

`component` 会将行渲染为另一个元素 — 链接、按钮 — `componentProps` 是该元素的 props：`href`、`type`、处理程序。使用 `isContainer`，视图将不布局任何内容，并将行的标记留给您，同时保留状态和元素。

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
| component        | 行渲染成的元素                                                          |          `React.ElementType`           | `'div'` |
| componentProps   | 该元素的 props                                                                   |   `React.ComponentProps<component>`    |         |
| isContainer      | 将子项按原样渲染，不进行插槽布局                                                          |               `boolean`                | `false` |
| className        | 行的 CSS 类                                                                    |                `string`                |         |
| style            | 行的内联样式                                                                 |         `React.CSSProperties`          |         |

其余的 props 会传递到行的根元素：`role`、`id`、`tabIndex`、`aria-*`、`data-*`，以及指针和键盘的事件处理器。
GRAVITY_TRANSLATION_BLOCK_1_END
The `Table` component is a wrapper for the `TableHead`, `TableBody`, and `TableRow` components.
`Table` 组件是 `TableHead`、`TableBody` 和 `TableRow` 组件的包装器。
GRAVITY_TRANSLATION_BLOCK_2_END
It is a semantic HTML element that can be used to display tabular data.
它是一个语义化的 HTML 元素，可用于显示表格数据。
GRAVITY_TRANSLATION_BLOCK_3_END
The `Table` component accepts the following props:
`Table` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_4_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table. |
| `className` | `string` | - | The class name of the table. |
| `style` | `React.CSSProperties` | - | The style of the table. |
| `role` | `string` | `"table"` | The ARIA role of the table. |
| `id` | `string` | - | The ID of the table. |
| `tabIndex` | `number` | - | The tab index of the table. |
| `aria-*` | `string` | - | ARIA attributes for the table. |
| `data-*` | `any` | - | Data attributes for the table. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格的内容。 |
| `className` | `string` | - | 表格的类名。 |
| `style` | `React.CSSProperties` | - | 表格的样式。 |
| `role` | `string` | `"table"` | 表格的 ARIA role。 |
| `id` | `string` | - | 表格的 ID。 |
| `tabIndex` | `number` | - | 表格的 tab index。 |
| `aria-*` | `string` | - | 表格的 ARIA 属性。 |
| `data-*` | `any` | - | 表格的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_5_END
The `TableHead` component is a wrapper for the `TableRow` component.
`TableHead` 组件是 `TableRow` 组件的包装器。
GRAVITY_TRANSLATION_BLOCK_6_END
It is a semantic HTML element that can be used to display the header row of a table.
它是一个语义化的 HTML 元素，可用于显示表格的表头行。
GRAVITY_TRANSLATION_BLOCK_7_END
The `TableHead` component accepts the following props:
`TableHead` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_8_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table head. |
| `className` | `string` | - | The class name of the table head. |
| `style` | `React.CSSProperties` | - | The style of the table head. |
| `role` | `string` | `"rowgroup"` | The ARIA role of the table head. |
| `id` | `string` | - | The ID of the table head. |
| `tabIndex` | `number` | - | The tab index of the table head. |
| `aria-*` | `string` | - | ARIA attributes for the table head. |
| `data-*` | `any` | - | Data attributes for the table head. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表头的内容。 |
| `className` | `string` | - | 表头的类名。 |
| `style` | `React.CSSProperties` | - | 表头的样式。 |
| `role` | `string` | `"rowgroup"` | 表头的 ARIA role。 |
| `id` | `string` | - | 表头的 ID。 |
| `tabIndex` | `number` | - | 表头的 tab index。 |
| `aria-*` | `string` | - | 表头的 ARIA 属性。 |
| `data-*` | `any` | - | 表头的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_9_END
The `TableBody` component is a wrapper for the `TableRow` component.
`TableBody` 组件是 `TableRow` 组件的包装器。
GRAVITY_TRANSLATION_BLOCK_10_END
It is a semantic HTML element that can be used to display the body rows of a table.
它是一个语义化的 HTML 元素，可用于显示表格的主体行。
GRAVITY_TRANSLATION_BLOCK_11_END
The `TableBody` component accepts the following props:
`TableBody` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_12_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table body. |
| `className` | `string` | - | The class name of the table body. |
| `style` | `React.CSSProperties` | - | The style of the table body. |
| `role` | `string` | `"rowgroup"` | The ARIA role of the table body. |
| `id` | `string` | - | The ID of the table body. |
| `tabIndex` | `number` | - | The tab index of the table body. |
| `aria-*` | `string` | - | ARIA attributes for the table body. |
| `data-*` | `any` | - | Data attributes for the table body. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表体的内容。 |
| `className` | `string` | - | 表体的类名。 |
| `style` | `React.CSSProperties` | - | 表体的样式。 |
| `role` | `string` | `"rowgroup"` | 表体的 ARIA role。 |
| `id` | `string` | - | 表体的 ID。 |
| `tabIndex` | `number` | - | 表体的 tab index。 |
| `aria-*` | `string` | - | 表体的 ARIA 属性。 |
| `data-*` | `any` | - | 表体的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_13_END
The `TableRow` component is a wrapper for the `TableCell` component.
`TableRow` 组件是 `TableCell` 组件的包装器。
GRAVITY_TRANSLATION_BLOCK_14_END
It is a semantic HTML element that can be used to display a row of cells in a table.
它是一个语义化的 HTML 元素，可用于显示表格中的一行单元格。
GRAVITY_TRANSLATION_BLOCK_15_END
The `TableRow` component accepts the following props:
`TableRow` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_16_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table row. |
| `className` | `string` | - | The class name of the table row. |
| `style` | `React.CSSProperties` | - | The style of the table row. |
| `role` | `string` | `"row"` | The ARIA role of the table row. |
| `id` | `string` | - | The ID of the table row. |
| `tabIndex` | `number` | - | The tab index of the table row. |
| `aria-*` | `string` | - | ARIA attributes for the table row. |
| `data-*` | `any` | - | Data attributes for the table row. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格行的内容。 |
| `className` | `string` | - | 表格行的类名。 |
| `style` | `React.CSSProperties` | - | 表格行的样式。 |
| `role` | `string` | `"row"` | 表格行的 ARIA role。 |
| `id` | `string` | - | 表格行的 ID。 |
| `tabIndex` | `number` | - | 表格行的 tab index。 |
| `aria-*` | `string` | - | 表格行的 ARIA 属性。 |
| `data-*` | `any` | - | 表格行的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_17_END
The `TableCell` component is a wrapper for the `div` element.
`TableCell` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_18_END
It is a semantic HTML element that can be used to display a cell in a table.
它是一个语义化的 HTML 元素，可用于显示表格中的一个单元格。
GRAVITY_TRANSLATION_BLOCK_19_END
The `TableCell` component accepts the following props:
`TableCell` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_20_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table cell. |
| `className` | `string` | - | The class name of the table cell. |
| `style` | `React.CSSProperties` | - | The style of the table cell. |
| `role` | `string` | `"cell"` | The ARIA role of the table cell. |
| `id` | `string` | - | The ID of the table cell. |
| `tabIndex` | `number` | - | The tab index of the table cell. |
| `aria-*` | `string` | - | ARIA attributes for the table cell. |
| `data-*` | `any` | - | Data attributes for the table cell. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格单元格的内容。 |
| `className` | `string` | - | 表格单元格的类名。 |
| `style` | `React.CSSProperties` | - | 表格单元格的样式。 |
| `role` | `string` | `"cell"` | 表格单元格的 ARIA role。 |
| `id` | `string` | - | 表格单元格的 ID。 |
| `tabIndex` | `number` | - | 表格单元格的 tab index。 |
| `aria-*` | `string` | - | 表格单元格的 ARIA 属性。 |
| `data-*` | `any` | - | 表格单元格的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_21_END
The `TableSortCell` component is a wrapper for the `TableCell` component.
`TableSortCell` 组件是 `TableCell` 组件的包装器。
GRAVITY_TRANSLATION_BLOCK_22_END
It is a semantic HTML element that can be used to display a sortable cell in a table.
它是一个语义化的 HTML 元素，可用于显示表格中可排序的单元格。
GRAVITY_TRANSLATION_BLOCK_23_END
The `TableSortCell` component accepts the following props:
`TableSortCell` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_24_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table sort cell. |
| `className` | `string` | - | The class name of the table sort cell. |
| `style` | `React.CSSProperties` | - | The style of the table sort cell. |
| `role` | `string` | `"columnheader"` | The ARIA role of the table sort cell. |
| `id` | `string` | - | The ID of the table sort cell. |
| `tabIndex` | `number` | - | The tab index of the table sort cell. |
| `aria-*` | `string` | - | ARIA attributes for the table sort cell. |
| `data-*` | `any` | - | Data attributes for the table sort cell. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `sortDirection` | `"asc"` \| `"desc"` \| `undefined` | `undefined` | The sort direction of the column. |
| `onSort` | `(direction: "asc" \| "desc") => void` | - | Callback function when the sort direction changes. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格排序单元格的内容。 |
| `className` | `string` | - | 表格排序单元格的类名。 |
| `style` | `React.CSSProperties` | - | 表格排序单元格的样式。 |
| `role` | `string` | `"columnheader"` | 表格排序单元格的 ARIA role。 |
| `id` | `string` | - | 表格排序单元格的 ID。 |
| `tabIndex` | `number` | - | 表格排序单元格的 tab index。 |
| `aria-*` | `string` | - | 表格排序单元格的 ARIA 属性。 |
| `data-*` | `any` | - | 表格排序单元格的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `sortDirection` | `"asc"` \| `"desc"` \| `undefined` | `undefined` | 列的排序方向。 |
| `onSort` | `(direction: "asc" \| "desc") => void` | - | 排序方向改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_25_END
The `TablePagination` component is a wrapper for the `div` element.
`TablePagination` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_26_END
It is a semantic HTML element that can be used to display pagination controls for a table.
它是一个语义化的 HTML 元素，可用于显示表格的分页控件。
GRAVITY_TRANSLATION_BLOCK_27_END
The `TablePagination` component accepts the following props:
`TablePagination` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_28_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table pagination. |
| `className` | `string` | - | The class name of the table pagination. |
| `style` | `React.CSSProperties` | - | The style of the table pagination. |
| `role` | `string` | `"region"` | The ARIA role of the table pagination. |
| `id` | `string` | - | The ID of the table pagination. |
| `tabIndex` | `number` | - | The tab index of the table pagination. |
| `aria-*` | `string` | - | ARIA attributes for the table pagination. |
| `data-*` | `any` | - | Data attributes for the table pagination. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `count` | `number` | - | The total number of items. |
| `page` | `number` | - | The current page number. |
| `rowsPerPage` | `number` | - | The number of items per page. |
| `onPageChange` | `(page: number) => void` | - | Callback function when the page changes. |
| `onRowsPerPageChange` | `(rowsPerPage: number) => void` | - | Callback function when the number of rows per page changes. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格分页的内容。 |
| `className` | `string` | - | 表格分页的类名。 |
| `style` | `React.CSSProperties` | - | 表格分页的样式。 |
| `role` | `string` | `"region"` | 表格分页的 ARIA role。 |
| `id` | `string` | - | 表格分页的 ID。 |
| `tabIndex` | `number` | - | 表格分页的 tab index。 |
| `aria-*` | `string` | - | 表格分页的 ARIA 属性。 |
| `data-*` | `any` | - | 表格分页的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `count` | `number` | - | 项目总数。 |
| `page` | `number` | - | 当前页码。 |
| `rowsPerPage` | `number` | - | 每页的项目数。 |
| `onPageChange` | `(page: number) => void` | - | 页码改变时的回调函数。 |
| `onRowsPerPageChange` | `(rowsPerPage: number) => void` | - | 每页行数改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_29_END
The `TableContainer` component is a wrapper for the `div` element.
`TableContainer` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_30_END
It is a semantic HTML element that can be used to wrap a table and provide additional styling or functionality.
它是一个语义化的 HTML 元素，可用于包装表格并提供额外的样式或功能。
GRAVITY_TRANSLATION_BLOCK_31_END
The `TableContainer` component accepts the following props:
`TableContainer` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_32_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table container. |
| `className` | `string` | - | The class name of the table container. |
| `style` | `React.CSSProperties` | - | The style of the table container. |
| `role` | `string` | `"none"` | The ARIA role of the table container. |
| `id` | `string` | - | The ID of the table container. |
| `tabIndex` | `number` | - | The tab index of the table container. |
| `aria-*` | `string` | - | ARIA attributes for the table container. |
| `data-*` | `any` | - | Data attributes for the table container. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格容器的内容。 |
| `className` | `string` | - | 表格容器的类名。 |
| `style` | `React.CSSProperties` | - | 表格容器的样式。 |
| `role` | `string` | `"none"` | 表格容器的 ARIA role。 |
| `id` | `string` | - | 表格容器的 ID。 |
| `tabIndex` | `number` | - | 表格容器的 tab index。 |
| `aria-*` | `string` | - | 表格容器的 ARIA 属性。 |
| `data-*` | `any` | - | 表格容器的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_33_END
The `TableFooter` component is a wrapper for the `TableRow` component.
`TableFooter` 组件是 `TableRow` 组件的包装器。
GRAVITY_TRANSLATION_BLOCK_34_END
It is a semantic HTML element that can be used to display the footer row of a table.
它是一个语义化的 HTML 元素，可用于显示表格的表尾行。
GRAVITY_TRANSLATION_BLOCK_35_END
The `TableFooter` component accepts the following props:
`TableFooter` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_36_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table footer. |
| `className` | `string` | - | The class name of the table footer. |
| `style` | `React.CSSProperties` | - | The style of the table footer. |
| `role` | `string` | `"rowgroup"` | The ARIA role of the table footer. |
| `id` | `string` | - | The ID of the table footer. |
| `tabIndex` | `number` | - | The tab index of the table footer. |
| `aria-*` | `string` | - | ARIA attributes for the table footer. |
| `data-*` | `any` | - | Data attributes for the table footer. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表尾的内容。 |
| `className` | `string` | - | 表尾的类名。 |
| `style` | `React.CSSProperties` | - | 表尾的样式。 |
| `role` | `string` | `"rowgroup"` | 表尾的 ARIA role。 |
| `id` | `string` | - | 表尾的 ID。 |
| `tabIndex` | `number` | - | 表尾的 tab index。 |
| `aria-*` | `string` | - | 表尾的 ARIA 属性。 |
| `data-*` | `any` | - | 表尾的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_37_END
The `TableCaption` component is a wrapper for the `caption` element.
`TableCaption` 组件是 `caption` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_38_END
It is a semantic HTML element that can be used to provide a title or description for a table.
它是一个语义化的 HTML 元素，可用于为表格提供标题或描述。
GRAVITY_TRANSLATION_BLOCK_39_END
The `TableCaption` component accepts the following props:
`TableCaption` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_40_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table caption. |
| `className` | `string` | - | The class name of the table caption. |
| `style` | `React.CSSProperties` | - | The style of the table caption. |
| `role` | `string` | `"caption"` | The ARIA role of the table caption. |
| `id` | `string` | - | The ID of the table caption. |
| `tabIndex` | `number` | - | The tab index of the table caption. |
| `aria-*` | `string` | - | ARIA attributes for the table caption. |
| `data-*` | `any` | - | Data attributes for the table caption. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格标题的内容。 |
| `className` | `string` | - | 表格标题的类名。 |
| `style` | `React.CSSProperties` | - | 表格标题的样式。 |
| `role` | `string` | `"caption"` | 表格标题的 ARIA role。 |
| `id` | `string` | - | 表格标题的 ID。 |
| `tabIndex` | `number` | - | 表格标题的 tab index。 |
| `aria-*` | `string` | - | 表格标题的 ARIA 属性。 |
| `data-*` | `any` | - | 表格标题的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_41_END
The `TableCollapse` component is a wrapper for the `div` element.
`TableCollapse` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_42_END
It is a semantic HTML element that can be used to display a collapsible row in a table.
它是一个语义化的 HTML 元素，可用于显示表格中可折叠的行。
GRAVITY_TRANSLATION_BLOCK_43_END
The `TableCollapse` component accepts the following props:
`TableCollapse` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_44_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table collapse. |
| `className` | `string` | - | The class name of the table collapse. |
| `style` | `React.CSSProperties` | - | The style of the table collapse. |
| `role` | `string` | `"row"` | The ARIA role of the table collapse. |
| `id` | `string` | - | The ID of the table collapse. |
| `tabIndex` | `number` | - | The tab index of the table collapse. |
| `aria-*` | `string` | - | ARIA attributes for the table collapse. |
| `data-*` | `any` | - | Data attributes for the table collapse. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `expanded` | `boolean` | `false` | Whether the row is expanded. |
| `onToggle` | `() => void` | - | Callback function when the row is toggled. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格折叠的内容。 |
| `className` | `string` | - | 表格折叠的类名。 |
| `style` | `React.CSSProperties` | - | 表格折叠的样式。 |
| `role` | `string` | `"row"` | 表格折叠的 ARIA role。 |
| `id` | `string` | - | 表格折叠的 ID。 |
| `tabIndex` | `number` | - | 表格折叠的 tab index。 |
| `aria-*` | `string` | - | 表格折叠的 ARIA 属性。 |
| `data-*` | `any` | - | 表格折叠的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `expanded` | `boolean` | `false` | 行是否展开。 |
| `onToggle` | `() => void` | - | 行切换时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_45_END
The `TableExpandButton` component is a wrapper for the `button` element.
`TableExpandButton` 组件是 `button` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_46_END
It is a semantic HTML element that can be used to display a button to expand or collapse a row in a table.
它是一个语义化的 HTML 元素，可用于显示用于展开或折叠表格行的按钮。
GRAVITY_TRANSLATION_BLOCK_47_END
The `TableExpandButton` component accepts the following props:
`TableExpandButton` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_48_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table expand button. |
| `className` | `string` | - | The class name of the table expand button. |
| `style` | `React.CSSProperties` | - | The style of the table expand button. |
| `role` | `string` | `"button"` | The ARIA role of the table expand button. |
| `id` | `string` | - | The ID of the table expand button. |
| `tabIndex` | `number` | - | The tab index of the table expand button. |
| `aria-*` | `string` | - | ARIA attributes for the table expand button. |
| `data-*` | `any` | - | Data attributes for the table expand button. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `expanded` | `boolean` | `false` | Whether the row is expanded. |
| `onToggle` | `() => void` | - | Callback function when the row is toggled. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格展开按钮的内容。 |
| `className` | `string` | - | 表格展开按钮的类名。 |
| `style` | `React.CSSProperties` | - | 表格展开按钮的样式。 |
| `role` | `string` | `"button"` | 表格展开按钮的 ARIA role。 |
| `id` | `string` | - | 表格展开按钮的 ID。 |
| `tabIndex` | `number` | - | 表格展开按钮的 tab index。 |
| `aria-*` | `string` | - | 表格展开按钮的 ARIA 属性。 |
| `data-*` | `any` | - | 表格展开按钮的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `expanded` | `boolean` | `false` | 行是否展开。 |
| `onToggle` | `() => void` | - | 行切换时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_49_END
The `TableSelectCell` component is a wrapper for the `TableCell` component.
`TableSelectCell` 组件是 `TableCell` 组件的包装器。
GRAVITY_TRANSLATION_BLOCK_50_END
It is a semantic HTML element that can be used to display a selectable cell in a table.
它是一个语义化的 HTML 元素，可用于显示表格中可选择的单元格。
GRAVITY_TRANSLATION_BLOCK_51_END
The `TableSelectCell` component accepts the following props:
`TableSelectCell` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_52_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table select cell. |
| `className` | `string` | - | The class name of the table select cell. |
| `style` | `React.CSSProperties` | - | The style of the table select cell. |
| `role` | `string` | `"gridcell"` | The ARIA role of the table select cell. |
| `id` | `string` | - | The ID of the table select cell. |
| `tabIndex` | `number` | - | The tab index of the table select cell. |
| `aria-*` | `string` | - | ARIA attributes for the table select cell. |
| `data-*` | `any` | - | Data attributes for the table select cell. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `selected` | `boolean` | `false` | Whether the cell is selected. |
| `onSelect` | `() => void` | - | Callback function when the cell is selected. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格选择单元格的内容。 |
| `className` | `string` | - | 表格选择单元格的类名。 |
| `style` | `React.CSSProperties` | - | 表格选择单元格的样式。 |
| `role` | `string` | `"gridcell"` | 表格选择单元格的 ARIA role。 |
| `id` | `string` | - | 表格选择单元格的 ID。 |
| `tabIndex` | `number` | - | 表格选择单元格的 tab index。 |
| `aria-*` | `string` | - | 表格选择单元格的 ARIA 属性。 |
| `data-*` | `any` | - | 表格选择单元格的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `selected` | `boolean` | `false` | 单元格是否被选中。 |
| `onSelect` | `() => void` | - | 单元格被选中时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_53_END
The `TableSelectAll` component is a wrapper for the `button` element.
`TableSelectAll` 组件是 `button` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_54_END
It is a semantic HTML element that can be used to display a button to select or deselect all rows in a table.
它是一个语义化的 HTML 元素，可用于显示用于选择或取消选择表格中所有行的按钮。
GRAVITY_TRANSLATION_BLOCK_55_END
The `TableSelectAll` component accepts the following props:
`TableSelectAll` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_56_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table select all. |
| `className` | `string` | - | The class name of the table select all. |
| `style` | `React.CSSProperties` | - | The style of the table select all. |
| `role` | `string` | `"button"` | The ARIA role of the table select all. |
| `id` | `string` | - | The ID of the table select all. |
| `tabIndex` | `number` | - | The tab index of the table select all. |
| `aria-*` | `string` | - | ARIA attributes for the table select all. |
| `data-*` | `any` | - | Data attributes for the table select all. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `selected` | `boolean` | `false` | Whether all rows are selected. |
| `onSelectAll` | `() => void` | - | Callback function when all rows are selected or deselected. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格全选的内容。 |
| `className` | `string` | - | 表格全选的类名。 |
| `style` | `React.CSSProperties` | - | 表格全选的样式。 |
| `role` | `string` | `"button"` | 表格全选的 ARIA role。 |
| `id` | `string` | - | 表格全选的 ID。 |
| `tabIndex` | `number` | - | 表格全选的 tab index。 |
| `aria-*` | `string` | - | 表格全选的 ARIA 属性。 |
| `data-*` | `any` | - | 表格全选的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `selected` | `boolean` | `false` | 是否选中所有行。 |
| `onSelectAll` | `() => void` | - | 全选或取消全选时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_57_END
The `TableEmpty` component is a wrapper for the `div` element.
`TableEmpty` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_58_END
It is a semantic HTML element that can be used to display a message when the table is empty.
它是一个语义化的 HTML 元素，可用于在表格为空时显示消息。
GRAVITY_TRANSLATION_BLOCK_59_END
The `TableEmpty` component accepts the following props:
`TableEmpty` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_60_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table empty. |
| `className` | `string` | - | The class name of the table empty. |
| `style` | `React.CSSProperties` | - | The style of the table empty. |
| `role` | `string` | `"cell"` | The ARIA role of the table empty. |
| `id` | `string` | - | The ID of the table empty. |
| `tabIndex` | `number` | - | The tab index of the table empty. |
| `aria-*` | `string` | - | ARIA attributes for the table empty. |
| `data-*` | `any` | - | Data attributes for the table empty. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格为空时的内容。 |
| `className` | `string` | - | 表格为空时的类名。 |
| `style` | `React.CSSProperties` | - | 表格为空时的样式。 |
| `role` | `string` | `"cell"` | 表格为空时的 ARIA role。 |
| `id` | `string` | - | 表格为空时的 ID。 |
| `tabIndex` | `number` | - | 表格为空时的 tab index。 |
| `aria-*` | `string` | - | 表格为空时的 ARIA 属性。 |
| `data-*` | `any` | - | 表格为空时的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_61_END
The `TableLoading` component is a wrapper for the `div` element.
`TableLoading` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_62_END
It is a semantic HTML element that can be used to display a loading indicator when the table is loading data.
它是一个语义化的 HTML 元素，可用于在表格加载数据时显示加载指示器。
GRAVITY_TRANSLATION_BLOCK_63_END
The `TableLoading` component accepts the following props:
`TableLoading` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_64_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table loading. |
| `className` | `string` | - | The class name of the table loading. |
| `style` | `React.CSSProperties` | - | The style of the table loading. |
| `role` | `string` | `"cell"` | The ARIA role of the table loading. |
| `id` | `string` | - | The ID of the table loading. |
| `tabIndex` | `number` | - | The tab index of the table loading. |
| `aria-*` | `string` | - | ARIA attributes for the table loading. |
| `data-*` | `any` | - | Data attributes for the table loading. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格加载时的内容。 |
| `className` | `string` | - | 表格加载时的类名。 |
| `style` | `React.CSSProperties` | - | 表格加载时的样式。 |
| `role` | `string` | `"cell"` | 表格加载时的 ARIA role。 |
| `id` | `string` | - | 表格加载时的 ID。 |
| `tabIndex` | `number` | - | 表格加载时的 tab index。 |
| `aria-*` | `string` | - | 表格加载时的 ARIA 属性。 |
| `data-*` | `any` | - | 表格加载时的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_65_END
The `TableToolbar` component is a wrapper for the `div` element.
`TableToolbar` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_66_END
It is a semantic HTML element that can be used to display a toolbar for a table.
它是一个语义化的 HTML 元素，可用于显示表格的工具栏。
GRAVITY_TRANSLATION_BLOCK_67_END
The `TableToolbar` component accepts the following props:
`TableToolbar` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_68_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar. |
| `className` | `string` | - | The class name of the table toolbar. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar. |
| `role` | `string` | `"toolbar"` | The ARIA role of the table toolbar. |
| `id` | `string` | - | The ID of the table toolbar. |
| `tabIndex` | `number` | - | The tab index of the table toolbar. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar. |
| `data-*` | `any` | - | Data attributes for the table toolbar. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏的内容。 |
| `className` | `string` | - | 表格工具栏的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏的样式。 |
| `role` | `string` | `"toolbar"` | 表格工具栏的 ARIA role。 |
| `id` | `string` | - | 表格工具栏的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_69_END
The `TableToolbarMenu` component is a wrapper for the `div` element.
`TableToolbarMenu` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_70_END
It is a semantic HTML element that can be used to display a menu in a table toolbar.
它是一个语义化的 HTML 元素，可用于在表格工具栏中显示菜单。
GRAVITY_TRANSLATION_BLOCK_71_END
The `TableToolbarMenu` component accepts the following props:
`TableToolbarMenu` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_72_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu. |
| `className` | `string` | - | The class name of the table toolbar menu. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu. |
| `role` | `string` | `"menu"` | The ARIA role of the table toolbar menu. |
| `id` | `string` | - | The ID of the table toolbar menu. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单的内容。 |
| `className` | `string` | - | 表格工具栏菜单的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单的样式。 |
| `role` | `string` | `"menu"` | 表格工具栏菜单的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_73_END
The `TableToolbarMenuItem` component is a wrapper for the `button` element.
`TableToolbarMenuItem` 组件是 `button` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_74_END
It is a semantic HTML element that can be used to display a menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示菜单项。
GRAVITY_TRANSLATION_BLOCK_75_END
The `TableToolbarMenuItem` component accepts the following props:
`TableToolbarMenuItem` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_76_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item. |
| `className` | `string` | - | The class name of the table toolbar menu item. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item. |
| `role` | `string` | `"menuitem"` | The ARIA role of the table toolbar menu item. |
| `id` | `string` | - | The ID of the table toolbar menu item. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `onClick` | `React.MouseEventHandler` | - | Handler for click events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项的内容。 |
| `className` | `string` | - | 表格工具栏菜单项的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项的样式。 |
| `role` | `string` | `"menuitem"` | 表格工具栏菜单项的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `onClick` | `React.MouseEventHandler` | - | 点击事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_77_END
The `TableToolbarSearch` component is a wrapper for the `input` element.
`TableToolbarSearch` 组件是 `input` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_78_END
It is a semantic HTML element that can be used to display a search input in a table toolbar.
它是一个语义化的 HTML 元素，可用于在表格工具栏中显示搜索输入框。
GRAVITY_TRANSLATION_BLOCK_79_END
The `TableToolbarSearch` component accepts the following props:
`TableToolbarSearch` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_80_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar search. |
| `className` | `string` | - | The class name of the table toolbar search. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar search. |
| `role` | `string` | `"search"` | The ARIA role of the table toolbar search. |
| `id` | `string` | - | The ID of the table toolbar search. |
| `tabIndex` | `number` | - | The tab index of the table toolbar search. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar search. |
| `data-*` | `any` | - | Data attributes for the table toolbar search. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `onChange` | `React.ChangeEventHandler<HTMLInputElement>` | - | Handler for change events. |
| `value` | `string` | - | The value of the search input. |
| `placeholder` | `string` | - | The placeholder text for the search input. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏搜索框的内容。 |
| `className` | `string` | - | 表格工具栏搜索框的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏搜索框的样式。 |
| `role` | `string` | `"search"` | 表格工具栏搜索框的 ARIA role。 |
| `id` | `string` | - | 表格工具栏搜索框的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏搜索框的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏搜索框的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏搜索框的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `onChange` | `React.ChangeEventHandler<HTMLInputElement>` | - | 更改事件的处理器。 |
| `value` | `string` | - | 搜索输入框的值。 |
| `placeholder` | `string` | - | 搜索输入框的占位符文本。 |
GRAVITY_TRANSLATION_BLOCK_81_END
The `TableToolbarFilter` component is a wrapper for the `button` element.
`TableToolbarFilter` 组件是 `button` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_82_END
It is a semantic HTML element that can be used to display a filter button in a table toolbar.
它是一个语义化的 HTML 元素，可用于在表格工具栏中显示筛选按钮。
GRAVITY_TRANSLATION_BLOCK_83_END
The `TableToolbarFilter` component accepts the following props:
`TableToolbarFilter` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_84_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar filter. |
| `className` | `string` | - | The class name of the table toolbar filter. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar filter. |
| `role` | `string` | `"button"` | The ARIA role of the table toolbar filter. |
| `id` | `string` | - | The ID of the table toolbar filter. |
| `tabIndex` | `number` | - | The tab index of the table toolbar filter. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar filter. |
| `data-*` | `any` | - | Data attributes for the table toolbar filter. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `active` | `boolean` | `false` | Whether the filter is active. |
| `onClick` | `React.MouseEventHandler` | - | Handler for click events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏筛选器的内容。 |
| `className` | `string` | - | 表格工具栏筛选器的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏筛选器的样式。 |
| `role` | `string` | `"button"` | 表格工具栏筛选器的 ARIA role。 |
| `id` | `string` | - | 表格工具栏筛选器的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏筛选器的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏筛选器的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏筛选器的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `active` | `boolean` | `false` | 筛选器是否激活。 |
| `onClick` | `React.MouseEventHandler` | - | 点击事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_85_END
The `TableToolbarActions` component is a wrapper for the `div` element.
`TableToolbarActions` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_86_END
It is a semantic HTML element that can be used to display a group of actions in a table toolbar.
它是一个语义化的 HTML 元素，可用于在表格工具栏中显示一组操作。
GRAVITY_TRANSLATION_BLOCK_87_END
The `TableToolbarActions` component accepts the following props:
`TableToolbarActions` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_88_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar actions. |
| `className` | `string` | - | The class name of the table toolbar actions. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar actions. |
| `role` | `string` | `"group"` | The ARIA role of the table toolbar actions. |
| `id` | `string` | - | The ID of the table toolbar actions. |
| `tabIndex` | `number` | - | The tab index of the table toolbar actions. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar actions. |
| `data-*` | `any` | - | Data attributes for the table toolbar actions. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏操作的内容。 |
| `className` | `string` | - | 表格工具栏操作的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏操作的样式。 |
| `role` | `string` | `"group"` | 表格工具栏操作的 ARIA role。 |
| `id` | `string` | - | 表格工具栏操作的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏操作的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏操作的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏操作的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_89_END
The `TableToolbarAction` component is a wrapper for the `button` element.
`TableToolbarAction` 组件是 `button` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_90_END
It is a semantic HTML element that can be used to display an action button in a table toolbar.
它是一个语义化的 HTML 元素，可用于在表格工具栏中显示操作按钮。
GRAVITY_TRANSLATION_BLOCK_91_END
The `TableToolbarAction` component accepts the following props:
`TableToolbarAction` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_92_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar action. |
| `className` | `string` | - | The class name of the table toolbar action. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar action. |
| `role` | `string` | `"button"` | The ARIA role of the table toolbar action. |
| `id` | `string` | - | The ID of the table toolbar action. |
| `tabIndex` | `number` | - | The tab index of the table toolbar action. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar action. |
| `data-*` | `any` | - | Data attributes for the table toolbar action. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `onClick` | `React.MouseEventHandler` | - | Handler for click events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏操作的内容。 |
| `className` | `string` | - | 表格工具栏操作的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏操作的样式。 |
| `role` | `string` | `"button"` | 表格工具栏操作的 ARIA role。 |
| `id` | `string` | - | 表格工具栏操作的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏操作的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏操作的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏操作的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `onClick` | `React.MouseEventHandler` | - | 点击事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_93_END
The `TableToolbarDivider` component is a wrapper for the `div` element.
`TableToolbarDivider` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_94_END
It is a semantic HTML element that can be used to display a divider in a table toolbar.
它是一个语义化的 HTML 元素，可用于在表格工具栏中显示分隔符。
GRAVITY_TRANSLATION_BLOCK_95_END
The `TableToolbarDivider` component accepts the following props:
`TableToolbarDivider` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_96_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar divider. |
| `className` | `string` | - | The class name of the table toolbar divider. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar divider. |
| `role` | `string` | `"separator"` | The ARIA role of the table toolbar divider. |
| `id` | `string` | - | The ID of the table toolbar divider. |
| `tabIndex` | `number` | - | The tab index of the table toolbar divider. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar divider. |
| `data-*` | `any` | - | Data attributes for the table toolbar divider. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏分隔符的内容。 |
| `className` | `string` | - | 表格工具栏分隔符的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏分隔符的样式。 |
| `role` | `string` | `"separator"` | 表格工具栏分隔符的 ARIA role。 |
| `id` | `string` | - | 表格工具栏分隔符的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏分隔符的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏分隔符的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏分隔符的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_97_END
The `TableToolbarTitle` component is a wrapper for the `div` element.
`TableToolbarTitle` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_98_END
It is a semantic HTML element that can be used to display a title in a table toolbar.
它是一个语义化的 HTML 元素，可用于在表格工具栏中显示标题。
GRAVITY_TRANSLATION_BLOCK_99_END
The `TableToolbarTitle` component accepts the following props:
`TableToolbarTitle` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_100_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar title. |
| `className` | `string` | - | The class name of the table toolbar title. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar title. |
| `role` | `string` | `"heading"` | The ARIA role of the table toolbar title. |
| `id` | `string` | - | The ID of the table toolbar title. |
| `tabIndex` | `number` | - | The tab index of the table toolbar title. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar title. |
| `data-*` | `any` | - | Data attributes for the table toolbar title. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏标题的内容。 |
| `className` | `string` | - | 表格工具栏标题的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏标题的样式。 |
| `role` | `string` | `"heading"` | 表格工具栏标题的 ARIA role。 |
| `id` | `string` | - | 表格工具栏标题的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏标题的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏标题的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏标题的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_101_END
The `TableToolbarSpacer` component is a wrapper for the `div` element.
`TableToolbarSpacer` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_102_END
It is a semantic HTML element that can be used to create a spacer in a table toolbar.
它是一个语义化的 HTML 元素，可用于在表格工具栏中创建间隔符。
GRAVITY_TRANSLATION_BLOCK_103_END
The `TableToolbarSpacer` component accepts the following props:
`TableToolbarSpacer` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_104_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar spacer. |
| `className` | `string` | - | The class name of the table toolbar spacer. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar spacer. |
| `role` | `string` | `"none"` | The ARIA role of the table toolbar spacer. |
| `id` | `string` | - | The ID of the table toolbar spacer. |
| `tabIndex` | `number` | - | The tab index of the table toolbar spacer. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar spacer. |
| `data-*` | `any` | - | Data attributes for the table toolbar spacer. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏间隔符的内容。 |
| `className` | `string` | - | 表格工具栏间隔符的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏间隔符的样式。 |
| `role` | `string` | `"none"` | 表格工具栏间隔符的 ARIA role。 |
| `id` | `string` | - | 表格工具栏间隔符的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏间隔符的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏间隔符的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏间隔符的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_105_END
The `TableToolbarGroup` component is a wrapper for the `div` element.
`TableToolbarGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_106_END
It is a semantic HTML element that can be used to group related elements in a table toolbar.
它是一个语义化的 HTML 元素，可用于在表格工具栏中对相关元素进行分组。
GRAVITY_TRANSLATION_BLOCK_107_END
The `TableToolbarGroup` component accepts the following props:
`TableToolbarGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_108_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar group. |
| `className` | `string` | - | The class name of the table toolbar group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar group. |
| `role` | `string` | `"group"` | The ARIA role of the table toolbar group. |
| `id` | `string` | - | The ID of the table toolbar group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar group. |
| `data-*` | `any` | - | Data attributes for the table toolbar group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏组的内容。 |
| `className` | `string` | - | 表格工具栏组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏组的样式。 |
| `role` | `string` | `"group"` | 表格工具栏组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_109_END
The `TableToolbarSeparator` component is a wrapper for the `div` element.
`TableToolbarSeparator` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_110_END
It is a semantic HTML element that can be used to display a separator in a table toolbar.
它是一个语义化的 HTML 元素，可用于在表格工具栏中显示分隔符。
GRAVITY_TRANSLATION_BLOCK_111_END
The `TableToolbarSeparator` component accepts the following props:
`TableToolbarSeparator` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_112_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar separator. |
| `className` | `string` | - | The class name of the table toolbar separator. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar separator. |
| `role` | `string` | `"separator"` | The ARIA role of the table toolbar separator. |
| `id` | `string` | - | The ID of the table toolbar separator. |
| `tabIndex` | `number` | - | The tab index of the table toolbar separator. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar separator. |
| `data-*` | `any` | - | Data attributes for the table toolbar separator. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏分隔符的内容。 |
| `className` | `string` | - | 表格工具栏分隔符的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏分隔符的样式。 |
| `role` | `string` | `"separator"` | 表格工具栏分隔符的 ARIA role。 |
| `id` | `string` | - | 表格工具栏分隔符的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏分隔符的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏分隔符的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏分隔符的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_113_END
The `TableToolbarText` component is a wrapper for the `div` element.
`TableToolbarText` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_114_END
It is a semantic HTML element that can be used to display text in a table toolbar.
它是一个语义化的 HTML 元素，可用于在表格工具栏中显示文本。
GRAVITY_TRANSLATION_BLOCK_115_END
The `TableToolbarText` component accepts the following props:
`TableToolbarText` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_116_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar text. |
| `className` | `string` | - | The class name of the table toolbar text. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar text. |
| `role` | `string` | `"none"` | The ARIA role of the table toolbar text. |
| `id` | `string` | - | The ID of the table toolbar text. |
| `tabIndex` | `number` | - | The tab index of the table toolbar text. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar text. |
| `data-*` | `any` | - | Data attributes for the table toolbar text. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏文本的内容。 |
| `className` | `string` | - | 表格工具栏文本的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏文本的样式。 |
| `role` | `string` | `"none"` | 表格工具栏文本的 ARIA role。 |
| `id` | `string` | - | 表格工具栏文本的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏文本的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏文本的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏文本的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_117_END
The `TableToolbarIcon` component is a wrapper for the `button` element.
`TableToolbarIcon` 组件是 `button` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_118_END
It is a semantic HTML element that can be used to display an icon button in a table toolbar.
它是一个语义化的 HTML 元素，可用于在表格工具栏中显示图标按钮。
GRAVITY_TRANSLATION_BLOCK_119_END
The `TableToolbarIcon` component accepts the following props:
`TableToolbarIcon` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_120_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar icon. |
| `className` | `string` | - | The class name of the table toolbar icon. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar icon. |
| `role` | `string` | `"button"` | The ARIA role of the table toolbar icon. |
| `id` | `string` | - | The ID of the table toolbar icon. |
| `tabIndex` | `number` | - | The tab index of the table toolbar icon. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar icon. |
| `data-*` | `any` | - | Data attributes for the table toolbar icon. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `onClick` | `React.MouseEventHandler` | - | Handler for click events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏图标的内容。 |
| `className` | `string` | - | 表格工具栏图标的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏图标的样式。 |
| `role` | `string` | `"button"` | 表格工具栏图标的 ARIA role。 |
| `id` | `string` | - | 表格工具栏图标的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏图标的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏图标的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏图标的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `onClick` | `React.MouseEventHandler` | - | 点击事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_121_END
The `TableToolbarMenuButton` component is a wrapper for the `button` element.
`TableToolbarMenuButton` 组件是 `button` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_122_END
It is a semantic HTML element that can be used to display a menu button in a table toolbar.
它是一个语义化的 HTML 元素，可用于在表格工具栏中显示菜单按钮。
GRAVITY_TRANSLATION_BLOCK_123_END
The `TableToolbarMenuButton` component accepts the following props:
`TableToolbarMenuButton` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_124_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu button. |
| `className` | `string` | - | The class name of the table toolbar menu button. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu button. |
| `role` | `string` | `"button"` | The ARIA role of the table toolbar menu button. |
| `id` | `string` | - | The ID of the table toolbar menu button. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu button. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu button. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu button. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `onClick` | `React.MouseEventHandler` | - | Handler for click events. |
| `expanded` | `boolean` | `false` | Whether the menu is expanded. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单按钮的内容。 |
| `className` | `string` | - | 表格工具栏菜单按钮的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单按钮的样式。 |
| `role` | `string` | `"button"` | 表格工具栏菜单按钮的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单按钮的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单按钮的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单按钮的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单按钮的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `onClick` | `React.MouseEventHandler` | - | 点击事件的处理器。 |
| `expanded` | `boolean` | `false` | 菜单是否展开。 |
GRAVITY_TRANSLATION_BLOCK_125_END
The `TableToolbarMenuDivider` component is a wrapper for the `div` element.
`TableToolbarMenuDivider` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_126_END
It is a semantic HTML element that can be used to display a divider in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示分隔符。
GRAVITY_TRANSLATION_BLOCK_127_END
The `TableToolbarMenuDivider` component accepts the following props:
`TableToolbarMenuDivider` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_128_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu divider. |
| `className` | `string` | - | The class name of the table toolbar menu divider. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu divider. |
| `role` | `string` | `"separator"` | The ARIA role of the table toolbar menu divider. |
| `id` | `string` | - | The ID of the table toolbar menu divider. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu divider. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu divider. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu divider. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单分隔符的内容。 |
| `className` | `string` | - | 表格工具栏菜单分隔符的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单分隔符的样式。 |
| `role` | `string` | `"separator"` | 表格工具栏菜单分隔符的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单分隔符的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单分隔符的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单分隔符的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单分隔符的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_129_END
The `TableToolbarMenuItemLink` component is a wrapper for the `a` element.
`TableToolbarMenuItemLink` 组件是 `a` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_130_END
It is a semantic HTML element that can be used to display a link in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示链接。
GRAVITY_TRANSLATION_BLOCK_131_END
The `TableToolbarMenuItemLink` component accepts the following props:
`TableToolbarMenuItemLink` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_132_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link. |
| `className` | `string` | - | The class name of the table toolbar menu item link. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link. |
| `role` | `string` | `"menuitem"` | The ARIA role of the table toolbar menu item link. |
| `id` | `string` | - | The ID of the table toolbar menu item link. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `href` | `string` | - | The URL of the link. |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | The target of the link. |
| `rel` | `string` | - | The relationship of the link. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接的样式。 |
| `role` | `string` | `"menuitem"` | 表格工具栏菜单项链接的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `href` | `string` | - | 链接的 URL。 |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | 链接的目标。 |
| `rel` | `string` | - | 链接的关系。 |
GRAVITY_TRANSLATION_BLOCK_133_END
The `TableToolbarMenuItemCheckbox` component is a wrapper for the `button` element.
`TableToolbarMenuItemCheckbox` 组件是 `button` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_134_END
It is a semantic HTML element that can be used to display a checkbox menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示复选框菜单项。
GRAVITY_TRANSLATION_BLOCK_135_END
The `TableToolbarMenuItemCheckbox` component accepts the following props:
`TableToolbarMenuItemCheckbox` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_136_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item checkbox. |
| `className` | `string` | - | The class name of the table toolbar menu item checkbox. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item checkbox. |
| `role` | `string` | `"menuitemcheckbox"` | The ARIA role of the table toolbar menu item checkbox. |
| `id` | `string` | - | The ID of the table toolbar menu item checkbox. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item checkbox. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item checkbox. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item checkbox. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `checked` | `boolean` | `false` | Whether the checkbox is checked. |
| `onChange` | `() => void` | - | Callback function when the checkbox is changed. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项复选框的内容。 |
| `className` | `string` | - | 表格工具栏菜单项复选框的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项复选框的样式。 |
| `role` | `string` | `"menuitemcheckbox"` | 表格工具栏菜单项复选框的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项复选框的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项复选框的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项复选框的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项复选框的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `checked` | `boolean` | `false` | 复选框是否被选中。 |
| `onChange` | `() => void` | - | 复选框更改时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_137_END
The `TableToolbarMenuItemRadio` component is a wrapper for the `button` element.
`TableToolbarMenuItemRadio` 组件是 `button` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_138_END
It is a semantic HTML element that can be used to display a radio button menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示单选按钮菜单项。
GRAVITY_TRANSLATION_BLOCK_139_END
The `TableToolbarMenuItemRadio` component accepts the following props:
`TableToolbarMenuItemRadio` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_140_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item radio. |
| `className` | `string` | - | The class name of the table toolbar menu item radio. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item radio. |
| `role` | `string` | `"menuitemradio"` | The ARIA role of the table toolbar menu item radio. |
| `id` | `string` | - | The ID of the table toolbar menu item radio. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item radio. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item radio. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item radio. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `checked` | `boolean` | `false` | Whether the radio button is checked. |
| `onChange` | `() => void` | - | Callback function when the radio button is changed. |
| `name` | `string` | - | The name of the radio button group. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项单选按钮的内容。 |
| `className` | `string` | - | 表格工具栏菜单项单选按钮的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项单选按钮的样式。 |
| `role` | `string` | `"menuitemradio"` | 表格工具栏菜单项单选按钮的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项单选按钮的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项单选按钮的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项单选按钮的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项单选按钮的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `checked` | `boolean` | `false` | 单选按钮是否被选中。 |
| `onChange` | `() => void` | - | 单选按钮更改时的回调函数。 |
| `name` | `string` | - | 单选按钮组的名称。 |
GRAVITY_TRANSLATION_BLOCK_141_END
The `TableToolbarMenuItemRadioGroup` component is a wrapper for the `div` element.
`TableToolbarMenuItemRadioGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_142_END
It is a semantic HTML element that can be used to group radio button menu items in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中对单选按钮菜单项进行分组。
GRAVITY_TRANSLATION_BLOCK_143_END
The `TableToolbarMenuItemRadioGroup` component accepts the following props:
`TableToolbarMenuItemRadioGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_144_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item radio group. |
| `className` | `string` | - | The class name of the table toolbar menu item radio group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item radio group. |
| `role` | `string` | `"radiogroup"` | The ARIA role of the table toolbar menu item radio group. |
| `id` | `string` | - | The ID of the table toolbar menu item radio group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item radio group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item radio group. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item radio group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `value` | `string` | - | The value of the selected radio button. |
| `onChange` | `(value: string) => void` | - | Callback function when the selected radio button changes. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项单选按钮组的内容。 |
| `className` | `string` | - | 表格工具栏菜单项单选按钮组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项单选按钮组的样式。 |
| `role` | `string` | `"radiogroup"` | 表格工具栏菜单项单选按钮组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项单选按钮组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项单选按钮组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项单选按钮组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项单选按钮组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `value` | `string` | - | 选中的单选按钮的值。 |
| `onChange` | `(value: string) => void` | - | 选中的单选按钮改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_145_END
The `TableToolbarMenuItemCheckboxGroup` component is a wrapper for the `div` element.
`TableToolbarMenuItemCheckboxGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_146_END
It is a semantic HTML element that can be used to group checkbox menu items in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中对复选框菜单项进行分组。
GRAVITY_TRANSLATION_BLOCK_147_END
The `TableToolbarMenuItemCheckboxGroup` component accepts the following props:
`TableToolbarMenuItemCheckboxGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_148_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item checkbox group. |
| `className` | `string` | - | The class name of the table toolbar menu item checkbox group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item checkbox group. |
| `role` | `string` | `"group"` | The ARIA role of the table toolbar menu item checkbox group. |
| `id` | `string` | - | The ID of the table toolbar menu item checkbox group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item checkbox group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item checkbox group. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item checkbox group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `value` | `string[]` | `[]` | The values of the selected checkboxes. |
| `onChange` | `(value: string[]) => void` | - | Callback function when the selected checkboxes change. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项复选框组的内容。 |
| `className` | `string` | - | 表格工具栏菜单项复选框组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项复选框组的样式。 |
| `role` | `string` | `"group"` | 表格工具栏菜单项复选框组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项复选框组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项复选框组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项复选框组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项复选框组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `value` | `string[]` | `[]` | 选中的复选框的值。 |
| `onChange` | `(value: string[]) => void` | - | 选中的复选框改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_149_END
The `TableToolbarMenuItemLinkGroup` component is a wrapper for the `div` element.
`TableToolbarMenuItemLinkGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_150_END
It is a semantic HTML element that can be used to group link menu items in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中对链接菜单项进行分组。
GRAVITY_TRANSLATION_BLOCK_151_END
The `TableToolbarMenuItemLinkGroup` component accepts the following props:
`TableToolbarMenuItemLinkGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_152_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link group. |
| `className` | `string` | - | The class name of the table toolbar menu item link group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link group. |
| `role` | `string` | `"group"` | The ARIA role of the table toolbar menu item link group. |
| `id` | `string` | - | The ID of the table toolbar menu item link group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link group. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接组的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接组的样式。 |
| `role` | `string` | `"group"` | 表格工具栏菜单项链接组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
GRAVITY_TRANSLATION_BLOCK_153_END
The `TableToolbarMenuItemLinkCheckbox` component is a wrapper for the `a` element.
`TableToolbarMenuItemLinkCheckbox` 组件是 `a` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_154_END
It is a semantic HTML element that can be used to display a checkbox link menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示复选框链接菜单项。
GRAVITY_TRANSLATION_BLOCK_155_END
The `TableToolbarMenuItemLinkCheckbox` component accepts the following props:
`TableToolbarMenuItemLinkCheckbox` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_156_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link checkbox. |
| `className` | `string` | - | The class name of the table toolbar menu item link checkbox. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link checkbox. |
| `role` | `string` | `"menuitemcheckbox"` | The ARIA role of the table toolbar menu item link checkbox. |
| `id` | `string` | - | The ID of the table toolbar menu item link checkbox. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link checkbox. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link checkbox. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link checkbox. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `href` | `string` | - | The URL of the link. |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | The target of the link. |
| `rel` | `string` | - | The relationship of the link. |
| `checked` | `boolean` | `false` | Whether the checkbox is checked. |
| `onChange` | `() => void` | - | Callback function when the checkbox is changed. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接复选框的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接复选框的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接复选框的样式。 |
| `role` | `string` | `"menuitemcheckbox"` | 表格工具栏菜单项链接复选框的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接复选框的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接复选框的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接复选框的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接复选框的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `href` | `string` | - | 链接的 URL。 |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | 链接的目标。 |
| `rel` | `string` | - | 链接的关系。 |
| `checked` | `boolean` | `false` | 复选框是否被选中。 |
| `onChange` | `() => void` | - | 复选框更改时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_157_END
The `TableToolbarMenuItemLinkRadio` component is a wrapper for the `a` element.
`TableToolbarMenuItemLinkRadio` 组件是 `a` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_158_END
It is a semantic HTML element that can be used to display a radio button link menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示单选按钮链接菜单项。
GRAVITY_TRANSLATION_BLOCK_159_END
The `TableToolbarMenuItemLinkRadio` component accepts the following props:
`TableToolbarMenuItemLinkRadio` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_160_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link radio. |
| `className` | `string` | - | The class name of the table toolbar menu item link radio. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link radio. |
| `role` | `string` | `"menuitemradio"` | The ARIA role of the table toolbar menu item link radio. |
| `id` | `string` | - | The ID of the table toolbar menu item link radio. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link radio. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link radio. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link radio. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `href` | `string` | - | The URL of the link. |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | The target of the link. |
| `rel` | `string` | - | The relationship of the link. |
| `checked` | `boolean` | `false` | Whether the radio button is checked. |
| `onChange` | `() => void` | - | Callback function when the radio button is changed. |
| `name` | `string` | - | The name of the radio button group. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接单选按钮的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接单选按钮的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接单选按钮的样式。 |
| `role` | `string` | `"menuitemradio"` | 表格工具栏菜单项链接单选按钮的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接单选按钮的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接单选按钮的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接单选按钮的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接单选按钮的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `href` | `string` | - | 链接的 URL。 |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | 链接的目标。 |
| `rel` | `string` | - | 链接的关系。 |
| `checked` | `boolean` | `false` | 单选按钮是否被选中。 |
| `onChange` | `() => void` | - | 单选按钮更改时的回调函数。 |
| `name` | `string` | - | 单选按钮组的名称。 |
GRAVITY_TRANSLATION_BLOCK_161_END
The `TableToolbarMenuItemLinkCheckboxGroup` component is a wrapper for the `div` element.
`TableToolbarMenuItemLinkCheckboxGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_162_END
It is a semantic HTML element that can be used to group checkbox link menu items in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中对复选框链接菜单项进行分组。
GRAVITY_TRANSLATION_BLOCK_163_END
The `TableToolbarMenuItemLinkCheckboxGroup` component accepts the following props:
`TableToolbarMenuItemLinkCheckboxGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_164_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link checkbox group. |
| `className` | `string` | - | The class name of the table toolbar menu item link checkbox group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link checkbox group. |
| `role` | `string` | `"group"` | The ARIA role of the table toolbar menu item link checkbox group. |
| `id` | `string` | - | The ID of the table toolbar menu item link checkbox group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link checkbox group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link checkbox group. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link checkbox group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `value` | `string[]` | `[]` | The values of the selected checkboxes. |
| `onChange` | `(value: string[]) => void` | - | Callback function when the selected checkboxes change. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接复选框组的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接复选框组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接复选框组的样式。 |
| `role` | `string` | `"group"` | 表格工具栏菜单项链接复选框组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接复选框组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接复选框组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接复选框组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接复选框组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `value` | `string[]` | `[]` | 选中的复选框的值。 |
| `onChange` | `(value: string[]) => void` | - | 选中的复选框改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_165_END
The `TableToolbarMenuItemLinkRadioGroup` component is a wrapper for the `div` element.
`TableToolbarMenuItemLinkRadioGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_166_END
It is a semantic HTML element that can be used to group radio button link menu items in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中对单选按钮链接菜单项进行分组。
GRAVITY_TRANSLATION_BLOCK_167_END
The `TableToolbarMenuItemLinkRadioGroup` component accepts the following props:
`TableToolbarMenuItemLinkRadioGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_168_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link radio group. |
| `className` | `string` | - | The class name of the table toolbar menu item link radio group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link radio group. |
| `role` | `string` | `"radiogroup"` | The ARIA role of the table toolbar menu item link radio group. |
| `id` | `string` | - | The ID of the table toolbar menu item link radio group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link radio group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link radio group. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link radio group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `value` | `string` | - | The value of the selected radio button. |
| `onChange` | `(value: string) => void` | - | Callback function when the selected radio button changes. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接单选按钮组的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接单选按钮组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接单选按钮组的样式。 |
| `role` | `string` | `"radiogroup"` | 表格工具栏菜单项链接单选按钮组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接单选按钮组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接单选按钮组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接单选按钮组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接单选按钮组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `value` | `string` | - | 选中的单选按钮的值。 |
| `onChange` | `(value: string) => void` | - | 选中的单选按钮改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_169_END
The `TableToolbarMenuItemLinkCheckbox` component is a wrapper for the `a` element.
`TableToolbarMenuItemLinkCheckbox` 组件是 `a` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_170_END
It is a semantic HTML element that can be used to display a checkbox link menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示复选框链接菜单项。
GRAVITY_TRANSLATION_BLOCK_171_END
The `TableToolbarMenuItemLinkCheckbox` component accepts the following props:
`TableToolbarMenuItemLinkCheckbox` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_172_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link checkbox. |
| `className` | `string` | - | The class name of the table toolbar menu item link checkbox. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link checkbox. |
| `role` | `string` | `"menuitemcheckbox"` | The ARIA role of the table toolbar menu item link checkbox. |
| `id` | `string` | - | The ID of the table toolbar menu item link checkbox. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link checkbox. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link checkbox. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link checkbox. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `href` | `string` | - | The URL of the link. |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | The target of the link. |
| `rel` | `string` | - | The relationship of the link. |
| `checked` | `boolean` | `false` | Whether the checkbox is checked. |
| `onChange` | `() => void` | - | Callback function when the checkbox is changed. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接复选框的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接复选框的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接复选框的样式。 |
| `role` | `string` | `"menuitemcheckbox"` | 表格工具栏菜单项链接复选框的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接复选框的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接复选框的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接复选框的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接复选框的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `href` | `string` | - | 链接的 URL。 |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | 链接的目标。 |
| `rel` | `string` | - | 链接的关系。 |
| `checked` | `boolean` | `false` | 复选框是否被选中。 |
| `onChange` | `() => void` | - | 复选框更改时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_173_END
The `TableToolbarMenuItemLinkRadio` component is a wrapper for the `a` element.
`TableToolbarMenuItemLinkRadio` 组件是 `a` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_174_END
It is a semantic HTML element that can be used to display a radio button link menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示单选按钮链接菜单项。
GRAVITY_TRANSLATION_BLOCK_175_END
The `TableToolbarMenuItemLinkRadio` component accepts the following props:
`TableToolbarMenuItemLinkRadio` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_176_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link radio. |
| `className` | `string` | - | The class name of the table toolbar menu item link radio. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link radio. |
| `role` | `string` | `"menuitemradio"` | The ARIA role of the table toolbar menu item link radio. |
| `id` | `string` | - | The ID of the table toolbar menu item link radio. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link radio. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link radio. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link radio. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `href` | `string` | - | The URL of the link. |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | The target of the link. |
| `rel` | `string` | - | The relationship of the link. |
| `checked` | `boolean` | `false` | Whether the radio button is checked. |
| `onChange` | `() => void` | - | Callback function when the radio button is changed. |
| `name` | `string` | - | The name of the radio button group. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接单选按钮的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接单选按钮的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接单选按钮的样式。 |
| `role` | `string` | `"menuitemradio"` | 表格工具栏菜单项链接单选按钮的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接单选按钮的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接单选按钮的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接单选按钮的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接单选按钮的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `href` | `string` | - | 链接的 URL。 |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | 链接的目标。 |
| `rel` | `string` | - | 链接的关系。 |
| `checked` | `boolean` | `false` | 单选按钮是否被选中。 |
| `onChange` | `() => void` | - | 单选按钮更改时的回调函数。 |
| `name` | `string` | - | 单选按钮组的名称。 |
GRAVITY_TRANSLATION_BLOCK_177_END
The `TableToolbarMenuItemLinkCheckboxGroup` component is a wrapper for the `div` element.
`TableToolbarMenuItemLinkCheckboxGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_178_END
It is a semantic HTML element that can be used to group checkbox link menu items in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中对复选框链接菜单项进行分组。
GRAVITY_TRANSLATION_BLOCK_179_END
The `TableToolbarMenuItemLinkCheckboxGroup` component accepts the following props:
`TableToolbarMenuItemLinkCheckboxGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_180_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link checkbox group. |
| `className` | `string` | - | The class name of the table toolbar menu item link checkbox group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link checkbox group. |
| `role` | `string` | `"group"` | The ARIA role of the table toolbar menu item link checkbox group. |
| `id` | `string` | - | The ID of the table toolbar menu item link checkbox group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link checkbox group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link checkbox group. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link checkbox group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `value` | `string[]` | `[]` | The values of the selected checkboxes. |
| `onChange` | `(value: string[]) => void` | - | Callback function when the selected checkboxes change. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接复选框组的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接复选框组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接复选框组的样式。 |
| `role` | `string` | `"group"` | 表格工具栏菜单项链接复选框组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接复选框组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接复选框组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接复选框组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接复选框组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `value` | `string[]` | `[]` | 选中的复选框的值。 |
| `onChange` | `(value: string[]) => void` | - | 选中的复选框改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_181_END
The `TableToolbarMenuItemLinkRadioGroup` component is a wrapper for the `div` element.
`TableToolbarMenuItemLinkRadioGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_182_END
It is a semantic HTML element that can be used to group radio button link menu items in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中对单选按钮链接菜单项进行分组。
GRAVITY_TRANSLATION_BLOCK_183_END
The `TableToolbarMenuItemLinkRadioGroup` component accepts the following props:
`TableToolbarMenuItemLinkRadioGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_184_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link radio group. |
| `className` | `string` | - | The class name of the table toolbar menu item link radio group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link radio group. |
| `role` | `string` | `"radiogroup"` | The ARIA role of the table toolbar menu item link radio group. |
| `id` | `string` | - | The ID of the table toolbar menu item link radio group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link radio group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link radio group. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link radio group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `value` | `string` | - | The value of the selected radio button. |
| `onChange` | `(value: string) => void` | - | Callback function when the selected radio button changes. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接单选按钮组的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接单选按钮组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接单选按钮组的样式。 |
| `role` | `string` | `"radiogroup"` | 表格工具栏菜单项链接单选按钮组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接单选按钮组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接单选按钮组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接单选按钮组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接单选按钮组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `value` | `string` | - | 选中的单选按钮的值。 |
| `onChange` | `(value: string) => void` | - | 选中的单选按钮改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_185_END
The `TableToolbarMenuItemLinkCheckbox` component is a wrapper for the `a` element.
`TableToolbarMenuItemLinkCheckbox` 组件是 `a` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_186_END
It is a semantic HTML element that can be used to display a checkbox link menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示复选框链接菜单项。
GRAVITY_TRANSLATION_BLOCK_187_END
The `TableToolbarMenuItemLinkCheckbox` component accepts the following props:
`TableToolbarMenuItemLinkCheckbox` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_188_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link checkbox. |
| `className` | `string` | - | The class name of the table toolbar menu item link checkbox. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link checkbox. |
| `role` | `string` | `"menuitemcheckbox"` | The ARIA role of the table toolbar menu item link checkbox. |
| `id` | `string` | - | The ID of the table toolbar menu item link checkbox. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link checkbox. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link checkbox. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link checkbox. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `href` | `string` | - | The URL of the link. |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | The target of the link. |
| `rel` | `string` | - | The relationship of the link. |
| `checked` | `boolean` | `false` | Whether the checkbox is checked. |
| `onChange` | `() => void` | - | Callback function when the checkbox is changed. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接复选框的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接复选框的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接复选框的样式。 |
| `role` | `string` | `"menuitemcheckbox"` | 表格工具栏菜单项链接复选框的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接复选框的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接复选框的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接复选框的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接复选框的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `href` | `string` | - | 链接的 URL。 |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | 链接的目标。 |
| `rel` | `string` | - | 链接的关系。 |
| `checked` | `boolean` | `false` | 复选框是否被选中。 |
| `onChange` | `() => void` | - | 复选框更改时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_189_END
The `TableToolbarMenuItemLinkRadio` component is a wrapper for the `a` element.
`TableToolbarMenuItemLinkRadio` 组件是 `a` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_190_END
It is a semantic HTML element that can be used to display a radio button link menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示单选按钮链接菜单项。
GRAVITY_TRANSLATION_BLOCK_191_END
The `TableToolbarMenuItemLinkRadio` component accepts the following props:
`TableToolbarMenuItemLinkRadio` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_192_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link radio. |
| `className` | `string` | - | The class name of the table toolbar menu item link radio. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link radio. |
| `role` | `string` | `"menuitemradio"` | The ARIA role of the table toolbar menu item link radio. |
| `id` | `string` | - | The ID of the table toolbar menu item link radio. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link radio. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link radio. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link radio. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `href` | `string` | - | The URL of the link. |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | The target of the link. |
| `rel` | `string` | - | The relationship of the link. |
| `checked` | `boolean` | `false` | Whether the radio button is checked. |
| `onChange` | `() => void` | - | Callback function when the radio button is changed. |
| `name` | `string` | - | The name of the radio button group. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接单选按钮的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接单选按钮的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接单选按钮的样式。 |
| `role` | `string` | `"menuitemradio"` | 表格工具栏菜单项链接单选按钮的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接单选按钮的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接单选按钮的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接单选按钮的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接单选按钮的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `href` | `string` | - | 链接的 URL。 |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | 链接的目标。 |
| `rel` | `string` | - | 链接的关系。 |
| `checked` | `boolean` | `false` | 单选按钮是否被选中。 |
| `onChange` | `() => void` | - | 单选按钮更改时的回调函数。 |
| `name` | `string` | - | 单选按钮组的名称。 |
GRAVITY_TRANSLATION_BLOCK_193_END
The `TableToolbarMenuItemLinkCheckboxGroup` component is a wrapper for the `div` element.
`TableToolbarMenuItemLinkCheckboxGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_194_END
It is a semantic HTML element that can be used to group checkbox link menu items in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中对复选框链接菜单项进行分组。
GRAVITY_TRANSLATION_BLOCK_195_END
The `TableToolbarMenuItemLinkCheckboxGroup` component accepts the following props:
`TableToolbarMenuItemLinkCheckboxGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_196_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link checkbox group. |
| `className` | `string` | - | The class name of the table toolbar menu item link checkbox group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link checkbox group. |
| `role` | `string` | `"group"` | The ARIA role of the table toolbar menu item link checkbox group. |
| `id` | `string` | - | The ID of the table toolbar menu item link checkbox group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link checkbox group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link checkbox group. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link checkbox group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `value` | `string[]` | `[]` | The values of the selected checkboxes. |
| `onChange` | `(value: string[]) => void` | - | Callback function when the selected checkboxes change. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接复选框组的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接复选框组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接复选框组的样式。 |
| `role` | `string` | `"group"` | 表格工具栏菜单项链接复选框组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接复选框组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接复选框组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接复选框组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接复选框组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `value` | `string[]` | `[]` | 选中的复选框的值。 |
| `onChange` | `(value: string[]) => void` | - | 选中的复选框改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_197_END
The `TableToolbarMenuItemLinkRadioGroup` component is a wrapper for the `div` element.
`TableToolbarMenuItemLinkRadioGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_198_END
It is a semantic HTML element that can be used to group radio button link menu items in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中对单选按钮链接菜单项进行分组。
GRAVITY_TRANSLATION_BLOCK_199_END
The `TableToolbarMenuItemLinkRadioGroup` component accepts the following props:
`TableToolbarMenuItemLinkRadioGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_200_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link radio group. |
| `className` | `string` | - | The class name of the table toolbar menu item link radio group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link radio group. |
| `role` | `string` | `"radiogroup"` | The ARIA role of the table toolbar menu item link radio group. |
| `id` | `string` | - | The ID of the table toolbar menu item link radio group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link radio group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link radio group. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link radio group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `value` | `string` | - | The value of the selected radio button. |
| `onChange` | `(value: string) => void` | - | Callback function when the selected radio button changes. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接单选按钮组的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接单选按钮组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接单选按钮组的样式。 |
| `role` | `string` | `"radiogroup"` | 表格工具栏菜单项链接单选按钮组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接单选按钮组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接单选按钮组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接单选按钮组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接单选按钮组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `value` | `string` | - | 选中的单选按钮的值。 |
| `onChange` | `(value: string) => void` | - | 选中的单选按钮改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_201_END
The `TableToolbarMenuItemLinkCheckbox` component is a wrapper for the `a` element.
`TableToolbarMenuItemLinkCheckbox` 组件是 `a` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_202_END
It is a semantic HTML element that can be used to display a checkbox link menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示复选框链接菜单项。
GRAVITY_TRANSLATION_BLOCK_203_END
The `TableToolbarMenuItemLinkCheckbox` component accepts the following props:
`TableToolbarMenuItemLinkCheckbox` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_204_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link checkbox. |
| `className` | `string` | - | The class name of the table toolbar menu item link checkbox. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link checkbox. |
| `role` | `string` | `"menuitemcheckbox"` | The ARIA role of the table toolbar menu item link checkbox. |
| `id` | `string` | - | The ID of the table toolbar menu item link checkbox. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link checkbox. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link checkbox. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link checkbox. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `href` | `string` | - | The URL of the link. |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | The target of the link. |
| `rel` | `string` | - | The relationship of the link. |
| `checked` | `boolean` | `false` | Whether the checkbox is checked. |
| `onChange` | `() => void` | - | Callback function when the checkbox is changed. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接复选框的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接复选框的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接复选框的样式。 |
| `role` | `string` | `"menuitemcheckbox"` | 表格工具栏菜单项链接复选框的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接复选框的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接复选框的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接复选框的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接复选框的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `href` | `string` | - | 链接的 URL。 |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | 链接的目标。 |
| `rel` | `string` | - | 链接的关系。 |
| `checked` | `boolean` | `false` | 复选框是否被选中。 |
| `onChange` | `() => void` | - | 复选框更改时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_205_END
The `TableToolbarMenuItemLinkRadio` component is a wrapper for the `a` element.
`TableToolbarMenuItemLinkRadio` 组件是 `a` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_206_END
It is a semantic HTML element that can be used to display a radio button link menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示单选按钮链接菜单项。
GRAVITY_TRANSLATION_BLOCK_207_END
The `TableToolbarMenuItemLinkRadio` component accepts the following props:
`TableToolbarMenuItemLinkRadio` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_208_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link radio. |
| `className` | `string` | - | The class name of the table toolbar menu item link radio. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link radio. |
| `role` | `string` | `"menuitemradio"` | The ARIA role of the table toolbar menu item link radio. |
| `id` | `string` | - | The ID of the table toolbar menu item link radio. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link radio. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link radio. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link radio. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `href` | `string` | - | The URL of the link. |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | The target of the link. |
| `rel` | `string` | - | The relationship of the link. |
| `checked` | `boolean` | `false` | Whether the radio button is checked. |
| `onChange` | `() => void` | - | Callback function when the radio button is changed. |
| `name` | `string` | - | The name of the radio button group. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接单选按钮的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接单选按钮的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接单选按钮的样式。 |
| `role` | `string` | `"menuitemradio"` | 表格工具栏菜单项链接单选按钮的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接单选按钮的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接单选按钮的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接单选按钮的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接单选按钮的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `href` | `string` | - | 链接的 URL。 |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | 链接的目标。 |
| `rel` | `string` | - | 链接的关系。 |
| `checked` | `boolean` | `false` | 单选按钮是否被选中。 |
| `onChange` | `() => void` | - | 单选按钮更改时的回调函数。 |
| `name` | `string` | - | 单选按钮组的名称。 |
GRAVITY_TRANSLATION_BLOCK_209_END
The `TableToolbarMenuItemLinkCheckboxGroup` component is a wrapper for the `div` element.
`TableToolbarMenuItemLinkCheckboxGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_210_END
It is a semantic HTML element that can be used to group checkbox link menu items in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中对复选框链接菜单项进行分组。
GRAVITY_TRANSLATION_BLOCK_211_END
The `TableToolbarMenuItemLinkCheckboxGroup` component accepts the following props:
`TableToolbarMenuItemLinkCheckboxGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_212_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link checkbox group. |
| `className` | `string` | - | The class name of the table toolbar menu item link checkbox group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link checkbox group. |
| `role` | `string` | `"group"` | The ARIA role of the table toolbar menu item link checkbox group. |
| `id` | `string` | - | The ID of the table toolbar menu item link checkbox group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link checkbox group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link checkbox group. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link checkbox group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `value` | `string[]` | `[]` | The values of the selected checkboxes. |
| `onChange` | `(value: string[]) => void` | - | Callback function when the selected checkboxes change. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接复选框组的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接复选框组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接复选框组的样式。 |
| `role` | `string` | `"group"` | 表格工具栏菜单项链接复选框组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接复选框组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接复选框组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接复选框组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接复选框组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `value` | `string[]` | `[]` | 选中的复选框的值。 |
| `onChange` | `(value: string[]) => void` | - | 选中的复选框改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_213_END
The `TableToolbarMenuItemLinkRadioGroup` component is a wrapper for the `div` element.
`TableToolbarMenuItemLinkRadioGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_214_END
It is a semantic HTML element that can be used to group radio button link menu items in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中对单选按钮链接菜单项进行分组。
GRAVITY_TRANSLATION_BLOCK_215_END
The `TableToolbarMenuItemLinkRadioGroup` component accepts the following props:
`TableToolbarMenuItemLinkRadioGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_216_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link radio group. |
| `className` | `string` | - | The class name of the table toolbar menu item link radio group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link radio group. |
| `role` | `string` | `"radiogroup"` | The ARIA role of the table toolbar menu item link radio group. |
| `id` | `string` | - | The ID of the table toolbar menu item link radio group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link radio group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link radio group. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link radio group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `value` | `string` | - | The value of the selected radio button. |
| `onChange` | `(value: string) => void` | - | Callback function when the selected radio button changes. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接单选按钮组的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接单选按钮组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接单选按钮组的样式。 |
| `role` | `string` | `"radiogroup"` | 表格工具栏菜单项链接单选按钮组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接单选按钮组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接单选按钮组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接单选按钮组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接单选按钮组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `value` | `string` | - | 选中的单选按钮的值。 |
| `onChange` | `(value: string) => void` | - | 选中的单选按钮改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_217_END
The `TableToolbarMenuItemLinkCheckbox` component is a wrapper for the `a` element.
`TableToolbarMenuItemLinkCheckbox` 组件是 `a` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_218_END
It is a semantic HTML element that can be used to display a checkbox link menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示复选框链接菜单项。
GRAVITY_TRANSLATION_BLOCK_219_END
The `TableToolbarMenuItemLinkCheckbox` component accepts the following props:
`TableToolbarMenuItemLinkCheckbox` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_220_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link checkbox. |
| `className` | `string` | - | The class name of the table toolbar menu item link checkbox. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link checkbox. |
| `role` | `string` | `"menuitemcheckbox"` | The ARIA role of the table toolbar menu item link checkbox. |
| `id` | `string` | - | The ID of the table toolbar menu item link checkbox. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link checkbox. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link checkbox. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link checkbox. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `href` | `string` | - | The URL of the link. |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | The target of the link. |
| `rel` | `string` | - | The relationship of the link. |
| `checked` | `boolean` | `false` | Whether the checkbox is checked. |
| `onChange` | `() => void` | - | Callback function when the checkbox is changed. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接复选框的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接复选框的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接复选框的样式。 |
| `role` | `string` | `"menuitemcheckbox"` | 表格工具栏菜单项链接复选框的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接复选框的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接复选框的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接复选框的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接复选框的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `href` | `string` | - | 链接的 URL。 |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | 链接的目标。 |
| `rel` | `string` | - | 链接的关系。 |
| `checked` | `boolean` | `false` | 复选框是否被选中。 |
| `onChange` | `() => void` | - | 复选框更改时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_221_END
The `TableToolbarMenuItemLinkRadio` component is a wrapper for the `a` element.
`TableToolbarMenuItemLinkRadio` 组件是 `a` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_222_END
It is a semantic HTML element that can be used to display a radio button link menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示单选按钮链接菜单项。
GRAVITY_TRANSLATION_BLOCK_223_END
The `TableToolbarMenuItemLinkRadio` component accepts the following props:
`TableToolbarMenuItemLinkRadio` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_224_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link radio. |
| `className` | `string` | - | The class name of the table toolbar menu item link radio. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link radio. |
| `role` | `string` | `"menuitemradio"` | The ARIA role of the table toolbar menu item link radio. |
| `id` | `string` | - | The ID of the table toolbar menu item link radio. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link radio. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link radio. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link radio. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `href` | `string` | - | The URL of the link. |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | The target of the link. |
| `rel` | `string` | - | The relationship of the link. |
| `checked` | `boolean` | `false` | Whether the radio button is checked. |
| `onChange` | `() => void` | - | Callback function when the radio button is changed. |
| `name` | `string` | - | The name of the radio button group. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接单选按钮的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接单选按钮的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接单选按钮的样式。 |
| `role` | `string` | `"menuitemradio"` | 表格工具栏菜单项链接单选按钮的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接单选按钮的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接单选按钮的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接单选按钮的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接单选按钮的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `href` | `string` | - | 链接的 URL。 |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | 链接的目标。 |
| `rel` | `string` | - | 链接的关系。 |
| `checked` | `boolean` | `false` | 单选按钮是否被选中。 |
| `onChange` | `() => void` | - | 单选按钮更改时的回调函数。 |
| `name` | `string` | - | 单选按钮组的名称。 |
GRAVITY_TRANSLATION_BLOCK_225_END
The `TableToolbarMenuItemLinkCheckboxGroup` component is a wrapper for the `div` element.
`TableToolbarMenuItemLinkCheckboxGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_226_END
It is a semantic HTML element that can be used to group checkbox link menu items in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中对复选框链接菜单项进行分组。
GRAVITY_TRANSLATION_BLOCK_227_END
The `TableToolbarMenuItemLinkCheckboxGroup` component accepts the following props:
`TableToolbarMenuItemLinkCheckboxGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_228_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link checkbox group. |
| `className` | `string` | - | The class name of the table toolbar menu item link checkbox group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link checkbox group. |
| `role` | `string` | `"group"` | The ARIA role of the table toolbar menu item link checkbox group. |
| `id` | `string` | - | The ID of the table toolbar menu item link checkbox group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link checkbox group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link checkbox group. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link checkbox group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `value` | `string[]` | `[]` | The values of the selected checkboxes. |
| `onChange` | `(value: string[]) => void` | - | Callback function when the selected checkboxes change. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接复选框组的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接复选框组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接复选框组的样式。 |
| `role` | `string` | `"group"` | 表格工具栏菜单项链接复选框组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接复选框组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接复选框组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接复选框组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接复选框组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `value` | `string[]` | `[]` | 选中的复选框的值。 |
| `onChange` | `(value: string[]) => void` | - | 选中的复选框改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_229_END
The `TableToolbarMenuItemLinkRadioGroup` component is a wrapper for the `div` element.
`TableToolbarMenuItemLinkRadioGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_230_END
It is a semantic HTML element that can be used to group radio button link menu items in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中对单选按钮链接菜单项进行分组。
GRAVITY_TRANSLATION_BLOCK_231_END
The `TableToolbarMenuItemLinkRadioGroup` component accepts the following props:
`TableToolbarMenuItemLinkRadioGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_232_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link radio group. |
| `className` | `string` | - | The class name of the table toolbar menu item link radio group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link radio group. |
| `role` | `string` | `"radiogroup"` | The ARIA role of the table toolbar menu item link radio group. |
| `id` | `string` | - | The ID of the table toolbar menu item link radio group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link radio group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link radio group. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link radio group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `value` | `string` | - | The value of the selected radio button. |
| `onChange` | `(value: string) => void` | - | Callback function when the selected radio button changes. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接单选按钮组的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接单选按钮组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接单选按钮组的样式。 |
| `role` | `string` | `"radiogroup"` | 表格工具栏菜单项链接单选按钮组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接单选按钮组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接单选按钮组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接单选按钮组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接单选按钮组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `value` | `string` | - | 选中的单选按钮的值。 |
| `onChange` | `(value: string) => void` | - | 选中的单选按钮改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_233_END
The `TableToolbarMenuItemLinkCheckbox` component is a wrapper for the `a` element.
`TableToolbarMenuItemLinkCheckbox` 组件是 `a` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_234_END
It is a semantic HTML element that can be used to display a checkbox link menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示复选框链接菜单项。
GRAVITY_TRANSLATION_BLOCK_235_END
The `TableToolbarMenuItemLinkCheckbox` component accepts the following props:
`TableToolbarMenuItemLinkCheckbox` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_236_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link checkbox. |
| `className` | `string` | - | The class name of the table toolbar menu item link checkbox. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link checkbox. |
| `role` | `string` | `"menuitemcheckbox"` | The ARIA role of the table toolbar menu item link checkbox. |
| `id` | `string` | - | The ID of the table toolbar menu item link checkbox. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link checkbox. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link checkbox. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link checkbox. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `href` | `string` | - | The URL of the link. |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | The target of the link. |
| `rel` | `string` | - | The relationship of the link. |
| `checked` | `boolean` | `false` | Whether the checkbox is checked. |
| `onChange` | `() => void` | - | Callback function when the checkbox is changed. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接复选框的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接复选框的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接复选框的样式。 |
| `role` | `string` | `"menuitemcheckbox"` | 表格工具栏菜单项链接复选框的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接复选框的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接复选框的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接复选框的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接复选框的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `href` | `string` | - | 链接的 URL。 |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | 链接的目标。 |
| `rel` | `string` | - | 链接的关系。 |
| `checked` | `boolean` | `false` | 复选框是否被选中。 |
| `onChange` | `() => void` | - | 复选框更改时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_237_END
The `TableToolbarMenuItemLinkRadio` component is a wrapper for the `a` element.
`TableToolbarMenuItemLinkRadio` 组件是 `a` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_238_END
It is a semantic HTML element that can be used to display a radio button link menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示单选按钮链接菜单项。
GRAVITY_TRANSLATION_BLOCK_239_END
The `TableToolbarMenuItemLinkRadio` component accepts the following props:
`TableToolbarMenuItemLinkRadio` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_240_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link radio. |
| `className` | `string` | - | The class name of the table toolbar menu item link radio. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link radio. |
| `role` | `string` | `"menuitemradio"` | The ARIA role of the table toolbar menu item link radio. |
| `id` | `string` | - | The ID of the table toolbar menu item link radio. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link radio. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link radio. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link radio. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `href` | `string` | - | The URL of the link. |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | The target of the link. |
| `rel` | `string` | - | The relationship of the link. |
| `checked` | `boolean` | `false` | Whether the radio button is checked. |
| `onChange` | `() => void` | - | Callback function when the radio button is changed. |
| `name` | `string` | - | The name of the radio button group. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接单选按钮的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接单选按钮的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接单选按钮的样式。 |
| `role` | `string` | `"menuitemradio"` | 表格工具栏菜单项链接单选按钮的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接单选按钮的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接单选按钮的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接单选按钮的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接单选按钮的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `href` | `string` | - | 链接的 URL。 |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | 链接的目标。 |
| `rel` | `string` | - | 链接的关系。 |
| `checked` | `boolean` | `false` | 单选按钮是否被选中。 |
| `onChange` | `() => void` | - | 单选按钮更改时的回调函数。 |
| `name` | `string` | - | 单选按钮组的名称。 |
GRAVITY_TRANSLATION_BLOCK_241_END
The `TableToolbarMenuItemLinkCheckboxGroup` component is a wrapper for the `div` element.
`TableToolbarMenuItemLinkCheckboxGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_242_END
It is a semantic HTML element that can be used to group checkbox link menu items in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中对复选框链接菜单项进行分组。
GRAVITY_TRANSLATION_BLOCK_243_END
The `TableToolbarMenuItemLinkCheckboxGroup` component accepts the following props:
`TableToolbarMenuItemLinkCheckboxGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_244_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link checkbox group. |
| `className` | `string` | - | The class name of the table toolbar menu item link checkbox group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link checkbox group. |
| `role` | `string` | `"group"` | The ARIA role of the table toolbar menu item link checkbox group. |
| `id` | `string` | - | The ID of the table toolbar menu item link checkbox group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link checkbox group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link checkbox group. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link checkbox group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `value` | `string[]` | `[]` | The values of the selected checkboxes. |
| `onChange` | `(value: string[]) => void` | - | Callback function when the selected checkboxes change. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接复选框组的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接复选框组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接复选框组的样式。 |
| `role` | `string` | `"group"` | 表格工具栏菜单项链接复选框组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接复选框组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接复选框组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接复选框组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接复选框组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `value` | `string[]` | `[]` | 选中的复选框的值。 |
| `onChange` | `(value: string[]) => void` | - | 选中的复选框改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_245_END
The `TableToolbarMenuItemLinkRadioGroup` component is a wrapper for the `div` element.
`TableToolbarMenuItemLinkRadioGroup` 组件是 `div` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_246_END
It is a semantic HTML element that can be used to group radio button link menu items in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中对单选按钮链接菜单项进行分组。
GRAVITY_TRANSLATION_BLOCK_247_END
The `TableToolbarMenuItemLinkRadioGroup` component accepts the following props:
`TableToolbarMenuItemLinkRadioGroup` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_248_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link radio group. |
| `className` | `string` | - | The class name of the table toolbar menu item link radio group. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link radio group. |
| `role` | `string` | `"radiogroup"` | The ARIA role of the table toolbar menu item link radio group. |
| `id` | `string` | - | The ID of the table toolbar menu item link radio group. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link radio group. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link radio group. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link radio group. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `value` | `string` | - | The value of the selected radio button. |
| `onChange` | `(value: string) => void` | - | Callback function when the selected radio button changes. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接单选按钮组的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接单选按钮组的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接单选按钮组的样式。 |
| `role` | `string` | `"radiogroup"` | 表格工具栏菜单项链接单选按钮组的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接单选按钮组的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接单选按钮组的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接单选按钮组的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接单选按钮组的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `value` | `string` | - | 选中的单选按钮的值。 |
| `onChange` | `(value: string) => void` | - | 选中的单选按钮改变时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_249_END
The `TableToolbarMenuItemLinkCheckbox` component is a wrapper for the `a` element.
`TableToolbarMenuItemLinkCheckbox` 组件是 `a` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_250_END
It is a semantic HTML element that can be used to display a checkbox link menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示复选框链接菜单项。
GRAVITY_TRANSLATION_BLOCK_251_END
The `TableToolbarMenuItemLinkCheckbox` component accepts the following props:
`TableToolbarMenuItemLinkCheckbox` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_252_END
| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | The content of the table toolbar menu item link checkbox. |
| `className` | `string` | - | The class name of the table toolbar menu item link checkbox. |
| `style` | `React.CSSProperties` | - | The style of the table toolbar menu item link checkbox. |
| `role` | `string` | `"menuitemcheckbox"` | The ARIA role of the table toolbar menu item link checkbox. |
| `id` | `string` | - | The ID of the table toolbar menu item link checkbox. |
| `tabIndex` | `number` | - | The tab index of the table toolbar menu item link checkbox. |
| `aria-*` | `string` | - | ARIA attributes for the table toolbar menu item link checkbox. |
| `data-*` | `any` | - | Data attributes for the table toolbar menu item link checkbox. |
| `onPointerDown` | `React.PointerEventHandler` | - | Handler for pointer down events. |
| `onPointerUp` | `React.PointerEventHandler` | - | Handler for pointer up events. |
| `onPointerMove` | `React.PointerEventHandler` | - | Handler for pointer move events. |
| `onPointerCancel` | `React.PointerEventHandler` | - | Handler for pointer cancel events. |
| `onKeyDown` | `React.KeyboardEventHandler` | - | Handler for key down events. |
| `onKeyUp` | `React.KeyboardEventHandler` | - | Handler for key up events. |
| `onKeyPress` | `React.KeyboardEventHandler` | - | Handler for key press events. |
| `href` | `string` | - | The URL of the link. |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | The target of the link. |
| `rel` | `string` | - | The relationship of the link. |
| `checked` | `boolean` | `false` | Whether the checkbox is checked. |
| `onChange` | `() => void` | - | Callback function when the checkbox is changed. |

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | - | 表格工具栏菜单项链接复选框的内容。 |
| `className` | `string` | - | 表格工具栏菜单项链接复选框的类名。 |
| `style` | `React.CSSProperties` | - | 表格工具栏菜单项链接复选框的样式。 |
| `role` | `string` | `"menuitemcheckbox"` | 表格工具栏菜单项链接复选框的 ARIA role。 |
| `id` | `string` | - | 表格工具栏菜单项链接复选框的 ID。 |
| `tabIndex` | `number` | - | 表格工具栏菜单项链接复选框的 tab index。 |
| `aria-*` | `string` | - | 表格工具栏菜单项链接复选框的 ARIA 属性。 |
| `data-*` | `any` | - | 表格工具栏菜单项链接复选框的 data 属性。 |
| `onPointerDown` | `React.PointerEventHandler` | - | 指针按下事件的处理器。 |
| `onPointerUp` | `React.PointerEventHandler` | - | 指针抬起事件的处理器。 |
| `onPointerMove` | `React.PointerEventHandler` | - | 指针移动事件的处理器。 |
| `onPointerCancel` | `React.PointerEventHandler` | - | 指针取消事件的处理器。 |
| `onKeyDown` | `React.KeyboardEventHandler` | - | 按键按下事件的处理器。 |
| `onKeyUp` | `React.KeyboardEventHandler` | - | 按键抬起事件的处理器。 |
| `onKeyPress` | `React.KeyboardEventHandler` | - | 按键触发事件的处理器。 |
| `href` | `string` | - | 链接的 URL。 |
| `target` | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | `"_self"` | 链接的目标。 |
| `rel` | `string` | - | 链接的关系。 |
| `checked` | `boolean` | `false` | 复选框是否被选中。 |
| `onChange` | `() => void` | - | 复选框更改时的回调函数。 |
GRAVITY_TRANSLATION_BLOCK_253_END
The `TableToolbarMenuItemLinkRadio` component is a wrapper for the `a` element.
`TableToolbarMenuItemLinkRadio` 组件是 `a` 元素的包装器。
GRAVITY_TRANSLATION_BLOCK_254_END
It is a semantic HTML element that can be used to display a radio button link menu item in a table toolbar menu.
它是一个语义化的 HTML 元素，可用于在表格工具栏菜单中显示单选按钮链接菜单项。
GRAVITY_TRANSLATION_BLOCK_255_END
The `TableToolbarMenuItemLinkRadio` component accepts the following props:
`TableToolbarMenuItemLinkRadio` 组件接受以下 props：
GRAVITY_TRANSLATION_BLOCK_2