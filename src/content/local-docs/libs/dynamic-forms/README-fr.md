# @gravity-ui/dynamic-forms &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dynamic-forms)](https://www.npmjs.com/package/@gravity-ui/dynamic-forms) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dynamic-forms/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/dynamic-forms/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dynamic-forms/)

La bibliothèque basée sur JSON Schema pour le rendu de formulaires et de valeurs de formulaires.

## Installation

```shell
npm install --save-dev @gravity-ui/dynamic-forms
```

## Utilisation

```jsx
import {DynamicField, Spec, dynamicConfig} from '@gravity-ui/dynamic-forms';

// Pour intégrer dans un final-form
<DynamicField name={name} spec={spec} config={config} />;

import {DynamicView, dynamicViewConfig} from '@gravity-ui/dynamic-forms';

// Pour obtenir un aperçu des valeurs
<DynamicView value={value} spec={spec} config={dynamicViewConfig} />;
```

### I18N

Certains composants incluent des jetons textuels (mots et phrases) disponibles en deux langues : `en` (par défaut) et `ru`. Pour définir la langue, utilisez la fonction `configure` :

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