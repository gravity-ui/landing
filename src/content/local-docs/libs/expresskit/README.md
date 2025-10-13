# ExpressKit

ExpressKit is a lightweight [express.js](https://expressjs.com/) wrapper that integrates with [NodeKit](https://github.com/gravity-ui/nodekit) and provides some useful features like request logging, tracing support, async controllers & middleware and verbose routes description.

Installation:

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

Basic usage:

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
