GRAVITY_TRANSLATION_BLOCK_0_END

`Pagination` renderiza controles de navegación de página — números de página con botones anterior/siguiente y un selector opcional de tamaño de página — utilizados para dividir listas o tablas largas en varias páginas.

```tsx
import {Pagination} from '@gravity-ui/uikit';
```

## Uso

```jsx
import {Pagination, PaginationProps} from '@gravity-ui/uikit';

const [state, setState] = React.useState({page: 1, pageSize: 100});

const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
  setState((prevState) => ({...prevState, page, pageSize}));

const pagination = <Pagination page={1} pageSize={100} total={1000} onUpdate={handleUpdate} />;
```

## Componente personalizado

Puedes anular el elemento raíz de los elementos de paginación clickables (botones de navegación y de página) usando la prop `pageComponent`. Pasa `pageComponent="a"` y devuelve `href` de `getPageProps` para usar enlaces regulares. Para integraciones de enrutador, pasa un componente consciente del enrutador como `Link` y devuelve props específicas del enrutador, por ejemplo `to`.

`getPageProps` se llama para cada elemento clickable (botones de página y botones de navegación). **No** se llama para elipsis, el indicador "página de", el elemento de página simple (actual) en el diseño móvil, o los botones de navegación deshabilitados (estos siempre permanecen como un `<button disabled>` nativo inerte para que no puedan ser activados, incluso a través del teclado). Las props gestionadas por Pagination (`onClick`, `className`, `size`, `view`, `selected`, `disabled`, `qa`, `aria-current`, `extraProps`, `children`) tienen prioridad sobre los valores devueltos por `getPageProps`.

### Enlaces regulares (`pageComponent="a"`)

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

### Enlaces de enrutador (ej. `react-router`)

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

## Propiedades

| Nombre            | Descripción                                                                                                                                      |            Tipo             |   Predeterminado    |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :-----------------: |
| className       | Atributo HTML `class`                                                                                                                           |          `string`           |                     |
| compact         | Oculta el título de los botones `First`, `Previous` y `Next`. Siempre se establece en `true` en la versión móvil.                                         |          `boolean`          |       `true`        |
| onUpdate        | Se llama cuando cambia el número de página o `pageSize`                                                                                             |         `Function`          |                     |
| size            | Tamaño de los elementos de paginación. Por defecto, su valor es `l` en la versión móvil y `m` en la versión de escritorio.                                         |          `string`           |                     |
| page            | Número de página actual                                                                                                                              |          `number`           |                     |
| pageSize        | Número de elementos de datos por página                                                                                                                    |          `number`           |                     |
| pageSizeOptions | Permite especificar las opciones de `sizeChanger`                                                                                                  |         `number[]`          |                     |
| total           | Número total de elementos de datos                                                                                                                       |          `number`           |                     |
| showInput       | Muestra la entrada para navegar directamente a las páginas                                                                                                        |          `boolean`          |       `false`       |
| showPages       | Muestra la numeración de las páginas                                                                                                                             |          `boolean`          |       `true`        |
| qa              | Atributo HTML `data-qa`, utilizado para pruebas                                                                                                       |          `string`           |                     |
| view            | Establece la apariencia de los botones y controles. Afecta la vista de la entrada de paginación en dispositivos móviles.                                |   `"outlined" \| "clear"`   |     `"outlined"`    |
| pageComponent   | Anula el elemento raíz para los elementos de paginación clickeables (botones de navegación y página). Usa `"a"` para enlaces normales o un componente consciente del enrutador. |  `PaginationPageComponent`  |                     |
| getPageProps    | Devuelve props adicionales por elemento clickeable (por ejemplo, `href` para `"a"` o `to` para un `Link` del enrutador). Solo se aplica cuando se establece `pageComponent`. | `PaginationPagePropsGetter` |                     |

GRAVITY_TRANSLATION_BLOCK_1_END