# UserLabel

该 `UserLabel` 组件可用于显示用户或用户相关信息。

## 类型

用于管理头像外观。`"person"` 用于个性化实体 `"email"` 和电子邮件地址。如果您不需要任何头像，请使用 `"empty"`。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<UserLabel type="person" text="Charles Darwin" />
<UserLabel type="email" text="email@example.com" />
<UserLabel type="empty" text="Alan Turing" />
`}
>
    <UIKit.UserLabel type="person" text="Charles Darwin" />
    <UIKit.UserLabel type="email" text="email@example.com" />
    <UIKit.UserLabel type="empty" text="Alan Turing" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<UserLabel type="person" text="Charles Darwin (person)" />
<UserLabel type="email" text="email@example.com (email)" />
<UserLabel type="empty" text="Alan Turing (empty)" />
```

<!--/GITHUB_BLOCK-->

## 阿凡达

此组件可以与自定义头像一起使用。它只适用于 `type: 'person'`。您可以提供图像、A [vatar](../Avatar/README.md) 组件的属性或自定义 React 节点。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
import {GraduationCap} from '@gravity-ui/icons';

<UserLabel type="person" avatar="<url>" text="Charles Darwin" />
<UserLabel type="person" avatar={{icon: GraduationCap}} text="Charles Darwin" />
`}
>
    <UIKit.UserLabel type="person" avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg/193px-Charles_Darwin_by_Julia_Margaret_Cameron%2C_c._1868.jpg" text="Charles Darwin" />
    <UIKit.UserLabel type="person" avatar={{icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M6.836 3.202 1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202ZM1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.896 1.896 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0V7.643Zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447Z" clip-rule="evenodd"/></svg>'}} text="Charles Darwin" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
import {GraduationCap} from '@gravity-ui/icons';

<UserLabel type="person" avatar="<url>" text="Charles Darwin" />
<UserLabel type="person" avatar={{icon: GraduationCap}} text="Charles Darwin" />
```

<!--/GITHUB_BLOCK-->

## 互动性

这个组件也是交互式的：它可以是可点击的，也可以是可关闭的。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
<UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
`}
>
    <UIKit.UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
    <UIKit.UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<UserLabel text="Charles Darwin" onClick={() => alert('onClick triggered')} />
<UserLabel text="Charles Darwin" onCloseClick={() => alert('onCloseClick triggered')} />
```

<!--/GITHUB_BLOCK-->

## 属性

| 姓名         | 描述                             |                                   类型                                   |     默认     |
| :----------- | :------------------------------- | :----------------------------------------------------------------------: | :----------: |
| 类型         | 头像外观                         |                           `'person'` `'empty'`                           |  `'person'`  |
| 观点         | `UserLabel` 观点                 |                          `'outlined'` `'clear'`                          | `'outlined'` |
| 尺寸         | 头像大小                         |                              `'3xs'` `'xl'`                              |    `'s'`     |
| 头像         | 用户头像                         | [头像道具](../Avatar/README.md#properties) `string` `React.ReactElement` |              |
| 文本         | 可见文本                         |                            `React.ReactNode`                             |              |
| 描述         | 用户描述                         |                            `React.ReactNode`                             |              |
| onClick      | `click` 组件的事件处理器         |                                `Function`                                |              |
| onCloseClick | `click` 交叉图标按钮的事件处理器 |                                `Function`                                |              |
| className    | 根元素的自定义 CSS 类            |                                 `string`                                 |              |
| 风格         | HTML 样式属性                    |                          `React.CSSProperties`                           |              |
| qa           | `data-qa` HTML 属性，用于测试    |                                 `string`                                 |              |

## CSS API

| 姓名                                     | 描述                                   |
| :--------------------------------------- | :------------------------------------- |
| `--g-user-label-size`                    | 头像的大小（宽度和高度）和标签的高度   |
| `--g-user-label-border-radius`           | 标签边框半径                           |
| `--g-user-label-padding`                 | 标签水平边距                           |
| `--g-user-label-gap`                     | 元素（头像、文本、关闭图标）之间的间隔 |
| `--g-user-label-text-font-weight`        | 文字字体权重                           |
| `--g-user-label-text-font-size`          | 文字字体大小                           |
| `--g-user-label-text-line-height`        | 文本行高                               |
| `--g-user-label-description-font-weight` | 描述字体重量                           |
| `--g-user-label-description-font-size`   | 描述字体大小                           |
| `--g-user-label-description-line-height` | 描述行高                               |
