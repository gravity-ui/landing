`Palette` コンポーネントは、選択または選択解除できるアイコン、絵文字、リアクション、記号のグリッドを表示するために使用されます。

```tsx
import {Palette} from '@gravity-ui/uikit';
```

### 無効状態

`disabled` プロパティを使用して、すべてのオプションを無効にすることができます。特定のオプションのみを無効にしたい場合は、それらの `options` (`PaletteOption[]`) の `disabled` プロパティを変更できます。

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### サイズ

`size` プロパティを使用して `Palette` のサイズを管理します。デフォルトのサイズは `s` です。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### 列

`columns` プロパティを変更することで、グリッドの列数を変更できます（デフォルト値は `6` です）。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### 複数選択

デフォルトでは、複数のオプションを選択および選択解除できます。単一のオプションのみを選択可能にしたい場合は、`multiple` プロパティを無効にすることができます。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## プロパティ

`PaletteProps`:

| 名前            | 説明                                                                           |                          型                          | デフォルト |
| :-------------- | :----------------------------------------------------------------------------- | :----------------------------------------------------: | :-------: |
| aria-label      | `aria-label` HTML属性                                                          |                        `string`                        |           |
| aria-labelledby | 表示されている `Palette` キャプション要素のID                                  |                        `string`                        |           |
| className       | `class` HTML属性                                                               |                        `string`                        |           |
| columns         | 1行あたりの要素数                                                              |                        `number`                        |   `6`   |
| defaultValue    | コンポーネントがマウントされたときの初期値の状態を設定します                     |                       `string[]`                       |           |
| disabled        | オプションを無効にします                                                       |                       `boolean`                        | `false` |
| multiple        | 複数のオプションを選択できるようにします                                         |                       `boolean`                        | `true`  |
| onBlur          | `onBlur` イベントハンドラ                                                      | `(event: React.FocusEvent<HTMLButtonElement>) => void` |           |
| onFocus         | `onFocus` イベントハンドラ                                                     | `(event: React.FocusEvent<HTMLButtonElement>) => void` |           |
| onUpdate        | ユーザーが状態を変更したときに発生します。新しい値をコールバックの引数として提供します |              `(value: string[]) => void`               |           |
| optionClassName | パレットボタンの `class` HTML属性                                              |                        `string`                        |           |
| options         | オプションのリスト（パレット要素）                                             |                   `PaletteOption[]`                    |  `[]`   |
| qa              | テストに使用される `data-qa` HTML属性                                          |                        `string`                        |           |
| rowClassName    | パレット行の `class` HTML属性                                                  |                        `string`                        |           |
| size            | 要素のサイズを設定します                                                       |                 `xs` `s` `m` `l` `xl`                  |   `m`   |
| style           | `style` HTML属性                                                               |                 `React.CSSProperties`                  |           |
| value           | コンポーネントの制御された使用法での現在の値                                   |                       `string[]`                       |           |

`PaletteOption`:

| 名前     | 説明            |    タイプ     | デフォルト |
| :------- | :---------------- | :---------: | :-----: |
| content  | `class` HTML属性 | `ReactNode` |         |
| disabled | ボタンを無効にします |  `boolean`  | `false` |
| title    | `title` HTML属性 |  `string`   |         |
| value    | コントロールの値 |  `string`   |         |