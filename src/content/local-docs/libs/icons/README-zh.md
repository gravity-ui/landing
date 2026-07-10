# @gravity-ui/icons &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/icons)](https://www.npmjs.com/package/@gravity-ui/icons) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/icons/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/icons/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/icons/)

Gravity UI 图标集。图标提供 SVG 和 React 两种格式。请查看 [展示页面](https://preview.gravity-ui.com/icons/)。

## 安装

```shell
npm install --save-dev @gravity-ui/icons
```

## 使用

### React

```js
import Cloud from '@gravity-ui/icons/Cloud';
```

或者

```js
import {Cloud} from '@gravity-ui/icons';
```

### SVG

> 您可能需要相应的加载器来处理此文件

```js
import cloudIcon from '@gravity-ui/icons/svgs/cloud.svg';
```

## 许可证

在 MIT 许可下分发。详情请参阅 [LICENSE](LICENSE)。

## 致 AI 代理

Gravity UI 的官方 SVG 图标集，提供 React 组件和原始 `.svg` 文件，可与 `@gravity-ui/uikit` 的 `Icon` 渲染器一起使用。

### 何时使用

- 您需要在 Gravity UI 应用中使用图标，并希望获得一套一致、现成的图标。
- 通过 uikit 渲染图标：在此导入图标组件，并通过其 `data` prop 传递给 uikit 的 `Icon`。
- 您需要原始 `.svg` 资源（例如用于 CSS `background-image` 或构建时 SVG 加载器），而不是 React 组件。

### 何时不要使用

- 在屏幕上渲染图标 — 此包仅提供图标字形；实际的渲染器（尺寸、颜色、可访问性）是来自 [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) 的 `Icon` 组件。
- 您需要一套中未包含的自定义或品牌图标 — 导入您自己的 SVG 并将其传递给 uikit 的 `Icon`；不要期望它会出现在这里。

### 常见陷阱

- **图标通过数据传递，而非名称。** 请执行 `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} />` — 没有 `<Icon name="gear" />` 的 API，并且此包本身不导出 `<Icon>` 组件。
- **导入路径对 tree-shaking 很重要。** `import Cloud from '@gravity-ui/icons/Cloud'` 会拉取单个图标；`import {Cloud} from '@gravity-ui/icons'` 也可以工作，但依赖于打包器进行 tree-shaking。
- **SVG 导入需要加载器。** `import icon from '@gravity-ui/icons/svgs/cloud.svg'` 仅在您的打包器配置为处理 `.svg` 文件时才有效。
- **大小和颜色来自渲染器。** 在 uikit 的 `Icon` 上设置 `size`，并使用 `color`/CSS `currentColor` 控制颜色；SVG 本身不包含固定的颜色。