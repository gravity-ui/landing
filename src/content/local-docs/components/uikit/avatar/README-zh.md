<!--GITHUB_BLOCK-->

# Avatar

<!--/GITHUB_BLOCK-->

```tsx
import {Avatar} from '@gravity-ui/uikit';
```

该组件用于渲染头像。它有三种基本头像类型：图像、图标和文本（姓名首字母）。所有这些类型都有特殊属性来配置行为和外观。

## 类型

### 图像

该组件可用于使用图像渲染头像。要提供图像，请使用 `imgUrl` 属性。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Avatar imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352" size="l" />
`}
>
    <UIKit.Avatar imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352" size="l" />
</ExampleBlock>

LANDING_BLOCK-->

您还可以提供 `srcSet` 属性来加载不同大小的图像。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Avatar imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352" srcSet="https://loremflickr.com/57/43/cats?lock=2879400393572352 1x, https://loremflickr.com/131/98/cats?lock=4373954936438784 2x, https://loremflickr.com/164/123/cats?lock=3007328513163264 3x, https://loremflickr.com/225/169/cats?lock=8243879964835840 4x" size="l" />
`}
>
    <UIKit.Avatar imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352" srcSet="https://loremflickr.com/57/43/cats?lock=2879400393572352 1x, https://loremflickr.com/131/98/cats?lock=4373954936438784 2x, https://loremflickr.com/164/123/cats?lock=3007328513163264 3x, https://loremflickr.com/225/169/cats?lock=8243879964835840 4x" size="l" />
</ExampleBlock>

LANDING_BLOCK-->

`Avatar` 组件有 `fallbackImgUrl` 属性，当通过 `imgUrl` 链接加载图像出错时（CSP 错误或没有原始图像），允许您提供显示的图像。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Avatar imgUrl="random_link" fallbackImgUrl="https://loremflickr.com/640/480/cats?lock=3552647338524672" size="l" />
`}
>
    <UIKit.Avatar imgUrl="random_link" fallbackImgUrl="https://loremflickr.com/640/480/cats?lock=3552647338524672" size="l" />
</ExampleBlock>

LANDING_BLOCK-->

### 图标

该组件可用于使用图标渲染头像。使用 `icon` 属性提供图标，就像在 `Icon` 组件中一样。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
import {GraduationCap} from '@gravity-ui/icons';

<Avatar icon={GraduationCap} size="l" />
`}
>
    <UIKit.Avatar icon={'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.836 3.202 1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202ZM1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.896 1.896 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0V7.643Zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447Z" clip-rule="evenodd"/></svg>'} size="l" />
</ExampleBlock>

LANDING_BLOCK-->

### 文本

该组件可用于使用文本渲染头像。为此使用 `text` 属性。文本显示为首字母缩写（两个单词的首字母）或单个单词的前两个字母。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Avatar text="Charles Darwin" size="l" />
<Avatar text="Guardian" size="l" />
`}
>
    <UIKit.Avatar text="Charles Darwin" size="l" />
    <UIKit.Avatar text="Guardian" size="l" />
</ExampleBlock>

LANDING_BLOCK-->

## 外观

### 主题和视图

`Avatar` 组件有预定义的主题（`normal`、`brand`）和视图（`filled`、`outlined`）。

默认主题是 `normal`，默认视图是 `filled`。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
import {GraduationCap} from '@gravity-ui/icons';

<Avatar icon={GraduationCap} size="l" theme="normal" view="filled" />
<Avatar icon={GraduationCap} size="l" theme="brand" view="filled" />
<Avatar icon={GraduationCap} size="l" theme="normal" view="outlined" />
<Avatar icon={GraduationCap} size="l" theme="brand" view="outlined" />
`}
>
    <UIKit.Avatar icon={'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.836 3.202 1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202ZM1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.896 1.896 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0V7.643Zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447Z" clip-rule="evenodd"/></svg>'} size="l" theme="normal" view="filled" />
    <UIKit.Avatar icon={'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.836 3.202 1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202ZM1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.896 1.896 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0V7.643Zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447Z" clip-rule="evenodd"/></svg>'} size="l" theme="brand" view="filled" />
    <UIKit.Avatar icon={'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.836 3.202 1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202ZM1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.896 1.896 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0V7.643Zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447Z" clip-rule="evenodd"/></svg>'} size="l" theme="normal" view="outlined" />
    <UIKit.Avatar icon={'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.836 3.202 1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202ZM1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.896 1.896 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0V7.643Zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447Z" clip-rule="evenodd"/></svg>'} size="l" theme="brand" view="outlined" />
</ExampleBlock>

LANDING_BLOCK-->

### 自定义颜色

您还可以通过 `backgroundColor`、`borderColor` 和 `color` 属性提供自定义颜色（后者仅适用于图标和文本头像）。这些颜色的优先级高于主题颜色。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Avatar text="Charles Darwin" size="l" backgroundColor="var(--g-color-base-danger-medium)" color="var(--g-color-text-primary)" />
<Avatar text="Charles Darwin" size="l" borderColor="var(--g-color-line-misc)" />
`}
>
    <UIKit.Avatar text="Charles Darwin" size="l" backgroundColor="var(--g-color-base-danger-medium)" color="var(--g-color-text-primary)" />
    <UIKit.Avatar text="Charles Darwin" size="l" borderColor="var(--g-color-line-misc)" />
</ExampleBlock>

LANDING_BLOCK-->

### 尺寸

使用 `size` 属性管理 `Avatar` 大小。默认大小为 `m`。可能的值为 `3xs`、`2xs`、`xs`、`s`、`m`、`l` 和 `xl`。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Avatar text="Charles Darwin" theme="brand" size="3xs" />
<Avatar text="Charles Darwin" theme="brand" size="2xs" />
<Avatar text="Charles Darwin" theme="brand" size="xs" />
<Avatar text="Charles Darwin" theme="brand" size="s" />
<Avatar text="Charles Darwin" theme="brand" size="m" />
<Avatar text="Charles Darwin" theme="brand" size="l" />
<Avatar text="Charles Darwin" theme="brand" size="xl" />
`}
>
    <UIKit.Avatar text="Charles Darwin" theme="brand" size="3xs" />
    <UIKit.Avatar text="Charles Darwin" theme="brand" size="2xs" />
    <UIKit.Avatar text="Charles Darwin" theme="brand" size="xs" />
    <UIKit.Avatar text="Charles Darwin" theme="brand" size="s" />
    <UIKit.Avatar text="Charles Darwin" theme="brand" size="m" />
    <UIKit.Avatar text="Charles Darwin" theme="brand" size="l" />
    <UIKit.Avatar text="Charles Darwin" theme="brand" size="xl" />
</ExampleBlock>

LANDING_BLOCK-->

## 属性

### 通用

| 名称             | 描述                          |                      类型                       |  默认值  |
| :--------------- | :---------------------------- | :---------------------------------------------: | :------: |
| size             | 头像大小                      | `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'` |   `m`    |
| theme            | 头像主题                      |              `'normal'` `'brand'`               | `normal` |
| view             | 头像填充和轮廓选项            |             `'filled'` `'outlined'`             | `filled` |
| backgroundColor  | 自定义背景颜色                |                    `string`                     |          |
| borderColor      | 自定义边框颜色                |                    `string`                     |          |
| title            | HTML 属性 `title`             |                    `string`                     |          |
| aria-label       | 头像部分的 `aria-label`       |                    `string`                     |          |
| aria-labelledby  | 头像部分的 `aria-labelledby`  |                    `string`                     |          |
| aria-describedby | 头像块的 `aria-describedby`   |                    `string`                     |          |
| aria-details     | 头像块的 `aria-details`       |                    `string`                     |          |
| className        | 根元素的自定义 CSS 类         |                    `string`                     |          |
| style            | HTML 属性 `style`             |              `React.CSSProperties`              |          |
| qa               | HTML 属性 `data-qa`，用于测试 |                    `string`                     |          |

### 图像特定

| 名称           | 描述                         |        类型        |   默认值    |
| :------------- | :--------------------------- | :----------------: | :---------: |
| imgUrl         | `img` 的 HTML 属性 `src`     |      `string`      |             |
| fallbackImgUrl | 发生错误时显示的备用图像     |      `string`      |             |
| sizes          | `img` 的 HTML 属性 `sizes`   |      `string`      |             |
| srcSet         | `img` 的 HTML 属性 `srcSet`  |      `string`      |             |
| alt            | `img` 的 HTML 属性 `alt`     |      `string`      | props.title |
| loading        | `img` 的 HTML 属性 `loading` | `'eager'` `'lazy'` |             |

### 图标特定

| 名称  | 描述           |    类型    | 默认值 |
| :---- | :------------- | :--------: | :----: |
| icon  | SVG 图标源     | `IconData` |        |
| color | 自定义图标颜色 |  `string`  |        |

### 文本特定

| 名称  | 描述           |   类型   | 默认值 |
| :---- | :------------- | :------: | :----: |
| text  | 头像文本       | `string` |        |
| color | 自定义文本颜色 | `string` |        |

## CSS API

| 名称                            | 描述               |
| :------------------------------ | :----------------- |
| `--g-avatar-size`               | 大小（宽度和高度） |
| `--g-avatar-border-width`       | 边框宽度           |
| `--g-avatar-inner-border-width` | 内边框宽度         |
| `--g-avatar-border-color`       | 边框颜色           |
| `--g-avatar-background-color`   | 背景颜色           |
| `--g-avatar-text-color`         | 图标和文本颜色     |
| `--g-avatar-font-weight`        | 文本字体粗细       |
| `--g-avatar-font-size`          | 文本字体大小       |
| `--g-avatar-line-height`        | 文本行高           |
