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
| disabled     | Activa/desactiva el estado `disabled` del botón de radio.                                                |             `boolean`              |     `false`    |
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

### Importación

```jsx
import { Radio } from 'gravity-ui';
```

GRAVITY_TRANSLATION_BLOCK_3_END

### Uso

```jsx
import React, { useState } from 'react';
import { Radio } from 'gravity-ui';

function App() {
  const [value, setValue] = useState('option1');

  return (
    <div>
      <Radio name="my-radio-group" value="option1" checked={value === 'option1'} onChange={(e) => setValue(e.target.value)}>
        Opción 1
      </Radio>
      <Radio name="my-radio-group" value="option2" checked={value === 'option2'} onChange={(e) => setValue(e.target.value)}>
        Opción 2
      </Radio>
      <Radio name="my-radio-group" value="option3" checked={value === 'option3'} onChange={(e) => setValue(e.target.value)} disabled>
        Opción 3 (Deshabilitada)
      </Radio>
    </div>
  );
}
```

GRAVITY_TRANSLATION_BLOCK_4_END

### Propiedades

La siguiente tabla describe las propiedades disponibles para el componente `Radio`:

GRAVITY_TRANSLATION_BLOCK_5_END

| Nombre     | Descripción                                         |    Tipo     | Por defecto |
| :------- | :-------------------------------------------------- | :---------: | :-----: |
| children | El contenido del radio (normalmente, una etiqueta).        | `ReactNode` |         |
| content  | El contenido del radio (alternativa a children). | `ReactNode` |         |
| disabled | Activa/desactiva el estado `disabled` del radio.          |  `boolean`  | `false` |
| value    | Valor de control                                       |  `string`   |         |

GRAVITY_TRANSLATION_BLOCK_6_END

### Accesibilidad

*   Asegúrate de que cada `Radio` dentro de un grupo tenga el mismo atributo `name` para que funcionen correctamente como un grupo de selección.
*   Utiliza el atributo `checked` para indicar qué opción está seleccionada.
*   El atributo `disabled` se puede utilizar para deshabilitar un `Radio` específico.

GRAVITY_TRANSLATION_BLOCK_7_END