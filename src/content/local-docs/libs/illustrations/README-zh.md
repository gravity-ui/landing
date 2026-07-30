# @gravity-ui/illustrations &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/illustrations)](https://www.npmjs.com/package/@gravity-ui/illustrations) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/illustrations/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/illustrations/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/illustrations/)

## 安装

```shell
npm install --save-dev @gravity-ui/illustrations
```

## 用法

### React

#### 准备工作

设置插画主题。执行以下任一操作：

##### 使用自定义颜色调色板定义 CSS 变量

在应用中定义以下 CSS 变量：

```scss
--gil-color-object-base: rgb(255, 190, 92);
--gil-color-object-accent-heavy: rgb(211, 101, 7);
--gil-color-object-hightlight: rgb(255, 216, 157);
--gil-color-shadow-over-object: rgb(211, 158, 80);
--gil-color-background-lines: rgb(140, 140, 140);
--gil-color-background-shapes: rgb(242, 242, 242);
--gil-color-object-accent-light: rgb(255, 255, 255);
--gil-color-object-danger: rgb(255, 0, 61);
```

##### 在 SCSS 中使用带有默认 gravity-theme 的 mixin

使用以下 mixin 为不同主题的插画设置样式：

```scss
@import '@gravity-ui/illustrations/styles/theme.scss';

.g-root {
  &_theme_light {
    @include g-illustrations-colors-light;
  }

  &_theme_light-hc {
    @include g-illustrations-colors-light-hc;
  }

  &_theme_dark {
    @include g-illustrations-colors-dark;
  }

  &_theme_dark-hc {
    @include g-illustrations-colors-dark-hc;
  }
}
```

##### 对于已安装 gravity theme 的项目，有另一种选择

或者，如果项目中已安装 `@gravity-ui/uikit` 并使用默认主题，您可以直接在项目根样式文件中导入 `styles.scss`：

```scss
// 现有的 gravity 样式定义
import '@gravity-ui/uikit/styles/styles.css';
// 只需在下方添加另一个导入
import '@gravity-ui/illustrations/styles/styles.scss';
```

#### 组件用法

```js
import NotFound from '@gravity-ui/illustrations/NotFound';
```

或者

```js
import {NotFound} from '@gravity-ui/illustrations';
```

### SVG

> 您可能需要相应的加载器来处理此文件

```js
import notFound from '@gravity-ui/illustrations/svgs/not-found-light.svg';
```

### 开发

要根据新设计更新插画，请更改 light 主题下的 svg 内容（`<此仓库根目录>/svgs/<插画名称>-light.svg` 文件），然后运行命令：

```shell
npm run generate
```

## 许可证

在 MIT 许可下分发。有关详细信息，请参阅 [LICENSE](LICENSE)。

## 供 AI 代理使用

一套主题化的扁平化 SVG 插画（空状态、错误、未找到等），适用于 Gravity UI 应用——当您需要现成的、支持主题的占位符/空状态插画时，请使用它，而不是自己绘制或使用简单的图标。

### 何时使用

- 需要一致插画的空状态、404/错误页面或入门引导占位符，而不是功能性 UI 控件。
- 可主题化的插画——SVG 可通过 SCSS mixin 或 CSS 变量响应 Gravity 主题（浅色/深色、高对比度）。
- 将插画作为 React 组件（默认）或原始 `.svg` 文件导入。

### 何时不要使用

- 对于功能性 UI 图标（箭头、勾选、按钮），请使用 [`@gravity-ui/icons`](https://gravity-ui.com/icons)——插画是装饰性艺术品，不是 UI 符号。
- 对于您已有的单个一次性插画资源，请直接导入该资源，而不是引入此包。

### 常见陷阱

- **未导入主题进行渲染**——除非您导入了 `@gravity-ui/illustrations/styles/styles.scss`（或定义了 `--gil-color-*` CSS 变量），否则插画将显示为无色。
- **错误的默认导出名称**——插画组件是 PascalCase 命名的导出（例如 `NotFound`），从包的根目录或单个文件导入（`@gravity-ui/illustrations/NotFound`）。
- **在未配置的打包器中直接导入 `.svg`**——原始 SVG 导入需要相应的加载器；优先使用 React 组件导出以避免打包器配置。

## AI 代理文档

已安装版本的代理可读文档位于 `node_modules/@gravity-ui/illustrations/docs/INDEX.md`。