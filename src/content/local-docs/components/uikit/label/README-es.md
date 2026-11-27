Puedes usar `Label`s para resaltar cierta información. Un `Label` con el botón `Close` o `Copy` puede ser útil para varias acciones sencillas.

Los `Label`s son más adecuados para mostrar información de texto de una sola línea con diferentes códigos de color que indican su importancia.

```tsx
import {Label} from '@gravity-ui/uikit';
```

## Apariencia

Un `Label` se puede mostrar en varios estilos.

### Tema

Usa la propiedad `theme` para aplicar diferentes temas para varios estados. Puedes usar los siguientes valores: `normal`, `info`, `success`, `warning`, `danger`, `utility`, `unknown` y `clear`.
El tema predeterminado es `normal`.

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

### Tipo

La propiedad `type` agrega varias opciones a un `Label`:

`copy`: Agrega un botón de copia; al hacer clic, copia el valor de la propiedad `copyText`.

`close`: Agrega un botón de cierre para administrar listas de etiquetas.

`info`: Agrega un ícono de información a la etiqueta.

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Icono

Puedes agregar un ícono con la propiedad `icon`. Para hacerlo, usa el componente [`Icon`](../Icon), que es un envoltorio especial para SVGs.

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

## Valor

Puedes usar `Label`s para mostrar información de clave-valor. Para ello, debes proporcionar la clave a la propiedad `children` y el valor a `value`:

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Estado

Una `label` puede tener diferentes estados:

- `disabled`: No se permiten interacciones.
- `interactive`: Hace que la etiqueta sea sensible al pasar el cursor.
- `loading`: Muestra un estado de carga.

GRAVITY_TRANSLATION_BLOCK_8_END

GRAVITY_TRANSLATION_BLOCK_9_END

## Tamaño

GRAVITY_TRANSLATION_BLOCK_10_END

GRAVITY_TRANSLATION_BLOCK_11_END

## Propiedades

| Nombre             | Descripción                                                                    |                  Tipo                   |   Predeterminado   |
| :----------------- | :----------------------------------------------------------------------------- | :-------------------------------------: | :----------------: |
| children           | Contenido                                                                      |            `React.ReactNode`            |                    |
| className          | Atributo `class` de HTML                                                       |                `string`                 |                    |
| closeButtonLabel | `aria-label` del botón de cierre                                                |                `string`                 |                    |
| copyButtonLabel  | `aria-label` del botón de copia                                                |                `string`                 |                    |
| copyText           | Texto a copiar                                                                 |                `string`                 |                    |
| disabled           | Estado deshabilitado                                                           |                `boolean`                |                    |
| icon               | Icono de la etiqueta (a la izquierda)                                          |            `React.ReactNode`            |                    |
| interactive        | Habilita el efecto hover. Nota: no se puede desactivar para las etiquetas `copy` e `info`. |                `boolean`                |                    |
| loading            | Estado de carga                                                                |                `boolean`                |       `false`      |
| onClick            | Manejador del evento `click`                                                   |               `Function`                |                    |
| onCloseClick       | Manejador del evento `click` del botón de cierre                               |               `Function`                |                    |
| onCopy             | Manejador del evento `copy`                                                    |               `Function`                |                    |
| qa                 | Atributo `data-qa` de HTML, usado para pruebas                                 |                `string`                 |                    |
| size               | Tamaño de la etiqueta                                                          |       `"2xs"` `"xs"` `"s"` `"m"`        |       `"xs"`       |
| theme              | Tema de la etiqueta                                                            |                `string`                 |      `"normal"`      |
| title              | Atributo `title` de HTML                                                       |                `string`                 |                    |
| type               | Tipo de etiqueta                                                               | `"default"` `"copy"` `"close"` `"info"` |      `"default"`     |
| value              | Valor de la etiqueta (mostrado como `"children : value"`)                      |            `React.ReactNode`            |                    |
| width              | Controla cómo la etiqueta usa el espacio del padre                             |                `"auto"`                 |                    |