<!--GITHUB_BLOCK-->

# Lista

<!--/GITHUB_BLOCK-->

```tsx
import {List} from '@gravity-ui/uikit';
```

### ItemsHeight

Determina la altura de la lista de elementos (o una función que devuelve el valor de altura de una lista). Puede resultar útil a la hora de establecer la altura de la lista de forma dinámica, por ejemplo, `(items: []) => number`.

### Artículos

Proporciona una serie de elementos para una lista:

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<List items={["one", "two", "three", "four", "five", "six", "seven"]} itemsHeight={160} />
`}>
    <UIKit.List items={["one", "two", "three", "four", "five", "six", "seven"]} itemsHeight={160} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<List items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']} itemsHeight={160} />
```

<!--/GITHUB_BLOCK-->

Un elemento puede ser un valor escalar o arbitrario y debe serlo `truthy` en cualquier caso.
Si es un valor arbitrario, asegúrese de especificar las funciones de filtrado y representación.
El renderizado predeterminado solo proporciona un elemento como texto.

El `item.disabled` campo especial desactiva un elemento.

La personalización del renderizado y la altura ofrece mucho espacio para experimentar.
Por ejemplo, el código siguiente le permite emular grupos:

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<List items={[{title: 'one', group: true,disabled: true}, {title: 'two'},
    {
      title: 'three',
      group: true,
      disabled: true,
    },
    {
      title: 'four',
    },
  ]} onItemClick={(value) => console.log(value)}
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
`}>
    <UIKit.List items={[
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
  ]} onItemClick={(value) => console.log(value)}
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
</ExampleBlock>
LANDING_BLOCK-->

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

### Filtrable

La `filterable` propiedad deshabilita la entrada para buscar un elemento si su valor es `false`. Su valor predeterminado es `true`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<List items={["one", "two", "three", "four", "five", "six", "seven"]} itemsHeight={160} filterable={false} />
`}>
    <UIKit.List items={["one", "two", "three", "four", "five", "six", "seven"]} itemsHeight={160} filterable={false} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
  itemsHeight={160}
  filterable={false}
/>
```

<!--/GITHUB_BLOCK-->

### Clasificable

La `sortable` propiedad permite intercambiar elementos de la lista si su valor es `true`. Su valor predeterminado es `false`.

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<List items={["one", "two", "three", "four", "five", "six", "seven"]} itemsHeight={160} sortable={true} />
`}>
    <UIKit.List items={["one", "two", "three", "four", "five", "six", "seven"]} itemsHeight={160} sortable={true} />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<List
  items={['one', 'two', 'three', 'four', 'five', 'six', 'seven']}
  itemsHeight={160}
  sortable={true}
/>
```

<!--/GITHUB_BLOCK-->

### Virtualización

Para habilitar la virtualización, asegúrese de que se cumpla una de estas dos condiciones:

1. Tú configuras la `itemsHeight` propiedad. En este caso, la altura de la lista será fija e igual a ese valor.
2. Tú estableces el `display: flex` estilo del contenedor principal de la lista. En este caso, la lista se adaptará al ancho del contenedor.

### Gestión externa

En ocasiones, es posible que desee administrar la actividad de los elementos desde el teclado manteniendo el foco en un elemento externo.
El reenvío del `onKeyDown` evento a una lista puede ayudarlo en este sentido.
Del mismo modo, puedes reenviar `onFocus` y, `onBlur` si necesitas, repetir el comportamiento cuando se pierde un objeto activo.

### Filtrar

La `filter` propiedad proporciona el valor de filtro utilizado con la clasificación externa.

### PropTypes

| Nombre              | Descripción                                                                                                                                                                                                             | Tipo              | Predeterminado |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------- | :------------- |
| [artículos](#items) | Lista de artículos                                                                                                                                                                                                      | `Array`           | []             |
| itemHeight          | Altura del artículo en `px` o una función que devuelve el valor de altura de un artículo: `(item: any) => number`.                                                                                                      | `Number/Function` | 28             |
| itemsHeight         | Altura de la lista de elementos o una función que devuelve el valor de altura de una lista. Puede ser útil a la hora de establecer la altura de la lista de forma dinámica: `(items: []) => number`.                    | `Number/Function` |                |
| renderItem          | Función de renderizado con un elemento recibido como entrada y un nodo React devuelto: `(item: any, isItemActive: bool, itemIndex: number) => React.ReactNode`.                                                         | `Function`        |                |
| filterItem          | Función de filtrado que recibe una cadena especificada como entrada de búsqueda o filtro y devuelve una función que recibe un elemento como entrada y genera un booleano:. `(filter: string) => (item: any) => boolean` | `Function`        |                |
| filtrable           | Bandera que habilita un campo de filtro.                                                                                                                                                                                | `Boolean`         | cierto         |
| filterPlaceholder   | Marcador de posición para un campo de filtro.                                                                                                                                                                           | `String`          |                |
| filtrar             | Valor de filtro (en caso de que se utilice una clasificación externa).                                                                                                                                                  | `String`          |                |
| filterClassName     | Clase para filtrar estilos de entrada.                                                                                                                                                                                  | `String`          |                |
| onChangeFilter      | Gestor de cambios de filtro (en caso de que se utilice una clasificación externa): `(filter: string) => void`.                                                                                                          | `Function`        |                |
| onFilterEnd         | Función invocada después de completar el filtrado interno: `({items}: {items: T[]}) => void`                                                                                                                            | `Function`        |                |
| emptyPlaceholder    | Marcador de posición para una lista vacía.                                                                                                                                                                              | `React.ReactNode` |                |
| clasificable        | Bandera que permite la clasificación de listas.                                                                                                                                                                         | `Boolean`         |                |
| sortHandleAlign     | Alineación del indicador de clasificación (izquierda o derecha).                                                                                                                                                        | `left` `right`    |                |
| onSortEnd           | Controlador de eventos de clasificación: `({oldIndex: number, newIndex: number}) => void`.                                                                                                                              | `Function`        |                |
| virtualizado        | Indicador que permite la virtualización. Si está inactivo, todos los elementos se renderizan a la vez.                                                                                                                  | `Boolean`         | cierto         |
| onItemClick         | Controlador de clics de elementos: `(item: any, index: number, fromKeyboard?: bool) => void`.                                                                                                                           | `Function`        |                |
| deactivateOnLeave   | Si se establece este indicador, la selección de elementos se desactiva cuando el cursor abandona el elemento o la lista pierde su foco. Si no se establece, siempre se seleccionará el último elemento seleccionado.    | `Boolean`         | cierto         |
| activeItemIndex     | Si se establece un valor, un elemento con este índice se muestra como activo.                                                                                                                                           | `Number`          |                |
| selectedItemIndex   | Si se establece un valor, un elemento con este índice se representa como seleccionado (el color de fondo se toma de `--g-color-base-selection`).                                                                        | `Number/Array`    |                |
| itemClassName       | Nombre de clase personalizado para agregar a un contenedor de artículos.                                                                                                                                                | `String`          |                |
| itemsClassName      | Nombre de clase personalizado para agregar a una lista de artículos.                                                                                                                                                    | `String`          |                |
| papel               | `role` Atributo HTML                                                                                                                                                                                                    | `String`          | lista          |
| identificación      | `id` Atributo HTML                                                                                                                                                                                                      | `string`          |                |
| onChangeActive      | Se activa cuando se cambia el índice de una opción del cuadro de lista que está resaltada visualmente por tener el foco del teclado: `(index?: number) => void`.                                                        | `Function`        |                |
