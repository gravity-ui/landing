`NumberInput` は、オプションのステッパーコントロール、最小/最大境界、値のフォーマットを備えた、数値入力用のテキストフィールドです。

```tsx
import {NumberInput} from '@gravity-ui/uikit';
```

## 外観

`NumberInput` の外観は、`view` および `pin` プロパティによって制御されます。

### View

`normal` - `NumberInput` のメインビュー（デフォルトで使用）。

GRAVITY_TRANSLATION_BLOCK_1_END

`clear` - `NumberInput` のカスタムラッパーと組み合わせて使用できます。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Pin

`NumberInput` の境界線の右端と左端の表示を制御できます。

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## ステート

### Disabled

ユーザーがコンポーネントを操作できないようにしたい `NumberInput` のステートです。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Error

ユーザーの無効な入力を示したい `NumberInput` のステートです。`NumberInput` の外観を変更するには、`validationState` プロパティを `"invalid"` 値で使用します。オプションのメッセージテキストは、`errorMessage` プロパティを介して追加できます。デフォルトでは、メッセージテキストはコンポーネントの外側にレンダリングされます。
この動作は、`errorPlacement` プロパティで変更できます。

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## サイズ

`s` – 標準コントロールが大きすぎる場合に使用します（テーブル、小さなカード）。

`m` – 基本サイズ。ほとんどのコンポーネントで使用されます。

`l` – 基本コントロール。ページのヘッダー、モーダルウィンドウ、またはポップアップで実行されます。

`xl` – プロモおよびランディングページで使用されます。

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Label

コントロールの左側にラベルを設定できます。

- ラベルは、`startContent` プロパティで追加された要素の右側に配置されます。
- ラベルは、`NumberInput` 全体の幅の半分を超えることはできません。

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## 追加コンテンツ

### Start content

コントロールの左側にコンテンツを追加できます。`label` プロパティで追加されたラベルの左側に配置されます。

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

### End content

コントロールの右側にコンテンツを追加できます。`hasClear` プロパティで追加されたクリアボタンと、内部に配置されたエラーアイコンの右側に配置されます。

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Controls

コンポーネントの最も右の位置にあるインクリメント/デクリメント矢印コントロールの表示は、`hiddenControls` プロパティで管理できます。

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

## ビヘイビア

### Min/max values

入力できる最小値と最大値を設定できます。定義された範囲に収まらない値は、ブラー時に最も近い許容値にクランプされます。

GRAVITY_TRANSLATION_BLOCK_20_END

GRAVITY_TRANSLATION_BLOCK_21_END

### Step

コンポーネントコントロールの矢印ボタンまたはキーボードで、入力値が増減する量です。

また、許容値に制限を追加し、次のルールに従ってブラー時に入力された数値を許容値にクランプできるようにします。

- `step` と `min` の値が整数で定義されている場合、許容値は `min + (step * n)`（ここで `n` は整数）として定義されます。
- `step` が整数で `min` の値が定義されていない場合、許容値は `step` で割り切れる値として定義されます。
- `step` または `min` の値が小数である場合、クランプは適用されません。

GRAVITY_TRANSLATION_BLOCK_22_END

GRAVITY_TRANSLATION_BLOCK_23_END

### Step multiplier

キーボードの Shift キーが押されたときにステップ値に乗算される値を、`shiftMultiplier` プロパティを定義することで設定できます。

GRAVITY_TRANSLATION_BLOCK_24_END

GRAVITY_TRANSLATION_BLOCK_25_END

### Decimal values restriction

`allowDecimal` プロパティを使用して、整数のみ、または小数も入力できる機能を切り替えることができます。
`allowDecimal={false}` プロパティを使用すると、入力されたドットは無視され、貼り付けられた小数値は切り捨てられます。

GRAVITY_TRANSLATION_BLOCK_26_END

GRAVITY_TRANSLATION_BLOCK_27_END

## Properties

| 名前            | 説明                                                                                                             |                     タイプ                      |      デフォルト       |
| :-------------- | :--------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :----------------: |
| allowDecimal    | 小数入力の有効化                                                                                                 |                   `boolean`                   |      `false`       |
| autoComplete    | コントロールの `autocomplete` 属性                                                                               |              `boolean` `string`               |                    |
| autoFocus       | コントロールの `autofocus` 属性                                                                                  |                   `boolean`                   |                    |
| className       | コントロールのラッパークラス名                                                                                   |                   `string`                    |                    |
| controlProps    | コントロールのHTML属性                                                                                           | `React.InputHTMLAttributes<HTMLInputElement>` |                    |
| controlRef      | コントロールに提供されるReact ref                                                                                |         `React.Ref<HTMLInputElement>`         |                    |
| defaultValue    | コンポーネントが制御されていない場合に使用されるコントロールのデフォルト値                                           |             `number` `undefined`              |                    |
| disabled        | ユーザーがコントロールと対話できないことを示す                                                                   |                   `boolean`                   |      `false`       |
| endContent      | 入力ノード、クリアボタン、およびエラーアイコンの後にレンダリングされるユーザーノード                               |               `React.ReactNode`               |                    |
| errorMessage    | エラーテキスト                                                                                                   |                   `string`                    |                    |
| errorPlacement  | エラーの配置                                                                                                     |              `outside` `inside`               |     `outside`      |
| hasClear        | コントロールの値をクリアするためのアイコンを表示する                                                               |                   `boolean`                   |      `false`       |
| hiddenControls  | コントロールの末尾にあるインクリメント/デクリメントボタンを非表示にする                                            |                   `boolean`                   |                    |
| id              | コントロールの `id` 属性                                                                                         |                   `string`                    |                    |
| label           | 入力ノードの左側にレンダリングされるヘルプテキスト                                                               |                   `string`                    |                    |
| max             | 許可される最大値。許可される範囲に入力値をクランプするために使用されます                                           |                   `number`                    | `MAX_SAFE_INTEGER` |
| min             | 許可される最小値。許可される範囲に入力値をクランプするために使用されます                                           |                   `number`                    | `MIN_SAFE_INTEGER` |
| name            | コントロールの `name` 属性。指定しない場合、指定しない場合は自動生成されます                                       |                   `string`                    |                    |
| note            | エラーコンテナとスペースを共有する、コントロールの右下隅の下に表示されるオプションの要素                           |               `React.ReactNode`               |                    |
| onBlur          | コントロールがフォーカスを失ったときに発生します。フォーカスイベントをコールバックの引数として提供します             |                  `function`                   |                    |
| onChange        | ユーザーによって入力値が変更されたときに発生します。変更イベントをコールバックの引数として提供します                 |                  `function`                   |                    |
| onFocus         | コントロールがフォーカスを取得したときに発生します。フォーカスイベントをコールバックの引数として提供します           |                  `function`                   |                    |
| onKeyDown       | キーが押されたときに発生します。キーボードイベントをコールバックの引数として提供します                             |                  `function`                   |                    |
| onKeyUp         | キーが離されたときに発生します。キーボードイベントをコールバックの引数として提供します                             |                  `function`                   |                    |
| onUpdate        | ユーザーによって入力値が変更されたときに発生します。新しい値をコールバックの引数として提供します                   |                  `function`                   |                    |
| pin             | コントロールの境界線の表示                                                                                       |                   `string`                    |  `'round-round'`   |
| placeholder     | 値が設定されていないときにコントロールに表示されるテキスト                                                       |                   `string`                    |                    |
| qa              | テストID属性 (`data-qa`)                                                                                         |                   `string`                    |                    |
| readonly        | ユーザーがコントロールの値を変更できないことを示す                                                               |                   `boolean`                   |      `false`       |
| shiftMultiplier | Shiftキーが押されたときのステップ乗数                                                                            |                   `number`                    |        `10`        |
| size            | コントロールのサイズ                                                                                             |           `"s"` `"m"` `"l"` `"xl"`            |       `"m"`        |
| step            | 矢印キーまたはコンポーネントコントロールで入力値を増減するためのデルタ                                             |                   `number`                    |        `1`         |
| startContent    | ラベルと入力の前にレンダリングされるユーザーノード                                                               |               `React.ReactNode`               |                    |
| tabIndex        | コントロールの `tabindex` 属性                                                                                   |                   `string`                    |                    |
| validationState | 検証状態                                                                                                         |                  `"invalid"`                  |                    |
| value           | コントロールの値                                                                                                 |             `number` `undefined`              |                    |
| view            | コントロールの表示                                                                                               |             `"normal"` `"clear"`              |     `"normal"`     |

## CSS API

コンポーネント自体にはCSS APIはありませんが、親コンポーネントであるTextInputのAPIを拡張しています。

GRAVITY_TRANSLATION_BLOCK_1_END