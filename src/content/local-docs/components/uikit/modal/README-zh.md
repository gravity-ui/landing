GRAVITY_TRANSLATION_BLOCK_0_END

`Modal` 组件是创建弹出窗口的基础，它会在页面上其他内容之上显示一个背景。
它会在打开时禁用滚动并管理内容的焦点。`Modal` 的子组件会渲染在 [`Portal`](../Portal) 组件内部。
使用 `Modal`，您可以实现对话框、警告框、确认框等。

```tsx
import {Modal} from '@gravity-ui/uikit';
```

## 用法

```tsx
import {useState} from 'react';
import {Button, Modal} from '@gravity-ui/uikit';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>打开模态框</Button>
<Modal open={open} onClose={() => setOpen(false)}>
    内容
</Modal>
```

## 属性

| 名称                  | 描述                                                                                         |       类型        |     默认值     |
| :-------------------- | :------------------------------------------------------------------------------------------- | :---------------: | :-------------: |
| autoFocus             | 打开时，焦点将设置在内容中的第一个可交互元素上                                               |     `boolean`     |     `true`      |
| children              | 任何 React 内容                                                                              | `React.ReactNode` |                 |
| className             | 根节点的 `class` HTML 属性                                                                   |     `string`      |                 |
| container             | 通过 `Portal` 组件挂载的 DOM 元素                                                            |   `HTMLElement`   | `document.body` |
| contentClassName      | 内容节点的 `class` HTML 属性                                                                 |     `string`      |                 |
| disableBodyScrollLock | 打开时禁用锁定滚动                                                                           |     `boolean`     |     `false`     |
| disableEscapeKeyDown  | 禁用按 `Esc` 键关闭                                                                          |     `boolean`     |     `false`     |
| disableOutsideClick   | 禁用点击外部关闭                                                                             |     `boolean`     |     `false`     |
| disablePortal         | 禁用使用 `Portal`                                                                            |     `boolean`     |     `false`     |
| focusTrap             | 启用焦点捕获行为                                                                             |     `boolean`     |     `true`      |
| keepMounted           | 隐藏时 `Modal` 不会从 DOM 中移除                                                             |     `boolean`     |     `false`     |
| onClose               | 处理 `Modal` 关闭事件                                                                        |    `Function`     |                 |
| onEnterKeyDown        | `Enter` 键按下事件处理程序                                                                   |    `Function`     |                 |
| onEscapeKeyDown       | `Esc` 键按下事件处理程序                                                                     |    `Function`     |                 |
| onTransitionEnter     | 打开过渡开始事件处理程序                                                                     |    `Function`     |                 |
| onTransitionExit      | 关闭过渡开始事件处理程序                                                                     |    `Function`     |                 |
| onTransitionEntered   | 打开过渡结束事件处理程序                                                                     |    `Function`     |                 |
| onTransitionExited    | 关闭过渡结束事件处理程序                                                                     |    `Function`     |                 |
| onOutsideClick        | 点击外部事件处理程序                                                                         |    `Function`     |                 |
| open                  | 管理 `Modal` 的可见性                                                                        |     `boolean`     |     `false`     |
| qa                    | 测试属性 (`data-qa`)                                                                         |     `string`      |                 |
| restoreFocusRef       | 焦点将恢复到的元素                                                                           | `React.RefObject` |                 |
| style                 | 根节点的 `style` HTML 属性                                                                   |     `string`      |                 |
| aria-label            | 用于描述 `Modal` 的 `aria-label` HTML 属性                                                   |     `string`      |                 |
| aria-labelledby       | 可见 `Modal` 标题元素的 ID                                                                   |     `string`      |                 |
| contentOverflow       | 确定 `Modal` 内部是否有滚动条指示器，还是会随着内容变大                                      | `visible` `auto`  |    `visible`    |

## CSS API

| 名称                      | 描述                       |
| :------------------------ | :------------------------- |
| `--g-modal-margin`        | `Modal` 内容周围的边距     |
| `--g-modal-border-radius` | `Modal` 内容的边框圆角     |
| `--g-modal-width`         | `Modal` 内容的宽度         |
| `--g-modal-max-width`     | `Modal` 内容的最大宽度     |
| `--g-modal-height`        | `Modal` 内容的高度         |
| `--g-modal-max-height`    | `Modal` 内容的最大高度     |