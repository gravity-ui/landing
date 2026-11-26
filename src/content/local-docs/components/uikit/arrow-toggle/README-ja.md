`ArrowToggle` は、シェブロンアイコンを表示するためのコンポーネントです。4方向に回転でき、ドロップダウンリストやカットコンポーネントなどを表示するために使用できます。

## 外観

`ArrowToggle` には、`top`、`right`、`bottom`、`left` の4つの方向があります。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## サイズ

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## インタラクティブ要素としての使用

トグルアイコンを使用した `ArrowToggle` の使用例を以下に示します。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## プロパティ

| 名前      | 説明                               |   型   |  デフォルト   |
| :-------- | :--------------------------------- | :----: | :---------: |
| className | `class` HTML属性                   | `string` |             |
| direction | `arrowToggle` の方向を設定するために使用 | `string` | `"bottom"`  |
| size      | `arrowToggle` のサイズ（ピクセル単位） | `number` |    `16`     |
| qa        | `data-qa` HTML属性、テストに使用     | `string` |             |

## CSS API

| 名前                                   | 説明         |
| :------------------------------------- | :----------- |
| `--g-arrow-toggle-transition-duration` | トランジションの期間 |

GRAVITY_TRANSLATION_BLOCK_6_END