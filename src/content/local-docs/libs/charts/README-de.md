# Gravity UI Charts · [![npm package](https://img.shields.io/npm/v/@gravity-ui/charts)](https://www.npmjs.com/package/@gravity-ui/charts) [![License](https://img.shields.io/github/license/gravity-ui/charts)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/charts/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/charts/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/charts/)

React-Charting-Bibliothek mit über 10 Diagrammtypen: Fläche, Balken, Linie, Kreis, Streu, Baumkarte und mehr.

## Installation

```shell
npm install @gravity-ui/uikit @gravity-ui/charts
```

`@gravity-ui/uikit` ist eine erforderliche Peer-Abhängigkeit – sie stellt das Theming und die Stile bereit, auf denen die Diagramme basieren.

## Verwendung

Importieren Sie die `@gravity-ui/uikit`-Stile einmal in Ihrem Einstiegspunkt, umschließen Sie Ihre App mit `ThemeProvider` und rendern Sie ein `Chart` innerhalb eines Containers mit expliziter Höhe:

```tsx
import {ThemeProvider} from '@gravity-ui/uikit';
import {Chart} from '@gravity-ui/charts';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

const data = {
  series: {
    data: [
      {
        type: 'line',
        name: 'Temperature',
        data: [
          {x: 0, y: 10},
          {x: 1, y: 25},
          {x: 2, y: 18},
          {x: 3, y: 30},
        ],
      },
    ],
  },
};

export default function App() {
  return (
    <ThemeProvider theme="light">
      <div style={{height: 300}}>
        <Chart data={data} />
      </div>
    </ThemeProvider>
  );
}
```

`Chart` passt sich der Größe seines übergeordneten Elements an, daher muss das umschließende Element eine Höhe haben.

## Dokumentation

- [Übersicht](https://gravity-ui.github.io/charts/pages/overview.html)
- [Erste Schritte](https://gravity-ui.github.io/charts/pages/get-started.html)
- [Entwicklung](https://gravity-ui.github.io/charts/pages/development.html)
- [API](https://gravity-ui.github.io/charts/pages/api/overview.html)
- [Anleitungen](https://gravity-ui.github.io/charts/pages/guides/tooltip.html)

## Lizenz

Verteilt unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE).

## Für KI-Agenten

Eine deklarative React-Charting-Bibliothek für Gravity UI-Apps – rendert Linien-, Flächen-, Balken-, Kreis-, Streu-, Baumkarten- und andere Diagramme aus einer einzigen `data`-Konfiguration, die thematisch auf den Rest der App abgestimmt ist.

### Wann verwenden

- Standard-Geschäftsdiagramme: `line`, `area`, `bar-x`/`bar-y`, `pie`, `scatter`, `treemap`, `waterfall`, `sankey`, `radar`, `heatmap`, `funnel`, `x-range`.
- Visualisierungen, die dem Gravity UI-Theming (hell/dunkel) folgen und Tokens mit einer `@gravity-ui/uikit`-App teilen müssen.
- Rendern eines Diagramms aus deklarativen Daten anstatt imperativer Zeichenoperationen.

### Wann nicht verwenden

- Projekte, die noch `@gravity-ui/chartkit` verwenden – dies ist der ältere Adapter-basierte Wrapper (YAGR/Highcharts/D3); dieses Paket ist der moderne eigenständige Renderer und kein direkter Ersatz.
- Reine Tabellendaten – verwenden Sie [`@gravity-ui/table`](https://github.com/gravity-ui/table).
- Nicht-React- oder reine Server-Rendering – `Chart` rendert React SVG und benötigt das DOM.

### Häufige Fallstricke

- **Die Komponente ist `Chart`, nicht `ChartKit`.** Importieren Sie `{Chart}` aus `@gravity-ui/charts`; `ChartKit` gehört zum separaten Legacy-Paket `@gravity-ui/chartkit`.
- **Die `data`-Prop ist `data`, strukturiert als `{series: {data: [...]}}`.** Jeder Eintrag in `series.data` ist eine Serie mit eigenem `type` und eigener `data`-Array – es gibt kein Array von Serien auf oberster Ebene.
- **Ohne einen dimensionierten Container wird nichts gerendert.** `Chart` füllt seinen übergeordneten Container, geben Sie dem Wrapper also eine explizite Höhe.
- **Erfordert uikit-Setup.** Umschließen Sie mit `ThemeProvider` und importieren Sie `@gravity-ui/uikit/styles/styles.css`; `@gravity-ui/uikit` ist eine erforderliche Peer-Abhängigkeit.

### Nützliche Dokumente

- [Erste Schritte](./docs/diplodoc/pages/get-started.md)
- [Theming](./docs/diplodoc/pages/guides/theming.md)
- [Tooltip](./docs/diplodoc/pages/guides/tooltip.md)
- [Legende](./docs/diplodoc/pages/guides/legend.md)
- [HTML-Inhalt](./docs/diplodoc/pages/guides/html.md)
- [Wertformatierung](./docs/diplodoc/pages/guides/value-formatting.md)
- [Datenbeschriftungen](./docs/diplodoc/pages/guides/data-labels.md)
- [Achsentypen](./docs/diplodoc/pages/guides/axis-types.md)

## Dokumentation für KI-Agenten

Agentenlesbare Dokumentation für die installierte Version befindet sich in `node_modules/@gravity-ui/charts/dist/docs/INDEX.md`.