# ExpressKit

ExpressKit は、[express.js](https://expressjs.com/) をラップした軽量ライブラリで、[NodeKit](https://github.com/gravity-ui/nodekit) と統合され、リクエストロギング、トレーシングサポート、非同期コントローラーとミドルウェア、詳細なルート説明などの便利な機能を提供します。

インストール:

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

基本的な使い方:

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

ExpressKit は、クロスサイトリクエストフォージェリ (CSRF) 保護を組み込んでおり、悪意のあるクロスオリジンリクエストからアプリケーションを保護します。CSRF ミドルウェアは、状態を変更する HTTP リクエストのトークンを自動的に生成および検証します。

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

設定後、CSRF 保護は指定された HTTP メソッドを持つすべてのルートに自動的に適用されます。

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

ルートレベルの `enableCaching` はグローバル設定を上書きします。キャッシュの状態は `req.routeInfo.enableCaching` で利用可能です。

## 検証とレスポンスシリアライゼーション

- [リクエストバリデーションとレスポンスシリアライゼーション](https://github.com/gravity-ui/expresskit/blob/main/docs/VALIDATOR.md) - Zodスキーマを使用して、リクエストのバリデーションとレスポンスのシリアライゼーションを自動化します。