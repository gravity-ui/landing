GRAVITY_TRANSLATION_BLOCK_0_END

`Overlay` コンポーネントは、相対位置を持つ親要素の上にオーバーレイを描画します。つまり、親要素には `position` が `relative` に設定されている必要があります。
例えば、データ読み込み中に目的のレイアウトを維持するために使用できます。

```tsx
import {Overlay} from '@gravity-ui/uikit';
```

```jsx
import {Box, Overlay, Loader} from '@gravity-ui/uikit';

<Box position="relative">
  <div>Some content to hide under overlay</div>
  <Overlay visible={loading}>
    <Loader />
  </Overlay>
</Box>;
```

## 外観

### 背景

`base` または `float` の背景色を使用できます。

GRAVITY_TRANSLATION_BLOCK_1_END

## プロパティ

| 名前       | 説明                               |        型        | デフォルト |
| :--------- | :--------------------------------- | :--------------: | :-------: |
| className  | ルート要素のCSSクラス名            |      `string`      |           |
| visible    | オーバーレイの表示状態             |     `boolean`      | `false`   |
| background | オーバーレイの背景スタイル         | `"base"` `"float"` |  `base`   |
| children   | コンテンツ（通常は `Loader` コンポーネント） | `React.ReactNode`  |           |