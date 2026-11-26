`Breadcrumbs` 是一个导航元素，用于显示页面在网站层级结构中的当前位置。它提供了链接，允许用户返回到层级结构中的上一级，从而更轻松地在具有多层结构的网站中进行导航。`Breadcrumbs` 对于大型网站和具有层级结构页面的应用程序尤其有用。

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

## 示例

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### 事件

使用 `onAction` 属性作为回调函数来处理项的点击事件。

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### 链接

在 `Breadcrumbs` 中，点击一个项通常会触发 `onAction`。但是，您也可以将它们用作指向其他页面或网站的链接。为此，请将 `href` 属性添加到 `<Breadcrumbs.Item>` 组件：

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### 根上下文

为了帮助用户理解整体结构，一些应用程序会始终显示 `Breadcrumbs` 的起始点（根项），即使由于空间限制而隐藏了其他项。

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### 分隔符

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### 带图标的 Breadcrumbs

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### 与路由器的集成

GRAVITY_TRANSLATION_BLOCK_12_END

### 地标

当 `breadcrumbs` 用作页面的主要导航元素时，它们可以放置在 [导航地标](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html) 中。地标可以帮助辅助技术用户快速找到页面的主要部分。要创建导航地标，请将 `breadcrumbs` 放在一个带有 `aria-label` 的 `<nav>` 元素内：

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

### 禁用的项

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

### 结束内容

GRAVITY_TRANSLATION_BLOCK_17_END

GRAVITY_TRANSLATION_BLOCK_18_END

## 属性

| 名称             | 描述                                                                  | 类型                                       | 默认值 |
| :--------------- | :--------------------------------------------------------------------------- | :----------------------------------------- | :------ |
| children         | 面包屑项目                                                             | `React.ReactElement<BreadcrumbsItemProps>` |         |
| disabled         | 确定 `Breadcrumbs` 是否被禁用。                               | `boolean`                                  |         |
| showRoot         | 在项目折叠时，始终显示根项目。                                | `boolean`                                  |         |
| popupPlacement   | 折叠项弹出框的样式。                                           | `PopupPlacement`                           |         |
| popupStyle       | 折叠项弹出框的样式。                                           | `"staircase"`                              |         |
| qa               | `data-qa` HTML 属性，用于测试                                   | `string`                                   |         |
| separator        | 自定义分隔符节点。                                                       | `React.ReactNode`                          | "/"     |
| action           | `click` 事件处理程序。                                                       | `(id: Key) => void`                        |         |
| id               | 元素的唯一 ID。                                                         | `string`                                   |         |
| className        | 元素的 CSS 类名。                                              | `string`                                   |         |
| style            | 设置元素的内联样式。                                       | `CSSProperties`                            |         |
| aria-label       | 定义一个字符串值，用于标记当前元素。                      | `string`                                   |         |
| aria-labelledby  | 标识用于标记当前元素的元素。                    | `string`                                   |         |
| aria-describedby | 标识用于描述对象的元素。                          | `string`                                   |         |
| endContent       | 用户在最后一个面包屑项目后渲染的节点。                             | `React.ReactNode`                          |         |

### BreadcrumbsItemProps

| 名称       | 描述                                                           | 类型                              | 默认值 |
| :--------- | :------------------------------------------------------------- | :-------------------------------- | :----- |
| children   | 面包屑内容。                                                   | `string`                          |        |
| title      | 列表项内容的字符串表示。                                       | `string`                          |        |
| aria-label | 列表项的可访问性标签。                                         | `string`                          |        |
| href       | 用于超链接的 URL。                                             | `string`                          |        |
| target     | 链接的目标窗口。                                               | `React.HTMLAttributeAnchorTarget` |        |
| rel        | 链接资源与当前页面之间的关系。                                 | `string`                          |        |
| disabled   | `BreadcrumbsItem` 是否被禁用。                                 | `boolean`                         |        |