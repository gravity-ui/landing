<!--GITHUB_BLOCK-->

# DatePicker

<!--/GITHUB_BLOCK-->

```tsx
import {DatePicker} from '@gravity-ui/date-components';
```

`DatePicker` は、React アプリケーションで直感的な日付選択機能を提供する、洗練された軽量で完全にカスタマイズ可能なコンポーネントです。ユーザーエクスペリエンスと統合の容易さを念頭に置いて構築されており、フォーム、モーダル、または日付入力が必要な UI 要素にシームレスにフィットします。`value` プロパティを設定すると、制御されたコンポーネントになります。または、`value` を設定しない場合は制御されていないコンポーネントになりますが、この場合、オプションの `defaultValue` プロパティで初期状態を管理できます。コンポーネントはデフォルトで制御されていません。

### 便利な追加機能

正しい形式で日付を設定するには、[Date Utils ライブラリ](https://gravity-ui.com/libraries/date-utils)から追加のヘルパーを含める必要がある場合があります。

```tsx
import {dateTimeParse, dateTime} from '@gravity-ui/date-utils';
```

## 外観

`DatePicker` の外観は、`size`、`view`、および `pin` プロパティによって制御されます。

### サイズ

`DatePicker` のサイズを制御するには、`size` プロパティを使用します。デフォルトのサイズは `m` です。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker size="s" />
<DatePicker size="m" />
<DatePicker size="l" />
<DatePicker size="xl" />
`}
>
    <DateComponents.DatePicker size="s" />
    <DateComponents.DatePicker size="m" />
    <DateComponents.DatePicker size="l" />
    <DateComponents.DatePicker size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker size="s" />
<DatePicker size="m" />
<DatePicker size="l" />
<DatePicker size="xl" />
```

<!--/GITHUB_BLOCK-->

### 表示

`normal` - `DatePicker` のメイン表示（デフォルトで使用されます）。

<!--LANDING_BLOCK
<ExampleBlock code={`<DatePicker />`}>
    <DateComponents.DatePicker />
</ExampleBlock>
LANDING_BLOCK-->

`clear` - 可視的な境界線のない `DatePicker` の表示（カスタムラッパーと組み合わせて使用できます）。

<!--LANDING_BLOCK
<ExampleBlock code={`<DatePicker view="clear" />`}>
    <DateComponents.DatePicker view="clear" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker view="normal" />
<DatePicker view="clear" />
```

<!--/GITHUB_BLOCK-->

### ピン

`pin` プロパティを使用すると、左右の端の形状を制御できます。通常、複数のコントロールを 1 つのユニットに結合する場合に使用されます。
`pin` プロパティの値は、ダッシュで区切られた左端と右端のスタイル名で構成されます。例：「round-brick」。
エッジスタイルは、`round`（デフォルト）、`circle`、`brick`、`clear` です。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker pin="round-brick" />
<DatePicker pin="brick-brick" />
<DatePicker pin="brick-round" />
`}
>
    <DateComponents.DatePicker pin="round-brick" />
    <DateComponents.DatePicker pin="brick-brick" />
    <DateComponents.DatePicker pin="brick-round" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker pin="round-brick" />
<DatePicker pin="brick-brick" />
<DatePicker pin="brick-round" />
```

<!--/GITHUB_BLOCK-->

## 値

### 最小値と最大値

`minValue` プロパティを使用すると、ユーザーが入力できる最も早い日時を指定できます。逆に、`maxValue` プロパティは、入力できる最も遅い日時を指定します。この範囲外の値が入力された場合、無効な検証状態の場合と同様に、コンポーネントの表示が変更されます。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker minValue={dateTimeParse('01.01.2024')} placeholder={"minValue: '01.01.2024'"}/>
<DatePicker maxValue={dateTimeParse('01.01.2025')} placeholder={"maxValue: '01.01.2025'"}/>
`}
>
    <DateComponentsExamples.DatePickerExample minValue={'01.01.2024'} placeholder={"minValue: '01.01.2024'"} />
    <DateComponentsExamples.DatePickerExample maxValue={'01.01.2025'} placeholder={"maxValue: '01.01.2025'"} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx

<DatePicker minValue={dateTimeParse('01.01.2024')} />
<DatePicker maxValue={dateTimeParse('01.01.2025')} />
```

<!--/GITHUB_BLOCK-->

## ステート

### 無効

ユーザーがコンポーネントと対話できないようにしたい `DatePicker` のステートです。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker disabled={true} defaultValue={dateTime()} />
`}
>
    <DateComponentsExamples.DatePickerExample disabled={true} defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker disabled defaultValue={dateTime()} />
```

<!--/GITHUB_BLOCK-->

### 読み取り専用

`readOnly` はブール属性であり、`true` に設定すると、`DatePicker` コンポーネントはユーザーにとって変更不可能になります。これは、入力フィールドに現在の値が表示されますが、ユーザーはそれを変更できないことを意味します。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker readOnly defaultValue={dateTimeParse(new Date())} />
`}
>
    <DateComponentsExamples.DatePickerExample readOnly defaultValue={new Date()} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker readOnly defaultValue={dateTime()} />
```

<!--/GITHUB_BLOCK-->

### エラー

ユーザーの入力が無効であることを示したい `DatePicker` のステートです。`DatePicker` の外観を変更するには、`validationState` プロパティを `"invalid"` 値で設定します。オプションのメッセージテキストは、`errorMessage` プロパティを通じて追加できます。メッセージテキストはコンポーネントの下にレンダリングされます。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker errorMessage="Error message" validationState="invalid" />
<DatePicker validationState="invalid" />
`}
>
    <DateComponents.DatePicker errorMessage="Error message" validationState="invalid" />
    <DateComponents.DatePicker validationState="invalid" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker errorMessage="Error message" validationState="invalid" />
<DatePicker validationState="invalid" />
```

<!--/GITHUB_BLOCK-->

## 追加コンテンツ

### プレースホルダー

このプロパティを使用すると、入力フィールドに期待される値を説明する短いヒントを提供できます。このヒントは、ユーザーが値を入力する前に、入力フィールド内に表示され、テキストが入力されると消えます。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker placeholder="Placeholder" />
`}
>
    <DateComponents.DatePicker placeholder='Placeholder' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker placeholder="Placeholder" />
```

<!--/GITHUB_BLOCK-->

### ラベル

フィールドの左側にラベルを配置できます。ラベルは、`DatePicker` 全体のスペースの半分を超えることはできません。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker label="Label" />
<DatePicker label="Very long label with huge amount of symbols" />
`}
>
    <DateComponents.DatePicker label="Label" />
    <DateComponents.DatePicker label="Very long label with huge amount of symbols" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker label="Label" />
```

<!--/GITHUB_BLOCK-->

### クリアボタン

`hasClear` はブール型のプロパティで、ユーザーが入力フィールドの内容をすばやくクリアできるようにします。

<!--LANDING_BLOCK
<ExampleBlock
    code={`<DatePicker hasClear />`}
>
    <DateComponents.DatePicker
        hasClear
    />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker hasClear />
```

<!--/GITHUB_BLOCK-->

## フォーマット

`format` プロパティは、`DatePicker` コンポーネントが受け入れて表示する日付と時刻の形式を定義する文字列です。このプロパティは、日付と時刻がユーザーにどのように視覚的に表示されるか、およびユーザーの入力がどのようにフォーマットされるべきかを決定します。[利用可能なフォーマット](https://day.js.org/docs/en/display/format)

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<DatePicker format='LL' />
`}
>
    <DateComponents.DatePicker format='LL' />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<DatePicker format="LL" />
```

<!--/GITHUB_BLOCK-->

### カスタム日付パーサー

`parseDateFromString` プロパティを通じて、貼り付けられた日付文字列を処理するためのカスタムパーサー関数を提供できます。これは、デフォルトの動作とは異なる特定の Срок или пользовательскую логику разбора, которую вы хотите поддержать, когда вам нужно поддержать.

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

<DatePicker parseDateFromString={customParser} />;
```

<!--/GITHUB_BLOCK-->

## タイムゾーン

`timeZone` は、入力内の値のタイムゾーンを設定するためのプロパティです。[タイムゾーンについて学ぶ](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)

## カスタマイズ

`DatePicker` の内部にカスタムカレンダーコンポーネントを使用したい場合は、カレンダーのようなプロパティを持つ `children` として渡すことができます。

<!--LANDING_BLOCK
[Learn more about calendar](https://gravity-ui.com/components/date-components/calendar)
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

[Learn more about calendar](https://github.com/gravity-ui/date-components/blob/main/src/components/Calendar/README.md)

<!--/GITHUB_BLOCK-->

## プロパティ

| 名前                           | 説明                                                                                                                                |                               タイプ                                 |          デフォルト          |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------: | :-----------------------: |
| aria-describedby               | コントロールの `aria-describedby`。オブジェクトを説明する要素（複数可）を識別します。属性
