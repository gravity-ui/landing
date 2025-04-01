<!--GITHUB_BLOCK-->

# 用户

<!--/GITHUB_BLOCK-->

```tsx
import {User} from '@gravity-ui/uikit';
```

这是显示带有信息块的用户头像的通用组件。它使用 [Avatar](../Avatar/README.md) 组件来渲染头像。它还可以接受自定义 React 节点作为头像。

## 名称和描述

该 `User` 组件具有 `name` 和 `description` 属性来显示信息块。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="l" />
`}
>
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="l" />
</ExampleBlock>

LANDING_BLOCK-->

## 大小

使用该 `size` 属性来管理大 `User` 小。默认大小为 `m`。可能的值为 `3xs` 、 `2xs` `xs` 、 `s` 、 `m` 、 `l` 、和 `xl`。

此属性也提供给内部组 `Avatar` 件。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="3xs" />
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="2xs" />
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="xs" />
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="s" />
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="m" />
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="l" />
<User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="xl" />
`}
>
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="3xs" />
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="2xs" />
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="xs" />
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="s" />
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="m" />
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="l" />
    <UIKit.User avatar={{text: 'Charles Darwin', theme: 'brand'}} name="Charles Darwin" description="charles@mail.ai" size="xl" />
</ExampleBlock>

LANDING_BLOCK-->

## 属性

| 姓名            | 描述                            |                                   类型                                   | 默认 |
| :-------------- | :------------------------------ | :----------------------------------------------------------------------: | :--: |
| 头像            | 用户头像                        | [头像道具](../Avatar/README.md#properties) `string` `React.ReactElement` |      |
| 名称            | 用户名                          |                            `React.ReactNode`                             |      |
| 描述            | 用户描述                        |                            `React.ReactNode`                             |      |
| 尺寸            | 用户分区大小                    |                              `'3xs'` `'xl'`                              | `m`  |
| aria-label      | `aria-label` 用于用户部分       |                                 `string`                                 |      |
| aria-labelledby | `aria-labelledby` 用于用户部分  |                                 `string`                                 |      |
| 咏叹调描述者    | `aria-describedby` 用于用户部分 |                                 `string`                                 |      |
| aria-详细信息   | `aria-details` 用于用户部分     |                                 `string`                                 |      |
| className       | 根元素的自定义 CSS 类           |                                 `string`                                 |      |
| 风格            | HTML 样式属性                   |                          `React.CSSProperties`                           |      |
| qa              | `data-qa` HTML 属性，用于测试   |                                 `string`                                 |      |

## CSS API

| 姓名                               | 描述                   |
| :--------------------------------- | :--------------------- |
| `--g-user-avatar-offset`           | 头像和文本块之间的间隙 |
| `--g-user-name-font-weight`        | 名称字体重量           |
| `--g-user-name-font-size`          | 名称字体大小           |
| `--g-user-name-line-height`        | 姓名行高               |
| `--g-user-description-font-weight` | 描述字体重量           |
| `--g-user-description-font-size`   | 描述字体大小           |
| `--g-user-description-line-height` | 描述行高               |
