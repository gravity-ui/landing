# UIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![npm downloads](https://img.shields.io/npm/dm/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook tests](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/test-storybook.yml?label=Storybook%20Tests&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/test-storybook.yml) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/uikit/)

[English](README.md) | [Русский](README-ru.md)

リッチなWebアプリケーションを構築するための、柔軟で実用的、かつ効率的なReactコンポーネントセットです。[Gravity UI](https://gravity-ui.com)デザインシステムの一部です。

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [Website](https://gravity-ui.com) &nbsp;&nbsp; ![Documentation Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Documentation Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [Documentation](https://gravity-ui.com/components/uikit/alert) &nbsp;&nbsp; ![Figma Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Figma Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma](<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>) &nbsp;&nbsp; ![Themer Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Themer Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Themer](https://gravity-ui.com/themer) &nbsp;&nbsp; ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/uikit/) &nbsp;&nbsp; ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [Community](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## About

UIKitは、[Gravity UI](https://gravity-ui.com)デザインシステムの基盤となるパッケージです。本番環境のWebアプリケーション向けに構築された、実証済みの70以上のReactコンポーネントセットです。テーマ設定、アクセシビリティ、RTLレイアウト、サーバーサイドレンダリング、国際化といった難しい部分を処理するため、あなたはプロダクト構築に集中できます。

主な特徴：

- **70以上のコンポーネント** — 入力、オーバーレイ、データ表示、レイアウトプリミティブ、フィードバックなど
- **組み込みテーマ設定** — ライト、ダーク、ハイコントラストのバリアントがあり、トークンをカスタマイズするためのライブ[Themer](https://gravity-ui.com/themer)ツールも利用可能
- **RTLサポート** — 完全な右から左へのレイアウト方向

コンポーネントカタログの全容は、[Storybook](https://preview.gravity-ui.com/uikit/)または[ドキュメント](https://gravity-ui.com/components/uikit/alert)でご覧ください。

## Getting Started

### Prerequisites

プロジェクトにReact 16.14、17、18、または19がインストールされている必要があります。

### Installation

```shell
npm install @gravity-ui/uikit
```

## Usage

パッケージから直接コンポーネントをインポートします：

```jsx
import {Button} from '@gravity-ui/uikit';

const SubmitButton = (
  <Button view="action" size="l">
    Submit
  </Button>
);
```

### Styles

ベーススタイルとフォントは、アプリのエントリーポイントの先頭に一度だけ含めてください：

```js
// index.js
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

SCSSの[mixins](styles/mixins.scss)ファイルも、独自のスタイルシートで使用できる便利なヘルパーとして提供されています。

### Guides

さらに読む：

- [Theming](docs/theming.md) — ライト、ダーク、ハイコントラストテーマを有効にする
- [Server-side rendering](docs/server-side-rendering.md) — サーバーでルートCSSクラスを生成する
- [Internationalization](docs/i18n.md) — 組み込みコンポーネントの言語を設定する

## Development

```shell
git clone git@github.com:gravity-ui/uikit.git
cd uikit
npm ci
npm run start   # Storybookを http://localhost:7007 で起動します
```

その他の便利なコマンド：

```shell
npm test              # 単体テストを実行します
npm run lint          # JS、SCSS、Markdownをリントします
npm run typecheck     # TypeScriptの型チェックを行います
npm run playwright    # ビジュアルリグレッションテストを実行します
```

## Maintainers

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/amje">
        <img src="https://github.com/amje.png?size=100" width="100" alt="amje" /><br />
        <sub><b>@amje</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ValeraS">
        <img src="https://github.com/ValeraS.png?size=100" width="100" alt="ValeraS" /><br />
        <sub><b>@ValeraS</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/korvin89">
        <img src="https://github.com/korvin89.png?size=100" width="100" alt="korvin89" /><br />
        <sub><b>@korvin89</b></sub>
      </a>
    </td>
  </tr>
</table>

## 貢献について

貢献を歓迎します！プルリクエストを送信する前に、[CONTRIBUTING.md](CONTRIBUTING.md) をお読みください。詳細な PR ガイドラインについては、[contribute/pull-request.md](contribute/pull-request.md) を参照してください。

現在 [![contributors](https://img.shields.io/github/contributors/gravity-ui/uikit?label=contributors)](https://github.com/gravity-ui/uikit/graphs/contributors) 人のコントリビューターがいます — あなたも参加しませんか！

質問やディスカッションは、[Telegram](https://t.me/gravity_ui) コミュニティでどうぞ。

## ライセンス

MIT License に基づいて配布されています。詳細については [LICENSE](LICENSE) を参照してください。

## AI エージェント向け

Gravity UI アプリケーションのベースとなる React コンポーネントおよびデザイン トークン ライブラリ — 他のすべての @gravity-ui パッケージが構築される基盤となるコントロール、入力、オーバーレイ、レイアウト、およびテーマ設定を提供します。

### 使用するケース

- 標準的なアプリケーション UI: ボタン、フォーム コントロール、モーダルとポップアップ、メニュー、タブ、ラベル、タイポグラフィ、レイアウトのプリミティブ。
- Gravity UI アプリのテーマ設定の基盤: `ThemeProvider`、デザイン トークン、および `@gravity-ui/*` エコシステムの他の部分が期待する CSS 変数。
- 組み込みの `Table` コンポーネントを使用したシンプルな表形式データ（選択、ソート、行アクション）。

### 使用しないケース

- 機能豊富なデータ グリッド（仮想化、列リサイズ、グループ化、再配置） — ヘッドレスの独立したパッケージである [`@gravity-ui/table`](https://github.com/gravity-ui/table) を使用してください。これは uikit の `Table` コンポーネントとは**異なります**。
- チャートとデータ可視化 — [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) を使用してください（`@gravity-ui/chartkit` はレガシー ラッパーです）。
- アプリケーション ナビゲーション シェル（ヘッダー、フッター、ロゴの横） — [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation) を使用してください。
- 日付ピッカー、カレンダー、範囲コントロール — [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components) を使用してください。
- SVG アイコン セット自体 — [`@gravity-ui/icons`](https://github.com/gravity-ui/icons) を使用してください。uikit は `Icon` レンダラーのみを提供します。

### よくある落とし穴

- `Button` のスタイリング プロパティは `view` であり、`variant` や `color` ではありません。
- **コンポーネントはセットアップなしではスタイルが適用されずにレンダリングされます。** アプリを `ThemeProvider` でラップし、エントリ ポイントで `@gravity-ui/uikit/styles/styles.css`（および `fonts.css`）を一度インポートしてください — 両方が必要です。
- **`Icon` には `name` プロップがありません。** インポートしたアイコン コンポーネントを `data` を介して渡してください: `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} size={16} />`。
- **`theme` の値は `light | dark | light-hc | dark-hc` です。** `theme="default"` はありません。

### 役立つドキュメント

- [レイアウト コンポーネントとスペーシング](./docs/layout.md)
- [テーマ設定、色 & ブランド](./docs/theming.md)
- [タイポグラフィ](./docs/typography.md)

## AI エージェント向けドキュメント

インストールされているバージョンのエージェント読み取り可能なドキュメントは、`node_modules/@gravity-ui/uikit/build/docs/INDEX.md` にあります。

## スター履歴

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline" />
    <img alt="Star History Chart" width="600" src="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline" />
  </picture>
</div>

---

UIKit が役立つと感じた場合は、[GitHub](https://github.com/gravity-ui/uikit) で ⭐ を付けていただけると幸いです — プロジェクトの発見に役立ちます。