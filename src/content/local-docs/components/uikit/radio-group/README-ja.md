<!--GITHUB_BLOCK-->

# RadioGroup

<!--/GITHUB_BLOCK-->

`RadioGroup` コンポーネントは、複数の選択肢の中からユーザーが 1 つのオプションを選択できるグループを作成するために使用されます。

```tsx
import {RadioGroup} from '@gravity-ui/uikit';
```

### 無効状態

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <RadioGroup name="group2" defaultValue={options[0].value} options={options} disabled />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group2" defaultValue={options[0].value} options={options} disabled />;
```

<!--/GITHUB_BLOCK-->

### サイズ

`size` プロパティを使用して `RadioGroup` のサイズを管理します。デフォルトのサイズは `m` です。

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <>
            <RadioGroup name="group1" defaultValue={options[0].value} options={options} size="m" />
            <RadioGroup name="group2" defaultValue={options[0].value} options={options} size="l" />
            <RadioGroup name="group3" defaultValue={options[0].value} options={options} size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
  const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
  ];
  <RadioGroup name="group1" defaultValue={options[0].value} options={options} size="m"/>
  <RadioGroup name="group2" defaultValue={options[0].value} options={options} size="l"/>
  <RadioGroup name="group3" defaultValue={options[0].value} options={options} size="xl"/>
```

<!--/GITHUB_BLOCK-->

### 方向

`direction` プロパティを使用して `RadioGroup` の方向を管理します。デフォルトの方向は `horizontal` です。

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <>
            <RadioGroup
                name="group1"
                defaultValue={options[0].value}
                options={options}
                direction="horizontal"
            />
            <RadioGroup
                name="group2"
                defaultValue={options[0].value}
                options={options}
                direction="vertical"
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
  const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
  ];
  <RadioGroup name="group1" defaultValue={options[0].value} options={options} direction="horizontal"/>
  <RadioGroup name="group2" defaultValue={options[0].value} options={options} direction="vertical"/>
```

<!--/GITHUB_BLOCK-->

## プロパティ

| 名前            | 説明                                                                                       |           Type            |    デフォルト     |
| :-------------- | :------------------------------------------------------------------------------------------------ | :-----------------------: | :------------: |
| children        | ラジオグループの内容。                                                                   |        `ReactNode`        |                |
| disabled        | ラジオグループの `disabled` 状態を切り替えます。                                                  |         `boolean`         |    `false`     |
| options         | ラジオグループのオプション。                                                                          |   `RadioGroupOption[]`    |                |
| optionClassName | ラジオの子要素の `class` HTML 属性。                                                    |         `string`          |                |
| direction       | ラジオグループの方向を決定します。                                                      |  `horizontal - vertical`  | `"horizontal"` |
| defaultValue    | コンポーネントがマウントされたときの初期値の状態を設定します。                                       |         `string`          |                |
| onUpdate        | ユーザーがラジオの状態を変更したときに発生し、新しい値をコールバック引数として提供します。    | `(value: string) => void` |                |
| onChange        | ユーザーがラジオの状態を変更したときに発生し、変更イベントをコールバック引数として提供します。 |        `Function`         |                |
| size            | ラジオグループのサイズを決定します。                                                           |          `m` `l`          |      `m`       |
| qa              | テストに使用される `data-qa` HTML 属性                                                        |         `string`          |                |
| style           | `style` HTML 属性                                                                            |   `React.CSSProperties`   |                |
| className       | `class` HTML 属性                                                                            |         `string`          |                |

## RadioGroup.Option

`RadioGroup` コンポーネントは、`Radio` に相当するネストされた `Option` コンポーネントもエクスポートしており、`RadioGroup` 内でラジオオプションを作成するために使用できます。

<!--SANDBOX
import type {RadioGroupOption} from '@gravity-ui/uikit';
import {RadioGroup} from '@gravity-ui/uikit';

const options: RadioGroupOption[] = [
    {value: 'Value 1', content: 'Value 1'},
    {value: 'Value 2', content: 'Value 2'},
    {value: 'Value 3', content: 'Value 3'},
];

export default function () {
    return (
        <RadioGroup name="group1" defaultValue={options[0].value}>
            <RadioGroup.Option content={options[0].content} value={options[0].value} />
            <RadioGroup.Option content={options[1].content} value={options[1].value} />
            <RadioGroup.Option content={options[2].content} value={options[2].value} />
        </RadioGroup>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: RadioGroupOption[] = [
  {value: 'Value 1', content: 'Value 1'},
  {value: 'Value 2', content: 'Value 2'},
  {value: 'Value 3', content: 'Value 3'},
];
<RadioGroup name="group1" defaultValue={options[0].value}>
  <RadioGroup.Option content={options[0].content} value={options[0].value} />
  <RadioGroup.Option content={options[1].content} value={options[1].value} />
  <RadioGroup.Option content={options[2].content} value={options[2].value} />
</RadioGroup>;
```

<!--/GITHUB_BLOCK-->

### プロパティ

| 名前     | 説明                                         |    Type     | デフォルト |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | ラジオの内容（通常はラベル）。        | `ReactNode` |         |
| content  | ラジオの内容（children の代替）。 | `ReactNode` |         |
| disabled | ラジオの `disabled` 状態を切り替えます。          |  `boolean`  | `false` |
| value    | コントロール値                                       |  `string`   |         |
