`Stepper` guía a los usuarios a través de una secuencia de pasos numerados, mostrando el progreso en un flujo de trabajo de varios pasos similar a un asistente.

```tsx
import {Stepper} from '@gravity-ui/uikit';
```

## Ejemplo

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Elementos interactivos

Utilice las props `onUpdate` y `value` con estado personalizado para manipular los pasos.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Vistas diferentes

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Tamaños diferentes

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

### Pasos deshabilitados

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

### Iconos personalizados

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

### Separador de pasos personalizado

GRAVITY_TRANSLATION_BLOCK_12_END

GRAVITY_TRANSLATION_BLOCK_13_END

### Paso con elemento flotante

GRAVITY_TRANSLATION_BLOCK_14_END

GRAVITY_TRANSLATION_BLOCK_15_END

## Propiedades

| Nombre             | Descripción                                               |                  Tipo                  | Predeterminado |
| :----------------- | :-------------------------------------------------------- | :------------------------------------: | :------------: |
| children           | Elementos del Stepper.                                    | `React.ReactElement<StepperItemProps>` |                |
| size               | Establece el tamaño del `Step`.                           |           `"s"` `"m"` `"l"`            |     `"s"`      |
| value              | ID del `Step` seleccionado actualmente.                     |           `number` `string`            |                |
| onUpdate           | Función para cambiar el `Step` actual.                    |               `Function`               |                |
| qa                 | Atributo HTML `data-qa`, utilizado para pruebas.          |                `string`                |                |
| separator          | Nodo separador personalizado.                              |           `React.ReactNode`            |                |
| className          | Nombre de clase CSS para el contenedor de Steps.          |                `string`                |                |
| style              | Establece el estilo en línea para el contenedor de Steps. |            `CSSProperties`             |                |
| aria-label         | Define un valor de cadena que etiqueta el elemento actual. |                `string`                |                |
| aria-labelledby    | Identifica el(los) elemento(s) que etiquetan el elemento actual. |                `string`                |                |
| aria-describedby   | Identifica el(los) elemento(s) que describen el objeto.   |                `string`                |                |

### StepperItemProps

| Nombre    | Descripción                               |              Type              | Predeterminado |
| :-------- | :---------------------------------------- | :----------------------------: | :------------: |
| id        | Establece el ID del `Step`. Índice del elemento de la matriz como predeterminado. |       `string` `number`        |                |
| view      | Establece la vista del `Step`.            | `"idle"` `"error"` `"success"` |    `"idle"`    |
| children  | Contenido del `Step`.                     |          `React.Node`          |                |
| disabled  | Determina si el `Step` está deshabilitado. |           `boolean`            |                |
| icon      | Nodo de icono personalizado.              |         `SVGIconData`          |                |
| onClick   | Manejador de clics del paso.              |   `React.MouseEventHandler`    |                |
| className | Nombre de clase CSS para el elemento.     |            `string`            |                |

### API CSS

| Nombre                              | Descripción                           |
| :-------------------------------- | :------------------------------------ |
| `--g-stepper-gap`                 | Espacio entre los elementos del paso y el separador. |
| `--g-stepper-item-text-max-width` | Ancho máximo del texto del elemento del paso. |

GRAVITY_TRANSLATION_BLOCK_1_END