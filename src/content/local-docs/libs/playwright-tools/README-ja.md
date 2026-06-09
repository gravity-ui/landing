# playwright-tools

Playwright Test でテストを記述するための追加ユーティリティライブラリです。

```
npm i -D @gravity-ui/playwright-tools
```

このパッケージには、さまざまな目的のユーティリティが含まれる複数のサブディレクトリがあります。これらのサブディレクトリからインポートしてください。例:

```ts
import { matchScreenshot } from 'playwright-tools/actions';
```

- [actions](./actions/README.md) — ブラウザアクション。
- [auth/storage](./auth/storage/README.md) — ブラウザストレージのスナップショットを保存および復元するための認証機能。
- [component-tests](./component-tests/README.md) — Playwright Component Testing 用のユーティリティとフィクスチャ。
- [fixtures](./fixtures/README.md) — テストに値を渡すためのフィクスチャ。
- [har](./har/README.md) — HAR リクエストダンプを操作するための関数。
- [utils](./utils/README.md) — ヘルパー関数。

Playwright とその設定方法については、[Playwright ドキュメント](https://playwright.dev/docs/intro)で詳しく学ぶことができます。

## メンテナー

[@Avol-V](https://github.com/Avol-V)
[SwinX](https://github.com/SwinX)