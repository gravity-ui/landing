<!--GITHUB_BLOCK-->

# 传送门

<!--/GITHUB_BLOCK-->

```tsx
import {Portal} from '@gravity-ui/uikit';
```

`Portal` 是一个实用程序组件。基本上，它是一个围绕 React 的简单包装器 [`createPortal`](https://react.dev/reference/react-dom/createPortal) ，它允许你将子组件渲染到父组件之外的 DOM 节点中。

## 容器

默认情况下，将其子项 `Portal` 渲染为 `document.body` ；但是，您可以使用该 `container` 属性对其进行更改。
此外，你可以使用该 `PortalProvder` 组件为 React 子树中的所有 `Portal`人提供一个容器。

```tsx
import {Portal, PortalProvider} from '@gravity-ui/uikit'

const myRoot = document.getElementById('my-root');

<Portal>This is rendered inside document.body</Portal>
<Portal container={myRoot}>This is rendered inside #my-root node</Portal>
<PortalProvider container={myRoot}>
    <Portal>This is also rendered inside #my-root</Portal>
</PortalProvider>
```

## 属性

| 姓名          | 描述                                           |       类型        |      默认       |
| :------------ | :--------------------------------------------- | :---------------: | :-------------: |
| 儿童          | 任何 React 内容                                | `React.ReactNode` |                 |
| 容器          | 要挂载的 DOM 元素的子元素                      |   `HTMLElement`   | `document.body` |
| disablePortal | 如果为 true，则在普通 DOM 层次结构中呈现子级。 |     `boolean`     |                 |
