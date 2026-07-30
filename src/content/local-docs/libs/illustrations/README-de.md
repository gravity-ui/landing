# @gravity-ui/illustrations &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/illustrations)](https://www.npmjs.com/package/@gravity-ui/illustrations) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/illustrations/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/illustrations/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/illustrations/)

## Installation

```shell
npm install --save-dev @gravity-ui/illustrations
```

## Verwendung

### React

#### Vorbereitung

Richten Sie das Illustrations-Theme ein. Führen Sie einen der folgenden Schritte aus:

##### Definition von CSS-Tokens mit eigener Farbpalette

Definieren Sie folgende CSS-Tokens in Ihrer App:

```scss
--gil-color-object-base: rgb(255, 190, 92);
--gil-color-object-accent-heavy: rgb(211, 101, 7);
--gil-color-object-hightlight: rgb(255, 216, 157);
--gil-color-shadow-over-object: rgb(211, 158, 80);
--gil-color-background-lines: rgb(140, 140, 140);
--gil-color-background-shapes: rgb(242, 242, 242);
--gil-color-object-accent-light: rgb(255, 255, 255);
--gil-color-object-danger: rgb(255, 0, 61);
```

##### Verwendung von Mixins mit dem Standard-Gravity-Theme in SCSS

Verwenden Sie die folgenden Mixins für das Styling von Illustrationen in verschiedenen Themes:

```scss
@import '@gravity-ui/illustrations/styles/theme.scss';

.g-root {
  &_theme_light {
    @include g-illustrations-colors-light;
  }

  &_theme_light-hc {
    @include g-illustrations-colors-light-hc;
  }

  &_theme_dark {
    @include g-illustrations-colors-dark;
  }

  &_theme_dark-hc {
    @include g-illustrations-colors-dark-hc;
  }
}
```

##### Alternative für Projekte mit vorinstalliertem Gravity-Theme

Alternativ, wenn `@gravity-ui/uikit` bereits im Projekt installiert ist und das Standard-Theme verwendet wird, können Sie einfach `styles.scss` in die Stammdatei mit den Styles Ihres Projekts importieren:

```scss
// bestehende Gravity-Styles-Definition
import '@gravity-ui/uikit/styles/styles.css';
// fügen Sie einfach einen weiteren Import darunter hinzu
import '@gravity-ui/illustrations/styles/styles.scss';
```

#### Komponentenverwendung

```js
import NotFound from '@gravity-ui/illustrations/NotFound';
```

oder

```js
import {NotFound} from '@gravity-ui/illustrations';
```

### SVG

> Möglicherweise benötigen Sie einen geeigneten Loader dafür.

```js
import notFound from '@gravity-ui/illustrations/svgs/not-found-light.svg';
```

### Entwicklung

Um Illustrationen gemäß neuem Design zu aktualisieren, ändern Sie den Inhalt der SVGs im Light-Theme (`<this-repository-root>/svgs/<illustration-name>-light.svg`-Dateien) und führen Sie dann den Befehl aus:

```shell
npm run generate
```

## Lizenz

Verteilt unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE).

## Für KI-Agenten

Ein thematischer Satz von flachen SVG-Illustrationen (leere Zustände, Fehler, nicht gefunden usw.) für Gravity UI-Apps – greifen Sie darauf zurück, wenn Sie fertige, Theme-bewusste Platzhalter-/Leerzustandsgrafiken benötigen, anstatt eigene zu zeichnen oder einfache Icons zu verwenden.

### Wann verwenden

- Leere Zustände, 404/Fehlerseiten oder Onboarding-Platzhalter, die eine konsistente Illustration benötigen, kein funktionales UI-Element.
- Theme-fähige Grafiken – die SVGs reagieren auf Gravity-Theme-Tokens (hell/dunkel, kontrastreich) über SCSS-Mixins oder CSS-Variablen.
- Importieren von Grafiken als React-Komponenten (Standard) oder als rohe `.svg`-Dateien.

### Wann nicht verwenden

- Für funktionale UI-Ikonografie (Pfeile, Häkchen, Schaltflächen) verwenden Sie [`@gravity-ui/icons`](https://gravity-ui.com/icons) – Illustrationen sind dekorative Grafiken, keine UI-Glyphen.
- Für eine einzelne, einmalige Illustration, die Sie bereits als Asset haben, importieren Sie dieses Asset direkt, anstatt dieses Paket zu verwenden.

### Häufige Fallstricke

- **Rendering ohne Theme-Import** – Illustrationen erscheinen ungefärbt, es sei denn, Sie importieren `@gravity-ui/illustrations/styles/styles.scss` (oder definieren die `--gil-color-*` CSS-Tokens).
- **Halluzinierte Standard-Exportnamen** – Illustrationskomponenten sind PascalCase-benannte Exporte (z. B. `NotFound`), importiert aus dem Paket-Root oder pro Datei (`@gravity-ui/illustrations/NotFound`).
- **Direkter Import von `.svg` in einem nicht konfigurierten Bundler** – rohe SVG-Importe benötigen einen geeigneten Loader; bevorzugen Sie den React-Komponenten-Export, um die Bundler-Einrichtung zu vermeiden.

## Dokumentation für KI-Agenten

Agentenlesbare Dokumentation für die installierte Version befindet sich in `node_modules/@gravity-ui/illustrations/docs/INDEX.md`.