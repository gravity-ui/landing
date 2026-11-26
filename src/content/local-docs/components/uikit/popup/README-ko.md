`Popup`는 플로팅 콘텐츠를 페이지 위에 표시하며, 참조 요소에 고정됩니다. 이는 툴팁, 팝오버, 메뉴의 기반이 되는 저수준 컴포넌트로, [Floating UI](https://floating-ui.com)를 기반으로 구축되었습니다. `open` 속성으로 가시성을 제어하며, `disablePortal` 속성을 설정하지 않는 한 자식 요소는 [`Portal`](../Portal) 컴포넌트 내부에 렌더링됩니다.

```tsx
import {Popup} from '@gravity-ui/uikit';
```

## Anchor

플로팅 요소의 앵커를 지정하려면 `anchorElement` 속성을 사용할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Placement

`Popup`이 앵커 요소 주위의 위치를 관리하려면 `placement` 속성을 사용합니다.
기본적으로 `Popup`은 오버플로우를 방지하기 위해 [flip middleware](https://floating-ui.com/docs/flip)를 사용합니다.
속성이 배열로 설정되면 첫 번째 요소가 기본 배치 값으로 사용되고, 나머지는 [fallback placements](https://floating-ui.com/docs/flip#fallbackplacements)로 사용됩니다.
`auto`, `auto-start`, `auto-end` 값을 사용하여 flip 대신 [autoPlacement middleware](https://floating-ui.com/docs/autoPlacement)를 사용하는 것도 가능합니다.

GRAVITY_TRANSLATION_BLOCK_2_END

## Properties

| 이름                    | 설명                                                                                       |                             타입                              | 기본값 |
| :---------------------- | :----------------------------------------------------------------------------------------- | :-----------------------------------------------------------: | :-----: |
| anchorElement           | 앵커 요소. `VirtualElement`도 가능합니다.                                                  |                     `PopupAnchorElement`                      |         |
| aria-describedby        | `aria-describedby` 속성. 레이블과 설명 노드가 모두 있는 경우 사용하세요.                     |                           `string`                            |         |
| aria-label              | `aria-label` 속성. 보이는 캡션이 없는 경우에만 사용하세요.                                 |                           `string`                            |         |
| aria-labelledby         | `aria-labelledby` 속성. 보이는 캡션이 있는 경우 더 선호됩니다.                              |                           `string`                            |         |
| children                | 모든 React 콘텐츠                                                                          |                       `React.ReactNode`                       |         |
| className               | 루트 노드의 `class` HTML 속성                                                              |                           `string`                            |         |
| container               | `Portal`을 통해 컴포넌트가 마운트될 DOM 요소                                               |                         `HTMLElement`                         | `document.body` |
| disableEscapeKeyDown    | `Esc` 키로 닫는 것을 비활성화합니다.                                                       |                           `boolean`                           |     `false`     |
| disableFocusOut         | 포커스 아웃 시 닫는 것을 비활성화합니다.                                                   |                           `boolean`                           |     `false`     |
| disableOutsideClick     | 외부 클릭 시 닫는 것을 비활성화합니다.                                                     |                           `boolean`                           |     `false`     |
| disablePortal           | `Portal` 사용을 비활성화합니다.                                                            |                           `boolean`                           |     `false`     |
| disableTransition       | 팝업 표시/숨김 애니메이션을 비활성화합니다.                                                |                           `boolean`                           |     `false`     |
| floatingClassName       | `Floating UI` 요소에 적용할 추가 클래스                                                    |                           `string`                            |         |
| floatingContext         | 상호 작용을 제공할 `Floating UI` 컨텍스트                                                 |                     `FloatingRootContext`                     |         |
| floatingInteractions    | `Floating UI` 상호 작용 재정의                                                             |                     `Array<ElementProps>`                     |         |
| floatingMiddlewares     | `Floating UI` 미들웨어. 설정하면 기본 미들웨어를 완전히 덮어씁니다.                         |                      `Array<Middleware>`                      |         |
| floatingStyles          | `Floating UI` 요소에 적용할 스타일                                                          |                     `React.CSSProperties`                     |         |
| focusOrder              | 포커스 순환 순서                                                                           |        `Array<'reference' \| 'floating' \| 'content'>`        |  `['content']`  |
| hasArrow                | 앵커를 가리키는 화살표를 렌더링합니다.                                                     |                           `boolean`                           |     `false`     |
| id                      | `id` HTML 속성                                                                             |                           `string`                            |         |
| initialFocus            | 초기 포커스 요소. 양수는 탭 가능한 요소의 인덱스입니다.                                   |               `number` `React.Ref<HTMLElement>`               |         |
| keepMounted             | `Popup`이 숨겨질 때 DOM에서 제거되지 않습니다.                                            |                           `boolean`                           |     `false`     |
| modal                   | 포커스 트래핑 동작을 활성화합니다.                                                         |                           `boolean`                           |     `false`     |
| offset                  | `Floating UI` 오프셋 값                                                                    |                         `PopupOffset`                         |       4       |
| onOpenChange            | `Popup` 열림 변경 이벤트를 처리합니다.                                                     |                          `Function`                           |         |
| onTransitionIn          | 팝업 열림 애니메이션 시작 시                                                               |                          `Function`                           |         |
| onTransitionInComplete  | 팝업 열림 애니메이션 완료 시                                                               |                          `Function`                           |         |
| onTransitionOut         | 팝업 닫기 애니메이션 시작 시                                                               |                          `Function`                           |         |
| onTransitionOutComplete | 팝업 닫기 애니메이션 완료 시                                                               |                          `Function`                           |         |
| open                    | `Popup` 가시성을 관리합니다.                                                               |                           `boolean`                           |     `false`     |
| placement               | `Floating UI` 배치                                                                         | `Placement` `Array<Placement>` `auto` `auto-start` `auto-end` |                 |
| qa                      | 테스트 속성 (`data-qa`)                                                                    |                           `string`                            |         |
| returnFocus             | 닫을 때 포커스할 요소                                                                      |              `boolean` `React.Ref<HTMLElement>`               |     `true`      |
| role                    | 팝업의 접근성 역할                                                                         |                           `string`                            |                 |
| strategy                | `Floating UI` 위치 지정 전략                                                               |                      `absolute` `fixed`                       |   `absolute`    |
| style                   | 루트 노드의 `style` HTML 속성                                                              |                     `React.CSSProperties`                     |                 |

## CSS API

| 이름                         | 설명      |
| :--------------------------- | :--------------- |
| `--g-popup-background-color` | 배경색 |
| `--g-popup-border-color`     | 테두리 색상     |
| `--g-popup-border-radius`    | 테두리 반경    |
| `--g-popup-border-width`     | 테두리 너비     |