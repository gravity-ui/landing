`SegmentedRadioGroup` コンポーネントは、ユーザーが複数の選択肢から 1 つのオプションを選択できるラジオボタンのグループを作成するために使用されます。

```tsx
import {SegmentedRadioGroup} from '@gravity-ui/uikit';
```

### 無効状態

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### サイズ

`size` プロパティを使用して `SegmentedRadioGroup` のサイズを管理します。デフォルトのサイズは `m` です。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### 幅

`width` プロパティを使用して `SegmentedRadioGroup` の幅を管理します。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## プロパティ

| 名前         | 説明                                                                                             |                型                | デフォルト |
| :----------- | :----------------------------------------------------------------------------------------------- | :------------------------------: | :-------: |
| children     | ラジオボタンのコンテンツ。                                                                       |            `ReactNode`             |           |
| disabled     | ラジオボタンの `disabled` 状態を切り替えます。                                                   |             `boolean`              | `false`   |
| options      | ラジオボタンのオプション。                                                                       | `SegmentedRadioGroupOptionProps[]` |           |
| defaultValue | コンポーネントがマウントされたときの初期値の状態を設定します。                                     |              `string`              |           |
| onUpdate     | ユーザーがラジオボタンの状態を変更したときに発生し、新しい値をコールバック引数として提供します。 |     `(value: string) => void`      |           |
| onChange     | ユーザーがラジオボタンの状態を変更したときに発生し、変更イベントをコールバック引数として提供します。 |             `Function`             |           |
| onFocus      | ラジオ入力要素がフォーカスを受け取ったときに使用するイベントハンドラ。                           |             `Function`             |           |
| onBlur       | ラジオ入力要素がフォーカスを失ったときに使用するイベントハンドラ。                               |             `Function`             |           |
| width        | ラジオボタンの幅を設定します。                                                                   |            `auto - max`            |           |
| size         | ラジオボタンのサイズを設定します。                                                               |          `s` `m` `l` `xl`          |   `m`     |
| name         | 入力要素の `name` HTML 属性。                                                                    |              `string`              |           |
| qa           | テストに使用される `data-qa` HTML 属性                                                           |              `string`              |           |
| style        | `style` HTML 属性                                                                                |       `React.CSSProperties`        |           |
| className    | `class` HTML 属性                                                                                |              `string`              |           |

## SegmentedRadioGroup.Option

`SegmentedRadioGroup` コンポーネントは、ネストされた `Option` コンポーネントもエクスポートします。これを使用して、`SegmentedRadioGroup` 内にラジオボタンオプションを作成できます。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### プロパティ

| 名前     | 説明                                         |    タイプ     | デフォルト |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | ラジオのコンテンツ（通常はラベル）。        | `ReactNode` |         |
| content  | ラジオのコンテンツ（childrenの代替）。 | `ReactNode` |         |
| disabled | ラジオの `disabled` 状態を切り替えます。          |  `boolean`  | `false` |
| value    | コントロールの値                                       |  `string`   |         |