`ArrowToggle`는 화살표 아이콘을 표시하는 컴포넌트입니다. 네 가지 방향으로 회전할 수 있으며, 드롭다운 목록, 잘라내기 컴포넌트 등을 표시하는 데 사용할 수 있습니다.

## 모양

`ArrowToggle`는 `top`, `right`, `bottom`, `left`의 네 가지 방향을 가질 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## 크기

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## 상호작용 요소로 사용하기

다음은 토글 아이콘과 함께 `ArrowToggle`를 사용하는 예시입니다.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

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