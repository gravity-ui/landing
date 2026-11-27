<!--GITHUB_BLOCK-->

# Icon

<!--/GITHUB_BLOCK-->

`Icon` renderiza um glifo SVG em um determinado tamanho e cor, recebendo o SVG como um componente React ou um asset importado. Ele serve como um proxy único para o uso de SVGs em toda a base de código, que podem ser carregados através de um componente React ou loaders do Webpack como [`SVGR`](https://react-svgr.com/docs/webpack/), [`svg-react-loader`](https://github.com/jhamlet/svg-react-loader), [`svg-inline-loader`](https://github.com/webpack-contrib/svg-inline-loader), ou [`svg-sprite-loader`](https://github.com/JetBrains/svg-sprite-loader).

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

### Loader do Webpack

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

## Propriedades

| Nome      | Descrição                              |                             Tipo                             |     Padrão      |
| :-------- | :--------------------------------------- | :----------------------------------------------------------: | :--------------: |
| data      | Fonte do ícone SVG                       |                          `IconData`                          |                  |
| width     | Atributo `width` do SVG                  |                      `number` `string`                       |                  |
| height    | Atributo `height` do SVG                 |                      `number` `string`                       |                  |
| size      | Ambos os atributos `width` e `height` do SVG |                      `number` `string`                       |                  |
| fill      | Atributo `fill` do SVG                   |                           `string`                           | `"currentColor"` |
| stroke    | Atributo `stroke` do SVG                 |                           `string`                           |     `"none"`     |
| color     | Cor do texto aplicada ao ícone SVG       | `string` (veja os valores na seção **Cor** do `Text`) |                  |
| className | Classe CSS personalizada para o elemento raiz |                           `string`                           |                  |
| style     | Estilos personalizados para o elemento raiz |                       `CSSProperties`                        |                  |
