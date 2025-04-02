<!--GITHUB_BLOCK-->

# 工具提示

<!--/GITHUB_BLOCK-->

一个使用其子节点作为锚点的简单文本提示。该组件仅接受文本内容，可能是一个很好的选择
浏览器 `title` 属性的替代方案，它体积小，出现延迟时间长。

## 用法

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Content">
  <div tabIndex={0}>Anchor</div>
</Tooltip>;
```

## 锚

`Tooltip` 为了工作，你应该通过有效的子女 `ReactElement` 身份获得接受 `ref` 财产的证书 `HTMLElement`
以及其他的属性 `HTMLElement`。

或者，你可以将函数作为子组件传递，手动为底层组件提供 ref 和 props：

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Content">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</Tooltip>;
```

## 受控状态

默认情况下，通过将鼠标悬停在锚点上来 `Tooltip` 打开和隐藏。您可以更改此行为以手动设置打开状态。
将你的状态传递给道 `open` 具并从 `onOpenChange` 回调中进行更改。
`onOpenChange` 回调具有以下签名： `（打开：布尔值，事件？:事件，原因：“悬停” | '焦点') => 空白。`

## 角色

`Tooltip` 接受更改其行为方式的可访问性条款的 `role` 财产。
`tooltip` 当锚有自己的文本和其他 `label` 角色时，应使用角色（例如在图标按钮中）。

## 属性

| 姓名         | 描述                                                       |                       类型                       |    默认     |
| :----------- | ---------------------------------------------------------- | :----------------------------------------------: | :---------: |
| 儿童         | 的锚元素 `Tooltip`                                         |         `React.ReactElement` `Function`          |             |
| className    | `class` HTML 属性                                          |                     `string`                     |             |
| closeDelay   | 悬停 `Tooltip` 结束后要延迟隐藏的毫秒数                    |                     `number`                     |     `0`     |
| 内容         | 内容将显示在 `Tooltip`                                     |                `React.ReactNode`                 |             |
| 残疾的       | `Tooltip` 防止打开                                         |                    `boolean`                     |             |
| 抵消         | `Tooltip` 与其锚点相抵消                                   |                     `number`                     |     `4`     |
| onOpenChange | 处理打开状态变化的回调                                     |                    `Function`                    |             |
| 打开         | 受控的开启状态                                             |                    `boolean`                     |             |
| openDelay    | 显示悬停开始 `Tooltip` 后的延迟毫秒数                      |                     `number`                     |   `1000`    |
| 放置         | `Tooltip` 相对于其锚点的位置                               | [`PopupPlacement`](../Popup/README.md#placement) |  `bottom`   |
| qa           | `data-qa` HTML 属性，用于测试                              |                     `string`                     |             |
| 角色         | 该角色用 `Tooltip` 于                                      |              `"tooltip"` `"label"`               | `"tooltip"` |
| 战略         | 要使用的 CSS 位置属性的类型。                              |                `absolute` `fixed`                | `absolute`  |
| 风格         | `style` HTML 属性                                          |              `React.CSSProperties`               |             |
| 触发         | 应该触发打开的事件类型。默认情况下，鼠标悬停和聚焦都可以。 |                    `"focus"`                     |             |

## CSS API

| 姓名                           | 描述     |
| :----------------------------- | :------- |
| `--g-tooltip-text-color`       | 文字颜色 |
| `--g-tooltip-background-color` | 背景颜色 |
| `--g-tooltip-padding`          | 填充     |
| `--g-tooltip-border-radius`    | 边框半径 |
| `--g-tooltip-box-shadow`       | 影子     |
