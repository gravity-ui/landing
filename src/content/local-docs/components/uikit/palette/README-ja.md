<!--GITHUB_BLOCK-->

# Palette

<!--/GITHUB_BLOCK-->

`Palette` コンポーネントは、選択または選択解除できるアイコン、絵文字、リアクション、記号のグリッドを表示するために使用されます。

```tsx
import {Palette} from '@gravity-ui/uikit';
```

### 無効状態

`disabled` プロパティを使用して、すべてのオプションを無効にすることができます。特定のオプションのみを無効にしたい場合は、それらの `options` (`PaletteOption[]`) の `disabled` プロパティを変更できます。

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

const disabledOptions: PaletteOption[] = [{...options[0], disabled: true}, options[1]];

export default function () {
    return (
        <>
            <Palette options={disabledOptions} />
            <Palette options={options} disabled />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  // disable a single item
  {content: '😎', value: 'ID-cool', disabled: true},
  {content: '🥴', value: 'ID-woozy'},
];
// or disable all of them
<Palette options={options} disabled={true} />;
```

<!--/GITHUB_BLOCK-->

### サイズ

`size` プロパティを使用して `Palette` のサイズを管理します。デフォルトのサイズは `s` です。

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return (
        <>
            <Palette options={options} size="xs" />
            <Palette options={options} size="s" />
            <Palette options={options} size="m" />
            <Palette options={options} size="l" />
            <Palette options={options} size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} size={"xs"} />
<Palette options={options} size={"s"} />
<Palette options={options} size={"m"} />
<Palette options={options} size={"l"} />
<Palette options={options} size={"xl"} />
```

<!--/GITHUB_BLOCK-->

### 列

`columns` プロパティを変更することで、グリッドの列数を変更できます（デフォルト値は `6` です）。

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return <Palette options={options} columns={1} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

### 複数選択

デフォルトでは、複数のオプションを選択および選択解除できます。単一のオプションのみを選択可能にしたい場合は、`multiple` プロパティを無効にすることができます。

<!--SANDBOX
import type {PaletteOption} from '@gravity-ui/uikit';
import {Palette} from '@gravity-ui/uikit';

const options: PaletteOption[] = [
    {content: '😎', value: 'ID-cool'},
    {content: '🥴', value: 'ID-woozy'},
];

export default function () {
    return <Palette options={options} multiple={false} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const options: PaletteOption[] = [
  {content: '😎', value: 'ID-cool'},
  {content: '🥴', value: 'ID-woozy'},
];
<Palette options={options} columns={1} />;
```

<!--/GITHUB_BLOCK-->

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
