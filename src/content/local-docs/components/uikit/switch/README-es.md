El componente `Switch` se utiliza para alternar entre dos estados: típicamente, entre **activado** y **desactivado**, o **habilitado** y **deshabilitado**.

```tsx
import {Switch} from '@gravity-ui/uikit';
```

## Estados

Un `Switch` puede tener diferentes estados:

- Marcado: Cuando el interruptor tiene el estado **Activado**.
- Deshabilitado: Cuando el interruptor no está disponible.

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

## Tamaño

Utiliza la propiedad `size` para gestionar el tamaño del `Switch`. El tamaño predeterminado es `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

## Etiqueta

Puedes asignar una etiqueta a un `Switch` usando la propiedad `content` o proporcionarla como una propiedad hija.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Propiedades

| Nombre           | Descripción                                                                                              |                     Tipo                      | Por defecto |
| :--------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------: | :-------: |
| children       | El contenido del interruptor (normalmente, una etiqueta)                                                             |                  `ReactNode`                  |           |
| content        | El contenido del interruptor (alternativa a children)                                                      |                  `ReactNode`                  |           |
| disabled       | Activa/desactiva el estado `disabled` del interruptor                                                               |                   `boolean`                   | `false` |
| loading        | Activa/desactiva el estado `loading` del interruptor                                                                |                   `boolean`                   | `false` |
| checked        | Activa/desactiva el estado `checked` del interruptor                                                                |                   `boolean`                   | `false` |
| defaultChecked | Establece el estado inicial marcado cuando el componente se monta                                             |                   `boolean`                   | `false` |
| onUpdate       | Se dispara cuando el estado del interruptor es cambiado por el usuario y proporciona el valor marcado como argumento de callback |         `(checked: boolean) => void`          |           |
| onChange       | Se dispara cuando el estado del interruptor es cambiado por el usuario y proporciona el evento de cambio como argumento de callback  |                  `Function`                   |           |
| onFocus        | Manejador de eventos para usar cuando el elemento de entrada del interruptor recibe foco                                        |                  `Function`                   |           |
| onBlur         | Manejador de eventos para usar cuando el elemento de entrada del interruptor pierde foco                                           |                  `Function`                   |           |
| size           | Establece el tamaño del interruptor                                                                              |                  `s` `m` `l`                  |   `m`   |
| id             | Atributo `id` de HTML                                                                                      |                   `string`                    |           |
| qa             | Atributo `data-qa` de HTML, usado para pruebas                                                               |                   `string`                    |           |
| style          | Atributo `style` de HTML                                                                                   |             `React.CSSProperties`             |           |
| className      | Atributo `class` de HTML                                                                                   |                   `string`                    |           |
| title          | Atributo `title` de HTML                                                                                   |                   `string`                    |           |
| name           | Atributo `name` de HTML para el elemento de entrada                                                              |                   `string`                    |           |
| value          | Atributo `value` de HTML para el elemento de entrada                                                             |                   `string`                    |           |
| indeterminate  | Activa/desactiva el estado indeterminado del interruptor                                                            |                   `boolean`                   | `false` |
| controlProps   | Propiedades adicionales para el elemento de entrada subyacente                                                    | `React.InputHTMLAttributes<HTMLInputElement>` |           |
| controlRef     | Ref al elemento de entrada subyacente                                                                      |         `React.Ref<HTMLInputElement>`         |           |