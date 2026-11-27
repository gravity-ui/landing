<!--GITHUB_BLOCK-->

# HotkeysPanel

<!--/GITHUB_BLOCK-->

用于热键文档的导航面板。
该面板显示一组应用程序的热键及其用途说明。

```ts
import {HotkeysPanel} from '@gravity-ui/navigation';
```

## 属性

| 属性                | 类型            | 是否必填 | 默认值 | 描述                                                                  |
| :---------------------- | :-------------- | :------: | :------ | :--------------------------------------------------------------------------- |
| hotkeys                 | `Array`         |   是    |         | 热键组列表                                                        |
| title                   | `ReactNode`     |          |         | 面板标题                                                              |
| togglePanelHotkey       | `String`        |          |         | 面板打开热键                                                        |
| open                    | `Boolean`       |   是    |         | 抽屉是否打开                                                   |
| onClose                 | `Function`      |          |         | 关闭抽屉处理函数                                                         |
| filterable              | `Boolean`       |          | true    | 是否显示搜索输入框                                             |
| filterPlaceholder       | `String`        |          |         | 搜索输入框占位符                                                     |
| filterClassName         | `String`        |          |         | 搜索输入框类名                                                      |
| leftOffset              | `Number/String` |          |         | 抽屉左侧偏移量                                                           |
| topOffset               | `Number/String` |          |         | 抽屉顶部偏移量                                                            |
| emptyState              | `ReactNode`     |          |         | 无搜索结果占位符                                                |
| className               | `String`        |          |         | 抽屉类名                                                            |
| drawerItemClassName     | `String`        |          |         | 抽屉项类名                                                       |
| titleClassName          | `String`        |          |         | 标题类名                                                             |
| itemContentClassName    | `String`        |          |         | 列表项内容类名                                                 |
| listClassName           | `String`        |          |         | 列表类名                                                              |
| platform                | `'pc'`/`'mac'`  |          | auto    | 用于热键显示格式的平台                                           |
| drawerProps             | `DrawerProps`   |          |         | Drawer 组件的附加属性 (style, container, hideVeil, etc.) |
| disableNavigationOffset | `Boolean`       |          | false   | 是否禁用基于 AsideHeader 大小的自动左侧偏移量           |

## CSS API

| 名称                                 | 描述                       | 默认值 |
| :----------------------------------- | :-------------------------------- | :-----: |
| `--hotkeys-panel-width`              | 面板的宽度            | `400px` |
| `--hotkeys-panel-vertical-padding`   | 面板的顶部和底部内边距 | `18px`  |
| `--hotkeys-panel-horizontal-padding` | 面板的左侧和右侧内边距 | `24px`  |

### 用法

请参阅 storybook 示例 `src/components/HotkeysPanel/__stories__/HotkeysPanelShowcase`。
