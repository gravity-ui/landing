# Menu

`Menu` 컴포넌트는 일반적으로 버튼인 트리거와 상호 작용할 때 `Popup`에 선택 목록을 표시합니다.

관련 컴포넌트 모음이 있습니다:

- `Menu` - 메뉴의 컨테이너
- `MenuItem` - 메뉴에서 선택할 옵션
- `MenuDivider` - 옵션 그룹화를 위한 구분선
- `MenuTrigger` - 내장된 기본 트리거, 타원형 아이콘이 있는 `Button`

## 기본 사용법

```jsx
import {Menu, MenuItem, MenuDivider, MenuTrigger} from '@gravity-ui/uikit';

function BasicMenu() {
  return (
    <Menu trigger={<MenuTrigger />}>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Move</MenuItem>
      <MenuDivider />
      <MenuItem theme="danger">Delete</MenuItem>
    </Menu>
  );
}
```

## 사용자 정의 트리거

기본 `HTMLAttributes`와 `HTMLElement`에 대한 ref를 props로 수락하는 모든 종류의 컴포넌트를 트리거로 렌더링할 수 있습니다.
더 복잡한 컴포넌트의 경우 `trigger` prop의 함수 변형을 사용할 수 있습니다. 이 함수는 `triggerProps`를 첫 번째 인수로, `triggerRef`를 두 번째 인수로 받으며, 이를 컴포넌트에 전달해야 합니다.

## 컨텍스트 메뉴

컨텍스트 메뉴 패턴을 구현하려면 "가상 요소"를 트리거로 사용해야 합니다:

```jsx
import {Menu, MenuItem, MenuDivider, MenuTrigger} from '@gravity-ui/uikit';

function ContextMenu() {
  const [trigger, setTrigger] = React.useState(null);

  React.useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
      setTrigger({
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: event.clientX,
            y: event.clientY,
            top: event.clientY,
            right: event.clientX,
            bottom: event.clientY,
            left: event.clientX,
          };
        },
      });
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <Menu trigger={trigger}>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Move</MenuItem>
      <MenuDivider />
      <MenuItem theme="danger">Delete</MenuItem>
    </Menu>
  );
}
```

## 인라인 모드

기본적으로 `Menu`는 `Popup` 내부에 렌더링됩니다. 하지만 `inline` prop을 사용하여 자체 컨테이너에 인라인으로 렌더링할 수 있습니다.

## 속성

| 이름            | 설명                                     |                                              타입                                               |     기본값      |
| :-------------- | :---------------------------------------------- | :---------------------------------------------------------------------------------------------: | :--------------: |
| className       | HTML `class` 속성                          |                                            `string`                                             |                  |
| style           | HTML `style` 속성                          |                                      `React.CSSProperties`                                      |                  |
| aria-label      | 메뉴의 접근 가능한 이름                    |                                            `string`                                             |                  |
| aria-labelledby | 메뉴를 명명하는 요소의 ID            |                                            `string`                                             |                  |
| qa              | 테스트 ID (`data-qa` 속성)                   |                                            `string`                                             |                  |
| open            | `open`에 대한 제어 상태                     |                                            `boolean`                                            |                  |
| defaultOpen     | `open`에 대한 비제어 상태                   |                                            `boolean`                                            |                  |
| children        | 메뉴 관련 컴포넌트 (항목, 구분선 등) |                                        `React.ReactNode`                                        |                  |
| disabled        | 비활성화 상태                                  |                                            `boolean`                                            |     `false`      |
| inline          | 메뉴를 인라인으로 렌더링                         |                                            `boolean`                                            |     `false`      |
| trigger         | 메뉴를 여는 트리거 요소            | `React.ReactElement` `(triggerProps, triggerRef) => React.ReactElement` `VirtualElement` `null` |                  |
| placement       | 팝업 배치                                 |                                        `PopupPlacement`                                         | `"bottom-start"` |
| onOpenChange    | `open` 상태 변경 콜백                |                `(open: boolean, event: Event, reason: OpenChangeReason) => void`                |                  |
| size            | `Menu`의 크기                                 |                                    `"s"` `"m"` `"l"` `"xl"`                                     |      `"m"`       |

### MenuItem

`icon` 속성에 명시적인 크기가 없는 `Icon`이 전달되면, `Menu` 크기에 따라 크기가 자동으로 선택됩니다. 이를 재정의하려면 `Icon`의 `size`, `width` 또는 `height`를 명시적으로 설정하세요.

`MenuItem`은 다음 속성 외에도 유효한 `button` 또는 `a` 요소 속성을 모두 허용합니다.

| 이름      | 설명                         |                                타입                                | 기본값   |
| :-------- | :--------------------------- | :----------------------------------------------------------------: | :------: |
| qa        | 테스트 ID (`data-qa` 속성)   |                              `string`                              |          |
| theme     | `MenuItem` 테마              | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` | `"normal"` |
| selected  | 선택된 상태 (`menuitemcheckbox`) |                             `boolean`                              |          |
| disabled  | 비활성화된 상태              |                             `boolean`                              |  `false`   |
| icon      | 아이콘 렌더링 슬롯           |                        `React.ReactElement`                        |          |
| arrow     | 중첩 메뉴 화살표 렌더링 슬롯 |                        `React.ReactElement`                        |          |
| children  | 내용                         |                         `React.ReactNode`                          |          |
| component | 사용자 정의 루트 컴포넌트    |                        `React.ElementType`                         |          |

### MenuTrigger

`MenuTrigger`는 다음 속성 외에도 모든 `Button` 컴포넌트 속성을 허용합니다.

| 이름 | 설명             |            타입             |    기본값     |
| :--- | :--------------- | :-------------------------: | :-----------: |
| icon | 표시할 아이콘 유형 | `"horizontal"` `"vertical"` | `"horizontal"` |