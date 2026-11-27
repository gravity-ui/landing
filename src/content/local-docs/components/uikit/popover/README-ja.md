`Popover` は、子要素にアンカーされ、ホバーまたはクリックで開く、オプションでインタラクティブなフローティングコンテンツ（テキスト、リンク、またはボタン）を表示します。これは、`children` プロパティ経由で渡された `ReactElement` をトリガーとして使用し、組み込みのトリガーインタラクティビティを備えた [`Popup`](../Popup/README.md) をラップします。

```tsx
import {Popover} from '@gravity-ui/uikit';
```

レガシー `Popover` から移行しますか？ [移行ガイド](https://github.com/gravity-ui/uikit/blob/main/docs/migration-from-legacy-popover.md) を参照してください。

## 使用方法

HTML 要素またはネイティブ DOM ハンドラと ARIA 属性をプロパティ（例: `Button`）で受け入れる任意のコンポーネントを `Popover` コンポーネントでラップします。コンテンツは `content` プロパティに入れます。

```jsx
import {Button, Popover} from '@gravity-ui/uikit';

<Popover content="Content">
  <Button>Click or hover me</Button>
</Popover>;
```

## プロパティ

| 名前                 | 説明                                                                                                          |                                タイプ                                 |     デフォルト     |
| :------------------- | :------------------------------------------------------------------------------------------------------------ | :-----------------------------------------------------------------: | :-------------: |
| children             | DOMハンドラを受け入れる`ReactNode`                                                                            |                          `React.ReactNode`                          |                 |
| className            | ルートノードのHTML `class`属性                                                                                |                              `string`                               |                 |
| container            | `Portal`を介してコンポーネントがマウントされるDOM要素                                                         |                            `HTMLElement`                            | `document.body` |
| content              | `Popover`内でレンダリングされる任意のコンテンツ                                                               |                          `React.ReactNode`                          |                 |
| contentClassName     | コンテンツノードのHTML `class`属性                                                                            |                              `string`                               |                 |
| delay                | `open`状態を変更する前に指定されたミリ秒待機                                                                |             `number` `{open?: number; close?: number}`              |                 |
| disableEscapeKeyDown | `Esc`キーダウンで閉じない                                                                                    |                              `boolean`                              |     `false`     |
| disableLayer         | スタッキングフローティング要素で`LayerManager`を使用しない                                                    |                              `boolean`                              |     `false`     |
| disableOutsideClick  | 外部クリックで閉じない                                                                                        |                              `boolean`                              |     `false`     |
| disablePortal        | `Portal`の使用を無効にする                                                                                    |                              `boolean`                              |     `false`     |
| disabled             | いかなるイベントでも開かない                                                                                  |                              `boolean`                              |     `false`     |
| enableSafePolygon    | トリガーから`Popover`コンテンツへのポインタ移動時に、閉じないように動的なポリゴン領域を使用する                  |                              `boolean`                              |     `false`     |
| hasArrow             | トリガーを指す矢印をレンダリングする                                                                          |                              `boolean`                              |     `false`     |
| keepMounted          | 非表示時に`Popover`はDOMから削除されない                                                                       |                              `boolean`                              |     `false`     |
| middlewares          | `Floating UI`ミドルウェア。設定されている場合、デフォルトのミドルウェアを完全に上書きします。                    |                         `Array<Middleware>`                         |                 |
| modal                | フォーカストラップ動作を有効にする                                                                             |                              `boolean`                              |     `false`     |
| offset               | `Floating UI`オフセット値                                                                                     |                           `PopoverOffset`                           |       `4`       |
| onOpenChange         | `open`状態が変更されたときに呼び出される関数                                                                  |                             `Function`                              |                 |
| open                 | `open`状態を手動で制御する                                                                                    |                              `boolean`                              |                 |
| placement            | `Floating UI`配置                                                                                             | `Placement` `Array<Placement>` `"auto"` `"auto-start"` `"auto-end"` |     `"top"`     |
| qa                   | テスト属性 (`data-qa`)                                                                                        |                              `string`                               |                 |
| rest                 | カーソルがアイドル状態になってから開くまでの時間（ミリ秒）。                                                    |                              `number`                               |       `0`       |
| strategy             | `Floating UI`ポジショニング戦略                                                                                |                       `"absolute"` `"fixed"`                        |  `"absolute"`   |
| style                | ルートノードのHTML `style`属性                                                                                |                              `string`                               |                 |
| toggle               | 重複クリックで`open`状態をトグルするかどうか                                                                  |                              `boolean`                              |     `true`      |
| trigger              | `Popover`を開くべきイベント。デフォルトの`all`値は`hover`と`click`の両方を参照します                            |                          `"all"` `"click"`                          |     `"all"`     |