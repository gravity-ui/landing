<!--GITHUB_BLOCK-->

# Loader

<!--/GITHUB_BLOCK-->

`Loader` 컴포넌트는 깜박이는 막대로 로딩 진행률을 표시합니다. `Spin`과 달리 이 컴포넌트는 전체 페이지 또는 `Dialog`와 같은 전역적인 시나리오에 사용됩니다.

```tsx
import {Loader} from '@gravity-ui/uikit';
```

### 크기

<!--SANDBOX
import {Loader} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Loader size="s" />
            <Loader size="m" />
            <Loader size="l" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Loader size="s" />
<Loader size="m" />
<Loader size="l" />
```

<!--/GITHUB_BLOCK-->

`S`: 작은 크기, 일반 로더가 너무 클 때 사용됩니다.

`M`: 중간 (기본) 크기, 대부분의 경우에 사용됩니다.

`L`: 큰 크기, 일반 로더가 너무 작을 때 사용됩니다.

## 속성

| 이름      | 설명                           |       타입        | 기본값 |
| :-------- | :----------------------------- | :---------------: | :----: |
| size      | 로더 크기                      | `"s"` `"m"` `"l"` | `"s"`  |
| className | 루트 요소에 대한 사용자 정의 CSS 클래스 |     `string`      |        |
