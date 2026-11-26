Tabs コンポーネントは、コンテンツの探索、整理、および異なるビューの切り替えに使用されます。

```tsx
import {TabProvider, TabList, Tab, TabPanel} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### コンポーネント

- [TabProvider](#tabprovider)
- [TabList](#tablist)
- [Tab](#tab)
- [TabPanel](#tabpanel)

## TabProvider

タブ選択機能を提供するコンポーネント

## プロパティ

| 名前     | 説明                                       |           タイプ            | デフォルト |
| :------- | :----------------------------------------- | :-----------------------: | :-----: |
| children | タブとタブパネルのリスト、おそらくいくつかのラッパーを含む |     `React.ReactNode`     |         |
| value    | アクティブなタブの値                       |         `string`          |         |
| onUpdate | タブ更新ハンドラー                         | `(value: string) => void` |         |

## TabList

`tabs` のセットのコンテナとして機能するコンポーネント

### サイズ

`tabs` のサイズを制御するには、`size` プロパティを使用します。デフォルトのサイズは `m` です。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### プロパティ

`TabList` は、これらのプロパティに加えて、有効な `div` 要素のプロパティをすべて受け入れます。

| 名前            | 説明                                                                            |               タイプ               | デフォルト  |
| :-------------- | :------------------------------------------------------------------------------ | :------------------------------: | :------: |
| children        | タブのリスト、おそらくいくつかのラッパーを含む                                  |        `React.ReactNode`         |          |
| value           | アクティブなタブの値                                                            |             `string`             |          |
| onUpdate        | タブ更新ハンドラー                                                              |    `(value: string) => void`     |          |
| className       | 要素の CSS クラス                                                               |             `string`             |          |
| activateOnFocus | フォーカス時にタブをアクティブにする。パネルの内容をすぐに表示できる場合にのみ使用してください |            `boolean`             | `false`  |
| size            | 要素のサイズ                                                                    |        `"m"` `"l"` `"xl"`        |  `"m"`   |
| contentOverflow | 水平方向に収まらないアイテムの処理方法（折り返し、スクロール、または **More** メニュー） | `"wrap"` `"scroll"` `"collapse"` | `"wrap"` |
| moreLabel       | アクティブなタブがリストに表示されている場合の折り返しオーバーフロートリガーのラベル |        `React.ReactNode`         | `"More"` |
| qa              | テストで使用される HTML `data-qa` 属性                                          |             `string`             |          |

## Tab

タブアイテムをレンダリングするために使用されるコンポーネント。

### アイコン

タブアイテムのアイコンを表示する必要がある場合に使用します。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### ステート

タブアイテムには無効フラグがあります。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### カウンター

タブアイテムに数値を表示する必要がある場合に使用します。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### ラベル

タブアイテムのラベルを表示する必要がある場合に使用します。

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### コンテンツオーバーフロー

タブアイテムを折りたたむ必要がある場合に使用します。

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### プロパティ

`Tab` は、これらのプロパティに加えて、有効な `button` または `a` 要素のプロパティをすべて受け入れます。

| 名前      | 説明                             |        型         | デフォルト |
| :-------- | :------------------------------- | :---------------: | :-------: |
| value     | タブの値                         |      `string`     |           |
| title     | タブのタイトル                   |      `string`     |           |
| icon      | 先頭に表示されるアイコン         |  `React.ReactNode`  |           |
| counter   | 末尾に表示されるコンテンツ       |  `number` `string`  |           |
| href      | リンク先のURL                    |      `string `      |           |
| label     | 末尾に表示される`<Label>`        |  `React.ReactNode`  |           |
| disabled  | 非アクティブ状態                 |      `boolean`      |           |
| component | ルートコンポーネントをオーバーライド | `React.ElementType` |           |
| children  | タブのコンテンツ                 |  `React.ReactNode`  |           |
| qa        | テストで使用されるHTML `data-qa` 属性 |      `string`     |           |

## TabPanel

タブに関連付けられたコンテンツのコンテナ要素です。

### プロパティ

`TabPanel` は、有効な `div` 要素のプロパティに加えて、以下のプロパティを受け入れます。

| 名前     | 説明         |       型        | デフォルト |
| :------- | :----------- | :-------------: | :-------: |
| children | パネルのコンテンツ | `React.ReactNode` |           |
| value    | アクティブなタブの値 |     `string`    |           |
| qa       | テストで使用されるHTML `data-qa` 属性 |     `string`    |           |

## CSS API

| 名前                             | 説明             |
| :------------------------------- | :--------------- |
| `--g-tabs-border-width`          | タブの境界線の幅 |
| `--g-tabs-item-height`           | タブ項目の高さ   |
| `--g-tabs-item-border-width`     | タブ項目の境界線の幅 |
| `--g-tabs-item-gap`              | タブ間の距離     |
| `--g-tabs-vertical-item-height`  | 縦型タブ項目の高さ |
| `--g-tabs-vertical-item-padding` | 縦型タブ項目のパディング |