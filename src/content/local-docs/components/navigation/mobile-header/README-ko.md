# MobileHeader

모바일 네비게이션을 위한 헤더입니다. `MobileHeader`는 모달을 제외한 패널을 유지 관리합니다.

보조 `MobileHeaderFooterItem` 컴포넌트가 포함되어 있습니다.

## 속성

| 이름                  | 설명                                                     | 타입                                                       |
| :-------------------- | :-------------------------------------------------------------- | :--------------------------------------------------------- |
| logo                  | 서비스 로고 속성                                         | `LogoProps`                                                |
| burgerMenu            | 버거 메뉴 속성                                          | `BurgerMenuProps`                                          |
| overlapPanel          | 오버랩 패널 속성                                        | `OverlapPanelProps`                                        |
| burgerCloseTitle      | 버거 닫기 버튼 제목 (a11y)                                | `string`                                                   |
| burgerOpenTitle       | 버거 열기 버튼 제목 (a11y)                                | `string`                                                   |
| panelItems            | 헤더에 렌더링되는 사용자 정의 패널                            | `PanelItemProps[]`                                         |
| topAlert              | 상단 알림 속성                                            | `TopAlertProps`                                            |
| renderContent         | 헤더 콘텐츠 렌더링 함수                                         | `RenderContentType`                                        |
| sideItemRenderContent | 사이드 항목 콘텐츠 렌더링 함수                                        | `RenderContentType`                                        |
| onEvent               | 내부 이벤트 핸들러 — 항목 이름과 이벤트 이름을 받습니다. | `(itemName: string, eventName: MobileHeaderEvent) => void` |
| onClosePanel          | 패널 닫기 핸들러                                             | `() => void`                                               |
| className             | 헤더 클래스 이름                                               | `string`                                                   |
| contentClassName      | 헤더 콘텐츠 클래스 이름                                       | `string`                                                   |

### 사용법

[storybook 예제](src/components/MobileHeader/__stories__/MobileHeaderShowcase)를 참조하세요.

#### onEvent 속성

[onEvent](https://github.com/gravity-ui/navigation/blob/32c6a6f58e0307745e92b041b3d96517e57589c1/src/components/MobileHeader/MobileHeader.tsx#L41)는 `MobileHeader` 내부 이벤트를 처리합니다.

**사용자 정의 이벤트**

`CustomEvent`를 통해 이벤트를 시작할 수 있습니다. 지원되는 값:

- `MOBILE_PANEL_TOGGLE`
- `MOBILE_PANEL_OPEN`
- `MOBILE_PANEL_CLOSE`
- `MOBILE_BURGER_OPEN`
- `MOBILE_BURGER_CLOSE`

[MOBILE_HEADER_EVENT_NAMES](https://github.com/gravity-ui/navigation/blob/main/src/components/MobileHeader/constants.ts#L8-L12) 상수에서 패널 이벤트

##### 예제

**간단한 이벤트, 버거 열기**

```js
const customEvent = new CustomEvent('MOBILE_BURGER_OPEN');
const navRef = React.useRef < HTMLDivElement > null;
navRef?.current?.dispatchEvent(customEvent);
```

**패널 이벤트, 사용자 정의 패널 열기**

```js
import {getMobileHeaderCustomEvent, MOBILE_HEADER_EVENT_NAMES} from '@gravity-ui/navigation';

const customEvent = getMobileHeaderCustomEvent(MOBILE_HEADER_EVENT_NAMES.closeEvent, {
  panelName: 'user',
});

const navRef = React.useRef < HTMLDivElement > null;
navRef?.current?.dispatchEvent(customEvent);

const customEvent2 = getMobileHeaderCustomEvent('MOBILE_PANEL_TOGGLE', {panelName: 'user'});
navRef?.current?.dispatchEvent(customEvent2);
```

사용 가능한 `panelName`

1. '버거'
2. 요소의 `id` [panelItems prop](https://github.com/gravity-ui/navigation/blob/main/src/components/MobileHeader/MobileHeader.tsx#L38C5-L38C15)

## MobileHeader 변수

| 이름                               | 설명                                      | 기본값 |
| :--------------------------------- | :---------------------------------------- | :----: |
| z-indexes                          |                                           |        |
| `--gn-mobile-header-z-index`       | 모바일 헤더 z-index                       | `100`  |
| `--gn-mobile-header-panel-z-index` | 모바일 헤더 패널 (Drawer 컴포넌트) z-index | `98`   |
