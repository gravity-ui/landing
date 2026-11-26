# MobileHeader

Header für die mobile Navigation. MobileHeader bietet die Verwaltung von Panels außer Modals.

Enthält die Hilfskomponente `MobileHeaderFooterItem`.

## Eigenschaften

| Name                  | Beschreibung                                                     | Typ                                                       |
| :-------------------- | :-------------------------------------------------------------- | :--------------------------------------------------------- |
| logo                  | Eigenschaften des Service-Logos                                 | `LogoProps`                                                |
| burgerMenu            | Eigenschaften des Burger-Menüs                                  | `BurgerMenuProps`                                          |
| overlapPanel          | Eigenschaften des Überlappungs-Panels                           | `OverlapPanelProps`                                        |
| burgerCloseTitle      | Titel des Burger-Schließbuttons (Barrierefreiheit)              | `string`                                                   |
| burgerOpenTitle       | Titel des Burger-Öffnungsbuttons (Barrierefreiheit)             | `string`                                                   |
| panelItems            | Benutzerdefinierte Panels, die im Header gerendert werden       | `PanelItemProps[]`                                         |
| topAlert              | Eigenschaften der oberen Benachrichtigung                       | `TopAlertProps`                                            |
| renderContent         | Render-Funktion für den Header-Inhalt                           | `RenderContentType`                                        |
| sideItemRenderContent | Render-Funktion für den Inhalt des Seiten-Elements              | `RenderContentType`                                        |
| onEvent               | Handler für interne Ereignisse — empfängt den Elementnamen und den Ereignisnamen | `(itemName: string, eventName: MobileHeaderEvent) => void` |
| onClosePanel          | Handler zum Schließen des Panels                                | `() => void`                                               |
| className             | Klassenname des Headers                                         | `string`                                                   |
| contentClassName      | Klassenname des Header-Inhalts                                  | `string`                                                   |

### Verwendung

Siehe Storybook-Beispiel `src/components/MobileHeader/__stories__/MobileHeaderShowcase`.

#### onEvent-Eigenschaft

[onEvent](https://github.com/gravity-ui/navigation/blob/32c6a6f58e0307745e92b041b3d96517e57589c1/src/components/MobileHeader/MobileHeader.tsx#L41) behandelt interne Ereignisse von MobileHeader.

**Benutzerdefinierte Ereignisse**

Sie können das Ereignis über `CustomEvent` auslösen. Unterstützte Werte:

- `MOBILE_PANEL_TOGGLE`
- `MOBILE_PANEL_OPEN`
- `MOBILE_PANEL_CLOSE`
- `MOBILE_BURGER_OPEN`
- `MOBILE_BURGER_CLOSE`

Panel-Ereignisse in der Konstante [MOBILE_HEADER_EVENT_NAMES](https://github.com/gravity-ui/navigation/blob/main/src/components/MobileHeader/constants.ts#L8-L12)

##### Beispiele

**Einfaches Ereignis, Burger öffnen**

```js
const customEvent = new CustomEvent('MOBILE_BURGER_OPEN');
const navRef = React.useRef < HTMLDivElement > null;
navRef?.current?.dispatchEvent(customEvent);
```

**Panel-Ereignis, benutzerdefiniertes Panel öffnen**

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

Verfügbare panelName

1. 'burger'
2. `id` des Elements [panelItems Prop](https://github.com/gravity-ui/navigation/blob/main/src/components/MobileHeader/MobileHeader.tsx#L38C5-L38C15)

## MobileHeader Variablen

| Name                               | Beschreibung                                    | Standard |
| :--------------------------------- | :--------------------------------------------- | :------: |
| z-indexes                          |                                                |          |
| `--gn-mobile-header-z-index`       | Mobile Header z-index                          |  `100`   |
| `--gn-mobile-header-panel-z-index` | Mobile Header Panel (Drawer Komponente) z-index |  `98`    |