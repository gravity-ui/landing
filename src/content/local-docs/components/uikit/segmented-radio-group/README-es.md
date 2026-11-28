El componente `SegmentedRadioGroup` se utiliza para crear un grupo de botones de radio donde los usuarios pueden seleccionar una única opción entre varias.

```tsx
import {SegmentedRadioGroup} from '@gravity-ui/uikit';
```

### Estado deshabilitado

GRAVITY_TRANSLATION_BLOCK_1_END

GRAVITY_TRANSLATION_BLOCK_2_END

### Tamaño

Utilice la propiedad `size` para gestionar el tamaño de `SegmentedRadioGroup`. El tamaño predeterminado es `m`.

GRAVITY_TRANSLATION_BLOCK_3_END

GRAVITY_TRANSLATION_BLOCK_4_END

### Ancho

Utilice la propiedad `width` para gestionar el ancho de `SegmentedRadioGroup`:

GRAVITY_TRANSLATION_BLOCK_5_END

GRAVITY_TRANSLATION_BLOCK_6_END

## Propiedades

| Nombre         | Descripción                                                                                              |                Tipo                | Predeterminado |
| :----------- | :------------------------------------------------------------------------------------------------------- | :--------------------------------: | :------------: |
| children     | Contenido del botón de radio.                                                                            |            `ReactNode`             |                |
| disabled     | Activa/desactiva el estado `disabled` del botón de radio.                                                |             `boolean`              |     `false`     |
| options      | Opciones para el botón de radio.                                                                         | `SegmentedRadioGroupOptionProps[]` |                |
| defaultValue | Establece el estado del valor inicial cuando el componente se monta.                                     |              `string`              |                |
| onUpdate     | Se activa cuando el usuario cambia el estado del botón de radio y proporciona el nuevo valor como argumento de callback. |     `(value: string) => void`      |                |
| onChange     | Se activa cuando el usuario cambia el estado del botón de radio y proporciona el evento de cambio como argumento de callback. |             `Function`             |                |
| onFocus      | Manejador de eventos para usar cuando el elemento de entrada de radio recibe el foco.                   |             `Function`             |                |
| onBlur       | Manejador de eventos para usar cuando el elemento de entrada de radio pierde el foco.                   |             `Function`             |                |
| width        | Establece el ancho del botón de radio.                                                                   |            `auto - max`            |                |
| size         | Establece el tamaño del botón de radio.                                                                  |          `s` `m` `l` `xl`          |      `m`       |
| name         | Atributo HTML `name` para el elemento de entrada.                                                        |              `string`              |                |
| qa           | Atributo HTML `data-qa`, utilizado para pruebas                                                          |              `string`              |                |
| style        | Atributo HTML `style`                                                                                    |       `React.CSSProperties`        |                |
| className    | Atributo HTML `class`                                                                                    |              `string`              |                |

## SegmentedRadioGroup.Option

El componente `SegmentedRadioGroup` también exporta un componente anidado `Option`. Puedes usarlo para crear opciones de botones de radio dentro de un `SegmentedRadioGroup`.

GRAVITY_TRANSLATION_BLOCK_7_END

GRAVITY_TRANSLATION_BLOCK_8_END

### Propiedades

| Nombre     | Descripción                                         |    Tipo     | Por defecto |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | El contenido del radio (normalmente, una etiqueta).        | `ReactNode` |         |
| content  | El contenido del radio (alternativa a children). | `ReactNode` |         |
| disabled | Activa/desactiva el estado `disabled` del radio.          |  `boolean`  | `false` |
| value    | Valor de control                                       |  `string`   |         |

GRAVITY_TRANSLATION_BLOCK_1_END

## Radio

El componente `Radio` permite al usuario seleccionar una opción de un conjunto de opciones mutuamente excluyentes.

GRAVITY_TRANSLATION_BLOCK_2_END

### Uso

```jsx
import { Radio } from 'your-ui-library';

function MyComponent() {
  return (
    <Radio name="my-radio-group" value="option1">
      Opción 1
    </Radio>
  );
}
```

GRAVITY_TRANSLATION_BLOCK_3_END

### Propiedades

La siguiente tabla describe las propiedades disponibles para el componente `Radio`:

GRAVITY_TRANSLATION_BLOCK_4_END

| Nombre     | Descripción                                         |    Tipo     | Por defecto |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | El contenido del radio (normalmente, una etiqueta).        | `ReactNode` |         |
| content  | El contenido del radio (alternativa a children). | `ReactNode` |         |
| disabled | Activa/desactiva el estado `disabled` del radio.          |  `boolean`  | `false` |
| value    | Valor de control                                       |  `string`   |         |

GRAVITY_TRANSLATION_BLOCK_5_END

### Ejemplo con `content`

Puedes usar la propiedad `content` como una alternativa a `children` para definir el contenido del radio.

GRAVITY_TRANSLATION_BLOCK_6_END

```jsx
import { Radio } from 'your-ui-library';

function MyComponent() {
  return (
    <Radio name="my-radio-group" value="option2" content={<span>Opción 2</span>} />
  );
}
```

GRAVITY_TRANSLATION_BLOCK_7_END

### Ejemplo deshabilitado

Para deshabilitar un radio, usa la propiedad `disabled`.

GRAVITY_TRANSLATION_BLOCK_8_END

```jsx
import { Radio } from 'your-ui-library';

function MyComponent() {
  return (
    <Radio name="my-radio-group" value="option3" disabled>
      Opción 3 Deshabilitada
    </Radio>
  );
}
```

GRAVITY_TRANSLATION_BLOCK_9_END