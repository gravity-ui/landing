`Link` fait partie d'un texte qui, lorsqu'il est cliqué, dirige l'utilisateur vers une autre partie de la page, une autre page du service ou une page Web externe.

```tsx
import {Link} from '@gravity-ui/uikit';
```

Sa principale différence avec [Button](../Button) est sa fonction de navigation. Le plus souvent, un `Link` mène à une autre page ou ouvre un nouvel onglet du navigateur.

## Apparence

Il existe trois types de liens disponibles : `normal` (le brun habituel), `primary` (noir) et `secondary` (gris). Vous pouvez le gérer avec la propriété `view`. Vous pouvez également activer l'affichage indiquant que le lien a déjà été cliqué à l'aide de la propriété `visitable`.

### Normal

C'est le modèle de `link` le plus familier et le mieux établi. Il est utilisé pour mettre en évidence visuellement un élément dans un texte ou un tableau, et comme partie de la navigation. Vous pouvez l'utiliser pour naviguer vers des pages internes ainsi que vers des sources externes, y compris la documentation. De plus, ce type est utilisé pour les pages d'erreur et les états zéro.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Primary

Ce type est utilisé lorsqu'il est nativement clair qu'un élément est cliquable, mais l'utilisation d'un `Link` brun surchargerait l'interface et vous empêcherait de mettre correctement en évidence les points clés d'une page.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Secondary

Tout comme le `Link` primary, ce type est utilisé lorsqu'il est nativement clair pour l'utilisateur qu'un élément est cliquable, tandis que la navigation à travers celui-ci n'est pas essentielle et affecte un petit nombre de scénarios. Son objectif principal est de ne pas distraire l'utilisateur des points clés de la page. Le type `Secondary` est le plus souvent utilisé dans les fil d'Ariane ou lors de l'affichage d'attributs secondaires.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Visitable

Cette propriété est utilisée pour montrer que le `Link` a déjà été cliqué.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## `href`

La propriété `href` est obligatoire.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Utilisation

Vous pouvez utiliser un `Link` à la fois comme élément de texte indépendant et comme partie du texte :

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Propriétés

`Link` accepte toutes les propriétés valides d'un élément `a` en plus de celles-ci :

| Nom      | Description                                |                 Type                 |  Défaut   |
| :-------- | :----------------------------------------- | :----------------------------------: | :-------: |
| children  | Contenu du `Link`                          |          `React.ReactNode`           |           |
| href      | Attribut HTML `href`                       |               `string`               |           |
| qa        | Attribut HTML `data-qa`, utilisé pour les tests |               `string`               |           |
| underline | Affiche un soulignement sous le `Link`     |              `boolean`               |  `false`  |
| view      | Apparence du `Link`                        | `"normal"` `"primary"` `"secondary"` | `"normal"` |
| visitable | Affiche l'état CSS `:visitable`            |              `boolean`               |  `false`  |