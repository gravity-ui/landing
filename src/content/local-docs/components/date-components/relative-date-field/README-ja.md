GRAVITY_TRANSLATION_BLOCK_0_END

```tsx
import {RelativeDateField} from '@gravity-ui/date-components';
```

`RelativeDateField` コンポーネントは、相対日付の入力専用です。「通常の」`DateField` としては使用できません。

## 相対入力

このコンポーネントは、特別な相対フォーマットで値を取得します。値は、正確な日付を計算するのに役立つ数式として設定します。これは Grafana の相対時間フィールドのフォーマットに非常に似ているため、「Grafana ライクなフォーマット」と呼ぶことができます。Grafana の相対時間値の詳細については、[ドキュメント](https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/)をお読みください。

このモードを使用すると、ソースから宛先へデータを配信し、不正確さなしに、必要なエンドポイントで直接正確な値を計算できます。

## 有効な入力ルール

- 値はキーワード `now` で始まる必要があります。
- 相対日付式は、一般的に `now${operand}${count}${unit}` のようになります。
- `operand` の利用可能な値:
  - `-` - 引き算
  - `+` - 足し算
  - `/` - `unit` の開始時点への繰り上げ
- `count` の有効な値 - すべての自然数
- `unit` の有効な値:
  - `d` - 日
  - `w` - 週
  - `M` - 月
  - `Q` - 四半期
  - `y` - 年
  - `h` - 時間
  - `m` - 分

### 使用例

> `now-1d`
>
> `now/w`
>
> `now+10d-5d/M`

## プロパティ

| 名前             | 説明                                                                                                     |                     タイプ                      |     デフォルト     |
| :--------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-------------: |
| aria-describedby | コントロールの `aria-describedby` 属性                                                                     |                   `string`                    |                 |
| aria-details     | コントロールの `aria-details` 属性                                                                       |                   `string`                    |                 |
| aria-label       | コントロールの `aria-label` 属性                                                                         |                   `string`                    |                 |
| aria-labelledby  | コントロールの `aria-labelledby` 属性                                                                    |                   `string`                    |                 |
| autoFocus        | コントロールの `autofocus` 属性                                                                          |                   `boolean`                   |                 |
| className        | コントロールのラッパーのクラス名                                                                         |                   `string`                    |                 |
| defaultValue     | 未制御コンポーネントの初期値を設定します。                                                                   |                   `string`                    |                 |
| disabled         | ユーザーがコントロールを操作できないことを示します                                                             |                   `boolean`                   |     `false`     |
| errorMessage     | エラーテキスト                                                                                           |                  `ReactNode`                  |                 |
| hasClear         | コントロールの値をクリアするためのアイコンを表示します                                                             |                   `boolean`                   |     `false`     |
| hasTime          | ポップアップ値に時間フィールドを表示します                                                                     |                   `boolean`                   |     `false`     |
| id               | コントロールの `id` 属性                                                                                 |                   `string`                    |                 |
| label            | 入力ノードの左側に表示されるヘルプテキスト                                                                     |                   `string`                    |                 |
| leftContent      | ラベルと入力の前にレンダリングされるユーザーノード                                                               |               `React.ReactNode`               |                 |
| onBlur           | コントロールがフォーカスを失ったときに発生します。フォーカスイベントをコールバックの引数として提供します                                     | `((e: FocusEvent<Element, Element>) => void)` |                 |
| onFocus          | コントロールがフォーカスを取得したときに発生します。フォーカスイベントをコールバックの引数として提供します                                     | `((e: FocusEvent<Element, Element>) => void)` |                 |
| onKeyDown        | キーが押されたときに発生します。キーボードイベントをコールバックの引数として提供します                                       |    `((e: KeyboardEvent<Element>) => void)`    |                 |
| onKeyUp          | キーが離されたときに発生します。キーボードイベントをコールバックの引数として提供します                                       |    `((e: KeyboardEvent<Element>) => void)`    |                 |
| onUpdate         | ユーザーによって値が変更されたときに発生します。新しい値をコールバックの引数として提供します                                     |      `((value: string \| null) => void`       |                 |
| pin              | コーナーの丸み                                                                                           |                   `string`                    | `'round-round'` |
| placeholder      | 値が設定されていないコントロールに表示されるテキスト                                                             |                   `string`                    |                 |
| readOnly         | コンポーネントの値が不変かどうか。                                                                           |                   `boolean`                   |     `false`     |
| rightContent     | 入力ノードとクリアボタンの後にレンダリングされるユーザーノード                                                       |               `React.ReactNode`               |                 |
| size             | コントロールのサイズ                                                                                     |           `"s"` `"m"` `"l"` `"xl"`            |      `"m"`      |
| style            | 要素のインラインスタイルを設定します。                                                                           |                `CSSProperties`                |                 |
| timeZone         | タイムゾーンを設定します。[タイムゾーンの詳細はこちら](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                   `string`                    |                 |
| validationState  | 検証状態                                                                                                 |                  `"invalid"`                  |                 |
| value            | コントロールの値                                                                                         |                `string` `null`                |                 |
| view             | コントロールのビュー                                                                                     |             `"normal"` `"clear"`              |   `"normal"`    |