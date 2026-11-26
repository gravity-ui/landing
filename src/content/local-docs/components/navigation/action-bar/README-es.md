GRAVITY_TRANSLATION_BLOCK_0_END

El componente es una barra horizontal flexible que proporciona un diseño estandarizado para organizar elementos de navegación, acciones y contenido informativo dentro de una aplicación. Sirve como un contenedor para organizar elementos de la interfaz de usuario como breadcrumbs, botones y menús desplegables en secciones y grupos definidos.

GRAVITY_TRANSLATION_BLOCK_1_END

El `ActionBar` proporciona varios componentes anidados que trabajan juntos para crear un diseño estructurado: `ActionBar.Section`, `ActionBar.Group`, `ActionBar.Item`, `ActionBar.Separator`.

## Propiedades

| Nombre       | Descripción                               |         Tipo          | Por defecto |
| :----------- | :---------------------------------------- | :-------------------: | :---------: |
| aria-label | Atributo `aria-label` de HTML             |       `string`        |             |
| className  | Atributo `class` de HTML                  |       `string`        |             |
| style      | Atributo `style` de HTML                  | `React.CSSProperties` |             |
| qa         | Atributo `data-qa` de HTML, usado para pruebas |       `string`        |             |

## ActionBar.Section

Componente decorativo para separar visualmente diferentes tipos de navegación.
Se presentan dos tipos de secciones: `primary` y `secondary`. Recomendamos que una aplicación tenga al menos una sección `primary`.
La sección `secondary` podría usarse para controles específicos de la aplicación, que deben acentuarse con espaciados más pequeños y un separador horizontal de la sección `primary`.

### Propiedades

| Nombre      | Descripción                                      |            Type            |   Por defecto   |
| :---------- | :----------------------------------------------- | :------------------------: | :-------------: |
| type      | El tipo especifica el estilo visual de la sección | `"primary"`, `"secondary"` | `"primary"` |
| className | Atributo `class` de HTML                         |          `string`          |                 |
| style     | Atributo `style` de HTML                         |   `React.CSSProperties`    |                 |
| qa        | Atributo `data-qa` de HTML, usado para pruebas   |          `string`          |                 |

GRAVITY_TRANSLATION_BLOCK_2_END

## ActionBar.Group

Los grupos organizan `ActionBar.Item` dentro de una sección y controlan su alineación.

### Propiedades

| Nombre             | Descripción                                                       |                                      Type                                       | Por defecto |
| :----------------- | :---------------------------------------------------------------- | :-----------------------------------------------------------------------------: | :---------: |
| pull             | Controla la alineación del grupo                                  | `"left"`, `"left-grow"`, `"right"`, `"right-grow"`, `"center"`, `"center-grow"` |             |
| stretchContainer | Establece `flex-grow: 1` para Group. Necesita soportar UIKit@7 Breadcrumbs |                                    `boolean`                                    |             |
| className        | Atributo `class` de HTML                                          |                                    `string`                                     |             |
| style            | Atributo `style` de HTML                                          |                              `React.CSSProperties`                              |             |
| qa               | Atributo `data-qa` de HTML, usado para pruebas                    |                                    `string`                                     |             |

## ActionBar.Item

Contenedor para elementos de UI como botones, breadcrumbs u otros componentes que deben estar en `ActionBar.Group`. El componente añade márgenes entre los elementos.

### Propiedades

| Nombre      | Descripción                                |         Tipo          | Por defecto |
| :---------- | :----------------------------------------- | :-------------------: | :---------: |
| spacing   | Habilita el espaciado con el elemento anterior |       `boolean`       | `true`  |
| className | Atributo `class` de HTML                     |       `string`        |             |
| style     | Atributo `style` de HTML                     | `React.CSSProperties` |             |
| qa        | Atributo `data-qa` de HTML, usado para pruebas |       `string`        |             |

## ActionBar.Separator

Divisor visual que se puede colocar entre elementos de un grupo para separarlos visualmente.

GRAVITY_TRANSLATION_BLOCK_3_END