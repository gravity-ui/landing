# ExpressKit

ExpressKit est un wrapper léger pour [express.js](https://expressjs.com/) qui s'intègre avec [NodeKit](https://github.com/gravity-ui/nodekit) et offre des fonctionnalités utiles telles que la journalisation des requêtes, le support du traçage, les contrôleurs et middlewares asynchrones, ainsi qu'une description détaillée des routes.

Installation :

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

Utilisation de base :

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