<!--GITHUB_BLOCK-->

# Espín

<!--/GITHUB_BLOCK-->

```tsx
import {Spin} from '@gravity-ui/uikit';
```

El `Spin` componente muestra el estado de carga (un semicírculo giratorio) en escenarios en línea. A diferencia de esto `Loader`, este componente se usa para mostrar el estado de carga en escenarios en línea, por ejemplo, en un `Button` o `Label`.

### Tamaño

<!--LANDING_BLOCK
<ExampleBlock
    code={`
<Spin size="xs" />
<Spin size="s" />
<Spin size="m" />
<Spin size="l" />
<Spin size="xl" />
`}
>
    <UIKit.Spin size="xs" />
    <UIKit.Spin size="s" />
    <UIKit.Spin size="m" />
    <UIKit.Spin size="l" />
    <UIKit.Spin size="xl" />
</ExampleBlock>
LANDING_BLOCK-->

<!--GITHUB_BLOCK-->

```tsx
<Spin size="xs" />
<Spin size="s" />
<Spin size="m" />
<Spin size="l" />
<Spin size="xl" />
```

<!--/GITHUB_BLOCK-->

`XS`: Extra pequeño.

`S`: Pequeño, se usa cuando un giro de tamaño mediano es demasiado grande.

`M`: Medio (básico), utilizado en la mayoría de los casos.

`L`: Grande, se usa cuando un giro de tamaño mediano es demasiado pequeño.

`XL`: Extra grande.

## Propiedades

| Nombre    | Descripción                                      |         Tipo          | Predeterminado |
| :-------- | :----------------------------------------------- | :-------------------: | :------------: |
| tamaño    | Tamaño de giro                                   |     `"xs"` `"xl"`     |     `"m"`      |
| estilo    | Estilos CSS personalizados para el elemento raíz | `React.CSSProperties` |                |
| className | Clase CSS personalizada para el elemento raíz    |       `string`        |                |
| qa        | Atributo de prueba (`data-qa`)                   |       `string`        |                |
