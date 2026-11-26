Le composant Accordion vous permet de créer des panneaux de contenu déroulants où les utilisateurs peuvent afficher ou masquer des sections d'informations. Ceci est utile pour organiser une grande quantité de contenu de manière compacte.

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

## Contrôle de l'état de l'accordéon

Vous pouvez contrôler l'état de l'accordéon à l'aide des propriétés `value` et `onUpdate` du composant racine, ou par élément.

Exemple de contrôle de l'état à partir du composant racine :

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

Exemple de contrôle de l'état par élément via la propriété `expanded` :

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Taille

Utilisez la propriété `size` pour contrôler la taille de l'`Accordion`. La taille par défaut est `m`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Vue

`solid` : Vue principale avec fond (utilisée par défaut).

`top-bottom` : Vue avec des bordures supérieure et inférieure.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Position de la flèche

`end` : La flèche est positionnée à la fin de l'en-tête (utilisée par défaut).

`start` : La flèche est positionnée au début de l'en-tête.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Multiple

La propriété `multiple` permet à plusieurs éléments d'accordéon d'être développés simultanément.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Résumé personnalisé

Utilisez le composant `Accordion.Summary` pour créer un en-tête personnalisé.

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

## État désactivé

Les éléments d'accordéon individuels peuvent être désactivés à l'aide de la propriété `disabled`.

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

## Propriétés

### Accordion

| Nom           | Description                                        |            Type            |  Défaut  |
| :------------ | :------------------------------------------------- | :------------------------: | :------: |
| size          | Taille de l'accordéon                              |     `"m"` `"l"` `"xl"`     |   `"m"`   |
| view          | Apparence de l'accordéon                           |  `"solid"` `"top-bottom"`  | `"solid"` |
| multiple      | Permet à plusieurs éléments d'être développés simultanément |         `boolean`          |  `false`  |
| arrowPosition | Position de l'indicateur de flèche                 |     `"start"` `"end"`      |  `"end"`  |
| defaultValue  | Valeur par défaut pour l'état non contrôlé         | `string` `string[]` `null` |          |
| value         | Valeur actuelle pour l'état contrôlé               | `string` `string[]` `null` |          |
| onUpdate      | Fonction de rappel appelée lorsque l'état change   |         `Function`         |          |
| ariaLevel     | Niveau de titre pour l'accessibilité               |          `number`          |    `3`    |
| className     | Nom de classe CSS                                  |          `string`          |          |
| qa            | Attribut HTML `data-qa`, utilisé pour les tests    |          `string`          |          |

### Accordion.Item

| Nom             | Description                                      |       Type        | Défaut |
| :-------------- | :----------------------------------------------- | :---------------: | :----: |
| value           | Identifiant unique de l'élément                  |     `string`      |        |
| summary         | En-tête de l'élément d'accordéon                 | `React.ReactNode` |        |
| expanded        | État développé contrôlé                         |     `boolean`     |        |
| defaultExpanded | État développé par défaut                       |     `boolean`     |        |
| disabled        | Désactive l'élément d'accordéon                  |     `boolean`     | `false` |
| keepMounted     | Garde le contenu dans le DOM même lorsqu'il est réduit |     `boolean`     |        |
| onUpdate        | Fonction de rappel appelée lorsque l'état de l'élément change |    `Function`     |        |
| className       | Nom de classe CSS                                |     `string`      |        |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests  |     `string`      |        |

### Accordion.Summary
GRAVITY_TRANSLATION_BLOCK_17_END

| Nom     | Description                                                                             |                      Type                       |                                          Défaut                                          |
| :------ | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | Fonction de rendu de résumé personnalisée                                               | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | Attribut HTML `data-qa`, utilisé pour les tests. Ne fonctionne que si `qa` est passé dans Accordion.Item |                    `string`                     | `${accordion-item}-summary` si `qa` est passé dans Accordion.Item, `disclosure-summary` si ce n'est pas le cas |

## API CSS

| Nom                           | Description                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | Rembourrage en ligne (horizontal) pour l'accordéon |