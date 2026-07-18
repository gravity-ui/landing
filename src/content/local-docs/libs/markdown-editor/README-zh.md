![Markdown Editor](https://github.com/user-attachments/assets/0b4e5f65-54cf-475f-9c68-557a4e9edb46)

# @gravity-ui/markdown-editor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/markdown-editor)](https://www.npmjs.com/package/@gravity-ui/markdown-editor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/markdown-editor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/markdown-editor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/md-editor/)

## Markdown 所见即所得和标记编辑器

MarkdownEditor 是一个强大的 Markdown 编辑工具，它结合了所见即所得 (WYSIWYG) 和标记 (Markup) 模式。这意味着您可以在方便的可视化模式下创建和编辑内容，同时也能完全控制标记。

### 🔧 主要功能

- 支持基础 Markdown 和 [YFM](https://ydocs.tech) 语法。
- 通过 ProseMirror 和 CodeMirror 引擎实现可扩展性。
- 支持 WYSIWYG 和 Markup 模式，以获得最大的灵活性。

## 安装

```shell
npm install @gravity-ui/markdown-editor
```

### 所需依赖

请注意，要开始使用此包，您的项目还必须安装以下依赖：`@diplodoc/transform`、`react`、`react-dom`、`@gravity-ui/uikit`、`@gravity-ui/components` 以及其他一些。请查看 `package.json` 的 `peerDependencies` 部分以获取准确信息。

## 入门

Markdown 编辑器提供了一个 React Hook 来创建编辑器实例，以及一个用于渲染视图的组件。
要设置样式和主题，请参阅 [UIKit 文档](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles)。

```tsx
import React from 'react';
import {useMarkdownEditor, MarkdownEditorView} from '@gravity-ui/markdown-editor';

function Editor({onSubmit}) {
  const editor = useMarkdownEditor({allowHTML: false});

  React.useEffect(() => {
    function submitHandler() {
      // 将当前内容序列化为 markdown 标记
      const value = editor.getValue();
      onSubmit(value);
    }

    editor.on('submit', submitHandler);
    return () => {
      editor.off('submit', submitHandler);
    };
  }, [onSubmit]);

  return <MarkdownEditorView stickyToolbar autofocus editor={editor} />;
}
```
阅读更多：
- [如何在 Create React App 中集成编辑器](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-create-react-app--docs)
- [如何为标记模式添加预览](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-preview--docs)
- [如何添加 HTML 扩展](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-html-block--docs)
- [如何添加 Latex 扩展](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-latex-extension--docs)
- [如何添加 Mermaid 扩展](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-mermaid-extension--docs)
- [如何编写扩展](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-creation--docs)
- [如何添加 GPT 扩展](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-gpt--docs)
- [如何在 markdown 中添加文本绑定扩展](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-with-popup--docs)

### 开发

1. 安装 Node.js 环境，版本在 `.nvmrc` 文件中指定。我们推荐使用 [NVM](https://github.com/nvm-sh/nvm) 或类似工具。
2. 安装 [pnpm](https://pnpm.io/installation)，版本在 `package.json` 的 "packageManager" 属性中指定。
3. 安装依赖：`pnpm i`
4. 运行 storybook 开发服务器：`pnpm start`

### i18n

要设置国际化，只需使用 `configure`：

```typescript
import {configure} from '@gravity-ui/markdown-editor';

configure({
  lang: 'ru',
});
```

别忘了从 [UIKit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#i18n) 和其他 UI 库调用 `configure()`。

### 贡献

- [贡献者指南](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-contributing--docs)

## 许可证

在 MIT 许可证下分发。详情请参阅 [LICENSE](LICENSE.txt)。

## 致 AI 代理

一个用于 React 的双模式 Markdown 编辑器，它结合了所见即所得模式 (ProseMirror) 和原始标记模式 (CodeMirror)，并支持基础 Markdown 和 YFM。

### 何时使用

- 编辑可切换可视化 (WYSIWYG) 和源代码 (标记) 视图的 Markdown/YFM 内容。
- 您需要一个可扩展的编辑器：通过 ProseMirror/CodeMirror 引擎实现自定义标记、节点、工具栏项和扩展 (HTML, LaTeX, Mermaid, GPT)。
- 渲染编辑器 UI：使用 `useMarkdownEditor` 创建实例，并使用 `MarkdownEditorView` 进行渲染。

### 何时不要使用

- 只读渲染 Markdown 到 HTML 而无需编辑 — 使用 [`@diplodoc/transform`](https://github.com/diplodoc-platform/transform) 进行转换并渲染输出。
- 普通多行文本输入 — 使用 [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) 中的 `TextArea`。
- 非 Markdown/YFM 的富文本 — 此编辑器以 Markdown 为优先。

### 常见陷阱

- **这是一个 Hook 加一个视图，而不是一个组件。** 使用 `useMarkdownEditor(...)` 创建实例，并将其传递给 `<MarkdownEditorView editor={editor} />`；没有一个单独的 `<MarkdownEditor>` 可以直接渲染。
- **通过实例读取值，而不是受控的 `value` prop。** 调用 `editor.getValue()` (例如在 `submit` 事件上) 来序列化为 Markdown；编辑器管理自己的状态。
- **需要对等依赖。** 您的项目必须提供 `@diplodoc/transform`、`@gravity-ui/uikit`、`@gravity-ui/components`、`react` 和 `react-dom` — 请检查 `package.json` 中的 `peerDependencies`。
- **样式和 i18n 来自 uikit。** 按照 uikit 文档设置主题/样式，并从此包和 `@gravity-ui/uikit` 调用 `configure({lang})`。

## AI 代理文档

已安装版本的代理可读文档位于 `node_modules/@gravity-ui/markdown-editor/build/docs/INDEX.md`。