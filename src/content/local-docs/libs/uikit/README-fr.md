# UIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![npm downloads](https://img.shields.io/npm/dm/@gravity-ui/uikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/uikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/ci.yml?query=branch:main) [![storybook tests](https://img.shields.io/github/actions/workflow/status/gravity-ui/uikit/.github/workflows/test-storybook.yml?label=Storybook%20Tests&logo=github)](https://github.com/gravity-ui/uikit/actions/workflows/test-storybook.yml) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/uikit/)

[English](README.md) | [Русский](README-ru.md)

Un ensemble de composants React flexibles, très pratiques et performants pour créer des applications web riches. Fait partie du système de design [Gravity UI](https://gravity-ui.com).

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/uikit_cover.png)

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [Site web](https://gravity-ui.com) &nbsp;&nbsp; ![Documentation Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_light.svg#gh-light-mode-only) ![Documentation Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/book-open_dark.svg#gh-dark-mode-only) [Documentation](https://gravity-ui.com/components/uikit/alert) &nbsp;&nbsp; ![Figma Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_light.svg#gh-light-mode-only) ![Figma Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/figma_dark.svg#gh-dark-mode-only) [Figma](<https://www.figma.com/community/file/1271150067798118027/Gravity-UI-Design-System-(Beta)>) &nbsp;&nbsp; ![Themer Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_light.svg#gh-light-mode-only) ![Themer Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/bucket-paint_dark.svg#gh-dark-mode-only) [Themer](https://gravity-ui.com/themer) &nbsp;&nbsp; ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/uikit/) &nbsp;&nbsp; ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/uikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [Communauté](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## À propos

UIKit est le package fondamental du système de design [Gravity UI](https://gravity-ui.com) — un ensemble éprouvé de plus de 70 composants React conçus pour les applications web en production. Il gère les aspects complexes : thèmes, accessibilité, disposition RTL, rendu côté serveur et internationalisation, vous permettant ainsi de vous concentrer sur la création de votre produit.

Caractéristiques principales :

- **Plus de 70 composants** — champs de saisie, fenêtres modales, affichage de données, primitives de mise en page, retours d'information, et plus encore.
- **Thèmes intégrés** — variantes claires, sombres et à fort contraste avec un outil [Themer](https://gravity-ui.com/themer) interactif pour personnaliser les jetons.
- **Support RTL** — direction de mise en page complète de droite à gauche.

Parcourez le catalogue complet des composants dans [Storybook](https://preview.gravity-ui.com/uikit/) ou la [documentation](https://gravity-ui.com/components/uikit/alert).

## Premiers pas

### Prérequis

React 16.14, 17, 18 ou 19 doit être installé dans votre projet.

### Installation

```shell
npm install @gravity-ui/uikit
```

## Utilisation

Importez les composants directement depuis le package :

```jsx
import {Button} from '@gravity-ui/uikit';

const SubmitButton = (
  <Button view="action" size="l">
    Soumettre
  </Button>
);
```

### Styles

Incluez les styles de base et les polices une seule fois en haut du point d'entrée de votre application :

```js
// index.js
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
```

Un fichier SCSS avec des [mixins](styles/mixins.scss) utiles est également disponible pour être utilisé dans vos propres feuilles de style.

### Guides

Pour en savoir plus :

- [Thèmes](docs/theming.md) — activez les thèmes clair, sombre et à fort contraste.
- [Rendu côté serveur](docs/server-side-rendering.md) — générez la classe CSS racine côté serveur.
- [Internationalisation](docs/i18n.md) — définissez la langue des composants intégrés.

## Développement

```shell
git clone git@github.com:gravity-ui/uikit.git
cd uikit
npm ci
npm run start   # lance Storybook à l'adresse http://localhost:7007
```

Autres commandes utiles :

```shell
npm test              # exécute les tests unitaires
npm run lint          # vérifie la qualité du code JS, SCSS et Markdown
npm run typecheck     # vérifie les types TypeScript
npm run playwright    # exécute les tests de régression visuelle
```

## Mainteneurs

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/amje">
        <img src="https://github.com/amje.png?size=100" width="100" alt="amje" /><br />
        <sub><b>@amje</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ValeraS">
        <img src="https://github.com/ValeraS.png?size=100" width="100" alt="ValeraS" /><br />
        <sub><b>@ValeraS</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/korvin89">
        <img src="https://github.com/korvin89.png?size=100" width="100" alt="korvin89" /><br />
        <sub><b>@korvin89</b></sub>
      </a>
    </td>
  </tr>
</table>

## Contribution

Les contributions sont les bienvenues ! Veuillez lire [CONTRIBUTING.md](CONTRIBUTING.md) avant de soumettre une pull request. Pour des directives détaillées sur les PR, consultez [contribute/pull-request.md](contribute/pull-request.md).

Nous avons [![contributors](https://img.shields.io/github/contributors/gravity-ui/uikit?label=contributors)](https://github.com/gravity-ui/uikit/graphs/contributors) contributeurs et ce nombre ne cesse de croître — rejoignez-nous !

Rejoignez la communauté sur [Telegram](https://t.me/gravity_ui) pour vos questions et discussions.

## Licence

Distribué sous la licence MIT. Voir [LICENSE](LICENSE) pour les détails.

## Pour les agents IA

La bibliothèque de base de composants React et de tokens de design pour les applications Gravity UI — contrôles, entrées, superpositions, mise en page et thèmes sur lesquels tous les autres packages `@gravity-ui/*` s'appuient.

### Quand l'utiliser

- Interface utilisateur standard des applications : boutons, contrôles de formulaire, modales et popups, menus, onglets, étiquettes, typographie et primitives de mise en page.
- La base thématique d'une application Gravity UI : `ThemeProvider`, tokens de design et variables CSS que le reste de l'écosystème `@gravity-ui/*` s'attend à trouver.
- Données tabulaires simples via le composant `Table` intégré (sélection, tri, actions sur les lignes).

### Quand ne pas l'utiliser

- Grilles de données riches en fonctionnalités (virtualisation, redimensionnement des colonnes, regroupement, réorganisation) — utilisez [`@gravity-ui/table`](https://github.com/gravity-ui/table), un package headless séparé. Ce n'est **pas** la même chose que le composant `Table` de uikit.
- Graphiques et visualisation de données — utilisez [`@gravity-ui/charts`](https://github.com/gravity-ui/charts) (`@gravity-ui/chartkit` est l'ancien wrapper).
- Coques de navigation d'application (en-tête latéral, pied de page, logo) — utilisez [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation).
- Sélecteurs de date, calendriers et contrôles de plage — utilisez [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components).
- L'ensemble d'icônes SVG lui-même — utilisez [`@gravity-ui/icons`](https://github.com/gravity-ui/icons) ; uikit ne fournit que le rendu `Icon`.

### Pièges courants

- La prop de style de `Button` est `view`, pas `variant` ou `color`.
- **Les composants s'affichent sans style sans configuration.** Encapsulez l'application dans `ThemeProvider` **et** importez `@gravity-ui/uikit/styles/styles.css` (ainsi que `fonts.css`) une seule fois au point d'entrée — les deux sont requis.
- **`Icon` n'a pas de prop `name`.** Passez un composant d'icône importé via `data` : `import {Gear} from '@gravity-ui/icons'; <Icon data={Gear} size={16} />`.
- Les valeurs de `theme` sont `light | dark | light-hc | dark-hc`. Il n'y a pas de `theme="default"`.

### Documentation utile

- [Composants de mise en page et espacements](./docs/layout.md)
- [Thèmes, couleurs et image de marque](./docs/theming.md)
- [Typographie](./docs/typography.md)

## Documentation pour les agents IA

La documentation lisible par agent pour la version installée se trouve dans `node_modules/@gravity-ui/uikit/build/docs/INDEX.md`.

## Historique des étoiles

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline" />
    <img alt="Graphique d'historique des étoiles" width="600" src="https://api.star-history.com/svg?repos=gravity-ui/uikit&type=Timeline" />
  </picture>
</div>

---

Si vous trouvez UIKit utile, veuillez envisager de lui donner un ⭐ sur [GitHub](https://github.com/gravity-ui/uikit) — cela aide les autres à découvrir le projet.