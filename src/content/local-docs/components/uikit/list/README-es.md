<!--GITHUB_BLOCK-->

# List

<!--/GITHUB_BLOCK-->

El componente `List` renderiza una lista de elementos filtrable, ordenable y virtualizada con soporte para renderizado personalizado y navegación por teclado.

```tsx
import {List} from '@gravity-ui/uikit';
```

### ItemsHeight

Determina la altura de la lista de elementos (o una función que devuelve el valor de altura para una lista). Puede ser útil al establecer la altura de la lista dinámicamente, por ejemplo, `(items: []) => number`.

### Items

Proporciona un array de elementos para una lista:

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

Un elemento puede ser un escalar o un valor arbitrario y debe ser `truthy` en cualquier caso.
Si es un valor arbitrario, asegúrate de especificar las funciones de filtrado y renderizado.
El renderizado predeterminado solo proporciona un elemento como texto.

El campo especial `item.disabled` deshabilita un elemento.

La personalización del renderizado y la altura proporciona mucho espacio para experimentar.
Por ejemplo, el siguiente código te permite emular grupos:

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

La propiedad `filterable` deshabilita la entrada para buscar un elemento si su valor es `false`. Su valor predeterminado es `true`.

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

La propiedad `sortable` habilita el intercambio de elementos de la lista si su valor es `true`. Su valor predeterminado es `false`.

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

Para habilitar la virtualización, asegúrate de que se cumpla una de estas dos condiciones:

1. Estableces la propiedad `itemsHeight`. En este caso, la altura de la lista será fija e igual a ese valor.
2. Estableces el estilo `display: flex` para el contenedor padre de la lista. En este caso, la lista se adaptará al ancho del contenedor.

### Gestión externa

A veces, es posible que desees gestionar la actividad de los elementos desde el teclado manteniendo el foco en un elemento externo.
El reenvío del evento `onKeyDown` a una lista puede ayudarte aquí.
Del mismo modo, puedes reenviar `onFocus` y `onBlur` si necesitas repetir el comportamiento cuando se pierde un elemento activo.

### Filter

La propiedad `filter` proporciona el valor del filtro utilizado con la ordenación externa.

## Propiedades

| Nombre              | Descripción
