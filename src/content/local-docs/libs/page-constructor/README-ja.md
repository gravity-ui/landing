# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Page constructor

`Page-constructor` は、`JSON` データに基づいてウェブページまたはその一部をレンダリングするためのライブラリです（後で `YAML` フォーマットのサポートを追加予定）。

ページを作成する際には、コンポーネントベースのアプローチが採用されています。ページは、任意の順序で配置できる一連の既製のブロックを使用して構築されます。各ブロックには特定のタイプと入力データパラメータのセットがあります。

入力データのフォーマットと利用可能なブロックのリストについては、[ドキュメント](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs) を参照してください。

## Install

```shell
npm install @gravity-ui/page-constructor
```

## Quick start

まず、React プロジェクトと何らかのサーバーが必要です。例えば、Vite と Express サーバーを使用して React プロジェクトを作成したり、Next.js アプリケーションを作成したりできます。これにより、クライアントとサーバーの両方のサイドが一度に用意されます。

必要な依存関係をインストールします。

```shell
npm install @gravity-ui/page-constructor @diplodoc/transform @gravity-ui/uikit
```

ページに `Page Constructor` を挿入します。正しく動作させるには、`PageConstructorProvider` でラップする必要があります。

```tsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';
import '@gravity-ui/page-constructor/styles/styles.scss';

const App = () => {
  const content = {
    blocks: [
      {
        type: 'header-block',
        title: 'Hello world',
        background: {color: '#f0f0f0'},
        description:
          '**Congratulations!** Have you built a [page-constructor](https://github.com/gravity-ui/page-constructor) into your website',
      },
    ],
  };

  return (
    <PageConstructorProvider>
      <PageConstructor content={content} />
    </PageConstructorProvider>
  );
};

export default App;
```

これは最もシンプルな接続例でした。YFM マークアップを機能させるには、サーバーでコンテンツを処理し、クライアントで受信する必要があります。

サーバーが別のアプリケーションである場合は、page-constructor をインストールする必要があります。

```shell
npm install @gravity-ui/page-constructor
```

すべての基本ブロックで YFM を処理するには、`contentTransformer` を呼び出し、コンテンツとオプションを渡します。

```ts
const express = require('express');
const app = express();
const {contentTransformer} = require('@gravity-ui/page-constructor/server');

const content = {
  blocks: [
    {
      type: 'header-block',
      title: 'Hello world',
      background: {color: '#f0f0f0'},
      description:
        '**Congratulations!** Have you built a [page-constructor](https://github.com/gravity-ui/page-constructor) into your website',
    },
  ],
};

app.get('/content', (req, res) => {
  res.send({content: contentTransformer({content, options: {lang: 'en'}})});
});

app.listen(3000);
```

クライアント側で、コンテンツを受信するためのエンドポイント呼び出しを追加します。

```tsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';
import '@gravity-ui/page-constructor/styles/styles.scss';
import {useEffect, useState} from 'react';

const App = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/content').then((r) => r.json());
      setContent(response.content);
    })();
  }, []);

  return (
    <PageConstructorProvider>
      <PageConstructor content={content} />
    </PageConstructorProvider>
  );
};

export default App;
```

### Ready-made template

新しいプロジェクトを開始するために、準備済みの [Next.js のテンプレート](https://github.com/gravity-ui/page-constructor-website-template) を使用できます。

### Static site builder

[Page Constructor Builder](https://github.com/gravity-ui/page-constructor-builder) - @gravity-ui/page-constructor を使用して YAML 設定から静的ページをビルドするためのコマンドラインユーティリティ

## Documentation

### Parameters

```typescript
interface PageConstructorProps {
  content: PageContent; // JSON フォーマットのブロックデータ。
  shouldRenderBlock?: ShouldRenderBlock; // 各ブロックのレンダリング時に呼び出され、表示条件を設定できる関数。
  custom?: Custom; // カスタムブロック（「カスタマイズ」を参照）。
  renderMenu?: () => React.ReactNode; // ページメニューとナビゲーションをレンダリングする関数（デフォルトのメニューバージョンのレンダリングを追加予定）。
  navigation?: NavigationData; // JSON フォーマットのナビゲーションコンポーネントで使用するためのナビゲーションデータ
  isBranded?: boolean; // true の場合、https://gravity-ui.com/ へのリンクを含むフッターを追加します。BrandFooter コンポーネントでさらにカスタマイズできます。
}

interface PageConstructorProviderProps {
  isMobile?: boolean; // モバイルモードでコードが実行されていることを示すフラグ。
  locale?: LocaleContextProps; // 言語とドメインに関する情報（リンクの生成とフォーマット時に使用）。
  location?: Location; // ブラウザまたはルーターの履歴 API、ページ URL。
  analytics?: AnalyticsContextProps; // 分析イベントを処理するための関数

  ssrConfig?: SSR; // サーバーサイドでコードが実行されていることを示すフラグ。
  theme?: 'light' | 'dark'; // ページをレンダリングするためのテーマ。
  mapsContext?: MapsContextType; // マップのパラメータ：apikey、type、scriptSrc、nonce
}

export interface PageContent extends Animatable {
  blocks: Block[];
  menu?: Menu;
  background?: MediaProps;
}

interface Custom {
  blocks?: CustomItems;
  subBlocks?: CustomItems;
  headers?: CustomItems;
  loadable?: LoadableConfig;
}

type ShouldRenderBlock = (block: Block, blockKey: string) => Boolean;

interface Location {
  history?: History;
  search?: string;
  hash?: string;
  pathname?: string;
  hostname?: string;
}

interface Locale {
  lang?: Lang;
  tld?: string;
}

interface SSR {
  isServer?: boolean;
}

interface NavigationData {
  logo: NavigationLogo;
  header: HeaderData;
}

interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}

interface HeaderData {
  leftItems: NavigationItem[];
  rightItems?: NavigationItem[];
}
```

```typescript
interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}
```

### サーバーユーティリティ

このパッケージは、コンテンツを変換するためのサーバーユーティリティを提供します。

```ts
const {fullTransform} = require('@gravity-ui/page-constructor/server');

const {html} = fullTransform(content, {
  lang,
  extractTitle: true,
  allowHTML: true,
  path: __dirname,
  plugins,
});
```

内部では、Yandex Flavored Markdown を HTML に変換するために `diplodoc/transfrom` というパッケージが使用されています。これも peer dependencies に含まれています。

カスタムコンポーネントなど、必要な場所で便利なユーティリティを使用することもできます。

```ts
const {
  typografToText,
  typografToHTML,
  yfmTransformer,
} = require('@gravity-ui/page-constructor/server');

const post = {
  title: typografToText(title, lang),
  content: typografToHTML(content, lang),
  description: yfmTransformer(lang, description, {plugins}),
};
```

その他のユーティリティについては、この[セクション](https://github.com/gravity-ui/page-constructor/tree/main/src/text-transform)を参照してください。

### サーバーユーティリティとトランスフォーマーの詳細ドキュメント

サーバーユーティリティの使用に関する包括的なガイド、詳細な説明、高度なユースケースについては、[サーバーユーティリティの使用に関する追加チャプター](./docs/data-preparation.md)をご覧ください。

### カスタムブロック

ページコンストラクタでは、ユーザーが自身のアプリケーションで定義したブロックを使用できます。ブロックは通常の React コンポーネントです。

カスタムブロックをコンストラクタに渡すには：

1. アプリケーションでブロックを作成します。

2. コード内で、ブロックタイプ（文字列）をキーとし、インポートしたブロックコンポーネントを値とするオブジェクトを作成します。

3. 作成したオブジェクトを、`PageConstructor` コンポーネントの `custom.blocks`、`custom.headers`、または `custom.subBlocks` パラメータに渡します（`custom.headers` は、一般的なコンテンツの上に個別にレンダリングされるブロックヘッダーを指定します）。

4. これで、入力データ（`content` パラメータ）で、ブロックのタイプとデータを指定して作成したブロックを使用できるようになります。

カスタムブロックを作成する際にミックスインやコンストラクタのスタイル変数を使用するには、ファイルにインポートを追加します。

```css
@import '~@gravity-ui/page-constructor/styles/styles.scss';
```

デフォルトのフォントを使用するには、ファイルにインポートを追加します。

```css
@import '~@gravity-ui/page-constructor/styles/fonts.scss';
```

### ロード可能なブロック

ブロックがロードされるデータに基づいて自身をレンダリングする必要がある場合があります。この場合、ロード可能なブロックが使用されます。

カスタムの `loadable` ブロックを追加するには、`PageConstructor` に `custom.loadable` プロパティを渡します。このプロパティでは、コンポーネントのデータソース名（文字列）をキーとし、オブジェクトを値とします。

```typescript
export interface LoadableConfigItem {
  fetch: FetchLoadableData; // データロードメソッド
  component: React.ComponentType; // ロードされたデータを渡すブロック
}

type FetchLoadableData<TData = any> = (blockKey: string) => Promise<TData>;
```

### グリッド

ページコンストラクタは `bootstrap` グリッドとその React コンポーネントに基づいた実装を使用しており、これは独自のプロジェクトでも（コンストラクタとは別に）使用できます。

使用例：

```jsx
import {Grid, Row, Col} from '@gravity-ui/page-constructor';

const Page = ({children}: PropsWithChildren<PageProps>) => (
  <Grid>
    <Row>
      <Col sizes={{lg: 4, sm: 6, all: 12}}>{children}</Col>
    </Row>
  </Grid>
);
```

### ナビゲーション

ページナビゲーションもコンストラクタとは別に利用できます。

```jsx
import {Navigation} from '@gravity-ui/page-constructor';

const Page= ({data, logo}: React.PropsWithChildren<PageProps>) => <Navigation data={data} logo={logo} />;
```

### ブロック

各ブロックはアトミックなトップレベルコンポーネントです。これらは `src/units/constructor/blocks` ディレクトリに格納されています。

### サブブロック

サブブロックは、ブロックの `children` プロパティで使用できるコンポーネントです。設定では、子コンポーネントのリストがサブブロックから指定されます。レンダリングされると、これらのサブブロックは `children` としてブロックに渡されます。

### `page-constructor` に新しいブロックを追加する方法

1. `src/blocks` または `src/sub-blocks` ディレクトリに、ブロックまたはサブブロックのコードを含むフォルダを作成します。

2. `src/models/constructor-items/blocks.ts` または `src/models/constructor-items/sub-blocks.ts` ファイルで、既存のものと同様の方法で、ブロックまたはサブブロックの名前を `BlockType` または `SubBlockType` 列挙型に追加し、そのプロパティを記述します。

3. `src/blocks/index.ts` ファイルでブロックのエクスポートを、`src/sub-blocks/index.ts` ファイルでサブブロックのエクスポートを追加します。

4. `src/constructor-items.ts` ファイルのマッピングに新しいコンポーネントまたはブロックを追加します。

5. 新しいブロックのバリデーターを追加します。

   - ブロックまたはサブブロックのディレクトリに `schema.ts` ファイルを作成します。このファイルで、[`json-schema`](http://json-schema.org/) 形式でコンポーネントのパラメータバリデーターを記述します。
   - `schema/validators/blocks.ts` または `schema/validators/sub-blocks.ts` ファイルでエクスポートします。
   - `schema/index.ts` ファイルの `enum` または `selectCases` に追加します。

6. ブロックディレクトリに、入力パラメータの説明を含む `README.md` ファイルを追加します。
7. ブロックディレクトリに `__stories__` フォルダ内に storybook デモを追加します。story のすべてのデモコンテンツは、story ディレクトリの `data.json` に配置する必要があります。汎用 `Story` はブロックの props の型を受け入れる必要があります。そうしないと、Storybook で incorrect なブロック props が表示されます。
8. `src/editor/data/templates/` フォルダにブロックデータテンプレートを追加します。ファイル名はブロックタイプと一致させる必要があります。
9. （オプション）`src/editor/data/previews/` フォルダにブロックプレビューアイコンを追加します。ファイル名はブロックタイプと一致させる必要があります。

### テーマ

`PageConstructor` ではテーマを使用できます。アプリで選択されたテーマに応じて、個々のブロックプロパティに異なる値を設定できます。

ブロックプロパティにテーマを追加するには：

1. `models/blocks.ts` ファイルで、`ThemeSupporting<T>` ジェネリックを使用して該当するブロックプロパティの型を定義します。ここで `T` はプロパティの型です。

2. ブロックの `react` コンポーネントが含まれるファイルで、`getThemedValue` と `useTheme` フックを使用して、テーマ付きのプロパティ値を取得します（`MediaBlock.tsx` ブロックの例を参照）。

3. プロパティバリデーターにテーマサポートを追加します。ブロックの `schema.ts` ファイルで、そのプロパティを `withTheme` でラップします。

### i18n

`page-constructor` は `uikit-based` ライブラリであり、uikit の `i18n` インスタンスを使用しています。国際化を設定するには、uikit の `configure` を使用するだけです。

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

### マップ

マップを使用するには、マップタイプ、scriptSrc、および apiKey を `PageConstructorProvider` の `mapContext` フィールドに入力します。

プロジェクトルートの .env.development ファイルで開発モード用の環境変数を定義できます。
`STORYBOOK_GMAP_API_KEY` - google maps の apiKey

### アナリティクス

#### 初期化

アナリティクスを使い始めるには、コンストラクタにハンドラーを渡します。ハンドラーはプロジェクト側で作成する必要があります。ハンドラーは `default` および `custom` イベントオブジェクトを受け取ります。1 つのハンドラーがすべてのイベント処理に使用されるため、ハンドラーを作成する際に異なるイベントをどのように処理するか注意してください。複雑なロジックの構築に役立つ、定義済みのフィールドがあります。

コンストラクタに `autoEvents: true` を渡すと、自動設定されたイベントが発火します。

```ts
function sendEvents(events: MyEventType []) {
  ...
}

<PageConstructorProvider
    ...

    analytics={{sendEvents, autoEvents: true}}

    ...
/>
```

イベントオブジェクトには、必須フィールドとして `name` のみが存在します。複雑なロジックの管理に役立つ、定義済みのフィールドも用意されています。例えば、プロジェクトで複数の分析システムが使用されている場合に、`counter.include` を使用すると、特定のカウンターにイベントを送信するのに役立ちます。

```ts
type AnalyticsEvent<T = {}> = T & {
  name: string;
  type?: string;
  counters?: AnalyticsCounters;
  context?: string;
};
```

プロジェクトに必要なイベントタイプを設定することが可能です。

```ts
type MyEventType = AnalyticsEvent<{
  [key: string]?: string; // 'string' 型のみサポートされています
}>;
```

#### カウンターセレクター

イベントをどの分析システムに送信するかを設定することが可能です。

```ts
type AnalyticsCounters = {
  include?: string[]; // 適用される分析カウンターIDの配列
  exclude?: string[]; // 適用されない分析カウンターIDの配列
};
```

#### context パラメータ

イベントが発生したプロジェクト内の場所を定義するために `context` 値を渡します。

プロジェクトのニーズに合わせたロジックを作成するか、以下のセレクターを使用してください。

```ts
// analyticsHandler.ts
if (isCounterAllowed(counterName, counters)) {
  analyticsCounter.reachGoal(counterName, name, parameters);
}
```

#### 予約済みイベントタイプ

自動設定されたイベントをマークするために、いくつかの定義済みイベントタイプが使用されます。例えば、これらのタイプを使用してデフォルトイベントをフィルタリングできます。

```ts
enum PredefinedEventTypes {
  Default = 'default-event', // すべてのボタンクリックで発生するデフォルトイベント
  Play = 'play', // React Player イベント
  Stop = 'stop', // React Player イベント
}
```

## 開発

```bash
npm ci
npm run dev
```

#### Vite に関する注意点

```ts
import react from '@vitejs/plugin-react-swc';
import dynamicImport from 'vite-plugin-dynamic-import';

export default defineConfig({
  plugins: [
    react(),
    dynamicImport({
      filter: (id) => id.includes('/node_modules/@gravity-ui/page-constructor'),
    }),
  ],
});
```

Vite では、`vite-plugin-dynamic-import` プラグインをインストールし、動的インポートが機能するように設定を構成する必要があります。

## リリースフロー

通常、コミットには 2 種類あります。

1. `fix`: コードベースのバグを修正するコミットです（セマンティックバージョニングの PATCH に対応します）。
2. `feat`: コードベースに新機能をもたらすコミットです（セマンティックバージョニングの MINOR に対応します）。
3. `BREAKING CHANGE`: フッターに `BREAKING CHANGE:` を持つコミット、またはタイプ/スコープの後に `!` を追加するコミットは、API の破壊的変更を導入します（セマンティックバージョニングの MAJOR に対応します）。`BREAKING CHANGE` は、あらゆるタイプのコミットの一部となる可能性があります。
4. リリースパッケージのバージョンを手動で設定するには、コミットメッセージに `Release-As: <version>` を追加する必要があります。例：

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

すべての情報は[こちら](https://www.conventionalcommits.org/en/v1.0.0/)で確認できます。

プルリクエストがコードオーナーの承認を得て、すべてのチェックを通過したら、以下の手順を実行してください。

1. 他のコントリビューターからの変更を含むロボットによるリリースプルリクエスト（`chore(main): release 0.0.0` のような形式）があるかどうかを確認します。存在する場合は、なぜマージされていないのかを確認します。コントリビューターが共有バージョンをリリースすることに同意する場合は、次のステップに進みます。同意しない場合は、そのコントリビューターにバージョンをリリースするように依頼し、次のステップに進みます。
2. PR を Squash and merge します（Github Actions で新しいバージョンをリリースすることが重要です）。
3. ロボットがパッケージの新しいバージョンと CHANGELOG.md の変更に関する情報を含む PR を作成するのを待ちます。このプロセスは[Actions タブ](https://github.com/gravity-ui/page-constructor/actions)で確認できます。
4. CHANGELOG.md で変更を確認し、ロボットの PR を承認します。
5. PR を Squash and merge します。リリースプロセスは[Actions タブ](https://github.com/gravity-ui/page-constructor/actions)で確認できます。

### アルファバージョンのリリース

ブランチからパッケージのアルファバージョンをリリースしたい場合は、手動で行うことができます。

1. Actions タブに移動します。
2. 左側のページで「Release alpha version」ワークフローを選択します。
3. 右側にある「Run workflow」ボタンが表示されます。ここでブランチを選択できます。
4. 手動バージョンのフィールドも表示されます。ブランチで初めてアルファ版をリリースする場合は、ここに何も設定しないでください。最初のリリース後、ブランチがすぐに期限切れになる可能性があるため、`package.json` を変更しないように、バージョンを手動で設定する必要があります。手動バージョンにプレフィックス `alpha` を付けないとエラーが発生します。
5. 「Run workflow」をプッシュし、アクションが完了するのを待ちます。必要な場合に限り、何度でもバージョンをリリースできます。それ以外の場合は、[npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack) を使用してください。

### ベータ版メジャーバージョンのリリース

安定版の前にベータ版が必要になる可能性が高い新しいメジャーバージョンをリリースしたい場合は、以下の手順を実行してください。

1. `beta` ブランチを作成または更新します。
2. 変更をそこに追加します。
3. 新しいベータ版の準備ができたら、空のコミットで手動でリリースします（または、最後のコミットに以下のフッターを追加することもできます）。

```bash
git commit -m 'fix: last commit

Release-As: 3.0.0-beta.0' --allow-empty
```

4. Release please ロボットが CHANGELOG.md を更新し、パッケージのバージョンを更新した PR を `beta` ブランチに作成します。
5. 必要に応じて何度でも繰り返すことができます。最新のメジャーバージョンをベータタグなしでリリースする準備ができたら、`beta` ブランチから `main` ブランチに PR を作成する必要があります。パッケージのバージョンにベータタグが付いているのは正常なことであることに注意してください。ロボットはそれを認識し、適切に変更します。`3.0.0-beta.0` は `3.0.0` になります。

### 前のメジャーバージョンのリリースフロー

メインブランチにコミットした後、前のメジャーバージョンに新しいバージョンをリリースしたい場合は、以下の手順を実行してください。

1. 必要なブランチを更新します。前のメジャーリリースブランチ名は次のとおりです。
   1. `version-1.x.x/fixes` - メジャーバージョン 1.x.x 用
   2. `version-2.x.x` - メジャーバージョン 2.x.x 用
2. 前のメジャーリリースブランチから新しいブランチをチェックアウトします。
3. `main` ブランチからコミットを cherry-pick します。
4. PR を作成し、承認を得て、前のメジャーリリースブランチにマージします。
5. PR を Squash and merge します（Github Actions で新しいバージョンをリリースすることが重要です）。
6. ロボットがパッケージの新しいバージョンと CHANGELOG.md の変更に関する情報を含む PR を作成するのを待ちます。このプロセスは[Actions タブ](https://github.com/gravity-ui/page-constructor/actions)で確認できます。
7. CHANGELOG.md で変更を確認し、ロボットの PR を承認します。
8. PR を Squash and merge します。リリースプロセスは[Actions タブ](https://github.com/gravity-ui/page-constructor/actions)で確認できます。

## Page constructor editor

エディターは、リアルタイムプレビューによるページコンテンツ管理のためのユーザーインターフェースを提供します。

使用方法：

```tsx
import {Editor} from '@gravity-ui/page-constructor/editor';

interface MyAppEditorProps {
  initialContent: PageContent;
  transformContent: ContentTransformer;
  onChange: (content: PageContent) => void;
}

export const MyAppEditor = ({initialContent, onChange, transformContent}: MyAppEditorProps) => (
  <Editor content={initialContent} onChange={onChange} transformContent={transformContent} />
);
```

## Memory Bank

このプロジェクトには、プロジェクトのアーキテクチャ、コンポーネント、および使用パターンに関する詳細情報を提供するMarkdownドキュメントファイルのコレクションである包括的な**メモリバンク**が含まれています。メモリバンクは、特にAIエージェントと連携する場合に役立ちます。なぜなら、以下に関する構造化された情報が含まれているからです。

- **プロジェクト概要**: コア要件、目標、およびコンテキスト
- **コンポーネントドキュメント**: すべてのコンポーネントの詳細な使用ガイド
- **システムアーキテクチャ**: 技術的なパターンと設計上の決定
- **開発進捗**: 現在のステータスと実装の詳細

### メモリバンクの使用方法

メモリバンクは `memory-bank/` ディレクトリにあり、通常のドキュメントと同様に読み取ることができる通常のMarkdownファイルで構成されています。

- `projectbrief.md` - コア要件を含む基本ドキュメント
- `productContext.md` - プロジェクトの目的とユーザーエクスペリエンスの目標
- `systemPatterns.md` - アーキテクチャと技術的な決定
- `techContext.md` - 技術、セットアップ、および制約
- `activeContext.md` - 現在の作業の焦点と最近の変更
- `progress.md` - 実装ステータスと既知の問題
- `usage/` - コンポーネント固有の使用ドキュメント
- `storybookComponents.md` - Storybook連携の詳細

### AIエージェント向け

このプロジェクトでAIエージェントと連携する場合、メモリバンクは包括的な知識ベースとして機能し、エージェントが以下を理解するのに役立ちます。

- プロジェクトの構造とパターン
- コンポーネントAPIと使用例
- 開発ワークフローとベストプラクティス
- 現在の実装ステータスと次のステップ

AIエージェントはこれらのファイルを読み取ることで、プロジェクトのコンテキストを迅速に把握し、コードの変更や実装についてより情報に基づいた意思決定を行うことができます。

## テスト

包括的なドキュメントは、提供された[リンク](./test-utils/docs/README.md)で入手できます。