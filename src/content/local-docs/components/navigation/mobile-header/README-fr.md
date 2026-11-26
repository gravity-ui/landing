# MobileHeader

En-tête pour la navigation mobile. MobileHeader permet de maintenir les Panneaux à l'exception des Modales.

Inclut le composant auxiliaire `MobileHeaderFooterItem`.

## Propriétés

| Nom                  | Description                                                     | Type                                                       |
| :-------------------- | :-------------------------------------------------------------- | :--------------------------------------------------------- |
| logo                  | Propriétés du logo du service                                         | `LogoProps`                                                |
| burgerMenu            | Propriétés du menu burger                                          | `BurgerMenuProps`                                          |
| overlapPanel          | Propriétés du panneau de chevauchement                                        | `OverlapPanelProps`                                        |
| burgerCloseTitle      | Titre du bouton de fermeture du burger (a11y)                                | `string`                                                   |
| burgerOpenTitle       | Titre du bouton d'ouverture du burger (a11y)                                 | `string`                                                   |
| panelItems            | Panneaux personnalisés rendus dans l'en-tête                            | `PanelItemProps[]`                                         |
| topAlert              | Propriétés de l'alerte supérieure                                            | `TopAlertProps`                                            |
| renderContent         | Fonction de rendu pour le contenu de l'en-tête                          | `RenderContentType`                                        |
| sideItemRenderContent | Fonction de rendu pour le contenu de l'élément latéral                       | `RenderContentType`                                        |
| onEvent               | Gestionnaire d'événements interne — reçoit le nom de l'élément et le nom de l'événement | `(itemName: string, eventName: MobileHeaderEvent) => void` |
| onClosePanel          | Gestionnaire de fermeture de panneau                                             | `() => void`                                               |
| className             | Nom de la classe de l'en-tête                                               | `string`                                                   |
| contentClassName      | Nom de la classe du contenu de l'en-tête                                       | `string`                                                   |

### Utilisation

Voir l'exemple storybook `src/components/MobileHeader/__stories__/MobileHeaderShowcase`.

#### Propriété onEvent

[onEvent](https://github.com/gravity-ui/navigation/blob/32c6a6f58e0307745e92b041b3d96517e57589c1/src/components/MobileHeader/MobileHeader.tsx#L41) gère les événements internes de MobileHeader.

**Événements personnalisés**

Vous pouvez déclencher l'événement via `CustomEvent`. Valeurs prises en charge :

- `MOBILE_PANEL_TOGGLE`
- `MOBILE_PANEL_OPEN`
- `MOBILE_PANEL_CLOSE`
- `MOBILE_BURGER_OPEN`
- `MOBILE_BURGER_CLOSE`

Événements de panneau dans la constante [MOBILE_HEADER_EVENT_NAMES](https://github.com/gravity-ui/navigation/blob/main/src/components/MobileHeader/constants.ts#L8-L12)

##### Exemples

**Événement simple, ouverture du burger**

```js
const customEvent = new CustomEvent('MOBILE_BURGER_OPEN');
const navRef = React.useRef < HTMLDivElement > null;
navRef?.current?.dispatchEvent(customEvent);
```

**Événement de panneau, ouverture d'un panneau personnalisé**

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
2. `id` de l'élément [prop panelItems](https://github.com/gravity-ui/navigation/blob/main/src/components/MobileHeader/MobileHeader.tsx#L38C5-L38C15)

## MobileHeader vars

| Nom                                | Description                                    | Défaut |
| :--------------------------------- | :--------------------------------------------- | :----: |
| z-indexes                          |                                                |        |
| `--gn-mobile-header-z-index`       | z-index de l'en-tête mobile                    | `100`  |
| `--gn-mobile-header-panel-z-index` | z-index du panneau de l'en-tête mobile (composant Drawer) | `98`   |