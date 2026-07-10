# @gravity-ui/date-components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/date-components)](https://www.npmjs.com/package/@gravity-ui/date-components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/date-components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/date-components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/date-components/) [![coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fplaywright-reports%2Fdate-components%2Fpulls%2Fmain%2Fcoverage%2Fcoverage-summary.json&query=%24.total.lines.pct&suffix=%25&label=Coverage)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/coverage/lcov-report/index.html) [![tests-report](https://img.shields.io/badge/Tests-report-ff4685)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/html/index.html)

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
        <label htmlFor="date-picker">Date : </label>
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
await settings.loadLocale('ru');

function App() {
  return (
    // Définissez la langue à utiliser avec les composants.
    <ThemeProvider lang="ru">
      <h1>DatePicker</h1>
      <form>
        <label htmlFor="date-picker">Date : </label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </ThemeProvider>
  );
}
```

Si l'application prend en charge le changement de langue, préchargez toutes les locales prises en charge au premier chargement de l'application, ou chargez les locales avant de changer de langue :

```jsx
// Préchargez les locales
await Promise.all([settings.loadLocale('ru'), settings.loadLocale('nl')]);

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

Les composants ont des traductions en anglais et en russe. Pour ajouter des traductions dans d'autres langues, utilisez `addLanguageKeysets` depuis `@gravity-ui/uikit` :

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

## Licence

Distribué sous la licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.

## Pour les agents IA

Composants de date et d'heure React pour les applications Gravity UI — sélecteurs de date/heure, calendriers et sélecteurs de plages absolues/relatives construits sur `@gravity-ui/date-utils`.

### Quand les utiliser

- Une seule saisie de date ou de date et heure : `DatePicker`, `DateField`.
- Calendriers pour la sélection du mois/jour : `Calendar`, `CalendarView`.
- Plages de dates : `RangeDatePicker`, `RangeCalendar`, `RangeDateField`.
- Plages relatives et mixtes absolues/relatives (par exemple, "les 7 derniers jours") : `RelativeDatePicker`, `RelativeRangeDatePicker`, `RelativeDateField`.

### Quand ne pas les utiliser

- Saisies de texte brut ou numérique, boutons ou autres contrôles génériques — utilisez [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Calculs de date de bas niveau, analyse, formatage ou gestion des fuseaux horaires sans interface utilisateur — utilisez directement [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils).

### Pièges courants

- **Les valeurs sont des objets `DateTime`, pas des `Date` JS.** Les composants fonctionnent avec `dateTime()` de [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils) ; passez et lisez `DateTime`, pas des `Date` natives ou des chaînes ISO.
- **Configuration uikit requise.** Rendez à l'intérieur de `ThemeProvider` et importez `@gravity-ui/uikit/styles/styles.css` ; `@gravity-ui/uikit` et `@gravity-ui/date-utils` sont des dépendances pairées requises.
- **La locale est chargée, pas seulement définie.** Définissez la langue via le `lang` de `ThemeProvider`, mais chargez d'abord les données de locale avec `settings.loadLocale('ru')` depuis `@gravity-ui/date-utils`, sinon les dates seront rendues dans la locale par défaut.
- **Les traductions spécifiques aux composants utilisent `addLanguageKeysets`.** Pour les langues autres que `en`/`ru`, enregistrez les jeux de clés via `addLanguageKeysets` depuis `@gravity-ui/uikit/i18n` en utilisant les types `Keysets`/`PartialKeysets` exportés ici.