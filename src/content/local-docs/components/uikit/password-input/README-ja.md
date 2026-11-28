<!--GITHUB_BLOCK-->

## Password Input

<!--/GITHUB_BLOCK-->

```tsx
import {PasswordInput} from '@gravity-ui/uikit';
```

パスワードやその他の機密情報を入力するための `PasswordInput` です。コピーボタンや表示ボタンと組み合わせて、より便利に使用できます。

### コピーボタン

このボタンを使用すると、ユーザーは入力値を簡単にクリップボードにコピーできます。`hideCopyButton` ブーリアンプロパティを使用して、このボタンを非表示にすることができます。

<!--SANDBOX
import {PasswordInput} from '@gravity-ui/uikit';

export default function () {
    return <PasswordInput hideCopyButton />;
}
SANDBOX-->

### 表示ボタン

`hideRevealButton` プロパティを使用すると、ユーザーはパスワードの表示/非表示を切り替えることができます。

<!--SANDBOX
import {PasswordInput} from '@gravity-ui/uikit';

export default function () {
    return <PasswordInput hideRevealButton />;
}
SANDBOX-->

### プロパティ

`TextInput` の[プロパティ](https://github.com/gravity-ui/uikit/blob/main/src/components/controls/TextInput/README.md#properties)に加えて、いくつかの例外と追加があります。

- `type` は省略されます。

| 名前                | 説明                                                              |    型    | デフォルト |
| :------------------ | :---------------------------------------------------------------- | :------: | :------: |
| hideCopyButton      | コピーボタンを表示します                                          | `boolean` | `false` |
| hideRevealButton    | 表示ボタンを表示します                                            | `boolean` | `false` |
| showCopyTooltip     | コピーボタンのツールチップを表示するかどうかを決定します          | `boolean` | `false` |
| showRevealTooltip   | 表示ボタンのツールチップを表示するかどうかを決定します            | `boolean` | `false` |
| revealValue         | パスワード入力フィールドの表示状態を決定します                    | `boolean` | `false` |
| onRevealValueUpdate | `revealValue` の状態が変更されるたびに呼び出されるコールバック関数 | `function` |         |

<!--GITHUB_BLOCK-->

#### Usage example

```tsx
function MyComponent() {
  const [value, setValue] = React.useState('');

  return <PasswordInput onUpdate={setValue} value={value} />;
}
```

<!--/GITHUB_BLOCK-->
