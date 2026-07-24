# AIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/aikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/aikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/aikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/aikit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/aikit/?path=/docs/pages-chatcontainer--docs)

AIチャット構築のためのUIコンポーネントライブラリ。アトミックデザインの原則に基づいています。

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/aikit_cover.png)

![Example image](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/aikit_example.png)

## リソース

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [ウェブサイト](https://gravity-ui.com/libraries/aikit)

### ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/aikit/)

### ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [コミュニティ](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## 説明

**@gravity-ui/aikit** は、あらゆる複雑さのAIチャットを構築するための、柔軟で拡張性の高いReactコンポーネントライブラリです。このライブラリは、そのまま使用することも、ニーズに合わせてカスタマイズすることもできる、すぐに使えるコンポーネントセットを提供します。

### 主な特徴

- 🎨 **アトミックデザイン** — アトムからページまで、明確なコンポーネント階層
- 🔧 **SDK非依存** — 特定のAI SDKに依存しません
- 🎭 **二段階アプローチ** — すぐに使えるコンポーネント + カスタマイズ用フック
- 🎨 **CSS変数** — コンポーネントのオーバーライドなしで簡単なテーマ設定
- 📦 **TypeScript** — 最初から完全な型安全性
- 🔌 **拡張可能** — カスタムメッセージタイプの登録システム

## プロジェクト構造

```
src/
├── components/
│   ├── atoms/          # 基本的な分割不可能なUI要素
│   ├── molecules/      # アトムの簡単なグループ
│   ├── organisms/      # ロジックを持つ複雑なコンポーネント
│   ├── templates/      # 完全なレイアウト
│   └── pages/          # データとの完全な統合
├── hooks/              # 一般的な目的のフック
├── types/              # TypeScriptの型
├── utils/              # ユーティリティ
└── themes/             # CSSテーマと変数
```

## インストール

```bash
npm install @gravity-ui/aikit
```

## クイックスタート

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
                // 送信ロジックをここに記述
                console.log('Message:', data.content);
            }}
            onSelectChat={setActiveChat}
            onCreateChat={() => {
                // 新しいチャットを作成
            }}
            onDeleteChat={(chat) => {
                // チャットを削除
            }}
        />
    );
}
```

## アーキテクチャ

このライブラリは**アトミックデザイン**の原則に基づいて構築されています。

### 🔹 アトム

ビジネスロジックを持たない、基本的な分割不可能なUI要素です。

- `ActionButton` — ツールチップが統合されたボタン
- `Alert` — バリアントを持つアラートメッセージ
- `ChatDate` — 相対日付での日付フォーマット
- `ContextIndicator` — トークンコンテキストの使用状況インジケーター
- `ContextItem` — 削除アクション付きのコンテキストラベル
- `DiffStat` — コード変更統計の表示
- `Disclaimer` — 注意書きテキストコンポーネント
- `InlineCitation` — テキストの引用
- `Loader` — ローディングインジケーター
- `MarkdownRenderer` — Yandex Flavored Markdownレンダラー
- `MessageBalloon` — メッセージラッパー
- `Shimmer` — ローディングアニメーション効果
- `SubmitButton` — ステータス付きの送信ボタン
- `ToolIndicator` — ツール実行ステータスインジケーター

### 🔸 モレキュール

アトムの簡単な組み合わせです。

- `BaseMessage` — すべてのメッセージタイプの基本ラッパー
- `ButtonGroup` — 方向サポート付きのボタングループ
- `InputContext` — コンテキスト管理
- `PromptInputBody` — 自動拡張可能なテキストエリア
- `PromptInputFooter` — アクションアイコンと送信ボタン付きのフッター
- `PromptInputHeader` — コンテキストアイテムとインジケーター付きのヘッダー
- `PromptInputPanel` — カスタムコンテンツ用のパネルコンテナ
- `Suggestions` — クリック可能な提案ボタン
- `Tabs` — 削除機能付きのナビゲーションタブ
- `ToolFooter` — アクション付きのツールメッセージフッター
- `ToolHeader` — アイコンとアクション付きのツールメッセージヘッダー

### 🔶 オルガニズム

内部ロジックを持つ複雑なコンポーネントです。

- `AssistantMessage` — AIアシスタントメッセージ
- `Header` — チャットヘッダー
- `MessageList` — メッセージリスト
- `PromptInput` — メッセージ入力フィールド
- `ThinkingMessage` — AIの思考プロセス
- `ToolMessage` — ツールの実行
- `UserMessage` — ユーザーメッセージ

### 📄 テンプレート

完全なレイアウトです。

- `ChatContent` — メインのチャットコンテンツ
- `EmptyContainer` — 空の状態
- `History` — チャット履歴

### 📱 ページ

完全な統合です。

- `ChatContainer` — 完全に組み立てられたチャット

## ドキュメント

- [クイックスタートガイド](./docs/GETTING_STARTED.md)
- [アーキテクチャ](./docs/ARCHITECTURE.md)
- [プロジェクト構造](./docs/PROJECT_STRUCTURE.md)
- [テストガイド](./docs/TESTING.md)
- [Playwrightガイド](./playwright/README.md)

## テスト

このプロジェクトでは、ビジュアルリグレッションテストのために Playwright Component Testing を使用しています。

### テストの実行

**重要**: すべてのテストは、環境間で一貫したスクリーンショットを保証するために、Docker 経由で実行する必要があります。

```bash
# Docker ですべてのコンポーネントテストを実行 (推奨)
npm run playwright:docker

# Docker でスクリーンショットのベースラインを更新
npm run playwright:docker:update

# Docker で grep パターンを使用して特定のテストを実行
npm run playwright:docker -- --grep "@ComponentName"

# 必要に応じて Docker キャッシュをクリア
npm run playwright:docker:clear-cache
```

### ローカルテスト (Linux のみ)

Linux を使用している場合は、ローカルでテストを実行できます。

```bash
# Playwright ブラウザをインストール (一度実行)
npm run playwright:install
# すべてのコンポーネントテストを実行
npm run playwright
# スクリーンショットのベースラインを更新
npm run playwright:update
```

詳細なテストドキュメントについては、[Playwright ガイド](./playwright/README.md)を参照してください。

## 開発

開発およびコントリビューションに関する指示は、[CONTRIBUTING.md](./CONTRIBUTING.md) で確認できます。

## ライセンス

MIT

## AI エージェント向け

Atomic Design (アトム → モレキュール → オーガニズム → テンプレート → ページ) に従って整理された、AI チャットインターフェース構築のための React コンポーネントライブラリです。SDK に依存しないため、これらのプリミティブを `@gravity-ui/uikit` で手動で構成する代わりに、チャット UI (メッセージリスト、プロンプト入力、ツール呼び出し、添付ファイル) を組み立てるために使用できます。

### 使用する場面

- AI/LLM チャット UI (アシスタント/ユーザー/ツールメッセージ、提案付きプロンプト入力、添付ファイルのアップロード、思考状態) の構築。
- すぐに使用できるチャットレイアウト (`ChatContainer`、`MessageList`、`PromptInput`) と、動作をカスタマイズするためのフックが必要な場合。
- CSS 変数によるテーマの共有を伴う Gravity UI エコシステムへの埋め込み。

### 使用しない場面

- 一般的な UI プリミティブ (ボタン、入力、モーダル) の場合、[`@gravity-ui/uikit`](https://gravity-ui.com/uikit) を直接使用してください。AIKit はチャット固有のニーズのためにそれを基盤として構築されています。
- メッセージ内のリッチマークダウンをレンダリングする場合、AIKit の `MarkdownRenderer` は [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor) をラップしています。スタンドアロンのマークダウンレンダリングには、そのパッケージを直接使用してください。
- チャットオーケストレーションなしの単一のチャットバブルの場合、uikit の `MarkdownRenderer`/テキストブロックは、AIKit の完全なメッセージパイプラインよりも軽量です。

### よくある落とし穴

- **AI SDK のインポートを誤解する** - AIKit は SDK に依存しません。コンポーネント/フックを提供し、LLM クライアントは提供しません。独自のデータソースを用意し、props を介してメッセージをフィードしてください。
- **`<Chat>` / `<AIChat>` を探す** - ページレベルのエクスポートは `ChatContainer` (および `AIStudioChat`) です。文字通り `Chat` という名前のコンポーネントはありません。
- **カスタムタイプのメッセージタイプ登録をスキップする** - カスタムメッセージの種類は、メッセージタイプシステムに登録する必要があります。そうしないと、不明としてレンダリングされます。
- **ベースコンポーネントを編集するのではなくフックを使用する** - 2 レベルのデザインでは、フック/コンポジションによるカスタマイズが期待されています。内部を直接オーバーライドすると、アップグレード時に問題が発生します。

## AI エージェント向けドキュメント

インストールされているバージョン向けの、エージェントが読み取れるドキュメントは、`node_modules/@gravity-ui/aikit/build/docs/INDEX.md` にあります。