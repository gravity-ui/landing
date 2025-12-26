# @gravity-ui/dynamic-forms &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dynamic-forms)](https://www.npmjs.com/package/@gravity-ui/dynamic-forms) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dynamic-forms/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/dynamic-forms/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dynamic-forms/)

Die JSON Schema-basierte Bibliothek zum Rendern von Formularen und Formularwerten.

## Installation

```shell
npm install --save-dev @gravity-ui/dynamic-forms
```

## Verwendung

```jsx
import {DynamicField, Spec, dynamicConfig} from '@gravity-ui/dynamic-forms';

// Zum Einbetten in ein final-form
<DynamicField name={name} spec={spec} config={config} />;

import {DynamicView, dynamicViewConfig} from '@gravity-ui/dynamic-forms';

// Um eine Übersicht über die Werte zu erhalten
<DynamicView value={value} spec={spec} config={dynamicViewConfig} />;
```

### I18N

Bestimmte Komponenten enthalten Text-Tokens (Wörter und Phrasen), die in zwei Sprachen verfügbar sind: `en` (Standard) und `ru`. Um die Sprache festzulegen, verwenden Sie die Funktion `configure`:

```js
// index.js

import {configure, Lang} from '@gravity-ui/dynamic-forms';

configure({lang: Lang.Ru});
```

## Entwicklung

Um den Entwicklungsserver mit Storybook zu starten, führen Sie den folgenden Befehl aus:

```shell
npm ci
npm run dev
```