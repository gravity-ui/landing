# @gravity-ui/eslint-config

## Instalación

```
npm install --save-dev eslint @gravity-ui/eslint-config
```

## Uso

Añade un archivo `eslint.config.js` en tu proyecto con el siguiente contenido:

```js
import baseConfig from '@gravity-ui/eslint-config';

export default [
  ...baseConfig,
  {
    // ...otra configuración
  },
];
```

La configuración base también incluye reglas de TypeScript.

### Prettier

Si estás usando Prettier, añade la configuración correspondiente:

```js
import baseConfig from '@gravity-ui/eslint-config';
import prettierConfig from '@gravity-ui/eslint-config/prettier';

export default [
  ...baseConfig,
  ...prettierConfig,
  {
    // ...otra configuración
  },
];
```

### a11y

Si quieres detectar problemas de accesibilidad, añade la configuración correspondiente:

```js
import baseConfig from '@gravity-ui/eslint-config';
import a11yConfig from '@gravity-ui/eslint-config/a11y';

export default [
  ...baseConfig,
  ...a11yConfig,
  {
    // ...otra configuración
  },
];
```

### Orden

Si quieres imponer una convención en el orden de importación de módulos, añade la configuración correspondiente:

```js
import baseConfig from '@gravity-ui/eslint-config';
import importOrderConfig from '@gravity-ui/eslint-config/import-order';

export default [
  ...baseConfig,
  ...importOrderConfig,
  {
    // ...otra configuración
  },
];
```