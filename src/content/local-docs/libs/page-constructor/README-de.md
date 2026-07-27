# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Page Constructor

`Page-constructor` ist eine Bibliothek zum Rendern von Webseiten oder deren Teilen basierend auf `JSON`-Daten (die Unterstützung für das `YAML`-Format wird später hinzugefügt).

Beim Erstellen von Seiten wird ein komponentenbasiertes Vorgehen verwendet: Eine Seite wird aus einer Reihe fertiger Blöcke aufgebaut, die in beliebiger Reihenfolge platziert werden können. Jeder Block hat einen bestimmten Typ und eine Reihe von Eingabeparametern.

Das Format der Eingabedaten und die Liste der verfügbaren Blöcke finden Sie in der [Dokumentation](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs).

## Installation

```shell
npm install @gravity-ui/page-constructor
```

## Schnellstart

Zuerst benötigen wir ein React-Projekt und eine Art von Server. Sie können zum Beispiel ein React-Projekt mit Vite und einem Express-Server erstellen oder eine Next.js-Anwendung – diese hat sofort eine Client- und eine Serverseite.

Installieren Sie die erforderlichen Abhängigkeiten:

```shell
npm install @gravity-ui/page-constructor @diplodoc/transform @gravity-ui/uikit
```

Fügen Sie den `Page Constructor` zur Seite hinzu. Damit er korrekt funktioniert, muss er in einen `PageConstructorProvider` eingepackt sein:

```tsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';
import '@gravity-ui/page-constructor/styles/styles.scss';

const App = () => {
  const content = {
    blocks: [
      {
        type: 'header-block',
        title: 'Hello world',
        background: {color: '#f0f0f0'},
        description:
          '**Congratulations!** Have you built a [page-constructor](https://github.com/gravity-ui/page-constructor) into your website',
      },
    ],
  };

  return (
    <PageConstructorProvider>
      <PageConstructor content={content} />
    </PageConstructorProvider>
  );
};

export default App;
```

Dies war das einfachste Beispiel für eine Verbindung. Damit die YFM-Markup funktioniert, müssen Sie den Inhalt auf dem Server verarbeiten und auf dem Client empfangen.

Wenn Ihr Server eine separate Anwendung ist, müssen Sie page-constructor installieren:

```shell
npm install @gravity-ui/page-constructor
```

Um YFM in allen Basisblöcken zu verarbeiten, rufen Sie `contentTransformer` auf und übergeben Sie den Inhalt und die Optionen:

```ts
const express = require('express');
const app = express();
const {contentTransformer} = require('@gravity-ui/page-constructor/server');

const content = {
  blocks: [
    {
      type: 'header-block',
      title: 'Hello world',
      background: {color: '#f0f0f0'},
      description:
        '**Congratulations!** Have you built a [page-constructor](https://github.com/gravity-ui/page-constructor) into your website',
    },
  ],
};

app.get('/content', (req, res) => {
  res.send({content: contentTransformer({content, options: {lang: 'en'}})});
});

app.listen(3000);
```

Fügen Sie auf dem Client einen Endpunktaufruf hinzu, um den Inhalt zu empfangen:

```tsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';
import '@gravity-ui/page-constructor/styles/styles.scss';
import {useEffect, useState} from 'react';

const App = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/content').then((r) => r.json());
      setContent(response.content);
    })();
  }, []);

  return (
    <PageConstructorProvider>
      <PageConstructor content={content} />
    </PageConstructorProvider>
  );
};

export default App;
```

### Fertige Vorlage

Um ein neues Projekt zu starten, können Sie die [fertige Vorlage auf Next.js](https://github.com/gravity-ui/page-constructor-website-template) verwenden, die wir vorbereitet haben.

### Static Site Builder

[Page Constructor Builder](https://github.com/gravity-ui/page-constructor-builder) – ein Kommandozeilen-Dienstprogramm zum Erstellen statischer Seiten aus YAML-Konfigurationen unter Verwendung von @gravity-ui/page-constructor.

## Dokumentation

### Parameter

```typescript
interface PageConstructorProps {
  content: PageContent; // Blockdaten im JSON-Format.
  shouldRenderBlock?: ShouldRenderBlock; // Eine Funktion, die beim Rendern jedes Blocks aufgerufen wird und es Ihnen ermöglicht, Bedingungen für dessen Anzeige festzulegen.
  custom?: Custom; // Benutzerdefinierte Blöcke (siehe `Customization`).
  renderMenu?: () => React.ReactNode; // Eine Funktion, die das Seitenmenü mit Navigation rendert (wir planen, eine Standardversion des Menüs hinzuzufügen).
  navigation?: NavigationData; // Navigationsdaten für die Verwendung der Navigationskomponente im JSON-Format
  isBranded?: boolean; // Wenn true, wird ein Footer hinzugefügt, der auf https://gravity-ui.com/ verlinkt. Probieren Sie die BrandFooter-Komponente für weitere Anpassungen aus.
}

interface PageConstructorProviderProps {
  isMobile?: boolean; // Ein Flag, das anzeigt, dass der Code im mobilen Modus ausgeführt wird.
  locale?: LocaleContextProps; // Informationen zur Sprache und Domain (wird beim Generieren und Formatieren von Links verwendet).
  location?: Location; // API des Browser- oder Router-Verlaufs, die Seiten-URL.
  analytics?: AnalyticsContextProps; // Funktion zur Verarbeitung von Analyseereignissen

  ssrConfig?: SSR; // Ein Flag, das anzeigt, dass der Code auf der Serverseite ausgeführt wird.
  theme?: 'light' | 'dark'; // Thema, mit dem die Seite gerendert werden soll.
  mapsContext?: MapsContextType; // Parameter für Karten: apikey, type, scriptSrc, nonce
}

export interface PageContent extends Animatable {
  blocks: Block[];
  menu?: Menu;
  background?: MediaProps;
}

interface Custom {
  blocks?: CustomItems;
  subBlocks?: CustomItems;
  headers?: CustomItems;
  loadable?: LoadableConfig;
}

type ShouldRenderBlock = (block: Block, blockKey: string) => Boolean;

interface Location {
  history?: History;
  search?: string;
  hash?: string;
  pathname?: string;
  hostname?: string;
}

interface Locale {
  lang?: Lang;
  tld?: string;
}

interface SSR {
  isServer?: boolean;
}

interface NavigationData {
  logo: NavigationLogo;
  header: HeaderData;
}

interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}

interface HeaderData {
  leftItems: NavigationItem[];
  rightItems?: NavigationItem[];
}
```

```typescript

```ts
function sendEvents(events: MyEventType []) {
  ...
}

<PageConstructorProvider
    ...

    analytics={{sendEvents, autoEvents: true}}

    ...
/>
```

Ein Event-Objekt hat nur ein erforderliches Feld – `name`. Es hat auch vordefinierte Felder, die dazu dienen, komplexe Logik zu verwalten. Zum Beispiel kann `counter.include` helfen, ein Event in einem bestimmten Zähler zu senden, wenn mehrere Analysetools in einem Projekt verwendet werden.

```ts
type AnalyticsEvent<T = {}> = T & {
  name: string;
  type?: string;
  counters?: AnalyticsCounters;
  context?: string;
};
```

Es ist möglich, den für ein Projekt benötigten Event-Typ zu konfigurieren.

```ts
type MyEventType = AnalyticsEvent<{
  [key: string]?: string; // nur ein 'string'-Typ wird unterstützt
}>;
```

#### Zähler-Selektor

Es ist möglich, ein Event so zu konfigurieren, an welches Analysetool es gesendet werden soll.

```ts
type AnalyticsCounters = {
  include?: string[]; // Array von Analytics-Zähler-IDs, die angewendet werden
  exclude?: string[]; // Array von Analytics-Zähler-IDs, die nicht angewendet werden
};
```

#### Kontext-Parameter

Übergeben Sie den `context`-Wert, um den Ort im Projekt zu definieren, an dem ein Event ausgelöst wird.

Verwenden Sie den untenstehenden Selektor oder erstellen Sie eine Logik, die den Projektanforderungen entspricht.

```ts
// analyticsHandler.ts
if (isCounterAllowed(counterName, counters)) {
  analyticsCounter.reachGoal(counterName, name, parameters);
}
```

#### Reservierte Event-Typen

Mehrere vordefinierte Event-Typen werden verwendet, um automatisch konfigurierte Events zu markieren. Verwenden Sie die Typen zum Beispiel, um Standard-Events zu filtern.

```ts
enum PredefinedEventTypes {
  Default = 'default-event', // Standard-Events, die bei jedem Button-Klick ausgelöst werden
  Play = 'play', // React Player Event
  Stop = 'stop', // React Player Event
}
```

## Entwicklung

```bash
npm ci
npm run dev
```

#### Hinweis zu Vite

```ts
import react from '@vitejs/plugin-react-swc';
import dynamicImport from 'vite-plugin-dynamic-import';

export default defineConfig({
  plugins: [
    react(),
    dynamicImport({
      filter: (id) => id.includes('/node_modules/@gravity-ui/page-constructor'),
    }),
  ],
});
```

Für Vite müssen Sie das Plugin `vite-plugin-dynamic-import` installieren und die Konfiguration so anpassen, dass dynamische Importe funktionieren.

## Release-Ablauf

In der Regel verwenden wir zwei Arten von Commits:

1. `fix`: Ein Commit vom Typ `fix` behebt einen Fehler in Ihrem Code (dies korreliert mit PATCH in der semantischen Versionierung).
2. `feat`: Ein Commit vom Typ `feat` führt eine neue Funktion in den Code ein (dies korreliert mit MINOR in der semantischen Versionierung).
3. `BREAKING CHANGE`: Ein Commit, der einen Footer `BREAKING CHANGE:` hat oder nach dem Typ/Scope ein `!` anhängt, führt eine nicht abwärtskompatible API-Änderung ein (korreliert mit MAJOR in der semantischen Versionierung). Ein `BREAKING CHANGE` kann Teil von Commits jeglichen Typs sein.
4. Um die Version des Release-Pakets manuell festzulegen, müssen Sie `Release-As: <version>` zu Ihrer Commit-Nachricht hinzufügen, z. B.

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

Alle Informationen finden Sie [hier](https://www.conventionalcommits.org/en/v1.0.0/).

Wenn Sie die Genehmigung Ihres Pull-Requests von den Code-Besitzern erhalten und alle Checks bestanden haben, gehen Sie wie folgt vor:

1. Überprüfen Sie, ob ein Release-Pull-Request vom Roboter mit Änderungen von anderen Mitwirkenden vorhanden ist (sieht aus wie `chore(main): release 0.0.0`). Wenn ja, prüfen Sie, warum er nicht gemerged wurde. Wenn der Mitwirkende einer gemeinsamen Version zustimmt, fahren Sie mit dem nächsten Schritt fort. Wenn nicht, bitten Sie ihn, seine Version zu releasen, und fahren Sie dann mit dem nächsten Schritt fort.
2. Squash and merge Ihren PR (Es ist wichtig, eine neue Version mit Github-Actions zu releasen).
3. Warten Sie, bis der Roboter einen PR mit einer neuen Version des Pakets und Informationen zu Ihren Änderungen in CHANGELOG.md erstellt. Sie können den Prozess im [Actions-Tab](https://github.com/gravity-ui/page-constructor/actions) verfolgen.
4. Überprüfen Sie Ihre Änderungen in CHANGELOG.md und genehmigen Sie den PR des Roboters.
5. Squash and merge den PR. Sie können den Release-Prozess im [Actions-Tab](https://github.com/gravity-ui/page-constructor/actions) verfolgen.

### Alpha-Versionen Release

Wenn Sie eine Alpha-Version des Pakets von Ihrem Branch releasen möchten, können Sie dies manuell tun:

1. Gehen Sie zum Tab "Actions".
2. Wählen Sie auf der linken Seite des Bildschirms den Workflow "Release alpha version".
3. Auf der rechten Seite sehen Sie die Schaltfläche "Run workflow". Hier können Sie den Branch auswählen.
4. Sie sehen auch ein Feld für die manuelle Version. Wenn Sie zum ersten Mal ein Alpha in Ihrem Branch releasen, lassen Sie dieses Feld leer. Nach dem ersten Release müssen Sie die neue Version manuell festlegen, da wir die package.json nicht ändern, falls der Branch sehr bald abläuft. Verwenden Sie das Präfix `alpha` in Ihrer manuellen Version, sonst erhalten Sie einen Fehler.
5. Drücken Sie "Run workflow" und warten Sie, bis die Aktion abgeschlossen ist. Sie können beliebig viele Versionen releasen, aber missbrauchen Sie es nicht und releasen Sie Versionen nur, wenn Sie sie wirklich benötigen. In anderen Fällen verwenden Sie [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack).

### Beta-Major-Versionen Release

Wenn Sie eine neue Major-Version releasen möchten und dafür wahrscheinlich Beta-Versionen vor der stabilen Version benötigen, gehen Sie wie folgt vor:

1. Erstellen oder aktualisieren Sie den Branch `beta`.
2. Fügen Sie Ihre Änderungen dort hinzu.
3. Wenn Sie bereit für eine neue Beta-Version sind, releasen Sie sie manuell mit einem leeren Commit (oder Sie können diese Commit-Nachricht mit einem Footer zum letzten Commit hinzufügen):

```bash
git commit -m 'fix: last commit

Release-As: 3.0.0-beta.0' --allow-empty
```

4. "Release please" wird einen neuen PR zum Branch `beta` mit aktualisiertem CHANGELOG.md und der erhöhten Paketversion erstellen.
5. Sie können dies beliebig oft wiederholen. Wenn Sie bereit sind, die neueste Major-Version ohne Beta-Tag zu releasen, müssen Sie einen PR vom Branch `beta` zum Branch `main` erstellen. Beachten Sie, dass es normal ist, dass Ihre Paketversion mit einem Beta-Tag versehen ist. Der Roboter weiß das und ändert es entsprechend. `3.0.0-beta.0` wird zu `3.0.0`.

### Release-Ablauf für frühere Major-Versionen

Wenn Sie eine neue Version in einer früheren Major-Version releasen möchten, nachdem Sie sie in `main` committet haben, gehen Sie wie folgt vor:

1. Aktualisieren Sie den entsprechenden Branch. Die Namen der Branchs für frühere Major-Releases sind:
   1. `version-1.x.x/fixes` - für Major 1.x.x
   2. `version-2.x.x` - für Major 2.x.x
2. Erstellen Sie einen neuen Branch von dem Branch des früheren Major-Releases.
3. Cherry-picken Sie Ihren Commit aus dem Branch `main`.
4. Erstellen Sie einen PR, erhalten Sie die Genehmigung und mergen Sie ihn in den Branch des früheren Major-Releases.
5. Squash and merge Ihren PR (Es ist wichtig, eine neue Version mit Github-Actions zu releasen).
6. Warten Sie, bis der Roboter einen PR mit einer neuen Version des Pakets und Informationen zu Ihren Änderungen in CHANGELOG.md erstellt. Sie können den Prozess im [Actions-Tab](https://github.com/gravity-ui/page-constructor/actions) verfolgen.
7. Überprüfen Sie Ihre Änderungen in CHANGELOG.md und genehmigen Sie den PR des Roboters.
8. Squash and merge den PR. Sie können den Release-Prozess im [Actions-Tab](https://github.com/gravity-ui/page-constructor/actions) verfolgen.

## Page Constructor Editor

Der Editor bietet eine Benutzeroberfläche für die Verwaltung von Seiteninhalten mit Echtzeit-Vorschau.

Anwendung:

```tsx
import {Editor} from '@gravity-ui/page-constructor/editor';

interface MyAppEditorProps {
  initialContent: PageContent;
  transformContent: ContentTransformer;
  onChange: (content: PageContent) => void;
}

export const MyAppEditor = ({initialContent, onChange, transformContent}: MyAppEditorProps) => (
  <Editor content={initialContent} onChange={onChange} transformContent={transformContent} />
);
```

## Memory Bank

Dieses Projekt enthält eine umfassende **Memory Bank** – eine Sammlung von Markdown-Dokumentationsdateien, die detaillierte Informationen über die Architektur, Komponenten und Nutzungsmuster des Projekts liefern. Die Memory Bank ist besonders nützlich bei der Arbeit mit KI-Agenten, da sie strukturierte Informationen enthält über:

- **Projektübersicht**: Kernanforderungen, Ziele und Kontext
- **Komponentendokumentation**: Detaillierte Anleitungen zur Verwendung aller Komponenten
- **Systemarchitektur**: Technische Muster und Designentscheidungen
- **Entwicklungsfortschritt**: Aktueller Status und Implementierungsdetails

### Verwendung der Memory Bank

Die Memory Bank befindet sich im Verzeichnis `memory-bank/` und besteht aus regulären Markdown-Dateien, die wie jede andere Dokumentation gelesen werden können:

- `projectbrief.md` - Grundlagendokument mit Kernanforderungen
- `productContext.md` - Projektzweck und Ziele der Benutzererfahrung
- `systemPatterns.md` - Architektur und technische Entscheidungen
- `techContext.md` - Technologien, Einrichtung und Einschränkungen
- `activeContext.md` - Aktueller Arbeitsfokus und letzte Änderungen
- `progress.md` - Implementierungsstatus und bekannte Probleme
- `usage/` - Komponentenspezifische Dokumentation zur Verwendung
- `storybookComponents.md` - Details zur Storybook-Integration

## Tests

Umfassende Dokumentation ist unter dem bereitgestellten [Link](./test-utils/docs/README.md) verfügbar.

## Lizenz

Verteilt unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE).

## Für KI-Agenten

Eine Bibliothek zum Rendern ganzer Webseiten oder Seitensektionen aus deklarativen JSON/YAML-Konfigurationen, die eine Reihe von fertigen, sortierbaren Blöcken verwendet – greifen Sie darauf zurück, um Marketing-/Landingpages zu erstellen, nicht allgemeine Anwendungs-UIs.

### Wann zu verwenden

- Datengetriebene Seiten: Rendern Sie eine `content`-Konfiguration von typisierten Blöcken mit `PageConstructor`, verpackt in `PageConstructorProvider`.
- Marketing-, Landing- und Dokumentationsseiten, die aus vorgefertigten Blöcken (Header, Medien, Karten usw.) zusammengestellt sind.
- Serverseitige YFM-Verarbeitung von Blocktext über die `@gravity-ui/page-constructor/server`-Dienstprogramme (`contentTransformer`, `fullTransform`).
- Wiederverwendung nur des responsiven Grids (`Grid`/`Row`/`Col`) oder der `Navigation`-Komponente eigenständig.

### Wann nicht zu verwenden

- Allgemeine Anwendungs-UIs (Schaltflächen, Formulare, Modals) – verwenden Sie [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Bearbeiten von Markdown/YFM-Inhalten – verwenden Sie [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor).
- App-Navigations-