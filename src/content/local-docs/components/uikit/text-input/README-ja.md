```tsx
import {TextInput} from '@gravity-ui/uikit';
```

TextInput は、UI にテキストを入力するためにユーザーに使用されます。

## 外観

`TextInput` の外観は、`view` および `pin` プロパティによって制御されます。

### View

`normal` - `TextInput` のメインビュー（デフォルトで使用されます）。

GRAVITY_TRANSLATION_BLOCK_1_END

`clear` - `TextInput` のカスタムラッパーと組み合わせて使用できます。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Pin

`TextInput` の境界線の右端と左端の外観を制御できます。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## ステート

### Disabled

ユーザーがコンポーネントを操作できないようにしたい `TextInput` のステートです。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Error

ユーザーの入力が正しくないことを示したい `TextInput` のステートです。`TextInput` の外観を変更するには、`validationState` プロパティを `"invalid"` 値で使用します。オプションのメッセージテキストは、`errorMessage` プロパティで追加できます。デフォルトでは、メッセージテキストはコンポーネントの外側にレンダリングされます。
この動作は、`errorPlacement` プロパティで変更できます。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Size

`s` – 標準コントロールが大きすぎる場合に使用します（テーブル、小さなカード）。

`m` – 基本サイズ。ほとんどのコンポーネントで使用されます。

`l` – ページのヘッダー、モーダルウィンドウ、またはポップアップで実行される基本的なコントロール。

`xl` – プロモーションおよびランディングページで使用されます。

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Label

コントロールの左側にラベルを設定できます。

- ラベルは、コントロールに対して最も左の位置を占めます。つまり、`startContent` プロパティを介して追加された要素は右側に配置されます。
- ラベルは、`TextInput` 全体のスペースの幅の半分を超えることはできません。

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## 追加コンテンツ

### Start content

コントロールの左側にコンテンツを追加できます（[rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL) を使用している場合は右側）。`label` プロパティを介して追加されたラベルの左側（または rtl を使用している場合は右側）に配置されます。

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

### End content

コントロールの右側にコンテンツを追加できます（[rtl](https://developer.mozilla.org/en-US/docs/Glossary/RTL) を使用している場合は左側）。`hasClear` プロパティを介して追加されたクリアボタンの右側（または rtl を使用している場合は左側）に配置されます。

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

## Properties

| 名前            | 説明                                                                                                                            |                                   型                                    |     デフォルト     |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------: | :-------------: |
| autoComplete    | コントロールの `autocomplete` 属性                                                                                              |                          `boolean` `string`                           |                 |
| autoFocus       | コントロールの `autofocus` 属性                                                                                                 |                               `boolean`                               |                 |
| className       | コントロールのラッパークラス名                                                                                                  |                               `string`                                |                 |
| controlProps    | コントロールのHTML属性                                                                                                          |             `React.InputHTMLAttributes<HTMLInputElement>`             |                 |
| controlRef      | コントロールに提供されるReact ref                                                                                               |                     `React.Ref<HTMLInputElement>`                     |                 |
| defaultValue    | コントロールのデフォルト値。コンポーネントが制御されていない場合に使用されます。                                                              |                               `string`                                |                 |
| disabled        | ユーザーがコントロールを操作できないことを示します。                                                                                              |                           `React.ReactNode`                           |                 |
| endContent      | 入力ノード、クリアボタン、エラーアイコンの後にレンダリングされるユーザーノード                                                                        |                               `string`                                |                 |
| errorMessage    | エラーテキスト                                                                                                                  |                               `string`                                |                 |
| errorPlacement  | エラーの配置                                                                                                                    |                          `outside` `inside`                           |    `outside`    |
| hasClear        | コントロールの値をクリアするためのアイコンを表示します。                                                                                              |                               `boolean`                               |     `false`     |
| id              | コントロールの `id` 属性                                                                                                         |                               `string`                                |                 |
| label           | 入力ノードの左側にレンダリングされるヘルプテキスト                                                                                              |                               `string`                                |                 |
| name            | コントロールの `name` 属性。指定しない場合、指定されていない場合は自動生成されます。                                                                          |                               `string`                                |                 |
| note            | エラーコンテナとスペースを共有する、コントロールの右下隅の下に表示されるオプションの要素                                                                        |                           `React.ReactNode`                           |                 |
| onBlur          | コントロールがフォーカスを失ったときに発生します。フォーカスイベントをコールバックの引数として提供します。                                                                  |                              `function`                               |                 |
| onChange        | ユーザーによって入力値が変更されたときに発生します。変更イベントをコールバックの引数として提供します。                                                                  |                              `function`                               |                 |
| onFocus         | コントロールがフォーカスを取得したときに発生します。フォーカスイベントをコールバックの引数として提供します。                                                                  |                              `function`                               |                 |
| onKeyDown       | キーが押されたときに発生します。キーボードイベントをコールバックの引数として提供します。                                                                      |                              `function`                               |                 |
| onKeyUp         | キーが離されたときに発生します。キーボードイベントをコールバックの引数として提供します。                                                                      |                              `function`                               |                 |
| onUpdate        | ユーザーによって入力値が変更されたときに発生します。新しい値をコールバックの引数として提供します。                                                                    |                              `function`                               |                 |
| pin             | コントロールの境界線の表示                                                                                                      |                               `string`                                | `'round-round'` |
| placeholder     | 値が設定されていないときにコントロールに表示されるテキスト                                                                                              |                               `string`                                |                 |
| qa              | テストID属性 (`data-qa`)                                                                                                        |                               `string`                                |
| readOnly        | ユーザーがコントロールの値を変更できないことを示します。                                                                                              |                               `boolean`                               |     `false`     |
| size            | コントロールのサイズ                                                                                                            |                       `"s"` `"m"` `"l"` `"xl"`                        |      `"m"`      |
| startContent    | ラベルと入力ノードの前にレンダリングされるユーザーノード                                                                                              |                           `React.ReactNode`                           |                 |
| tabIndex        | コントロールの `tabindex` 属性                                                                                                  |                               `string`                                |                 |
| type            | コントロールのタイプ                                                                                                            | `"email"` `"number"` `"password"` `"search"` `"tel"` `"text"` `"url"` |                 |
| validationState | 検証状態                                                                                                                        |                              `"invalid"`                              |                 |
| value           | コントロールの値                                                                                                                |                               `string`                                |                 |
| view            | コントロールの表示                                                                                                              |                         `"normal"` `"clear"`                          |   `"normal"`    |

## CSS API

| 名前                                 | 説明                                                              |
| :----------------------------------- | :---------------------------------------------------------------- |
| `--g-text-input-text-color`          | テキストの色                                                      |
| `--g-text-input-label-color`         | ラベルの色                                                        |
| `--g-text-input-placeholder-color`   | プレースホルダーの色                                              |
| `--g-text-input-background-color`    | 背景色                                                            |
| `--g-text-input-border-radius`       | ボーダーの半径                                                    |
| `--g-text-input-border-width`        | ボーダーの幅                                                      |
| `--g-text-input-border-color`        | ボーダーの色                                                      |
| `--g-text-input-border-color-hover`  | ホバー時のボーダーの色                                            |
| `--g-text-input-border-color-active` | アクティブ時のボーダーの色                                        |
| `--g-text-input-focus-outline-color` | フォーカス時のアウトラインの色（デフォルトでは表示されません） |