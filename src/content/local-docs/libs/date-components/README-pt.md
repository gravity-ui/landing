# @gravity-ui/date-components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/date-components)](https://www.npmjs.com/package/@gravity-ui/date-components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/date-components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/date-components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/date-components/) [![coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fplaywright-reports%2Fdate-components%2Fpulls%2Fmain%2Fcoverage%2Fcoverage-summary.json&query=%24.total.lines.pct&suffix=%25&label=Coverage)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/coverage/lcov-report/index.html) [![tests-report](https://img.shields.io/badge/Tests-report-ff4685)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/html/index.html)

## Instalação

```shell
npm install react react-dom @gravity-ui/uikit @gravity-ui/date-components @gravity-ui/date-utils
```

## Uso

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
        <label htmlFor="date-picker">Data: </label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </ThemeProvider>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

### Localização

```jsx
import {settings} from '@gravity-ui/date-utils';

// Carrega os locais de data que serão usados na aplicação.
await settings.loadLocale('ru');

function App() {
  return (
    // Define o idioma a ser usado com os componentes.
    <ThemeProvider lang="ru">
      <h1>DatePicker</h1>
      <form>
        <label htmlFor="date-picker">Data: </label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </ThemeProvider>
  );
}
```

Se o aplicativo suportar troca de idioma, pré-carregue todos os locais suportados quando o aplicativo for carregado pela primeira vez, ou carregue os locais antes de trocar o idioma:

```jsx
// Pré-carrega os locais
await Promise.all([settings.loadLocale('ru'), settings.loadLocale('nl')]);

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// ou carrega os locais sob demanda.

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

Os componentes possuem traduções para inglês e russo. Para adicionar traduções em outros idiomas, use `addLanguageKeysets` de `@gravity-ui/uikit`:

```ts
import {addLanguageKeysets} from '@gravity-ui/uikit/i18n';
import type {Keysets, PartialKeysets} from '@gravity-ui/date-components';

// Use o tipo Keyset para especificar traduções para todos os componentes disponíveis
addLanguageKeysets<Keysets>(lang, {...});

// ou use o tipo PartialKeysets para especificar apenas os que você precisa
addLanguageKeysets<PartialKeysets>(lang, {...});

// Para especificar traduções para alguns componentes
addLanguageKeysets<Pick<Keysets, 'g-date-calendar' | 'g-date-date-field' | 'g-date-date-picker'>>(lang, {...});
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento com o storybook, execute o seguinte:

```shell
npm start
```