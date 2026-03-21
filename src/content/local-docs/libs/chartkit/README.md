# Gravity UI ChartKit · [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![License](https://img.shields.io/github/license/gravity-ui/ChartKit)](LICENSE) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/ChartKit/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/ChartKit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

Plugin-based React component that provides a unified rendering interface for multiple charting libraries. You register one or more plugins and render charts via `<ChartKit type="..." data={...} />` — ChartKit dispatches to the correct renderer automatically.

Each plugin renderer is lazy-loaded, so the underlying library code is only downloaded when ChartKit is actually rendered in the UI. ChartKit also handles mobile-friendly tooltip display out of the box. You can use the built-in plugins or implement your own.

**When to use:**

- You need modern declarative charts (`gravity-charts`) or time-series / monitoring charts (`yagr`)
- You need multiple chart types under a single consistent API
- You're building in the Gravity UI ecosystem

**When not to use:**

- You only need one specific chart library — prefer using [@gravity-ui/charts](https://github.com/gravity-ui/charts) directly

## Table of contents

- [Get started](#get-started)
- [Development](#development)

## Get started

### Requirements

- React 16, 17, or 18
- `[@gravity-ui/uikit](https://github.com/gravity-ui/uikit)` — required peer dependency (provides theming and UI primitives)

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
import {ThemeProvider} from '@gravity-ui/uikit';
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
    <ThemeProvider theme="light">
      <div style={{height: 300}}>
        <ChartKit type="gravity-charts" data={data} />
      </div>
    </ThemeProvider>
  );
}
```

`ChartKit` adapts to its parent's size — make sure the container has an explicit height.

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
