ボタンは、特定の操作のトリガーとして機能します。これが主な目的ですが、非常にまれなケースでは、他のページに移動するためのリンクとして使用することもできます。

```tsx
import {Button} from '@gravity-ui/uikit';
```

## 外観

外観に関して、`Button` には4つのタイプがあります：ベーシック、アウトライン、フラット、コントラスト。
`Button` の外観は、`view` プロパティによって決定されます。

### ベーシック

`action`: 最も特徴的な `Button` タイプです。画面上で最も注意を引く必要がある主要な操作に使用されます。
ページごとに1つだけこのようなボタンを使用することをお勧めします。

`normal`: デフォルトの `Button` タイプで、二次的な操作や、あまり注意を引かずに操作の重要性を維持するために設計されています。

`raised`: コンテンツの上に浮動要素として配置され、通常は固定位置にあります。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### アウトライン

`outlined`: 注意をあまり必要としない二次的な操作に使用されます。メインボタンと併用することも、単独で使用することもできます。併用する場合は、強調されたボタンである必要があります。

`outlined-action`: 通常、別のページや外部リソースへのリンクとして使用されます。

このタイプには、追加のセマンティクスが必要な場合に使用できるセマンティックバリエーションもあります：`outlined-info`、`outlined-success`、`outlined-warning`、`outlined-danger`。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### フラット

`flat`: 最も注意を引く必要のない補助的な操作に使用されます。ボタンのリストやエディタ内のアクションアイコン（テキストなし）でよく使用されます。

`flat-secondary`: `flat` ボタンよりも強調度が低いです。ダイアログボックスやモーダルウィンドウで二次ボタンとしてよく使用されます。

`flat-action`: 通常、別のページや外部リソースへのリンクとして使用されます。

追加のセマンティクスが必要な場合に使用できるセマンティックバリエーションもあります：`outlined-info`、`outlined-success`、`outlined-warning`、`outlined-danger`。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### コントラスト

`normal-contrast`、`outline-contrast`、`flat-contrast` ボタンは、バナー内や逆背景など、複雑な背景に対してアクションを際立たせます。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## アイコン

`Button` にアイコンを追加するには、SVGの特別なラッパーである [`Icon`](../Icon) コンポーネントを使用します。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## ステート

`Button` にはさまざまなステートがあります：

`disabled`: ボタンが何らかの理由で利用できない場合。

`loading`: バックグラウンドで非同期プロセスが実行されている場合。

`selected`: ユーザーがボタンを**有効**および**無効**にできる場合。

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### メニュー トリガー

`Button` は、対応する aria属性（`aria-haspopup`、`aria-expanded`）が渡されると、自動的に外観が変化します：

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## サイズ

`Button` のサイズを管理するには、`size` プロパティを使用します。デフォルトのサイズは `m` です。

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## 幅

コンテナ内での `Button` の動作方法を管理するには、`width` プロパティを使用します：

`auto`: 省略記号でオーバーフローするコンテンツを非表示にすることで、`Button` の最大幅を制限します。

`max`: `Button` の幅を親コンテナの幅に合わせ、オーバーフローするコンテンツを省略記号で非表示にします。

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

## ピン

`pin` プロパティを使用すると、**開始**エッジと**終了**エッジの形状を管理できます。通常、複数のボタンを単一のユニットとして結合する場合に使用されます。
`pin` プロパティの値は、ハイフンで区切られた **開始** と **終了** のスタイル名で構成されます。例：`round-brick`。
エッジのスタイルは、`round`（デフォルト）、`circle`、`brick`、`clear` です。

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

## プロパティ

`Button` は、これらのプロパティに加えて、有効な `button` または `a` 要素のプロパティをすべて受け入れます：

| 名前      | 説明                                                              |              タイプ               |     デフォルト     |
| :-------- | :---------------------------------------------------------------- | :-----------------------------: | :-------------: |
| children  | `Button` のコンテンツ。テキストと `<Icon/>` コンポーネントの両方を使用できます。 |        `React.ReactNode`        |                 |
| component | ルートコンポーネントをオーバーライドします。                               |       `React.ElementType`       |                 |
| disabled  | `disabled` 状態を切り替えます。                                         |            `boolean`            |     `false`     |
| href      | ルートコンポーネントをリンクにするために渡します。                               |            `string`             |                 |
| loading   | `loading` 状態を切り替えます。                                          |            `boolean`            |     `false`     |
| pin       | `Button` のエッジスタイルを設定します。                                     |            `string`             | `"round-round"` |
| qa        | テストに使用される `data-qa` HTML 属性。                                   |            `string`             |                 |
| selected  | `selected` 状態を切り替えます。                                         |            `boolean`            |                 |
| size      | `Button` のサイズを設定します。                                          | `"xs"` `"s"` `"m"` `"l"` `"xl"` |      `"m"`      |
| view      | `Button` の外観を設定します。                                           |          `ButtonView`           |   `"normal"`    |
| width     | `Button` が親のスペースをどのように使用するかを制御します。                               |        `"auto"` `"max"`         |                 |

## CSS API

| 名前                                | 説明               |
| :---------------------------------- | :----------------- |
| `--g-button-text-color`             | テキストの色       |
| `--g-button-text-color-hover`       | ホバー時のテキストの色 |
| `--g-button-background-color`       | 背景色             |
| `--g-button-background-color-hover` | ホバー時の背景色   |
| `--g-button-border-width`           | 境界線の幅         |
| `--g-button-border-color`           | 境界線の色         |
| `--g-button-border-style`           | 境界線のスタイル   |
| `--g-button-focus-outline-width`    | フォーカスアウトラインの幅 |
| `--g-button-focus-outline-color`    | フォーカスアウトラインの色 |
| `--g-button-focus-outline-style`    | フォーカスアウトラインのスタイル |
| `--g-button-focus-outline-offset`   | フォーカスアウトラインのオフセット |
| `--g-button-height`                 | 高さ (行の高さ)    |
| `--g-button-padding`                | サイドのパディング |
| `--g-button-border-radius`          | 角丸               |
| `--g-button-font-size`              | テキストのフォントサイズ |
| `--g-button-icon-space`             | アイコンの利用可能スペース |
| `--g-button-icon-offset`            | アイコンのオフセット |