`TableColumnSetup` コンポーネントは、テーブル列の表示/非表示および順序を設定するためのユーザーインターフェースを提供します。このコンポーネントは、ボタンを表示し、それをクリックすると利用可能な列のリストが表示されるポップアップが開きます。ユーザーはここで列の表示/非表示を切り替えたり、ドラッグアンドドロップで順序を変更したりできます。

```tsx
import {TableColumnSetup} from '@gravity-ui/uikit/legacy';
```

このコンポーネントはレガシーです。新機能は [`@gravity-ui/table`](https://github.com/gravity-ui/table) に移行してください。v8 への移行ガイドを参照してください:
[migration guide to v8](../../../../docs/migration-to-v8.md#table-and-tablecolumnsetup)。
`@gravity-ui/uikit/legacy` の他のコンポーネントと同様に、パッケージと一緒にオプションのピア依存関係である `@hello-pangea/dnd`、`react-window`、および `react-virtualized-auto-sizer` をインストールする必要があります。エントリーポイントはこれらすべてをロードします。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## 並べ替え可能な列

`sortable` プロパティを `true` に設定することで、ドラッグアンドドロップ機能を使用してユーザーが列の順序を変更できるようにします。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## 適用モード

`hideApplyButton` プロパティを使用して、変更がいつ適用されるかを制御します。

- `true` - ユーザーが列を切り替えると、変更はすぐに適用されます。
- `false` - ユーザーが「適用」ボタンをクリックした場合にのみ、変更が適用されます。

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
| onUpdate        | 列設定が変更されたときに呼び出されるコールバック                                         |          `(items: TableColumnSetupItem[]) => void`          |         |
| disabled        | スイッチャーボタンを無効にします                                                       |                          `boolean`                          | `false` |
| sortable        | 列のドラッグアンドドロップによる並べ替えを有効にします                                                 |                          `boolean`                          | `true`  |
| hideApplyButton | 変更をいつ適用するか: 即時または「適用」ボタンによる手動                                                  |                          `boolean`                          | `false` |
| showStatus      | スイッチャーボタンに選択された/合計列数を表示します                                                   |                          `boolean`                          | `false` |
| popupWidth      | ポップアップの幅                                                              |                      `number \| 'fit'`                      |         |
| popupPlacement  | トリガーに対するポップアップの配置                                                          |    [`PopupPlacement`](../../Popup/README.md#properties)     |         |
| renderSwitcher  | スイッチャーボタンのカスタムレンダリング関数                                                      | `(props: SwitcherProps) => React.ReactElement \| undefined` |         |
| switcher        | **非推奨。** `renderSwitcher` を使用してください                                                  |              `React.ReactElement \| undefined`              |         |
| getItemTitle    | アイテムのタイトルを取得する関数                                                            |      `(item: TableColumnSetupItem) => React.ReactNode`      |         |
| className       | ルート要素のカスタムCSSクラス                                                          |                          `string`                           |         |

### TableColumnSetupItem

| 名前     | 説明                                       |        タイプ         | デフォルト |
| :------- | :------------------------------------------------ | :---------------------------------: | :-----: |
| id       | カラムの一意な識別子                  |      `string`       |         |
| title    | カラムの表示タイトル                      |  `React.ReactNode`  |         |
| selected | カラムが現在表示されているかどうか           |      `boolean`      |         |
| required | カラムが必須かどうか（非表示にできない） |      `boolean`      |         |
| sticky   | カラムの固定配置                 | `'left' \| 'right'` |         |

### SwitcherProps

| 名前      | 説明                            |                   タイプ                    |
| :-------- | :------------------------------------- | :---------------------------------------: |
| onClick   | スイッチャーのクリックイベントハンドラ   |  `React.MouseEventHandler<HTMLElement>`   |
| onKeyDown | スイッチャーのKeyDownイベントハンドラ | `React.KeyboardEventHandler<HTMLElement>` |