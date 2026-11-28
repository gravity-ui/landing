El componente `Divider` se utiliza como una línea delgada para delimitar y agrupar elementos, reforzando la jerarquía visual.

```tsx
import {Divider} from '@gravity-ui/uikit';
```

```tsx
<Divider className="custom-divider" direction="horizontal" />
```

### Orientación

Utilice la propiedad `direction` para gestionar la orientación del `Divider`. La orientación predeterminada es `horizontal`.

#### Horizontal

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

#### Vertical

GRAVITY_TRANSLATION_BLOCK_2_END

GRAVITY_TRANSLATION_BLOCK_3_END

### Contenido personalizado

GRAVITY_TRANSLATION_BLOCK_4_END

GRAVITY_TRANSLATION_BLOCK_5_END

### Alineación

GRAVITY_TRANSLATION_BLOCK_6_END

GRAVITY_TRANSLATION_BLOCK_7_END

## Propiedades

| Nombre        | Descripción                                     | Tipo                    | Predeterminado |
| :------------ | :---------------------------------------------- | :---------------------- | :------------- |
| className     | Atributo `class` de HTML                        | `string`                | -              |
| orientation   | Determina la dirección del divisor              | `horizontal - vertical` | `horizontal`   |
| children      | Contenido personalizado dentro del divisor      | `React.ReactNode`       |                |
| align         | Posición del contenido personalizado            | `start - center - end`  | `start`        |
| style         | Atributo `style` de HTML                        | `React.CSSProperties`   |                |
| qa            | Atributo `data-qa` de HTML, utilizado para pruebas | `string`                |                |

### API de CSS

| Nombre                | Descripción                                                                      |
| :------------------ | :------------------------------------------------------------------------------- |
| `--g-divider-color` | Color del divisor                                                                |
| `--g-divider-size`  | Tamaño del divisor (altura para orientación horizontal, ancho para orientación vertical) |