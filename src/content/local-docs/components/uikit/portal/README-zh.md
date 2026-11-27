<!--GITHUB_BLOCK-->

# Portal

<!--/GITHUB_BLOCK-->

`Portal` 是一个实用组件。基本上，它只是 React 的 [`createPortal`](https://react.dev/reference/react-dom/createPortal) 的一个简单包装器，允许您将子组件渲染到父组件外部的 DOM 节点中。

```tsx
import {Portal} from '@gravity-ui/uikit';
```

## Container

默认情况下，`Portal` 会将其子组件渲染到 `document.body` 中；但是，您可以使用 `container` 属性更改此行为。
此外，您可以使用 `PortalProvider` 组件为 React 子树中的所有 `Portal` 提供一个容器。

```tsx
import {Portal, PortalProvider} from '@gravity-ui/uikit'

const myRoot = document.getElementById('my-root');

<Portal>This is rendered inside document.body</Portal>
<Portal container={myRoot}>This is rendered inside #my-root node</Portal>
<PortalProvider container={myRoot}>
    <Portal>This is also rendered inside #my-root</Portal>
</PortalProvider>
```

## Properties

| Name          | Description                                                    |       Type        |     Default     |
| :------------ | :------------------------------------------------------------- | :---------------: | :-------------: |
| children      | 任何 React 内容                                                | `React.ReactNode` |                 |
| container     | 要挂载子组件的 DOM 元素                                        |   `HTMLElement`   | `document.body` |
| disablePortal | 如果为 true，则在正常的 DOM 层次结构中渲染子组件。             |     `boolean`     |                 |
