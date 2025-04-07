# NodeKit

NodeKit 是一个简单的工具包，用于您的 Node.js 应用程序、脚本和库。它提供了日志记录、遥测、配置和错误处理功能，使您可以在不同的项目中拥有熟悉的基础。

## 入门指南

将依赖项添加到您的项目中：

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

查看 `docs/` 目录获取额外文档：

- [`docs/configuration.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/configuration.md) 指定如何配置 nodekit 本身和基于 nodekit 的应用程序
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md) 描述了 NodeKit 上下文、日志记录和跟踪的概念
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md) 包含 NodeKit 为您的应用程序提供的有用自定义错误类的描述
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md) 列出了一些与 NodeKit 捆绑在一起的额外辅助函数

## 贡献

### 入门指南

获取 NodeKit 存储库和示例应用程序的副本：

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

将您的 nodekit 链接到 npm 并启动编译器：

```bash
cd nodekit && npm link && npm run dev
```

然后，在另一个终端中，转到示例，打开您感兴趣的示例，在那里链接您的 nodekit，然后启动应用程序：

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

此时，您可以对 NodeKit 和演示应用程序进行更改，并实时查看结果。
