<!--GITHUB_BLOCK-->

# RelativeDatePicker

<!--/GITHUB_BLOCK-->

```tsx
import {RelativeDatePicker} from '@gravity-ui/date-components';
```

`RelativeDatePicker` は、相対的な日付を使用できるという点で `DatePicker` とほぼ同じコンポーネントです。

## `DatePicker` との違い

`RelativeDatePicker` は、`absolute` と `relative` の 2 つのモードで動作できます。`f(x)` ボタンをクリックしてインタラクティブに切り替えることができます。または、`value` または `defaultValue` オブジェクトで `type` フィールドを設定することもできます。

### Absolute

`RelativeDatePicker` の `absolute` モードでの動作は、単純な `DatePicker` と非常によく似ています。

<!--LANDING_BLOCK

[Learn more about DatePicker](/components/date-components/date-picker)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about DatePicker](/src/components/DatePicker)

<!--/GITHUB_BLOCK-->

### Relative

このモードでは、`RelativeDatePicker` は特別な相対形式で値を取得および返します。

<!--LANDING_BLOCK

[Learn more about rules of relative formulas](/components/date-components/relative-date-field#relative-input)

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about rules of relative formulas](/src/components/RelativeDateField#relative-input)

<!--/GITHUB_BLOCK-->

## Properties

| 名前              | 説明                                                                                                                                       |                     タイプ                      |          デフォルト          |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----------------------: |
| aria-describedby  | コントロールの `aria-describedby`。オブジェクトを説明する要素（または要素群）を識別します。属性                                                              |                   `string`                    |                           |
| aria-details      | コントロールの `aria-details`。オブジェクトの詳細な拡張説明を提供する要素（または要素群）を識別します。属性                                                              |                   `string`                    |                           |
| aria-label        | コントロールの `aria-label`。現在の要素をラベル付けする文字列値を定義します。属性                                                                           |                   `string`                    |                           |
| aria-labelledby   | コントロールの `aria-labelledby`。現在の要素をラベル付けする要素（または要素群）を識別します。属性                                                                     |                   `string`                    |                           |
| autoFocus         | コントロールの `autofocus`。要素がレンダリング時にフォーカスを受け取るべきかどうか。属性                                                                          |                   `boolean`                   |                           |
| className         | コントロールのラッパークラス名                                                                                                             |                   `string`                    |                           |
| defaultValue      | 未制御コンポーネントの初期値を設定します。                                                                                                   |                    `Value`                    |                           |
| disabled          | ユーザーがコントロールを操作できないことを示します                                                                                               |                   `boolean`                   |          `false`          |
| errorMessage      | エラーテキスト                                                                                                                             |                  `ReactNode`                  |                           |
| format            | 入力フィールドに表示される日付のフォーマット。[利用可能なフォーマット](https://day.js.org/docs/en/display/format)                                        |                   `string`                    |                           |
| hasClear          | コントロールの値をクリアするためのアイコンを表示します                                                                                             |                   `boolean`                   |          `false`          |
| id                | コントロールの `id` 属性                                                                                                                   |                   `string`                    |                           |
| isDateUnavailable | カレンダーの各日付に対して呼び出されるコールバック。true を返すと、その日付は利用不可になります。                                                                       |        `((date: DateTime) => boolean)`        |                           |
| label             | 入力ノードの左側に表示されるヘルプテキスト                                                                                                   |                   `string`                    |                           |
| maxValue          | ユーザーが選択できる最大許容日付。                                                                                                           |                  `DateTime`                   |                           |
| minValue          | ユーザーが選択できる最小許容日付。                                                                                                           |                  `DateTime`                   |                           |
| onBlur            | コントロールがフォーカスを失ったときに発生します。フォーカスイベントをコールバックの引数として提供します                                                                   | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onFocus           | コントロールがフォーカスを取得したときに発生します。フォーカスイベントをコールバックの引数として提供します                                                                   | `((e: FocusEvent<Element, Element>) => void)` |                           |
| onKeyDown         | キーが押されたときに発生します。キーボードイベントをコールバックの引数として提供します                                                                       |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onKeyUp           | キーが離されたときに発生します。キーボードイベントをコールバックの引数として提供します                                                                       |    `((e: KeyboardEvent<Element>) => void)`    |                           |
| onUpdate          | ユーザーによって値が変更されたときに発生します。新しい値をコールバックの引数として提供します                                                                     |       `((value: Value \| null) => void`       |                           |
| pin               | 角の丸み                                                                                                                                   |                `TextInputPin`                 |      `'round-round'`      |
| placeholder       | 値が設定されていないコントロールに表示されるテキスト                                                                                             |                   `string`                    |                           |
| placeholderValue  | ユーザーが最初に操作したときに各セグメントのデフォルト値を制御するプレースホルダー日付。                                                                       |                  `DateTime`                   | `today's date at midnigh` |
| readOnly          | コンポーネントの値が変更不可かどうか。                                                                                                         |                   `boolean`                   |          `false`          |
| size              | コントロールのサイズ                                                                                                                       |           `"s"` `"m"` `"l"` `"xl"`            |           `"m"`           |
| style             | 要素のインラインスタイルを設定します。                                                                                                         |                `CSSProperties`                |                           |
| timeZone          | タイムゾーンを設定します。[タイムゾーンについてさらに詳しく](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)                               |                   `string`                    |                           |
| validationState   | 検証状態                                                                                                                                   |                  `"invalid"`                  |                           |
| value             | コントロールの値                                                                                                                           |                `Value` `null`                 |                           |
| view              | コントロールのビュー                                                                                                                       |             `"normal"` `"clear"`              |        `"normal"`         |
