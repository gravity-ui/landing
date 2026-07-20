# @gravity-ui/date-components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/date-components)](https://www.npmjs.com/package/@gravity-ui/date-components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/date-components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/date-components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/date-components/) [![coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fplaywright-reports%2Fdate-components%2Fpulls%2Fmain%2Fcoverage%2Fcoverage-summary.json&query=%24.total.lines.pct&suffix=%25&label=Coverage)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/coverage/lcov-report/index.html) [![tests-report](https://img.shields.io/badge/Tests-report-ff4685)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/html/index.html)

## 安装

```shell
npm install react react-dom @gravity-ui/uikit @gravity-ui/date-components @gravity-ui/date-utils
```

## 用法

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

### 本地化

```jsx
import {settings} from '@gravity-ui/date-utils';

// 加载应用程序将使用的日期区域设置。
await settings.loadLocale('ru');

function App() {
  return (
    // 设置组件使用的语言。
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

如果应用支持语言切换，请在应用首次加载时预加载所有支持的区域设置，或者在切换语言之前加载区域设置：

```jsx
// 预加载区域设置
await Promise.all([settings.loadLocale('ru'), settings.loadLocale('nl')]);

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// 或者按需加载。

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

组件提供英语和俄语的翻译。要添加其他语言的翻译，请使用 `@gravity-ui/uikit` 中的 `addLanguageKeysets`：

```ts
import {addLanguageKeysets} from '@gravity-ui/uikit/i18n';
import type {Keysets, PartialKeysets} from '@gravity-ui/date-components';

// 使用 Keyset 类型为所有可用组件指定翻译
addLanguageKeysets<Keysets>(lang, {...});

// 或者使用 PartialKeysets 类型仅指定您需要的翻译
addLanguageKeysets<PartialKeysets>(lang, {...});

// 为某些组件指定翻译
addLanguageKeysets<Pick<Keysets, 'g-date-calendar' | 'g-date-date-field' | 'g-date-date-picker'>>(lang, {...});
```

## 开发

要启动带有 storybook 的开发服务器，请运行以下命令：

```shell
npm start
```

## 许可证

根据 MIT 许可证分发。有关详细信息，请参阅 [LICENSE](LICENSE)。

## 致 AI 代理

用于 Gravity UI 应用的 React 日期和时间控件 — 基于 `@gravity-ui/date-utils` 构建的日期/时间选择器、日历以及绝对/相对范围选择器。

### 何时使用

- 单个日期或日期时间输入：`DatePicker`、`DateField`。
- 用于月份/日期选择的日历：`Calendar`、`CalendarView`。
- 日期范围：`RangeDatePicker`、`RangeCalendar`、`RangeDateField`。
- 相对和混合绝对/相对范围（例如，“过去 7 天”）：`RelativeDatePicker`、`RelativeRangeDatePicker`、`RelativeDateField`。

### 何时不要使用

- 普通文本或数字输入、按钮或其他通用控件 — 请使用 [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit)。
- 低级日期计算、解析、格式化或时区处理（无 UI） — 请直接使用 [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils)。

### 常见陷阱

- **值是 `DateTime` 对象，而不是 JS `Date`。** 组件使用 [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils) 中的 `dateTime()`；传递和读取 `DateTime`，而不是原生 `Date` 或 ISO 字符串。
- **需要 uikit 设置。** 在 `ThemeProvider` 中渲染并导入 `@gravity-ui/uikit/styles/styles.css`；`@gravity-ui/uikit` 和 `@gravity-ui/date-utils` 是必需的对等依赖项。
- **区域设置已加载，而不仅仅是设置。** 通过 `ThemeProvider` 的 `lang` 设置语言，但首先使用 `@gravity-ui/date-utils` 中的 `settings.loadLocale('ru')` 加载区域设置数据，否则日期将以默认区域设置渲染。
- **组件特定的翻译使用 `addLanguageKeysets`。** 对于 `en`/`ru` 以外的语言，请使用 `@gravity-ui/uikit/i18n` 中的 `addLanguageKeysets` 注册键集，并使用此处导出的 `Keysets`/`PartialKeysets` 类型。