<!--GITHUB_BLOCK-->

# NumberInput

<!--/GITHUB_BLOCK-->

`NumberInput` は、オプションのステッパーコントロール、最小/最大境界、値のフォーマットを備えた、数値入力用のテキストフィールドです。

```tsx
import {NumberInput} from '@gravity-ui/uikit';
```

## 外観

`NumberInput` の外観は、`view` および `pin` プロパティによって制御されます。

### View

`normal` - `NumberInput` のメインビュー（デフォルトで使用）。

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput placeholder="Placeholder" />;
}
SANDBOX-->

`clear` - `NumberInput` のカスタムラッパーと組み合わせて使用できます。

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput view="clear" placeholder="Placeholder" />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput view="normal" />
<NumberInput view="clear" />
```

<!--/GITHUB_BLOCK-->

### Pin

`NumberInput` の境界線の右端と左端の表示を制御できます。

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput placeholder="Placeholder" pin="round-brick" />
            <NumberInput placeholder="Placeholder" pin="brick-brick" />
            <NumberInput placeholder="Placeholder" pin="brick-round" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput pin="round-brick" />
<NumberInput pin="brick-brick" />
<NumberInput pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## ステート

### Disabled

ユーザーがコンポーネントを操作できないようにしたい `NumberInput` のステートです。

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput placeholder="Placeholder" disabled />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput disabled />
```

<!--/GITHUB_BLOCK-->

### Error

ユーザーの無効な入力を示したい `NumberInput` のステートです。`NumberInput` の外観を変更するには、`validationState` プロパティを `"invalid"` 値で使用します。オプションのメッセージテキストは、`errorMessage` プロパティを介して追加できます。デフォルトでは、メッセージテキストはコンポーネントの外側にレンダリングされます。
この動作は、`errorPlacement` プロパティで変更できます。

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput
                placeholder="Placeholder"
                errorMessage="Error message"
                validationState="invalid"
            />
            <NumberInput
                placeholder="Placeholder"
                errorPlacement="inside"
                errorMessage="Error message"
                validationState="invalid"
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput errorMessage="Error message" validationState="invalid" />
<NumberInput errorPlacement="inside" errorMessage="Error message" validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## サイズ

`s` – 標準コントロールが大きすぎる場合に使用します（テーブル、小さなカード）。

`m` – 基本サイズ。ほとんどのコンポーネントで使用されます。

`l` – 基本コントロール。ページのヘッダー、モーダルウィンドウ、またはポップアップで実行されます。

`xl` – プロモおよびランディングページで使用されます。

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput placeholder="Placeholder" size="s" />
            <NumberInput placeholder="Placeholder" size="m" />
            <NumberInput placeholder="Placeholder" size="l" />
            <NumberInput placeholder="Placeholder" size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput size="s" />
<NumberInput size="m" />
<NumberInput size="l" />
<NumberInput size="xl" />
```

<!--/GITHUB_BLOCK-->

## Label

コントロールの左側にラベルを設定できます。

- ラベルは、`startContent` プロパティで追加された要素の右側に配置されます。
- ラベルは、`NumberInput` 全体の幅の半分を超えることはできません。

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput placeholder="Placeholder" label="Label" />
            <NumberInput
                placeholder="Placeholder"
                label="Very long label with huge amount of symbols"
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput label="Label" />
```

<!--/GITHUB_BLOCK-->

## 追加コンテンツ

### Start content

コントロールの左側にコンテンツを追加できます。`label` プロパティで追加されたラベルの左側に配置されます。

<!--SANDBOX
import {Label, NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <NumberInput
            placeholder="Search"
            label="Label"
            startContent={<Label size="s">Left</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput startContent={<Label>Left</Label>} />
```

<!--/GITHUB_BLOCK-->

### End content

コントロールの右側にコンテンツを追加できます。`hasClear` プロパティで追加されたクリアボタンと、内部に配置されたエラーアイコンの右側に配置されます。

<!--SANDBOX
import {Label, NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <NumberInput
            hasClear
            placeholder="Placeholder"
            endContent={<Label size="s">Right</Label>}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput endContent={<Label>Right</Label>} />
```

<!--/GITHUB_BLOCK-->

### Controls

コンポーネントの最も右の位置にあるインクリメント/デクリメント矢印コントロールの表示は、`hiddenControls` プロパティで管理できます。

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput />
            <NumberInput hiddenControls />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput />
<NumberInput hiddenControls />
```

<!--/GITHUB_BLOCK-->

## ビヘイビア

### Min/max values

入力できる最小値と最大値を設定できます。定義された範囲に収まらない値は、ブラー時に最も近い許容値にクランプされます。

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput min={-100} max={100} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput min={-100} max={100} />
```

<!--/GITHUB_BLOCK-->

### Step

コンポーネントコントロールの矢印ボタンまたはキーボードで、入力値が増減する量です。

また、許容値に制限を追加し、次のルールに従ってブラー時に入力された数値を許容値にクランプできるようにします。

- `step` と `min` の値が整数で定義されている場合、許容値は `min + (step * n)`（ここで `n` は整数）として定義されます。
- `step` が整数で `min` の値が定義されていない場合、許容値は `step` で割り切れる値として定義されます。
- `step` または `min` の値が小数である場合、クランプは適用されません。

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return <NumberInput min={-10} step={4} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput min={-10} step={4} />
```

<!--/GITHUB_BLOCK-->

### Step multiplier

キーボードの Shift キーが押されたときにステップ値に乗算される値を、`shiftMultiplier` プロパティを定義することで設定できます。

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput shiftMultiplier={50} />
            <NumberInput shiftMultiplier={8} step={4} />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput shiftMultiplier={50} />
<NumberInput shiftMultiplier={8} step={4} />
```

<!--/GITHUB_BLOCK-->

### Decimal values restriction

`allowDecimal` プロパティを使用して、整数のみ、または小数も入力できる機能を切り替えることができます。
`allowDecimal={false}` プロパティを使用すると、入力されたドットは無視され、貼り付けられた小数値は切り捨てられます。

<!--SANDBOX
import {NumberInput} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <NumberInput allowDecimal />
            <NumberInput allowDecimal={false} />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<NumberInput allowDecimal />
<NumberInput allowDecimal={false} />
```

<!--/GITHUB_BLOCK-->

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
