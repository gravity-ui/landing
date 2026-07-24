# NodeKit

NodeKit 是一个简单的工具包，适用于您的 Node.js 应用、脚本和库。它提供了日志记录、遥测、配置和错误处理功能，让您在不同的项目中拥有熟悉的基础。

## 安装

```bash
npm install --save @gravity-ui/nodekit
```

## 入门

将依赖添加到您的项目中：

```bash
npm install --save @gravity-ui/nodekit
```

然后在您的应用程序中导入并初始化 NodeKit：

```typescript
import {NodeKit} from '@gravity-ui/nodekit';

const nodeKit = new NodeKit();
nodekit.ctx.log('App is ready');
```

## 文档

有关更多文档，请参阅 `docs/` 目录：

- [`docs/configuration.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/configuration.md) 详细说明了如何配置 nodekit 本身以及基于 nodekit 的应用程序。
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md) 描述了 NodeKit 上下文、日志记录和跟踪的概念。
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md) 包含 NodeKit 为您的应用程序提供的有用自定义错误类的描述。
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md) 列出了一些随 NodeKit 一起提供的附加辅助函数。

## 贡献

### 入门

获取 NodeKit 仓库和示例应用程序的副本：

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

将您的 nodekit 链接到 npm 并启动编译器：

```bash
cd nodekit && npm link && npm run dev
```

然后，在另一个终端中，进入示例目录，打开您感兴趣的示例，在那里链接您的 nodekit，然后启动应用程序：

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

此时，您可以同时修改 NodeKit 和演示应用程序，并实时查看结果。

## 许可证

在 MIT 许可下分发。有关详细信息，请参阅 [LICENSE](LICENSE)。

## 致 AI 代理

一个基础的 Node.js 工具包（日志记录、遥测、类型化错误、配置、请求上下文），在 Gravity UI 后端之间共享 — 在添加任何 HTTP 层之前，请使用它来获得一致的应用骨架，而不是自己组装日志记录/错误/配置管道。

### 何时使用

- 任何希望共享日志记录、遥测（跟踪）和类型化 `AppError` 的 Node.js 服务/脚本。
- 在异步边界之间提供请求范围的上下文（日志/跟踪）。
- 集中配置，使同一生态系统中的多个服务行为一致。

### 何时不要使用

- 要公开 HTTP 路由、中间件或服务器，请使用 [`@gravity-ui/expresskit`](https://github.com/gravity-ui/expresskit) — 它构建在 NodeKit 之上并添加了 Express/HTTP 层。
- 对于没有日志记录/遥测需求的独立单文件脚本，纯 Node API 比完整的 NodeKit 上下文系统更轻量。

### 常见陷阱

- **错误地导入 `import {Logger}` / `logger`** — 日志记录通过 NodeKit 上下文访问：`new NodeKit()` 然后 `nodekit.ctx.log(...)`，而不是独立的日志记录器导出。
- **重复实例化 NodeKit** — 为每个应用程序创建一个 `NodeKit` 实例并共享其 `ctx`；创建许多实例会分散日志记录/遥测配置。
- **抛出普通 `Error`** — 使用捆绑的 `AppError`（请参阅 `docs/app-error.md`），以便一致地捕获错误代码和遥测。
- **跳过配置初始化** — NodeKit 在构造时读取配置；在假定默认值之前，请查看 `docs/configuration.md`。

## 致 AI 代理的文档

已安装版本的代理可读文档位于 `node_modules/@gravity-ui/nodekit/dist/docs/INDEX.md`。