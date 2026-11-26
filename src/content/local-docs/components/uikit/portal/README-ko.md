GRAVITY_TRANSLATION_BLOCK_0_END

`Portal`는 유틸리티 컴포넌트입니다. 기본적으로 React의 [`createPortal`](https://react.dev/reference/react-dom/createPortal)을 감싸는 간단한 래퍼로, 자식 요소를 부모 컴포넌트 외부의 DOM 노드에 렌더링할 수 있습니다.

```tsx
import {Portal} from '@gravity-ui/uikit';
```

## 컨테이너

기본적으로 `Portal`은 자식 요소를 `document.body`에 렌더링합니다. 하지만 `container` 속성을 사용하여 이를 변경할 수 있습니다.
또한, `PortalProvider` 컴포넌트를 사용하여 React 서브트리의 모든 `Portal`에 컨테이너를 제공할 수 있습니다.

```tsx
import {Portal, PortalProvider} from '@gravity-ui/uikit'

const myRoot = document.getElementById('my-root');

<Portal>이것은 document.body 안에 렌더링됩니다</Portal>
<Portal container={myRoot}>이것은 #my-root 노드 안에 렌더링됩니다</Portal>
<PortalProvider container={myRoot}>
    <Portal>이것 또한 #my-root 안에 렌더링됩니다</Portal>
</PortalProvider>
```

## 속성

| 이름          | 설명                                                               |       타입        |     기본값     |
| :------------ | :----------------------------------------------------------------- | :---------------: | :------------: |
| children      | 모든 React 콘텐츠                                                  | `React.ReactNode` |                |
| container     | 자식 요소를 마운트할 DOM 요소                                      |   `HTMLElement`   | `document.body` |
| disablePortal | true이면 자식 요소를 일반 DOM 계층 구조 내에 렌더링합니다.         |     `boolean`     |                |