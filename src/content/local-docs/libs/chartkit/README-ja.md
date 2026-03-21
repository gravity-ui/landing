# Gravity UI ChartKit · [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![License](https://img.shields.io/github/license/gravity-ui/ChartKit)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/ChartKit/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

複数のグラフ描画ライブラリに対して統一されたインターフェースを提供するプラグインベースのReactコンポーネントです。1つ以上のプラグインを登録し、`<ChartKit type="..." data={...} />` を通じてグラフを描画します。ChartKitが自動的に適切なレンダラーにディスパッチします。

各プラグインのレンダラーは遅延ロードされるため、基盤となるライブラリのコードはChartKitがUIで実際にレンダリングされるときにのみダウンロードされます。ChartKitは、モバイルフレンドリーなツールチップ表示も標準でサポートしています。組み込みのプラグインを使用することも、独自のプラグインを実装することも可能です。

**使用するべき場合:**

- モダンな宣言的なグラフ（`gravity-charts`）や時系列/モニタリンググラフ（`yagr`）が必要な場合
- 単一の統一されたAPIの下で複数のグラフタイプが必要な場合
- Gravity UIエコシステム内で開発している場合

**使用しない方が良い場合:**

- 特定のグラフライブラリが1つだけ必要な場合 — その場合は[@gravity-ui/charts](https://github.com/gravity-ui/charts) を直接使用することをお勧めします。

## 目次

- [はじめに](#get-started)
- [開発](#development)

## はじめに

### 要件

- React 16, 17, または 18
- `[@gravity-ui/uikit](https://github.com/gravity-ui/uikit)` — 必須のピア依存関係（テーマ設定とUIプリミティブを提供します）

### インストール

```shell
npm install @gravity-ui/chartkit @gravity-ui/uikit
```

### スタイル

エントリーポイントで `@gravity-ui/uikit` のスタイルをインポートしてください。

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

詳細なセットアップについては、[uikit スタイルガイド](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles)を参照してください。

### 基本的な使い方

ChartKitはグローバルなプラグインレジストリを使用します。アプリのエントリーポイントで `settings.set` を一度呼び出し、必要なプラグインを登録してください。`<ChartKit type="..." />` がレンダリングされると、一致するプラグインが検索されます。見つからない場合はエラーがスローされます。各プラグインのレンダラーは `React.lazy` コンポーネントであるため、コードはChartKitがUIに最初に表示されるときにのみフェッチされます。

複数のプラグインを一度に登録できます。

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

または `settings.set` を複数回呼び出すこともできます。この場合、プラグインリストはマージされ、置き換えられることはありません。

**基本的な例:**

```tsx
import {ThemeProvider} from '@gravity-ui/uikit';
import ChartKit, {settings} from '@gravity-ui/chartkit';
import {GravityChartsPlugin} from '@gravity-ui/chartkit/gravity-charts';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

settings.set({plugins: [GravityChartsPlugin]});

const data = {
  series: {
    data: [
      {
        type: 'line',
        name: 'Series',
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
        <ChartKit type="gravity-charts" data={data} />
      </div>
    </ThemeProvider>
  );
}
```

`ChartKit` は親要素のサイズに適合します。コンテナに明示的な高さを設定してください。

## 開発

### 前提条件

- [Node.js](https://nodejs.org/) 22 ( [.nvmrc](https://github.com/gravity-ui/ChartKit/blob/main/.nvmrc) を参照)
- [npm](https://www.npmjs.com/) 10 以降

### セットアップ

リポジトリをクローンし、依存関係をインストールします。

```shell
git clone https://github.com/gravity-ui/ChartKit.git
cd ChartKit
npm ci
```

### Storybook の実行

```shell
npm run start
```

Storybook は `http://localhost:7007` で利用可能になります。

### ローカル依存関係を使用した開発

依存関係（例: `@gravity-ui/charts`）をローカルで作業し、npm に公開せずに Storybook で変更をリアルタイムに確認するには：

**1. ローカルパッケージのリンク**

```shell
# ローカルの @gravity-ui/charts クローン内で:
git clone https://github.com/gravity-ui/charts.git
cd charts
npm ci
# 変更を加える
npm run build
npm link

# ChartKit 内で:
npm link @gravity-ui/charts
```

**2. ローカルパッケージの監視設定**

ChartKit のルートに `.env.local` ファイルを作成します（これは gitignore されています）。

```shell
LOCAL_PKG=@gravity-ui/charts
```

これにより、Vite は `node_modules` 内のそのパッケージを監視し、プリバンドリングをスキップするようになります。`@gravity-ui/charts` を再ビルドすると、Storybook は自動的にホットリロードされます。

複数のパッケージの場合は、カンマ区切りのリストを使用します。

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. Storybook の起動**

```shell
npm run start
```

**4. 元のパッケージに戻す**

完了したら：

1. `.env.local` の `LOCAL_PKG` をコメントアウトします。
2. ChartKit で `npm install` を実行します。これにより、シンボリックリンクがレジストリバージョンに置き換えられます。

```shell
# ChartKit 内で:
npm ci
```

### テストの実行

```shell
npm test
```

ビジュアルリグレッションテストは Docker で実行され、環境間での一貫したスクリーンショットを保証します。

```shell
npm run test:docker
```

意図的な UI 変更後に参照スクリーンショットを更新するには：

```shell
npm run test:docker:update
```

### 貢献

プルリクエストを送信する前に、[貢献ガイド](CONTRIBUTING.md)を参照してください。