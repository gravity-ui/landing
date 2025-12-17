# @gravity-ui/aikit

[![npm package](https://img.shields.io/npm/v/@gravity-ui/aikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/aikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/aikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/aikit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/aikit/?path=/docs/pages-chatcontainer--docs)

---

基于原子设计原则构建的 AI 聊天 UI 组件库。

## 描述

**@gravity-ui/aikit** 是一个灵活且可扩展的 React 组件库，用于构建任何复杂度的 AI 聊天。该库提供了一套现成的组件，可以直接使用或根据您的需求进行自定义。

### 主要特性

- 🎨 **原子设计** — 从原子到页面的清晰组件层次结构
- 🔧 **SDK 无关** — 独立于特定的 AI SDK
- 🎭 **两级方法** — 现成组件 + 用于自定义的钩子
- 🎨 **CSS 变量** — 无需覆盖组件即可轻松主题化
- 📦 **TypeScript** — 开箱即用的完整类型安全
- 🔌 **可扩展** — 自定义消息类型注册系统

## 项目结构

```
src/
├── components/
│   ├── atoms/          # 基本的不可分割的 UI 元素
│   ├── molecules/      # 原子的简单组合
│   ├── organisms/      # 具有逻辑的复杂组件
│   ├── templates/      # 完整的布局
│   └── pages/          # 与数据的完整集成
├── hooks/              # 通用钩子
├── types/              # TypeScript 类型
├── utils/              # 实用工具
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
                console.log('消息:', data.content);
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

### 🔹 原子

没有业务逻辑的基本不可分割 UI 元素：

- `ActionButton` — 带集成工具提示的按钮
- `Alert` — 带变体的警报消息
- `ChatDate` — 带相对日期的日期格式化
- `ContextIndicator` — 令牌上下文使用指示器
- `ContextItem` — 带删除操作的上下文标签
- `DiffStat` — 代码更改统计显示
- `Disclaimer` — 免责声明文本组件
- `InlineCitation` — 文本引用
- `Loader` — 加载指示器
- `MarkdownRenderer` — Yandex 风格 Markdown 渲染器
- `MessageBalloon` — 消息包装器
- `Shimmer` — 加载动画效果
- `SubmitButton` — 带状态的提交按钮
- `ToolIndicator` — 工具执行状态指示器

### 🔸 分子

原子的简单组合：

- `BaseMessage` — 所有消息类型的基础包装器
- `ButtonGroup` — 带方向支持的按钮组
- `InputContext` — 上下文管理
- `PromptInputBody` — 自动增长的文本区域
- `PromptInputFooter` — 带操作图标和提交按钮的页脚
- `PromptInputHeader` — 带上下文项和指示器的标题
- `PromptInputPanel` — 用于自定义内容的面板容器
- `Suggestions` — 可点击的建议按钮
- `Tabs` — 带删除功能的导航标签
- `ToolFooter` — 带操作的工具消息页脚
- `ToolHeader` — 带图标和操作的工具消息标题

### 🔶 有机体

具有内部逻辑的复杂组件：

- `AssistantMessage` — AI 助手消息
- `Header` — 聊天标题
- `MessageList` — 消息列表
- `PromptInput` — 消息输入字段
- `ThinkingMessage` — AI 思考过程
- `ToolMessage` — 工具执行
- `UserMessage` — 用户消息

### 📄 模板

完整布局：

- `ChatContent` — 主聊天内容
- `EmptyContainer` — 空状态
- `History` — 聊天历史

### 📱 页面

完整集成：

- `ChatContainer` — 完全组装的聊天

## 文档

- [快速开始指南](./docs/GETTING_STARTED.md)
- [架构](./docs/ARCHITECTURE.md)
- [项目结构](./docs/PROJECT_STRUCTURE.md)
- [测试指南](./docs/TESTING.md)
- [Playwright 指南](./playwright/README.md)

## 测试

该项目使用 Playwright 组件测试进行视觉回归测试。

### 运行测试

**重要**：所有测试必须通过 Docker 运行，以确保在不同环境中获得一致的屏幕截图。

```bash
# 在 Docker 中运行所有组件测试（推荐）
npm run playwright:docker

# 在 Docker 中更新屏幕截图基线
npm run playwright:docker:update

# 在 Docker 中通过 grep 模式运行特定测试
npm run playwright:docker -- --grep "@ComponentName"

# 如需要，清除 Docker 缓存
npm run playwright:docker:clear-cache
```

### 本地测试（仅限 Linux）

如果您在 Linux 上，可以在本地运行测试：

```bash
# 安装 Playwright 浏览器（运行一次）
npm run playwright:install

# 运行所有组件测试
npm run playwright

# 更新屏幕截图基线
npm run playwright:update
```

有关详细的测试文档，请参阅 [Playwright 指南](./playwright/README.md)。

## 开发

开发和贡献说明可在 [CONTRIBUTING.md](./CONTRIBUTING.md) 中找到。

## 许可证

MIT

