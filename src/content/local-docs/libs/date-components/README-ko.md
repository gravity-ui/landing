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

앱에서 언어 전환을 지원하는 경우, 앱이 처음 로드될 때 지원되는 모든 로케일을 미리 로드하거나, 언어를 전환하기 전에 로케일을 로드하세요.

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

이 컴포넌트들은 영어와 러시아어로 번역되어 있습니다. 다른 언어로 번역을 추가하려면 `@gravity-ui/uikit`의 `addLanguageKeysets`를 사용하세요.

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

스토리북과 함께 개발 서버를 시작하려면 다음을 실행하세요.

```shell
npm start
```

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하세요.

## AI 에이전트용

Gravity UI 앱을 위한 React 날짜 및 시간 컨트롤 — `@gravity-ui/date-utils`를 기반으로 구축된 날짜/시간 선택기, 캘린더 및 절대/상대 범위 선택기입니다.

### 언제 사용해야 할까요?

- 단일 날짜 또는 날짜/시간 입력: `DatePicker`, `DateField`.
- 월/일 선택을 위한 캘린더: `Calendar`, `CalendarView`.
- 날짜 범위: `RangeDatePicker`, `RangeCalendar`, `RangeDateField`.
- 상대 및 혼합 절대/상대 범위 (예: "지난 7일"): `RelativeDatePicker`, `RelativeRangeDatePicker`, `RelativeDateField`.

### 언제 사용하지 않아야 할까요?

- 일반 텍스트 또는 숫자 입력, 버튼 또는 기타 일반적인 컨트롤 — [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit)을 사용하세요.
- UI 없이 낮은 수준의 날짜 계산, 파싱, 포맷팅 또는 시간대 처리 — [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils)를 직접 사용하세요.

### 일반적인 주의사항

- **값은 JS `Date`가 아닌 `DateTime` 객체입니다.** 컴포넌트는 [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils)의 `dateTime()`과 함께 작동합니다. 네이티브 `Date`나 ISO 문자열이 아닌 `DateTime`을 전달하고 읽으세요.
- **uikit 설정이 필요합니다.** `ThemeProvider` 내에서 렌더링하고 `@gravity-ui/uikit/styles/styles.css`를 가져오세요. `@gravity-ui/uikit` 및 `@gravity-ui/date-utils`는 필수 피어 종속성입니다.
- **로케일은 로드되어야 하며, 단순히 설정되는 것이 아닙니다.** `ThemeProvider`의 `lang`을 통해 언어를 설정하지만, `@gravity-ui/date-utils`에서 `settings.loadLocale('ru')`를 사용하여 먼저 로케일 데이터를 로드해야 합니다. 그렇지 않으면 날짜가 기본 로케일로 렌더링됩니다.
- **컴포넌트별 번역은 `addLanguageKeysets`를 사용합니다.** `en`/`ru` 외의 언어의 경우, 여기서 내보낸 `Keysets`/`PartialKeysets` 타입을 사용하여 `@gravity-ui/uikit/i18n`의 `addLanguageKeysets`를 통해 키셋을 등록하세요.

## AI 에이전트용 문서

설치된 버전에 대한 에이전트 읽기 가능 문서는 `node_modules/@gravity-ui/date-components/dist/docs/INDEX.md`에 있습니다.