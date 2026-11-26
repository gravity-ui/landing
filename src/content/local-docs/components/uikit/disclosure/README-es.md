`Disclosure` es un componente colapsable que permite mostrar y ocultar su contenido anidado.

```tsx
import {Disclosure} from '@gravity-ui/uikit';
```

GRAVITY_TRANSLATION_BLOCK_0_END

## Controlar el estado de expansión

Puedes controlar el estado de expansión usando las propiedades `expanded` y `onUpdate`.

Ejemplo de componente controlado:

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Tamaño

Usa la propiedad `size` para controlar el tamaño de `Disclosure`. El tamaño predeterminado es `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Posición de la flecha

`start`: La flecha se posiciona al inicio del encabezado (usado por defecto).

`end`: La flecha se posiciona al final del encabezado.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Contenido personalizado

Usa el componente `Disclosure.Summary` para crear un encabezado personalizado y `Disclosure.Details` para el contenido personalizado.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

## Estado deshabilitado

`Disclosure` puede ser deshabilitado usando la propiedad `disabled`.

GRAVITY_TRANSLATION_BLOCK_9_END

GRAVITY_TRANSLATION_BLOCK_10_END

## Propiedades

### Disclosure

| Nombre             | Descripción                                                  | Tipo                                                  | Predeterminado |
| :--------------- | :----------------------------------------------------------- | :---------------------------------------------------- | :------------- |
| size             | Tamaño del componente                                        | `"m"` `"l"` `"xl"`                                    | `"m"`          |
| className        | Nombre de la clase CSS del elemento raíz                     | `string`                                              |                |
| disabled         | Estado deshabilitado                                         | `boolean`                                             | `false`        |
| defaultExpanded  | Estado de apertura predeterminado                            | `boolean`                                             | `false`        |
| expanded         | Estado de apertura controlado                                | `boolean`                                             |                |
| arrowPosition    | Controla la posición de la flecha                            | `"start"` `"end"`                                     | `"start"`      |
| summary          | Resumen del contenido                                        | `React.ReactNode`                                     |                |
| keepMounted      | Mantiene el contenido en el DOM incluso cuando está colapsado | `boolean`                                             | `true`         |
| onUpdate         | Se llama a la función de devolución de llamada cuando cambia el estado de expansión/colapso. | `(expanded: boolean) => void`                         |                |
| onSummaryKeyDown | Se llama a la función de devolución de llamada en eventos de teclado cuando el resumen tiene el foco. | `(e: React.KeyboardEvent<HTMLButtonElement>) => void` |                |
| children         | Contenido                                                    | `React.ReactNode`                                     |                |
| qa               | Identificador de prueba                                      | `string`                                              |                |

### Disclosure.Summary

| Nombre     | Descripción                                      | Tipo                                            | Predeterminado |
| :------- | :----------------------------------------------- | :---------------------------------------------- | :------------- |
| children | Función de renderizado                           | `(props, defaultSummary) => React.ReactElement` |                |
| qa       | Identificador de prueba                          | `string`                                        | `disclosure-summary` |

### Disclosure.Details
GRAVITY_TRANSLATION_BLOCK_11_END

| Nombre     | Descripción     | Tipo              | Por defecto              |
| :--------- | :-------------- | :---------------- | :----------------------- |
| children | Contenido         | `React.ReactNode` |                          |
| qa       | Identificador de prueba | `string`          | `disclosure-details` |

## API CSS

| Nombre                                 | Descripción                                          |
| :----------------------------------- | :--------------------------------------------------- |
| `--g-disclosure-text-color`          | Color del texto para el resumen del contenido                   |
| `--g-disclosure-text-color-disabled` | Color del texto para el resumen del contenido en estado deshabilitado |