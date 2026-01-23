# Axios Wrapper
このライブラリは、Axios の便利なラッパーを提供し、同時リクエストの自動キャンセルなどの機能を追加します。

## インストール

```shell
npm install --save-dev @gravity-ui/axios-wrapper
```

## HTTP API

### コンストラクタのパラメータ

##### config [オプション]
`axios` インスタンスの設定です。

##### collector [オプション]
リクエストコレクターの設定はオブジェクトです。
```json
{
    "collectErrors": 10,
    "collectRequests": 10
}
```

### 基本的なメソッド
ラッパーは `get`, `head`, `put`, `post`, `delete` の http メソッドを提供します。

`get` および `head` メソッドのシグネチャは `(url, params, options)` です。`put`, `post`, `delete` メソッドのシグネチャは `(url, data, params, options)` です。

`params` 引数はクエリ文字列パラメータを表し、`options` はリクエスト設定です。

現在、4つのリクエスト設定がサポートされています。
- `concurrentId (string)`: オプションのリクエスト ID
- `collectRequest (bool)`: オプションのフラグ。リクエストをログに記録するかどうかを示します (デフォルトは `true`)。
- `requestConfig (object)`: オプションのカスタムリクエストパラメータを含む設定オブジェクト
- `headers (object)`: オプションのカスタムリクエストヘッダーを含むオブジェクト。
- `timeout (number)`: オプションのリクエストタイムアウト
- `onDownloadProgress (function)`: ファイルダウンロードの進行状況を処理するためのオプションのコールバック関数

### ヘッダー
`setDefaultHeader({name (string), value (string), methods (array)})` メソッドを使用すると、デフォルトのリクエストヘッダーを追加できます。

`name` および `value` 引数は必須です。オプションの引数 `methods` は、これらのデフォルトヘッダーを受け取るすべてのメソッドを指定します (デフォルトではすべてのメソッドがこれらのヘッダーを受け取ります)。

### CSRF
`setCSRFToken` メソッドを使用すると、CSRF トークンを指定できます。これは、すべての `put`, `post`, `delete` リクエストに追加されます。

### 同時リクエスト
結果が不要になった場合、進行中のリクエストをキャンセルする方が良い場合があります。これを実現するには、リクエストの `options` に `concurrentId` を渡します。同じ `concurrentId` を持つ次のリクエストが発生すると、その ID を持つ前のリクエストはキャンセルされます。

`cancelRequest(concurrentId)` メソッドを呼び出すことで、リクエストを手動でキャンセルすることもできます。

### リクエストの収集
`collector` オプションを使用して、ローカルストレージにリクエストを収集するように設定できます。これは、すべてのリクエストとエラーを個別に保存します。以下の `apiInstance` は、最後の 10 件のリクエスト (成功したものと失敗したもの) と、最後の 10 件のエラーリクエストを保持します。
```javascript
const apiInstance = new API({
    collector: {
        collectErrors: 10,
        collectRequests: 10
    }
});
```

保存されたリクエストを取得するには、`getCollectedRequests` メソッドを呼び出します。このメソッドは `{errors: [...], requests: [...]}` というオブジェクトを返します。

### 使用方法
推奨される使用方法は、基底の `AxiosWrapper` クラスをサブクラス化することです。
```javascript
export class API extends AxiosWrapper {
    getProjects() {
        return this.get('/projects');
    }
    getSensors({project, selectors}) {
        return this.get(`/projects/${project}/sensors`, {selectors, pageSize: 200});
    }
    getNames({project, selectors}) {
        return this.get(`/projects/${project}/sensors/names`, {selectors});
    }
    getLabels({project, names, selectors}) {
        return this.get(`/projects/${project}/sensors/labels`, {names, selectors});
    }
}
```

`axios` 設定に `baseURL` パラメータが渡された場合、要求されたすべてのパス名がそれに付加されます。
```javascript
const apiInstance = new API({
    config: {
        baseURL: '/api/v2'
    }
});
```