El componente Accordion te permite crear paneles de contenido colapsables donde los usuarios pueden mostrar u ocultar secciones de información. Esto es útil para organizar grandes cantidades de contenido de forma compacta.

```tsx
import {Accordion} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

## Controlar el estado del acordeón

Puedes controlar el estado del acordeón utilizando las propiedades `value` y `onUpdate` del componente raíz, o por elemento.

Ejemplo de control de estado desde el componente raíz:

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

Ejemplo de control de estado por elemento con la prop `expanded`:

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Tamaño

Usa la propiedad `size` para controlar el tamaño del `Accordion`. El tamaño predeterminado es `m`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Vista

`solid`: Vista principal con fondo (usada por defecto).

`top-bottom`: Vista con bordes superior e inferior.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Posición de la flecha

`end`: La flecha se posiciona al final del encabezado (usado por defecto).

`start`: La flecha se posiciona al principio del encabezado.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Múltiple

La propiedad `multiple` permite que varios elementos del acordeón se expandan simultáneamente.

GRAVITY_TRANSLATION_BLOCK_11_END

GRAVITY_TRANSLATION_BLOCK_12_END

## Resumen Personalizado

Usa el componente `Accordion.Summary` para crear un encabezado personalizado.

GRAVITY_TRANSLATION_BLOCK_13_END

GRAVITY_TRANSLATION_BLOCK_14_END

## Estado Deshabilitado

Los elementos individuales del acordeón se pueden deshabilitar usando la propiedad `disabled`.

GRAVITY_TRANSLATION_BLOCK_15_END

GRAVITY_TRANSLATION_BLOCK_16_END

## Propiedades

### Accordion

| Nombre          | Descripción                                        |            Tipo            |  Predeterminado  |
| :-------------- | :------------------------------------------------- | :------------------------: | :--------------: |
| size            | Tamaño del acordeón                                |     `"m"` `"l"` `"xl"`     |      `"m"`       |
| view            | Apariencia del acordeón                            |  `"solid"` `"top-bottom"`  |    `"solid"`     |
| multiple        | Permite que varios elementos se expandan simultáneamente |         `boolean`          |     `false`      |
| arrowPosition   | Posición del indicador de flecha                   |     `"start"` `"end"`      |      `"end"`       |
| defaultValue    | Valor predeterminado para el estado no controlado  | `string` `string[]` `null` |                  |
| value           | Valor actual para el estado controlado             | `string` `string[]` `null` |                  |
| onUpdate        | Función de devolución de llamada que se llama cuando cambia el estado |         `Function`         |                  |
| ariaLevel       | Nivel de encabezado para accesibilidad             |          `number`          |        `3`         |
| className       | Nombre de la clase CSS                             |          `string`          |                  |
| qa              | Atributo `data-qa` de HTML, usado para pruebas     |          `string`          |                  |

### Accordion.Item

| Nombre            | Descripción                                      |       Type        | Predeterminado |
| :-------------- | :----------------------------------------------- | :---------------: | :------------: |
| value             | Identificador único para el elemento             |     `string`      |                |
| summary           | Encabezado del elemento del acordeón            | `React.ReactNode` |                |
| expanded          | Estado expandido controlado                      |     `boolean`     |                |
| defaultExpanded   | Estado expandido predeterminado                  |     `boolean`     |                |
| disabled          | Deshabilita el elemento del acordeón            |     `boolean`     |     `false`      |
| keepMounted       | Mantiene el contenido en el DOM incluso cuando está colapsado |     `boolean`     |                |
| onUpdate          | Función de devolución de llamada que se llama cuando cambia el estado del elemento |    `Function`     |                |
| className         | Nombre de la clase CSS                           |     `string`      |                |
| qa                | Atributo `data-qa` de HTML, usado para pruebas   |     `string`      |                |

### Accordion.Summary
GRAVITY_TRANSLATION_BLOCK_17_END

| Nombre     | Descripción                                                                             |                      Tipo                       |                                          Valor predeterminado                                          |
| :--------- | :-------------------------------------------------------------------------------------- | :---------------------------------------------: | :---------------------------------------------------------------------------------------: |
| children | Función de renderizado de resumen personalizado                                                          | `(props, defaultSummary) => React.ReactElement` |                                                                                           |
| qa       | Atributo `data-qa` de HTML, utilizado para pruebas. Solo funciona si `qa` se pasa en Accordion.Item |                    `string`                     | `${accordion-item}-summary` si `qa` se pasa en Accordion.Item, `disclosure-summary` si no |

## API de CSS

| Nombre                           | Descripción                               |
| :----------------------------- | :---------------------------------------- |
| `--g-accordion-padding-inline` | Relleno en línea (horizontal) para el acordeón |