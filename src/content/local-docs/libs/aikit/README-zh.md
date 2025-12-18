# AIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/aikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/aikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/aikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/aikit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/aikit/?path=/docs/pages-chatcontainer--docs)

一套基于原子设计原则构建的 AI 聊天 UI 组件库。

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/aikit_cover.png)

## 资源

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [官方网站](https://gravity-ui.com/libraries/aikit)

### ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/aikit/)

### ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [社区](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## 简介

**@gravity-ui/aikit** 是一个灵活且可扩展的 React 组件库，用于构建各种复杂度的 AI 聊天应用。该库提供了一系列现成的组件，您可以直接使用，也可以根据您的需求进行定制。

### 主要特性

- 🎨 **原子设计** — 从原子到页面的清晰组件层级结构
- 🔧 **SDK 无关** — 不依赖于特定的 AI SDK
- 🎭 **两层方法** — 现成组件 + 用于定制的 Hooks
- 🎨 **CSS 变量** — 无需覆盖组件即可轻松实现主题切换
- 📦 **TypeScript** — 开箱即用的完整类型安全
- 🔌 **可扩展性** — 自定义消息类型注册系统

## 项目结构

```
src/
├── components/
│   ├── atoms/          # 基础不可分割的 UI 元素
│   ├── molecules/      # 原子的简单组合
│   ├── organisms/      # 带有逻辑的复杂组件
│   ├── templates/      # 完整的布局
│   └── pages/          # 数据集成页面
├── hooks/              # 通用 Hooks
├── types/              # TypeScript 类型定义
├── utils/              # 工具函数
└── themes/             # CSS 主题和变量
```

## 安装

```bash
npm install @gravity-ui/aikit
```

## 快速开始

```typescript
import { ChatContainer } from '@gravity-ui/aikit';
import type { ChatType, TChatMessage } from '@gravity-ui/aikit';

function App() {
    const [messages, setMessages] = useState<TChatMessage[]>([]);
    const [chats, setChats] = useState<ChatType[]>([]);
    const [activeChat, setActiveChat] = useState<ChatType | null>(null);

    return (
        <ChatContainer
            chats={chats}
            activeChat={activeChat}
            messages={messages}
            onSendMessage={async (data) => {
                // 您的发送逻辑
                console.log('Message:', data.content);
            }}
            onSelectChat={setActiveChat}
            onCreateChat={() => {
                // 创建新聊天
            }}
            onDeleteChat={(chat) => {
                // 删除聊天
            }}
        />
    );
}
```

## 架构

该库基于**原子设计**原则构建：

### 🔹 Atoms (原子)

不包含业务逻辑的基础 UI 元素：

- `ActionButton` — 带集成工具提示的按钮
- `Alert` — 带变体的警告消息
- `ChatDate` — 带相对日期的日期格式化
- `ContextIndicator` — token 上下文使用指示器
- `ContextItem` — 带删除操作的上下文标签
- `DiffStat` — 代码变更统计显示
- `Disclaimer` — 免责声明文本组件
- `InlineCitation` — 行内引用
- `Loader` — 加载指示器
- `MarkdownRenderer` — Yandex Flavored Markdown 渲染器
- `MessageBalloon` — 消息包裹器
- `Shimmer` — 加载动画效果
- `SubmitButton` — 带状态的提交按钮
- `ToolIndicator` — 工具执行状态指示器

### 🔸 Molecules (分子)

原子的简单组合：

- `BaseMessage` — 所有消息类型的基本包裹器
- `ButtonGroup` — 支持方向的按钮组
- `InputContext` — 上下文管理
- `PromptInputBody` — 可自动扩展的文本区域
- `PromptInputFooter` — 带操作图标和提交按钮的底部区域
- `PromptInputHeader` — 带上下文项和指示器的头部区域
- `PromptInputPanel` — 自定义内容面板容器
- `Suggestions` — 可点击的建议按钮
- `Tabs` — 带删除功能的导航标签页
- `ToolFooter` — 带操作的工具消息底部区域
- `ToolHeader` — 带图标和操作的工具消息头部区域

### 🔶 Organisms (有机体)

包含内部逻辑的复杂组件：

- `AssistantMessage` — AI 助手消息
- `Header` — 聊天头部
- `MessageList` — 消息列表
- `PromptInput` — 消息输入框
- `ThinkingMessage` — AI 思考过程
- `ToolMessage` — 工具执行
- `UserMessage` — 用户消息

### 📄 Templates (模板)

完整的布局：

- `ChatContent` — 主要聊天内容
- `EmptyContainer` — 空状态
- `History` — 聊天历史

### 📱 Pages (页面)

完整的集成：

- `ChatContainer` — 完全组装的聊天界面

## 文档

- [快速入门指南](./docs/GETTING_STARTED.md)
- [架构](./docs/ARCHITECTURE.md)
- [项目结构](./docs/PROJECT_STRUCTURE.md)
- [测试指南](./docs/TESTING.md)
- [Playwright 指南](./playwright/README.md)

## 测试

本项目使用 Playwright 组件测试进行视觉回归测试。

### 运行测试

**重要提示**: 所有测试都必须通过 Docker 运行，以确保不同环境中截图的一致性。

```bash
# 在 Docker 中运行所有组件测试（推荐）
npm run playwright:docker

# 在 Docker 中更新截图基线
npm run playwright:docker:update

# 在 Docker 中通过 grep 模式运行特定测试
npm run playwright:docker -- --grep "@ComponentName"

# 如有需要，清除 Docker 缓存
npm run playwright:docker:clear-cache
```

### 本地测试（仅限 Linux）

如果您使用的是 Linux 系统，可以在本地运行测试：

```bash
# 安装 Playwright 浏览器（只需运行一次）
npm run playwright:install

# 运行所有组件测试
npm run playwright

# 更新截图基线
npm run playwright:update
```

有关详细的测试文档，请参阅 [Playwright 指南](./playwright/README.md)。

## 开发

开发和贡献指南可在 [CONTRIBUTING.md](./CONTRIBUTING.md) 中找到。

## 许可证

MIT