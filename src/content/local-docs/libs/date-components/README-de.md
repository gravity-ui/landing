# @gravity-ui/date-components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/date-components)](https://www.npmjs.com/package/@gravity-ui/date-components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/date-components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/date-components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/date-components/)

## Installation

```shell
npm install react react-dom @gravity-ui/uikit @gravity-ui/date-components @gravity-ui/date-utils
```

## Verwendung

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
        <label htmlFor="date-picker">Datum: </label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </ThemeProvider>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

### Lokalisierung

```jsx
import {settings} from '@gravity-ui/date-utils';

// Lade die Datum-Locales, die in der Anwendung verwendet werden sollen.
await settings.loadLocale('ru');

function App() {
  return (
    // Setze die Sprache, die mit den Komponenten verwendet werden soll.
    <ThemeProvider lang="ru">
      <h1>DatePicker</h1>
      <form>
        <label htmlFor="date-picker">Datum: </label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </ThemeProvider>
  );
}
```

Wenn die App Sprachwechsel unterstützt, lade alle unterstützten Locales vor, wenn die App zum ersten Mal geladen wird, oder lade die Locales vor dem Sprachwechsel:

```jsx
// Locales vorladen
await Promise.all([settings.loadLocale('ru'), settings.loadLocale('nl')]);

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// oder Locales bei Bedarf laden.

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

Die Komponenten verfügen über Übersetzungen ins Englische und Russische. Um Übersetzungen in andere Sprachen hinzuzufügen, verwende `addLanguageKeysets` aus `@gravity-ui/uikit`:

```ts
import {addLanguageKeysets} from '@gravity-ui/uikit/i18n';
import type {Keysets, PartialKeysets} from '@gravity-ui/date-components';

// Verwende den Keyset-Typ, um Übersetzungen für alle verfügbaren Komponenten anzugeben
addLanguageKeysets<Keysets>(lang, {...});

// oder verwende den PartialKeysets-Typ, um nur die benötigten anzugeben
addLanguageKeysets<PartialKeysets>(lang, {...});

// Um Übersetzungen für einige Komponenten anzugeben
addLanguageKeysets<Pick<Keysets, 'g-date-calendar' | 'g-date-date-field' | 'g-date-date-picker'>>(lang, {...});
```

## Entwicklung

Um den Entwicklungsserver mit Storybook zu starten, führe Folgendes aus:

```shell
npm start
```