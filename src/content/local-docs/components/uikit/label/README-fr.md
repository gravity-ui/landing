Vous pouvez utiliser des `Label`s pour mettre en évidence certaines informations. Un `Label` avec un bouton `Close` ou `Copy` peut être utile pour diverses actions simples.

Les `Label`s sont les plus adaptés pour afficher des informations textuelles sur une seule ligne avec différents codes couleur qui indiquent leur importance.

```tsx
import {Label} from '@gravity-ui/uikit';
```

## Apparence

Un `Label` peut être affiché dans plusieurs styles.

### Thème

Utilisez la propriété `theme` pour appliquer différents thèmes pour divers statuts. Vous pouvez utiliser les valeurs suivantes : `normal`, `info`, `success`, `warning`, `danger`, `utility`, `unknown` et `clear`.
Le thème par défaut est `normal`.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Type

La propriété `type` ajoute diverses options à un `Label` :

`copy` : Ajoute un bouton de copie ; lorsqu'il est cliqué, il copie la valeur de la propriété `copyText`.

`close` : Ajoute un bouton de fermeture pour gérer les listes de labels.

`info` : Ajoute une icône d'information au label.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Icône

Vous pouvez ajouter une icône avec la propriété `icon`. Pour ce faire, utilisez le composant [`Icon`](../Icon), qui est un wrapper spécial pour les SVGs.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Valeur

Vous pouvez utiliser des `Label`s pour afficher des informations clé-valeur. Pour cela, vous devez fournir la clé à la propriété `children`, et la valeur à `value` :

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## État

Un `label` peut avoir différents états :

- `disabled` : Aucune interaction n'est autorisée.
- `interactive` : Rend le label survolable.
- `loading` : Affiche un état de chargement.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Taille

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Propriétés

| Nom             | Description                                                                    |                  Type                   |   Défaut   |
| :-------------- | :----------------------------------------------------------------------------- | :-------------------------------------: | :---------: |
| children        | Contenu                                                                        |            `React.ReactNode`            |             |
| className       | Attribut HTML `class`                                                          |                `string`                 |             |
| closeButtonLabel | `aria-label` du bouton de fermeture                                             |                `string`                 |             |
| copyButtonLabel  | `aria-label` du bouton de copie                                                |                `string`                 |             |
| copyText        | Texte à copier                                                                 |                `string`                 |             |
| disabled        | État désactivé                                                                 |                `boolean`                |             |
| icon            | Icône de l'étiquette (à gauche)                                                |            `React.ReactNode`            |             |
| interactive     | Active l'effet de survol. Note : ne peut pas être désactivé pour les étiquettes `copy` et `info`. |                `boolean`                |             |
| loading         | État de chargement                                                             |                `boolean`                |   `false`   |
| onClick         | Gestionnaire d'événement `click`                                               |               `Function`                |             |
| onCloseClick    | Gestionnaire d'événement `click` du bouton de fermeture                        |               `Function`                |             |
| onCopy          | Gestionnaire d'événement `copy`                                                |               `Function`                |             |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests                               |                `string`                 |             |
| size            | Taille de l'étiquette                                                          |       `"2xs"` `"xs"` `"s"` `"m"`        |   `"xs"`    |
| theme           | Thème de l'étiquette                                                           |                `string`                 | `"normal"`  |
| title           | Attribut HTML `title`                                                          |                `string`                 |             |
| type            | Type d'étiquette                                                               | `"default"` `"copy"` `"close"` `"info"` | `"default"` |
| value           | Valeur de l'étiquette (affichée sous la forme `"children : value"`)           |            `React.ReactNode`            |             |
| width           | Contrôle comment l'étiquette utilise l'espace du parent                      |                `"auto"`                 |             |