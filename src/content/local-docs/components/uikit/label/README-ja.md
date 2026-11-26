`Label` を使用して、特定の情報を強調表示できます。`Close` または `Copy` ボタンを持つ `Label` は、さまざまな簡単なアクションに役立ちます。

`Label` は、重要度を示すさまざまなカラーコードを持つ一行テキスト情報を表示するのに最も適しています。

```tsx
import {Label} from '@gravity-ui/uikit';
```

## 外観

`Label` は複数のスタイルで表示できます。

### テーマ

`theme` プロパティを使用して、さまざまなステータスに対して異なるテーマを適用します。次の値を使用できます: `normal`, `info`, `success`, `warning`, `danger`, `utility`, `unknown`, および `clear`。
デフォルトのテーマは `normal` です。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### タイプ

`type` プロパティは、`Label` にさまざまなオプションを追加します:

`copy`: コピーボタンを追加します。クリックすると、`copyText` プロパティの値がコピーされます。

`close`: ラベルリストを管理するための閉じるボタンを追加します。

`info`: ラベルに情報アイコンを追加します。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### アイコン

`icon` プロパティを使用してアイコンを追加できます。これを行うには、SVG の特別なラッパーである [`Icon`](../Icon) コンポーネントを使用します。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## 値

`Label` を使用してキーと値の情報を表示できます。これを行うには、`children` プロパティにキーを、`value` プロパティに値を指定する必要があります。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## ステート

`label` はさまざまなステートを持つことができます:

- `disabled`: インタラクションは許可されません。
- `interactive`: ラベルをホバー可能にします。
- `loading`: ローディング状態を表示します。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## サイズ

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## プロパティ

| 名前             | 説明                                     |                  タイプ                   |   デフォルト   |
| :--------------- | :---------------------------------------------- | :-------------------------------------: | :---------: |
| children         | コンテンツ                                         |            `React.ReactNode`            |             |
| className        | `class` HTML属性                          |                `string`                 |             |
| closeButtonLabel | クローズボタンの `aria-label`                |                `string`                 |             |
| copyButtonLabel  | コピーボタンの `aria-label`                 |                `string`                 |             |
| copyText         | コピーするテキスト                                    |                `string`                 |             |
| disabled         | 無効状態                                  |                `boolean`                |             |
| icon             | ラベルアイコン（左側）                        |            `React.ReactNode`            |             |
| interactive      | ホバーエフェクトを有効にする                            |                `boolean`                |             |
| loading          | ローディング状態                                   |                `boolean`                |   `false`   |
| onClick          | `click` イベントハンドラ                           |               `Function`                |             |
| onCloseClick     | クローズボタンの `click` イベントハンドラ              |               `Function`                |             |
| onCopy           | `copy` イベントハンドラ                            |               `Function`                |             |
| qa               | `data-qa` HTML属性、テストに使用                  |                `string`                 |             |
| size             | ラベルサイズ                                      |       `"xxs"` `"xs"` `"s"` `"m"`        |   `"xs"`    |
| theme            | ラベルテーマ                                     |                `string`                 | `"normal"`  |
| title            | `title` HTML属性                          |                `string`                 |             |
| type             | ラベルタイプ                                      | `"default"` `"copy"` `"close"` `"info"` | `"default"` |
| value            | ラベル値（`"children : value"` として表示） |            `React.ReactNode`            |             |
| width            | Label が親のスペースをどのように使用するかを制御する |                `"auto"`                 |             |