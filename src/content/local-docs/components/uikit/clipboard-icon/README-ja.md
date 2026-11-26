`ClipboardIcon` は、コピーの状態（アイドルまたは成功）を反映するアニメーション付きのコピーアイコンです。単独で使用するのではなく、`CopyToClipboard` または `ClipboardButton` の内部で使用することを想定しています。

```tsx
import {ClipboardIcon} from '@gravity-ui/uikit';
```

### ステータス

`status` プロパティに応じて、アイコンは次のように変化します。

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## プロパティ

| 名前      | 説明                                                              | タイプ     | デフォルト |
| :-------- | :---------------------------------------------------------------- | :------- | :-------- |
| className | `class` HTML 属性                                                 | `string` |           |
| size      | アイコンのサイズを決定します                                      | `number` |           |
| status    | 利用可能な値は `pending`、`success`、`error` です。                 | `string` |           |
GRAVITY_TRANSLATION_BLOCK_2_END