<!--GITHUB_BLOCK-->

# 模态

<!--/GITHUB_BLOCK-->

```tsx
import {Modal} from '@gravity-ui/uikit';
```

该 `Modal` 组件是创建弹出窗口的基础，其背景位于页面上其余内容的上方。
它在打开时禁用滚动并管理内容的焦点。`Modal` 子组件在组件内部呈 [`Portal`](../Portal) 现。
使用 `Modal` ，您可以实现对话、警报、确认等。

## 用法

```tsx
import {useState} from 'react';
import {Button, Modal} from '@gravity-ui/uikit';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal open={open} onClose={() => setOpen(false)}>
    Content
</Modal>
```

## 属性

| 姓名                  | 描述                                          |       类型        |      默认       |
| :-------------------- | :-------------------------------------------- | :---------------: | :-------------: |
| autoFocus             | 打开时，焦点将设置为内容中的第一个交互式元素  |     `boolean`     |     `true`      |
| 儿童                  | 任何 React 内容                               | `React.ReactNode` |                 |
| className             | `class` 根节点的 HTML 属性                    |     `string`      |                 |
| 容器                  | 子元素挂载到的 DOM 元素                       |   `HTMLElement`   | `document.body` |
| contentClassName      | `class` 内容节点的 HTML 属性                  |     `string`      |                 |
| disableBodyScrollLock | 打开时禁用锁定滚动                            |     `boolean`     |     `false`     |
| disableEscapeKeyDown  | 禁用触发关闭 `Esc`                            |     `boolean`     |     `false`     |
| disableOutsideClick   | 禁用外部点击时触发关闭                        |     `boolean`     |     `false`     |
| focusTrap             | 启用对焦陷阱行为                              |     `boolean`     |     `true`      |
| keepMounted           | `Modal` 隐藏后不会从 DOM 中移除               |     `boolean`     |     `false`     |
| onClose               | 处理 `Modal` 关闭事件                         |    `Function`     |                 |
| onEnterKeyDown        | `Enter` 按下事件处理器                        |    `Function`     |                 |
| onEscapeKeyDown       | `Esc` 按下事件处理器                          |    `Function`     |                 |
| onTransitionEnter     | 打开过渡开始事件处理器                        |    `Function`     |                 |
| onTransitionExit      | 关闭过渡开始事件处理器                        |    `Function`     |                 |
| onTransitionEntered   | 打开过渡结束事件处理器                        |    `Function`     |                 |
| onTransitionExited    | 关闭过渡结束事件处理器                        |    `Function`     |                 |
| onOutsideClick        | 外部点击事件处理器                            |    `Function`     |                 |
| 打开                  | 管理 `Modal` 可见性                           |     `boolean`     |     `false`     |
| qa                    | 测试属性 (`data-qa`)                          |     `string`      |                 |
| restoreFocusRef       | 焦点将恢复到的元素                            | `React.RefObject` |                 |
| 风格                  | `style` 根节点的 HTML 属性                    |     `string`      |                 |
| aria-label            | `aria-label` 要描述的 HTML 属性 `Modal`       |     `string`      |                 |
| aria-labelledby       | 可见标 `Modal` 题元素的 ID                    |     `string`      |                 |
| contentOverflow       | 确定里面是 `Modal` 有滚动指示器还是随内容变大 | `visible` `auto`  |    `visible`    |

## CSS API

| 姓名                      | 描述                   |
| :------------------------ | :--------------------- |
| `--g-modal-margin`        | `Modal` 内容周围的边距 |
| `--g-modal-border-radius` | `Modal` 内容边框半径   |
