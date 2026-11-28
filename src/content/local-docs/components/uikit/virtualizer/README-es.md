GRAVITY_TRANSLATION_BLOCK_0_END

El Virtualizer renderiza solo la ventana de filas que está actualmente visible, lo que hace que las listas de decenas de miles de elementos sean asequibles.

```tsx
import {ListVirtualizer, Virtualizer} from '@gravity-ui/uikit/virtualizer';
```

Este punto de entrada necesita `@tanstack/react-virtual`: es una dependencia peer opcional, así que instálala junto a `@gravity-ui/uikit`.

Aquí viven dos cosas. `Virtualizer` es el motor: un contenedor de desplazamiento que posiciona y mide las filas que tú mismo renderizas. `ListVirtualizer` es la capa de virtualización de la [List](../List/README.md): envuelve una `<List>`, y la lista se renderiza a través del motor sin ningún otro cambio.

## Virtualizer

El elemento que renderiza el componente es el propio contenedor de desplazamiento, por lo que su altura debe ser limitada. `getItemSize` es la estimación utilizada antes de que se renderice una fila; a menos que `measure` esté desactivado, la altura medida de una fila de nivel superior la reemplaza después del montaje, que es por qué las filas de altura variable no necesitan configuración.

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

El wrapper es lo único que cambia: la lista interior permanece como estaba. Todas sus props de configuración son opcionales: sin `estimateItemSize`, las alturas de las filas provienen del `size` de la lista.

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

La raíz de la `List` se convierte en el contenedor de desplazamiento, por lo que limitar su altura depende de ti; de lo contrario, la ventana degenera en la lista completa. Los detalles de la capa están en la sección [Virtualization](../List/README.md#virtualization) de la List.

### Un wrapper para toda la aplicación

El wrapper es un proveedor de contexto: cubre cada `List` y `Select` debajo de él, incluidas las ventanas emergentes de los `Select`. Con `minItemsCount`, puede colocarse una vez junto al `Provider` de tema y virtualizar solo las listas largas: una lista con menos filas se renderiza como si no hubiera wrapper, cada fila en el DOM.

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

Una `List` cuenta sus filas, incluidos los encabezados de sección. Un `Select` cuenta sus opciones sin los encabezados de grupo y sin el filtro, por lo que escribir en el filtro no cambia la lista de un modo a otro.

Un wrapper dentro de otro solo cambia lo que se le da y toma el resto del de arriba, de la misma manera que lo hace un `Provider` de tema anidado. Alrededor de una sola lista bajo el wrapper raíz:

- `<ListVirtualizer overscan={20}>` mantiene el umbral de la raíz y cambia el búfer;
- `<ListVirtualizer minItemsCount={0}>` virtualiza la lista independientemente de su tamaño;
- `<ListVirtualizer minItemsCount={Infinity}>` la mantiene simple, y el chunk no se carga para ella.

### Carga bajo demanda

El código de la ventana (incluido `@tanstack/react-virtual`) es un chunk propio: importar `ListVirtualizer` no lo trae al bundle de la aplicación. El chunk se carga cuando se renderiza la primera lista lo suficientemente larga para `minItemsCount`, y un `Select` que va a ser virtualizado comienza a cargarlo al montar, antes de que se abra su ventana emergente. Hasta que llega el chunk, la lista muestra sus primeras filas en la misma raíz: la página no queda vacía, y la ventana las reemplaza tan pronto como se puede renderizar, desplazada a la fila activa que la lista estaba mostrando. Si el chunk falla al cargarse, el error llega al límite de error más cercano de la lista.

> [!NOTE]
> En HTML renderizado en servidor, una lista virtualizada tiene sus primeras filas: no hay viewport contra el cual medir la ventana, por lo que la ventana toma el control después de la hidratación. El resto de las filas no están en el marcado; deja una lista sin virtualizar cuando todo su contenido debe estar presente.

## Propiedades

### Virtualizer

El resto de las props van al elemento contenedor de desplazamiento.

| Nombre                  | Descripción                                                                                      |                          Tipo                          | Por defecto |
| :-------------------- | :----------------------------------------------------------------------------------------------- | :----------------------------------------------------: | :-----: |
| count                 | El número de elementos de primer nivel en la lista                                               |                        `number`                        |         |
| getItemSize           | La altura de un elemento, incluyendo sus hijos; los hijos llegan con el `parentKey`              |            `(index, parentKey?) => number`             |         |
| getItemKey            | La clave de un elemento; los hijos llegan con el `parentKey`                                         |              `(index, parentKey?) => Key`              |         |
| renderRow             | Renderiza una fila: el elemento, la clave de su padre y una devolución de llamada para renderizar sus hijos | `(item, parentKey, renderChildren) => React.ReactNode` |         |
| measure               | Mide las alturas reales de las filas de nivel superior después del montaje en lugar de confiar en `getItemSize`   |                       `boolean`                        | `true`  |
| overscan              | El número de filas renderizadas por encima y por debajo de la ventana visible                                   |                        `number`                        |   `0`   |
| disableVirtualization | Renderiza todas las filas; útil para una lista que se sabe que es pequeña                                            |                       `boolean`                        |         |
| persistedIndexes      | Filas que se mantienen en la ventana incluso cuando se desplazan fuera; cada entrada es una ruta de índices en la jerarquía |                   `Array<number[]>`                    |         |
| loading               | Si se están cargando más elementos: hasta que vuelva a ser `false`, `onLoadMore` no se volverá a llamar |                       `boolean`                        |         |
| onLoadMore            | Se llama cuando el desplazamiento se acerca al final                                                         |                      `() => void`                      |         |
| apiRef                | Ref a la API imperativa: `scrollToIndex`, `scrollToOffset`, `scrollOffset`, `scrollRect`       |              `React.Ref<VirtualizerApi>`               |         |
| containerRef          | Ref del elemento contenedor de desplazamiento                                                              |                `React.Ref<HTMLElement>`                |         |

### ListVirtualizer

| Nombre             | Descripción                                                                                                                               |            Tipo             |          Predeterminado          |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------: | :-----------------------: |
| children         | El `<List>` interior                                                                                                                       |         `ReactNode`         |                           |
| estimateItemSize | La estimación de la altura de una fila antes de que se renderice: una constante o una función del contexto de la fila                                          | `number \| (ctx) => number` | por el `size` de la lista |
| measure          | Mide las alturas reales de las filas después del montaje (filas de altura variable listas para usar)                                               |          `boolean`          |          `true`           |
| minItemsCount    | Una lista de menos filas se renderiza como si no hubiera un contenedor; un `Select` cuenta sus opciones, sin los encabezados de grupo y sin el filtro |          `number`           |            `0`            |
| overscan         | El búfer de filas fuera de la ventana visible                                                                                          |          `number`           |            `5`            |

Un contenedor dentro de otro toma las props que no se le dan del contenedor superior: los valores predeterminados en la tabla son los del contenedor más externo.