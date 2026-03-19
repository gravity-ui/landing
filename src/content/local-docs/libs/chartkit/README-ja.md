# @gravity-ui/chartkit · [npmパッケージ](https://www.npmjs.com/package/@gravity-ui/chartkit) [ライセンス](LICENSE) [CI](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [storybook](https://preview.gravity-ui.com/chartkit/)

複数のチャートライブラリに対して統一されたレンダリングインターフェースを提供する、プラグインベースのReactコンポーネントです。1つ以上のプラグインを登録し、`<ChartKit type="..." data={...} />` を介してチャートをレンダリングします。ChartKitは自動的に適切なレンダラーにディスパッチします。

各プラグインレンダラーは遅延ロードされるため、基盤となるライブラリコードは、ChartKitがUIで実際にレンダリングされるときにのみダウンロードされます。ChartKitは、モバイルフレンドリーなツールチップ表示も標準で処理します。組み込みプラグインを使用することも、独自のプラグインを実装することもできます。

**使用する場面:**

- モダンな宣言型チャート (`gravity-charts`) または時系列/モニタリングチャート (`yagr`) が必要
- 単一の整合性の取れたAPIの下で複数のチャートタイプが必要
- Gravity UIエコシステム内で開発している

**使用しない場面:**

- 特定のチャートライブラリが1つだけ必要 — その場合は [@gravity-ui/charts](https://github.com/gravity-ui/charts) を直接使用することを推奨します

## 目次

- [はじめに](#get-started)
- [開発](#development)

## はじめに

### 要件

- React 16、17、または18
- `[@gravity-ui/uikit](https://github.com/gravity-ui/uikit)` — 必須のピア依存関係（テーマ設定とUIプリミティブを提供します）

### インストール

```shell
npm install @gravity-ui/chartkit @gravity-ui/uikit
```

### スタイル

エントリーポイントで `@gravity-ui/uikit` のスタイルをインポートしてください:

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

完全なセットアップ詳細は、[uikit スタイルガイド](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles) を参照してください。

### 基本的な使い方

ChartKitはグローバルなプラグインレジストリを使用します。アプリのエントリーポイントで `settings.set` を一度呼び出して、必要なプラグインを登録してください。`<ChartKit type="..." />` がレンダリングされると、一致するプラグインが検索されます。見つからない場合はエラーがスローされます。各プラグインのレンダラーは `React.lazy` コンポーネントであるため、コードはChartKitがUIに最初に表示されるときにのみフェッチされます。

複数のプラグインを一度に登録できます:

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

または `settings.set` を複数回呼び出すこともできます。これはプラグインリストを置き換えるのではなく、マージします。

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

リポジトリをクローンし、依存関係をインストールしてください:

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

ChartKitのルートに `.env.local` ファイルを作成します（これはgitignoreされています）:

```shell
LOCAL_PKG=@gravity-ui/charts
```

これにより、Viteは `node_modules` 内のそのパッケージを監視し、プリバンドルをスキップします。`@gravity-ui/charts` を再ビルドすると、Storybookは自動的にホットリロードされます。

複数のパッケージの場合は、カンマ区切りのリストを使用します:

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. Storybookの起動**

```shell
npm run start
```

**4. 元のパッケージに戻す**

完了したら:

1. `.env.local` の `LOCAL_PKG` をコメントアウトします
2. ChartKitで `npm install` を実行します — これにより、シンボリックリンクがレジストリバージョンに置き換えられます

```shell
# ChartKit内で:
npm ci
```

### テストの実行

```shell
npm test
```

ビジュアルリグレッションテストはDockerで実行され、環境間での一貫したスクリーンショットを保証します:

```shell
npm run test:docker
```

意図的なUI変更後に参照スクリーンショットを更新するには:

```shell
npm run test:docker:update
```

### 貢献

プルリクエストを送信する前に、[貢献ガイド](CONTRIBUTING.md) を参照してください。