<!--GITHUB_BLOCK-->

# List

<!--/GITHUB_BLOCK-->

Le composant `List` affiche une liste d'éléments filtrables, triables et virtualisés avec prise en charge du rendu personnalisé et de la navigation au clavier.

```tsx
import {List} from '@gravity-ui/uikit';
```

### ItemsHeight

Détermine la hauteur de la liste d'éléments (ou une fonction qui renvoie la valeur de hauteur pour une liste). Cela peut être utile lors de la définition dynamique de la hauteur de la liste, par exemple, `(items: []) => number`.

### Items

Fournit un tableau d'éléments pour une liste :

<!--SANDBOX
import {List} from '@gravity-ui/uikit';

export default function () {
    return (
        <List items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']} itemsHeight={160} />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']} itemsHeight={160} />
```

<!--/GITHUB_BLOCK-->

Un élément peut être un scalaire ou une valeur arbitraire et doit être `truthy` dans tous les cas.
S'il s'agit d'une valeur arbitraire, assurez-vous de spécifier les fonctions de filtrage et de rendu.
Le rendu par défaut ne fournit l'élément que sous forme de texte.

Le champ spécial `item.disabled` désactive un élément.

La personnalisation du rendu et de la hauteur offre une grande marge de manœuvre pour l'expérimentation.
Par exemple, le code ci-dessous vous permet d'émuler des groupes :

<!--SANDBOX
import type {ListProps} from '@gravity-ui/uikit';
import {List} from '@gravity-ui/uikit';

type Item = {
    title: string;
    group?: boolean;
};

const items: ListProps<Item>['items'] = [
    {
        title: 'one',
        group: true,
        disabled: true,
    },
    {
        title: 'two',
    },
    {
        title: 'three',
        group: true,
        disabled: true,
    },
    {
        title: 'four',
    },
];

export default function () {
    return (
        <List
            items={items}
            onItemClick={(value) => console.log(value)}
            renderItem={(item) => {
                if (item.group) {
                    return (
                        <div className={'group'}>
                            <div className={'select-text'}>{item.title}</div>
                        </div>
                    );
                }

                return (
                    <div className={'select'}>
                        <div className={'select-text'}>{item.title}</div>
                    </div>
                );
            }}
            itemHeight={(item) => (item.group ? 24 : 36)}
            itemsHeight={160}
            filterItem={(filter) => (item) => item.title.includes(filter)}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={[
    {
      title: 'one',
      group: true,
      disabled: true,
    },
    {
      title: 'two',
    },
    {
      title: 'three',
      group: true,
      disabled: true,
    },
    {
      title: 'four',
    },
  ]}
  onItemClick={(value) => console.log(value)}
  renderItem={(item) => {
    if (item.group) {
      return (
        <div className={'group'}>
          <div className={'select-text'}>{item.title}</div>
        </div>
      );
    }
    return (
      <div className={'select'}>
        <div className={'select-text'}>{item.title}</div>
      </div>
    );
  }}
  itemHeight={(item) => (item.group ? 24 : 36)}
  itemsHeight={160}
  filterItem={(filter) => (item) => item.title.includes(filter)}
/>
```

<!--/GITHUB_BLOCK-->

### Filterable

La propriété `filterable` désactive l'entrée pour rechercher un élément si sa valeur est `false`. Sa valeur par défaut est `true`.

<!--SANDBOX
import {List} from '@gravity-ui/uikit';

export default function () {
    return (
        <List
            items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
            itemsHeight={160}
            filterable={false}
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
  itemsHeight={160}
  filterable={false}
/>
```

<!--/GITHUB_BLOCK-->

### Sortable

La propriété `sortable` permet d'échanger les éléments de la liste si sa valeur est `true`. Sa valeur par défaut est `false`.

<!--SANDBOX
import {List} from '@gravity-ui/uikit';

export default function () {
    return (
        <List
            items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
            itemsHeight={160}
            sortable
        />
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
  itemsHeight={160}
  sortable={true}
/>
```

<!--/GITHUB_BLOCK-->

### Virtualization

Pour activer la virtualisation, assurez-vous que l'une des deux conditions suivantes est remplie :

1. Vous définissez la propriété `itemsHeight`. Dans ce cas, la hauteur de la liste sera fixe et égale à cette valeur.
2. Vous définissez le style `display: flex` pour le conteneur parent de la liste. Dans ce cas, la liste s'adaptera à la largeur du conteneur.

### Gestion externe

Parfois, vous voudrez peut-être gérer l'activité des éléments au clavier en maintenant le focus sur un élément externe.
Le transfert de l'événement `onKeyDown` vers une liste peut vous aider ici.
De même, vous pouvez transférer `onFocus` et `onBlur` si vous avez besoin de répéter le comportement lorsqu'un élément actif est perdu.

### Filter

La propriété `filter` fournit la valeur du filtre utilisée avec le tri externe.

## Propriétés

| Nom              | Description
