# @gravity-ui/icons &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/icons)](https://www.npmjs.com/package/@gravity-ui/icons) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/icons/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/icons/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/icons/)

Ein Paket mit Gravity UI-Icons. Icons haben zwei Quellen: SVG und React. Schauen Sie sich die [Showcase](https://preview.gravity-ui.com/icons/)-Seite an.

## Installation

```shell
npm install --save-dev @gravity-ui/icons
```

## Verwendung

### React

```js
import Cloud from '@gravity-ui/icons/Cloud';
```

oder

```js
import {Cloud} from '@gravity-ui/icons';
```

### SVG

> Möglicherweise benötigen Sie einen geeigneten Loader dafür.

```js
import cloudIcon from '@gravity-ui/icons/svgs/cloud.svg';
```

## Lizenz

Verteilt unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE).

## Für KI-Agenten

Das offizielle SVG-Icon-Set für Gravity UI, das sowohl als React-Komponenten als auch als rohe `.svg`-Dateien für die Verwendung mit dem `Icon`-Renderer von `@gravity-ui/uikit` geliefert wird.

### Wann verwenden

- Sie benötigen ein Icon innerhalb einer Gravity UI-App und möchten ein konsistentes, fertiges Set.
- Rendern eines Icons über uikit: Importieren Sie die Icon-Komponente hier und übergeben Sie sie über die `data`-Prop an das `Icon` von uikit.
- Sie benötigen die rohe `.svg`-Asset (z. B. für `background-image` in CSS oder einen SVG-Loader zur Build-Zeit) anstelle einer React-Komponente.

### Wann nicht verwenden

- Rendern des Icons auf dem Bildschirm – dieses Paket liefert nur die Glyphen; der eigentliche Renderer (Größe, Farbe, Barrierefreiheit) ist die `Icon`-Komponente von [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Sie benötigen ein benutzerdefiniertes oder Marken-Icon, das nicht im Set enthalten ist – importieren Sie Ihr eigenes SVG und übergeben Sie es an das `Icon` von uikit; erwarten Sie nicht, dass es hier zu finden ist.

### Häufige Fallstricke

- **Icons werden als Daten übergeben, nicht nach Namen.** Verwenden Sie `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} />` – es gibt keine `<Icon name="gear" />`-API, und dieses Paket exportiert keine eigene `<Icon>`-Komponente.
- **Der Importpfad ist wichtig für Tree-Shaking.** `import Cloud from '@gravity-ui/icons/Cloud'` lädt ein einzelnes Icon; `import {Cloud} from '@gravity-ui/icons'` funktioniert auch, verlässt sich aber darauf, dass der Bundler den Barrel (die Indexdatei) für Tree-Shaking verarbeitet.
- **SVG-Importe benötigen einen Loader.** `import icon from '@gravity-ui/icons/svgs/cloud.svg'` funktioniert nur, wenn Ihr Bundler für die Verarbeitung von `.svg`-Dateien konfiguriert ist.
- **Größe und Farbe kommen vom Renderer.** Setzen Sie `size` auf dem `Icon` von uikit und steuern Sie die Farbe mit `color`/CSS `currentColor`; die SVGs selbst haben keine feste Farbe.