<!--GITHUB_BLOCK-->

# 滑块

<!--/GITHUB_BLOCK-->

```tsx
import {Slider} from '@gravity-ui/uikit';
```

滑块是一个可自定义的响应式 React 组件，允许用户从指定的数据集中选择单个值或一系列值。

## 滑块变体

### 单滑块

这是一个带有一个手柄的滑块，用于选择单个值。默认情况下使用它。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider />
`}
>
    <UIKitExamples.SliderExample />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider />
```

<!--/GITHUB_BLOCK-->

### 范围滑块

这是带有两个手柄的滑块，用于选择范围。要使用它，请为数组设置 `defaultValue` （对于不受控制的滑块）或 `value` （对于受控滑块）。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider defaultValue={[20, 40]} />
`}
>
    <UIKitExamples.SliderExample defaultValue={[20, 40]} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider defaultValue={[20, 40]} />
```

<!--/GITHUB_BLOCK-->

## 国家

### 已禁用

这是一种 `Slider` 您不想允许用户使用此组件的状态。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider disabled={true} />
`}
>
    <UIKitExamples.SliderExample disabled={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider disabled={true} />
```

<!--/GITHUB_BLOCK-->

### 错误

此 `Slider` 状态适用于不正确的用户输入。要更改外 `Slider` 观，请使用带有 `"invalid"` 值的 `validationState` 属性。或者，您可以通过该 `errorMessage` 属性提供错误消息。此消息文本将在滑块下方显示。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider validationState={"invalid"} />
<Slider validationState={"invalid"} errorMessage="Error message" />
`}
>
    <UIKitExamples.SliderExample validationState={"invalid"} />
    <UIKitExamples.SliderExample validationState={"invalid"} errorMessage="Error message" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider validationState={"invalid"} />
<Slider validationState={"invalid"} errorMessage="Error message" />
```

<!--/GITHUB_BLOCK-->

## 大小

使用该 `size` 属性来管理大 `Slider` 小。默认大小为 `m`。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider size="s" />
<Slider size="m" />
<Slider size="l" />
<Slider size="xl" />
`}
>
    <UIKitExamples.SliderExample size="s" />
    <UIKitExamples.SliderExample size="m" />
    <UIKitExamples.SliderExample size="l" />
    <UIKitExamples.SliderExample size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider size="s" />
<Slider size="m" />
<Slider size="l" />
<Slider size="xl" />
```

<!--/GITHUB_BLOCK-->

## 价值

### 最小值和最大值

`min` 和 `max` 属性定义了 `Slider` 可以处理的范围的限制。这些属性对于设置可选值的边界至关重要。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider min={10} />
<Slider max={50} />
<Slider min={20} max={60} />
`}
>
    <UIKitExamples.SliderExample min={10} />
    <UIKitExamples.SliderExample max={50} />
    <UIKitExamples.SliderExample min={20} max={60} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider min={10} />
<Slider max={50} />
<Slider min={20} max={60} />
```

<!--/GITHUB_BLOCK-->

### 步骤

该 `step` 属性确定最小值和最大值范围内的增量。这意味着滑块移动一次，该值会发生多大变化。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider step={10} />
`}
>
    <UIKitExamples.SliderExample step={10} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider step={10} />
```

<!--/GITHUB_BLOCK-->

### 标记

`Slider` 组件中使用该 `marks` 属性来指定滑块上的视觉标记，这有助于指示最小值和最大值之间的各个点。此属性增强了滑块的可用性和可视界面，尤其是在表示特定间隔时。默认情况下，它是 2（`min` 和 `max` 值）。您可以通过两种不同的方式使用它：

- 滑块上可视标记的数量
<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider marks={11} />
`}
>
    <UIKitExamples.SliderExample marks={11} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={11} />
```

<!--/GITHUB_BLOCK-->

- 滑块沿线的标记值数组

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider marks={[0, 50, 100]} />
`}
>
    <UIKitExamples.SliderExample marks={[0, 50, 100]} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[0, 50, 100]} />
```

<!--/GITHUB_BLOCK-->

`0` 或者 `marks` 属性中的空数组 `[]` 值隐藏所有标记 `Slider`。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider marks={0} />
`}
>
    <UIKitExamples.SliderExample marks={0} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={0} />
```

<!--/GITHUB_BLOCK-->

> 标记值可供选择，即使它与 `step` 值条件不匹配

您可以使用 `marksFormat` 属性更改标记值的显示格式。

#### 定义可用值

您可以将 `step` 属性设置为， `null` 以定义滑块可以处理的一组特定值，而不是连续范围。当只有特定的离散值可供选择时，这尤其有用。在这种情况下，属性 `min` ， `max` 并 `marks` 允许指定一个数字数组，表示允许用户使用选择的确切值 `Slider`。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider marks={[10, 20, 50, 55, 65, 80]} step={null}/>
`}
>
    <UIKitExamples.SliderExample marks={[10, 20, 50, 55, 65, 80]} step={null}/>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[10, 20, 50, 55, 65, 80]} step={null} />
```

<!--/GITHUB_BLOCK-->

## 工具提示

该 `tooltipDisplay` 属性在 `Slider` 组件中用于控制工具提示的显示行为，该工具提示在用户与滑块交互时显示当前值。 `auto` 该值仅在 “ `Slider`的句柄被光标悬停或聚焦” 时才显示工具提示。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Slider tooltipDisplay="on" />
`}
>
    <UIKitExamples.SliderExample tooltipDisplay="on" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Slider tooltipDisplay="on" />
```

<!--/GITHUB_BLOCK-->

您可以使用 `tooltipFormat` 属性更改工具提示值的显示格式。如果您未指定 `tooltipformat` ，则将用于 `marksFormat` 在工具提示中显示该值。

## 属性

| 姓名                             | 描述                                                                                                        |                        类型                        |  默认   |
| :------------------------------- | :---------------------------------------------------------------------------------------------------------- | :------------------------------------------------: | :-----: |
| apiRef                           | 参考 Slider 的聚焦和模糊组件                                                                                |               `RefObject<SliderRef>`               |         |
| autoFocus                        | 控件的 `autofocus` 属性                                                                                     |                     `boolean`                      |         |
| className                        | 控件的包装器类名                                                                                            |                      `string`                      |         |
| [defaultValue](#slider-variants) | 控件的默认值，在组件不受控制时使用                                                                          |            `number` `[number, number]`             |   `0`   |
| [已禁用](#disabled)              | 表示用户无法与控件进行交互                                                                                  |                     `boolean`                      | `false` |
| [errorMessage](#error)           | 要显示的错误文本                                                                                            |                      `string`                      |         |
| [标记](#marks)                   | 滑块下方的文字标记。可以设置为滑块标记的数量，也可以设置为应有标记的值数组。 `0` 或者空数组值隐藏所有标记。 |                `number` `number[]`                 |   `2`   |
| [marksFormat](#marks)            | 标记显示值的格式化程序                                                                                      |            `(value: number) => string`             |         |
| [最大](#min-and-max-value)       | 组件的最大值。                                                                                              |                      `number`                      |  `100`  |
| [分钟](#min-and-max-value)       | 组件的最小值。                                                                                              |                      `number`                      |   `0`   |
| onBlur                           | 当控件失去对焦时触发。提供焦点事件作为回调的参数                                                            | `(e:FocusEvent<HTMLDivElement, Element>) => 无效)` |         |
| onUpdate                         | 当用户更改滑块的值时触发。提供变更事件作为回调的参数                                                        |       `（值：数字\| [数字、数字]) => 无效)`        |         |
| onUpdateComplete                 | 触发 ontouchend 或 onmouseup 时触发。提供变更事件作为回调的参数                                             |       `（值：数字\| [数字、数字]) => 无效)`        |         |
| onFocus                          | 当控件获得焦点时触发。提供焦点事件作为回调的参数                                                            | `(e:FocusEvent<HTMLDivElement, Element>) => 无效)` |         |
| [大小](#size)                    | 控件的大小                                                                                                  |                    `"s"` `"xl"`                    |  `"m"`  |
| [步](#step)                      | 滑块的每一步都要加上或减去的值。可以设置 `null` 为 `marks` 按步骤制作。                                     |                  `number` `null`                   |   `1`   |
| tabIndex                         | 控件的 `tabIndex` 属性                                                                                      |            `number` `[number, number]`             |         |
| [tooltipDisplay](#tooltip)       | 工具提示的显示行为                                                                                          |                    `off` `auto`                    |  `off`  |
| [tooltipFormat](#tooltip)        | 工具提示显示值的格式化程序。`marksFormat` 如果未设置，则使用                                                |            `(value: number) => string`             |         |
| [validationState](#error)        | 验证状态                                                                                                    |                    `"invalid"`                     |         |
| [价值](#slider-variants)         | 控件的价值                                                                                                  |            `number` `[number, number]`             |         |
