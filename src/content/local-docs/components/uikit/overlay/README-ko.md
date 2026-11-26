`Overlay` 컴포넌트는 상대 위치를 가진 부모 요소 위에 오버레이를 렌더링합니다. 즉, 부모 요소에는 `position`이 `relative`로 설정되어 있어야 합니다.
예를 들어, 데이터를 로딩하는 동안 원하는 레이아웃을 유지하는 데 사용할 수 있습니다.

```tsx
import {Overlay} from '@gravity-ui/uikit';
```

```jsx
import {Box, Overlay, Loader} from '@gravity-ui/uikit';

<Box position="relative">
  <div>Some content to hide under overlay</div>
  <Overlay visible={loading}>
    <Loader />
  </Overlay>
</Box>;
```

## Appearance

### Background

`base` 또는 `float` 배경색을 사용할 수 있습니다.

GRAVITY_TRANSLATION_BLOCK_1_END

## Properties

| Name       | Description                             |        Type        | Default |
| :--------- | :-------------------------------------- | :----------------: | :-----: |
| className  | CSS class name of the root element      |      `string`      |         |
| visible    | Overlay visibility state                |     `boolean`      | `false` |
| background | Overlay background style                | `"base"` `"float"` | `base`  |
| children   | Content (usually, a `Loader` component) | `React.ReactNode`  |         |