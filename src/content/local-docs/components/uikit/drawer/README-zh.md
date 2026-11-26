GRAVITY_TRANSLATION_BLOCK_0_END

`Drawer` 组件是一个多功能的界面元素，用于 Web 应用程序中，提供一个从屏幕边缘滑出的面板。该面板可以包含导航、工具或其他内容。该组件使用 React 和 CSS 过渡来实现流畅的动画。

```tsx
import {Drawer} from '@gravity-ui/uikit';
```

## 用法

以下是使用 `Drawer` 组件的简单示例：

```tsx
import React from 'react';
import {Drawer} from '@gravity-ui/uikit';

const App = () => {
  const [isVisible, setVisible] = React.useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>打开抽屉</button>
      <Drawer onOpenChange={setVisible} open={isVisible}>
        <p>抽屉内容</p>
      </Drawer>
    </div>
  );
};

export default App;
```

## 定位

要控制 `Drawer` 的定位，可以传递 `placement` 属性。可能的值为 `left`、`right`、`top` 和 `bottom`。

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} placement="left">
  <p>抽屉内容</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="right">
  <p>抽屉内容</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="top">
  <p>抽屉内容</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="bottom">
  <p>抽屉内容</p>
</Drawer>
```

## 动画

默认情况下，`Drawer` 会带有过渡效果滑动进出。要立即显示或隐藏它，请传递 `disableTransition` 属性。

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} disableTransition>
  <p>抽屉内容</p>
</Drawer>
```

## 可调整大小

可以通过传递 `resizable` 属性使 `Drawer` 可调整大小。

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} resizable>
  <p>抽屉内容</p>
</Drawer>
```

此外，您可以使用 `size` 属性来控制 `Drawer` 的大小，并传递 `onResize` 处理程序来存储调整大小后的值。

```tsx
const [size, setSize] = useState(500);

<Drawer onOpenChange={setVisible} open={isVisible} resizable size={size} onResize={setSize}>
  <p>抽屉内容</p>
</Drawer>;
```

## 属性

| 名称                    | 描述                                                                                                                            |                类型                |     默认值     |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------: | :------------: |
| className               | 根节点的 `class` HTML 属性                                                                                                      |              `string`              |                |
| qa                      | 测试属性 (`data-qa`)                                                                                                            |              `string`              |                |
| style                   | 根节点的 `style` HTML 属性                                                                                                      |       `React.CSSProperties`        |                |
| aria-label              | 用于描述 `Drawer` 的 `aria-label` HTML 属性                                                                                     |              `string`              |                |
| aria-labelledby         | 可见 `Drawer` 标题元素的 ID                                                                                                     |              `string`              |                |
| aria-describedby        | `Drawer` 元素的 `aria-describedby`                                                                                              |              `string`              |                |
| aria-details            | 用户 `Drawer` 元素的 `aria-details`                                                                                             |              `string`              |                |
| returnFocus             | 关闭时要聚焦的元素                                                                                                              | `boolean` `React.Ref<HTMLElement>` |     `true`     |
| initialFocus            | 初始聚焦的元素。正数是可聚焦元素的索引。                                                                                        | `number` `React.Ref<HTMLElement>`  |                |
| placement               | 指定抽屉应从哪一侧滑入                                                                                                          |              `string`              |     `left`     |
| contentClassName        | 内容节点的 `class` HTML 属性                                                                                                    |              `string`              |                |
| children                | 任何 React 内容                                                                                                                 |         `React.ReactNode`          |                |
| container               | 通过 `Portal` 挂载组件的 DOM 元素                                                                                               |           `HTMLElement`            | `document.body` |
| contentOverflow         | 确定 `Drawer` 内部是否有自己的滚动条。默认情况下，它没有                                                                        |          `visible` `auto`          |    `visible`   |
| disableBodyScrollLock   | 打开时禁用滚动锁定                                                                                                              |             `boolean`              |     `false`    |
| disableEscapeKeyDown    | 禁用按 `Esc` 键关闭                                                                                                             |             `boolean`              |     `false`    |
| disableOutsideClick     | 禁用点击外部关闭                                                                                                                |             `boolean`              |     `false`    |
| disableTransition       | 禁用抽屉的动画                                                                                                                |             `boolean`              |     `false`    |
| disablePortal           | 禁用使用 `Portal`                                                                                                               |             `boolean`              |     `false`    |
| keepMounted             | 隐藏时 `Drawer` 不会从 DOM 中移除                                                                                               |             `boolean`              |     `false`    |
| resizable               | 通过指针启用抽屉的调整大小                                                                                                      |             `boolean`              |     `false`    |
| open                    | 管理 `Drawer` 的可见性                                                                                                          |             `boolean`              |     `false`    |
| hideVeil                | 移除 `Drawer` 的遮罩层                                                                                                          |             `boolean`              |     `false`    |
| onOpenChange            | 在打开状态改变时调用的回调                                                                                                      |             `Function`             |                |
| onTransitionIn          | 在进入过渡开始时触发的回调                                                                                                      |             `Function`             |                |
| onTransitionInComplete  | 在进入过渡完成时触发的回调                                                                                                      |             `Function`             |                |
| onTransitionOut         | 在退出过渡开始时触发的回调                                                                                                      |             `Function`             |                |
| onTransitionOutComplete | 在退出过渡完成时触发的回调                                                                                                      |             `Function`             |                |
| onResizeEnd             | 调整大小结束时调用的回调                                                                                                        |             `Function`             |                |
| onResize                | 抽屉正在调整大小时调用的回调                                                                                                    |             `Function`             |                |
| onResizeStart           | 调整大小开始时调用的回调                                                                                                        |             `Function`             |                |
| maxSize                 | 抽屉的最大宽度或高度（以像素为单位）                                                                                            |              `number`              |                |
| minSize                 | 抽屉的最小宽度或高度（以像素为单位）                                                                                            |              `number`              |                |
| size                    | 抽屉的宽度或高度（以像素为单位）。当传递 `auto` 选项时，`Drawer` 的宽度或高度将调整以适应其内容。                                |         `number \| 'auto'`         |                |