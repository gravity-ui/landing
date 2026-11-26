GRAVITY_TRANSLATION_BLOCK_0_END

`Dialog` est une fenêtre modale avec un titre, un corps et des actions de pied de page, utilisée pour les confirmations, les formulaires et les invites. Elle est construite sur `Modal`.

```tsx
import {Dialog} from '@gravity-ui/uikit';
```

## Utilisation

```tsx
const [open, setOpen] = useState(false);
const dialogTitleId = 'app-confirmation-dialog-title';

<Dialog
  onClose={() => setOpen(false)}
  open={open}
  onEnterKeyDown={() => {
    alert('onEnterKeyDown');
  }}
  aria-labelledby={dialogTitleId}
>
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

| Nom                  | Description                                                                                                   | Type                                                                                             | Défaut      |
| :------------------- | :------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------- | :---------- |
| open                 | État actuel de la boîte de dialogue                                                                           | `boolean`                                                                                        |             |
| onEscapeKeyDown      | Gestionnaire d'événement pour la touche Échap enfoncée                                                        | `(event: KeyboardEvent) => void`                                                                 |             |
| onEnterKeyDown       | Gestionnaire d'événement pour la touche Entrée enfoncée                                                      | `(event: KeyboardEvent) => void`                                                                 |             |
| onOutsideClick       | Gestionnaire d'événement pour un clic de souris à l'extérieur de la boîte de dialogue                         | `(event: MouseEvent) => void`                                                                    |             |
| onClose              | Gestionnaire d'événement lors de la fermeture de la boîte de dialogue                                         | `(event: MouseEvent or KeyboardEvent,` `reason: ModalCloseReason or "closeButtonClick") => void` |             |
| className            | `className` de l'enveloppe du contenu de la boîte de dialogue                                                 | `string`                                                                                         |             |
| modalClassName       | `className` de la boîte modale dans laquelle la boîte de dialogue est intégrée                                | `string`                                                                                         |             |
| size                 | Taille de la boîte de dialogue. Obsolète. Utilisez `maxWidth` + `fullWidth` pour obtenir le même résultat. | `'s'` `'m'` `'l'`                                                                                |             |
| maxWidth             | Largeur maximale du contenu de la boîte de dialogue                                                           | `'s'` `'m'` `'l'`                                                                                |             |
| fullWidth            | Si `true`, le contenu s'étend jusqu'à `maxWidth`                                                              | `boolean`                                                                                        |             |
| disableBodyScrollLock | Active ou désactive le verrouillage du défilement du corps                                                    | `boolean`                                                                                        | `false`     |
| disableEscapeKeyDown | Active ou désactive la touche Échap                                                                           | `boolean`                                                                                        | `false`     |
| disableOutsideClick  | Active ou désactive le clic extérieur                                                                         | `boolean`                                                                                        | `false`     |
| keepMounted          | Active ou désactive le maintien de la boîte de dialogue dans l'état monté                                     | `boolean`                                                                                        | `false`     |
| hasCloseButton       | Active ou désactive l'icône de fermeture dans le coin supérieur droit de la boîte de dialogue                  | `boolean`                                                                                        | `true`      |
| aria-labelledby      | ID de la légende de `<Dialog/>`. Utilisez la propriété `id` de `<Dialog.Header/>` pour définir l'ID de la légende | `string`                                                                                         |             |
| aria-label           | Libellé de la boîte de dialogue pour l'accessibilité. Définissez `aria-labelledby` si la légende est visible par l'utilisateur | `string`                                                                                         |             |
| container            | Élément conteneur pour la boîte de dialogue                                                                   | `HTMLElement`                                                                                    |             |
| qa                   | Valeur de l'attribut `data-qa` de la boîte modale dans laquelle la boîte de dialogue est intégrée              | `string`                                                                                         |             |
| contentOverflow      | Détermine si la `Dialog` a un indicateur de défilement à l'intérieur ou si elle s'agrandit avec le contenu    | `'visible'` `'auto'`                                                                             | `'visible'` |