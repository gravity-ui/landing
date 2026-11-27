GRAVITY_TRANSLATION_BLOCK_0_END

一个简单的文本提示，它使用其子节点作为锚点。此组件仅接受文本内容，并且由于其体积小巧和外观延迟长，可能是浏览器 `title` 属性的一个极佳替代方案。

## 用法

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="内容">
  <div tabIndex={0}>锚点</div>
</Tooltip>;
```

## 锚点

为了使 `Tooltip` 生效，您应该将一个有效的 `ReactElement` 作为子节点传递，该子节点接受 `ref` 属性用于 `HTMLElement` 以及其他用于 `HTMLElement` 的属性。

或者，您可以将函数作为子节点传递，以便手动为您的底层组件提供 ref 和 props：

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="内容">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</Tooltip>;
```

## 受控状态

默认情况下，`Tooltip` 会在悬停锚点时打开和隐藏。您可以将此行为更改为手动设置打开状态。
将您的状态传递给 `open` 属性，并通过 `onOpenChange` 回调进行更改。
`onOpenChange` 回调具有以下签名：`(open: boolean, event?: Event, reason: 'hover' | 'focus') => void`。

## Role

`Tooltip` 接受 `role` 属性，该属性会改变其在可访问性方面的行为方式。
当锚点具有自己的文本时，应使用 `tooltip` 角色；否则（例如在图标按钮中），应使用 `label` 角色。

## 延迟组

在 `Provider` 下渲染的所有工具提示共享打开延迟。第一个工具提示支付其自己的 `openDelay`，
因此偶然的鼠标移动仍然不会打开任何东西。只要组是“热的”——即工具提示已打开或已关闭
不到 `skipDelay` 的时间——下一个悬停的工具提示会立即打开，并且一次只有一个工具提示打开。
这适用于工具栏和图标按钮行，其中等待每个按钮的延迟会感觉很慢。
通过焦点打开是即时的，无论是否有组，因此键盘不受影响。

`skipDelay`（默认为 300 毫秒）通过 `Provider` 的 `defaultProps` 进行配置：

```tsx
import {Provider} from '@gravity-ui/uikit';

<Provider defaultProps={{TooltipDelayGroup: {skipDelay: 500}}}>{/* ... */}</Provider>;
```

## 属性

| 名称          | 描述                                                                                     |                       类型                       |     默认值     |
| :------------ | :----------------------------------------------------------------------------------------------- | :----------------------------------------------: | :-------------: |
| children      | `Tooltip` 的锚点元素                                                                                               |         `React.ReactElement` `Function`          |                 |
| className     | `class` HTML 属性                                                                          |                     `string`                     |                 |
| closeDelay    | 鼠标悬停结束后隐藏 `Tooltip` 的延迟毫秒数                                                                                               |                     `number`                     |       `0`       |
| container     | 通过 `Portal` 组件挂载的 DOM 元素                                                                                                        |                  `HTMLElement`                   | `document.body` |
| content       | 将在 `Tooltip` 中显示的内容                                                                                                    |                `React.ReactNode`                 |                 |
| disablePortal | 禁用 `Portal`                                                                         |                    `boolean`                     |     `false`     |
| disabled      | 防止 `Tooltip` 打开                                                                                              |                    `boolean`                     |                 |
| offset        | `Tooltip` 相对于其锚点的偏移量                                                                                               |                     `number`                     |       `4`       |
| onOpenChange  | 处理打开状态变化的事件                                                                                           |                    `Function`                    |                 |
| open          | 受控的打开状态                                                                           |                    `boolean`                     |                 |
| openDelay     | 鼠标悬停开始后显示 `Tooltip` 的延迟毫秒数                                                                                               |                     `number`                     |     `1000`      |
| placement     | `Tooltip` 相对于其锚点的位置                                                                                      | [`PopupPlacement`](../Popup/README.md#placement) |    `bottom`     |
| qa            | `data-qa` HTML 属性，用于测试                                                                                     |                     `string`                     |                 |
| rest          | 光标在打开前必须静止的毫秒数。                                                                       |                     `number`                     |       `0`       |
| role          | `Tooltip` 使用的角色                                                                                                 |              `"tooltip"` `"label"`               |   `"tooltip"`   |
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