# @gravity-ui/date-components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/date-components)](https://www.npmjs.com/package/@gravity-ui/date-components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/date-components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/date-components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/date-components/) [![coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fplaywright-reports%2Fdate-components%2Fpulls%2Fmain%2Fcoverage%2Fcoverage-summary.json&query=%24.total.lines.pct&suffix=%25&label=Coverage)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/coverage/lcov-report/index.html) [![tests-report](https://img.shields.io/badge/Tests-report-ff4685)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/html/index.html)

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

// Laden Sie die Datums-Locales, die in der Anwendung verwendet werden sollen.
await settings.loadLocale('ru');

function App() {
  return (
    // Setzen Sie die Sprache, die mit den Komponenten verwendet werden soll.
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

Wenn die App Sprachwechsel unterstützt, laden Sie alle unterstützten Locales vorab, wenn die App zum ersten Mal geladen wird, oder laden Sie die Locales vor dem Sprachwechsel:

```jsx
// Locales vorab laden
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

Die Komponenten verfügen über Übersetzungen ins Englische und Russische. Um Übersetzungen in andere Sprachen hinzuzufügen, verwenden Sie `addLanguageKeysets` aus `@gravity-ui/uikit`:

```ts
import {addLanguageKeysets} from '@gravity-ui/uikit/i18n';
import type {Keysets, PartialKeysets} from '@gravity-ui/date-components';

// Verwenden Sie den Keyset-Typ, um Übersetzungen für alle verfügbaren Komponenten anzugeben
addLanguageKeysets<Keysets>(lang, {...});

// oder verwenden Sie den PartialKeysets-Typ, um nur die benötigten anzugeben
addLanguageKeysets<PartialKeysets>(lang, {...});

// Um Übersetzungen für einige Komponenten anzugeben
addLanguageKeysets<Pick<Keysets, 'g-date-calendar' | 'g-date-date-field' | 'g-date-date-picker'>>(lang, {...});
```

## Entwicklung

Um den Entwicklungsserver mit Storybook zu starten, führen Sie Folgendes aus:

```shell
npm start
```

## Lizenz

Verteilt unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE).

## Für KI-Agenten

React-Datums- und Zeitsteuerungen für Gravity UI-Apps – Datums-/Zeitauswähler, Kalender und absolute/relative Bereichsauswähler, die auf `@gravity-ui/date-utils` basieren.

### Wann zu verwenden

- Eingabe für ein einzelnes Datum oder Datum/Uhrzeit: `DatePicker`, `DateField`.
- Kalender zur Auswahl von Monat/Tag: `Calendar`, `CalendarView`.
- Datumsbereiche: `RangeDatePicker`, `RangeCalendar`, `RangeDateField`.
- Relative und gemischte absolute/relative Bereiche (z. B. „letzte 7 Tage“): `RelativeDatePicker`, `RelativeRangeDatePicker`, `RelativeDateField`.

### Wann nicht zu verwenden

- Reine Text- oder Zahleneingaben, Schaltflächen oder andere generische Steuerelemente – verwenden Sie [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Low-Level-Datumsberechnungen, Parsen, Formatieren oder Zeitzonenbehandlung ohne Benutzeroberfläche – verwenden Sie direkt [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils).

### Häufige Fallstricke

- **Werte sind `DateTime`-Objekte, nicht JS `Date`.** Komponenten arbeiten mit `dateTime()` aus [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils); übergeben und lesen Sie `DateTime`, nicht native `Date`- oder ISO-Strings.
- **Benötigt uikit-Setup.** Rendern Sie innerhalb von `ThemeProvider` und importieren Sie `@gravity-ui/uikit/styles/styles.css`; `@gravity-ui/uikit` und `@gravity-ui/date-utils` sind erforderliche Peer-Abhängigkeiten.
- **Locale wird geladen, nicht nur gesetzt.** Setzen Sie die Sprache über `ThemeProvider` `lang`, aber laden Sie zuerst die Locale-Daten mit `settings.loadLocale('ru')` aus `@gravity-ui/date-utils`, oder Daten werden in der Standard-Locale gerendert.
- **Komponentenspezifische Übersetzungen verwenden `addLanguageKeysets`.** Für Sprachen über `en`/`ru` hinaus registrieren Sie Keysets über `addLanguageKeysets` aus `@gravity-ui/uikit/i18n` unter Verwendung der hier exportierten Typen `Keysets`/`PartialKeysets`.