`Progress` コンポーネントは、現在の操作の進捗状況を表示します。セクションに分割することもできます。

```tsx
import {Progress} from '@gravity-ui/uikit';
```

## Theme

`theme` プロパティを使用して、プログレス全体または複合部分の色を指定します。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## States

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## Size

`Progress` コンポーネントのサイズを管理するには、`"xs"`、`"s"`、`"m"` の値を取ることができる `size` プロパティを使用します。`text` プロパティは `"m"` サイズでのみ機能します。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Breakpoints

`Progress` コンポーネントのブレークポイントを設定するには、`colorStops` プロパティを使用します。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

オプションの `color` プロパティを使用して、テーマの色を上書きします。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Stack

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Properties

| 名前            | 説明                                                                                                                            |                          型                          |   デフォルト   |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------: | :---------: |
| className       | HTML `class` 属性                                                                                                               |                        `string`                        |             |
| colorStops      | テーマ付きのブレークポイントを設定します                                                                                              | `Array<{theme: string; stop: number; color?: string}>` |             |
| colorStopsValue | `colorStops` の現在のストップまたは代替値を選択するための値を設定します。利用可能な範囲は 0 から 100 です。                               |                        `number`                        |             |
| loading         | `loading` 状態を切り替えます                                                                                                    |                       `boolean`                        |   `false`   |
| size            | プログレスバーのサイズを設定します。プログレスバーのテキストは `"m"` サイズでのみ表示できます。                                         |                        `string`                        |    `"m"`    |
| stack           | コンポジットプログレスバーの設定。`value` が提供されている場合は不要です。                                                              |                     `Array<Stack>`                     |             |
| stackClassName  | スタックの HTML `class` 属性                                                                                                    |                        `string`                        |             |
| text            | プログレスバー内のテキスト                                                                                                      |                      `ReactNode`                       |             |
| theme           | プログレスの色を設定します                                                                                                      |                        `string`                        | `"default"` |
| value           | 現在のプログレス値。利用可能な範囲は 0 から 100 です。`stack` プロパティの値を使用することはオプションであり、`maxValue` として使用されます。 |                        `number`                        |             |

### `Stack`

| 名前      | 説明                                                                                                                            |    タイプ     |   デフォルト   |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------ | :---------: | :---------: |
| className | スタック要素の `class` HTML属性                                                                                                 |  `string`   |             |
| color     | `style` HTML属性の背景色を設定します                                                                                            |  `string`   |             |
| content   | スタック要素のコンテンツ                                                                                                        | `ReactNode` |             |
| title     | `title` HTML属性                                                                                                                |  `string`   |             |
| theme     | スタック要素の色を設定します                                                                                                    |  `string`   | `"default"` |
| value     | 現在の進捗値。利用可能な範囲は0から100です。`stack` プロパティの値を使用することはオプションであり、`maxValue` として使用されます。 |  `number`   |             |
| qa        | テストに使用される `data-qa` HTML属性                                                                                           |  `string`   |             |

## CSS API

| 名前                                   | 説明                        |
| :------------------------------------- | :-------------------------- |
| `--g-progress-empty-text-color`        | 空の `Progress` テキストの色 |
| `--g-progress-filled-text-color`       | 塗りつぶされた `Progress` テキストの色 |
| `--g-progress-empty-background-color`  | 空の `Progress` の背景色   |
| `--g-progress-filled-background-color` | 塗りつぶされた `Progress` の背景色 |