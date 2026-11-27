Les `Breadcrumbs` sont un élément de navigation qui indique l'emplacement actuel d'une page dans la hiérarchie d'un site web. Ils fournissent des liens qui permettent aux utilisateurs de revenir à des niveaux supérieurs dans la hiérarchie, facilitant ainsi la navigation sur un site web comportant plusieurs couches. Les fil d'Ariane sont particulièrement utiles pour les grands sites web et les applications dont la structure des pages est basée sur la hiérarchie.

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

Migration depuis l'ancien composant `Breadcrumbs` ? Consultez le [guide de migration](https://github.com/gravity-ui/uikit/blob/main/docs/migration-from-legacy-breadcrumbs.md).

GRAVITY_TRANSLATION_BLOCK_0_END

## Exemple

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Événements

Utilisez la propriété `onAction` comme rappel pour gérer les événements de clic sur les éléments.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Liens

Dans `Breadcrumbs`, cliquer sur un élément déclenche normalement `onAction`. Cependant, vous pouvez également les utiliser comme liens vers d'autres pages ou sites web. Pour ce faire, ajoutez la propriété `href` au composant `<Breadcrumbs.Item>` :

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Contexte racine

Pour aider les utilisateurs à comprendre la structure globale, certaines applications affichent toujours le point de départ (élément racine) du fil d'Ariane, même lorsque d'autres éléments sont masqués en raison de limitations d'espace.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Séparateur

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

### Fil d'Ariane avec icônes

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### Intégration avec les routeurs

GRAVITY_TRANSLATION_BLOCK_13_END

### Points de repère

Lorsque les fils d'Ariane sont utilisés comme élément de navigation principal pour une page, ils peuvent être placés dans un [point de repère de navigation](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html). Les points de repère aident les utilisateurs de technologies d'assistance à trouver rapidement les sections principales d'une page. Pour créer un point de repère de navigation, placez le fil d'Ariane à l'intérieur d'un élément `<nav>` avec un `aria-label` :

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

### Éléments désactivés

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Contenu de fin

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

## Propriétés

| Nom             | Description                                                                  | Type                 | Défaut |
| :-------------- | :--------------------------------------------------------------------------- | :------------------- | :----- |
| children        | Éléments du fil d'Ariane                                                     | `React.ReactNode`    |        |
| disabled        | Détermine si `Breadcrumbs` est désactivé.                                    | `boolean`            |        |
| showRoot        | Active ou désactive l'affichage permanent de l'élément racine si les éléments sont réduits. | `boolean`            |        |
| maxItems        | Nombre maximum d'éléments visibles, y compris le contrôle de réduction.      | `number`             |        |
| itemComponent   | Composant utilisé pour rendre les éléments.                                  | `React.ElementType`  |        |
| popupPlacement  | Style de la fenêtre contextuelle de l'élément réduit.                        | `PopupPlacement`     |        |
| popupStyle      | Style de la fenêtre contextuelle de l'élément réduit.                        | `"staircase"`        |        |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests                              | `string`             |        |
| separator       | Nœud séparateur personnalisé.                                                 | `React.ReactNode`    | "/"    |
| onAction        | Gestionnaire appelé avec la clé de l'élément cliqué.                         | `(key: Key) => void` |        |
| id              | ID unique de l'élément.                                                      | `string`             |        |
| className       | Nom de la classe CSS pour l'élément.                                         | `string`             |        |
| style           | Définit le style en ligne de l'élément.                                      | `CSSProperties`      |        |
| aria-label      | Définit une valeur de chaîne qui étiquette l'élément courant.                | `string`             |        |
| aria-labelledby | Identifie l'élément (les éléments) qui étiquette l'élément courant.          | `string`             |        |
| aria-describedby | Identifie l'élément (les éléments) qui décrit l'objet.                     | `string`             |        |
| endContent      | Nœud de l'utilisateur rendu après le dernier élément du fil d'Ariane.        | `React.ReactNode`    |        |

### BreadcrumbsItemProps

| Nom       | Description                                                    | Type                              | Défaut |
| :-------- | :------------------------------------------------------------- | :-------------------------------- | :----- |
| children  | Contenu des fil d'ariane.                                      | `React.ReactNode`                 |        |
| title     | Représentation textuelle du contenu de l'élément.              | `string`                          |        |
| aria-label| Étiquette d'accessibilité pour l'élément.                      | `string`                          |        |
| href      | URL à utiliser pour le lien hypertexte.                        | `string`                          |        |
| onClick   | Gestionnaire de clic pour l'élément.                           | `React.MouseEventHandler`         |        |
| target    | Fenêtre cible pour le lien.                                    | `React.HTMLAttributeAnchorTarget` |        |
| rel       | Relation entre la ressource liée et la page actuelle.          | `string`                          |        |
| disabled  | Indique si le BreadcrumbsItem est désactivé.                   | `boolean`                         |        |