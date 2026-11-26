GRAVITY_TRANSLATION_BLOCK_0_END

핫키 문서용 탐색 패널입니다.
이 패널은 애플리케이션의 핫키 세트와 해당 목적에 대한 설명을 표시합니다.

```ts
import {HotkeysPanel} from '@gravity-ui/navigation';
```

## 속성

| 속성 (Property)         | 타입 (Type)            | 필수 (Required) | 기본값 (Default) | 설명 (Description)                                                                  |
| :---------------------- | :--------------------- | :-------------: | :--------------: | :--------------------------------------------------------------------------- |
| hotkeys                 | `Array`                |       yes       |                  | 핫키 그룹 목록                                                        |
| title                   | `ReactNode`            |                 |                  | 패널 제목                                                              |
| togglePanelHotkey       | `String`               |                 |                  | 패널 열기 핫키                                                        |
| open                    | `Boolean`              |       yes       |                  | 서랍이 열려 있는지 여부                                                   |
| onClose                 | `Function`             |                 |                  | 서랍 닫기 핸들러                                                         |
| filterable              | `Boolean`              |                 | true             | 검색 입력란 표시 여부                                             |
| filterPlaceholder       | `String`               |                 |                  | 검색 입력란 플레이스홀더                                                     |
| filterClassName         | `String`               |                 |                  | 검색 입력란 클래스 이름                                                      |
| leftOffset              | `Number/String`        |                 |                  | 서랍 왼쪽 오프셋                                                           |
| topOffset               | `Number/String`        |                 |                  | 서랍 위쪽 오프셋                                                            |
| emptyState              | `ReactNode`            |                 |                  | 검색 결과 없음 플레이스홀더                                                |
| className               | `String`               |                 |                  | 서랍 클래스 이름                                                            |
| drawerItemClassName     | `String`               |                 |                  | 서랍 항목 클래스 이름                                                       |
| titleClassName          | `String`               |                 |                  | 제목 클래스 이름                                                             |
| itemContentClassName    | `String`               |                 |                  | 목록 항목 내용 클래스 이름                                                 |
| listClassName           | `String`               |                 |                  | 목록 클래스 이름                                                              |
| platform                | `'pc'`/`'mac'`         |                 | auto             | 핫키 표시 형식 플랫폼                                           |
| drawerProps             | `DrawerProps`          |                 |                  | Drawer 컴포넌트에 대한 추가 속성 (style, container, hideVeil 등) |
| disableNavigationOffset | `Boolean`              |                 | false            | AsideHeader 크기에 따른 자동 왼쪽 오프셋 비활성화 여부           |

## CSS API

| 이름                                 | 설명                       | 기본값 |
| :----------------------------------- | :------------------------- | :-----: |
| `--hotkeys-panel-width`              | 패널의 너비            | `400px` |
| `--hotkeys-panel-vertical-padding`   | 패널의 상하 패딩       | `18px`  |
| `--hotkeys-panel-horizontal-padding` | 패널의 좌우 패딩       | `24px`  |

### 사용법

storybook 예제 `src/components/HotkeysPanel/__stories__/HotkeysPanelShowcase`를 참조하세요.