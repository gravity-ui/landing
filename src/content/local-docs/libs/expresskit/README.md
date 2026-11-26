# ExpressKit

ExpressKit is a lightweight [express.js](https://expressjs.com/) wrapper that integrates with [NodeKit](https://github.com/gravity-ui/nodekit) and provides some useful features like request logging, tracing support, async controllers & middleware and verbose routes description.

## Install

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

## Usage

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

## Self telemetry

By default, self telemetry sends the original request URL. Applications with large or
high-cardinality query strings can strip query parameters before sending stats:

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

## CSRF Protection

ExpressKit provides built-in Cross-Site Request Forgery (CSRF) protection to secure your applications against malicious cross-origin requests. The CSRF middleware automatically generates and validates tokens for state-changing HTTP requests.

### Basic Configuration

To enable CSRF protection, configure the secret key in your config:

```typescript
import type {AppConfig} from '@gravity-ui/nodekit';

const config: Partial<AppConfig> = {
  // ...
  appCsrfSecret: 'your-secret-key-here',
};

export default config;
```

### Configuration Options

| Option              | Type                 | Default                              | Description                                                                                     |
| ------------------- | -------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `appCsrfSecret`     | `string \| string[]` | -                                    | **Required.** Secret key(s) for HMAC token generation. Multiple secrets allow for key rotation. |
| `appCsrfLifetime`   | `number`             | `2592000` (30 days)                  | Token lifetime in seconds. Set to `0` for no expiration.                                        |
| `appCsrfHeaderName` | `string`             | `'x-csrf-token'`                     | HTTP header name for token validation.                                                          |
| `appCsrfMethods`    | `string[]`           | `['POST', 'PUT', 'DELETE', 'PATCH']` | HTTP methods that require CSRF validation.                                                      |

### Usage

Once configured, CSRF protection is automatically applied to all routes with the specified HTTP methods:

```typescript
import {ExpressKit, AuthPolicy} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

const nodekit = new NodeKit({
  config: {
    appCsrfSecret: 'your-secret-key',
    appAuthPolicy: AuthPolicy.required,

    // Ensure that your middleware sets user id to the originalContext, otherwise CSRF token generation will fail
    appAuthHandler: yourAuthHandler,
  },
});

const app = new ExpressKit(nodekit, {
  'GET /api/form': (req, res) => {
    // Token is available in request context
    res.json({csrfToken: req.originalContext.get('csrfToken')});
  },

  'POST /api/submit': (req, res) => {
    // This route automatically validates CSRF token
    res.json({message: 'Form submitted successfully'});
  },
});
```

### Per-Route Configuration

You can disable CSRF protection for specific routes:

```typescript
const app = new ExpressKit(nodekit, {
  'POST /api/webhook': {
    authPolicy: AuthPolicy.required,
    disableCsrf: true, // Disable CSRF for this route
    handler: (req, res) => {
      res.json({message: 'Webhook processed'});
    },
  },
});
```

## Caching Control

By default, ExpressKit sets `no-cache` headers on all responses. You can control this behavior globally or per-route.

### Global configuration

```typescript
const config: Partial<AppConfig> = {
  expressEnableCaching: true, // Allow caching by default
};
```

### Per-route configuration

```typescript
const app = new ExpressKit(nodekit, {
  'GET /api/cached': {
    enableCaching: true, // Allow caching for this route
    handler: (req, res) => res.json({data: 'cacheable'}),
  },
  'GET /api/fresh': {
    enableCaching: false, // Force no-cache
    handler: (req, res) => res.json({data: 'always fresh'}),
  },
});
```

Route-level `enableCaching` overrides the global setting. The caching state is available in `req.routeInfo.enableCaching`.

## Validation and Response Serialization

- [Request Validation and Response Serialization](https://github.com/gravity-ui/expresskit/blob/main/docs/VALIDATOR.md) - use Zod schemas for automatic request validation and response serialization.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

## For AI agents

A thin Express.js wrapper on top of NodeKit that adds request logging, tracing, async controllers/middleware, and a declarative route map — reach for it when you need an HTTP server with the NodeKit logging/telemetry spine, instead of wiring Express middleware and NodeKit together by hand.

### When to use

- Building an Express HTTP service that must share NodeKit's logging, tracing, and config.
- Declarative routes (`{'GET /path': handler}`) with per-route auth, CSRF, and caching policy.
- Built-in security concerns (CSRF tokens, CSP headers) integrated with the request context.

### When not to use

- For the foundational logging/telemetry/config without an HTTP layer, use [`@gravity-ui/nodekit`](https://github.com/gravity-ui/nodekit) directly — ExpressKit depends on it but you may not need the HTTP parts.
- For a non-Express framework (Fastify, Koa, NestJS), ExpressKit is Express-specific; use that framework's own tooling.

### Common pitfalls

- **Constructing `ExpressKit` without a `NodeKit` instance** — the constructor requires a NodeKit instance as the first argument; create `new NodeKit()` first.
- **Hallucinating `app.get`/`app.post`** — routes are declared as a map of `'METHOD /path': handler` passed to `new ExpressKit(nodekit, routes)`, not via Express-style method chaining.
- **Forgetting to call `app.run()`** — routes are registered at construction, but the server only starts when you call `app.run()`.
- **CSRF expecting an auth context** — CSRF token generation requires `appAuthHandler` to set the user id in the original context; without it, token generation fails.
- **Using Express-style middleware that bypasses the context** — async controllers/middleware should use ExpressKit's context to preserve tracing; raw Express handlers drop it.

## Documentation for AI agents

Agent-readable documentation for the installed version is located in `node_modules/@gravity-ui/expresskit/dist/docs/INDEX.md`.
