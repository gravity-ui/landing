# ExpressKit

ExpressKit es un wrapper ligero para [express.js](https://expressjs.com/) que se integra con [NodeKit](https://github.com/gravity-ui/nodekit) y proporciona algunas características útiles como registro de solicitudes, soporte de tracing, controladores y middleware asíncronos, y descripciones detalladas de rutas.

Instalación:

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

Uso básico:

```typescript
import {ExpressKit} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

const nodekit = new NodeKit();

const app = new ExpressKit(nodekit, {
  'GET /': (req, res) => {
    res.send('¡Hola Mundo!');
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