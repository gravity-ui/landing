# playwright-tools

一套用于使用 Playwright Test 编写测试的附加工具库。

```
npm i -D @gravity-ui/playwright-tools
```

该包包含几个用于不同目的的子目录。您应该从这些子目录导入，例如：

```ts
import { matchScreenshot } from 'playwright-tools/actions';
```

- [actions](./actions/README.md) — 浏览器操作。
- [auth/storage](./auth/storage/README.md) — 用于保存和恢复浏览器存储快照的认证函数。
- [component-tests](./component-tests/README.md) — Playwright 组件测试的工具和 fixtures。
- [fixtures](./fixtures/README.md) — 用于将值传递到测试中的 fixtures。
- [har](./har/README.md) — 用于处理 HAR 请求转储的函数。
- [utils](./utils/README.md) — 辅助函数。

您可以在 [Playwright 文档](https://playwright.dev/docs/intro) 中了解更多关于 Playwright 的信息以及如何配置它。

## Maintainers

[@Avol-V](https://github.com/Avol-V)
[SwinX](https://github.com/SwinX)