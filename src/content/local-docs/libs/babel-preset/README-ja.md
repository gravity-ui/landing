# @gravity-ui/babel-preset

Gravity UI プロジェクト向けの Babel preset

## インストール
```
npm install --save-dev @gravity-ui/babel-preset
```

## 使用方法

### `.babelrc` を介して

```json5
{
  "presets": [
      "@gravity-ui/babel-preset",
      {
        "env": {modules: false}, // デフォルトは {}
        "runtime": {useESModules: true}, // デフォルトは {}
        "typescript": true, // デフォルトは false
        "react": {runtime: "automatic"} // デフォルトは {}
      }
  ]
}
```