# UIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook tests](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/test-storybook.yml?label=Storybook%20Tests&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/test-storybook.yml) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/uikit/)

Eine Sammlung flexibler, äußerst praktischer und effizienter React-Komponenten zur Erstellung reichhaltiger Webanwendungen.

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

## Ressourcen

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [Website](https://gravity-ui.com)

### ![Documentation Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Documentation Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [Dokumentation](https://gravity-ui.com/components/uikit/alert)

### ![Figma Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Figma Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma](<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>)

### ![Themer Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Themer Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Themer](https://gravity-ui.com/themer)

### ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/uikit/)

### ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [Community](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## Installation

```shell
npm install --save-dev @gravity-ui/uikit
```

## Verwendung

```jsx
import {Button} from '@gravity-ui/uikit';

const SubmitButton = <Button view="action" size="l" />;
```

### Styles

UIKit wird mit Basis-Styling und einem Theme geliefert. Damit alles gut aussieht, fügen Sie dies am Anfang Ihrer Einstiegsdatei hinzu:

```js
// index.js

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

// ...
```

UIKit unterstützt verschiedene Themes: hell, dunkel und deren kontrastreiche Varianten. Ihre App muss innerhalb von `ThemeProvider` gerendert werden:

```js
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from '@gravity-ui/uikit';

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme="light">
    <App />
  </ThemeProvider>,
);
```

Es ist möglich, beim SSR anfängliche Root-CSS-Klassen zu generieren, um Theme-Flackern zu vermeiden:

```js
import {getRootClassName} from '@gravity-ui/uikit/server';

const theme = 'dark';
const rootClassName = getRootClassName({theme});

const html = `
<html>
  <body>
    <div id="root" class="${rootClassName}"></div>
  </body>
</html>
`;
```

Außerdem gibt es eine SCSS-Datei mit [Mixins](styles/mixins.scss) mit nützlichen Helfern für Ihre App.

### I18N

Einige Komponenten enthalten Text-Tokens (Wörter und Phrasen). Diese sind in zwei Sprachen verfügbar: `en` (Standard) und `ru`.
Um die Sprache festzulegen, verwenden Sie die Funktion `configure`:

```js
// index.js

import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

## Entwicklung

Um den Entwicklungsserver mit Storybook zu starten, führen Sie Folgendes aus:

```shell
git clone git@github.com:gravity-ui/uikit.git
cd uikit
npm ci
npm run start
```

## Lizenz

Verteilt unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE).

## Für KI-Agenten

Die Basis-React-Komponenten und die Design-Token-Bibliothek für Gravity UI-Apps – Steuerelemente, Eingaben, Overlays, Layout und Theming, auf denen jedes andere @gravity-ui-Paket aufbaut.

### Wann zu verwenden

- Standard-UI für Anwendungen: Schaltflächen, Formularsteuerelemente, Modale und Popups, Menüs, Tabs, Labels, Typografie und Layout-Primitive.
- Die Theming-Grundlage einer Gravity UI-App: `ThemeProvider`, Design-Tokens und CSS-Variablen, die der Rest des `@gravity-ui/*`-Ökosystems erwartet.
- Einfache tabellarische Daten über die integrierte `Table`-Komponente (Auswahl, Sortierung, Zeilenaktionen).

### Wann nicht zu verwenden

- Umfangreiche Daten-Tabellen (Virtualisierung, Spaltenanpassung, Gruppierung, Neuanordnung) – verwenden Sie [`@gravity-ui/table`](https://github.com/gravity-ui/table), ein separates Headless-Paket. Es ist **nicht** dasselbe wie die `Table`-Komponente von uikit.
- Diagramme und Datenvisualisierung – verwenden Sie [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) (`@gravity-ui/chartkit` ist der Legacy-Wrapper).
- Anwendungsnavigations-Shells (Seitenleiste, Header, Footer, Logo) – verwenden Sie [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation).
- Datumsauswahl, Kalender und Bereichssteuerelemente – verwenden Sie [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components).
- Der SVG-Icon-Satz selbst – verwenden Sie [`@gravity-ui/icons`](https://github.com/gravity-ui/icons); uikit liefert nur den `Icon`-Renderer.

### Häufige Fallstricke

- Der Styling-Prop für `Button` ist `view`, nicht `variant` oder `color`.
- **Komponenten werden ohne Einrichtung ungestylt gerendert.** Umschließen Sie die App mit `ThemeProvider` **und** importieren Sie `@gravity-ui/uikit/styles/styles.css` (plus `fonts.css`) einmal am Einstiegspunkt – beides ist erforderlich.
- **`Icon` hat keinen `name`-Prop.** Übergeben Sie eine importierte Icon-Komponente über `data`: `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} size={16} />`.
- **`theme`-Werte sind `light | dark | light-hc | dark-hc`.** Es gibt kein `theme="default"`.

### Nützliche Dokumentation

- [Layout-Komponenten und Abstände](./docs/layout.md)
- [Theming, Farben & Branding](./docs/theming.md)
- [Typografie](./docs/typography.md)