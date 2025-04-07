<!--GITHUB_BLOCK-->

# 工作表

<!--/GITHUB_BLOCK-->

```tsx
import {Sheet} from '@gravity-ui/uikit';
```

`Sheet` 是专为在移动环境中用作信息或交互元素而设计的组件。您可以将任何大小的内容放入其中，因为支持内部滚动和动态调整大小。

在移动设备上，您可以 `Sheet` 通过拉动其主要部分或滑动区域来移动。要将其关闭，请向下滑动或点按外部区域 `Sheet`。

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

| 姓名                     | 描述                                                                                                           |    类型    |    默认     |
| :----------------------- | :------------------------------------------------------------------------------------------------------------- | :--------: | :---------: |
| 可见的                   | 管理 `Sheet` 可见性                                                                                            | `boolean`  |   `false`   |
| allowHideOnContentScroll | 如果内容滚动到顶部 (`content Node.scrollTop === 0`) 或根本没有滚动，则启用通过向下滑动来关闭工作表窗口的行为。 | `boolean`  |   `true`    |
| hideTopBar               | 使用调整大小手柄隐藏顶栏。                                                                                     | `boolean`  |             |
| id                       | 在 URL 中用作哈希值的工作表 ID。如果一个页面上可以有多个页面，请务必指定多个 `id` 值。                         |  `string`  |   `modal`   |
| 标题                     | 工作表窗口标题。                                                                                               |  `string`  | `undefined` |
| className                | `class` HTML 属性                                                                                              |  `string`  | `undefined` |
| contentClassName         | `class` 工作表内容的 HTML 属性。                                                                               |  `string`  | `undefined` |
| swipeAreaClassName       | `class` 滑动区域的 HTML 属性。                                                                                 |  `string`  | `undefined` |
| onClose                  | 关闭事件的处理器。                                                                                             | `function` | `undefined` |

## CSS API

| 姓名                         | 描述     |
| :--------------------------- | :------- |
| `--g-sheet-content-padding`  | 内容填充 |
| `--g-sheet-background-color` | 背景颜色 |
