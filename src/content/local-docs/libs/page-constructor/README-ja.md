# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Page constructor

`Page-constructor` は、`JSON` データに基づいてウェブページまたはその一部をレンダリングするためのライブラリです（`YAML` フォーマットのサポートは後で追加される予定です）。

ページを作成する際には、コンポーネントベースのアプローチが採用されています。ページは、任意の順序で配置できる一連の既製のブロックを使用して構築されます。各ブロックには特定のタイプと入力データパラメータのセットがあります。

入力データのフォーマットと利用可能なブロックのリストについては、[ドキュメント](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs) を参照してください。

## Install

```shell
npm install @gravity-ui/page-constructor
```

## Quick start

まず、React プロジェクトと何らかのサーバーが必要です。たとえば、Vite と Express サーバーを使用して React プロジェクトを作成するか、Next.js アプリケーションを作成できます。これにより、クライアントとサーバーの両方のサイドが一度に利用可能になります。

必要な依存関係をインストールします。

```shell
npm install @gravity-ui/page-constructor @diplodoc/transform @gravity-ui/uikit
```

`Page Constructor` をページに挿入します。正しく機能させるには、`PageConstructorProvider` でラップする必要があります。

```tsx
import {Provider} from '@gravity-ui/uikit';
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
    <Provider>
      <PageConstructorProvider>
        <PageConstructor content={content} />
      </PageConstructorProvider>
    </Provider>
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

クライアントでは、コンテンツを受信するためにエンドポイント呼び出しを追加します。

```tsx
import {Provider} from '@gravity-ui/uikit';
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
    <Provider>
      <PageConstructorProvider>
        <PageConstructor content={content} />
      </PageConstructorProvider>
    </Provider>
  );
};

export default App;
```

### Ready-made template

新しいプロジェクトを開始するには、用意された [Next.js のテンプレート](https://github.com/gravity-ui/page-constructor-website-template) を使用できます。

### Static site builder

[Page Constructor Builder](https://github.com/gravity-ui/page-constructor-builder) - @gravity-ui/page-constructor を使用して YAML 設定から静的ページをビルドするためのコマンドラインユーティリティ

## Documentation

### Parameters

```typescript
interface PageConstructorProps {
  content: PageContent; // JSON 形式のブロックデータ。
  shouldRenderBlock?: ShouldRenderBlock; // 各ブロックのレンダリング時に呼び出され、表示条件を設定できる関数。
  custom?: Custom; // カスタムブロック（「カスタマイズ」を参照）。
  renderMenu?: () => React.ReactNode; // ページメニューとナビゲーションをレンダリングする関数（デフォルトのメニューバージョンのレンダリングを追加する予定です）。
  navigation?: NavigationData; // JSON 形式のナビゲーションコンポーネントを使用するためのナビゲーションデータ
  isBranded?: boolean; // true の場合、https://gravity-ui.com/ へのリンクを含むフッターが追加されます。BrandFooter コンポーネントでさらにカスタマイズできます。
}

interface PageConstructorProviderProps {
  isMobile?: boolean; // モバイルモードでコードが実行されていることを示すフラグ。
  locale?: LocaleContextProps; // 言語とドメインに関する情報（リンクの生成とフォーマットに使用されます）。
  location?: Location; // ブラウザまたはルーターの履歴 API、ページ URL。
  analytics?: AnalyticsContextProps; // 分析イベントを処理する関数

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
```

```typescript
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

内部的には、Yandex Flavored Markdown を HTML に変換するパッケージ `diplodoc/transfrom` が使用されています。これも peer dependencies に含まれています。

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

サーバーユーティリティの使用に関する包括的なガイド、詳細な説明、および高度なユースケースについては、[サーバーユーティリティの使用に関する追加チャプター](./docs/data-preparation.md)をご覧ください。

### カスタムブロック

ページコンストラクタでは、ユーザーが自身のアプリケーションで定義したブロックを使用できます。ブロックは通常の React コンポーネントです。

カスタムブロックをコンストラクタに渡すには：

1. アプリケーションでブロックを作成します。

2. コード内で、ブロックタイプ（文字列）をキー、インポートしたブロックコンポーネントを値とするオブジェクトを作成します。

3. 作成したオブジェクトを、`PageConstructor` コンポーネントの `custom.blocks`、`custom.headers`、または `custom.subBlocks` パラメータに渡します（`custom.headers` は、一般的なコンテンツの上に個別にレンダリングされるヘッダーブロックを指定します）。

4. これで、入力データ（`content` パラメータ）で、ブロックのタイプとデータを指定して作成したブロックを使用できます。

カスタムブロックを作成する際にミックスインやコンストラクタのスタイル変数を使用するには、ファイルにインポートを追加します。

```css
@import '~@gravity-ui/page-constructor/styles/styles.scss';
```

デフォルトのフォントを使用するには、ファイルにインポートを追加します。

```css
@import '~@gravity-ui/page-constructor/styles/fonts.scss';
```

### ロード可能なブロック

ブロックが、ロードされるデータに基づいて自身をレンダリングする必要がある場合があります。この場合、ロード可能なブロックが使用されます。

カスタムの `loadable` ブロックを追加するには、`PageConstructor` に `custom.loadable` プロパティを渡します。このプロパティは、コンポーネントのデータソース名（文字列）をキー、オブジェクトを値とします。

```typescript
export interface LoadableConfigItem {
  fetch: FetchLoadableData; // データロードメソッド
  component: React.ComponentType; // ロードされたデータを渡すブロック
}

type FetchLoadableData<TData = any> = (blockKey: string) => Promise<TData>;
```

### グリッド

ページコンストラクタは、`bootstrap` グリッドとその React コンポーネントベースの実装を使用しており、これらは独自のプロジェクトでも（コンストラクタとは別に）使用できます。

グリッドは、ホストアプリケーションがグローバルな `box-sizing: border-box` リセットを設定することを期待しています（ほとんどのアプリのスケルトンには含まれています）。このパッケージにはリセットは含まれていないため、ブラウザのデフォルト `content-box` の場合、コンテナのパディングが `width: 100%` に追加され、ページが水平方向にオーバーフローします。

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

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

ページナビゲーションもコンストラクタとは別に使用できます。

```jsx
import {Navigation} from '@gravity-ui/page-constructor';

const Page= ({data, logo}: React.PropsWithChildren<PageProps>) => <Navigation data={data} logo={logo} />;
```

### ブロック

各ブロックは、アトミックなトップレベルコンポーネントです。これらは `src/units/constructor/blocks` ディレクトリに格納されています。

### サブブロック

サブブロックは、ブロックの `children` プロパティで使用できるコンポーネントです。設定では、サブブロックからの子コンポーネントのリストが指定されます。レンダリングされると、これらのサブブロックは `children` としてブロックに渡されます。

### `page-constructor` に新しいブロックを追加する方法

1. `src/blocks` または `src/sub-blocks` ディレクトリに、ブロックまたはサブブロックのコードを含むフォルダを作成します。

2. ブロックまたはサブブロックの名前を `BlockType` または `SubBlockType` 列挙型に追加し、`src/models/constructor-items/blocks.ts` または `src/models/constructor-items/sub-blocks.ts` ファイルで、既存のものと同様の方法でプロパティを記述します。

3. `src/blocks/index.ts` ファイルでブロックのエクスポートを、`src/sub-blocks/index.ts` ファイルでサブブロックのエクスポートを追加します。

4. `src/constructor-items.ts` のマッピングに新しいコンポーネントまたはブロックを追加します。

5. 新しいブロックのバリデーターを追加します。

   - ブロックまたはサブブロックのディレクトリに `schema.ts` ファイルを作成します。このファイルで、[`json-schema`](http://json-schema.org/) 形式でコンポーネントのパラメータバリデーターを記述します。
   - `schema/validators/blocks.ts` または `schema/validators/sub-blocks.ts` ファイルでエクスポートします。
   - `schema/index.ts` ファイルの `enum` または `selectCases` に追加します。

6. ブロックディレクトリに、入力パラメータの説明を含む `README.md` ファイルを追加します。
7. ブロックディレクトリに、`__stories__` フォルダ内にストーリーブックのデモを追加します。ストーリーのすべてのデモコンテンツは、ストーリーディレクトリの `data.json` に配置する必要があります。ジェネリック `Story` はブロックのプロパティの型を受け入れる必要があります。そうしないと、ストーリーブックで不正なブロックプロパティが表示されます。
8. `src/editor/data/templates/` フォルダにブロックデータテンプレートを追加します。ファイル名はブロックタイプと一致する必要があります。
9. （オプション）ブロックプレビューアイコンを `src/editor/data/previews/` フォルダに追加します。ファイル名はブロックタイプと一致する必要があります。

### テーマ

`PageConstructor` ではテーマを使用できます。これにより、アプリで選択されたテーマに応じて、個々のブロックプロパティに異なる値を設定できます。

ブロックプロパティにテーマを追加するには：

1. `models/blocks.ts` ファイルで、該当するブロックプロパティの型を `ThemeSupporting<T>` ジェネリックを使用して定義します。ここで `T` はプロパティの型です。

2. ブロックの `react` コンポーネントが含まれるファイルで、`getThemedValue` と `useTheme` フックを使用して、テーマ付きのプロパティ値を取得します（`MediaBlock.tsx` ブロックの例を参照）。

3. ブロックの `schema.ts` ファイルで、プロパティを `withTheme` でラップすることにより、プロパティバリデーターにテーマサポートを追加します。

### i18n

`page-constructor` は `uikit-based` ライブラリであり、uikit の `i18n` インスタンスを使用しています。国際化を設定するには、uikit の `configure` を使用するだけです。

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

### マップ

マップを使用するには、`PageConstructorProvider` の `mapContext` フィールドにマップの種類、`scriptSrc`、および `apiKey` を設定してください。

開発モード用の環境変数は、プロジェクトルートの `.env.development` ファイルで定義できます。
`STORYBOOK_GMAP_API_KEY` - Google マップ用の apiKey

### 分析

#### 初期化

分析を開始するには、コンストラクタにハンドラを渡します。ハンドラはプロジェクト側で作成する必要があります。以下の 3 つのイベントクラスを受け取ります。

- **デフォルトイベント**: ボタン、リンク、ナビゲーション、コントロールの操作のために生成される汎用的な Page Constructor イベントです。`autoEvents.enabled` を `true` に設定すると、これらのイベントが送信されます。
- **拡張イベント**: コンポーザブルライブラリによって提供される登録済みイベントです。`autoEvents.extendedEvents` の存在により、`enabled` とは独立して有効化され、オプションでプレフィックスとカウンターが追加されます。
- **カスタムイベント**: `analyticsEvents` を介してコンシューマーによって提供されます。自動イベントの設定は、これらを変更しません。

オブジェクト形式が推奨される設定です。

```ts
function sendEvents(events: MyEventType []) {
  ...
}

<PageConstructorProvider
    ...

    analytics={{
        sendEvents,
        autoEvents: {
            enabled: true,
            extendedEvents: {
                prefix: 'LIBRARY_',
                counter: 'secondary',
            },
        },
    }}

    ...
/>
```

```ts
type ExtendedEventsConfig = {
  prefix?: string;
  counter?: string;
};

type AutoEventsConfig = {
  enabled: boolean;
  extendedEvents?: ExtendedEventsConfig;
};
```

後方互換性のために、従来のブール値形式もサポートされています。`true` は `{enabled: true}` と同等であり、`false` は `{enabled: false}` と同等です。`autoEvents` が省略されている場合、デフォルトイベントと拡張イベントの両方が無効になります。`extendedEvents` オブジェクトは、`enabled` が `false` の場合でも、提供された拡張イベントを有効にします。

拡張イベントには `type: 'extended-event'` が必要です。プレフィックスは、大文字、小文字、区切り文字、または空白を変更せずに、設定されたとおりに連結されます。`counter` が設定されている場合、拡張イベントの `counters.include` を定義します。

```ts
// 提供されるイベント
{name: 'REGISTERED_CLICK', type: 'extended-event'}

// 上記の設定で sendEvents に受信されるイベント
{
  name: 'LIBRARY_REGISTERED_CLICK',
  type: 'extended-event',
  counters: {include: ['secondary']},
}
```

イベントは次の順序で送信されます。まずデフォルトイベント（有効な場合）、次に提供された拡張イベントとカスタムイベントが元の順序で送信されます。拡張イベントは、`extendedEvents` が設定されていない場合は省略されます。インタラクション固有の追加コンテキストは、すべての発行されたイベントに最後にマージされます。

イベントオブジェクトには、必須フィールドは `name` のみです。また、複雑なロジックの管理に役立つ事前定義済みのフィールドもあります。たとえば、`counter.include` は、プロジェクトで複数の分析システムが使用されている場合に、特定のカウンターにイベントを送信するのに役立ちます。

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

分析システムに送信するイベントを設定することが可能です。

```ts
type AnalyticsCounters = {
  include?: string[]; // 適用される分析カウンター ID の配列
  exclude?: string[]; // 適用されない分析カウンター ID の配列
};
```

#### context パラメータ

イベントが発生したプロジェクト内の場所を定義するには、`context` 値を渡します。

以下のセレクターを使用するか、プロジェクトのニーズに対応するロジックを作成してください。

```ts
// analyticsHandler.ts
if (isCounterAllowed(counterName, counters)) {
  analyticsCounter.reachGoal(counterName, name, parameters);
}
```

#### 予約済みイベントタイプ

自動設定されたイベントをマークするために、いくつかの事前定義済みのイベントタイプが使用されます。たとえば、これらのタイプを使用してデフォルトイベントをフィルタリングできます。

```ts
enum PredefinedEventTypes {
  Default = 'default-event', // すべてのボタンクリックで発生するデフォルトイベント
  Extended = 'extended-event', // コンポーザブルライブラリによって提供されるイベント
  Play = 'play', // React プレイヤーイベント
  Stop = 'stop', // React プレイヤーイベント
}
```

## 開発

```bash
npm ci
npm run dev
```

#### Vite に関する注意

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

Vite の場合、`vite-plugin-dynamic-import` プラグインをインストールし、動的インポートが機能するように設定を構成する必要があります。

## リリースフロー

通常、2 種類のコミットを使用します。

1. `fix`: `fix` タイプ のコミットは、コードベースのバグを修正します（これはセマンティックバージョニングの PATCH に対応します）。
2. `feat`: `feat` タイプ のコミットは、コードベースに新機能をもたらします（これはセマンティックバージョニングの MINOR に対応します）。
3. `BREAKING CHANGE`: フッターに `BREAKING CHANGE:` があるコミット、またはタイプ/スコープの後に `!` を追加するコミットは、破壊的な API 変更を導入します（セマンティックバージョニングの MAJOR に対応します）。`BREAKING CHANGE` は、あらゆるタイプのコミットの一部になる可能性があります。
4. リリースパッケージのバージョンを手動で設定するには、コミットメッセージに `Release-As: <version>` を追加する必要があります。例：

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

すべての情報は[こちら](https://www.conventionalcommits.org/en/v1.0.0/)で確認できます。

プルリクエストがコードオーナーから承認され、すべてのチェックに合格したら、次の手順を実行してください。

1. 他のコントリビューターからの変更を含むロボットによるリリースプルリクエスト（例: `chore(main): release 0.0.0`）があるかどうかを確認してください。存在する場合は、それがマージされていない理由を確認してください。コントリビューターが共有バージョンをリリースすることに同意する場合は、次のステップに進みます。同意しない場合は、そのコントリビューターにバージョンをリリースするように依頼し、次のステップに進みます。
2. PR を squash および merge します（Github Actions で新しいバージョンをリリースすることが重要です）。
3. ロボットがパッケージの新しいバージョンと CHANGELOG.md の変更に関する情報を含む PR を作成するまで待ちます。このプロセスは[Actions タブ](https://github.com/gravity-ui/page-constructor/actions)で確認できます。
4. CHANGELOG.md で変更を確認し、ロボットの PR を承認します。
5. PR を squash および merge します。リリースプロセスは[Actions タブ](https://github.com/gravity-ui/page-constructor/actions)で確認できます。

### アルファバージョンのリリース

ブランチからパッケージのアルファバージョンをリリースしたい場合は、手動で行うことができます。

1. Actions タブに移動します。
2. 左側のページで「Release alpha version」ワークフローを選択します。
3. 右側にある「Run workflow」ボタンが表示されます。ここでブランチを選択できます。
4. 手動バージョンのフィールドも表示されます。ブランチで初めてアルファをリリースする場合、ここでは何も設定しないでください。最初のリリース後、ブランチがすぐに期限切れになる可能性があるため、バージョンを手動で設定する必要があります。そうしないとエラーが発生するため、手動バージョンには `alpha` プレフィックスを使用してください。
5. 「Run workflow」をプッシュし、アクションが完了するまで待ちます。必要なだけバージョンをリリースできますが、乱用せず、本当に必要な場合にのみバージョンをリリースしてください。それ以外の場合は、[npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack) を使用してください。

### ベータメジャーバージョンのリリース

新しいメジャーバージョンをリリースする場合、安定版の前にベータ版が必要になる可能性が高いです。その場合は、以下の手順に従ってください。

1. `beta` ブランチを作成または更新します。
2. そこに変更を追加します。
3. 新しいベータ版の準備ができたら、空のコミットで手動でリリースします（または、最後のコミットに以下のコミットメッセージとフッターを追加することもできます）。

```bash
git commit -m 'fix: last commit

Release-As: 3.0.0-beta.0' --allow-empty
```

4. Release please ロボットが `beta` ブランチに `CHANGELOG.md` を更新した新しい PR を作成し、パッケージのバージョンを更新します。
5. 必要に応じて何度でも繰り返すことができます。ベータタグなしで最新のメジャーバージョンをリリースする準備ができたら、`beta` ブランチから `main` ブランチに PR を作成する必要があります。パッケージのバージョンにベータタグが付いているのは正常なことです。ロボットはそれを認識し、適切に変更します。`3.0.0-beta.0` は `3.0.0` になります。

### 前のメジャーバージョンのリリースフロー

コミットを `main` に追加した後、前のメジャーバージョンの新しいバージョンをリリースしたい場合は、以下の手順に従ってください。

1. 必要なブランチを更新します。前のメジャーリリースブランチの名前は次のとおりです。
   1. `version-1.x.x/fixes` - メジャーバージョン 1.x.x の場合
   2. `version-2.x.x` - メジャーバージョン 2.x.x の場合
2. 前のメジャーリリースブランチから新しいブランチをチェックアウトします。
3. `main` ブランチからコミットを cherry-pick します。
4. PR を作成し、承認を得て、前のメジャーリリースブランチにマージします。
5. PR を squash and merge します（Github-Actions で新しいバージョンをリリースすることが重要です）。
6. ロボットがパッケージの新しいバージョンと `CHANGELOG.md` の変更に関する情報を含む PR を作成するまで待ちます。このプロセスは [Actions タブ](https://github.com/gravity-ui/page-constructor/actions) で確認できます。
7. `CHANGELOG.md` で変更を確認し、ロボットの PR を承認します。
8. PR を squash and merge します。リリースプロセスは [Actions タブ](https://github.com/gravity-ui/page-constructor/actions) で確認できます。

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

このプロジェクトには、プロジェクトのアーキテクチャ、コンポーネント、および使用パターンに関する詳細情報を提供する Markdown ドキュメントファイルの包括的な **Memory Bank** が含まれています。Memory Bank は、AI エージェントと連携する場合に特に役立ちます。構造化された情報が含まれているためです。

- **プロジェクト概要**: コア要件、目標、およびコンテキスト
- **コンポーネント ドキュメント**: すべてのコンポーネントの詳細な使用ガイド
- **システム アーキテクチャ**: 技術的なパターンと設計上の決定
- **開発の進捗状況**: 現在のステータスと実装の詳細

### Memory Bank の使用方法

Memory Bank は `memory-bank/` ディレクトリにあり、通常の Markdown ファイルで構成されており、他のドキュメントと同様に読み取ることができます。

- `projectbrief.md` - コア要件を含む基本ドキュメント
- `productContext.md` - プロジェクトの目的とユーザーエクスペリエンスの目標
- `systemPatterns.md` - アーキテクチャと技術的な決定
- `techContext.md` - テクノロジー、セットアップ、および制約
- `activeContext.md` - 現在の作業の焦点と最近の変更
- `progress.md` - 実装ステータスと既知の問題
- `usage/` - コンポーネント固有の使用ドキュメント
- `storybookComponents.md` - Storybook の統合の詳細

## Tests

包括的なドキュメントは、提供されている [リンク](./test-utils/docs/README.md) で入手できます。

## License

MIT ライセンスの下で配布されています。詳細については [LICENSE](LICENSE) を参照してください。

## AI エージェント向け

定義済みの順序付け可能なブロックのセットを使用して、宣言型の JSON/YAML 設定から Web ページ全体またはページセクションをレンダリングするためのライブラリです。マーケティング/ランディングページを構築するために使用してください。一般的なアプリケーション UI には使用しないでください。

### 使用する場合

- データ駆動型のページ: `PageConstructorProvider` でラップされた `PageConstructor` を使用して、型指定されたブロックの `content` 設定をレンダリングします。
- 事前に構築されたブロック（ヘッダー、メディア、カードなど）から組み立てられたマーケティング、ランディング、およびドキュメントページ。
- `@gravity-ui/page-constructor/server` ユーティリティ（`contentTransformer`、`fullTransform`）を介したブロックテキストのサーバーサイド YFM 処理。
- レスポンシブグリッド（`Grid`/`Row`/`Col`）または `Navigation` コンポーネントのみをスタンドアロンで再利用する。

### 使用しない場合

- 一般的なアプリケーション UI（ボタン、フォーム、モーダル） - [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) を使用します。
- Markdown/YFM コンテンツの編集 - [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor) を使用します。
- アプリケーションナビゲーションシェル（サイドヘッダー） - [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation) を使用します。このパッケージの `Navigation` はページレベルのトップナビゲーションです。

### 一般的な注意点

- **`PageConstructor` は `PageConstructorProvider` でラップする必要があります。** 単独でレンダリングすると、コンテキスト（ロケール、テーマ、SSR、分析）が壊れます。
- **`content` プロパティは `content` で、形状は `{blocks: [...]}` です。** 各ブロックオブジェクトには、既知のブロックと一致する `type` およびそのデータフィールドが必要です。`data`/`config` プロパティはありません。
- **ブロックテキストの YFM はサーバー処理が必要です。** Markdown ライクなフィールドは、`@gravity-ui/page-constructor/server` の `contentTransformer`/`fullTransform` を介してコンテンツを実行しない限り、プレーンテキストとしてレンダリングされます。`@diplodoc/transform` は必須のピア依存関係です。
- **SCSS スタイルをインポートします。** `@gravity-ui/page-constructor/styles/styles.scss`（CSS ではなく SCSS）を追加します。カスタムブロックも同じファイルをインポートして、ミックスイン/変数を再利用します。
- **Vite には `vite-plugin-dynamic-import` が必要です。** これがないと、Vite での動的なブロックインポートは失敗します。
- **グリッドにはグローバルな `box-sizing: border-box` リセットが必要です。** パッケージはそれを出荷しません。これがないと、コンテナのパディングがビューポートを水平方向にオーバーフローしますが、型チェックとビルドは緑色のままです。ホストアプリのスタイルに `*, *::before, *::after { box-sizing: border-box; }` を追加します。

## AI エージェント向けのドキュメント

インストールされているバージョンのエージェント読み取り可能なドキュメントは、`node_modules/@gravity-ui/page-constructor/build/docs/INDEX.md` にあります。