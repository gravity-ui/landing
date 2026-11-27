GRAVITY_TRANSLATION_BLOCK_0_END

`ClipboardButton` は、指定されたテキストをクリップボードにコピーし、成功アニメーションを再生する、すぐに使えるボタンです。[`CopyToClipboard`](../CopyToClipboard/README.md)（コピーの動作）と [`ClipboardIcon`](../ClipboardIcon/README.md)（アニメーションアイコン）を組み合わせています。

```tsx
import {ClipboardButton} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Tooltip

`tooltipProps` を使用して、ツールチップの配置やポータル動作などを設定するために、基盤となる [`ActionTooltip`](../ActionTooltip/README.md) を構成します。

```tsx
<ClipboardButton text="Some text to copy" tooltipProps={{placement: 'top', disablePortal: true}} />
```

サポートされているプロパティは、`onOpenChange`、`strategy`、`placement`、`offset`、`disabled`、`container`、`disablePortal`、および `DOMProps`（`className`、`style`）と `QAProps`（`qa`）プロパティです。

ツールチップを無効にするには、`tooltipProps.disabled` を `true` に設定します。`hasTooltip={false}` およびコピーフィードバックのタイムアウトも、`tooltipProps.disabled` が `false` であってもツールチップを無効にします。コピーフィードバックを設定するには、`tooltipInitialText`、`tooltipSuccessText`、および `timeout` を使用します。

## プロパティ

`ClipboardButton` のプロパティは、`Button` の[プロパティ](../Button/README.md#properties)から継承されます。

| 名前               | 説明                                                               |            型            |   デフォルト   |
| :----------------- | :----------------------------------------------------------------- | :----------------------: | :------------: |
| hasTooltip         | ツールチップの表示を切り替えます                                   |         `boolean`          |   `true`    |
| onCopy             | コピー後のコールバック `(text: string, result: boolean) => void`   |         `Function`         |             |
| text               | コピーするテキスト（文字列または文字列を返す関数）                 |  `string \| () => string`  |             |
| timeout            | ボタンがクリックされた後に状態が通常に戻るまでの時間               |          `number`          |   `1000`    |
| tooltipInitialText | コピー前に表示されるテキスト                                       |          `string`          |  `"Copy"`   |
| tooltipSuccessText | コピー後に表示されるテキスト                                       |          `string`          | `"Copied!"` |
| tooltipProps       | ツールチップの設定。 [サポートされているプロパティ](#tooltip) を参照してください。 |          `object`          |             |
| icon               | カスタムアイコン                                                   |     `React.ReactNode`      |             |
| iconPosition       | アイコンの位置                                                     | `start          \|    end` |   `start`   |