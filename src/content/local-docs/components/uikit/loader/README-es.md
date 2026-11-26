El componente `Loader` muestra el progreso de carga como barras parpadeantes. A diferencia de `Spin`, este componente se utiliza en escenarios globales, por ejemplo, para una página completa o un `Dialog`.

```tsx
import {Loader} from '@gravity-ui/uikit';
```

### Tamaño

GRAVITY_TRANSLATION_BLOCK_0_END

GRAVITY_TRANSLATION_BLOCK_1_END

`S`: Tamaño pequeño, se utiliza cuando el cargador normal es demasiado grande.

`M`: Tamaño mediano (básico), se utiliza en la mayoría de los casos.

`L`: Tamaño grande, se utiliza cuando el cargador normal es demasiado pequeño.

## Propiedades

| Nombre      | Descripción                           |       Tipo        | Por defecto |
| :-------- | :------------------------------------ | :---------------: | :---------: |
| size      | Tamaño del cargador                           | `"s"` `"m"` `"l"` |    `"s"`    |
| className | Clase CSS personalizada para el elemento raíz |     `string`      |             |