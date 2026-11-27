<!--GITHUB_BLOCK-->

# Switch

<!--/GITHUB_BLOCK-->

`Switch` コンポーネントは、通常 **オン** / **オフ**、または **有効** / **無効** の2つの状態を切り替えるために使用されます。

```tsx
import {Switch} from '@gravity-ui/uikit';
```

## 状態

`Switch` にはさまざまな状態があります。

- チェック済み: スイッチが **オン** の状態の場合。
- 無効: スイッチが利用できない場合。

<!--SANDBOX
import {Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Switch size="l" checked={false}>
                Unchecked
            </Switch>
            <Switch size="l" checked>
                Checked
            </Switch>
            <Switch size="l" disabled>
                Disabled
            </Switch>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="l" checked={false}>Unchecked</Switch>
<Switch size="l" checked>Checked</Switch>
<Switch size="l" disabled>Disabled</Switch>
```

<!--/GITHUB_BLOCK-->

## サイズ

`size` プロパティを使用して `Switch` のサイズを管理します。デフォルトのサイズは `m` です。

<!--SANDBOX
import {Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Switch size="s">S Size</Switch>
            <Switch size="m">M Size</Switch>
            <Switch size="l">L Size</Switch>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="s">S Size</Switch>
<Switch size="m">M Size</Switch>
<Switch size="l">L Size</Switch>
```

<!--/GITHUB_BLOCK-->

## ラベル

`content` プロパティを使用して `Switch` にラベルを割り当てるか、子プロパティとして提供できます。

<!--SANDBOX
import {Box, Switch} from '@gravity-ui/uikit';

export default function () {
    return (
        <div>
            <Switch content="Content" size="l" />
            <Box spacing={{mt: 2}}>
                <Switch size="l">
                    <span>Content as children</span>
                </Switch>
            </Box>
        </div>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Switch content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Switch size="l">
      <span>Content as children</span>
    </Switch>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## プロパティ

| 名前           | 説明                                                                                                     |                     タイプ                      | デフォルト |
| :------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----: |
| children       | スイッチの内容（通常はラベル）                                                                             |                  `ReactNode`                  |         |
| content        | スイッチの内容（`children` の代替）                                                                        |                  `ReactNode`                  |         |
| disabled       | スイッチの `disabled` 状態を切り替えます                                                                 |                   `boolean`                   | `false` |
| loading        | スイッチの `loading` 状態を切り替えます                                                                  |                   `boolean`                   | `false` |
| checked        | スイッチの `checked` 状態を切り替えます                                                                  |                   `boolean`                   | `false` |
| defaultChecked | コンポーネントがマウントされたときの初期のチェック状態を設定します                                           |                   `boolean`                   | `false` |
| onUpdate       | ユーザーがスイッチの状態を変更したときに発生し、チェックされた値をコールバック引数として提供します             |         `(checked: boolean) => void`          |         |
| onChange       | ユーザーがスイッチの状態を変更したときに発生し、変更イベントをコールバック引数として提供します               |                  `Function`                   |         |
| onFocus        | スイッチの入力要素がフォーカスを受け取ったときに使用するイベントハンドラ                                   |                  `Function`                   |         |
| onBlur         | スイッチの入力要素がフォーカスを失ったときに使用するイベントハンドラ                                       |                  `Function`                   |         |
| size           | スイッチのサイズを設定します                                                                               |                  `s` `m` `l`                  |   `m`   |
| id             | `id` HTML属性                                                                                            |                   `string`                    |         |
| qa             | `data-qa` HTML属性、テストに使用されます                                                                   |                   `string`                    |         |
| style          | `style` HTML属性                                                                                         |             `React.CSSProperties`             |         |
| className      | `class` HTML属性                                                                                         |                   `string`                    |         |
| title          | `title` HTML属性                                                                                         |                   `string`                    |         |
| name           | 入力要素の `name` HTML属性                                                                               |                   `string`                    |         |
| value          | 入力要素の `value` HTML属性                                                                              |                   `string`                    |         |
| indeterminate  | スイッチの不確定状態を切り替えます                                                                       |                   `boolean`                   | `false` |
| controlProps   | 基盤となる入力要素に追加のプロパティ                                                                     | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef     | 基盤となる入力要素への参照                                                                               |         `React.Ref<HTMLInputElement>`         |         |
