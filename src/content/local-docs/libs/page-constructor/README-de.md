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

[Page Constructor Builder](https://github.com/gravity-ui/page-constructor-builder) – ein Kommandozeilen-Dienstprogramm zum Erstellen statischer Seiten aus YAML-Konfigurationen mit @gravity-ui/page-constructor

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
  locale?: LocaleContextProps; // Informationen über die Sprache und Domain (wird beim Generieren und Formatieren von Links verwendet).
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

```markdown
interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}
```

### Server-Utilities

Das Paket stellt eine Reihe von Server-Utilities zur Transformation Ihrer Inhalte bereit.

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

Intern wird ein Paket verwendet, um Yandex Flavored Markdown in HTML zu transformieren – `diplodoc/transfrom`, daher ist es auch eine Peer-Abhängigkeit.

Sie können nützliche Utilities auch dort verwenden, wo Sie sie benötigen, zum Beispiel in Ihren benutzerdefinierten Komponenten.

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

### Detaillierte Dokumentation zu Server-Utilities und Transformatoren

Für eine umfassende Anleitung zur Verwendung von Server-Utilities, einschließlich detaillierter Erklärungen und fortgeschrittener Anwendungsfälle, besuchen Sie das [zusätzliche Kapitel zur Verwendung von Server-Utilities](./docs/data-preparation.md).

### Benutzerdefinierte Blöcke

Der Seitenkonstruktor ermöglicht die Verwendung von Blöcken, die von Ihrer Anwendung benutzerdefiniert wurden. Blöcke sind reguläre React-Komponenten.

So übergeben Sie benutzerdefinierte Blöcke an den Konstruktor:

1. Erstellen Sie einen Block in Ihrer Anwendung.

2. Erstellen Sie in Ihrem Code ein Objekt mit dem Blocktyp (String) als Schlüssel und einer importierten Blockkomponente als Wert.

3. Übergeben Sie das erstellte Objekt an den Parameter `custom.blocks`, `custom.headers` oder `custom.subBlocks` der `PageConstructor`-Komponente (`custom.headers` gibt die Block-Header an, die separat über dem allgemeinen Inhalt gerendert werden).

4. Nun können Sie den erstellten Block in den Eingabedaten (dem `content`-Parameter) verwenden, indem Sie seinen Typ und seine Daten angeben.

Um Mixins und Konstruktor-Stilvariablen bei der Erstellung benutzerdefinierter Blöcke zu verwenden, fügen Sie einen Import in Ihre Datei hinzu:

```css
@import '~@gravity-ui/page-constructor/styles/styles.scss';
```

Um die Standard-Schriftart zu verwenden, fügen Sie einen Import in Ihre Datei hinzu:

```css
@import '~@gravity-ui/page-constructor/styles/fonts.scss';
```

### Ladbare Blöcke

Manchmal ist es notwendig, dass ein Block sich selbst basierend auf zu ladenden Daten rendert. In diesem Fall werden ladbare Blöcke verwendet.

Um benutzerdefinierte `loadable`-Blöcke hinzuzufügen, übergeben Sie der `PageConstructor` die Eigenschaft `custom.loadable` mit Datenquellennamen (String) für die Komponente als Schlüssel und einem Objekt als Wert.

```typescript
export interface LoadableConfigItem {
  fetch: FetchLoadableData; // Methode zum Laden von Daten
  component: React.ComponentType; // Block zum Übergeben geladener Daten
}

type FetchLoadableData<TData = any> = (blockKey: string) => Promise<TData>;
```

### Grid

Der Seitenkonstruktor verwendet das `bootstrap`-Grid und dessen Implementierung basierend auf React-Komponenten, die Sie in Ihrem eigenen Projekt verwenden können (auch separat vom Konstruktor).

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

Die Seitenavigation kann auch separat vom Konstruktor verwendet werden:

```jsx
import {Navigation} from '@gravity-ui/page-constructor';

const Page= ({data, logo}: React.PropsWithChildren<PageProps>) => <Navigation data={data} logo={logo} />;
```

### Blöcke

Jeder Block ist eine atomare Top-Level-Komponente. Sie sind im Verzeichnis `src/units/constructor/blocks` gespeichert.

### Unterblöcke

Unterblöcke sind Komponenten, die in der `children`-Eigenschaft eines Blocks verwendet werden können. In einer Konfiguration wird eine Liste von Kindkomponenten aus Unterblöcken angegeben. Nach dem Rendern werden diese Unterblöcke als `children` an den Block übergeben.

### Hinzufügen eines neuen Blocks zum `page-constructor`

1. Erstellen Sie im Verzeichnis `src/blocks` oder `src/sub-blocks` einen Ordner mit dem Code des Blocks oder Unterblocks.

2. Fügen Sie den Namen des Blocks oder Unterblocks dem Enum `BlockType` oder `SubBlockType` hinzu und beschreiben Sie seine Eigenschaften in der Datei `src/models/constructor-items/blocks.ts` oder `src/models/constructor-items/sub-blocks.ts` ähnlich wie bei den vorhandenen.

3. Fügen Sie einen Export für den Block in der Datei `src/blocks/index.ts` und für den Unterblock in der Datei `src/sub-blocks/index.ts` hinzu.

4. Fügen Sie eine neue Komponente oder einen Block dem Mapping in `src/constructor-items.ts` hinzu.

5. Fügen Sie einen Validator für den neuen Block hinzu:

   - Fügen Sie im Block- oder Unterblockverzeichnis eine Datei `schema.ts` hinzu. Beschreiben Sie in dieser Datei einen Parameter-Validator für die Komponente im [`json-schema`](http://json-schema.org/)-Format.
   - Exportieren Sie ihn in der Datei `schema/validators/blocks.ts` oder `schema/validators/sub-blocks.ts`.
   - Fügen Sie ihn in `enum` oder `selectCases` in der Datei `schema/index.ts` hinzu.

6. Fügen Sie im Blockverzeichnis die Datei `README.md` mit einer Beschreibung der Eingabeparameter hinzu.
7. Fügen Sie im Blockverzeichnis eine Storybook-Demo im Ordner `__stories__` hinzu. Alle Demo-Inhalte für die Story sollten in `data.json` im Story-Verzeichnis platziert werden. Die generische `Story` muss den Typ der Block-Props akzeptieren, andernfalls werden falsche Block-Props in Storybook angezeigt.
8. Fügen Sie eine Blockdaten-Vorlage zum Ordner `src/editor/data/templates/` hinzu, der Dateiname sollte dem Blocktyp entsprechen.
9. (Optional) Fügen Sie ein Block-Vorschau-Symbol zum Ordner `src/editor/data/previews/` hinzu, der Dateiname sollte dem Blocktyp entsprechen.

### Themes

Der `PageConstructor` ermöglicht die Verwendung von Themes: Sie können unterschiedliche Werte für einzelne Blockeigenschaften festlegen, abhängig vom im App ausgewählten Theme.

So fügen Sie einem Theme-Support für eine Blockeigenschaft hinzu:

1. Definieren Sie in der Datei `models/blocks.ts` den Typ der jeweiligen Blockeigenschaft mithilfe des `ThemeSupporting<T>`-Generics, wobei `T` der Typ der Eigenschaft ist.

2. Rufen Sie in der Datei mit der `react`-Komponente des Blocks den Wert der Eigenschaft mit dem Theme über den `getThemedValue`-Hook und den `useTheme`-Hook ab (siehe Beispiele im Block `MediaBlock.tsx`).

3. Fügen Sie Theme-Support zum Eigenschaftsvalidator hinzu: Wickeln Sie in der `schema.ts`-Datei des Blocks diese Eigenschaft in `withTheme` ein.

### i18n

Der `page-constructor` ist eine `uikit-basierte` Bibliothek, und wir verwenden eine Instanz von `i18n` aus uikit. Um die Internationalisierung einzurichten, müssen Sie nur `configure` von uikit verwenden:

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

### Maps

Um Karten zu verwenden, fügen Sie den Kartentyp, `scriptSrc` und `apiKey` im Feld `mapContext` in `PageConstructorProvider` ein.

Sie können Umgebungsvariablen für den Entwicklungsmodus in der Datei `.env.development` im Stammverzeichnis des Projekts definieren.
`STORYBOOK_GMAP_API_KEY` - apiKey für Google Maps

### Analytics

#### Initialisierung

Um mit der Verwendung von Analytics zu beginnen, übergeben Sie einen Handler an den Konstruktor. Der Handler muss auf Projektseite erstellt werden. Er empfängt drei Ereignisklassen:
```

- **Standard-Ereignisse** sind generische Page Constructor-Ereignisse, die für Interaktionen mit Schaltflächen, Links, Navigation und Steuerelementen generiert werden. Setzen Sie `autoEvents.enabled` auf `true`, um sie auszulösen.
- **Erweiterte Ereignisse** sind registrierte Ereignisse, die von einer zusammensetzenden Bibliothek bereitgestellt werden. Das Vorhandensein von `autoEvents.extendedEvents` aktiviert sie unabhängig von `enabled` und fügt optional ein Präfix und einen Zähler hinzu.
- **Benutzerdefinierte Ereignisse** werden von Konsumenten über `analyticsEvents` bereitgestellt. Die Konfiguration der automatischen Ereignisse ändert sie nicht.

Die Objektform ist die bevorzugte Konfiguration:

```ts
function sendEvents(events: MyEventType []) {
  ...
}

<PageConstructorProvider
    ...

    analytics={{
        sendEvents,
        autoEvents: {
            enabled: true,
            extendedEvents: {
                prefix: 'LIBRARY_',
                counter: 'secondary',
            },
        },
    }}

    ...
/>
```

```ts
type ExtendedEventsConfig = {
  prefix?: string;
  counter?: string;
};

type AutoEventsConfig = {
  enabled: boolean;
  extendedEvents?: ExtendedEventsConfig;
};
```

Die ältere boolesche Form wird aus Gründen der Abwärtskompatibilität weiterhin unterstützt: `true` entspricht `{enabled: true}` und `false` entspricht `{enabled: false}`. Wenn `autoEvents` weggelassen wird, sind sowohl Standard- als auch erweiterte Ereignisse deaktiviert. Ein `extendedEvents`-Objekt aktiviert bereitgestellte erweiterte Ereignisse, auch wenn `enabled` `false` ist.

Erweiterte Ereignisse müssen `type: 'extended-event'` haben. Ihr Präfix wird genau wie konfiguriert verkettet, ohne Groß-/Kleinschreibung, Trennzeichen oder Leerzeichen zu ändern. Wenn `counter` gesetzt ist, definiert es `counters.include` für das erweiterte Ereignis:

```ts
// Bereitgestelltes Ereignis
{name: 'REGISTERED_CLICK', type: 'extended-event'}

// Ereignis, das mit der obigen Konfiguration an sendEvents übergeben wird
{
  name: 'LIBRARY_REGISTERED_CLICK',
  type: 'extended-event',
  counters: {include: ['secondary']},
}
```

Ereignisse werden in dieser Reihenfolge gesendet: zuerst das generierte Standardereignis (wenn aktiviert), gefolgt von bereitgestellten erweiterten und benutzerdefinierten Ereignissen in ihrer ursprünglichen Reihenfolge. Erweiterte Ereignisse werden weggelassen, wenn `extendedEvents` nicht konfiguriert ist. Jeglicher spezifische zusätzliche Kontext für Interaktionen wird zuletzt in jedes ausgelöste Ereignis zusammengeführt.

Ein Ereignisobjekt hat nur ein erforderliches Feld – `name`. Es hat auch vordefinierte Felder, die zur Verwaltung komplexer Logik dienen. Zum Beispiel kann `counter.include` helfen, ein Ereignis in einem bestimmten Zähler zu senden, wenn mehrere Analysensysteme in einem Projekt verwendet werden.

```ts
type AnalyticsEvent<T = {}> = T & {
  name: string;
  type?: string;
  counters?: AnalyticsCounters;
  context?: string;
};
```

Es ist möglich, einen für ein Projekt benötigten Ereignistyp zu konfigurieren.

```ts
type MyEventType = AnalyticsEvent<{
  [key: string]?: string; // nur ein 'string'-Typ wird unterstützt
}>;
```

#### Zählerselektor

Es ist möglich, ein Ereignis so zu konfigurieren, an welches Analysensystem es gesendet werden soll.

```ts
type AnalyticsCounters = {
  include?: string[]; // Array von Analyse-Zähler-IDs, die angewendet werden
  exclude?: string[]; // Array von Analyse-Zähler-IDs, die nicht angewendet werden
};
```

#### Kontextparameter

Übergeben Sie den `context`-Wert, um den Ort im Projekt zu definieren, an dem ein Ereignis ausgelöst wird.

Verwenden Sie den unten stehenden Selektor oder erstellen Sie eine Logik, die den Projektanforderungen entspricht.

```ts
// analyticsHandler.ts
if (isCounterAllowed(counterName, counters)) {
  analyticsCounter.reachGoal(counterName, name, parameters);
}
```

#### Reservierte Ereignistypen

Mehrere vordefinierte Ereignistypen werden verwendet, um automatisch konfigurierte Ereignisse zu markieren. Verwenden Sie die Typen beispielsweise zum Filtern von Standardereignissen.

```ts
enum PredefinedEventTypes {
  Default = 'default-event', // Standardereignisse, die bei jedem Button-Klick ausgelöst werden
  Extended = 'extended-event', // Ereignisse, die von einer zusammensetzenden Bibliothek bereitgestellt werden
  Play = 'play', // React Player-Ereignis
  Stop = 'stop', // React Player-Ereignis
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

1. `fix`: Ein Commit vom Typ `fix` behebt einen Fehler in Ihrem Code (dies entspricht PATCH in der semantischen Versionierung).
2. `feat`: Ein Commit vom Typ `feat` führt eine neue Funktion in den Code ein (dies entspricht MINOR in der semantischen Versionierung).
3. `BREAKING CHANGE`: Ein Commit, der eine Fußzeile `BREAKING CHANGE:` enthält oder nach Typ/Scope ein `!` anhängt, führt eine brechende API-Änderung ein (entspricht MAJOR in der semantischen Versionierung). Ein `BREAKING CHANGE` kann Teil von Commits jeglichen Typs sein.
4. Um die Version des Release-Pakets manuell festzulegen, müssen Sie `Release-As: <version>` zu Ihrer Commit-Nachricht hinzufügen, z. B.

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

Alle Informationen finden Sie [hier](https://www.conventionalcommits.org/en/v1.0.0/).

Wenn Sie die Genehmigung Ihres Pull-Requests von den Code-Owners erhalten und alle Prüfungen bestanden haben, gehen Sie wie folgt vor:

1. Überprüfen Sie, ob ein Release-Pull-Request vom Roboter mit Änderungen von einem anderen Mitwirkenden vorhanden ist (sieht aus wie `chore(main): release 0.0.0`). Wenn er vorhanden ist, prüfen Sie, warum er nicht gemergt wurde. Wenn der Mitwirkende einer gemeinsamen Version zustimmt, fahren Sie mit dem nächsten Schritt fort. Wenn nicht, bitten Sie ihn, seine Version zu releasen, und fahren Sie dann mit dem nächsten Schritt fort.
2. Squash und mergen Sie Ihren PR (Es ist wichtig, eine neue Version mit Github-Actions zu releasen).
3. Warten Sie, bis der Roboter einen PR mit einer neuen Version des Pakets und Informationen zu Ihren Änderungen in CHANGELOG.md erstellt. Sie können den Prozess im Tab [Actions](https://github.com/gravity-ui/page-constructor/actions) sehen.
4. Überprüfen Sie Ihre Änderungen in CHANGELOG.md und genehmigen Sie den PR des Roboters.
5. Squash und mergen Sie den PR. Sie können den Release-Prozess im Tab [Actions](https://github.com/gravity-ui/page-constructor/actions) sehen.

### Alpha-Versionen Release

Wenn Sie eine Alpha-Version des Pakets von Ihrem Branch releasen möchten, können Sie dies manuell tun:

1. Gehen Sie zum Tab Actions.
2. Wählen Sie auf der linken Seite des Bildschirms den Workflow "Release alpha version".
3. Auf der rechten Seite sehen Sie die Schaltfläche "Run workflow". Hier können Sie den Branch auswählen.
4. Sie sehen auch ein Feld für die manuelle Version. Wenn Sie zum ersten Mal ein Alpha in Ihrem Branch releasen, lassen Sie dieses Feld leer. Nach dem ersten Release müssen Sie die neue Version manuell festlegen, da wir package.json nicht ändern, falls der Branch sehr bald abläuft. Verwenden Sie das Präfix `alpha` in Ihrer manuellen Version, andernfalls erhalten Sie einen Fehler.
5. Klicken Sie auf "Run workflow" und warten Sie, bis die Aktion abgeschlossen ist. Sie können Versionen so oft releasen, wie Sie möchten, aber missbrauchen Sie es nicht und releasen Sie Versionen nur, wenn Sie sie wirklich benötigen. Verwenden Sie in anderen Fällen [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack).

### Beta-Major-Versionen Release

Wenn Sie eine neue Major-Version releasen möchten und wahrscheinlich Beta-Versionen vor der stabilen Version benötigen, gehen Sie wie folgt vor:

1. Erstellen oder aktualisieren Sie den Branch `beta`.
2. Fügen Sie dort Ihre Änderungen hinzu.
3. Wenn Sie bereit für eine neue Beta-Version sind, releasen Sie sie manuell mit einem leeren Commit (oder Sie können diese Commit-Nachricht mit einer Fußzeile zum letzten Commit hinzufügen):

```bash
git commit -m 'fix: last commit

Release-As: 3.0.0-beta.0' --allow-empty
```

4. Der Release-Roboter erstellt einen neuen PR für den Branch `beta` mit der aktualisierten CHANGELOG.md und erhöht die Version des Pakets.
5. Sie können dies beliebig oft wiederholen. Wenn Sie bereit sind, die neueste Hauptversion ohne Beta-Tag zu veröffentlichen, müssen Sie einen PR vom Branch `beta` zum Branch `main` erstellen. Beachten Sie, dass es normal ist, dass Ihre Paketversion mit einem Beta-Tag versehen ist. Der Roboter weiß das und ändert es entsprechend. `3.0.0-beta.0` wird zu `3.0.0`.

### Release-Flow für frühere Hauptversionen

Wenn Sie eine neue Version in einer früheren Hauptversion veröffentlichen möchten, nachdem Sie sie in main committet haben, gehen Sie wie folgt vor:

1. Aktualisieren Sie den erforderlichen Branch. Die Branch-Namen für frühere Hauptversionen sind:
   1. `version-1.x.x/fixes` - für Hauptversion 1.x.x
   2. `version-2.x.x` - für Hauptversion 2.x.x
2. Erstellen Sie einen neuen Branch basierend auf dem Branch der früheren Hauptversion.
3. Cherry-picken Sie Ihren Commit vom Branch `main`.
4. Erstellen Sie einen PR, holen Sie sich die Genehmigung und mergen Sie ihn in den Branch der früheren Hauptversion.
5. Squash and merge Sie Ihren PR (Es ist wichtig, eine neue Version mit Github-Actions zu veröffentlichen).
6. Warten Sie, bis der Roboter einen PR mit der neuen Version des Pakets und Informationen zu Ihren Änderungen in CHANGELOG.md erstellt. Sie können den Prozess im Tab [Actions](https://github.com/gravity-ui/page-constructor/actions) verfolgen.
7. Überprüfen Sie Ihre Änderungen in CHANGELOG.md und genehmigen Sie den PR des Roboters.
8. Squash and merge Sie den PR. Sie können den Release-Prozess im Tab [Actions](https://github.com/gravity-ui/page-constructor/actions) verfolgen.

## Page constructor editor

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

Dieses Projekt enthält eine umfassende **Memory Bank** – eine Sammlung von Markdown-Dokumentationsdateien, die detaillierte Informationen über die Architektur, Komponenten und Nutzungsmuster des Projekts enthalten. Die Memory Bank ist besonders nützlich bei der Arbeit mit KI-Agenten, da sie strukturierte Informationen enthält über:

- **Projektübersicht**: Kernanforderungen, Ziele und Kontext
- **Komponentendokumentation**: Detaillierte Anleitungen zur Verwendung aller Komponenten
- **Systemarchitektur**: Technische Muster und Designentscheidungen
- **Entwicklungsfortschritt**: Aktueller Status und Implementierungsdetails

### Verwendung der Memory Bank

Die Memory Bank befindet sich im Verzeichnis `memory-bank/` und besteht aus regulären Markdown-Dateien, die wie jede andere Dokumentation gelesen werden können:

- `projectbrief.md` - Grundlegendes Dokument mit Kernanforderungen
- `productContext.md` - Zweck des Projekts und Ziele der Benutzererfahrung
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

Eine Bibliothek zum Rendern ganzer Webseiten oder Seitensektionen aus deklarativen JSON/YAML-Konfigurationen, unter Verwendung einer Reihe von fertigen, sortierbaren Blöcken – greifen Sie darauf zurück, um Marketing-/Landingpages zu erstellen, nicht allgemeine Anwendungs-UIs.

### Wann zu verwenden

- Datengesteuerte Seiten: Rendern einer `content`-Konfiguration von typisierten Blöcken mit `PageConstructor`, die in `PageConstructorProvider` eingewickelt sind.
- Marketing-, Landing- und Dokumentationsseiten, die aus vorgefertigten Blöcken (Header, Medien, Karten usw.) zusammengestellt sind.
- Serverseitige YFM-Verarbeitung von Blocktext über die Dienstprogramme `contentTransformer`, `fullTransform` von `@gravity-ui/page-constructor/server` (`@diplodoc/transform` ist eine erforderliche Peer-Abhängigkeit).
- Wiederverwendung nur des responsiven Grids (`Grid`/`Row`/`Col`) oder der `Navigation`-Komponente eigenständig.

### Wann nicht zu verwenden

- Allgemeine Anwendungs-UIs (Schaltflächen, Formulare, Modals) – verwenden Sie [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Bearbeiten von Markdown/YFM-Inhalten – verwenden Sie [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor).
- App-Navigations-Shells (seitlicher Header) – verwenden Sie [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation); die `Navigation`-Komponente dieses Pakets ist eine Top-Navigation auf Seitenebene.

### Häufige Fallstricke

- **`PageConstructor` muss in `PageConstructorProvider` eingewickelt sein.** Das Rendern ohne diesen Wrapper bricht den Kontext (Locale, Theme, SSR, Analytics).
- **Die `content`-Prop ist `content`, geformt als `{blocks: [...]}`.** Jedes Blockobjekt benötigt einen `type`, der einem bekannten Block entspricht, plus seine Datenfelder; es gibt keine `data`/`config`-Prop.
- **YFM in Blocktext benötigt serverseitige Verarbeitung.** Markdown-ähnliche Felder werden als Klartext gerendert, es sei denn, Sie verarbeiten den Inhalt über `contentTransformer`/`fullTransform` aus `@gravity-ui/page-constructor/server`; `@diplodoc/transform` ist eine erforderliche Peer-Abhängigkeit.
- **Importieren Sie die SCSS-Styles.** Fügen Sie `@gravity-ui/page-constructor/styles/styles.scss` (SCSS, nicht CSS) hinzu; benutzerdefinierte Blöcke importieren dieselbe Datei, um Mixins/Variablen wiederzuverwenden.
- **Vite benötigt `vite-plugin-dynamic-import`.** Dynamische Blockimporte schlagen unter Vite ohne dieses Plugin fehl.

## Dokumentation für KI-Agenten

Agentenlesbare Dokumentation für die installierte Version befindet sich in `node_modules/@gravity-ui/page-constructor/build/docs/INDEX.md`.