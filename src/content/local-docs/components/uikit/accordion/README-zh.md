Accordion 组件允许您创建可折叠的内容面板，用户可以显示或隐藏信息部分。这对于以紧凑的方式组织大量内容非常有用。

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

## 控制手风琴状态

您可以通过根组件的 `value` 和 `onUpdate` 属性，或按项目来控制手风琴状态。

从根组件控制状态的示例：

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

通过 `expanded` 属性按项目控制状态的示例：

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 尺寸

使用 `size` 属性来控制 `Accordion` 的尺寸。默认尺寸为 `m`。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 视图

`solid`：带背景的主视图（默认使用）。

`top-bottom`：带顶部和底部边框的视图。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## 箭头位置

`end`：箭头位于标题的末尾（默认使用）。

`start`：箭头位于标题的开头。

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## 多项

`multiple` 属性允许同时展开多个手风琴项目。

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## 自定义摘要

使用 `Accordion.Summary` 组件创建自定义标题。

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

## 禁用状态

可以使用 `disabled` 属性禁用单个手风琴项目。

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

## 属性

### Accordion

| 名称          | 描述                                       |            类型            |  默认值  |
| :------------ | :----------------------------------------- | :------------------------: | :-------: |
| size          | 手风琴尺寸                                 |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | 手风琴外观                                 |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | 允许同时展开多个项目                       |         `boolean`          |  `false`  |
| arrowPosition | 箭头指示器位置                             |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | 非受控状态的默认值                         | `string` `string[]` `null` |           |
| value         | 受控状态的当前值                           | `string` `string[]` `null` |           |
| onUpdate      | 状态更改时调用的回调函数                   |         `Function`         |           |
| ariaLevel     | 可访问性的标题级别                         |          `number`          |    `3`    |
| className     | CSS 类名                                   |          `string`          |           |
| qa            | HTML `data-qa` 属性，用于测试              |          `string`          |           |

### Accordion.Item

| 名称            | 描述                             |       类型        | 默认值 |
| :-------------- | :------------------------------- | :---------------: | :----: |
| value           | 项目的唯一标识符                 |     `string`      |        |
| summary         | 手风琴项目标题                   | `React.ReactNode` |        |
| expanded        | 受控展开状态                     |     `boolean`     |        |
| defaultExpanded | 默认展开状态                     |     `boolean`     |        |
| disabled        | 禁用手风琴项目                   |     `boolean`     | `false` |
| keepMounted     | 即使折叠也保留内容在 DOM 中      |     `boolean`     |        |
| onUpdate        | 项目状态更改时调用的回调函数     |    `Function`     |        |
| className       | CSS 类名                         |     `string`      |        |
| qa              | HTML `data-qa` 属性，用于测试    |     `string`      |        |

### Accordion.Summary
GRAVITY_TRANSLATION_BLOCK_17_END

| 名称     | 描述                                                                             |                      类型                       |                                          默认值                                          |
| :------- | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | 自定义摘要渲染函数                                                          | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | HTML `data-qa` 属性，用于测试。仅当 `qa` 传递给 Accordion.Item 时才有效 |                    `string`                     | 如果 `qa` 传递给 Accordion.Item，则为 `${accordion-item}-summary`，否则为 `disclosure-summary` |

## CSS API

| 名称                           | 描述                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | 手风琴的内联（水平）内边距 |