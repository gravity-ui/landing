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

## マイグレーション

4.x、5.x、または6.xからのアップグレードについては、[MIGRATION_GUIDE_v7.md](MIGRATION_GUIDE_v7.md)を参照してください。

## 使用方法

`AsideHeader` をアプリのシェルとしてレンダリングします。これは制御コンポーネントであり、`compact`/`onChangeCompact` を介して折りたたみ状態を管理し、ページコンテンツは `renderContent` を通して渡します。まず、`@gravity-ui/uikit` のスタイルと `ThemeProvider` を設定してください（[uikit スタイルガイド](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles)を参照）。

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

1. SSRのサポート
2. [Gravity UI](https://gravity-ui.com/ru/components/navigation/aside-header)へのドキュメント、例の追加
3. UIKitテーマでのナビゲーションサポート
4. subheaderItem、menuItem、footerItem APIの統一

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

Navigationコンポーネントのテーマ設定に使用されます。

## ライセンス

MIT Licenseの下で配布されています。詳細は[LICENSE](LICENSE)を参照してください。

## AIエージェント向け

Gravity UIアプリのアプリケーションシェルナビゲーションコンポーネント — 折りたたみ可能な`AsideHeader`サイドバーに加え、フッター、ドロワー、ロゴ、ホットキー、設定パネルがページ全体を構成します。

### 使用する場合

- アプリのプライマリナビゲーションフレーム: `AsideHeader`（折りたたみ可能なサイドナビゲーション）に`menuItems`、サブヘッダー、フッターセクションが含まれます。
- サポートするシェルUI: `Drawer`/`DrawerItem`、`Footer`/`MobileFooter`、`MobileHeader`、`HotkeysPanel`、`Settings`、`ActionBar`、`Logo`。
- `renderContent` / `PageLayout` を介してナビゲーションフレーム内にページコンテンツを配置する場合。

### 使用しない場合

- 一般的なページ内コントロール（ボタン、タブ、メニュー、パンくずリスト） — [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit)を使用してください。このパッケージは外側のアプリのクロームであり、一般的なコンポーネントではありません。
- 設定からページ本文自体をレンダリングする場合 — [`@gravity-ui/page-constructor`](https://github.com/gravity-ui/page-constructor)を使用してください。
- クライアントサイドルーティング — これはナビゲーションUIのみを提供します。クリックを独自のルーターに接続してください。

### よくある間違い

- **`AsideHeader`は制御されています。** `compact`で折りたたみ状態を管理し、`onChangeCompact`で更新する必要があります。ハンドラーなしで`compact`を渡すと、サイドバーがフリーズします。
- **メニュー項目は`menuItems`で、`id`でキー付けされます。** 各項目は`{id, title, icon, current, onItemClick}`です。`icon`は文字列名ではなく、アイコンコンポーネント（例: `@gravity-ui/icons`から）を受け取ります。
- **ピア依存関係が必要です。** `@gravity-ui/uikit`、`@gravity-ui/icons`、`@bem-react/classname`は、`react`/`react-dom`と一緒にインストールする必要があります。
- **uikitの設定が必要です。** `ThemeProvider`内でレンダリングし、`@gravity-ui/uikit/styles/styles.css`をインポートしないと、シェルはスタイルなしでレンダリングされます。
- **ページコンテンツは`renderContent`を経由します。** ルートされたコンテンツは、`children`ではなく、`renderContent`プロップ / `PageLayout`を介してレンダリングしてください。

## AIエージェント向けドキュメント

インストールされているバージョンのエージェント可読ドキュメントは、`node_modules/@gravity-ui/navigation/build/docs/INDEX.md`にあります。