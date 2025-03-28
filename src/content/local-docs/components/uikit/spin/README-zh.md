<!--GITHUB_BLOCK-->

# 旋转

<!--/GITHUB_BLOCK-->

```tsx
import {Spin} from '@gravity-ui/uikit';
```

该 `Spin` 组件在行内场景中显示加载状态（旋转的半圆形）。与之不同的是 `Loader` ，此组件用于在行内场景中显示加载状态，例如在 `Button` 或中 `Label`。

### 大小

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Spin size="xs" />
<Spin size="s" />
<Spin size="m" />
<Spin size="l" />
<Spin size="xl" />
`}
>
    <UIKit.Spin size="xs" />
    <UIKit.Spin size="s" />
    <UIKit.Spin size="m" />
    <UIKit.Spin size="l" />
    <UIKit.Spin size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Spin size="xs" />
<Spin size="s" />
<Spin size="m" />
<Spin size="l" />
<Spin size="xl" />
```

<!--/GITHUB_BLOCK-->

`XS`:超小。

`S`:小，当中型旋转过大时使用。

`M`:中等（基本），在大多数情况下使用。

`L`:大，当中型旋转过小时使用。

`XL`:超大号。

## 属性

| 姓名      | 描述                    |         类型          | 默认  |
| :-------- | :---------------------- | :-------------------: | :---: |
| 尺寸      | 旋转大小                |     `"xs"` `"xl"`     | `"m"` |
| 风格      | 根元素的自定义 CSS 样式 | `React.CSSProperties` |       |
| className | 根元素的自定义 CSS 类   |       `string`        |       |
| qa        | 测试属性 (`data-qa`)    |       `string`        |       |
