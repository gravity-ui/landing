<!--GITHUB_BLOCK-->

# Breadcrumbs

<!--/GITHUB_BLOCK-->

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

`Breadcrumbs`（面包屑导航）是一种导航元素，显示页面在网站层次结构中的当前位置。它提供链接，允许用户返回到层次结构中的更高级别，使导航多层次网站变得更容易。面包屑导航对于具有基于层次结构页面结构的大型网站和应用程序特别有用。

## 示例

<!--LANDING_BLOCK

<ExampleBlock
    code={`
<Breadcrumbs>
    <Breadcrumbs.Item>Region</Breadcrumbs.Item>
    <Breadcrumbs.Item>Country</Breadcrumbs.Item>
    <Breadcrumbs.Item>City</Breadcrumbs.Item>
    <Breadcrumbs.Item>District</Breadcrumbs.Item>
    <Breadcrumbs.Item>Street</Breadcrumbs.Item>
</Breadcrumbs>
`}
>
    <UIKit.Breadcrumbs>
        <UIKit.Breadcrumbs.Item>Region</UIKit.Breadcrumbs.Item>
        <UIKit.Breadcrumbs.Item>Country</UIKit.Breadcrumbs.Item>
        <UIKit.Breadcrumbs.Item>City</UIKit.Breadcrumbs.Item>
        <UIKit.Breadcrumbs.Item>District</UIKit.Breadcrumbs.Item>
        <UIKit.Breadcrumbs.Item>Street</UIKit.Breadcrumbs.Item>
    </UIKit.Breadcrumbs>
</ExampleBlock>

LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```jsx
<Breadcrumbs>
  <Breadcrumbs.Item>Region</Breadcrumbs.Item>
  <Breadcrumbs.Item>Country</Breadcrumbs.Item>
  <Breadcrumbs.Item>City</Breadcrumbs.Item>
  <Breadcrumbs.Item>District</Breadcrumbs.Item>
  <Breadcrumbs.Item>Street</Breadcrumbs.Item>
</Breadcrumbs>
```

<!-- Storybook example -->

<BreadcrumbsExample />

<!--/GITHUB_BLOCK-->

### 事件

使用 `onAction` 属性作为回调来处理项目上的点击事件。

### 链接

在 `Breadcrumbs` 中，点击项目通常会触发 `onAction`。但是，您也可以将它们用作指向其他页面或网站的链接。为此，请向 `<Breadcrumbs.Item>` 组件添加 `href` 属性。

### 根上下文

为了帮助用户理解整体结构，一些应用程序即使在其他项目由于空间限制而隐藏时，也始终显示面包屑的起点（根项目）。

### 分隔符

您可以自定义面包屑项目之间的分隔符。

### 带图标的面包屑

您可以在面包屑项目中添加图标。

### 与路由器集成

面包屑可以与各种路由器集成，如 React Router、Next.js 和 Tanstack Router。

### 导航标记

当面包屑作为页面的主要导航元素使用时，可以将其放置在导航标记中。

### 禁用项目

您可以禁用特定的面包屑项目。

## 属性

| 名称             | 描述                                 | 类型                                       | 默认值 |
| :--------------- | :----------------------------------- | :----------------------------------------- | :----- |
| children         | 面包屑项目                           | `React.ReactElement<BreadcrumbsItemProps>` |        |
| disabled         | 确定 `Breadcrumbs` 是否被禁用        | `boolean`                                  |        |
| showRoot         | 启用或禁用在项目折叠时始终显示根项目 | `boolean`                                  |        |
| popupPlacement   | 折叠项目弹出窗口的样式               | `PopupPlacement`                           |        |
| popupStyle       | 折叠项目弹出窗口的样式               | `"staircase"`                              |        |
| qa               | HTML 属性 `data-qa`，用于测试        | `string`                                   |        |
| separator        | 自定义分隔符节点                     | `React.ReactNode`                          | "/"    |
| action           | `click` 事件处理程序                 | `(id: Key) => void`                        |        |
| navigate         | 客户端导航                           | `(href: string) => void`                   |        |
| id               | 元素的唯一 ID                        | `string`                                   |        |
| className        | 元素的 CSS 类名                      | `string`                                   |        |
| style            | 设置元素的内联样式                   | `CSSProperties`                            |        |
| aria-label       | 定义标记当前元素的字符串值           | `string`                                   |        |
| aria-labelledby  | 标识标记当前元素的元素               | `string`                                   |        |
| aria-describedby | 标识描述对象的元素                   | `string`                                   |        |

### BreadcrumbsItemProps

| 名称       | 描述                         | 类型                              | 默认值 |
| :--------- | :--------------------------- | :-------------------------------- | :----- |
| children   | 面包屑内容                   | `string`                          |        |
| title      | 项目内容的字符串表示         | `string`                          |        |
| aria-label | 项目的无障碍标签             | `string`                          |        |
| href       | 用于超链接的 URL             | `string`                          |        |
| target     | 链接的目标窗口               | `React.HTMLAttributeAnchorTarget` |        |
| rel        | 链接资源与当前页面之间的关系 | `string`                          |        |
| disabled   | BreadcrumbsItem 是否被禁用   | `boolean`                         |        |
