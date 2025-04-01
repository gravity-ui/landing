<!--GITHUB_BLOCK-->

# Icono

<!--/GITHUB_BLOCK-->

```tsx
import {Icon} from '@gravity-ui/uikit';
```

El `Icon` componente es un contenedor para el icono SVG. Los SVG se pueden cargar de diferentes maneras, como a través de un componente de React o varios cargadores de Webpack: [`SVGR`](https://react-svgr.com/docs/webpack/), , [`svg-react-loader`](https://github.com/jhamlet/svg-react-loader), [`svg-inline-loader`](https://github.com/webpack-contrib/svg-inline-loader) o. [`svg-sprite-loader`](https://github.com/JetBrains/svg-sprite-loader)
El `Icon` componente sirve como un proxy para usar a través de la base de código.

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

### Cargador de paquetes web

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

| Nombre                    | Descripción                                   |       Tipo        |  Predeterminado  |
| :------------------------ | :-------------------------------------------- | :---------------: | :--------------: |
| dato                      | Fuente del icono SVG                          |    `IconData`     |                  |
| anchura                   | `width` Atributo SVG                          | `number` `string` |                  |
| altura                    | `height` Atributo SVG                         | `number` `string` |                  |
| tamaño                    | Ambos `width` atributos y `height` SVG        | `number` `string` |                  |
| llenar                    | `fill` Atributo SVG                           |     `string`      | `"currentColor"` |
| accidente cerebrovascular | `stroke` Atributo SVG                         |     `string`      |     `"none"`     |
| className                 | Clase CSS personalizada para el elemento raíz |     `string`      |                  |
