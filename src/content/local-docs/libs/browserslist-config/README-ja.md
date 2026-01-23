# Gravity UIパッケージファミリーのBrowserslist設定

## 対応ブラウザ

対応ブラウザは[browsersl.ist](https://browsersl.ist/#q=last%202%20major%20versions%20and%20last%202%20years%20and%20fully%20supports%20es6%20and%20%3E%200.05%25%0Anot%20dead%0Anot%20op_mini%20all%0Anot%20and_qq%20%3E%200%0Anot%20and_uc%20%3E%200%0AFirefox%20ESR%0AChrome%20%3E%200%20and%20last%202%20years%20and%20%3E%200.05%25%0ASafari%20%3E%200%20and%20last%202%20years%20and%20%3E%200.05%25%0AFirefox%20%3E%200%20and%20last%202%20years%20and%20%3E%200.01%25)で確認できます。

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

必要に応じて、ターゲットユーザーに基づいて追加のブラウザを指定することもできます。例：
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

このパッケージは、本番環境向けのbrowserslistバージョンを提供します。