# Gravity UI 系列包的 Browserslist 配置

## 兼容的浏览器

您可以在 [browsersl.ist](https://browsersl.ist/#q=last%202%20major%20versions%20and%20last%202%20years%20and%20fully%20supports%20es6%20and%20%3E%200.05%25%0Anot%20dead%0Anot%20op_mini%20all%0Anot%20and_qq%20%3E%200%0Anot%20and_uc%20%3E%200%0AFirefox%20ESR%0AChrome%20%3E%200%20and%20last%202%20years%20and%20%3E%200.05%25%0ASafari%20%3E%200%20and%20last%202%20years%20and%20%3E%200.05%25%0AFirefox%20%3E%200%20and%20last%202%20years%20and%20%3E%200.01%25) 上查看兼容的浏览器。

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

您可以根据您的目标受众指定额外的浏览器，例如：
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