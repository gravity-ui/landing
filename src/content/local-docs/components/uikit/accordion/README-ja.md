Accordion コンポーネントを使用すると、ユーザーが情報のセクションを表示または非表示できる、折りたたみ可能なコンテンツパネルを作成できます。これは、大量のコンテンツをコンパクトに整理する場合に役立ちます。

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

## アコーディオンの状態を制御する

ルートコンポーネントの `value` および `onUpdate` プロパティ、またはアイテムごとにアコーディオンの状態を制御できます。

ルートコンポーネントから状態を制御する例：

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

expanded プロパティを使用してアイテムごとに状態を制御する例：

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## サイズ

`size` プロパティを使用して `Accordion` のサイズを制御します。デフォルトのサイズは `m` です。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## 表示形式

`solid`: 背景付きのメイン表示（デフォルトで使用）。

`top-bottom`: 上下ボーダー付きの表示。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## 矢印の位置

`end`: ヘッダーの末尾に矢印が表示される（デフォルトで使用）。

`start`: ヘッダーの先頭に矢印が表示される。

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## 複数

`multiple` プロパティを使用すると、複数のアコーディオンアイテムを同時に展開できます。

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## カスタムサマリー

`Accordion.Summary` コンポーネントを使用してカスタムヘッダーを作成します。

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

## 無効状態

`disabled` プロパティを使用して、個々のアコーディオンアイテムを無効にすることができます。

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

## プロパティ

### Accordion

| 名前          | 説明                                     |            型            |  デフォルト  |
| :------------ | :--------------------------------------- | :----------------------: | :---------: |
| size          | アコーディオンのサイズ                   |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | アコーディオンの外観                     |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | 複数のアイテムを同時に展開可能にする     |         `boolean`          |  `false`  |
| arrowPosition | 矢印インジケーターの位置                 |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | 未制御状態のデフォルト値                 | `string` `string[]` `null` |             |
| value         | 制御状態の現在の値                       | `string` `string[]` `null` |             |
| onUpdate      | 状態が変更されたときに呼び出されるコールバック関数 |         `Function`         |             |
| ariaLevel     | アクセシビリティのための見出しレベル     |          `number`          |    `3`    |
| className     | CSS クラス名                             |          `string`          |             |
| qa            | テストに使用される HTML `data-qa` 属性   |          `string`          |             |

### Accordion.Item

| 名前            | 説明                                 |       型        | デフォルト |
| :-------------- | :----------------------------------- | :-------------: | :-------: |
| value           | アイテムの一意の識別子               |     `string`      |           |
| summary         | アコーディオンアイテムのヘッダー     | `React.ReactNode` |           |
| expanded        | 制御された展開状態                   |     `boolean`     |           |
| defaultExpanded | デフォルトの展開状態                 |     `boolean`     |           |
| disabled        | アコーディオンアイテムを無効にする   |     `boolean`     | `false` |
| keepMounted     | 折りたたまれた状態でもコンテンツをDOMに保持する |     `boolean`     |           |
| onUpdate        | アイテムの状態が変更されたときに呼び出されるコールバック関数 |    `Function`     |           |
| className       | CSS クラス名                         |     `string`      |           |
| qa              | テストに使用される HTML `data-qa` 属性 |     `string`      |           |

### Accordion.Summary
GRAVITY_TRANSLATION_BLOCK_17_END

| 名前     | 説明                                                                                             | 型                                             | デフォルト                                                                                             |
| :------- | :----------------------------------------------------------------------------------------------- | :---------------------------------------------: | :-----------------------------------------------------------------------------------------------------: |
| children | カスタムサマリーレンダリング関数                                                                   | `(props, defaultSummary) => React.ReactElement` |                                                                                                         |
| qa       | HTMLの`data-qa`属性。テストに使用されます。`Accordion.Item`で`qa`が渡された場合にのみ機能します。 |                    `string`                     | `Accordion.Item`で`qa`が渡された場合は`${accordion-item}-summary`、そうでない場合は`disclosure-summary` |

## CSS API

| 名前                           | 説明                               |
| :----------------------------- | :--------------------------------- |
| `--g-accordion-padding-inline` | アコーディオンのインライン（水平）パディング |