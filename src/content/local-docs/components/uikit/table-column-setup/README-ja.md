`TableColumnSetup` コンポーネントは、テーブル列の表示と順序を設定するためのユーザーインターフェイスを提供します。ボタンを表示し、クリックすると利用可能な列のリストを含むポップアップが開きます。これにより、ユーザーは列を表示/非表示にし、オプションでドラッグアンドドロップで並べ替えることができます。

```tsx
import {TableColumnSetup} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## 並べ替え可能な列

`sortable` プロパティを `true` に設定することで、ドラッグアンドドロップ機能を使用して列の順序を変更できるようにします。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## 適用モード

`hideApplyButton` プロパティを使用して、変更がいつ適用されるかを制御します。

- `true` - ユーザーが列を切り替えると、変更はすぐに適用されます。
- `false` - 変更は、ユーザーが「適用」ボタンをクリックしたときにのみ適用されます。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## ステータス表示

`showStatus` プロパティを有効にすることで、スイッチャーボタンに選択された列の数を表示します。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## カスタムスイッチャー

`renderSwitcher` プロパティを使用して、トリガーボタンをカスタマイズします。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## プロパティ

| 名前            | 説明                                                     |                            型                             | デフォルト |
| :-------------- | :-------------------------------------------------------------- | :---------------------------------------------------------: | :-----: |
| items           | 列設定項目の配列                                                            |                  `TableColumnSetupItem[]`                   |         |
| onUpdate        | 列の設定が変更されたときに呼び出されるコールバック                                        |          `(items: TableColumnSetupItem[]) => void`          |         |
| disabled        | スイッチャーボタンを無効にします                                                        |                          `boolean`                          | `false` |
| sortable        | 列のドラッグアンドドロップによる並べ替えを有効にします                                                |                          `boolean`                          | `true`  |
| hideApplyButton | 変更をいつ適用するか: 即時または「適用」ボタンによる手動                                            |                          `boolean`                          | `false` |
| showStatus      | スイッチャーボタンに選択済み/合計列数を表示します                                                 |                          `boolean`                          | `false` |
| popupWidth      | ポップアップの幅                                                              |                      `number \| 'fit'`                      |         |
| popupPlacement  | トリガーに対するポップアップの配置                                                        |      [`PopupPlacement`](../Popup/README.md#properties)      |         |
| renderSwitcher  | スイッチャーボタンのカスタムレンダリング関数                                                    | `(props: SwitcherProps) => React.ReactElement \| undefined` |         |
| switcher        | **非推奨。** `renderSwitcher` を使用してください                                                |              `React.ReactElement \| undefined`              |         |
| getItemTitle    | アイテムのタイトルを取得する関数                                                          |      `(item: TableColumnSetupItem) => React.ReactNode`      |         |
| className       | ルート要素のカスタムCSSクラス                                                           |                          `string`                           |         |

### TableColumnSetupItem

| 名前     | 説明                                       |        型         | デフォルト |
| :------- | :------------------------------------------------ | :-----------------: | :-----: |
| id       | 列の一意の識別子                                          |      `string`       |         |
| title    | 列の表示タイトル                                            |  `React.ReactNode`  |         |
| selected | 列が現在表示されているかどうか                                          |      `boolean`      |         |
| required | 列が必須かどうか（非表示にできない）                                      |      `boolean`      |         |
| sticky   | 列のスティッキー配置                                        | `'left' \| 'right'` |         |

### SwitcherProps
GRAVITY_TRANSLATION_BLOCK_10_END

| 名前      | 説明                                   |                   タイプ                    |
| :-------- | :------------------------------------- | :---------------------------------------: |
| onClick   | スイッチャーのクリックイベントハンドラ   |  `React.MouseEventHandler<HTMLElement>`   |
| onKeyDown | スイッチャーのキーダウンイベントハンドラ | `React.KeyboardEventHandler<HTMLElement>` |