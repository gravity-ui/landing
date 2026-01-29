# @gravity-ui/eslint-config

## Instalar

```
npm install --save-dev eslint @gravity-ui/eslint-config
```

## Uso

Adicione um arquivo `eslint.config.js` no seu projeto com o seguinte conteúdo:

```js
import baseConfig from '@gravity-ui/eslint-config';

export default [
  ...baseConfig,
  {
    // ...outras configurações
  },
];
```

A configuração base também inclui regras do TypeScript.

### Prettier

Se você estiver usando Prettier, adicione a configuração correspondente:

```js
import baseConfig from '@gravity-ui/eslint-config';
import prettierConfig from '@gravity-ui/eslint-config/prettier';

export default [
  ...baseConfig,
  ...prettierConfig,
  {
    // ...outras configurações
  },
];
```

### a11y

Se você quiser identificar problemas de acessibilidade, adicione a configuração correspondente:

```js
import baseConfig from '@gravity-ui/eslint-config';
import a11yConfig from '@gravity-ui/eslint-config/a11y';

export default [
  ...baseConfig,
  ...a11yConfig,
  {
    // ...outras configurações
  },
];
```

### Ordem

Se você quiser impor uma convenção na ordem de importação de módulos, adicione a configuração correspondente:

```js
import baseConfig from '@gravity-ui/eslint-config';
import importOrderConfig from '@gravity-ui/eslint-config/import-order';

export default [
  ...baseConfig,
  ...importOrderConfig,
  {
    // ...outras configurações
  },
];
```