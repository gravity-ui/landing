<!--GITHUB_BLOCK-->

# Spin

<!--/GITHUB_BLOCK-->

`Spin` 组件在内联场景中显示加载状态（一个旋转的半圆）。与 `Loader` 不同，此组件用于在内联场景中显示加载状态，例如在 `Button` 或 `Label` 中。

```tsx
import {Spin} from '@gravity-ui/uikit';
```

### Size

<!--SANDBOX
import {Spin} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Spin size="xs" />
            <Spin size="s" />
            <Spin size="m" />
            <Spin size="l" />
            <Spin size="xl" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Spin size="xs" />
<Spin size="s" />
<Spin size="m" />
<Spin size="l" />
<Spin size="xl" />
```

<!--/GITHUB_BLOCK-->

`XS`: Extra small (特小)。

`S`: Small (小)，当中等大小的 spin 太大时使用。

`M`: Medium (中等) (基础)，大多数情况使用。

`L`: Large (大)，当中等大小的 spin 太小时使用。

`XL`: Extra large (特大)。

## Properties

| Name      | Description                           |              Type               | Default |
| :-------- | :------------------------------------ | :-----------------------------: | :-----: |
| size      | Spin size (Spin 大小)                 | `"xs"` `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| style     | Custom CSS styles for root element (根元素的自定义 CSS 样式) |      `React.CSSProperties`      |         |
| className | Custom CSS class for the root element (根元素的自定义 CSS 类名) |            `string`             |         |
| qa        | Test attribute (`data-qa`) (测试属性 (`data-qa`))            |            `string`             |         |

### CSS API

| Name             | Description                     |
| :--------------- | :------------------------------ |
| `--g-spin-color` | The main color of the component (组件的主颜色) |
