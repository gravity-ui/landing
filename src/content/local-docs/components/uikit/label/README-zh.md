您可以使用 `Label` 来突出显示某些信息。带有 `Close` 或 `Copy` 按钮的 `Label` 可用于各种简单操作。

`Label` 最适合显示具有不同颜色代码以显示其重要性的一行文本信息。

```tsx
import {Label} from '@gravity-ui/uikit';
```

## 外观

`Label` 可以显示多种样式。

### 主题

使用 `theme` 属性为各种状态应用不同的主题。您可以使用以下值：`normal`、`info`、`success`、`warning`、`danger`、`utility`、`unknown` 和 `clear`。
默认主题是 `normal`。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### 类型

`type` 属性为 `Label` 添加了各种选项：

`copy`: 添加一个复制按钮；单击时，它会复制 `copyText` 属性的值。

`close`: 添加一个关闭按钮用于管理标签列表。

`info`: 向标签添加一个信息图标。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### 图标

您可以使用 `icon` 属性添加图标。为此，请使用 [`Icon`](../Icon) 组件，这是一个 SVG 的特殊包装器。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## 值

您可以使用 `Label` 来显示键值信息。为此，您需要将键提供给 `children` 属性，将值提供给 `value`：

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## 状态

`label` 可以有不同的状态：

- `disabled`: 不允许进行任何交互。
- `interactive`: 使标签可悬停。
- `loading`: 显示加载状态。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## 大小

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## 属性

| 名称             | 描述                                                                    |                  类型                   |   默认值   |
| :--------------- | :---------------------------------------------------------------------- | :-------------------------------------: | :---------: |
| children         | 内容                                                                    |            `React.ReactNode`            |             |
| className        | `class` HTML 属性                                                         |                `string`                 |             |
| closeButtonLabel | 关闭按钮的 `aria-label`                                               |                `string`                 |             |
| copyButtonLabel  | 复制按钮的 `aria-label`                                                |                `string`                 |             |
| copyText         | 要复制的文本                                                                   |                `string`                 |             |
| disabled         | 禁用状态                                                                 |                `boolean`                |             |
| icon             | 标签图标（在左侧）                                                       |            `React.ReactNode`            |             |
| interactive      | 启用悬停效果。注意：对于 `copy` 和 `info` 标签，无法关闭此效果。 |                `boolean`                |             |
| loading          | 加载状态                                                                  |                `boolean`                |   `false`   |
| onClick          | `click` 事件处理程序                                                          |               `Function`                |             |
| onCloseClick     | 关闭按钮 `click` 事件处理程序                                             |               `Function`                |             |
| onCopy           | `copy` 事件处理程序                                                           |               `Function`                |             |
| qa               | `data-qa` HTML 属性，用于测试                                     |                `string`                 |             |
| size             | 标签大小                                                                     |       `"2xs"` `"xs"` `"s"` `"m"`        |   `"xs"`    |
| theme            | 标签主题                                                                    |                `string`                 | `"normal"`  |
| title            | `title` HTML 属性                                                         |                `string`                 |             |
| type             | 标签类型                                                                     | `"default"` `"copy"` `"close"` `"info"` | `"default"` |
| value            | 标签值（显示为 `"children : value"`)                                |            `React.ReactNode`            |             |
| width            | 控制 Label 如何使用父容器的空间                                         |                `"auto"`                 |             |