<!--GITHUB_BLOCK-->

# Menu

<!--/GITHUB_BLOCK-->

`Menu` コンポーネントを使用すると、アクションリストのビューを簡単に作成できます。

```tsx
import {Menu} from '@gravity-ui/uikit';
```

アイテム (`Menu.Item`) とグループ (`Menu.Group`) 専用のコンポーネントがあります。これらを組み合わせて、より複雑なメニューを作成できます。

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item>First</Menu.Item>
            <Menu.Item>Second</Menu.Item>
            <Menu.Group label="Group">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item>First</Menu.Item>
  <Menu.Item>Second</Menu.Item>
  <Menu.Group label="Group">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Size

このプロパティは、メニューのサイズを選択するために使用されます。デフォルト値は `m` です。

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Menu size="s">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
            <Menu size="m">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
            <Menu size="l">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
            <Menu size="xl">
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
            </Menu>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu size="s">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>

<Menu size="m">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>

<Menu size="l">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>

<Menu size="xl">
    <Menu.Item>First</Menu.Item>
    <Menu.Item>Second</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

## Properties

| Name      | Description                                |           Type           | Default |
| :-------- | :----------------------------------------- | :----------------------: | :-----: |
| size      | Menu size                                  | `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| children  | Child element                              |    `React.ReactNode`     |         |
| className | `class` HTML attribute                     |         `string`         |         |
| style     | `style` HTML attribute                     |  `React.CSSProperties`   |         |
| qa        | `data-qa` HTML attribute, used for testing |         `string`         |         |

## Menu.Item

このプロパティは、メニューアイテムをレンダリングするために使用されます。

### Icon

`iconStart` または `iconEnd` プロパティを使用して、メニューアイテムの先頭または末尾にアイコンを表示します。

<!--SANDBOX
import {Gear, TriangleExclamation} from '@gravity-ui/icons';
import {Icon, Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Menu>
                <Menu.Item iconStart={<Icon size={16} data={Gear} />}>Item with icon</Menu.Item>
                <Menu.Item>Item without icon</Menu.Item>
            </Menu>
            <Menu>
                <Menu.Item iconEnd={<Icon size={16} data={TriangleExclamation} />}>
                    Item with icon
                </Menu.Item>
                <Menu.Item>Item without icon</Menu.Item>
            </Menu>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item iconStart={<Icon size={16} data={GearIcon} />}>Item with icon</Menu.Item>
  <Menu.Item>Item without icon</Menu.Item>
</Menu>
```

```tsx
<Menu>
  <Menu.Item iconEnd={<Icon size={16} data={TriangleExclamation} />}>Item with icon</Menu.Item>
  <Menu.Item>Item without icon</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### States

このプロパティを使用すると、特定のメニューアイテムを有効または無効 (グレーアウト) にできます。

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item disabled>First</Menu.Item>
            <Menu.Item>Second</Menu.Item>
            <Menu.Item selected>Third</Menu.Item>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item disabled>First</Menu.Item>
  <Menu.Item>Second</Menu.Item>
  <Menu.Item selected>Third</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Theme

これにより、メニューアイテムのテーマを変更できます。デフォルトのテーマは `normal` です。

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item theme="danger">First</Menu.Item>
            <Menu.Item theme="normal">Second</Menu.Item>
            <Menu.Item>Third</Menu.Item>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item theme="danger">First</Menu.Item>
  <Menu.Item theme="normal">Second</Menu.Item>
  <Menu.Item>Third</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### Properties

| 名前             | 説明                                       |           型            |  デフォルト   |
| :--------------- | :----------------------------------------- | :---------------------: | :---------: |
| iconStart        | メニュー項目のテキストの前のアイコン       |        `ReactNode`        |             |
| iconEnd          | メニュー項目のテキストの後のアイコン       |        `ReactNode`        |             |
| selected         | メニュー項目が選択されているフラグ         |         `boolean`         |  `false`   |
| disabled         | メニュー項目が無効になっているフラグ       |         `boolean`         |  `false`   |
| active           | メニュー項目がアクティブなフラグ           |         `boolean`         |  `false`   |
| href             | URL                                        |         `string`          |             |
| title            | title属性                                  |         `string`          |             |
| target           | target属性                                 |         `string`          |             |
| rel              | rel属性                                    |         `string`          |             |
| onClick          | onclickイベントのハンドラ                    | `React.MouseEventHandler` |             |
| theme            | メニュー項目のテーマ                       |   `"normal"` `"danger"`   | `"normal"` |
| children         | 子要素                                     |     `React.ReactNode`     |             |
| className        | ルート要素の`class` HTML属性               |         `string`          |             |
| contentClassName | コンテンツ要素の`class` HTML属性           |         `string`          |             |
| style            | `style` HTML属性                           |   `React.CSSProperties`   |             |
| qa               | テストに使用される`data-qa` HTML属性       |         `string`          |             |
| extraProps       | 追加のHTML属性                             |         `Record`          |             |

## Menu.Group

単一のメニュー内で項目をトピックごとにグループ化できます。

<!--SANDBOX
import {Menu} from '@gravity-ui/uikit';

export default function () {
    return (
        <Menu>
            <Menu.Item>First</Menu.Item>
            <Menu.Group label="Group One">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
            <Menu.Group label="Group Two">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
            <Menu.Item>Middle</Menu.Item>
            <Menu.Group label="Group Three">
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
            </Menu.Group>
            <Menu.Item>Last</Menu.Item>
        </Menu>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Menu>
  <Menu.Item>First</Menu.Item>
  <Menu.Group label="Group One">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
  <Menu.Group label="Group Two">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
  <Menu.Item>Middle</Menu.Item>
  <Menu.Group label="Group Three">
    <Menu.Item>One</Menu.Item>
    <Menu.Item>Two</Menu.Item>
  </Menu.Group>
  <Menu.Item>Last</Menu.Item>
</Menu>
```

<!--/GITHUB_BLOCK-->

### プロパティ

| 名前      | 説明                   |         型          | デフォルト |
| :-------- | :--------------------- | :-----------------: | :------: |
| label     | メニューグループのラベル |       `string`        |          |
| children  | 子要素                 |   `React.ReactNode`   |          |
| className | `class` HTML属性       |       `string`        |          |
| style     | `style` HTML属性       | `React.CSSProperties` |          |
| qa        | テストに使用される`data-qa` HTML属性 |       `string`        |          |
