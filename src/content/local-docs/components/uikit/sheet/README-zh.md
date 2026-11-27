<!--GITHUB_BLOCK-->

# Sheet

<!--/GITHUB_BLOCK-->

`Sheet` 是一个用于移动设备上下文的信息或交互式元素的组件。您可以在其中放置任何大小的内容，因为它支持内部滚动和动态调整大小。

```tsx
import {Sheet} from '@gravity-ui/uikit';
```

在移动设备上，您可以通过拖动其主部分或滑动区域来移动 `Sheet`。要关闭它，请向下滑动或点击 `Sheet` 外的区域。

## 用法

```tsx
import React from 'react';
import {Button, Sheet} from '@gravity-ui/uikit';

const SheetExample = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setVisible(true)}>Open Sheet</Button>
      <Sheet visible={visible} onClose={() => setVisible(false)} title="Content Sheet">
        Content
      </Sheet>
    </React.Fragment>
  );
};
```

## 属性

| 名称                        | 描述                                                                                                                                                           |     类型      |     默认值     |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------: | :-------------: |
| allowHideOnContentScroll    | 启用通过向下轻扫来关闭 sheet 窗口的行为，前提是内容已滚动到顶部 (`content Node.scrollTop === 0`) 或根本没有滚动。                                                               |   `boolean`   |     `true`      |
| alwaysFullHeight            | `Sheet` 的高度将始终为最大值                                                                                                                                   |   `boolean`   |   `undefined`   |
| className                   | `class` HTML 属性                                                                                                                                              |   `string`    |   `undefined`   |
| container                   | 通过 `Portal` 组件挂载的 DOM 元素                                                                                                                               | `HTMLElement` | `document.body` |
| contentClassName            | sheet 内容的 `class` HTML 属性。                                                                                                                                 |   `string`    |   `undefined`   |
| disablePortal               | 禁用 `Portal`                                                                                                                                                  |   `boolean`   |     `false`     |
| hideTopBar                  | 隐藏带有调整大小手柄的顶部栏。                                                                                                                                 |   `boolean`   |                 |
| id                          | 用作 URL 中哈希的 Sheet ID。如果页面上可能存在多个 sheet，请确保指定多个 `id` 值。                                                                                             |   `string`    |     `modal`     |
| maxContentHeightCoefficient | 确定 `Sheet` 相对于视口高度的最大高度的系数（范围 0-1）                                                                                                               |   `number`    |      `0.9`      |
| onClose                     | 关闭事件的处理程序。                                                                                                                                           |  `function`   |   `undefined`   |
| swipeAreaClassName          | 滑动区域的 `class` HTML 属性。                                                                                                                                 |   `string`    |   `undefined`   |
| title                       | Sheet 窗口标题。                                                                                                                                               |   `string`    |   `undefined`   |
| visible                     | 管理 `Sheet` 的可见性                                                                                                                                          |   `boolean`   |     `false`     |

## CSS API

| 名称                         | 描述
