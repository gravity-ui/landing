`RadioGroup` コンポーネントは、複数の選択肢の中からユーザーが 1 つのオプションを選択できるグループを作成するために使用されます。

```tsx
import {RadioGroup} from '@gravity-ui/uikit';
```

### 無効状態

GRAVITY_TRANSLATION_BLOCK_0_END

### サイズ

`size` プロパティを使用して `RadioGroup` のサイズを管理します。デフォルトのサイズは `m` です。

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### 方向

`direction` プロパティを使用して `RadioGroup` の方向を管理します。デフォルトの方向は `horizontal` です。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

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

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### プロパティ

| 名前     | 説明                                         |    Type     | デフォルト |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | ラジオの内容（通常はラベル）。        | `ReactNode` |         |
| content  | ラジオの内容（children の代替）。 | `ReactNode` |         |
| disabled | ラジオの `disabled` 状態を切り替えます。          |  `boolean`  | `false` |
| value    | コントロール値                                       |  `string`   |         |