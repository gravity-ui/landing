<!--GITHUB_BLOCK-->

# 进展

<!--/GITHUB_BLOCK-->

```tsx
import {Progress} from '@gravity-ui/uikit';
```

该 `Progress` 组件显示当前操作进度。它也可以分为几个部分。

## 主题

使用该 `theme` 属性指定整个进度或复合部分的颜色：

<!--LANDING_BLOCK

<ExampleBlock
  code={`
<Progress text="default" value={50} />
<Progress text="warning" theme="warning" value={50} />
<Progress text="info" theme="info" value={50} />
<Progress text="success" theme="success" value={50} />
<Progress text="danger" theme="danger" value={50} />
<Progress text="misc" theme="misc" value={50} />
`}
>
  <div style={{width: '30%'}}>
    <UIKit.Progress text="default" value={50} />
    <div style={{height: '15px'}} />
    <UIKit.Progress text="success" theme="success" value={50} />
  </div>
  <div style={{width: '30%'}}>
    <UIKit.Progress text="warning" theme="warning" value={50} />
    <div style={{height: '15px'}} />
    <UIKit.Progress text="danger" theme="danger" value={50} />
  </div>
  <div style={{width: '30%'}}>
    <UIKit.Progress text="info" theme="info "value={50} />
    <div style={{height: '15px'}} />
    <UIKit.Progress text="misc" theme="misc" value={50} />
  </div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Progress text="default" value={50} />
<Progress text="warning" theme="warning" value={50} />
<Progress text="info" theme="info" value={50} />
<Progress text="success" theme="success" value={50} />
<Progress text="danger" theme="danger" value={50} />
<Progress text="misc" theme="misc" value={50} />
```

<!--/GITHUB_BLOCK-->

## 国家

<!--LANDING_BLOCK

<ExampleBlock
  code={`
<Progress text="Loading" theme="misc" value={60} loading={true} />
`}
>
  <div style={{width: '30%'}}>
    <UIKit.Progress text="Loading" theme="misc" value={60} loading={true} />
  </div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Progress text="Loading" theme="misc" value={60} loading={true} />
```

<!--/GITHUB_BLOCK-->

## 大小

要管理 `Progress` 组件的大小，请使用可以取以下值的 `size` 属性： `"xs"` `"s"` 、和 `"m"`。该 `text` 属性仅适用于大 `"m"` 小。

<!--LANDING_BLOCK

<ExampleBlock
  code={`
<Progress theme="success" value={60} size="xs" />
<Progress theme="warning" value={70} size="s" />
<Progress theme="danger" value={80} size="m" />
`}
>
  <div style={{width: '30%'}}><UIKit.Progress theme="success" value={60} size="xs" /></div>
  <div style={{width: '30%'}}><UIKit.Progress theme="warning" value={70} size="s" /></div>
  <div style={{width: '30%'}}><UIKit.Progress theme="danger" value={80} size="m" /></div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Progress theme="success" value={60} size="xs" />
<Progress theme="warning" value={70} size="s" />
<Progress theme="danger" value={80} size="m" />
```

<!--/GITHUB_BLOCK-->

## 断点

使用该 `colorStops` 属性设置 `Progress` 组件的断点。

<!--LANDING_BLOCK

<ExampleBlock
  code={`
<Progress
  value={10}
  colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]}
/>
<Progress
  value={40}
  colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]}
/>
<Progress
  value={60}
  colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]}
/>
`}
>
  <div style={{width: '30%'}}>
    <UIKit.Progress
      value={10}
      colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]}
    />
  </div>
  <div style={{width: '30%'}}>
    <UIKit.Progress
      value={40}
      colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]}
    />
  </div>
  <div style={{width: '30%'}}>
    <UIKit.Progress
      value={60}
      colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]}
    />
  </div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Progress value={10} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
<Progress value={40} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
<Progress value={60} colorStops={[{theme: 'danger', stop: 20}, {theme: 'warning', stop: 50}, {theme: 'success', stop: 100}]} />
```

<!--/GITHUB_BLOCK-->

## 堆栈

<!--LANDING_BLOCK

<ExampleBlock
  code={`
<Progress
  stack={[
    {theme: 'default', content: 'First', value: 25},
    {theme: 'success', content: 'Second', value: 25},
    {theme: 'warning', content: 'Third', value: 25},
    {theme: 'danger', content: 'Fourth', value: 25},
  ]}
/>
<Progress text="Progress with custom colors"
  stack={[
    {color: '#6e5d8c', value: 33.333333333333336},
    {color: '#5b785b', value: 33.333333333333336},
    {color: '#956069', value: 33.333333333333336},
  ]}
/>
`}
>
<div style={{width: '30%'}}>
  <UIKit.Progress
    stack={[
      {theme: 'default', content: 'First', value: 25},
      {theme: 'success', content: 'Second', value: 25},
      {theme: 'warning', content: 'Third', value: 25},
      {theme: 'danger', content: 'Fourth', value: 25},
    ]}
  />
</div>
<div style={{width: '30%'}}>
  <UIKit.Progress text="Progress with custom colors"
    stack={[
      {color: '#6e5d8c', value: 33.333333333333336},
      {color: '#5b785b', value: 33.333333333333336},
      {color: '#956069', value: 33.333333333333336},
    ]}
  />
</div>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Progress stack={[
  {theme: 'default', content: 'First', value: 25},
  {theme: 'success', content: 'Second', value: 25},
  {theme: 'warning', content: 'Third', value: 25},
  {theme: 'danger', content: 'Fourth', value: 25},
]} />
<Progress text="Progress with custom colors" stack={[
  {color: '#6e5d8c', value: 33.333333333333336},
  {color: '#5b785b', value: 33.333333333333336},
  {color: '#956069', value: 33.333333333333336},
]} />
```

<!--/GITHUB_BLOCK-->

## 属性

| 姓名            | 描述                                                                                |                  类型                  |    默认     |
| :-------------- | :---------------------------------------------------------------------------------- | :------------------------------------: | :---------: |
| className       | HTML `class` 属性                                                                   |                `string`                |             |
| colorStops      | 使用主题设置断点                                                                    | `数组<{theme: string; stop: number;}>` |             |
| colorStopsValue | 设置用于选择 ColorStops 的当前停靠点或替代值的值。可用范围介于 0 到 100 之间。      |                `number`                |             |
| 加载中          | 切换 `loading` 状态                                                                 |               `boolean`                |   `false`   |
| 尺寸            | 设置进度条大小。进度栏文本只能按大 `"m"` 小显示。                                   |                `string`                |    `"m"`    |
| 堆              | 复合进度条的配置。如果提供了， `value` 则不是必填项。                               |             `数组<Stack>`              |             |
| stackClassName  | 堆栈 `class` 的 HTML 属性                                                           |                `string`                |             |
| 文本            | 进度栏内的文字                                                                      |              `ReactNode`               |             |
| 主题            | 设置进度颜色                                                                        |                `string`                | `"default"` |
| 价值            | 当前进度值。可用范围介于 0 到 100 之间。使用该 `stack` 属性值是可选的，用作最大值。 |                `number`                |             |

### `Stack`

| 姓名      | 描述                                                                                     |    类型     |    默认     |
| :-------- | :--------------------------------------------------------------------------------------- | :---------: | :---------: |
| className | `class` 堆栈元素的 HTML 属性                                                             |  `string`   |             |
| 颜色      | 设置 `style` HTML 属性的背景颜色                                                         |  `string`   |             |
| 内容      | 堆栈元素内容                                                                             | `ReactNode` |             |
| 标题      | `title` HTML 属性                                                                        |  `string`   |             |
| 主题      | 设置堆栈元素的颜色                                                                       |  `string`   | `"default"` |
| 价值      | 当前进度值。可用范围介于 0 到 100 之间。使用该 `stack` 属性值是可选的，用作 `maxValue`。 |  `number`   |             |
| qa        | `data-qa` HTML 属性，用于测试                                                            |  `string`   |             |

## CSS API

| 姓名                                   | 描述                       |
| :------------------------------------- | :------------------------- |
| `--g-progress-empty-text-color`        | 空白的 `Progress` 文字颜色 |
| `--g-progress-filled-text-color`       | 填充的 `Progress` 文字颜色 |
| `--g-progress-empty-background-color`  | 空白的 `Progress` 背景颜色 |
| `--g-progress-filled-background-color` | 填充的 `Progress` 背景颜色 |
