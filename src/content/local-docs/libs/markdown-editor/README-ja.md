![Markdown Editor](https://github.com/user-attachments/assets/0b4e5f65-54cf-475f-9c68-557a4e9edb46)

# @gravity-ui/markdown-editor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/markdown-editor)](https://www.npmjs.com/package/@gravity-ui/markdown-editor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/markdown-editor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/markdown-editor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/md-editor/)

## Markdown wysiwyg およびマークアップエディター

MarkdownEditor は、WYSIWYG モードとマークアップモードを組み合わせた、Markdown を扱うための強力なツールです。これにより、便利なビジュアルモードでコンテンツを作成・編集できるだけでなく、マークアップを完全に制御することも可能です。

### 🔧 主な機能

- 基本的な Markdown および [YFM](https://ydocs.tech) の構文をサポート。
- ProseMirror および CodeMirror エンジンを使用した拡張性。
- 最大限の柔軟性を実現する WYSIWYG モードとマークアップモードでの作業能力。

## インストール

```shell
npm install @gravity-ui/markdown-editor
```

### 必要な依存関係

このパッケージの使用を開始するには、プロジェクトに以下のものがインストールされている必要があります: `@diplodoc/transform`, `react`, `react-dom`, `@gravity-ui/uikit`, `@gravity-ui/components` など。正確な情報は `package.json` の `peerDependencies` セクションをご確認ください。

## はじめに

MarkdownEditor は、エディターインスタンスを作成するための React フックと、ビューをレンダリングするためのコンポーネントとして提供されます。
スタイリングとテーマの設定については、[UIKit のドキュメント](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles)を参照してください。

```tsx
import React from 'react';
import {useMarkdownEditor, MarkdownEditorView} from '@gravity-ui/markdown-editor';

function Editor({onSubmit}) {
  const editor = useMarkdownEditor({allowHTML: false});

  React.useEffect(() => {
    function submitHandler() {
      // 現在のコンテンツを markdown マークアップにシリアライズ
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
さらに読む:
- [Create React App でエディターを接続する方法](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-create-react-app--docs)
- [マークアップモードのプレビューを追加する方法](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-preview--docs)
- [HTML 拡張機能を追加する方法](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-html-block--docs)
- [LaTeX 拡張機能を追加する方法](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-latex-extension--docs)
- [Mermaid 拡張機能を追加する方法](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-mermaid-extension--docs)
- [拡張機能の作成方法](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-creation--docs)
- [GPT 拡張機能を追加する方法](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-gpt--docs)
- [Markdown でテキストバインディング拡張機能を追加する方法](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-with-popup--docs)

### 開発

1. `.nvmrc` ファイルに指定されているバージョンの Node.js 環境をインストールします。[NVM](https://github.com/nvm-sh/nvm) または類似のツールを使用することをお勧めします。
2. `package.json` の "packageManager" プロパティで指定されているバージョンの [pnpm](https://pnpm.io/installation) をインストールします。
3. 依存関係をインストールします: `pnpm i`
4. Storybook 開発サーバーを実行します: `pnpm start`


### i18n

国際化を設定するには、`configure` を使用するだけです:

```typescript
import {configure} from '@gravity-ui/markdown-editor';

configure({
  lang: 'ru',
});
```

[UIKit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#i18n) やその他の UI ライブラリから `configure()` を呼び出すことを忘れないでください。

### 貢献

- [コントリビューターガイドライン](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-contributing--docs)