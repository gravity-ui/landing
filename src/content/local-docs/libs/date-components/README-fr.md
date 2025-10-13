# @gravity-ui/date-components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/date-components)](https://www.npmjs.com/package/@gravity-ui/date-components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/date-components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/date-components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/date-components/)

## Installation

```shell
npm install react react-dom @gravity-ui/uikit @gravity-ui/date-components @gravity-ui/date-utils
```

## Utilisation

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
        <label forHtml="date-picker">Date :</label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </ThemeProvider>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

### Localisation

```jsx
import {settings} from '@gravity-ui/date-utils';

// Chargez les locales de date qui seront utilisées dans l'application.
settings.loadLocale('ru');

function App() {
  return (
    // Définissez la langue à utiliser avec les composants.
    <ThemeProvider lang="ru">
      <h1>DatePicker</h1>
      <form>
        <label forHtml="date-picker">Date :</label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </ThemeProvider>
  );
}
```

Si l'application prend en charge le changement de langue, préchargez toutes les locales prises en charge au premier chargement de l'application, ou chargez les locales avant de changer de langue :

```jsx
// Préchargez les locales
settings.loadLocale('ru');
settings.loadLocale('nl');

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// ou chargez les locales à la demande.

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

Les composants ont des traductions en anglais et en russe. Pour ajouter des traductions dans d'autres langues, utilisez `addLanguageKeysets` de `@gravity-ui/uikit` :

```ts
import {addLanguageKeysets} from '@gravity-ui/uikit/i18n';
import type {Keysets, PartialKeysets} from '@gravity-ui/date-components';

// Utilisez le type Keyset pour spécifier les traductions de tous les composants disponibles
addLanguageKeysets<Keysets>(lang, {...});

// ou utilisez le type PartialKeysets pour spécifier uniquement ceux dont vous avez besoin
addLanguageKeysets<PartialKeysets>(lang, {...});

// Pour spécifier les traductions de certains composants
addLanguageKeysets<Pick<Keysets, 'g-date-calendar' | 'g-date-date-field' | 'g-date-date-picker'>>(lang, {...});
```

## Développement

Pour démarrer le serveur de développement avec storybook, exécutez la commande suivante :

```shell
npm start
```