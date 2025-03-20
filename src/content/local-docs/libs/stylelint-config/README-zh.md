# @gravity-ui/stylelint-config

## 安装

```
npm install --save-dev stylelint postcss @gravity-ui/stylelint-config
```

## 使用方法

在项目根目录中添加 `.stylelintrc` 文件，内容如下：

```json
{
  "extends": "@gravity-ui/stylelint-config"
}
```

### Prettier

如果您使用 Prettier，请使用附加规则扩展根配置：

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/prettier"]
}
```

### Order

如果您想在 CSS 文件中对属性进行排序，请使用附加规则扩展根配置：

```json
{
  "extends": ["@gravity-ui/stylelint-config", "@gravity-ui/stylelint-config/order"]
}
```
