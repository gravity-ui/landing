# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Page constructor

`Page-constructor` 是一个用于根据 `JSON` 数据渲染网页或其部分的库（稍后将支持 `YAML` 格式）。

在创建页面时，会采用组件化方法：页面由一组可按任意顺序排列的现成块构建而成。每个块都有特定的类型和一组输入数据参数。

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

将 `Page Constructor` 插入页面。为了正常工作，它必须包装在 `PageConstructorProvider` 中：

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

如果您的服务器是独立的应用程序，则需要安装 page-constructor：

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

在客户端，添加一个端点调用以接收内容：

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

[Page Constructor Builder](https://github.com/gravity-ui/page-constructor-builder) - 使用 @gravity-ui/page-constructor 从 YAML 配置构建静态页面的命令行实用程序。

## 文档

### 参数

```typescript
interface PageConstructorProps {
  content: PageContent; // 块数据，JSON 格式。
  shouldRenderBlock?: ShouldRenderBlock; // 在渲染每个块时调用的函数，允许您设置其显示条件。
  custom?: Custom; // 自定义块（参见“自定义”）。
  renderMenu?: () => React.ReactNode; // 渲染页面菜单（包含导航）的函数（我们计划添加默认菜单版本的渲染）。
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

```markdown
interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}
```

### 服务器工具

该包提供了一套服务器工具，用于转换您的内容。

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

底层使用 `diplodoc/transfrom` 包将 Yandex Flavored Markdown 转换为 HTML，因此它也是对等依赖项。

您也可以在需要的地方使用有用的工具，例如在自定义组件中。

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

您可以在此[部分](https://github.com/gravity-ui/page-constructor/tree/main/src/text-transform)找到更多工具。

### 服务器工具和转换器的详细文档

有关使用服务器工具的全面指南，包括详细的解释和高级用例，请访问[服务器工具使用附加章节](./docs/data-preparation.md)。

### 自定义块

页面构造器允许您使用应用程序中用户定义的块。块是常规的 React 组件。

要将自定义块传递给构造器：

1. 在您的应用程序中创建一个块。

2. 在您的代码中，创建一个对象，以块类型（字符串）作为键，以导入的块组件作为值。

3. 将您创建的对象传递给 `PageConstructor` 组件的 `custom.blocks`、`custom.headers` 或 `custom.subBlocks` 参数（`custom.headers` 指定将在常规内容上方单独渲染的块标题）。

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

有时需要一个块根据要加载的数据来渲染自身。在这种情况下，将使用可加载块。

要添加自定义 `loadable` 块，请将 `custom.loadable` 属性传递给 `PageConstructor`，其中数据源名称（字符串）作为键，对象作为值。

```typescript
export interface LoadableConfigItem {
  fetch: FetchLoadableData; // 数据加载方法
  component: React.ComponentType; // 用于传递加载数据的块
}

type FetchLoadableData<TData = any> = (blockKey: string) => Promise<TData>;
```

### Grid

页面构造器使用 `bootstrap` 网格及其基于 React 组件的实现，您可以在自己的项目中（包括独立于构造器）使用它们。

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

子块是可以在块 `children` 属性中使用的组件。在配置中，指定了子块的列表。渲染后，这些子块将作为 `children` 传递给块。

### 如何向 `page-constructor` 添加新块

1. 在 `src/blocks` 或 `src/sub-blocks` 目录中，创建一个包含块或子块代码的文件夹。

2. 将块或子块名称添加到 `BlockType` 或 `SubBlockType` 枚举中，并在 `src/models/constructor-items/blocks.ts` 或 `src/models/constructor-items/sub-blocks.ts` 文件中以与现有项类似的方式描述其属性。

3. 在 `src/blocks/index.ts` 文件中为块添加导出，在 `src/sub-blocks/index.ts` 文件中为子块添加导出。

4. 在 `src/constructor-items.ts` 文件中的映射中添加新组件或块。

5. 为新块添加验证器：

   - 在块或子块目录中添加 `schema.ts` 文件。在此文件中，使用 [`json-schema`](http://json-schema.org/) 格式描述组件的参数验证器。
   - 在 `schema/validators/blocks.ts` 或 `schema/validators/sub-blocks.ts` 文件中导出它。
   - 在 `schema/index.ts` 文件中的 `enum` 或 `selectCases` 中添加它。

6. 在块目录中，添加 `README.md` 文件，其中包含输入参数的描述。
7. 在块目录中，在 `__stories__` 文件夹中添加 storybook 演示。故事的所有演示内容应放在故事目录中的 `data.json` 文件中。泛型 `Story` 必须接受块属性的类型，否则 Storybook 中将显示不正确的块属性。
8. 将块数据模板添加到 `src/editor/data/templates/` 文件夹，文件名应与块类型匹配。
9. （可选）将块预览图标添加到 `src/editor/data/previews/` 文件夹，文件名应与块类型匹配。

### Themes

`PageConstructor` 允许您使用主题：您可以根据应用程序中选择的主题为各个块属性设置不同的值。

要为块属性添加主题支持：

1. 在 `models/blocks.ts` 文件中，使用 `ThemeSupporting<T>` 泛型定义相应块属性的类型，其中 `T` 是属性的类型。

2. 在块的 `react` 组件所在的文件中，使用 `getThemedValue` 和 `useTheme` hook 获取带有主题的属性值（请参阅 `MediaBlock.tsx` 块中的示例）。

3. 为属性验证器添加主题支持：在块的 `schema.ts` 文件中，将该属性包装在 `withTheme` 中。

### i18n

`page-constructor` 是一个 `uikit-based` 库，我们使用 uikit 的 `i18n` 实例。要设置国际化，您只需使用 uikit 的 `configure`：

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

### Maps

要使用地图，请将地图类型、scriptSrc 和 apiKey 放在 `PageConstructorProvider` 的 `mapContext` 字段中。

您可以在项目根目录下的 .env.development 文件中为开发模式定义环境变量。
`STORYBOOK_GMAP_API_KEY` - google maps 的 apiKey

### Analytics

#### Init

要开始使用分析，请将一个处理程序传递给构造器。该处理程序必须在项目端创建。它接收三类事件：
```

- **默认事件** 是由 Page Constructor 为按钮、链接、导航和控件交互生成的通用事件。将 `autoEvents.enabled` 设置为 `true` 以触发它们。
- **扩展事件** 是由组合库提供的已注册事件。`autoEvents.extendedEvents` 的存在会独立于 `enabled` 启用它们，并可选择添加前缀和计数器。
- **自定义事件** 由消费者通过 `analyticsEvents` 提供。自动事件配置不会改变它们。

对象形式是推荐的配置：

```ts
function sendEvents(events: MyEventType []) {
  ...
}

<PageConstructorProvider
    ...

    analytics={{
        sendEvents,
        autoEvents: {
            enabled: true,
            extendedEvents: {
                prefix: 'LIBRARY_',
                counter: 'secondary',
            },
        },
    }}

    ...
/>
```

```ts
type ExtendedEventsConfig = {
  prefix?: string;
  counter?: string;
};

type AutoEventsConfig = {
  enabled: boolean;
  extendedEvents?: ExtendedEventsConfig;
};
```

为了向后兼容，仍然支持旧的布尔形式：`true` 等同于 `{enabled: true}`，`false` 等同于 `{enabled: false}`。如果省略 `autoEvents`，则默认事件和扩展事件都将被禁用。`extendedEvents` 对象即使在 `enabled` 为 `false` 时也会启用提供的扩展事件。

扩展事件必须具有 `type: 'extended-event'`。它们的前缀将按照配置精确拼接，不会改变大小写、分隔符或空格。如果设置了 `counter`，它将为扩展事件定义 `counters.include`：

```ts
// 提供的事件
{name: 'REGISTERED_CLICK', type: 'extended-event'}

// 使用上述配置在 sendEvents 中接收到的事件
{
  name: 'LIBRARY_REGISTERED_CLICK',
  type: 'extended-event',
  counters: {include: ['secondary']},
}
```

事件的发送顺序是：首先是生成的默认事件（如果启用），然后是提供的扩展事件和自定义事件，按其原始顺序。如果未配置 `extendedEvents`，则会省略扩展事件。任何特定于交互的附加上下文将在最后合并到每个触发的事件中。

事件对象只有一个必需字段 - `name`。它还包含预定义字段，用于帮助管理复杂逻辑。例如，`counter.include` 可以帮助在项目中使用多个分析系统时将事件发送到特定的计数器。

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

#### Counter 选择器

可以配置事件以确定发送到哪个分析系统。

```ts
type AnalyticsCounters = {
  include?: string[]; // 将应用的分析计数器 ID 数组
  exclude?: string[]; // 不会应用的分析计数器 ID 数组
};
```

#### context 参数

传递 `context` 值以定义事件触发的项目中的位置。

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
  Default = 'default-event', // 在每次按钮点击时触发的默认事件
  Extended = 'extended-event', // 由组合库提供的事件
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

1. `fix`: `fix` 类型的提交用于修复代码中的错误（这对应于语义化版本控制中的 PATCH）。
2. `feat`: `feat` 类型的提交在代码库中引入新功能（这对应于语义化版本控制中的 MINOR）。
3. `BREAKING CHANGE`: 带有 `BREAKING CHANGE:` 页脚的提交，或在类型/范围后附加 `!` 的提交，会引入破坏性的 API 更改（对应于语义化版本控制中的 MAJOR）。`BREAKING CHANGE` 可以是任何类型提交的一部分。
4. 要手动设置发布包版本，您需要在提交消息中添加 `Release-As: <version>`，例如：

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

您可以在[此处](https://www.conventionalcommits.org/en/v1.0.0/)查看所有信息。

当您的 pull request 获得代码所有者的批准并通过所有检查后，请执行以下操作：

1. 检查是否存在来自其他贡献者的机器人发布的 release pull request（看起来像 `chore(main): release 0.0.0`）。如果存在，请检查它未被合并的原因。如果贡献者同意发布共享版本，请继续下一步。如果不同意，请要求他发布自己的版本，然后继续下一步。
2. 对您的 PR 进行 Squash and merge（发布新版本时使用 Github-Actions 非常重要）。
3. 等待机器人创建一个包含新包版本和 `CHANGELOG.md` 中您更改信息的 PR。您可以在[Actions 标签页](https://github.com/gravity-ui/page-constructor/actions)上查看该过程。
4. 检查 `CHANGELOG.md` 中的更改并批准机器人的 PR。
5. 对 PR 进行 Squash and merge。您可以在[Actions 标签页](https://github.com/gravity-ui/page-constructor/actions)上查看发布过程。

### Alpha 版本发布

如果您想从您的分支发布包的 alpha 版本，您可以手动进行：

1. 转到 Actions 标签页。
2. 在左侧页面选择 "Release alpha version" 工作流。
3. 在右侧，您会看到 "Run workflow" 按钮。在这里您可以选择分支。
4. 您还可以看到一个手动版本字段。如果您是第一次在您的分支发布 alpha 版本，请不要在此处设置任何内容。首次发布后，您必须手动设置新版本，因为我们不会更改 `package.json`，以防分支很快过期。否则，您将收到错误。请在您的手动版本中使用 `alpha` 前缀。
5. 点击 "Run workflow" 并等待操作完成。您可以发布任意次数的版本，但不要滥用它，只有在您真正需要时才发布版本。在其他情况下，请使用 [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack)。

### Beta-major 版本发布

如果您想发布新 major 版本，在稳定版本之前您可能需要 beta 版本，请执行以下操作：

1. 创建或更新 `beta` 分支。
2. 将您的更改添加到其中。
3. 当您准备好发布新的 beta 版本时，手动使用一个空提交进行发布（或者您可以将此提交消息和页脚添加到最后一个提交中）：

```bash
git commit -m 'fix: last commit

```
Release-As: 3.0.0-beta.0' --allow-empty
```

4. Release please robot 将会创建一个新的 PR 到 `beta` 分支，并更新 `CHANGELOG.md` 和包的版本号。
5. 你可以重复这个过程任意多次。当你准备好发布不带 beta 标签的最新主版本时，你需要从 `beta` 分支创建一个 PR 到 `main` 分支。请注意，你的包版本带有 beta 标签是正常的。Robot 会识别这一点并正确处理。`3.0.0-beta.0` 将会变成 `3.0.0`。

### 之前主版本的发布流程

如果你想在提交到 main 后发布之前主版本的最新版本，请执行以下操作：

1. 更新必要的分支，之前的发布分支名称如下：
   1. `version-1.x.x/fixes` - 用于主版本 1.x.x
   2. `version-2.x.x` - 用于主版本 2.x.x
2. 从之前的发布分支检出一个新分支。
3. 从 `main` 分支 cherry-pick 你的提交。
4. 创建 PR，获得批准后合并到之前的发布分支。
5. Squash and merge 你的 PR（使用 Github-Actions 发布新版本非常重要）。
6. 等待 robot 创建一个 PR，其中包含新版本的包以及 `CHANGELOG.md` 中关于你更改的信息。你可以在 [Actions 标签页](https://github.com/gravity-ui/page-constructor/actions) 上查看该过程。
7. 检查 `CHANGELOG.md` 中的更改并批准 robot 的 PR。
8. Squash and merge PR。你可以在 [Actions 标签页](https://github.com/gravity-ui/page-constructor/actions) 上查看发布过程。

## Page constructor editor

Editor 提供了一个用户界面，用于页面内容的管理和实时预览。

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

本项目包含一个全面的 **Memory Bank** - 一系列 Markdown 文档文件，提供了关于项目架构、组件和使用模式的详细信息。Memory Bank 在使用 AI 代理时尤其有用，因为它包含关于以下内容的结构化信息：

- **项目概述**: 核心需求、目标和背景
- **组件文档**: 所有组件的详细使用指南
- **系统架构**: 技术模式和设计决策
- **开发进度**: 当前状态和实现细节

### 使用 Memory Bank

Memory Bank 位于 `memory-bank/` 目录中，由常规的 Markdown 文件组成，可以像阅读其他文档一样阅读：

- `projectbrief.md` - 包含核心需求的基础文档
- `productContext.md` - 项目目的和用户体验目标
- `systemPatterns.md` - 架构和技术决策
- `techContext.md` - 技术栈、设置和限制
- `activeContext.md` - 当前工作重点和近期更改
- `progress.md` - 实现状态和已知问题
- `usage/` - 组件特定的使用文档
- `storybookComponents.md` - Storybook 集成细节

## Tests

完整的文档可在提供的 [链接](./test-utils/docs/README.md) 中找到。

## License

根据 MIT 许可证分发。详情请参阅 [LICENSE](LICENSE)。

## For AI agents

一个用于从声明式 JSON/YAML 配置渲染整个网页或页面部分的库，使用一组现成的、可排序的块 — 使用它来构建营销/着陆页，而不是通用的应用程序 UI。

### 何时使用

- 数据驱动的页面：使用 `PageConstructorProvider` 包裹的 `PageConstructor` 来渲染类型化块的 `content` 配置。
- 由预构建块（标题、媒体、卡片等）组成的营销、着陆页和文档页面。
- 通过 `@gravity-ui/page-constructor/server` 工具 (`contentTransformer`, `fullTransform`) 进行服务器端 YFM 处理。
- 单独重用响应式网格 (`Grid`/`Row`/`Col`) 或 `Navigation` 组件。

### 何时不要使用

- 通用应用程序 UI（按钮、表单、模态框）— 使用 [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit)。
- 编辑 Markdown/YFM 内容 — 使用 [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor)。
- 应用导航外壳（侧边栏、页头）— 使用 [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation)；此包中的 `Navigation` 是页面级别的顶部导航。

### 常见陷阱

- **`PageConstructor` 必须被 `PageConstructorProvider` 包裹。** 直接渲染会破坏上下文（区域设置、主题、SSR、分析）。
- **`content` prop 是 `content`，形状为 `{blocks: [...]}`。** 每个块对象都需要一个 `type` 来匹配已知的块及其数据字段；没有 `data`/`config` prop。
- **块文本中的 YFM 需要服务器处理。** 除非你通过 `@gravity-ui/page-constructor/server` 中的 `contentTransformer`/`fullTransform` 运行内容，否则 Markdown 风格的字段将呈现为纯文本；`@diplodoc/transform` 是必需的对等依赖项。
- **导入 SCSS 样式。** 添加 `@gravity-ui/page-constructor/styles/styles.scss`（SCSS，不是 CSS）；自定义块导入相同的文件以重用 mixins/变量。
- **Vite 需要 `vite-plugin-dynamic-import`。** 没有它，动态块导入在 Vite 下会失败。

## For AI agents 的文档

已安装版本的 Agent 可读文档位于 `node_modules/@gravity-ui/page-constructor/build/docs/INDEX.md`。
```