<!--GITHUB_BLOCK-->

# Text

<!--/GITHUB_BLOCK-->

`Text` コンポーネントは、フォントのバリアント、色、テキストのオーバーフロー処理などのタイポグラフィスタイルをコンテンツに適用します。

```tsx
import {Text} from '@gravity-ui/uikit';
```

## バリアント

これらはプロジェクトでオーバーライドできるデフォルトのフォントです。利用可能なすべてのフォントのリストは[こちら](https://preview.gravity-ui.com/uikit/?path=/story/typography--variants)で確認できます。

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text variant="body-1">some text</Text>
            <Text variant="caption-2">some text</Text>
            <Text variant="display-3">some text</Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text variant="body-1">some text</Text>
<Text variant="caption-2">some text</Text>
<Text variant="display-3">some text</Text>
```

<!--/GITHUB_BLOCK-->

### 省略記号

このプロパティを使用すると、オーバーフローしたテキストを非表示にできます。

`false`: デフォルトで使用されます。

`true`: オーバーフローしたコンテンツは省略記号（`…`）に置き換えられます。

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text ellipsis={false}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
            <Text ellipsis>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text ellipsis={false}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab
    rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente
    exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
<Text ellipsis={true}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab
    rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente
    exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
```

<!--/GITHUB_BLOCK-->

### ホワイトスペース

これは `white-space` CSS プロパティを表します。`nowrap` または `break-spaces` のいずれかになります。

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            <Text whiteSpace="nowrap">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
            <Text whiteSpace="break-spaces">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
<Text whiteSpace={"nowrap"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
<Text whiteSpace={"break-spaces"}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Text>
```

<!--/GITHUB_BLOCK-->

### 単語の区切り

これは `word-break` CSS プロパティを表します。利用可能な値は `break-all` または `break-word` のみです。

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
            <Text wordBreak="break-all">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
                est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius
                corrupti, expedita sapiente exercitationem aperiam quibusdam libero ipsa veritatis quisquam!
            </Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus est, ab rerum harum hic
    delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente exercitationem aperiam
    quibusdam libero ipsa veritatis quisquam!</Text>
<Text wordBreak="break-all">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates asperiores accusamus
    est, ab rerum harum hic delectus fuga veniam! Hic, atque, quia sunt consectetur eius corrupti, expedita sapiente
    exercitationem aperiam quibusdam libero ipsa veritatis quisquam!</Text>
```

<!--/GITHUB_BLOCK-->

### 色

テキストの色を指定します。利用可能な色は次のとおりです。
`primary`, `complementary`, `secondary`, `hint`, `info`, `info-heavy`, `positive`, `positive-heavy`, `warning`, `warning-heavy`, `danger`, `danger-heavy`, `utility`, `utility-heavy`, `misc`, `misc-heavy`, `brand`, `link`, `link-hover`, `link-visited`, `link-visited-hover`, `dark-primary`, `dark-complementary`, `dark-secondary`, `light-primary`, `light-complementary`, `light-secondary`, `light-hint`, `inverted-primary`, `inverted-complementary`, `inverted-secondary`, および `inverted-hint`。

<!--SANDBOX
import {Text} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Text color="info">some text</Text>
            <Text color="positive">some text</Text>
            <Text color="warning">some text</Text>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Text color="info">some text</Text>
<Text color="positive">some text</Text>
<Text color="warning">some text</Text>
```

<!--/GITHUB_BLOCK-->

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
