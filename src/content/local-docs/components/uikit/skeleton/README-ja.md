<!--GITHUB_BLOCK-->

# Skeleton

<!--/GITHUB_BLOCK-->

Skeleton コンポーネントは、データがロードされる前にコンテンツのプレースホルダープレビューを表示します。このプレビューは、ロード時間のフラストレーションを軽減するために表示されます。

```tsx
import {Skeleton} from '@gravity-ui/uikit';
```

## アニメーション

`animation` プロパティを使用して、ロードアニメーションを制御します。デフォルトは `'gradient'` です。

| 値        | 説明                            |
| :-------- | :------------------------------ |
| `'gradient'` | スライドするグラデーションのきらめき — **デフォルト** |
| `'pulse'`    | 不透明度のパルス                |
| `'none'`     | アニメーションなし              |

## バリアント

`variant` プロパティを使用して、プリセットの外観を選択します。デフォルトは `'rect'` です。

| 値      | 説明                                                                         |
| :------ | :--------------------------------------------------------------------------- |
| `'rect'`   | サイズに応じた `border-radius` トークンを使用した角丸 — **デフォルト**             |
| `'circle'` | 完全な円 (`border-radius: 50%`, `aspect-ratio: 1`)                               |
| `'square'` | 正方形のアスペクト比 (`aspect-ratio: 1`) で、`'rect'` と同じ丸みがあります |
| `'text'`   | テキスト行のプレースホルダー — 高さ (`height`) は親コンテキストの `font-size` と `line-height` を継承します |

## サイズ

`size` プロパティを使用して、プリセットのスケルトンの高さ（`'circle'` / `'square'` バリアントの場合は幅も）を設定します。各サイズは、`'rect'` および `'square'` バリアントで使用される `border-radius` トークンも調整します。`size` が省略されている場合は、代わりに `width` と `height` で寸法を設定します。

| 値  | 説明       |
| :-- | :--------- |
| `'xs'` | Extra small |
| `'s'`  | Small       |
| `'m'`  | Medium      |
| `'l'`  | Large       |
| `'xl'` | Extra large |

<!--GITHUB_BLOCK-->

```tsx
<Skeleton size="xs" width={120} />
<Skeleton size="m"  width={200} />
<Skeleton size="xl" width={280} />

<Skeleton variant="circle" size="l" />
<Skeleton variant="square" size="l" />
```

<!--/GITHUB_BLOCK-->

## テキストプレースホルダー

`variant="text"` を使用して、親コンテキストから `font-size` と `line-height` を継承するスケルトンをレンダリングします。複数行のプレースホルダーには、`<Text variant="...">` 要素内に複数のスケルトンを配置します。

<!--GITHUB_BLOCK-->

```tsx
<Text variant="body-1">
  <Skeleton variant="text" width={400} />
  <Skeleton variant="text" width={400} />
  <Skeleton variant="text" width={240} />
</Text>
```

<!--/GITHUB_BLOCK-->

## プロパティ

| 名前        | 説明                                                                                                                             |                       タイプ                       |  デフォルト   |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------: | :--------: |
| `style`     | ルート要素のカスタムCSSプロパティ                                                                                              |              `React.CSSProperties`               |            |
| `className` | ルート要素のカスタムCSSクラス                                                                                                |                     `string`                     |            |
| `qa`        | テストに使用される`data-qa` HTML属性                                                                                             |                     `string`                     |            |
| `animation` | スケルトンに適用するアニメーションタイプ                                                                                             |      `'gradient'` \| `'pulse'` \| `'none'`       | `gradient` |
| `variant`   | 事前定義された外観。`'circle'`と`'square'`は`aspect-ratio: 1`を強制します。`'text'`は親コンテキストからタイポグラフィを継承します。 | `'rect'` \| `'square'` \| `'circle'` \| `'text'` |   `rect`   |
| `size`      | 事前定義された高さ（`'circle'`/`'square'`バリアントの場合は幅も）。`'rect'`/`'square'`のボーダーラジウストークンも制御します。 |   `'xs'` \| `'s'` \| `'m'` \| `'l'` \| `'xl'`    |            |
| `width`     | カスタム幅。`style.width`のエイリアス                                                                                             |               `number` \| `string`               |            |
| `height`    | カスタム高さ。`style.height`のエイリアス                                                                                             |               `number` \| `string`               |            |
