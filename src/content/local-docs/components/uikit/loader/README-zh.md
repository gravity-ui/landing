<!--GITHUB_BLOCK-->

# 装载机

<!--/GITHUB_BLOCK-->

```tsx
import {Loader} from '@gravity-ui/uikit';
```

该 `Loader` 组件以闪烁条显示加载进度。与之不同的是 `Spin` ，此组件用于全局场景，例如，用于整个页面或 `Dialog`.

### 大小

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Loader size="s" />
<Loader size="m" />
<Loader size="l" />
`}
>
    <UIKit.Loader size="s" />
    <UIKit.Loader size="m" />
    <UIKit.Loader size="l" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Loader size="s" />
<Loader size="m" />
<Loader size="l" />
```

<!--/GITHUB_BLOCK-->

`S`:体积小，在普通装载机过大时使用。

`M`:中号（基本）尺寸，在大多数情况下使用。

`L`:大尺寸，在普通装载机太小时使用。

## 属性

| 姓名      | 描述                  |    类型     | 默认  |
| :-------- | :-------------------- | :---------: | :---: |
| 尺寸      | 装载机尺寸            | `"s"` `"l"` | `"s"` |
| className | 根元素的自定义 CSS 类 |  `string`   |       |
