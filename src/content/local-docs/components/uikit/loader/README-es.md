<!--GITHUB_BLOCK-->

# Loader

<!--/GITHUB_BLOCK-->

El componente `Loader` muestra el progreso de carga como barras parpadeantes. A diferencia de `Spin`, este componente se utiliza en escenarios globales, por ejemplo, para una página completa o un `Dialog`.

```tsx
import {Loader} from '@gravity-ui/uikit';
```

### Tamaño

<!--SANDBOX
import {Loader} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Loader size="s" />
            <Loader size="m" />
            <Loader size="l" />
        </>
    );
}
SANDBOX-->

<!--GITHUB_BLOCK-->

```tsx
<Loader size="s" />
<Loader size="m" />
<Loader size="l" />
```

<!--/GITHUB_BLOCK-->

`S`: Tamaño pequeño, se utiliza cuando el cargador normal es demasiado grande.

`M`: Tamaño mediano (básico), se utiliza en la mayoría de los casos.

`L`: Tamaño grande, se utiliza cuando el cargador normal es demasiado pequeño.

## Propiedades

| Nombre      | Descripción                           |       Tipo        | Por defecto |
| :-------- | :------------------------------------ | :---------------: | :---------: |
| size      | Tamaño del cargador                           | `"s"` `"m"` `"l"` |    `"s"`    |
| className | Clase CSS personalizada para el elemento raíz |     `string`      |             |
