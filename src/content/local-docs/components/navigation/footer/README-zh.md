## 页脚和移动页脚

页面页脚组件。`Footer` 用于桌面版和 `MobileFooter` 移动版。
这两个组件具有相同的属性。

### PropTypes

| 财产                                                                                     | 类型                             | 必填项 | 默认 | 描述                 |
| :--------------------------------------------------------------------------------------- | :------------------------------- | :----: | :--- | :------------------- |
| className                                                                                | `String`                         |        |      | 页脚类名             |
| [menuItems](https://github.com/gravity-ui/uikit/tree/main/src/components/Menu)           | `FooterMenuItem[]`               |        |      | 页脚菜单项列表       |
| withDivider                                                                              | `Boolean`                        |        |      | 在页脚上显示顶部边框 |
| moreButtonTitle                                                                          | `String`                         |        |      | “更多项目” 按钮标题  |
| onMoreButtonClick                                                                        | `MouseEventHandler<HTMLElement>` |        |      | 更多按钮点击处理器   |
| [观点](#view)                                                                            | `normal` 或者 `clear`            |        |      | 页脚视图             |
| [徽标](https://preview.gravity-ui.com/navigation/?path=/story/components-logo--showcase) | `LogoProps`                      |        |      | 服务徽标属性         |
| logoWrapperClassName                                                                     | `string`                         |        |      | 徽标包装器类名       |
| 版权                                                                                     | `string`                         |        |      | 版权                 |

### 观点

- 正常-白色背景和所有配置的元素
- 透明-透明的背景，只有版权

### 用法

查看演示

- 桌面： `src/components/Footer/desktop/__stories__/FooterShowcase.tsx`，
- 手机： `src/components/Footer/mobile/__stories__/MobileFooterShowcase.tsx`。

### 例子

#### 页脚

```tsx
import { Footer } from '@gravity-ui/navigation';

<Footer
    className="page-footer"
    withDivider={false}
    moreButtonTitle="Show more"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'My Service'
    }}
    menuItems={[
        {
            text: 'About Service',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Documentation',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Confidential',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>

<Footer
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    view="clear"
/>
```

#### MobileFooter

```tsx
import { MobileFooter } from '@gravity-ui/navigation';

<MobileFooter
    className="page-footer"
    withDivider={false}
    moreButtonTitle="Show more"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    logo={{
        icon: logoIcon,
        iconSize: 24,
        text: 'My Service'
    }}
    menuItems={[
        {
            text: 'About Service',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Documentation',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
        {
            text: 'Confidential',
            href: 'https://gravity-ui.com/',
            target: 'blank',
        },
    ]}
/>

<MobileFooter
    className="page-footer"
    copyright={`@ ${new Date().getFullYear()} "My Service"`}
    view="clear"
/>
```
