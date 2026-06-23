# Gravity UIパッケージファミリーのBrowserslist設定

## 対応ブラウザ

対応ブラウザは[browsersl.ist](https://browsersl.ist/#q=baseline%20widely%20available%20on%202025-01-01%20with%20downstream)で確認できます。

## インストール

```bash
npm i --save-dev @gravity-ui/browserslist-config
```

`package.json`の`browserslist`セクションに設定を追加します。

```json
{
  "browserslist": [
    "extends @gravity-ui/browserslist-config"
  ]
}
```

ターゲットとするユーザー層に応じて、追加のブラウザを指定することもできます。例：
```json
{
  "browserslist": [
    "extends @gravity-ui/browserslist-config",
    "Chrome >= 100",
    "Firefox >= 100"
  ]
}
```

## 使用方法

このパッケージは、本番環境向けのbrowserslistを提供します。