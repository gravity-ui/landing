`ArrowToggle` 是一个用于显示箭头图标的组件。它可以向四个方向旋转，并可用于显示下拉列表、切割组件等。

## 外观

`ArrowToggle` 有四种可能的方向：`top`、`right`、`bottom` 和 `left`。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## 尺寸

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 用作交互元素

以下是使用 `ArrowToggle` 和可切换图标的示例：

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 属性

| 名称      | 描述                               |   类型   |  默认值   |
| :-------- | :--------------------------------- | :------: | :--------: |
| className | `class` HTML 属性                  | `string` |            |
| direction | 用于设置 `arrowToggle` 的方向      | `string` | `"bottom"` |
| size      | `arrowToggle` 的尺寸（以像素为单位） | `number` |    `16`    |
| qa        | `data-qa` HTML 属性，用于测试      | `string` |            |

## CSS API

| 名称                                   | 描述         |
| :------------------------------------- | :----------- |
| `--g-arrow-toggle-transition-duration` | 过渡持续时间 |