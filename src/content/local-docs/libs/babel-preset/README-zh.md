# @gravity-ui/babel-preset

Gravity UI 项目的 Babel 预设

## 安装

```
npm install --save-dev @gravity-ui/babel-preset
```

## 使用方法

### 通过 `.babelrc`

```json5
{
  presets: [
    '@gravity-ui/babel-preset',
    {
      env: {modules: false}, // 默认为 {}
      runtime: {useESModules: true}, // 默认为 {}
      typescript: true, // 默认为 false
      react: {runtime: 'automatic'}, // 默认为 {}
    },
  ],
}
```
