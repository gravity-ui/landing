# Gravity UI 包家族的 Browserslist 配置

## 兼容的浏览器

您可以在 [browsersl.ist](https://browsersl.ist/#q=baseline%20widely%20available%20on%202025-01-01%20with%20downstream) 上查看兼容的浏览器。

## 安装

```bash
npm i --save-dev @gravity-ui/browserslist-config
```

在 `package.json` 的 `browserslist` 部分添加配置：

```json
{
  "browserslist": [
    "extends @gravity-ui/browserslist-config"
  ]
}
```

您可以根据您的目标用户指定额外的浏览器，例如：
```json
{
  "browserslist": [
    "extends @gravity-ui/browserslist-config",
    "Chrome >= 100",
    "Firefox >= 100"
  ]
}
```

## 用法

该包提供了生产环境的 browserslist 版本。