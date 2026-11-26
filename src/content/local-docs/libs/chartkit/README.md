# Gravity UI ChartKit · [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![License](https://img.shields.io/github/license/gravity-ui/ChartKit)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/ChartKit/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

Plugin-based React component that renders charts from multiple charting libraries, such as Gravity Charts and Yagr, through a single ChartKit API, with mobile-friendly tooltips and custom plugin support. You register one or more plugins and render charts via `<ChartKit type="..." data={...} />` — ChartKit dispatches to the correct renderer automatically.

Each plugin renderer is lazy-loaded, so the underlying library code is only downloaded when ChartKit is actually rendered in the UI. ChartKit also handles mobile-friendly tooltip display out of the box. You can use the built-in plugins or implement your own.

**When to use:**

- You need modern declarative charts (`gravity-charts`) or time-series / monitoring charts (`yagr`)
- You need multiple chart types under a single consistent API
- You want charts that follow the same light/dark theme as the rest of your UI out of the box

**When not to use:**

- You only need one specific chart library — prefer using [@gravity-ui/charts](https://github.com/gravity-ui/charts) directly

## Table of contents

- [Get started](#getting-started)
- [Updating charting packages](#updating-charting-packages)
- [Development](#development)

## Getting started

### Requirements

- React 18 or 19
- [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) 8 — required peer dependency (provides theming and UI primitives)

### Install

```shell
npm install @gravity-ui/chartkit @gravity-ui/uikit
```

### Styles

Import the styles from `@gravity-ui/uikit` in your entry point:

```tsx
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

For full setup details see the [uikit styles guide](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles).

### Basic usage

ChartKit uses a global plugin registry. Call `settings.set` once at your app entry point to register the plugins you need. When `<ChartKit type="..." />` renders, it looks up the matching plugin — if none is found, an error is thrown. Each plugin's renderer is a `React.lazy` component, so its code is fetched only when ChartKit first appears in the UI.

You can register multiple plugins at once:

```ts
settings.set({plugins: [GravityChartsPlugin, YagrPlugin]});
```

Or call `settings.set` multiple times — it merges the plugin list rather than replacing it.

**Basic example:**

```tsx
import {Provider} from '@gravity-ui/uikit';
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
    <Provider theme="light">
      <div style={{height: 300}}>
        <ChartKit type="gravity-charts" data={data} />
      </div>
    </Provider>
  );
}
```

`ChartKit` adapts to its parent's size — make sure the container has an explicit height.

### SplitTooltip

The split-pane tooltip layout that `gravity-charts` uses on touch devices (`tooltip={{splitted: true}}`) is also available as a standalone component. It works with any content: it renders the main pane and the tooltip pane side by side (or stacked, depending on the container size) with a draggable resizer between them.

```tsx
import {SplitTooltip} from '@gravity-ui/chartkit';

export function Panel() {
  return (
    <div style={{height: 400}}>
      <SplitTooltip
        renderMainPane={() => <MyVisualization />}
        renderTooltip={() => <MyTooltipContent />}
      />
    </div>
  );
}
```

See the `SplitTooltipProps` type for layout control, pane sizing and resizer options.

## Updating charting packages

ChartKit bundles two Gravity UI charting libraries as dependencies:

- [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) — powers the `gravity-charts` plugin
- [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) — powers the `yagr` plugin

If you need a newer version of one of these packages, open a [Package update request](https://github.com/gravity-ui/ChartKit/issues/new?template=package-update-request.yml) issue and select the package(s) you need. Maintainers will bump the selected packages and release the update.

### Upgrading from ChartKit 8

See the [migration guide](docs/migration-to-v9.md): uikit 8 and React 18+, the CommonJS/ESM build and TypeScript `moduleResolution` notes, and the `gravity-charts` data changes that come with `@gravity-ui/charts` 2.

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) 22 (see [.nvmrc](https://github.com/gravity-ui/ChartKit/blob/main/.nvmrc))
- [npm](https://www.npmjs.com/) 10 or later

### Setup

Clone the repository and install dependencies:

```shell
git clone https://github.com/gravity-ui/ChartKit.git
cd ChartKit
npm ci
```

### Running Storybook

```shell
npm run start
```

Storybook will be available at `http://localhost:7007`.

### Developing with a local dependency

To work on a dependency (e.g. `@gravity-ui/charts`) and see your changes live in Storybook without publishing to npm:

**1. Link the local package**

```shell
# In your local clone of @gravity-ui/charts:
git clone https://github.com/gravity-ui/charts.git
cd charts
npm ci
# make your changes
npm run build
npm link

# In ChartKit:
npm link @gravity-ui/charts
```

**2. Configure local package watching**

Create a `.env.local` file in the ChartKit root (it is gitignored):

```shell
LOCAL_PKG=@gravity-ui/charts
```

This tells Vite to watch that package in `node_modules` and skip pre-bundling it. After rebuilding `@gravity-ui/charts`, Storybook will hot-reload automatically.

For multiple packages, use a comma-separated list:

```shell
LOCAL_PKG=@gravity-ui/charts,@gravity-ui/uikit
```

**3. Start Storybook**

```shell
npm run start
```

**4. Restore the original package**

When you're done:

1. Comment out `LOCAL_PKG` in `.env.local`
2. Run `npm install` in ChartKit — it replaces the symlink with the registry version

```shell
# In ChartKit:
npm ci
```

### Running tests

```shell
npm test
```

To check the built package, build it first. The check loads both the CommonJS and the ESM build in Node, compares their exports, and type-checks a consumer under the `nodenext`, `bundler` and `node` module resolutions:

```shell
npm run build
npm run test:build
```

Visual regression tests run in Docker to ensure consistent screenshots across environments:

```shell
npm run test:docker
```

To update the reference screenshots after intentional UI changes:

```shell
npm run test:docker:update
```

### Contributing

Please refer to the [contributing guide](CONTRIBUTING.md) before submitting a pull request.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

## For AI agents

A plugin-based React component that renders charts from multiple charting libraries, such as Gravity Charts and Yagr, through a single `<ChartKit type="..." data={...} />` API, lazy-loading each library only when its chart type is rendered.

### When to use

- Rendering more than one charting engine behind one consistent component: `gravity-charts` (declarative SVG charts via [`@gravity-ui/charts`](https://github.com/gravity-ui/charts)) and `yagr` (uPlot-based time-series via [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr)).
- Lazy-loading chart bundles — each plugin's renderer is `React.lazy`, so a library's code is only fetched when its chart type is actually shown.
- Mobile-friendly tooltips out of the box — the chart and its tooltip are shown in resizable split panes instead of a hover popup; for `gravity-charts` turn it on with `<ChartKit type="gravity-charts" tooltip={{splitted: true}} />`.
- Using the split-pane tooltip layout on its own — `SplitTooltip` is a standalone component exported from the root entry: pass `renderMainPane` and `renderTooltip`, and it lays them out as resizable panes (vertical or horizontal, picked from the container size) for any content, not only ChartKit charts.
- Writing your own plugin — register `{type, renderer}` via `settings.set({plugins: [...]})`, where `renderer` is a `React.lazy` component; ChartKit dispatches to it by `type` exactly like to the built-in plugins.
- Consistent light/dark theming across every chart engine out of the box — the charts follow the `@gravity-ui/uikit` theme of the surrounding app.

### When not to use

- For a single chart type only, import [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) (general) or [`@gravity-ui/yagr`](https://github.com/gravity-ui/yagr) (high-performance time-series) directly — the plugin registry is overhead for one engine.
- To compose a dashboard grid of widgets, use [`@gravity-ui/dashkit`](https://github.com/gravity-ui/dashkit) — ChartKit renders a chart; DashKit arranges many widgets.

### Common pitfalls

- **Rendering `<ChartKit>` before `settings.set({plugins: [...]})`** — the global plugin registry must be populated at app entry; an unregistered `type` throws at render time.
- **Hallucinated prop `chartType` / `library`** — the dispatch prop is `type` (e.g. `type="gravity-charts"`), and the data is `data`.
- **Importing plugins from the root entry** — plugins live in subpath exports (e.g. `@gravity-ui/chartkit/gravity-charts`, `@gravity-ui/chartkit/yagr`); the root `@gravity-ui/chartkit` entry does not re-export them.
- **Assuming one `data` shape for every `type`** — the shape depends on the plugin, e.g. `gravity-charts` takes `ChartData` from `@gravity-ui/charts` (`{series: {data: [...]}}`), while `yagr` takes `{data: {graphs, timeline}, libraryConfig}` with `libraryConfig` required.
- **Forgetting a container height** — `ChartKit` fills its parent; without an explicit height on the wrapper, the chart collapses to zero.
- **Missing the uikit styles import** — theming depends on `@gravity-ui/uikit/styles/styles.css`; without it, charts render unstyled.

## Documentation for AI agents

Agent-readable documentation for the installed version is located in `node_modules/@gravity-ui/chartkit/build/docs/INDEX.md`.
