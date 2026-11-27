<!--GITHUB_BLOCK-->

# ClipboardIcon

<!--/GITHUB_BLOCK-->

`ClipboardIcon` は、コピーの状態（アイドルまたは成功）を反映するアニメーション付きのコピーアイコンです。単独で使用するのではなく、`CopyToClipboard` または `ClipboardButton` の内部で使用することを想定しています。

```tsx
import {ClipboardIcon} from '@gravity-ui/uikit';
```

### ステータス

`status` プロパティに応じて、アイコンは次のように変化します。

<!--SANDBOX
import {ClipboardIcon} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <ClipboardIcon size={24} />
            <ClipboardIcon size={24} status="success" />
            <ClipboardIcon size={24} status="error" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<CopyToClipboard text="Some text to copy" timeout={500}>
  {(status) => <ClipboardIcon size={24} status={status} />}
</CopyToClipboard>
```

<!--/GITHUB_BLOCK-->

## プロパティ

| 名前      | 説明                                                              | タイプ     | デフォルト |
| :-------- | :---------------------------------------------------------------- | :------- | :-------- |
| className | `class` HTML 属性                                                 | `string` |           |
| size      | アイコンのサイズを決定します                                      | `number` |           |
| status    | 利用可能な値は `pending`、`success`、`error` です。                 | `string` |           |
