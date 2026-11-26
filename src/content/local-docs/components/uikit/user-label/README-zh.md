# UserLabel

`UserLabel` 是一个紧凑的标签，包含用户的头像和姓名或电子邮件，适用于内联提及和列表（使用 `User` 获取更大的个人资料块，使用 `Avatar` 获取单独的图片）。

## Type

用于管理头像外观。使用 `"person"` 表示个性化实体，使用 `"email"` 表示电子邮件地址。如果您不需要任何头像，请使用 `"empty"`。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Avatar

此组件可与自定义头像一起使用。它仅适用于 `type: 'person'`。您可以提供一个图像、[Avatar](../Avatar/README.md) 组件的属性或自定义 React 节点。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Interactivity

此组件也具有交互性：它可以是可点击的或可关闭的。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Properties

| Name         | Description                                     |                                    Type                                     |   Default    |
| :----------- | :---------------------------------------------- | :-------------------------------------------------------------------------: | :----------: |
| type         | 头像外观                                        |                       `'person'` `'email'` `'empty'`                        |  `'person'`  |
| view         | `UserLabel` 视图                                |                           `'outlined'` `'clear'`                            | `'outlined'` |
| size         | 头像大小                                        |               `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'`               |    `'s'`     |
| avatar       | 用户头像                                        | [AvatarProps](../Avatar/README.md#properties) `string` `React.ReactElement` |              |
| text         | 可见文本                                        |                              `React.ReactNode`                              |              |
| description  | 用户描述                                        |                              `React.ReactNode`                              |              |
| onClick      | 组件的 `click` 事件处理程序                     |                                 `Function`                                  |              |
| onCloseClick | 交叉图标按钮的 `click` 事件处理程序             |                                 `Function`                                  |              |
| className    | 根元素的自定义 CSS 类                           |                                  `string`                                   |              |
| style        | HTML style 属性                                 |                            `React.CSSProperties`                            |              |
| qa           | `data-qa` HTML 属性，用于测试                   |                                  `string`                                   |              |

## CSS API

| 名称                                     | 描述                                             |
| :--------------------------------------- | :------------------------------------------------------ |
| `--g-user-label-size`                    | 头像（宽度和高度）和标签的高度尺寸 |
| `--g-user-label-border-radius`           | 标签边框圆角 |
| `--g-user-label-padding`                 | 标签水平内边距 |
| `--g-user-label-gap`                     | 元素（头像、文本、关闭图标）之间的间隙 |
| `--g-user-label-text-font-weight`        | 文本字体粗细 |
| `--g-user-label-text-font-size`          | 文本字体大小 |
| `--g-user-label-text-line-height`        | 文本行高 |
| `--g-user-label-description-font-weight` | 描述字体粗细 |
| `--g-user-label-description-font-size`   | 描述字体大小 |
| `--g-user-label-description-line-height` | 描述行高 |