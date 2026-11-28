GRAVITY_TRANSLATION_BLOCK_0_END

このコンポーネントはアバターのレンダリングを目的としています。画像、アイコン、テキスト（名前のイニシャル）の3つの基本的なアバタータイプがあります。これらのタイプはすべて、動作と外観を設定するための特別なプロパティを持っています。

```tsx
import {Avatar} from '@gravity-ui/uikit';
```

## タイプ

### 画像

このコンポーネントは画像を使用してアバターをレンダリングするために使用できます。画像を提供するには、`imgUrl` プロパティを使用します。

GRAVITY_TRANSLATION_BLOCK_1_END

`srcSet` プロパティを提供して、さまざまなサイズの画像を読み込むこともできます。

GRAVITY_TRANSLATION_BLOCK_2_END

`Avatar` コンポーネントには `fallbackImgUrl` プロパティがあり、`imgUrl` リンクで画像読み込みエラー（CSPエラーまたは元の画像がない場合）が発生した場合に表示される画像を提供できます。

GRAVITY_TRANSLATION_BLOCK_3_END

### アイコン

このコンポーネントはアイコンを使用してアバターをレンダリングするために使用できます。`Icon` コンポーネントの場合と同様に、`icon` プロパティを使用してアイコンを提供します。

GRAVITY_TRANSLATION_BLOCK_4_END

### テキスト

このコンポーネントはテキストを使用してアバターをレンダリングするために使用できます。そのために `text` プロパティを使用します。テキストはイニシャル（2つの単語の最初の文字）または単一の単語の最初の2文字としてレンダリングされます。

GRAVITY_TRANSLATION_BLOCK_5_END

## 外観

### テーマと表示

`Avatar` コンポーネントには、定義済みのテーマ（`normal`、`brand`）と表示オプション（`filled`、`outlined`）があります。

デフォルトのテーマは `normal` で、デフォルトの表示は `filled` です。

GRAVITY_TRANSLATION_BLOCK_6_END

### カスタムカラー

`backgroundColor`、`borderColor`、`color` プロパティ（後者はアイコンとテキストアバターでのみ機能します）を使用してカスタムカラーを指定することもできます。これらのカラーはテーマカラーよりも優先度が高くなります。

GRAVITY_TRANSLATION_BLOCK_7_END

### サイズ

`size` プロパティを使用して `Avatar` のサイズを管理します。デフォルトのサイズは `m` です。可能な値は `3xs`、`2xs`、`xs`、`s`、`m`、`l`、`xl` です。

GRAVITY_TRANSLATION_BLOCK_8_END

### シェイプ

`shape` プロパティを使用して `Avatar` のシェイプを管理します。デフォルトのシェイプは `circle` です。可能な値は `circle` と `square` です。

GRAVITY_TRANSLATION_BLOCK_9_END

## プロパティ

### 共通

| 名前             | 説明                               |                      タイプ                       | デフォルト  |
| :--------------- | :--------------------------------- | :---------------------------------------------: | :------: |
| size             | アバターのサイズ                   | `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'` |   `m`    |
| theme            | アバターのテーマ                   |              `'normal'` `'brand'`               | `normal` |
| view             | アバターの塗りつぶしとアウトラインオプション |             `'filled'` `'outlined'`             | `filled` |
| shape            | アバターのシェイプ                 |              `'circle'` `'square'`              | `circle` |
| backgroundColor  | カスタム背景色                     |                    `string`                     |          |
| borderColor      | カスタム境界線の色                 |                    `string`                     |          |
| title            | `title` HTML属性                   |                    `string`                     |          |
| aria-label       | アバターセクションの `aria-label`  |                    `string`                     |          |
| aria-labelledby  | アバターセクションの `aria-labelledby` |                    `string`                     |          |
| aria-describedby | アバターブロックの `aria-describedby` |                    `string`                     |          |
| aria-details     | アバターブロックの `aria-details`  |                    `string`                     |          |
| className        | ルート要素のカスタムCSSクラス      |                    `string`                     |          |
| style            | `style` HTML属性                   |              `React.CSSProperties`              |          |
| qa               | テストに使用される `data-qa` HTML属性 |                    `string`                     |          |

### 画像固有

| 名前            | 説明                                     |        タイプ        | デフォルト |
| :-------------- | :--------------------------------------- | :----------------: | :-----: |
| imgUrl          | `img` の `src` HTML 属性                 |      `string`      |         |
| fallbackImgUrl  | エラーが発生した場合に表示されるフォールバック画像 |      `string`      |         |
| sizes           | `img` の `sizes` HTML 属性               |      `string`      |         |
| srcSet          | `img` の `srcSet` HTML 属性              |      `string`      |         |
| loading         | `img` の `loading` HTML 属性             | `'eager'` `'lazy'` |         |
| withImageBorder | 画像にデフォルトの境界線を追加する       |     `boolean`      |         |

### アイコン固有

| 名前  | 説明         |    タイプ    | デフォルト |
| :---- | :----------- | :--------: | :-----: |
| icon  | SVG アイコンのソース | `IconData` |         |
| color | カスタムアイコンの色 |  `string`  |         |

### テキスト固有

| 名前  | 説明       |   タイプ   | デフォルト |
| :---- | :--------- | :------: | :-----: |
| text  | アバターのテキスト | `string` |         |
| color | カスタムテキストの色 | `string` |         |

## CSS API

| 名前                            | 説明                   |
| :------------------------------ | :--------------------- |
| `--g-avatar-size`               | サイズ（幅と高さ）     |
| `--g-avatar-border-width`       | 境界線の幅             |
| `--g-avatar-inner-border-width` | 内側の境界線の幅       |
| `--g-avatar-border-color`       | 境界線の色             |
| `--g-avatar-background-color`   | 背景色                 |
| `--g-avatar-text-color`         | アイコンとテキストの色 |
| `--g-avatar-font-weight`        | テキストのフォントの太さ |
| `--g-avatar-font-size`          | テキストのフォントサイズ |
| `--g-avatar-line-height`        | テキストの行の高さ     |