滑块是一个可自定义且响应式的 React 组件，允许用户从指定的数据集中选择单个值或一系列值。

```tsx
import {Slider} from '@gravity-ui/uikit';
```

## 滑块变体

### 单滑块

这是一个带有单个滑块手柄以选择单个值的滑块。它默认使用。

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### 范围滑块

这是一个带有两个滑块手柄以选择范围的滑块。要使用它，请为数组设置 `defaultValue`（对于非受控滑块）或 `value`（对于受控滑块）。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 状态

### 已禁用

这是 `Slider` 的一种状态，您不希望允许用户使用此组件。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### 错误

此 `Slider` 状态用于表示用户输入不正确。要更改 `Slider` 的外观，请使用 `validationState` 属性并将其值设置为 `"invalid"`。您还可以选择通过 `errorMessage` 属性提供错误消息。此消息文本将显示在滑块下方。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## 大小

使用 `size` 属性来管理 `Slider` 的大小。默认大小为 `m`。

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## 值

### 最小值和最大值

`min` 和 `max` 属性定义了滑块可以处理的范围的限制。这些属性对于设置可选值的边界至关重要。

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### 步长

`step` 属性确定最小和最大值范围内的增量。这意味着每次移动滑块时值会改变多少。

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

### 标记

`marks` 属性用于 `Slider` 组件，以在滑块上指定视觉标记，以帮助指示最小和最大值之间的各种点。此属性增强了滑块的可用性和视觉界面，尤其是在表示特定间隔时。默认情况下，它是 2（`min` 和 `max` 值）。您可以通过 2 种不同的方式使用它：

- 滑块上的视觉标记数量

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

- 滑块上的标记值数组

GRAVITY_TRANSLATION_BLOCK_17_END

GRAVITY_TRANSLATION_BLOCK_18_END

`marks` 属性中的 `0` 或空数组 `[]` 值会隐藏 `Slider` 中的所有标记。

GRAVITY_TRANSLATION_BLOCK_19_END

GRAVITY_TRANSLATION_BLOCK_20_END

> 标记值即使不符合 `step` 值条件也可用进行选择

您可以通过使用 `marksFormat` 属性来更改标记值的显示格式。

#### 定义可用值

您可以将 `step` 属性设置为 `null`，以定义滑块可以处理的一组特定值，而不是连续范围。当只有某些离散值是有效选择时，这尤其有用。在这种情况下，`min`、`max` 和 `marks` 属性允许指定一个数字数组，表示用户可以使用 `Slider` 选择的确切值。

GRAVITY_TRANSLATION_BLOCK_21_END

GRAVITY_TRANSLATION_BLOCK_22_END

## 起始点

`startPoint` 属性允许您设置轨道的起点。它默认使用最小的 `Slider` 值。如果您使用带范围值的 `Slider` 或设置了 `inverted` 属性，则会忽略它。

GRAVITY_TRANSLATION_BLOCK_23_END

GRAVITY_TRANSLATION_BLOCK_24_END

## 反转

`inverted` 属性允许您设置 `Slider` 轨道的反转视图。
默认情况下（`false`），`Slider` 显示从 `min` 到手柄的区间。
如果为 `true`，则表示从滑块手柄到 `max` 的区间。
仅适用于单滑块。`startPoint` 属性将被忽略。

GRAVITY_TRANSLATION_BLOCK_25_END

GRAVITY_TRANSLATION_BLOCK_26_END

## 工具提示

`tooltipDisplay` 属性用于 `Slider` 组件，以控制显示当前值工具提示的行为，该工具提示会在用户与滑块交互时显示当前值。`auto` 值仅在鼠标悬停或聚焦 `Slider` 的手柄时显示工具提示。

GRAVITY_TRANSLATION_BLOCK_27_END

GRAVITY_TRANSLATION_BLOCK_28_END

您可以通过使用 `tooltipFormat` 属性来更改工具提示值的显示格式。如果您不指定 `tooltipformat`，则将使用 `marksFormat` 在工具提示中显示值。

## 属性

| 名称                               | 描述                                                                                                                                                                                           |                         类型                         | 默认值 |
| :--------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------: | :-----: |
| apiRef                             | 用于聚焦和模糊的 Slider 组件道具的 Ref                                                                                                                                                           |                `RefObject<SliderRef>`                |         |
| autoFocus                          | 该控件的 `autofocus` 属性                                                                                                                                                                      |                      `boolean`                       |         |
| className                          | 该控件的包装器类名                                                                                                                                                                             |                       `string`                       |         |
| [defaultValue](#slider-variations) | 该控件的默认值，在组件未受控时使用。默认情况下，它使用最小的 `Slider` 值。                                                                                                                               |             `number` `[number, number]`              |         |
| [disabled](#disabled)              | 指示用户无法与该控件交互                                                                                                                                                                       |                      `boolean`                       | `false` |
| [errorMessage](#error)             | 要显示的错误文本                                                                                                                                                                               |                       `string`                       |         |
| [marks](#marks)                    | 滑块下方的文本标记。可以设置为滑块标记的数量，或者设置为应有标记的值数组。`0` 或空数组值会隐藏所有标记。                                                                                                   |                 `number` `number[]`                  |   `2`   |
| [marksFormat](#marks)              | 标记显示值的格式化器                                                                                                                                                                           |             `(value: number) => string`              |         |
| [max](#minimum-and-maximum-value)  | 该组件的最大值。                                                                                                                                                                               |                       `number`                       |  `100`  |
| [min](#minimum-and-maximum-value)  | 该组件的最小值。                                                                                                                                                                               |                       `number`                       |   `0`   |
| onBlur                             | 当控件失去焦点时触发。将焦点事件作为回调的参数提供                                                                                                                                             | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |         |
| onUpdate                           | 当用户更改滑块值时触发。将更改事件作为回调的参数提供                                                                                                                                           |   `((value: number \| [number, number]) => void)`    |         |
| onUpdateComplete                   | 在触发 ontouchend 或 onmouseup 时触发。将更改事件作为回调的参数提供                                                                                                                           |   `((value: number \| [number, number]) => void)`    |         |
| onFocus                            | 当控件获得焦点时触发。将焦点事件作为回调的参数提供                                                                                                                                             | `((e: FocusEvent<HTMLDivElement, Element>) => void)` |         |
| [size](#size)                      | 该控件的大小                                                                                                                                                                                   |               `"s"` `"m"` `"l"` `"xl"`               |  `"m"`  |
| [step](#step)                      | 滑块每次移动时要添加或减去的值。可以设置为 `null` 以将 `marks` 作为步长。                                                                                                                            |                   `number` `null`                    |   `1`   |
| [startPoint](#start-point)         | 轨道的起点。对于范围滑块和反向滑块将被忽略。                                                                                                                                                   |                       `number`                       |         |
| [inverted](#inverted)              | 具有反向轨道的滑块（从手柄到 `max`）。                                                                                                                                                          |                      `boolean`                       |         |
| tabIndex                           | 该控件的 `tabIndex` 属性                                                                                                                                                                       |             `number` `[number, number]`              |         |
| [tooltipDisplay](#tooltip)         | 工具提示的显示行为                                                                                                                                                                             |                  `off` `on` `auto`                   |  `off`  |
| [tooltipFormat](#tooltip)          | 工具提示显示值的格式化器。如果未设置，则使用 `marksFormat`                                                                                                                                     |             `(value: number) => string`              |         |
| [validationState](#error)          | 验证状态                                                                                                                                                                                       |                     `"invalid"`                      |         |
| [value](#slider-variations)        | 该控件的值                                                                                                                                                                                     |             `number` `[number, number]`              |         |