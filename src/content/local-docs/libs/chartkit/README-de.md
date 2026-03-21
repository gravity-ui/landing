# Gravity UI ChartKit · [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![License](https://img.shields.io/github/license/gravity-ui/ChartKit)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/ChartKit/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

Ein Plugin-basiertes React-Komponenten-Set, das eine einheitliche Rendering-Schnittstelle für verschiedene Charting-Bibliotheken bietet. Sie registrieren ein oder mehrere Plugins und rendern Diagramme über `<ChartKit type="..." data={...} />` — ChartKit leitet automatisch an den richtigen Renderer weiter.

Jeder Plugin-Renderer wird "lazy loaded", sodass der Code der zugrunde liegenden Bibliothek nur dann heruntergeladen wird, wenn ChartKit tatsächlich in der Benutzeroberfläche gerendert wird. ChartKit kümmert sich außerdem standardmäßig um die mobilefreundliche Anzeige von Tooltips. Sie können die integrierten Plugins verwenden oder eigene implementieren.

**Wann verwenden:**

- Sie benötigen moderne deklarative Diagramme (`gravity-charts`) oder Zeitreihen-/Monitoring-Diagramme (`yagr`)
- Sie benötigen mehrere Diagrammtypen unter einer einzigen konsistenten API
- Sie entwickeln im Gravity UI-Ökosystem

**Wann nicht verwenden:**

- Sie benötigen nur eine spezifische Charting-Bibliothek — bevorzugen Sie die direkte Verwendung von [@gravity-ui/charts](https://github.com/gravity-ui/charts)

## Inhaltsverzeichnis

- [Erste Schritte](#get-started)
- [Entwicklung](#development)

## Erste Schritte

### Voraussetzungen

- React 16, 17 oder 18
- `[@gravity-ui/uikit](https://github.com/gravity-ui/uikit)` — erforderliche Peer-Abhängigkeit (stellt Theming und UI-Primitive bereit)

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

ChartKit verwendet eine globale Plugin-Registry. Rufen Sie `settings.set` einmal am Einstiegspunkt Ihrer App auf, um die benötigten Plugins zu registrieren. Wenn `<ChartKit type="..." />` gerendert wird, sucht es nach dem passenden Plugin — wenn keines gefunden wird, wird ein Fehler ausgelöst. Der Renderer jedes Plugins ist eine `React.lazy`-Komponente, sodass sein Code nur dann abgerufen wird, wenn ChartKit zum ersten Mal in der Benutzeroberfläche erscheint.

Sie können mehrere Plugins gleichzeitig registrieren:

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

Oder rufen Sie `settings.set` mehrmals auf — es wird die Plugin-Liste zusammengeführt, anstatt sie zu ersetzen.

**Grundlegendes Beispiel:**

```tsx
import {ThemeProvider} from '@gravity-ui/uikit';
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
    <ThemeProvider theme="light">
      <div style={{height: 300}}>
        <ChartKit type="gravity-charts" data={data} />
      </div>
    </ThemeProvider>
  );
}
```

`ChartKit` passt sich an die Größe seines übergeordneten Elements an — stellen Sie sicher, dass der Container eine explizite Höhe hat.

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

Um an einer Abhängigkeit zu arbeiten (z. B. `@gravity-ui/charts`) und Ihre Änderungen live in Storybook zu sehen, ohne sie auf npm zu veröffentlichen:

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

**2. Lokale Paketüberwachung konfigurieren**

Erstellen Sie eine `.env.local`-Datei im Stammverzeichnis von ChartKit (sie wird von git ignoriert):

```shell
LOCAL_PKG=@gravity-ui/charts
```

Dies weist Vite an, dieses Paket in `node_modules` zu überwachen und das Vorab-Bundling zu überspringen. Nach dem Neuerstellen von `@gravity-ui/charts` wird Storybook automatisch neu geladen.

Für mehrere Pakete verwenden Sie eine durch Kommas getrennte Liste:

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. Storybook starten**

```shell
npm run start
```

**4. Ursprüngliches Paket wiederherstellen**

Wenn Sie fertig sind:

1. Kommentieren Sie `LOCAL_PKG` in `.env.local` aus
2. Führen Sie `npm install` in ChartKit aus — dies ersetzt den Symlink durch die Version aus dem Registry

```shell
# In ChartKit:
npm ci
```

### Tests ausführen

```shell
npm test
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

Bitte beachten Sie die [contributing guide](CONTRIBUTING.md), bevor Sie einen Pull Request einreichen.