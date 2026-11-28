<!--GITHUB_BLOCK-->

# SegmentedRadioGroup

<!--/GITHUB_BLOCK-->

`SegmentedRadioGroup` コンポーネントは、ユーザーが複数の選択肢から 1 つのオプションを選択できるラジオボタンのグループを作成するために使用されます。

```tsx
import {SegmentedRadioGroup} from '@gravity-ui/uikit';
```

### 無効状態

<!--SANDBOX
import {SegmentedRadioGroup} from '@gravity-ui/uikit';

export default function () {
    return (
        <SegmentedRadioGroup name="group1" defaultValue="Value 1" disabled>
            <SegmentedRadioGroup.Option value="Value 1">Value 1</SegmentedRadioGroup.Option>
            <SegmentedRadioGroup.Option value="Value 2">Value 2</SegmentedRadioGroup.Option>
            <SegmentedRadioGroup.Option value="Value 3">Value 3</SegmentedRadioGroup.Option>
        </SegmentedRadioGroup>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<SegmentedRadioGroup name="group1" defaultValue="Value 1" disabled>
  <SegmentedRadioGroup.Option value="Value 1">Value 1</SegmentedRadioGroup.Option>
  <SegmentedRadioGroup.Option value="Value 2">Value 2</SegmentedRadioGroup.Option>
  <SegmentedRadioGroup.Option value="Value 3">Value 3</SegmentedRadioGroup.Option>
</SegmentedRadioGroup>
```

<!--/GITHUB_BLOCK-->

### サイズ

`size` プロパティを使用して `SegmentedRadioGroup` のサイズを管理します。デフォルトのサイズは `m` です。

<!--SANDBOX
import {Flex, SegmentedRadioGroup} from '@gravity-ui/uikit';

const options = [
    <SegmentedRadioGroup.Option key="Value 1" value="Value 1">Value 1</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 2" value="Value 2">Value 2</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 3" value="Value 3">Value 3</SegmentedRadioGroup.Option>,
];

export default function () {
    return (
        <Flex direction="column" alignItems="center" gap={2}>
            <SegmentedRadioGroup name="group1" defaultValue="Value 1" size="s">{options}</SegmentedRadioGroup>
            <SegmentedRadioGroup name="group2" defaultValue="Value 1" size="m">{options}</SegmentedRadioGroup>
            <SegmentedRadioGroup name="group3" defaultValue="Value 1" size="l">{options}</SegmentedRadioGroup>
            <SegmentedRadioGroup name="group4" defaultValue="Value 1" size="xl">{options}</SegmentedRadioGroup>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options = [
    <SegmentedRadioGroup.Option key="Value 1" value="Value 1">Value 1</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 2" value="Value 2">Value 2</SegmentedRadioGroup.Option>,
    <SegmentedRadioGroup.Option key="Value 3" value="Value 3">Value 3</SegmentedRadioGroup.Option>,
];

<SegmentedRadioGroup name="group1" defaultValue="Value 1" size="s">{options}</SegmentedRadioGroup>
<SegmentedRadioGroup name="group2" defaultValue="Value 1" size="m">{options}</SegmentedRadioGroup>
<SegmentedRadioGroup name="group3" defaultValue="Value 1" size="l">{options}</SegmentedRadioGroup>
<SegmentedRadioGroup name="group4" defaultValue="Value 1" size="xl">{options}</SegmentedRadioGroup>
```

<!--/GITHUB_BLOCK-->

### 幅

`width` プロパティを使用して `SegmentedRadioGroup` の幅を管理します。

<!--SANDBOX
import {Box, Flex, SegmentedRadioGroup} from '@gravity-ui/uikit';

export default function () {
    return (
        <Box width={140} style={{border: '2px dashed gray'}}>
            <Flex direction="column" gap={2}>
                <SegmentedRadioGroup>
                    <SegmentedRadioGroup.Option value="1" content="none" />
                    <SegmentedRadioGroup.Option value="2" content="none********" />
                </SegmentedRadioGroup>
                <SegmentedRadioGroup width="auto">
                    <SegmentedRadioGroup.Option value="1" content="auto" />
                    <SegmentedRadioGroup.Option value="2" content="auto********" />
                </SegmentedRadioGroup>
                <SegmentedRadioGroup width="max">
                    <SegmentedRadioGroup.Option value="1" content="max" />
                    <SegmentedRadioGroup.Option value="2" content="max" />
                </SegmentedRadioGroup>
            </Flex>
        </Box>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div style={{width: 140, border: '2px dashed gray'}}>
  <div style={{marginBottom: 10}}>
    <SegmentedRadioGroup>
      <SegmentedRadioGroup.Option value="1" content="none" />
      <SegmentedRadioGroup.Option value="2" content="none********" />
    </SegmentedRadioGroup>
  </div>
  <div style={{marginBottom: 10}}>
    <SegmentedRadioGroup width="auto">
      <SegmentedRadioGroup.Option value="1" content="auto" />
      <SegmentedRadioGroup.Option value="2" content="auto********" />
    </SegmentedRadioGroup>
  </div>
  <div>
    <SegmentedRadioGroup width="max">
      <SegmentedRadioGroup.Option value="1" content="max" />
      <SegmentedRadioGroup.Option value="2" content="max" />
    </SegmentedRadioGroup>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## プロパティ

| 名前         | 説明                                                                                             |                型                | デフォルト |
| :----------- | :----------------------------------------------------------------------------------------------- | :------------------------------: | :-------: |
| children     | ラジオボタンのコンテンツ。                                                                       |            `ReactNode`             |           |
| disabled     | ラジオボタンの `disabled` 状態を切り替えます。                                                   |             `boolean`              | `false`   |
| options      | ラジオボタンのオプション。                                                                       | `SegmentedRadioGroupOptionProps[]` |           |
| defaultValue | コンポーネントがマウントされたときの初期値の状態を設定します。                                     |              `string`              |           |
| onUpdate     | ユーザーがラジオボタンの状態を変更したときに発生し、新しい値をコールバック引数として提供します。 |     `(value: string) => void`      |           |
| onChange     | ユーザーがラジオボタンの状態を変更したときに発生し、変更イベントをコールバック引数として提供します。 |             `Function`             |           |
| onFocus      | ラジオ入力要素がフォーカスを受け取ったときに使用するイベントハンドラ。                         |             `Function`             |           |
| onBlur       | ラジオ入力要素がフォーカスを失ったときに使用するイベントハンドラ。                             |             `Function`             |           |
| width        | ラジオボタンの幅を設定します。                                                                   |            `auto - max`            |           |
| size         | ラジオボタンのサイズを設定します。                                                               |          `s` `m` `l` `xl`          |   `m`     |
| name         | 入力要素の `name` HTML 属性。                                                                    |              `string`              |           |
| qa           | テストに使用される `data-qa` HTML 属性                                                           |              `string`              |           |
| style        | `style` HTML 属性                                                                                |       `React.CSSProperties`        |           |
| className    | `class` HTML 属性                                                                                |              `string`              |           |

## SegmentedRadioGroup.Option

`SegmentedRadioGroup` コンポーネントは、ネストされた `Option` コンポーネントもエクスポートします。これを使用して、`SegmentedRadioGroup` 内でラジオボタンのオプションを作成できます。

<!--SANDBOX
import type {SegmentedRadioGroupOptionProps} from '@gravity-ui/uikit';
import {SegmentedRadioGroup} from '@gravity-ui/uikit';

const options: SegmentedRadioGroupOptionProps[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <SegmentedRadioGroup name="group1" defaultValue={options[0].value}>
            <SegmentedRadioGroup.Option content={options[0].content} value={options[0].value} />
            <SegmentedRadioGroup.Option content={options[1].content} value={options[1].value} />
            <SegmentedRadioGroup.Option content={options[2].content} value={options[2].value} />
        </SegmentedRadioGroup>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: SegmentedRadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<SegmentedRadioGroup name="group1" defaultValue={options[0].value}>
  <SegmentedRadioGroup.Option content={options[0].content} value={options[0].value} />
  <SegmentedRadioGroup.Option content={options[1].content} value={options[1].value} />
  <SegmentedRadioGroup.Option content={options[2].content} value={options[2].value} />
</SegmentedRadioGroup>;
```

<!--/GITHUB_BLOCK-->

### プロパティ

| 名前     | 説明                                         |    タイプ     | デフォルト |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | ラジオのコンテンツ（通常はラベル）。        | `ReactNode` |         |
| content  | ラジオのコンテンツ（childrenの代替）。 | `ReactNode` |         |
| disabled | ラジオの `disabled` 状態を切り替えます。          |  `boolean`  | `false` |
| value    | コントロールの値                                       |  `string`   |         |
