GRAVITY_TRANSLATION_BLOCK_0_END

`ClipboardButton` は、指定されたテキストをクリップボードにコピーし、成功アニメーションを再生するすぐに使えるボタンです。[`CopyToClipboard`](../CopyToClipboard/README.md)（コピー動作）と [`ClipboardIcon`](../ClipboardIcon/README.md)（アニメーションアイコン）を組み合わせています。

```tsx
import {ClipboardButton} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## プロパティ

`ClipboardButton` のプロパティは、`Button` の[プロパティ](../Button/README.md#properties)から継承されます。

| 名前               | 説明                                                              |            型            |   デフォルト   |
| :----------------- | :---------------------------------------------------------------- | :------------------------: | :---------: |
| hasTooltip         | ツールチップの表示を切り替えます                                  |         `boolean`          |   `true`    |
| onCopy             | コピー後のコールバック `(text: string, result: boolean) => void`  |         `Function`         |             |
| text               | コピーするテキスト（文字列または文字列を返す関数）                |  `string \| () => string`  |             |
| timeout            | ボタンがクリックされた後、状態が通常に戻るまでの時間              |          `number`          |   `1000`    |
| tooltipInitialText | コピー前に表示されるテキスト                                      |          `string`          |  `"Copy"`   |
| tooltipSuccessText | コピー後に表示されるテキスト                                      |          `string`          | `"Copied!"` |
| icon               | カスタムアイコン                                                  |     `React.ReactNode`      |             |
| iconPosition       | アイコンの位置                                                    | `start          \|    end` |   `start`   |