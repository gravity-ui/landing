# Gravity UI ChartKit · [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![License](https://img.shields.io/github/license/gravity-ui/ChartKit)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/ChartKit/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

プラグインベースのReactコンポーネントで、Gravity ChartsやYagrなどの複数のチャートライブラリを単一のChartKit APIを通じてレンダリングします。モバイルフレンドリーなツールチップとカスタムプラグインをサポートしています。1つ以上のプラグインを登録し、`<ChartKit type="..." data={...} />` を通じてチャートをレンダリングします。ChartKitは自動的に適切なレンダラーにディスパッチします。

各プラグインレンダラーは遅延ロードされるため、基盤となるライブラリコードはChartKitがUIに実際にレンダリングされるときにのみダウンロードされます。ChartKitは、モバイルフレンドリーなツールチップ表示も標準で扱います。組み込みプラグインを使用することも、独自のプラグインを実装することも可能です。

**使用するべき場合:**

- モダンな宣言的なチャート (`gravity-charts`) または時系列/監視チャート (`yagr`) が必要
- 単一の統一されたAPIで複数のチャートタイプが必要
- UIの他の部分と同じライト/ダークテーマに従うチャートを標準で利用したい

**使用しないべき場合:**

- 特定のチャートライブラリが1つだけ必要 — その場合は [@gravity-ui/charts](https://github.com/gravity-ui/charts) を直接使用することを推奨します

## 目次

- [はじめに](#getting-started)
- [チャートパッケージの更新](#updating-charting-packages)
- [開発](#development)

## はじめに

### 要件

- React 18 または 19
- [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) 8 — 必須のピア依存関係（テーマ設定とUIプリミティブを提供）

### インストール

```shell
npm install @gravity-ui/chartkit @gravity-ui/uikit
```

### スタイル

エントリポイントで `@gravity-ui/uikit` のスタイルをインポートしてください:

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

完全なセットアップ詳細は、[uikit スタイルガイド](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles) を参照してください。

### 基本的な使い方

ChartKitはグローバルなプラグインレジストリを使用します。アプリのエントリポイントで `settings.set` を一度呼び出し、必要なプラグインを登録してください。`<ChartKit type="..." />` がレンダリングされると、一致するプラグインが検索されます。見つからない場合はエラーがスローされます。各プラグインのレンダラーは `React.lazy` コンポーネントであるため、コードはChartKitがUIに最初に表示されるときにのみフェッチされます。

複数のプラグインを一度に登録できます:

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

または `settings.set` を複数回呼び出すこともできます。この場合、プラグインリストはマージされ、置き換えられることはありません。

**基本的な例:**

```tsx
import {Provider} from '@gravity-ui/uikit';
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
    <Provider theme="light">
      <div style={{height: 300}}>
        <ChartKit type="gravity-charts" data={data} />
      </div>
    </Provider>
  );
}
```

`ChartKit` は親要素のサイズに適合します。コンテナに明示的な高さを設定してください。

### SplitTooltip

`gravity-charts` がタッチデバイスで使用するスプリットペインのツールチップレイアウト (`tooltip={{splitted: true}}`) は、スタンドアロンコンポーネントとしても利用可能です。これは任意のコンテンツと連携します。メインペインとツールチップペインを並べて（またはコンテナサイズに応じてスタックして）レンダリングし、その間にドラッグ可能なリサイザーを配置します。

```tsx
import {SplitTooltip} from '@gravity-ui/chartkit';

export function Panel() {
  return (
    <div style={{height: 400}}>
      <SplitTooltip
        renderMainPane={() => <MyVisualization />}
        renderTooltip={() => <MyTooltipContent />}
      />
    </div>
  );
}
```

レイアウト制御、ペインサイズ、リサイザーオプションについては、`SplitTooltipProps` 型を参照してください。

## チャートパッケージの更新

ChartKitは、2つのGravity UIチャートライブラリを依存関係としてバンドルしています:

- [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) — `gravity-charts` プラグインをパワーアップ
- [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) — `yagr` プラグインをパワーアップ

これらのパッケージの新しいバージョンが必要な場合は、[Package update request](https://github.com/gravity-ui/ChartKit/issues/new?template=package-update-request.yml) イシューを開き、必要なパッケージを選択してください。メンテナーが選択されたパッケージを更新し、アップデートをリリースします。

### ChartKit 8からのアップグレード

[移行ガイド](docs/migration-to-v9.md) を参照してください: uikit 8とReact 18+、CommonJS/ESMビルドとTypeScript `moduleResolution` の注意点、そして `@gravity-ui/charts` 2に伴う `gravity-charts` のデータ変更について説明しています。

## 開発

### 前提条件

- [Node.js](https://nodejs.org/) 22 ( [.nvmrc](https://github.com/gravity-ui/ChartKit/blob/main/.nvmrc) を参照)
- [npm](https://www.npmjs.com/) 10 以降

### セットアップ

リポジトリをクローンし、依存関係をインストールします:

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

### ローカル依存関係を使用した開発

依存関係（例: `@gravity-ui/charts`）をローカルで作業し、npmに公開せずにStorybookで変更をライブで確認するには:

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

`.env.local` ファイルを ChartKit のルートに作成します（これは gitignore されています）。

```shell
LOCAL_PKG=@gravity-ui/charts
```

これにより、Vite は `node_modules` 内のそのパッケージを監視し、プリバンドルをスキップします。`@gravity-ui/charts` を再ビルドすると、Storybook は自動的にホットリロードされます。

複数のパッケージの場合は、カンマ区切りのリストを使用します。

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. Storybook を起動する**

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

ビルドされたパッケージを確認するには、まずビルドします。このチェックでは、Node で CommonJS と ESM の両方のビルドをロードし、それらのエクスポートを比較し、`nodenext`、`bundler`、および `node` モジュール解決の下でコンシューマーの型チェックを行います。

```shell
npm run build
npm run test:build
```

ビジュアルリグレッションテストは Docker で実行され、環境間で一貫したスクリーンショットを保証します。

```shell
npm run test:docker
```

意図的な UI 変更後に参照スクリーンショットを更新するには：

```shell
npm run test:docker:update
```

### 貢献

プルリクエストを送信する前に、[貢献ガイド](CONTRIBUTING.md)を参照してください。

## ライセンス

MIT ライセンスの下で配布されます。詳細については [LICENSE](LICENSE) を参照してください。

## AI エージェント向け

プラグインベースの React コンポーネントで、単一の `<ChartKit type="..." data={...} />` API を介して、Gravity Charts や Yagr などの複数のチャートライブラリからチャートをレンダリングします。各ライブラリは、そのチャートタイプがレンダリングされるときにのみ遅延ロードされます。

### いつ使用するか

- 1 つの整合性の取れたコンポーネントで複数のチャートエンジンをレンダリングする場合：`gravity-charts`（[`@gravity-ui/charts`](https://github.com/gravity-ui/charts) を介した宣言的な SVG チャート）と `yagr`（[`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) を介した uPlot ベースの時系列）。
- チャートバンドルの遅延ロード：各プラグインのレンダラーは `React.lazy` なので、ライブラリのコードはチャートタイプが実際に表示されたときにのみ取得されます。
- モバイルフレンドリーなツールチップが標準で付属：チャートとそのツールチップは、ホバーポップアップの代わりにリサイズ可能な分割ペインで表示されます。`gravity-charts` の場合は、`<ChartKit type="gravity-charts" tooltip={{splitted: true}} />` で有効にします。
- 分割ペインのツールチップレイアウトを単独で使用する：`SplitTooltip` はルートエントリからエクスポートされるスタンドアロンコンポーネントです。`renderMainPane` と `renderTooltip` を渡すと、コンテナサイズから選択された垂直または水平のリサイズ可能なペインとしてレイアウトされます。これは ChartKit チャートだけでなく、あらゆるコンテンツに対して機能します。
- 独自のプラグインを作成する：`settings.set({plugins: [...]})` を介して `{type, renderer}` を登録します。ここで `renderer` は `React.lazy` コンポーネントです。ChartKit は、組み込みプラグインと同様に、`type` によってそれにディスパッチします。
- すべてのチャートエンジンで整合性の取れたライト/ダークテーマが標準で付属：チャートは、周囲のアプリの `@gravity-ui/uikit` テーマに従います。

### 使用しない場合

- 単一のチャートタイプのみの場合は、[`@gravity-ui/charts`](https://github.com/gravity-ui/charts)（汎用）または [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr)（高性能時系列）を直接インポートしてください。プラグインレジストリは、1 つのエンジンにとってはオーバーヘッドです。
- ウィジェットのダッシュボードグリッドを構成するには、[`@gravity-ui/dashkit`](https://github.com/gravity-ui/dashkit) を使用してください。ChartKit はチャートをレンダリングし、DashKit は多くのウィジェットを配置します。

### 一般的な落とし穴

- **`<ChartKit>` を `settings.set({plugins: [...]})` の前にレンダリングする**：グローバルプラグインレジストリはアプリのエントリで設定する必要があります。登録されていない `type` はレンダリング時にエラーを発生させます。
- **誤ったプロップ `chartType` / `library`**：ディスパッチプロップは `type`（例：`type="gravity-charts"`）であり、データは `data` です。
- **ルートエントリからプラグインをインポートする**：プラグインはサブパスエクスポート（例：`@gravity-ui/chartkit/gravity-charts`、`@gravity-ui/chartkit/yagr`）にあります。ルートの `@gravity-ui/chartkit` エントリはそれらを再エクスポートしません。
- **すべての `type` に対して単一の `data` 形状を想定する**：形状はプラグインに依存します。たとえば、`gravity-charts` は `@gravity-ui/charts` からの `ChartData`（`{series: {data: [...]}}`）を受け取りますが、`yagr` は `{data: {graphs, timeline}, libraryConfig}` を受け取り、`libraryConfig` が必須です。
- **コンテナの高さを忘れる**：`ChartKit` は親を埋めます。ラッパーに明示的な高さがない場合、チャートはゼロに折りたたまれます。
- **uikit スタイルのインポート漏れ**：テーマ設定は `@gravity-ui/uikit/styles/styles.css` に依存します。これがないと、チャートはスタイルなしでレンダリングされます。

## AI エージェント向けドキュメント

インストールされているバージョンのエージェント読み取り可能なドキュメントは、`node_modules/@gravity-ui/chartkit/build/docs/INDEX.md` にあります。