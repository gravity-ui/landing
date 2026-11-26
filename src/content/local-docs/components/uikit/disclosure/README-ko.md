`Disclosure`는 중첩된 콘텐츠를 표시하거나 숨길 수 있는 접이식 컴포넌트입니다.

```tsx
import {Disclosure} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

## 확장 상태 제어

`expanded` 및 `onUpdate` 속성을 사용하여 확장 상태를 제어할 수 있습니다.

제어 컴포넌트 예시:

GRAVITY_TRANSLATION_BLOCK_1_END

```tsx
import React from 'react';
import {Disclosure} from '@gravity-ui/uikit';

function App() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Disclosure expanded={expanded} onUpdate={setExpanded}>
      <Disclosure.Summary>Summary</Disclosure.Summary>
      <Disclosure.Details>Details</Disclosure.Details>
    </Disclosure>
  );
}
```

GRAVITY_TRANSLATION_BLOCK_2_END

## 크기

`size` 속성을 사용하여 `Disclosure` 크기를 제어할 수 있습니다. 기본 크기는 `m`입니다.

GRAVITY_TRANSLATION_BLOCK_3_END

```tsx
<Disclosure size="m">...</Disclosure>
<Disclosure size="l">...</Disclosure>
<Disclosure size="xl">...</Disclosure>
```

GRAVITY_TRANSLATION_BLOCK_4_END

## 화살표 위치

`start`: 화살표가 헤더 시작 부분에 위치합니다 (기본값).

`end`: 화살표가 헤더 끝 부분에 위치합니다.

GRAVITY_TRANSLATION_BLOCK_5_END

```tsx
<Disclosure arrowPosition="start">...</Disclosure>
<Disclosure arrowPosition="end">...</Disclosure>
```

GRAVITY_TRANSLATION_BLOCK_6_END

## 사용자 정의 콘텐츠

사용자 정의 헤더를 만들려면 `Disclosure.Summary` 컴포넌트를 사용하고 사용자 정의 콘텐츠를 채우려면 `Disclosure.Details`를 사용합니다.

GRAVITY_TRANSLATION_BLOCK_7_END

```tsx
<Disclosure>
  <Disclosure.Summary>
    <div>Custom Summary</div>
  </Disclosure.Summary>
  <Disclosure.Details>
    <div>Custom Details</div>
  </Disclosure.Details>
</Disclosure>
```

GRAVITY_TRANSLATION_BLOCK_8_END

## 비활성화 상태

`disabled` 속성을 사용하여 `Disclosure`를 비활성화할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_9_END

```tsx
<Disclosure disabled>...</Disclosure>
```

GRAVITY_TRANSLATION_BLOCK_10_END

## 속성

### Disclosure

| 이름             | 설명                                       | 타입                                                  | 기본값   |
| :--------------- | :----------------------------------------- | :---------------------------------------------------- | :------- |
| size             | 컴포넌트 크기                              | `"m"` `"l"` `"xl"`                                    | `"m"`    |
| className        | 루트 요소의 CSS 클래스 이름                | `string`                                              |          |
| disabled         | 비활성화 상태                              | `boolean`                                             | `false`  |
| defaultExpanded  | 기본 열림 상태                             | `boolean`                                             | `false`  |
| expanded         | 제어된 열림 상태                           | `boolean`                                             |          |
| arrowPosition    | 화살표 위치 제어                           | `"start"` `"end"`                                     | `"start"`|
| summary          | 요약 콘텐츠                                | `React.ReactNode`                                     |          |
| keepMounted      | 접힌 상태에서도 DOM에 콘텐츠 유지          | `boolean`                                             | `true`   |
| onUpdate         | 확장/축소 상태가 변경될 때 호출되는 콜백   | `(expanded: boolean) => void`                         |          |
| onSummaryKeyDown | 요약에 포커스되었을 때 키보드 이벤트 콜백  | `(e: React.KeyboardEvent<HTMLButtonElement>) => void` |          |
| children         | 콘텐츠                                     | `React.ReactNode`                                     |          |
| qa               | 테스트 식별자                              | `string`                                              |          |

### Disclosure.Summary

| 이름     | 설명                               | 타입                                            | 기본값              |
| :------- | :--------------------------------- | :---------------------------------------------- | :------------------ |
| children | 렌더링 함수                        | `(props, defaultSummary) => React.ReactElement` |                     |
| qa       | 테스트 식별자                      | `string`                                        | `disclosure-summary`|

### Disclosure.Details
GRAVITY_TRANSLATION_BLOCK_11_END

| 이름     | 설명     | 타입              | 기본값              |
| :------- | :-------------- | :---------------- | :------------------- |
| children | 콘텐츠         | `React.ReactNode` |                      |
| qa       | 테스트 식별자 | `string`          | `disclosure-details` |

## CSS API

| 이름                                 | 설명                                          |
| :----------------------------------- | :--------------------------------------------------- |
| `--g-disclosure-text-color`          | 콘텐츠 요약의 텍스트 색상                   |
| `--g-disclosure-text-color-disabled` | 비활성화 상태의 콘텐츠 요약 텍스트 색상 |