一个帮助图标，在桌面端以弹出窗口的形式，在移动端以表格的形式显示上下文信息。非常适合在不占用额外界面空间的情况下显示提示、解释或支持内容。

```tsx
import {HelpMark} from '@gravity-ui/uikit';
```

## 示例

渲染原始 HTML 并可在鼠标移出时关闭的组件：

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 属性

`HelpMark` 除了接受任何有效的 `button` 元素属性外，还接受以下属性：

| 名称         | 描述                               |           类型           | 默认值 |
| :----------- | :--------------------------------- | :----------------------: | :----: |
| size         | 设置图标大小                       | `"s"` `"m"` `"l"` `"xl"` |  `"m"` |
| popoverProps | 覆盖桌面端 `Popover` 的属性          |      `PopoverProps`      |        |
| sheetProps   | 覆盖移动端 `Sheet` 的属性          |       `SheetProps`       |        |
| children     | 显示在弹出窗口或表格中的内容       |    `React.ReactNode`     |        |

## CSS API

| 名称                 | 描述         |
| :------------------- | :----------- |
| `--g-help-mark-size` | 图标大小（px） |