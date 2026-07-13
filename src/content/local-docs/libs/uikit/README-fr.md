# UIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook tests](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/test-storybook.yml?label=Storybook%20Tests&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/test-storybook.yml) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/uikit/)

Un ensemble de composants React flexibles, très pratiques et efficaces pour créer des applications web riches.

<!--GITHUB_BLOCK-->

![Image de couverture](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

## Ressources

### ![Logo Globe Clair](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Logo Globe Sombre](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [Site Web](https://gravity-ui.com)

### ![Logo Documentation Clair](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Logo Documentation Sombre](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [Documentation](https://gravity-ui.com/components/uikit/alert)

### ![Logo Figma Clair](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Logo Figma Sombre](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma](<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>)

### ![Logo Themer Clair](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Logo Themer Sombre](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Themer](https://gravity-ui.com/themer)

### ![Logo Storybook Clair](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Logo Storybook Sombre](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/uikit/)

### ![Logo Communauté Clair](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Logo Communauté Sombre](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [Communauté](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## Installation

```shell
npm install --save-dev @gravity-ui/uikit
```

## Utilisation

```jsx
import {Button} from '@gravity-ui/uikit';

const SubmitButton = <Button view="action" size="l" />;
```

### Styles

UIKit est livré avec des styles de base et un thème. Pour que tout soit joli, incluez ceci en haut de votre fichier d'entrée :

```js
// index.js

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

// ...
```

UIKit prend en charge différents thèmes : clair, sombre et leurs variantes contrastées. Votre application doit être rendue à l'intérieur de `ThemeProvider` :

```js
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from '@gravity-ui/uikit';

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme="light">
    <App />
  </ThemeProvider>,
);
```

Il est possible de générer des classes CSS racine initiales lors du SSR pour éviter le scintillement du thème :

```js
import {getRootClassName} from '@gravity-ui/uikit/server';

const theme = 'dark';
const rootClassName = getRootClassName({theme});

const html = `
<html>
  <body>
    <div id="root" class="${rootClassName}"></div>
  </body>
</html>
`;
```

Il existe également un fichier SCSS de [mixins](styles/mixins.scss) avec des helpers utiles à utiliser dans votre application.

### I18N

Certains composants contiennent des jetons textuels (mots et phrases). Ils sont disponibles en deux langues : `en` (par défaut) et `ru`.
Pour définir la langue, utilisez la fonction `configure` :

```js
// index.js

import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

## Développement

Pour démarrer le serveur de développement avec storybook, exécutez la commande suivante :

```shell
git clone git@github.com:gravity-ui/uikit.git
cd uikit
npm ci
npm run start
```

## Licence

Distribué sous la licence MIT. Voir [LICENSE](LICENSE) pour les détails.

## Pour les agents IA

La bibliothèque de composants React de base et de jetons de conception pour les applications Gravity UI — contrôles, entrées, superpositions, mise en page et thèmes sur lesquels tous les autres packages @gravity-ui s'appuient.

### Quand l'utiliser

- Interface utilisateur d'application standard : boutons, contrôles de formulaire, modales et popups, menus, onglets, étiquettes, typographie et primitives de mise en page.
- La base thématique d'une application Gravity UI : `ThemeProvider`, jetons de conception et variables CSS que le reste de l'écosystème `@gravity-ui/*` s'attend à trouver.
- Données tabulaires simples via le composant `Table` intégré (sélection, tri, actions sur les lignes).

### Quand ne pas l'utiliser

- Grilles de données riches en fonctionnalités (virtualisation, redimensionnement de colonnes, regroupement, réorganisation) — utilisez [`@gravity-ui/table`](https://github.com/gravity-ui/table), un package headless séparé. Ce n'est **pas** le même que le composant `Table` de uikit.
- Graphiques et visualisation de données — utilisez [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) (`@gravity-ui/chartkit` est l'ancien wrapper).
- Coques de navigation d'application (en-tête latéral, pied de page, logo) — utilisez [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation).
- Sélecteurs de date, calendriers et contrôles de plage — utilisez [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components).
- L'ensemble d'icônes SVG lui-même — utilisez [`@gravity-ui/icons`](https://github.com/gravity-ui/icons) ; uikit ne fournit que le rendu `Icon`.

### Pièges courants

- La prop de style de `Button` est `view`, pas `variant` ou `color`.
- **Les composants s'affichent sans style sans configuration.** Encapsulez l'application dans `ThemeProvider` **et** importez `@gravity-ui/uikit/styles/styles.css` (plus `fonts.css`) une seule fois au point d'entrée — les deux sont requis.
- **`Icon` n'a pas de prop `name`.** Passez un composant d'icône importé via `data` : `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} size={16} />`.
- Les valeurs de `theme` sont `light | dark | light-hc | dark-hc`. Il n'y a pas de `theme="default"`.

### Documentation utile