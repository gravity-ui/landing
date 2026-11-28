Skeleton 组件在数据加载前显示内容的占位符预览。此预览用于减少加载时间的挫败感。

```tsx
import {Skeleton} from '@gravity-ui/uikit';
```

## Animation

使用 `animation` 属性来控制加载动画。默认值为 `'gradient'`。

| 值        | 描述                                |
| :-------- | :---------------------------------- |
| `'gradient'` | 滑动渐变闪烁 — **默认**             |
| `'pulse'`    | 不透明度脉冲                        |
| `'none'`     | 无动画                              |

## Variant

使用 `variant` 属性来选择预设外观。默认值为 `'rect'`。

| 值        | 描述                                                                       |
| :-------- | :------------------------------------------------------------------------- |
| `'rect'`   | 使用与尺寸相关的 border-radius token 的圆角 — **默认**                     |
| `'circle'` | 完全圆形 (`border-radius: 50%`, `aspect-ratio: 1`)                         |
| `'square'` | 方形宽高比 (`aspect-ratio: 1`)，具有与 `'rect'` 相同的圆角                 |
| `'text'`   | 文本行占位符 — 高度继承父级上下文的 `font-size` 和 `line-height` |

## Size

使用 `size` 属性来设置预设骨架的高度（对于 `'circle'` / `'square'` 变体，也设置宽度）。每个尺寸还会调整 `'rect'` 和 `'square'` 变体使用的 border-radius token。省略 `size` 时，则使用 `width` 和 `height` 设置尺寸。

| 值  | 描述       |
| :-- | :--------- |
| `'xs'` | 特小       |
| `'s'`  | 小         |
| `'m'`  | 中         |
| `'l'`  | 大         |
| `'xl'` | 特大       |

## Text placeholder

使用 `variant="text"` 来渲染一个继承父级上下文 `font-size` 和 `line-height` 的骨架。将多个骨架放置在 `<Text variant="...">` 元素内以实现多行占位符。

## Properties

| 名称        | 描述                                                                                                                             |                       类型                       |  默认值   |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------: | :--------: |
| `style`     | 根元素的自定义 CSS 属性                                                                                                          |              `React.CSSProperties`               |            |
| `className` | 根元素的自定义 CSS 类                                                                                                            |                     `string`                     |            |
| `qa`        | `data-qa` HTML 属性，用于测试                                                                                                    |                     `string`                     |            |
| `animation` | 应用于骨架的动画类型                                                                                                             |      `'gradient'` \| `'pulse'` \| `'none'`       | `gradient` |
| `variant`   | 预设外观。`'circle'` 和 `'square'` 强制设置 `aspect-ratio: 1`。`'text'` 继承父上下文的排版。                                       | `'rect'` \| `'square'` \| `'circle'` \| `'text'` |   `rect`   |
| `size`      | 预设高度（`'circle'`/`'square'` 变体的宽度也相同）。也控制 `'rect'`/`'square'` 变体的 `border-radius` token。                     |   `'xs'` \| `'s'` \| `'m'` \| `'l'` \| `'xl'`    |            |
| `width`     | 自定义宽度。`style.width` 的别名                                                                                                 |               `number` \| `string`               |            |
| `height`    | 自定义高度。`style.height` 的别名                                                                                                |               `number` \| `string`               |            |

## CSS API

| 名称                            | 描述                                                                         |
| :------------------------------ | :--------------------------------------------------------------------------- |
| `--g-skeleton-background-color` | 骨架背景颜色，也用作 `'gradient'` 动画的结束颜色 |