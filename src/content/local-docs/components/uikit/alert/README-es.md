El componente `Alert` muestra un mensaje destacado para llamar la atención del usuario sobre información importante.

```tsx
import {Alert} from '@gravity-ui/uikit';
```

### Tema

`normal`: Tema principal (usado por defecto).

`info`: Se usa para cualquier tipo de información regular.

`success`: Se usa para información positiva.

`warning`: Se usa para información que requiere atención.

`danger`: Se usa para errores críticos.

`utility`: Se usa para consejos útiles.

`clear`: Sin estilos, adecuado para su uso en otros componentes (por ejemplo, como `content` en `Popover`)

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Vista

`filled`: Se usa para ajustar el color de fondo de la alerta (usado por defecto).

`outlined`: Se usa para ajustar el color del borde de la alerta.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Diseño

`vertical`: Se usa para dirigir a los usuarios al contenido si hay una propiedad `actions` con botones. Permite mostrar los botones debajo del texto (usado por defecto).

`horizontal`: Se usa para dirigir a los usuarios al contenido si hay una propiedad `actions` con botones. Permite mostrar los botones a la derecha del texto.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Esquinas

`rounded`: Habilita esquinas redondeadas de la ventana de alerta (usado por defecto).

`square`: Habilita esquinas cuadradas de la ventana de alerta.

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Título de la alerta

`title`: Título de la alerta. Tiene una prioridad menor que `Alert.Title`.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Mensaje de la alerta

`message`: Mensaje de la alerta. Debe ser lo suficientemente significativo como para explicar completamente de qué trata la alerta.

## `onClose`

`onClose`: Función de callback que se llama cuando el usuario hace clic en el botón de cierre de la alerta. Cuando esta propiedad está definida, el botón de cierre será visible.

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Alineación

Determina cómo se alinea verticalmente el contenido dentro del componente `Alert`.

`baseline`: Alineación por defecto.

`center`: El contenido se centra verticalmente dentro del componente `Alert`. Puede ser útil si las acciones ocupan más espacio que el texto, o si el icono debe estar en el medio del contenido.

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

## Propiedades

| Nombre          | Descripción                                                                 |                                     Tipo                                     |   Predeterminado    |
| :-------------- | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------: | :-----------------: |
| theme         | Apariencia de la alerta                                                            | `"normal"` `"info"` `"success"` `"warning"` `"danger"` `"utility"` `"clear"` |  `"normal"`  |
| size          | Tamaño de la alerta                                                                  |                              `"s"` `"m"` `"l"`                               |    `"m"`     |
| view          | Habilitar/deshabilitar el color de fondo de la alerta                                |                           `"filled"` `"outlined"`                            |  `"filled"`  |
| layout        | Se utiliza para dirigir a los usuarios al contenido si hay una propiedad `actions` con botones |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| actionsLayout | Se utiliza para controlar la dirección de los botones de acción.                        |                         `"vertical"` `"horizontal"`                          | `"vertical"` |
| corners       | Se utiliza para esquinas redondeadas/cuadradas de la ventana de alerta                           |                            `"rounded"` `"square"`                            | `"rounded"`  |
| title         | Título de la alerta                                                          |                                   `string`                                   |                     |
| message       | Mensaje de la alerta                                                        |                              `React.ReactNode`                               |                     |
| onClose       | Una función de devolución de llamada que se llama cuando el usuario hace clic en el botón de cierre de la alerta    |                                  `Function`                                  |                     |
| actions       | Matriz de botones o componentes personalizados completos                                  |                      `React.ReactNode` `"AlertAction"`                       |                     |
| align         | Determina cómo se alinea verticalmente el contenido dentro del componente Alert     |                           `"center"` `"baseline"`                            | `"baseline"` |
| style         | Atributo de estilo HTML                                                        |                            `React.CSSProperties`                             |                     |
| className     | Nombre de la clase de la alerta                                                         |                                   `string`                                   |                     |
| icon          | Anular el icono predeterminado                                                       |                              `React.ReactNode`                               |                     |
| qa            | Atributo `data-qa` de HTML, utilizado en pruebas.                                    |                                   `string`                                   |                     |

## API CSS

| Nombre                               | Descripción                                                                    |
| :--------------------------------- | :----------------------------------------------------------------------------- |
| `--g-alert-padding`                | Rellenos laterales.                                                                 |
| `--g-alert-border-radius`          | Radio del borde.                                                                 |
| `--g-alert-icon-margin-inline-end` | La indentación entre el icono y la parte de contenido (contenido de texto + acciones)         |
| `--g-alert-close-btn-margin`       | La indentación entre la parte de contenido (contenido de texto + acciones) y el botón de cierre |
| `--g-alert-actions-margin`         | Espacio entre el contenido de texto y las acciones.                                          |
| `--g-alert-message-title-indent`   | Espacio entre el título y el mensaje.                                                 |
| `--g-alert-actions-gap`            | Espacio entre los botones de acción.                                                    |
| `--g-alert-title-text-color`       | Color del título.                                                                   |
| `--g-alert-title-font-size`        | Tamaño de fuente del título.                                                               |
| `--g-alert-title-line-height`      | Altura de línea del título.                                                             |
| `--g-alert-message-text-color`     | Color del mensaje.                                                                 |
| `--g-alert-message-font-size`      | Tamaño de fuente del mensaje.                                                             |
| `--g-alert-message-font-weight`    | Peso de fuente del mensaje.                                                           |
| `--g-alert-message-line-height`    | Altura de línea del mensaje.                                                           |