`Breadcrumbs` 是一个导航元素，用于显示页面在网站层级结构中的当前位置。它提供链接，使用户能够返回到层级结构中的上一级，从而更轻松地在具有多层结构的网站中进行导航。`Breadcrumbs` 对于大型网站和具有层级结构页面的应用程序尤其有用。

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

从旧版 `Breadcrumbs` 迁移？请参阅 [迁移指南](https://github.com/gravity-ui/uikit/blob/main/docs/migration-from-legacy-breadcrumbs.md)。

GRAVITY_TRANSLATION_BLOCK_0_END

## 示例

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### 事件

使用 `onAction` 属性作为回调函数来处理项的点击事件。

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### 链接

在 `Breadcrumbs` 中，点击项通常会触发 `onAction`。但是，您也可以将它们用作指向其他页面或网站的链接。为此，请将 `href` 属性添加到 `<Breadcrumbs.Item>` 组件：

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### 根上下文

为了帮助用户理解整体结构，某些应用程序会始终显示 `Breadcrumbs` 的起始点（根项），即使由于空间限制而隐藏了其他项。

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### 分隔符

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

### 带图标的 Breadcrumbs

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### 与路由器的集成

GRAVITY_TRANSLATION_BLOCK_13_END

### 地标

当 `breadcrumbs` 用作页面的主要导航元素时，它们可以放置在 [导航地标](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html) 中。地标有助于辅助技术用户快速找到页面的主要部分。要创建导航地标，请将 `breadcrumbs` 放在带有 `aria-label` 的 `<nav>` 元素内：

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

### 禁用的项

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### 结束内容

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

## 属性

| 名称             | 描述                                                                  | 类型                 | 默认值 |
| :--------------- | :--------------------------------------------------------------------------- | :------------------- | :------ |
| children         | 面包屑项目                                                             | `React.ReactNode`    |         |
| disabled         | 确定 `Breadcrumbs` 是否被禁用。                               | `boolean`            |         |
| showRoot         | 如果项目被折叠，则启用或禁用始终显示根项目。 | `boolean`            |         |
| maxItems         | 可见项目的最大数量，包括折叠控件。             | `number`             |         |
| itemComponent    | 用于渲染项目的组件。                                              | `React.ElementType`  |         |
| popupPlacement   | 折叠项目弹出窗口的样式。                                           | `PopupPlacement`     |         |
| popupStyle       | 折叠项目弹出窗口的样式。                                           | `"staircase"`        |         |
| qa               | `data-qa` HTML 属性，用于测试                                   | `string`             |         |
| separator        | 自定义分隔符节点。                                                       | `React.ReactNode`    | "/"     |
| onAction         | 使用被点击项目的键调用处理程序。                                  | `(key: Key) => void` |         |
| id               | 元素的唯一 ID。                                                         | `string`             |         |
| className        | 元素的 CSS 类名。                                              | `string`             |         |
| style            | 设置元素的内联样式。                                       | `CSSProperties`      |         |
| aria-label       | 定义一个字符串值，该字符串值标记当前元素。                      | `string`             |         |
| aria-labelledby  | 标识标记当前元素的元素。                    | `string`             |         |
| aria-describedby | 标识描述对象的元素。                          | `string`             |         |
| endContent       | 用户在最后一个面包屑项目后渲染的节点。                             | `React.ReactNode`    |         |

### BreadcrumbsItemProps

| 名称       | 描述                                                           | 类型                              | 默认值 |
| :--------- | :------------------------------------------------------------- | :-------------------------------- | :----- |
| children   | 面包屑内容。                                                   | `React.ReactNode`                 |        |
| title      | 项目内容的字符串表示。                                         | `string`                          |        |
| aria-label | 项目的可访问性标签。                                           | `string`                          |        |
| href       | 用于超链接的 URL。                                             | `string`                          |        |
| onClick    | 项目点击处理程序。                                             | `React.MouseEventHandler`         |        |
| target     | 链接的目标窗口。                                               | `React.HTMLAttributeAnchorTarget` |        |
| rel        | 链接资源与当前页面之间的关系。                                 | `string`                          |        |
| disabled   | `BreadcrumbsItem` 是否被禁用。                                 | `boolean`                         |        |