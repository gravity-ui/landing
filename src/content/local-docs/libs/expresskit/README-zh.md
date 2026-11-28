# ExpressKit

ExpressKit 是一个轻量级的 [express.js](https://expressjs.com/) 包装器，它集成了 [NodeKit](https://github.com/gravity-ui/nodekit)，并提供了一些有用的功能，例如请求日志记录、跟踪支持、异步控制器和中间件以及详细的路由描述。

## 安装

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

## 用法

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

## 自我遥测

默认情况下，自我遥测会发送原始请求 URL。查询字符串很大或基数很高的应用程序可以在发送统计信息之前剥离查询参数：

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

## CSRF 防护

ExpressKit 提供内置的跨站请求伪造 (CSRF) 防护功能，以保护您的应用程序免受恶意跨域请求的侵害。CSRF 中间件会自动为状态更改的 HTTP 请求生成和验证令牌。

### 基本配置

要启用 CSRF 防护，请在您的配置中设置密钥：

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
| `appCsrfSecret`     | `string \| string[]` | -                                    | **必需。** 用于 HMAC 令牌生成的密钥。多个密钥允许密钥轮换。 |
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

    // 确保您的中间件将用户 ID 设置到 originalContext，否则 CSRF 令牌生成将失败
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

## 缓存控制

默认情况下，ExpressKit 会在所有响应上设置 `no-cache` 标头。您可以全局或按路由控制此行为。

### 全局配置

```typescript
const config: Partial<AppConfig> = {
  expressEnableCaching: true, // 默认允许缓存
};
```

### 按路由配置

```typescript
const app = new ExpressKit(nodekit, {
  'GET /api/cached': {
    enableCaching: true, // 为此路由允许缓存
    handler: (req, res) => res.json({data: 'cacheable'}),
  },
  'GET /api/fresh': {
    enableCaching: false, // 强制不缓存
    handler: (req, res) => res.json({data: 'always fresh'}),
  },
});
```

路由级别的 `enableCaching` 会覆盖全局设置。缓存状态可在 `req.routeInfo.enableCaching` 中获取。

## 验证和响应序列化

- [请求验证和响应序列化](https://github.com/gravity-ui/expresskit/blob/main/docs/VALIDATOR.md) - 使用 Zod schema 自动进行请求验证和响应序列化。

## 许可证

在 MIT 许可下分发。详情请参阅 [LICENSE](LICENSE)。

## 致 AI 代理

一个基于 NodeKit 的轻量级 Express.js 封装，增加了请求日志记录、追踪、异步控制器/中间件以及声明式路由映射——当你需要一个具有 NodeKit 日志/遥测骨架的 HTTP 服务器时，可以使用它，而不是手动连接 Express 中间件和 NodeKit。

### 何时使用

- 构建一个必须共享 NodeKit 日志、追踪和配置的 Express HTTP 服务。
- 声明式路由 (`{'GET /path': handler}`)，支持每个路由的认证、CSRF 和缓存策略。
- 内置安全功能（CSRF 令牌、CSP 头部），与请求上下文集成。

### 何时**不**使用

- 对于没有 HTTP 层的基础日志/遥测/配置，请直接使用 [`@gravity-ui/nodekit`](https://github.com/gravity-ui/nodekit) — ExpressKit 依赖它，但你可能不需要 HTTP 部分。
- 对于非 Express 框架（Fastify, Koa, NestJS），ExpressKit 是 Express 特定的；请使用该框架自己的工具。

### 常见陷阱

- **在没有 `NodeKit` 实例的情况下构造 `ExpressKit`** — 构造函数需要一个 `NodeKit` 实例作为第一个参数；请先创建 `new NodeKit()`。
- **误以为有 `app.get`/`app.post`** — 路由是通过传递给 `new ExpressKit(nodekit, routes)` 的 `'METHOD /path': handler` 映射来声明的，而不是通过 Express 风格的方法链式调用。
- **忘记调用 `app.run()`** — 路由在构造时注册，但服务器只有在你调用 `app.run()` 时才会启动。
- **CSRF 期望认证上下文** — CSRF 令牌生成需要 `appAuthHandler` 在原始上下文中设置用户 ID；否则，令牌生成会失败。
- **使用绕过上下文的 Express 风格中间件** — 异步控制器/中间件应使用 ExpressKit 的上下文来保留追踪；原始的 Express 处理程序会丢弃它。

## 致 AI 代理的文档

已安装版本的代理可读文档位于 `node_modules/@gravity-ui/expresskit/dist/docs/INDEX.md`。