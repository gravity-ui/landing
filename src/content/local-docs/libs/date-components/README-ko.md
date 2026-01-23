# @gravity-ui/date-components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/date-components)](https://www.npmjs.com/package/@gravity-ui/date-components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/date-components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/date-components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/date-components/) [![coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fplaywright-reports%2Fdate-components%2Fpulls%2Fmain%2Fcoverage%2Fcoverage-summary.json&query=%24.total.lines.pct&suffix=%25&label=Coverage)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/coverage/lcov-report/index.html) [![tests-report](https://img.shields.io/badge/Tests-report-ff4685)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/html/index.html)

## 설치

```shell
npm install react react-dom @gravity-ui/uikit @gravity-ui/date-components @gravity-ui/date-utils
```

## 사용법

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

### 현지화

```jsx
import {settings} from '@gravity-ui/date-utils';

// 애플리케이션에서 사용할 날짜 로케일을 로드합니다.
await settings.loadLocale('ru');

function App() {
  return (
    // 컴포넌트에서 사용할 언어를 설정합니다.
    <ThemeProvider lang="ru">
      <h1>DatePicker</h1>
      <form>
        <label htmlFor="date-picker">날짜: </label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </ThemeProvider>
  );
}
```

앱이 언어 전환을 지원하는 경우, 앱이 처음 로드될 때 지원되는 모든 로케일을 미리 로드하거나, 언어를 전환하기 전에 로케일을 로드하세요:

```jsx
// 로케일 미리 로드
await Promise.all([settings.loadLocale('ru'), settings.loadLocale('nl')]);

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// 또는 필요에 따라 로케일을 로드합니다.

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

컴포넌트에는 영어와 러시아어 번역이 포함되어 있습니다. 다른 언어로 번역을 추가하려면 `@gravity-ui/uikit`의 `addLanguageKeysets`를 사용하세요:

```ts
import {addLanguageKeysets} from '@gravity-ui/uikit/i18n';
import type {Keysets, PartialKeysets} from '@gravity-ui/date-components';

// 모든 사용 가능한 컴포넌트에 대한 번역을 지정하려면 Keyset 타입을 사용하세요.
addLanguageKeysets<Keysets>(lang, {...});

// 또는 필요한 것만 지정하려면 PartialKeysets 타입을 사용하세요.
addLanguageKeysets<PartialKeysets>(lang, {...});

// 일부 컴포넌트에 대한 번역을 지정하려면
addLanguageKeysets<Pick<Keysets, 'g-date-calendar' | 'g-date-date-field' | 'g-date-date-picker'>>(lang, {...});
```

## 개발

스토리북과 함께 개발 서버를 시작하려면 다음을 실행하세요:

```shell
npm start
```