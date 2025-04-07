<!--GITHUB_BLOCK-->

# 图标

<!--/GITHUB_BLOCK-->

```tsx
import {Icon} from '@gravity-ui/uikit';
```

该 `Icon` 组件是 SVG 图标的包装器。SVG 可以通过不同的方式加载，例如通过 React 组件或各种 Webpack 加载器： [`SVGR`](https://react-svgr.com/docs/webpack/) 、 [`svg-react-loader`](https://github.com/jhamlet/svg-react-loader) 、 [`svg-inline-loader`](https://github.com/webpack-contrib/svg-inline-loader) 或。 [`svg-sprite-loader`](https://github.com/JetBrains/svg-sprite-loader)
该 `Icon` 组件充当通过代码库使用的代理。

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

| 姓名      | 描述                              |       类型        |       默认       |
| :-------- | :-------------------------------- | :---------------: | :--------------: |
| 数据      | SVG 图标的来源                    |    `IconData`     |                  |
| 宽度      | `width` SVG 属性                  | `number` `string` |                  |
| 高度      | `height` SVG 属性                 | `number` `string` |                  |
| 尺寸      | 两者 `width` 和 `height` SVG 属性 | `number` `string` |                  |
| 填        | `fill` SVG 属性                   |     `string`      | `"currentColor"` |
| 中风      | `stroke` SVG 属性                 |     `string`      |     `"none"`     |
| className | 根元素的自定义 CSS 类             |     `string`      |                  |
