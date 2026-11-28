# MobileHeader

Header para navegação Mobile. O `MobileHeader` fornece manutenção de Painéis, exceto Modais.

Inclui o componente auxiliar `MobileHeaderFooterItem`.

## Propriedades

| Nome                  | Descrição                                                     | Tipo                                                       |
| :-------------------- | :-------------------------------------------------------------- | :--------------------------------------------------------- |
| logo                  | Propriedades do logo do serviço                                 | `LogoProps`                                                |
| burgerMenu            | Propriedades do menu hambúrguer                                 | `BurgerMenuProps`                                          |
| overlapPanel          | Propriedades do painel de sobreposição                          | `OverlapPanelProps`                                        |
| burgerCloseTitle      | Título do botão de fechar do hambúrguer (a11y)                  | `string`                                                   |
| burgerOpenTitle       | Título do botão de abrir do hambúrguer (a11y)                   | `string`                                                   |
| panelItems            | Painéis personalizados renderizados no header                   | `PanelItemProps[]`                                         |
| topAlert              | Propriedades do alerta superior                                 | `TopAlertProps`                                            |
| renderContent         | Função de renderização para o conteúdo do header                | `RenderContentType`                                        |
| sideItemRenderContent | Função de renderização para o conteúdo do item lateral          | `RenderContentType`                                        |
| onEvent               | Manipulador de eventos internos — recebe o nome do item e o nome do evento | `(itemName: string, eventName: MobileHeaderEvent) => void` |
| onClosePanel          | Manipulador de fechar painel                                    | `() => void`                                               |
| className             | Nome da classe do header                                        | `string`                                                   |
| contentClassName      | Nome da classe do conteúdo do header                            | `string`                                                   |

### Uso

Veja o exemplo do storybook `src/components/MobileHeader/__stories__/MobileHeaderShowcase`.

#### Propriedade onEvent

[onEvent](https://github.com/gravity-ui/navigation/blob/32c6a6f58e0307745e92b041b3d96517e57589c1/src/components/MobileHeader/MobileHeader.tsx#L41) manipula eventos internos do `MobileHeader`.

**Eventos personalizados**

Você pode iniciar o evento via `CustomEvent`. Valores suportados:

- `MOBILE_PANEL_TOGGLE`
- `MOBILE_PANEL_OPEN`
- `MOBILE_PANEL_CLOSE`
- `MOBILE_BURGER_OPEN`
- `MOBILE_BURGER_CLOSE`

Eventos de painel na constante [MOBILE_HEADER_EVENT_NAMES](https://github.com/gravity-ui/navigation/blob/main/src/components/MobileHeader/constants.ts#L8-L12)

##### Exemplos

**Evento simples, abrir hambúrguer**

```js
const customEvent = new CustomEvent('MOBILE_BURGER_OPEN');
const navRef = React.useRef < HTMLDivElement > null;
navRef?.current?.dispatchEvent(customEvent);
```

**Evento de painel, abrir painel personalizado**

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

`panelName` disponível

1. 'burger'
2. `id` do elemento [prop panelItems](https://github.com/gravity-ui/navigation/blob/main/src/components/MobileHeader/MobileHeader.tsx#L38C5-L38C15)

## MobileHeader vars

| Nome                               | Descrição                                      | Padrão |
| :--------------------------------- | :--------------------------------------------- | :----: |
| z-indexes                          |                                                |        |
| `--gn-mobile-header-z-index`       | z-index do cabeçalho móvel                     | `100`  |
| `--gn-mobile-header-panel-z-index` | z-index do painel do cabeçalho móvel (componente Drawer) | `98`   |
