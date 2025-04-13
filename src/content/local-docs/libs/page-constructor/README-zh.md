# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## 页面构造器

`Page-constructor` 是一个基于 `JSON` 数据渲染网页或其部分的库（将来会添加对 `YAML` 格式的支持）。

创建页面时使用基于组件的方法：页面使用一组可以按任意顺序放置的现成块构建。每个块都有特定的类型和一组输入数据参数。

有关输入数据格式和可用块列表，请参阅[文档](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs)。

## 安装

```shell
npm install @gravity-ui/page-constructor
```

## 必需的依赖项

请注意，要开始使用该包，您的项目还必须安装以下内容：`@diplodoc/transform`、`@gravity-ui/uikit`、`react`。查看 `package.json` 的 `peerDependencies` 部分获取准确信息。

### 入门指南

页面构造器作为 React 组件导入。为确保它正常运行，请将其包装在 `PageConstructorProvider` 中：

```jsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';

const Page: React.PropsWithChildren<PageProps> = ({content}) => (
  <PageConstructorProvider>
    <PageConstructor content={content} />
  </PageConstructorProvider>
);
```

### 参数

```typescript
interface PageConstructorProps {
  content: PageContent; // JSON 格式的块数据。
  shouldRenderBlock?: ShouldRenderBlock; // 在渲染每个块时调用的函数，让您设置其显示条件。
  custom?: Custom; // 自定义块（参见 `自定义`）。
  renderMenu?: () => React.ReactNode; // 渲染带有导航的页面菜单的函数（我们计划添加默认菜单版本的渲染）。
  navigation?: NavigationData; // 用于在 JSON 格式中使用导航组件的导航数据
  isBranded?: boolean; // 如果为 true，添加链接到 https://gravity-ui.com/ 的页脚。尝试使用 BrandFooter 组件获得更多自定义选项。
}

interface PageConstructorProviderProps {
  isMobile?: boolean; // 表示代码在移动模式下执行的标志。
  locale?: LocaleContextProps; // 有关语言和域的信息（用于生成和格式化链接）。
  location?: Location; // 浏览器或路由器历史的 API，页面 URL。
  analytics?: AnalyticsContextProps; // 处理分析事件的函数

  ssrConfig?: SSR; // 表示代码在服务器端运行的标志。
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

interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}
```

### 服务器工具

该包提供了一组用于转换内容的服务器工具。

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

在底层，使用了一个将 Yandex Flavored Markdown 转换为 HTML 的包 - `diplodoc/transfrom`，所以它也在对等依赖中。

您还可以在需要的地方使用有用的工具，例如在自定义组件中。

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

您可以在这个[部分](https://github.com/gravity-ui/page-constructor/tree/main/src/text-transform)找到更多工具。

### 自定义块

页面构造器允许您使用应用程序中用户定义的块。块是常规的 React 组件。

要将自定义块传递给构造器：

1. 在您的应用程序中创建一个块。

2. 在您的代码中，创建一个对象，以块类型（字符串）作为键，导入的块组件作为值。

3. 将您创建的对象传递给 `PageConstructor` 组件的 `custom.blocks`、`custom.headers` 或 `custom.subBlocks` 参数（`custom.headers` 指定要在一般内容上方单独渲染的块标题）。

4. 现在您可以通过指定其类型和数据在输入数据（`content` 参数）中使用创建的块。

要在创建自定义块时使用混合和构造器样式变量，请在您的文件中添加导入：

```css
@import '~@gravity-ui/page-constructor/styles/styles.scss';
```

### 可加载块

有时需要一个块根据要加载的数据渲染自身。在这种情况下，使用可加载块。

要添加自定义 `loadable` 块，将 `custom.loadable` 属性传递给 `PageConstructor`，其中组件的数据源名称（字符串）作为键，对象作为值。

```typescript
export interface LoadableConfigItem {
  fetch: FetchLoadableData; // 数据加载方法
  component: React.ComponentType; // 传递加载数据的块
}

type FetchLoadableData<TData = any> = (blockKey: string) => Promise<TData>;
```

### 网格

页面构造器使用 `bootstrap` 网格及其基于 React 组件的实现，您可以在自己的项目中使用（包括与构造器分开使用）。

使用示例：

```jsx
import {Grid, Row, Col} from '@gravity-ui/page-constructor';

const Page: React.FC<PageProps> = ({children}) => (
  <Grid>
    <Row>
      <Col sizes={{lg: 4, sm: 6, all: 12}}>{children}</Col>
    </Row>
  </Grid>
);
```

### 导航

页面导航也可以与构造器分开使用：

```jsx
import {Navigation} from '@gravity-ui/page-constructor';

const Page: React.FC<PageProps> = ({data, logo}) => <Navigation data={data} logo={logo} />;
```

### 块

每个块都是一个原子顶级组件。它们存储在 `src/units/constructor/blocks` 目录中。

### 子块

子块是可以在块的 `children` 属性中使用的组件。在配置中，指定了来自子块的子组件列表。渲染后，这些子块作为 `children` 传递给块。

### 如何向 `page-constructor` 添加新块

1. 在 `src/blocks` 或 `src/sub-blocks` 目录中，创建一个包含块或子块代码的文件夹。

2. 将块或子块名称添加到枚举 `BlockType` 或 `SubBlockType` 中，并在 `src/models/constructor-items/blocks.ts` 或 `src/models/constructor-items/sub-blocks.ts` 文件中以类似于现有块的方式描述其属性。

3. 在 `src/blocks/index.ts` 文件中为块添加导出，在 `src/sub-blocks/index.ts` 文件中为子块添加导出。

4. 在 `src/constructor-items.ts` 中将新组件或块添加到映射中。

5. 为新块添加验证器：

   - 将 `schema.ts` 文件添加到块或子块目录。在此文件中，以 [`json-schema`](http://json-schema.org/) 格式描述组件的参数验证器。
   - 在 `schema/validators/blocks.ts` 或 `schema/validators/sub-blocks.ts` 文件中导出它。
   - 将其添加到 `schema/index.ts` 文件中的 `enum` 或 `selectCases` 中。

6. 在块目录中，添加带有输入参数描述的 `README.md` 文件。
7. 在块目录中，在 `__stories__` 文件夹中添加 storybook 演示。故事的所有演示内容都应放在故事目录中的 `data.json` 中。通用 `Story` 必须接受块 props 的类型，否则 Storybook 中将显示不正确的块 props。
8. 将块数据模板添加到 `src/editor/data/templates/` 文件夹，文件名应与块类型匹配。
9. （可选）将块预览图标添加到 `src/editor/data/previews/` 文件夹，文件名应与块类型匹配。

### 主题

`PageConstructor` 允许您使用主题：您可以根据应用程序中选择的主题为单个块属性设置不同的值。

要向块属性添加主题：

1. 在 `models/blocks.ts` 文件中，使用泛型 `ThemeSupporting<T>` 定义相应块属性的类型，其中 `T` 是属性的类型。

2. 在带有块的 `react` 组件的文件中，通过 `getThemedValue` 和 `useTheme` 钩子获取带有主题的属性值（参见 `MediaBlock.tsx` 块中的示例）。

3. 向属性验证器添加主题支持：在块的 `schema.ts` 文件中，将此属性包装在 `withTheme` 中。

### i18n

`page-constructor` 是一个基于 `uikit` 的库，我们使用 uikit 中的 `i18n` 实例。要设置国际化，您只需使用 uikit 的 `configure`：

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

### 地图

要使用地图，请在 `PageConstructorProvider` 的 `mapContext` 字段中放置地图类型、scriptSrc 和 apiKey。

您可以在项目根目录的 .env.development 文件中为开发模式定义环境变量。
`STORYBOOK_GMAP_API_KEY` - Google 地图的 apiKey

### 分析

#### 初始化

要开始使用任何分析，请将处理程序传递给构造器。处理程序必须在项目端创建。处理程序将接收 `default` 和 `custom` 事件对象。传递的处理程序将在按钮、链接、导航和控件点击时触发。由于一个处理程序用于所有事件处理，在创建处理程序时请注意如何处理不同的事件。有预定义的字段可以帮助您构建复杂的逻辑。

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

事件对象只有一个必需字段 - `name`。它还有预定义字段，用于帮助管理复杂逻辑。例如，如果项目中使用了多个分析系统，`counter.include` 可以帮助在特定计数器中发送事件。

```ts
type AnalyticsEvent<T = {}> = T & {
  name: string;
  type?: string;
  counters?: AnalyticsCounters;
  context?: string;
};
```

可以配置项目所需的事件类型。

```ts
type MyEventType = AnalyticsEvent<{
  [key: string]?: string; // 只支持 'string' 类型
}>;
```

#### 计数器选择器

可以配置要发送到哪个分析系统的事件。

```ts
type AnalyticsCounters = {
  include?: string[]; // 将应用的分析计数器 ID 数组
  exclude?: string[]; // 不会应用的分析计数器 ID 数组
};
```

#### context 参数

传递 `context` 值以定义项目中触发事件的位置。

使用下面的选择器或创建满足项目需求的逻辑。

```ts
// analyticsHandler.ts
if (isCounterAllowed(counterName, counters)) {
  analyticsCounter.reachGoal(counterName, name, parameters);
}
```

#### 保留的事件类型

使用几种预定义的事件类型来标记自动配置的事件。例如，使用这些类型来过滤默认事件。

```ts
enum PredefinedEventTypes {
  Default = 'default-event', // 在每次按钮点击时触发的默认事件
  Play = 'play', // React player 事件
  Stop = 'stop', // React player 事件
}
```

## 开发

```bash
npm ci
npm run dev
```

#### 关于 Vite 的注意事项

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

对于 Vite，您需要安装 `vite-plugin-dynamic-import` 插件并配置配置，以便动态导入工作。

## 发布流程

在通常情况下，我们使用两种类型的提交：

1. fix：修复类型的提交修补了代码库中的错误（这与语义版本控制中的 PATCH 相关）。
2. feat：feat 类型的提交向代码库引入了新功能（这与语义版本控制中的 MINOR 相关）。
3. BREAKING CHANGE：具有页脚 BREAKING CHANGE: 的提交，或在类型/范围后附加 !，引入了破坏性 API 更改（与语义版本控制中的 MAJOR 相关）。BREAKING CHANGE 可以是任何类型提交的一部分。
4. 要手动设置发布包版本，您需要在提交消息中添加 `Release-As: <version>`，例如：

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

您可以在[这里](https://www.conventionalcommits.org/en/v1.0.0/)查看所有信息。

当您收到代码所有者对您的拉取请求的批准并通过所有检查时，请执行以下操作：

1. 您应该检查是否有来自机器人的发布拉取请求，其中包含来自另一个贡献者的更改（它看起来像 `chore(main): release 0.0.0`）。如果存在，您应该检查为什么它没有被合并。如果贡献者同意发布共享版本，请执行下一步。如果不同意，请要求他发布他的版本，然后执行下一步。
2. 压缩并合并您的 PR（使用 Github-Actions 发布新版本很重要）
3. 等待机器人创建一个包含包的新版本和 CHANGELOG.md 中有关您更改的信息的 PR。您可以在 [Actions 选项卡](https://github.com/gravity-ui/page-constructor/actions)上查看该过程。
4. 检查 CHANGELOG.md 中的更改并批准机器人的 PR。
5. 压缩并合并 PR。您可以在 [Actions 选项卡](https://github.com/gravity-ui/page-constructor/actions)上查看发布过程。

### Alpha 版本发布

如果您想从您的分支发布包的 alpha 版本，您可以手动执行此操作：

1. 转到 Actions 选项卡
2. 在页面左侧选择 "Release alpha version" 工作流
3. 您可以在右侧看到 "Run workflow" 按钮。在这里您可以选择分支。
4. 您还可以看到手动版本字段。如果您是第一次在分支中发布 alpha，请不要在此处设置任何内容。第一次发布后，您必须手动设置新版本，因为我们不会更改 package.json，以防分支很快过期。在手动版本中使用前缀 `alpha`，否则您将收到错误。
5. 按下 "Run workflow" 并等待操作完成。您可以发布任意多的版本，但不要滥用它，只有在真正需要时才发布版本。在其他情况下，使用 [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack)。

### Beta-major 版本发布

如果您想发布新的主要版本，您可能需要在稳定版本之前发布 beta 版本，请执行以下操作：

1. 创建或更新 `beta` 分支。
2. 在那里添加您的更改。
3. 当您准备好发布新的 beta 版本时，使用空提交手动发布它（或者您可以将此提交消息与页脚添加到最后一个提交）：

```bash
git commit -m 'fix: last commit

Release-As: 3.0.0-beta.0' --allow-empty
```

4. Release please 机器人将创建一个新的 PR 到 `beta` 分支，更新 CHANGELOG.md 并增加包的版本
5. 您可以根据需要重复多次。当您准备好发布没有 beta 标签的最新主要版本时，您必须从 `beta` 分支创建 PR 到 `main` 分支。请注意，您的包版本带有 beta 标签是正常的。机器人知道这一点并适当地更改它。`3.0.0-beta.0` 将变为 `3.0.0`

### 以前主要版本的发布流程

如果您想在提交到 main 后在以前的主要版本中发布新版本，请执行以下操作：

1. 更新必要的分支，以前的主要发布分支名称是：
   1. `version-1.x.x/fixes` - 用于主要版本 1.x.x
   2. `version-2.x.x` - 用于主要版本 2.x.x
2. 从以前的主要发布分支检出新分支
3. 从 `main` 分支 Cherry-pick 您的提交
4. 创建 PR，获得批准并合并到以前的主要发布分支
5. 压缩并合并您的 PR（使用 Github-Actions 发布新版本很重要）
6. 等待机器人创建一个包含包的新版本和 CHANGELOG.md 中有关您更改的信息的 PR。您可以在 [Actions 选项卡](https://github.com/gravity-ui/page-constructor/actions)上查看该过程。
7. 检查 CHANGELOG.md 中的更改并批准机器人的 PR。
8. 压缩并合并 PR。您可以在 [Actions 选项卡](https://github.com/gravity-ui/page-constructor/actions)上查看发布过程。

## 页面构造器编辑器

编辑器提供了用于页面内容管理的用户界面，具有实时预览功能。

使用方法：

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

## 测试

完整文档可在提供的[链接](./test-utils/docs/README.md)中获取。
