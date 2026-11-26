GRAVITY_TRANSLATION_BLOCK_0_END

`ActionsPanel` を使用して、複数のボタンを横並びに表示します。
スペースが足りない場合、収まらないボタンはオーバーフローメニューに追加されます。

## 例

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## アクションアイコン

アイコンを設定するには、`Button` または `DropdownMenu` のプロパティを使用します。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 注意

`renderNote` プロパティを使用して、注釈を表示します。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## ドロップダウンメニュー内のグループ

ドロップダウンメニューでアクションをグループ化するには、`action.dropdown.group` を使用します。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## アクションサブメニューとネストされたドロップダウンメニュー

以下の `actions` の例と、`DropdownMenu` コンポーネントに関するドキュメントを参照してください。

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## プロパティ

| 名前          | 説明                                             |          型           | デフォルト |
| :------------ | :----------------------------------------------- | :-------------------: | :------: |
| actions       | アクションの配列                                 |  `ActionsPanelItem[]` |          |
| onClose       | オプションのクローズボタンクリックハンドラー     |      `() => void`     |          |
| renderNote    | 注釈の内容を表示するためのオプションのレンダープロップ | `() => React.ReactNode` |          |
| className     | オプションのHTML `class` 属性                    |       `string`        |          |
| noteClassName | オプションのHTML `class` 属性                    |       `string`        |          |
| maxRowActions | 行あたりの最大アクション数                       |       `number`        |   `4`    |

## ActionsPanelItem:

| 名前      | 説明                                     |                    型                    | デフォルト |
| :-------- | :--------------------------------------- | :--------------------------------------: | :------: |
| id        | 一意のアクションID                       |                  `string`                  |          |
| dropdown  | オーバーフローメニュー内のドロップダウンアクションの設定 | `{item: DropdownMenuItem; group?: string}` |          |
| button    | ボタンアクションの設定                   |           `{props: ButtonProps}`           |          |
| collapsed | true の場合、アイテムは常にドロップダウン内に表示される |                 `boolean`                  |          |