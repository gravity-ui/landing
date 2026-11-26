# MobileHeader

移动端导航的 Header。MobileHeader 负责维护除 Modals 之外的 Panels。

包含辅助组件 `MobileHeaderFooterItem`。

## Properties

| 名称                  | 描述                                                     | 类型                                                       |
| :-------------------- | :-------------------------------------------------------------- | :--------------------------------------------------------- |
| logo                  | 服务 logo 属性                                         | `LogoProps`                                                |
| burgerMenu            | 汉堡菜单属性                                          | `BurgerMenuProps`                                        |
| overlapPanel          | 重叠面板属性                                        | `OverlapPanelProps`                                        |
| burgerCloseTitle      | 汉堡关闭按钮标题 (可访问性)                                | `string`                                                   |
| burgerOpenTitle       | 汉堡打开按钮标题 (可访问性)                                 | `string`                                                   |
| panelItems            | 在 header 中渲染的自定义面板                            | `PanelItemProps[]`                                         |
| topAlert              | 顶部警报属性                                            | `TopAlertProps`                                            |
| renderContent         | header 内容的渲染函数                          | `RenderContentType`                                        |
| sideItemRenderContent | 侧边项内容渲染函数                       | `RenderContentType`                                        |
| onEvent               | 内部事件处理器 — 接收项名称和事件名称 | `(itemName: string, eventName: MobileHeaderEvent) => void` |
| onClosePanel          | 关闭面板处理器                                             | `() => void`                                               |
| className             | Header 类名                                               | `string`                                                   |
| contentClassName      | Header 内容类名                                       | `string`                                                   |

### 用法

请参阅 storybook 示例 `src/components/MobileHeader/__stories__/MobileHeaderShowcase`。

#### onEvent prop

[onEvent](https://github.com/gravity-ui/navigation/blob/32c6a6f58e0307745e92b041b3d96517e57589c1/src/components/MobileHeader/MobileHeader.tsx#L41) 处理 MobileHeader 的内部事件。

**自定义事件**

您可以通过 `CustomEvent` 触发事件。支持的值：

- `MOBILE_PANEL_TOGGLE`
- `MOBILE_PANEL_OPEN`
- `MOBILE_PANEL_CLOSE`
- `MOBILE_BURGER_OPEN`
- `MOBILE_BURGER_CLOSE`

面板事件在常量 [MOBILE_HEADER_EVENT_NAMES](https://github.com/gravity-ui/navigation/blob/main/src/components/MobileHeader/constants.ts#L8-L12) 中定义

##### 示例

**简单事件，打开汉堡菜单**

```js
const customEvent = new CustomEvent('MOBILE_BURGER_OPEN');
const navRef = React.useRef < HTMLDivElement > null;
navRef?.current?.dispatchEvent(customEvent);
```

**面板事件，打开自定义面板**

```js
import {getMobileHeaderCustomEvent, MOBILE_HEADER_EVENT_NAMES} from '@gravity-ui/navigation';

const customEvent = getMobileHeaderCustomEvent(MOBILE_HEADER_EVENT_NAMES.closeEvent, {
  panelName: 'user',
});

const navRef = React.useRef < HTMLDivElement > null;
navRef?.current?.dispatchEvent(customEvent);

const customEvent2 = getMobileHeaderCustomEvent('MOBILE_PANEL_TOGGLE', {panelName: 'user'});
navRef?.current?.dispatchEvent(customEvent2);
```

可用的 panelName

1. 'burger'
2. 元素 `id` [panelItems prop](https://github.com/gravity-ui/navigation/blob/main/src/components/MobileHeader/MobileHeader.tsx#L38C5-L38C15)

## MobileHeader 变量

| 名称                               | 描述                                   | 默认值 |
| :--------------------------------- | :------------------------------------- | :----: |
| z-indexes                          |                                        |        |
| `--gn-mobile-header-z-index`       | Mobile header 的 z-index               | `100`  |
| `--gn-mobile-header-panel-z-index` | Mobile header 面板 (Drawer 组件) 的 z-index | `98`   |