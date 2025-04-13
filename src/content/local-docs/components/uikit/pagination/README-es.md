<!--GITHUB_BLOCK-->

# Paginación

<!--/GITHUB_BLOCK-->

```tsx
import {Pagination} from '@gravity-ui/uikit';
```

Este componente representa la paginación.

## Uso

```jsx
import {Pagination, PaginationProps} from '@gravity-ui/uikit';

const [state, setState] = React.useState({page: 1, pageSize: 100});

const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) =>
  setState((prevState) => ({...prevState, page, pageSize}));

const pagination = <Pagination page={1} pageSize={100} total={1000} onUpdate={handleUpdate} />;
```

## Propiedades

| Nombre          | Descripción                                                                                                                  |    Tipo    | Predeterminado |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------- | :--------: | :------------: |
| className       | `class` Atributo HTML                                                                                                        |  `string`  |                |
| compacto        | Oculta el título de los `Next` botones `First` `Previous`, y. Siempre configurado `true` en la versión móvil.                | `boolean`  |     `true`     |
| onUpdate        | Se llama cuando se cambia el número de página o `pageSize`                                                                   | `Function` |                |
| tamaño          | Tamaño de los elementos de paginación. Por defecto, su valor está `l` en la versión móvil y `m`, en la versión de escritorio |  `string`  |                |
| página          | Número de página actual                                                                                                      |  `number`  |                |
| pageSize        | Número de elementos de datos por página                                                                                      |  `number`  |                |
| pageSizeOptions | Permite especificar las `sizeChanger` opciones                                                                               | `number[]` |                |
| total           | Número total de elementos de datos                                                                                           |  `number`  |                |
| showInput       | Muestra la entrada para navegar directamente a las páginas                                                                   | `boolean`  |    `false`     |
| showPages       | Muestra la numeración de páginas                                                                                             | `boolean`  |     `true`     |
| qa              | `data-qa` Atributo HTML, usado para realizar pruebas                                                                         |  `string`  |                |
