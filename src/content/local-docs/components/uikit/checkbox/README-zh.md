<!--GITHUB_BLOCK-->

# 复选框

<!--/GITHUB_BLOCK-->

```tsx
import {Checkbox} from '@gravity-ui/uikit';
```

该 `Checkbox` 组件允许用户选择或取消选择特定值。

## 国家

A `Checkbox` 可以有不同的状态：

- 已选中：复选框已勾选。
- 已禁用：该复选框不可用。
- 不确定：该复选框处于处于选中和未勾选之间的中间状态。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Checkbox size="l" checked={false}>Unchecked</Checkbox>
<Checkbox size="l" checked>Checked</Checkbox>
<Checkbox size="l" disabled>Disabled</Checkbox>
<Checkbox size="l" indeterminate>Indeterminate</Checkbox>
`}
>
    <UIKit.Checkbox size="l" checked={false}>Unchecked</UIKit.Checkbox>
    <UIKit.Checkbox size="l" checked>Checked</UIKit.Checkbox>
    <UIKit.Checkbox size="l" disabled>Disabled</UIKit.Checkbox>
    <UIKit.Checkbox size="l" indeterminate>Indeterminate</UIKit.Checkbox>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Checkbox size="l" checked={false}>Unchecked</Checkbox>
<Checkbox size="l" checked>Checked</Checkbox>
<Checkbox size="l" disabled>Disabled</Checkbox>
<Checkbox size="l" indeterminate>Indeterminate</Checkbox>
```

<!--/GITHUB_BLOCK-->

## 大小

使用该 `size` 属性来管理大 `Checkbox` 小。默认大小为 `m`。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Checkbox size="m">M Size</Checkbox>
<Checkbox size="l">L Size</Checkbox>
`}
>
    <UIKit.Checkbox size="m">M Size</UIKit.Checkbox>
    <UIKit.Checkbox size="l">L Size</UIKit.Checkbox>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Checkbox size="m">M Size</Checkbox>
<Checkbox size="l">L Size</Checkbox>
```

<!--/GITHUB_BLOCK-->

## 标签

您可以使用该 `content` 属性为分配标签，也可以将其作为子属性提供。 `Checkbox`

<!--LANDING_BLOCK

<ExampleBlock
    code={`
 <div>
  <Checkbox content="Content" size="l" />
  <div
      style={{
          marginTop: 10,
      }}
  >
      <Checkbox size="l">
          <span>Content as children</span>
      </Checkbox>
  </div>
</div>
`}
>
 <div>
  <UIKit.Checkbox content="Content" size="l" />
  <div
      style={{
          marginTop: 10,
      }}
  >
      <UIKit.Checkbox size="l">
          <span>Content as children</span>
      </UIKit.Checkbox>
  </div>
</div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Checkbox content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Checkbox size="l">
      <span>Content as children</span>
    </Checkbox>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## 属性

| 姓名           | 描述                                                     |                     类型                     |  默认   |
| :------------- | :------------------------------------------------------- | :------------------------------------------: | :-----: |
| 儿童           | 复选框内容（通常是标签）。                               |                 `ReactNode`                  |         |
| 内容           | 复选框内容（儿童替代方案）。                             |                 `ReactNode`                  |         |
| 残疾的         | 切换复选框的 `disabled` 状态。                           |                  `boolean`                   | `false` |
| 已检查         | 切换复选框的 `checked` 状态。                            |                  `boolean`                   | `false` |
| defaultChecked | 设置组件挂载时的初始检查状态。                           |                  `boolean`                   | `false` |
| onUpdate       | 当用户更改复选框状态并将选中的值作为回调参数提供时触发。 |         `(checked: boolean) => void`         |         |
| onChange       | 当用户更改复选框状态并将更改事件作为回调参数时触发。     |                  `Function`                  |         |
| onFocus        | 复选框输入元素获得焦点时使用的事件处理程序。             |                  `Function`                  |         |
| onBlur         | 复选框输入元素失去焦点时使用的事件处理程序。             |                  `Function`                  |         |
| 尺寸           | 确定复选框的大小。                                       |                   `m` `l`                    |   `m`   |
| id             | `id` HTML 属性                                           |                   `string`                   |         |
| qa             | `data-qa` HTML 属性，用于测试                            |                   `string`                   |         |
| 风格           | `style` HTML 属性                                        |            `React.CSSProperties`             |         |
| className      | `class` HTML 属性                                        |                   `string`                   |         |
| 标题           | `title` HTML 属性                                        |                   `string`                   |         |
| 名称           | `name` 输入元素的 HTML 属性。                            |                   `string`                   |         |
| 价值           | `value` 输入元素的 HTML 属性。                           |                   `string`                   |         |
| 不确定         | 切换复选框的 `indeterminate` 状态。                      |                  `boolean`                   | `false` |
| controlProps   | 底层输入元素的其他属性。                                 | `react.inputhtmlAtributes<HTMLInputElement>` |         |
| controlRef     | 引用底层输入元素。                                       |        `React.Ref<HTMLInputElement>`         |         |
