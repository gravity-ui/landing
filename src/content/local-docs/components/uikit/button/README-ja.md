ボタンは、特定の操作のトリガーとして機能します。これが主な目的ですが、非常にまれなケースでは、他のページに移動するためのリンクとして使用することもできます。

```tsx
import {Button} from '@gravity-ui/uikit';
```

## 外観

外観に関して、`Button` には4つのタイプがあります：ベーシック、アウトライン、フラット、コントラスト。
`Button` の外観は、`view` プロパティによって決定されます。

### ベーシック

`action`: 最も特徴的な `Button` タイプです。画面上で最も注意を引く必要があるプライマリ アクションに使用されます。
ページごとに1つだけこのようなボタンを使用することをお勧めします。

`normal`: セカンダリ アクションのために設計された、またはアクションの重要性を過度に強調することなく維持するための、`Button` のデフォルト タイプです。

`raised`: コンテンツの上にフローティング要素として配置され、通常は固定位置にあります。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### アウトライン

`outlined`: あまり注意を必要としないセカンダリ アクションに使用されます。メイン ボタンと併用することも、単独で使用することもできます。併用する場合は、強調されたものである必要があります。

`outlined-action`: 通常、別のページまたは外部リソースへのリンクとして使用されます。

このタイプには、追加のセマンティクスが必要な場合に使用できるセマンティックバリエーションもあります：`outlined-info`、`outlined-success`、`outlined-warning`、`outlined-danger`。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### フラット

`flat`: 最も注意を必要としない補助的なアクションに使用されます。ボタンのリストやエディタ内のアクションアイコン（テキストなし）でよく使用されます。

`flat-secondary`: `flat` ボタンよりも強調度が低いです。ダイアログボックスやモーダルウィンドウでセカンダリ ボタンとしてよく使用されます。

`flat-action`: 通常、別のページまたは外部リソースへのリンクとして使用されます。

追加のセマンティクスが必要な場合に使用できるセマンティックバリエーションもあります：`outlined-info`、`outlined-success`、`outlined-warning`、`outlined-danger`。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### コントラスト

`contrast` はライトテーマではダーク、ダークテーマではライトになります。`contrast-inverted` はそれらの色を反転させます。`contrast-light` は両方のテーマでライトのまま、`contrast-dark` はダークのままです。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## アイコン

`Button` にアイコンを追加するには、SVG の特別なラッパーである [`Icon`](../Icon) コンポーネントを使用します。アイコンのサイズは、`Button` のサイズに合わせて自動的に選択されます。明示的にサイズを変更するには、`Icon` の `size`、`width`、または `height` を設定します。

カスタムアイコンを `Button` のサイズに合わせてサイズ設定するには、`Button.Icon` レンダリング関数を使用します。

```tsx
<Button size="l">
  <Button.Icon>{({size}) => <CustomIcon size={size} />}</Button.Icon>
  Action
</Button>
```

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## ステート

`Button` にはさまざまなステートがあります。

`disabled`: ボタンが何らかの理由で利用できない場合。

`loading`: バックグラウンドで非同期プロセスが実行されている場合。

`selected`: ユーザーがボタンを**有効**および**無効**にできる場合。

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### メニュー トリガー

`Button` は、対応する aria 属性 (`aria-haspopup`、`aria-expanded`) が渡されると、自動的に外観が変化します。

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## サイズ

`Button` のサイズを管理するには、`size` プロパティを使用します。デフォルトのサイズは `m` です。

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## 幅

`Button` がコンテナ内でどのように動作するかを管理するには、`width` プロパティを使用します。

`auto`: オーバーフローするコンテンツを省略記号で非表示にすることで、`Button` の最大幅を制限します。

`max`: `Button` の幅を親コンテナの幅に合わせ、オーバーフローするコンテンツも省略記号で非表示にします。

GRAVITY_TRANSLATION_BLOCK_16_END

## ピン

`pin` プロパティを使用すると、**開始**エッジと**終了**エッジの形状を管理できます。これは通常、複数のボタンを 1 つのユニットに結合する場合に使用されます。
`pin` プロパティの値は、ハイフンで区切られた _開始_ スタイル名と _終了_ スタイル名で構成されます。例：`round-brick`。
エッジのスタイルは次のとおりです：`round`（デフォルト）、`circle`、`brick`、`clear`。

GRAVITY_TRANSLATION_BLOCK_17_END

GRAVITY_TRANSLATION_BLOCK_18_END

## プロパティ

`Button` は、これらのプロパティに加えて、有効な `button` または `a` 要素のプロパティをすべて受け入れます。

| 名前      | 説明                                                                 |              タイプ               |     デフォルト     |
| :-------- | :------------------------------------------------------------------- | :-----------------------------: | :-------------: |
| children  | `Button` のコンテンツ。テキストと `<Icon/>` コンポーネントの両方を使用できます。 |        `React.ReactNode`        |                 |
| component | ルートコンポーネントをオーバーライドします                                   |       `React.ElementType`       |                 |
| disabled  | `disabled` 状態を切り替えます                                          |            `boolean`            |     `false`     |
| href      | ルートコンポーネントをリンクにするために渡します                               |            `string`             |                 |
| loading   | `loading` 状態を切り替えます                                           |            `boolean`            |     `false`     |
| pin       | `Button` のエッジスタイルを設定します                                      |            `string`             | `"round-round"` |
| qa        | テストに使用される `data-qa` HTML 属性                                   |            `string`             |                 |
| selected  | `selected` 状態を切り替えます                                          |            `boolean`            |                 |
| size      | `Button` のサイズを設定します                                            | `"xs"` `"s"` `"m"` `"l"` `"xl"` |      `"m"`      |
| view      | `Button` の外観を設定します                                            |          `ButtonView`           |   `"normal"`    |
| width     | `Button` が親のスペースをどのように使用するかを制御します                      |        `"auto"` `"max"`         |                 |

## CSS API

| 名前                                | 説明               |
| :---------------------------------- | :----------------- |
| `--g-button-text-color`             | テキストの色       |
| `--g-button-text-color-hover`       | ホバー時のテキストの色 |
| `--g-button-background-color`       | 背景色             |
| `--g-button-background-color-hover` | ホバー時の背景色   |
| `--g-button-border-width`           | ボーダーの幅       |
| `--g-button-border-color`           | ボーダーの色       |
| `--g-button-border-style`           | ボーダーのスタイル |
| `--g-button-focus-outline-width`    | フォーカスアウトラインの幅 |
| `--g-button-focus-outline-color`    | フォーカスアウトラインの色 |
| `--g-button-focus-outline-style`    | フォーカスアウトラインのスタイル |
| `--g-button-focus-outline-offset`   | フォーカスアウトラインのオフセット |
| `--g-button-height`                 | 高さ (行の高さ)    |
| `--g-button-padding`                | サイドのパディング |
| `--g-button-border-radius`          | ボーダー半径       |
| `--g-button-font-size`              | テキストのフォントサイズ |
| `--g-button-icon-space`             | アイコンの利用可能スペース |
| `--g-button-icon-offset`            | アイコンのオフセット |