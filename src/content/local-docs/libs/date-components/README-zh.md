# @gravity-ui/date-components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/date-components)](https://www.npmjs.com/package/@gravity-ui/date-components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/date-components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/date-components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/date-components/)

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
        <label forHtml="date-picker">Date:</label>
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
settings.loadLocale('ru');

function App() {
  return (
    // 设置组件使用的语言。
    <ThemeProvider lang="ru">
      <h1>DatePicker</h1>
      <form>
        <label forHtml="date-picker">日期:</label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </ThemeProvider>
  );
}
```

如果您的应用程序支持语言切换，请在应用程序首次加载时预加载所有支持的区域设置，或者在切换语言之前加载区域设置：

```jsx
// 预加载区域设置
settings.loadLocale('ru');
settings.loadLocale('nl');

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

这些组件提供英语和俄语的翻译。要添加其他语言的翻译，请使用 `@gravity-ui/uikit` 中的 `addLanguageKeysets`：

```ts
import {addLanguageKeysets} from '@gravity-ui/uikit/i18n';
import type {Keysets, PartialKeysets} from '@gravity-ui/date-components';

// 使用 Keyset 类型为所有可用组件指定翻译
addLanguageKeysets<Keysets>(lang, {...});

// 或者使用 PartialKeysets 类型仅指定您需要的翻译
addLanguageKeysets<PartialKeysets>(lang, {...});

// 指定某些组件的翻译
addLanguageKeysets<Pick<Keysets, 'g-date-calendar' | 'g-date-date-field' | 'g-date-date-picker'>>(lang, {...});
```

## 开发

要启动带有 storybook 的开发服务器，请运行以下命令：

```shell
npm start
```