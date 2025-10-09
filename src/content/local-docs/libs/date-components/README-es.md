# @gravity-ui/date-components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/date-components)](https://www.npmjs.com/package/@gravity-ui/date-components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/date-components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/date-components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/date-components/)

## Instalación

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
        <label forHtml="date-picker">Fecha:</label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </ThemeProvider>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

### Localización

```jsx
import {settings} from '@gravity-ui/date-utils';

// Carga los locales de fecha que se usarán en la aplicación.
settings.loadLocale('ru');

function App() {
  return (
    // Establece el idioma a usar con los componentes.
    <ThemeProvider lang="ru">
      <h1>DatePicker</h1>
      <form>
        <label forHtml="date-picker">Fecha:</label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </ThemeProvider>
  );
}
```

Si la aplicación admite el cambio de idioma, precarga todos los locales compatibles al cargar la aplicación por primera vez, o carga los locales antes de cambiar el idioma:

```jsx
// Precarga de locales
settings.loadLocale('ru');
settings.loadLocale('nl');

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// o carga de locales bajo demanda.

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

Los componentes tienen traducciones al inglés y al ruso. Para añadir traducciones a otros idiomas, utiliza `addLanguageKeysets` de `@gravity-ui/uikit`:

```ts
import {addLanguageKeysets} from '@gravity-ui/uikit/i18n';
import type {Keysets, PartialKeysets} from '@gravity-ui/date-components';

// Usa el tipo Keyset para especificar las traducciones de todos los componentes disponibles
addLanguageKeysets<Keysets>(lang, {...});

// o usa el tipo PartialKeysets para especificar solo los que necesitas
addLanguageKeysets<PartialKeysets>(lang, {...});

// Para especificar traducciones para algunos componentes
addLanguageKeysets<Pick<Keysets, 'g-date-calendar' | 'g-date-date-field' | 'g-date-date-picker'>>(lang, {...});
```

## Desarrollo

Para iniciar el servidor de desarrollo con storybook, ejecuta lo siguiente:

```shell
npm start
```