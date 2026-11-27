<!--GITHUB_BLOCK-->

# TableColumnSetup

<!--/GITHUB_BLOCK-->

`TableColumnSetup` コンポーネントは、テーブル列の表示と順序を設定するためのユーザーインターフェイスを提供します。ボタンを表示し、クリックすると利用可能な列のリストを含むポップアップが開きます。これにより、ユーザーは列を表示/非表示にし、オプションでドラッグアンドドロップで並べ替えることができます。

```tsx
import {TableColumnSetup} from '@gravity-ui/uikit';
```

<!--SANDBOX
import {TableColumnSetup} from '@gravity-ui/uikit';

const items = [
    {id: 'name', title: 'Name', selected: true, required: true},
    {id: 'email', title: 'Email', selected: true},
    {id: 'phone', title: 'Phone', selected: false},
];

export default function () {
    return <TableColumnSetup items={items} onUpdate={(updatedItems) => console.log(updatedItems)} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const items = [
  {id: 'name', title: 'Name', selected: true, required: true},
  {id: 'email', title: 'Email', selected: true},
  {id: 'phone', title: 'Phone', selected: false},
];

<TableColumnSetup items={items} onUpdate={(updatedItems) => console.log(updatedItems)} />;
```

<!--/GITHUB_BLOCK-->

## 並べ替え可能な列

`sortable` プロパティを `true` に設定することで、ドラッグアンドドロップ機能を使用して列の順序を変更できるようにします。

<!--SANDBOX
import {TableColumnSetup} from '@gravity-ui/uikit';

const items = [
    {id: 'name', title: 'Name', selected: true, required: true},
    {id: 'email', title: 'Email', selected: true},
    {id: 'phone', title: 'Phone', selected: false},
];

export default function () {
    return (
        <TableColumnSetup
            items={items}
            sortable
            onUpdate={(updatedItems) => console.log(updatedItems)}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TableColumnSetup items={items} sortable onUpdate={(updatedItems) => console.log(updatedItems)} />
```

<!--/GITHUB_BLOCK-->

## 適用モード

`hideApplyButton` プロパティを使用して、変更がいつ適用されるかを制御します。

- `true` - ユーザーが列を切り替えると、変更はすぐに適用されます。
- `false` - 変更は、ユーザーが「適用」ボタンをクリックしたときにのみ適用されます。

<!--SANDBOX
import {TableColumnSetup} from '@gravity-ui/uikit';

const items = [
    {id: 'name', title: 'Name', selected: true, required: true},
    {id: 'email', title: 'Email', selected: true},
    {id: 'phone', title: 'Phone', selected: false},
];

export default function () {
    return (
        <TableColumnSetup
            items={items}
            hideApplyButton
            onUpdate={(updatedItems) => console.log(updatedItems)}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TableColumnSetup
  items={items}
  hideApplyButton
  onUpdate={(updatedItems) => console.log(updatedItems)}
/>
```

<!--/GITHUB_BLOCK-->

## ステータス表示

`showStatus` プロパティを有効にすることで、スイッチャーボタンに選択された列の数を表示します。

<!--SANDBOX
import {TableColumnSetup} from '@gravity-ui/uikit';

const items = [
    {id: 'name', title: 'Name', selected: true, required: true},
    {id: 'email', title: 'Email', selected: true},
    {id: 'phone', title: 'Phone', selected: false},
];

export default function () {
    return <TableColumnSetup items={items} showStatus onUpdate={(updatedItems) => console.log(updatedItems)} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TableColumnSetup
  items={items}
  showStatus={true}
  onUpdate={(updatedItems) => console.log(updatedItems)}
/>
```

<!--/GITHUB_BLOCK-->

## カスタムスイッチャー

`renderSwitcher` プロパティを使用して、トリガーボタンをカスタマイズします。

<!--SANDBOX
import {Button, TableColumnSetup} from '@gravity-ui/uikit';

const items = [
    {id: 'name', title: 'Name', selected: true, required: true},
    {id: 'email', title: 'Email', selected: true},
    {id: 'phone', title: 'Phone', selected: false},
];

export default function () {
    return (
        <TableColumnSetup
            items={items}
            renderSwitcher={({onClick, onKeyDown}) => (
                <Button onClick={onClick} onKeyDown={onKeyDown} view="outlined">
                    Configure Columns
                </Button>
            )}
            onUpdate={(updatedItems) => console.log(updatedItems)}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<TableColumnSetup
  items={items}
  renderSwitcher={({onClick, onKeyDown}) => (
    <Button onClick={onClick} onKeyDown={onKeyDown} view="outlined">
      Configure Columns
    </Button>
  )}
  onUpdate={(updatedItems) => console.log(updatedItems)}
/>
```

<!--/GITHUB_BLOCK-->

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

| 名前      | 説明                                   |                   タイプ                    |
| :-------- | :------------------------------------- | :---------------------------------------: |
| onClick   | スイッチャーのクリックイベントハンドラ   |  `React.MouseEventHandler<HTMLElement>`   |
| onKeyDown | スイッチャーのキーダウンイベントハンドラ | `React.KeyboardEventHandler<HTMLElement>` |
