# @gravity-ui/navigation &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/navigation)](https://www.npmjs.com/package/@gravity-ui/navigation) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/navigation/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/navigation/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/navigation/)

### Navigation dans l'en-tête latéral &middot; [Aperçu →](https://preview.yandexcloud.dev/navigation/)

![](docs/images/showcase.png)

## Installation

```bash
npm install @gravity-ui/navigation
```

Assurez-vous que les dépendances pair sont installées dans votre projet

```bash
npm install --dev @gravity-ui/uikit@^7.2.0 @gravity-ui/icons@^2.2.0 @bem-react/classname@^1.6.0 react@^19.0.0 react-dom@^19.0.0
```

## Utilisation

Rendez `AsideHeader` comme la structure de l'application. C'est un composant contrôlé — vous gérez l'état replié via `compact`/`onChangeCompact` — et le contenu de votre page passe par `renderContent`. Configurez d'abord les styles de `@gravity-ui/uikit` et `ThemeProvider` (voir le [guide des styles uikit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles)).

```tsx
import React from 'react';
import {AsideHeader} from '@gravity-ui/navigation';
import {Gear, House} from '@gravity-ui/icons';
import {ThemeProvider} from '@gravity-ui/uikit';

import '@gravity-ui/uikit/styles/styles.css';

export function App() {
  const [compact, setCompact] = React.useState(false);

  return (
    <ThemeProvider theme="light">
      <AsideHeader
        logo={{text: 'Mon App', href: '/'}}
        compact={compact}
        onChangeCompact={setCompact}
        menuItems={[
          {id: 'home', title: 'Accueil', icon: House, current: true},
          {id: 'settings', title: 'Paramètres', icon: Gear},
        ]}
        renderContent={() => <main>Contenu de la page</main>}
      />
    </ThemeProvider>
  );
}
```

## Sandboxes

Basique
https://codesandbox.io/p/devbox/navigation-demo-simple-x9k5sd

Avancé
https://codesandbox.io/p/devbox/recursing-dawn-6kc9vh

## Feuille de route 2025

1. Prise en charge du SSR
2. Ajout de plus de documentation et d'exemples sur [Gravity UI](https://gravity-ui.com/ru/components/navigation/aside-header)
3. Prise en charge de la navigation dans le thème UIKit
4. Unification des API `subheaderItem`, `menuItem`, `footerItem`

## Composants

- [AsideHeader](https://github.com/gravity-ui/navigation/tree/main/src/components/AsideHeader/README.md)
  - [AllPagesPanel](https://github.com/gravity-ui/navigation/tree/main/src/components/AllPagesPanel/README.md)
  - PageLayout
- [PageLayoutAside](https://github.com/gravity-ui/navigation/tree/main/src/components/AsideHeader/README.md)
- AsideFallback
- FooterItem
- [Logo](https://github.com/gravity-ui/navigation/tree/main/src/components/Logo/Readme.md)
- [Drawer](https://github.com/gravity-ui/navigation/tree/main/src/components/Drawer/README.md)
- [DrawerItem](https://github.com/gravity-ui/navigation/blob/main/src/components/Drawer/README.md#draweritem-props)
- [MobileHeader](https://github.com/gravity-ui/navigation/tree/main/src/components/MobileHeader/README.md)
- MobileHeaderFooterItem
- MobileLogo
- [HotkeysPanel](https://github.com/gravity-ui/navigation/tree/main/src/components/HotkeysPanel/README.md)
- [Footer](https://github.com/gravity-ui/navigation/tree/main/src/components/Footer/README.md)
- [MobileFooter](https://github.com/gravity-ui/navigation/tree/main/src/components/Footer/README.md)
- [ActionBar](https://github.com/gravity-ui/navigation/tree/main/src/components/ActionBar/README.md)
- [Settings](https://github.com/gravity-ui/navigation/tree/main/src/components/Settings/README.md)

## API CSS

Utilisé pour la thémisation des composants de Navigation

## Licence

Distribué sous la licence MIT. Voir [LICENSE](LICENSE) pour les détails.

## Pour les agents IA

Composants de navigation de la structure d'application pour les applications Gravity UI — la barre latérale `AsideHeader` rétractable, ainsi que les pieds de page, les tiroirs, le logo, les panneaux de raccourcis clavier et les paramètres qui encadrent une page entière.

### Quand l'utiliser

- La structure de navigation principale de l'application : `AsideHeader` (navigation latérale rétractable) avec `menuItems`, sous-en-tête et sections de pied de page.
- Interface utilisateur de support : `Drawer`/`DrawerItem`, `Footer`/`MobileFooter`, `MobileHeader`, `HotkeysPanel`, `Settings`, `ActionBar`, `Logo`.
- Mise en page du contenu de la page à l'intérieur de la structure de navigation via `renderContent` / `PageLayout`.

### Quand ne pas l'utiliser

- Contrôles génériques dans la page (boutons, onglets, menus, fil d'Ariane) — utilisez [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) ; ce package est le chrome externe de l'application, pas des composants généraux.
- Rendu du corps de la page lui-même à partir de la configuration — utilisez [`@gravity-ui/page-constructor`](https://github.com/gravity-ui/page-constructor).
- Routage côté client — ceci fournit uniquement l'interface utilisateur de navigation ; connectez les clics à votre propre routeur.

### Pièges courants

- **`AsideHeader` est contrôlé.** Vous devez gérer l'état replié avec `compact` et le mettre à jour dans `onChangeCompact` ; passer `compact` sans le gestionnaire fige la barre latérale.
- **Les éléments de menu sont `menuItems`, indexés par `id`.** Chaque élément est `{id, title, icon, current, onItemClick}`; `icon` accepte un composant d'icône (par exemple, de `@gravity-ui/icons`), pas un nom de chaîne.
- **Les dépendances pair sont requises.** `@gravity-ui/uikit`, `@gravity-ui/icons`, et `@bem-react/classname` doivent être installés aux côtés de `react`/`react-dom`.
- **Nécessite une configuration uikit.** Rendez à l'intérieur de `ThemeProvider` et importez `@gravity-ui/uikit/styles/styles.css`, sinon la structure s'affichera sans style.
- **Le contenu de la page passe par `renderContent`.** Rendez votre contenu routé via la prop `renderContent` / `PageLayout`, pas comme `children`.

## Documentation pour les agents IA

La documentation lisible par l'agent pour la version installée se trouve dans `node_modules/@gravity-ui/navigation/build/docs/INDEX.md`.