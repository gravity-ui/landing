# @gravity-ui/icons &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/icons)](https://www.npmjs.com/package/@gravity-ui/icons) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/icons/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/icons/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/icons/)

Un ensemble d'icônes Gravity UI. Les icônes proviennent de deux sources : SVG et React. Consultez la page de [présentation](https://preview.gravity-ui.com/icons/).

## Installation

```shell
npm install --save-dev @gravity-ui/icons
```

## Utilisation

### React

```js
import Cloud from '@gravity-ui/icons/Cloud';
```

ou

```js
import {Cloud} from '@gravity-ui/icons';
```

### SVG

> Vous pourriez avoir besoin d'un chargeur approprié pour cela

```js
import cloudIcon from '@gravity-ui/icons/svgs/cloud.svg';
```

## Licence

Distribué sous la licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.

## Pour les agents IA

L'ensemble officiel d'icônes SVG pour Gravity UI, distribué à la fois sous forme de composants React et de fichiers `.svg` bruts pour une utilisation avec le rendu `Icon` de `@gravity-ui/uikit`.

### Quand l'utiliser

- Vous avez besoin d'une icône dans une application Gravity UI et souhaitez un ensemble cohérent et prêt à l'emploi.
- Pour rendre une icône via uikit : importez le composant d'icône ici et passez-le à `Icon` de uikit via sa prop `data`.
- Vous avez besoin de l'actif `.svg` brut (par exemple, pour `background-image` en CSS ou un chargeur SVG au moment de la compilation) plutôt que d'un composant React.

### Quand ne pas l'utiliser

- Pour rendre l'icône à l'écran — ce package ne fournit que les glyphes ; le moteur de rendu réel (taille, couleur, accessibilité) est le composant `Icon` de [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Vous avez besoin d'une icône personnalisée ou de marque qui ne fait pas partie de l'ensemble — importez votre propre SVG et passez-le à `Icon` de uikit ; ne vous attendez pas à ce qu'il se trouve ici.

### Pièges courants

- **Les icônes sont passées en tant que données, pas par nom.** Faites `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} />` — il n'y a pas d'API `<Icon name="gear" />`, et ce package n'exporte pas son propre composant `<Icon>`.
- **Le chemin d'importation est important pour le tree-shaking.** `import Cloud from '@gravity-ui/icons/Cloud'` importe une seule icône ; `import {Cloud} from '@gravity-ui/icons'` fonctionne aussi mais dépend du bundler pour le tree-shaking du barrel.
- **Les importations SVG nécessitent un chargeur.** `import icon from '@gravity-ui/icons/svgs/cloud.svg'` ne fonctionne que si votre bundler est configuré pour gérer les fichiers `.svg`.
- **La taille et la couleur proviennent du moteur de rendu.** Définissez `size` sur `Icon` de uikit et contrôlez la couleur avec `color`/CSS `currentColor` ; les SVG eux-mêmes ne portent pas de couleur fixe.