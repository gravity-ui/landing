`Radio` コンポーネントを使用すると、ユーザーは選択肢のリストから 1 つのオプションを選択できます。

```tsx
import {Radio} from '@gravity-ui/uikit';
```

## 状態

`Radio` には次の状態があります。

- チェック済み: Radio が選択されています。
- 無効: Radio は選択できません。

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## サイズ

`Radio` のサイズを管理するには、`size` プロパティを使用します。デフォルトのサイズは `m` です。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## ラベル

`content` プロパティを使用して `Radio` にラベルを割り当てるか、子プロパティとして提供できます。

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## プロパティ

| 名前           | 説明                                                                                                     |                     タイプ                      | デフォルト |
| :------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----: |
| children       | ラジオボタンのコンテンツ（通常はラベル）。                                                                 |                  `ReactNode`                  |         |
| content        | ラジオボタンのコンテンツ（`children` の代替）。                                                          |                  `ReactNode`                  |         |
| disabled       | ラジオボタンの `disabled` 状態を切り替えます。                                                           |                   `boolean`                   | `false` |
| checked        | ラジオボタンの `checked` 状態を切り替えます。                                                            |                   `boolean`                   | `false` |
| defaultChecked | コンポーネントがマウントされたときの初期のチェック状態を設定します。                                         |                   `boolean`                   | `false` |
| onUpdate       | ユーザーによってラジオボタンの状態が変更されたときに発生し、チェックされた値をコールバック引数として提供します。 |         `(checked: boolean) => void`          |         |
| onChange       | ユーザーによってラジオボタンの状態が変更されたときに発生し、変更イベントをコールバック引数として提供します。   |                  `Function`                   |         |
| onFocus        | ラジオボタンの入力要素がフォーカスを受け取ったときのイベントハンドラ。                                     |                  `Function`                   |         |
| onBlur         | ラジオボタンの入力要素がフォーカスを失ったときのイベントハンドラ。                                         |                  `Function`                   |         |
| size           | ラジオボタンのサイズを設定します。                                                                       |                    `m` `l`                    |   `m`   |
| id             | `id` HTML 属性                                                                                           |                   `string`                    |         |
| qa             | `data-qa` HTML 属性、テストに使用されます。                                                              |                   `string`                    |         |
| style          | `style` HTML 属性                                                                                        |             `React.CSSProperties`             |         |
| className      | `class` HTML 属性                                                                                        |                   `string`                    |         |
| title          | `title` HTML 属性                                                                                        |                   `string`                    |         |
| name           | 入力要素の `name` HTML 属性                                                                              |                   `string`                    |         |
| value          | コントロールの値                                                                                         |                   `string`                    |         |
| indeterminate  | ラジオボタンの不確定状態を切り替えます。                                                                   |                   `boolean`                   | `false` |
| controlProps   | 基盤となる入力要素に追加のプロパティ                                                                     | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef     | 基盤となる入力要素への参照                                                                               |         `React.Ref<HTMLInputElement>`         |         |