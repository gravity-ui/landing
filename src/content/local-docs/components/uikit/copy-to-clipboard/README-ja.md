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

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## プロパティ

| 名前     | 説明                                                                    |           型           | デフォルト |
| :------- | :---------------------------------------------------------------------- | :--------------------: | :-------: |
| children | `(status: CopyToClipboardStatus) => React.ReactElement` レンダリング関数 |        `Function`        |           |
| onCopy   | `copy` イベントハンドラ                                                 |        `Function`        |           |
| text     | コピーするテキスト (文字列または文字列を返す関数)                       | `string \| () => string` |           |
| timeout  | 初期状態に戻すまでの時間 (ミリ秒)                                       |         `number`         |           |