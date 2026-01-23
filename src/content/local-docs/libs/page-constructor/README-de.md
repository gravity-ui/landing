# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Page Constructor

`Page-constructor` ist eine Bibliothek zum Rendern von Webseiten oder deren Teilen basierend auf `JSON`-Daten (die Unterstützung für das `YAML`-Format wird später hinzugefügt).

Beim Erstellen von Seiten wird ein komponentenbasiertes Vorgehen verwendet: Eine Seite wird aus einer Reihe fertiger Blöcke aufgebaut, die in beliebiger Reihenfolge platziert werden können. Jeder Block hat einen bestimmten Typ und eine Reihe von Eingabeparametern.

Das Format der Eingabedaten und die Liste der verfügbaren Blöcke finden Sie in der [Dokumentation](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs).

## Installation

```shell
npm install @gravity-ui/page-constructor
```

## Schnelleinstieg

Zuerst benötigen wir ein React-Projekt und eine Art von Server. Sie können zum Beispiel ein React-Projekt mit Vite und einem Express-Server erstellen oder eine Next.js-Anwendung erstellen – diese hat sofort eine Client- und eine Serverseite.

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

[Page Constructor Builder](https://github.com/gravity-ui/page-constructor-builder) – ein Kommandozeilen-Dienstprogramm zum Erstellen statischer Seiten aus YAML-Konfigurationen mit @gravity-ui/page-constructor.

## Dokumentation

### Parameter

```typescript
interface PageConstructorProps {
  content: PageContent; // Blockdaten im JSON-Format.
  shouldRenderBlock?: ShouldRenderBlock; // Eine Funktion, die beim Rendern jedes Blocks aufgerufen wird und es Ihnen ermöglicht, Bedingungen für dessen Anzeige festzulegen.
  custom?: Custom; // Benutzerdefinierte Blöcke (siehe `Customization`).
  renderMenu?: () => React.ReactNode; // Eine Funktion, die das Seitenmenü mit Navigation rendert (wir planen, eine Standardversion des Menüs hinzuzufügen).
  navigation?: NavigationData; // Navigationsdaten für die Verwendung der Navigationskomponente im JSON-Format
  isBranded?: boolean; // Wenn true, wird ein Footer hinzugefügt, der auf https://gravity-ui.com/ verlinkt. Versuchen Sie die BrandFooter-Komponente für weitere Anpassungen.
}

interface PageConstructorProviderProps {
  isMobile?: boolean; // Ein Flag, das anzeigt, dass der Code im mobilen Modus ausgeführt wird.
  locale?: LocaleContextProps; // Informationen zur Sprache und Domain (wird beim Generieren und Formatieren von Links verwendet).
  location?: Location; // API des Browser- oder Router-Verlaufs, die Seiten-URL.
  analytics?: AnalyticsContextProps; // Funktion zur Behandlung von Analyseereignissen

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
interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}
```

### Server-Utils

Das Paket stellt eine Reihe von Server-Utils zur Verfügung, um Ihre Inhalte zu transformieren.

```ts
const {fullTransform} = require('@gravity-ui/page-constructor/server');

const {html} = fullTransform(content, {
  lang,
  extractTitle: true,
  allowHTML: true,
  path: __dirname,
  plugins,
});
```

Im Hintergrund wird ein Paket verwendet, um Yandex Flavored Markdown in HTML zu transformieren – `diplodoc/transfrom`, daher ist es auch in den Peer Dependencies enthalten.

Sie können nützliche Utilities auch an den Stellen verwenden, an denen Sie sie benötigen, z. B. in Ihren benutzerdefinierten Komponenten.

```ts
const {
  typografToText,
  typografToHTML,
  yfmTransformer,
} = require('@gravity-ui/page-constructor/server');

const post = {
  title: typografToText(title, lang),
  content: typografToHTML(content, lang),
  description: yfmTransformer(lang, description, {plugins}),
};
```

Weitere Utilities finden Sie in diesem [Abschnitt](https://github.com/gravity-ui/page-constructor/tree/main/src/text-transform).

### Detaillierte Dokumentation zu Server-Utils und Transformer

Eine umfassende Anleitung zur Verwendung von Server-Utils, einschließlich detaillierter Erklärungen und fortgeschrittener Anwendungsfälle, finden Sie im [zusätzlichen Kapitel zur Verwendung von Server-Utils](./docs/data-preparation.md).

### Benutzerdefinierte Blöcke

Der Page Constructor ermöglicht die Verwendung von Blöcken, die von Ihrer Anwendung benutzerdefiniert wurden. Blöcke sind reguläre React-Komponenten.

Um benutzerdefinierte Blöcke an den Constructor zu übergeben:

1. Erstellen Sie einen Block in Ihrer Anwendung.

2. Erstellen Sie in Ihrem Code ein Objekt mit dem Blocktyp (String) als Schlüssel und der importierten Blockkomponente als Wert.

3. Übergeben Sie das erstellte Objekt an den Parameter `custom.blocks`, `custom.headers` oder `custom.subBlocks` der `PageConstructor`-Komponente (`custom.headers` gibt die Block-Header an, die separat über dem allgemeinen Inhalt gerendert werden).

4. Nun können Sie den erstellten Block in den Eingabedaten (dem `content`-Parameter) verwenden, indem Sie seinen Typ und seine Daten angeben.

Um Mixins und Constructor-Style-Variablen bei der Erstellung benutzerdefinierter Blöcke zu verwenden, fügen Sie einen Import in Ihre Datei hinzu:

```css
@import '~@gravity-ui/page-constructor/styles/styles.scss';
```

Um die Standard-Schriftart zu verwenden, fügen Sie einen Import in Ihre Datei hinzu:

```css
@import '~@gravity-ui/page-constructor/styles/fonts.scss';
```

### Loadable Blocks

Manchmal ist es notwendig, dass ein Block sich selbst basierend auf zu ladenden Daten rendert. In diesem Fall werden "loadable blocks" verwendet.

Um benutzerdefinierte `loadable`-Blöcke hinzuzufügen, übergeben Sie dem `PageConstructor` die Eigenschaft `custom.loadable` mit den Namen der Datenquellen (String) für die Komponente als Schlüssel und einem Objekt als Wert.

```typescript
export interface LoadableConfigItem {
  fetch: FetchLoadableData; // Methode zum Laden von Daten
  component: React.ComponentType; // Block, der geladene Daten übergibt
}

type FetchLoadableData<TData = any> = (blockKey: string) => Promise<TData>;
```

### Grid

Der Page Constructor verwendet das `bootstrap`-Grid und dessen Implementierung auf Basis von React-Komponenten, die Sie in Ihrem eigenen Projekt verwenden können (auch separat vom Constructor).

Anwendungsbeispiel:

```jsx
import {Grid, Row, Col} from '@gravity-ui/page-constructor';

const Page = ({children}: PropsWithChildren<PageProps>) => (
  <Grid>
    <Row>
      <Col sizes={{lg: 4, sm: 6, all: 12}}>{children}</Col>
    </Row>
  </Grid>
);
```

### Navigation

Die Seiten-Navigation kann auch separat vom Constructor verwendet werden:

```jsx
import {Navigation} from '@gravity-ui/page-constructor';

const Page= ({data, logo}: React.PropsWithChildren<PageProps>) => <Navigation data={data} logo={logo} />;
```

### Blöcke

Jeder Block ist eine atomare Top-Level-Komponente. Sie sind im Verzeichnis `src/units/constructor/blocks` gespeichert.

### Sub-Blöcke

Sub-Blöcke sind Komponenten, die in der `children`-Eigenschaft eines Blocks verwendet werden können. In einer Konfiguration wird eine Liste von Kindkomponenten aus Sub-Blöcken angegeben. Nach dem Rendern werden diese Sub-Blöcke als `children` an den Block übergeben.

### So fügen Sie einen neuen Block zum `page-constructor` hinzu

1. Erstellen Sie im Verzeichnis `src/blocks` oder `src/sub-blocks` einen Ordner mit dem Code des Blocks oder Sub-Blocks.

2. Fügen Sie den Namen des Blocks oder Sub-Blocks zum Enum `BlockType` oder `SubBlockType` hinzu und beschreiben Sie seine Eigenschaften in der Datei `src/models/constructor-items/blocks.ts` oder `src/models/constructor-items/sub-blocks.ts` ähnlich wie bei den vorhandenen.

3. Fügen Sie einen Export für den Block in der Datei `src/blocks/index.ts` und für den Sub-Block in der Datei `src/sub-blocks/index.ts` hinzu.

4. Fügen Sie eine neue Komponente oder einen Block zur Zuordnung in `src/constructor-items.ts` hinzu.

5. Fügen Sie einen Validator für den neuen Block hinzu:

   - Erstellen Sie eine Datei `schema.ts` im Verzeichnis des Blocks oder Sub-Blocks. Beschreiben Sie in dieser Datei einen Parameter-Validator für die Komponente im [`json-schema`](http://json-schema.org/)-Format.
   - Exportieren Sie ihn in der Datei `schema/validators/blocks.ts` oder `schema/validators/sub-blocks.ts`.
   - Fügen Sie ihn in `enum` oder `selectCases` in der Datei `schema/index.ts` hinzu.

6. Fügen Sie im Verzeichnis des Blocks die Datei `README.md` mit einer Beschreibung der Eingabeparameter hinzu.
7. Fügen Sie im Verzeichnis des Blocks eine Storybook-Demo im Ordner `__stories__` hinzu. Alle Demo-Inhalte für die Story müssen in `data.json` im Story-Verzeichnis platziert werden. Die generische `Story` muss den Typ der Block-Props akzeptieren, andernfalls werden in Storybook falsche Block-Props angezeigt.
8. Fügen Sie eine Block-Daten-Vorlage zum Ordner `src/editor/data/templates/` hinzu, der Dateiname sollte dem Block-Typ entsprechen.
9. (Optional) Fügen Sie ein Block-Vorschau-Icon zum Ordner `src/editor/data/previews/` hinzu, der Dateiname sollte dem Block-Typ entsprechen.

### Themes

Der `PageConstructor` ermöglicht die Verwendung von Themes: Sie können unterschiedliche Werte für einzelne Block-Eigenschaften festlegen, abhängig vom im Projekt ausgewählten Theme.

Um einem Theme für eine Block-Eigenschaft hinzuzufügen:

1. Definieren Sie in der Datei `models/blocks.ts` den Typ der jeweiligen Block-Eigenschaft mit dem generischen Typ `ThemeSupporting<T>`, wobei `T` der Typ der Eigenschaft ist.

2. In der Datei mit der `react`-Komponente des Blocks rufen Sie den Wert der Eigenschaft mit dem Theme über den Hook `getThemedValue` und `useTheme` ab (siehe Beispiele im Block `MediaBlock.tsx`).

3. Fügen Sie Theme-Unterstützung zum Eigenschafts-Validator hinzu: In der Datei `schema.ts` des Blocks umschließen Sie diese Eigenschaft mit `withTheme`.

### i18n

Der `page-constructor` ist eine `uikit-basierte` Bibliothek, und wir verwenden eine Instanz von `i18n` aus uikit. Um die Internationalisierung einzurichten, müssen Sie nur `configure` von uikit verwenden:

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

### Maps

Um Karten zu verwenden, geben Sie den Kartentyp, `scriptSrc` und `apiKey` im Feld `mapContext` in `PageConstructorProvider` an.

Sie können Umgebungsvariablen für den Entwicklungsmodus in der Datei `.env.development` im Stammverzeichnis des Projekts definieren.
`STORYBOOK_GMAP_API_KEY` - apiKey für Google Maps

### Analytics

#### Init

Um mit der Nutzung von Analytics zu beginnen, übergeben Sie einen Handler an den Constructor. Der Handler muss auf Projektseite erstellt werden. Der Handler erhält die Event-Objekte `default` und `custom`. Der übergebene Handler wird bei Klicks auf Buttons, Links, Navigation und Steuerelemente ausgelöst. Da ein Handler für die Behandlung aller Events verwendet wird, achten Sie darauf, wie Sie verschiedene Events bei der Erstellung des Handlers behandeln. Es gibt vordefinierte Felder, die Ihnen helfen, komplexe Logik zu erstellen.

Übergeben Sie `autoEvents: true` an den Constructor, um automatisch konfigurierte Events auszulösen.

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

Mehrere vordefinierte Event-Typen werden verwendet, um automatisch konfigurierte Events zu markieren. Verwenden Sie die Typen beispielsweise zum Filtern von Standard-Events.

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

1.  `fix`: Ein Commit vom Typ `fix` behebt einen Fehler in Ihrem Code (dies korreliert mit PATCH in der semantischen Versionierung).
2.  `feat`: Ein Commit vom Typ `feat` führt eine neue Funktion in den Code ein (dies korreliert mit MINOR in der semantischen Versionierung).
3.  `BREAKING CHANGE`: Ein Commit, der einen `BREAKING CHANGE:`-Footer hat oder nach dem Typ/Scope ein `!` anhängt, führt eine nicht abwärtskompatible API-Änderung ein (korreliert mit MAJOR in der semantischen Versionierung). Ein `BREAKING CHANGE` kann Teil von Commits jeglichen Typs sein.
4.  Um die Release-Paketversion manuell festzulegen, müssen Sie `Release-As: <version>` zu Ihrer Commit-Nachricht hinzufügen, z. B.

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

Alle Informationen finden Sie [hier](https://www.conventionalcommits.org/en/v1.0.0/).

Wenn Sie die Genehmigung Ihres Pull-Requests von den Code-Ownern erhalten und alle Checks bestanden haben, gehen Sie wie folgt vor:

1.  Prüfen Sie, ob ein Release-Pull-Request vom Roboter mit Änderungen von anderen Mitwirkenden vorhanden ist (sieht aus wie `chore(main): release 0.0.0`). Wenn ja, prüfen Sie, warum er nicht gemerged wurde. Wenn der Mitwirkende zustimmt, eine gemeinsame Version zu veröffentlichen, fahren Sie mit dem nächsten Schritt fort. Wenn nicht, bitten Sie ihn, seine Version zu veröffentlichen, und fahren Sie dann mit dem nächsten Schritt fort.
2.  Squash und merge Ihren PR (Es ist wichtig, eine neue Version mit Github-Actions zu veröffentlichen).
3.  Warten Sie, bis der Roboter einen PR mit einer neuen Version des Pakets und Informationen zu Ihren Änderungen in CHANGELOG.md erstellt. Sie können den Prozess im [Actions-Tab](https://github.com/gravity-ui/page-constructor/actions) verfolgen.
4.  Überprüfen Sie Ihre Änderungen in CHANGELOG.md und genehmigen Sie den PR des Roboters.
5.  Squash und merge den PR. Sie können den Release-Prozess im [Actions-Tab](https://github.com/gravity-ui/page-constructor/actions) verfolgen.

### Alpha-Versionen veröffentlichen

Wenn Sie eine Alpha-Version des Pakets von Ihrem Branch veröffentlichen möchten, können Sie dies manuell tun:

1.  Gehen Sie zum Tab "Actions".
2.  Wählen Sie auf der linken Seite des Bildschirms den Workflow "Release alpha version".
3.  Auf der rechten Seite sehen Sie die Schaltfläche "Run workflow". Hier können Sie den Branch auswählen.
4.  Sie sehen auch ein Feld für die manuelle Version. Wenn Sie zum ersten Mal ein Alpha in Ihrem Branch veröffentlichen, lassen Sie dieses Feld leer. Nach der ersten Veröffentlichung müssen Sie die neue Version manuell festlegen, da wir die package.json nicht ändern, falls der Branch sehr bald abläuft. Verwenden Sie das Präfix `alpha` in Ihrer manuellen Version, andernfalls erhalten Sie einen Fehler.
5.  Klicken Sie auf "Run workflow" und warten Sie, bis die Aktion abgeschlossen ist. Sie können so viele Versionen veröffentlichen, wie Sie möchten, aber missbrauchen Sie es nicht und veröffentlichen Sie Versionen nur, wenn Sie sie wirklich benötigen. In anderen Fällen verwenden Sie [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack).

### Beta-Major-Versionen veröffentlichen

Wenn Sie eine neue Major-Version veröffentlichen möchten und dafür wahrscheinlich Beta-Versionen vor der stabilen Version benötigen, gehen Sie wie folgt vor:

1.  Erstellen oder aktualisieren Sie den Branch `beta`.
2.  Fügen Sie Ihre Änderungen dort hinzu.
3.  Wenn Sie bereit für eine neue Beta-Version sind, veröffentlichen Sie diese manuell mit einem leeren Commit (oder Sie können diese Commit-Nachricht mit einem Footer zum letzten Commit hinzufügen):

```bash
git commit -m 'fix: last commit

Release-As: 3.0.0-beta.0' --allow-empty
```

4.  Der "Release please"-Roboter erstellt einen neuen PR zum Branch `beta` mit aktualisiertem CHANGELOG.md und erhöht die Version des Pakets.
5.  Sie können dies beliebig oft wiederholen. Wenn Sie bereit sind, die neueste Major-Version ohne Beta-Tag zu veröffentlichen, müssen Sie einen PR vom Branch `beta` zum Branch `main` erstellen. Beachten Sie, dass es normal ist, dass Ihre Paketversion ein Beta-Tag hat. Der Roboter weiß das und passt es entsprechend an. `3.0.0-beta.0` wird zu `3.0.0`.

### Release-Ablauf für frühere Major-Versionen

Wenn Sie eine neue Version in einer früheren Major-Version veröffentlichen möchten, nachdem Sie sie in `main` committet haben, gehen Sie wie folgt vor:

1.  Aktualisieren Sie den entsprechenden Branch. Die Branch-Namen für frühere Major-Releases sind:
    1.  `version-1.x.x/fixes` - für Major 1.x.x
    2.  `version-2.x.x` - für Major 2.x.x
2.  Erstellen Sie einen neuen Branch von dem vorherigen Major-Release-Branch.
3.  Cherry-picken Sie Ihren Commit aus dem Branch `main`.
4.  Erstellen Sie einen PR, holen Sie sich die Genehmigung und mergen Sie ihn in den vorherigen Major-Release-Branch.
5.  Squash und merge Ihren PR (Es ist wichtig, eine neue Version mit Github-Actions zu veröffentlichen).
6.  Warten Sie, bis der Roboter einen PR mit einer neuen Version des Pakets und Informationen zu Ihren Änderungen in CHANGELOG.md erstellt. Sie können den Prozess im [Actions-Tab](https://github.com/gravity-ui/page-constructor/actions) verfolgen.
7.  Überprüfen Sie Ihre Änderungen in CHANGELOG.md und genehmigen Sie den PR des Roboters.
8.  Squash und merge den PR. Sie können den Release-Prozess im [Actions-Tab](https://github.com/gravity-ui/page-constructor/actions) verfolgen.

## Page Constructor Editor

Der Editor bietet eine Benutzeroberfläche zur Verwaltung von Seiteninhalten mit Echtzeit-Vorschau.

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
```

Dieses Projekt enthält eine umfassende **Memory Bank** – eine Sammlung von Markdown-Dokumentationsdateien, die detaillierte Informationen über die Architektur, Komponenten und Nutzungsmuster des Projekts liefern. Die Memory Bank ist besonders nützlich bei der Arbeit mit KI-Agenten, da sie strukturierte Informationen enthält über:

- **Projektübersicht**: Kernanforderungen, Ziele und Kontext
- **Komponentendokumentation**: Detaillierte Anleitungen zur Nutzung aller Komponenten
- **Systemarchitektur**: Technische Muster und Designentscheidungen
- **Entwicklungsfortschritt**: Aktueller Status und Implementierungsdetails

### Nutzung der Memory Bank

Die Memory Bank befindet sich im Verzeichnis `memory-bank/` und besteht aus regulären Markdown-Dateien, die wie jede andere Dokumentation gelesen werden können:

- `projectbrief.md` - Grundlagendokument mit Kernanforderungen
- `productContext.md` - Projektzweck und Ziele der Benutzererfahrung
- `systemPatterns.md` - Architektur und technische Entscheidungen
- `techContext.md` - Technologien, Einrichtung und Einschränkungen
- `activeContext.md` - Aktueller Arbeitsfokus und kürzliche Änderungen
- `progress.md` - Implementierungsstatus und bekannte Probleme
- `usage/` - Komponentenspezifische Nutzungdokumentation
- `storybookComponents.md` - Details zur Storybook-Integration

### Für KI-Agenten

Bei der Arbeit mit KI-Agenten an diesem Projekt dient die Memory Bank als umfassende Wissensbasis, die Agenten hilft zu verstehen:

- Projektstruktur und Muster
- Komponenten-APIs und Nutzungsbeispiele
- Entwicklungsworkflows und Best Practices
- Aktueller Implementierungsstatus und nächste Schritte

KI-Agenten können diese Dateien lesen, um sich schnell mit dem Projektkontext vertraut zu machen und fundiertere Entscheidungen über Codeänderungen und Implementierungen zu treffen.

## Tests

Umfassende Dokumentation ist unter dem bereitgestellten [Link](./test-utils/docs/README.md) verfügbar.