GRAVITY_TRANSLATION_BLOCK_0_END

`Modal` 컴포넌트는 페이지의 다른 콘텐츠 위에 백드롭이 있는 팝업 창을 만드는 기본 컴포넌트입니다.
열려 있는 동안 스크롤을 비활성화하고 콘텐츠에 대한 포커스를 관리합니다. `Modal` 하위 컴포넌트는 [`Portal`](../Portal) 컴포넌트 내부에 렌더링됩니다.
`Modal`을 사용하면 대화 상자, 알림, 확인 메시지 등을 구현할 수 있습니다.

```tsx
import {Modal} from '@gravity-ui/uikit';
```

## 사용법

```tsx
import {useState} from 'react';
import {Button, Modal} from '@gravity-ui/uikit';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal open={open} onOpenChange={setOpen}>
    Content
</Modal>
```

## 속성

| 이름                         | 설명                                                                                         |                    타입                     |     기본값     |
| :--------------------------- | :------------------------------------------------------------------------------------------- | :-----------------------------------------: | :-------------: |
| children                     | 모든 React 콘텐츠                                                                            |              `React.ReactNode`              |                 |
| className                    | 루트 노드에 대한 `class` HTML 속성                                                           |                  `string`                   |                 |
| container                    | `Portal`을 통해 컴포넌트가 마운트될 DOM 요소                                                 |                `HTMLElement`                | `document.body` |
| contentClassName             | 콘텐츠 노드에 대한 `class` HTML 속성                                                         |                  `string`                   |                 |
| disableBodyScrollLock        | 열려 있는 동안 스크롤 잠금을 비활성화합니다.                                                 |                  `boolean`                  |     `false`     |
| disableTransition            | `true`일 때 열기 및 닫기 애니메이션을 건너뜁니다.                                           |                  `boolean`                  |     `false`     |
| disableEscapeKeyDown         | `Esc` 키로 닫기 트리거를 비활성화합니다.                                                     |                  `boolean`                  |     `false`     |
| disableOutsideClick          | 외부 클릭으로 닫기 트리거를 비활성화합니다.                                                  |                  `boolean`                  |     `false`     |
| disablePortal                | `Portal` 사용을 비활성화합니다.                                                              |                  `boolean`                  |     `false`     |
| keepMounted                  | `Modal`이 숨겨질 때 DOM에서 제거되지 않습니다.                                               |                  `boolean`                  |     `false`     |
| initialFocus                 | 초기 포커스 대상; 기본값은 콘텐츠 노드입니다.                                                | `FloatingFocusManagerProps['initialFocus']` |                 |
| returnFocus                  | 닫은 후 포커스가 돌아갈 위치를 제어합니다.                                                   | `FloatingFocusManagerProps['returnFocus']`  |                 |
| disableVisuallyHiddenDismiss | 화면 판독기용 숨김 버튼을 제거합니다.                                                        |                  `boolean`                  |     `false`     |
| floatingRef                  | 모달 콘텐츠 노드에 대한 ref                                                                  |  `React.RefObject<HTMLDivElement \| null>`  |                 |
| onOpenChange                 | `Modal` 열림 상태 변경을 처리합니다.                                                         |                 `Function`                  |                 |
| onTransitionIn               | 열기 전환 시작 이벤트 핸들러                                                                 |                 `Function`                  |                 |
| onTransitionOut              | 닫기 전환 시작 이벤트 핸들러                                                                 |                 `Function`                  |                 |
| onTransitionInComplete       | 열기 전환 완료 이벤트 핸들러                                                                 |                 `Function`                  |                 |
| onTransitionOutComplete      | 닫기 전환 완료 이벤트 핸들러                                                                 |                 `Function`                  |                 |
| open                         | `Modal` 가시성을 관리합니다.                                                                 |                  `boolean`                  |     `false`     |
| qa                           | 테스트 속성 (`data-qa`)                                                                      |                  `string`                   |                 |
| style                        | 루트 노드에 대한 `style` HTML 속성                                                           |                  `string`                   |                 |
| aria-label                   | `Modal`을 설명하는 `aria-label` HTML 속성                                                    |                  `string`                   |                 |
| aria-labelledby              | 보이는 `Modal` 캡션 요소의 ID                                                                |                  `string`                   |                 |
| contentOverflow              | `Modal` 내부에 스크롤 표시기가 있는지 또는 콘텐츠와 함께 커지는지를 결정합니다.               |              `visible` `auto`               |    `visible`    |

`onOpenChange`은 Escape 키를 누르면 `escape-key`, 외부 클릭 시 `outside-press`, 스크린 리더 해제 버튼의 경우 `undefined`를 받습니다. `open`이 `false`로 변경되면 이유에 관계없이 닫힙니다.

## CSS API

| 이름                      | 설명                       |
| :------------------------ | :------------------------- |
| `--g-modal-margin`        | `Modal` 콘텐츠 주변 여백   |
| `--g-modal-border-radius` | `Modal` 콘텐츠 테두리 반경 |
| `--g-modal-width`         | `Modal` 콘텐츠 너비        |
| `--g-modal-min-width`     | `Modal` 콘텐츠 최소 너비   |
| `--g-modal-max-width`     | `Modal` 콘텐츠 최대 너비   |
| `--g-modal-height`        | `Modal` 콘텐츠 높이        |
| `--g-modal-min-height`    | `Modal` 콘텐츠 최소 높이   |
| `--g-modal-max-height`    | `Modal` 콘텐츠 최대 높이   |