# ExpressKit

ExpressKit ist ein leichtgewichtiger [express.js](https://expressjs.com/)-Wrapper, der sich in [NodeKit](https://github.com/gravity-ui/nodekit) integriert und einige nützliche Funktionen bietet, wie z. B. Request-Logging, Tracing-Unterstützung, asynchrone Controller & Middleware und detaillierte Routenbeschreibungen.

## Installation

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

## Verwendung

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

## Eigene Telemetrie

Standardmäßig sendet die eigene Telemetrie die ursprüngliche Request-URL. Anwendungen mit großen oder
hochgradig variablen Query-Strings können Query-Parameter entfernen, bevor Statistiken gesendet werden:

```typescript
const config: Partial<AppConfig> = {
  appTelemetryChEnableSelfStats: true,
  appTelemetryChSelfStatsStripQueryParams: true,
};
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
| ------------------- | -------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `appCsrfSecret`     | `string \| string[]` | -                                    | **Erforderlich.** Geheimer Schlüssel (oder Schlüssel) für die HMAC-Token-Generierung. Mehrere Schlüssel ermöglichen die Schlüsselrotation. |
| `appCsrfLifetime`   | `number`             | `2592000` (30 Tage)                  | Token-Lebensdauer in Sekunden. Setzen Sie auf `0` für kein Ablaufdatum.                                        |
| `appCsrfHeaderName` | `string`             | `'x-csrf-token'`                     | Name des HTTP-Headers für die Token-Validierung.                                                          |
| `appCsrfMethods`    | `string[]`           | `['POST', 'PUT', 'DELETE', 'PATCH']` | HTTP-Methoden, die eine CSRF-Validierung erfordern.                                                      |

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

Standardmäßig setzt ExpressKit `no-cache`-Header auf allen Antworten. Sie können dieses Verhalten global oder pro Route steuern.

### Globale Konfiguration

```typescript
const config: Partial<AppConfig> = {
  expressEnableCaching: true, // Caching standardmäßig erlauben
};
```

### Routenspezifische Konfiguration

```typescript
const app = new ExpressKit(nodekit, {
  'GET /api/cached': {
    enableCaching: true, // Caching für diese Route erlauben
    handler: (req, res) => res.json({data: 'cacheable'}),
  },
  'GET /api/fresh': {
    enableCaching: false, // No-Cache erzwingen
    handler: (req, res) => res.json({data: 'always fresh'}),
  },
});
```

`enableCaching` auf Routenebene überschreibt die globale Einstellung. Der Caching-Status ist in `req.routeInfo.enableCaching` verfügbar.

## Validierung und Antwortserialisierung

- [Request Validation and Response Serialization](https://github.com/gravity-ui/expresskit/blob/main/docs/VALIDATOR.md) - nutze Zod-Schemas für automatische Request-Validierung und Response-Serialisierung.

## Lizenz

Verteilt unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE).

## Für KI-Agenten

Ein schlanker Express.js-Wrapper auf NodeKit, der Request-Logging, Tracing, asynchrone Controller/Middleware und eine deklarative Routenübersicht hinzufügt – greifen Sie darauf zurück, wenn Sie einen HTTP-Server mit dem NodeKit Logging/Telemetry-Rückgrat benötigen, anstatt Express-Middleware und NodeKit manuell zu verdrahten.

### Wann verwenden

- Erstellung eines Express-HTTP-Dienstes, der NodeKits Logging, Tracing und Konfiguration teilen muss.
- Deklarative Routen (`{'GET /path': handler}`) mit pro-Route-Authentifizierung, CSRF und Caching-Richtlinien.
- Integrierte Sicherheitsfunktionen (CSRF-Tokens, CSP-Header), die mit dem Request-Kontext verknüpft sind.

### Wann nicht verwenden

- Für das grundlegende Logging/Telemetry/Konfiguration ohne eine HTTP-Schicht, verwenden Sie [`@gravity-ui/nodekit`](https://github.com/gravity-ui/nodekit) direkt – ExpressKit hängt davon ab, aber Sie benötigen möglicherweise nicht die HTTP-Teile.
- Für ein Nicht-Express-Framework (Fastify, Koa, NestJS) ist ExpressKit Express-spezifisch; verwenden Sie die Werkzeuge dieses Frameworks.

### Häufige Fallstricke

- **Konstruktion von `ExpressKit` ohne `NodeKit`-Instanz** – der Konstruktor benötigt eine NodeKit-Instanz als erstes Argument; erstellen Sie zuerst `new NodeKit()`.
- **Halluzinieren von `app.get`/`app.post`** – Routen werden als Map von `'METHOD /path': handler` deklariert, die an `new ExpressKit(nodekit, routes)` übergeben wird, nicht über Express-Style-Methodenverkettung.
- **Vergessen, `app.run()` aufzurufen** – Routen werden bei der Konstruktion registriert, aber der Server startet erst, wenn Sie `app.run()` aufrufen.
- **CSRF erwartet einen Auth-Kontext** – die Generierung von CSRF-Tokens erfordert, dass `appAuthHandler` die Benutzer-ID im ursprünglichen Kontext setzt; ohne diese schlägt die Token-Generierung fehl.
- **Verwendung von Express-Style-Middleware, die den Kontext umgeht** – asynchrone Controller/Middleware sollten den ExpressKit-Kontext verwenden, um das Tracing zu erhalten; rohe Express-Handler verwerfen ihn.

## Dokumentation für KI-Agenten

Agentenlesbare Dokumentation für die installierte Version befindet sich in `node_modules/@gravity-ui/expresskit/dist/docs/INDEX.md`.