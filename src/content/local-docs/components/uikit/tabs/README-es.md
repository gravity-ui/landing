Los componentes de pestañas se utilizan para explorar, organizar contenido y cambiar entre diferentes vistas.

```tsx
import {TabProvider, TabList, Tab, TabPanel} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Componentes

- [TabProvider](#tabprovider)
- [TabList](#tablist)
- [Tab](#tab)
- [TabPanel](#tabpanel)

## TabProvider

Un componente que proporciona la funcionalidad de selección de pestañas.

## Propiedades

| Nombre     | Descripción                                              |           Tipo            | Predeterminado |
| :------- | :------------------------------------------------------- | :-----------------------: | :-----: |
| children | Lista de pestañas y paneles de pestañas, probablemente con algunos envoltorios |     `React.ReactNode`     |         |
| value    | Valor de la pestaña activa                                         |         `string`          |         |
| onUpdate | Manejador de actualización de pestañas                                       | `(value: string) => void` |         |

## TabList

Componente que sirve como contenedor para un conjunto de `tabs`.

### Tamaño

Para controlar el tamaño de las `tabs`, utiliza la propiedad `size`. El tamaño predeterminado es `m`.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Propiedades

`TabList` acepta cualquier prop válido de elemento `div` además de estos:

| Nombre            | Descripción                                                                            |               Tipo               | Predeterminado  |
| :-------------- | :------------------------------------------------------------------------------------- | :------------------------------: | :------: |
| children        | Lista de pestañas, probablemente con algunos envoltorios                                              |        `React.ReactNode`         |          |
| value           | Valor de la pestaña activa                                                                       |             `string`             |          |
| onUpdate        | Manejador de actualización de pestañas                                                                     |    `(value: string) => void`     |          |
| className       | Clase CSS del elemento                                                                   |             `string`             |          |
| activateOnFocus | Activar pestaña al enfocar. Utiliza esto solo si el contenido del panel se puede mostrar inmediatamente   |            `boolean`             | `false`  |
| size            | Tamaño del elemento                                                                       |        `"m"` `"l"` `"xl"`        |  `"m"`   |
| contentOverflow | Cómo tratar los elementos que no caben horizontalmente (envolver, desplazar o un menú **Más**) | `"wrap"` `"scroll"` `"collapse"` | `"wrap"` |
| moreLabel       | Etiqueta para el disparador de desbordamiento de colapso cuando la pestaña activa es visible en la lista     |        `React.ReactNode`         | `"More"` |
| qa              | Atributo `data-qa` de HTML, utilizado en pruebas                                                |             `string`             |          |

## Tab

Este componente se utiliza para renderizar elementos de pestaña.

### Icono

Se utiliza si necesitas mostrar un icono para un elemento de pestaña.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Estados

El elemento de pestaña tiene un indicador de deshabilitado.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Contador

Se utiliza si necesitas mostrar un número para un elemento de pestaña.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### Etiqueta

Se utiliza si necesitas mostrar una etiqueta para un elemento de pestaña.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Desbordamiento de contenido

Se utiliza si necesitas colapsar elementos de pestaña.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Propiedades

`Tab` acepta cualquier prop válido de elemento `button` o `a` además de estos:

| Nombre  | Descripción                                |        Tipo         | Por defecto |
| :------ | :----------------------------------------- | :-----------------: | :---------: |
| value   | Valor de la pestaña                        |      `string`       |             |
| title   | Título de la pestaña                       |      `string`       |             |
| icon    | Icono mostrado al principio                |  `React.ReactNode`  |             |
| counter | Contenido mostrado al final                |  `number` `string`  |             |
| href    | Una URL a la que enlazar.                  |      `string `      |             |
| label   | `<Label>` mostrado al final                |  `React.ReactNode`  |             |
| disabled| Estado inactivo                            |      `boolean`      |             |
| component | Sobrescribe el componente raíz           | `React.ElementType` |             |
| children| Contenido de la pestaña                    |  `React.ReactNode`  |             |
| qa      | Atributo `data-qa` de HTML, usado en pruebas |      `string`       |             |

## TabPanel

Es un elemento contenedor para el contenido asociado a una pestaña.

### Propiedades

`TabPanel` acepta cualquier prop válida del elemento `div` además de estas:

| Nombre  | Descripción             |       Type        | Por defecto |
| :------ | :---------------------- | :---------------: | :---------: |
| children| Contenido del panel     | `React.ReactNode` |             |
| value   | Valor de la pestaña activa |     `string`      |             |
| qa      | Atributo `data-qa` de HTML, usado en pruebas |     `string`      |             |

## API CSS

| Nombre                             | Descripción                |
| :------------------------------- | :------------------------- |
| `--g-tabs-border-width`          | Ancho del borde de las pestañas |
| `--g-tabs-item-height`           | Altura del ítem de las pestañas |
| `--g-tabs-item-border-width`     | Ancho del borde del ítem de las pestañas |
| `--g-tabs-item-gap`              | Distancia entre pestañas   |
| `--g-tabs-vertical-item-height`  | Altura del ítem vertical de las pestañas |
| `--g-tabs-vertical-item-padding` | Relleno del ítem vertical de las pestañas |