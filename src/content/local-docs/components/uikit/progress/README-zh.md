<!--GITHUB_BLOCK-->

# Progress

<!--/GITHUB_BLOCK-->

`Progress` 组件显示当前操作的进度。它也可以被划分为多个部分。

```tsx
import {Progress} from '@gravity-ui/uikit';
```

## 主题

使用 `theme` 属性来指定整个进度条或复合部分的颜色：

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress text="default" value={50} />
                <Box height={4} />
                <Progress text="success" theme="success" value={50} />
            </Box>
            <Box width={'30%'}>
                <Progress text="warning" theme="warning" value={50} />
                <Box height={4} />
                <Progress text="danger" theme="danger" value={50} />
            </Box>
            <Box width={'30%'}>
                <Progress text="info" theme="info" value={50} />
                <Box height={4} />
                <Progress text="misc" theme="misc" value={50} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress text="default" value={50} />
<Progress text="warning" theme="warning" value={50} />
<Progress text="info" theme="info" value={50} />
<Progress text="success" theme="success" value={50} />
<Progress text="danger" theme="danger" value={50} />
<Progress text="misc" theme="misc" value={50} />
```

<!--/GITHUB_BLOCK-->

## 状态

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width={'30%'}>
            <Progress text="Loading" theme="misc" value={60} loading />
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress text="Loading" theme="misc" value={60} loading={true} />
```

<!--/GITHUB_BLOCK-->

## 大小

要管理 `Progress` 组件的大小，请使用 `size` 属性，它可以接受以下值：“xs”、“s”和“m”。`text` 属性仅适用于“m”大小。

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress theme="success" value={60} size="xs" />
            </Box>
            <Box width={'30%'}>
                <Progress theme="warning" value={70} size="s" />
            </Box>
            <Box width={'30%'}>
                <Progress theme="danger" value={80} size="m" />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress theme="success" value={60} size="xs" />
<Progress theme="warning" value={70} size="s" />
<Progress theme="danger" value={80} size="m" />
```

<!--/GITHUB_BLOCK-->

## 断点

使用 `colorStops` 属性来设置 `Progress` 组件的断点。

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

const colorStops = [
    {theme: 'danger', stop: 20},
    {theme: 'warning', stop: 50},
    {theme: 'success', stop: 100},
];

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress value={10} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={40} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={60} colorStops={colorStops} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress value={10} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
<Progress value={40} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
<Progress value={60} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
```

<!--/GITHUB_BLOCK-->

使用可选的 `color` 属性来覆盖主题颜色：

<!--SANDBOX
import {Box, Progress} from '@gravity-ui/uikit';

const colorStops = [
    {theme: 'danger', stop: 20, color: '#ff4444'},
    {theme: 'warning', stop: 50, color: '#ffaa00'},
    {theme: 'success', stop: 100, color: '#44ff44'},
];

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress value={10} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={40} colorStops={colorStops} />
            </Box>
            <Box width={'30%'}>
                <Progress value={60} colorStops={colorStops} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress value={10} colorStops={[{theme: 'danger', stop: 20, color: '#ff4444'}, {theme: 'warning', stop: 50, color: '#ffaa00'}, {theme: 'success', stop: 100, color: '#44ff44'}]} />
<Progress value={40} colorStops={[{theme: 'danger', stop: 20, color: '#ff4444'}, {theme: 'warning', stop: 50, color: '#ffaa00'}, {theme: 'success', stop: 100, color: '#44ff44'}]} />
<Progress value={60} colorStops={[{theme: 'danger', stop: 20, color: '#ff4444'}, {theme: 'warning', stop: 50, color: '#ffaa00'}, {theme: 'success', stop: 100, color: '#44ff44'}]} />
```

<!--/GITHUB_BLOCK-->

## 堆叠

<!--SANDBOX
import type {Stack} from '@gravity-ui/uikit';
import {Box, Progress} from '@gravity-ui/uikit';

const defaultStack: Stack[] = [
    {theme: 'default', content: 'First', value: 25},
    {theme: 'success', content: 'Second', value: 25},
    {theme: 'warning', content: 'Third', value: 25},
    {theme: 'danger', content: 'Fourth', value: 25},
];

const customColorStack: Stack[] = [
    {color: '#6e5d8c', value: 33.333333333333336},
    {color: '#5b785b', value: 33.333333333333336},
    {color: '#956069', value: 33.333333333333336},
];

export default function () {
    return (
        <>
            <Box width={'30%'}>
                <Progress stack={defaultStack} />
            </Box>
            <Box width={'30%'}>
                <Progress text="Progress with custom colors" stack={customColorStack} />
            </Box>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Progress stack={[
  {theme: 'default', content: 'First', value: 25},
  {theme: 'success', content: 'Second', value: 25},
  {theme: 'warning', content: 'Third', value: 25},
  {theme: 'danger', content: 'Fourth', value: 25},
]} />
<Progress text="Progress with custom colors" stack={[
  {color: '#6e5d8c', value: 33.333333333333336},
  {color: '#5b785b', value: 33.333333333333336},
  {color: '#956069', value: 33.333333333333336},
]} />
```

<!--/GITHUB_BLOCK-->

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
