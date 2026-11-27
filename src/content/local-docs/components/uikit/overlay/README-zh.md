<!--GITHUB_BLOCK-->

# Overlay

<!--/GITHUB_BLOCK-->

`Overlay` 组件会在父元素上渲染一个覆盖层，父元素需要设置 `position: relative`。
例如，它可用于在加载数据时保持所需的布局。

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

## 外观

### 背景

您可以使用 `base` 或 `float` 背景颜色。

<!--GITHUB_BLOCK-->

```tsx
<Overlay background="base">
<Overlay background="float">
```

<!--/GITHUB_BLOCK-->

## 属性

| 名称       | 描述                             |        类型        | 默认值 |
| :--------- | :------------------------------- | :----------------: | :----: |
| className  | 根元素的 CSS 类名                |      `string`      |        |
| visible    | 覆盖层的可见状态                 |     `boolean`      | `false` |
| background | 覆盖层的背景样式                 | `"base"` `"float"` | `base`  |
| children   | 内容（通常是 `Loader` 组件）     | `React.ReactNode`  |        |
