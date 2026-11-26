El componente `RadioGroup` se utiliza para crear un grupo donde los usuarios pueden seleccionar una única opción entre varias.

```tsx
import {RadioGroup} from '@gravity-ui/uikit';
```

### Estado deshabilitado

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Tamaño

Utilice la propiedad `size` para gestionar el tamaño de `RadioGroup`. El tamaño predeterminado es `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Dirección

Utilice la propiedad `direction` para gestionar la dirección de `RadioGroup`. La dirección predeterminada es `horizontal`.

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Propiedades

| Nombre            | Descripción                                                                                       |           Type            |    Default     |
| :---------------- | :------------------------------------------------------------------------------------------------ | :-----------------------: | :------------: |
| children        | El contenido del grupo de radio.                                                                   |        `ReactNode`        |                |
| disabled        | Activa/desactiva el estado `disabled` del grupo de radio.                                                  |         `boolean`         |    `false`     |
| options         | Opciones para el grupo de radio.                                                                          |   `RadioGroupOption[]`    |                |
| optionClassName | Atributo `class` HTML para los hijos de radio.                                                    |         `string`          |                |
| direction       | Determina la dirección del grupo de radio.                                                      |  `horizontal - vertical`  | `"horizontal"` |
| defaultValue    | Establece el estado del valor inicial cuando el componente se monta.                                       |         `string`          |                |
| onUpdate        | Se activa cuando el usuario cambia el estado de la radio y proporciona el nuevo valor como argumento de callback.    | `(value: string) => void` |                |
| onChange        | Se activa cuando el usuario cambia el estado de la radio y proporciona el evento de cambio como argumento de callback. |        `Function`         |                |
| size            | Determina el tamaño del grupo de radio.                                                           |          `m` `l`          |      `m`       |
| qa              | Atributo `data-qa` HTML, utilizado para pruebas                                                        |         `string`          |                |
| style           | Atributo `style` HTML                                                                            |   `React.CSSProperties`   |                |
| className       | Atributo `class` HTML                                                                            |         `string`          |                |

## RadioGroup.Option

El componente `RadioGroup` también exporta un componente `Option` anidado equivalente a `Radio`, que se puede utilizar para crear opciones de radio dentro de `RadioGroup`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Propiedades

| Nombre     | Description                                         |    Type     | Default |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | El contenido de la radio (generalmente, una etiqueta).        | `ReactNode` |         |
| content  | El contenido de la radio (alternativa a `children`). | `ReactNode` |         |
| disabled | Activa/desactiva el estado `disabled` de la radio.          |  `boolean`  | `false` |
| value    | Valor de control                                       |  `string`   |         |