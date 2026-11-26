`Menu` コンポーネントを使用すると、アクションリストのビューを簡単に作成できます。

```tsx
import {Menu} from '@gravity-ui/uikit';
```

アイテム (`Menu.Item`) とグループ (`Menu.Group`) 専用のコンポーネントがあります。これらを組み合わせて、より複雑なメニューを作成できます。

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Size

このプロパティは、メニューのサイズを選択するために使用されます。デフォルト値は `m` です。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

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

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### States

このプロパティを使用すると、特定のメニューアイテムを有効または無効 (グレーアウト) にできます。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Theme

これにより、メニューアイテムのテーマを変更できます。デフォルトのテーマは `normal` です。

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

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

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### プロパティ

| 名前      | 説明                   |         型          | デフォルト |
| :-------- | :--------------------- | :-----------------: | :------: |
| label     | メニューグループのラベル |       `string`        |          |
| children  | 子要素                 |   `React.ReactNode`   |          |
| className | `class` HTML属性       |       `string`        |          |
| style     | `style` HTML属性       | `React.CSSProperties` |          |
| qa        | テストに使用される`data-qa` HTML属性 |       `string`        |          |