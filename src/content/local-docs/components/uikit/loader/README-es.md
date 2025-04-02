<!--GITHUB_BLOCK-->

# Cargador

<!--/GITHUB_BLOCK-->

```tsx
import {Loader} from '@gravity-ui/uikit';
```

El `Loader` componente muestra el progreso de la carga en forma de barras parpadeantes. A diferencia de esto `Spin`, este componente se usa en escenarios globales, por ejemplo, para una página completa o `Dialog`.

### Tamaño

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Loader size="s" />
<Loader size="m" />
<Loader size="l" />
`}
>
    <UIKit.Loader size="s" />
    <UIKit.Loader size="m" />
    <UIKit.Loader size="l" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Loader size="s" />
<Loader size="m" />
<Loader size="l" />
```

<!--/GITHUB_BLOCK-->

`S`: Tamaño pequeño, se usa cuando el cargador normal es demasiado grande.

`M`: Tamaño mediano (básico), usado en la mayoría de los casos.

`L`: De gran tamaño, se utiliza cuando el cargador normal es demasiado pequeño.

## Propiedades

| Nombre    | Descripción                                   |    Tipo     | Predeterminado |
| :-------- | :-------------------------------------------- | :---------: | :------------: |
| tamaño    | Tamaño del cargador                           | `"s"` `"l"` |     `"s"`      |
| className | Clase CSS personalizada para el elemento raíz |  `string`   |                |
