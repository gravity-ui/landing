# ExpressKit

ExpressKit ist ein leichtgewichtiger [express.js](https://expressjs.com/)-Wrapper, der sich in [NodeKit](https://github.com/gravity-ui/nodekit) integriert und einige nützliche Funktionen bietet, wie z. B. Request-Logging, Tracing-Unterstützung, asynchrone Controller & Middleware und eine detaillierte Routenbeschreibung.

Installation:

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

Grundlegende Verwendung:

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

## CSRF-Schutz

ExpressKit bietet integrierten Schutz vor Cross-Site Request Forgery (CSRF), um Ihre Anwendungen vor bösartigen Cross-Origin-Anfragen zu sichern. Die CSRF-Middleware generiert und validiert automatisch Tokens für zustandsändernde HTTP-Anfragen.

### Grundlegende Konfiguration

Um den CSRF-Schutz zu aktivieren, konfigurieren Sie den geheimen Schlüssel in Ihrer Konfiguration:

```typescript
import type {AppConfig} from '@gravity-ui/nodekit';

const config: Partial<AppConfig> = {
  // ...
  appCsrfSecret: 'your-secret-key-here',
};

export default config;
```

### Konfigurationsoptionen

| Option              | Typ                 | Standard                              | Beschreibung                                                                                     |
| ------------------- | ------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `appCsrfSecret`     | `string \| string[]` | -                                     | **Erforderlich.** Geheimer Schlüssel/Schlüssel für die HMAC-Token-Generierung. Mehrere Schlüssel ermöglichen die Schlüsselrotation. |
| `appCsrfLifetime`   | `number`            | `2592000` (30 Tage)                   | Token-Lebensdauer in Sekunden. Setzen Sie auf `0` für kein Ablaufdatum.                                        |
| `appCsrfHeaderName` | `string`            | `'x-csrf-token'`                      | Name des HTTP-Headers für die Token-Validierung.                                                          |
| `appCsrfMethods`    | `string[]`          | `['POST', 'PUT', 'DELETE', 'PATCH']` | HTTP-Methoden, die eine CSRF-Validierung erfordern.                                                      |

### Verwendung

Nach der Konfiguration wird der CSRF-Schutz automatisch auf alle Routen mit den angegebenen HTTP-Methoden angewendet:

```typescript
import {ExpressKit, AuthPolicy} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

const nodekit = new NodeKit({
  config: {
    appCsrfSecret: 'your-secret-key',
    appAuthPolicy: AuthPolicy.required,

    // Stellen Sie sicher, dass Ihre Middleware die Benutzer-ID im originalContext setzt,
    // andernfalls schlägt die Generierung des CSRF-Tokens fehl.
    appAuthHandler: yourAuthHandler,
  },
});

const app = new ExpressKit(nodekit, {
  'GET /api/form': (req, res) => {
    // Token ist im Request-Kontext verfügbar
    res.json({csrfToken: req.originalContext.get('csrfToken')});
  },

  'POST /api/submit': (req, res) => {
    // Diese Route validiert automatisch das CSRF-Token
    res.json({message: 'Formular erfolgreich gesendet'});
  },
});
```

### Routenspezifische Konfiguration

Sie können den CSRF-Schutz für bestimmte Routen deaktivieren:

```typescript
const app = new ExpressKit(nodekit, {
  'POST /api/webhook': {
    authPolicy: AuthPolicy.required,
    disableCsrf: true, // CSRF für diese Route deaktivieren
    handler: (req, res) => {
      res.json({message: 'Webhook verarbeitet'});
    },
  },
});
```

## Caching-Steuerung

Standardmäßig setzt ExpressKit `no-cache`-Header auf alle Antworten. Sie können dieses Verhalten global oder pro Route steuern.

### Globale Konfiguration

```typescript
const config: Partial<AppConfig> = {
  expressEnableCaching: true, // Caching standardmäßig zulassen
};
```

### Routenspezifische Konfiguration

```typescript
const app = new ExpressKit(nodekit, {
  'GET /api/cached': {
    enableCaching: true, // Caching für diese Route zulassen
    handler: (req, res) => res.json({data: 'cacheable'}),
  },
  'GET /api/fresh': {
    enableCaching: false, // no-cache erzwingen
    handler: (req, res) => res.json({data: 'always fresh'}),
  },
});
```

`enableCaching` auf Routenebene überschreibt die globale Einstellung. Der Caching-Status ist in `req.routeInfo.enableCaching` verfügbar.

## Validierung und Antwortserialisierung

- [Request Validation and Response Serialization](https://github.com/gravity-ui/expresskit/blob/main/docs/VALIDATOR.md) - Verwenden Sie Zod-Schemas für automatische Request-Validierung und Antwortserialisierung.