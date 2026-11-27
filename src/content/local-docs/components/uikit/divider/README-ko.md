`Divider` 컴포넌트는 시각적 계층 구조를 강화하기 위해 요소를 구분하고 그룹화하는 얇은 선으로 사용됩니다.

```tsx
import {Divider} from '@gravity-ui/uikit';
```

```tsx
<Divider className="custom-divider" direction="horizontal" />
```

### 방향

`direction` 속성을 사용하여 `Divider`의 방향을 관리합니다. 기본 방향은 `horizontal`입니다.

#### 가로

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

#### 세로

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### 사용자 정의 콘텐츠

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### 정렬

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## 속성

| 이름        | 설명                                   | 타입                    | 기본값      |
| :---------- | :------------------------------------- | :---------------------- | :----------- |
| className   | `class` HTML 속성                      | `string`                | -            |
| orientation | 구분선의 방향을 결정합니다.            | `horizontal - vertical` | `horizontal` |
| children    | 구분선 내부의 사용자 정의 콘텐츠     | `React.ReactNode`       |              |
| align       | 사용자 정의 콘텐츠의 위치            | `start - center - end`  | `start`      |
| style       | `style` HTML 속성                      | `React.CSSProperties`   |              |
| qa          | 테스트에 사용되는 `data-qa` HTML 속성 | `string`                |              |

### CSS API

| 이름                | 설명                                                                      |
| :------------------ | :------------------------------------------------------------------------ |
| `--g-divider-color` | 구분선의 색상                                                             |
| `--g-divider-size`  | 구분선의 크기 (가로 방향의 경우 높이, 세로 방향의 경우 너비) |