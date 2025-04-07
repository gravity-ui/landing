<!--GITHUB_BLOCK-->

# Superposición

<!--/GITHUB_BLOCK-->

```tsx
import {Overlay} from '@gravity-ui/uikit';
```

El `Overlay` componente representa una superposición sobre el elemento principal con la posición relativa, es decir, el elemento principal debe haberse `position` establecido en. `relative`
Por ejemplo, se puede usar para conservar el diseño deseado mientras se cargan los datos.

```jsx
import {Box, Overlay, Loader} from '@gravity-ui/uikit';

<Box position="relative">
  <div>Some content to hide under overlay</div>
  <Overlay visible={loading}>
    <Loader />
  </Overlay>
</Box>;
```

## Apariencia

### Antecedentes

Puede utilizar nuestros `base` colores `float` de fondo.

<!--GITHUB_BLOCK-->

```tsx
<Overlay background="base">
<Overlay background="float">
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre    | Descripción                                        |        Tipo        | Predeterminado |
| :-------- | :------------------------------------------------- | :----------------: | :------------: |
| className | Nombre de clase CSS del elemento raíz              |      `string`      |                |
| visible   | Estado de visibilidad superpuesta                  |     `boolean`      |    `false`     |
| fondo     | Estilo de fondo superpuesto                        | `"base"` `"float"` |     `base`     |
| niños     | Contenido (por lo general, un `Loader` componente) | `React.ReactNode`  |                |
