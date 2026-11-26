`Link` 是文本的一部分，点击后会将用户带到页面内的另一部分、服务内的另一页或外部网站页面。

```tsx
import {Link} from '@gravity-ui/uikit';
```

它与 [Button](../Button) 的主要区别在于导航功能。通常情况下，`Link` 会导向另一页或在新浏览器标签页中打开。

## 外观

提供三种类型的链接：`normal`（普通的棕色）、`primary`（黑色）和 `secondary`（灰色）。您可以使用 `view` 属性进行管理。您还可以使用 `visitable` 属性启用显示链接已被点击的状态。

### Normal

这是最熟悉、最成熟的 `link` 模式。它用于在文本或表格中视觉上突出显示元素，以及作为导航的一部分。您可以使用它来导航到内部页面和外部来源，包括文档。此外，此类型还用于错误页面和零状态。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Primary

当元素本身就明显是可点击的时，可以使用此类型，但使用棕色的 `Link` 会使界面过载，并妨碍您正确突出页面上的关键点。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Secondary

与 primary `Link` 类似，当用户明显知道元素是可点击的时，可以使用此类型，但导航到它不是必需的，并且仅影响少量场景。其主要目标是不让用户分心于页面上的关键点。`Secondary` 类型最常用于面包屑导航或显示次要属性时。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Visitable

此属性用于显示 `Link` 已被点击。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## `href`

`href` 属性是必需的。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## 用法

您可以将 `Link` 用作独立的文本元素，也可以用作文本的一部分：

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## 属性

除了以下属性外，`Link` 还接受任何有效的 `a` 元素 props：

| 名称      | 描述                               |                 类型                 |  默认值   |
| :-------- | :--------------------------------- | :----------------------------------: | :--------: |
| children  | `Link` 的内容                      |          `React.ReactNode`           |            |
| href      | `href` HTML 属性                   |               `string`               |            |
| qa        | `data-qa` HTML 属性，用于测试      |               `string`               |            |
| underline | 在 `Link` 下方显示下划线           |              `boolean`               |  `false`   |
| view      | `Link` 的外观                      | `"normal"` `"primary"` `"secondary"` | `"normal"` |
| visitable | 显示 `:visitable` CSS 状态         |              `boolean`               |  `false`   |