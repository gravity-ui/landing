# @gravity-ui/dynamic-forms &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dynamic-forms)](https://www.npmjs.com/package/@gravity-ui/dynamic-forms) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dynamic-forms/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/dynamic-forms/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dynamic-forms/)

**English** · [Русский](README-ru.md)

JSON Schema と `react-final-form` をベースにしたフォームレンダラーです。単一のスキーマで値とレンダリング方法の両方を記述します。バリデーションルールは標準的な Draft-07 キーワードを使用し、ノードの描画には `nodeParameters` 拡張を使用します。

- エントリーポイント: `@gravity-ui/dynamic-forms`
- ステータス: **安定 API**
- 2つのレイヤー: `core` (ヘッドレスエンジン) と `kit` (`@gravity-ui/uikit` 上のすぐに使えるエンティティとレイアウト)

以前の DynamicField / DynamicView API は `@gravity-ui/dynamic-forms/deprecated` から利用可能です。削除された `/unstable` エントリーポイントからの SchemaRenderer のインポートは、パッケージのルートに移動します。完全な移行については [移行ガイド](MIGRATION.md) を、以前の API ドキュメントについては [docs/deprecated](docs/deprecated) を参照してください。

## インストール

```shell
npm install --save-dev @gravity-ui/dynamic-forms
```

## 目次

- [使い方](docs/en/how-to-use.md) — クイックスタート、`name` プロパティ、モード、選択肢。
- [API リファレンス](docs/en/api.md) — コンポーネント、フック、プロパティ、定数、ユーティリティ、`kit` エクスポート、型。
- [スキーマ](docs/en/schema.md) — `nodeParameters`、フラグ、アノテーション、キーワード、`stringNumber`、`$ref`。
- [ランタイム](docs/en/runtime.md) — ノードのライフサイクル、値の型変換、バリデーション、エラー、イベント、パッチ。
- [キット](docs/en/kit.md) — レイアウト、エンティティカタログ、サービスコンポーネント、スタイル。
- [拡張](docs/en/extension.md) — カスタムエンティティ、レイアウト、バリデーター、設定、スタンドアロンレンダラー。
- [移行](MIGRATION.md) — 以前のメイン API または `/unstable` からの移行、Spec の変換、`/deprecated` を介した互換性。
- [注意点と制限事項](docs/en/limitations.md) — コードで検証された不一致、制限事項、バグ。

## これは何か

`src/lib` は、フォームと値の概要の両方が単一の JSON Schema から構築されるフォームエンジンです。`core` レイヤーには独自のコントロールはありません。レンダリングされるすべては設定から取得されます。バリデーションは `json-schema-library` (Draft-07) とカスタム `stringNumber` キーワードを通じて実行されます。`kit` レイヤーは、すぐに使えるレジストリを提供します。30 のエンティティキーが 6 つのノードタイプ、7 つのレイアウトキー、サービスコンポーネント、`useExpanded` フック、エラーテキスト、古い Spec フォーマットからの `specToJsonSchema` コンバーターに対応しています。

## 仕組み

1. **スキーマと設定。** `useSchemaRenderer` は `schema` をクローンし、バリデーターを持つサービスフィールドに状態を保存します。
2. **ノード。** `SchemaRendererNode` はポインターでサブスキーマを取得し、`final-form` フィールドを登録し、`entity` と `layout` を選択します。
3. **変更。** 値の編集は、`validateFields` を介して、サービスフィールドのバリデーターのみをトリガーします。
4. **エラー。** バリデーターは、名前でエラーを `srState.errors` に広げます。メッセージが変更されたノードは再レンダリングされます。
5. **命令型。** `useSchemaRendererTools` はスキーマをパッチし、外部エラーを追加してバリデーションを再開します。

## 依存関係

| パッケージ                                  | 役割     | 理由                                                              |
| :------------------------------------------ | :------- | :---------------------------------------------------------------- |
| `react` / `react-dom` / `react-is`          | peer     | 18, 19. レンダリング。                                            |
| `final-form` / `react-final-form`           | peer     | フォーム、フィールド、送信、サブスクリプション。                    |
| `@gravity-ui/uikit`                         | peer     | バージョン 8. キットコントロール: TextInput, Select, Checkbox など。 |
| `json-schema-library`                       | runtime  | Draft-07 バリデーションとカスタム `stringNumber` キーワード。       |
| `decimal.js`                                | runtime  | `stringNumber` および `*_with_scale` での数値比較とスケール。       |
| `@gravity-ui/date-components`, `date-utils` | runtime  | `DateInput` および `DateValue`。                                  |
| `@gravity-ui/icons`                         | runtime  | Alert, Label, TextContent の `iconName`。                         |
| `@gravity-ui/i18n`                          | runtime  | エラーテキストのローカライズ。                                    |
| `@bem-react/classname`, `lodash`, `uuid`    | runtime  | クラス、ユーティリティ、キー。                                    |
| Monaco                                      | external | バンドルされていません。`userContext.MonacoEditor` 経由で渡されます。 |

## I18N

一部のコンポーネントには、`en` (デフォルト) と `ru` の 2 つの言語で利用可能なテキストトークン (単語やフレーズ) が含まれています。言語を設定するには、`configure` 関数を使用します。

```js
// index.js

import {configure, Lang} from '@gravity-ui/dynamic-forms';

configure({lang: Lang.Ru});
```

## 開発

開発サーバーを Storybook で起動するには、次のコマンドを実行します。

```shell
npm ci
npm run dev
```