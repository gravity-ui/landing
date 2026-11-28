# Menu

`Menu` コンポーネントは、通常はボタンであるトリガーとのインタラクション時に、`Popup` 内に選択肢のリストを表示します。

関連するコンポーネントのコレクションがあります。

- `Menu` - メニューのコンテナ
- `MenuItem` - メニューから選択するオプション
- `MenuDivider` - オプションをグループ化するための区切り線
- `MenuTrigger` - 組み込みのデフォルトトリガー、省略記号アイコン付きの `Button`

## 基本的な使い方

```jsx
import {Menu, MenuItem, MenuDivider, MenuTrigger} from '@gravity-ui/uikit';

function BasicMenu() {
  return (
    <Menu trigger={<MenuTrigger />}>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Move</MenuItem>
      <MenuDivider />
      <MenuItem theme="danger">Delete</MenuItem>
    </Menu>
  );
}
```

## カスタムトリガー

基本的な `HTMLAttributes` をプロパティとして、および `HTMLElement` 用の `ref` を受け入れるコンポーネントであれば、どのようなコンポーネントでもトリガーとしてレンダリングできます。
より複雑なコンポーネントの場合は、`trigger` プロパティの関数バリアントを使用できます。このバリアントは、最初の引数として `triggerProps`、2番目の引数として `triggerRef` を持ち、これをコンポーネントに渡す必要があります。

## コンテキストメニュー

コンテキストメニューパターンを実装するには、トリガーとして「仮想要素」を使用する必要があります。

```jsx
import {Menu, MenuItem, MenuDivider, MenuTrigger} from '@gravity-ui/uikit';

function ContextMenu() {
  const [trigger, setTrigger] = React.useState(null);

  React.useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      setTrigger({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: event.clientX,
            y: event.clientY,
            top: event.clientY,
            right: event.clientX,
            bottom: event.clientY,
            left: event.clientX,
          };
        },
      });
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <Menu trigger={trigger}>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Move</MenuItem>
      <MenuDivider />
      <MenuItem theme="danger">Delete</MenuItem>
    </Menu>
  );
}
```

## インラインモード

デフォルトでは、`Menu` は `Popup` 内にレンダリングされます。しかし、独自のコンテナで `inline` プロパティを使用してインラインでレンダリングすることもできます。

## プロパティ

| 名前            | 説明                                     |                                              タイプ                                               |     デフォルト      |
| :-------------- | :---------------------------------------------- | :---------------------------------------------------------------------------------------------: | :--------------: |
| className       | HTML `class` 属性                          |                                            `string`                                             |                  |
| style           | HTML `style` 属性                          |                                      `React.CSSProperties`                                      |                  |
| aria-label      | メニューのアクセシブル名                    |                                            `string`                                             |                  |
| aria-labelledby | メニューを名前付ける要素のID            |                                            `string`                                             |                  |
| qa              | テストID (`data-qa` 属性)                   |                                            `string`                                             |                  |
| open            | `open` の制御された状態                     |                                            `boolean`                                            |                  |
| defaultOpen     | `open` の制御されていない状態                   |                                            `boolean`                                            |                  |
| children        | メニュー関連コンポーネント（アイテム、区切り線など） |                                        `React.ReactNode`                                        |                  |
| disabled        | 無効状態                                  |                                            `boolean`                                            |     `false`      |
| inline          | メニューをインラインでレンダリングする        |                                            `boolean`                                            |     `false`      |
| trigger         | メニューを開くトリガー要素            | `React.ReactElement` `(triggerProps, triggerRef) => React.ReactElement` `VirtualElement` `null` |                  |
| placement       | ポップアップの配置                         |                                        `PopupPlacement`                                         | `"bottom-start"` |
| onOpenChange    | `open` 状態変更のコールバック                |                `(open: boolean, event: Event, reason: OpenChangeReason) => void`                |                  |
| size            | `Menu` のサイズ                                 |                                    `"s"` `"m"` `"l"` `"xl"`                                     |      `"m"`       |

### MenuItem

`icon` プロパティに明示的なサイズが指定されていない `Icon` が渡された場合、そのサイズは `Menu` のサイズに応じて自動的に選択されます。それを上書きするには、`Icon` の `size`、`width`、または `height` を明示的に設定してください。

`MenuItem` は、これらのプロパティに加えて、有効な `button` または `a` 要素のプロパティをすべて受け入れます。

| 名前      | 説明                               |                                Type                                |  デフォルト   |
| :-------- | :---------------------------------- | :----------------------------------------------------------------: | :--------: |
| qa        | テスト ID (`data-qa` 属性)       |                              `string`                              |            |
| theme     | `MenuItem` のテーマ                | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` | `"normal"` |
| selected  | 選択状態 (`menuitemcheckbox`) |                             `boolean`                              |            |
| disabled  | 無効状態                      |                             `boolean`                              |  `false`   |
| icon      | アイコンのレンダリングスロット             |                        `React.ReactElement`                        |            |
| arrow     | ネストされたメニューの矢印のレンダリングスロット |                        `React.ReactElement`                        |            |
| children  | コンテンツ                             |                         `React.ReactNode`                          |            |
| component | カスタムルートコンポーネント               |                        `React.ElementType`                         |            |

### MenuTrigger

`MenuTrigger` は、これらのプロパティに加えて、`Button` コンポーネントのプロパティをすべて受け入れます。

| 名前 | 説明                               |            Type             |    デフォルト     |
| :--- | :---------------------------------- | :-------------------------: | :------------: |
| icon | 表示するアイコンの種類 | `"horizontal"` `"vertical"` | `"horizontal"` |