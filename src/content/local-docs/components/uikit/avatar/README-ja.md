<!--GITHUB_BLOCK-->

# Avatar

<!--/GITHUB_BLOCK-->

このコンポーネントは、アバターのレンダリングを目的としています。画像、アイコン、テキスト（名前のイニシャル）の3つの基本的なアバタータイプがあります。これらのタイプはすべて、動作と外観を設定するための特別なプロパティを備えています。

```tsx
import {Avatar} from '@gravity-ui/uikit';
```

## タイプ

### 画像

このコンポーネントは、画像を使用してアバターをレンダリングするために使用できます。画像を提供するには、`imgUrl` プロパティを使用します。

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return <Avatar imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352" size="l" />;
}
SANDBOX-->

`srcSet` プロパティを提供して、さまざまなサイズの画像を読み込むこともできます。

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <Avatar
            imgUrl="https://loremflickr.com/640/480/cats?lock=8610182282084352"
            srcSet="https://loremflickr.com/57/43/cats?lock=2879400393572352 1x, https://loremflickr.com/131/98/cats?lock=4373954936438784 2x, https://loremflickr.com/164/123/cats?lock=3007328513163264 3x, https://loremflickr.com/225/169/cats?lock=8243879964835840 4x"
            size="l"
        />
    );
}
SANDBOX-->

`Avatar` コンポーネントには `fallbackImgUrl` プロパティがあり、`imgUrl` リンク（CSP エラーまたは元の画像がない場合）で画像読み込みエラーが発生した場合に表示される画像を提供できます。

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <Avatar
            imgUrl="random_link"
            fallbackImgUrl="https://loremflickr.com/640/480/cats?lock=3552647338524672"
            size="l"
        />
    );
}
SANDBOX-->

### アイコン

このコンポーネントは、アイコンを使用してアバターをレンダリングするために使用できます。`Icon` コンポーネントの場合と同様に、`icon` プロパティを使用してアイコンを提供します。

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return <Avatar icon={GraduationCap} size="l" />;
}
SANDBOX-->

### テキスト

このコンポーネントは、テキストを使用してアバターをレンダリングするために使用できます。そのために `text` プロパティを使用します。テキストは、イニシャル（2つの単語の最初の文字）または単一の単語の最初の2文字としてレンダリングされます。

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" size="l" />
            <Avatar text="Guardian" size="l" />
        </>
    );
}
SANDBOX-->

## 外観

### テーマとビュー

`Avatar` コンポーネントには、定義済みのテーマ（`normal`、`brand`）とビュー（`filled`、`outlined`）があります。

デフォルトのテーマは `normal` で、デフォルトのビューは `filled` です。

<!--SANDBOX
import {GraduationCap} from '@gravity-ui/icons';
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar icon={GraduationCap} size="l" theme="normal" view="filled" />
            <Avatar icon={GraduationCap} size="l" theme="brand" view="filled" />
            <Avatar icon={GraduationCap} size="l" theme="normal" view="outlined" />
            <Avatar icon={GraduationCap} size="l" theme="brand" view="outlined" />
        </>
    );
}
SANDBOX-->

### カスタムカラー

`backgroundColor`、`borderColor`、および `color` プロパティ（後者はアイコンとテキストアバターでのみ機能します）を通じてカスタムカラーを提供することもできます。これらのカラーは、テーマカラーよりも優先度が高くなります。

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar
                text="Charles Darwin"
                size="l"
                backgroundColor="var(--g-color-base-danger-medium)"
                color="var(--g-color-text-primary)"
            />
            <Avatar text="Charles Darwin" size="l" borderColor="var(--g-color-line-misc)" />
        </>
    );
}
SANDBOX-->

### サイズ

`size` プロパティを使用して `Avatar` のサイズを管理します。デフォルトのサイズは `m` です。可能な値は `3xs`、`2xs`、`xs`、`s`、`m`、`l`、`xl` です。

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" theme="brand" size="3xs" />
            <Avatar text="Charles Darwin" theme="brand" size="2xs" />
            <Avatar text="Charles Darwin" theme="brand" size="xs" />
            <Avatar text="Charles Darwin" theme="brand" size="s" />
            <Avatar text="Charles Darwin" theme="brand" size="m" />
            <Avatar text="Charles Darwin" theme="brand" size="l" />
            <Avatar text="Charles Darwin" theme="brand" size="xl" />
        </>
    );
}
SANDBOX-->

### シェイプ

`shape` プロパティを使用して `Avatar` のシェイプを管理します。デフォルトのシェイプは `circle` です。可能な値は `circle` と `square` です。

<!--SANDBOX
import {Avatar} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Avatar text="Charles Darwin" theme="brand" shape="circle" />
            <Avatar text="Charles Darwin" theme="brand" shape="square" />
        </>
    );
}
SANDBOX-->

## プロパティ

### 一般

| 名前             | 説明                                |                      タイプ                       | デフォルト  |
| :--------------- | :---------------------------------- | :---------------------------------------------: | :------: |
| size             | アバターのサイズ                    | `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'` |   `m`    |
| theme            | アバターのテーマ                    |              `'normal'` `'brand'`               | `normal` |
| view             | アバターの塗りつぶしとアウトラインのオプション |             `'filled'` `'outlined'`             | `filled` |
| shape            | アバターの形状                      |              `'circle'` `'square'`              | `circle` |
| backgroundColor  | カスタム背景色                      |                    `string`                     |          |
| borderColor      | カスタム境界線の色                  |                    `string`                     |          |
| title            | `title` HTML属性                    |                    `string`                     |          |
| aria-label       | アバターセクションの`aria-label`    |                    `string`                     |          |
| aria-labelledby  | アバターセクションの`aria-labelledby` |                    `string`                     |          |
| aria-describedby | アバターブロックの`aria-describedby` |                    `string`                     |          |
| aria-details     | アバターブロックの`aria-details`    |                    `string`                     |          |
| className        | ルート要素のカスタムCSSクラス       |                    `string`                     |          |
| style            | `style` HTML属性                    |              `React.CSSProperties`              |          |
| qa               | テストに使用される`data-qa` HTML属性 |                    `string`                     |          |

### 画像固有

| 名前            | 説明                                      |        タイプ        |   デフォルト   |
| :-------------- | :---------------------------------------- | :----------------: | :---------: |
| imgUrl          | `img` `src` HTML属性                      |      `string`      |             |
| fallbackImgUrl  | エラーが発生した場合に表示されるフォールバック画像 |      `string`      |             |
| sizes           | `img` `sizes` HTML属性                    |      `string`      |             |
| srcSet          | `img` `srcSet` HTML属性                   |      `string`      |             |
| alt             | `img` `alt` HTML属性                      |      `string`      | props.title |
| loading         | `img` `loading` HTML属性                  | `'eager'` `'lazy'` |             |
| withImageBorder | 画像にデフォルトの境界線を追加する        |     `boolean`      |             |

### アイコン固有

| 名前  | 説明             |    タイプ    | デフォルト |
| :---- | :--------------- | :--------: | :-----: |
| icon  | SVGアイコンのソース | `IconData` |         |
| color | カスタムアイコンの色 |  `string`  |         |

### テキスト固有

| 名前  | 説明         |   タイプ   | デフォルト |
| :---- | :----------- | :------: | :-----: |
| text  | アバターのテキスト | `string` |         |
| color | カスタムテキストの色 | `string` |         |

## CSS API

| 名前                            | 説明             |
| :------------------------------ | :--------------- |
| `--g-avatar-size`               | サイズ（幅と高さ） |
| `--g-avatar-border-width`       | ボーダー幅       |
| `--g-avatar-inner-border-width` | 内側ボーダー幅   |
| `--g-avatar-border-color`       | ボーダーカラー   |
| `--g-avatar-background-color`   | 背景色           |
| `--g-avatar-text-color`         | アイコンとテキストの色 |
| `--g-avatar-font-weight`        | テキストのフォントウェイト |
| `--g-avatar-font-size`          | テキストのフォントサイズ |
| `--g-avatar-line-height`        | テキストの行の高さ |