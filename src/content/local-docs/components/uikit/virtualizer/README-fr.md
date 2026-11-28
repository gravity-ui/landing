GRAVITY_TRANSLATION_BLOCK_0_END

Le Virtualizer ne rend que la fenêtre de lignes actuellement visible, ce qui rend abordables les listes de dizaines de milliers d'éléments.

```tsx
import {ListVirtualizer, Virtualizer} from '@gravity-ui/uikit/virtualizer';
```

Ce point d'entrée nécessite `@tanstack/react-virtual` : il s'agit d'une dépendance pair optionnelle, installez-la à côté de `@gravity-ui/uikit`.

Deux éléments résident ici. `Virtualizer` est le moteur — un conteneur de défilement qui positionne et mesure les lignes que vous rendez vous-même. `ListVirtualizer` est la couche de virtualisation de la [List](../List/README.md) : elle enveloppe une `<List>`, et la liste est rendue via le moteur sans aucune autre modification.

## Virtualizer

L'élément que le composant rend est le conteneur de défilement lui-même, sa hauteur doit donc être limitée. `getItemSize` est l'estimation utilisée avant qu'une ligne ne soit rendue ; à moins que `measure` ne soit désactivé, la hauteur mesurée d'une ligne de premier niveau la remplace après le montage, c'est pourquoi les lignes de hauteur variable ne nécessitent aucune configuration.

```tsx
import {Virtualizer} from '@gravity-ui/uikit/virtualizer';

const ROW_HEIGHT = 32;

function Log({records}) {
  return (
    <Virtualizer
      style={{height: 400}}
      count={records.length}
      getItemSize={() => ROW_HEIGHT}
      getItemKey={(index) => records[index].id}
      renderRow={({index}) => <div style={{height: ROW_HEIGHT}}>{records[index].message}</div>}
    />
  );
}
```

## ListVirtualizer

Le wrapper est la seule chose qui change — la liste à l'intérieur reste telle quelle. Toutes ses propriétés de configuration sont optionnelles : sans `estimateItemSize`, les hauteurs de ligne proviennent de la `size` de la liste.

```tsx
import {List} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

function TrackList({tracks}) {
  return (
    <ListVirtualizer estimateItemSize={28}>
      <List
        aria-label="Archive"
        style={{maxHeight: 480}}
        items={tracks}
        getItemContent={(track) => track.title}
      />
    </ListVirtualizer>
  );
}
```

La racine de la `List` devient le conteneur de défilement, limiter sa hauteur dépend donc de vous — sinon la fenêtre dégénère en liste complète. Les détails de la couche se trouvent dans la section [Virtualization](../List/README.md#virtualization) de la List.

### Un wrapper pour toute l'application

Le wrapper est un fournisseur de contexte : il couvre chaque `List` et `Select` en dessous, y compris les popups des `Select`. Avec `minItemsCount`, il peut se tenir une fois à côté du `Provider` de thème et ne virtualiser que les longues listes — une liste de moins de lignes est rendue comme s'il n'y avait pas de wrapper, chaque ligne dans le DOM.

```tsx
import {Provider} from '@gravity-ui/uikit';
import {ListVirtualizer} from '@gravity-ui/uikit/virtualizer';

root.render(
  <Provider theme="light">
    <ListVirtualizer minItemsCount={50}>
      <App />
    </ListVirtualizer>
  </Provider>,
);
```

Une `List` compte ses lignes, y compris les en-têtes de section. Un `Select` compte ses options sans les en-têtes de groupe et sans le filtre, donc taper dans le filtre ne fait pas passer la liste d'un mode à l'autre.

Un wrapper à l'intérieur d'un autre ne change que ce qui lui est donné et prend le reste de celui du dessus, comme le fait un `Provider` de thème imbriqué. Autour d'une seule liste sous le wrapper racine :

- `<ListVirtualizer overscan={20}>` conserve le seuil de la racine et modifie le tampon ;
- `<ListVirtualizer minItemsCount={0}>` virtualise la liste quelle que soit sa taille ;
- `<ListVirtualizer minItemsCount={Infinity}>` la laisse telle quelle, et le chunk n'est pas chargé pour elle.

### Chargement à la demande

Le code de la fenêtre — y compris `@tanstack/react-virtual` — est un chunk à part entière : importer `ListVirtualizer` ne l'inclut pas dans le bundle de l'application. Le chunk est chargé lorsque la première liste suffisamment longue pour `minItemsCount` est rendue, et un `Select` qui va être virtualisé commence à le charger au montage, avant l'ouverture de son popup. Jusqu'à ce que le chunk arrive, la liste affiche ses premières lignes dans la même racine : la page n'est pas laissée vide, et la fenêtre les remplace dès qu'elle peut être rendue, défilée vers la ligne active que la liste affichait. Si le chunk ne parvient pas à se charger, l'erreur atteint la limite de la prochaine boundary d'erreur de la liste.

> [!NOTE]
> Dans le HTML rendu côté serveur, une liste virtualisée affiche ses premières lignes : il n'y a pas de viewport pour mesurer la fenêtre, donc la fenêtre prend le relais après l'hydratation. Le reste des lignes ne se trouve pas dans le balisage — laissez une liste non virtualisée lorsque tout son contenu doit y être.

## Propriétés

### Virtualizer

Le reste des propriétés est appliqué à l'élément du conteneur de défilement.

| Nom                  | Description                                                                                              |                          Type                          | Défaut |
| :------------------- | :------------------------------------------------------------------------------------------------------- | :----------------------------------------------------: | :-----: |
| count                | Le nombre d'éléments de premier niveau dans la liste                                                     |                        `number`                        |         |
| getItemSize          | La hauteur d'un élément, y compris ses enfants ; les enfants arrivent avec le `parentKey`               |            `(index, parentKey?) => number`             |         |
| getItemKey           | La clé d'un élément ; les enfants arrivent avec le `parentKey`                                          |              `(index, parentKey?) => Key`              |         |
| renderRow            | Rend une ligne : l'élément, la clé de son parent et une fonction de rappel pour rendre ses enfants      | `(item, parentKey, renderChildren) => React.ReactNode` |         |
| measure              | Mesure les hauteurs réelles des lignes de premier niveau après le montage au lieu de faire confiance à `getItemSize` |                       `boolean`                        | `true`  |
| overscan             | Le nombre de lignes rendues au-dessus et en dessous de la fenêtre visible                                 |                        `number`                        |   `0`   |
| disableVirtualization | Rend toutes les lignes ; utile pour une liste dont on sait qu'elle est petite                            |                       `boolean`                        |         |
| persistedIndexes     | Lignes conservées dans la fenêtre même lorsqu'elles sont hors de la vue ; chaque entrée est un chemin d'index dans la hiérarchie |                   `Array<number[]>`                    |         |
| loading              | Indique si d'autres éléments sont en cours de chargement : tant que cela ne revient pas à `false`, `onLoadMore` n'est pas rappelé à nouveau |                       `boolean`                        |         |
| onLoadMore           | Appelée lorsque le défilement approche de la fin                                                         |                      `() => void`                      |         |
| apiRef               | Référence vers l'API impérative : `scrollToIndex`, `scrollToOffset`, `scrollOffset`, `scrollRect`          |              `React.Ref<VirtualizerApi>`               |         |
| containerRef         | Référence de l'élément conteneur de défilement                                                           |                `React.Ref<HTMLElement>`                |         |

### ListVirtualizer

| Nom             | Description                                                                                                                               |            Type             |          Défaut          |
| :-------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :----------------------: |
| children        | Le `<List>` à l'intérieur                                                                                                                 |         `ReactNode`         |                          |
| estimateItemSize | L'estimation de la hauteur d'une ligne avant son rendu — une constante ou une fonction du contexte de la ligne                                          | `number \| (ctx) => number` | par la `size` de la liste |
| measure         | Mesure les hauteurs réelles des lignes après le montage (lignes de hauteur variable prêtes à l'emploi)                                               |          `boolean`          |          `true`          |
| minItemsCount   | Une liste de moins de lignes est rendue comme s'il n'y avait pas d'enveloppe ; un `Select` compte ses options, sans les en-têtes de groupe et sans le filtre |          `number`           |            `0`           |
| overscan        | Le tampon de lignes en dehors de la fenêtre visible                                                                                          |          `number`           |            `5`           |

Une enveloppe à l'intérieur d'une autre prend les props qu'elle ne reçoit pas de celle du dessus : les valeurs par défaut du tableau sont celles de l'enveloppe la plus externe.