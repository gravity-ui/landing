# UIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![npm downloads](https://img.shields.io/npm/dm/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook tests](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/test-storybook.yml?label=Storybook%20Tests&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/test-storybook.yml) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/uikit/)

[English](README.md) | [Русский](README-ru.md)

Ein Set flexibler, hochgradig praktischer und effizienter React-Komponenten zur Erstellung reichhaltiger Webanwendungen. Teil des [Gravity UI](https://gravity-ui.com) Designsystems.

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [Website](https://gravity-ui.com) &nbsp;&nbsp; ![Documentation Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Documentation Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [Dokumentation](https://gravity-ui.com/components/uikit/alert) &nbsp;&nbsp; ![Figma Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Figma Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma](<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>) &nbsp;&nbsp; ![Themer Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Themer Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Themer](https://gravity-ui.com/themer) &nbsp;&nbsp; ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/uikit/) &nbsp;&nbsp; ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [Community](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## Über

UIKit ist das Basispaket des [Gravity UI](https://gravity-ui.com) Designsystems – ein praxiserprobter Satz von über 70 React-Komponenten, die für produktive Webanwendungen entwickelt wurden. Es kümmert sich um die schwierigen Aspekte: Theming, Barrierefreiheit, RTL-Layout, serverseitiges Rendering und Internationalisierung, damit Sie sich auf die Entwicklung Ihres Produkts konzentrieren können.

Hauptmerkmale:

- **Über 70 Komponenten** – Eingabefelder, Overlays, Datenanzeige, Layout-Primitive, Feedback und mehr
- **Integriertes Theming** – Varianten für helle, dunkle und kontrastreiche Modi mit einem Live-Tool [Themer](https://gravity-ui.com/themer) zur Anpassung von Tokens
- **RTL-Unterstützung** – Vollständige Rechts-nach-links-Layoutrichtung

Durchsuchen Sie den vollständigen Komponenten-Katalog in [Storybook](https://preview.gravity-ui.com/uikit/) oder der [Dokumentation](https://gravity-ui.com/components/uikit/alert).

## Erste Schritte

### Voraussetzungen

React 16.14, 17, 18 oder 19 muss in Ihrem Projekt installiert sein.

### Installation

```shell
npm install @gravity-ui/uikit
```

## Verwendung

Importieren Sie Komponenten direkt aus dem Paket:

```jsx
import {Button} from '@gravity-ui/uikit';

const SubmitButton = (
  <Button view="action" size="l">
    Submit
  </Button>
);
```

### Stile

Fügen Sie die Basisstile und Schriftarten einmal am Anfang Ihres App-Einstiegspunkts ein:

```js
// index.js
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

Eine SCSS-Datei mit nützlichen [Mixins](styles/mixins.scss) ist ebenfalls für die Verwendung in Ihren eigenen Stylesheets verfügbar.

### Anleitungen

Lesen Sie mehr:

- [Theming](docs/theming.md) – Aktivieren Sie helle, dunkle und kontrastreiche Themes
- [Serverseitiges Rendering](docs/server-side-rendering.md) – Generieren Sie die Root-CSS-Klasse auf dem Server
- [Internationalisierung](docs/i18n.md) – Legen Sie die Sprache der integrierten Komponenten fest

## Entwicklung

```shell
git clone git@github.com:gravity-ui/uikit.git
cd uikit
npm ci
npm run start   # startet Storybook unter http://localhost:7007
```

Weitere nützliche Befehle:

```shell
npm test              # Führt Unit-Tests aus
npm run lint          # Lintet JS, SCSS und Markdown
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

Beiträge sind willkommen! Bitte lies [CONTRIBUTING.md](CONTRIBUTING.md), bevor du einen Pull-Request einreichst. Detaillierte PR-Richtlinien findest du unter [contribute/pull-request.md](contribute/pull-request.md).

Wir haben [![contributors](https://img.shields.io/github/contributors/gravity-ui/uikit?label=contributors)](https://github.com/gravity-ui/uikit/graphs/contributors) Mitwirkende und es werden immer mehr – mach mit!

Tritt der Community auf [Telegram](https://t.me/gravity_ui) für Fragen und Diskussionen bei.

## Lizenz

Verteilt unter der MIT-Lizenz. Details findest du in [LICENSE](LICENSE).

## Für KI-Agenten

Die Basis-React-Komponente und die Design-Token-Bibliothek für Gravity UI-Anwendungen – Steuerelemente, Eingaben, Overlays, Layout und Theming, auf denen jedes andere @gravity-ui-Paket aufbaut.

### Wann verwenden

- Standardmäßige Anwendungs-UI: Buttons, Formularsteuerelemente, Modals und Popups, Menüs, Tabs, Labels, Typografie und Layout-Primitive.
- Die Theming-Grundlage einer Gravity UI-Anwendung: `ThemeProvider`, Design-Tokens und CSS-Variablen, die der Rest des `@gravity-ui/*`-Ökosystems erwartet.
- Einfache tabellarische Daten über die integrierte `Table`-Komponente (Auswahl, Sortierung, Zeilenaktionen).

### Wann nicht verwenden

- Funktionsreiche Datenraster (Virtualisierung, Spaltenanpassung, Gruppierung, Neuanordnung) – verwende [`@gravity-ui/table`](https://github.com/gravity-ui/table), ein separates Headless-Paket. Es ist **nicht** dasselbe wie die `Table`-Komponente von uikit.
- Diagramme und Datenvisualisierung – verwende [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) (`@gravity-ui/chartkit` ist der Legacy-Wrapper).
- Anwendungsnavigationsschalen (Seitenleiste, Kopfzeile, Fußzeile, Logo) – verwende [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation).
- Datumsauswahlen, Kalender und Bereichssteuerelemente – verwende [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components).
- Der SVG-Icon-Satz selbst – verwende [`@gravity-ui/icons`](https://github.com/gravity-ui/icons); uikit liefert nur den `Icon`-Renderer.

### Häufige Fallstricke

- Der `Button`-Styling-Prop ist `view`, nicht `variant` oder `color`.
- **Komponenten werden ohne Einrichtung ungestylt gerendert.** Wickle die App in `ThemeProvider` **und** importiere `@gravity-ui/uikit/styles/styles.css` (plus `fonts.css`) einmal am Einstiegspunkt – beides ist erforderlich.
- **`Icon` hat keinen `name`-Prop.** Übergib eine importierte Icon-Komponente über `data`: `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} size={16} />`.
- **`theme`-Werte sind `light | dark | light-hc | dark-hc`.** Es gibt kein `theme="default"`.

### Nützliche Dokumentation

- [Layout-Komponenten und Abstände](./docs/layout.md)
- [Theming, Farben & Branding](./docs/theming.md)
- [Typografie](./docs/typography.md)

## Dokumentation für KI-Agenten

Agentenlesbare Dokumentation für die installierte Version befindet sich in `node_modules/@gravity-ui/uikit/build/docs/INDEX.md`.

## Star-Historie

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline" />
    <img alt="Star History Chart" width="600" src="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline" />
  </picture>
</div>

---

Wenn du UIKit nützlich findest, gib ihm bitte einen ⭐ auf [GitHub](https://github.com/gravity-ui/uikit) – das hilft anderen, das Projekt zu entdecken.