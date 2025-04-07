<!--GITHUB_BLOCK-->

# 叠加

<!--/GITHUB_BLOCK-->

```tsx
import {Overlay} from '@gravity-ui/uikit';
```

`Overlay` 组件使用相对位置在父元素上方呈现叠加层，即父元素必须 `position` 设置为 `relative`。
例如，它可用于在加载数据时保留所需的布局。

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

你可以使用 `base` 或 `float` 背景颜色。

<!--GITHUB_BLOCK-->

```tsx
<Overlay background="base">
<Overlay background="float">
```

<!--/GITHUB_BLOCK-->

## 属性

| 姓名      | 描述                         |        类型        |  默认   |
| :-------- | :--------------------------- | :----------------: | :-----: |
| className | 根元素的 CSS 类名            |      `string`      |         |
| 可见的    | 叠加可见性状态               |     `boolean`      | `false` |
| 背景      | 叠加背景样式                 | `"base"` `"float"` | `base`  |
| 儿童      | 内容（通常是组 `Loader` 件） | `React.ReactNode`  |         |
