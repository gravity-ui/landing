一个帮助图标，在悬停或单击时会显示一个弹出窗口，其中包含上下文信息。非常适合在不占用额外界面空间的情况下显示提示、解释或支持内容。

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## 示例

带有渲染的原始 HTML 并在鼠标离开时关闭的组件：

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## 属性

`HelpMark` 除了以下属性外，还可以接受任何有效的 `button` 元素属性：

| 名称         | 描述                         |           类型           | 默认值 |
| :----------- | :--------------------------- | :----------------------: | :-----: |
| iconSize     | 设置图标大小                 | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| popoverProps | 覆盖 `Popover` 属性           |      `PopoverProps`      |         |
| children     | 显示在弹出窗口内的内容       |    `React.ReactNode`     |         |

GRAVITY_TRANSLATION_BLOCK_2_END