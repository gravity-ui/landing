GRAVITY_TRANSLATION_BLOCK_0_END

このコンポーネントは、アプリケーション内でナビゲーション要素、アクション、および情報コンテンツを整理するための標準化されたレイアウトを提供する柔軟な水平バーです。パンくずリスト、ボタン、ドロップダウンメニューなどのUI要素を定義済みのセクションやグループに整理するためのコンテナとして機能します。

GRAVITY_TRANSLATION_BLOCK_1_END

`ActionBar` は、構造化されたレイアウトを作成するために連携するいくつかのネストされたコンポーネントを提供します: `ActionBar.Section`、`ActionBar.Group`、`ActionBar.Item`、`ActionBar.Separator`。

## プロパティ

| 名前       | 説明                               |         型          | デフォルト |
| :--------- | :--------------------------------- | :-----------------: | :------: |
| aria-label | HTML `aria-label` 属性             |       `string`        |          |
| className  | HTML `class` 属性                  |       `string`        |          |
| style      | HTML `style` 属性                  | `React.CSSProperties` |          |
| qa         | テストに使用される `data-qa` HTML 属性 |       `string`        |          |

## ActionBar.Section

ナビゲーションの異なる種類を視覚的に分離するための装飾コンポーネントです。
提示されるセクションには `primary` と `secondary` の2種類があります。アプリには少なくとも `primary` セクションがあることを推奨します。`secondary` は、より小さなパディングと `primary` セクションからの水平セパレータで強調表示されるべきアプリ固有のコントロールに使用できます。

### プロパティ

| 名前      | 説明                                     |            型            |   デフォルト   |
| :-------- | :--------------------------------------- | :----------------------: | :----------: |
| type      | セクションのビジュアルスタイルを指定します | `"primary"`, `"secondary"` | `"primary"` |
| className | HTML `class` 属性                        |          `string`          |              |
| style     | HTML `style` 属性                        |   `React.CSSProperties`    |              |
| qa        | テストに使用される `data-qa` HTML 属性     |          `string`          |              |

GRAVITY_TRANSLATION_BLOCK_2_END

## ActionBar.Group

グループは、セクション内の `ActionBar.Item` を整理し、それらの配置を制御します。

### プロパティ

| 名前             | 説明                                                               |                                      型                                       | デフォルト |
| :--------------- | :----------------------------------------------------------------- | :-----------------------------------------------------------------------------: | :------: |
| pull             | グループの配置を制御します                                         | `"left"`, `"left-grow"`, `"right"`, `"right-grow"`, `"center"`, `"center-grow"` |          |
| stretchContainer | Group に `flex-grow: 1` を設定します。UIKit@7 Breadcrumbs をサポートする必要があります |                                    `boolean`                                    |          |
| className        | HTML `class` 属性                                                  |                                    `string`                                     |          |
| style            | HTML `style` 属性                                                  |                              `React.CSSProperties`                              |          |
| qa               | テストに使用される `data-qa` HTML 属性                               |                                    `string`                                     |          |

## ActionBar.Item

ボタン、パンくずリスト、または `ActionBar.Group` 内にある必要があるその他のコンポーネントなどのUI要素のコンテナです。このコンポーネントは、アイテム間にマージンを追加します。

### プロパティ

| 名前      | 説明                     |         型          | デフォルト |
| :-------- | :----------------------- | :-----------------: | :------: |
| spacing   | 前のアイテムとの間隔を有効にします |       `boolean`       | `true`  |
| className | HTML `class` 属性        |       `string`        |          |
| style     | HTML `style` 属性        | `React.CSSProperties` |          |
| qa        | テストに使用される `data-qa` HTML 属性 |       `string`        |          |

## ActionBar.Separator

グループ内の項目を視覚的に区切るために配置できる視覚的な区切り線。

GRAVITY_TRANSLATION_BLOCK_3_END