<!--GITHUB_BLOCK-->

# 链接

<!--/GITHUB_BLOCK-->

```tsx
import {Link} from '@gravity-ui/uikit';
```

`Link` 是文本的一部分，点击后，用户会转到页面的另一部分、服务中的另一个页面或外部网站页面。

它与 B [utton](../Button) 的主要区别在于导航功能。`Link` 通常，指向另一个页面或打开新的浏览器选项卡。

## 外观

有三种类型的链接可供选择： `normal` （通常为棕色）、 `primary` （黑色）和 `secondary` （灰色）。您可以使用该 `view` 物业对其进行管理。您还可以使用该 `visitable` 属性启用显示链接已被点击的功能。

### 正常

这是最熟悉和公认的 `link` 模式。它用于直观地突出显示文本或表格内的元素，并作为导航的一部分。您可以使用它来导航到内部页面和外部来源，包括文档。此外，此类型用于错误页面和零状态。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Link view="normal" href="#">Link</Link>
`}>
    <UIKit.Link view="normal" href="#">Link</UIKit.Link>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="normal" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### 小学

当一个元素本身很明显是可点击时，就会使用这种类型，但是使用棕色 `Link` 会使界面过载，使你无法正确突出显示页面上的关键点。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Link view="primary" href="#">Link</Link>
`}>
    <UIKit.Link view="primary" href="#">Link</UIKit.Link>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="primary" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### 中学

就像 primary 一样 `Link` ，当用户本身就清楚某个元素是可点击时使用的，而浏览该元素并不是必需的，并且会影响少数场景。它的主要目标不是分散用户对页面关键点的注意力。该 `Secondary` 类型最常用于面包屑或显示次要属性时。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Link view="secondary" href="#">Link</Link>
`}>
    <UIKit.Link view="secondary" href="#">Link</UIKit.Link>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Link view="secondary" href="#">
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

### 可参观

此属性用于显示 `Link` 已被点击。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Link href="https://gravity-ui.com/" visitable>Link</Link>
`}>
    <UIKit.Link href="https://gravity-ui.com/" visitable>Link</UIKit.Link>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Link href="https://gravity-ui.com/" visitable>
  Link
</Link>
```

<!--/GITHUB_BLOCK-->

## `href`

该 `href` 属性是必填的。

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Link href="#">Link with href</Link>
`}>
    <UIKit.Link href="#">Link with href</UIKit.Link>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Link href="#">Link with href</Link>
```

<!--/GITHUB_BLOCK-->

## 用法

既可以将 `Link` 两者用作独立的文本元素，也可以用作文本的一部分：

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Text>
    <Link href="#">what roles are active in the service</Link>
</Text>
<Text>
    Currently, this role can only be assigned to a <Link href="#">folder</Link> or <Link href="#">cloud</Link>
</Text>
`}>
    <UIKit.Text>
        <UIKit.Link href="#">what roles are active in the service</UIKit.Link>
    </UIKit.Text>
    <UIKit.Text>
        Currently, this role can only be assigned to a <UIKit.Link href="#">folder</UIKit.Link> or <UIKit.Link href="#">cloud</UIKit.Link>
    </UIKit.Text>
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Text>
    <Link href="#">What roles are available in the service</Link>
</Text>
<Text>
    Currently, this role can only be assigned to a <Link href="#">folder</Link> or <Link href="#">cloud</Link>
</Text>
```

<!--/GITHUB_BLOCK-->

## 属性

`Link` 除了这些道具外，还接受任何有效的 `a` 元素道具：

| 姓名   | 描述                          |           类型           |    默认    |
| :----- | :---------------------------- | :----------------------: | :--------: |
| 儿童   | `Link` 内容                   |    `React.ReactNode`     |            |
| href   | `href` HTML 属性              |         `string`         |            |
| qa     | `data-qa` HTML 属性，用于测试 |         `string`         |            |
| 下划线 | 在下方显示下划线 `Link`       |        `boolean`         |  `false`   |
| 观点   | `Link` 外观                   | `"normal"` `"secondary"` | `"normal"` |
| 可参观 | 显示 `:visitable` CSS 状态    |        `boolean`         |  `false`   |
