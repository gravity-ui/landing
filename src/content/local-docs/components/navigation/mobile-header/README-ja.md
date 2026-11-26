# MobileHeader

モバイルナビゲーション用のヘッダーです。`MobileHeader` は、モーダルを除くパネルの維持を提供します。

補助的な `MobileHeaderFooterItem` コンポーネントが含まれています。

## プロパティ

| 名前                  | 説明                                                     | タイプ                                                       |
| :-------------------- | :-------------------------------------------------------------- | :--------------------------------------------------------- |
| logo                  | サービスロゴのプロパティ                                         | `LogoProps`                                                |
| burgerMenu            | バーガーメニューのプロパティ                                          | `BurgerMenuProps`                                          |
| overlapPanel          | オーバーラップパネルのプロパティ                                        | `OverlapPanelProps`                                        |
| burgerCloseTitle      | バーガー閉じるボタンのタイトル (a11y)                                | `string`                                                   |
| burgerOpenTitle       | バーガー開くボタンのタイトル (a11y)                                | `string`                                                   |
| panelItems            | ヘッダーにレンダリングされるカスタムパネル                            | `PanelItemProps[]`                                         |
| topAlert              | トップアラートのプロパティ                                            | `TopAlertProps`                                            |
| renderContent         | ヘッダーコンテンツのレンダリング関数                                | `RenderContentType`                                        |
| sideItemRenderContent | サイドアイテムコンテンツのレンダリング関数                                | `RenderContentType`                                        |
| onEvent               | 内部イベントハンドラ — アイテム名とイベント名を受け取ります | `(itemName: string, eventName: MobileHeaderEvent) => void` |
| onClosePanel          | パネルを閉じるハンドラ                                             | `() => void`                                               |
| className             | ヘッダークラス名                                               | `string`                                                   |
| contentClassName      | ヘッダーコンテンツクラス名                                       | `string`                                                   |

### 使用方法

storybook の例 `src/components/MobileHeader/__stories__/MobileHeaderShowcase` を参照してください。

#### onEvent プロパティ

[onEvent](https://github.com/gravity-ui/navigation/blob/32c6a6f58e0307745e92b041b3d96517e57589c1/src/components/MobileHeader/MobileHeader.tsx#L41) は `MobileHeader` の内部イベントを処理します。

**カスタムイベント**

`CustomEvent` を介してイベントを開始できます。サポートされている値は次のとおりです。

- `MOBILE_PANEL_TOGGLE`
- `MOBILE_PANEL_OPEN`
- `MOBILE_PANEL_CLOSE`
- `MOBILE_BURGER_OPEN`
- `MOBILE_BURGER_CLOSE`

定数 [MOBILE_HEADER_EVENT_NAMES](https://github.com/gravity-ui/navigation/blob/main/src/components/MobileHeader/constants.ts#L8-L12) のパネルイベント

##### 例

**シンプルなイベント、バーガーを開く**

```js
const customEvent = new CustomEvent('MOBILE_BURGER_OPEN');
const navRef = React.useRef < HTMLDivElement > null;
navRef?.current?.dispatchEvent(customEvent);
```

**パネルイベント、カスタムパネルを開く**

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

利用可能な `panelName`

1. 'burger'
2. 要素の`id` [panelItems prop](https://github.com/gravity-ui/navigation/blob/main/src/components/MobileHeader/MobileHeader.tsx#L38C5-L38C15)

## MobileHeader 変数

| 名前                               | 説明                                     | デフォルト |
| :--------------------------------- | :--------------------------------------- | :-------: |
| z-indexes                          |                                          |           |
| `--gn-mobile-header-z-index`       | モバイルヘッダーの z-index               |   `100`   |
| `--gn-mobile-header-panel-z-index` | モバイルヘッダーパネル (Drawer コンポーネント) の z-index |   `98`    |