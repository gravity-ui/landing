GRAVITY_TRANSLATION_BLOCK_0_END

使用 `ActionsPanel` 在一行中渲染多个按钮。
当空间不足时，放不下的按钮将被添加到溢出菜单中。
溢出菜单使用 `Menu`；`menu.item` 接受 `MenuItemProps`。

## 示例

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 操作图标

使用 `Button` 或 `menu.item` 属性来设置图标。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 注意

使用 `renderNote` 属性来渲染一个注释。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 溢出菜单中的分组

使用 `action.menu.group` 来对溢出菜单中的操作进行分组。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## 操作子菜单和嵌套菜单

将 `Menu` 作为 `menu.item.children` 的直接子项传递，以添加子菜单。可见的操作按钮使用相同的子菜单。

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## 属性

| 名称          | 描述                                               |          类型           | 默认值 |
| :------------ | :------------------------------------------------- | :---------------------: | :----: |
| actions       | 操作数组                                           |  `ActionsPanelItem[]`   |        |
| onClose       | 可选的关闭按钮点击处理程序                         |      `() => void`       |        |
| renderNote    | 用于显示注释内容的渲染属性                         | `() => React.ReactNode` |        |
| className     | 可选的 HTML `class` 属性                           |        `string`         |        |
| noteClassName | 可选的 HTML `class` 属性                           |        `string`         |        |
| maxRowActions | 一行中的最大操作数                                 |        `number`         |   `4`  |

## ActionsPanelItem

| 名称      | 描述                                       |                  类型                   | 默认值 |
| :-------- | :----------------------------------------- | :-------------------------------------: | :----: |
| id        | 唯一的操作 ID                              |                `string`                 |        |
| menu      | 溢出菜单中操作的设置                       | `{item: MenuItemProps; group?: string}` |        |
| button    | 操作按钮的设置                             |         `{props: ButtonProps}`          |        |
| collapsed | 如果为 `true`，则该项始终位于溢出菜单中 |                `boolean`                |        |