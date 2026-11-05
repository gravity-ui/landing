# UIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![npm downloads](https://img.shields.io/npm/dm/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook tests](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/test-storybook.yml?label=Storybook%20Tests&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/test-storybook.yml) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/uikit/)

[English](README.md) | [Русский](README-ru.md)

Ein Set flexibler, äußerst praktischer und effizienter React-Komponenten zur Erstellung reichhaltiger Webanwendungen. Teil des [Gravity UI](https://gravity-ui.com) Designsystems.

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [Website](https://gravity-ui.com) &nbsp;&nbsp; ![Documentation Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Documentation Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [Dokumentation](https://gravity-ui.com/components/uikit/alert) &nbsp;&nbsp; ![Figma Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Figma Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma](<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>) &nbsp;&nbsp; ![Themer Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Themer Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Themer](https://gravity-ui.com/themer) &nbsp;&nbsp; ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/uikit/) &nbsp;&nbsp; ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [Community](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## About

UIKit ist das Basispaket des [Gravity UI](https://gravity-ui.com) Designsystems – eine praxiserprobte Sammlung von über 70 React-Komponenten, die für produktive Webanwendungen entwickelt wurden. Es kümmert sich um die schwierigen Aspekte: Theming, Barrierefreiheit, RTL-Layout, serverseitiges Rendering und Internationalisierung, damit Sie sich auf die Entwicklung Ihres Produkts konzentrieren können.

Hauptmerkmale:

- **Über 70 Komponenten** – Eingabefelder, Overlays, Datenanzeige, Layout-Primitive, Feedback und mehr
- **Integriertes Theming** – Varianten für helle, dunkle und kontrastreiche Modi mit einem Live-Tool [Themer](https://gravity-ui.com/themer) zur Anpassung von Tokens
- **RTL-Unterstützung** – Vollständige Rechts-nach-Links-Layoutrichtung

Durchsuchen Sie den vollständigen Komponenten-Katalog in [Storybook](https://preview.gravity-ui.com/uikit/) oder in der [Dokumentation](https://gravity-ui.com/components/uikit/alert).

## Getting Started

### Prerequisites

React 18 oder 19 muss in Ihrem Projekt installiert sein.

### Installation

```shell
npm install @gravity-ui/uikit
```

## Usage

Importieren Sie Komponenten direkt aus dem Paket:

```jsx
import {Button} from '@gravity-ui/uikit';

const SubmitButton = (
  <Button view="action" size="l">
    Submit
  </Button>
);
```

### Styles

Fügen Sie die Basisstile und Schriftarten einmal am Anfang Ihres App-Einstiegspunkts ein:

```js
// index.js
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

Eine SCSS-Datei mit nützlichen [Mixins](styles/mixins.scss) ist ebenfalls verfügbar, die Sie in Ihren eigenen Stylesheets verwenden können.

### Guides

Lesen Sie mehr:

- [Migration zu v8](docs/migration-to-v8.md) – die Breaking Changes von v8 und der Weg durch jeden einzelnen
- [Layout-Komponenten und Abstände](docs/layout.md) – erstellen Sie responsive Seiten mit dem gemeinsamen Grid und der Abstands-Skala
- [Theming](docs/theming.md) – aktivieren Sie helle, dunkle und kontrastreiche Themes
- [Typografie](docs/typography.md) – verwenden und passen Sie die gemeinsame Text-Skala an
- [Server-Side Rendering](docs/server-side-rendering.md) – generieren Sie die Root-CSS-Klasse auf dem Server
- [Internationalisierung](docs/i18n.md) – stellen Sie die integrierte Komponentensprache ein

### Entry points

| Einstiegspunkt                      | Was gibt es                                           | Wann zu verwenden                                                                      |
| :---------------------------------- | :---------------------------------------------------- | :------------------------------------------------------------------------------------ |
| `@gravity-ui/uikit`                 | Komponenten, Hooks und Hilfsprogramme                 | Immer – das ist das Paket                                                             |
| `@gravity-ui/uikit/styles/*`        | Globale CSS-Dateien und SCSS-Mixins                   | Einmal am Einstiegspunkt der App, siehe [Styles](#styles)                             |
| `@gravity-ui/uikit/i18n`            | `addLanguageKeysets`, `addComponentKeysets`           | Zum Hinzufügen oder Überschreiben von integrierten Komponenten-Strings               |
| `@gravity-ui/uikit/server`          | `getRootClassName`                                    | Zum Generieren der Root-Klasse auf dem Server, siehe [SSR](docs/server-side-rendering.md) |
| `@gravity-ui/uikit/toaster-singleton` | Eine fertige `Toaster`-Instanz                        | Zum Anzeigen von Toasts außerhalb des React-Baums                                     |
| `@gravity-ui/uikit/virtualizer`     | `Virtualizer`, `ListVirtualizer`                      | Zum Rendern nur des sichtbaren Fensters einer langen Liste                            |
| `@gravity-ui/uikit/hello-pangea-dnd`| `ListHelloPangeaDnd`, `useListHelloPangeaDnd`         | Zum Neuordnen von Zeilen einer Liste mit `@hello-pangea/dnd`                          |
| `@gravity-ui/uikit/unstable`        | Komponenten, deren API sich noch ändert              | Auf eigene Gefahr – diese können außerhalb von Haupt-Releases brechen                 |
| `@gravity-ui/uikit/legacy`          | `DropdownMenu`, `List`, `Menu`, `Table`, `TableColumnSetup` | Nur während der Migration davon weg, siehe [Migration zu v8](docs/migration-to-v8.md) |

Einige Einstiegspunkte benötigen eigene Pakete, die als optionale Peer-Dependencies deklariert sind: Installieren Sie diese
neben `@gravity-ui/uikit`, wenn Sie von dort importieren. Alles andere ist im Paket
selbst enthalten.

| Einstiegspunkt                      | Was zu installieren                                                     |
| :---------------------------------- | :---------------------------------------------------------------------- |
| `@gravity-ui/uikit/virtualizer`     | `@tanstack/react-virtual`                                               |
| `@gravity-ui/uikit/hello-pangea-dnd`| `@hello-pangea/dnd`                                                     |
| `@gravity-ui/uikit/legacy`          | `@hello-pangea/dnd`, `react-window`, `react-virtualized-auto-sizer`     |

## Entwicklung

Verwenden Sie für die Entwicklung Node.js 24 oder neuer und npm 11 oder neuer.

```shell
git clone git@github.com:gravity-ui/uikit.git
cd uikit
npm ci
npm run start   # startet Storybook unter http://localhost:7007
```

Weitere nützliche Befehle:

```shell
npm test              # Führt Unit-Tests aus
npm run lint          # Linting für JS, SCSS und Markdown
npm run typecheck     # TypeScript-Typenprüfung
npm run playwright    # Führt visuelle Regressionstests aus
```

## Maintainer

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/amje">
        <img src="https://github.com/amje.png?size=100" width="100" alt="amje" /><br />
        <sub><b>@amje</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ValeraS">
        <img src="https://github.com/ValeraS.png?size=100" width="100" alt="ValeraS" /><br />
        <sub><b>@ValeraS</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/korvin89">
        <img src="https://github.com/korvin89.png?size=100" width="100" alt="korvin89" /><br />
        <sub><b>@korvin89</b></sub>
      </a>
    </td>
  </tr>
</table>

## Mitwirkung

Beiträge sind willkommen! Bitte lesen Sie [CONTRIBUTING.md](CONTRIBUTING.md), bevor Sie einen Pull-Request einreichen. Detaillierte PR-Richtlinien finden Sie unter [contribute/pull-request.md](contribute/pull-request.md).

Wir haben [![contributors](https://img.shields.io/github/contributors/gravity-ui/uikit?label=contributors)](https://github.com/gravity-ui/uikit/graphs/contributors) Mitwirkende und es werden immer mehr – mach mit!

Tritt der Community auf [Telegram](https://t.me/gravity_ui) für Fragen und Diskussionen bei.

## Lizenz

Veröffentlicht unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE).

## Für KI-Agenten

Die Basis-React-Komponente und die Design-Token-Bibliothek für Gravity UI-Anwendungen – Steuerelemente, Eingaben, Overlays, Layout und Theming, auf denen jedes andere `@gravity-ui/*`-Paket aufbaut.

### Wann zu verwenden

- Standardmäßige Anwendungs-UI: Schaltflächen, Formularsteuerelemente, Modals und Popups, Menüs, Tabs, Labels, Typografie und Layout-Primitive.
- Auswählbare, navigierbare Listen (`List`) und Auswahlsteuerelemente (`Select`).
- Die Theming-Grundlage einer Gravity UI-Anwendung: `Provider`, Design-Token und CSS-Variablen, die der Rest des `@gravity-ui/*`-Ökosystems erwartet.

### Wann nicht zu verwenden

- Tabellen und Daten-Grids (Auswahl, Sortierung, Virtualisierung, Spaltenbreitenänderung, Gruppierung, Neuanordnung) – verwenden Sie [`@gravity-ui/table`](https://github.com/gravity-ui/table), ein separates Headless-Paket. Die `Table`-Komponente von uikit befindet sich seit v8 in `@gravity-ui/uikit/legacy` und wird nur für bestehenden Code beibehalten.
- Diagramme und Datenvisualisierung – verwenden Sie [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) (`@gravity-ui/chartkit` ist der Legacy-Wrapper).
- Anwendungsnavigations-Shells (Seitenleiste, Kopfzeile, Fußzeile, Logo) – verwenden Sie [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation).
- Datumsauswahl, Kalender und Bereichssteuerelemente – verwenden Sie [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components).
- Der SVG-Icon-Satz selbst – verwenden Sie [`@gravity-ui/icons`](https://github.com/gravity-ui/icons); uikit liefert nur den `Icon`-Renderer.

### Häufige Fallstricke

- Der `Button`-Styling-Prop ist `view`, nicht `variant` oder `color`.
- **Komponenten werden ohne Einrichtung ungestylt gerendert.** Wickeln Sie die App in `Provider` **und** importieren Sie `@gravity-ui/uikit/styles/styles.css` (plus `fonts.css`) einmal am Einstiegspunkt – beides ist erforderlich.
- **`Icon` hat keinen `name`-Prop.** Übergeben Sie eine importierte Icon-Komponente über `data`: `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} size={16} />`.
- **`theme`-Werte sind `light | dark | light-hc | dark-hc | system`.** `system` (Standard) folgt der OS-Präferenz und wird zu `light` oder `dark`. Es gibt kein `theme="default"`.
- **`List` in v8 ist eine neue Komponente.** Die v7 `List` befindet sich in `@gravity-ui/uikit/legacy`; siehe die [List-Migrationsanleitung](./docs/migration-from-legacy-list.md).

### Nützliche Dokumentation

- [Layout-Komponenten und Abstände](./docs/layout.md)
- [Theming, Farben & Branding](./docs/theming.md)
- [Typografie](./docs/typography.md)
- [Migration zu v8](./docs/migration-to-v8.md)

## Dokumentation für KI-Agenten

Agentenlesbare Dokumentation für die installierte Version befindet sich in `node_modules/@gravity-ui/uikit/build/docs/INDEX.md`.

## Sternverlauf

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://star-history.dera.page/svg?repos=gravity-ui/uikit&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://star-history.dera.page/svg?repos=gravity-ui/uikit&type=Timeline" />
    <img alt="Star History Chart" width="600" src="https://star-history.dera.page/svg?repos=gravity-ui/uikit&type=Timeline" />
  </picture>
</div>

---

Wenn Sie UIKit nützlich finden, geben Sie ihm bitte einen ⭐ auf [GitHub](https://github.com/gravity-ui/uikit) – das hilft anderen, das Projekt zu entdecken.