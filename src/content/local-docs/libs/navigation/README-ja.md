# @gravity-ui/navigation &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/navigation)](https://www.npmjs.com/package/@gravity-ui/navigation) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/navigation/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/navigation/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/navigation/)

### サイドヘッダーナビゲーション &middot; [プレビュー →](https://preview.yandexcloud.dev/navigation/)

![](docs/images/showcase.png)

## インストール

```bash
npm install @gravity-ui/navigation
```

プロジェクトにピア依存関係がインストールされていることを確認してください。

```bash
npm install --dev @gravity-ui/uikit@^7.2.0 @gravity-ui/icons@^2.2.0 @bem-react/classname@^1.6.0 react@^19.0.0 react-dom@^19.0.0
```

## 使用方法

`AsideHeader` をアプリのシェルとしてレンダリングします。これは制御コンポーネントであり、`compact`/`onChangeCompact` を介して折りたたみ状態を管理します。ページコンテンツは `renderContent` を介して渡します。最初に `@gravity-ui/uikit` のスタイルと `ThemeProvider` を設定してください（[uikit スタイルガイド](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles)を参照）。

```tsx
import React from 'react';
import {AsideHeader} from '@gravity-ui/navigation';
import {Gear, House} from '@gravity-ui/icons';
import {ThemeProvider} from '@gravity-ui/uikit';

import '@gravity-ui/uikit/styles/styles.css';

export function App() {
  const [compact, setCompact] = React.useState(false);

  return (
    <ThemeProvider theme="light">
      <AsideHeader
        logo={{text: 'My App', href: '/'}}
        compact={compact}
        onChangeCompact={setCompact}
        menuItems={[
          {id: 'home', title: 'Home', icon: House, current: true},
          {id: 'settings', title: 'Settings', icon: Gear},
        ]}
        renderContent={() => <main>Page content</main>}
      />
    </ThemeProvider>
  );
}
```

## Sandboxes

Basic
https://codesandbox.io/p/devbox/navigation-demo-simple-x9k5sd

Advanced
https://codesandbox.io/p/devbox/recursing-dawn-6kc9vh

## ロードマップ 2025

1. SSR のサポート
2. [Gravity UI](https://gravity-ui.com/ru/components/navigation/aside-header) にドキュメントと例を追加
3. UIKit テーマでのナビゲーションのサポート
4. subheaderItem、menuItem、footerItem API の統合

## コンポーネント

- [AsideHeader](https://github.com/gravity-ui/navigation/tree/main/src/components/AsideHeader/README.md)
  - [AllPagesPanel](https://github.com/gravity-ui/navigation/tree/main/src/components/AllPagesPanel/README.md)
  - PageLayout
- [PageLayoutAside](https://github.com/gravity-ui/navigation/tree/main/src/components/AsideHeader/README.md)
- AsideFallback
- FooterItem
- [Logo](https://github.com/gravity-ui/navigation/tree/main/src/components/Logo/Readme.md)
- [Drawer](https://github.com/gravity-ui/navigation/tree/main/src/components/Drawer/README.md)
- [DrawerItem](https://github.com/gravity-ui/navigation/blob/main/src/components/Drawer/README.md#draweritem-props)
- [MobileHeader](https://github.com/gravity-ui/navigation/tree/main/src/components/MobileHeader/README.md)
- MobileHeaderFooterItem
- MobileLogo
- [HotkeysPanel](https://github.com/gravity-ui/navigation/tree/main/src/components/HotkeysPanel/README.md)
- [Footer](https://github.com/gravity-ui/navigation/tree/main/src/components/Footer/README.md)
- [MobileFooter](https://github.com/gravity-ui/navigation/tree/main/src/components/Footer/README.md)
- [ActionBar](https://github.com/gravity-ui/navigation/tree/main/src/components/ActionBar/README.md)
- [Settings](https://github.com/gravity-ui/navigation/tree/main/src/components/Settings/README.md)

## CSS API

Navigation のコンポーネントのテーマ設定に使用されます。

## ライセンス

MIT License に基づいて配布されています。詳細については [LICENSE](LICENSE) を参照してください。

## AI エージェント向け

Gravity UI アプリケーション向けのアプリケーションシェルナビゲーションコンポーネント。折りたたみ可能な `AsideHeader` サイドバー、フッター、ドロワー、ロゴ、ホットキー、およびページ全体を囲む設定パネルが含まれます。

### 使用する場合

- アプリケーションのプライマリナビゲーションフレーム: `AsideHeader`（折りたたみ可能なサイドナビゲーション）に `menuItems`、サブヘッダー、フッターセクションが含まれます。
- サポートするシェル UI: `Drawer`/`DrawerItem`、`Footer`/`MobileFooter`、`MobileHeader`、`HotkeysPanel`、`Settings`、`ActionBar`、`Logo`。
- `renderContent` / `PageLayout` を介したナビゲーションフレーム内のページコンテンツのレイアウト。

### 使用しない場合

- 一般的なページ内コントロール（ボタン、タブ、メニュー、パンくずリスト） — [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) を使用してください。このパッケージは外側のアプリのクロームであり、一般的なコンポーネントではありません。
- 設定からページ本文自体をレンダリングする場合 — [`@gravity-ui/page-constructor`](https://github.com/gravity-ui/page-constructor) を使用してください。
- クライアントサイドルーティング — これはナビゲーション UI のみを提供します。クリックを独自のルーターに接続してください。

### よくある落とし穴

- **`AsideHeader` は制御されています。** `compact` で折りたたみ状態を管理し、`onChangeCompact` で更新する必要があります。ハンドラーなしで `compact` を渡すと、サイドバーがフリーズします。
- **メニュー項目は `menuItems` で、`id` でキー付けされます。** 各項目は `{id, title, icon, current, onItemClick}` です。`icon` には文字列名ではなく、アイコンコンポーネント（例: `@gravity-ui/icons` から）を指定します。
- **ピア依存関係が必要です。** `@gravity-ui/uikit`、`@gravity-ui/icons`、`@bem-react/classname` は、`react`/`react-dom` と一緒にインストールする必要があります。
- **uikit のセットアップが必要です。** `ThemeProvider` 内でレンダリングし、`@gravity-ui/uikit/styles/styles.css` をインポートしないと、シェルはスタイルなしでレンダリングされます。
- **ページコンテンツは `renderContent` を介して渡されます。** ルーティングされたコンテンツは、`children` ではなく `renderContent` プロップ / `PageLayout` を介してレンダリングします。

## AI エージェント向けドキュメント

インストールされているバージョンに関するエージェント可読ドキュメントは、`node_modules/@gravity-ui/navigation/build/docs/INDEX.md` にあります。