`Sheet` est un composant conçu pour être utilisé dans un contexte mobile comme élément d'information ou interactif. Vous pouvez y placer du contenu de toute taille, car le défilement interne et le redimensionnement dynamique sont pris en charge.

```tsx
import {Sheet} from '@gravity-ui/uikit';
```

Sur les appareils mobiles, vous pouvez déplacer un `Sheet` en tirant sur sa partie principale ou sur la zone de balayage. Pour le fermer, balayez vers le bas ou appuyez sur la zone à l'extérieur du `Sheet`.

## Utilisation

```tsx
import React from 'react';
import {Button, Sheet} from '@gravity-ui/uikit';

const SheetExample = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setVisible(true)}>Ouvrir le Sheet</Button>
      <Sheet visible={visible} onClose={() => setVisible(false)} title="Sheet de contenu">
        Contenu
      </Sheet>
    </React.Fragment>
  );
};
```

## Propriétés
GRAVITY_TRANSLATION_BLOCK_0_END

| Nom                        | Description                                                                                                                                                                                          |     Type      |     Défaut     |
| :-------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------: | :------------: |
| allowHideOnContentScroll    | Permet de fermer la fenêtre de la feuille en la faisant glisser vers le bas si le contenu est défilé jusqu'en haut (`content Node.scrollTop === 0`) ou s'il n'y a pas de défilement du tout. |   `boolean`   |     `true`     |
| alwaysFullHeight            | La hauteur de la `Sheet` aura toujours la valeur maximale.                                                                                                                                           |   `boolean`   |   `undefined`  |
| className                   | Attribut HTML `class`.                                                                                                                                                                               |   `string`    |   `undefined`  |
| container                   | Élément DOM auquel le composant est monté via `Portal`.                                                                                                                                              | `HTMLElement` | `document.body` |
| contentClassName            | Attribut HTML `class` pour le contenu de la feuille.                                                                                                                                                 |   `string`    |   `undefined`  |
| disablePortal               | Désactive l'utilisation de `Portal`.                                                                                                                                                                 |   `boolean`   |     `false`    |
| hideTopBar                  | Masque la barre supérieure avec la poignée de redimensionnement.                                                                                                                                      |   `boolean`   |                |
| id                          | ID de la feuille utilisé comme hash dans une URL. Assurez-vous de spécifier plusieurs valeurs `id` s'il peut y avoir plus d'une feuille sur une page.                                               |   `string`    |     `modal`    |
| maxContentHeightCoefficient | Coefficient qui détermine la hauteur maximale de la `Sheet` par rapport à la hauteur du viewport (plage 0-1).                                                                                        |   `number`    |      `0.9`     |
| onClose                     | Gestionnaire de l'événement de fermeture.                                                                                                                                                            |  `function`   |   `undefined`  |
| swipeAreaClassName          | Attribut HTML `class` pour la zone de balayage.                                                                                                                                                      |   `string`    |   `undefined`  |
| title                       | Titre de la fenêtre de la feuille.                                                                                                                                                                   |   `string`    |   `undefined`  |
| visible                     | Gère la visibilité de la `Sheet`.                                                                                                                                                                    |   `boolean`   |     `false`    |

## API CSS

| Nom                         | Description                                                                                                                                                            |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--g-sheet-content-padding`  | Rembourrage du contenu. La valeur par défaut inclut automatiquement `env(safe-area-inset-bottom)` pour le bas et `max(10px, env(safe-area-inset-left/right))` pour les côtés. |
| `--g-sheet-background-color` | Couleur d'arrière-plan                                                                                                                                                       |