# NodeKit

NodeKit 是一个为您的 Node.js 应用、脚本和库提供的简单工具集。它提供了日志记录、遥测、配置和错误处理等功能，让您在不同的项目中拥有熟悉的基础。

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
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md) 包含 NodeKit 为您的应用程序提供的有用自定义错误类的说明。
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md) 列出了 NodeKit 捆绑的一些附加辅助函数。

## 贡献

### 入门

克隆 NodeKit 仓库和示例应用程序：

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

将您的 nodekit 链接到 npm 并启动编译器：

```bash
cd nodekit && npm link && npm run dev
```

然后，在另一个终端中，进入 examples 目录，打开您感兴趣的示例，在那里链接您的 nodekit，然后启动应用程序：

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

此时，您可以同时修改 NodeKit 和演示应用程序，并实时查看结果。