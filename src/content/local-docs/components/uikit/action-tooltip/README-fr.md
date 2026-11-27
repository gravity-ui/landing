GRAVITY_TRANSLATION_BLOCK_0_END

[`Tooltip`](../Tooltip/README.md) pour étiqueter les boutons d'action sans texte descriptif (par exemple, les boutons avec icônes).

## Utilisation

```tsx
import {ActionTooltip} from '@gravity-ui/uikit';

<ActionTooltip title="Action">
  <div tabIndex={0}>Ancre</div>
</ActionTooltip>;
```

## Ancre

Pour que `ActionTooltip` fonctionne, vous devez passer un `ReactElement` valide comme enfant qui accepte la propriété `ref` pour `HTMLElement`
et d'autres propriétés pour `HTMLElement`.

Alternativement, vous pouvez passer une fonction comme enfant pour fournir manuellement la référence et les props à vos composants sous-jacents :

```tsx
import {ActionTooltip} from '@gravity-ui/uikit';

<ActionTooltip title="Action">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</ActionTooltip>;
```

## État contrôlé

Par défaut, `ActionTooltip` s'ouvre et se ferme au survol de l'ancre. Vous pouvez modifier ce comportement pour définir manuellement l'état d'ouverture.
Passez votre état à la prop `open` et modifiez-le à partir du callback `onOpenChange`.
Le callback `onOpenChange` a la signature suivante : `(open: boolean, event?: Event, reason: 'hover' | 'focus') => void`.

## Groupe de délai

Comme `Tooltip`, `ActionTooltip` partage le délai d'ouverture avec les autres tooltips de l'application : le premier tooltip d'une barre d'outils paie son `openDelay`, ses voisins s'ouvrent instantanément pendant que le groupe est actif. Voir la section [Groupe de délai](../Tooltip/README.md#delay-group) de `Tooltip` pour plus de détails.

## Propriétés

| Nom          | Description                                                                                     |                       Type                       |     Défaut     |
| :----------- | :---------------------------------------------------------------------------------------------- | :----------------------------------------------: | :------------: |
| children     | Élément d'ancrage pour le `ActionTooltip`                                                       |         `React.ReactElement` `Function`          |                |
| className    | Attribut HTML `class`                                                                           |                     `string`                     |                |
| closeDelay   | Nombre de ms à retarder la fermeture du `ActionTooltip` après la fin du survol                   |                     `number`                     |      `0`       |
| container    | Élément DOM auquel le composant est monté via `Portal`                                          |                  `HTMLElement`                   | `document.body` |
| description  | Contenu de la description                                                                       |                `React.ReactNode`                 |                |
| disablePortal | Désactive l'utilisation de `Portal`                                                             |                    `boolean`                     |     `false`     |
| disabled     | Empêche l'ouverture du `ActionTooltip`                                                           |                    `boolean`                     |                |
| hotkey       | Valeur `Hotkey` à afficher dans le coin supérieur droit                                         |   [`Hotkey` value](../Hotkey/README.md#value)    |                |
| offset       | Décalage du `ActionTooltip` par rapport à son ancrage                                          |                     `number`                     |      `4`       |
| onOpenChange | Callback pour gérer le changement d'état d'ouverture                                            |                    `Function`                    |                |
| open         | État d'ouverture contrôlé                                                                       |                    `boolean`                     |                |
| openDelay    | Nombre de ms à retarder l'affichage du `ActionTooltip` après le début du survol                 |                     `number`                     |     `1000`      |
| placement    | Position du `ActionTooltip` par rapport à son ancrage                                          | [`PopupPlacement`](../Popup/README.md#placement) |    `bottom`     |
| qa           | Attribut HTML `data-qa`, utilisé pour les tests                                                 |                     `string`                     |                |
| rest         | Temps en ms pendant lequel le curseur doit rester immobile avant l'ouverture.                    |                     `number`                     |      `0`       |
| strategy     | Le type de propriété de position CSS à utiliser.                                                |                `absolute` `fixed`                |   `absolute`    |
| style        | Attribut HTML `style`                                                                           |              `React.CSSProperties`               |                |
| title        | Contenu du titre                                                                                |                     `string`                     |                |
| trigger      | Type d'événement qui doit déclencher l'ouverture. La valeur par défaut `"all"` fait référence à `hover` et `focus`. |                `"all"` `"focus"`                 |     `"all"`     |