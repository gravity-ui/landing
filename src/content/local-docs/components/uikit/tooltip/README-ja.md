GRAVITY_TRANSLATION_BLOCK_0_END

シンプルなテキストチップで、子ノードをアンカーとして使用します。このコンポーネントはテキストコンテンツのみを受け入れ、ブラウザの `title` 属性の代替として、サイズが小さく表示遅延が長いため、優れた選択肢となる可能性があります。

## 使用方法

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Content">
  <div tabIndex={0}>Anchor</div>
</Tooltip>;
```

## アンカー

`Tooltip` を機能させるには、`ref` プロパティを `HTMLElement` 用に受け入れ、その他のプロパティを `HTMLElement` 用に受け入れる有効な `ReactElement` を子として渡す必要があります。

または、子として関数を渡して、基になるコンポーネントに `ref` とプロパティを手動で提供することもできます。

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Content">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</Tooltip>;
```

## 制御された状態

デフォルトでは、`Tooltip` はアンカーをホバーすることで開閉します。この動作を変更して、開いている状態を手動で設定できます。
状態を `open` プロパティに渡し、`onOpenChange` コールバックから変更します。
`onOpenChange` コールバックのシグネチャは次のとおりです: `(open: boolean, event?: Event, reason: 'hover' | 'focus') => void`。

## Role

`Tooltip` は `role` プロパティを受け入れ、アクセシビリティの観点からどのように動作すべきかを変更します。
アンカーに独自のテキストがある場合は `tooltip` ロールを使用し、それ以外の場合（例: アイコンボタン）は `label` ロールを使用します。

## 遅延グループ

`Provider` の下でレンダリングされるすべてのツールチップは、開く遅延を共有します。最初のツールチップは独自の `openDelay` を支払うため、誤ってマウスを動かしても何も開きません。グループがウォームである間（ツールチップが開いているか、または閉じてから `skipDelay` 未満の場合）、次にホバーされたツールチップは即座に開き、一度に開くツールチップは1つだけです。これは、ツールバーやアイコンボタンの行に適しており、各ボタンで遅延を待つのは遅く感じられます。
フォーカスによる開くことは、グループの有無にかかわらず即座に行われるため、キーボードは影響を受けません。

`skipDelay`（デフォルトで300ミリ秒）は、`Provider` の `defaultProps` で設定されます。

```tsx
import {Provider} from '@gravity-ui/uikit';

<Provider defaultProps={{TooltipDelayGroup: {skipDelay: 500}}}>{/* ... */}</Provider>;
```

## プロパティ

| 名前          | 説明                                                                                     |                       タイプ                       |     デフォルト     |
| :------------ | :----------------------------------------------------------------------------------------------- | :----------------------------------------------: | :-------------: |
| children      | `Tooltip` のアンカー要素                                                                |         `React.ReactElement` `Function`          |                 |
| className     | `class` HTML 属性                                                                          |                     `string`                     |                 |
| closeDelay    | ホバー終了後に `Tooltip` を非表示にするまでの遅延ミリ秒数                                 |                     `number`                     |       `0`       |
| container     | `Portal` を介してコンポーネントがマウントされる DOM 要素                                          |                  `HTMLElement`                   | `document.body` |
| content       | `Tooltip` に表示されるコンテンツ                                                     |                `React.ReactNode`                 |                 |
| disablePortal | `Portal` の使用を無効にする                                                                         |                    `boolean`                     |     `false`     |
| disabled      | `Tooltip` の開くのを防ぐ                                                              |                    `boolean`                     |                 |
| offset        | アンカーからの `Tooltip` のオフセット                                                                |                     `number`                     |       `4`       |
| onOpenChange  | 開いている状態の変更を処理するコールバック                                                            |                    `Function`                    |                 |
| open          | 制御された開いている状態                                                                           |                    `boolean`                     |                 |
| openDelay     | ホバー開始後に `Tooltip` を表示するまでの遅延ミリ秒数                                                             |                     `number`                     |     `1000`      |
| placement     | アンカーに対する `Tooltip` の位置                                                       | [`PopupPlacement`](../Popup/README.md#placement) |    `bottom`     |
| qa            | テストに使用される `data-qa` HTML 属性                                                      |                     `string`                     |                 |
| rest          | 開く前にカーソルが静止している必要がある時間（ミリ秒）。                                        |                     `number`                     |       `0`       |
| role          | `Tooltip` が使用されるロール                                                                  |              `"tooltip"` `"label"`               |   `"tooltip"`   |
| strategy      | 使用する CSS `position` プロパティのタイプ。                                                       |                `absolute` `fixed`                |   `absolute`    |
| style         | `style` HTML 属性                                                                          |              `React.CSSProperties`               |                 |
| trigger       | 開くのをトリガーするイベントタイプ。デフォルトの `all` 値は `hover` と `focus` の両方を参照します。 |                `"all"` `"focus"`                 |     `"all"`     |

## CSS API

| 名前                           | 説明      |
| :----------------------------- | :--------------- |
| `--g-tooltip-text-color`       | テキストの色       |
| `--g-tooltip-background-color` | 背景色 |
| `--g-tooltip-padding`          | パディング          |
| `--g-tooltip-border-radius`    | ボーダー半径    |
| `--g-tooltip-box-shadow`       | シャドウ           |