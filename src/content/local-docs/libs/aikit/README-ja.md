# AIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/aikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/aikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/aikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/aikit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/aikit/?path=/docs/pages-chatcontainer--docs)

AIチャット構築のためのUIコンポーネントライブラリ。アトミックデザインの原則に基づいています。

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/aikit_cover.png)

## リソース

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [ウェブサイト](https://gravity-ui.com/libraries/aikit)

### ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/aikit/)

### ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [コミュニティ](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## 説明

**@gravity-ui/aikit** は、あらゆる複雑さのAIチャットを構築するための、柔軟で拡張性の高いReactコンポーネントライブラリです。このライブラリは、そのまま使用することも、ニーズに合わせてカスタマイズすることも可能な、すぐに使えるコンポーネントセットを提供します。

### 主な特徴

- 🎨 **アトミックデザイン** — アトムからページまで、明確なコンポーネント階層
- 🔧 **SDK非依存** — 特定のAI SDKに依存しない
- 🎭 **二段階アプローチ** — すぐに使えるコンポーネント + カスタマイズ用フック
- 🎨 **CSS変数** — コンポーネントのオーバーライドなしで簡単なテーマ設定
- 📦 **TypeScript** — 最初から完全な型安全性
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

### 🔹 アトム (Atoms)

ビジネスロジックを持たない、基本的な分割不可能なUI要素です。

- `ActionButton` — ツールチップが統合されたボタン
- `Alert` — バリアント付きのアラートメッセージ
- `ChatDate` — 相対日付での日付フォーマット
- `ContextIndicator` — トークンコンテキストの使用状況インジケーター
- `ContextItem` — 削除アクション付きのコンテキストラベル
- `DiffStat` — コード変更統計表示
- `Disclaimer` — 注意書きテキストコンポーネント
- `InlineCitation` — テキスト内の引用
- `Loader` — ローディングインジケーター
- `MarkdownRenderer` — Yandex Flavored Markdownレンダラー
- `MessageBalloon` — メッセージラッパー
- `Shimmer` — ローディングアニメーション効果
- `SubmitButton` — 状態付きの送信ボタン
- `ToolIndicator` — ツール実行ステータスインジケーター

### 🔸 モレキュール (Molecules)

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

### 🔶 オーガニズム (Organisms)

内部ロジックを持つ複雑なコンポーネントです。

- `AssistantMessage` — AIアシスタントメッセージ
- `Header` — チャットヘッダー
- `MessageList` — メッセージリスト
- `PromptInput` — メッセージ入力フィールド
- `ThinkingMessage` — AIの思考プロセス
- `ToolMessage` — ツールの実行
- `UserMessage` — ユーザーメッセージ

### 📄 テンプレート (Templates)

完全なレイアウトです。

- `ChatContent` — メインのチャットコンテンツ
- `EmptyContainer` — 空の状態
- `History` — チャット履歴

### 📱 ページ (Pages)

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

**重要**: すべてのテストは、異なる環境間でのスクリーンショットの一貫性を確保するために、Docker 経由で実行する必要があります。

```bash
# Docker ですべてのコンポーネントテストを実行する (推奨)
npm run playwright:docker

# Docker でスクリーンショットのベースラインを更新する
npm run playwright:docker:update

# Docker で grep パターンを使用して特定のテストを実行する
npm run playwright:docker -- --grep "@ComponentName"

# 必要に応じて Docker キャッシュをクリアする
npm run playwright:docker:clear-cache
```

### ローカルテスト (Linux のみ)

Linux を使用している場合は、ローカルでテストを実行できます。

```bash
# Playwright ブラウザをインストールする (一度だけ実行)
npm run playwright:install
# すべてのコンポーネントテストを実行する
npm run playwright
# スクリーンショットのベースラインを更新する
npm run playwright:update
```

詳細なテストドキュメントについては、[Playwright ガイド](./playwright/README.md)を参照してください。

## 開発

開発およびコントリビューションに関する手順は、[CONTRIBUTING.md](./CONTRIBUTING.md) で確認できます。

## ライセンス

MIT