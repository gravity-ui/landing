<!--GITHUB_BLOCK-->

# Stepper

<!--/GITHUB_BLOCK-->

`Stepper` 可引导用户完成一系列编号步骤，在类似向导的多步工作流中显示进度。

```tsx
import {Stepper} from '@gravity-ui/uikit';
```

## 示例

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item>Step 2</Stepper.Item>
            <Stepper.Item>Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item>Step 2</Stepper.Item>
  <Stepper.Item>Step 3</Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperDefault />

<!--/GITHUB_BLOCK-->

### 可交互项

使用 `onUpdate` 和 `value` 属性配合自定义状态来操作步骤。

<!--SANDBOX
import {useState} from 'react';
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    const [value, setValue] = useState(0);

    return (
        <Stepper value={value} onUpdate={setValue}>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item>Step 2</Stepper.Item>
            <Stepper.Item>Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [value, setValue] = React.useState();

return (
  <Stepper value={value} onUpdate={setValue}>
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
    <Stepper.Item>Step 4 with very long title</Stepper.Item>
  </Stepper>
);
```

<!-- Storybook example -->

<StepperInteractiveShowcase />

<!--/GITHUB_BLOCK-->

### 不同视图

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item view="error">Step 2</Stepper.Item>
            <Stepper.Item view="error">Step 3</Stepper.Item>
            <Stepper.Item view="success">Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item view="error">Step 2</Stepper.Item>
  <Stepper.Item view="error">Step 3</Stepper.Item>
  <Stepper.Item view="success">Step 4</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperView/>

<!--/GITHUB_BLOCK-->

### 不同尺寸

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper size="l">
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item>Step 2</Stepper.Item>
            <Stepper.Item>Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Flex direction="column" gap={4}>
  <Stepper {...args} size="s">
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
  </Stepper>

  <Stepper {...args} size="m">
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
  </Stepper>

  <Stepper {...args} size="l">
    <Stepper.Item>Step 1</Stepper.Item>
    <Stepper.Item>Step 2</Stepper.Item>
    <Stepper.Item>Step 3</Stepper.Item>
  </Stepper>
</Flex>
```

<!-- Storybook example -->

<StepperSize/>

<!--/GITHUB_BLOCK-->

### 禁用步骤

<!--SANDBOX
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item disabled>Step 2</Stepper.Item>
            <Stepper.Item disabled>Step 3</Stepper.Item>
            <Stepper.Item disabled>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item disabled>Step 2</Stepper.Item>
  <Stepper.Item disabled>Step 3</Stepper.Item>
  <Stepper.Item disabled>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperDisabled/>

<!--/GITHUB_BLOCK-->

### 自定义图标

<!--SANDBOX
import {Cloud, Gear, Hammer, Rocket} from '@gravity-ui/icons';
import {Stepper} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Stepper.Item icon={Gear}>Step 1</Stepper.Item>
            <Stepper.Item icon={Rocket}>Step 2</Stepper.Item>
            <Stepper.Item icon={Cloud}>Step 3</Stepper.Item>
            <Stepper.Item icon={Hammer}>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper>
  <Stepper.Item icon={Gear}>Step 1</Stepper.Item>
  <Stepper.Item view="error" icon={Gear}>
    Step 2
  </Stepper.Item>
  <Stepper.Item view="success" icon={Gear}>
    Step 3
  </Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperCustomIcons/>

<!--/GITHUB_BLOCK-->

### 自定义步骤分隔符

<!--SANDBOX
import {Stepper, Text} from '@gravity-ui/uikit';

const Separator = () => {
    return <Text color="secondary">{'->'}</Text>;
};

export default function () {
    return (
        <Stepper separator={<Separator />}>
            <Stepper.Item>Step 1</Stepper.Item>
            <Stepper.Item view="error">Step 2</Stepper.Item>
            <Stepper.Item view="success">Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const Separator = () => {
  return <Text color="secondary">{'->'}</Text>;
};

<Stepper {...args} separator={<Separator />}>
  <Stepper.Item>Step 1</Stepper.Item>
  <Stepper.Item view="error">Step 2</Stepper.Item>
  <Stepper.Item view="success">Step 3</Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>;
```

<!-- Storybook example -->

<StepperCustomSeparator/>

<!--/GITHUB_BLOCK-->

### 带浮动元素的步骤

<!--SANDBOX
import {Stepper, Tooltip} from '@gravity-ui/uikit';

export default function () {
    return (
        <Stepper>
            <Tooltip content="fancy step with tooltip">
                <Stepper.Item>Step 1</Stepper.Item>
            </Tooltip>
            <Stepper.Item view="error">Step 2</Stepper.Item>
            <Stepper.Item view="success">Step 3</Stepper.Item>
            <Stepper.Item>Step 4 with very long title</Stepper.Item>
        </Stepper>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Stepper {...args}>
  <Tooltip content="fancy step with tooltip">
    <Stepper.Item>Step 1</Stepper.Item>
  </Tooltip>
  <Stepper.Item view="error">Step 2</Stepper.Item>
  <Stepper.Item view="success">Step 3</Stepper.Item>
  <Stepper.Item>Step 4 with very long title</Stepper.Item>
</Stepper>
```

<!-- Storybook example -->

<StepperWithFloatingElements/>

<!--/GITHUB_BLOCK-->

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
