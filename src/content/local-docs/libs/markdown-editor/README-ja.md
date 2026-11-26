![Markdown Editor](https://github.com/user-attachments/assets/0b4e5f65-54cf-475f-9c68-557a4e9edb46)

# @gravity-ui/markdown-editor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/markdown-editor)](https://www.npmjs.com/package/@gravity-ui/markdown-editor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/markdown-editor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/markdown-editor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/md-editor/)

## Markdown wysiwyg and markup editor

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

パッケージの使用を開始するには、プロジェクトに以下のパッケージもインストールされている必要があります: `@diplodoc/transform`, `react`, `react-dom`, `@gravity-ui/uikit`, `@gravity-ui/components` など。正確な情報は `package.json` の `peerDependencies` セクションをご確認ください。

## はじめに

markdown editor は、エディターインスタンスを作成するための React フックと、ビューをレンダリングするためのコンポーネントとして提供されます。
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
- [Create React App でエディターを接続する方法](https://gravity-ui.github.io/markdown-editor/getting-started/create-react-app.html)
- [マークアップモードのプレビューを追加する方法](https://gravity-ui.github.io/markdown-editor/getting-started/preview.html)
- [HTML 拡張機能を追加する方法](https://gravity-ui.github.io/markdown-editor/extensions/html-block.html)
- [LaTeX 拡張機能を追加する方法](https://gravity-ui.github.io/markdown-editor/extensions/latex-extension.html)
- [Mermaid 拡張機能を追加する方法](https://gravity-ui.github.io/markdown-editor/extensions/mermaid-extension.html)
- [拡張機能の作成方法](https://gravity-ui.github.io/markdown-editor/develop/extension-creation.html)
- [GPT 拡張機能を追加する方法](https://gravity-ui.github.io/markdown-editor/extensions/gpt.html)
- [Markdown でテキストバインディング拡張機能を追加する方法](https://gravity-ui.github.io/markdown-editor/develop/extension-with-popup.html)

### 開発

1. `.nvmrc` ファイルで指定されたバージョンの Node.js 環境をインストールします。NVM または類似のツールを使用することを推奨します。
2. `package.json` の "packageManager" プロパティで指定されたバージョンの [pnpm](https://pnpm.io/installation) をインストールします。
3. 依存関係をインストールします: `pnpm i`
4. storybook の開発サーバーを実行します: `pnpm start`


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

- [コントリビューターガイドライン](https://gravity-ui.github.io/markdown-editor/contributing.html)

## ライセンス

MIT ライセンスの下で配布されます。詳細については [LICENSE](LICENSE.txt) を参照してください。

## AI エージェント向け

WYSIWYG モード (ProseMirror) と生のマークアップモード (CodeMirror) を組み合わせた、React 用のデュアルモード Markdown エディターで、基本的な Markdown と YFM をサポートしています。

### 使用する場合

- 切り替え可能なビジュアル (WYSIWYG) およびソース (マークアップ) 表示で Markdown/YFM コンテンツを編集する場合。
- 拡張可能なエディターが必要な場合: ProseMirror/CodeMirror エンジンを介したカスタムマーク、ノード、ツールバーアイテム、および拡張機能 (HTML、LaTeX、Mermaid、GPT)。
- エディター UI のレンダリング: `useMarkdownEditor` でインスタンスを作成し、`MarkdownEditorView` でレンダリングします。

### 使用しない場合

- Markdown を HTML に読み取り専用でレンダリングする場合 (編集なし) — [`@diplodoc/transform`](https://github.com/diplodoc-platform/transform) で変換し、出力をレンダリングしてください。
- 単純な複数行テキスト入力 — [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) の `TextArea` を使用してください。
- Markdown/YFM ではないリッチテキスト — このエディターは Markdown ファーストです。

### よくある落とし穴

- **これはフックとビューであり、単一のコンポーネントではありません。** `useMarkdownEditor(...)` でインスタンスを作成し、それを `<MarkdownEditorView editor={editor} />` に渡してください。直接レンダリングする単一の `<MarkdownEditor>` はありません。
- **制御された `value` プロップではなく、インスタンス経由で値を取得します。** Markdown にシリアライズするには `editor.getValue()` (例: `submit` イベントで) を呼び出してください。エディターは独自のステートを管理します。
- **ピア依存関係が必要です。** プロジェクトは `@diplodoc/transform`, `@gravity-ui/uikit`, `@gravity-ui/components`, `react`, `react-dom` を提供する必要があります — `package.json` の `peerDependencies` を確認してください。
- **スタイルと i18n は uikit から提供されます。** uikit のドキュメントに従ってテーマ設定/スタイルを設定し、このパッケージと `@gravity-ui/uikit` の両方から `configure({lang})` を呼び出してください。

## AI エージェント向けドキュメント

インストールされているバージョン用のエージェント可読ドキュメントは、`node_modules/@gravity-ui/markdown-editor/build/docs/INDEX.md` にあります。