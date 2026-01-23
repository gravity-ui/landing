# Ẏagr <img src="https://raw.githubusercontent.com/gravity-ui/yagr/main/docs/assets/yagr.svg" width="24px" height="24px" />

Yagr は、[uPlot](https://github.com/leeoniya/uPlot) をベースにした高性能な HTML5 Canvas チャートレンダラーです。uPlot チャートに高レベルな機能を提供します。

<img src="https://raw.githubusercontent.com/gravity-ui/yagr/main/docs/assets/demo.png" width="800" />

## 特徴

-   [線、エリア、カラム、ドットの表示タイプ。シリーズごとに設定可能](https://yagr.tech/en/api/visualization)
-   [設定可能な凡例ツールチップ](https://yagr.tech/en/plugins/tooltip)
-   [小数点以下の精度を調整できる軸](https://yagr.tech/en/api/axes)
-   [範囲関数と変換を設定できるスケール](https://yagr.tech/en/api/scales)
-   [プロットラインとバンド。描画レイヤーを設定可能](https://yagr.tech/en/plugins/plot-lines)
-   [レスポンシブチャート](https://yagr.tech/en/api/settings#adaptivity) ( [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) が必要です)
-   [積み上げエリア/カラムの高レベルサポート](https://yagr.tech/en/api/scales#stacking)
-   [設定可能なマーカー](./docs/api/markers.md)
-   [ライト/ダークテーマ](https://yagr.tech/en/api/settings#theme)
-   [データ正規化](https://yagr.tech/en/api/scales#normalization)
-   [クロスヘア、カーソルマーカー、スナップ機能の設定](https://yagr.tech/en/api/cursor)
-   Typescript
-   [ローカライゼーション](https://yagr.tech/en/api/settings#localization)
-   [色名での CSS 変数](https://yagr.tech/en/api/css)
-   [ページネーション付きインライン凡例](https://yagr.tech/en/plugins/legend)
-   [エラーハンドリングと拡張フック](https://yagr.tech/en/api/lifecycle)
-   [欠損データのデータアラインメントと補間](https://yagr.tech/en/api/data-processing)
-   [リアルタイム更新](https://yagr.tech/en/api/dynamic-updates)

## [ドキュメント](https://yagr.tech)

## クイックスタート

```
npm i @gravity-ui/yagr
```

### NPM モジュール

```typescript
import Yagr from '@gravity-ui/yagr';

new Yagr(document.body, {
    timeline: [1, 2, 3, 4, 5],
    series: [
        {
            data: [1, 2, 3, 4, 5],
            color: 'red',
        },
        {
            data: [2, 3, 1, 4, 5],
            color: 'green',
        },
    ],
});
```

### スクリプトタグ

```html
<script src="https://unpkg.com/@gravity-ui/yagr/dist/yagr.iife.min.js"></script>
<script>
    new Yagr(document.body, {
        timeline: [1, 2, 3, 4, 5],
        series: [
            {
                data: [1, 2, 3, 4, 5],
                color: 'red',
            },
            {
                data: [2, 3, 1, 4, 5],
                color: 'green',
            },
        ],
    });
</script>
```

### 例

何か特定のものを探していますか？ Yagr は [demo/examples](./demo/examples/) フォルダに便利な例をいくつか用意しています。現在のバージョンでそれらを起動する方法は次のとおりです。

1.  リポジトリをクローンします。
2.  依存関係をインストールします `npm i`。
3.  `npm run build` を実行します。
4.  `npx http-server .` を実行します。
5.  http-server の出力に従ってブラウザで例を開きます。