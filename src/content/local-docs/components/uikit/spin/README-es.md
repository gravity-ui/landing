<!--GITHUB_BLOCK-->

# Spin

<!--/GITHUB_BLOCK-->

El componente `Spin` muestra el estado de carga (un semicírculo giratorio) en escenarios en línea. A diferencia de `Loader`, este componente se utiliza para mostrar el estado de carga en escenarios en línea, por ejemplo, en un `Button` o `Label`.

```tsx
import {Spin} from '@gravity-ui/uikit';
```

### Tamaño

<!--SANDBOX
import {Spin} from '@gravity-ui/uikit';

export default function () {
    return (
        <>
            <Spin size="xs" />
            <Spin size="s" />
            <Spin size="m" />
            <Spin size="l" />
            <Spin size="xl" />
        </>
    );
}
SANDBOX-->

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

`S`: Pequeño, se usa cuando un spin de tamaño mediano es demasiado grande.

`M`: Mediano (básico), se usa en la mayoría de los casos.

`L`: Grande, se usa cuando un spin de tamaño mediano es demasiado pequeño.

`XL`: Extra grande.

## Propiedades

| Nombre      | Descripción                           |              Tipo               | Por defecto |
| :---------- | :------------------------------------ | :-----------------------------: | :---------: |
| size      | Tamaño del Spin                             | `"xs"` `"s"` `"m"` `"l"` `"xl"` |  `"m"`  |
| style     | Estilos CSS personalizados para el elemento raíz    |      `React.CSSProperties`      |         |
| className | Clase CSS personalizada para el elemento raíz |            `string`             |         |
| qa        | Atributo de prueba (`data-qa`)            |            `string`             |         |

### API CSS

| Nombre             | Descripción                     |
| :----------------- | :------------------------------ |
| `--g-spin-color` | El color principal del componente |
