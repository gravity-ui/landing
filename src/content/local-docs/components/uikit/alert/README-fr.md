<!--GITHUB_BLOCK-->

# Alert

<!--/GITHUB_BLOCK-->

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

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert theme="normal" title="Normal" message="Normal theme" />
            <Alert theme="info" title="Info" message="Info theme" />
            <Alert theme="success" title="Success" message="Success theme" />
            <Alert theme="warning" title="Warning" message="Warning theme" />
            <Alert theme="danger" title="Danger" message="Danger theme" />
            <Alert theme="utility" title="Utility" message="Utility theme" />
            <Alert theme="clear" title="Clear" message="Clear theme" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert theme="normal" title="Normal" message="Normal theme"/>
<Alert theme="info" title="Info" message="Info theme"/>
<Alert theme="success" title="Success" message="Success theme"/>
<Alert theme="warning" title="Warning" message="Warning theme"/>
<Alert theme="danger" title="Danger" message="Danger theme"/>
<Alert theme="utility" title="Utility" message="Utility theme"/>
<Alert theme="clear" title="Clear" message="Clear theme"/>
```

<!--/GITHUB_BLOCK-->

### Vue

`filled` : Utilisé pour ajuster la couleur d'arrière-plan de l'alerte (utilisé par défaut).

`outlined` : Utilisé pour ajuster la couleur de la bordure de l'alerte.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert title="Filled" message="Filled view" view="filled" />
            <Alert title="Outlined" message="Outlined theme" view="outlined" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```
<Alert title="Filled" message="Filled view" view="filled" />
<Alert title="Outlined" message="Outlined theme" view="outlined" />
```

<!--/GITHUB_BLOCK-->

### Disposition

`vertical` : Utilisé pour diriger les utilisateurs vers le contenu s'il y a une propriété `actions` avec des boutons. Il permet d'afficher les boutons sous le texte (utilisé par défaut).

`horizontal` : Utilisé pour diriger les utilisateurs vers le contenu s'il y a une propriété `actions` avec des boutons. Il permet d'afficher les boutons à droite du texte.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert
                layout="vertical"
                title="Vertical"
                message="Vertical direction"
                actions={<Alert.Action>button</Alert.Action>}
            />
            <Alert
                layout="horizontal"
                title="Horizontal"
                message="Horizontal direction"
                actions={<Alert.Action>button</Alert.Action>}
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert layout="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>}/>
<Alert layout="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>}/>
```

<!--/GITHUB_BLOCK-->

### Coins

`rounded` : Active les coins arrondis de la fenêtre d'alerte (utilisé par défaut).

`square` : Active les coins carrés de la fenêtre d'alerte.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert title="Rounded" message="Rounded corners" corners="rounded" />
            <Alert title="Square" message="Square corners" corners="square" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert title="Rounded" message="Rounded corners" corners="rounded"/>
<Alert title="Square" message="Square corners" corners="square"/>
```

<!--/GITHUB_BLOCK-->

## Titre de l'alerte

`title` : Titre de l'alerte. Il a une priorité inférieure à `Alert.Title`.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return <Alert title={<Alert.Title className={'some-class'} text="some text" />} />;
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert title={<Alert.Title className={'some-class'} text="some text"></Alert.Title>} />
```

<!--/GITHUB_BLOCK-->

## Message de l'alerte

`message` : Message de l'alerte. Il doit être suffisamment explicite pour expliquer entièrement le sujet de l'alerte.

## `onClose`

`onClose` : Fonction de rappel appelée lorsqu'un utilisateur clique sur le bouton de fermeture de l'alerte. Lorsque cette propriété est définie, le bouton de fermeture sera visible.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <Alert
            onClose={() => alert('Close button pressed')}
            title="Alert has close"
            message="Alert has close"
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert
  onClose={() => alert('Close button pressed')}
  title="Alert has close"
  message="Alert has close"
/>
```

<!--/GITHUB_BLOCK-->

### Alignement

Détermine comment le contenu à l'intérieur du composant `Alert` est aligné verticalement.

`baseline` : Alignement par défaut.

`center` : Le contenu est centré verticalement dans le composant `Alert`. Cela peut être utile si les actions prennent plus de place que le texte, ou si l'icône doit être au milieu du contenu.

<!--SANDBOX
import {Alert} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Alert
                align="baseline"
                theme="info"
                title="Baseline"
                message="Baseline align"
                actions={<Alert.Action>button</Alert.Action>}
            />
            <Alert
                align="center"
                theme="info"
                title="Center"
                message="Center align"
                actions={<Alert.Action>button</Alert.Action>}
            />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Alert align="vertical" title="Vertical" message="Vertical direction" actions={<Alert.Action>button</Alert.Action>}/>
<Alert align="horizontal" title="Horizontal" message="Horizontal direction" actions={<Alert.Action>button</Alert.Action>}/>
```

<!--/GITHUB_BLOCK-->

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
