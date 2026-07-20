# Gravity UI Charts · [![npm package](https://img.shields.io/npm/v/@gravity-ui/charts)](https://www.npmjs.com/package/@gravity-ui/charts) [![License](https://img.shields.io/github/license/gravity-ui/charts)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/charts/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/charts/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/charts/)

10種類以上のグラフ（エリア、棒、線、円、散布図、ツリーマップなど）を備えたReactのグラフ描画ライブラリです。

## インストール

```shell
npm install @gravity-ui/uikit @gravity-ui/charts
```

`@gravity-ui/uikit` は必須のピア依存関係です。グラフが依存するテーマ設定とスタイルを提供します。

## 使用方法

エントリーポイントで `@gravity-ui/uikit` のスタイルを一度インポートし、アプリを `ThemeProvider` でラップし、明示的な高さを持つコンテナ内に `Chart` をレンダリングしてください。

```tsx
import {ThemeProvider} from '@gravity-ui/uikit';
import {Chart} from '@gravity-ui/charts';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

const data = {
  series: {
    data: [
      {
        type: 'line',
        name: 'Temperature',
        data: [
          {x: 0, y: 10},
          {x: 1, y: 25},
          {x: 2, y: 18},
          {x: 3, y: 30},
        ],
      },
    ],
  },
};

export default function App() {
  return (
    <ThemeProvider theme="light">
      <div style={{height: 300}}>
        <Chart data={data} />
      </div>
    </ThemeProvider>
  );
}
```

`Chart` は親要素のサイズに適合するため、ラッパー要素には高さが必要です。

## ドキュメント

- [概要](https://gravity-ui.github.io/charts/pages/overview.html)
- [はじめに](https://gravity-ui.github.io/charts/pages/get-started.html)
- [開発](https://gravity-ui.github.io/charts/pages/development.html)
- [API](https://gravity-ui.github.io/charts/pages/api/overview.html)
- [ガイド](https://gravity-ui.github.io/charts/pages/guides/tooltip.html)

## ライセンス

MIT License に基づいて配布されています。詳細は [LICENSE](LICENSE) を参照してください。

## AIエージェント向け

Gravity UI アプリケーション向けの宣言的な React グラフ描画ライブラリです。単一の `data` 設定から、線グラフ、エリアグラフ、棒グラフ、円グラフ、散布図、ツリーマップなどのグラフを、アプリの他の部分と調和するテーマでレンダリングします。

### 使用すべき場合

- 標準的なビジネスグラフ: `line`、`area`、`bar-x`/`bar-y`、`pie`、`scatter`、`treemap`、`waterfall`、`sankey`、`radar`、`heatmap`、`funnel`、`x-range`。
- Gravity UI のテーマ設定（ライト/ダーク）に従い、`@gravity-ui/uikit` アプリとトークンを共有する必要があるビジュアライゼーション。
- 命令的に描画するのではなく、宣言的なデータからグラフをレンダリングする場合。

### 使用すべきでない場合

- まだ `@gravity-ui/chartkit` を使用しているプロジェクト。これは古いアダプターベースのラッパー（YAGR/Highcharts/D3）であり、このパッケージは最新のスタンドアロンレンダラーであり、ドロップインの代替ではありません。
- 単純な表形式データ。[`@gravity-ui/table`](https://github.com/gravity-ui/table) を使用してください。
- React を使用しない、またはサーバーサイドのみのレンダリング。`Chart` は React SVG をレンダリングし、DOM を必要とします。

### よくある間違い

- **コンポーネント名は `Chart` であり、`ChartKit` ではありません。** `@gravity-ui/charts` から `{Chart}` をインポートしてください。`ChartKit` は、別のレガシーパッケージである `@gravity-ui/chartkit` に属します。
- **`data` プロップは `data` で、形状は `{series: {data: [...]}}` です。** `series.data` の各エントリは、独自の `type` と `data` 配列を持つ 1 つのシリーズです。シリーズのトップレベル配列はありません。
- **サイズ指定のないコンテナでは何もレンダリングされません。** `Chart` は親要素を埋めるため、ラッパーに明示的な高さを指定してください。
- **uikit のセットアップが必要です。** `ThemeProvider` でラップし、`@gravity-ui/uikit/styles/styles.css` をインポートしてください。`@gravity-ui/uikit` は必須のピア依存関係です。

### 役立つドキュメント

- [はじめに](./docs/diplodoc/pages/get-started.md)
- [テーマ設定](./docs/diplodoc/pages/guides/theming.md)
- [ツールチップ](./docs/diplodoc/pages/guides/tooltip.md)
- [凡例](./docs/diplodoc/pages/guides/legend.md)
- [HTML コンテンツ](./docs/diplodoc/pages/guides/html.md)
- [値のフォーマット](./docs/diplodoc/pages/guides/value-formatting.md)
- [データラベル](./docs/diplodoc/pages/guides/data-labels.md)
- [軸の種類](./docs/diplodoc/pages/guides/axis-types.md)

## AIエージェント向けドキュメント

インストールされているバージョンのエージェント可読ドキュメントは、`node_modules/@gravity-ui/charts/dist/docs/INDEX.md` にあります。