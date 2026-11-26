El componente `Checkbox` permite al usuario seleccionar o deseleccionar un valor específico.

```tsx
import {Checkbox} from '@gravity-ui/uikit';
```

## Estados

Un `Checkbox` puede tener diferentes estados:

- Marcado: La casilla de verificación está marcada.
- Deshabilitado: La casilla de verificación no está disponible.
- Indeterminado: La casilla de verificación se encuentra en un estado intermedio entre marcada y desmarcada.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Tamaño

Utilice la propiedad `size` para gestionar el tamaño del `Checkbox`. El tamaño predeterminado es `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Etiqueta

Puede asignar una etiqueta a un `Checkbox` utilizando la propiedad `content` o proporcionarla como propiedad hija.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Propiedades

| Nombre           | Descripción                                                                                                                            |                     Tipo                      | Predeterminado |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :------------: |
| children         | Contenido de la casilla de verificación (generalmente, una etiqueta).                                                                   |                  `ReactNode`                  |                |
| content          | Contenido de la casilla de verificación (alternativa a `children`).                                                                     |                  `ReactNode`                  |                |
| disabled         | Activa/desactiva el estado `disabled` de la casilla de verificación.                                                                   |                   `boolean`                   |     `false`    |
| checked          | Activa/desactiva el estado `checked` de la casilla de verificación.                                                                    |                   `boolean`                   |     `false`    |
| defaultChecked   | Establece el estado inicial `checked` cuando el componente se monta.                                                                   |                   `boolean`                   |     `false`    |
| onUpdate         | Se activa cuando el usuario cambia el estado de la casilla de verificación y proporciona el valor `checked` como argumento de callback. |         `(checked: boolean) => void`          |                |
| onChange         | Se activa cuando el usuario cambia el estado de la casilla de verificación y proporciona el evento de cambio como argumento de callback. |                  `Function`                   |                |
| onFocus          | Manejador de eventos para usar cuando el elemento de entrada de la casilla de verificación recibe el foco.                             |                  `Function`                   |                |
| onBlur           | Manejador de eventos para usar cuando el elemento de entrada de la casilla de verificación pierde el foco.                             |                  `Function`                   |                |
| size             | Determina el tamaño de la casilla de verificación.                                                                                      |                    `m` `l`                    |      `m`       |
| id               | Atributo `id` de HTML                                                                                                                  |                   `string`                    |                |
| qa               | Atributo `data-qa` de HTML, utilizado para pruebas                                                                                     |                   `string`                    |                |
| style            | Atributo `style` de HTML                                                                                                               |             `React.CSSProperties`             |                |
| className        | Atributo `class` de HTML                                                                                                               |                   `string`                    |                |
| title            | Atributo `title` de HTML                                                                                                               |                   `string`                    |                |
| name             | Atributo `name` de HTML para el elemento de entrada.                                                                                   |                   `string`                    |                |
| value            | Atributo `value` de HTML para el elemento de entrada.                                                                                  |                   `string`                    |                |
| indeterminate    | Activa/desactiva el estado `indeterminate` de la casilla de verificación.                                                              |                   `boolean`                   |     `false`    |
| controlProps     | Propiedades adicionales para el elemento de entrada subyacente.                                                                        | `React.InputHTMLAttributes<HTMLInputElement>` |                |
| controlRef       | Ref al elemento de entrada subyacente.                                                                                                 |         `React.Ref<HTMLInputElement>`         |                |