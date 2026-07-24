# NodeKit

NodeKit は、Node.js アプリ、スクリプト、ライブラリ向けのシンプルなツールキットです。ロギング、テレメトリ、設定、エラー処理機能を提供し、さまざまなプロジェクトで使い慣れた基盤を構築できます。

## インストール

```bash
npm install --save @gravity-ui/nodekit
```

## はじめに

プロジェクトに依存関係を追加します。

```bash
npm install --save @gravity-ui/nodekit
```

そして、アプリケーションで NodeKit をインポートして初期化します。

```typescript
import {NodeKit} from '@gravity-ui/nodekit';

const nodeKit = new NodeKit();
nodekit.ctx.log('App is ready');
```

## ドキュメント

追加のドキュメントについては、`docs/` ディレクトリを参照してください。

- [`docs/configuration.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/configuration.md) では、nodekit 自体と nodekit ベースのアプリケーションの両方を設定する方法について説明しています。
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md) では、NodeKit のコンテキスト、ロギング、トレーシングの概念について説明しています。
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md) には、NodeKit がアプリケーション用に提供する便利なカスタムエラークラスの説明が含まれています。
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md) には、NodeKit にバンドルされている追加のヘルパー関数がリストされています。

## 貢献

### はじめに

NodeKit リポジトリとサンプルアプリケーションのコピーを取得します。

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

NodeKit を npm にリンクし、コンパイラを起動します。

```bash
cd nodekit && npm link && npm run dev
```

次に、別のターミナルで例に移動し、関心のあるものを開いて、そこで NodeKit をリンクしてからアプリを起動します。

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

この時点で、NodeKit とデモアプリの両方に変更を加え、リアルタイムで結果を確認できます。

## ライセンス

MIT ライセンスの下で配布されます。詳細については [LICENSE](LICENSE) を参照してください。

## AI エージェント向け

Node.js の基本的なツールキット（ロギング、テレメトリ、型付きエラー、設定、リクエストコンテキスト）で、Gravity UI バックエンド全体で共有されます。HTTP レイヤーを追加する前に、ロギング/エラー/設定の配管を自分で組み立てるのではなく、一貫したアプリのバックボーンを取得するために使用してください。

### 使用する場合

- 共有ロギング、テレメトリ（トレーシング）、型付き `AppError` を必要とする Node.js サービス/スクリプト。
- 非同期境界を越えてリクエストスコープのコンテキスト（ログ/トレース）を提供する。
- 設定を一元化し、同じエコシステムの複数のサービスが一貫して動作するようにする。

### 使用しない場合

- HTTP ルート、ミドルウェア、またはサーバーを公開するには、[`@gravity-ui/expresskit`](https://github.com/gravity-ui/expresskit) を使用してください。これは NodeKit をベースにしており、Express/HTTP レイヤーを追加します。
- ロギング/テレメトリのニーズがないスタンドアロンの単一ファイルスクリプトの場合、プレーンな Node API は、完全な NodeKit コンテキストシステムよりも軽量です。

### 一般的な注意点

- **`import {Logger}` / `logger` の幻覚** — ロギングは NodeKit コンテキストを通じてアクセスされます: `new NodeKit()` の後に `nodekit.ctx.log(...)` となり、スタンドアロンのロガーエクスポートではありません。
- **NodeKit の繰り返しインスタンス化** — アプリごとに 1 つの `NodeKit` インスタンスを作成し、その `ctx` を共有します。多数のインスタンスを作成すると、ロギング/テレメトリの設定が断片化します。
- **プレーンな `Error` のスロー** — エラーコードとテレメトリが一貫してキャプチャされるように、バンドルされた `AppError`（`docs/app-error.md` を参照）を使用してください。
- **設定の初期化のスキップ** — NodeKit は構築時に設定を読み取ります。デフォルトを想定する前に、`docs/configuration.md` を確認してください。

## AI エージェント向けドキュメント

インストールされているバージョンのエージェント読み取り可能なドキュメントは、`node_modules/@gravity-ui/nodekit/dist/docs/INDEX.md` にあります。