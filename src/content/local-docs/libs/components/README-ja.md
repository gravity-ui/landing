# @gravity-ui/components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/components)](https://www.npmjs.com/package/@gravity-ui/components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/components/)

[`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) をベースにした、複雑な React コンポーネントのセットです。[Gravity UI](https://gravity-ui.com) デザインシステムの一部です。

## インストール

```shell
npm install @gravity-ui/components
```

## 使用方法

`@gravity-ui/uikit` 8 および React 18/19 が必要です。現在の UIKit 8 のプレリリース版は `npm install @gravity-ui/uikit@beta` でインストールしてください。

`@gravity-ui/uikit` はピア依存関係です。インストールし、アプリのエントリーポイントで一度スタイルをインポートし、アプリを `Provider` でラップしてください。このパッケージのコンポーネントは、そのセットアップなしではスタイルなしでレンダリングされます。

```tsx
import {Provider, TextInput} from '@gravity-ui/uikit';
import {FormRow} from '@gravity-ui/components';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

export function App() {
  return (
    <Provider theme="light">
      <FormRow label="名前" fieldId="name">
        <TextInput id="name" name="name" />
      </FormRow>
    </Provider>
  );
}
```

### UIKit 8 への移行

- アプリケーションレベルの `ThemeProvider` を `Provider` に置き換えてください。
- `ConfirmDialog` および `ChangelogDialog` では、`onClose` の代わりに `onOpenChange` を使用してください。`ConfirmDialog` は、`size` の代わりに `maxWidth` および `fullWidth` を含む新しい Dialog プロパティを受け入れます。
- `ChangelogDialog` およびクッキー同意ポップアップの設定から `disableHeightTransition` を削除してください。UIKit はコンテンツの高さをアニメーションしなくなりました。
- `Stories` および `StoriesGroup` は `onClose` を維持し、オプションのイベント/理由引数と UIKit 8 の理由 (`escape-key`, `outside-press`, `click`) を受け入れます。
- `extraProps` の代わりに、`StoreBadge` を含むボタン/リンクのプロパティにネイティブ HTML 属性を直接渡してください。カスタムストーリーアクションでは、UIKit 8 の Button ビューを使用してください。

基盤となる API の変更については、[UIKit 8 移行ガイド](https://github.com/gravity-ui/uikit/blob/next/docs/migration-to-v8.md)を参照してください。このパッケージは、レガシーエントリーポイントなしで新しい List、Menu、および Popover API を使用します。

### 確認ダイアログ

```tsx
import {ConfirmDialog} from '@gravity-ui/components';

<ConfirmDialog
  open={open}
  title="プロジェクトを削除しますか？"
  message="この操作は元に戻せません。"
  textButtonApply="削除"
  textButtonCancel="キャンセル"
  onClickButtonApply={handleDelete}
  onClickButtonCancel={() => setOpen(false)}
  onOpenChange={setOpen}
/>;
```

### その他の例

各コンポーネントには、ソースの隣にプロパティと例を示す README があります。`src/components/<Component>/README.md` を参照してください。ライブデモ: [Storybook](https://preview.gravity-ui.com/components/)。

## 開発

```shell
git clone git@github.com:gravity-ui/components.git
cd components
npm ci
npm run start   # Storybook を http://localhost:7009 で起動します
```

その他の便利なコマンド:

```shell
npm test              # 単体テストを実行します
npm run lint          # JS および SCSS を lint します
npm run typecheck     # TypeScript の型チェックを実行します
```

## 貢献

貢献を歓迎します！プルリクエストを送信する前に、[CONTRIBUTING.md](CONTRIBUTING.md) をお読みください。

## ライセンス

MIT ライセンスの下で配布されています。詳細については [LICENSE](LICENSE) を参照してください。

## AI エージェント向け

Gravity UI の複合コンポーネントレイヤーです。[`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) のプリミティブから構築された、すぐに使えるフォーム行、確認ダイアログ、通知、ストーリー、ギャラリーなどの製品レベルのウィジェットで、手動で再構築する必要はありません。

### 使用する場合

- フォームレイアウト: 手動で作成したラベル/入力ラッパーの代わりに `FormRow` (ラベル + フィールド + 説明)。
- 確認フロー: 2 つのボタンを持つ `Dialog` を自分で構成する代わりに `ConfirmDialog`。
- 製品ウィジェット: `Notifications`, `Stories` / `StoriesGroup`, `ChangelogDialog`, `OnboardingMenu`, `PromoSheet`, `CookieConsent`, `Reactions`, `SharePopover`, `StoreBadge`。
- データヘルパー: `InfiniteScroll`, `ItemSelector`, `DelayedTextInput`, `TokenizedInput`, `Gallery`。

### 使用しない場合

- 基本的なコントロール、オーバーレイ、レイアウト、テーマ設定 — [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) を直接使用してください。このパッケージは、その上に複合コンポーネントを追加するだけです。
- データグリッド — [`@gravity-ui/table`](https://github.com/gravity-ui/table) を使用してください。ここにはテーブルはありません。
- 日付ピッカーとカレンダー — [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components) を使用してください。
- アプリケーションナビゲーションシェル (サイドヘッダー、フッター) — [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation) を使用してください。
- スキーマ駆動フォーム — [`@gravity-ui/dynamic-forms`](https://github.com/gravity-ui/dynamic-forms) を使用してください。`FormRow` はレイアウト行にすぎません。

### 一般的な注意点

- **uikit のセットアップなしでは何もスタイル設定されません。** `@gravity-ui/uikit` をインストールし、一度 `@gravity-ui/uikit/styles/styles.css` (および `fonts.css`) をインポートし、アプリを `Provider` でラップしてください。このパッケージは独自のグローバルスタイルを提供しません。
- **`FormRow` は入力フィールドをレンダリングしません。** コントロールを `children` として渡し、コントロールの `id` と一致する `fieldId` でリンクしてください。`label` プロパティはラベルテキストであり、`<label>` 要素ではありません。
- **`ConfirmDialog` には `onConfirm` / `onCancel` がありません。** ハンドラーは `onClickButtonApply` および `onClickButtonCancel` であり、`textButtonApply` / `textButtonCancel` は必須です。
- **誤ったインポート。** すべてのものがパッケージのルートからエクスポートされます: `import {FormRow} from '@gravity-ui/components'`。`@gravity-ui/components/FormRow` のようなサブパスインポートはありません。

## AI エージェント向けドキュメント

インストールされているバージョン向けの、エージェントが読み取り可能なドキュメントは、`node_modules/@gravity-ui/components/build/docs/INDEX.md` にあります。