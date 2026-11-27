<!--GITHUB_BLOCK-->

# Icon

<!--/GITHUB_BLOCK-->

`Icon` renderiza un glifo SVG con un tamaño y color dados, tomando el SVG como un componente React o un activo importado. Sirve como un proxy único para usar SVGs en todo el código base, que pueden cargarse a través de un componente React o cargadores de Webpack como [`SVGR`](https://react-svgr.com/docs/webpack/), [`svg-react-loader`](https://github.com/jhamlet/svg-react-loader), [`svg-inline-loader`](https://github.com/webpack-contrib/svg-inline-loader), o [`svg-sprite-loader`](https://github.com/JetBrains/svg-sprite-loader).

```tsx
import {Icon} from '@gravity-ui/uikit';
```

### Componente React

```tsx
// CheckIcon.jsx
export function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path d="M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927 5.473-6.385a.75.75 0 0 1 1.057-.081Z" />
    </svg>
  );
}

// ---
import {CheckIcon} from './CheckIcon';

<Icon data={CheckIcon} size={16} />;
```

### Cargador Webpack

```tsx
// webpack.config.js
{
    test: /\.svg$/,
    use: ['<loader-name>'],
}

// check.svg
<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16">
    <path d="M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927 5.473-6.385a.75.75 0 0 1 1.057-.081Z" />
</svg>

// ---
import CheckIcon from './check.svg';

<Icon data={CheckIcon} size={16} />;
```

## Propiedades

| Nombre      | Descripción                              |                             Tipo                             |     Por defecto      |
| :---------- | :--------------------------------------- | :----------------------------------------------------------: | :------------------: |
| data        | Fuente del icono SVG                       |                          `IconData`                          |                      |
| width       | Atributo `width` del SVG                 |                      `number` `string`                       |                      |
| height      | Atributo `height` del SVG                |                      `number` `string`                       |                      |
| size        | Ambos atributos `width` y `height` del SVG |                      `number` `string`                       |                      |
| fill        | Atributo `fill` del SVG                  |                           `string`                           | `"currentColor"` |
| stroke      | Atributo `stroke` del SVG                |                           `string`                           |       `"none"`       |
| color       | Color de texto aplicado al icono SVG     | `string` (ver los valores en la sección **Color** de `Text`) |                      |
| className   | Clase CSS personalizada para el elemento raíz |                           `string`                           |                      |
| style       | Estilos personalizados para el elemento raíz |                       `CSSProperties`                        |                      |
