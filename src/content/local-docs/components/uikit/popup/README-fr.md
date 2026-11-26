`Popup` positionne le contenu flottant au-dessus de la page, ancré à un élément de référence — la primitive de bas niveau derrière les tooltips, les popovers et les menus, construite sur [Floating UI](https://floating-ui.com). Sa visibilité est contrôlée par la propriété `open` ; ses enfants sont rendus à l'intérieur du composant [`Portal`](../Portal) à moins que vous ne définissiez la propriété `disablePortal`.

```tsx
import {Popup} from '@gravity-ui/uikit';
```

## Ancre

Pour spécifier l'ancre d'un élément flottant, vous pouvez utiliser la propriété `anchorElement`.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Placement

Utilisez la propriété `placement` pour gérer la position du `Popup` autour de l'élément d'ancrage.
Par défaut, `Popup` utilise le [middleware flip](https://floating-ui.com/docs/flip) pour éviter le débordement.
Si la propriété est définie sur un tableau, le premier élément sera utilisé comme valeur de placement par défaut, les autres seront utilisés comme [placements de secours](https://floating-ui.com/docs/flip#fallbackplacements).
Il est également acceptable d'utiliser les valeurs `auto`, `auto-start`, `auto-end` pour utiliser le [middleware autoPlacement](https://floating-ui.com/docs/autoPlacement) au lieu de flip.

GRAVITY_TRANSLATION_BLOCK_3_END

## Propriétés

| Nom                    | Description                                                                                |                             Type                              |     Défaut     |
| :---------------------- | :----------------------------------------------------------------------------------------- | :-----------------------------------------------------------: | :------------: |
| anchorElement           | Élément d'ancrage. Peut aussi être un `VirtualElement`                                     |                     `PopupAnchorElement`                      |                |
| aria-describedby        | Attribut `aria-describedby`. Utilisez-le si vous avez à la fois des nœuds de libellé et de description |                           `string`                            |                |
| aria-label              | Attribut `aria-label`. Utilisez-le uniquement si vous n'avez pas de légende visible         |                           `string`                            |                |
| aria-labelledby         | Attribut `aria-labelledby`. Préférable si vous avez une légende visible                     |                           `string`                            |                |
| children                | Tout contenu React                                                                         |                       `React.ReactNode`                       |                |
| className               | Attribut HTML `class` pour le nœud racine                                                  |                           `string`                            |                |
| container               | Élément DOM auquel le composant est monté via `Portal`                                     |                         `HTMLElement`                         | `document.body` |
| disableEscapeKeyDown    | Désactive la fermeture sur `Esc`                                                           |                           `boolean`                           |     `false`     |
| disableFocusOut         | Désactive la fermeture sur `focusout`                                                      |                           `boolean`                           |     `false`     |
| disableOutsideClick     | Désactive la fermeture sur les clics extérieurs                                            |                           `boolean`                           |     `false`     |
| disablePortal           | Désactive l'utilisation de `Portal`                                                        |                           `boolean`                           |     `false`     |
| disableTransition       | Désactive l'animation d'apparition/disparition de la popup                                |                           `boolean`                           |     `false`     |
| floatingClassName       | Classe supplémentaire à appliquer à l'élément `Floating UI`                                |                           `string`                            |                |
| floatingContext         | Contexte `Floating UI` pour fournir les interactions                                       |                     `FloatingRootContext`                     |                |
| floatingInteractions    | Remplace les interactions `Floating UI`                                                    |                     `Array<ElementProps>`                     |                |
| floatingMiddlewares     | Middlewares `Floating UI`. S'ils sont définis, ils remplaceront complètement les middlewares par défaut. |                      `Array<Middleware>`                      |                |
| floatingStyles          | Styles à appliquer à l'élément `Floating UI`                                               |                     `React.CSSProperties`                     |                |
| focusOrder              | L'ordre dans lequel le cercle de focus                                                     |        `Array<'reference' \| 'floating' \| 'content'>`        |  `['content']`  |
| hasArrow                | Rend une flèche pointant vers l'ancre                                                      |                           `boolean`                           |     `false`     |
| id                      | Attribut HTML `id`                                                                         |                           `string`                            |                |
| initialFocus            | Élément initial à focaliser. Un nombre positif est l'index de l'élément focalisable.       |               `number` `React.Ref<HTMLElement>`               |                |
| keepMounted             | `Popup` ne sera pas supprimé du DOM lors de la fermeture                                   |                           `boolean`                           |     `false`     |
| modal                   | Active le comportement de piégeage de focus                                                |                           `boolean`                           |     `false`     |
| offset                  | Valeur de décalage `Floating UI`                                                           |                         `PopupOffset`                         |       `4`       |
| onOpenChange            | Gère l'événement de changement d'ouverture de `Popup`                                      |                          `Function`                           |                |
| onTransitionIn          | Au début de l'animation d'ouverture de la popup                                            |                          `Function`                           |                |
| onTransitionInComplete  | À la fin de l'animation d'ouverture de la popup                                            |                          `Function`                           |                |
| onTransitionOut         | Au début de l'animation de fermeture de la popup                                           |                          `Function`                           |                |
| onTransitionOutComplete | À la fin de l'animation de fermeture de la popup                                           |                          `Function`                           |                |
| open                    | Gère la visibilité de `Popup`                                                              |                           `boolean`                           |     `false`     |
| placement               | Placement `Floating UI`                                                                    | `Placement` `Array<Placement>` `auto` `auto-start` `auto-end` |                |
| qa                      | Attribut de test (`data-qa`)                                                               |                           `string`                            |                |
| returnFocus             | Élément à focaliser à la fermeture                                                         |              `boolean` `React.Ref<HTMLElement>`               |     `true`      |
| role                    | Rôle d'accessibilité pour la popup                                                         |                           `string`                            |                |
| strategy                | Stratégie de positionnement `Floating UI`                                                  |                      `absolute` `fixed`                       |   `absolute`    |
| style                   | Attribut HTML `style` pour le nœud racine                                                  |                     `React.CSSProperties`                     |                |

## API CSS

| Nom                         | Description      |
| :-------------------------- | :--------------- |
| `--g-popup-background-color` | Couleur de fond |
| `--g-popup-border-color`     | Couleur de bordure     |
| `--g-popup-border-radius`    | Rayon de bordure    |
| `--g-popup-border-width`     | Épaisseur de bordure     |