`Sheet` est un composant conçu pour être utilisé dans un contexte mobile comme élément d'information ou interactif. Vous pouvez y placer du contenu de n'importe quelle taille, car le défilement interne et le redimensionnement dynamique sont pris en charge.

```tsx
import {Sheet} from '@gravity-ui/uikit';
```

Sur les appareils mobiles, vous pouvez déplacer un `Sheet` en tirant sur sa partie principale ou sur la zone de balayage. Pour le fermer, balayez vers le bas, appuyez sur la zone à l'extérieur du `Sheet` ou appuyez sur `Escape`.

## Utilisation

```tsx
import React from 'react';
import {Button, Sheet} from '@gravity-ui/uikit';

const SheetExample = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Ouvrir le Sheet</Button>
      <Sheet open={open} onOpenChange={setOpen} title="Sheet de contenu">
        Contenu
      </Sheet>
    </React.Fragment>
  );
};
```

## Propriétés

| Nom                        | Description                                                                                                                                                                                                                                                                                                                                                  |     Type      |     Défaut     |
| :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------: | :------------: |
| allowHideOnContentScroll    | Permet de fermer la feuille en glissant vers le bas si le contenu est défilé jusqu'en haut (`content Node.scrollTop === 0`) ou s'il n'y a aucun défilement.                                                                                                                                                                                             |   `boolean`   |     `true`     |
| alwaysFullHeight            | La hauteur de la `Sheet` sera toujours à sa valeur maximale.                                                                                                                                                                                                                                                                                                 |   `boolean`   |   `undefined`  |
| className                   | Attribut HTML `class`.                                                                                                                                                                                                                                                                                                                                       |   `string`    |   `undefined`  |
| container                   | Élément DOM auquel le composant est monté via `Portal`.                                                                                                                                                                                                                                                                                                      | `HTMLElement` | `document.body` |
| contentClassName            | Attribut HTML `class` pour le contenu de la feuille.                                                                                                                                                                                                                                                                                                         |   `string`    |   `undefined`  |
| defaultOpen                 | Ouvre la feuille lors du montage si `open` n'est pas passé. Pour rouvrir une feuille fermée, contrôlez-la avec `open`.                                                                                                                                                                                                                                       |   `boolean`   |     `false`    |
| disableEscapeKeyDown        | Désactive la fermeture de la feuille avec la touche Échap.                                                                                                                                                                                                                                                                                                  |   `boolean`   |     `false`    |
| disableOutsideClick         | Désactive la fermeture de la feuille en cliquant sur le voile.                                                                                                                                                                                                                                                                                              |   `boolean`   |     `false`    |
| disablePortal               | Désactive l'utilisation de `Portal`.                                                                                                                                                                                                                                                                                                                         |   `boolean`   |     `false`    |
| hideTopBar                  | Masque la barre supérieure avec la poignée de redimensionnement.                                                                                                                                                                                                                                                                                             |   `boolean`   |                |
| id                          | ID de la feuille utilisé comme hash dans une URL. Assurez-vous de spécifier plusieurs valeurs `id` s'il peut y avoir plus d'une feuille sur une page.                                                                                                                                                                                                      |   `string`    |     `sheet`    |
| keepMounted                 | La `Sheet` ne sera pas supprimée du DOM lors de la fermeture.                                                                                                                                                                                                                                                                                                |   `boolean`   |     `false`    |
| maxContentHeightCoefficient | Coefficient qui détermine la hauteur maximale de la `Sheet` par rapport à la hauteur du viewport (plage 0-1).                                                                                                                                                                                                                                             |   `number`    |      `0.9`     |
| onOpenChange                | Callback `(open: boolean, event?: Event, reason?: SheetOpenChangeReason) => void`, comme dans [`Popup.onOpenChange`](../Popup/README.md#properties).<br>Les demandes de fermeture `open=false` avec la raison `escape-key`, `outside-press`, `swipe`, ou `navigation`. Une feuille contrôlée se ferme une fois que le parent définit `open` sur `false`; une feuille non contrôlée se ferme elle-même. |  `function`   |   `undefined`  |
| onTransitionIn              | Appelée lorsque la transition d'ouverture commence.                                                                                                                                                                                                                                                                                                          | `() => void`  |   `undefined`  |
| onTransitionInComplete      | Appelée lorsque la transition d'ouverture est terminée.                                                                                                                                                                                                                                                                                                     | `() => void`  |   `undefined`  |
| onTransitionOut             | Appelée lorsque la transition de fermeture commence.                                                                                                                                                                                                                                                                                                         | `() => void`  |   `undefined`  |
| onTransitionOutComplete     | Appelée lorsque la transition de fermeture est terminée, y compris le rejet immédiat après un balayage pleine hauteur.                                                                                                                                                                                                                                       | `() => void`  |   `undefined`  |
| open                        | État d'ouverture contrôlé. Sans cela, la feuille se ferme elle-même lors du rejet et `onOpenChange` signale uniquement le changement.                                                                                                                                                                                                                         |   `boolean`   |   `undefined`  |
| swipeAreaClassName          | Attribut HTML `class` pour la zone de balayage.                                                                                                                                                                                                                                                                                                             |   `string`    |   `undefined`  |
| title                       | Titre de la fenêtre de la feuille.                                                                                                                                                                                                                                                                                                                          |   `string`    |   `undefined`  |
GRAVITY_TRANSLATION_BLOCK_1_END
GRAVITY_TRANSLATION_BLOCK_2_END
GRAVITY_TRANSLATION_BLOCK_3_END
GRAVITY_TRANSLATION_BLOCK_4_END
GRAVITY_TRANSLATION_BLOCK_5_END
GRAVITY_TRANSLATION_BLOCK_6_END
GRAVITY_TRANSLATION_BLOCK_7_END
GRAVITY_TRANSLATION_BLOCK_8_END
GRAVITY_TRANSLATION_BLOCK_9_END
GRAVITY_TRANSLATION_BLOCK_10_END
GRAVITY_TRANSLATION_BLOCK_11_END
GRAVITY_TRANSLATION_BLOCK_12_END
GRAVITY_TRANSLATION_BLOCK_13_END
GRAVITY_TRANSLATION_BLOCK_14_END
GRAVITY_TRANSLATION_BLOCK_15_END
GRAVITY_TRANSLATION_BLOCK_16_END
GRAVITY_TRANSLATION_BLOCK_17_END
GRAVITY_TRANSLATION_BLOCK_18_END
GRAVITY_TRANSLATION_BLOCK_19_END
GRAVITY_TRANSLATION_BLOCK_20_END
GRAVITY_TRANSLATION_BLOCK_21_END
GRAVITY_TRANSLATION_BLOCK_22_END
GRAVITY_TRANSLATION_BLOCK_23_END

Une touche qui commence sur une poignée de glisser — un élément avec `draggable="true"` ou une poignée de `@hello-pangea/dnd` — est laissée au glisser et ne fait pas glisser la feuille.

## API CSS

| Nom                         | Description                                                                                                                                                            |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--g-sheet-content-padding`  | Rembourrage du contenu. La valeur par défaut inclut automatiquement `env(safe-area-inset-bottom)` pour le bas et `max(10px, env(safe-area-inset-left/right))` pour les côtés. |
| `--g-sheet-background-color` | Couleur de fond                                                                                                                                                       |