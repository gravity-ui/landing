<!--GITHUB_BLOCK-->

# Icon

<!--/GITHUB_BLOCK-->

`Icon` 渲染指定大小和颜色的 SVG 图标，接受 SVG 作为 React 组件或导入的资源。它作为代码库中统一使用 SVG 的代理，可以通过 React 组件或 Webpack 加载器（如 [`SVGR`](https://react-svgr.com/docs/webpack/)、[`svg-react-loader`](https://github.com/jhamlet/svg-react-loader)、[`svg-inline-loader`](https://github.com/webpack-contrib/svg-inline-loader) 或 [`svg-sprite-loader`](https://github.com/JetBrains/svg-sprite-loader)）进行加载。

```tsx
import {Icon} from '@gravity-ui/uikit';
```

### React 组件

```tsx
// CheckIcon.jsx
export function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927 5.473-6.385a.75.75 0 0 1 1.057-.081Z" />
    </svg>
  );
}

// ---
import {CheckIcon} from './CheckIcon';

<Icon data={CheckIcon} size={16} />;
```

### Webpack 加载器

```tsx
// webpack.config.js
{
    test: /\.svg$/,
    use: ['<loader-name>'],
}

// check.svg
<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16">
    <path d="M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927 5.473-6.385a.75.75 0 0 1 1.057-.081Z" />
</svg>

// ---
import CheckIcon from './check.svg';

<Icon data={CheckIcon} size={16} />;
```

## 属性

| 名称      | 描述                              |                             类型                             |     默认值      |
| :-------- | :-------------------------------- | :----------------------------------------------------------: | :--------------: |
| data      | SVG 图标的来源                    |                          `IconData`                          |                  |
| width     | `width` SVG 属性                  |                      `number` `string`                       |                  |
| height    | `height` SVG 属性                 |                      `number` `string`                       |                  |
| size      | `width` 和 `height` SVG 属性      |                      `number` `string`                       |                  |
| fill      | `fill` SVG 属性                   |                           `string`                           | `"currentColor"` |
| stroke    | `stroke` SVG 属性                 |                           `string`                           |     `"none"`     |
| color     | 应用于 SVG 图标的文本颜色         | `string`（请参阅 `Text` 组件的**颜色**部分中的值） |                  |
| className | 根元素的自定义 CSS 类名           |                           `string`                           |                  |
| style     | 根元素的自定义样式                |                       `CSSProperties`                        |                  |
