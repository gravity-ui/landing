# MobileHeader

Header para navegación móvil. MobileHeader proporciona el mantenimiento de Paneles excepto para Modales.

Incluye el componente auxiliar `MobileHeaderFooterItem`.

## Propiedades

| Nombre                  | Descripción                                                     | Tipo                                                       |
| :-------------------- | :-------------------------------------------------------------- | :--------------------------------------------------------- |
| logo                  | Propiedades del logo del servicio                                         | `LogoProps`                                                |
| burgerMenu            | Propiedades del menú hamburguesa                                          | `BurgerMenuProps`                                          |
| overlapPanel          | Propiedades del panel de superposición                                        | `OverlapPanelProps`                                        |
| burgerCloseTitle      | Título del botón de cierre de la hamburguesa (a11y)                                | `string`                                                   |
| burgerOpenTitle       | Título del botón de apertura de la hamburguesa (a11y)                                | `string`                                                   |
| panelItems            | Paneles personalizados renderizados en el encabezado                            | `PanelItemProps[]`                                         |
| topAlert              | Propiedades de la alerta superior                                            | `TopAlertProps`                                            |
| renderContent         | Función de renderizado para el contenido del encabezado                          | `RenderContentType`                                        |
| sideItemRenderContent | Función de renderizado para el contenido del elemento lateral                       | `RenderContentType`                                        |
| onEvent               | Manejador de eventos internos — recibe el nombre del elemento y el nombre del evento | `(itemName: string, eventName: MobileHeaderEvent) => void` |
| onClosePanel          | Manejador de cierre de panel                                             | `() => void`                                               |
| className             | Nombre de la clase del encabezado                                               | `string`                                                   |
| contentClassName      | Nombre de la clase del contenido del encabezado                                       | `string`                                                   |

### Uso

Ver ejemplo de storybook `src/components/MobileHeader/__stories__/MobileHeaderShowcase`.

#### Prop onEvent

[onEvent](https://github.com/gravity-ui/navigation/blob/32c6a6f58e0307745e92b041b3d96517e57589c1/src/components/MobileHeader/MobileHeader.tsx#L41) maneja los eventos internos de MobileHeader.

**Eventos personalizados**

Puedes iniciar el evento a través de `CustomEvent`. Valores compatibles:

- `MOBILE_PANEL_TOGGLE`
- `MOBILE_PANEL_OPEN`
- `MOBILE_PANEL_CLOSE`
- `MOBILE_BURGER_OPEN`
- `MOBILE_BURGER_CLOSE`

Eventos de panel en la constante [MOBILE_HEADER_EVENT_NAMES](https://github.com/gravity-ui/navigation/blob/main/src/components/MobileHeader/constants.ts#L8-L12)

##### Ejemplos

**Evento simple, abrir hamburguesa**

```js
const customEvent = new CustomEvent('MOBILE_BURGER_OPEN');
const navRef = React.useRef < HTMLDivElement > null;
navRef?.current?.dispatchEvent(customEvent);
```

**Evento de panel, abrir panel personalizado**

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

panelName disponible

1. 'burger'
2. `id` del elemento [prop panelItems](https://github.com/gravity-ui/navigation/blob/main/src/components/MobileHeader/MobileHeader.tsx#L38C5-L38C15)

## Variables de MobileHeader

| Nombre                                   | Descripción                                       | Valor predeterminado |
| :--------------------------------------- | :------------------------------------------------ | :------------------: |
| z-indexes                                |                                                   |                      |
| `--gn-mobile-header-z-index`             | z-index del encabezado móvil                      |        `100`         |
| `--gn-mobile-header-panel-z-index`       | z-index del panel del encabezado móvil (componente Drawer) |        `98`          |