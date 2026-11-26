GRAVITY_TRANSLATION_BLOCK_0_END

`Icon` rend un glyphe SVG d'une taille et d'une couleur données, en prenant le SVG comme composant React ou comme ressource importée. Il sert de proxy unique pour l'utilisation des SVG dans l'ensemble de la base de code, qui peuvent être chargés via un composant React ou des chargeurs Webpack tels que [`SVGR`](https://react-svgr.com/docs/webpack/), [`svg-react-loader`](https://github.com/jhamlet/svg-react-loader), [`svg-inline-loader`](https://github.com/webpack-contrib/svg-inline-loader), ou [`svg-sprite-loader`](https://github.com/JetBrains/svg-sprite-loader).

```tsx
import {Icon} from '@gravity-ui/uikit';
```

### Composant React

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

### Chargeur Webpack

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

## Propriétés

| Nom       | Description                              |                             Type                             |     Défaut      |
| :-------- | :--------------------------------------- | :----------------------------------------------------------: | :-------------: |
| data      | Source de l'icône SVG                    |                          `IconData`                          |                 |
| width     | Attribut `width` du SVG                  |                      `number` `string`                       |                 |
| height    | Attribut `height` du SVG                 |                      `number` `string`                       |                 |
| size      | Attributs `width` et `height` du SVG     |                      `number` `string`                       |                 |
| fill      | Attribut `fill` du SVG                   |                           `string`                           | `"currentColor"` |
| stroke    | Attribut `stroke` du SVG                 |                           `string`                           |     `"none"`     |
| color     | Couleur du texte appliquée à l'icône SVG | `string` (voir les valeurs dans la section **Couleur** de `Text`) |                 |
| className | Classe CSS personnalisée pour l'élément racine |                           `string`                           |                 |
| style     | Styles personnalisés pour l'élément racine |                       `CSSProperties`                        |                 |