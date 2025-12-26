# Ẏagr <img src="https://raw.githubusercontent.com/gravity-ui/yagr/main/docs/assets/yagr.svg" width="24px" height="24px" />

Yagr 是一个高性能的 HTML5 Canvas 图表渲染器，基于 [uPlot](https://github.com/leeoniya/uPlot) 构建。它为 uPlot 图表提供了高级功能。

<img src="https://raw.githubusercontent.com/gravity-ui/yagr/main/docs/assets/demo.png" width="800" />

## 特性

-   [折线图、面积图、柱状图和点图等可视化类型。可按系列配置](https://yagr.tech/en/api/visualization)
-   [可配置的图例提示框](https://yagr.tech/en/plugins/tooltip)
-   [带有额外小数精度选项的坐标轴](https://yagr.tech/en/api/axes)
-   [具有可配置范围函数和转换的刻度](https://yagr.tech/en/api/scales)
-   [绘图线和绘图带。可配置的绘制层](https://yagr.tech/en/plugins/plot-lines)
-   [响应式图表](https://yagr.tech/en/api/settings#adaptivity) (需要 [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver))
-   [堆叠面积图/柱状图的高级支持](https://yagr.tech/en/api/scales#stacking)
-   [可配置的标记点](./docs/api/markers.md)
-   [浅色/深色主题](https://yagr.tech/en/api/settings#theme)
-   [数据归一化](https://yagr.tech/en/api/scales#normalization)
-   [可配置的十字准线、鼠标标记和吸附](https://yagr.tech/en/api/cursor)
-   TypeScript
-   [本地化](https://yagr.tech/en/api/settings#localization)
-   [颜色名称中的 CSS 变量](https://yagr.tech/en/api/css)
-   [分页式内联图例](https://yagr.tech/en/plugins/legend)
-   [错误处理和扩展钩子](https://yagr.tech/en/api/lifecycle)
-   [缺失数据的对齐和插值](https://yagr.tech/en/api/data-processing)
-   [实时更新](https://yagr.tech/en/api/dynamic-updates)

## [文档](https://yagr.tech)

## 快速入门

```
npm i @gravity-ui/yagr
```

### NPM 模块

```typescript
import Yagr from '@gravity-ui/yagr';

new Yagr(document.body, {
    timeline: [1, 2, 3, 4, 5],
    series: [
        {
            data: [1, 2, 3, 4, 5],
            color: 'red',
        },
        {
            data: [2, 3, 1, 4, 5],
            color: 'green',
        },
    ],
});
```

### Script 标签

```html
<script src="https://unpkg.com/@gravity-ui/yagr/dist/yagr.iife.min.js"></script>
<script>
    new Yagr(document.body, {
        timeline: [1, 2, 3, 4, 5],
        series: [
            {
                data: [1, 2, 3, 4, 5],
                color: 'red',
            },
            {
                data: [2, 3, 1, 4, 5],
                color: 'green',
            },
        ],
    });
</script>
```

### 示例

需要特定功能？Yagr 在 [demo/examples](./demo/examples/) 文件夹中提供了一些有用的示例。如何使用当前版本启动它们：

1.  克隆仓库。
2.  安装依赖 `npm i`。
3.  运行 `npm run build`。
4.  运行 `npx http-server .`。
5.  根据 http-server 的输出在浏览器中打开示例。