# @gravity-ui/dynamic-forms &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dynamic-forms)](https://www.npmjs.com/package/@gravity-ui/dynamic-forms) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dynamic-forms/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/dynamic-forms/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dynamic-forms/)

Biblioteca basada en JSON Schema para renderizar formularios y valores de formularios.

## Instalación

```shell
npm install --save-dev @gravity-ui/dynamic-forms
```

## Uso

```jsx
import {DynamicField, Spec, dynamicConfig} from '@gravity-ui/dynamic-forms';

// Para integrar en un final-form
<DynamicField name={name} spec={spec} config={config} />;

import {DynamicView, dynamicViewConfig} from '@gravity-ui/dynamic-forms';

// Para obtener una vista general de los valores
<DynamicView value={value} spec={spec} config={dynamicViewConfig} />;
```

### I18N

Ciertos componentes incluyen tokens de texto (palabras y frases) que están disponibles en dos idiomas: `en` (el predeterminado) y `ru`. Para establecer el idioma, utiliza la función `configure`:

```js
// index.js

import {configure, Lang} from '@gravity-ui/dynamic-forms';

configure({lang: Lang.Ru});
```

## Desarrollo

Para iniciar el servidor de desarrollo con storybook, ejecuta el siguiente comando:

```shell
npm ci
npm run dev
```
