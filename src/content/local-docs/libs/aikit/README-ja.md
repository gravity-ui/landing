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
- 🔧 **SDK非依存** — 特定のAI SDKに依存しない
- 🎭 **二段階アプローチ** — すぐに使えるコンポーネント + カスタマイズ用フック
- 🎨 **CSS変数** — コンポーネントのオーバーライドなしで簡単なテーマ設定
- 📦 **TypeScript** — 最初から完全な型安全性を提供
- 🔌 **拡張可能** — カスタムメッセージタイプの登録システム

## プロジェクト構造

```
src/
├── components/
│   ├── atoms/          # 基本的な分割不可能なUI要素
│   ├── molecules/      # アトムの簡単な組み合わせ
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

AIKit 3 は、`@gravity-ui/uikit@^8.0.0`、React/React DOM 18 または 19、および Node.js 20.19+ (v20内) または 22.12+ を必要とします。[Getting started](./docs/GETTING_STARTED.md) に示されているように、アプリケーションをUIKitの`Provider`でラップしてください。

v2からアップグレードしますか？ [移行ガイド](./docs/migration-to-v3.md) ([Русский](./docs/migration-to-v3-ru.md)) と [v3リリースノート](./docs/changelog-v3.md) をお読みください。

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

- `ActionButton` — 統合されたツールチップを持つボタン
- `Alert` — バリアントを持つアラートメッセージ
- `ChatDate` — 相対日付での日付フォーマット
- `ContextIndicator` — トークンのコンテキスト使用状況インジケーター
- `ContextItem` — 削除アクション付きのコンテキストラベル
- `DiffStat` — コード変更統計の表示
- `Disclaimer` — 注意書きテキストコンポーネント
- `InlineCitation` — テキスト引用
- `Loader` — ローディングインジケーター
- `MarkdownRenderer` — Yandex Flavored Markdown レンダラー
- `MessageBalloon` — メッセージラッパー
- `Shimmer` — ローディングアニメーション効果
- `SubmitButton` — ステータス付きの送信ボタン
- `ToolIndicator` — ツールの実行ステータスインジケーター

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

### 🔶 オーガニズム

内部ロジックを持つ複雑なコンポーネントです。

- `AssistantMessage` — AIアシスタントのメッセージ
- `Header` — チャットヘッダー
- `MessageList` — メッセージリスト
- `PromptInput` — メッセージ入力フィールド
- `ThinkingMessage` — AIの思考プロセス
- `ToolMessage` — ツールの実行
- `UserMessage` — ユーザーメッセージ

### 📄 テンプレート

完全なレイアウト:

- `ChatContent` — メインのチャットコンテンツ
- `EmptyContainer` — 空の状態
- `History` — チャット履歴

### 📱 ページ

完全な統合:

- `ChatContainer` — 完全に組み立てられたチャット

## ドキュメント

- [クイックスタートガイド](./docs/GETTING_STARTED.md)
- [組み込みエンジンなしでのカスタムMarkdownレンダリング](./docs/custom-markdown.md)
- [アーキテクチャ](./docs/ARCHITECTURE.md)
- [プロジェクト構造](./docs/PROJECT_STRUCTURE.md)
- [テストガイド](./docs/TESTING.md)
- [Playwrightガイド](./playwright/README.md)

## テスト

このプロジェクトでは、視覚的な回帰テストのためにPlaywright Component Testingを使用しています。

### テストの実行

**重要**: すべてのテストは、環境間で一貫したスクリーンショットを保証するために、Docker経由で実行する必要があります。

```bash
# Dockerで全てのコンポーネントテストを実行 (推奨)
npm run playwright:docker

# Dockerでスクリーンショットのベースラインを更新
npm run playwright:docker:update

# Dockerでgrepパターンを使用して特定のテストを実行
npm run playwright:docker -- --grep "@ComponentName"

# 必要に応じてDockerキャッシュをクリア
npm run playwright:docker:clear-cache
```

### ローカルテスト (Linuxのみ)

Linuxを使用している場合は、ローカルでテストを実行できます。

```bash
# Playwrightブラウザをインストール (一度実行)
npm run playwright:install
# 全てのコンポーネントテストを実行
npm run playwright
# スクリーンショットのベースラインを更新
npm run playwright:update
```

詳細なテストドキュメントについては、[Playwrightガイド](./playwright/README.md)を参照してください。

## 開発

開発および貢献に関する指示は、[CONTRIBUTING.md](./CONTRIBUTING.md)で入手できます。

## ライセンス

MIT

## AIエージェント向け

Atomic Design (アトム → モレキュール → オーガニズム → テンプレート → ページ) に従って整理された、AIチャットインターフェース構築のためのReactコンポーネントライブラリ。SDKに依存しないため、`@gravity-ui/uikit`からこれらのプリミティブを手動で構成する代わりに、チャットUI（メッセージリスト、プロンプト入力、ツール呼び出し、添付ファイル）を組み立てるために使用できます。

### 使用する場面

- AI/LLMチャットUI（アシスタント/ユーザー/ツールメッセージ、提案付きプロンプト入力、添付ファイルアップロード、思考状態）の構築。
- 用意されたチャットレイアウト（`ChatContainer`、`MessageList`、`PromptInput`）と、動作をカスタマイズするためのフックを求めている場合。
- CSS変数経由で共有テーマ設定を行い、Gravity UIエコシステムに埋め込む場合。

### 使用しない場面

- 一般的なUIプリミティブ（ボタン、入力、モーダル）には、[`@gravity-ui/uikit`](https://gravity-ui.com/uikit)を直接使用してください。AIKitはチャット固有のニーズのためにこれを基盤として構築されています。
- メッセージでリッチなMarkdownをレンダリングするには、AIKitの`MarkdownRenderer`は[`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor)をラップしています。スタンドアロンのMarkdownレンダリングには、そのパッケージを直接使用してください。
- チャットオーケストレーションなしの単一のチャットバブルには、uikitの`MarkdownRenderer`/テキストブロックの方が、AIKitの完全なメッセージパイプラインよりも軽量です。

### よくある落とし穴

- **AI SDKのインポートを誤解する** — AIKitはSDKに依存しません。コンポーネント/フックを提供し、LLMクライアントではありません。独自のデータソースを用意し、props経由でメッセージを供給してください。
- **`<Chat>` / `<AIChat>` を探す** — ページレベルのエクスポートは`ChatContainer`（および`AIStudioChat`）です。`Chat`という名前のコンポーネントは文字通り存在しません。
- **カスタムタイプのメッセージタイプ登録をスキップする** — カスタムメッセージの種類はメッセージタイプシステムに登録する必要があります。そうしないと、不明としてレンダリングされます。
- **フックを使用せずにベースコンポーネントを編集する** — 2層設計では、フック/コンポジションによるカスタマイズが期待されています。内部を直接オーバーライドすると、アップグレード時に問題が発生します。

## AIエージェント向けドキュメント

インストールされているバージョンのエージェント読み取り可能なドキュメントは、`node_modules/@gravity-ui/aikit/build/docs/INDEX.md`にあります。