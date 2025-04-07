<!--GITHUB_BLOCK-->

# 电台

<!--/GITHUB_BLOCK-->

```tsx
import {Radio} from '@gravity-ui/uikit';
```

该 `Radio` 组件允许用户从选项列表中选择一个选项。

## 国家

`Radio` 可以有以下状态：

- 已选中：已选择电台。
- 已禁用：电台不可选择。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Radio value="option 1" content="Unchecked" size="l" checked={false}/>
<Radio value="option 2" content="Checked" size="l" checked/>
<Radio value="option 3" content="Disabled" size="l" disabled/>
`}
>
    <UIKit.Radio value="option 1" content="Unchecked" size="l" checked={false}/>
    <UIKit.Radio value="option 2" content="Checked" size="l" checked/>
    <UIKit.Radio value="option 3" content="Disabled" size="l" disabled/>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Radio value="option 1" content="Unchecked" size="l" checked={false}/>
<Radio value="option 2" content="Checked" size="l" checked/>
<Radio value="option 3" content="Disabled" size="l" disabled/>
```

<!--/GITHUB_BLOCK-->

## 大小

要管理大 `Radio` 小，请使用该 `size` 属性。默认大小为 `m`。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Radio value="option 1" content="M Size" size="m"/>
<Radio value="option 2" content="L Size" size="l"/>
`}
>
    <UIKit.Radio value="option 1" content="M Size" size="m"/>
    <UIKit.Radio value="option 2" content="L Size" size="l"/>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Radio value="option 1" content="M Size" size="m"/>
<Radio value="option 2" content="L Size" size="l"/>
```

<!--/GITHUB_BLOCK-->

## 标签

您可以使用该 `content` 属性为分配标签，也可以将其作为子属性提供。 `Radio`

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<div>
  <Radio content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Radio size="l">
      <span>Content as children</span>
    </Radio>
  </div>
</div>
`}
>
<div>
  <UIKit.Radio content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <UIKit.Radio size="l">
      <span>Content as children</span>
    </UIKit.Radio>
  </div>
</div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<div>
  <Radio content="Content" size="l" />
  <div
    style={{
      marginTop: 10,
    }}
  >
    <Radio size="l">
      <span>Content as children</span>
    </Radio>
  </div>
</div>
```

<!--/GITHUB_BLOCK-->

## 属性

| 姓名           | 描述                                                       |                     类型                     |  默认   |
| :------------- | :--------------------------------------------------------- | :------------------------------------------: | :-----: |
| 儿童           | 电台的内容（通常是标签）。                                 |                 `ReactNode`                  |         |
| 内容           | 电台的内容（儿童替代品）。                                 |                 `ReactNode`                  |         |
| 残疾的         | 切换无线电的 `disabled` 状态。                             |                  `boolean`                   | `false` |
| 已检查         | 切换无线电的 `checked` 状态。                              |                  `boolean`                   | `false` |
| defaultChecked | 设置组件挂载时的初始检查状态                               |                  `boolean`                   | `false` |
| onUpdate       | 当用户更改无线电状态时触发，并将检查值作为回调参数提供。   |         `(checked: boolean) => void`         |         |
| onChange       | 当用户更改无线电状态时触发，并将更改事件作为回调参数提供。 |                  `Function`                  |         |
| onFocus        | 无线电输入元素获得焦点时使用的事件处理程序。               |                  `Function`                  |         |
| onBlur         | 无线电输入元素失去焦点时使用的事件处理程序。               |                  `Function`                  |         |
| 尺寸           | 设置收音机的大小。                                         |                   `m` `l`                    |   `m`   |
| id             | `id` HTML 属性                                             |                   `string`                   |         |
| qa             | `data-qa` HTML 属性，用于测试。                            |                   `string`                   |         |
| 风格           | `style` HTML 属性                                          |            `React.CSSProperties`             |         |
| className      | `class` HTML 属性                                          |                   `string`                   |         |
| 标题           | `title` HTML 属性                                          |                   `string`                   |         |
| 名称           | `name` 输入元素的 HTML 属性                                |                   `string`                   |         |
| 价值           | 控制值                                                     |                   `string`                   |         |
| 不确定         | 切换无线电的不确定状态。                                   |                  `boolean`                   | `false` |
| controlProps   | 底层输入元素的其他属性                                     | `react.inputhtmlAtributes<HTMLInputElement>` |         |
| controlRef     | 引用底层输入元素                                           |        `React.Ref<HTMLInputElement>`         |         |
