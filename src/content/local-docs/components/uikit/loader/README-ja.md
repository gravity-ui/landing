`Loader` コンポーネントは、点滅するバーでローディングプログレスを表示します。`Spin` とは異なり、このコンポーネントはページ全体や `Dialog` のようなグローバルなシナリオで使用されます。

```tsx
import {Loader} from '@gravity-ui/uikit';
```

### Size

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

`S`: Small サイズ。通常のローダーが大きすぎる場合に使用します。

`M`: Medium (基本) サイズ。ほとんどの場合に使用します。

`L`: Large サイズ。通常のローダーが小さすぎる場合に使用します。

## Properties

| Name      | Description                           |       Type        | Default |
| :-------- | :------------------------------------ | :---------------: | :-----: |
| size      | ローダーのサイズ                      | `"s"` `"m"` `"l"` |  `"s"`  |
| className | ルート要素のカスタム CSS クラス       |     `string`      |         |
GRAVITY_TRANSLATION_BLOCK_2_END