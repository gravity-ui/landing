`Text` コンポーネントは、フォントのバリアント、色、テキストのオーバーフロー処理などのタイポグラフィスタイルをコンテンツに適用します。

```tsx
import {Text} from '@gravity-ui/uikit';
```

## バリアント

これらはプロジェクトでオーバーライドできるデフォルトのフォントです。利用可能なすべてのフォントのリストは[こちら](https://preview.gravity-ui.com/uikit/?path=/story/typography--variants)で確認できます。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### 省略記号

このプロパティを使用すると、オーバーフローしたテキストを非表示にできます。

`false`: デフォルトで使用されます。

`true`: オーバーフローしたコンテンツは省略記号（`…`）に置き換えられます。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### ホワイトスペース

これは `white-space` CSS プロパティを表します。`nowrap` または `break-spaces` のいずれかになります。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### 単語の区切り

これは `word-break` CSS プロパティを表します。利用可能な値は `break-all` または `break-word` のみです。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### 色

テキストの色を指定します。利用可能な色は次のとおりです。
`primary`, `complementary`, `secondary`, `hint`, `info`, `info-heavy`, `positive`, `positive-heavy`, `warning`, `warning-heavy`, `danger`, `danger-heavy`, `utility`, `utility-heavy`, `misc`, `misc-heavy`, `brand`, `link`, `link-hover`, `link-visited`, `link-visited-hover`, `dark-primary`, `dark-complementary`, `dark-secondary`, `light-primary`, `light-complementary`, `light-secondary`, `light-hint`, `inverted-primary`, `inverted-complementary`, `inverted-secondary`, および `inverted-hint`。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## プロパティ

| 名前          | 説明                                                               |                        タイプ                        |  デフォルト   |
| :------------ | :------------------------------------------------------------------------ | :------------------------------------------------: | :--------: |
| children      | テキストコンテンツ                                                              |                 `React.ReactNode`                  |            |
| className     | `class` HTML属性                                                    |                      `string`                      |            |
| id            | `id` HTML属性                                                       |                      `string`                      |            |
| as            | デフォルトのHTMLタグをオーバーライドできるようにします                                       |              `React.ElementType<any>`              |            |
| style         | `style` HTML属性                                                    |               `React.CSSProperties`                |            |
| variant       | テキストフォント                                                                 |                      `string`                      | `"body-1"` |
| ellipsis      | 非表示のオーバーフローコンテンツは省略記号に置き換えられます                                                |                     `boolean`                      |            |
| ellipsisLines | コンテンツが切り取られる後のテキストの完全な行数                                |                      `number`                      |            |
| whiteSpace    | `white-space` CSSプロパティ                                                |            `"nowrap"` `"break-spaces"`             |            |
| wordBreak     | `word-break` CSSプロパティ                                                 |            `"break-all"` `"break-word"`            |            |
| color         | テキストの色                                                                | `string` (**Color** セクションの値を確認してください) |            |
| qa            | `data-qa` HTML属性、テストに使用されます                                |                      `string`                      |            |