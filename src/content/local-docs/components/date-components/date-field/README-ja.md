<!--GITHUB_BLOCK-->

# DateField

<!--/GITHUB_BLOCK-->

```tsx
import {DateField} from '@gravity-ui/date-components';
```

`DateField` コンポーネントは、React アプリケーションにおける日付入力専用の、多機能で便利な入力フィールドです。直感的なインターフェースと簡単な統合により、イベントスケジューラ、予約システム、データ駆動型レポートなど、日付または時刻の入力を必要とするあらゆるフォームに最適です。`value` プロパティを設定すると、制御可能になります。または、`value` を設定しない場合は非制御になりますが、この場合、オプションの `defaultValue` プロパティで初期状態を管理できます。コンポーネントはデフォルトで非制御です。

## 便利な追加機能

日付を正しい形式で設定するには、[Date Utils ライブラリ](https://gravity-ui.com/libraries/date-utils)から追加のヘルパーを含める必要がある場合があります。

```tsx
import {dateTimeParse} from '@gravity-ui/date-utils';
```

## 外観

`DateField` の外観は、`size`、`view`、`pin` プロパティによって制御されます。

### サイズ

`DateField` のサイズを制御するには、`size` プロパティを使用します。デフォルトのサイズは `m` です。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField size="s" />
<DateField size="m" />
<DateField size="l" />
<DateField size="xl" />
`}
>
    <DateComponents.DateField size="s" />
    <DateComponents.DateField size="m" />
    <DateComponents.DateField size="l" />
    <DateComponents.DateField size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField size="s" />
<DateField size="m" />
<DateField size="l" />
<DateField size="xl" />
```

<!--/GITHUB_BLOCK-->

### 表示形式

`normal` - `DateField` のメイン表示（デフォルトで使用）。

<!--LANDING_BLOCK
<ExampleBlock code={`<DateField />`}>
    <DateComponents.DateField />
</ExampleBlock>
LANDING_BLOCK-->

`clear` - 境界線が表示されない `DateField` の表示（カスタムラッパーと組み合わせて使用可能）。

<!--LANDING_BLOCK
<ExampleBlock code={`<DateField view="clear" />`}>
    <DateComponents.DateField view="clear" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField view="normal" />
<DateField view="clear" />
```

<!--/GITHUB_BLOCK-->

### ピン留め

`pin` プロパティを使用すると、左右の端の形状を制御できます。通常、複数のコントロールを 1 つのユニットに結合する場合に使用されます。
`pin` プロパティの値は、ダッシュで区切られた左端と右端のスタイル名の組み合わせです。例：「"round-brick"」。
エッジスタイルは、`round`（デフォルト）、`circle`、`brick`、`clear` です。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField pin="round-brick" />
<DateField pin="brick-brick" />
<DateField pin="brick-round" />
`}
>
    <DateComponents.DateField pin="round-brick" />
    <DateComponents.DateField pin="brick-brick" />
    <DateComponents.DateField pin="brick-round" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField pin="round-brick" />
<DateField pin="brick-brick" />
<DateField pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## 値

### 最小値と最大値

`minValue` プロパティを使用すると、ユーザーが入力できる最も早い日付と時刻を指定できます。逆に、`maxValue` プロパティは、入力できる最も遅い日付と時刻を指定します。これらの境界外の値が入力された場合、無効な検証状態の場合と同様にコンポーネントの表示が変更されます。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField minValue={dateTimeParse('01.01.2024')} placeholder={"minValue: '01.01.2024'"}/>
<DateField maxValue={dateTimeParse('01.01.2025')} placeholder={"maxValue: '01.01.2025'"}/>
`}
>
    <DateComponentsExamples.DateFieldExample minValue={'01.01.2024'} placeholder={"minValue: '01.01.2024'"} />
    <DateComponentsExamples.DateFieldExample maxValue={'01.01.2025'} placeholder={"maxValue: '01.01.2025'"} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx

<DateField minValue={dateTimeParse('01.01.2024')} />
<DateField maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## ステート

### 無効化

ユーザーがコンポーネントと対話できないようにしたい `DateField` のステート。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField disabled={true} defaultValue={dateTimeParse(new Date())} />
`}
>
    <DateComponentsExamples.DateFieldExample disabled={true} defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField disabled defaultValue={dateTimeParse(new Date())} />
```

<!--/GITHUB_BLOCK-->

### 読み取り専用

`readOnly` はブール属性であり、`true` に設定すると、`DateField` コンポーネントはユーザーにとって変更不可能になります。これは、入力は現在の値を表示しますが、ユーザーはそれを変更できないことを意味します。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField readOnly defaultValue={dateTimeParse(new Date())} />
`}
>
    <DateComponentsExamples.DateFieldExample readOnly defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField readOnly defaultValue={dateTimeParse(new Date())} />
```

<!--/GITHUB_BLOCK-->

### エラー

ユーザーの無効な入力を示したい `DateField` のステート。`DateField` の外観を変更するには、`validationState` プロパティを `"invalid"` 値で設定します。オプションのメッセージテキストは、`errorMessage` プロパティを通じて追加できます。メッセージテキストはコンポーネントの下にレンダリングされます。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField errorMessage="Error message" validationState="invalid" />
<DateField validationState="invalid" />
`}
>
    <DateComponents.DateField errorMessage="Error message" validationState="invalid" />
    <DateComponents.DateField validationState="invalid" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField errorMessage="Error message" validationState="invalid" />
<DateField validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## 追加コンテンツ

### プレースホルダー

このプロパティを使用すると、入力フィールドに期待される値を説明する短いヒントを提供できます。このヒントは、ユーザーが値を入力する前に、入力フィールド内に表示され、テキストが入力されると消えます。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField placeholder='Placeholder' />
`}
>
    <DateComponents.DateField placeholder='Placeholder' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField placeholder="Placeholder" />
```

<!--/GITHUB_BLOCK-->

### ラベル

フィールドの左側にラベルを配置できます。ラベルは、`DateField` の全スペースの半分を超える幅を占めることはできません。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField label="Label" />
<DateField label="Very long label with huge amount of symbols" />
`}
>
    <DateComponents.DateField label="Label" />
    <DateComponents.DateField label="Very long label with huge amount of symbols" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField label="Label" />
```

<!--/GITHUB_BLOCK-->

### クリアボタン

`hasClear` はブール型のプロパティで、ユーザーが入力フィールドの内容をすばやくクリアできるようにします。

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DateField hasClear />`}
>
    <DateComponents.DateField
        hasClear
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField hasClear />
```

<!--/GITHUB_BLOCK-->

### 開始コンテンツ

フィールドの開始部分にコンテンツを追加できます。これは、他のすべてのコンポーネントの前に配置されます。

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DateField label="Label" startContent={<Label size="s">Start content</Label>} />`}
>
    <DateComponents.DateField
        label="Label"
        startContent={<UIKit.Label size="s">Start content</UIKit.Label>}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField label="Label" startContent={<Label>Start content</Label>} />
```

<!--/GITHUB_BLOCK-->

### 終了コンテンツ

フィールドの終了部分にコンテンツを追加できます。これは、他のすべてのコンポーネントの後に配置されます。

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DateField endContent={<Label size="s">End content</Label>} hasClear/>`}
>
    <DateComponents.DateField
        hasClear
        endContent={<UIKit.Label size="s">End content</UIKit.Label>}
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField hasClear endContent={<Label>End content</Label>} />
```

<!--/GITHUB_BLOCK-->

## フォーマット

`format` プロパティは、`DateField` コンポーネントが受け入れ、表示する日付と時刻の形式を定義する文字列です。このプロパティは、日付と時刻がユーザーにどのように視覚的に表示されるか、およびユーザーの入力がどのようにフォーマットされるべきかを決定します。[利用可能なフォーマット](https://day.js.org/docs/en/display/format)

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DateField format='LTS' />
`}
>
    <DateComponents.DateField format='LTS' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DateField format="LTS" />
```

<!--/GITHUB_BLOCK-->

### カスタム日付パーサー

`parseDateFromString` プロパティを通じて、貼り付けられた日付文字列を処理するためのカスタムパーサー関数を提供できます。これは、デフォルトの動作とは異なる特定の С даты форматы またはカスタム解析ロジックをサポートする必要がある場合に役立ちます。

<!--GITHUB_BLOCK-->

```tsx
import {dateTime} from '@gravity-ui/date-utils';

const customParser = (dateStr: string, format: string, timeZone?: string) => {
  // Custom parsing logic
  // For example, handle DD/MM/YYYY format specifically
  if (dateStr.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
    const [day, month, year] = dateStr.split('/');
    return dateTime({input: `${year}-${month}-${day}`, timeZone});
  }
  // Fallback to default parsing
  return dateTime({input: dateStr, format, timeZone});
};

<DateField parseDateFromString={customParser} />;
```

<!--/GITHUB_BLOCK-->

## タイムゾーン

`timeZone` は、入力内の値のタイムゾーンを設定するプロパティです。[タイムゾーンについてさらに詳しく](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## プロパティ

| 名前                | 説明                                                                                                                 |                                 型                                 |          デフォルト          |
| :------------------ | :------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------: | :-----------------------: |
| aria-describedby    | コントロールの `aria-describedby` 属性                                                                               |                               `string`                               |                           |
| aria-details        | コントロールの `aria-details` 属性                                                                               |                               `string`                               |                           |
| aria-label          | コントロールの `aria-label` 属性                                                                               |                               `string`                               |                           |
| aria-labelledby     | コントロールの `aria-labelledby` 属性                                                                            |                               `string`                               |                           |
| autoFocus           | コントロールの `autofocus` 属性                                                                                  |                              `boolean`                               |                           |
| className           | コントロールのラッパークラス名                                                                                     |                               `string`                               |                           |
| defaultValue        | アンコントロールドコンポーネントの初期値を設定します。                                                                   |                              `DateTime`                              |                           |
| disabled            | ユーザーがコントロールと対話できないことを示します                                                                     |                              `boolean`                               |          `false`          |
| errorMessage        | エラーテキスト                                                                                                           |                             `ReactNode`                              |                           |
| format              | 入力フィールドに表示される日付のフォーマット。[利用可能なフォーマット](https://day.js.org/docs/en/display/format)        |                               `string`                               |                           |
| hasClear            | コントロールの値をクリアするためのアイコンを表示します                                                                       |                              `boolean`                               |          `false`          |
| id                  | コントロールの `id` 属性                                                                                         |                               `string`                               |                           |
| isDateUnavailable   | カレンダーの各日付に対して呼び出されるコールバック。true を返すと、その日付は利用不可になります。             |                   `((date: DateTime) => boolean)`                    |                           |
| label               | 入力ノードの左側に表示されるヘルプテキスト                                                                     |                               `string`                               |                           |
| startContent        | ラベルと入力の前にレンダリングされるユーザーノード                                                                      |                          `React.ReactNode`                           |                           |
| maxValue            | ユーザーが選択できる最大許容日付。                                                                     |                              `DateTime`                              |                           |
| minValue            | ユーザーが選択できる最小許容日付。                                                                     |                              `DateTime`                              |                           |
| onBlur              | コントロールがフォーカスを失ったときに発生します。フォーカスイベントをコールバックの引数として提供します                                     |            `((e: FocusEvent<Element, Element>) => void)`             |                           |
| onFocus             | コントロールがフォーカスを取得したときに発生します。フォーカスイベントをコールバックの引数として提供します                                     |            `((e: FocusEvent<Element, Element>) => void)`             |                           |
| onKeyDown           | キーが押されたときに発生します。キーボードイベントをコールバックの引数として提供します                                        |               `((e: KeyboardEvent<Element>) => void)`                |                           |
| onKeyUp             | キーが離されたときに発生します。キーボードイベントをコールバックの引数として提供します                                       |               `((e: KeyboardEvent<Element>) => void)`                |                           |
| onUpdate            | ユーザーによって値が変更されたときに発生します。新しい値をコールバックの引数として提供します                            |                 `((value: DateTime \| null) => void`                 |                           |
| parseDateFromString | ペーストされた日付文字列を解析するためのカスタムパーサー関数。提供されない場合は、デフォルトのパーサーが使用されます。            | `((dateStr: string, format: string, timeZone?: string) => DateTime)` |                           |
| pin                 | コーナーの丸み                                                                                                      |                               `string`                               |      `'round-round'`      |
| placeholder         | 値が設定されていないときにコントロールに表示されるテキスト                                                            |                               `string`                               |                           |
| placeholderValue    | ユーザーが最初に操作したときに各セグメントのデフォルト値を制御するプレースホルダー日付。         |                              `DateTime`                              | `today's date at midnigh` |
| readOnly            | コンポーネントの値が変更不可かどうか。                                                                          |                              `boolean`                               |          `false`          |
| endContent          | 入力ノードとクリアボタンの後にレンダリングされるユーザーノード                                                           |                          `React.ReactNode`                           |                           |
| size                | コントロールのサイズ                                                                                              |                       `"s"` `"m"` `"l"` `"xl"`                       |           `"m"`           |
| style               | 要素のインラインスタイルを設定します。                                                                                   |                           `CSSProperties`                            |                           |
| timeZone            | タイムゾーンを設定します。[タイムゾーンについて学ぶ](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) |                               `string`                               |                           |
| validationState     | 検証状態                                                                                                     |                             `"invalid"`                              |                           |
| value               | コントロールの値                                                                                             |                          `DateTime` `null`                           |                           |
| view                | コントロールのビュー                                                                                              |                         `"normal"` `"clear"`                         |        `"normal"`         |
