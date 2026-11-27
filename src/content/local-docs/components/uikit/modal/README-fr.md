GRAVITY_TRANSLATION_BLOCK_0_END

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

<Button onClick={() => setOpen(true)}>Ouvrir la modale</Button>
<Modal open={open} onOpenChange={setOpen}>
    Contenu
</Modal>
```

## Propriétés

| Nom                         | Description                                                                                  |                    Type                     |     Défaut     |
| :--------------------------- | :------------------------------------------------------------------------------------------- | :-----------------------------------------: | :------------: |
| children                     | Tout contenu React                                                                           |              `React.ReactNode`              |                |
| className                    | Attribut `class` HTML pour le nœud racine                                                    |                  `string`                   |                |
| container                    | Élément DOM auquel le composant est monté via `Portal`                                       |                `HTMLElement`                | `document.body` |
| contentClassName             | Attribut `class` HTML pour le nœud de contenu                                                |                  `string`                   |                |
| disableBodyScrollLock        | Désactive le verrouillage du défilement lorsqu'il est ouvert                                 |                  `boolean`                  |     `false`     |
| disableTransition            | Ignore les animations d'ouverture et de fermeture si `true`.                                 |                  `boolean`                  |     `false`     |
| disableEscapeKeyDown         | Désactive la fermeture sur `Esc`                                                             |                  `boolean`                  |     `false`     |
| disableOutsideClick          | Désactive la fermeture sur les clics extérieurs                                              |                  `boolean`                  |     `false`     |
| disablePortal                | Désactive l'utilisation de `Portal`                                                          |                  `boolean`                  |     `false`     |
| keepMounted                  | Le `Modal` ne sera pas supprimé du DOM lors de la fermeture                                  |                  `boolean`                  |     `false`     |
| initialFocus                 | Cible de focus initiale ; par défaut, le nœud de contenu                                    | `FloatingFocusManagerProps['initialFocus']` |                |
| returnFocus                  | Contrôle où le focus retourne après la fermeture                                             | `FloatingFocusManagerProps['returnFocus']`  |                |
| disableVisuallyHiddenDismiss | Supprime les boutons de fermeture masqués pour les lecteurs d'écran                           |                  `boolean`                  |     `false`     |
| floatingRef                  | Ref vers le nœud de contenu du modal                                                         |  `React.RefObject<HTMLDivElement \| null>`  |                |
| onOpenChange                 | Gère les changements d'état d'ouverture du `Modal`                                           |                 `Function`                  |                |
| onTransitionIn               | Gestionnaire d'événement de début de transition d'ouverture                                  |                 `Function`                  |                |
| onTransitionOut              | Gestionnaire d'événement de début de transition de fermeture                                 |                 `Function`                  |                |
| onTransitionInComplete       | Gestionnaire d'événement de fin de transition d'ouverture                                    |                 `Function`                  |                |
| onTransitionOutComplete      | Gestionnaire d'événement de fin de transition de fermeture                                   |                 `Function`                  |                |
| open                         | Gère la visibilité du `Modal`                                                                |                  `boolean`                  |     `false`     |
| qa                           | Attribut de test (`data-qa`)                                                                 |                  `string`                   |                |
| style                        | Attribut `style` HTML pour le nœud racine                                                    |                  `string`                   |                |
| aria-label                   | Attribut `aria-label` HTML pour décrire le `Modal`                                          |                  `string`                   |                |
| aria-labelledby              | ID de l'élément de légende visible du `Modal`                                                |                  `string`                   |                |
| contentOverflow              | Détermine si le `Modal` a un indicateur de défilement à l'intérieur ou s'agrandit avec le contenu |              `visible` `auto`               |    `visible`    |

`onOpenChange` reçoit `escape-key` pour la touche Échap, `outside-press` pour un clic extérieur, et `undefined` pour le bouton de fermeture du lecteur d'écran. Fermez lorsque `open` devient `false` quelle qu'en soit la raison.

## API CSS

| Nom                      | Description                       |
| :------------------------ | :-------------------------------- |
| `--g-modal-margin`        | Marge autour du contenu du `Modal` |
| `--g-modal-border-radius` | Rayon de bordure du contenu du `Modal`     |
| `--g-modal-width`         | Largeur du contenu du `Modal`             |
| `--g-modal-min-width`     | Largeur minimale du contenu du `Modal`         |
| `--g-modal-max-width`     | Largeur maximale du contenu du `Modal`         |
| `--g-modal-height`        | Hauteur du contenu du `Modal`            |
| `--g-modal-min-height`    | Hauteur minimale du contenu du `Modal`        |
| `--g-modal-max-height`    | Hauteur maximale du contenu du `Modal`        |