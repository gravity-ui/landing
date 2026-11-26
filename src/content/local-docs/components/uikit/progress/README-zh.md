`Progress` 组件显示当前操作的进度。它也可以被划分为多个部分。

```tsx
import {Progress} from '@gravity-ui/uikit';
```

## 主题

使用 `theme` 属性来指定整个进度条或复合部分的颜色：

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## 状态

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## 大小

要管理 `Progress` 组件的大小，请使用 `size` 属性，它可以接受以下值：“xs”、“s”和“m”。`text` 属性仅适用于“m”大小。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## 断点

使用 `colorStops` 属性来设置 `Progress` 组件的断点。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

使用可选的 `color` 属性来覆盖主题颜色：

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## 堆叠

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## 属性

| 名称            | 描述                                                                                                                             |                          类型                          |   默认值   |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------: | :---------: |
| className       | HTML `class` 属性                                                                                                                |                        `string`                        |             |
| colorStops      | 设置带有主题的断点                                                                                                               | `Array<{theme: string; stop: number; color?: string}>` |             |
| colorStopsValue | 设置用于选择当前停止点或 `colorStops` 的替代值的参数。可用范围是 0 到 100。                                                              |                        `number`                        |             |
| loading         | 切换 `loading` 状态                                                                                                              |                       `boolean`                        |   `false`   |
| size            | 设置进度条大小。进度条文本只能在 `"m"` 大小下显示。                                                                                |                        `string`                        |    `"m"`    |
| stack           | 复合进度条的配置。如果提供了 `value`，则此项不是必需的。                                                                            |                     `Array<Stack>`                     |             |
| stackClassName  | 复合进度条的 HTML `class` 属性                                                                                                   |                        `string`                        |             |
| text            | 进度条内的文本                                                                                                                   |                      `ReactNode`                       |             |
| theme           | 设置进度条颜色                                                                                                                   |                        `string`                        | `"default"` |
| value           | 当前进度值。可用范围是 0 到 100。使用 `stack` 属性值是可选的，并用作 `maxValue`。                                                        |                        `number`                        |             |

### `Stack`

| 名称      | 描述                                                                                                                                  |    类型     |   默认值   |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------ | :---------: | :---------: |
| className | stack 元素的 `class` HTML 属性                                                                                                        |  `string`   |             |
| color     | 设置 `style` HTML 属性的背景颜色                                                                                                      |  `string`   |             |
| content   | Stack 元素内容                                                                                                                        | `ReactNode` |             |
| title     | `title` HTML 属性                                                                                                                     |  `string`   |             |
| theme     | 设置 stack 元素的颜色                                                                                                                 |  `string`   | `"default"` |
| value     | 当前进度值。可用范围从 0 到 100。使用 `stack` 属性值是可选的，并用作 `maxValue`。                                                       |  `number`   |             |
| qa        | `data-qa` HTML 属性，用于测试                                                                                                         |  `string`   |             |

## CSS API

| 名称                                   | 描述                        |
| :------------------------------------- | :-------------------------- |
| `--g-progress-empty-text-color`        | 空 `Progress` 文本颜色      |
| `--g-progress-filled-text-color`       | 填充 `Progress` 文本颜色    |
| `--g-progress-empty-background-color`  | 空 `Progress` 背景颜色      |
| `--g-progress-filled-background-color` | 填充 `Progress` 背景颜色    |