<!--GITHUB_BLOCK-->

# Spin

<!--/GITHUB_BLOCK-->

`Spin` 컴포넌트는 인라인 시나리오에서 로딩 상태(회전하는 반원)를 표시합니다. `Loader`와 달리 이 컴포넌트는 `Button` 또는 `Label`과 같이 인라인 시나리오에서 로딩 상태를 표시하는 데 사용됩니다.

```tsx
import {Spin} from '@gravity-ui/uikit';
```

### 크기

<!--SANDBOX
import {Spin} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Spin size="xs" />
            <Spin size="s" />
            <Spin size="m" />
            <Spin size="l" />
            <Spin size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Spin size="xs" />
<Spin size="s" />
<Spin size="m" />
<Spin size="l" />
<Spin size="xl" />
```

<!--/GITHUB_BLOCK-->

`XS`: 매우 작음.

`S`: 작음, 중간 크기의 스핀이 너무 클 때 사용됩니다.

`M`: 중간 (기본), 대부분의 경우에 사용됩니다.

`L`: 큼, 중간 크기의 스핀이 너무 작을 때 사용됩니다.

`XL`: 매우 큼.

## 속성

| 이름      | 설명                           |              타입               | 기본값 |
| :-------- | :----------------------------- | :-----------------------------: | :-----: |
| size      | 스핀 크기                      | `"xs"` `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| style     | 루트 요소에 대한 사용자 정의 CSS 스타일 |      `React.CSSProperties`      |         |
| className | 루트 요소에 대한 사용자 정의 CSS 클래스 |            `string`             |         |
| qa        | 테스트 속성 (`data-qa`)        |            `string`             |         |

### CSS API

| 이름             | 설명                   |
| :--------------- | :--------------------- |
| `--g-spin-color` | 컴포넌트의 기본 색상 |
