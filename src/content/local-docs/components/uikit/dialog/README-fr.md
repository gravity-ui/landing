`Dialog` est une fenêtre modale avec un titre, un corps et des actions de pied de page, utilisée pour les confirmations, les formulaires et les invites. Elle est construite sur `Modal`.

```tsx
import {Dialog} from '@gravity-ui/uikit';
```

## Utilisation

```tsx
const [open, setOpen] = useState(false);
const dialogTitleId = 'app-confirmation-dialog-title';

<Dialog onOpenChange={setOpen} open={open} aria-labelledby={dialogTitleId}>
  <Dialog.Header caption="Légende" id={dialogTitleId} />
  <Dialog.Body>Dialog.Body</Dialog.Body>
  <Dialog.Footer
    onClickButtonCancel={() => setOpen(false)}
    onClickButtonApply={() => alert('onApply')}
    textButtonApply="Appliquer"
    textButtonCancel="Annuler"
  />
</Dialog>;
```

## Propriétés
GRAVITY_TRANSLATION_BLOCK_0_END

| Nom                  | Description                                                                                                                            | Type                                                                | Défaut      |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------ | :---------- |
| open                 | État actuel de la boîte de dialogue                                                                                                    | `boolean`                                                           |             |
| onOpenChange         | Gère les changements d'état d'ouverture de la boîte de dialogue                                                                          | `(open: boolean, event?: Event, reason?: OpenChangeReason) => void` |             |
| initialFocus         | Cible de focus initiale, y compris le bouton `cancel` ou `apply` du pied de page                                                       | `ModalProps['initialFocus'] \| 'cancel' \| 'apply'`                 |             |
| returnFocus          | Contrôle où le focus retourne après la fermeture                                                                                       | `ModalProps['returnFocus']`                                         |             |
| className            | `className` du wrapper de contenu de la boîte de dialogue                                                                                | `string`                                                            |             |
| modalClassName       | `className` de la boîte modale dans laquelle la boîte de dialogue est intégrée                                                          | `string`                                                            |             |
| maxWidth             | Largeur maximale du contenu de la boîte de dialogue                                                                                    | `'s'` `'m'` `'l'`                                                   |             |
| fullWidth            | Si `true`, le contenu s'étend jusqu'à `maxWidth`                                                                                       | `boolean`                                                           |             |
| disableBodyScrollLock | Active ou désactive le verrouillage du défilement du corps                                                                             | `boolean`                                                           | `false`     |
| disableTransition    | Saute les animations d'ouverture et de fermeture lorsque `true`.                                                                       | `boolean`                                                           | `false`     |
| disableEscapeKeyDown | Active ou désactive la touche Échap                                                                                                    | `boolean`                                                           | `false`     |
| disableOutsideClick  | Active ou désactive le clic extérieur                                                                                                  | `boolean`                                                           | `false`     |
| keepMounted          | Active ou désactive le maintien de la boîte de dialogue dans l'état monté                                                              | `boolean`                                                           | `false`     |
| hasCloseButton       | Indique s'il y a une icône de fermeture dans le coin supérieur droit de la boîte de dialogue                                            | `boolean`                                                           | `true`      |
| aria-labelledby      | ID de la légende de `<Dialog/>`. Utilisez la propriété `id` de `<Dialog.Header/>` pour définir l'ID de la légende.                      | `string`                                                            |             |
| aria-label           | Libellé de la boîte de dialogue pour l'accessibilité. Définissez `aria-labelledby` si la légende est visible pour l'utilisateur.         | `string`                                                            |             |
| container            | Élément conteneur pour la boîte de dialogue                                                                                            | `HTMLElement`                                                       |             |
| qa                   | Valeur de l'attribut `data-qa` de la boîte modale dans laquelle la boîte de dialogue est intégrée                                       | `string`                                                            |             |
| contentOverflow      | Détermine si le `Dialog` a un indicateur de défilement à l'intérieur ou s'agrandit avec le contenu                                     | `'visible'` `'auto'`                                                | `'visible'` |

`onOpenChange` reçoit `escape-key` pour Échap, `outside-press` pour un clic extérieur, `click` pour le bouton de fermeture, et `undefined` pour le bouton de fermeture du lecteur d'écran. Fermer lorsque `open` devient `false` quelle qu'en soit la raison.

GRAVITY_TRANSLATION_BLOCK_1_END