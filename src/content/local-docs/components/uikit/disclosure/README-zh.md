`Disclosure` 是一个可折叠组件，允许显示和隐藏其嵌套内容。

```tsx
import {Disclosure} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

## 控制展开状态

您可以使用 `expanded` 和 `onUpdate` 属性来控制展开状态。

受控组件示例：

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 大小

使用 `size` 属性来控制 `Disclosure` 的大小。默认大小为 `m`。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 箭头位置

`start`: 箭头位于标题的开头（默认使用）。

`end`: 箭头位于标题的末尾。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 自定义内容

使用 `Disclosure.Summary` 组件创建自定义标题，并使用 `Disclosure.Details` 来填充自定义内容。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## 禁用状态

可以使用 `disabled` 属性禁用 `Disclosure`。

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## 属性

### Disclosure

| 名称             | 描述                                       | 类型                                                  | 默认值    |
| :--------------- | :----------------------------------------- | :---------------------------------------------------- | :-------- |
| size             | 组件大小                                   | `"m"` `"l"` `"xl"`                                    | `"m"`     |
| className        | 根元素的 CSS 类名                          | `string`                                              |           |
| disabled         | 禁用状态                                   | `boolean`                                             | `false`   |
| defaultExpanded  | 默认展开状态                               | `boolean`                                             | `false`   |
| expanded         | 受控展开状态                               | `boolean`                                             |           |
| arrowPosition    | 控制箭头位置                               | `"start"` `"end"`                                     | `"start"` |
| summary          | 内容摘要                                   | `React.ReactNode`                                     |           |
| keepMounted      | 即使折叠也保持内容在 DOM 中                | `boolean`                                             | `true`    |
| onUpdate         | 展开/折叠状态更改时触发的回调。            | `(expanded: boolean) => void`                         |           |
| onSummaryKeyDown | 摘要获得焦点时触发键盘事件的回调。         | `(e: React.KeyboardEvent<HTMLButtonElement>) => void` |           |
| children         | 内容                                       | `React.ReactNode`                                     |           |
| qa               | 测试标识符                                 | `string`                                              |           |

### Disclosure.Summary

| 名称     | 描述                                  | 类型                                            | 默认值               |
| :------- | :------------------------------------ | :---------------------------------------------- | :------------------- |
| children | 渲染函数                              | `(props, defaultSummary) => React.ReactElement` |                      |
| qa       | 测试标识符                            | `string`                                        | `disclosure-summary` |

### Disclosure.Details
GRAVITY_TRANSLATION_BLOCK_11_END

| 名称     | 描述         | 类型              | 默认值           |
| :------- | :----------- | :---------------- | :--------------- |
| children | 内容         | `React.ReactNode` |                  |
| qa       | 测试标识符   | `string`          | `disclosure-details` |

## CSS API

| 名称                                 | 描述                                       |
| :----------------------------------- | :----------------------------------------- |
| `--g-disclosure-text-color`          | 内容摘要的文本颜色                         |
| `--g-disclosure-text-color-disabled` | 禁用状态下内容摘要的文本颜色               |