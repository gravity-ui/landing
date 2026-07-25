# Gravity UI ChartKit · [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![License](https://img.shields.io/github/license/gravity-ui/ChartKit)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/ChartKit/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

複数のグラフ描画ライブラリに対して統一されたインターフェースを提供する、プラグインベースのReactコンポーネントです。1つ以上のプラグインを登録し、`<ChartKit type="..." data={...} />` を通じてグラフを描画します。ChartKitは、適切なレンダラーに自動的にディスパッチします。

各プラグインのレンダラーは遅延ロードされるため、基盤となるライブラリのコードは、ChartKitがUIに実際にレンダリングされるときにのみダウンロードされます。ChartKitは、モバイルフレンドリーなツールチップ表示も標準でサポートしています。組み込みのプラグインを使用することも、独自のプラグインを実装することも可能です。

**使用するべき場合:**

- モダンな宣言型グラフ（`gravity-charts`）または時系列/モニタリンググラフ（`yagr`）が必要な場合
- 単一の統一されたAPIの下で複数のグラフタイプが必要な場合
- Gravity UIエコシステム内で開発している場合

**使用しない方が良い場合:**

- 特定のグラフライブラリが1つだけ必要な場合 — その場合は [@gravity-ui/charts](https://github.com/gravity-ui/charts) を直接使用することを推奨します。

## 目次

- [はじめに](#getting-started)
- [グラフパッケージの更新](#updating-charting-packages)
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

完全なセットアップ詳細は、[uikit スタイルガイド](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles) を参照してください。

### 基本的な使い方

ChartKitはグローバルなプラグインレジストリを使用します。アプリのエントリーポイントで `settings.set` を一度呼び出して、必要なプラグインを登録してください。`<ChartKit type="..." />` がレンダリングされると、一致するプラグインが検索されます。見つからない場合はエラーがスローされます。各プラグインのレンダラーは `React.lazy` コンポーネントであるため、コードはChartKitがUIに初めて表示されるときにのみフェッチされます。

複数のプラグインを一度に登録できます。

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

または `settings.set` を複数回呼び出すこともできます。これはプラグインリストをマージし、置き換えることはありません。

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

## グラフパッケージの更新

ChartKitは、2つのGravity UIグラフライブラリを依存関係としてバンドルしています。

- [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) — `gravity-charts` プラグインを駆動します
- [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) — `yagr` プラグインを駆動します

これらのパッケージの新しいバージョンが必要な場合は、[Package update request](https://github.com/gravity-ui/ChartKit/issues/new?template=package-update-request.yml) イシューを開き、必要なパッケージを選択してください。メンテナーが選択されたパッケージを更新し、アップデートをリリースします。

## 開発

### 前提条件

- Node.js 22（[.nvmrc](https://github.com/gravity-ui/ChartKit/blob/main/.nvmrc) を参照）
- npm 10 以降

### セットアップ

リポジトリをクローンし、依存関係をインストールします。

```shell
git clone https://github.com/gravity-ui/ChartKit.git
cd ChartKit
npm ci
```

### Storybookの実行

```shell
npm run start
```

Storybookは `http://localhost:7007` で利用可能になります。

### ローカル依存関係での開発

依存関係（例: `@gravity-ui/charts`）を開発し、npmに公開せずにStorybookで変更をライブで確認するには：

**1. ローカルパッケージのリンク**

```shell
# ローカルの @gravity-ui/charts クローン内で:
git clone https://github.com/gravity-ui/charts.git
cd charts
npm ci
# 変更を加える
npm run build
npm link

# ChartKit内で:
npm link @gravity-ui/charts
```

**2. ローカルパッケージの監視設定**

ChartKitのルートに `.env.local` ファイルを作成します（これはgitignoreされています）。

```shell
LOCAL_PKG=@gravity-ui/charts
```

これにより、Viteは `node_modules` 内のそのパッケージを監視し、プリバンドリングをスキップします。`@gravity-ui/charts` を再ビルドすると、Storybookは自動的にホットリロードされます。

複数のパッケージの場合は、カンマ区切りのリストを使用します。

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. Storybookの起動**

```shell
npm run start
```

**4. 元のパッケージに戻す**

完了したら：

1. `.env.local` の `LOCAL_PKG` をコメントアウトします
2. ChartKitで `npm install` を実行します — これにより、シンボリックリンクがレジストリバージョンに置き換えられます。

```shell
# ChartKit内で:
npm ci
```

### テストの実行

```shell
npm test
```

ビジュアルリグレッションテストはDockerで実行され、環境間での一貫したスクリーンショットを保証します。

```shell
npm run test:docker
```

意図的なUI変更後に参照スクリーンショットを更新するには：

```shell
npm run test:docker:update
```

### 貢献

プルリクエストを送信する前に、[貢献ガイド](CONTRIBUTING.md) を参照してください。

## ライセンス

MITライセンスで提供されます。[LICENSE](LICENSE) の詳細をご覧ください。

## AIエージェント向け

複数のGravity UIチャートライブラリから、単一の`<ChartKit type="..." data={...} />` APIを通じてチャートをレンダリングするプラグインディスパッチングReactコンポーネントです。各チャートライブラリを直接インポートするのではなく、混合チャートタイプのための単一の遅延読み込みエントリポイントが必要な場合に利用してください。

### 使用するケース

- 複数のチャートエンジン（例: `gravity-charts` + `yagr`）を、単一の統一されたコンポーネントでレンダリングする場合。
- チャートバンドルの遅延読み込み — 各プラグインのレンダラーは`React.lazy`なので、ライブラリのコードはチャートタイプが表示されたときにのみフェッチされます。
- モバイルフレンドリーなツールチップと、すぐに利用できる統一されたテーマ設定を求めるGravity UIアプリにチャートをバンドルする場合。

### 使用しないケース

- 単一のチャートタイプのみの場合は、[`@gravity-ui/charts`](https://github.com/gravity-ui/charts)（汎用）または[`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr)（高性能時系列）を直接インポートしてください — プラグインレジストリは、単一エンジンにはオーバーヘッドとなります。
- ウィジェットのダッシュボードグリッドを構成する場合は、[`@gravity-ui/dashkit`](https://github.com/gravity-ui/dashkit)を使用してください — ChartKitはチャートをレンダリングし、DashKitは多くのウィジェットを配置します。

### よくある落とし穴

- **`settings.set({plugins: [...]})`の前に`<ChartKit>`をレンダリングする** — グローバルプラグインレジストリはアプリのエントリポイントで設定されている必要があります。登録されていない`type`はレンダリング時にエラーとなります。
- **存在しない`chartType` / `library`プロップ** — ディスパッチプロップは`type`（例: `type="gravity-charts"`）であり、データは`data`です。
- **コンテナの高さを忘れる** — `ChartKit`は親要素を埋めます。ラッパーに明示的な高さがない場合、チャートはゼロに収縮します。
- **プラグインがバンドルされていると期待する** — プラグインレンダラー（`@gravity-ui/chartkit/gravity-charts`、`.../yagr`）は遅延読み込みです。最初のタイプのレンダリングでそのバンドルがフェッチされます。
- **uikitのスタイルインポートを忘れる** — テーマ設定は`@gravity-ui/uikit/styles/styles.css`に依存します。これがないと、チャートはスタイルなしでレンダリングされます。

## AIエージェント向けドキュメント

インストールされているバージョンのエージェント可読ドキュメントは、`node_modules/@gravity-ui/chartkit/build/docs/INDEX.md`にあります。