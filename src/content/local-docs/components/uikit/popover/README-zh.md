<!--GITHUB_BLOCK-->

# Popover

<!--/GITHUB_BLOCK-->

`Popover` 显示浮动的、可选的交互式内容（文本、链接或按钮），它锚定在子元素上，并在悬停或单击时打开。它使用 [`Popup`](../Popup/README.md) 并内置了触发器交互性，使用通过 `children` 属性传递的 `ReactElement` 作为触发器。

```tsx
import {Popover} from '@gravity-ui/uikit';
```

## 用法

将 HTML 元素或任何接受原生 DOM 处理程序和 ARIA 属性作为属性的组件（例如 `Button`）包装在 `Popover` 组件中。将您的内容放入 `content` 属性中。

```jsx
import {Button, Popover} from '@gravity-ui/uikit';

<Popover content="Content">
  <Button>Click or hover me</Button>
</Popover>;
```

## 属性

| 名称                 | 描述                                                                                                   |                                类型                                 |     默认值     |
| :------------------- | :------------------------------------------------------------------------------------------------------------ | :-----------------------------------------------------------------: | :-------------: |
| children             | `ReactNode`，接受 DOM 事件处理器                                                                        |                          `React.ReactNode`                          |                 |
| className            | 根节点的 HTML `class` 属性                                                                          |                              `string`                               |                 |
| container            | 通过 `Portal` 挂载组件的 DOM 元素                                                                                       |                            `HTMLElement`                            | `document.body` |
| content              | 渲染在 `Popover` 内部的任何内容                                                                    |                          `React.ReactNode`                          |                 |
| contentClassName     | 内容节点的 HTML `class` 属性                                                                       |                              `string`                               |                 |
| delay                | 在更改 `open` 状态之前等待指定的毫秒数                                                                             |             `number` `{open?: number; close?: number}`              |                 |
| disableEscapeKeyDown | 按 `Esc` 键时不关闭                                                                               |                              `boolean`                              |     `false`     |
| disableLayer         | 堆叠浮动元素时，不使用 `LayerManager`                                                       |                              `boolean`                              |     `false`     |
| disableOutsideClick  | 点击外部时不关闭                                                                               |                              `boolean`                              |     `false`     |
| disablePortal        | 禁用 `Portal`                                                                                       |                              `boolean`                              |     `false`     |
| disabled             | 不响应任何事件打开                                                                                      |                              `boolean`                              |     `false`     |
| enableSafePolygon    | 在指针从触发器移到 `Popover` 内容时，使用动态多边形区域以防止其关闭                                                       |                              `boolean`                              |     `false`     |
| hasArrow             | 渲染一个指向触发器的箭头                                                                       |                              `boolean`                              |     `false`     |
| keepMounted          | 隐藏时，`Popover` 不会从 DOM 中移除                                                        |                              `boolean`                              |     `false`     |
| middlewares          | `Floating UI` 中间件。如果设置，它们将完全覆盖默认中间件。                    |                         `Array<Middleware>`                         |                 |
| modal                | 启用焦点捕获行为                                                                              |                              `boolean`                              |     `false`     |
| offset               | `Floating UI` 偏移值                                                                                    |                           `PopoverOffset`                           |       `4`       |
| onOpenChange         | `open` 状态改变时调用的函数                                                         |                             `Function`                              |                 |
| open                 | 手动控制 `open` 状态                                                                             |                              `boolean`                              |                 |
| placement            | `Floating UI` 定位                                                                                       | `Placement` `Array<Placement>` `"auto"` `"auto-start"` `"auto-end"` |     `"top"`     |
| qa                   | 测试属性 (`data-qa`)                                                                                    |                              `string`                               |                 |
| rest                 | 光标在打开前必须静止的时间（毫秒）。                                                                                     |                              `number`                               |       `0`       |
| strategy             | `Floating UI` 定位策略                                                                            |                       `"absolute"` `"fixed"`                        |  `"absolute"`   |
| style                | 根节点的 HTML `style` 属性                                                                          |                              `string`                               |                 |
| toggle               | 是否通过重复点击切换 `open` 状态                                                       |                              `boolean`                              |     `true`      |
| trigger              | 哪个事件应该打开 `Popover`。默认的 `all` 值同时指 `hover` 和 `click`                 |                          `"all"` `"click"`                          |     `"all"`     |
