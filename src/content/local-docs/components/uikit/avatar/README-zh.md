<!--GITHUB_BLOCK-->

# Avatar

<!--/GITHUB_BLOCK-->

此组件用于渲染头像。它有三种基本头像类型：图像、图标和文本（姓名首字母）。所有这些类型都有特殊的属性来配置行为和外观。

```tsx
import {Avatar} from '@gravity-ui/uikit';
```

## 类型

### 图像

此组件可用于使用图像渲染头像。要提供图像，请使用 `imgUrl` 属性。

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return <Avatar imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352" size="l" />;
}
SANDBOX-->

您还可以提供 `srcSet` 属性来加载不同尺寸的图像。

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <Avatar
            imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352"
            srcSet="https://loremflickr.com/57/43/cats?lock=2879400393572352 1x, https://loremflickr.com/131/98/cats?lock=4373954936438784 2x, https://loremflickr.com/164/123/cats?lock=3007328513163264 3x, https://loremflickr.com/225/169/cats?lock=8243879964835840 4x"
            size="l"
        />
    );
}
SANDBOX-->

`Avatar` 组件具有 `fallbackImgUrl` 属性，允许您在发生图像加载错误时（例如 CSP 错误或原始图像不存在）提供显示的图像。

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <Avatar
            imgUrl="random_link"
            fallbackImgUrl="https://loremflickr.com/640/480/cats?lock=3552647338524672"
            size="l"
        />
    );
}
SANDBOX-->

### 图标

此组件可用于使用图标渲染头像。使用 `icon` 属性提供图标，就像您对 `Icon` 组件所做的那样。

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return <Avatar icon={GraduationCap} size="l" />;
}
SANDBOX-->

### 文本

此组件可用于使用文本渲染头像。为此使用 `text` 属性。文本将呈现为首字母缩写（两个单词的首字母）或单个单词的前两个字母。

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" size="l" />
            <Avatar text="Guardian" size="l" />
        </>
    );
}
SANDBOX-->

## 外观

### 主题和视图

`Avatar` 组件具有预定义的主题（`normal`、`brand`）和视图（`filled`、`outlined`）。

默认主题是 `normal`，默认视图是 `filled`。

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar icon={GraduationCap} size="l" theme="normal" view="filled" />
            <Avatar icon={GraduationCap} size="l" theme="brand" view="filled" />
            <Avatar icon={GraduationCap} size="l" theme="normal" view="outlined" />
            <Avatar icon={GraduationCap} size="l" theme="brand" view="outlined" />
        </>
    );
}
SANDBOX-->

### 自定义颜色

您还可以通过 `backgroundColor`、`borderColor` 和 `color` 属性提供自定义颜色（最后一个仅适用于图标和文本头像）。这些颜色比主题颜色具有更高的优先级。

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar
                text="Charles Darwin"
                size="l"
                backgroundColor="var(--g-color-base-danger-medium)"
                color="var(--g-color-text-primary)"
            />
            <Avatar text="Charles Darwin" size="l" borderColor="var(--g-color-line-misc)" />
        </>
    );
}
SANDBOX-->

### 大小

使用 `size` 属性来管理 `Avatar` 的大小。默认大小为 `m`。可能的值为 `3xs`、`2xs`、`xs`、`s`、`m`、`l` 和 `xl`。

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" theme="brand" size="3xs" />
            <Avatar text="Charles Darwin" theme="brand" size="2xs" />
            <Avatar text="Charles Darwin" theme="brand" size="xs" />
            <Avatar text="Charles Darwin" theme="brand" size="s" />
            <Avatar text="Charles Darwin" theme="brand" size="m" />
            <Avatar text="Charles Darwin" theme="brand" size="l" />
            <Avatar text="Charles Darwin" theme="brand" size="xl" />
        </>
    );
}
SANDBOX-->

### 形状

使用 `shape` 属性来管理 `Avatar` 的形状。默认形状为 `circle`。可能的值为 `circle` 和 `square`。

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" theme="brand" shape="circle" />
            <Avatar text="Charles Darwin" theme="brand" shape="square" />
        </>
    );
}
SANDBOX-->

## 属性

### 通用

| 名称             | 描述                               |                      类型                       | 默认值  |
| :--------------- | :--------------------------------- | :---------------------------------------------: | :------: |
| size             | Avatar 大小                        | `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'` |   `m`    |
| theme            | Avatar 主题                        |              `'normal'` `'brand'`               | `normal` |
| view             | Avatar 填充和轮廓选项              |             `'filled'` `'outlined'`             | `filled` |
| shape            | Avatar 形状                        |              `'circle'` `'square'`              | `circle` |
| backgroundColor  | 自定义背景颜色                     |                    `string`                     |          |
| borderColor      | 自定义边框颜色                     |                    `string`                     |          |
| title            | `title` HTML 属性                  |                    `string`                     |          |
| aria-label       | `aria-label` 用于 avatar 部分      |                    `string`                     |          |
| aria-labelledby  | `aria-labelledby` 用于 avatar 部分 |                    `string`                     |          |
| aria-describedby | `aria-describedby` 用于 avatar 块  |                    `string`                     |          |
| aria-details     | `aria-details` 用于 avatar 块      |                    `string`                     |          |
| className        | 根元素的自定义 CSS 类              |                    `string`                     |          |
| style            | `style` HTML 属性                  |              `React.CSSProperties`              |          |
| qa               | `data-qa` HTML 属性，用于测试      |                    `string`                     |          |

### 特定于图片的属性

| 名称            | 描述                               |        类型        |   默认值   |
| :-------------- | :--------------------------------- | :----------------: | :--------: |
| imgUrl          | `img` `src` HTML 属性              |      `string`      |            |
| fallbackImgUrl  | 发生错误时显示的备用图片           |      `string`      |            |
| sizes           | `img` `sizes` HTML 属性            |      `string`      |            |
| srcSet          | `img` `srcSet` HTML 属性           |      `string`      |            |
| alt             | `img` `alt` HTML 属性              |      `string`      | props.title |
| loading         | `img` `loading` HTML 属性          | `'eager'` `'lazy'` |            |
| withImageBorder | 为图片添加默认边框                 |     `boolean`      |            |

### 特定于图标的属性

| 名称  | 描述           |    类型    | 默认值 |
| :---- | :------------- | :--------: | :----: |
| icon  | SVG 图标来源   | `IconData` |        |
| color | 自定义图标颜色 |  `string`  |        |

### 特定于文本的属性

| 名称  | 描述       |   类型   | 默认值 |
| :---- | :--------- | :------: | :----: |
| text  | Avatar 文本 | `string` |        |
| color | 自定义文本颜色 | `string` |        |

## CSS API

| 名称                            | 描述             |
| :------------------------------ | :--------------- |
| `--g-avatar-size`               | 大小（宽度和高度） |
| `--g-avatar-border-width`       | 边框宽度         |
| `--g-avatar-inner-border-width` | 内边框宽度       |
| `--g-avatar-border-color`       | 边框颜色         |
| `--g-avatar-background-color`   | 背景颜色         |
| `--g-avatar-text-color`         | 图标和文本颜色   |
| `--g-avatar-font-weight`        | 文本字体粗细     |
| `--g-avatar-font-size`          | 文本字体大小     |
| `--g-avatar-line-height`        | 文本行高         |