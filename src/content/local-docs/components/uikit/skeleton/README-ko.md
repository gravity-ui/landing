<!--GITHUB_BLOCK-->

# Skeleton

<!--/GITHUB_BLOCK-->

Skeleton 컴포넌트는 데이터가 로드되기 전에 콘텐츠의 미리보기 플레이스홀더를 표시합니다. 이 미리보기는 로딩 시간으로 인한 답답함을 줄이기 위해 표시됩니다.

```tsx
import {Skeleton} from '@gravity-ui/uikit';
```

## 애니메이션

`animation` prop을 사용하여 로딩 애니메이션을 제어합니다. 기본값은 `'gradient'`입니다.

| 값        | 설명                               |
| :-------- | :--------------------------------- |
| `'gradient'` | 슬라이딩 그라데이션 셰이머 — **기본값** |
| `'pulse'`    | 불투명도 펄스                      |
| `'none'`     | 애니메이션 없음                    |

## 변형

`variant` prop을 사용하여 사전 설정된 모양을 선택합니다. 기본값은 `'rect'`입니다.

| 값        | 설명                                                                               |
| :-------- | :--------------------------------------------------------------------------------- |
| `'rect'`   | 크기 인식 테두리 반경 토큰을 사용한 둥근 모서리 — **기본값**                      |
| `'circle'` | 완전한 원형 (`border-radius: 50%`, `aspect-ratio: 1`)                                  |
| `'square'` | `'rect'`와 동일한 반경으로 정사각형 종횡비 (`aspect-ratio: 1`)                |
| `'text'`   | 텍스트 줄 플레이스홀더 — 높이는 부모 컨텍스트의 `font-size` 및 `line-height`를 상속합니다. |

## 크기

`size` prop을 사용하여 사전 설정된 skeleton 높이(및 `'circle'` / `'square'` 변형의 너비)를 설정합니다. 각 크기는 `'rect'` 및 `'square'` 변형에서 사용되는 테두리 반경 토큰도 조정합니다. `size`가 생략되면 대신 `width` 및 `height`로 크기를 설정합니다.

| 값  | 설명     |
| :-- | :------- |
| `'xs'` | 매우 작음 |
| `'s'`  | 작음     |
| `'m'`  | 중간     |
| `'l'`  | 큼       |
| `'xl'` | 매우 큼   |

<!--GITHUB_BLOCK-->

```tsx
<Skeleton size="xs" width={120} />
<Skeleton size="m"  width={200} />
<Skeleton size="xl" width={280} />

<Skeleton variant="circle" size="l" />
<Skeleton variant="square" size="l" />
```

<!--/GITHUB_BLOCK-->

## 텍스트 플레이스홀더

`variant="text"`를 사용하여 부모 컨텍스트의 `font-size` 및 `line-height`를 상속하는 skeleton을 렌더링합니다. 여러 줄 플레이스홀더의 경우 `<Text variant="...">` 요소 안에 여러 skeleton을 배치합니다.

<!--GITHUB_BLOCK-->

```tsx
<Text variant="body-1">
  <Skeleton variant="text" width={400} />
  <Skeleton variant="text" width={400} />
  <Skeleton variant="text" width={240} />
</Text>
```

<!--/GITHUB_BLOCK-->

## 속성

| 이름        | 설명                                                                                                                            |                       타입                       | 기본값   |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------: | :--------: |
| `style`     | 루트 요소에 대한 사용자 정의 CSS 속성                                                                                           |              `React.CSSProperties`               |            |
| `className` | 루트 요소에 대한 사용자 정의 CSS 클래스                                                                                         |                     `string`                     |            |
| `qa`        | 테스트에 사용되는 `data-qa` HTML 속성                                                                                           |                     `string`                     |            |
| `animation` | 스켈레톤에 적용할 애니메이션 유형                                                                                               |      `'gradient'` \| `'pulse'` \| `'none'`       | `gradient` |
| `variant`   | 사전 설정된 모양. `'circle'` 및 `'square'`는 `aspect-ratio: 1`을 강제합니다. `'text'`는 부모 컨텍스트의 타이포그래피를 상속합니다. | `'rect'` \| `'square'` \| `'circle'` \| `'text'` |   `rect`   |
| `size`      | 사전 설정된 높이 (및 `'circle'`/`'square'` 변형의 너비). `'rect'`/`'square'` 변형의 테두리 반경 토큰도 제어합니다.                 |   `'xs'` \| `'s'` \| `'m'` \| `'l'` \| `'xl'`    |            |
| `width`     | 사용자 정의 너비. `style.width`의 별칭                                                                                          |               `number` \| `string`               |            |
| `height`    | 사용자 정의 높이. `style.height`의 별칭                                                                                         |               `number` \| `string`               |            |
