# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Page constructor

`Page-constructor` 是一个用于根据 `JSON` 数据渲染网页或其部分的库（稍后将支持 `YAML` 格式）。

在创建页面时，会采用组件化方法：页面由一组现成的块构建而成，这些块可以按任意顺序放置。每个块都有特定的类型和一组输入数据参数。

有关输入数据格式和可用块列表，请参阅[文档](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs)。

## 安装

```shell
npm install @gravity-ui/page-constructor
```

## 快速入门

首先，我们需要一个 React 项目和某种服务器。例如，您可以使用 Vite 和 Express 服务器创建一个 React 项目，或者创建一个 Next.js 应用程序——它将同时拥有客户端和服务器端。

安装所需的依赖项：

```shell
npm install @gravity-ui/page-constructor @diplodoc/transform @gravity-ui/uikit
```

将 `Page Constructor` 插入页面。为了使其正常工作，它必须被 `PageConstructorProvider` 包裹：

```tsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';
import '@gravity-ui/page-constructor/styles/styles.scss';

const App = () => {
  const content = {
    blocks: [
      {
        type: 'header-block',
        title: 'Hello world',
        background: {color: '#f0f0f0'},
        description:
          '**Congratulations!** Have you built a [page-constructor](https://github.com/gravity-ui/page-constructor) into your website',
      },
    ],
  };

  return (
    <PageConstructorProvider>
      <PageConstructor content={content} />
    </PageConstructorProvider>
  );
};

export default App;
```

这是最简单的连接示例。为了使 YFM 标记生效，您需要在服务器上处理内容并在客户端接收它。

如果您的服务器是独立的应用程序，那么您需要安装 page-constructor：

```shell
npm install @gravity-ui/page-constructor
```

要处理所有基础块中的 YFM，请调用 `contentTransformer` 并将内容和选项传递给它：

```ts
const express = require('express');
const app = express();
const {contentTransformer} = require('@gravity-ui/page-constructor/server');

const content = {
  blocks: [
    {
      type: 'header-block',
      title: 'Hello world',
      background: {color: '#f0f0f0'},
      description:
        '**Congratulations!** Have you built a [page-constructor](https://github.com/gravity-ui/page-constructor) into your website',
    },
  ],
};

app.get('/content', (req, res) => {
  res.send({content: contentTransformer({content, options: {lang: 'en'}})});
});

app.listen(3000);
```

在客户端，添加一个端点调用来接收内容：

```tsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';
import '@gravity-ui/page-constructor/styles/styles.scss';
import {useEffect, useState} from 'react';

const App = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/content').then((r) => r.json());
      setContent(response.content);
    })();
  }, []);

  return (
    <PageConstructorProvider>
      <PageConstructor content={content} />
    </PageConstructorProvider>
  );
};

export default App;
```

### 现成模板

要启动新项目，您可以使用我们准备的[基于 Next.js 的现成模板](https://github.com/gravity-ui/page-constructor-website-template)。

### 静态站点生成器

[Page Constructor Builder](https://github.com/gravity-ui/page-constructor-builder) - 用于使用 @gravity-ui/page-constructor 从 YAML 配置构建静态页面的命令行实用程序。

## 文档

### 参数

```typescript
interface PageConstructorProps {
  content: PageContent; // 块数据，JSON 格式。
  shouldRenderBlock?: ShouldRenderBlock; // 在渲染每个块时调用的函数，允许您设置其显示的条件。
  custom?: Custom; // 自定义块（参见“自定义”）。
  renderMenu?: () => React.ReactNode; // 渲染页面菜单（带导航）的函数（我们计划添加默认菜单版本的渲染）。
  navigation?: NavigationData; // 用于在 JSON 格式中使用导航组件的导航数据
  isBranded?: boolean; // 如果为 true，则添加一个链接到 https://gravity-ui.com/ 的页脚。尝试使用 BrandFooter 组件进行更多自定义。
}

interface PageConstructorProviderProps {
  isMobile?: boolean; // 指示代码在移动模式下执行的标志。
  locale?: LocaleContextProps; // 关于语言和域的信息（用于生成和格式化链接）。
  location?: Location; // 浏览器或路由历史记录的 API，页面 URL。
  analytics?: AnalyticsContextProps; // 用于处理分析事件的函数

  ssrConfig?: SSR; // 指示代码在服务器端运行的标志。
  theme?: 'light' | 'dark'; // 用于渲染页面的主题。
  mapsContext?: MapsContextType; // 地图参数：apikey、type、scriptSrc、nonce
}

export interface PageContent extends Animatable {
  blocks: Block[];
  menu?: Menu;
  background?: MediaProps;
}

interface Custom {
  blocks?: CustomItems;
  subBlocks?: CustomItems;
  headers?: CustomItems;
  loadable?: LoadableConfig;
}

type ShouldRenderBlock = (block: Block, blockKey: string) => Boolean;

interface Location {
  history?: History;
  search?: string;
  hash?: string;
  pathname?: string;
  hostname?: string;
}

interface Locale {
  lang?: Lang;
  tld?: string;
}

interface SSR {
  isServer?: boolean;
}

interface NavigationData {
  logo: NavigationLogo;
  header: HeaderData;
}

interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}

interface HeaderData {
  leftItems: NavigationItem[];
  rightItems?: NavigationItem[];
}
```

```json
{
  "navigationLogo": {
    "icon": "ImageProps",
    "text": "string",
    "url": "string"
  }
}
```

### 服务器工具

该包提供了一组服务器工具，用于转换您的内容。

```ts
const {fullTransform} = require('@gravity-ui/page-constructor/server');

const {html} = fullTransform(content, {
  lang,
  extractTitle: true,
  allowHTML: true,
  path: __dirname,
  plugins,
});
```

底层使用了一个包将 Yandex Flavored Markdown 转换为 HTML - `diplodoc/transfrom`，它也是对等依赖项。

您也可以在需要的地方使用有用的工具，例如在您的自定义组件中。

```ts
const {
  typografToText,
  typografToHTML,
  yfmTransformer,
} = require('@gravity-ui/page-constructor/server');

const post = {
  title: typografToText(title, lang),
  content: typografToHTML(content, lang),
  description: yfmTransformer(lang, description, {plugins}),
};
```

您可以在此 [部分](https://github.com/gravity-ui/page-constructor/tree/main/src/text-transform) 找到更多工具。

### 服务器工具和转换器的详细文档

有关使用服务器工具的全面指南，包括详细说明和高级用例，请访问 [服务器工具使用附加章节](./docs/data-preparation.md)。

### 自定义块

页面构造器允许您使用用户在其应用程序中定义的块。块是常规的 React 组件。

要将自定义块传递给构造器：

1. 在您的应用程序中创建一个块。

2. 在您的代码中，创建一个对象，以块类型（字符串）作为键，以导入的块组件作为值。

3. 将您创建的对象传递给 `PageConstructor` 组件的 `custom.blocks`、`custom.headers` 或 `custom.subBlocks` 参数（`custom.headers` 指定要在常规内容上方单独渲染的块标题）。

4. 现在您可以通过指定类型和数据在输入数据（`content` 参数）中使用创建的块。

要在创建自定义块时使用 mixins 和构造器样式变量，请在您的文件中添加导入：

```css
@import '~@gravity-ui/page-constructor/styles/styles.scss';
```

要使用默认字体，请在您的文件中添加导入：

```css
@import '~@gravity-ui/page-constructor/styles/fonts.scss';
```

### 可加载块

有时需要一个块根据要加载的数据自行渲染。在这种情况下，可以使用可加载块。

要添加自定义 `loadable` 块，请将 `custom.loadable` 属性传递给 `PageConstructor`，其中数据源名称（字符串）作为键，对象作为值。

```typescript
export interface LoadableConfigItem {
  fetch: FetchLoadableData; // 数据加载方法
  component: React.ComponentType; // 用于传递加载数据的块
}

type FetchLoadableData<TData = any> = (blockKey: string) => Promise<TData>;
```

### Grid

页面构造器使用 `bootstrap` 网格及其基于 React 组件的实现，您可以在自己的项目中使用它们（包括独立于构造器使用）。

使用示例：

```jsx
import {Grid, Row, Col} from '@gravity-ui/page-constructor';

const Page = ({children}: PropsWithChildren<PageProps>) => (
  <Grid>
    <Row>
      <Col sizes={{lg: 4, sm: 6, all: 12}}>{children}</Col>
    </Row>
  </Grid>
);
```

### Navigation

页面导航也可以独立于构造器使用：

```jsx
import {Navigation} from '@gravity-ui/page-constructor';

const Page= ({data, logo}: React.PropsWithChildren<PageProps>) => <Navigation data={data} logo={logo} />;
```

### Blocks

每个块都是一个原子顶级组件。它们存储在 `src/units/constructor/blocks` 目录中。

### Sub-blocks

子块是可以在块 `children` 属性中使用的组件。在配置中，指定了子块的子组件列表。渲染后，这些子块将作为 `children` 传递给块。

### 如何向 `page-constructor` 添加新块

1. 在 `src/blocks` 或 `src/sub-blocks` 目录中，创建一个包含块或子块代码的文件夹。

2. 将块或子块名称添加到 `BlockType` 或 `SubBlockType` 枚举中，并在 `src/models/constructor-items/blocks.ts` 或 `src/models/constructor-items/sub-blocks.ts` 文件中以与现有项类似的方式描述其属性。

3. 在 `src/blocks/index.ts` 文件中为块添加导出，在 `src/sub-blocks/index.ts` 文件中为子块添加导出。

4. 在 `src/constructor-items.ts` 中将新组件或块添加到映射中。

5. 为新块添加验证器：

   - 在块或子块目录中添加 `schema.ts` 文件。在此文件中，使用 [`json-schema`](http://json-schema.org/) 格式描述组件的参数验证器。
   - 在 `schema/validators/blocks.ts` 或 `schema/validators/sub-blocks.ts` 文件中导出它。
   - 在 `schema/index.ts` 文件中的 `enum` 或 `selectCases` 中添加它。

6. 在块目录中，添加 `README.md` 文件，其中包含输入参数的描述。
7. 在块目录中，在 `__stories__` 文件夹中添加 storybook 演示。故事的所有演示内容应放在故事目录中的 `data.json` 中。通用的 `Story` 必须接受块属性的类型，否则 Storybook 中将显示不正确的块属性。
8. 将块数据模板添加到 `src/editor/data/templates/` 文件夹，文件名应与块类型匹配。
9. （可选）将块预览图标添加到 `src/editor/data/previews/` 文件夹，文件名应与块类型匹配。

### Themes

`PageConstructor` 允许您使用主题：您可以根据应用程序中选择的主题为各个块属性设置不同的值。

要为块属性添加主题支持：

1. 在 `models/blocks.ts` 文件中，使用 `ThemeSupporting<T>` 泛型定义相应块属性的类型，其中 `T` 是属性的类型。

2. 在块的 `react` 组件所在的文件中，通过 `getThemedValue` 和 `useTheme` hook 获取带有主题的属性值（请参阅 `MediaBlock.tsx` 块中的示例）。

3. 为属性验证器添加主题支持：在块的 `schema.ts` 文件中，将该属性包装在 `withTheme` 中。

### i18n

`page-constructor` 是一个基于 `uikit` 的库，我们使用 uikit 的 `i18n` 实例。要设置国际化，只需使用 uikit 的 `configure`：

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

### Maps

要使用地图，请将地图类型、`scriptSrc` 和 `apiKey` 放在 `PageConstructorProvider` 的 `mapContext` 字段中。

您可以在项目根目录下的 `.env.development` 文件中为开发模式定义环境变量。
`STORYBOOK_GMAP_API_KEY` - google maps 的 apiKey

### Analytics

#### Init

要开始使用任何分析功能，请将一个处理程序传递给构造器。该处理程序必须在项目端创建。处理程序将接收 `default` 和 `custom` 事件对象。传递的处理程序将在按钮、链接、导航和控件点击时触发。由于只有一个处理程序用于所有事件处理，因此在创建处理程序时请注意如何处理不同的事件。提供了预定义字段，用于帮助您构建复杂的逻辑。

将 `autoEvents: true` 传递给构造器以触发自动配置的事件。

```ts
function sendEvents(events: MyEventType []) {
  ...
}

<PageConstructorProvider
    ...

    analytics={{sendEvents, autoEvents: true}}

    ...
/>
```

事件对象只有一个必需字段 - `name`。它还包含预定义字段，用于帮助管理复杂逻辑。例如，`counter.include` 可以帮助在项目中使用多个分析系统时，将事件发送到特定的计数器。

```ts
type AnalyticsEvent<T = {}> = T & {
  name: string;
  type?: string;
  counters?: AnalyticsCounters;
  context?: string;
};
```

可以为项目配置所需的事件类型。

```ts
type MyEventType = AnalyticsEvent<{
  [key: string]?: string; // 只支持 'string' 类型
}>;
```

#### 计数器选择器

可以配置事件发送到哪个分析系统。

```ts
type AnalyticsCounters = {
  include?: string[]; // 将应用的分析计数器 ID 数组
  exclude?: string[]; // 不会应用的分析计数器 ID 数组
};
```

#### context 参数

传递 `context` 值来定义事件触发的项目中的位置。

使用下面的选择器或创建满足项目需求的逻辑。

```ts
// analyticsHandler.ts
if (isCounterAllowed(counterName, counters)) {
  analyticsCounter.reachGoal(counterName, name, parameters);
}
```

#### 保留的事件类型

几个预定义的事件类型用于标记自动配置的事件。例如，可以使用这些类型来过滤默认事件。

```ts
enum PredefinedEventTypes {
  Default = 'default-event', // 每次点击按钮时触发的默认事件
  Play = 'play', // React 播放器事件
  Stop = 'stop', // React 播放器事件
}
```

## 开发

```bash
npm ci
npm run dev
```

#### 关于 Vite 的说明

```ts
import react from '@vitejs/plugin-react-swc';
import dynamicImport from 'vite-plugin-dynamic-import';

export default defineConfig({
  plugins: [
    react(),
    dynamicImport({
      filter: (id) => id.includes('/node_modules/@gravity-ui/page-constructor'),
    }),
  ],
});
```

对于 Vite，您需要安装 `vite-plugin-dynamic-import` 插件并配置 config 以便动态导入正常工作。

## 发布流程

通常情况下，我们使用两种类型的提交：

1. `fix`: `fix` 类型的提交用于修复代码库中的错误（这对应于语义化版本控制中的 PATCH）。
2. `feat`: `feat` 类型的提交在代码库中引入新功能（这对应于语义化版本控制中的 MINOR）。
3. `BREAKING CHANGE`: 包含 `BREAKING CHANGE:` 页脚的提交，或在类型/范围后附加 `!` 的提交，会引入破坏性的 API 更改（对应于语义化版本控制中的 MAJOR）。`BREAKING CHANGE` 可以是任何类型提交的一部分。
4. 要手动设置发布包版本，您需要在提交消息中添加 `Release-As: <version>`，例如：

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

您可以在 [这里](https://www.conventionalcommits.org/en/v1.0.0/) 查看所有信息。

当您的 pull-request 获得代码所有者的批准并通过所有检查后，请执行以下操作：

1. 检查是否有来自其他贡献者的发布 pull-request（看起来像 `chore(main): release 0.0.0`）。如果存在，请检查它未合并的原因。如果贡献者同意发布共享版本，请继续下一步。如果不同意，请要求他发布自己的版本，然后继续下一步。
2. Squash and merge 您的 PR（发布新版本需要使用 Github-Actions）。
3. 等待机器人创建一个包含新包版本和 `CHANGELOG.md` 中您更改信息的 PR。您可以在 [Actions 标签页](https://github.com/gravity-ui/page-constructor/actions) 上查看此过程。
4. 检查 `CHANGELOG.md` 中的更改并批准机器人的 PR。
5. Squash and merge PR。您可以在 [Actions 标签页](https://github.com/gravity-ui/page-constructor/actions) 上查看发布过程。

### Alpha 版本发布

如果您想从您的分支发布包的 alpha 版本，您可以手动进行：

1. 转到 Actions 标签页。
2. 在左侧页面选择 "Release alpha version" 工作流。
3. 右侧会显示 "Run workflow" 按钮。在这里您可以选择分支。
4. 您还可以看到一个手动版本字段。如果您是第一次在您的分支发布 alpha 版本，请不要在此处设置任何内容。首次发布后，您必须手动设置新版本，因为我们不会更改 `package.json`，以防分支很快过期。否则，您将收到错误。请在您的手动版本中使用 `alpha` 前缀，否则您将收到错误。
5. 点击 "Run workflow" 并等待操作完成。您可以发布任意次数的版本，但不要滥用它，只在真正需要时发布版本。在其他情况下，请使用 [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack)。

### Beta-major 版本发布

如果您想发布新 major 版本，在稳定版本之前您可能需要 beta 版本，请执行以下操作：

1. 创建或更新 `beta` 分支。
2. 将您的更改添加到其中。
3. 当您准备好发布新的 beta 版本时，手动使用一个空提交进行发布（或者您可以将此提交消息和页脚添加到最后一个提交中）：

```bash
git commit -m 'fix: last commit

Release-As: 3.0.0-beta.0' --allow-empty
```

4. Release please 机器人将创建一个新的 PR 到 `beta` 分支，其中包含更新的 `CHANGELOG.md` 并增加包的版本。
5. 您可以根据需要重复此操作。当您准备好发布没有 beta 标签的最新 major 版本时，您需要从 `beta` 分支创建 PR 到 `main` 分支。请注意，您的包版本带有 beta 标签是正常的。机器人知道这一点并会正确更改它。`3.0.0-beta.0` 将变为 `3.0.0`。

### 之前 major 版本的发布流程

如果您想在提交到 main 后为之前的 major 版本发布新版本，请执行以下操作：

1. 更新必要的分支，之前的 major 版本分支名称为：
   1. `version-1.x.x/fixes` - 用于 major 1.x.x
   2. `version-2.x.x` - 用于 major 2.x.x
2. 从之前的 major 版本分支检出新分支。
3. 从 `main` 分支 cherry-pick 您的提交。
4. 创建 PR，获得批准并合并到之前的 major 版本分支。
5. Squash and merge 您的 PR（发布新版本需要使用 Github-Actions）。
6. 等待机器人创建一个包含新包版本和 `CHANGELOG.md` 中您更改信息的 PR。您可以在 [Actions 标签页](https://github.com/gravity-ui/page-constructor/actions) 上查看此过程。
7. 检查 `CHANGELOG.md` 中的更改并批准机器人的 PR。
8. Squash and merge PR。您可以在 [Actions 标签页](https://github.com/gravity-ui/page-constructor/actions) 上查看发布过程。

## 页面构造器编辑器

编辑器提供用于页面内容管理的 UI 界面，并支持实时预览。

如何使用：

```tsx
import {Editor} from '@gravity-ui/page-constructor/editor';

interface MyAppEditorProps {
  initialContent: PageContent;
  transformContent: ContentTransformer;
  onChange: (content: PageContent) => void;
}

export const MyAppEditor = ({initialContent, onChange, transformContent}: MyAppEditorProps) => (
  <Editor content={initialContent} onChange={onChange} transformContent={transformContent} />
);
```

## Memory Bank
```

本项目包含一个全面的**记忆库**——一个 Markdown 文档文件的集合，提供了关于项目架构、组件和使用模式的详细信息。记忆库在与 AI 代理协同工作时尤其有用，因为它包含了关于以下内容的结构化信息：

- **项目概述**：核心需求、目标和背景
- **组件文档**：所有组件的详细使用指南
- **系统架构**：技术模式和设计决策
- **开发进度**：当前状态和实现细节

### 使用记忆库

记忆库位于 `memory-bank/` 目录下，由常规的 Markdown 文件组成，可以像阅读其他文档一样阅读：

- `projectbrief.md` - 基础文档，包含核心需求
- `productContext.md` - 项目目的和用户体验目标
- `systemPatterns.md` - 架构和技术决策
- `techContext.md` - 技术栈、设置和约束
- `activeContext.md` - 当前工作重点和近期变更
- `progress.md` - 实现状态和已知问题
- `usage/` - 特定于组件的使用文档
- `storybookComponents.md` - Storybook 集成详情

### 面向 AI 代理

在本项目中与 AI 代理协同工作时，记忆库可作为全面的知识库，帮助代理理解：

- 项目结构和模式
- 组件 API 和使用示例
- 开发工作流程和最佳实践
- 当前实现状态和后续步骤

AI 代理可以阅读这些文件，快速了解项目背景，并就代码变更和实现做出更明智的决策。

## 测试

在提供的 [链接](./test-utils/docs/README.md) 中可以找到全面的文档。