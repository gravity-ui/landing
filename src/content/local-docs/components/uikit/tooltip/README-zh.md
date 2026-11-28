<!--GITHUB_BLOCK-->

# Tooltip

<!--/GITHUB_BLOCK-->

一个简单的文本提示，它使用其子节点作为锚点。此组件仅接受文本内容，并且由于其体积小巧和延迟显示，可能是浏览器 `title` 属性的一个极佳替代方案。

## 用法

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Content">
  <div tabIndex={0}>Anchor</div>
</Tooltip>;
```

## 锚点

为了使 `Tooltip` 生效，您应该将一个有效的 `ReactElement` 作为子节点传递，该子节点接受用于 `HTMLElement` 的 `ref` 属性以及用于 `HTMLElement` 的其他属性。

或者，您可以将函数作为子节点传递，以便手动为您的底层组件提供 ref 和 props：

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Content">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</Tooltip>;
```

## 受控状态

默认情况下，`Tooltip` 会在鼠标悬停在锚点上时打开和隐藏。您可以将此行为更改为手动设置打开状态。
将您的状态传递给 `open` 属性，并通过 `onOpenChange` 回调进行更改。
`onOpenChange` 回调具有以下签名：`(open: boolean, event?: Event, reason: 'hover' | 'focus') => void`。

## Role

`Tooltip` 接受 `role` 属性，该属性会改变其在可访问性方面的行为方式。
当锚点具有自己的文本时，应使用 `tooltip` role；否则（例如在图标按钮中），应使用 `label` role。

## 属性

| 名称          | 描述                                                                                     |                       类型                       |     默认值     |
| :------------ | :----------------------------------------------------------------------------------------------- | :----------------------------------------------: | :-------------: |
| children      | `Tooltip` 的锚点元素                                                                                               |         `React.ReactElement` `Function`          |                 |
| className     | `class` HTML 属性                                                                          |                     `string`                     |                 |
| closeDelay    | 鼠标悬停结束后隐藏 `Tooltip` 的延迟毫秒数                                                                                               |                     `number`                     |       `0`       |
| container     | 通过 `Portal` 组件挂载的 DOM 元素                                                                                                     |                  `HTMLElement`                   | `document.body` |
| content       | 将在 `Tooltip` 中显示的内容                                                                                                     |                `React.ReactNode`                 |                 |
| disablePortal | 禁用 `Portal`                                                                         |                    `boolean`                     |     `false`     |
| disabled      | 防止 `Tooltip` 打开                                                                                             |                    `boolean`                     |                 |
| offset        | `Tooltip` 相对于其锚点的偏移量                                                                                              |                     `number`                     |       `4`       |
| onOpenChange  | 处理打开状态变化的事件                                                                                           |                    `Function`                    |                 |
| open          | 受控的打开状态                                                                           |                    `boolean`                     |                 |
| openDelay     | 鼠标悬停开始后显示 `Tooltip` 的延迟毫秒数                                                                                               |                     `number`                     |     `1000`      |
| placement     | `Tooltip` 相对于其锚点的位置                                                                                      | [`PopupPlacement`](../Popup/README.md#placement) |    `bottom`     |
| qa            | `data-qa` HTML 属性，用于测试                                                                                     |                     `string`                     |                 |
| rest          | 光标在打开前必须静止的毫秒数。                                                                       |                     `number`                     |       `0`       |
| role          | `Tooltip` 用于的 `role`                                                                  |              `"tooltip"` `"label"`               |   `"tooltip"`   |
| strategy      | 要使用的 CSS `position` 属性的类型。                                                                                      |                `absolute` `fixed`                |   `absolute`    |
| style         | `style` HTML 属性                                                                          |              `React.CSSProperties`               |                 |
| trigger       | 应触发打开的事件类型。默认的 `all` 值同时指 `hover` 和 `focus`。                                                               |                `"all"` `"focus"`                 |     `"all"`     |

## CSS API

| 名称                           | 描述      |
| :----------------------------- | :-------- |
| `--g-tooltip-text-color`       | 文本颜色  |
| `--g-tooltip-background-color` | 背景颜色  |
| `--g-tooltip-padding`          | 内边距    |
| `--g-tooltip-border-radius`    | 圆角      |
| `--g-tooltip-box-shadow`       | 阴影      |
