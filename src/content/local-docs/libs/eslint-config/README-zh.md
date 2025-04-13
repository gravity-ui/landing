# @gravity-ui/eslint-config

## 安装

```
npm install --save-dev eslint @gravity-ui/eslint-config
```

## 使用方法

在项目根目录中添加 `.eslintrc` 文件，内容如下：

```json
{
  "extends": "@gravity-ui/eslint-config",
  "root": true
}
```

在相应的目录中添加客户端和服务器配置文件：

```json
{
  "extends": "@gravity-ui/eslint-config/server"
}
```

```json
{
  "extends": "@gravity-ui/eslint-config/client"
}
```

### Prettier

如果您使用 Prettier，请使用附加规则扩展根配置：

```json
{
  "extends": ["@gravity-ui/eslint-config", "@gravity-ui/eslint-config/prettier"],
  "root": true
}
```

### a11y

如果您想发现可访问性问题，请使用附加规则扩展根配置：

```json
{
  "extends": ["@gravity-ui/eslint-config", "@gravity-ui/eslint-config/a11y"],
  "root": true
}
```

### Order

如果您想在模块导入顺序中强制执行约定，请使用附加规则扩展根配置：

```json
{
  "extends": ["@gravity-ui/eslint-config", "@gravity-ui/eslint-config/import-order"],
  "root": true
}
```
