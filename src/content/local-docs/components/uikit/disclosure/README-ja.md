`Disclosure` は、ネストされたコンテンツを表示および非表示できる、折りたたみ可能なコンポーネントです。

```tsx
import {Disclosure} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

## 展開状態の制御

`expanded` および `onUpdate` プロパティを使用して、展開状態を制御できます。

制御されたコンポーネントの例:

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## サイズ

`size` プロパティを使用して、`Disclosure` のサイズを制御します。デフォルトのサイズは `m` です。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 矢印の位置

`start`: 矢印はヘッダーの先頭に配置されます（デフォルトで使用されます）。

`end`: 矢印はヘッダーの末尾に配置されます。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## カスタムコンテンツ

`Disclosure.Summary` コンポーネントを使用してカスタムヘッダーを作成し、`Disclosure.Details` を使用してカスタムコンテンツを実装します。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## 無効状態

`disabled` プロパティを使用して、`Disclosure` を無効にすることができます。

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## プロパティ

### Disclosure

| 名前             | 説明                                                               | タイプ                                                  | デフォルト   |
| :--------------- | :----------------------------------------------------------------- | :---------------------------------------------------- | :-------- |
| size             | コンポーネントのサイズ                                             | `"m"` `"l"` `"xl"`                                    | `"m"`     |
| className        | ルート要素の CSS クラス名                                          | `string`                                              |           |
| disabled         | 無効状態                                                           | `boolean`                                             | `false`   |
| defaultExpanded  | デフォルトの展開状態                                               | `boolean`                                             | `false`   |
| expanded         | 制御された展開状態                                                 | `boolean`                                             |           |
| arrowPosition    | 矢印の位置を制御                                                   | `"start"` `"end"`                                     | `"start"` |
| summary          | コンテンツの概要                                                   | `React.ReactNode`                                     |           |
| keepMounted      | 折りたたまれた状態でもコンテンツを DOM に保持する                  | `boolean`                                             | `true`    |
| onUpdate         | 展開/折りたたみ状態が変更されたときに呼び出されるコールバック。 | `(expanded: boolean) => void`                         |           |
| onSummaryKeyDown | サマリーにフォーカスがあるときにキーボードイベントで呼び出されるコールバック。 | `(e: React.KeyboardEvent<HTMLButtonElement>) => void` |           |
| children         | コンテンツ                                                         | `React.ReactNode`                                     |           |
| qa               | テスト識別子                                                       | `string`                                              |           |

### Disclosure.Summary

| 名前     | 説明                               | タイプ                                            | デフォルト              |
| :------- | :--------------------------------- | :---------------------------------------------- | :------------------- |
| children | レンダリング関数                   | `(props, defaultSummary) => React.ReactElement` |                      |
| qa       | テスト識別子                       | `string`                                        | `disclosure-summary` |

### Disclosure.Details
GRAVITY_TRANSLATION_BLOCK_11_END

| 名前     | 説明     | タイプ              | デフォルト              |
| :------- | :-------------- | :---------------- | :------------------- |
| children | コンテンツ         | `React.ReactNode` |                      |
| qa       | テスト識別子 | `string`          | `disclosure-details` |

## CSS API

| 名前                                 | 説明                                          |
| :----------------------------------- | :--------------------------------------------------- |
| `--g-disclosure-text-color`          | コンテンツ概要のテキストカラー                   |
| `--g-disclosure-text-color-disabled` | 無効状態のコンテンツ概要のテキストカラー |