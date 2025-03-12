# ExpressKit

ExpressKit 是一个轻量级的 [express.js](https://expressjs.com/) 封装器，它与 [NodeKit](https://github.com/gravity-ui/nodekit) 集成，并提供一些有用的功能，如请求日志记录、跟踪支持、异步控制器和中间件以及详细的路由描述。

安装：

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

基本用法：

```typescript
import {ExpressKit} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

const nodekit = new NodeKit();

const app = new ExpressKit(nodekit, {
  'GET /': (req, res) => {
    res.send('Hello World!');
  },
});

app.run();
```

## CSP

`config.ts`

```typescript
import type {AppConfig} from '@gravity-ui/nodekit';
import {csp} from '@gravity-ui/expresskit';

const config: Partial<AppConfig> = {
    expressCspEnable: true,
    expressCspPresets: ({getDefaultPresets}) => {
        return getDefaultPresets({defaultNone: true}).concat([
            csp.inline(),
            {csp.directives.REPORT_TO: 'my-report-group'},
        ]);
    },
    expressCspReportTo: [
        {
            group: 'my-report-group',
            max_age: 30 * 60,
            endpoints: [{ url: 'https://cspreport.com/send'}],
            include_subdomains: true,
        }
    ]
}

export default config;
```
