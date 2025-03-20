# @gravity-ui/chartkit &middot; [![license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE) [![npm package](https://img.shields.io/npm/v/@gravity-ui/chartkit)](https://www.npmjs.com/package/@gravity-ui/chartkit) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/chartkit/)

React component used to render charts based on any sources you need

## Install

```shell
npm i --save-dev @gravity-ui/chartkit @gravity-ui/uikit
```

Make sure you have `@gravity-ui/uikit` styles enabled in your project.

```typescript
import '@gravity-ui/uikit/styles/styles.scss';
```

## Usage

```typescript
import {ThemeProvider} from '@gravity-ui/uikit';
import ChartKit, {settings} from '@gravity-ui/chartkit';
import {YagrPlugin} from '@gravity-ui/chartkit/yagr';
import type {YagrWidgetData} from '@gravity-ui/chartkit/yagr';

import '@gravity-ui/uikit/styles/styles.scss';

settings.set({plugins: [YagrPlugin]});

const data: YagrWidgetData = {
  data: {
    timeline: [
      1636838612441, 1636925012441, 1637011412441, 1637097812441, 1637184212441, 1637270612441,
      1637357012441, 1637443412441, 1637529812441, 1637616212441,
    ],
    graphs: [
      {
        id: '0',
        name: 'Serie 1',
        color: '#6c59c2',
        data: [25, 52, 89, 72, 39, 49, 82, 59, 36, 5],
      },
      {
        id: '1',
        name: 'Serie 2',
        color: '#6e8188',
        data: [37, 6, 51, 10, 65, 35, 72, 0, 94, 54],
      },
    ],
  },
  libraryConfig: {
    chart: {
      series: {
        type: 'line',
      },
    },
    title: {
      text: 'line: random 10 pts',
    },
  },
};

function App() {
  return (
    <ThemeProvider>
      <div className="app" style={{height: 500}}>
        <ChartKit type="yagr" data={data} />
      </div>
    </ThemeProvider>
  );
}

export default App;
```
