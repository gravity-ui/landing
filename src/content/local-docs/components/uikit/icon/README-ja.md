<!--GITHUB_BLOCK-->

# Icon

<!--/GITHUB_BLOCK-->

`Icon` は、指定されたサイズと色で SVG グリフをレンダリングします。SVG は React コンポーネントまたはインポートされたアセットとして受け取ります。これは、コードベース全体で SVG を使用するための単一のプロキシとして機能し、React コンポーネントまたは [`SVGR`](https://react-svgr.com/docs/webpack/)、[`svg-react-loader`](https://github.com/jhamlet/svg-react-loader)、[`svg-inline-loader`](https://github.com/webpack-contrib/svg-inline-loader)、または [`svg-sprite-loader`](https://github.com/JetBrains/svg-sprite-loader) などの Webpack ローダーを介してロードできます。

```tsx
import {Icon} from '@gravity-ui/uikit';
```

### React コンポーネント

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

### Webpack ローダー

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

## プロパティ

| 名前      | 説明                              |                             型                             |     デフォルト      |
| :-------- | :-------------------------------- | :----------------------------------------------------------: | :--------------: |
| data      | SVG アイコンのソース              |                          `IconData`                          |                  |
| width     | `width` SVG 属性                  |                      `number` `string`                       |                  |
| height    | `height` SVG 属性                 |                      `number` `string`                       |                  |
| size      | `width` および `height` SVG 属性  |                      `number` `string`                       |                  |
| fill      | `fill` SVG 属性                   |                           `string`                           | `"currentColor"` |
| stroke    | `stroke` SVG 属性                 |                           `string`                           |     `"none"`     |
| color     | SVG アイコンに適用されるテキストカラー | `string` (**Color** セクションの値を参照してください `Text`) |                  |
| className | ルート要素のカスタム CSS クラス   |                           `string`                           |                  |
| style     | ルート要素のカスタムスタイル      |                       `CSSProperties`                        |                  |
