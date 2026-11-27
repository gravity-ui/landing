[`Tooltip`](../Tooltip/README.md)는 설명 텍스트가 없는 액션 버튼(예: 아이콘 버튼)에 레이블을 지정하는 데 사용됩니다.

## 사용법

```tsx
import {ActionTooltip} from '@gravity-ui/uikit';

<ActionTooltip title="Action">
  <div tabIndex={0}>Anchor</div>
</ActionTooltip>;
```

## 앵커

`ActionTooltip`이 작동하려면 `ref` 속성을 `HTMLElement`에 전달할 수 있는 유효한 `ReactElement`를 자식으로 전달해야 합니다. 또한 `HTMLElement`에 대한 다른 속성도 전달해야 합니다.

대안으로, 자식으로 함수를 전달하여 기본 구성 요소에 `ref`와 `props`를 수동으로 제공할 수 있습니다.

```tsx
import {ActionTooltip} from '@gravity-ui/uikit';

<ActionTooltip title="Action">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</ActionTooltip>;
```

## 제어 상태

기본적으로 `ActionTooltip`은 앵커에 마우스를 올리면 열리고 숨겨집니다. 이 동작을 변경하여 열린 상태를 수동으로 설정할 수 있습니다. `open` prop에 상태를 전달하고 `onOpenChange` 콜백에서 상태를 변경합니다.
`onOpenChange` 콜백은 다음과 같은 서명을 가집니다: `(open: boolean, event?: Event, reason: 'hover' | 'focus') => void`.

## 지연 그룹

`Tooltip`과 마찬가지로 `ActionTooltip`은 앱의 다른 툴팁과 열림 지연 시간을 공유합니다. 툴바의 첫 번째 툴팁은 `openDelay`를 지불하고, 그룹이 활성화된 동안 이웃 툴팁은 즉시 열립니다. 자세한 내용은 `Tooltip`의 [지연 그룹](../Tooltip/README.md#delay-group) 섹션을 참조하세요.

## 속성

| 이름          | 설명                                                                                     |                       타입                       |     기본값     |
| :------------ | :----------------------------------------------------------------------------------------------- | :----------------------------------------------: | :-------------: |
| children      | `ActionTooltip`의 앵커 요소                                                          |         `React.ReactElement` `Function`          |                 |
| className     | `class` HTML 속성                                                                          |                     `string`                     |                 |
| closeDelay    | 호버가 끝나면 `ActionTooltip`을 숨기기까지 지연되는 밀리초 수                                                          |                     `number`                     |       `0`       |
| container     | `Portal`을 통해 컴포넌트가 마운트될 DOM 요소                                          |                  `HTMLElement`                   | `document.body` |
| description   | 설명 콘텐츠                                                                             |                `React.ReactNode`                 |                 |
| disablePortal | `Portal` 사용 비활성화                                                                         |                    `boolean`                     |     `false`     |
| disabled      | `ActionTooltip` 열림 방지                                                        |                    `boolean`                     |                 |
| hotkey        | 상단 끝 모서리에 표시될 `Hotkey` 값                                                |   [`Hotkey` 값](../Hotkey/README.md#value)    |                 |
| offset        | 앵커로부터의 `ActionTooltip` 오프셋                                                          |                     `number`                     |       `4`       |
| onOpenChange  | 열림 상태 변경 처리 콜백                                                            |                    `Function`                    |                 |
| open          | 제어되는 열림 상태                                                                           |                    `boolean`                     |                 |
| openDelay     | 호버가 시작된 후 `ActionTooltip`을 표시하기까지 지연되는 밀리초 수                        |                     `number`                     |     `1000`      |
| placement     | 앵커에 대한 `ActionTooltip` 위치                                                 | [`PopupPlacement`](../Popup/README.md#placement) |    `bottom`     |
| qa            | 테스트에 사용되는 `data-qa` HTML 속성                                                      |                     `string`                     |                 |
| rest          | 열리기 전에 커서가 얼마나 오래 머물러야 하는지 (밀리초)                                        |                     `number`                     |       `0`       |
| strategy      | 사용할 CSS `position` 속성 유형                                                       |                `absolute` `fixed`                |   `absolute`    |
| style         | `style` HTML 속성                                                                          |              `React.CSSProperties`               |                 |
| title         | 제목 콘텐츠                                                                                   |                     `string`                     |                 |
| trigger       | 열림을 트리거해야 하는 이벤트 유형. 기본 `all` 값은 `hover`와 `focus` 모두를 참조합니다. |                `"all"` `"focus"`                 |     `"all"`     |