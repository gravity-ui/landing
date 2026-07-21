# @gravity-ui/date-components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/date-components)](https://www.npmjs.com/package/@gravity-ui/date-components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/date-components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/date-components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/date-components/) [![coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fplaywright-reports%2Fdate-components%2Fpulls%2Fmain%2Fcoverage%2Fcoverage-summary.json&query=%24.total.lines.pct&suffix=%25&label=Coverage)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/coverage/lcov-report/index.html) [![tests-report](https://img.shields.io/badge/Tests-report-ff4685)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/html/index.html)

## インストール

```shell
npm install react react-dom @gravity-ui/uikit @gravity-ui/date-components @gravity-ui/date-utils
```

## 使用方法

```jsx
import {createRoot} from 'react-dom/client';
import {DatePicker} from '@gravity-ui/date-components';
import {ThemeProvider} from '@gravity-ui/uikit';

import '@gravity-ui/uikit/styles/styles.css';

function App() {
  return (
    <ThemeProvider>
      <h1>DatePicker</h1>
      <form>
        <label htmlFor="date-picker">Date: </label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </ThemeProvider>
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
    <ThemeProvider lang="ru">
      <h1>DatePicker</h1>
      <form>
        <label htmlFor="date-picker">Дата: </label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </ThemeProvider>
  );
}
```

アプリが言語切り替えをサポートしている場合、アプリが最初に読み込まれるときにサポートされているすべてのロケールをプリロードするか、言語を切り替える前にロケールをロードしてください。

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

  return <ThemeProvider lang={lang}>...</ThemeProvider>;
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

## 開発

ストーリーブックで開発サーバーを起動するには、以下を実行します。

```shell
npm start
```

## ライセンス

MIT License に基づいて配布されています。詳細については [LICENSE](LICENSE) を参照してください。

## AI エージェント向け

React の日付と時刻のコントロール。Gravity UI アプリケーション向けに、`@gravity-ui/date-utils` をベースにした日付/時刻ピッカー、カレンダー、絶対/相対範囲セレクターを提供します。

### 使用する場面

- 単一の日付または日時入力: `DatePicker`, `DateField`。
- 月/日の選択用カレンダー: `Calendar`, `CalendarView`。
- 日付範囲: `RangeDatePicker`, `RangeCalendar`, `RangeDateField`。
- 相対および混合絶対/相対範囲（例：「過去7日間」）: `RelativeDatePicker`, `RelativeRangeDatePicker`, `RelativeDateField`。

### 使用しない場面

- プレーンテキストまたは数値入力、ボタン、その他の汎用コントロール — [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) を使用してください。
- UI なしの低レベルな日付計算、解析、フォーマット、タイムゾーン処理 — 直接 [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils) を使用してください。

### よくある落とし穴

- **値は JS `Date` ではなく `DateTime` オブジェクトです。** コンポーネントは [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils) の `dateTime()` で動作します。ネイティブの `Date` や ISO 文字列ではなく、`DateTime` を渡して読み込んでください。
- **uikit のセットアップが必要です。** `ThemeProvider` 内でレンダリングし、`@gravity-ui/uikit/styles/styles.css` をインポートしてください。`@gravity-ui/uikit` および `@gravity-ui/date-utils` は必須の peer 依存関係です。
- **ロケールはロードされ、単に設定されるだけではありません。** `ThemeProvider` の `lang` で言語を設定しますが、`@gravity-ui/date-utils` から `settings.loadLocale('ru')` を使用してロケールデータを先にロードしないと、日付はデフォルトのロケールでレンダリングされます。
- **コンポーネント固有の翻訳には `addLanguageKeysets` を使用します。** `en`/`ru` 以外の言語については、ここでエクスポートされる `Keysets`/`PartialKeysets` 型を使用して、`@gravity-ui/uikit/i18n` から `addLanguageKeysets` を介してキーセットを登録してください。

## AI エージェント向けドキュメント

インストールされているバージョンのエージェント読み取り可能なドキュメントは、`node_modules/@gravity-ui/date-components/dist/docs/INDEX.md` にあります。