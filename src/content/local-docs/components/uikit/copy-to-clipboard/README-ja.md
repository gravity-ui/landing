<!--GITHUB_BLOCK-->

# CopyToClipboard

<!--/GITHUB_BLOCK-->

`CopyToClipboard` は、テキストをクリップボードにコピーし、コピーの状態を子コンポーネントに公開するレンダープロップラッパーです。これにより、独自のトリガーをレンダリングできます。すぐに使えるボタンが必要な場合は、`ClipboardButton` を使用してください。

```tsx
import {CopyToClipboard} from '@gravity-ui/uikit';
```

### Children (レンダー関数)

これは、`children` プロパティとして提供されるレンダー関数です。レンダー関数に引数として返される状態に応じて、コンテンツを更新できます。
利用可能な状態は 3 つあります: `pending`、`success`、`error`。

`pending`: 中立的なケースでレンダー関数に返される初期状態。

`success`: 成功した場合にレンダー関数に返される結果状態。

`error`: エラーが発生した場合にレンダー関数に返される結果状態。

`timeout` オプションは、結果状態 (`success` または `error`) のいずれかが発生した後、初期状態 (`pending`) に戻すまでの時間をミリ秒単位で設定します。

<!--SANDBOX
import {Button, CopyToClipboard} from '@gravity-ui/uikit';

const buttonText = {
    pending: 'Click Me',
    success: 'Copied!',
    error: "Couldn't copy...",
};

export default function () {
    return (
        <CopyToClipboard text="Some text to copy" timeout={500}>
            {(status) => (
                <Button view="normal" size="l">
                    {buttonText[status]}
                </Button>
            )}
        </CopyToClipboard>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const buttonText = {
  pending: 'Click Me',
  success: 'Copied!',
  error: "Couldn't copy...",
};

<CopyToClipboard text="Some text to copy" timeout={500}>
  {(status) => <button>{buttonText[status]}</button>}
</CopyToClipboard>;
```

<!--/GITHUB_BLOCK-->

## プロパティ

| 名前     | 説明                                                                    |           型           | デフォルト |
| :------- | :---------------------------------------------------------------------- | :--------------------: | :-------: |
| children | `(status: CopyToClipboardStatus) => React.ReactElement` レンダリング関数 |        `Function`        |           |
| onCopy   | `copy` イベントハンドラ                                                 |        `Function`        |           |
| text     | コピーするテキスト (文字列または文字列を返す関数)                       | `string \| () => string` |           |
| timeout  | 初期状態に戻すまでの時間 (ミリ秒)                                       |         `number`         |           |
