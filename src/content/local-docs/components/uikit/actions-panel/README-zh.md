使用 `ActionsPanel` 在一行中渲染多个按钮。
当空间不足时，放不下的按钮将被添加到溢出菜单中。

## 示例

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## 操作图标

使用 `Button` 或 `DropdownMenu` 属性设置图标。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## 注意

使用 `renderNote` 属性来渲染一个提示。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## 下拉菜单中的分组

使用 `action.dropdown.group` 来对下拉菜单中的操作进行分组。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## 操作子菜单和嵌套下拉菜单

请参阅下面的 `actions` 示例以及关于 `DropdownMenu` 组件的文档。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## 属性

| 名称          | 描述                                     |          类型           | 默认值 |
| :------------ | :--------------------------------------- | :---------------------: | :----: |
| actions       | 操作数组                                 |  `ActionsPanelItem[]`   |        |
| onClose       | 可选的关闭按钮点击处理函数               |      `() => void`       |        |
| renderNote    | 用于显示提示内容的渲染函数（可选）       | `() => React.ReactNode` |        |
| className     | 可选的 HTML `class` 属性                 |        `string`         |        |
| noteClassName | 可选的 HTML `class` 属性                 |        `string`         |        |
| maxRowActions | 每行操作的最大数量                       |        `number`         |  `4`   |

## ActionsPanelItem:

| 名称      | 描述                                   |                    类型                    | 默认值 |
| :-------- | :------------------------------------- | :----------------------------------------: | :----: |
| id        | 唯一的操作 ID                          |                  `string`                  |        |
| dropdown  | 溢出菜单中下拉操作的设置               | `{item: DropdownMenuItem; group?: string}` |        |
| button    | 按钮操作的设置                         |           `{props: ButtonProps}`           |        |
| collapsed | 如果为 `true`，则该项始终包含在下拉菜单中 |                 `boolean`                  |        |