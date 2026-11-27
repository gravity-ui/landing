<!--GITHUB_BLOCK-->

# Popup

<!--/GITHUB_BLOCK-->

`Popup` 将浮动内容定位在页面上方，并锚定到参考元素——这是 tooltips、popovers 和 menus 背后的低级组件，基于 [Floating UI](https://floating-ui.com) 构建。它的可见性由 `open` 属性控制；除非设置 `disablePortal` 属性，否则其子元素将渲染在 [`Portal`](../Portal) 组件内。

```tsx
import {Popup} from '@gravity-ui/uikit';
```

## Anchor

要指定浮动元素的锚点，可以使用 `anchorElement` 属性。

<!--SANDBOX
import {useState} from 'react';
import {Button, Popup} from '@gravity-ui/uikit';

export default function () {
    const [buttonElement, setButtonElement] = useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button ref={setButtonElement} onClick={() => setOpen((prevOpen) => !prevOpen)}>
                Toggle Popup
            </Button>
            <Popup anchorElement={buttonElement} open={open} placement="bottom">
                <div style={{padding: 5}}>
                    Content
                </div>
            </Popup>
        </>
    );
}
SANDBOX-->

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

## Placement

使用 `placement` 属性来管理 `Popup` 相对于锚点元素的位置。
默认情况下，`Popup` 使用 [flip middleware](https://floating-ui.com/docs/flip) 来防止溢出。
如果该属性设置为数组，第一个元素将用作默认的 placement 值，其余元素将用作 [fallback placements](https://floating-ui.com/docs/flip#fallbackplacements)。
也可以使用 `auto`、`auto-start`、`auto-end` 值来使用 [autoPlacement middleware](https://floating-ui.com/docs/autoPlacement) 而不是 flip。

<!--SANDBOX
import {Popup, PopupProps} from '@gravity-ui/uikit';
import {CSSProperties, useState} from 'react';

const anchorStyles: CSSProperties = {
    margin: '40px 100px',
    width: 320,
    height: 140,
    border: '2px dashed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5em',
};

function PopupInstance({children, ...props}: PopupProps) {
    return (
        <Popup open disablePortal {...props}>
            <div style={{padding: 5}}>{children}</div>
        </Popup>
    );
}

export default function () {
    const [anchorElement, setAnchorElement] = useState<HTMLDivElement | null>(null);

    return (
        <div>
            <div ref={setAnchorElement} style={anchorStyles}>
                Anchor
            </div>
            <PopupInstance anchorElement={anchorElement} placement="top-start">
                Top Start
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="top">
                Top
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="top-end">
                Top End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="right-start">
                Right Start
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="right">
                Right
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="right-end">
                Right End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="bottom-end">
                Bottom End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="bottom">
                Bottom
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="bottom-start">
                Bottom Start
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="left-end">
                Left End
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="left">
                Left
            </PopupInstance>
            <PopupInstance anchorElement={anchorElement} placement="left-start">
                Left Start
            </PopupInstance>
        </div>
    );
};
SANDBOX-->

## Properties

| 名称                    | 描述                                                                                       |                             类型                              |     默认值     |
| :---------------------- | :----------------------------------------------------------------------------------------- | :-----------------------------------------------------------: | :-------------: |
| anchorElement           | 锚点元素。也可以是 `VirtualElement`                                                        |                     `PopupAnchorElement`                      |                 |
| aria-describedby        | `aria-describedby` 属性。如果您同时拥有标签和描述节点，请使用它                                |                           `string`                            |                 |
| aria-label              | `aria-label` 属性。如果您没有任何可见的标题，请仅使用它                                    |                           `string`                            |                 |
| aria-labelledby         | `aria-labelledby` 属性。如果您有可见的标题，则首选此项                                     |                           `string`                            |                 |
| children                | 任何 React 内容                                                                            |                       `React.ReactNode`                       |                 |
| className               | 根节点的 `class` HTML 属性                                                                 |                           `string`                            |                 |
| container               | 通过 `Portal` 组件挂载到该 DOM 元素                                                        |                         `HTMLElement`                         | `document.body` |
| disableEscapeKeyDown    | 禁用按 `Esc` 键关闭                                                                        |                           `boolean`                           |     `false`     |
| disableFocusOut         | 禁用焦点移出时关闭                                                                         |                           `boolean`                           |     `false`     |
| disableOutsideClick     | 禁用点击外部时关闭                                                                         |                           `boolean`                           |     `false`     |
| disablePortal           | 禁用使用 `Portal`                                                                          |                           `boolean`                           |     `false`     |
| disableTransition       | 禁用弹出动画的出现/消失                                                                    |                           `boolean`                           |     `false`     |
| floatingClassName       | 应用于 `Floating UI` 元素的附加类名                                                        |                           `string`                            |                 |
| floatingContext         | `Floating UI` 上下文，用于提供交互                                                         |                     `FloatingRootContext`                     |                 |
| floatingInteractions    | 覆盖 `Floating UI` 交互                                                                    |                     `Array<ElementProps>`                     |                 |
| floatingMiddlewares     | `Floating UI` 中间件。如果设置，它们将完全覆盖默认中间件。                                 |                      `Array<Middleware>`                      |                 |
| floatingStyles          | 应用于 `Floating UI` 元素的样式                                                            |                     `React.CSSProperties`                     |                 |
| focusOrder              | 焦点循环的顺序                                                                             |        `Array<'reference' \| 'floating' \| 'content'>`        |  `['content']`  |
| hasArrow                | 渲染指向锚点的箭头                                                                         |                           `boolean`                           |     `false`     |
| id                      | `id` HTML 属性                                                                             |                           `string`                            |                 |
| initialFocus            | 初始焦点元素。正数表示可聚焦元素的索引。                                                   |               `number` `React.Ref<HTMLElement>`               |                 |
| keepMounted             | 隐藏时，`Popup` 不会从 DOM 中移除                                                          |                           `boolean`                           |     `false`     |
| modal                   | 启用焦点捕获行为                                                                           |                           `boolean`                           |     `false`     |
| offset                  | `Floating UI` 偏移值                                                                       |                         `PopupOffset`                         |       `4`       |
| onOpenChange            | 处理 `Popup` 打开状态变化事件                                                              |                          `Function`                           |                 |
| onTransitionIn          | 打开弹出动画开始时                                                                         |                          `Function`                           |                 |
| onTransitionInComplete  | 打开弹出动画完成时                                                                         |                          `Function`                           |                 |
| onTransitionOut         | 关闭弹出动画开始时                                                                         |                          `Function`                           |                 |
| onTransitionOutComplete | 关闭弹出动画完成时                                                                         |                          `Function`                           |                 |
| open                    | 管理 `Popup` 的可见性                                                                      |                           `boolean`                           |     `false`     |
| placement               | `Floating UI` 定位方向                                                                     | `Placement` `Array<Placement>` `auto` `auto-start` `auto-end` |                 |
| qa                      | 测试属性 (`data-qa`)                                                                       |                           `string`                            |                 |
| returnFocus             | 关闭时要聚焦的元素                                                                         |              `boolean` `React.Ref<HTMLElement>`               |     `true`      |
| role                    | 弹出窗口的可访问性角色                                                                     |                           `string`                            |                 |
| strategy                | `Floating UI` 定位策略                                                                     |                      `absolute` `fixed`                       |   `absolute`    |
| style                   | 根节点的 `style` HTML 属性                                                                 |                     `React.CSSProperties`                     |                 |

## CSS API

| 名称                         | 描述      |
| :--------------------------- | :-------- |
| `--g-popup-background-color` | 背景颜色  |
| `--g-popup-border-color`     | 边框颜色  |
| `--g-popup-border-radius`    | 边框圆角  |
| `--g-popup-border-width`     | 边框宽度  |
