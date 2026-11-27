<!--GITHUB_BLOCK-->

# ActionBar

<!--/GITHUB_BLOCK-->

Le composant est une barre horizontale flexible qui fournit une disposition standardisée pour organiser les éléments de navigation, les actions et le contenu informatif au sein d'une application. Il sert de conteneur pour organiser les éléments de l'interface utilisateur tels que les fil d'Ariane, les boutons et les menus déroulants en sections et groupes définis.

<!--GITHUB_BLOCK-->

## Usage

```typescript jsx
import {Button} from '@gravity-ui/uikit';
import {Breadcrumbs as LegacyBreadcrumbs} from '@gravity-ui/uikit/legacy';
import {ActionBar} from '@gravity-ui/navigation';

function Page() {
  return (
    <ActionBar aria-label="Actions bar">
      <ActionBar.Section>
        <ActionBar.Group>
          <ActionBar.Item>
            <LegacyBreadcrumbs
              lastDisplayedItemsCount={1}
              firstDisplayedItemsCount={1}
              items={[{text: 'Root Item', action() {}}]}
            />
          </ActionBar.Item>
        </ActionBar.Group>

        <ActionBar.Group pull="right">
          <ActionBar.Item>
            <Button>Do something</Button>
          </ActionBar.Item>
        </ActionBar.Group>
      </ActionBar.Section>
    </ActionBar>
  );
}
```

<!--/GITHUB_BLOCK-->

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

<!--GITHUB_BLOCK-->

```tsx
import {Button} from '@gravity-ui/uikit';
import {Breadcrumbs as LegacyBreadcrumbs} from '@gravity-ui/uikit/legacy';
import {ActionBar} from '@gravity-ui/navigation';

<ActionBar aria-label="Actions bar">
  <ActionBar.Section type="secondary">
    <ActionBar.Group>
      <ActionBar.Item>
        <Button>Toggle Article TOC</Button>
      </ActionBar.Item>
    </ActionBar.Group>
  </ActionBar.Section>

  <ActionBar.Section type="primary">
    <ActionBar.Group>
      <ActionBar.Item>
        <LegacyBreadcrumbs
          lastDisplayedItemsCount={1}
          firstDisplayedItemsCount={1}
          items={[
            {text: 'Wiki Main Page', action() {}},
            {text: 'Wiki Article', action() {}},
          ]}
        />
      </ActionBar.Item>
    </ActionBar.Group>
  </ActionBar.Section>
</ActionBar>;
```

<!--/GITHUB_BLOCK-->

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

<!--GITHUB_BLOCK-->

### Example

```typescript jsx
import {Button} from '@gravity-ui/uikit';
import {Breadcrumbs as LegacyBreadcrumbs} from '@gravity-ui/uikit/legacy';
import {ActionBar} from '@gravity-ui/navigation';

function Page() {
  return (
    <ActionBar aria-label="Actions bar">
      <ActionBar.Section>
        <ActionBar.Group pull="right">
          <ActionBar.Item>
            <Button>Do something</Button>
          </ActionBar.Item>

          <ActionBar.Separator />

          <ActionBar.Item>
            <Button>Do something</Button>
          </ActionBar.Item>
        </ActionBar.Group>
      </ActionBar.Section>
    </ActionBar>
  );
}
```

<!--/GITHUB_BLOCK-->
