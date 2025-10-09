# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Page Constructor

`Page-constructor` ist eine Bibliothek zum Rendern von Webseiten oder deren Teilen basierend auf `JSON`-Daten (Unterstützung für das `YAML`-Format wird später hinzugefügt).

Beim Erstellen von Seiten wird ein komponentenbasiertes Vorgehen verwendet: Eine Seite wird aus einer Reihe fertiger Blöcke aufgebaut, die in beliebiger Reihenfolge platziert werden können. Jeder Block hat einen bestimmten Typ und eine Reihe von Eingabeparametern.

Das Format der Eingabedaten und die Liste der verfügbaren Blöcke finden Sie in der [Dokumentation](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs).

## Installation

```shell
npm install @gravity-ui/page-constructor
```

## Schnelleinstieg

Zuerst benötigen wir ein React-Projekt und eine Art von Server. Sie können beispielsweise ein React-Projekt mit Vite und einem Express-Server erstellen oder eine Next.js-Anwendung erstellen – diese verfügt über eine Client- und eine Serverseite gleichzeitig.

Installieren Sie die erforderlichen Abhängigkeiten:

```shell
npm install @gravity-ui/page-constructor @diplodoc/transform @gravity-ui/uikit
```

Fügen Sie den `Page Constructor` zur Seite ein. Damit er korrekt funktioniert, muss er in einen `PageConstructorProvider` eingepackt sein:

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

```html
<a href="https://github.com/gravity-ui/page-constructor/blob/main/README.md">English</a>
<a href="https://github.com/gravity-ui/page-constructor/blob/main/README.de.md">Deutsch</a>
```

# @gravity-ui/page-constructor

`PageConstructor` — это React-компонент, который позволяет создавать страницы из готовых блоков. Он упрощает разработку сложных страниц, предоставляя гибкий механизм для сборки контента из различных компонентов.

## Установка

```bash
npm install @gravity-ui/page-constructor
# or
yarn add @gravity-ui/page-constructor
```

## Использование

```jsx
import {PageConstructor} from '@gravity-ui/page-constructor';
import '@gravity-ui/page-constructor/styles/styles.scss'; // Импорт стилей

const Page = ({data}) => <PageConstructor content={data} />;
```

## Серверные утилиты

Пакет предоставляет набор серверных утилит для трансформации вашего контента.

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

Под капотом используется пакет для трансформации Yandex Flavored Markdown в HTML — `diplodoc/transfrom`, поэтому он также является peer dependency.

Вы также можете использовать полезные утилиты там, где вам это необходимо, например, в ваших пользовательских компонентах.

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

Больше утилит вы можете найти в этом [разделе](https://github.com/gravity-ui/page-constructor/tree/main/src/text-transform).

### Подробная документация по серверным утилитам и трансформерам

Для получения исчерпывающего руководства по использованию серверных утилит, включая подробные объяснения и расширенные сценарии использования, посетите [дополнительную главу по использованию серверных утилит](./docs/data-preparation.md).

## Пользовательские блоки

Конструктор страниц позволяет использовать блоки, которые определяются пользователем в своем приложении. Блоки — это обычные React-компоненты.

Чтобы передать пользовательские блоки в конструктор:

1. Создайте блок в вашем приложении.

2. В вашем коде создайте объект, где ключом будет тип блока (строка), а значением — импортированный компонент блока.

3. Передайте созданный объект в параметр `custom.blocks`, `custom.headers` или `custom.subBlocks` компонента `PageConstructor` (`custom.headers` определяет заголовки блоков, которые будут отображаться отдельно над основным контентом).

4. Теперь вы можете использовать созданный блок во входных данных (параметр `content`), указав его тип и данные.

Чтобы использовать миксины и переменные стилей конструктора при создании пользовательских блоков, добавьте импорт в ваш файл:

```css
@import '~@gravity-ui/page-constructor/styles/styles.scss';
```

Чтобы использовать шрифт по умолчанию, добавьте импорт в ваш файл:

```css
@import '~@gravity-ui/page-constructor/styles/fonts.scss';
```

## Загружаемые блоки

Иногда бывает необходимо, чтобы блок сам отрисовывал себя на основе загружаемых данных. В этом случае используются загружаемые блоки.

Чтобы добавить пользовательские `loadable` блоки, передайте в `PageConstructor` свойство `custom.loadable`, где ключами будут имена источников данных (строка), а значениями — объект.

```typescript
export interface LoadableConfigItem {
  fetch: FetchLoadableData; // метод загрузки данных
  component: React.ComponentType; // блок для передачи загруженных данных
}

type FetchLoadableData<TData = any> = (blockKey: string) => Promise<TData>;
```

## Сетка

Конструктор страниц использует сетку `bootstrap` и ее реализацию на основе React-компонентов, которые вы можете использовать в своем проекте (в том числе отдельно от конструктора).

Пример использования:

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

## Навигация

Навигацию по странице также можно использовать отдельно от конструктора:

```jsx
import {Navigation} from '@gravity-ui/page-constructor';

const Page= ({data, logo}: React.PropsWithChildren<PageProps>) => <Navigation data={data} logo={logo} />;
```

## Блоки

Каждый блок — это атомарный компонент верхнего уровня. Они хранятся в директории `src/units/constructor/blocks`.

## Под-блоки

Под-блоки — это компоненты, которые могут использоваться в свойстве `children` блока. В конфигурации указывается список дочерних компонентов из под-блоков. При рендеринге эти под-блоки передаются в блок как `children`.

## Как добавить новый блок в `page-constructor`

1. В директории `src/blocks` или `src/sub-blocks` создайте папку с кодом блока или под-блока.

2. Добавьте имя блока или под-блока в перечисление `BlockType` или `SubBlockType` и опишите его свойства в файле `src/models/constructor-items/blocks.ts` или `src/models/constructor-items/sub-blocks.ts` аналогично существующим.

3. Добавьте экспорт для блока в файл `src/blocks/index.ts`, а для под-блока — в `src/sub-blocks/index.ts`.

4. Добавьте новый компонент или блок в маппинг в `src/constructor-items.ts`.

5. Добавьте валидатор для нового блока:

   - Создайте файл `schema.ts` в директории блока или под-блока. В этом файле опишите валидатор параметров для компонента в формате [`json-schema`](http://json-schema.org/).
   - Экспортируйте его в файле `schema/validators/blocks.ts` или `schema/validators/sub-blocks.ts`.
   - Добавьте его в `enum` или `selectCases` в файле `schema/index.ts`.

6. В директории блока добавьте файл `README.md` с описанием входных параметров.
7. В директории блока добавьте демо storybook в папку `__stories__`. Весь демонстрационный контент для story должен быть размещен в `data.json` в директории story. Универсальный `Story` должен принимать тип пропсов блока, иначе в Storybook будут отображаться некорректные пропсы блока.
8. Добавьте шаблон данных блока в папку `src/editor/data/templates/`, имя файла должно совпадать с типом блока.
9. (опционально) Добавьте иконку предварительного просмотра блока в папку `src/editor/data/previews/`, имя файла должно совпадать с типом блока.

## Темы

`PageConstructor` позволяет использовать темы: вы можете устанавливать разные значения для отдельных свойств блоков в зависимости от выбранной в приложении темы.

Чтобы добавить тему к свойству блока:

1. В файле `models/blocks.ts` определите тип соответствующего свойства блока с помощью дженерика `ThemeSupporting<T>`, где `T` — это тип свойства.

2. В файле с `react`-компонентом блока получите значение свойства с учетом темы с помощью хука `getThemedValue` и `useTheme` (см. примеры в блоке `MediaBlock.tsx`).

3. Добавьте поддержку темы в валидатор свойства: в файле `schema.ts` блока оберните это свойство в `withTheme`.

## i18n

`page-constructor` — это библиотека на основе `uikit`, и мы используем экземпляр `i18n` из uikit. Для настройки интернационализации вам достаточно использовать `configure` из uikit:

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

## Карты

Для использования карт укажите тип карты, `scriptSrc` и `apiKey` в поле `mapContext` в `PageConstructorProvider`.

Вы можете определить переменные окружения для режима разработки в файле `.env.development` в корне проекта.
`STORYBOOK_GMAP_API_KEY` — apiKey для google maps.

## Аналитика

### Инициализация

Чтобы начать использовать любую аналитику, передайте обработчик в конструктор. Обработчик должен быть создан на стороне проекта. Обработчик получит объекты событий `default` и `custom`. Переданный обработчик будет срабатывать при кликах по кнопкам, ссылкам, навигации и элементам управления. Поскольку для обработки всех событий используется один обработчик, обратите внимание на то, как обрабатывать различные события при создании обработчика. Предусмотрены предопределенные поля, которые помогут вам построить сложную логику.

Передайте `autoEvents: true` в конструктор, чтобы автоматически настроить срабатывание событий.

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

Ein Event-Objekt hat nur ein erforderliches Feld – `name`. Es gibt auch vordefinierte Felder, die zur Verwaltung komplexer Logik dienen. Zum Beispiel kann `counter.include` helfen, ein Event in einem bestimmten Zähler zu senden, wenn mehrere Analytiksysteme in einem Projekt verwendet werden.

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

Es ist möglich, ein Event so zu konfigurieren, an welches Analytiksystem es gesendet werden soll.

```ts
type AnalyticsCounters = {
  include?: string[]; // Array von Analytik-Zähler-IDs, die angewendet werden
  exclude?: string[]; // Array von Analytik-Zähler-IDs, die nicht angewendet werden
};
```

#### `context`-Parameter

Übergeben Sie einen `context`-Wert, um den Ort im Projekt zu definieren, an dem ein Event ausgelöst wird.

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

1.  `fix`: Ein Commit vom Typ `fix` behebt einen Fehler in Ihrem Code (dies korreliert mit PATCH in der semantischen Versionierung).
2.  `feat`: Ein Commit vom Typ `feat` führt eine neue Funktion in den Code ein (dies korreliert mit MINOR in der semantischen Versionierung).
3.  `BREAKING CHANGE`: Ein Commit, der einen `BREAKING CHANGE:`-Footer hat oder nach dem Typ/Scope ein `!` anhängt, führt eine nicht abwärtskompatible API-Änderung ein (korreliert mit MAJOR in der semantischen Versionierung). Ein `BREAKING CHANGE` kann Teil von Commits jeglichen Typs sein.
4.  Um die Version des Release-Pakets manuell festzulegen, müssen Sie `Release-As: <version>` zu Ihrer Commit-Nachricht hinzufügen, z. B.

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

Alle Informationen finden Sie [hier](https://www.conventionalcommits.org/en/v1.0.0/).

Wenn Sie die Genehmigung Ihres Pull-Requests von den Code-Owners erhalten und alle Checks bestanden haben, gehen Sie wie folgt vor:

1.  Prüfen Sie, ob ein Release-Pull-Request vom Roboter mit Änderungen von anderen Mitwirkenden vorhanden ist (sieht aus wie `chore(main): release 0.0.0`). Wenn ja, prüfen Sie, warum er nicht gemerged wurde. Wenn der Mitwirkende einer gemeinsamen Veröffentlichung zustimmt, fahren Sie mit dem nächsten Schritt fort. Wenn nicht, bitten Sie ihn, seine Version zu veröffentlichen, und fahren Sie dann mit dem nächsten Schritt fort.
2.  Squash and Merge (SQUASH) Sie Ihren PR (Es ist wichtig, eine neue Version mit Github-Actions zu veröffentlichen).
3.  Warten Sie, bis der Roboter einen PR mit einer neuen Version des Pakets und Informationen zu Ihren Änderungen in CHANGELOG.md erstellt. Sie können den Prozess auf [der Actions-Registerkarte](https://github.com/gravity-ui/page-constructor/actions) verfolgen.
4.  Überprüfen Sie Ihre Änderungen in CHANGELOG.md und genehmigen Sie den PR des Roboters.
5.  Squash and Merge (SQUASH) Sie den PR. Sie können den Release-Prozess auf [der Actions-Registerkarte](https://github.com/gravity-ui/page-constructor/actions) verfolgen.

### Alpha-Versionen veröffentlichen

Wenn Sie eine Alpha-Version des Pakets von Ihrem Branch veröffentlichen möchten, können Sie dies manuell tun:

1.  Gehen Sie zur Registerkarte "Actions".
2.  Wählen Sie auf der linken Seite den Workflow "Release alpha version".
3.  Auf der rechten Seite sehen Sie die Schaltfläche "Run workflow". Hier können Sie den Branch auswählen.
4.  Sie sehen auch ein Feld für die manuelle Version. Wenn Sie zum ersten Mal ein Alpha in Ihrem Branch veröffentlichen, lassen Sie dieses Feld leer. Nach der ersten Veröffentlichung müssen Sie die neue Version manuell festlegen, da wir die package.json nicht ändern, falls der Branch sehr bald abläuft. Verwenden Sie das Präfix `alpha` in Ihrer manuellen Version, andernfalls erhalten Sie einen Fehler.
5.  Klicken Sie auf "Run workflow" und warten Sie, bis die Aktion abgeschlossen ist. Sie können beliebig viele Versionen veröffentlichen, aber missbrauchen Sie es nicht und veröffentlichen Sie Versionen nur, wenn Sie sie wirklich benötigen. Verwenden Sie in anderen Fällen [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack).

### Beta-Major-Versionen veröffentlichen

Wenn Sie eine neue Major-Version veröffentlichen möchten und dafür wahrscheinlich Beta-Versionen vor einer stabilen Version benötigen, gehen Sie wie folgt vor:

1.  Erstellen oder aktualisieren Sie den Branch `beta`.
2.  Fügen Sie Ihre Änderungen dort hinzu.
3.  Wenn Sie bereit für eine neue Beta-Version sind, veröffentlichen Sie diese manuell mit einem leeren Commit (oder Sie können diese Commit-Nachricht mit einem Footer zum letzten Commit hinzufügen):

```bash
git commit -m 'fix: last commit

Release-As: 3.0.0-beta.0' --allow-empty
```

4.  "Release please" (Bitte veröffentlichen) erstellt einen neuen PR für den Branch `beta` mit aktualisiertem CHANGELOG.md und erhöht die Version des Pakets.
5.  Sie können dies beliebig oft wiederholen. Wenn Sie bereit sind, die neueste Major-Version ohne Beta-Tag zu veröffentlichen, müssen Sie einen PR vom Branch `beta` zum Branch `main` erstellen. Beachten Sie, dass es normal ist, dass Ihre Paketversion mit einem Beta-Tag versehen ist. Der Roboter weiß das und ändert es entsprechend. `3.0.0-beta.0` wird zu `3.0.0`.

### Release-Ablauf für frühere Major-Versionen

Wenn Sie eine neue Version in einer früheren Major-Version veröffentlichen möchten, nachdem Sie sie in `main` committet haben, gehen Sie wie folgt vor:

1.  Aktualisieren Sie den entsprechenden Branch. Die Branch-Namen für frühere Major-Releases sind:
    1.  `version-1.x.x/fixes` - für Major 1.x.x
    2.  `version-2.x.x` - für Major 2.x.x
2.  Erstellen Sie einen neuen Branch von dem vorherigen Major-Release-Branch.
3.  Cherry-picken Sie Ihren Commit vom Branch `main`.
4.  Erstellen Sie einen PR, erhalten Sie die Genehmigung und mergen Sie ihn in den vorherigen Major-Release-Branch.
5.  Squash and Merge (SQUASH) Sie Ihren PR (Es ist wichtig, eine neue Version mit Github-Actions zu veröffentlichen).
6.  Warten Sie, bis der Roboter einen PR mit einer neuen Version des Pakets und Informationen zu Ihren Änderungen in CHANGELOG.md erstellt. Sie können den Prozess auf [der Actions-Registerkarte](https://github.com/gravity-ui/page-constructor/actions) verfolgen.
7.  Überprüfen Sie Ihre Änderungen in CHANGELOG.md und genehmigen Sie den PR des Roboters.
8.  Squash and Merge (SQUASH) Sie den PR. Sie können den Release-Prozess auf [der Actions-Registerkarte](https://github.com/gravity-ui/page-constructor/actions) verfolgen.

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
```

Hier ist die Übersetzung der README-Datei ins Deutsche:

```markdown
@gravity/uikit

Dieses Projekt beinhaltet eine umfassende **Memory Bank** – eine Sammlung von Markdown-Dokumentationsdateien, die detaillierte Informationen über die Architektur, Komponenten und Nutzungsmuster des Projekts liefern. Die Memory Bank ist besonders nützlich bei der Arbeit mit KI-Agenten, da sie strukturierte Informationen enthält über:

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
- `activeContext.md` - Aktueller Arbeitsfokus und jüngste Änderungen
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
```