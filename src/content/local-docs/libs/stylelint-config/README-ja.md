# @gravity-ui/stylelint-config

Gravity UI プロジェクト向けの Stylelint 設定です。

## 要件

- Node.js >= 20.x
- Stylelint 16.18.0
- PostCSS 8.x

## インストール

```
npm install --save-dev stylelint postcss @gravity-ui/stylelint-config
```

## 使用方法

プロジェクトのルートに `.stylelintrc` ファイルを作成し、以下の内容を追加します。

```json
{
  "extends": "@gravity-ui/stylelint-config"
}
```

### Prettier

Prettier を使用している場合は、ルート設定に以下の追加ルールを拡張してください。

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/prettier"]
}
```

### Order

CSS ファイル内のプロパティの順序を並べ替えたい場合は、ルート設定に以下の追加ルールを拡張してください。

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/order"]
}
```