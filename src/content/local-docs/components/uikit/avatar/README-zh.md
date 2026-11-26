此组件用于渲染头像。它有三种基本头像类型：图像、图标和文本（姓名首字母）。所有这些类型都有特殊的属性来配置行为和外观。

```tsx
import {Avatar} from '@gravity-ui/uikit';
```

## 类型

### 图像

此组件可用于使用图像渲染头像。要提供图像，请使用 `imgUrl` 属性。

GRAVITY_TRANSLATION_BLOCK_1_END

您还可以提供 `srcSet` 属性来加载不同尺寸的图像。

GRAVITY_TRANSLATION_BLOCK_2_END

`Avatar` 组件具有 `fallbackImgUrl` 属性，该属性允许您提供在图像加载错误时显示的图像，通过 `imgUrl` 链接（CSP 错误或无原始图像）。

GRAVITY_TRANSLATION_BLOCK_3_END

### 图标

此组件可用于使用图标渲染头像。使用 `icon` 属性提供图标，就像在 `Icon` 组件中一样。

GRAVITY_TRANSLATION_BLOCK_4_END

### 文本

此组件可用于使用文本渲染头像。为此使用 `text` 属性。文本将呈现为首字母缩写（两个单词的首字母）或单个单词的前两个字母。

GRAVITY_TRANSLATION_BLOCK_5_END

## 外观

### 主题和视图

`Avatar` 组件具有预定义的主题（`normal`、`brand`）和视图（`filled`、`outlined`）。

默认主题是 `normal`，默认视图是 `filled`。

GRAVITY_TRANSLATION_BLOCK_6_END

### 自定义颜色

您还可以通过 `backgroundColor`、`borderColor` 和 `color` 属性提供自定义颜色（后者仅适用于图标和文本头像）。这些颜色比主题颜色具有更高的优先级。

GRAVITY_TRANSLATION_BLOCK_7_END

### 大小

使用 `size` 属性来管理 `Avatar` 的大小。默认大小为 `m`。可能的值为 `3xs`、`2xs`、`xs`、`s`、`m`、`l` 和 `xl`。

GRAVITY_TRANSLATION_BLOCK_8_END

### 形状

使用 `shape` 属性来管理 `Avatar` 的形状。默认形状为 `circle`。可能的值为 `circle` 和 `square`。

GRAVITY_TRANSLATION_BLOCK_9_END

## 属性

### 通用

| 名称             | 描述                               |                      类型                       | 默认值  |
| :--------------- | :--------------------------------- | :---------------------------------------------: | :------: |
| size             | 头像大小                           | `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'` |   `m`    |
| theme            | 头像主题                           |              `'normal'` `'brand'`               | `normal` |
| view             | 头像填充和轮廓选项                 |             `'filled'` `'outlined'`             | `filled` |
| shape            | 头像形状                           |              `'circle'` `'square'`              | `circle` |
| backgroundColor  | 自定义背景颜色                     |                    `string`                     |          |
| borderColor      | 自定义边框颜色                     |                    `string`                     |          |
| title            | `title` HTML 属性                  |                    `string`                     |          |
| aria-label       | 头像部分的 `aria-label`            |                    `string`                     |          |
| aria-labelledby  | 头像部分的 `aria-labelledby`       |                    `string`                     |          |
| aria-describedby | 头像块的 `aria-describedby`        |                    `string`                     |          |
| aria-details     | 头像块的 `aria-details`            |                    `string`                     |          |
| className        | 根元素的自定义 CSS 类              |                    `string`                     |          |
| style            | `style` HTML 属性                  |              `React.CSSProperties`              |          |
| qa               | `data-qa` HTML 属性，用于测试      |                    `string`                     |          |

### 图像专用

| 名称            | 描述                                   |        类型        |   默认值   |
| :-------------- | :------------------------------------- | :----------------: | :---------: |
| imgUrl          | `img` `src` HTML 属性                  |      `string`      |             |
| fallbackImgUrl  | 加载错误时显示的备用图片               |      `string`      |             |
| sizes           | `img` `sizes` HTML 属性                |      `string`      |             |
| srcSet          | `img` `srcSet` HTML 属性               |      `string`      |             |
| alt             | `img` `alt` HTML 属性                  |      `string`      | props.title |
| loading         | `img` `loading` HTML 属性              | `'eager'` `'lazy'` |             |
| withImageBorder | 为图片添加默认边框                     |     `boolean`      |             |

### 特定于图标

| 名称  | 描述         |    类型    | 默认值 |
| :---- | :----------- | :--------: | :----: |
| icon  | SVG 图标来源 | `IconData` |        |
| color | 自定义图标颜色 |  `string`  |        |

### 特定于文本

| 名称  | 描述       |   类型   | 默认值 |
| :---- | :--------- | :------: | :----: |
| text  | 头像文本   | `string` |        |
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