`PinInput` est un groupe d'entrées pour saisir rapidement une séquence de valeurs numériques ou alphanumériques. Son cas d'utilisation le plus courant est la saisie de codes OTP ou de confirmation reçus par SMS, e-mails ou applications d'authentification.

Chaque entrée collecte un caractère à la fois. Lorsqu'une valeur est acceptée, le focus est déplacé vers l'entrée suivante, jusqu'à ce que tous les champs soient remplis.

```tsx
import {PinInput} from '@gravity-ui/uikit';
```

## Type

Par défaut, les entrées n'acceptent que les valeurs numériques. Pour autoriser les valeurs alphanumériques, définissez la propriété `type` sur `"alphanumeric"` :

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Taille

Ce composant est disponible en quatre tailles : `s`, `m`, `l` et `xl`. La taille par défaut est `m`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

## État

Si vous ne souhaitez pas que l'utilisateur interagisse avec le composant, définissez la propriété `disabled` :

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

Pour afficher un état invalide du composant, utilisez la propriété `validationState` avec la valeur `"invalid"`. Vous pouvez éventuellement définir un message d'erreur avec la propriété `errorMessage` :

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Placeholder

Par défaut, il n'y a pas de placeholder pour les entrées. Vous pouvez le définir avec la propriété `placeholder` :

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Masque

Si vous avez besoin de masquer les valeurs saisies, utilisez la propriété `mask`. Elle est similaire au comportement de `<input type="password"/>`.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## OTP

Si vous souhaitez que le navigateur suggère des codes à usage unique à partir du contexte externe (par exemple, SMS), définissez la propriété `otp`.

## API

- `focus(): void`: Définit le focus sur l'entrée active actuelle.

## API CSS

| Nom                         | Description                                                              |
| :-------------------------- | :----------------------------------------------------------------------- |
| `--g-pin-input-item-width` | Définit la largeur de chaque entrée, sauf si `responsive` est `true`. |
| `--g-pin-input-item-gap`   | Définit un espace entre les entrées.                                    |

## Propriétés
GRAVITY_TRANSLATION_BLOCK_12_END

| Nom             | Description                                                                                                                                           |                     Type                     |   Défaut   |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------: | :---------: |
| apiRef           | Ref vers l'[API](#api).                                                                                                                               |              `React.RefObject`               |             |
| aria-describedby | Attribut HTML `aria-describedby`                                                                                                                     |                   `string`                   |             |
| aria-label       | Attribut HTML `aria-label`                                                                                                                           |                   `string`                   |             |
| aria-labelledby  | Attribut HTML `aria-labelledby`                                                                                                                      |                   `string`                   |             |
| autoFocus        | Active ou désactive la mise au focus sur le premier champ de saisie lors du rendu initial.                                                                                |                  `boolean`                   |             |
| className        | Attribut HTML `class`                                                                                                                                |                   `string`                   |             |
| defaultValue     | Valeur initiale pour un composant non contrôlé.                                                                                                          |                  `string[]`                  |             |
| disabled         | Active ou désactive l'état `disabled`                                                                                                                          |                  `boolean`                   |             |
| errorMessage     | Texte d'erreur placé sous le coin inférieur gauche, partageant l'espace avec le conteneur de note. Visible uniquement lorsque `validationState` est défini sur `"invalid"`. |              `React.ReactNode`               |             |
| id               | Préfixe de l'attribut HTML `id` pour les champs de saisie. L'ID résultant contiendra également la partie `"-${index}"`.                                                     |                   `string`                   |             |
| length           | Nombre de champs de saisie.                                                                                                                               |                   `number`                   |     `4`     |
| mask             | Lorsque défini sur `true`, les valeurs des champs de saisie seront masquées comme dans un champ de mot de passe.                                                                            |                  `boolean`                   |             |
| name             | Attribut HTML `name` pour le champ de saisie.                                                                                                                      |                   `string`                   |             |
| form             | Le formulaire associé à l'élément de saisie sous-jacent.                                                                                                   |                   `string`                   |             |
| note             | Un élément placé sous le coin inférieur droit, partageant l'espace avec le conteneur d'erreur.                                                             |              `React.ReactNode`               |             |
| onUpdate         | Callback déclenché lorsque l'un des champs de saisie change.                                                                                                            |         `(value: string[]) => void`          |             |
| onUpdateComplete | Callback déclenché lorsque l'un des champs de saisie change et que tous sont remplis.                                                                                 |         `(value: string[]) => void`          |             |
| otp              | Lorsque défini sur `true`, ajoute `autocomplete="one-time-code"` aux champs de saisie.                                                                                    |                  `boolean`                   |             |
| placeholder      | Placeholder pour les champs de saisie                                                                                                                                |                   `string`                   |             |
| qa               | Attribut HTML `data-qa` utilisé à des fins de test.                                                                                                   |                   `string`                   |             |
| responsive       | La largeur du parent est répartie uniformément entre les champs de saisie.                                                                      |                  `boolean`                   |             |
| size             | Taille du champ de saisie.                                                                                                                                     |           `"s"` `"m"` `"l"` `"xl"`           |    `"m"`    |
| style            | Attribut HTML `style`                                                                                                                                |            `React.CSSProperties`             |             |
| type             | Détermine les types de valeurs de saisie autorisés.                                                                                                       |         `"numeric"` `"alphanumeric"`         | `"numeric"` |
| validationState  | État de validation qui affecte l'apparence du composant.                                                                                               |                 `"invalid"`                  |             |
| value            | Valeur actuelle pour le composant contrôlé.                                                                                                           |                  `string[]`                  |             |
| `onFocus`        | Callback déclenché lorsque le composant reçoit le focus.                                                                                                     | `(event: React.FocusEvent<Element>) => void` |             |
| `onBlur`         | Callback déclenché lorsque le composant perd le focus.                                                                                                        | `(event: React.FocusEvent<Element>) => void` |             |