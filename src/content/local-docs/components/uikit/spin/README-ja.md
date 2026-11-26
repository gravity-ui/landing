GRAVITY_TRANSLATION_BLOCK_0_END

`Spin` コンポーネントは、インラインシナリオでローディング状態（回転する半円）を表示します。`Loader` とは異なり、このコンポーネントはインラインシナリオ、例えば `Button` や `Label` 内でローディング状態を表示するために使用されます。

```tsx
import {Spin} from '@gravity-ui/uikit';
```

### Size

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

`XS`: Extra small.

`S`: Small, medium-sized spin が大きすぎる場合に使用します。

`M`: Medium (basic), ほとんどの場合に使用します。

`L`: Large, medium-sized spin が小さすぎる場合に使用します。

`XL`: Extra large.

## Properties

| Name      | Description                           |              Type               | Default |
| :-------- | :------------------------------------ | :-----------------------------: | :-----: |
| size      | Spin のサイズ                         | `"xs"` `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| style     | ルート要素のカスタム CSS スタイル     |      `React.CSSProperties`      |         |
| className | ルート要素のカスタム CSS クラス       |            `string`             |         |
| qa        | テスト属性 (`data-qa`)                |            `string`             |         |

### CSS API

| Name             | Description                     |
| :--------------- | :------------------------------ |
| `--g-spin-color` | コンポーネントのメインカラー    |