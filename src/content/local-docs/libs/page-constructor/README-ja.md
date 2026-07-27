# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Page constructor

`Page-constructor` は、`JSON` データ（後で `YAML` フォーマットもサポート予定）に基づいてウェブページまたはその一部をレンダリングするためのライブラリです。

ページを作成する際には、コンポーネントベースのアプローチが採用されています。ページは、任意の順序で配置できる一連の既製のブロックを使用して構築されます。各ブロックには特定のタイプと入力データパラメータのセットがあります。

入力データの形式と利用可能なブロックのリストについては、[ドキュメント](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs) を参照してください。

## Install

```shell
npm install @gravity-ui/page-constructor
```

## Quick start

まず、React プロジェクトと何らかのサーバーが必要です。例えば、Vite と Express サーバーを使用して React プロジェクトを作成したり、Next.js アプリケーションを作成したりできます。これにはクライアントとサーバーサイドが同時に含まれます。

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

クライアントで、コンテンツを受信するためのエンドポイント呼び出しを追加します。

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

新しいプロジェクトを開始するために、用意した [Next.js の既製テンプレート](https://github.com/gravity-ui/page-constructor-website-template) を使用できます。

### Static site builder

[Page Constructor Builder](https://github.com/gravity-ui/page-constructor-builder) - @gravity-ui/page-constructor を使用して YAML 設定から静的ページをビルドするためのコマンドラインユーティリティ

## Documentation

### Parameters

```typescript
interface PageConstructorProps {
  content: PageContent; // JSON 形式のブロックデータ。
  shouldRenderBlock?: ShouldRenderBlock; // 各ブロックのレンダリング時に呼び出され、表示条件を設定できる関数。
  custom?: Custom; // カスタムブロック（「カスタマイズ」を参照）。
  renderMenu?: () => React.ReactNode; // ページメニューとナビゲーションをレンダリングする関数（デフォルトのメニューバージョンのレンダリングを追加予定）。
  navigation?: NavigationData; // JSON 形式のナビゲーションコンポーネントで使用するためのナビゲーションデータ
  isBranded?: boolean; // true の場合、https://gravity-ui.com/ へのリンクを含むフッターが追加されます。BrandFooter コンポーネントでさらにカスタマイズできます。
}

interface PageConstructorProviderProps {
  isMobile?: boolean; // モバイルモードでコードが実行されていることを示すフラグ。
  locale?: LocaleContextProps; // 言語とドメインに関する情報（リンクの生成とフォーマットに使用）。
  location?: Location; // ブラウザまたはルーターの履歴 API、ページ URL。
  analytics?: AnalyticsContextProps; // 分析イベントを処理する関数

  ssrConfig?: SSR; // サーバーサイドでコードが実行されていることを示すフラグ。
  theme?: 'light' | 'dark'; // ページをレンダリングするためのテーマ。
  mapsContext?: MapsContextType; // マップのパラメータ: apikey、type、scriptSrc、nonce
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

その他のユーティリティについては、この[セクション](https://github.com/gravity-ui/page-constructor/tree/main/src/text-transform)をご覧ください。

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

ページコンストラクタは `bootstrap` グリッドとその React コンポーネントに基づいた実装を使用しており、これを独自のプロジェクトで使用できます（コンストラクタとは別に）。

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

各ブロックは、アトミックなトップレベルコンポーネントです。これらは `src/units/constructor/blocks` ディレクトリに格納されています。

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
7. ブロックディレクトリに `__stories__` フォルダ内にストーリーブックのデモを追加します。ストーリーのすべてのデモコンテンツは、ストーリーディレクトリの `data.json` に配置する必要があります。汎用 `Story` はブロックのプロパティの型を受け入れる必要があります。そうしないと、ストーリーブックでブロックのプロパティが正しく表示されません。
8. `src/editor/data/templates/` フォルダにブロックデータテンプレートを追加します。ファイル名はブロックタイプと一致させる必要があります。
9. （オプション）`src/editor/data/previews/` フォルダにブロックプレビューアイコンを追加します。ファイル名はブロックタイプと一致させる必要があります。

### テーマ

`PageConstructor` ではテーマを使用できます。アプリで選択されたテーマに応じて、個々のブロックプロパティに異なる値を設定できます。

ブロックプロパティにテーマを追加するには：

1. `models/blocks.ts` ファイルで、該当するブロックプロパティの型を `ThemeSupporting<T>` ジェネリックを使用して定義します。ここで `T` はプロパティの型です。

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

プロジェクトルートの .env.development ファイルで開発モードの環境変数を定義できます。
`STORYBOOK_GMAP_API_KEY` - Google マップの apiKey

### アナリティクス

#### 初期化

アナリティクスを使い始めるには、コンストラクタにハンドラーを渡します。ハンドラーはプロジェクト側で作成する必要があります。ハンドラーは `default` および `custom` イベントオブジェクトを受け取ります。渡されたハンドラーは、ボタン、リンク、ナビゲーション、およびコントロールのクリック時に発生します。すべてのイベント処理に 1 つのハンドラーが使用されるため、ハンドラーを作成する際に異なるイベントをどのように処理するか注意してください。複雑なロジックの構築に役立つ定義済みのフィールドがあります。

コンストラクタに `autoEvents: true` を渡すと、自動設定されたイベントが発生します。

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
  [key: string]?: string; // サポートされているのは 'string' 型のみです
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

このプロジェクトには、プロジェクトのアーキテクチャ、コンポーネント、および使用パターンに関する詳細情報を提供するMarkdownドキュメントファイルの包括的な**メモリバンク**が含まれています。メモリバンクは、特にAIエージェントと連携する場合に役立ちます。構造化された情報が含まれています。

- **プロジェクト概要**: コア要件、目標、およびコンテキスト
- **コンポーネントドキュメント**: すべてのコンポーネントの詳細な使用ガイド
- **システムアーキテクチャ**: 技術パターンと設計上の決定
- **開発の進捗**: 現在のステータスと実装の詳細

### メモリバンクの使用方法

メモリバンクは `memory-bank/` ディレクトリにあり、通常のドキュメントと同様に読み取れる通常のMarkdownファイルで構成されています。

- `projectbrief.md` - コア要件を含む基礎ドキュメント
- `productContext.md` - プロジェクトの目的とユーザーエクスペリエンスの目標
- `systemPatterns.md` - アーキテクチャと技術的な決定
- `techContext.md` - 技術、セットアップ、および制約
- `activeContext.md` - 現在の作業の焦点と最近