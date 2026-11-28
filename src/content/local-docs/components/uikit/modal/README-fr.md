<!--GITHUB_BLOCK-->

# Modal

<!--/GITHUB_BLOCK-->

Le composant `Modal` sert de base pour créer des fenêtres contextuelles avec un arrière-plan au-dessus du reste du contenu d'une page.
Il désactive le défilement lors de l'ouverture et gère le focus pour le contenu. Les composants enfants de `Modal` sont rendus à l'intérieur du composant [`Portal`](../Portal).
Avec `Modal`, vous pouvez implémenter des boîtes de dialogue, des alertes, des confirmations, et plus encore.

```tsx
import {Modal} from '@gravity-ui/uikit';
```

## Utilisation

```tsx
import {useState} from 'react';
import {Button, Modal} from '@gravity-ui/uikit';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal open={open} onClose={() => setOpen(false)}>
    Content
</Modal>
```

## Propriétés

| Nom                  | Description                                                                                             |       Type        |     Défaut      |
| :------------------- | :------------------------------------------------------------------------------------------------------ | :---------------: | :-------------: |
| autoFocus            | Pendant l'ouverture, le focus sera défini sur le premier élément interactif du contenu                  |     `boolean`     |     `true`      |
| children             | Tout contenu React                                                                                      | `React.ReactNode` |                 |
| className            | Attribut HTML `class` pour le nœud racine                                                               |     `string`      |                 |
| container            | Élément DOM auquel le composant est monté via `Portal`                                                  |   `HTMLElement`   | `document.body` |
| contentClassName     | Attribut HTML `class` pour le nœud de contenu                                                           |     `string`      |                 |
| disableBodyScrollLock | Désactive le verrouillage du défilement pendant l'ouverture                                             |     `boolean`     |     `false`     |
| disableEscapeKeyDown | Désactive la fermeture avec la touche `Échap`                                                           |     `boolean`     |     `false`     |
| disableOutsideClick  | Désactive la fermeture lors d'un clic extérieur                                                          |     `boolean`     |     `false`     |
| disablePortal        | Désactive l'utilisation de `Portal`                                                                     |     `boolean`     |     `false`     |
| focusTrap            | Active le comportement de piégeage du focus                                                             |     `boolean`     |     `true`      |
| keepMounted          | Le `Modal` ne sera pas supprimé du DOM lors de la fermeture                                             |     `boolean`     |     `false`     |
| onClose              | Gère l'événement de fermeture du `Modal`                                                                |    `Function`     |                 |
| onEnterKeyDown       | Gestionnaire d'événement pour la touche `Entrée`                                                        |    `Function`     |                 |
| onEscapeKeyDown      | Gestionnaire d'événement pour la touche `Échap`                                                         |    `Function`     |                 |
| onTransitionEnter    | Gestionnaire d'événement de début de transition d'ouverture                                             |    `Function`     |                 |
| onTransitionExit     | Gestionnaire d'événement de début de transition de fermeture                                              |    `Function`     |                 |
| onTransitionEntered  | Gestionnaire d'événement de fin de transition d'ouverture                                               |    `Function`     |                 |
| onTransitionExited   | Gestionnaire d'événement de fin de transition de fermeture                                                |    `Function`     |                 |
| onOutsideClick       | Gestionnaire d'événement de clic extérieur                                                              |    `Function`     |                 |
| open                 | Gère la visibilité du `Modal`                                                                           |     `boolean`     |     `false`     |
| qa                   | Attribut de test (`data-qa`)                                                                            |     `string`      |                 |
| restoreFocusRef      | Élément vers lequel le focus sera restauré                                                              | `React.RefObject` |                 |
| style                | Attribut HTML `style` pour le nœud racine                                                               |     `string`      |                 |
| aria-label           | Attribut HTML `aria-label` pour décrire le `Modal`                                                     |     `string`      |                 |
| aria-labelledby      | ID de l'élément de légende visible du `Modal`                                                          |     `string`      |                 |
| contentOverflow      | Détermine si le `Modal` a un indicateur de défilement à l'intérieur ou s'agrandit avec le contenu       | `visible` `auto`  |    `visible`    |

## API CSS

| Nom                      | Description                       |
| :------------------------ | :-------------------------------- |
| `--g-modal-margin`        | Marge autour du contenu du `Modal` |
| `--g-modal-border-radius` | Rayon de bordure du contenu du `Modal`     |
| `--g-modal-width`         | Largeur du contenu du `Modal`             |
| `--g-modal-max-width`     | Largeur maximale du contenu du `Modal`         |
| `--g-modal-height`        | Hauteur du contenu du `Modal`            |
| `--g-modal-max-height`    | Hauteur maximale du contenu du `Modal`    |
