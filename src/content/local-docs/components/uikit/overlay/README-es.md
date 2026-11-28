<!--GITHUB_BLOCK-->

# Overlay

<!--/GITHUB_BLOCK-->

El componente `Overlay` renderiza una superposición sobre el elemento padre con posición relativa, es decir, el elemento padre debe tener `position` establecido en `relative`.
Por ejemplo, se puede utilizar para preservar el diseño deseado mientras se cargan datos.

```tsx
import {Overlay} from '@gravity-ui/uikit';
```

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

### Fondo

Puedes usar colores de fondo `base` o `float`.

<!--GITHUB_BLOCK-->

```tsx
<Overlay background="base">
<Overlay background="float">
```

<!--/GITHUB_BLOCK-->

## Propiedades

| Nombre       | Descripción                             |        Tipo        | Por defecto |
| :----------- | :-------------------------------------- | :----------------: | :---------: |
| className  | Nombre de la clase CSS del elemento raíz      |      `string`      |             |
| visible    | Estado de visibilidad de la superposición                |     `boolean`      | `false` |
| background | Estilo de fondo de la superposición                | `"base"` `"float"` | `base`  |
| children   | Contenido (normalmente, un componente `Loader`) | `React.ReactNode`  |             |
