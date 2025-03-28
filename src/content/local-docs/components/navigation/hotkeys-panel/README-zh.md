<!--GITHUB_BLOCK-->

## HotkeysPanel

<!--/GITHUB_BLOCK-->

热键文档的导航面板。
该面板显示应用程序的一组热键及其用途的描述。

```ts
import {HotkeysPanel} from '@gravity-ui/navigation';
```

### PropTypes

| 财产                 | 类型            | 必填项 | 默认 | 描述               |
| :------------------- | :-------------- | :----: | :--- | :----------------- |
| 快捷键               | `Array`         |  是的  |      | 快捷键组列表       |
| 标题                 | `Array`         |        |      | 小组标题           |
| 可见的               | `Boolean`       |  是的  |      | 抽屉是否可见       |
| onClose              | `Function`      |        |      | 关闭抽屉处理器     |
| 可过滤               | `Boolean`       |        | 真的 | 是否显示搜索输入   |
| filterPlaceholder    | `String`        |        |      | 搜索输入占位符     |
| filterClassName      | `String`        |        |      | 搜索输入类名       |
| leftOffset           | `Number/String` |        | 0    | 抽屉左侧偏移量     |
| topOffset            | `Number/String` |        | 0    | 抽屉顶部偏移       |
| emptyState           | `ReactNode`     |        |      | 没有搜索结果占位符 |
| className            | `String`        |        |      | 抽屉类名           |
| drawerItemClassName  | `String`        |        |      | 抽屉物品类名       |
| titleClassName       | `String`        |        |      | 标题类名           |
| itemContentClassName | `String`        |        |      | 列出项目内容类名   |
| listClassName        | `String`        |        |      | 列出类名           |

还有所有的 `List` propTypes，但不 `items` 包括过滤道具（你可以 [在这里](https://github.com/gravity-ui/uikit/blob/main/src/components/List/README.md)找到）

## CSS API

| 姓名                                 | 描述                   |  默认   |
| :----------------------------------- | :--------------------- | :-----: |
| `--hotkeys-panel-width`              | 面板的宽度             | `400px` |
| `--hotkeys-panel-vertical-padding`   | 面板顶部和底部的填充物 | `18px`  |
| `--hotkeys-panel-horizontal-padding` | 面板左右填充           | `24px`  |

### 用法

参见故事书示例 `src/components/HotkeysPanel/__stories__/HotkeysPanelShowcase`。
