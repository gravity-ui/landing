`TextArea` は、ユーザーが UI にテキストを入力できるようにします。

## 外観

`TextArea` の外観は、`view` および `pin` プロパティによって制御されます。

### View

`normal` - `TextArea` のメインビューです（デフォルトで使用されます）。

GRAVITY_TRANSLATION_BLOCK_0_END

`clear` - カスタムラッパーを `TextArea` と一緒に使用する場合に使用できます。

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Pin

`TextArea` の境界線の右端と左端の外観を制御できます。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## ステート

### Disabled

ユーザーがコンポーネントと対話できないようにしたい `TextArea` のステートです。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Error

ユーザーの無効な入力を表示したい `TextArea` のステートです。`TextArea` の外観を変更するには、`validationState` プロパティを "invalid" 値で使用します。
オプションのメッセージテキストは、`errorMessage` プロパティで追加できます。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Size

`s` – 標準コントロールが大きすぎる場合に使用します（テーブル、小さなカード）。

`m` – 基本サイズで、ほとんどのコンポーネントで使用されます。

`l` – ページのヘッダー、モーダルウィンドウ、またはポップアップの基本的なコントロールに使用されます。

`xl` – プロモおよびランディングページで使用されます。

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## 行管理

`TextArea` の行数は、`rows`、`minRows`、および `maxRows` プロパティによって制御されます。`rows` プロパティは、自動高さ計算を無効にします。
`TextArea` の目的の高さを設定するには、`rows` プロパティを 1 に設定した `className` または `style` プロパティを使用します。

GRAVITY_TRANSLATION_BLOCK_11_END

## リサイズ可能な TextArea

`controlProps` プロパティに `resize` スタイルを提供することで、リサイズ可能な動作を取得できます。テキストエリアの高さをリサイズ可能にする場合は、`rows` プロパティを必ず指定してください。指定しないと、リサイズが自動高さ計算と競合します。

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Properties

| 名前            | 説明                                                                                                                            |                        タイプ                         |     デフォルト     |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------: | :-------------: |
| autoComplete    | コントロールの `autocomplete` 属性                                                                                              |                 `boolean` `string`                  |                 |
| autoFocus       | コントロールの `autofocus` 属性                                                                                                 |                      `boolean`                      |                 |
| className       | コントロールのラッパークラス名                                                                                                  |                      `string`                       |                 |
| controlProps    | コントロールのHTML属性                                                                                                          | `React.TextareaHTMLAttributes<HTMLTextAreaElement>` |                 |
| controlRef      | コントロールに提供されるReact ref                                                                                               |          `React.Ref<HTMLTextAreaElement>`           |                 |
| defaultValue    | コントロールのデフォルト値。コンポーネントが制御されていない場合に使用されます                                                              |                      `string`                       |                 |
| disabled        | ユーザーがコントロールを操作できないことを示します                                                                              |                      `boolean`                      |     `false`     |
| errorMessage    | エラーテキスト                                                                                                                  |                      `string`                       |                 |
| hasClear        | コントロールの値をクリアするためのアイコンを表示します                                                                            |                      `boolean`                      |     `false`     |
| id              | コントロールの `id` 属性                                                                                                        |                      `string`                       |                 |
| maxRows         | コントロールの表示可能なテキスト行の最大数。`rows` が指定されている場合は無視されます                                                              |                      `number`                       |                 |
| minRows         | コントロールの表示可能なテキスト行の最小数。`rows` が指定されている場合は無視されます                                                              |                      `number`                       |                 |
| name            | コントロールの `name` 属性。指定しない場合は自動生成されます。                                                                        |                      `string`                       |                 |
| note            | コントロールの右下隅の下に表示され、エラーコンテナとスペースを共有するオプションの要素                                                              |                  `React.ReactNode`                  |                 |
| onBlur          | コントロールがフォーカスを失ったときに発生します。フォーカスイベントをコールバックの引数として提供します                                                    |                     `function`                      |                 |
| onChange        | ユーザーによって入力値が変更されたときに発生します。変更イベントをコールバックの引数として提供します                                                    |                     `function`                      |                 |
| onFocus         | コントロールがフォーカスを取得したときに発生します。フォーカスイベントをコールバックの引数として提供します                                                    |                     `function`                      |                 |
| onKeyDown       | キーが押されたときに発生します。キーボードイベントをコールバックの引数として提供します                                                              |                     `function`                      |                 |
| onKeyUp         | キーが離されたときに発生します。キーボードイベントをコールバックの引数として提供します                                                              |                     `function`                      |                 |
| onUpdate        | ユーザーによって入力値が変更されたときに発生します。新しい値をコールバックの引数として提供します                                                        |                     `function`                      |                 |
| pin             | コントロールの境界線の表示                                                                                                      |                      `string`                       | `"round-round"` |
| placeholder     | 値が設定されていないときにコントロールに表示されるテキスト                                                                          |                      `string`                       |                 |
| qa              | テストID属性 (`data-qa`)                                                                                                        |                      `string`                       |                 |
| readOnly        | ユーザーがコントロールの値を変更できないことを示します                                                                              |                      `boolean`                      |     `false`     |
| rows            | コントロールの表示可能なテキスト行数。指定しない場合、高さはコンテンツに基づいて自動的に計算されます                                                              |                      `number`                       |                 |
| size            | コントロールのサイズ                                                                                                            |              `"s"` `"m"` `"l"` `"xl"`               |      `"m"`      |
| tabIndex        | コントロールの `tabindex` 属性                                                                                                  |                      `string`                       |                 |
| type            | コントロールのタイプ                                                                                                            |                      `string`                       |                 |
| validationState | 検証状態                                                                                                                        |                     `"invalid"`                     |                 |
| value           | コントロールの値                                                                                                                |                      `string`                       |                 |
| view            | コントロールの表示                                                                                                              |                `"normal"` `"clear"`                 |   `"normal"`    |

## CSS API

| 名前                                | 説明                                         |
| :---------------------------------- | :-------------------------------------------------- |
| `--g-text-area-text-color`          | テキストの色                                          |
| `--g-text-area-placeholder-color`   | プレースホルダーの色                                   |
| `--g-text-area-background-color`    | 背景色                                    |
| `--g-text-area-border-radius`       | ボーダーの半径                                       |
| `--g-text-area-border-width`        | ボーダーの幅                                        |
| `--g-text-area-border-color`        | ボーダーの色                                        |
| `--g-text-area-border-color-hover`  | ホバー時のボーダーの色                             |
| `--g-text-area-border-color-active` | アクティブ時のボーダーの色                              |
| `--g-text-area-focus-outline-color` | フォーカス時のアウトラインの色（デフォルトでは表示されません） |