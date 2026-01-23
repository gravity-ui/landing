# NodeKit

NodeKit は、Node.js アプリ、スクリプト、ライブラリ向けのシンプルなツールキットです。ロギング、テレメトリ、設定、エラー処理などの機能を提供し、さまざまなプロジェクトで使い慣れた基盤を構築できます。

## はじめに

プロジェクトに依存関係を追加します。

```bash
npm install --save @gravity-ui/nodekit
```

次に、アプリケーションで NodeKit をインポートして初期化します。

```typescript
import {NodeKit} from '@gravity-ui/nodekit';

const nodeKit = new NodeKit();
nodekit.ctx.log('App is ready');
```

## ドキュメント

追加のドキュメントについては、`docs/` ディレクトリを参照してください。

- [`docs/configuration.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/configuration.md) では、nodekit 自体と nodekit ベースのアプリケーションの両方を設定する方法について説明しています。
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md) では、NodeKit のコンテキスト、ロギング、トレースの概念について説明しています。
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md) には、NodeKit がアプリケーションに提供する便利なカスタムエラークラスの説明が含まれています。
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md) には、NodeKit にバンドルされている追加のヘルパー関数がリストされています。

## 貢献

### はじめに

NodeKit リポジトリとサンプルアプリケーションのコピーを取得します。

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

nodekit を npm にリンクし、コンパイラを起動します。

```bash
cd nodekit && npm link && npm run dev
```

次に、別のターミナルで例に移動し、関心のあるものを開いて、そこで nodekit をリンクしてからアプリケーションを起動します。

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

この時点で、NodeKit とデモアプリの両方を変更し、リアルタイムで結果を確認できます。