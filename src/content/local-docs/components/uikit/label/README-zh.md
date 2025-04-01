<!--GITHUB_BLOCK-->

# 标签

<!--/GITHUB_BLOCK-->

```tsx
import {Label} from '@gravity-ui/uikit';
```

您可以使用 `Label`s 来突出显示某些信息。`Label` 带有 `Close` 或 `Copy` 按钮的对各种简单操作可能很有用。

`Label`s 最适合显示具有不同颜色代码的单行文本信息，以显示其重要性。

## 外观

A `Label` 可以以多种样式显示。

### 主题

使用该 `theme` 属性为不同的状态应用不同的主题。您可以使用以下值： `normal` 、、 `info` `success` 、 `warning` 、 `danger` 、 `utility` `unknown` 、和 `clear`。
默认主题是 `normal`。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Label theme="normal">Normal</Label>
<Label theme="info">Info</Label>
<Label theme="success">Success</Label>
<Label theme="warning">Warning</Label>
<Label theme="danger">Danger</Label>
<Label theme="utility">Utility</Label>
<Label theme="unknown">Unknown</Label>
<Label theme="clear">Clear</Label>
`}
>
    <UIKit.Label theme="normal">Normal</UIKit.Label>
    <UIKit.Label theme="info">Info</UIKit.Label>
    <UIKit.Label theme="success">Success</UIKit.Label>
    <UIKit.Label theme="warning">Warning</UIKit.Label>
    <UIKit.Label theme="danger">Danger</UIKit.Label>
    <UIKit.Label theme="utility">Utility</UIKit.Label>
    <UIKit.Label theme="unknown">Unknown</UIKit.Label>
    <UIKit.Label theme="clear">Clear</UIKit.Label>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal">Normal</Label>
<Label theme="info">Info</Label>
<Label theme="success">Success</Label>
<Label theme="warning">Warning</Label>
<Label theme="danger">Danger</Label>
<Label theme="utility">Utility</Label>
<Label theme="unknown">Unknown</Label>
<Label theme="clear">Clear</Label>
```

<!--/GITHUB_BLOCK-->

### 类型

该 `type` 属性向：添加了各种选项 `Label`：

`copy`:添加复制按钮；单击时，它会复制该 `copyText` 属性的值。

`close`:添加用于管理标签列表的关闭按钮。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Label type="default" onClick={() => alert('On click label')} size="s">Clickable</Label>
<Label type="close" onCloseClick={() => alert('On click close')} size="s">Closable</Label>
<Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">Copy</Label>
`}
>
    <UIKit.Label type="default" onClick={() => alert('On click label')} size="s">Clickable</UIKit.Label>
    <UIKit.Label type="close" onCloseClick={() => alert('On click close')} size="s">Closable</UIKit.Label>
    <UIKit.Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">Copy</UIKit.Label>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Label type="default" onClick={() => alert('On click label')} size="s">Clickable</Label>
<Label type="close" onCloseClick={() => alert('On click close')} size="s">Closable</Label>
<Label type="copy" copyText="Copy" onCopy={() => alert('On copy')} size="s">Copy</Label>
```

<!--/GITHUB_BLOCK-->

### 图标

您可以使用该 `icon` 属性添加图标。为此，请使用该 [`Icon`](../Icon) 组件，它是 SVG 的特殊包装器。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Label icon={<Icon size={16} data={GearIcon} />}>Icon</Label>
<Label type="close" icon={<Icon size={16} data={GearIcon} />}>Icon and close</Label>
<Label type="copy" icon={<Icon size={16} data={GearIcon} />}>Icon and copy</Label>
`}
>
    <UIKit.Label icon={
        <UIKit.Icon data={() => (
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" class="g-icon" fill="currentColor" stroke="none" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M7.199 2H8.8a.2.2 0 0 1 .2.2c0 1.808 1.958 2.939 3.524 2.034a.199.199 0 0 1 .271.073l.802 1.388a.199.199 0 0 1-.073.272c-1.566.904-1.566 3.164 0 4.069a.199.199 0 0 1 .073.271l-.802 1.388a.199.199 0 0 1-.271.073C10.958 10.863 9 11.993 9 13.8a.2.2 0 0 1-.199.2H7.2a.199.199 0 0 1-.2-.2c0-1.808-1.958-2.938-3.524-2.034a.199.199 0 0 1-.272-.073l-.8-1.388a.199.199 0 0 1 .072-.271c1.566-.905 1.566-3.165 0-4.07a.199.199 0 0 1-.073-.271l.801-1.388a.199.199 0 0 1 .272-.073C5.042 5.138 7 4.007 7 2.2c0-.11.089-.199.199-.199ZM5.5 2.2c0-.94.76-1.7 1.699-1.7H8.8c.94 0 1.7.76 1.7 1.7a.85.85 0 0 0 1.274.735 1.699 1.699 0 0 1 2.32.622l.802 1.388c.469.813.19 1.851-.622 2.32a.85.85 0 0 0 0 1.472 1.7 1.7 0 0 1 .622 2.32l-.802 1.388a1.699 1.699 0 0 1-2.32.622.85.85 0 0 0-1.274.735c0 .939-.76 1.7-1.699 1.7H7.2a1.7 1.7 0 0 1-1.699-1.7.85.85 0 0 0-1.274-.735 1.698 1.698 0 0 1-2.32-.622l-.802-1.388a1.699 1.699 0 0 1 .622-2.32.85.85 0 0 0 0-1.471 1.699 1.699 0 0 1-.622-2.321l.801-1.388a1.699 1.699 0 0 1 2.32-.622A.85.85 0 0 0 5.5 2.2Zm4 5.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd"></path></svg></svg>
        )} size={16} />
    }>
        <span>Icon</span>
    </UIKit.Label>
    <UIKit.Label type="close" icon={
        <UIKit.Icon data={() => (
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" class="g-icon" fill="currentColor" stroke="none" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M7.199 2H8.8a.2.2 0 0 1 .2.2c0 1.808 1.958 2.939 3.524 2.034a.199.199 0 0 1 .271.073l.802 1.388a.199.199 0 0 1-.073.272c-1.566.904-1.566 3.164 0 4.069a.199.199 0 0 1 .073.271l-.802 1.388a.199.199 0 0 1-.271.073C10.958 10.863 9 11.993 9 13.8a.2.2 0 0 1-.199.2H7.2a.199.199 0 0 1-.2-.2c0-1.808-1.958-2.938-3.524-2.034a.199.199 0 0 1-.272-.073l-.8-1.388a.199.199 0 0 1 .072-.271c1.566-.905 1.566-3.165 0-4.07a.199.199 0 0 1-.073-.271l.801-1.388a.199.199 0 0 1 .272-.073C5.042 5.138 7 4.007 7 2.2c0-.11.089-.199.199-.199ZM5.5 2.2c0-.94.76-1.7 1.699-1.7H8.8c.94 0 1.7.76 1.7 1.7a.85.85 0 0 0 1.274.735 1.699 1.699 0 0 1 2.32.622l.802 1.388c.469.813.19 1.851-.622 2.32a.85.85 0 0 0 0 1.472 1.7 1.7 0 0 1 .622 2.32l-.802 1.388a1.699 1.699 0 0 1-2.32.622.85.85 0 0 0-1.274.735c0 .939-.76 1.7-1.699 1.7H7.2a1.7 1.7 0 0 1-1.699-1.7.85.85 0 0 0-1.274-.735 1.698 1.698 0 0 1-2.32-.622l-.802-1.388a1.699 1.699 0 0 1 .622-2.32.85.85 0 0 0 0-1.471 1.699 1.699 0 0 1-.622-2.321l.801-1.388a1.699 1.699 0 0 1 2.32-.622A.85.85 0 0 0 5.5 2.2Zm4 5.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd"></path></svg></svg>
        )} size={16} />
    }>
        <span>Icon and close</span>
    </UIKit.Label>
    <UIKit.Label type="copy" icon={
        <UIKit.Icon data={() => (
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" class="g-icon" fill="currentColor" stroke="none" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M7.199 2H8.8a.2.2 0 0 1 .2.2c0 1.808 1.958 2.939 3.524 2.034a.199.199 0 0 1 .271.073l.802 1.388a.199.199 0 0 1-.073.272c-1.566.904-1.566 3.164 0 4.069a.199.199 0 0 1 .073.271l-.802 1.388a.199.199 0 0 1-.271.073C10.958 10.863 9 11.993 9 13.8a.2.2 0 0 1-.199.2H7.2a.199.199 0 0 1-.2-.2c0-1.808-1.958-2.938-3.524-2.034a.199.199 0 0 1-.272-.073l-.8-1.388a.199.199 0 0 1 .072-.271c1.566-.905 1.566-3.165 0-4.07a.199.199 0 0 1-.073-.271l.801-1.388a.199.199 0 0 1 .272-.073C5.042 5.138 7 4.007 7 2.2c0-.11.089-.199.199-.199ZM5.5 2.2c0-.94.76-1.7 1.699-1.7H8.8c.94 0 1.7.76 1.7 1.7a.85.85 0 0 0 1.274.735 1.699 1.699 0 0 1 2.32.622l.802 1.388c.469.813.19 1.851-.622 2.32a.85.85 0 0 0 0 1.472 1.7 1.7 0 0 1 .622 2.32l-.802 1.388a1.699 1.699 0 0 1-2.32.622.85.85 0 0 0-1.274.735c0 .939-.76 1.7-1.699 1.7H7.2a1.7 1.7 0 0 1-1.699-1.7.85.85 0 0 0-1.274-.735 1.698 1.698 0 0 1-2.32-.622l-.802-1.388a1.699 1.699 0 0 1 .622-2.32.85.85 0 0 0 0-1.471 1.699 1.699 0 0 1-.622-2.321l.801-1.388a1.699 1.699 0 0 1 2.32-.622A.85.85 0 0 0 5.5 2.2Zm4 5.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd"></path></svg></svg>
        )} size={16} />
    }>
        <span>Icon and copy</span>
    </UIKit.Label>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Label icon={<Icon size={16} data={GearIcon} />}>Icon</Label>
<Label type="close" icon={<Icon size={16} data={GearIcon} />}>Icon and close</Label>
<Label type="copy" icon={<Icon size={16} data={GearIcon} />}>Icon and copy</Label>
```

<!--/GITHUB_BLOCK-->

## 价值

可以使用 `Label`s 来显示键值信息。为此，您需要提供属性的密钥和值，以： `children` `value`

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Label theme="normal" value="Value">Key</Label>
<Label theme="info" value="Value">Key</Label>
<Label theme="success" value="Value">Key</Label>
<Label theme="warning" value="Value">Key</Label>
<Label theme="danger" value="Value">Key</Label>
<Label theme="utility" value="Value">Key</Label>
<Label theme="unknown" value="Value">Key</Label>
<Label theme="clear" value="Value">Key</Label>
`}
>
    <UIKit.Label theme="normal" value="Value">Key</UIKit.Label>
    <UIKit.Label theme="info" value="Value">Key</UIKit.Label>
    <UIKit.Label theme="success" value="Value">Key</UIKit.Label>
    <UIKit.Label theme="warning" value="Value">Key</UIKit.Label>
    <UIKit.Label theme="danger" value="Value">Key</UIKit.Label>
    <UIKit.Label theme="utility" value="Value">Key</UIKit.Label>
    <UIKit.Label theme="unknown" value="Value">Key</UIKit.Label>
    <UIKit.Label theme="clear" value="Value">Key</UIKit.Label>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Label theme="normal" value="Value">Key</Label>
<Label theme="info" value="Value">Key</Label>
<Label theme="success" value="Value">Key</Label>
<Label theme="warning" value="Value">Key</Label>
<Label theme="danger" value="Value">Key</Label>
<Label theme="utility" value="Value">Key</Label>
<Label theme="unknown" value="Value">Key</Label>
<Label theme="clear" value="Value">Key</Label>
```

<!--/GITHUB_BLOCK-->

## 州

A `label` 可以有不同的状态：

- `disabled`:不允许互动。
- `interactive`:使标签可悬停。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Label>Default</Label>
<Label disabled>Disabled</Label>
<Label interactive>Interactive</Label>
`}
>
    <UIKit.Label>Default</UIKit.Label>
    <UIKit.Label disabled>Disabled</UIKit.Label>
    <UIKit.Label interactive>Interactive</UIKit.Label>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Label>Default</Label>
<Label disabled>Disabled</Label>
<Label interactive>Interactive</Label>
```

<!--/GITHUB_BLOCK-->

## 大小

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Label size="xs">XS size</Label>
<Label size="s">S size</Label>
<Label size="m">M size</Label>
`}
>
    <UIKit.Label size="xs">XS size</UIKit.Label>
    <UIKit.Label size="s">S size</UIKit.Label>
    <UIKit.Label size="m">M size</UIKit.Label>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Label size="xs">XS size</Label>
<Label size="s">S size</Label>
<Label size="m">M size</Label>
```

<!--/GITHUB_BLOCK-->

## 属性

| 姓名             | 描述                                  |         类型          |    默认     |
| :--------------- | :------------------------------------ | :-------------------: | :---------: |
| 儿童             | 内容                                  |   `React.ReactNode`   |             |
| className        | `class` HTML 属性                     |       `string`        |             |
| closeButtonLabel | `aria-label` 关闭按钮的               |       `string`        |             |
| copyButtonLabel  | `aria-label` “复制” 按钮的            |       `string`        |             |
| copyText         | 要复制的文本                          |       `string`        |             |
| 残疾的           | 禁用状态                              |       `boolean`       |             |
| 图标             | 标签图标（在左边）                    |   `React.ReactNode`   |             |
| 互动的           | 启用悬停效果                          |       `boolean`       |             |
| onClick          | `click` 事件处理器                    |      `Function`       |             |
| onCloseClick     | 关闭按钮 `click` 事件处理器           |      `Function`       |             |
| onCopy           | `copy` 事件处理器                     |      `Function`       |             |
| 尺寸             | 标签尺寸                              |     `"xs"` `"m"`      |    `"s"`    |
| 主题             | 标签主题                              |       `string`        | `"normal"`  |
| 类型             | 标签类型                              | `"default"` `"close"` | `"default"` |
| 价值             | 标签值（显示为 `"children : value"`） |       `string`        |             |
| 标题             | `title` HTML 属性                     |       `string`        |             |
| qa               | `data-qa` HTML 属性，用于测试         |       `string`        |             |
