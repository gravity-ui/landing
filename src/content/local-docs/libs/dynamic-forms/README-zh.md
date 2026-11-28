# @gravity-ui/dynamic-forms &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dynamic-forms)](https://www.npmjs.com/package/@gravity-ui/dynamic-forms) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dynamic-forms/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/dynamic-forms/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dynamic-forms/)

**English** · [Русский](README-ru.md)

一个基于 JSON Schema 和 `react-final-form` 的表单渲染器。单一的 Schema 同时描述了值和它的渲染方式：验证规则是标准的 Draft-07 关键字，而节点的渲染方式则通过 `nodeParameters` 扩展来定义。

- 入口点：`@gravity-ui/dynamic-forms`。
- 状态：**API 稳定**。
- 两层结构：`core`（无头引擎）和 `kit`（基于 `@gravity-ui/uikit` 的现成组件和布局）。

之前的 DynamicField / DynamicView API 可从 `@gravity-ui/dynamic-forms/deprecated` 访问。SchemaRenderer 从已移除的 `/unstable` 入口点导入的内容将移至包的根目录。有关完整的迁移和旧 API 文档，请参阅 [迁移指南](MIGRATION.md) 和 [docs/deprecated](docs/deprecated)。

## 安装

```shell
npm install --save-dev @gravity-ui/dynamic-forms
```

## 目录

- [如何使用](docs/en/how-to-use.md) — 快速入门、`name` 属性、模式、选择器。
- [API 参考](docs/en/api.md) — 组件、钩子、属性、常量、工具函数、`kit` 导出、类型。
- [Schema](docs/en/schema.md) — `nodeParameters`、标志、注解、关键字、`stringNumber`、`$ref`。
- [运行时](docs/en/runtime.md) — 节点生命周期、值转换、验证、错误、事件、补丁。
- [Kit](docs/en/kit.md) — 布局、实体目录、服务组件、样式。
- [扩展](docs/en/extension.md) — 自定义实体、布局、验证器、配置、独立渲染器。
- [迁移](MIGRATION.md) — 从旧版主 API 或 `/unstable` 迁移、Spec 转换、通过 `/deprecated` 实现兼容。
- [注意事项和限制](docs/en/limitations.md) — 代码验证的差异、限制和 bug。

## 是什么

`src/lib` 是一个表单引擎，表单本身和值的概览都由单个 JSON Schema 构建。`core` 层没有自己的控件：所有渲染的内容都来自配置。验证通过 `json-schema-library` (Draft-07) 和自定义的 `stringNumber` 关键字进行。`kit` 层提供了一个现成的注册表：包含 30 个实体键，分布在 6 种节点类型中，7 个布局键，服务组件，`useExpanded` 钩子，错误文本以及从旧 Spec 格式转换而来的 `specToJsonSchema` 转换器。

## 工作原理

1. **Schema 和配置。** `useSchemaRenderer` 克隆 `schema` 并将状态存储在带有验证器的服务字段中。
2. **节点。** `SchemaRendererNode` 通过指针获取子 schema，注册一个 `final-form` 字段，并选择 `entity` 和 `layout`。
3. **变更。** 通过 `validateFields` 进行的值编辑，只会触发服务字段验证器。
4. **错误。** 验证器将错误按名称分散到 `srState.errors` 中；消息发生变化的节点会重新渲染。
5. **命令式。** `useSchemaRendererTools` 会修补 schema 并添加外部错误，从而重新启动验证。

## 依赖项

| 包                                      | 作用     | 原因                                                               |
| :-------------------------------------- | :------- | :----------------------------------------------------------------- |
| `react` / `react-dom` / `react-is`      | peer     | 18, 19. 渲染。                                                     |
| `final-form` / `react-final-form`       | peer     | 表单、字段、提交、订阅。                                           |
| `@gravity-ui/uikit`                     | peer     | 版本 8. Kit 组件：TextInput, Select, Checkbox 等。                 |
| `json-schema-library`                   | runtime  | Draft-07 验证和自定义 `stringNumber` 关键字。                      |
| `decimal.js`                            | runtime  | `stringNumber` 和 `*_with_scale` 中的数字比较和精度。              |
| `@gravity-ui/date-components`, `date-utils` | runtime  | `DateInput` 和 `DateValue`。                                       |
| `@gravity-ui/icons`                     | runtime  | Alert, Label, TextContent 中的 `iconName`。                        |
| `@gravity-ui/i18n`                      | runtime  | 错误文本的本地化。                                                 |
| `@bem-react/classname`, `lodash`, `uuid`  | runtime  | 类名、工具函数、键。                                               |
| Monaco                                  | external | 不包含在包内。通过 `userContext.MonacoEditor` 传递。               |

## I18N

某些组件包含文本令牌（单词和短语），提供两种语言：`en`（默认）和 `ru`。要设置语言，请使用 `configure` 函数：

```js
// index.js

import {configure, Lang} from '@gravity-ui/dynamic-forms';

configure({lang: Lang.Ru});
```

## 开发

要启动带有 storybook 的开发服务器，请执行以下命令：

```shell
npm ci
npm run dev
```