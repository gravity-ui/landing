# @gravity-ui/dynamic-forms &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dynamic-forms)](https://www.npmjs.com/package/@gravity-ui/dynamic-forms) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dynamic-forms/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/dynamic-forms/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dynamic-forms/)

Biblioteca baseada em JSON Schema para renderização de formulários e valores de formulário.

## Instalação

```shell
npm install --save-dev @gravity-ui/dynamic-forms
```

## Uso

```jsx
import {DynamicField, Spec, dynamicConfig} from '@gravity-ui/dynamic-forms';

// Para incorporar em um final-form
<DynamicField name={name} spec={spec} config={config} />;

import {DynamicView, dynamicViewConfig} from '@gravity-ui/dynamic-forms';

// Para obter uma visão geral dos valores
<DynamicView value={value} spec={spec} config={dynamicViewConfig} />;
```

### I18N

Certos componentes incluem tokens de texto (palavras e frases) que estão disponíveis em dois idiomas: `en` (o padrão) e `ru`. Para definir o idioma, use a função `configure`:

```js
// index.js

import {configure, Lang} from '@gravity-ui/dynamic-forms';

configure({lang: Lang.Ru});
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento com o storybook, execute o seguinte comando:

```shell
npm ci
npm run dev
```