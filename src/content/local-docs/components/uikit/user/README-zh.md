GRAVITY_TRANSLATION_BLOCK_0_END
这是一个通用的组件，用于显示带有信息块的用户头像。它使用 [Avatar](../Avatar/README.md) 组件来渲染头像。它还可以接受自定义的 React 节点作为头像。

```tsx
import {User} from '@gravity-ui/uikit';
```

## 名称和描述

`User` 组件具有 `name` 和 `description` 属性，用于显示信息块。

GRAVITY_TRANSLATION_BLOCK_1_END

## 大小

使用 `size` 属性来管理 `User` 的大小。默认大小为 `m`。可能的值为 `3xs`、`2xs`、`xs`、`s`、`m`、`l` 和 `xl`。

此属性也提供给内部的 `Avatar` 组件。

GRAVITY_TRANSLATION_BLOCK_2_END

## 属性

| 名称             | 描述                               |                                    类型                                     | 默认值 |
| :--------------- | :--------------------------------- | :-------------------------------------------------------------------------: | :-----: |
| avatar           | 用户头像                           | [AvatarProps](../Avatar/README.md#properties) `string` `React.ReactElement` |         |
| name             | 用户名                             |                              `React.ReactNode`                              |         |
| description      | 用户描述                           |                              `React.ReactNode`                              |         |
| size             | 用户部分大小                       |               `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'`               |   `m`   |
| aria-label       | 用户部分的 `aria-label`            |                                  `string`                                   |         |
| aria-labelledby  | 用户部分的 `aria-labelledby`       |                                  `string`                                   |         |
| aria-describedby | 用户部分的 `aria-describedby`      |                                  `string`                                   |         |
| aria-details     | 用户部分的 `aria-details`          |                                  `string`                                   |         |
| className        | 根元素的自定义 CSS 类              |                                  `string`                                   |         |
| style            | HTML style 属性                    |                            `React.CSSProperties`                            |         |
| qa               | `data-qa` HTML 属性，用于测试      |                                  `string`                                   |         |

## CSS API

| 名称                               | 描述                 |
| :--------------------------------- | :------------------- |
| `--g-user-avatar-offset`           | 头像和文本块之间的间隙 |
| `--g-user-name-font-weight`        | 名称字体粗细         |
| `--g-user-name-font-size`          | 名称字体大小         |
| `--g-user-name-line-height`        | 名称行高             |
| `--g-user-description-font-weight` | 描述字体粗细         |
| `--g-user-description-font-size`   | 描述字体大小         |
| `--g-user-description-line-height` | 描述行高             |