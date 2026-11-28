<!--GITHUB_BLOCK-->

# ArrowToggle

<!--/GITHUB_BLOCK-->

`ArrowToggle` 是一个用于显示箭头图标的组件。它可以向四个方向旋转，并可用于显示下拉列表、切割组件等。

## 外观

`ArrowToggle` 有四种可能的方向：`top`、`right`、`bottom` 和 `left`。

<!--SANDBOX
import {ArrowToggle} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <ArrowToggle direction="top" /> top
            <ArrowToggle direction="right" /> right
            <ArrowToggle direction="bottom" /> bottom
            <ArrowToggle direction="left" /> left
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<ArrowToggle direction="top" /> top
<ArrowToggle direction="right" /> right
<ArrowToggle direction="bottom" /> bottom
<ArrowToggle direction="left" /> left
```

<!--/GITHUB_BLOCK-->

## 尺寸

<!--SANDBOX
import {ArrowToggle} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <ArrowToggle size={10} /> 10
            <ArrowToggle size={20} /> 20
            <ArrowToggle size={30} /> 30
            <ArrowToggle size={40} /> 40
            <ArrowToggle size={50} /> 50
            <ArrowToggle size={100} /> 100
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<ArrowToggle size={10} /> 10
<ArrowToggle size={20} /> 20
<ArrowToggle size={30} /> 30
<ArrowToggle size={40} /> 40
<ArrowToggle size={50} /> 50
<ArrowToggle size={100} /> 100
```

<!--/GITHUB_BLOCK-->

## 用作交互元素

以下是使用 `ArrowToggle` 和可切换图标的示例：

<!--SANDBOX
import {useState} from 'react';
import type {ArrowToggleProps} from '@gravity-ui/uikit';
import {ArrowToggle, Button} from '@gravity-ui/uikit';

const directions = ['top', 'left', 'bottom', 'right'] as Array<ArrowToggleProps['direction']>;

export default function () {
    const [directionIndex, setDirectionIndex] = useState(0);
    const direction = directions[directionIndex % directions.length];

    return (
        <Button onClick={() => setDirectionIndex(directionIndex + 1)} view="flat">
            <ArrowToggle direction={direction} /> <span>{direction}</span>
        </Button>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [directionIndex, setDirectionIndex] = React.useState(0);
const directions = ['top', 'left', 'bottom', 'right'] as Array<ArrowToggleProps['direction']>;
const direction = directions[directionIndex % directions.length];

return (
  <Button onClick={() => setDirectionIndex(directionIndex + 1)} view="flat">
    <ArrowToggle {...args} direction={direction} /> <span>{direction}</span>
  </Button>
);
```

<!--/GITHUB_BLOCK-->

## 属性

| 名称      | 描述                               |   类型   |  默认值   |
| :-------- | :--------------------------------- | :------: | :--------: |
| className | `class` HTML 属性                  | `string` |            |
| direction | 用于设置 `arrowToggle` 的方向      | `string` | `"bottom"` |
| size      | `arrowToggle` 的尺寸（以像素为单位） | `number` |    `16`    |
| qa        | `data-qa` HTML 属性，用于测试      | `string` |            |

## CSS API

| 名称                                   | 描述         |
| :------------------------------------- | :----------- |
| `--g-arrow-toggle-transition-duration` | 过渡持续时间 |
