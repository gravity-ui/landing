<!--GITHUB_BLOCK-->

# 选项卡组件

<!--/GITHUB_BLOCK-->

```tsx
import {TabProvider, TabList, Tab, TabPanel} from '@gravity-ui/uikit';
```

选项卡组件用于浏览、组织内容并在不同视图之间切换。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<TabProvider value={activeTab} onUpdate={setActiveTab}>
    <TabList>
        <Tab value="first">First Tab</Tab>
        <Tab value="second">Active Tab</Tab>
        <Tab value="third" disabled>Disabled Tab</Tab>
    </TabList>
    <div>
        <TabPanel value="first">First Panel</TabPanel>
        <TabPanel value="second">Second Panel</TabPanel>
        <TabPanel value="third">Third Panel</TabPanel>
    </div>
</TabProvider>
`}
>
    <UIKit.TabProvider value="first">
        <UIKit.TabList>
            <UIKit.Tab value="first">First Tab</UIKit.Tab>
            <UIKit.Tab value="second">Active Tab</UIKit.Tab>
            <UIKit.Tab value="third" disabled>Disabled Tab</UIKit.Tab>
        </UIKit.TabList>
        <div>
            <UIKit.TabPanel value="first">First Panel</UIKit.TabPanel>
            <UIKit.TabPanel value="second">Second Panel</UIKit.TabPanel>
            <UIKit.TabPanel value="third">Third Panel</UIKit.TabPanel>
        </div>
    </UIKit.TabProvider>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
const [activeTab, setActiveTab] = React.useState('second');

return (
  <TabProvider value={activeTab} onUpdate={setActiveTab}>
    <TabList>
      <Tab value="first">First Tab</Tab>
      <Tab value="second">Active Tab</Tab>
      <Tab value="third" disabled>
        Disabled Tab
      </Tab>
    </TabList>
    <div>
      <TabPanel value="first">First Panel</TabPanel>
      <TabPanel value="second">Second Panel</TabPanel>
      <TabPanel value="third">Third Panel</TabPanel>
    </div>
  </TabProvider>
);
```

<!--/GITHUB_BLOCK-->

### 组件

- [选项卡组件](#选项卡组件)
  - [组件](#组件)
  - [TabProvider](#tabprovider)
    - [属性](#属性)
  - [TabList](#tablist)
    - [大小](#大小)
    - [属性](#属性-1)
  - [选项卡](#选项卡)
    - [图标](#图标)
    - [国家](#国家)
    - [计数器](#计数器)
    - [标签](#标签)
    - [属性](#属性-2)
  - [TabPanel](#tabpanel)
    - [属性](#属性-3)
  - [CSS API](#css-api)

## TabProvider

提供选项卡选择功能的组件

### 属性

| 姓名     | 描述                                     |           类型            | 默认 |
| :------- | :--------------------------------------- | :-----------------------: | :--: |
| 儿童     | 选项卡和选项卡面板列表，可能有一些包装器 |     `React.ReactNode`     |      |
| 价值     | 当前选项卡值                             |         `string`          |      |
| onUpdate | 更新选项卡处理器                         | `(value: string) => void` |      |

## TabList

用作一组容器的组件 `tabs`

### 大小

要控制大小， `tabs` 请使用该 `size` 属性。默认大小为 `m`。

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<TabList value="second" size="m">
    <Tab value="first">M Size first</Tab>
    <Tab value="second">M Size second</Tab>
</TabList>

<TabList value="second" size="l">
    <Tab value="first">L Size first</Tab>
    <Tab value="second">L Size second</Tab>
</TabList>

<TabList value="second" size="xl">
    <Tab value="first">XL Size first</Tab>
    <Tab value="second">v Size second</Tab>
</TabList>
`}
>
    <UIKit.TabList value="second" size="m">
        <UIKit.Tab value="first">M Size first</UIKit.Tab>
        <UIKit.Tab value="second">M Size second</UIKit.Tab>
    </UIKit.TabList>

    <UIKit.TabList value="second" size="l">
        <UIKit.Tab value="first">L Size first</UIKit.Tab>
        <UIKit.Tab value="second">L Size second</UIKit.Tab>
    </UIKit.TabList>

    <UIKit.TabList value="second" size="xl">
        <UIKit.Tab value="first">XL Size first</UIKit.Tab>
        <UIKit.Tab value="second">v Size second</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="second" size="m">
    <Tab value="first">M Size first</Tab>
    <Tab value="second">M Size second</Tab>
</TabList>
<TabList value="second" size="l">
    <Tab value="first">L Size first</Tab>
    <Tab value="second">L Size second</Tab>
</TabList>
<TabList value="second" size="xl">
    <Tab value="first">XL Size first</Tab>
    <Tab value="second">v Size second</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### 属性

| 姓名            | 描述                                                       |           类型            |  默认   |
| :-------------- | :--------------------------------------------------------- | :-----------------------: | :-----: |
| 儿童            | 选项卡列表，可能有一些包装器                               |     `React.ReactNode`     |         |
| 价值            | 当前选项卡值                                               |         `string`          |         |
| onUpdate        | 更新选项卡处理器                                           | `(value: string) => void` |         |
| className       | 元素的 CSS 类                                              |         `string`          |         |
| activateOnFocus | 在对焦时激活选项卡。仅在可以立即显示面板内容时才使用此选项 |         `boolean`         | `false` |
| 尺寸            | 元素大小                                                   |       `"m"` `"xl"`        |  `"m"`  |
| qa              | HTML `data-qa` 属性，用于测试                              |         `string`          |         |

## 选项卡

此组件用于渲染选项卡项目。

### 图标

在需要显示选项卡项目的图标时使用。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TabList value="first">
    <Tab value="first" icon={<Icon size={16} data={GearIcon} />}>Tab with icon</Tab>
    <Tab value="second">Tab without icon</Tab>
</TabList>
`}
>
    <UIKit.TabList value="first">
        <UIKit.Tab
            icon={
                <UIKit.Icon data={() => (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M7.199 2H8.8a.2.2 0 0 1 .2.2c0 1.808 1.958 2.939 3.524 2.034a.199.199 0 0 1 .271.073l.802 1.388a.199.199 0 0 1-.073.272c-1.566.904-1.566 3.164 0 4.069a.199.199 0 0 1 .073.271l-.802 1.388a.199.199 0 0 1-.271.073C10.958 10.863 9 11.993 9 13.8a.2.2 0 0 1-.199.2H7.2a.199.199 0 0 1-.2-.2c0-1.808-1.958-2.938-3.524-2.034a.199.199 0 0 1-.272-.073l-.8-1.388a.199.199 0 0 1 .072-.271c1.566-.905 1.566-3.165 0-4.07a.199.199 0 0 1-.073-.271l.801-1.388a.199.199 0 0 1 .272-.073C5.042 5.138 7 4.007 7 2.2c0-.11.089-.199.199-.199ZM5.5 2.2c0-.94.76-1.7 1.699-1.7H8.8c.94 0 1.7.76 1.7 1.7a.85.85 0 0 0 1.274.735 1.699 1.699 0 0 1 2.32.622l.802 1.388c.469.813.19 1.851-.622 2.32a.85.85 0 0 0 0 1.472 1.7 1.7 0 0 1 .622 2.32l-.802 1.388a1.699 1.699 0 0 1-2.32.622.85.85 0 0 0-1.274.735c0 .939-.76 1.7-1.699 1.7H7.2a1.7 1.7 0 0 1-1.699-1.7.85.85 0 0 0-1.274-.735 1.698 1.698 0 0 1-2.32-.622l-.802-1.388a1.699 1.699 0 0 1 .622-2.32.85.85 0 0 0 0-1.471 1.699 1.699 0 0 1-.622-2.321l.801-1.388a1.699 1.699 0 0 1 2.32-.622A.85.85 0 0 0 5.5 2.2Zm4 5.8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd"></path></svg>
                )} size={16} />
            }
            value="first"
        >
            Tab with icon
        </UIKit.Tab>
        <UIKit.Tab value="second">Tab without icon</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" icon={<Icon size={16} data={GearIcon} />}>
    Tab with icon
  </Tab>
  <Tab value="second">Tab without icon</Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### 国家

选项卡项目已禁用标志。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TabList value="first">
    <Tab value="first" >First Tab</Tab>
    <Tab value="second" disabled>Disabled Tab</Tab>
</TabList>
`}
>
    <UIKit.TabList value="first">
        <UIKit.Tab value="first">First Tab</UIKit.Tab>
        <UIKit.Tab disabled value="second">Disabled Tab</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first">First Tab</Tab>
  <Tab value="second" disabled>
    Disabled Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### 计数器

在需要显示选项卡项目的数字时使用。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TabList value="first">
    <Tab value="first" counter={13}>First Tab</Tab>
    <Tab value="second" counter={3}>Second Tab</Tab>
</TabList>
`}
>
    <UIKit.TabList value="first">
        <UIKit.Tab value="first" counter={13}>First Tab</UIKit.Tab>
        <UIKit.Tab value="second" counter={3}>Second Tab</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" counter={13}>
    First Tab
  </Tab>
  <Tab value="second" counter={3}>
    Second Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### 标签

在需要显示选项卡项目的标签时使用。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<TabList value="first">
    <Tab value="first" label={{content: 'Label 1'}}>First Tab</Tab>
    <Tab value="second" label={{content: 'Label 2'}}>Second Tab</Tab>
</TabList>
`}
>
    <UIKit.TabList value="first">
        <UIKit.Tab value="first" label={{content: 'Label 1'}}>First Tab</UIKit.Tab>
        <UIKit.Tab value="second" label={{content: 'Label 2'}}>Second Tab</UIKit.Tab>
    </UIKit.TabList>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<TabList value="first">
  <Tab value="first" label={{content: 'Label 1'}}>
    First Tab
  </Tab>
  <Tab value="second" label={{content: 'Label 2'}}>
    Second Tab
  </Tab>
</TabList>
```

<!--/GITHUB_BLOCK-->

### 属性

| 姓名   | 描述                          |       类型        | 默认 |
| :----- | ----------------------------- | :---------------: | :--: |
| 价值   | 选项卡值                      |     `string`      |      |
| 标题   | 选项卡标题                    |     `string`      |      |
| 图标   | 开始时显示的图标              | `React.ReactNode` |      |
| 计数器 | 最后显示的内容                | `number` `string` |      |
| href   | 要链接的网址。                |     `string`      |      |
| 标签   | `<Label>` 最后显示            | `React.ReactNode` |      |
| 残疾的 | 非活动状态                    |     `boolean`     |      |
| 儿童   | 选项卡的内容                  | `React.ReactNode` |      |
| qa     | HTML `data-qa` 属性，用于测试 |     `string`      |      |

## TabPanel

是与选项卡关联的内容的容器元素

### 属性

| 姓名 | 描述                          |       类型        | 默认 |
| :--- | :---------------------------- | :---------------: | :--: |
| 儿童 | 面板内容                      | `React.ReactNode` |      |
| 价值 | 当前选项卡值                  |     `string`      |      |
| qa   | HTML `data-qa` 属性，用于测试 |     `string`      |      |

## CSS API

| 姓名                             | 描述                 |
| :------------------------------- | :------------------- |
| `--g-tabs-border-width`          | 选项卡边框宽度       |
| `--g-tabs-item-height`           | 选项卡项目高度       |
| `--g-tabs-item-border-width`     | 选项卡项目边框宽度   |
| `--g-tabs-item-gap`              | 选项卡之间的距离     |
| `--g-tabs-vertical-item-height`  | 选项卡的垂直项目高度 |
| `--g-tabs-vertical-item-padding` | 选项卡垂直项目边距   |
