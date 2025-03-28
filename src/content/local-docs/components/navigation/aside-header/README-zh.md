<!--GITHUB_BLOCK-->

# AsideHeader

<!--/GITHUB_BLOCK-->

`AsideHeader` 在您的应用程序中提供灵活且可自定义的导航体验。
用户可以轻松自定义侧边栏的外观以匹配其品牌颜色，还可以添加个性化链接，这些图标专门针对其应用程序的功能。

该组件为创建直观且具有视觉吸引力的导航系统提供了强大的解决方案，增强了用户体验，同时提供了适应各种用例的灵活性。

```ts
import {AsideHeader} from '@gravity-ui/navigation';
```

<!--GITHUB_BLOCK-->

## 外观

<!--/GITHUB_BLOCK-->

### 州

该组件有两种可能的状态：折叠、展开。
你可以使用 `onChangeCompact` 道具在状态之间进行管理 `compact` ，也可以使用隐藏按钮。 `hideCollapseButton`

### 顶部装饰

导航使用 `headerDecoration` 道具突出显示带有徽标和副标题项的顶部区域。

### 自定义背景

该组件支持特定的主题化案例，例如背景上的图像或按颜色分割部分——使用 `customBackground` `customBackgroundClassName` props。

## 章节

导航包括 3 个部分：顶部、中间和底部。这些部分相似，但根据频率用户案例的不同，可能性有所不同。
**重要注意事项**：用户管理元素的状态。

### 顶部

该部分通常包含所有网站页面的通用元素，并包括徽标及其下方的元素。可点击的徽标可用于快速导航到主页，必要时将元素（例如搜索、目录）放在主页下方。

这些元素可以访问工具提示、弹出窗口、抽屉，在配置此部分时选择所需的行为就足够了。

### 中间（菜单项目）

主要部分通常取决于页面的上下文——这是在多页网站上使用导航的示例之一。
如果默认情况下没有垂直空间，则元素将折叠成三个点。

导航元素可以处于以下两种状态之一：折叠（isCollassed）（其中只有图标可见）和展开。有一些空间可以通过包装器对整个物品进行自定义。

通过其他配置， `AllPages` 用户可以通过隐藏不必要的项目来根据自己的喜好进一步自定义菜单。这为物品带来了新的状态-已固定/隐藏。如果项目已固定，它将始终显示在该分区中。

要添加额外的组件， `All Pages` 该组件显示用于编辑可见菜单项列表的面板，则需要 `onMenuItemsChanged` 回调。

**重要注意事项**：用户管理他们从回调中收到的菜单项的修改列表，并向其提供项目的新状态 `AsideHeader`。

### 底部

页脚通过提供对元素和补充资源的便捷访问来改善用户体验。它提供了与支持人员联系的机会，添加自定义信息，以确保用户不会迷路。

里面可以有自己的组件，也可以使用 `FooterItem`。

#### 突出显示元素

当用户想要通过反馈表单报告错误并且存在错误的表单在模态窗口中打开时，在模态窗口上突出显示元素会很有用。

在 `FooterItem` 组件中，你可以传递一个 `bringForward` 道具，它将图标呈现在模态窗口上方。此外，你需要向传递一个函数 `AsideHeader` ，该函数将通知模态窗口的打开。

## 渲染内容

靠近 AsideHeader 的右边是存放主页内容的地方。
展开和折叠导航时，导航 `size` 将发生变化。这些知识可能会有所帮助，例如重新计算某些组件的布局。
CSS 变量 `--gn-aside-header-size` 包含实际的导航大小。

有关渲染内容的替代路径，请参见下文。

### 渲染优化

如果你的应用内容需要比传递投掷 `AsideHeader` 道具更快的渲染速度，
您可能需要使用将的使用切换 `AsideHeader` 到高级样式 `PageLayout`。

<!--GITHUB_BLOCK-->

```diff
--- Main.tsx
+++ Main.tsx
-import {AsideHeader} from './AsideHeader'
+import {PageLayout, AsideFallback} from '@gravity-ui/navigation';
+const Aside = React.lazy(() =>
+    import('./Aside').then(({Aside}) => ({ default: Aside }))
+);

-    <AsideHeader renderContent={renderContent} {...restProps} />
+    <PageLayout>
+        <Suspense fallback={<AsideFallback />}>
+           <Aside />
+        </Suspense>
+
+        <PageLayout.Content>
+            <ContentExample />
+        </PageLayout.Content>
+    </PageLayout>
--- Aside.tsx
+++ Aside.tsx
-import {AsideHeader} from '@gravity-ui/navigation';
+import {PageLayoutAside} from '@gravity-ui/navigation';

export const Aside: FC = () => {
    return (
-        <AsideHeader {...props}>
+        <PageLayoutAside {...props}/>
    );
};
```

<!--/GITHUB_BLOCK-->

## 属性

| 姓名                      | 描述                                                          |                                                      类型                                                       |           默认            |
| :------------------------ | :------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------: | :-----------------------: |
| className                 | 徽标 `class` 的 HTML 属性                                     |                                                    `string`                                                     |                           |
| collapseTitle             | `CollapseButton` 折叠导航的标题                               |                                                    `string`                                                     | `"Свернуть"` `"Collapse"` |
| 紧凑的                    | 导航视觉状态                                                  |                                                    `boolean`                                                    |          `false`          |
| customBackground          | `AsideHeader` 背景                                            |                                                `React.ReactNode`                                                |                           |
| customBackgroundClassName | 覆盖默认背景容器的样式                                        |                                                    `string`                                                     |                           |
| expandTitle               | `CollapseButton` 扩展导航的标题                               |                                                    `string`                                                     | `"Развернуть"` `"Expand"` |
| headerDecoration          | 带有徽标和副标题项目的顶部区域的彩色背景                      |                                                    `boolean`                                                    |          `false`          |
| hideCollapseButton        | 躲起来 `CollapseButton`。使用 `compact` prop 设置默认导航状态 |                                                    `boolean`                                                    |          `false`          |
| 商标                      | 徽标容器包括图标、标题、操作点击次数                          |         [`Logo`](https://github.com/gravity-ui/navigation/blob/main/src/components/Logo/Readme.md#logo)         |                           |
| menuItems                 | 导航中间部分中的项目                                          |                                                `数组<MenuItem>`                                                 |           `[]`            |
| menuMoreTitle             | 如果元素不合适，则为 menuItems 添加其他元素标题               |                                                    `string`                                                     |     `"Ещё"` `"More"`      |
| multipleTooltip           | 通过将鼠标悬停在折叠状态下的 MenuItems 元素来显示多个工具提示 |                                                    `boolean`                                                    |          `false`          |
| onChangeCompact           | 更改导航视觉状态时将调用回调                                  |                                          `(compact: boolean) => void;`                                          |                           |
| onClosePanel              | 关闭面板时将调用回调。你可以通过 `PanelItems` prop 添加面板   |                                                  `() => void;`                                                  |                           |
| onMenuItemsChanged        | 更新菜单项列表时将调用回调 `AllPagesPanel`                    |                                        `（物品：数组<MenuItem>) => 空白`                                        |                           |
| onMenuMoreClick           | 当某些物品不合适，点击 “更多” 按钮时，将调用回调              |                                                  `() => void;`                                                  |                           |
| onAllPagesClick           | 点击 “所有页面” 按钮时将调用回调                              |                                                  `() => void;`                                                  |                           |
| openModalSubscriber       | 函数通知模 `AsideHeader` 态的可见性变化                       |                                      `( (open: boolean) => void) => void`                                       |                           |
| panelItems                | `Drawer` 组件的物品。用于显示主要内容之上的其他信息           | [`数组<DrawerItem>`](https://github.com/gravity-ui/navigation/tree/main/src/components/Drawer#draweritem-props) |           `[]`            |
| renderContent             | 在右侧呈现主要内容的函数 `AsideHeader`                        |                                   `(data: {size: number}) => React.ReactNode`                                   |                           |
| renderFooter              | 渲染导航底部部分的函数                                        |                                   `(data: {size: number}) => React.ReactNode`                                   |                           |
| 参考                      | `ref` 瞄准弹出窗口锚点                                        |                             `react.forwardedRef<HTMLDivElement, AsideHeaderProps>`                              |                           |
| subheaderItems            | 徽标下方导航顶部的项目                                        |                    `数组<{item: MenuItem; enableTooltip?: boolean; bringForward?: boolean}>`                    |           `[]`            |
| topAlert                  | 导航上方的容器基于 uikit 组件 `Alert`                         |                                                   `TopAlert`                                                    |                           |
| qa                        | 要传递给 `AsideHeader` 容器 `data-qa` 属性的值                |                                                    `string`                                                     |                           |

### `MenuItem`

| 姓名               | 描述                                                          |                                                                  类型                                                                   |            默认             |
| :----------------- | :------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------: |
| afterMoreButton    | 菜单项将放在最后，即使项目不合适                              |                                                                `boolean`                                                                |                             |
| 类别               | 菜单项所属的类别。需要在所有页面的显示/编辑模式下进行分组     |                                                                `string`                                                                 | `"Остальное"` `"All other"` |
| 当前的             | 当前/所选项目                                                 |                                                                `boolean`                                                                |           `false`           |
| 隐藏               | 菜单中的可见性项目                                            |                                                                `boolean`                                                                |           `false`           |
| 图标               | 基于 uikit 组件 `Icon` 的菜单图标                             |                   [`IconProps['data']`](https://github.com/gravity-ui/uikit/tree/main/src/components/Icon#properties)                   |                             |
| iconSize           | 菜单图标大小                                                  |                                                            `number` `string`                                                            |            `18`             |
| iconQa             | 要传递给 `Icon` 容器 `data-qa` 属性的值                       |                                                                `string`                                                                 |                             |
| id                 | 菜单项 ID                                                     |                                                                `string`                                                                 |                             |
| itemWrapper        | 菜单项包装器                                                  | [`ItemWrapper`](https://github.com/gravity-ui/navigation/blob/b8367cf343fc20304bc3c8d9a337d9f7d803a9b3/src/components/types.ts#L32-L41) |                             |
| 链接               | HTML href 属性                                                |                                                                `string`                                                                 |                             |
| onItemClick        | 点击项目时将调用回调                                          |                      `（项目：menuItem，折叠：布尔值，事件：react.mouseEvent<HTMLDivElement, MouseEvent>) = 无效>`                      |                             |
| onItemClickCapture | 点击项目时将调用回调                                          |                                                ` (event: React.SyntheticEvent) => void`                                                 |                             |
| 订购               | 确定导航中的显示顺序                                          |                                                                `number`                                                                 |                             |
| 固定               | 该参数限制在中隐藏菜单项 `AllPagesPanel`                      |                                                                `boolean`                                                                |           `false`           |
| rightAdornment     | 自定义菜单项的右侧                                            |                                                            `React.ReactNode`                                                            |                             |
| 标题               | 菜单项的标题                                                  |                                                            `React.ReactNode`                                                            |                             |
| tooltipText        | 工具提示内容                                                  |                                                            `React.ReactNode`                                                            |                             |
| 类型               | 菜单项类型更改外观： `"regular"` 、 `"action"` 、 `"divider"` |                                                                `string`                                                                 |         `"regular"`         |
| qa                 | 要传递给 `data-qa` 属性的值                                   |                                                                `string`                                                                 |                             |

### `TopAlert`

Top Alert 可用于显示用户需要了解的重要信息。此警报通常出现在所有页面，例如号召性用语或警告。

您可以自定义内部内容，必要时可关闭警报。要读取最高警报高度，请参阅 CSS 变量的值 `--gn-top-alert-height`。

| 姓名            | 描述                                        |                                                类型                                                |     默认     |
| :-------------- | :------------------------------------------ | :------------------------------------------------------------------------------------------------: | :----------: |
| 行动            | 按钮数组或全自定义组件                      |  [`AlertActions`](https://github.com/gravity-ui/uikit/tree/main/src/components/Alert#properties)   |              |
| 中心            | 将所有内容置于中心位置                      |                                             `boolean`                                              |   `false`    |
| 对齐            | 确定警报组件内部内容的垂直对齐方式          |      [`AlertAlign`](https://github.com/gravity-ui/uikit/tree/main/src/components/Alert#align)      | `"baseline"` |
| 可关闭          | 显示关闭按钮即可传递 `onCloseTopAlert` 道具 |                                             `boolean`                                              |   `false`    |
| 密集            | 向容器添加顶部、底部填充物 `TopAlert`       |                                             `boolean`                                              |   `false`    |
| 图标            | 覆盖默认图标                                |    [`AlertIcon`](https://github.com/gravity-ui/uikit/tree/main/src/components/Alert#properties)    |              |
| 消息            | 警报消息                                    | [`AlertMessage`](https://github.com/gravity-ui/uikit/tree/main/src/components/Alert#alert-message) |              |
| onCloseTopAlert | 点击关闭按钮时将调用回调                    |                                            `() => void`                                            |              |
| 标题            | 警报的标题                                  |   [`AlertTitle`](https://github.com/gravity-ui/uikit/tree/main/src/components/Alert#alert-title)   |              |
| 主题            | 警报外观                                    |      [`AlertTheme`](https://github.com/gravity-ui/uikit/tree/main/src/components/Alert#theme)      | `"warning"`  |
| 观点            | 启用/禁用警报的背景颜色                     |       [`AlertView`](https://github.com/gravity-ui/uikit/tree/main/src/components/Alert#view)       |  `"filled"`  |

## CSS API

| 姓名                                                      | 描述                                             |
| :-------------------------------------------------------- | :----------------------------------------------- |
| `--gn-aside-header-decoration-collapsed-background-color` | 折叠导航的装饰颜色                               |
| `--gn-aside-header-decoration-expanded-background-color`  | 用于扩展导航的装饰颜色                           |
| `--gn-aside-header-background-color`                      | 导航背景颜色                                     |
| `--gn-aside-header-collapsed-background-color`            | 折叠的导航背景颜色                               |
| `--gn-aside-header-expanded-background-color`             | 扩展的导航背景颜色                               |
| `--gn-aside-header-divider-horizontal-color`              | 所有水平分隔线的颜色                             |
| `--gn-aside-header-divider-vertical-color`                | `AsideHeader` 和内容之间的垂直分隔线颜色         |
| `--gn-top-alert-height`                                   | **只读**。`AsideHeader` 最高警报高度             |
| `--gn-aside-header-padding-top`                           | 导航顶部边距。隐藏徽标和副标题项时可能会有所帮助 |
| 物品                                                      |                                                  |
| `--gn-aside-header-general-item-icon-color`               | 副标题和页脚项目的图标颜色                       |
| `--gn-aside-header-item-icon-color`                       | CompositeBar 项目的图标颜色                      |
| `--gn-aside-header-item-text-color`                       | 文本项目颜色                                     |
| `--gn-aside-header-item-background-color-hover`           | 鼠标悬停时的文字颜色                             |
| 当前项目                                                  |                                                  |
| `--gn-aside-header-item-current-background-color`         | 当前项目的背景颜色                               |
| `--gn-aside-header-item-current-icon-color`               | 当前项目的图标颜色                               |
| `--gn-aside-header-item-current-text-color`               | 当前项目的文字颜色                               |
| `--gn-aside-header-item-current-background-color-hover`   | 悬停时当前项目的图标颜色                         |
| `--gn-aside-header-item-collapsed-radius`                 | 折叠导航的项目边框半径                           |
| `--gn-aside-header-item-expanded-radius`                  | 用于扩展导航的物品边框半径                       |
| z 索引                                                    |                                                  |
| `--gn-aside-header-z-index`                               | 旁边标题 z-index                                 |
| `--gn-aside-header-panel-z-index`                         | 侧边标题面板（抽屉组件）z-index                  |
| `--gn-aside-header-pane-top-z-index`                      | 顶部窗格 z-index                                 |
| `--gn-aside-header-content-z-index`                       | 内容（右侧部分）z-index                          |
