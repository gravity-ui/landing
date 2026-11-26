GRAVITY_TRANSLATION_BLOCK_0_END

`Stepper` 可引导用户完成一系列编号步骤，在类似向导的多步工作流中显示进度。

```tsx
import {Stepper} from '@gravity-ui/uikit';
```

## 示例

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### 可交互项

使用 `onUpdate` 和 `value` 属性配合自定义状态来操作步骤。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### 不同视图

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### 不同尺寸

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### 禁用步骤

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

### 自定义图标

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### 自定义步骤分隔符

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

### 带浮动元素的步骤

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

## 属性

| 名称             | 描述                                       |                  类型                  | 默认值 |
| :--------------- | :----------------------------------------- | :------------------------------------: | :----: |
| children         | `Stepper` 项。                             | `React.ReactElement<StepperItemProps>` |        |
| size             | 设置 `Step` 的尺寸。                       |           `"s"` `"m"` `"l"`            |  `"s"` |
| value            | 当前选中的 `Step` 的 ID。                  |           `number` `string`            |        |
| onUpdate         | 用于更改当前 `Step` 的函数。               |               `Function`               |        |
| qa               | `data-qa` HTML 属性，用于测试。            |                `string`                |        |
| separator        | 自定义分隔符节点。                         |           `React.ReactNode`            |        |
| className        | `Steps` 容器的 CSS 类名。                  |                `string`                |        |
| style            | 为 `Steps` 容器设置内联样式。              |            `CSSProperties`             |        |
| aria-label       | 定义一个字符串值，用于标记当前元素。       |                `string`                |        |
| aria-labelledby  | 标识用于标记当前元素的元素。               |                `string`                |        |
| aria-describedby | 标识用于描述对象的元素。                   |                `string`                |        |

### StepperItemProps

| 名称      | 描述                           |              类型              | 默认值 |
| :-------- | :----------------------------- | :----------------------------: | :----: |
| id        | 设置 `Step` 的 ID。默认为数组元素的索引。 |       `string` `number`        |        |
| view      | 设置 `Step` 的视图。           | `"idle"` `"error"` `"success"` | `"idle"` |
| children  | `Step` 的内容。                |          `React.Node`          |        |
| disabled  | 确定 `Step` 是否被禁用。       |           `boolean`            |        |
| icon      | 自定义图标节点。               |         `SVGIconData`          |        |
| onClick   | `Step` 的点击处理程序。        |   `React.MouseEventHandler`    |        |
| className | 元素的 CSS 类名。              |            `string`            |        |

### CSS API

| 名称                              | 描述                           |
| :-------------------------------- | :------------------------------------ |
| `--g-stepper-gap`                 | 步进项和分隔符之间的间隙。 |
| `--g-stepper-item-text-max-width` | 步进项文本的最大宽度。             |