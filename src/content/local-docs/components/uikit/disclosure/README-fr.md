`Disclosure` est un composant rétractable qui permet d'afficher et de masquer son contenu imbriqué.

```tsx
import {Disclosure} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

## Contrôle de l'état d'expansion

Vous pouvez contrôler l'état d'expansion à l'aide des propriétés `expanded` et `onUpdate`.

Exemple de composant contrôlé :

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Taille

Utilisez la propriété `size` pour contrôler la taille de `Disclosure`. La taille par défaut est `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Position de la flèche

`start` : La flèche est positionnée au début de l'en-tête (utilisé par défaut).

`end` : La flèche est positionnée à la fin de l'en-tête.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Contenu personnalisé

Utilisez le composant `Disclosure.Summary` pour créer un en-tête personnalisé et `Disclosure.Details` pour le contenu personnalisé.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## État désactivé

`Disclosure` peut être désactivé à l'aide de la propriété `disabled`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

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
GRAVITY_TRANSLATION_BLOCK_11_END

| Nom     | Description     | Type              | Défaut              |
| :------ | :-------------- | :---------------- | :------------------ |
| children | Contenu         | `React.ReactNode` |                     |
| qa       | Identifiant de test | `string`          | `disclosure-details` |

## API CSS

| Nom                                  | Description                                          |
| :----------------------------------- | :--------------------------------------------------- |
| `--g-disclosure-text-color`          | Couleur du texte pour le résumé du contenu           |
| `--g-disclosure-text-color-disabled` | Couleur du texte pour le résumé du contenu en état désactivé |