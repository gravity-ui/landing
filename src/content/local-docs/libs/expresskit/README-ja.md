# ExpressKit

ExpressKit は、[express.js](https://expressjs.com/) の軽量ラッパーで、[NodeKit](https://github.com/gravity-ui/nodekit) と統合され、リクエストロギング、トレーシングサポート、非同期コントローラーとミドルウェア、詳細なルート説明などの便利な機能を提供します。

## インストール

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

## 使用方法

```typescript
import {ExpressKit} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

const nodekit = new NodeKit();

const app = new ExpressKit(nodekit, {
  'GET /': (req, res) => {
    res.send('Hello World!');
  },
});

app.run();
```

## セルフテレメトリ

デフォルトでは、セルフテレメトリは元のリクエスト URL を送信します。クエリ文字列が大きい、またはカーディナリティが高いアプリケーションでは、統計情報を送信する前にクエリパラメータを削除できます。

```typescript
const config: Partial<AppConfig> = {
  appTelemetryChEnableSelfStats: true,
  appTelemetryChSelfStatsStripQueryParams: true,
};
```

## CSP

`config.ts`

```typescript
import type {AppConfig} from '@gravity-ui/nodekit';
import {csp} from '@gravity-ui/expresskit';

const config: Partial<AppConfig> = {
    expressCspEnable: true,
    expressCspPresets: ({getDefaultPresets}) => {
        return getDefaultPresets({defaultNone: true}).concat([
            csp.inline(),
            {csp.directives.REPORT_TO: 'my-report-group'},
        ]);
    },
    expressCspReportTo: [
        {
            group: 'my-report-group',
            max_age: 30 * 60,
            endpoints: [{ url: 'https://cspreport.com/send'}],
            include_subdomains: true,
        }
    ]
}

export default config;
```

## CSRF 保護

ExpressKit は、アプリケーションを悪意のあるクロスオリジンリクエストから保護するために、クロスサイトリクエストフォージェリ (CSRF) 保護を組み込んでいます。CSRF ミドルウェアは、状態を変更する HTTP リクエストのトークンを自動的に生成および検証します。

### 基本設定

CSRF 保護を有効にするには、設定でシークレットキーを設定します。

```typescript
import type {AppConfig} from '@gravity-ui/nodekit';

const config: Partial<AppConfig> = {
  // ...
  appCsrfSecret: 'your-secret-key-here',
};

export default config;
```

### 設定オプション

| オプション              | タイプ                 | デフォルト                              | 説明                                                                                     |
| ------------------- | -------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `appCsrfSecret`     | `string \| string[]` | -                                    | **必須。** HMAC トークン生成用のシークレットキー。複数のシークレットでキーローテーションが可能です。 |
| `appCsrfLifetime`   | `number`             | `2592000` (30 日)                  | トークンの有効期間 (秒)。`0` に設定すると期限なしになります。                                        |
| `appCsrfHeaderName` | `string`             | `'x-csrf-token'`                     | トークン検証用の HTTP ヘッダー名。                                                          |
| `appCsrfMethods`    | `string[]`           | `['POST', 'PUT', 'DELETE', 'PATCH']` | CSRF 検証が必要な HTTP メソッド。                                                      |

### 使用方法

設定が完了すると、CSRF 保護は指定された HTTP メソッドを持つすべてのルートに自動的に適用されます。

```typescript
import {ExpressKit, AuthPolicy} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

const nodekit = new NodeKit({
  config: {
    appCsrfSecret: 'your-secret-key',
    appAuthPolicy: AuthPolicy.required,

    // ミドルウェアが originalContext にユーザー ID を設定していることを確認してください。そうしないと、CSRF トークン生成が失敗します。
    appAuthHandler: yourAuthHandler,
  },
});

const app = new ExpressKit(nodekit, {
  'GET /api/form': (req, res) => {
    // トークンはリクエストコンテキストで利用可能です
    res.json({csrfToken: req.originalContext.get('csrfToken')});
  },

  'POST /api/submit': (req, res) => {
    // このルートは CSRF トークンを自動的に検証します
    res.json({message: 'Form submitted successfully'});
  },
});
```

### ルートごとの設定

特定のルートの CSRF 保護を無効にすることができます。

```typescript
const app = new ExpressKit(nodekit, {
  'POST /api/webhook': {
    authPolicy: AuthPolicy.required,
    disableCsrf: true, // このルートの CSRF を無効にする
    handler: (req, res) => {
      res.json({message: 'Webhook processed'});
    },
  },
});
```

## キャッシュ制御

デフォルトでは、ExpressKit はすべてのレスポンスに `no-cache` ヘッダーを設定します。この動作はグローバルまたはルートごとに制御できます。

### グローバル設定

```typescript
const config: Partial<AppConfig> = {
  expressEnableCaching: true, // デフォルトでキャッシュを許可する
};
```

### ルートごとの設定

```typescript
const app = new ExpressKit(nodekit, {
  'GET /api/cached': {
    enableCaching: true, // このルートのキャッシュを許可する
    handler: (req, res) => res.json({data: 'cacheable'}),
  },
  'GET /api/fresh': {
    enableCaching: false, // no-cache を強制する
    handler: (req, res) => res.json({data: 'always fresh'}),
  },
});
```

ルートレベルの `enableCaching` はグローバル設定を上書きします。キャッシュの状態は `req.routeInfo.enableCaching` で利用できます。

## 検証とレスポンスシリアライゼーション

- [リクエストバリデーションとレスポンスシリアライゼーション](https://github.com/gravity-ui/expresskit/blob/main/docs/VALIDATOR.md) - Zodスキーマを使用して、リクエストのバリデーションとレスポンスのシリアライゼーションを自動化します。

## ライセンス

MIT License に基づいて配布されています。詳細は [LICENSE](LICENSE) を参照してください。

## AIエージェント向け

NodeKit の上に構築された薄い Express.js ラッパーで、リクエストロギング、トレーシング、非同期コントローラー/ミドルウェア、宣言的なルートマップを追加します。Express ミドルウェアと NodeKit を手動で配線する代わりに、NodeKit のロギング/テレメトリ スパインを持つ HTTP サーバーが必要な場合に利用してください。

### 使用する場面

- NodeKit のロギング、トレーシング、設定を共有する必要がある Express HTTP サービスを構築する場合。
- 宣言的なルート (`{'GET /path': handler}`) で、ルートごとの認証、CSRF、キャッシュポリシーを設定する場合。
- リクエストコンテキストと統合された組み込みのセキュリティ機能（CSRFトークン、CSPヘッダー）。

### 使用しない場面

- HTTP レイヤーなしの基本的なロギング/テレメトリ/設定には、[`@gravity-ui/nodekit`](https://github.com/gravity-ui/nodekit) を直接使用してください。ExpressKit はそれに依存していますが、HTTP 部分が必要ない場合もあります。
- Express 以外のフレームワーク（Fastify、Koa、NestJS）の場合、ExpressKit は Express 専用です。そのフレームワーク固有のツールを使用してください。

### よくある落とし穴

- **`NodeKit` インスタンスなしで `ExpressKit` を構築する** - コンストラクタは最初の引数として `NodeKit` インスタンスを必要とします。まず `new NodeKit()` を作成してください。
- **`app.get`/`app.post` の誤解** - ルートは、Express スタイルのメソッドチェーンではなく、`new ExpressKit(nodekit, routes)` に渡される `'METHOD /path': handler` のマップとして宣言されます。
- **`app.run()` の呼び忘れ** - ルートは構築時に登録されますが、サーバーは `app.run()` を呼び出したときにのみ起動します。
- **CSRF が認証コンテキストを期待している** - CSRF トークンの生成には、`appAuthHandler` が元のコンテキストにユーザー ID を設定する必要があります。それがなければ、トークン生成は失敗します。
- **コンテキストをバイパスする Express スタイルのミドルウェアの使用** - 非同期コントローラー/ミドルウェアは、トレーシングを維持するために ExpressKit のコンテキストを使用する必要があります。生の Express ハンドラはそれを失います。

## AIエージェント向けドキュメント

インストールされているバージョンのエージェント読み取り可能なドキュメントは、`node_modules/@gravity-ui/expresskit/dist/docs/INDEX.md` にあります。