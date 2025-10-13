# ExpressKit

ExpressKit 是一个轻量级的 [express.js](https://expressjs.com/) 包装器，它集成了 [NodeKit](https://github.com/gravity-ui/nodekit)，并提供了一些有用的功能，例如请求日志记录、跟踪支持、异步控制器和中间件以及详细的路由描述。

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

## CSRF 防护

ExpressKit 提供内置的跨站请求伪造 (CSRF) 防护功能，以保护您的应用程序免受恶意跨域请求的侵害。CSRF 中间件会自动生成和验证用于状态更改的 HTTP 请求的令牌。

### 基本配置

要启用 CSRF 防护，请在您的配置中设置 secret key：

```typescript
import type {AppConfig} from '@gravity-ui/nodekit';

const config: Partial<AppConfig> = {
  // ...
  appCsrfSecret: 'your-secret-key-here',
};

export default config;
```

### 配置选项

| 选项              | 类型                 | 默认值                              | 描述                                                                                     |
| ------------------- | -------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `appCsrfSecret`     | `string \| string[]` | -                                    | **必需。** 用于 HMAC 令牌生成的 secret key。多个 secret 允许进行密钥轮换。 |
| `appCsrfLifetime`   | `number`             | `2592000` (30 天)                  | 令牌的有效期（秒）。设置为 `0` 表示无过期时间。                                        |
| `appCsrfHeaderName` | `string`             | `'x-csrf-token'`                     | 用于令牌验证的 HTTP 标头名称。                                                          |
| `appCsrfMethods`    | `string[]`           | `['POST', 'PUT', 'DELETE', 'PATCH']` | 需要 CSRF 验证的 HTTP 方法。                                                      |

### 用法

配置完成后，CSRF 防护将自动应用于所有具有指定 HTTP 方法的路由：

```typescript
import {ExpressKit, AuthPolicy} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

const nodekit = new NodeKit({
  config: {
    appCsrfSecret: 'your-secret-key',
    appAuthPolicy: AuthPolicy.required,

    // 确保您的中间件将用户 ID 设置到 originalContext 中，否则 CSRF 令牌生成将失败
    appAuthHandler: yourAuthHandler,
  },
});

const app = new ExpressKit(nodekit, {
  'GET /api/form': (req, res) => {
    // 令牌可在请求上下文中获取
    res.json({csrfToken: req.originalContext.get('csrfToken')});
  },

  'POST /api/submit': (req, res) => {
    // 此路由会自动验证 CSRF 令牌
    res.json({message: 'Form submitted successfully'});
  },
});
```

### 按路由配置

您可以为特定路由禁用 CSRF 防护：

```typescript
const app = new ExpressKit(nodekit, {
  'POST /api/webhook': {
    authPolicy: AuthPolicy.required,
    disableCsrf: true, // 为此路由禁用 CSRF
    handler: (req, res) => {
      res.json({message: 'Webhook processed'});
    },
  },
});
```