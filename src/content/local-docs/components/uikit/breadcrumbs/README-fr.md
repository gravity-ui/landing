`Breadcrumbs` est un élément de navigation qui indique l'emplacement actuel d'une page dans la hiérarchie d'un site web. Il fournit des liens qui permettent aux utilisateurs de revenir à des niveaux supérieurs dans la hiérarchie, facilitant ainsi la navigation sur un site web comportant plusieurs couches. Les `Breadcrumbs` sont particulièrement utiles pour les grands sites web et les applications avec une structure de pages basée sur la hiérarchie.

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

## Exemple

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Événements

Utilisez la propriété `onAction` comme rappel pour gérer les événements de clic sur les éléments.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Liens

Dans `Breadcrumbs`, cliquer sur un élément déclenche normalement `onAction`. Cependant, vous pouvez également les utiliser comme liens vers d'autres pages ou sites web. Pour ce faire, ajoutez la propriété `href` au composant `<Breadcrumbs.Item>` :

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Contexte racine

Pour aider les utilisateurs à comprendre la structure globale, certaines applications affichent toujours le point de départ (élément racine) des `Breadcrumbs`, même lorsque d'autres éléments sont masqués en raison de limitations d'espace.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Séparateur

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### Breadcrumbs avec icônes

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Intégration avec les routeurs

GRAVITY_TRANSLATION_BLOCK_12_END

### Repères

Lorsque les `Breadcrumbs` sont utilisés comme élément de navigation principal d'une page, ils peuvent être placés dans un [repère de navigation](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html). Les repères aident les utilisateurs de technologies d'assistance à trouver rapidement les sections principales d'une page. Pour créer un repère de navigation, placez les `Breadcrumbs` à l'intérieur d'un élément `<nav>` avec un `aria-label` :

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

### Éléments désactivés

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

### Contenu de fin

GRAVITY_TRANSLATION_BLOCK_17_END

GRAVITY_TRANSLATION_BLOCK_18_END

## Propriétés

| Nom             | Description                                                                  | Type                                       | Défaut |
| :-------------- | :--------------------------------------------------------------------------- | :----------------------------------------- | :----- |
| children        | Éléments du fil d'Ariane                                                     | `React.ReactElement<BreadcrumbsItemProps>` |        |
| disabled        | Détermine si `Breadcrumbs` est désactivé.                                    | `boolean`                                  |        |
| showRoot        | Active ou désactive l'affichage permanent de l'élément racine si les éléments sont réduits. | `boolean`                                  |        |
| popupPlacement  | Style de la fenêtre contextuelle de l'élément réduit.                        | `PopupPlacement`                           |        |
| popupStyle      | Style de la fenêtre contextuelle de l'élément réduit.                        | `"staircase"`                              |        |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests                              | `string`                                   |        |
| separator       | Nœud séparateur personnalisé.                                                 | `React.ReactNode`                          | "/"    |
| action          | Gestionnaire d'événement `click`.                                            | `(id: Key) => void`                        |        |
| id              | ID unique de l'élément.                                                      | `string`                                   |        |
| className       | Nom de la classe CSS pour l'élément.                                         | `string`                                   |        |
| style           | Définit le style en ligne pour l'élément.                                    | `CSSProperties`                            |        |
| aria-label      | Définit une valeur de chaîne qui étiquette l'élément actuel.                 | `string`                                   |        |
| aria-labelledby | Identifie l'élément (ou les éléments) qui étiquette l'élément actuel.        | `string`                                   |        |
| aria-describedby | Identifie l'élément (ou les éléments) qui décrivent l'objet.                | `string`                                   |        |
| endContent      | Nœud de l'utilisateur rendu après le dernier élément du fil d'Ariane.        | `React.ReactNode`                          |        |

### BreadcrumbsItemProps

| Nom        | Description                                                    | Type                              | Défaut |
| :--------- | :------------------------------------------------------------- | :-------------------------------- | :----- |
| children   | Contenu des fil d'Ariane.                                      | `string`                          |        |
| title      | Représentation textuelle du contenu de l'élément.              | `string`                          |        |
| aria-label | Étiquette d'accessibilité pour l'élément.                      | `string`                          |        |
| href       | URL à utiliser pour le lien hypertexte.                        | `string`                          |        |
| target     | Fenêtre cible pour le lien.                                    | `React.HTMLAttributeAnchorTarget` |        |
| rel        | Relation entre la ressource liée et la page actuelle.          | `string`                          |        |
| disabled   | Indique si le BreadcrumbsItem est désactivé.                   | `boolean`                         |        |