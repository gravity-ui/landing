<!--GITHUB_BLOCK-->

# Disclosure

<!--/GITHUB_BLOCK-->

`Disclosure` est un composant rétractable qui permet d'afficher et de masquer son contenu imbriqué.

```tsx
import {Disclosure} from '@gravity-ui/uikit';
```

<!--GITHUB_BLOCK-->

## Base example

```tsx
<Disclosure summary="Summary">Content</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Contrôle de l'état d'expansion

Vous pouvez contrôler l'état d'expansion à l'aide des propriétés `expanded` et `onUpdate`.

Exemple de composant contrôlé :

<!--SANDBOX
import {Disclosure} from '@gravity-ui/uikit';

export default function () {
    return (
        <Disclosure summary="Summary" defaultExpanded>
            Content
        </Disclosure>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
function ControlledDisclosure() {
  const [expanded, setExpanded] = React.useState(true);

  return (
    <Disclosure summary="Summary" expanded={expanded} onUpdate={setExpanded}>
      Content
    </Disclosure>
  );
}
```

<!--/GITHUB_BLOCK-->

## Taille

Utilisez la propriété `size` pour contrôler la taille de `Disclosure`. La taille par défaut est `m`.

<!--SANDBOX
import {Disclosure, Flex} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure summary="Middle size" size="m">
                Content
            </Disclosure>
            <Disclosure summary="Large size" size="l">
                Content
            </Disclosure>
            <Disclosure summary="Extra large size" size="xl">
                Content
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Middle size" size="m">
  Content
</Disclosure>
<Disclosure summary="Large size" size="l">
  Content
</Disclosure>
<Disclosure summary="Extra large size" size="xl">
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Position de la flèche

`start` : La flèche est positionnée au début de l'en-tête (utilisé par défaut).

`end` : La flèche est positionnée à la fin de l'en-tête.

<!--SANDBOX
import {Disclosure, Flex} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure summary="Summary with start arrow" arrowPosition="start">
                Content
            </Disclosure>
            <Disclosure summary="Summary with end arrow" arrowPosition="end">
                Content
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Summary with start arrow" arrowPosition="start">
  Content
</Disclosure>
<Disclosure summary="Summary with end arrow" arrowPosition="end">
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Contenu personnalisé

Utilisez le composant `Disclosure.Summary` pour créer un en-tête personnalisé et `Disclosure.Details` pour le contenu personnalisé.

<!--SANDBOX
import {Check} from '@gravity-ui/icons';
import {Button, Disclosure, Flex, Icon} from '@gravity-ui/uikit';

export default function () {
    return (
        <Flex gap={4} alignItems="center">
            <Disclosure>
                <Disclosure.Summary>
                    {(props) => (
                        <Button {...props}>
                            <Icon data={Check} size={14} />
                            Custom summary
                            <Icon data={Check} size={14} />
                        </Button>
                    )}
                </Disclosure.Summary>
                <div>Custom details</div>
                <div>More custom details</div>
            </Disclosure>
            <Disclosure summary="Summary">
                <Disclosure.Summary>
                    {(_props, defaultButton) => (
                        <Flex gap={4}>
                            {defaultButton}
                            <Icon data={Check} size={14} />
                        </Flex>
                    )}
                </Disclosure.Summary>
                <Disclosure.Details>Custom Details</Disclosure.Details>
            </Disclosure>
        </Flex>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure>
  <Disclosure.Summary>
    {(props) => (
      <Button {...props}>
        <Icon data={Check} size={14} />
        Custom summary
        <Icon data={Check} size={14} />
      </Button>
    )}
  </Disclosure.Summary>
  <div>Custom details</div>
  <div>More custom details</div>
</Disclosure>
```

```tsx
<Disclosure>
  <Disclosure.Summary>
    {(_props, defaultButton) => (
      <Flex gap={4}>
        {defaultButton}
        <Icon data={Check} size={14} />
      </Flex>
    )}
  </Disclosure.Summary>
  <Disclosure.Details>Custom Details</Disclosure.Details>
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## État désactivé

`Disclosure` peut être désactivé à l'aide de la propriété `disabled`.

<!--SANDBOX
import {Disclosure} from '@gravity-ui/uikit';

export default function () {
    return (
        <Disclosure summary="Summary" disabled>
            Content
        </Disclosure>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Disclosure summary="Summary" disabled>
  Content
</Disclosure>
```

<!--/GITHUB_BLOCK-->

## Propriétés

### Disclosure

| Nom             | Description                                                  | Type                                                  | Défaut    |
| :-------------- | :----------------------------------------------------------- | :---------------------------------------------------- | :-------- |
| size            | Taille du composant                                          | `"m"` `"l"` `"xl"`                                    | `"m"`     |
| className       | Nom de la classe CSS de l'élément racine                     | `string`                                              |           |
| disabled        | État désactivé                                               | `boolean`                                             | `false`   |
| defaultExpanded | État d'ouverture par défaut                                  | `boolean`                                             | `false`   |
| expanded        | État d'ouverture contrôlé                                    | `boolean`                                             |           |
| arrowPosition   | Contrôle de la position                                      | `"start"` `"end"`                                     | `"start"` |
| summary         | Résumé du contenu                                            | `React.ReactNode`                                     |           |
| keepMounted     | Conserver le contenu dans le DOM même lorsqu'il est réduit    | `boolean`                                             | `true`    |
| onUpdate        | Le callback est déclenché lorsque l'état d'expansion/réduction change. | `(expanded: boolean) => void`                         |           |
| onSummaryKeyDown | Le callback se déclenche lors d'événements clavier lorsque le résumé est focalisé. | `(e: React.KeyboardEvent<HTMLButtonElement>) => void` |           |
| children        | Contenu                                                      | `React.ReactNode`                                     |           |
| qa              | Identifiant de test                                          | `string`                                              |           |

### Disclosure.Summary

| Nom     | Description                               | Type                                            | Défaut               |
| :------ | :---------------------------------------- | :---------------------------------------------- | :------------------- |
| children | Fonction de rendu                         | `(props, defaultSummary) => React.ReactElement` |                      |
| qa      | Identifiant de test                       | `string`                                        | `disclosure-summary` |

### Disclosure.Details

| Nom     | Description     | Type              | Défaut              |
| :------ | :-------------- | :---------------- | :------------------ |
| children | Contenu         | `React.ReactNode` |                     |
| qa       | Identifiant de test | `string`          | `disclosure-details` |

## API CSS

| Nom                                  | Description                                          |
| :----------------------------------- | :--------------------------------------------------- |
| `--g-disclosure-text-color`          | Couleur du texte pour le résumé du contenu           |
| `--g-disclosure-text-color-disabled` | Couleur du texte pour le résumé du contenu en état désactivé |
