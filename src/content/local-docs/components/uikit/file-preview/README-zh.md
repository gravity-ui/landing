<!--GITHUB_BLOCK-->

# FilePreview

<!--/GITHUB_BLOCK-->

`FilePreview` 是一个紧凑的文件预览卡片，显示缩略图或文件类型图标以及文件名和可选操作。

```tsx
import {FilePreview} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

```tsx
<FilePreview
  file={{name: 'my-file.docs', type: 'text/docs'} as File}
  onClick={() => action('onClick')}
  actions={[
    {
      icon: <Link width={14} height={14} />,
      title: 'Link',
      onClick: () => action('onLink'),
    },
    {
      icon: <Xmark width={14} height={14} />,
      title: 'Close',
      onClick: () => action('onClose'),
    },
  ]}
/>
```

<!-- Storybook example -->

<FilePreviewExample />

<!--/GITHUB_BLOCK-->

<!--SANDBOX
import {Link, Xmark} from '@gravity-ui/icons';
import {FilePreview} from '@gravity-ui/uikit';

export default function () {
    return (
        <FilePreview
            file={{name: 'my-file.docs', type: 'text/docs'} as File}
            onClick={() => console.log('onClick')}
            actions={[
                {
                    icon: <Link width={14} height={14} />,
                    title: 'Link',
                    onClick: () => console.log('onLink'),
                },
                {
                    icon: <Xmark width={14} height={14} />,
                    title: 'Close',
                    onClick: () => console.log('onClose'),
                },
            ]}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

## 属性 (Properties)

| 名称 (Name)         | 描述 (Description)                                                                                             | 类型 (Type)           | 是否必填 (Required) | 默认值 (Default) |
| :------------------ | :------------------------------------------------------------------------------------------------------------- | :-------------------- | :-----------------: | :--------------- |
| file                | `File` 接口提供有关文件的信息，并允许网页中的 JavaScript 访问其内容。                                             | `File`                |          ✓          |                  |
| imageSrc            | 图片预览的源                                                                                                   | `string`              |                     |                  |
| description         | 显示在文件名下方的描述                                                                                         | `string`              |                     |                  |
| selected            | 启用或禁用选中样式                                                                                             | `boolean`             |                     | `false`          |
| className           | 文件容器的类名                                                                                                 | `string`              |                     |                  |
| onClick             | 文件容器的点击处理程序                                                                                         | `function`            |                     |                  |
| [actions](#actions) | 可交互操作的数组                                                                                               | `FilePreviewAction[]` |                     | `[]`             |
| view                | 文件预览视图模式（在 `compact` 视图中，文本不可见）                                                              | `default`, `compact`  |                     | `default`        |

#### 操作 (Actions)

对于文件，您可以指定在鼠标悬停在其上时可见的操作。

| 名称 | 描述 | 类型 | 是否必填 | 默认值 |
| ----------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | ------- |
| id | 操作 ID | `String` |  |  |
| icon | 操作图标 | `React.ReactNode` |    ✓     |  |
| title | 悬停时显示的操作提示 | `String` |    ✓     |  |
| onClick | 操作点击处理函数 | 默认视图为 `React.MouseEventHandler<HTMLElement>`，紧凑视图为 `(event: React.MouseEvent<HTMLElement, MouseEvent> or KeyboardEvent) => void` |  |  |
| href | 操作按钮的链接 | `String` |  |  |
| disabled | 操作是否禁用 | `boolean` |  |  |
| extraProps | 其他操作按钮属性 | `ButtonButtonProps or ButtonLinkProps` (仅适用于默认桌面视图) |  |  |
| tooltipExtraProps | 其他操作工具提示属性 | `Omit<ActionTooltipProps, 'title' or 'children'>` (仅适用于默认桌面视图) |  |  |
