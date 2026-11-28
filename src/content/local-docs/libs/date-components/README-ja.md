# @gravity-ui/date-components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/date-components)](https://www.npmjs.com/package/@gravity-ui/date-components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/date-components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/date-components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/date-components/) [![coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fplaywright-reports%2Fdate-components%2Fpulls%2Fmain%2Fcoverage%2Fcoverage-summary.json&query=%24.total.lines.pct&suffix=%25&label=Coverage)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/coverage/lcov-report/index.html) [![tests-report](https://img.shields.io/badge/Tests-report-ff4685)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/html/index.html)

## インストール

```shell
npm install react react-dom @gravity-ui/uikit @gravity-ui/date-components @gravity-ui/date-utils
```

## 使用方法

```jsx
import {createRoot} from 'react-dom/client';
import {DatePicker} from '@gravity-ui/date-components';
import {Provider} from '@gravity-ui/uikit';

import '@gravity-ui/uikit/styles/styles.css';

function App() {
  return (
    <Provider>
      <h1>DatePicker</h1>
      <form>
        <label htmlFor="date-picker">Date: </label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </Provider>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

### ローカライゼーション

```jsx
import {settings} from '@gravity-ui/date-utils';

// アプリケーションで使用する日付ロケールをロードします。
await settings.loadLocale('ru');

function App() {
  return (
    // コンポーネントで使用する言語を設定します。
    <Provider lang="ru">
      <h1>DatePicker</h1>
      <form>
        <label htmlFor="date-picker">Дата: </label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </Provider>
  );
}
```

アプリが言語切り替えをサポートしている場合、アプリ初回ロード時にサポートされているすべてのロケールをプリロードするか、言語を切り替える前にロケールをロードしてください。

```jsx
// ロケールをプリロード
await Promise.all([settings.loadLocale('ru'), settings.loadLocale('nl')]);

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// またはオンデマンドでロードします。

function App() {
  const [lang, setLang] = React.useState('en');

  const handleLangChange = (newLang) => {
    settings.loadLocale(newLang).then(() => {
      setLang(newLang);
    });
  };

  return <Provider lang={lang}>...</Provider>;
}
```

コンポーネントには、英語とロシア語の翻訳が含まれています。他の言語への翻訳を追加するには、`@gravity-ui/uikit` の `addLanguageKeysets` を使用してください。

```ts
import {addLanguageKeysets} from '@gravity-ui/uikit/i18n';
import type {Keysets, PartialKeysets} from '@gravity-ui/date-components';

// Keyset 型を使用して、利用可能なすべてのコンポーネントの翻訳を指定します
addLanguageKeysets<Keysets>(lang, {...});

// または PartialKeysets 型を使用して、必要なものだけを指定します
addLanguageKeysets<PartialKeysets>(lang, {...});

// 一部のコンポーネントの翻訳を指定するには
addLanguageKeysets<Pick<Keysets, 'g-date-calendar' | 'g-date-date-field' | 'g-date-date-picker'>>(lang, {...});
```

## マイグレーション

- 4.x から 5.x へ (`@gravity-ui/uikit` v8): [docs/migration-4-to-5.md](docs/migration-4-to-5.md)

## 開発

ストーリーブックで開発サーバーを起動するには、以下を実行してください。

```shell
npm start
```

## ライセンス

MIT License に基づいて配布されています。詳細は [LICENSE](LICENSE) を参照してください。

## AIエージェント向け

Gravity UI アプリケーション向けの React による日付・時刻コントロール — `@gravity-ui/date-utils` を基盤とした日付/時刻ピッカー、カレンダー、絶対/相対範囲セレクター。

### 使用すべき場合

- 単一の日付または日時入力: `DatePicker`, `DateField`。
- 月/日の選択用カレンダー: `Calendar`, `CalendarView`。
- 日付範囲: `RangeDatePicker`, `RangeCalendar`, `RangeDateField`。
- 相対および混合絶対/相対範囲（例：「過去7日間」）: `RelativeDatePicker`, `RelativeRangeDatePicker`, `RelativeDateField`。

### 使用すべきでない場合

- 単純なテキストまたは数値入力、ボタン、その他の汎用コントロール — [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) を使用してください。
- UI を伴わない低レベルの日付計算、解析、フォーマット、タイムゾーン処理 — 直接 [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils) を使用してください。

### よくある落とし穴

- **値は JS `Date` ではなく `DateTime` オブジェクトです。** コンポーネントは [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils) の `dateTime()` で動作します。ネイティブの `Date` や ISO 文字列ではなく、`DateTime` を渡して読み取ってください。
- **uikit のセットアップが必要です。** `@gravity-ui/uikit` の `Provider` 内でレンダリングし、`@gravity-ui/uikit/styles/styles.css` をインポートしてください。`@gravity-ui/uikit` v8 および `@gravity-ui/date-utils` は必須の peerDependencies です。
- **ロケールはロードされるもので、設定されるだけではありません。** `Provider` の `lang` で言語を設定しますが、まず `@gravity-ui/date-utils` から `settings.loadLocale('ru')` でロケールデータをロードしないと、日付はデフォルトのロケールでレンダリングされます。
- **コンポーネント固有の翻訳には `addLanguageKeysets` を使用します。** `en`/`ru` 以外の言語については、ここでエクスポートされる `Keysets`/`PartialKeysets` 型を使用して、`@gravity-ui/uikit/i18n` から `addLanguageKeysets` を介してキーセットを登録してください。

## AIエージェント向けドキュメント

インストールされているバージョン向けの、エージェントが読み取り可能なドキュメントは `node_modules/@gravity-ui/date-components/dist/docs/INDEX.md` にあります。