# @gravity-ui/date-components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/date-components)](https://www.npmjs.com/package/@gravity-ui/date-components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/date-components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/date-components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/date-components/) [![coverage](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fplaywright-reports%2Fdate-components%2Fpulls%2Fmain%2Fcoverage%2Fcoverage-summary.json&query=%24.total.lines.pct&suffix=%25&label=Coverage)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/coverage/lcov-report/index.html) [![tests-report](https://img.shields.io/badge/Tests-report-ff4685)](https://storage.yandexcloud.net/playwright-reports/date-components/pulls/main/html/index.html)

## Instalar

```shell
npm install react react-dom @gravity-ui/uikit @gravity-ui/date-components @gravity-ui/date-utils
```

## Uso

```jsx
import {createRoot} from 'react-dom/client';
import {DatePicker} from '@gravity-ui/date-components';
import {Provider} from '@gravity-ui/uikit';

import '@gravity-ui/uikit/styles/styles.css';

function App() {
  return (
    <Provider>
      <h1>DatePicker</h1>
      <form>
        <label htmlFor="date-picker">Data: </label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </Provider>
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
    <Provider lang="ru">
      <h1>DatePicker</h1>
      <form>
        <label htmlFor="date-picker">Data: </label>
        <DatePicker id="date-picker" name="date" />
      </form>
    </Provider>
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

  return <Provider lang={lang}>...</Provider>;
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

## Migração

- Do 4.x para 5.x (`@gravity-ui/uikit` v8): [docs/migration-4-to-5.md](docs/migration-4-to-5.md)

## Desenvolvimento

Para iniciar o servidor de desenvolvimento com storybook, execute o seguinte:

```shell
npm start
```

## Licença

Distribuído sob a Licença MIT. Veja [LICENSE](LICENSE) para detalhes.

## Para agentes de IA

Controles de data e hora React para aplicativos Gravity UI — seletores de data/hora, calendários e seletores de intervalo absoluto/relativo construídos sobre `@gravity-ui/date-utils`.

### Quando usar

- Entrada de data única ou data/hora: `DatePicker`, `DateField`.
- Calendários para seleção de mês/dia: `Calendar`, `CalendarView`.
- Intervalos de datas: `RangeDatePicker`, `RangeCalendar`, `RangeDateField`.
- Intervalos relativos e mistos absolutos/relativos (por exemplo, "últimos 7 dias"): `RelativeDatePicker`, `RelativeRangeDatePicker`, `RelativeDateField`.

### Quando não usar

- Entradas de texto simples ou numéricas, botões ou outros controles genéricos — use [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Matemática de data de baixo nível, análise, formatação ou manipulação de fuso horário sem interface — use diretamente [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils).

### Armadilhas comuns

- **Valores são objetos `DateTime`, não `Date` do JS.** Os componentes funcionam com `dateTime()` de [`@gravity-ui/date-utils`](https://github.com/gravity-ui/date-utils); passe e leia `DateTime`, não `Date` nativo ou strings ISO.
- **Requer configuração do uikit.** Renderize dentro de `Provider` de `@gravity-ui/uikit` e importe `@gravity-ui/uikit/styles/styles.css`; `@gravity-ui/uikit` v8 e `@gravity-ui/date-utils` são dependências peer obrigatórias.
- **O local é carregado, não apenas definido.** Defina o idioma através do `lang` do `Provider`, mas carregue os dados do local primeiro com `settings.loadLocale('ru')` de `@gravity-ui/date-utils`, ou as datas serão renderizadas no local padrão.
- **Traduções específicas do componente usam `addLanguageKeysets`.** Para idiomas além de `en`/`ru`, registre os conjuntos de chaves via `addLanguageKeysets` de `@gravity-ui/uikit/i18n` usando os tipos `Keysets`/`PartialKeysets` exportados aqui.

## Documentação para agentes de IA

A documentação legível por agente para a versão instalada está localizada em `node_modules/@gravity-ui/date-components/dist/docs/INDEX.md`.