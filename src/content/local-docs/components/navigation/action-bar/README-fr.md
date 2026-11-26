GRAVITY_TRANSLATION_BLOCK_0_END

Le composant est une barre horizontale flexible qui fournit une disposition standardisée pour organiser les éléments de navigation, les actions et le contenu informatif au sein d'une application. Il sert de conteneur pour organiser les éléments de l'interface utilisateur tels que les fil d'Ariane, les boutons et les menus déroulants en sections et groupes définis.

GRAVITY_TRANSLATION_BLOCK_1_END

L'`ActionBar` fournit plusieurs composants imbriqués qui fonctionnent ensemble pour créer une disposition structurée : `ActionBar.Section`, `ActionBar.Group`, `ActionBar.Item`, `ActionBar.Separator`.

## Propriétés

| Nom        | Description                               |         Type          | Défaut |
| :--------- | :---------------------------------------- | :-------------------: | :----: |
| aria-label | Attribut `aria-label` HTML                |       `string`        |        |
| className  | Attribut `class` HTML                     |       `string`        |        |
| style      | Attribut `style` HTML                     | `React.CSSProperties` |        |
| qa         | Attribut `data-qa` HTML, utilisé pour les tests |       `string`        |        |

## ActionBar.Section

Composant décoratif pour séparer visuellement différents types de navigation.
Il existe deux types de sections présentés : `primary` et `secondary`. Nous recommandons qu'une application ait au moins une section `primary`. La section `secondary` peut être utilisée pour les contrôles spécifiques à l'application, qui doivent être accentués avec des marges plus petites et un séparateur horizontal de la section `primary`.

### Propriétés

| Nom       | Description                                      |            Type            |   Défaut   |
| :-------- | :----------------------------------------------- | :------------------------: | :--------: |
| type      | Le type spécifie le style visuel de la section | `"primary"`, `"secondary"` | `"primary"` |
| className | Attribut `class` HTML                            |          `string`          |            |
| style     | Attribut `style` HTML                            |   `React.CSSProperties`    |            |
| qa        | Attribut `data-qa` HTML, utilisé pour les tests  |          `string`          |            |

GRAVITY_TRANSLATION_BLOCK_2_END

## ActionBar.Group

Les groupes organisent les `ActionBar.Item` au sein d'une section et contrôlent leur alignement.

### Propriétés

| Nom              | Description                                                       |                                      Type                                       | Défaut |
| :--------------- | :---------------------------------------------------------------- | :-----------------------------------------------------------------------------: | :----: |
| pull             | Contrôle l'alignement du groupe                                   | `"left"`, `"left-grow"`, `"right"`, `"right-grow"`, `"center"`, `"center-grow"` |        |
| stretchContainer | Définit `flex-grow: 1` pour le groupe. Nécessite la prise en charge des fil d'Ariane UIKit@7 |                                    `boolean`                                    |        |
| className        | Attribut `class` HTML                                             |                                    `string`                                     |        |
| style            | Attribut `style` HTML                                             |                              `React.CSSProperties`                              |        |
| qa               | Attribut `data-qa` HTML, utilisé pour les tests                   |                                    `string`                                     |        |

## ActionBar.Item

Conteneur pour les éléments de l'interface utilisateur tels que les boutons, les fil d'Ariane ou d'autres composants qui doivent être dans un `ActionBar.Group`. Le composant ajoute des marges entre les éléments.

### Propriétés

| Nom       | Description                               |         Type          | Défaut |
| :-------- | :---------------------------------------- | :-------------------: | :----: |
| spacing   | Active l'espacement avec l'élément précédent |       `boolean`       | `true` |
| className | Attribut `class` HTML                     |       `string`        |        |
| style     | Attribut `style` HTML                     | `React.CSSProperties` |        |
| qa        | Attribut `data-qa` HTML, utilisé pour les tests |       `string`        |        |

## ActionBar.Separator

Séparateur visuel qui peut être placé entre les éléments d'un groupe pour les séparer visuellement.

GRAVITY_TRANSLATION_BLOCK_3_END