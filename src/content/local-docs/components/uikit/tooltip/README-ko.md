GRAVITY_TRANSLATION_BLOCK_0_END

간단한 텍스트 팁으로, 자식 노드를 앵커로 사용합니다. 이 컴포넌트는 텍스트 콘텐츠만 허용하며, 작은 크기와 긴 표시 지연 시간으로 브라우저의 `title` 속성을 대체할 수 있습니다.

## 사용법

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Content">
  <div tabIndex={0}>Anchor</div>
</Tooltip>;
```

## 앵커

`Tooltip`이 작동하려면 `ref` 속성을 `HTMLElement`에 전달할 수 있는 유효한 `ReactElement`를 자식으로 전달해야 하며, `HTMLElement`에 대한 다른 속성도 전달해야 합니다.

또는 함수를 자식으로 전달하여 기본 컴포넌트에 ref와 props를 수동으로 제공할 수 있습니다.

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Content">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</Tooltip>;
```

## 제어 상태

기본적으로 `Tooltip`은 앵커에 마우스를 올리면 열리고 닫힙니다. 이 동작을 수동으로 열린 상태를 설정하도록 변경할 수 있습니다. `open` prop에 상태를 전달하고 `onOpenChange` 콜백에서 변경하세요.
`onOpenChange` 콜백은 다음과 같은 시그니처를 가집니다: `(open: boolean, event?: Event, reason: 'hover' | 'focus') => void`.

## 역할

`Tooltip`은 접근성 측면에서 어떻게 작동해야 하는지를 변경하는 `role` 속성을 허용합니다.
앵커에 자체 텍스트가 있는 경우 `tooltip` 역할이 사용되어야 하며, 그렇지 않은 경우(예: 아이콘 버튼)에는 `label` 역할이 사용되어야 합니다.

## 지연 그룹

`Provider` 아래에 렌더링되는 모든 툴팁은 열림 지연 시간을 공유합니다. 첫 번째 툴팁은 자체 `openDelay`를 지불하므로, 실수로 마우스를 움직여도 아무것도 열리지 않습니다. 그룹이 활성화된 상태(툴팁이 열려 있거나 `skipDelay`보다 적은 시간 전에 닫힌 경우)에는 다음으로 마우스를 올린 툴팁이 즉시 열리며, 한 번에 하나의 툴팁만 열립니다. 이는 툴바 및 아이콘 버튼 행에 적합하며, 각 버튼마다 지연 시간을 기다리는 것이 느리게 느껴질 수 있습니다.
포커스로 열리는 것은 그룹 유무에 관계없이 즉시 열리므로 키보드 사용에는 영향을 미치지 않습니다.

`skipDelay`(기본값 300ms)는 `Provider`의 `defaultProps`로 구성됩니다.

```tsx
import {Provider} from '@gravity-ui/uikit';

<Provider defaultProps={{TooltipDelayGroup: {skipDelay: 500}}}>{/* ... */}</Provider>;
```

## 속성

| 이름          | 설명                                                                                     |                       타입                       |     기본값     |
| :------------ | :----------------------------------------------------------------------------------------------- | :----------------------------------------------: | :-------------: |
| children      | `Tooltip`의 앵커 요소                                                                |         `React.ReactElement` `Function`          |                 |
| className     | `class` HTML 속성                                                                          |                     `string`                     |                 |
| closeDelay    | 호버가 끝나면 `Tooltip`을 숨기기까지 지연되는 밀리초 수                                 |                     `number`                     |       `0`       |
| container     | `Portal`을 통해 컴포넌트가 마운트될 DOM 요소                                          |                  `HTMLElement`                   | `document.body` |
| content       | `Tooltip`에 표시될 내용                                                     |                `React.ReactNode`                 |                 |
| disablePortal | `Portal` 사용 비활성화                                                                         |                    `boolean`                     |     `false`     |
| disabled      | `Tooltip` 열림 방지                                                              |                    `boolean`                     |                 |
| offset        | 앵커로부터의 `Tooltip` 오프셋                                                                |                     `number`                     |       `4`       |
| onOpenChange  | 열림 상태 변경 처리 콜백                                                            |                    `Function`                    |                 |
| open          | 제어되는 열림 상태                                                                           |                    `boolean`                     |                 |
| openDelay     | 호버가 시작된 후 `Tooltip`을 표시하기까지 지연되는 밀리초 수                              |                     `number`                     |     `1000`      |
| placement     | 앵커에 대한 `Tooltip` 위치                                                       | [`PopupPlacement`](../Popup/README.md#placement) |    `bottom`     |
| qa            | 테스트에 사용되는 `data-qa` HTML 속성                                                      |                     `string`                     |                 |
| rest          | 열리기 전에 커서가 대기해야 하는 시간(밀리초)                                        |                     `number`                     |       `0`       |
| role          | `Tooltip`이 사용되는 역할                                                                  |              `"tooltip"` `"label"`               |   `"tooltip"`   |
| strategy      | 사용할 CSS `position` 속성 유형                                                       |                `absolute` `fixed`                |   `absolute`    |
| style         | `style` HTML 속성                                                                          |              `React.CSSProperties`               |                 |
| trigger       | 열림을 트리거해야 하는 이벤트 유형. 기본 `all` 값은 `hover`와 `focus` 모두를 참조합니다. |                `"all"` `"focus"`                 |     `"all"`     |

## CSS API

| 이름                           | 설명      |
| :----------------------------- | :-------- |
| `--g-tooltip-text-color`       | 텍스트 색상 |
| `--g-tooltip-background-color` | 배경 색상 |
| `--g-tooltip-padding`          | 패딩    |
| `--g-tooltip-border-radius`    | 테두리 반경 |
| `--g-tooltip-box-shadow`       | 그림자    |