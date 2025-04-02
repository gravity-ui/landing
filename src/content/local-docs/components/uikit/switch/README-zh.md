<!--GITHUB_BLOCK-->

# 开关

<!--/GITHUB_BLOCK-->

```tsx
import {Switch} from '@gravity-ui/uikit';
```

该 `Switch` 组件用于在两种状态之间切换：通常是在开启 **和** 关闭之间 **，或者** 在 **启用** 和 **禁用之间**。

## 国家

A `Switch` 可以有不同的状态：

- 已选中：当交换机处 **于 On** 状态时。
- 已禁用：当交换机不可用时。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Switch size="l" checked={false}>Unchecked</Switch>
<Switch size="l" checked>Checked</Switch>
<Switch size="l" disabled>Disabled</Switch>
`}
>
    <UIKit.Switch size="l" checked={false}>Unchecked</UIKit.Switch>
    <UIKit.Switch size="l" checked>Checked</UIKit.Switch>
    <UIKit.Switch size="l" disabled>Disabled</UIKit.Switch>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="l" checked={false}>Unchecked</Switch>
<Switch size="l" checked>Checked</Switch>
<Switch size="l" disabled>Disabled</Switch>
```

<!--/GITHUB_BLOCK-->

## 大小

使用该 `size` 属性来管理大 `Switch` 小。默认大小为 `m`。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Switch size="m">M Size</Switch>
<Switch size="l">L Size</Switch>
`}
>
    <UIKit.Switch size="m">M Size</UIKit.Switch>
    <UIKit.Switch size="l">L Size</UIKit.Switch>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Switch size="m">M Size</Switch>
<Switch size="l">L Size</Switch>
```

<!--/GITHUB_BLOCK-->

## 标签

您可以使用该 `content` 属性为分配标签，也可以将其作为子属性提供。 `Switch`

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<div>
  <Switch content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Switch size="l">
      <span>Content as children</span>
    </Switch>
  </div>
</div>
`}
>
<div>
  <UIKit.Switch content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <UIKit.Switch size="l">
      <span>Content as children</span>
    </UIKit.Switch>
  </div>
</div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Switch content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Switch size="l">
      <span>Content as children</span>
    </Switch>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## 属性

| 姓名           | 描述                                                   |                     类型                     |  默认   |
| :------------- | :----------------------------------------------------- | :------------------------------------------: | :-----: |
| 儿童           | 交换机的内容（通常是标签）                             |                 `ReactNode`                  |         |
| 内容           | 交换机的内容（儿童替代方案）                           |                 `ReactNode`                  |         |
| 残疾的         | 切换交换机的 `disabled` 状态                           |                  `boolean`                   | `false` |
| 已检查         | 切换交换机的 `checked` 状态                            |                  `boolean`                   | `false` |
| defaultChecked | 设置组件挂载时的初始检查状态                           |                  `boolean`                   | `false` |
| onUpdate       | 当用户更改开关状态时触发，并将检查值作为回调参数提供   |         `(checked: boolean) => void`         |         |
| onChange       | 当用户更改开关状态时触发，并将更改事件作为回调参数提供 |                  `Function`                  |         |
| onFocus        | 开关输入元素获得焦点时使用的事件处理程序               |                  `Function`                  |         |
| onBlur         | 当开关输入元素失去焦点时使用的事件处理器               |                  `Function`                  |         |
| 尺寸           | 设置交换机的大小                                       |                   `m` `l`                    |   `m`   |
| id             | `id` HTML 属性                                         |                   `string`                   |         |
| qa             | `data-qa` HTML 属性，用于测试                          |                   `string`                   |         |
| 风格           | `style` HTML 属性                                      |            `React.CSSProperties`             |         |
| className      | `class` HTML 属性                                      |                   `string`                   |         |
| 标题           | `title` HTML 属性                                      |                   `string`                   |         |
| 名称           | `name` 输入元素的 HTML 属性                            |                   `string`                   |         |
| 价值           | `value` 输入元素的 HTML 属性                           |                   `string`                   |         |
| 不确定         | 切换交换机的不确定状态                                 |                  `boolean`                   | `false` |
| controlProps   | 底层输入元素的其他属性                                 | `react.inputhtmlAtributes<HTMLInputElement>` |         |
| controlRef     | 引用底层输入元素                                       |        `React.Ref<HTMLInputElement>`         |         |
