# @gravity-ui/date-components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/date-components)](https://www.npmjs.com/package/@gravity-ui/date-components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/date-components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/date-components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/date-components/) [![coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fplaywright-reports%2Fdate-components%2Fpulls%2Fmain%2Fcoverage%2Fcoverage-summary.json&query=%24.total.lines.pct&suffix=%25&label=Coverage)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/coverage/lcov-report/index.html) [![tests-report](https://img.shields.io/badge/Tests-report-ff4685)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/html/index.html)

## Install

```shell
npm install react react-dom @gravity-ui/uikit @gravity-ui/date-components @gravity-ui/date-utils
```

## Usage

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

### Localization

```jsx
import {settings} from '@gravity-ui/date-utils';

// Load date locales that will be used in an application.
await settings.loadLocale('ru');

function App() {
  return (
    // Set the language to use with components.
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

If the app supports language switching, preload all supported locales when the app first loads, or load the locales before switching the language:

```jsx
// Preload locales
await Promise.all([settings.loadLocale('ru'), settings.loadLocale('nl')]);

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// or load locales on demand.

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

The components have translations into English and Russian. To add translations into other languages, use `addLanguageKeysets` from `@gravity-ui/uikit`:

```ts
import {addLanguageKeysets} from '@gravity-ui/uikit/i18n';
import type {Keysets, PartialKeysets} from '@gravity-ui/date-components';

// Use the Keyset type to specify translations for all available components
addLanguageKeysets<Keysets>(lang, {...});

// or use the PartialKeysets type to specify only the ones you need
addLanguageKeysets<PartialKeysets>(lang, {...});

// To specify translations for some components
addLanguageKeysets<Pick<Keysets, 'g-date-calendar' | 'g-date-date-field' | 'g-date-date-picker'>>(lang, {...});
```

## Development

To start the development server with storybook run the following:

```shell
npm start
```

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

## For AI agents

React date and time controls for Gravity UI apps — date/time pickers, calendars, and absolute/relative range selectors built on `@gravity-ui/date-utils`.

### When to use

- A single date or date-time input: `DatePicker`, `DateField`.
- Calendars for month/day selection: `Calendar`, `CalendarView`.
- Date ranges: `RangeDatePicker`, `RangeCalendar`, `RangeDateField`.
- Relative and mixed absolute/relative ranges (e.g. "last 7 days"): `RelativeDatePicker`, `RelativeRangeDatePicker`, `RelativeDateField`.

### When not to use

- Plain text or number inputs, buttons, or other generic controls — use [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Low-level date math, parsing, formatting, or timezone handling without UI — use [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils) directly.

### Common pitfalls

- **Values are `DateTime` objects, not JS `Date`.** Components work with `dateTime()` from [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils); pass and read `DateTime`, not native `Date` or ISO strings.
- **Requires uikit setup.** Render inside `ThemeProvider` and import `@gravity-ui/uikit/styles/styles.css`; `@gravity-ui/uikit` and `@gravity-ui/date-utils` are required peer dependencies.
- **Locale is loaded, not just set.** Set language via `ThemeProvider` `lang`, but load the locale data first with `settings.loadLocale('ru')` from `@gravity-ui/date-utils`, or dates render in the default locale.
- **Component-specific translations use `addLanguageKeysets`.** For languages beyond `en`/`ru`, register keysets via `addLanguageKeysets` from `@gravity-ui/uikit/i18n` using the `Keysets`/`PartialKeysets` types exported here.
