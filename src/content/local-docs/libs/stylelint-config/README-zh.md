# @gravity-ui/stylelint-config

Gravity UI 项目的 Stylelint 配置。

## 要求

- Node.js >= 20.x
- Stylelint 16.18.0
- PostCSS 8.x

## 安装

```
npm install --save-dev stylelint postcss @gravity-ui/stylelint-config
```

## 用法

在项目根目录下添加 `.stylelintrc` 文件，内容如下：

```json
{
  "extends": "@gravity-ui/stylelint-config"
}
```

### Prettier

如果您正在使用 Prettier，请在根配置中扩展额外的规则：

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/prettier"]
}
```

### 排序

如果您想在 CSS 文件中对属性进行排序，请在根配置中扩展额外的规则：

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/order"]
}
```