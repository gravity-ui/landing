`Popover`는 자식 요소에 고정되고 호버 또는 클릭 시 열리는 플로팅되고 선택적으로 상호작용 가능한 콘텐츠(텍스트, 링크 또는 버튼)를 표시합니다. `children` 속성을 통해 전달된 `ReactElement`를 트리거로 사용하여 내장된 트리거 상호작용 기능을 갖춘 [`Popup`](../Popup/README.md)을 래핑합니다.

```tsx
import {Popover} from '@gravity-ui/uikit';
```

이전 `Popover`에서 마이그레이션하시나요? [마이그레이션 가이드](https://github.com/gravity-ui/uikit/blob/main/docs/migration-from-legacy-popover.md)를 참조하세요.

## 사용법

HTML 요소 또는 네이티브 DOM 핸들러 및 ARIA 속성을 속성(예: `Button`)으로 수락하는 모든 컴포넌트를 `Popover` 컴포넌트로 래핑합니다. 콘텐츠는 `content` 속성에 넣습니다.

```jsx
import {Button, Popover} from '@gravity-ui/uikit';

<Popover content="Content">
  <Button>Click or hover me</Button>
</Popover>;
```

## 속성

| 이름                 | 설명                                                                                                   |                                타입                                 |     기본값     |
| :------------------- | :------------------------------------------------------------------------------------------------------------ | :-----------------------------------------------------------------: | :-------------: |
| children             | DOM 핸들러를 수락하는 `ReactNode`                                                                        |                          `React.ReactNode`                          |                 |
| className            | 루트 노드에 대한 HTML `class` 속성                                                                          |                              `string`                               |                 |
| container            | `Portal`을 통해 컴포넌트가 마운트될 DOM 요소                                                        |                            `HTMLElement`                            | `document.body` |
| content              | `Popover` 내부에 렌더링할 모든 콘텐츠                                                                    |                          `React.ReactNode`                          |                 |
| contentClassName     | 콘텐츠 노드에 대한 HTML `class` 속성                                                                       |                              `string`                               |                 |
| delay                | `open` 상태를 변경하기 전에 지정된 시간(밀리초) 동안 대기                                              |             `number` `{open?: number; close?: number}`              |                 |
| disableEscapeKeyDown | `Esc` 키 누름 시 닫기 비활성화                                                                               |                              `boolean`                              |     `false`     |
| disableLayer         | 스태킹되는 플로팅 요소에 `LayerManager` 사용 안 함                                                       |                              `boolean`                              |     `false`     |
| disableOutsideClick  | 외부 클릭 시 닫기 비활성화                                                                               |                              `boolean`                              |     `false`     |
| disablePortal        | `Portal` 사용 비활성화                                                                                       |                              `boolean`                              |     `false`     |
| disabled             | 모든 이벤트에서 열기 비활성화                                                                                      |                              `boolean`                              |     `false`     |
| enableSafePolygon    | 트리거에서 `Popover` 콘텐츠로 포인터를 이동할 때 닫히는 것을 방지하기 위해 동적 다각형 영역 사용 |                              `boolean`                              |     `false`     |
| hasArrow             | 트리거를 가리키는 화살표 렌더링                                                                       |                              `boolean`                              |     `false`     |
| keepMounted          | `Popover`는 숨겨질 때 DOM에서 제거되지 않습니다                                                        |                              `boolean`                              |     `false`     |
| middlewares          | `Floating UI` 미들웨어. 설정하면 기본 미들웨어를 완전히 덮어씁니다.                    |                         `Array<Middleware>`                         |                 |
| modal                | 포커스 트래핑 동작 활성화                                                                              |                              `boolean`                              |     `false`     |
| offset               | `Floating UI` 오프셋 값                                                                                    |                           `PopoverOffset`                           |       `4`       |
| onOpenChange         | `open` 상태가 변경될 때 호출되는 함수                                                         |                             `Function`                              |                 |
| open                 | `open` 상태를 수동으로 제어                                                                             |                              `boolean`                              |                 |
| placement            | `Floating UI` 배치                                                                                       | `Placement` `Array<Placement>` `"auto"` `"auto-start"` `"auto-end"` |     `"top"`     |
| qa                   | 테스트 속성 (`data-qa`)                                                                                    |                              `string`                               |                 |
| rest                 | 열리기 전에 커서가 얼마나 오랫동안 쉬어야 하는지(ms).                                                      |                              `number`                               |       `0`       |
| strategy             | `Floating UI` 포지셔닝 전략                                                                            |                       `"absolute"` `"fixed"`                        |  `"absolute"`   |
| style                | 루트 노드에 대한 HTML `style` 속성                                                                          |                              `string`                               |                 |
| toggle               | 반복 클릭으로 `open` 상태를 토글할지 여부                                                       |                              `boolean`                              |     `true`      |
| trigger              | `Popover`를 열어야 하는 이벤트. 기본 `all` 값은 `hover`와 `click` 모두를 참조합니다                 |                          `"all"` `"click"`                          |     `"all"`     |