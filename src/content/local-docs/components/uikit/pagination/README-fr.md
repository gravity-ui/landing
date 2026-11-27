<!--GITHUB_BLOCK-->

# Pagination

<!--/GITHUB_BLOCK-->

`Pagination` affiche des contrôles de navigation de page — numéros de page avec des boutons précédent/suivant et un sélecteur de taille de page optionnel — utilisés pour diviser de longues listes ou tables sur plusieurs pages.

```tsx
import {Pagination} from '@gravity-ui/uikit';
```

## Utilisation

```jsx
import {Pagination, PaginationProps} from '@gravity-ui/uikit';

const [state, setState] = React.useState({page: 1, pageSize: 100});

const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
  setState((prevState) => ({...prevState, page, pageSize}));

const pagination = <Pagination page={1} pageSize={100} total={1000} onUpdate={handleUpdate} />;
```

## Composant personnalisé

Vous pouvez remplacer l'élément racine des éléments de pagination cliquables (boutons de navigation et de page) à l'aide de la prop `pageComponent`. Passez `pageComponent="a"` et retournez `href` depuis `getPageProps` pour utiliser des liens ordinaires. Pour les intégrations de routeur, passez un composant conscient du routeur tel que `Link` et retournez des props spécifiques au routeur, par exemple `to`.

`getPageProps` est appelé pour chaque élément cliquable (boutons de page et boutons de navigation). Il n'est **pas** appelé pour les points de suspension, l'indicateur "page de", l'élément de page simple (actuel) dans la disposition mobile, ou les boutons de navigation désactivés (ceux-ci restent toujours un `<button disabled>` natif inerte afin qu'ils ne puissent pas être activés, y compris via le clavier). Les props gérées par Pagination (`onClick`, `className`, `size`, `view`, `selected`, `disabled`, `qa`, `aria-current`, `extraProps`, `children`) ont la priorité sur les valeurs retournées par `getPageProps`.

### Liens ordinaires (`pageComponent="a"`)

```jsx
import {Pagination} from '@gravity-ui/uikit';
import type {PaginationProps, PaginationPagePropsGetter} from '@gravity-ui/uikit';

const total = 1000;
const page = 1;
const pageSize = 100;

const noop: PaginationProps['onUpdate'] = () => {};

const getPageProps: PaginationPagePropsGetter = ({page}) => ({href: `?page=${page}`});

const pagination = (
  <Pagination
    page={page}
    pageSize={pageSize}
    total={total}
    onUpdate={noop}
    pageComponent="a"
    getPageProps={getPageProps}
  />
);
```

### Liens de routeur (par exemple, `react-router`)

```jsx
import {Pagination} from '@gravity-ui/uikit';
import type {PaginationProps, PaginationPagePropsGetter} from '@gravity-ui/uikit';
import {Link} from 'react-router-dom';

const total = 1000;
const page = 1;
const pageSize = 100;

const noop: PaginationProps['onUpdate'] = () => {};

const getPageProps: PaginationPagePropsGetter<{to: string}> = ({page}) => ({
  to: `?page=${page}`,
});

const pagination = (
  <Pagination
    page={page}
    pageSize={pageSize}
    total={total}
    onUpdate={noop}
    pageComponent={Link}
    getPageProps={getPageProps}
  />
);
```

## Propriétés

| Nom             | Description                                                                                                                                      |            Type             |   Défaut    |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :---------: |
| className       | Attribut HTML `class`                                                                                                                            |          `string`           |             |
| compact         | Masque le titre des boutons `First`, `Previous` et `Next`. Toujours défini sur `true` en version mobile.                                         |          `boolean`          |    `true`   |
| onUpdate        | Appelée lorsque le numéro de page ou `pageSize` est modifié                                                                                       |         `Function`          |             |
| size            | Taille des éléments de pagination. Par défaut, sa valeur est `l` en version mobile et `m`, en version bureau                                     |          `string`           |             |
| page            | Numéro de page actuel                                                                                                                            |          `number`           |             |
| pageSize        | Nombre d'éléments de données par page                                                                                                            |          `number`           |             |
| pageSizeOptions | Permet de spécifier les options de `sizeChanger`                                                                                                 |         `number[]`          |             |
| total           | Nombre total d'éléments de données                                                                                                               |          `number`           |             |
| showInput       | Affiche une entrée pour naviguer directement vers les pages                                                                                      |          `boolean`          |   `false`   |
| showPages       | Affiche la numérotation des pages                                                                                                                |          `boolean`          |    `true`   |
| qa              | Attribut HTML `data-qa`, utilisé pour les tests                                                                                                  |          `string`           |             |
| view            | Définit l'apparence des boutons et des contrôles. Affecte la vue de l'entrée de pagination en mobile.                                             |   `"outlined" \| "clear"`   | `"outlined"`|
| pageComponent   | Remplace l'élément racine pour les éléments de pagination cliquables (boutons de navigation et de page). Utilisez `"a"` pour les liens classiques ou un composant sensible au routeur |  `PaginationPageComponent`  |             |
| getPageProps    | Retourne des props supplémentaires par élément cliquable (par exemple, `href` pour `"a"` ou `to` pour un `Link` de routeur). Appliqué uniquement lorsque `pageComponent` est défini | `PaginationPagePropsGetter` |             |
