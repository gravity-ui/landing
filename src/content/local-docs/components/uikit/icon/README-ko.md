`Icon`은 주어진 크기와 색상으로 SVG 글리프를 렌더링하며, SVG를 React 컴포넌트 또는 가져온 에셋으로 받습니다. 이는 코드베이스 전체에서 SVG를 사용하는 단일 프록시 역할을 하며, React 컴포넌트 또는 [`SVGR`](https://react-svgr.com/docs/webpack/), [`svg-react-loader`](https://github.com/jhamlet/svg-react-loader), [`svg-inline-loader`](https://github.com/webpack-contrib/svg-inline-loader), 또는 [`svg-sprite-loader`](https://github.com/JetBrains/svg-sprite-loader)와 같은 Webpack 로더를 통해 로드할 수 있습니다.

```tsx
import {Icon} from '@gravity-ui/uikit';
```

### React 컴포넌트

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

### Webpack 로더

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

## 속성

| 이름      | 설명                              |                             타입                             |     기본값      |
| :-------- | :-------------------------------- | :----------------------------------------------------------: | :--------------: |
| data      | SVG 아이콘의 소스                 |                          `IconData`                          |                  |
| width     | `width` SVG 속성                  |                      `number` `string`                       |                  |
| height    | `height` SVG 속성                 |                      `number` `string`                       |                  |
| size      | `width` 및 `height` SVG 속성 모두 |                      `number` `string`                       |                  |
| fill      | `fill` SVG 속성                   |                           `string`                           | `"currentColor"` |
| stroke    | `stroke` SVG 속성                 |                           `string`                           |     `"none"`     |
| color     | SVG 아이콘에 적용되는 텍스트 색상 | `string` ( `Text`의 **Color** 섹션의 값을 참조하세요) |                  |
| className | 루트 요소에 대한 사용자 정의 CSS 클래스 |                           `string`                           |                  |
| style     | 루트 요소에 대한 사용자 정의 스타일 |                       `CSSProperties`                        |                  |
GRAVITY_TRANSLATION_BLOCK_0_END