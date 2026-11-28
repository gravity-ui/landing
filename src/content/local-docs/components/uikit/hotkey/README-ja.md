<!--GITHUB_BLOCK-->

# Hotkey

<!--/GITHUB_BLOCK-->

`Hotkey` コンポーネントを使用して、Mac と PC の両方のキーボードショートカットを表示できます。

```tsx
import {Hotkey} from '@gravity-ui/uikit';
```

### 値

キーボードショートカットは `<key>+<key>` の形式で設定されます。これは、複数のキーをプラス記号で区切って指定する必要があることを意味します。例: `shift+tab`。

キーの組み合わせのシーケンスはスペースで区切ることができます: `<shortcut> <shortcut>`。例: `ctrl+a ctrl+c ctrl+v`。

`mod` を `cmd` (Mac の場合) および `ctrl` (その他のプラットフォームの場合) のショートカットとして使用できます。たとえば、`mod+v` は Mac では ⌘+V、PC では Ctrl+V と表示されます。

### 表示

`light`: コンポーネントが明るい背景に表示される場合に使用します (デフォルト)。

`dark`: コンポーネントが暗い背景に表示される場合に使用します。

<!--SANDBOX
import {Hotkey} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Hotkey view="light" value="mod+a mod+c mod+v" />
            <Hotkey view="dark" value="mod+a mod+c mod+v" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```
<Hotkey view="light" value="mod+a mod+c mod+v" />
<Hotkey view="dark" value="mod+a mod+c mod+v" />
```

<!--/GITHUB_BLOCK-->

### プラットフォーム

`pc`: 通常の PC キーボードのキーボードショートカットを表示するために使用します。

`mac`: Macintosh キーボードのキーボードショートカットを表示するために使用します。

デフォルトでは、プラットフォームは自動的に検出されます。

<!--SANDBOX
import {Hotkey} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Hotkey value="mod+a mod+c mod+v" />
            <Hotkey platform="pc" value="mod+a mod+c mod+v" />
            <Hotkey platform="mac" value="mod+a mod+c mod+v" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```
<Hotkey value="mod+a mod+c mod+v" />
<Hotkey platform="pc" value="mod+a mod+c mod+v" />
<Hotkey platform="mac" value="mod+a mod+c mod+v" />
```

<!--/GITHUB_BLOCK-->

## プロパティ

| 名前      | 説明                                                              |         型          |        デフォルト         |
| :-------- | :---------------------------------------------------------------- | :-------------------: | :--------------------: |
| view      | カラースキームを設定するために使用します                                |  `"light"` `"dark"`   |       `"light"`        |
| platform  | キーボードショートカットを表示するプラットフォーム (PC または Macintosh) を選択するために使用します |    `"pc"` `"mac"`     | 自動検出されます |
| title     | キーボードショートカットの値                                        |       `string`        |                        |
| style     | HTML の style 属性                                                | `React.CSSProperties` |                        |
| className | アラートのクラス名                                                |       `string`        |                        |
