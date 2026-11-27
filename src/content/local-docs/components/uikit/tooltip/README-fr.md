<!--GITHUB_BLOCK-->

# Tooltip

<!--/GITHUB_BLOCK-->

Une astuce textuelle simple qui utilise son nœud enfant comme ancre. Ce composant n'accepte que du contenu textuel et peut être une excellente alternative à l'attribut `title` du navigateur, grâce à sa petite taille et son délai d'apparition long.

## Utilisation

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Content">
  <div tabIndex={0}>Anchor</div>
</Tooltip>;
```

## Ancre

Pour que `Tooltip` fonctionne, vous devez passer un `ReactElement` valide comme enfant, qui accepte la propriété `ref` pour `HTMLElement`
et d'autres propriétés pour `HTMLElement`.

Alternativement, vous pouvez passer une fonction comme enfant pour fournir manuellement la ref et les props à vos composants sous-jacents :

```tsx
import {Tooltip} from '@gravity-ui/uikit';

<Tooltip content="Content">
  {(props, ref) => <MyCustomButton buttonProps={props} buttonRef={ref} />}
</Tooltip>;
```

## État contrôlé

Par défaut, `Tooltip` s'ouvre et se ferme au survol de l'ancre. Vous pouvez modifier ce comportement pour définir manuellement l'état d'ouverture.
Passez votre état à la prop `open` et modifiez-le à partir du callback `onOpenChange`.
Le callback `onOpenChange` a la signature suivante : `(open: boolean, event?: Event, reason: 'hover' | 'focus') => void`.

## Rôle

`Tooltip` accepte la propriété `role` qui modifie son comportement en termes d'accessibilité.
Le rôle `tooltip` doit être utilisé lorsque l'ancre a son propre texte et le rôle `label` sinon (par exemple, dans un bouton icône).

## Propriétés

| Nom          | Description                                                                                     |                       Type                       |     Défaut     |
| :----------- | :---------------------------------------------------------------------------------------------- | :----------------------------------------------: | :------------: |
| children     | Élément d'ancrage pour le `Tooltip`                                                              |         `React.ReactElement` `Function`          |                |
| className    | Attribut HTML `class`                                                                           |                     `string`                     |                |
| closeDelay   | Nombre de ms à retarder la fermeture du `Tooltip` après la fin du survol                         |                     `number`                     |      `0`       |
| container    | Élément DOM auquel le composant est monté via `Portal`                                          |                  `HTMLElement`                   | `document.body` |
| content      | Contenu qui sera affiché dans le `Tooltip`                                                      |                `React.ReactNode`                 |                |
| disablePortal | Désactive l'utilisation de `Portal`                                                             |                    `boolean`                     |     `false`     |
| disabled     | Empêche l'ouverture du `Tooltip`                                                                 |                    `boolean`                     |                |
| offset       | Décalage du `Tooltip` par rapport à son ancrage                                                 |                     `number`                     |      `4`       |
| onOpenChange | Callback pour gérer le changement d'état d'ouverture                                            |                    `Function`                    |                |
| open         | État d'ouverture contrôlé                                                                       |                    `boolean`                     |                |
| openDelay    | Nombre de ms à retarder l'affichage du `Tooltip` après le début du survol                       |                     `number`                     |     `1000`     |
| placement    | Position du `Tooltip` par rapport à son ancrage                                                 | [`PopupPlacement`](../Popup/README.md#placement) |    `bottom`    |
| qa           | Attribut HTML `data-qa`, utilisé pour les tests                                                 |                     `string`                     |                |
| rest         | Combien de temps en ms le curseur doit être au repos avant l'ouverture.                          |                     `number`                     |      `0`       |
| role         | Le rôle pour lequel le `Tooltip` est utilisé                                                    |              `"tooltip"` `"label"`               |   `"tooltip"`  |
| strategy     | Le type de propriété de position CSS à utiliser.                                                |                `absolute` `fixed`                |   `absolute`   |
| style        | Attribut HTML `style`                                                                           |              `React.CSSProperties`               |                |
| trigger      | Type d'événement qui doit déclencher l'ouverture. La valeur par défaut `all` fait référence à `hover` et `focus`. |                `"all"` `"focus"`                 |     `"all"`    |

## API CSS

| Nom                           | Description      |
| :----------------------------- | :--------------- |
| `--g-tooltip-text-color`       | Couleur du texte |
| `--g-tooltip-background-color` | Couleur de fond  |
| `--g-tooltip-padding`          | Rembourrage      |
| `--g-tooltip-border-radius`    | Rayon de bord    |
| `--g-tooltip-box-shadow`       | Ombre            |
