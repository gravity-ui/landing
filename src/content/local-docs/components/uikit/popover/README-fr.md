`Popover` affiche un contenu flottant, facultativement interactif (texte, liens ou boutons) ancré à un élément enfant et ouvert au survol ou au clic. Il encapsule [`Popup`](../Popup/README.md) avec une interactivité de déclenchement intégrée, en utilisant le `ReactElement` passé via la propriété `children` comme déclencheur.

```tsx
import {Popover} from '@gravity-ui/uikit';
```

## Utilisation

Encapsulez un élément HTML ou tout composant acceptant les gestionnaires DOM natifs et les attributs ARIA dans les propriétés (par exemple, `Button`) avec le composant `Popover`. Placez votre contenu
dans la propriété `content`.

```jsx
import {Button, Popover} from '@gravity-ui/uikit';

<Popover content="Contenu">
  <Button>Cliquez ou survolez-moi</Button>
</Popover>;
```

## Propriétés
GRAVITY_TRANSLATION_BLOCK_0_END

| Nom                 | Description                                                                                                   |                                Type                                 |     Défaut      |
| :------------------- | :------------------------------------------------------------------------------------------------------------ | :-----------------------------------------------------------------: | :-------------: |
| children             | `ReactNode` qui accepte les gestionnaires DOM                                                                 |                          `React.ReactNode`                          |                 |
| className            | Attribut `class` HTML pour le nœud racine                                                                     |                              `string`                               |                 |
| container            | Élément DOM auquel le composant est monté via `Portal`                                                        |                            `HTMLElement`                            | `document.body` |
| content              | Tout contenu à rendre à l'intérieur du `Popover`                                                              |                          `React.ReactNode`                          |                 |
| contentClassName     | Attribut `class` HTML pour le nœud de contenu                                                                 |                              `string`                               |                 |
| delay                | Attendre le temps spécifié en millisecondes avant de changer l'état `open`                                    |             `number` `{open?: number; close?: number}`              |                 |
| disableEscapeKeyDown | Ne pas fermer lors de la pression de la touche `Esc`                                                          |                              `boolean`                              |     `false`     |
| disableLayer         | Ne pas utiliser `LayerManager` sur les éléments flottants empilés                                             |                              `boolean`                              |     `false`     |
| disableOutsideClick  | Ne pas fermer lors d'un clic extérieur                                                                        |                              `boolean`                              |     `false`     |
| disablePortal        | Désactive l'utilisation de `Portal`                                                                           |                              `boolean`                              |     `false`     |
| disabled             | Ne pas ouvrir lors d'un événement quelconque                                                                  |                              `boolean`                              |     `false`     |
| enableSafePolygon    | Utiliser une zone polygonale dynamique lors du déplacement du pointeur du déclencheur vers le contenu du `Popover` pour éviter sa fermeture |                              `boolean`                              |     `false`     |
| hasArrow             | Rendre une flèche pointant vers le déclencheur                                                                |                              `boolean`                              |     `false`     |
| keepMounted          | Le `Popover` ne sera pas supprimé du DOM lors de sa fermeture                                                  |                              `boolean`                              |     `false`     |
| middlewares          | Middlewares `Floating UI`. S'ils sont définis, ils remplaceront complètement les middlewares par défaut.       |                         `Array<Middleware>`                         |                 |
| modal                | Active le comportement de piégeage de focus                                                                   |                              `boolean`                              |     `false`     |
| offset               | Valeur de décalage `Floating UI`                                                                              |                           `PopoverOffset`                           |       `4`       |
| onOpenChange         | Fonction appelée lorsque l'état `open` change                                                                |                             `Function`                              |                 |
| open                 | Contrôler manuellement l'état `open`                                                                          |                              `boolean`                              |                 |
| placement            | Placement `Floating UI`                                                                                       | `Placement` `Array<Placement>` `"auto"` `"auto-start"` `"auto-end"` |     `"top"`     |
| qa                   | Attribut de test (`data-qa`)                                                                                  |                              `string`                               |                 |
| rest                 | Combien de temps en ms le curseur doit rester immobile avant l'ouverture.                                     |                              `number`                               |       `0`       |
| strategy             | Stratégie de positionnement `Floating UI`                                                                     |                       `"absolute"` `"fixed"`                        |  `"absolute"`   |
| style                | Attribut `style` HTML pour le nœud racine                                                                     |                              `string`                               |                 |
| toggle               | Si l'état `open` doit être basculé avec des clics répétés                                                     |                              `boolean`                              |     `true`      |
| trigger              | Quel événement doit ouvrir le `Popover`. La valeur par défaut `all` fait référence à `hover` et `click`        |                          `"all"` `"click"`                          |     `"all"`     |