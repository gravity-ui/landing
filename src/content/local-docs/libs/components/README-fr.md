# @gravity-ui/components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/components)](https://www.npmjs.com/package/@gravity-ui/components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/components/)

Un ensemble de composants React complexes construits sur [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit). Fait partie du système de design [Gravity UI](https://gravity-ui.com).

## Installation

```shell
npm install @gravity-ui/components
```

## Utilisation

`@gravity-ui/uikit` 8 et React 18/19 sont requis. Installez la préversion actuelle de UIKit 8 avec `npm install @gravity-ui/uikit@beta`.

`@gravity-ui/uikit` est une dépendance pair : installez-la, importez ses styles une fois au point d'entrée de l'application, et enveloppez l'application dans `Provider`. Les composants de ce package s'affichent sans style sans cette configuration.

```tsx
import {Provider, TextInput} from '@gravity-ui/uikit';
import {FormRow} from '@gravity-ui/components';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

export function App() {
  return (
    <Provider theme="light">
      <FormRow label="Nom" fieldId="name">
        <TextInput id="name" name="name" />
      </FormRow>
    </Provider>
  );
}
```

### Migration vers UIKit 8

- Remplacez `ThemeProvider` au niveau de l'application par `Provider`.
- Utilisez `onOpenChange` au lieu de `onClose` dans `ConfirmDialog` et `ChangelogDialog`. `ConfirmDialog` accepte les nouvelles propriétés de Dialogue, y compris `maxWidth` et `fullWidth` au lieu de `size`.
- Supprimez `disableHeightTransition` des paramètres de `ChangelogDialog` et du popup de consentement aux cookies ; UIKit n'anime plus la hauteur du contenu.
- `Stories` et `StoriesGroup` conservent `onClose`, avec des arguments optionnels d'événement/raison et les raisons d'UIKit 8 (`escape-key`, `outside-press`, `click`).
- Passez les attributs HTML natifs directement aux propriétés de bouton/lien, y compris `StoreBadge`, au lieu de `extraProps`. Utilisez les vues de bouton d'UIKit 8 dans les actions de story personnalisées.

Consultez le [guide de migration vers UIKit 8](https://github.com/gravity-ui/uikit/blob/next/docs/migration-to-v8.md) pour les changements d'API sous-jacents. Ce package utilise les nouvelles API List, Menu et Popover sans le point d'entrée hérité.

### Dialogue de confirmation

```tsx
import {ConfirmDialog} from '@gravity-ui/components';

<ConfirmDialog
  open={open}
  title="Supprimer le projet ?"
  message="Cette action est irréversible."
  textButtonApply="Supprimer"
  textButtonCancel="Annuler"
  onClickButtonApply={handleDelete}
  onClickButtonCancel={() => setOpen(false)}
  onOpenChange={setOpen}
/>;
```

### Plus d'exemples

Chaque composant a un README à côté de sa source avec les propriétés et les exemples — voir `src/components/<Component>/README.md`. Démonstrations en direct : [Storybook](https://preview.gravity-ui.com/components/).

## Développement

```shell
git clone git@github.com:gravity-ui/components.git
cd components
npm ci
npm run start   # lance Storybook à http://localhost:7009
```

Autres commandes utiles :

```shell
npm test              # exécute les tests unitaires
npm run lint          # vérifie la qualité du code JS et SCSS
npm run typecheck     # vérifie les types TypeScript
```

## Contributions

Les contributions sont les bienvenues ! Veuillez lire [CONTRIBUTING.md](CONTRIBUTING.md) avant de soumettre une pull request.

## Licence

Distribué sous la licence MIT. Voir [LICENSE](LICENSE) pour les détails.

## Pour les agents IA

La couche de composants composites de Gravity UI — des lignes de formulaire prêtes à l'emploi, des dialogues de confirmation, des notifications, des stories, des galeries et des widgets similaires au niveau du produit assemblés à partir des primitives de `@gravity-ui/uikit`, pour que vous n'ayez pas à les reconstruire manuellement.

### Quand l'utiliser

- Mise en page de formulaire : `FormRow` (libellé + champ + description) au lieu d'un wrapper libellé/input fait maison.
- Flux de confirmation : `ConfirmDialog` au lieu de composer vous-même `Dialog` avec deux boutons.
- Widgets produit : `Notifications`, `Stories` / `StoriesGroup`, `ChangelogDialog`, `OnboardingMenu`, `PromoSheet`, `CookieConsent`, `Reactions`, `SharePopover`, `StoreBadge`.
- Assistants de données : `InfiniteScroll`, `ItemSelector`, `DelayedTextInput`, `TokenizedInput`, `Gallery`.

### Quand ne pas l'utiliser

- Contrôles de base, superpositions, mise en page et thèmes — utilisez directement [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) ; ce package ajoute uniquement des composites par-dessus.
- Grilles de données — utilisez [`@gravity-ui/table`](https://github.com/gravity-ui/table) ; il n'y a pas de table ici.
- Sélecteurs de date et calendriers — utilisez [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components).
- Coques de navigation d'application (en-tête latéral, pied de page) — utilisez [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation).
- Formulaires pilotés par schéma — utilisez [`@gravity-ui/dynamic-forms`](https://github.com/gravity-ui/dynamic-forms) ; `FormRow` n'est qu'une ligne de mise en page.

### Pièges courants

- **Rien n'est stylisé sans la configuration uikit.** Installez `@gravity-ui/uikit`, importez `@gravity-ui/uikit/styles/styles.css` (plus `fonts.css`) une fois, et enveloppez l'application dans `Provider` — ce package ne fournit aucun style global propre.
- **`FormRow` ne rend pas l'input.** Passez le contrôle comme `children` et liez-le avec `fieldId` correspondant à l'`id` du contrôle ; la propriété `label` est le texte du libellé, pas un élément `<label>`.
- **`ConfirmDialog` n'a pas `onConfirm` / `onCancel`.** Les gestionnaires sont `onClickButtonApply` et `onClickButtonCancel`, et `textButtonApply` / `textButtonCancel` sont requis.
- **Imports fantaisistes.** Tout est exporté depuis la racine du package : `import {FormRow} from '@gravity-ui/components'`. Il n'y a pas d'imports de sous-chemin comme `@gravity-ui/components/FormRow`.

## Documentation pour les agents IA

La documentation lisible par agent pour la version installée se trouve dans `node_modules/@gravity-ui/components/build/docs/INDEX.md`.