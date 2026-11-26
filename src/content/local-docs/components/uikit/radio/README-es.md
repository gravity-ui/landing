El componente `Radio` permite a los usuarios seleccionar una única opción de una lista de opciones.

```tsx
import {Radio} from '@gravity-ui/uikit';
```

## Estados

`Radio` puede tener los siguientes estados:

- Marcado: La radio está seleccionada.
- Deshabilitado: La radio no está disponible para su selección.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Tamaño

Para gestionar el tamaño de `Radio`, utiliza la propiedad `size`. El tamaño predeterminado es `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Etiqueta

Puedes asignar una etiqueta a un `Radio` usando la propiedad `content` o proporcionarla como propiedad hija.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Propiedades

| Nombre           | Descripción                                                                                              |                     Tipo                      | Predeterminado |
| :--------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-----: |
| children       | El contenido de la radio (generalmente, una etiqueta).                                                             |                  `ReactNode`                  |         |
| content        | El contenido de la radio (alternativa a children).                                                      |                  `ReactNode`                  |         |
| disabled       | Activa/desactiva el estado `disabled` de la radio.                                                               |                   `boolean`                   | `false` |
| checked        | Activa/desactiva el estado `checked` de la radio.                                                                |                   `boolean`                   | `false` |
| defaultChecked | Establece el estado inicial marcado cuando el componente se monta                                             |                   `boolean`                   | `false` |
| onUpdate       | Se dispara cuando el estado de la radio es cambiado por el usuario y proporciona el valor marcado como argumento de callback. |         `(checked: boolean) => void`          |         |
| onChange       | Se dispara cuando el estado de la radio es cambiado por el usuario y proporciona el evento de cambio como argumento de callback.  |                  `Function`                   |         |
| onFocus        | Manejador de eventos para usar cuando el elemento de entrada de radio recibe foco.                                        |                  `Function`                   |         |
| onBlur           | Manejador de eventos para usar cuando el elemento de entrada de radio pierde foco.                                           |                  `Function`                   |         |
| size           | Establece el tamaño de la radio.                                                                              |                    `m` `l`                    |   `m`   |
| id             | Atributo `id` de HTML                                                                                      |                   `string`                    |         |
| qa             | Atributo `data-qa` de HTML, usado para pruebas.                                                              |                   `string`                    |         |
| style          | Atributo `style` de HTML                                                                                   |             `React.CSSProperties`             |         |
| className      | Atributo `class` de HTML                                                                                   |                   `string`                    |         |
| title          | Atributo `title` de HTML                                                                                   |                   `string`                    |         |
| name           | Atributo `name` de HTML para el elemento de entrada                                                              |                   `string`                    |         |
| value          | Valor de control                                                                                            |                   `string`                    |         |
| indeterminate  | Activa/desactiva el estado indeterminado de la radio.                                                            |                   `boolean`                   | `false` |
| controlProps   | Propiedades adicionales para el elemento de entrada subyacente                                                    | `React.InputHTMLAttributes<HTMLInputElement>` |         |
| controlRef     | Ref al elemento de entrada subyacente                                                                      |         `React.Ref<HTMLInputElement>`         |         |