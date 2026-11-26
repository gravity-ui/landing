Le composant `Alert` affiche un message proéminent pour attirer l'attention de l'utilisateur sur des informations importantes.

```tsx
import {Alert} from '@gravity-ui/uikit';
```

### Thème

`normal` : Thème principal (utilisé par défaut).

`info` : Utilisé pour tout type d'information régulière.

`success` : Utilisé pour les informations positives.

`warning` : Utilisé pour les informations qui nécessitent une attention particulière.

`danger` : Utilisé pour les erreurs critiques.

`utility` : Utilisé pour les astuces utiles.

`clear` : Pas de styles, adapté à une utilisation dans d'autres composants (par exemple, comme `content` dans `Popover`)

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Vue

`filled` : Utilisé pour ajuster la couleur d'arrière-plan de l'alerte (utilisé par défaut).

`outlined` : Utilisé pour ajuster la couleur de la bordure de l'alerte.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Disposition

`vertical` : Utilisé pour diriger les utilisateurs vers le contenu s'il y a une propriété `actions` avec des boutons. Il permet d'afficher les boutons sous le texte (utilisé par défaut).

`horizontal` : Utilisé pour diriger les utilisateurs vers le contenu s'il y a une propriété `actions` avec des boutons. Il permet d'afficher les boutons à droite du texte.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Coins

`rounded` : Active les coins arrondis de la fenêtre d'alerte (utilisé par défaut).

`square` : Active les coins carrés de la fenêtre d'alerte.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Titre de l'alerte

`title` : Titre de l'alerte. Il a une priorité inférieure à `Alert.Title`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Message de l'alerte

`message` : Message de l'alerte. Il doit être suffisamment explicite pour expliquer entièrement le sujet de l'alerte.

## `onClose`

`onClose` : Fonction de rappel appelée lorsqu'un utilisateur clique sur le bouton de fermeture de l'alerte. Lorsque cette propriété est définie, le bouton de fermeture sera visible.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Alignement

Détermine comment le contenu à l'intérieur du composant `Alert` est aligné verticalement.

`baseline` : Alignement par défaut.

`center` : Le contenu est centré verticalement dans le composant `Alert`. Cela peut être utile si les actions prennent plus de place que le texte, ou si l'icône doit être au milieu du contenu.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Propriétés

| Nom          | Description                                                                 |                                     Type                                     |   Défaut    |
| :----------- | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------: | :---------: |
| theme        | Apparence de l'alerte                                                       | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` `"clear"` |  `"normal"`  |
| size         | Taille de l'alerte                                                          |                              `"s"` `"m"` `"l"`                               |    `"m"`     |
| view         | Activer/désactiver la couleur de fond de l'alerte                           |                           `"filled"` `"outlined"`                            |  `"filled"`  |
| layout       | Utilisé pour diriger les utilisateurs vers le contenu s'il y a une propriété `actions` avec des boutons |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| actionsLayout | Utilisé pour contrôler la direction des boutons d'action.                  |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| corners      | Utilisé pour les coins arrondis/carrés de la fenêtre d'alerte               |                            `"rounded"` `"square"`                            | `"rounded"`  |
| title        | Titre de l'alerte                                                           |                                   `string`                                   |             |
| message      | Message de l'alerte                                                         |                              `React.ReactNode`                               |             |
| onClose      | Une fonction de rappel appelée lorsque l'utilisateur clique sur le bouton de fermeture de l'alerte |                                  `Function`                                  |             |
| actions      | Tableau de boutons ou de composants personnalisés complets                   |                      `React.ReactNode` `"AlertAction"`                       |             |
| align        | Détermine comment le contenu à l'intérieur du composant Alert est aligné verticalement |                           `"center"` `"baseline"`                            | `"baseline"` |
| style        | Attribut de style HTML                                                      |                            `React.CSSProperties`                             |             |
| className    | Nom de la classe de l'alerte                                                |                                   `string`                                   |             |
| icon         | Remplacer l'icône par défaut                                                |                              `React.ReactNode`                               |             |
| qa           | Attribut HTML `data-qa`, utilisé dans les tests.                            |                                   `string`                                   |             |

## API CSS

| Nom                                | Description                                                                    |
| :--------------------------------- | :----------------------------------------------------------------------------- |
| `--g-alert-padding`                | Rembourrages latéraux.                                                         |
| `--g-alert-border-radius`          | Rayon de bordure.                                                              |
| `--g-alert-icon-margin-inline-end` | L'indentation entre l'icône et la partie contenu (contenu texte + actions)     |
| `--g-alert-close-btn-margin`       | L'indentation entre la partie contenu (contenu texte + actions) et le bouton de fermeture |
| `--g-alert-actions-margin`         | Espacement entre le contenu texte et les actions.                              |
| `--g-alert-message-title-indent`   | Espacement entre le titre et le message.                                       |
| `--g-alert-actions-gap`            | Espacement entre les boutons d'action.                                         |
| `--g-alert-title-text-color`       | Couleur du titre.                                                              |
| `--g-alert-title-font-size`        | Taille de la police du titre.                                                  |
| `--g-alert-title-line-height`      | Hauteur de ligne du titre.                                                     |
| `--g-alert-message-text-color`     | Couleur du message.                                                            |
| `--g-alert-message-font-size`      | Taille de la police du message.                                                |
| `--g-alert-message-font-weight`    | Graisse de la police du message.                                               |
| `--g-alert-message-line-height`    | Hauteur de ligne du message.                                                   |