<!--GITHUB_BLOCK-->

# ActionTooltip

<!--/GITHUB_BLOCK-->

用于标记操作按钮（例如图标按钮）而无需描述性文本的[`Tooltip`](../Tooltip/README.md)。

## 用法

```tsx
import {ActionTooltip} from '@gravity-ui/uikit';

<ActionTooltip title="Action">
  <div tabIndex={0}>Anchor</div>
</ActionTooltip>;
```

## Anchor

为了使 `ActionTooltip` 工作，您应该将一个有效的 `ReactElement` 作为子元素传递，该子元素接受 `ref` 属性用于 `HTMLElement` 以及其他用于 `HTMLElement` 的属性。

或者，您可以将函数作为子元素传递，以便手动为您的底层组件提供 ref 和 props：

```tsx
import {ActionTooltip} from '@gravity-ui/uikit';

<ActionTooltip title="Action">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</ActionTooltip>;
```

## 受控状态

默认情况下，`ActionTooltip` 会在鼠标悬停在 anchor 上时打开和隐藏。您可以将此行为更改为手动设置打开状态。
将您的状态传递给 `open` 属性，并通过 `onOpenChange` 回调进行更改。
`onOpenChange` 回调具有以下签名： `(open: boolean, event?: Event, reason: 'hover' | 'focus') => void`。

## 属性

| 名称          | 描述                                                                                     |                       类型                       |     默认值     |
| :------------ | :----------------------------------------------------------------------------------------------- | :----------------------------------------------: | :-------------: |
| children      | `ActionTooltip` 的锚点元素                                                          |         `React.ReactElement` `Function`          |                 |
| className     | `class` HTML 属性                                                                          |                     `string`                     |                 |
| closeDelay    | 鼠标悬停结束时隐藏 `ActionTooltip` 的延迟毫秒数                                                          |                     `number`                     |       `0`       |
| container     | 通过 `Portal` 组件挂载到其中的 DOM 元素                                          |                  `HTMLElement`                   | `document.body` |
| description   | 描述内容                                                                             |                `React.ReactNode`                 |                 |
| disablePortal | 禁用 `Portal` 组件                                                                         |                    `boolean`                     |     `false`     |
| disabled      | 防止 `ActionTooltip` 打开                                                        |                    `boolean`                     |                 |
| hotkey        | 显示在右上角的 `Hotkey` 值                                                |   [`Hotkey` 值](../Hotkey/README.md#value)    |                 |
| offset        | `ActionTooltip` 相对于其锚点的偏移量                                                          |                     `number`                     |       `4`       |
| onOpenChange  | 处理打开状态变化的事件回调                                                            |                    `Function`                    |                 |
| open          | 受控的打开状态                                                                           |                    `boolean`                     |                 |
| openDelay     | 鼠标悬停开始后显示 `ActionTooltip` 的延迟毫秒数                                                       |                     `number`                     |     `1000`      |
| placement     | `ActionTooltip` 相对于其锚点的位置                                                 | [`PopupPlacement`](../Popup/README.md#placement) |    `bottom`     |
| qa            | `data-qa` HTML 属性，用于测试                                                      |                     `string`                     |                 |
| rest          | 光标在打开前必须静止的毫秒数。                                        |                     `number`                     |       `0`       |
| strategy      | 要使用的 CSS `position` 属性的类型。                                                       |                `absolute` `fixed`                |   `absolute`    |
| style         | `style` HTML 属性                                                                          |              `React.CSSProperties`               |                 |
| title         | 标题内容                                                                                   |                     `string`                     |                 |
| trigger       | 触发打开的事件类型。默认的 `all` 值同时指 `hover` 和 `focus`。                                |                `"all"` `"focus"`                 |     `"all"`     |