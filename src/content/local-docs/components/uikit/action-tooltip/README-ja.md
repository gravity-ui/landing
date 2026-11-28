GRAVITY_TRANSLATION_BLOCK_0_END

説明的なテキストがないアクションボタン（例：アイコンボタン）のラベル付けのための[`Tooltip`](../Tooltip/README.md)。

## 使用方法

```tsx
import {ActionTooltip} from '@gravity-ui/uikit';

<ActionTooltip title="アクション">
  <div tabIndex={0}>アンカー</div>
</ActionTooltip>;
```

## アンカー

`ActionTooltip` を機能させるには、`ref` プロパティを `HTMLElement` に受け入れ、`HTMLElement` のその他のプロパティを受け入れる有効な `ReactElement` を子として渡す必要があります。

または、子として関数を渡して、基になるコンポーネントに `ref` とプロパティを手動で提供することもできます。

```tsx
import {ActionTooltip} from '@gravity-ui/uikit';

<ActionTooltip title="アクション">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</ActionTooltip>;
```

## 制御された状態

デフォルトでは、`ActionTooltip` はアンカーをホバーすることで開閉します。この動作を変更して、開いた状態を手動で設定できます。
`open` プロパティに状態を渡し、`onOpenChange` コールバックから変更します。
`onOpenChange` コールバックは次のシグネチャを持ちます: `(open: boolean, event?: Event, reason: 'hover' | 'focus') => void`。

## 遅延グループ

`Tooltip` と同様に、`ActionTooltip` はアプリの他のツールチップと開く遅延を共有します。ツールバーの最初のツールチップは `openDelay` を支払い、その隣接するツールチップはグループがウォームな間は即座に開きます。詳細は `Tooltip` の [遅延グループ](../Tooltip/README.md#delay-group) セクションを参照してください。

## プロパティ

| 名前          | 説明                                                                                     |                       タイプ                       |     デフォルト     |
| :------------ | :----------------------------------------------------------------------------------------------- | :----------------------------------------------: | :-------------: |
| children      | `ActionTooltip` のアンカー要素                                                          |         `React.ReactElement` `Function`          |                 |
| className     | `class` HTML 属性                                                                          |                     `string`                     |                 |
| closeDelay    | ホバー終了後に `ActionTooltip` を非表示にするまでの遅延ミリ秒数                           |                     `number`                     |       `0`       |
| container     | `Portal` を介してコンポーネントがマウントされる DOM 要素                                          |                  `HTMLElement`                   | `document.body` |
| description   | 説明コンテンツ                                                                             |                `React.ReactNode`                 |                 |
| disablePortal | `Portal` の使用を無効にする                                                                         |                    `boolean`                     |     `false`     |
| disabled      | `ActionTooltip` の開くのを防ぐ                                                        |                    `boolean`                     |                 |
| hotkey        | 右上に表示される `Hotkey` 値                                                                               |   [`Hotkey` 値](../Hotkey/README.md#value)    |                 |
| offset        | アンカーからの `ActionTooltip` のオフセット                                                          |                     `number`                     |       `4`       |
| onOpenChange  | 開いている状態の変更を処理するコールバック                                                            |                    `Function`                    |                 |
| open          | コントロールされた開いている状態                                                                           |                    `boolean`                     |                 |
| openDelay     | ホバー開始後に `ActionTooltip` を表示するまでの遅延ミリ秒数                        |                     `number`                     |     `1000`      |
| placement     | アンカーに対する `ActionTooltip` の位置                                                 | [`PopupPlacement`](../Popup/README.md#placement) |    `bottom`     |
| qa            | テストに使用される `data-qa` HTML 属性                                                      |                     `string`                     |                 |
| rest          | 開く前にカーソルが静止している必要がある時間（ミリ秒）。                                        |                     `number`                     |       `0`       |
| strategy      | 使用する CSS の `position` プロパティのタイプ。                                                       |                `absolute` `fixed`                |   `absolute`    |
| style         | `style` HTML 属性                                                                          |              `React.CSSProperties`               |                 |
| title         | タイトルコンテンツ                                                                                   |                     `string`                     |                 |
| trigger       | 開くのをトリガーするイベントタイプ。デフォルトの `all` 値は `hover` と `focus` の両方を参照します。 |                `"all"` `"focus"`                 |     `"all"`     |