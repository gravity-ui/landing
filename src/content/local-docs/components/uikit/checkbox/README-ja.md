<!--GITHUB_BLOCK-->

# Checkbox

<!--/GITHUB_BLOCK-->

`Checkbox` コンポーネントを使用すると、ユーザーは特定の値をオンまたはオフにできます。

```tsx
import {Checkbox} from '@gravity-ui/uikit';
```

## ステート

`Checkbox` にはさまざまなステートがあります。

- Checked: チェックボックスがオンになっています。
- Disabled: チェックボックスは無効になっています。
- Indeterminate: チェックボックスは、オンとオフの中間の状態です。

<!--SANDBOX
import {Checkbox} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Checkbox size="l" checked={false}>Unchecked</Checkbox>
            <Checkbox size="l" checked>Checked</Checkbox>
            <Checkbox size="l" disabled>Disabled</Checkbox>
            <Checkbox size="l" indeterminate>Indeterminate</Checkbox>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Checkbox size="l" checked={false}>Unchecked</Checkbox>
<Checkbox size="l" checked>Checked</Checkbox>
<Checkbox size="l" disabled>Disabled</Checkbox>
<Checkbox size="l" indeterminate>Indeterminate</Checkbox>
```

<!--/GITHUB_BLOCK-->

## サイズ

`size` プロパティを使用して `Checkbox` のサイズを管理します。デフォルトのサイズは `m` です。

<!--SANDBOX
import {Checkbox} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Checkbox size="m">M Size</Checkbox>
            <Checkbox size="l">L Size</Checkbox>
            <Checkbox size="xl">XL Size</Checkbox>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Checkbox size="m">M Size</Checkbox>
<Checkbox size="l">L Size</Checkbox>
<Checkbox size="xl">XL Size</Checkbox>
```

<!--/GITHUB_BLOCK-->

## ラベル

`content` プロパティを使用して `Checkbox` にラベルを割り当てるか、子プロパティとして提供できます。

<!--SANDBOX
import {Checkbox} from '@gravity-ui/uikit';

export default function () {
    return (
        <div>
            <Checkbox content="Content" size="l" />
            <div style={{marginTop: 10}}>
                <Checkbox size="l">
                    <span>Content as children</span>
                </Checkbox>
            </div>
        </div>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Checkbox content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Checkbox size="l">
      <span>Content as children</span>
    </Checkbox>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## プロパティ

| 名前           | 説明                                                                                              |                     タイプ                      | デフォルト |
| :------------- | :------------------------------------------------------------------------------------------------ | :-------------------------------------------: | :-----: |
| children       | チェックボックスの内容（通常はラベル）。                                                              |                  `ReactNode`                  |         |
| content        | チェックボックスの内容（`children` の代替）。                                                          |                  `ReactNode`                  |         |
| disabled       | チェックボックスの `disabled` 状態を切り替えます。                                                        |                   `boolean`                   | `false` |
| checked        | チェックボックスの `checked` 状態を切り替えます。                                                         |                   `boolean`                   | `false` |
| defaultChecked | コンポーネントがマウントされたときの初期のチェック状態を設定します。                                            |                   `boolean`                   | `false` |
| onUpdate       | ユーザーがチェックボックスの状態を変更したときに発生し、チェックされた値をコールバック引数として提供します。 |         `(checked: boolean) => void`          |         |
| onChange       | ユーザーがチェックボックスの状態を変更したときに発生し、変更イベントをコールバック引数として提供します。      |                  `Function`                   |         |
| onFocus        | チェックボックスの入力要素がフォーカスを受け取ったときに使用するイベントハンドラ。                                |                  `Function`                   |         |
| onBlur         | チェックボックスの入力要素がフォーカスを失ったときに使用するイベントハンドラ。                                  |                  `Function`                   |         |
| size           | チェックボックスのサイズを決定します。                                                                    |                    `m` `l`                    |   `m`   |
| id             | `id` HTML属性                                                                                     |                   `string`                    |         |
| qa             | テストに使用される `data-qa` HTML属性                                                               |                   `string`                    |         |
| style          | `style` HTML属性                                                                                  |             `React.CSSProperties`             |         |
| className      | `class` HTML属性                                                                                  |                   `string`                    |         |
| title          | `title` HTML属性                                                                                  |                   `string`                    |         |
| name           | 入力要素の `name` HTML属性。                                                                        |                   `string`                    |         |
| value          | 入力要素の `value` HTML属性。                                                                       |                   `string`                    |         |
| indeterminate  | チェックボックスの `indeterminate` 状態を切り替えます。                                                   |                   `boolean`                   | `false` |
| controlProps   | 基になる入力要素の追加のプロパティ。                                                                    | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef     | 基になる入力要素への参照。                                                                          |         `React.Ref<HTMLInputElement>`         |         |
