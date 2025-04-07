<!--GITHUB_BLOCK-->

# 弹出窗口

<!--/GITHUB_BLOCK-->

```tsx
import {Popup} from '@gravity-ui/uikit';
```

您可以使用在 `Popup` 页面上方显示浮动内容。严格来说，它是 [浮动用户界面的](https://floating-ui.com) 包装，带有一些默认值。要管理 `Popup` 可见性，请使用该 `open` 属性。
`Popup` 子组件在组件内部呈 [`Portal`](../Portal) 现。要禁用此行为，请使用该 `disablePortal` 属性。

## 锚

要指定浮动元素的锚点，可以使用该 `anchorElement` 属性。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
const [buttonElement, setButtonElement] = React.useState(null);
const [open, setOpen] = React.useState(false);

<Button ref={setButtonElement} onClick={() => setOpen((prevOpen) => !prevOpen)}>
  Toggle Popup
</Button>
<Popup anchorElement={buttonElement} open={open} placement="bottom">
  Content
</Popup>
`}>
    <UIKitExamples.PopupAnchorExample/>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const [buttonElement, setButtonElement] = React.useState(null);
const [open, setOpen] = React.useState(false);

<Button ref={setButtonElement} onClick={() => setOpen((prevOpen) => !prevOpen)}>
  Toggle Popup
</Button>
<Popup anchorElement={buttonElement} open={open} placement="bottom">
  Content
</Popup>
```

<!--/GITHUB_BLOCK-->

## 放置

使用该 `placement` 属性管理锚元素周围 `Popup` 的位置。
默认情况下， `Popup` 使用 f [lip 中间件](https://floating-ui.com/docs/flip) 来防止溢出。
如果将该属性设置为数组，则第一个元素将用作默认放置值，其余元素将用作 [备用放置](https://floating-ui.com/docs/flip#fallbackplacements)值。
使用值 `auto` 来使用 [AutoPlacement 中间件](https://floating-ui.com/docs/autoPlacement) 而不是 flip 也是可以接受的。 `auto-start` `auto-end`

<!--LANDING_BLOCK

<ExampleBlock
    code={`
const [boxElement, setBoxElement] = React.useState(null);

<div ref={setBoxElement} />
<Popup open anchorElement={boxElement} placement="top-start">Top Start</Popup>
<Popup open anchorElement={boxElement} placement="top">Top</Popup>
<Popup open anchorElement={boxElement} placement="top-end">Top End</Popup>
<Popup open anchorElement={boxElement} placement="right-start">Right Start</Popup>
<Popup open anchorElement={boxElement} placement="right">Right</Popup>
<Popup open anchorElement={boxElement} placement="right-end">Right End</Popup>
<Popup open anchorElement={boxElement} placement="bottom-end">Bottom End</Popup>
<Popup open anchorElement={boxElement} placement="bottom">Bottom</Popup>
<Popup open anchorElement={boxElement} placement="bottom-start">Bottom Start</Popup>
<Popup open anchorElement={boxElement} placement="left-end">Left End</Popup>
<Popup open anchorElement={boxElement} placement="left">Left</Popup>
<Popup open anchorElement={boxElement} placement="left-start">Left Start</Popup>
`}>
    <UIKitExamples.PopupPlacementExample/>
</ExampleBlock>

LANDING_BLOCK-->

## 属性

| 姓名                    | 描述                                                         |                          类型                          |     默认      |
| :---------------------- | :----------------------------------------------------------- | :----------------------------------------------------: | :-----------: |
| anchorElement           | 锚元素。也可以是一个 `VirtualElement`                        |                  `PopupAnchorElement`                  |               |
| 咏叹调描述者            | `aria-describedby` 属性。如果你有标签和描述节点，请使用它    |                        `string`                        |               |
| aria-label              | `aria-label` 属性。仅当你没有任何可见的字幕时才使用它        |                        `string`                        |               |
| aria-labelledby         | `aria-labelledby` 属性。如果你有可见的字幕，则更可取         |                        `string`                        |               |
| 儿童                    | 任何 React 内容                                              |                   `React.ReactNode`                    |               |
| className               | `class` 根节点的 HTML 属性                                   |                        `string`                        |               |
| disableEscapeKeyDown    | 禁用触发关闭 `Esc`                                           |                       `boolean`                        |    `false`    |
| disableFocusOut         | 禁用对焦时触发关闭                                           |                       `boolean`                        |    `false`    |
| disableOutsideClick     | 禁用外部点击时触发关闭                                       |                       `boolean`                        |    `false`    |
| disablePortal           | 禁用儿童 `Portal` 使用                                       |                       `boolean`                        |    `false`    |
| disableTransition       | 禁用弹出窗口出现/消失的动画                                  |                       `boolean`                        |    `false`    |
| floatingClassName       | 应用于 `Floating UI` 元素的附加类                            |                        `string`                        |               |
| floatingContext         | `Floating UI` 提供互动的上下文                               |                 `FloatingRootContext`                  |               |
| floatingInteractions    | 覆盖 `Floating UI` 交互                                      |                  `数组<ElementProps>`                  |               |
| floatingMiddlewares     | `Floating UI` 中间件。如果设置，它们将完全覆盖默认的中间件。 |                   `数组<Middleware>`                   |               |
| floatingStyles          | 应用于 `Floating UI` 元素的样式                              |                 `React.CSSProperties`                  |               |
| focusOrder              | 对焦圈的顺序                                                 |            `数组<“参考”\| '浮动'\| '内容'>`            | `['content']` |
| hasArrow                | 渲染指向锚点的箭头                                           |                       `boolean`                        |    `false`    |
| id                      | `id` HTML 属性                                               |                        `string`                        |               |
| initialFocus            | 要重点关注的初始元素。正数是 tabbable 元素的索引。           |           `number` `React.Ref<HTMLElement>`            |               |
| keepMounted             | `Popup` 隐藏后不会从 DOM 中移除                              |                       `boolean`                        |    `false`    |
| 情态动词的              | 启用对焦捕捉行为                                             |                       `boolean`                        |    `false`    |
| 抵消                    | `Floating UI` 偏移值                                         |                     `PopupOffset`                      |      `4`      |
| onOpenChange            | 处理 `Popup` 未平仓变更事件                                  |                       `Function`                       |               |
| onTransitionIn          | 启动时打开弹出动画                                           |                       `Function`                       |               |
| onTransitionInComplete  | 完成后打开弹出动画                                           |                       `Function`                       |               |
| onTransitionOut         | 开始时关闭弹出动画                                           |                       `Function`                       |               |
| onTransitionOutComplete | 完成后关闭弹出动画                                           |                       `Function`                       |               |
| 打开                    | 管理 `Popup` 可见性                                          |                       `boolean`                        |    `false`    |
| 放置                    | `Floating UI` 放置                                           | `Placement` `阵列<Placement>` `自动` `启动自动结束` `` |               |
| qa                      | 测试属性 (`data-qa`)                                         |                        `string`                        |               |
| returnFocus             | 要重点关闭的元素                                             |           `boolean` `React.Ref<HTMLElement>`           |    `true`     |
| 角色                    | 弹出窗口的可访问性角色                                       |                        `string`                        |               |
| 战略                    | `Floating UI` 定位策略                                       |                   `absolute` `fixed`                   |  `absolute`   |
| 风格                    | `style` 根节点的 HTML 属性                                   |                 `React.CSSProperties`                  |               |

## CSS API

| 姓名                         | 描述     |
| :--------------------------- | :------- |
| `--g-popup-background-color` | 背景颜色 |
| `--g-popup-border-color`     | 边框颜色 |
| `--g-popup-border-width`     | 边框宽度 |
