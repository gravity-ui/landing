GRAVITY_TRANSLATION_BLOCK_0_END

`Drawer` 컴포넌트는 웹 애플리케이션에서 화면 가장자리에서 나타나는 슬라이딩 패널을 제공하는 다목적 인터페이스 요소입니다. 이 패널에는 탐색, 도구 또는 추가 콘텐츠가 포함될 수 있습니다. 이 컴포넌트는 React와 CSS 전환을 사용하여 부드러운 애니메이션을 구현합니다.

```tsx
import {Drawer} from '@gravity-ui/uikit';
```

## 사용법

`Drawer` 컴포넌트를 사용하는 간단한 예시는 다음과 같습니다.

```tsx
import React from 'react';
import {Drawer} from '@gravity-ui/uikit';

const App = () => {
  const [isVisible, setVisible] = React.useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Drawer 열기</button>
      <Drawer onOpenChange={setVisible} open={isVisible}>
        <p>Drawer 내용</p>
      </Drawer>
    </div>
  );
};

export default App;
```

## 배치

`Drawer`의 배치를 제어하려면 `placement` prop을 전달할 수 있습니다. 가능한 값은 `left`, `right`, `top`, `bottom`입니다.

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} placement="left">
  <p>Drawer 내용</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="right">
  <p>Drawer 내용</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="top">
  <p>Drawer 내용</p>
</Drawer>
<Drawer onOpenChange={setVisible} open={isVisible} placement="bottom">
  <p>Drawer 내용</p>
</Drawer>
```

## 애니메이션

기본적으로 `Drawer`는 전환과 함께 나타나고 사라집니다. 즉시 표시하거나 숨기려면 `disableTransition` prop을 전달합니다.

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} disableTransition>
  <p>Drawer 내용</p>
</Drawer>
```

## 크기 조절 가능

`Drawer`는 `resizable` prop을 전달하여 크기를 조절할 수 있습니다.

```tsx
<Drawer onOpenChange={setVisible} open={isVisible} resizable>
  <p>Drawer 내용</p>
</Drawer>
```

또한 `size` prop을 사용하여 `Drawer`의 크기를 제어하고 `onResize` 핸들러를 전달하여 크기가 조절된 값을 저장할 수 있습니다.

```tsx
const [size, setSize] = useState(500);

<Drawer onOpenChange={setVisible} open={isVisible} resizable size={size} onResize={setSize}>
  <p>Drawer 내용</p>
</Drawer>;
```

## 속성

| 이름                    | 설명                                                                                                                            |                타입                |     기본값     |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------: | :------------: |
| className               | 루트 노드의 `class` HTML 속성                                                                                                   |              `string`              |                |
| qa                      | 테스트 속성 (`data-qa`)                                                                                                         |              `string`              |                |
| style                   | 루트 노드의 `style` HTML 속성                                                                                                   |       `React.CSSProperties`        |                |
| aria-label              | `Drawer`를 설명하는 `aria-label` HTML 속성                                                                                      |              `string`              |                |
| aria-labelledby         | 표시되는 `Drawer` 캡션 요소의 ID                                                                                                |              `string`              |                |
| aria-describedby        | `Drawer` 요소에 대한 `aria-describedby`                                                                                         |              `string`              |                |
| aria-details            | 사용자 `Drawer` 요소에 대한 `aria-details`                                                                                      |              `string`              |                |
| returnFocus             | 닫을 때 포커스될 요소                                                                                                           | `boolean` `React.Ref<HTMLElement>` |     `true`     |
| initialFocus            | 초기 포커스될 요소. 양수는 탭 가능한 요소의 인덱스입니다.                                                                       | `number` `React.Ref<HTMLElement>`  |                |
| placement               | 서랍이 나타날 방향을 지정합니다.                                                                                                |              `string`              |     `left`     |
| contentClassName        | 콘텐츠 노드의 `class` HTML 속성                                                                                                 |              `string`              |                |
| children                | 모든 React 콘텐츠                                                                                                               |         `React.ReactNode`          |                |
| container               | `Portal`을 통해 컴포넌트가 마운트될 DOM 요소                                                                                    |           `HTMLElement`            | `document.body` |
| contentOverflow         | `Drawer` 내부에 자체 스크롤 표시기가 있는지 여부를 결정합니다. 기본적으로는 없습니다.                                             |          `visible` `auto`          |    `visible`   |
| disableBodyScrollLock   | 열려 있는 동안 스크롤 잠금을 비활성화합니다.                                                                                    |             `boolean`              |     `false`    |
| disableEscapeKeyDown    | `Esc` 키로 닫는 것을 비활성화합니다.                                                                                            |             `boolean`              |     `false`    |
| disableOutsideClick     | 외부 클릭으로 닫는 것을 비활성화합니다.                                                                                         |             `boolean`              |     `false`    |
| disableTransition       | 서랍의 애니메이션을 비활성화합니다.                                                                                             |             `boolean`              |     `false`    |
| disableModal            | 모달 포커스 관리를 비활성화합니다.                                                                                              |             `boolean`              |     `false`    |
| disableLayer            | 레이어 관리자에 `Drawer`를 등록하는 것을 비활성화합니다.                                                                        |             `boolean`              |     `true`     |
| disablePortal           | `Portal` 사용을 비활성화합니다.                                                                                                 |             `boolean`              |     `false`    |
| keepMounted             | 숨겨질 때 `Drawer`가 DOM에서 제거되지 않습니다.                                                                                 |             `boolean`              |     `false`    |
| resizable               | 포인터를 통해 서랍 크기 조절을 활성화합니다.                                                                                    |             `boolean`              |     `false`    |
| open                    | `Drawer`의 가시성을 관리합니다.                                                                                                 |             `boolean`              |     `false`    |
| hideVeil                | 외부 클릭 처리를 변경하지 않고 `Drawer`의 베일을 제거합니다.                                                                    |             `boolean`              |     `false`    |
| onOpenChange            | 열린 상태 변경 시점에 호출되는 콜백                                                                                            |             `Function`             |                |
| onTransitionIn          | 전환 "in" 시작 시 호출되는 콜백                                                                                                 |             `Function`             |                |
| onTransitionInComplete  | 전환 "in" 완료 시 호출되는 콜백                                                                                                 |             `Function`             |                |
| onTransitionOut         | 전환 "out" 시작 시 호출되는 콜백                                                                                                |             `Function`             |                |
| onTransitionOutComplete | 전환 "out" 완료 시 호출되는 콜백                                                                                                |             `Function`             |                |
| onResizeEnd             | 크기 조절 완료 시 호출되는 콜백                                                                                                 |             `Function`             |                |
| onResize                | 서랍 크기 조절 중 호출되는 콜백                                                                                                |             `Function`             |                |
| onResizeStart           | 크기 조절 시작 시 호출되는 콜백                                                                                                 |             `Function`             |                |
| maxSize                 | 서랍의 최대 너비 또는 높이 (픽셀 단위)                                                                                          |              `number`              |                |
| minSize                 | 서랍의 최소 너비 또는 높이 (픽셀 단위)                                                                                          |              `number`              |                |
| size                    | 서랍의 너비 또는 높이 (픽셀 단위). `auto` 옵션이 전달되면 `Drawer`의 너비 또는 높이가 콘텐츠에 맞게 조정됩니다.                   |         `number \| 'auto'`         |                |