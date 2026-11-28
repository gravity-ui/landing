<!--GITHUB_BLOCK-->

# ArrowToggle

<!--/GITHUB_BLOCK-->

`ArrowToggle`는 화살표 아이콘을 표시하는 컴포넌트입니다. 네 가지 방향으로 회전할 수 있으며, 드롭다운 목록, 잘라내기 컴포넌트 등을 표시하는 데 사용할 수 있습니다.

## 모양

`ArrowToggle`는 `top`, `right`, `bottom`, `left`의 네 가지 방향을 가질 수 있습니다.

<!--SANDBOX
import {ArrowToggle} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <ArrowToggle direction="top" /> top
            <ArrowToggle direction="right" /> right
            <ArrowToggle direction="bottom" /> bottom
            <ArrowToggle direction="left" /> left
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<ArrowToggle direction="top" /> top
<ArrowToggle direction="right" /> right
<ArrowToggle direction="bottom" /> bottom
<ArrowToggle direction="left" /> left
```

<!--/GITHUB_BLOCK-->

## 크기

<!--SANDBOX
import {ArrowToggle} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <ArrowToggle size={10} /> 10
            <ArrowToggle size={20} /> 20
            <ArrowToggle size={30} /> 30
            <ArrowToggle size={40} /> 40
            <ArrowToggle size={50} /> 50
            <ArrowToggle size={100} /> 100
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<ArrowToggle size={10} /> 10
<ArrowToggle size={20} /> 20
<ArrowToggle size={30} /> 30
<ArrowToggle size={40} /> 40
<ArrowToggle size={50} /> 50
<ArrowToggle size={100} /> 100
```

<!--/GITHUB_BLOCK-->

## 상호작용 요소로 사용하기

다음은 토글 아이콘과 함께 `ArrowToggle`를 사용하는 예시입니다.

<!--SANDBOX
import {useState} from 'react';
import type {ArrowToggleProps} from '@gravity-ui/uikit';
import {ArrowToggle, Button} from '@gravity-ui/uikit';

const directions = ['top', 'left', 'bottom', 'right'] as Array<ArrowToggleProps['direction']>;

export default function () {
    const [directionIndex, setDirectionIndex] = useState(0);
    const direction = directions[directionIndex % directions.length];

    return (
        <Button onClick={() => setDirectionIndex(directionIndex + 1)} view="flat">
            <ArrowToggle direction={direction} /> <span>{direction}</span>
        </Button>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
const [directionIndex, setDirectionIndex] = React.useState(0);
const directions = ['top', 'left', 'bottom', 'right'] as Array<ArrowToggleProps['direction']>;
const direction = directions[directionIndex % directions.length];

return (
  <Button onClick={() => setDirectionIndex(directionIndex + 1)} view="flat">
    <ArrowToggle {...args} direction={direction} /> <span>{direction}</span>
  </Button>
);
```

<!--/GITHUB_BLOCK-->

## 속성

| 이름      | 설명                               |   타입   | 기본값 |
| :-------- | :--------------------------------- | :------: | :----: |
| className | `class` HTML 속성                  | `string` |        |
| direction | `arrowToggle` 방향 설정에 사용됨   | `string` | `"bottom"` |
| size      | `arrowToggle` 크기 (픽셀 단위)     | `number` |  `16`  |
| qa        | `data-qa` HTML 속성, 테스트에 사용 | `string` |        |

## CSS API

| 이름                                   | 설명         |
| :------------------------------------- | :----------- |
| `--g-arrow-toggle-transition-duration` | 전환 지속 시간 |
