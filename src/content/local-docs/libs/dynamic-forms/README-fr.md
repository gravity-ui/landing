# @gravity-ui/dynamic-forms &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dynamic-forms)](https://www.npmjs.com/package/@gravity-ui/dynamic-forms) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dynamic-forms/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/dynamic-forms/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dynamic-forms/)

**English** · [Русский](README-ru.md)

Un moteur de rendu de formulaires basé sur JSON Schema et `react-final-form`. Un schéma unique décrit à la fois la valeur et la manière dont elle est rendue : les règles de validation sont des mots-clés standard de Draft-07, et ce avec quoi un nœud est dessiné est l'extension `nodeParameters`.

- Point d'entrée : `@gravity-ui/dynamic-forms`.
- Statut : **API stable**.
- Deux couches : `core` (moteur headless) et `kit` (entités et mises en page prêtes à l'emploi sur `@gravity-ui/uikit`).

L'API précédente DynamicField / DynamicView est disponible depuis `@gravity-ui/dynamic-forms/deprecated`. Les importations de SchemaRenderer depuis le point d'entrée `/unstable` supprimé sont déplacées à la racine du package. Consultez le [guide de migration](MIGRATION.md) pour la transition complète et [docs/deprecated](docs/deprecated) pour la documentation de l'API précédente.

## Installation

```shell
npm install --save-dev @gravity-ui/dynamic-forms
```

## Contenu

- [Comment l'utiliser](docs/en/how-to-use.md) — démarrage rapide, la prop `name`, les modes, quoi choisir.
- [Référence API](docs/en/api.md) — composants, hooks, props, constantes, utilitaires, exports `kit`, types.
- [Schéma](docs/en/schema.md) — `nodeParameters`, drapeaux, annotations, mots-clés, `stringNumber`, `$ref`.
- [Runtime](docs/en/runtime.md) — cycle de vie des nœuds, coercition des valeurs, validation, erreurs, événements, patches.
- [Kit](docs/en/kit.md) — mises en page, catalogue d'entités, composants de service, styles.
- [Extension](docs/en/extension.md) — entités personnalisées, mises en page, validateurs, configuration, moteur de rendu autonome.
- [Migration](MIGRATION.md) — passage de l'API principale précédente ou de `/unstable`, conversion de Spec, compatibilité via `/deprecated`.
- [Mises en garde et limitations](docs/en/limitations.md) — divergences vérifiées par code, limitations et bugs.

## Qu'est-ce que c'est

`src/lib` est un moteur de formulaire où le formulaire et l'aperçu des valeurs sont construits à partir d'un seul JSON Schema. La couche `core` n'a pas de contrôles propres : tout ce qui est rendu provient de la configuration. La validation s'effectue via `json-schema-library` (Draft-07) plus le mot-clé personnalisé `stringNumber`. La couche `kit` fournit un registre prêt à l'emploi : 30 clés d'entités sur 6 types de nœuds, 7 clés de mise en page, des composants de service, le hook `useExpanded`, des textes d'erreur et le convertisseur `specToJsonSchema` du format Spec ancien.

## Comment ça marche

1. **Schéma et configuration.** `useSchemaRenderer` clone le `schema` et stocke l'état dans un champ de service avec un validateur.
2. **Nœuds.** `SchemaRendererNode` prend le sous-schéma par pointeur, enregistre un champ `final-form`, sélectionne `entity` et `layout`.
3. **Changement.** Une modification de valeur, via `validateFields`, déclenche uniquement le validateur du champ de service.
4. **Erreurs.** Le validateur propage les erreurs par nom dans `srState.errors` ; les nœuds dont le message a changé sont re-rendus.
5. **Impératif.** `useSchemaRendererTools` patch le schéma et ajoute des erreurs externes, redémarrant la validation.

## Dépendances

| Package                                     | Rôle     | Pourquoi                                                               |
| :------------------------------------------ | :------- | :--------------------------------------------------------------------- |
| `react` / `react-dom` / `react-is`          | peer     | 18, 19. Rendu.                                                         |
| `final-form` / `react-final-form`           | peer     | Formulaire, champs, soumission, abonnements.                           |
| `@gravity-ui/uikit`                         | peer     | Version 8. Contrôles du kit : TextInput, Select, Checkbox, etc.       |
| `json-schema-library`                       | runtime  | Validation Draft-07 et le mot-clé personnalisé `stringNumber`.         |
| `decimal.js`                                | runtime  | Comparaison et échelle des nombres dans `stringNumber` et `*_with_scale`. |
| `@gravity-ui/date-components`, `date-utils` | runtime  | `DateInput` et `DateValue`.                                            |
| `@gravity-ui/icons`                         | runtime  | `iconName` dans Alert, Label, TextContent.                             |
| `@gravity-ui/i18n`                          | runtime  | Localisation des textes d'erreur.                                       |
| `@bem-react/classname`, `lodash`, `uuid`    | runtime  | Classes, utilitaires, clés.                                            |
| Monaco                                      | external | Non inclus. Passé via `userContext.MonacoEditor`.                      |

## I18N

Certains composants incluent des jetons de texte (mots et phrases) disponibles en deux langues : `en` (par défaut) et `ru`. Pour définir la langue, utilisez la fonction `configure` :

```js
// index.js

import {configure, Lang} from '@gravity-ui/dynamic-forms';

configure({lang: Lang.Ru});
```

## Développement

Pour démarrer le serveur de développement avec storybook, exécutez la commande suivante :

```shell
npm ci
npm run dev
```