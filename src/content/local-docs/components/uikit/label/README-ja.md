<!--GITHUB_BLOCK-->

# Label

<!--/GITHUB_BLOCK-->

`Label` を使用して、特定の情報を強調表示できます。`Close` または `Copy` ボタンを持つ `Label` は、さまざまな簡単なアクションに役立ちます。

`Label` は、重要度を示すさまざまなカラーコードを持つ一行テキスト情報を表示するのに最も適しています。

```tsx
import {Label} from '@gravity-ui/uikit';
```

## 外観

`Label` は複数のスタイルで表示できます。

### テーマ

`theme` プロパティを使用して、さまざまなステータスに対して異なるテーマを適用します。次の値を使用できます: `normal`, `info`, `success`, `warning`, `danger`, `utility`, `unknown`, および `clear`。
デフォルトのテーマは `normal` です。

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label theme="normal">Normal</Label>
            <Label theme="info">Info</Label>
            <Label theme="success">Success</Label>
            <Label theme="warning">Warning</Label>
            <Label theme="danger">Danger</Label>
            <Label theme="utility">Utility</Label>
            <Label theme="unknown">Unknown</Label>
            <Label theme="clear">Clear</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal">Normal</Label>
<Label theme="info">Info</Label>
<Label theme="success">Success</Label>
<Label theme="warning">Warning</Label>
<Label theme="danger">Danger</Label>
<Label theme="utility">Utility</Label>
<Label theme="unknown">Unknown</Label>
<Label theme="clear">Clear</Label>
```

<!--/GITHUB_BLOCK-->

### タイプ

`type` プロパティは、`Label` にさまざまなオプションを追加します:

`copy`: コピーボタンを追加します。クリックすると、`copyText` プロパティの値がコピーされます。

`close`: ラベルリストを管理するための閉じるボタンを追加します。

`info`: ラベルに情報アイコンを追加します。

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label type="default" onClick={() => alert('On click label')} size="s">
                Clickable
            </Label>
            <Label type="close" onCloseClick={() => alert('On click close')} size="s">
                Closable
            </Label>
            <Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">
                Copy
            </Label>
            <Label type="info" size="s">Info</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label type="default" onClick={() => alert('On click label')} size="s">Clickable</Label>
<Label type="close" onCloseClick={() => alert('On click close')} size="s">Closable</Label>
<Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">Copy</Label>
<Label type="info" size="s">Info</Label>
```

<!--/GITHUB_BLOCK-->

### アイコン

`icon` プロパティを使用してアイコンを追加できます。これを行うには、SVG の特別なラッパーである [`Icon`](../Icon) コンポーネントを使用します。

<!--SANDBOX
import {Icon, Label} from '@gravity-ui/uikit';
import {Gear} from '@gravity-ui/icons';

export default function () {
    return (
        <>
            <Label icon={<Icon size={16} data={Gear} />}>Icon</Label>
            <Label type="close" icon={<Icon size={16} data={Gear} />}>Icon and close</Label>
            <Label type="copy" icon={<Icon size={16} data={Gear} />}>Icon and copy</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label icon={<Icon size={16} data={GearIcon} />}>Icon</Label>
<Label type="close" icon={<Icon size={16} data={GearIcon} />}>Icon and close</Label>
<Label type="copy" icon={<Icon size={16} data={GearIcon} />}>Icon and copy</Label>
```

<!--/GITHUB_BLOCK-->

## 値

`Label` を使用してキーと値の情報を表示できます。これを行うには、`children` プロパティにキーを、`value` プロパティに値を指定する必要があります。

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label theme="normal" value="Value">Key</Label>
            <Label theme="info" value="Value">Key</Label>
            <Label theme="success" value="Value">Key</Label>
            <Label theme="warning" value="Value">Key</Label>
            <Label theme="danger" value="Value">Key</Label>
            <Label theme="utility" value="Value">Key</Label>
            <Label theme="unknown" value="Value">Key</Label>
            <Label theme="clear" value="Value">Key</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal" value="Value">Key</Label>
<Label theme="info" value="Value">Key</Label>
<Label theme="success" value="Value">Key</Label>
<Label theme="warning" value="Value">Key</Label>
<Label theme="danger" value="Value">Key</Label>
<Label theme="utility" value="Value">Key</Label>
<Label theme="unknown" value="Value">Key</Label>
<Label theme="clear" value="Value">Key</Label>
```

<!--/GITHUB_BLOCK-->

## ステート

`label` はさまざまなステートを持つことができます:

- `disabled`: インタラクションは許可されません。
- `interactive`: ラベルをホバー可能にします。
- `loading`: ローディング状態を表示します。

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label>Default</Label>
            <Label disabled>Disabled</Label>
            <Label interactive>Interactive</Label>
            <Label loading>Loading</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label>Default</Label>
<Label disabled>Disabled</Label>
<Label interactive>Interactive</Label>
<Label loading>Loading</Label>
```

<!--/GITHUB_BLOCK-->

## サイズ

<!--SANDBOX
import {Label} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Label size="xxs">XXS size</Label>
            <Label size="xs">XS size</Label>
            <Label size="s">S size</Label>
            <Label size="m">M size</Label>
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Label size="xxs">XXS size</Label>
<Label size="xs">XS size</Label>
<Label size="s">S size</Label>
<Label size="m">M size</Label>
```

<!--/GITHUB_BLOCK-->

## プロパティ

| 名前             | 説明                                     |                  タイプ                   |   デフォルト   |
| :--------------- | :---------------------------------------------- | :-------------------------------------: | :---------: |
| children         | コンテンツ                                         |            `React.ReactNode`            |             |
| className        | `class` HTML属性                          |                `string`                 |             |
| closeButtonLabel | クローズボタンの `aria-label`                |                `string`                 |             |
| copyButtonLabel  | コピーボタンの `aria-label`                 |                `string`                 |             |
| copyText         | コピーするテキスト                                    |                `string`                 |             |
| disabled         | 無効状態                                  |                `boolean`                |             |
| icon             | ラベルアイコン（左側）                        |            `React.ReactNode`            |             |
| interactive      | ホバーエフェクトを有効にする                            |                `boolean`                |             |
| loading          | ローディング状態                                   |                `boolean`                |   `false`   |
| onClick          | `click` イベントハンドラ                           |               `Function`                |             |
| onCloseClick     | クローズボタンの `click` イベントハンドラ              |               `Function`                |             |
| onCopy           | `copy` イベントハンドラ                            |               `Function`                |             |
| qa               | `data-qa` HTML属性、テストに使用                  |                `string`                 |             |
| size             | ラベルサイズ                                      |       `"xxs"` `"xs"` `"s"` `"m"`        |   `"xs"`    |
| theme            | ラベルテーマ                                     |                `string`                 | `"normal"`  |
| title            | `title` HTML属性                          |                `string`                 |             |
| type             | ラベルタイプ                                      | `"default"` `"copy"` `"close"` `"info"` | `"default"` |
| value            | ラベル値（`"children : value"` として表示） |            `React.ReactNode`            |             |
| width            | Label が親のスペースをどのように使用するかを制御する |                `"auto"`                 |             |
