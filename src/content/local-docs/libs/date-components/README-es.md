# @gravity-ui/date-components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/date-components)](https://www.npmjs.com/package/@gravity-ui/date-components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/date-components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/date-components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/date-components/) [![coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fplaywright-reports%2Fdate-components%2Fpulls%2Fmain%2Fcoverage%2Fcoverage-summary.json&query=%24.total.lines.pct&suffix=%25&label=Coverage)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/coverage/lcov-report/index.html) [![tests-report](https://img.shields.io/badge/Tests-report-ff4685)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/html/index.html)

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
        <label htmlFor="date-picker">Fecha: </label>
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

// Carga las localizaciones de fecha que se usarán en la aplicación.
await settings.loadLocale('ru');

function App() {
  return (
    // Establece el idioma a usar con los componentes.
    <ThemeProvider lang="ru">
      <h1>DatePicker</h1>
      <form>
        <label htmlFor="date-picker">Fecha: </label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </ThemeProvider>
  );
}
```

Si la aplicación admite el cambio de idioma, precarga todas las localizaciones admitidas cuando la aplicación se carga por primera vez, o carga las localizaciones antes de cambiar el idioma:

```jsx
// Precarga de localizaciones
await Promise.all([settings.loadLocale('ru'), settings.loadLocale('nl')]);

const root = createRoot(document.getElementById('root'));
root.render(<App />);

// o carga las localizaciones bajo demanda.

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

## Licencia

Distribuido bajo la Licencia MIT. Consulta [LICENSE](LICENSE) para más detalles.

## Para agentes de IA

Controles de fecha y hora de React para aplicaciones Gravity UI — selectores de fecha/hora, calendarios y selectores de rangos absolutos/relativos construidos sobre `@gravity-ui/date-utils`.

### Cuándo usar

- Una entrada de fecha o fecha y hora única: `DatePicker`, `DateField`.
- Calendarios para la selección de mes/día: `Calendar`, `CalendarView`.
- Rangos de fechas: `RangeDatePicker`, `RangeCalendar`, `RangeDateField`.
- Rangos relativos y rangos mixtos absolutos/relativos (por ejemplo, "últimos 7 días"): `RelativeDatePicker`, `RelativeRangeDatePicker`, `RelativeDateField`.

### Cuándo no usar

- Entradas de texto plano o numéricas, botones u otros controles genéricos — usa [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Matemáticas de fechas de bajo nivel, análisis, formato o manejo de zonas horarias sin interfaz de usuario — usa [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils) directamente.

### Errores comunes

- **Los valores son objetos `DateTime`, no `Date` de JS.** Los componentes funcionan con `dateTime()` de [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils); pasa y lee `DateTime`, no `Date` nativo o cadenas ISO.
- **Requiere configuración de uikit.** Renderiza dentro de `ThemeProvider` e importa `@gravity-ui/uikit/styles/styles.css`; `@gravity-ui/uikit` y `@gravity-ui/date-utils` son dependencias peer requeridas.
- **La localización se carga, no solo se establece.** Establece el idioma a través del `lang` de `ThemeProvider`, pero primero carga los datos de localización con `settings.loadLocale('ru')` de `@gravity-ui/date-utils`, o las fechas se renderizarán en la localización predeterminada.
- **Las traducciones específicas de componentes usan `addLanguageKeysets`.** Para idiomas más allá de `en`/`ru`, registra los conjuntos de claves a través de `addLanguageKeysets` de `@gravity-ui/uikit/i18n` usando los tipos `Keysets`/`PartialKeysets` exportados aquí.

## Documentación para agentes de IA

La documentación legible por agentes para la versión instalada se encuentra en `node_modules/@gravity-ui/date-components/dist/docs/INDEX.md`.