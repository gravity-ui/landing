# @gravity-ui/dynamic-forms &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dynamic-forms)](https://www.npmjs.com/package/@gravity-ui/dynamic-forms) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dynamic-forms/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/dynamic-forms/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dynamic-forms/)

La biblioteca basada en el esquema JSON para representar formularios y valores de formularios.

## Instalar

```shell
npm install --save-dev @gravity-ui/dynamic-forms
```

## Uso

```jsx
import {DynamicField, Spec, dynamicConfig} from '@gravity-ui/dynamic-forms';

// To embed in a final-form
<DynamicField name={name} spec={spec} config={config} />;

import {DynamicView, dynamicViewConfig} from '@gravity-ui/dynamic-forms';

// To get an overview of the values
<DynamicView value={value} spec={spec} config={dynamicViewConfig} />;
```

### I18N

Algunos componentes incluyen símbolos de texto (palabras y frases) que están disponibles en dos idiomas: `en` (predeterminado) y `ru`. Para configurar el idioma, utilice la `configure` función:

```js
// index.js

import {configure, Lang} from '@gravity-ui/dynamic-forms';

configure({lang: Lang.Ru});
```

## Desarrollo

Para iniciar el servidor de desarrollo con Storybook, ejecute el siguiente comando:

```shell
npm ci
npm run dev
```
