<!--GITHUB_BLOCK-->

# Loader

<!--/GITHUB_BLOCK-->

`Loader` 组件以闪烁的条形图显示加载进度。与 `Spin` 不同，此组件用于全局场景，例如整个页面或 `Dialog`。

```tsx
import {Loader} from '@gravity-ui/uikit';
```

### Size

<!--SANDBOX
import {Loader} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Loader size="s" />
            <Loader size="m" />
            <Loader size="l" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Loader size="s" />
<Loader size="m" />
<Loader size="l" />
```

<!--/GITHUB_BLOCK-->

`S`: 小尺寸，当常规加载器太大时使用。

`M`: 中等（基本）尺寸，在大多数情况下使用。

`L`: 大尺寸，当常规加载器太小时使用。

## Properties

| Name      | Description                           |       Type        | Default |
| :-------- | :------------------------------------ | :---------------: | :-----: |
| size      | Loader size                           | `"s"` `"m"` `"l"` |  `"s"`  |
| className | Custom CSS class for the root element |     `string`      |         |
