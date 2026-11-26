`TableColumnSetup` 组件提供了一个用户界面，用于配置表格列的可见性和顺序。它显示一个按钮，该按钮会打开一个包含可用列列表的弹出窗口，允许用户显示/隐藏列，并通过拖放来选择性地重新排序它们。

```tsx
import {TableColumnSetup} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 可排序列

通过将 `sortable` 属性设置为 `true` 来启用拖放功能，允许用户重新排序列。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 应用模式

使用 `hideApplyButton` 属性控制何时应用更改：

- `true` - 用户切换列时立即应用更改
- `false` - 仅当用户单击“应用”按钮时才应用更改

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 状态显示

通过启用 `showStatus` 属性，在切换器按钮中显示选定列的计数。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## 自定义切换器

使用 `renderSwitcher` 属性自定义触发按钮。

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## 属性

| 名称            | 描述                                                     |                            类型                             | 默认值 |
| :-------------- | :-------------------------------------------------------------- | :---------------------------------------------------------: | :-----: |
| items           | 列配置项数组                                                            |                  `TableColumnSetupItem[]`                   |         |
| onUpdate        | 列配置更改时触发的回调                                               |          `(items: TableColumnSetupItem[]) => void`          |         |
| disabled        | 禁用切换器按钮                                                        |                          `boolean`                          | `false` |
| sortable        | 启用列的拖放排序                                                        |                          `boolean`                          | `true`  |
| hideApplyButton | 何时应用更改：立即应用或通过“应用”按钮手动应用                                                |                          `boolean`                          | `false` |
| showStatus      | 在切换器按钮中显示选定/总列数                                                  |                          `boolean`                          | `false` |
| popupWidth      | 弹出窗口的宽度                                                          |                      `number \| 'fit'`                      |         |
| popupPlacement  | 弹出窗口相对于触发器的放置位置                                                    |      [`PopupPlacement`](../Popup/README.md#properties)      |         |
| renderSwitcher  | 切换器按钮的自定义渲染函数                                                    | `(props: SwitcherProps) => React.ReactElement \| undefined` |         |
| switcher        | **已弃用。** 请改用 `renderSwitcher`                                           |              `React.ReactElement \| undefined`              |         |
| getItemTitle    | 获取项目标题的函数                                                        |      `(item: TableColumnSetupItem) => React.ReactNode`      |         |
| className       | 根元素的自定义 CSS 类                                                     |                          `string`                           |         |

### TableColumnSetupItem

| 名称     | 描述                                       |        类型         | 默认值 |
| :------- | :------------------------------------------------ | :-----------------: | :-----: |
| id       | 列的唯一标识符                                          |      `string`       |         |
| title    | 列的显示标题                                          |  `React.ReactNode`  |         |
| selected | 列当前是否可见                                        |      `boolean`      |         |
| required | 列是否必需（无法隐藏）                                      |      `boolean`      |         |
| sticky   | 列的固定定位                                          |      `'left' \| 'right'`      |         |

### SwitcherProps

| 名称      | 描述                               |                   类型                    |
| :-------- | :------------------------------------- | :---------------------------------------: |
| onClick   | 切换器的点击事件处理程序   |  `React.MouseEventHandler<HTMLElement>`   |
| onKeyDown | 切换器的键盘按下事件处理程序 | `React.KeyboardEventHandler<HTMLElement>` |