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

まず、React プロジェクトと何らかのサーバーが必要です。たとえば、Vite と Express サーバーを使用して React プロジェクトを作成するか、Next.js アプリケーションを作成できます。これにより、クライアントとサーバーの両方のサイドが一度に用意されます。

必要な依存関係をインストールします。

```shell
npm install @gravity-ui/page-constructor @diplodoc/transform @gravity-ui/uikit
```

`Page Constructor` をページに挿入します。正しく機能するには、`PageConstructorProvider` でラップする必要があります。

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

新しいプロジェクトを開始するには、準備済みの [Next.js のテンプレート](https://github.com/gravity-ui/page-constructor-website-template) を使用できます。

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

```markdown
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

内部では、Yandex Flavored Markdown を HTML に変換するパッケージ `diplodoc/transfrom` が使用されています。これも peerDependencies に含まれています。

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

カスタムの `loadable` ブロックを追加するには、`PageConstructor` に `custom.loadable` プロパティを渡します。このプロパティは、コンポーネントのデータソース名（文字列）をキーとし、オブジェクトを値とします。

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

ページナビゲーションもコンストラクタとは別に使用できます。

```jsx
import {Navigation} from '@gravity-ui/page-constructor';

const Page= ({data, logo}: React.PropsWithChildren<PageProps>) => <Navigation data={data} logo={logo} />;
```

### ブロック

各ブロックは、アトミックなトップレベルコンポーネントです。これらは `src/units/constructor/blocks` ディレクトリに格納されています。

### サブブロック

サブブロックは、ブロックの `children` プロパティで使用できるコンポーネントです。設定では、子コンポーネントのリストがサブブロックから指定されます。レンダリングされると、これらのサブブロックは `children` としてブロックに渡されます。

### `page-constructor` に新しいブロックを追加する方法

1. `src/blocks` または `src/sub-blocks` ディレクトリで、ブロックまたはサブブロックのコードを含むフォルダを作成します。

2. `src/models/constructor-items/blocks.ts` または `src/models/constructor-items/sub-blocks.ts` ファイルで、既存のものと同様の方法で、ブロックまたはサブブロックの名前を `BlockType` または `SubBlockType` 列挙型に追加し、そのプロパティを記述します。

3. `src/blocks/index.ts` ファイルでブロックのエクスポートを、`src/sub-blocks/index.ts` ファイルでサブブロックのエクスポートを追加します。

4. `src/constructor-items.ts` のマッピングに新しいコンポーネントまたはブロックを追加します。

5. 新しいブロックのバリデーターを追加します。

   - ブロックまたはサブブロックのディレクトリに `schema.ts` ファイルを作成します。このファイルで、[`json-schema`](http://json-schema.org/) 形式でコンポーネントのパラメータバリデーターを記述します。
   - `schema/validators/blocks.ts` または `schema/validators/sub-blocks.ts` ファイルでエクスポートします。
   - `schema/index.ts` ファイルの `enum` または `selectCases` に追加します。

6. ブロックのディレクトリに、入力パラメータの説明を含む `README.md` ファイルを追加します。
7. ブロックのディレクトリに `__stories__` フォルダ内に storybook デモを追加します。story のすべてのデモコンテンツは、story ディレクトリの `data.json` に配置する必要があります。汎用 `Story` はブロックのプロパティの型を受け入れる必要があります。そうしないと、Storybook で不正なブロックプロパティが表示されます。
8. `src/editor/data/templates/` フォルダにブロックデータテンプレートを追加します。ファイル名はブロックタイプと一致する必要があります。
9. （オプション）ブロックのプレビューアイコンを `src/editor/data/previews/` フォルダに追加します。ファイル名はブロックタイプと一致する必要があります。

### テーマ

`PageConstructor` ではテーマを使用できます。アプリケーションで選択されたテーマに応じて、個々のブロックプロパティに異なる値を設定できます。

ブロックプロパティにテーマを追加するには：

1. `models/blocks.ts` ファイルで、該当するブロックプロパティの型を `ThemeSupporting<T>` ジェネリックを使用して定義します。ここで `T` はプロパティの型です。

2. ブロックの `react` コンポーネントが含まれるファイルで、`getThemedValue` と `useTheme` フックを使用して、テーマ付きのプロパティ値を取得します（`MediaBlock.tsx` ブロックの例を参照）。

3. プロパティバリデーターにテーマサポートを追加します。ブロックの `schema.ts` ファイルで、そのプロパティを `withTheme` でラップします。

### i18n

`page-constructor` は `uikit`-based ライブラリであり、uikit の `i18n` インスタンスを使用しています。国際化を設定するには、uikit の `configure` を使用するだけです。

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

### マップ

マップを使用するには、マップタイプ、scriptSrc、および apiKey を `PageConstructorProvider` の `mapContext` フィールドに入力します。

プロジェクトルート内の .env.development ファイルで開発モードの環境変数を定義できます。
`STORYBOOK_GMAP_API_KEY` - google maps の apiKey

### アナリティクス

#### 初期化

アナリティクスを開始するには、コンストラクタにハンドラーを渡します。ハンドラーはプロジェクト側で作成する必要があります。3 つのイベントクラスを受け取ります。

- **デフォルトイベント**は、ボタン、リンク、ナビゲーション、およびコントロールのインタラクションのために生成される汎用的なPage Constructorイベントです。`autoEvents.enabled`を`true`に設定すると、これらのイベントが発行されます。
- **拡張イベント**は、コンポーザブルライブラリによって提供される登録済みイベントです。`autoEvents.extendedEvents`の存在は、`enabled`とは独立してこれらのイベントを有効にし、オプションでプレフィックスとカウンターを追加します。
- **カスタムイベント**は、コンシューマーが`analyticsEvents`を通じて提供するものです。自動イベントの設定はこれらを変更しません。

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

後方互換性のために、従来のブール値形式も引き続きサポートされています。`true`は`{enabled: true}`と同等であり、`false`は`{enabled: false}`と同等です。`autoEvents`が省略されている場合、デフォルトイベントと拡張イベントの両方が無効になります。`extendedEvents`オブジェクトは、`enabled`が`false`の場合でも、提供された拡張イベントを有効にします。

拡張イベントには`type: 'extended-event'`が必要です。プレフィックスは、大文字/小文字、区切り文字、または空白を変更せずに、設定されたとおりに連結されます。`counter`が設定されている場合、拡張イベントの`counters.include`を定義します。

```ts
// 提供されるイベント
{name: 'REGISTERED_CLICK', type: 'extended-event'}

// 上記の設定でsendEventsに渡されるイベント
{
  name: 'LIBRARY_REGISTERED_CLICK',
  type: 'extended-event',
  counters: {include: ['secondary']},
}
```

イベントは次の順序で送信されます。まず生成されたデフォルトイベント（有効な場合）、次に提供された拡張イベントとカスタムイベントが元の順序で送信されます。拡張イベントは、`extendedEvents`が設定されていない場合は省略されます。インタラクション固有の追加コンテキストは、発行されるすべてのイベントに最後にマージされます。

イベントオブジェクトには、必須フィールドは`name`のみです。また、複雑なロジックの管理に役立つ事前定義されたフィールドもあります。たとえば、`counter.include`は、プロジェクトで複数の分析システムが使用されている場合に、特定のカウンターでイベントを送信するのに役立ちます。

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
  [key: string]?: string; // 'string' タイプのみサポートされています
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

#### contextパラメータ

イベントが発生したプロジェクト内の場所を定義するために`context`値を渡します。

以下のセレクターを使用するか、プロジェクトのニーズに合ったロジックを作成してください。

```ts
// analyticsHandler.ts
if (isCounterAllowed(counterName, counters)) {
  analyticsCounter.reachGoal(counterName, name, parameters);
}
```

#### 予約済みイベントタイプ

自動設定されたイベントをマークするために、いくつかの事前定義されたイベントタイプが使用されます。たとえば、これらのタイプを使用してデフォルトイベントをフィルタリングできます。

```ts
enum PredefinedEventTypes {
  Default = 'default-event', // すべてのボタンクリックで発生するデフォルトイベント
  Extended = 'extended-event', // コンポーザブルライブラリによって提供されるイベント
  Play = 'play', // React Player イベント
  Stop = 'stop', // React Player イベント
}
```

## 開発

```bash
npm ci
npm run dev
```

#### Viteに関する注意

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

Viteの場合、`vite-plugin-dynamic-import`プラグインをインストールし、動的インポートが機能するように設定を構成する必要があります。

## リリースフロー

通常、2種類のコミットを使用します。

1. `fix`: コードベースのバグを修正するコミット（セマンティックバージョニングのPATCHに対応します）。
2. `feat`: コードベースに新機能をもたらすコミット（セマンティックバージョニングのMINORに対応します）。
3. `BREAKING CHANGE`: フッターに`BREAKING CHANGE:`を持つコミット、またはタイプ/スコープの後に`!`を追加するコミットは、破壊的なAPI変更を導入します（セマンティックバージョニングのMAJORに対応します）。`BREAKING CHANGE`は、任意のタイプのコミットの一部である可能性があります。
4. リリースパッケージのバージョンを手動で設定するには、コミットメッセージに`Release-As: <version>`を追加する必要があります。例：

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

すべての情報は[こちら](https://www.conventionalcommits.org/en/v1.0.0/)で確認できます。

プルリクエストがコードオーナーから承認され、すべてのチェックに合格したら、次の手順を実行してください。

1. 他のコントリビューターからの変更を含むロボットによるリリースプルリクエスト（例：`chore(main): release 0.0.0`）があるかどうかを確認してください。存在する場合、なぜマージされていないのかを確認してください。コントリビューターが共有バージョンをリリースすることに同意する場合は、次のステップに進んでください。同意しない場合は、彼にバージョンをリリースするように依頼し、次のステップに進んでください。
2. PRをSquash and mergeしてください（Github-Actionsで新しいバージョンをリリースすることが重要です）。
3. ロボットがパッケージの新しいバージョンとCHANGELOG.mdの変更に関する情報を含むPRを作成するまで待ちます。このプロセスは[Actionsタブ](https://github.com/gravity-ui/page-constructor/actions)で確認できます。
4. CHANGELOG.mdで変更を確認し、ロボットのPRを承認してください。
5. PRをSquash and mergeしてください。リリースプロセスは[Actionsタブ](https://github.com/gravity-ui/page-constructor/actions)で確認できます。

### アルファバージョンのリリース

ブランチからパッケージのアルファバージョンをリリースしたい場合は、手動で行うことができます。

1. Actionsタブに移動します。
2. 左側のページで「Release alpha version」ワークフローを選択します。
3. 右側にある「Run workflow」ボタンが表示されます。ここでブランチを選択できます。
4. 手動バージョンのフィールドも表示されます。ブランチで初めてアルファをリリースする場合は、ここに何も設定しないでください。最初のリリース後、ブランチがすぐに期限切れになる可能性があるため、`package.json`を変更しないように、バージョンを手動で設定する必要があります。そうしないとエラーが発生するため、手動バージョンにはプレフィックス`alpha`を使用してください。
5. 「Run workflow」をプッシュし、アクションが完了するまで待ちます。必要なだけバージョンをリリースできますが、乱用せず、本当に必要な場合にのみバージョンをリリースしてください。それ以外の場合は、[npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack)を使用してください。

### ベータ版メジャーバージョンのリリース

新しいメジャーバージョンをリリースする場合、安定版の前にベータバージョンが必要になる可能性が高いです。その場合は、次の手順を実行してください。

1. `beta`ブランチを作成または更新します。
2. そこに変更を追加します。
3. 新しいベータバージョンの準備ができたら、空のコミットで手動でリリースします（または、最後のコミットに次のフッターを含むコミットメッセージを追加できます）。

```bash
git commit -m 'fix: last commit
```

```
Release-As: 3.0.0-beta.0' --allow-empty
```

4. Release please ロボットが `beta` ブランチに更新された CHANGELOG.md を含む新しい PR を作成し、パッケージのバージョンを更新します。
5. 何度でも繰り返すことができます。最新のメジャーバージョンをベータ版タグなしでリリースする準備ができたら、`beta` ブランチから `main` ブランチに PR を作成する必要があります。パッケージのバージョンにベータ版タグが付いていることは正常です。ロボットはそれを認識し、適切に変更します。`3.0.0-beta.0` は `3.0.0` になります。

### 以前のメジャーバージョンのリリースフロー

メインにコミットした後、以前のメジャーバージョンに新しいバージョンをリリースしたい場合は、次の手順を実行してください。

1. 必要なブランチを更新します。以前のメジャーリリースブランチ名は次のとおりです。
   1. `version-1.x.x/fixes` - メジャーバージョン 1.x.x の場合
   2. `version-2.x.x` - メジャーバージョン 2.x.x の場合
2. 以前のメジャーリリースブランチから新しいブランチをチェックアウトします。
3. `main` ブランチからコミットをチェリーピックします。
4. PR を作成し、承認を得て、以前のメジャーリリースブランチにマージします。
5. PR をスワッシュしてマージします (Github-Actions で新しいバージョンをリリースすることが重要です)。
6. ロボットがパッケージの新しいバージョンと CHANGELOG.md の変更に関する情報を含む PR を作成するのを待ちます。プロセスは [Actions タブ](https://github.com/gravity-ui/page-constructor/actions) で確認できます。
7. CHANGELOG.md で変更を確認し、ロボットの PR を承認します。
8. PR をスワッシュしてマージします。リリースプロセスは [Actions タブ](https://github.com/gravity-ui/page-constructor/actions) で確認できます。

## Page constructor editor

エディターは、リアルタイムプレビューによるページコンテンツ管理のためのユーザーインターフェースを提供します。

使用方法:

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

このプロジェクトには、プロジェクトのアーキテクチャ、コンポーネント、および使用パターンに関する詳細情報を提供する Markdown ドキュメントファイルの包括的な **Memory Bank** が含まれています。Memory Bank は、AI エージェントと連携する場合に特に役立ちます。構造化された情報が含まれています。

- **プロジェクト概要**: コア要件、目標、およびコンテキスト
- **コンポーネント ドキュメント**: すべてのコンポーネントの詳細な使用ガイド
- **システム アーキテクチャ**: 技術的なパターンと設計上の決定
- **開発の進捗状況**: 現在のステータスと実装の詳細

### Memory Bank の使用方法

Memory Bank は `memory-bank/` ディレクトリにあり、他のドキュメントと同様に読み取ることができる通常の Markdown ファイルで構成されています。

- `projectbrief.md` - コア要件を含む基礎ドキュメント
- `productContext.md` - プロジェクトの目的とユーザーエクスペリエンスの目標
- `systemPatterns.md` - アーキテクチャと技術的な決定
- `techContext.md` - テクノロジー、セットアップ、および制約
- `activeContext.md` - 現在の作業の焦点と最近の変更
- `progress.md` - 実装ステータスと既知の問題
- `usage/` - コンポーネント固有の使用ドキュメント
- `storybookComponents.md` - Storybook の統合の詳細

## Tests

包括的なドキュメントは、提供されている [リンク](./test-utils/docs/README.md) で確認できます。

## License

MIT ライセンスの下で配布されています。詳細については [LICENSE](LICENSE) を参照してください。

## For AI agents

定義済みの順序付け可能なブロックのセットを使用して、宣言型の JSON/YAML 設定から Web ページ全体またはページセクションをレンダリングするためのライブラリです。マーケティング/ランディングページを構築するために使用してください。一般的なアプリケーション UI には使用しないでください。

### 使用する場合

- データ駆動型のページ: `PageConstructorProvider` でラップされた `PageConstructor` を使用して、型指定されたブロックの `content` 設定をレンダリングします。
- 事前に構築されたブロック (ヘッダー、メディア、カードなど) から組み立てられたマーケティング、ランディング、およびドキュメントページ。
- `@gravity-ui/page-constructor/server` ユーティリティ (`contentTransformer`、`fullTransform`) を介したサーバーサイド YFM 処理。
- レスポンシブグリッド (`Grid`/`Row`/`Col`) または `Navigation` コンポーネントのみをスタンドアロンで再利用する。

### 使用しない場合

- 一般的なアプリケーション UI (ボタン、フォーム、モーダル) - [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) を使用します。
- Markdown/YFM コンテンツの編集 - [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor) を使用します。
- アプリケーションナビゲーションシェル (サイドヘッダー) - [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation) を使用します。このパッケージの `Navigation` はページレベルのトップナビゲーションです。

### 一般的な注意点

- **`PageConstructor` は `PageConstructorProvider` でラップする必要があります。** 空のままレンダリングすると、コンテキスト (ロケール、テーマ、SSR、分析) が壊れます。
- **`content` プロパティは `content` で、`{blocks: [...]}` の形式です。** 各ブロックオブジェクトには、既知のブロックと一致する `type` およびそのデータフィールドが必要です。`data`/`config` プロパティはありません。
- **ブロックテキストの YFM はサーバー処理が必要です。** Markdown ライクなフィールドは、`@gravity-ui/page-constructor/server` の `contentTransformer`/`fullTransform` を介してコンテンツを処理しない限り、プレーンテキストとしてレンダリングされます。`@diplodoc/transform` は必須のピア依存関係です。
- **SCSS スタイルをインポートします。** `@gravity-ui/page-constructor/styles/styles.scss` (CSS ではなく SCSS) を追加します。カスタムブロックは同じファイルをインポートして、ミックスイン/変数を再利用します。
- **Vite には `vite-plugin-dynamic-import` が必要です。** これがないと、Vite での動的なブロックインポートは失敗します。

## Documentation for AI agents

インストールされているバージョンのエージェント読み取り可能なドキュメントは、`node_modules/@gravity-ui/page-constructor/build/docs/INDEX.md` にあります。