`Menu` 组件可轻松创建操作列表视图。

```tsx
import {Menu} from '@gravity-ui/uikit';
```

它有专门用于项目 (`Menu.Item`) 和组 (`Menu.Group`) 的组件。您可以将它们组合起来创建更复杂的菜单。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Size

此属性用于选择菜单大小。默认值为 `m`。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Properties

| Name      | Description                                |           Type           | Default |
| :-------- | :----------------------------------------- | :----------------------: | :-----: |
| size      | Menu size                                  | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| children  | Child element                              |    `React.ReactNode`     |         |
| className | `class` HTML attribute                     |         `string`         |         |
| style     | `style` HTML attribute                     |  `React.CSSProperties`   |         |
| qa        | `data-qa` HTML attribute, used for testing |         `string`         |         |

## Menu.Item

此属性用于渲染菜单项。

### Icon

使用 `iconStart` 或 `iconEnd` 属性在菜单项的开头或结尾显示图标：

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### States

使用此属性，您可以启用或禁用（灰色显示）特定的菜单项：

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Theme

这允许您更改菜单项主题。默认主题为 `normal`。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### Properties

| 名称             | 描述                                   |           类型            |  默认值   |
| :--------------- | :------------------------------------- | :-----------------------: | :--------: |
| iconStart        | 菜单项文本之前的图标                   |        `ReactNode`        |            |
| iconEnd          | 菜单项文本之后的图标                   |        `ReactNode`        |            |
| selected         | 菜单项选中状态标志                     |         `boolean`         |  `false`   |
| disabled         | 菜单项禁用状态标志                     |         `boolean`         |  `false`   |
| active           | 菜单项激活状态标志                     |         `boolean`         |  `false`   |
| href             | URL                                    |         `string`          |            |
| title            | Title 属性                             |         `string`          |            |
| target           | Target 属性                            |         `string`          |            |
| rel              | Rel 属性                               |         `string`          |            |
| onClick          | 点击事件处理函数                       | `React.MouseEventHandler` |            |
| theme            | 菜单项主题                             |   `"normal"` `"danger"`   | `"normal"` |
| children         | 子元素                                 |     `React.ReactNode`     |            |
| className        | 根元素的 `class` HTML 属性             |         `string`          |            |
| contentClassName | 内容元素的 `class` HTML 属性           |         `string`          |            |
| style            | `style` HTML 属性                      |   `React.CSSProperties`   |            |
| qa               | `data-qa` HTML 属性，用于测试          |         `string`          |            |
| extraProps       | 额外的 HTML 属性                       |         `Record`          |            |

## Menu.Group

您可以在单个菜单中按主题对项目进行分组：

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### 属性

| 名称      | 描述                     |         类型          | 默认值 |
| :-------- | :----------------------- | :-------------------: | :----: |
| label     | 菜单组标签               |       `string`        |        |
| children  | 子元素                   |   `React.ReactNode`   |        |
| className | `class` HTML 属性        |       `string`        |        |
| style     | `style` HTML 属性        | `React.CSSProperties` |        |
| qa        | `data-qa` HTML 属性，用于测试 |       `string`        |        |