`Text` 组件用于应用排版样式，例如字体变体、颜色和文本溢出处理。

```tsx
import {Text} from '@gravity-ui/uikit';
```

## Variant

这些是可以在项目中覆盖的默认字体。您可以在[此处](https://preview.gravity-ui.com/uikit/?path=/story/typography--variants)查看所有可用字体的列表。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Ellipsis

此属性允许您隐藏溢出的文本：

`false`: 默认使用。

`true`: 隐藏的溢出内容将被省略号 (`…`) 替换。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### White Space

这代表 `white-space` CSS 属性。它可以是 `nowrap` 或 `break-spaces`。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Word Break

这代表 `word-break` CSS 属性。唯一可用的值是 `break-all`。 | `break-word`。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Color

指定文本颜色。可用的颜色有：
`primary`, `complementary`, `secondary`, `hint`, `info`, `info-heavy`, `positive`, `positive-heavy`, `warning`, `warning-heavy`, `danger`, `danger-heavy`, `utility`, `utility-heavy`, `misc`, `misc-heavy`, `brand`, `link`, `link-hover`, `link-visited`, `link-visited-hover`, `dark-primary`, `dark-complementary`, `dark-secondary`, `light-primary`, `light-complementary`, `light-secondary`, `light-hint`, `inverted-primary`, `inverted-complementary`, `inverted-secondary`, 和 `inverted-hint`。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Properties

| 名称          | 描述                                                               |                        类型                        |  默认值   |
| :------------ | :------------------------------------------------------------------------ | :------------------------------------------------: | :--------: |
| children      | 文本内容                                                              |                 `React.ReactNode`                  |            |
| className     | `class` HTML 属性                                                    |                      `string`                      |            |
| id            | `id` HTML 属性                                                       |                      `string`                      |            |
| as            | 允许覆盖默认的 HTML 标签                                       |              `React.ElementType<any>`              |            |
| style         | `style` HTML 属性                                                    |               `React.CSSProperties`                |            |
| variant       | 文本字体                                                                 |                      `string`                      | `"body-1"` |
| ellipsis      | 隐藏溢出内容将替换为省略号                                                |                     `boolean`                      |            |
| ellipsisLines | 在多少行文本后截断内容                                                |                      `number`                      |            |
| whiteSpace    | `white-space` CSS 属性                                                |            `"nowrap"` `"break-spaces"`             |            |
| wordBreak     | `word-break` CSS 属性                                                 |            `"break-all"` `"break-word"`            |            |
| color         | 文本颜色                                                                | `string` (请参阅**颜色**部分的值) |            |
| qa            | `data-qa` HTML 属性，用于测试                                |                      `string`                      |            |