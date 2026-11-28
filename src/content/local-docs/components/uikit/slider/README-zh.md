<!--GITHUB_BLOCK-->

# Slider

<!--/GITHUB_BLOCK-->

滑块是一个可自定义且响应式的 React 组件，允许用户从指定的数据集中选择单个值或值范围。

```tsx
import {Slider} from '@gravity-ui/uikit';
```

## 滑块变体

### 单滑块

这是一个带有单个滑块以选择单个值的滑块。它默认使用。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider />
```

<!--/GITHUB_BLOCK-->

### 范围滑块

这是一个带有两个滑块以选择范围的滑块。要使用它，请为数组设置 `defaultValue`（对于非受控滑块）或 `value`（对于受控滑块）。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider defaultValue={[20, 40]} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider defaultValue={[20, 40]} />
```

<!--/GITHUB_BLOCK-->

## 状态

### 已禁用

这是 `Slider` 的一种状态，您不希望允许用户使用此组件。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider disabled />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider disabled={true} />
```

<!--/GITHUB_BLOCK-->

### 错误

此 `Slider` 状态用于表示不正确的用户输入。要更改 `Slider` 的外观，请使用 `validationState` 属性并将其值设置为 `"invalid"`。您可以选择通过 `errorMessage` 属性提供错误消息。此消息文本将显示在滑块下方。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider validationState="invalid" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider validationState="invalid" errorMessage="Error message" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider validationState={"invalid"} />
<Slider validationState={"invalid"} errorMessage="Error message" />
```

<!--/GITHUB_BLOCK-->

## 大小

使用 `size` 属性来管理 `Slider` 的大小。默认大小为 `m`。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider size="s" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="m" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="l" />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider size="xl" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider size="s" />
<Slider size="m" />
<Slider size="l" />
<Slider size="xl" />
```

<!--/GITHUB_BLOCK-->

## 值

### 最小值和最大值

`min` 和 `max` 属性定义了滑块可以处理的范围的限制。这些属性对于设置可选值的边界至关重要。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width="100%" maxWidth={300}>
                <Slider min={10} />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider max={50} />
            </Box>
            <Box width="100%" maxWidth={300}>
                <Slider min={20} max={60} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider min={10} />
<Slider max={50} />
<Slider min={20} max={60} />
```

<!--/GITHUB_BLOCK-->

### 步长

`step` 属性决定了最小值和最大值范围内的增量。这意味着每次移动滑块时，值会改变多少。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider step={10} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider step={10} />
```

<!--/GITHUB_BLOCK-->

### 标记

`marks` 属性用于 `Slider` 组件，以在滑块上指定视觉标记，这些标记有助于指示最小值和最大值之间的各种点。此属性增强了滑块的可用性和视觉界面，尤其是在表示特定间隔时。默认情况下，它是 2（`min` 和 `max` 值）。您可以通过 2 种不同的方式使用它：

- 滑块上的视觉标记数量

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={11} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={11} />
```

<!--/GITHUB_BLOCK-->

- 滑块上的标记值数组

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={[0, 50, 100]} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[0, 50, 100]} />
```

<!--/GITHUB_BLOCK-->

`marks` 属性中的 `0` 或空数组 `[]` 值会隐藏 `Slider` 中的所有标记。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={0} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={0} />
```

<!--/GITHUB_BLOCK-->

> 即使标记值不符合 `step` 值条件，也可以选择该标记值

您可以通过使用 `marksFormat` 属性来更改标记值的显示格式。

#### 定义可用值

您可以将 `step` 属性设置为 `null`，以定义滑块可以处理的一组特定值，而不是连续范围。当只有某些离散值是有效选择时，这尤其有用。在这种情况下，`min`、`max` 和 `marks` 属性允许指定一个数字数组，这些数字代表用户可以使用 `Slider` 选择的确切值。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider marks={[10, 20, 50, 55, 65, 80]} step={null} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider marks={[10, 20, 50, 55, 65, 80]} step={null} />
```

<!--/GITHUB_BLOCK-->

## 起始点

`startPoint` 属性允许您设置轨道的起点。它默认使用最小的 `Slider` 值。如果您使用带范围值的 `Slider` 或设置了 `inverted` 属性，则会忽略它。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider startPoint={50} />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider startPoint={50} />
```

<!--/GITHUB_BLOCK-->

## 反转

`inverted` 属性允许您设置 `Slider` 轨道的反转视图。
默认情况下（`false`），`Slider` 显示从 `min` 到滑块的区间。
如果为 `true`，则表示从滑块到 `max` 的区间。
仅适用于单滑块。`startPoint` 属性将被忽略。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider inverted />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider inverted />
```

<!--/GITHUB_BLOCK-->

## 工具提示

`tooltipDisplay` 属性用于 `Slider` 组件，以控制显示当前值工具提示的行为，该工具提示会在用户与滑块交互时显示当前值。`auto` 值仅在鼠标悬停或聚焦 `Slider` 的滑块时显示工具提示。

<!--SANDBOX
import {Box, Slider} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width="100%" maxWidth={300}>
            <Slider tooltipDisplay="on" />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Slider tooltipDisplay="on" />
```

<!--/GITHUB_BLOCK-->

您可以通过使用 `tooltipFormat` 属性来更改工具提示值的显示格式。如果您不指定 `tooltipformat`，则将使用 `marksFormat` 在工具提示中显示值。

## 属性

| 名称                             | 描述
