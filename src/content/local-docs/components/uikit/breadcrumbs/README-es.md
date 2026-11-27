`Breadcrumbs` es un elemento de navegación que muestra la ubicación actual de una página dentro de la jerarquía del sitio web. Proporciona enlaces que permiten a los usuarios regresar a niveles superiores en la jerarquía, facilitando la navegación a través de un sitio web con múltiples capas. Los breadcrumbs son especialmente útiles para sitios web y aplicaciones grandes con una estructura de páginas basada en jerarquías.

```tsx
import {Breadcrumbs} from '@gravity-ui/uikit';
```

¿Migrando desde el `Breadcrumbs` heredado? Consulta la [guía de migración](https://github.com/gravity-ui/uikit/blob/main/docs/migration-from-legacy-breadcrumbs.md).

## Ejemplo

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Eventos

Utiliza la propiedad `onAction` como un callback para manejar los eventos de clic en los elementos.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Enlaces

En `Breadcrumbs`, hacer clic en un elemento normalmente activa `onAction`. Sin embargo, también puedes usarlos como enlaces a otras páginas o sitios web. Para hacerlo, agrega la propiedad `href` al componente `<Breadcrumbs.Item>`:

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

### Contexto raíz

Para ayudar a los usuarios a comprender la estructura general, algunas aplicaciones siempre muestran el punto de inicio (elemento raíz) de los Breadcrumbs, incluso cuando otros elementos están ocultos debido a limitaciones de espacio.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Separador

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

### Breadcrumbs con iconos

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

### Integración con routers

GRAVITY_TRANSLATION_BLOCK_13_END

### Hitos (Landmarks)

Cuando los breadcrumbs se utilizan como un elemento de navegación principal para una página, pueden colocarse en un [hito de navegación](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html). Los hitos ayudan a los usuarios de tecnología asistencial a encontrar rápidamente las secciones principales de una página. Para crear un hito de navegación, coloca los breadcrumbs dentro de un elemento `<nav>` con un `aria-label`:

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

### Elementos deshabilitados

GRAVITY_TRANSLATION_BLOCK_16_END

GRAVITY_TRANSLATION_BLOCK_17_END

### Contenido final

GRAVITY_TRANSLATION_BLOCK_18_END

GRAVITY_TRANSLATION_BLOCK_19_END

## Propiedades

| Nombre             | Descripción                                                                  | Tipo                 | Por defecto |
| :----------------- | :--------------------------------------------------------------------------- | :------------------- | :---------- |
| children           | Elemento de migas de pan                                                     | `React.ReactNode`    |             |
| disabled           | Determina si `Breadcrumbs` está deshabilitado.                               | `boolean`            |             |
| showRoot           | Habilita o deshabilita la visualización constante del elemento raíz si los elementos están colapsados. | `boolean`            |             |
| maxItems           | Número máximo de elementos visibles, incluido el control de colapso.         | `number`             |             |
| itemComponent      | Componente utilizado para renderizar elementos.                              | `React.ElementType`  |             |
| popupPlacement     | Estilo del popup del elemento colapsado.                                     | `PopupPlacement`     |             |
| popupStyle         | Estilo del popup del elemento colapsado.                                     | `"staircase"`        |             |
| qa                 | Atributo HTML `data-qa`, utilizado para pruebas                               | `string`             |             |
| separator          | Nodo separador personalizado.                                                 | `React.ReactNode`    | "/"         |
| onAction           | Manejador llamado con la clave del elemento clickeado.                       | `(key: Key) => void` |             |
| id                 | ID único del elemento.                                                       | `string`             |             |
| className          | Nombre de la clase CSS para el elemento.                                     | `string`             |             |
| style              | Establece el estilo en línea para el elemento.                               | `CSSProperties`      |             |
| aria-label         | Define un valor de cadena que etiqueta el elemento actual.                   | `string`             |             |
| aria-labelledby    | Identifica el/los elemento(s) que etiquetan el elemento actual.              | `string`             |             |
| aria-describedby   | Identifica el/los elemento(s) que describen el objeto.                       | `string`             |             |
| endContent         | Nodo del usuario renderizado después del último elemento de migas de pan.    | `React.ReactNode`    |             |

### BreadcrumbsItemProps

| Nombre       | Descripción                                                    | Tipo                              | Valor predeterminado |
| :----------- | :------------------------------------------------------------- | :-------------------------------- | :------------------- |
| children   | Contenido de los Breadcrumbs.                                  | `React.ReactNode`                 |                      |
| title      | Representación en cadena del contenido del elemento.           | `string`                          |                      |
| aria-label | Etiqueta de accesibilidad para el elemento.                    | `string`                          |                      |
| href       | URL a usar para el hipervínculo.                               | `string`                          |                      |
| onClick    | Manejador de clics del elemento.                               | `React.MouseEventHandler`         |                      |
| target     | Ventana de destino para el enlace.                             | `React.HTMLAttributeAnchorTarget` |                      |
| rel        | Relación entre el recurso enlazado y la página actual.         | `string`                          |                      |
| disabled   | Si el BreadcrumbsItem está deshabilitado.                      | `boolean`                         |                      |