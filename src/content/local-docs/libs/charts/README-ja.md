# Gravity UI Charts · [![npm package](https://img.shields.io/npm/v/@gravity-ui/charts)](https://www.npmjs.com/package/@gravity-ui/charts) [![License](https://img.shields.io/github/license/gravity-ui/charts)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/charts/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/charts/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/charts/)

10種類以上のグラフ（エリア、棒、線、円、散布図、ツリーマップなど）を備えたReactのグラフ描画ライブラリです。

## インストール

```shell
npm install @gravity-ui/uikit @gravity-ui/charts
```

`@gravity-ui/uikit` は必須のピア依存関係です。グラフが依存するテーマ設定とスタイルを提供します。

## 使用方法

エントリーポイントで `@gravity-ui/uikit` のスタイルを一度インポートし、アプリを `Provider` でラップし、明示的な高さを指定したコンテナ内に `Chart` をレンダリングしてください。

```tsx
import {Provider} from '@gravity-ui/uikit';
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
    <Provider theme="light">
      <div style={{height: 300}}>
        <Chart data={data} />
      </div>
    </Provider>
  );
}
```

`Chart` は親要素のサイズに適合するため、ラッパー要素には高さが必要です。

## チャート設定ツール

このパッケージは、チャート設定の検証、生成、Monacoエディターとの連携のためにTypeScriptの型定義とJSONスキーマを提供します。セットアップと使用方法の詳細については、[チャート設定ツールのドキュメント](https://gravity-ui.github.io/charts/pages/integrations/chart-config.html)を参照してください。

## ドキュメント

- [概要](https://gravity-ui.github.io/charts/pages/overview.html)
- [はじめに](https://gravity-ui.github.io/charts/pages/get-started.html)
- [開発](https://gravity-ui.github.io/charts/pages/development.html)
- [API](https://gravity-ui.github.io/charts/pages/api/overview.html)
- [ガイド](https://gravity-ui.github.io/charts/pages/guides/tooltip.html)

## ライセンス

MITライセンスの下で配布されています。詳細は[LICENSE](LICENSE)を参照してください。

## AIエージェント向け

Gravity UIアプリ向けの宣言的なReactグラフ描画ライブラリです。単一の`data`設定から、線、エリア、棒、円、散布図、ツリーマップなどのグラフを、アプリの他の部分と一致するようにテーマ設定してレンダリングします。

### 使用すべき場合

- 標準的なビジネスチャート: `line`、`area`、`bar-x`/`bar-y`、`pie`、`scatter`、`treemap`、`waterfall`、`sankey`、`radar`、`heatmap`、`funnel`、`x-range`。
- Gravity UIのテーマ設定（ライト/ダーク）に従い、`@gravity-ui/uikit`アプリとトークンを共有する必要があるビジュアライゼーション。
- 命令的に描画するのではなく、宣言的なデータからグラフをレンダリングする場合。

### 使用すべきでない場合

- まだ`@gravity-ui/chartkit`を使用しているプロジェクト — これは古いアダプターベースのラッパー（YAGR/Highcharts/D3）です。このパッケージは最新のスタンドアロンレンダラーであり、ドロップイン置換ではありません。
- 単純な表形式データ — [`@gravity-ui/table`](https://github.com/gravity-ui/table)を使用してください。
- Reactを使用しない、またはサーバーサイドのみのレンダリング — `Chart`はReact SVGをレンダリングし、DOMが必要です。

### よくある落とし穴

- **コンポーネント名は`Chart`であり、`ChartKit`ではありません。** `@gravity-ui/charts`から`{Chart}`をインポートしてください。`ChartKit`は、別のレガシーパッケージである`@gravity-ui/chartkit`に属します。
- **`data`プロップは`data`であり、形状は`{series: {data: [...]}}`です。** `series.data`内の各エントリは、独自の`type`と`data`配列を持つ1つのシリーズです。トップレベルのシリーズ配列はありません。
- **サイズ指定のないコンテナでは何もレンダリングされません。** `Chart`は親要素を埋めるため、ラッパーに明示的な高さを指定してください。
- **uikitの設定が必要です。** `Provider`でラップし、`@gravity-ui/uikit/styles/styles.css`をインポートしてください。`@gravity-ui/uikit`は必須のピア依存関係です。

### 役立つドキュメント

- [はじめに](./docs/diplodoc/pages/get-started.md)
- [テーマ設定](./docs/diplodoc/pages/guides/theming.md)
- [ツールチップ](./docs/diplodoc/pages/guides/tooltip.md)
- [凡例](./docs/diplodoc/pages/guides/legend.md)
- [HTMLコンテンツ](./docs/diplodoc/pages/guides/html.md)
- [値のフォーマット](./docs/diplodoc/pages/guides/value-formatting.md)
- [データラベル](./docs/diplodoc/pages/guides/data-labels.md)
- [軸のタイプ](./docs/diplodoc/pages/guides/axes/axis-types.md)
- [軸ラベル](./docs/diplodoc/pages/guides/axes/axis-labels.md)

## AIエージェント向けドキュメント

インストールされているバージョン向けの、エージェントが読み取り可能なドキュメントは、`node_modules/@gravity-ui/charts/dist/docs/INDEX.md`にあります。