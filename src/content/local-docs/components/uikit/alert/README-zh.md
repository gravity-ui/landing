<!--GITHUB_BLOCK-->

# Alert

<!--/GITHUB_BLOCK-->

```tsx
import {Alert} from '@gravity-ui/uikit';
```

### 主题 (`theme`)

`normal`：主要主题（默认使用）。

`info`：用于任何常规信息。

`success`：用于积极信息。

`warning`：用于需要注意的信息。

`danger`：用于严重错误。

`utility`：用于有用的提示。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Alert theme="normal" title="Normal" message="Normal theme" />
<Alert theme="info" title="Info" message="Info theme" />
<Alert theme="success" title="Success" message="Success theme" />
<Alert theme="warning" title="Warning" message="Warning theme" />
<Alert theme="danger" title="Danger" message="Danger theme" />
<Alert theme="utility" title="utility" message="Utility theme" />
`}>
    <UIKit.Alert theme="normal" title="Normal" message="Normal theme" />
    <UIKit.Alert theme="info" title="Info" message="Info theme" />
    <UIKit.Alert theme="success" title="Success" message="Success theme" />
    <UIKit.Alert theme="warning" title="Warning" message="Warning theme" />
    <UIKit.Alert theme="danger" title="Danger" message="Danger theme" />
    <UIKit.Alert theme="utility" title="Utility" message="Utility theme" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Alert theme="normal" title="Normal" message="Normal theme"/>
<Alert theme="info" title="Info" message="Info theme"/>
<Alert theme="success" title="Success" message="Success theme"/>
<Alert theme="warning" title="Warning" message="Warning theme"/>
<Alert theme="danger" title="Danger" message="Danger theme"/>
<Alert theme="utility" title="Utility" message="Utility theme"/>
```

<!--/GITHUB_BLOCK-->

### 视图 (`view`)

`filled`：用于调整警告框的背景颜色（默认使用）。

`outlined`：用于调整警告框的边框颜色。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Alert title="Filled" message="Filled view" view="filled" />
<Alert title="Outlined" message="Outlined theme" view="outlined" />
`}
>
    <UIKit.Alert title="Filled" message="Filled view" view="filled" />
    <UIKit.Alert title="Outlined" message="Outlined theme" view="outlined" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```
<Alert title="Filled" message="Filled view" view="filled" />
<Alert title="Outlined" message="Outlined theme" view="outlined" />
```

<!--/GITHUB_BLOCK-->

### 布局 (`layout`)

`vertical`：如果有带按钮的 `actions` 属性，用于引导用户到内容。它允许在文本下方显示按钮（默认使用）。

`horizontal`：如果有带按钮的 `actions` 属性，用于引导用户到内容。它允许在文本右侧显示按钮。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Alert layout="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>} />
<Alert layout="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>} />
`}>
    <UIKit.Alert layout="vertical" title="Vertical" message="Vertical direction" actions={<UIKit.Alert.Action>button</UIKit.Alert.Action>} />
    <UIKit.Alert layout="horizontal" title="Horizontal" message="Horizontal direction" actions={<UIKit.Alert.Action>button</UIKit.Alert.Action>} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Alert layout="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>}/>
<Alert layout="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>}/>
```

<!--/GITHUB_BLOCK-->

### 边角 (`corners`)

`rounded`：启用警告框窗口的圆角（默认使用）。

`square`：启用警告框窗口的方角。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Alert title="Rounded" message="Rounded corners" corners="rounded"  />
<Alert title="Square" message="Square corners" corners="square" />
`}
>
    <UIKit.Alert title="Rounded" message="Rounded corners" corners="rounded"  />
    <UIKit.Alert title="Square" message="Square corners" corners="square" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Alert title="Rounded" message="Rounded corners" corners="rounded"/>
<Alert title="Square" message="Square corners" corners="square"/>
```

<!--/GITHUB_BLOCK-->

## 警告框标题

`title`：警告框标题。它的优先级低于 `Alert.Title`。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Alert title={<Alert.Title className={'some-class'} text="some text"></Alert.Title>} />
`}
>
    <UIKit.Alert title={<UIKit.Alert.Title className={'some-class'} text="some text"></UIKit.Alert.Title>} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Alert title={<Alert.Title className={'some-class'} text="some text"></Alert.Title>} />
```

<!--/GITHUB_BLOCK-->

## 警告框消息

`message`：警告框消息。它应该足够有意义，能够完全解释警告框的内容。

## `onClose`

`onClose`：当用户点击警告框的关闭按钮时调用的回调函数。当定义了此属性时，关闭按钮将可见。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Alert onClose={() => alert('Close button pressed')} title="Alert has close" message="Alert has close" />
`}
>
    <UIKit.Alert onClose={() => alert('Close button pressed')} title="Alert has close" message="Alert has close" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Alert
  onClose={() => alert('Close button pressed')}
  title="Alert has close"
  message="Alert has close"
/>
```

<!--/GITHUB_BLOCK-->

### 对齐 (`align`)

确定 `Alert` 组件内部内容的垂直对齐方式。

`baseline`：默认对齐方式。

`center`：内容在 `Alert` 组件内垂直居中。如果操作占用的空间比文本多，或者图标必须位于内容中间，这可能很有用。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Alert align="baseline" theme="info" title="Baseline" message="Baseline align" actions={<Alert.Action>button</Alert.Action>} />
<Alert align="center" theme="info" title="Center" message="Center align" actions={<Alert.Action>button</Alert.Action>} align="center"/>
`}>
    <UIKit.Alert align="baseline" theme="info" title="Baseline" message="Baseline align" actions={<UIKit.Alert.Action>button</UIKit.Alert.Action>} />
    <UIKit.Alert align="center" theme="info" title="Center" message="Center align" actions={<UIKit.Alert.Action>button</UIKit.Alert.Action>} align="center"/>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Alert align="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>}/>
<Alert align="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>}/>
```

<!--/GITHUB_BLOCK-->

## 属性

| 名称      | 描述                                              |                                类型                                |    默认值    |
| :-------- | :------------------------------------------------ | :----------------------------------------------------------------: | :----------: |
| theme     | 警告框外观                                        | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` |  `"normal"`  |
| view      | 启用/禁用警告框的背景颜色                         |                      `"filled"` `"outlined"`                       |  `"filled"`  |
| layout    | 如果有带按钮的 `actions` 属性，用于引导用户到内容 |                    `"vertical"` `"horizontal"`                     | `"vertical"` |
| corners   | 用于警告框窗口的圆角/方角                         |                       `"rounded"` `"square"`                       | `"rounded"`  |
| title     | 警告框标题                                        |                              `string`                              |              |
| message   | 警告框消息                                        |                         `React.ReactNode`                          |              |
| onClose   | 当用户点击警告框的关闭按钮时调用的回调函数        |                             `Function`                             |              |
| actions   | 按钮数组或完整的自定义组件                        |                 `React.ReactNode` `"AlertAction"`                  |              |
| align     | 确定 `Alert` 组件内部内容的垂直对齐方式           |                      `"center"` `"baseline"`                       | `"baseline"` |
| style     | HTML style 属性                                   |                       `React.CSSProperties`                        |              |
| className | 警告框类名                                        |                              `string`                              |              |
| icon      | 覆盖默认图标                                      |                         `React.ReactNode`                          |              |
| qa        | HTML `data-qa` 属性，用于测试                     |                              `string`                              |              |
