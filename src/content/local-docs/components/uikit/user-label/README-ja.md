# UserLabel

`UserLabel` は、ユーザーのアバターと名前またはメールアドレスを含むコンパクトなチップで、インラインメンションやリストに適しています（より大きなプロフィールブロックには `User` を、画像のみには `Avatar` を使用してください）。

## Type

アバターの外観を管理するために使用します。パーソナライズされたエンティティには `"person"` を、メールアドレスには `"email"` を使用します。アバターが不要な場合は `"empty"` を使用してください。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Avatar

このコンポーネントはカスタムアバターと組み合わせて使用できます。`type: 'person'` の場合のみ機能します。画像、[Avatar](../Avatar/README.md) コンポーネントのプロパティ、またはカスタム React ノードを指定できます。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Interactivity

このコンポーネントはインタラクティブでもあります。クリック可能またはクローズ可能にすることができます。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Properties

| Name         | Description                                     |                                    Type                                     |   Default    |
| :----------- | :---------------------------------------------- | :-------------------------------------------------------------------------: | :----------: |
| type         | アバターの外観                                  |                       `'person'` `'email'` `'empty'`                        |  `'person'`  |
| view         | `UserLabel` のビュー                            |                           `'outlined'` `'clear'`                            | `'outlined'` |
| size         | アバターのサイズ                                |               `'3xs'` `'2xs'` `'xs'` `'s'` `'m'` `'l'` `'xl'`               |    `'s'`     |
| avatar       | ユーザーのアバター                              | [AvatarProps](../Avatar/README.md#properties) `string` `React.ReactElement` |              |
| text         | 表示されるテキスト                              |                              `React.ReactNode`                              |              |
| description  | ユーザーの説明                                  |                              `React.ReactNode`                              |              |
| onClick      | コンポーネントの `click` イベントハンドラ       |                                 `Function`                                  |              |
| onCloseClick | クロスアイコンボタンの `click` イベントハンドラ |                                 `Function`                                  |              |
| className    | ルート要素のカスタム CSS クラス                 |                                  `string`                                   |              |
| style        | HTML スタイル属性                               |                            `React.CSSProperties`                            |              |
| qa           | テストに使用される `data-qa` HTML 属性          |                                  `string`                                   |              |

## CSS API

| 名前                                     | 説明                                             |
| :--------------------------------------- | :------------------------------------------------------ |
| `--g-user-label-size`                    | アバター（幅と高さ）およびラベルの高さのサイズ |
| `--g-user-label-border-radius`           | ラベルの境界線の半径                               |
| `--g-user-label-padding`                 | ラベルの水平方向のパディング                           |
| `--g-user-label-gap`                     | 要素間のギャップ（アバター、テキスト、閉じるアイコン）         |
| `--g-user-label-text-font-weight`        | テキストのフォントの太さ                                       |
| `--g-user-label-text-font-size`          | テキストのフォントサイズ                                         |
| `--g-user-label-text-line-height`        | テキストの行の高さ                                       |
| `--g-user-label-description-font-weight` | 説明のフォントの太さ                                 |
| `--g-user-label-description-font-size`   | 説明のフォントサイズ                                   |
| `--g-user-label-description-line-height` | 説明の行の高さ                                 |