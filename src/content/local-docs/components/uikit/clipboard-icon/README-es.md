`ClipboardIcon` es un icono de copia animado que refleja el estado de la copia (inactivo o éxito); está diseñado para usarse dentro de `CopyToClipboard` o `ClipboardButton` en lugar de usarse por sí solo.

```tsx
import {ClipboardIcon} from '@gravity-ui/uikit';
```

### Estado

Dependiendo de la propiedad `status`, el icono cambiará en consecuencia:

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

## Propiedades

| Nombre      | Descripción                                                 | Tipo     | Por defecto |
| :-------- | :---------------------------------------------------------- | :------- | :---------- |
| className | Atributo HTML `class`                                       | `string` |             |
| size      | Determina el tamaño del icono                               | `number` |             |
| status    | Los valores disponibles son `pending`, `success` y `error`. | `string` |             |

GRAVITY_TRANSLATION_BLOCK_2_END