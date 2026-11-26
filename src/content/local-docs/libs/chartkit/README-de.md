# Gravity UI ChartKit · [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![License](https://img.shields.io/github/license/gravity-ui/ChartKit)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/ChartKit/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

Plugin-basierte React-Komponente, die Diagramme aus mehreren Charting-Bibliotheken, wie Gravity Charts und Yagr, über eine einzige ChartKit-API rendert, mit mobilfreundlichen Tooltips und Unterstützung für benutzerdefinierte Plugins. Sie registrieren ein oder mehrere Plugins und rendern Diagramme über `<ChartKit type="..." data={...} />` — ChartKit leitet automatisch an den richtigen Renderer weiter.

Jeder Plugin-Renderer wird "lazy loaded", sodass der zugrunde liegende Bibliotheks-Code nur dann heruntergeladen wird, wenn ChartKit tatsächlich in der Benutzeroberfläche gerendert wird. ChartKit kümmert sich außerdem standardmäßig um die mobile Darstellung von Tooltips. Sie können die integrierten Plugins verwenden oder eigene implementieren.

**Wann verwenden:**

- Sie benötigen moderne deklarative Diagramme (`gravity-charts`) oder Zeitreihen-/Monitoring-Diagramme (`yagr`)
- Sie benötigen mehrere Diagrammtypen unter einer einzigen konsistenten API
- Sie möchten Diagramme, die standardmäßig dem gleichen hellen/dunklen Thema wie der Rest Ihrer Benutzeroberfläche folgen

**Wann nicht verwenden:**

- Sie benötigen nur eine spezifische Charting-Bibliothek — bevorzugen Sie die direkte Verwendung von [@gravity-ui/charts](https://github.com/gravity-ui/charts)

## Inhaltsverzeichnis

- [Erste Schritte](#getting-started)
- [Aktualisieren von Charting-Paketen](#updating-charting-packages)
- [Entwicklung](#development)

## Erste Schritte

### Anforderungen

- React 18 oder 19
- [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) 8 — erforderliche Peer-Abhängigkeit (stellt Theming und UI-Primitive bereit)

### Installation

```shell
npm install @gravity-ui/chartkit @gravity-ui/uikit
```

### Styles

Importieren Sie die Styles von `@gravity-ui/uikit` in Ihrem Einstiegspunkt:

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

Ausführliche Informationen zur Einrichtung finden Sie im [uikit styles guide](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles).

### Grundlegende Verwendung

ChartKit verwendet eine globale Plugin-Registry. Rufen Sie `settings.set` einmal am Einstiegspunkt Ihrer App auf, um die benötigten Plugins zu registrieren. Wenn `<ChartKit type="..." />` gerendert wird, sucht es nach dem passenden Plugin — wenn keines gefunden wird, wird ein Fehler ausgelöst. Der Renderer jedes Plugins ist eine `React.lazy`-Komponente, sodass deren Code nur dann abgerufen wird, wenn ChartKit zum ersten Mal in der Benutzeroberfläche erscheint.

Sie können mehrere Plugins gleichzeitig registrieren:

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

Oder rufen Sie `settings.set` mehrmals auf — es wird die Plugin-Liste zusammengeführt, anstatt sie zu ersetzen.

**Grundlegendes Beispiel:**

```tsx
import {Provider} from '@gravity-ui/uikit';
import ChartKit, {settings} from '@gravity-ui/chartkit';
import {GravityChartsPlugin} from '@gravity-ui/chartkit/gravity-charts';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

settings.set({plugins: [GravityChartsPlugin]});

const data = {
  series: {
    data: [
      {
        type: 'line',
        name: 'Series',
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
    <Provider theme="light">
      <div style={{height: 300}}>
        <ChartKit type="gravity-charts" data={data} />
      </div>
    </Provider>
  );
}
```

`ChartKit` passt sich an die Größe seines Elternelements an — stellen Sie sicher, dass der Container eine explizite Höhe hat.

### SplitTooltip

Das Split-Pane-Tooltip-Layout, das `gravity-charts` auf Touch-Geräten verwendet (`tooltip={{splitted: true}}`), ist auch als eigenständige Komponente verfügbar. Es funktioniert mit beliebigem Inhalt: Es rendert das Hauptfenster und das Tooltip-Fenster nebeneinander (oder gestapelt, je nach Containergröße) mit einem verschiebbaren Resizer dazwischen.

```tsx
import {SplitTooltip} from '@gravity-ui/chartkit';

export function Panel() {
  return (
    <div style={{height: 400}}>
      <SplitTooltip
        renderMainPane={() => <MyVisualization />}
        renderTooltip={() => <MyTooltipContent />}
      />
    </div>
  );
}
```

Siehe den `SplitTooltipProps`-Typ für Layout-Steuerung, Fenstergrößen und Resizer-Optionen.

## Aktualisieren von Charting-Paketen

ChartKit bündelt zwei Gravity UI Charting-Bibliotheken als Abhängigkeiten:

- [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) — treibt das `gravity-charts`-Plugin an
- [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) — treibt das `yagr`-Plugin an

Wenn Sie eine neuere Version eines dieser Pakete benötigen, eröffnen Sie eine [Package update request](https://github.com/gravity-ui/ChartKit/issues/new?template=package-update-request.yml) und wählen Sie die benötigten Pakete aus. Die Maintainer werden die ausgewählten Pakete aktualisieren und die neue Version veröffentlichen.

### Upgrade von ChartKit 8

Siehe die [Migration Guide](docs/migration-to-v9.md): uikit 8 und React 18+, die Hinweise zu CommonJS/ESM-Builds und TypeScript `moduleResolution` sowie die Datenänderungen bei `gravity-charts`, die mit `@gravity-ui/charts` 2 einhergehen.

## Entwicklung

### Voraussetzungen

- [Node.js](https://nodejs.org/) 22 (siehe [.nvmrc](https://github.com/gravity-ui/ChartKit/blob/main/.nvmrc))
- [npm](https://www.npmjs.com/) 10 oder neuer

### Einrichtung

Klonen Sie das Repository und installieren Sie die Abhängigkeiten:

```shell
git clone https://github.com/gravity-ui/ChartKit.git
cd ChartKit
npm ci
```

### Storybook ausführen

```shell
npm run start
```

Storybook ist unter `http://localhost:7007` verfügbar.

### Entwicklung mit einer lokalen Abhängigkeit

Um an einer Abhängigkeit (z. B. `@gravity-ui/charts`) zu arbeiten und Ihre Änderungen live in Storybook zu sehen, ohne sie auf npm zu veröffentlichen:

**1. Lokales Paket verlinken**

```shell
# In Ihrem lokalen Klon von @gravity-ui/charts:
git clone https://github.com/gravity-ui/charts.git
cd charts
npm ci
# Nehmen Sie Ihre Änderungen vor
npm run build
npm link

# In ChartKit:
npm link @gravity-ui/charts
```

**2. Lokales Paket-Watching konfigurieren**

Erstellen Sie eine `.env.local`-Datei im ChartKit-Root-Verzeichnis (sie wird von Git ignoriert):

```shell
LOCAL_PKG=@gravity-ui/charts
```

Dies weist Vite an, dieses Paket in `node_modules` zu beobachten und es nicht vorab zu bündeln. Nach dem erneuten Erstellen von `@gravity-ui/charts` wird Storybook automatisch per Hot-Reload aktualisiert.

Für mehrere Pakete verwenden Sie eine durch Kommas getrennte Liste:

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. Storybook starten**

```shell
npm run start
```

**4. Das ursprüngliche Paket wiederherstellen**

Wenn Sie fertig sind:

1. Kommentieren Sie `LOCAL_PKG` in `.env.local` aus.
2. Führen Sie `npm install` in ChartKit aus – dies ersetzt den Symlink durch die Registry-Version.

```shell
# In ChartKit:
npm ci
```

### Tests ausführen

```shell
npm test
```

Um das erstellte Paket zu überprüfen, erstellen Sie es zuerst. Die Überprüfung lädt sowohl den CommonJS- als auch den ESM-Build in Node, vergleicht deren Exporte und führt eine Typüberprüfung eines Consumers unter den Modulauflösungen `nodenext`, `bundler` und `node` durch:

```shell
npm run build
npm run test:build
```

Visuelle Regressionstests werden in Docker ausgeführt, um konsistente Screenshots über verschiedene Umgebungen hinweg zu gewährleisten:

```shell
npm run test:docker
```

Um die Referenz-Screenshots nach beabsichtigten UI-Änderungen zu aktualisieren:

```shell
npm run test:docker:update
```

### Mitwirken

Bitte beachten Sie die [Anleitung für Mitwirkende](CONTRIBUTING.md), bevor Sie eine Pull-Anfrage einreichen.

## Lizenz

Verteilt unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE).

## Für KI-Agenten

Eine plattformbasierte React-Komponente, die Diagramme aus mehreren Diagrammbibliotheken wie Gravity Charts und Yagr über eine einzige `<ChartKit type="..." data={...} />`-API rendert und jede Bibliothek nur dann lädt, wenn ihr Diagrammtyp gerendert wird.

### Wann verwenden

- Rendern von mehr als einer Diagramm-Engine hinter einer einheitlichen Komponente: `gravity-charts` (deklarative SVG-Diagramme über [`@gravity-ui/charts`](https://github.com/gravity-ui/charts)) und `yagr` (uPlot-basierte Zeitreihen über [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr)).
- Lazy-Loading von Diagramm-Bundles – jeder Renderer des Plugins ist `React.lazy`, sodass der Code einer Bibliothek nur dann abgerufen wird, wenn ihr Diagrammtyp tatsächlich angezeigt wird.
- Mobilfreundliche Tooltips out-of-the-box – das Diagramm und sein Tooltip werden in größenveränderbaren geteilten Bereichen anstelle eines Hover-Popups angezeigt; für `gravity-charts` aktivieren Sie dies mit `<ChartKit type="gravity-charts" tooltip={{splitted: true}} />`.
- Verwendung des Split-Pane-Tooltip-Layouts allein – `SplitTooltip` ist eine eigenständige Komponente, die vom Root-Einstiegspunkt exportiert wird: übergeben Sie `renderMainPane` und `renderTooltip`, und sie ordnet sie als größenveränderbare Bereiche (vertikal oder horizontal, je nach Containergröße) für beliebige Inhalte an, nicht nur für ChartKit-Diagramme.
- Schreiben Ihres eigenen Plugins – registrieren Sie `{type, renderer}` über `settings.set({plugins: [...]})`, wobei `renderer` eine `React.lazy`-Komponente ist; ChartKit leitet sie nach `type` genau wie die integrierten Plugins weiter.
- Einheitliches Light/Dark-Theming über jede Diagramm-Engine hinweg out-of-the-box – die Diagramme folgen dem `@gravity-ui/uikit`-Theme der umgebenden Anwendung.

### Wann nicht verwenden

- Für nur einen Diagrammtyp importieren Sie [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) (allgemein) oder [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) (hochperformante Zeitreihen) direkt – die Plugin-Registry ist ein Overhead für eine Engine.
- Zum Erstellen eines Dashboard-Grids von Widgets verwenden Sie [`@gravity-ui/dashkit`](https://github.com/gravity-ui/dashkit) – ChartKit rendert ein Diagramm; DashKit ordnet viele Widgets an.

### Häufige Fallstricke

- **Rendern von `<ChartKit>` vor `settings.set({plugins: [...]})`** – die globale Plugin-Registry muss am App-Einstiegspunkt gefüllt sein; ein nicht registrierter `type` löst zur Renderzeit einen Fehler aus.
- **Halluzinierte Prop `chartType` / `library`** – die Dispatch-Prop ist `type` (z. B. `type="gravity-charts"`), und die Daten sind `data`.
- **Importieren von Plugins aus dem Root-Einstiegspunkt** – Plugins befinden sich in Subpfad-Exporten (z. B. `@gravity-ui/chartkit/gravity-charts`, `@gravity-ui/chartkit/yagr`); der Root-Einstiegspunkt `@gravity-ui/chartkit` exportiert sie nicht erneut.
- **Annahme einer einzigen `data`-Form für jeden `type`** – die Form hängt vom Plugin ab, z. B. nimmt `gravity-charts` `ChartData` von `@gravity-ui/charts` (`{series: {data: [...]}}`) entgegen, während `yagr` `{data: {graphs, timeline}, libraryConfig}` mit erforderlichem `libraryConfig` entgegennimmt.
- **Vergessen einer Containerhöhe** – `ChartKit` füllt sein übergeordnetes Element; ohne explizite Höhe am Wrapper kollabiert das Diagramm auf Null.
- **Fehlender Import der uikit-Styles** – das Theming hängt von `@gravity-ui/uikit/styles/styles.css` ab; ohne diesen werden Diagramme ungestylt gerendert.

## Dokumentation für KI-Agenten

Agentenlesbare Dokumentation für die installierte Version befindet sich in `node_modules/@gravity-ui/chartkit/build/docs/INDEX.md`.