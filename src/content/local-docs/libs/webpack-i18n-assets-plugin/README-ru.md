# 🌍 `webpack-i18n-assets-plugin`

Плагин для Webpack, заменяющий вызовы функций локализации (i18n) целевыми текстами.

### Характеристики

- Встраивает тексты `i18n` в бандл (с подстановкой параметров в итоговую строку).
- Генерирует ресурсы для всех локалей в одной сборке.
- Работает только в сборках для продакшна.
- Поддерживает только литералы в качестве ключей в аргументе функции локализации (шаблонные строки и переменные не используются).

## 📝 Порядок использования

1. Установите пакет:

   ```sh
   npm i -D @gravity-ui/webpack-i18n-assets-plugin
   ```

2. Подключите плагин к Webpack (пример для `@gravity-ui/app-builder`):

   Пример для конфигурации Webpack (`webpack.config.js`):

   ```js
   const {I18nAssetsPlugin} = require('@gravity-ui/webpack-i18n-assets-plugin');

   // For example. Read all files with localized texts and store in this mapping
   const locales = {
     en: {},
     ru: {},
     tr: {},
   };

   module.exports = {
     output: {
       filename: '[name].[locale].js', // [locale] is required in filename
     },

     plugins: [
       new I18nAssetsPlugin({
         locales,
       }),
     ],
   };
   ```

   Пример для создания манифестов ресурсов для каждой локали (`webpack.config.js`):

   ```js
   const {applyPluginToWebpackConfig} = require('@gravity-ui/webpack-i18n-assets-plugin');

   const locales = {
       en: {},
       ru: {},
       tr: {},
   };

   // Some exist webpack config
   const webpackConfig = {
       plugins: [ ... ],
       ...
   };

   // When using applyPluginToWebpackConfig, the WebpackAssetsManifest plugin will also be connected,
   // which will generate assets manifests for each locale.
   module.exports = applyPluginToWebpackConfig(webpackConfig, {locales});
   ```

   Пример с использованием `@gravity-ui/app-builder`:

   ```typescript
   import type {ServiceConfig} from '@gravity-ui/app-builder';
   import {applyPluginToWebpackConfig, Options} from '@gravity-ui/webpack-i18n-assets-plugin';

   const locales = {
     en: {},
     ru: {},
     tr: {},
   };

   // When using applyPluginToWebpackConfig, the WebpackAssetsManifest plugin will also be connected,
   // which will generate assets manifests for each locale.
   const config: ServiceConfig = {
     client: {
       webpack: (originalConfig) => applyPluginToWebpackConfig(originalConfig, {locales}),
     },
   };
   ```

3. Настройте динамически генерируемые статические ресурсы на основе манифеста ресурсов на сервере (пример с использованием`@gravity-ui/app-layout`):

   ```typescript
   import {createRenderFunction, createLayoutPlugin} from '@gravity-ui/app-layout';

   const renderLayout = createRenderFunction([
     createLayoutPlugin({
       manifest: ({lang = 'en'}) => {
         return `assets-manifest.${lang}.json`;
       },
       publicPath: '/build/',
     }),
   ]);

   app.get((req, res) => {
     res.send(
       renderLayout({
         title: 'Home page',
         pluginsOptions: {
           layout: {
             name: 'home',
           },
         },
       }),
     );
   });
   ```

## 🔧 Настройки

По умолчанию плагин настроен для работы с библиотекой [`@gravity-ui/i18n`](./frameworks/gravity-i18n.ts), но поддерживает кастомизацию и для других библиотек `i18n`.

### importResolver

Тип — [`ImportResolver`](./src/types.ts#18).

Функция, которая обрабатывает импорты и отмечает те из них, которые необходимо рассматривать как функции локализации (впоследствии их вызовы обрабатываются функцией замены).

Имеет ту же сигнатуру, что и [`importSpecifier`](https://webpack.js.org/api/parser/#importspecifier) в Webpack.

Например:

```typescript
const importResolver = (
  source: string,
  exportName: string,
  _identifierName: string,
  module: string,
) => {
  // If you need to ignore processing modules based on specific paths, you can handle such a case this way.
  if (module.startsWith('src/units/compute')) {
    return undefined;
  }

  // Processing the default import of a global function
  // import i18n from 'ui/utils/i18n'
  if (source === 'ui/utils/i18n' && exportName === 'default') {
    return {
      resolved: true,
      keyset: undefined,
    };
  }

  // Processing the import of a helper function and specifying that it belongs to the common keyset (namespace).
  // import {ci18n} from 'ui/utils/i18n'
  if (source === 'ui/utils/i18n' && exportName === 'ci18n') {
    return {
      resolved: true,
      keyset: 'common',
    };
  }

  return undefined;
};
```

### declarationResolver

Тип — [`DeclarationResolver`](./src/types.ts#30).

Функция, которая обрабатывает объявленные переменных и отмечает те из них, которые необходимо рассматривать как функции локализации (впоследствии их вызовы обрабатываются функцией замены).

Например:

```typescript
import type {VariableDeclarator} from 'estree';

const declarationResolver = (declarator: VariableDeclarator, module: string) => {
  // If you need to ignore processing modules based on specific paths, you can handle such a case this way.
  if (module.startsWith('src/units/compute')) {
    return undefined;
  }

  // Processing function declarations like const i18nK = i18n.bind(null, 'keyset');
  if (
    declarator.id.type === 'Identifier' &&
    declarator.id.name.startsWith('i18n') &&
    declarator.init &&
    isI18nBind(declarator.init)
  ) {
    return {
      functionName: declarator.id.name,
      keyset: getKeysetFromBind(declarator.init),
    };
  }

  return undefined;
};
```

### Функция замены

Тип — [`Replacer`](./src/types.ts#55).

Функция, которая обрабатывает вызовы функций локализации и возвращает строку для замены.

Например:

```typescript
import type {VariableDeclarator} from 'estree';
import type {ReplacerArgs, ReplacerContext} from '@gravity-ui/webpack-i18n-assets-plugin';

function replacer(
    this: ReplacerContext,
    {callNode, key: parsedKey, keyset: parsedKeyset, localeName}: ReplacerArgs,
) => {
    let key = parsedKey;
    let keyset = parsedKeyset;
    let params: Expression | SpreadElement | undefined;

    const getStringValue = (node: Expression | SpreadElement) => {
        if (node.type === 'Literal' && typeof node.value === 'string') {
            return node.value;
        }

        throw new Error('Incorrect argument type in localizer call');
    };

    // Processing a call with one argument i18nK('key')
    if (callNode.arguments.length === 1) {
        key = getStringValue(callNode.arguments[0]);
    } else if (callNode.arguments.length === 2) {
        // Processing i18n('keyset', 'key') or i18nK('key', {params})
        const [firstArg, secondArg] = callNode.arguments;

        // Call i18n('keyset', 'key')
        if (secondArg.type === 'Literal') {
            keyset = getStringValue(firstArg);
            key = getStringValue(secondArg);
        } else {
            // Call i18nK('key', {params})
            key = getStringValue(firstArg);
            params = secondArg;
        }
    } else if (callNode.arguments.length === 3) {
        // Call i18n(namespace, key, params)
        const [firstArg, secondArg, thirdArg] = callNode.arguments;
        keyset = getStringValue(firstArg);
        key = getStringValue(secondArg);
        params = thirdArg;
    } else {
        throw new Error('Incorrect count of arguments in localizer call');
    }

    // Be sure to process the key obtained from the function call argument.
    // If the function is related to a keyset, after modifying the code, the keyset can be inserted into the key (this is a plugin feature).
    // If you use the key from ReplacerArgs, it comes without the keyset and does not need to be processed.
    const keyParts = key.split('::');
    if (keyParts.length === 2) {
        key = keyParts[1];
    }

    const value = this.resolveKey(key, keyset);

    // Implement replacement options based on your needs here.
    // For example, if the key is plural, return a function call, etc.

    return JSON.stringify(value);
};
```

### collectUnusedKeys

Тип — [`Boolean`] (по умолчанию — `false`).

Включает режим сбора неиспользуемых ключей в проекте. После сборки создается файл `unused-keys.json`.

Возврат детального формата в функции `Replacer` обязателен для правильной работы. Это необходимо, так как в процессе замены существует вероятность изменения автоматически определенных ключей и их наборов.

## Настройки фреймворков

### `i18n` в Gravity UI

Функции для обработки вызовов функций локализации из библиотеки [`@gravity-ui/i18n`](https://github.com/gravity-ui/i18n).

Со списком готовых к использованию функций можно ознакомиться [здесь](./src/frameworks/gravity-i18n.ts).

Пример кода, с которым будут работать функции:

```typescript
// The importResolver only considers the default import at the path ui/utils/i18n.
import i18n from 'ui/utils/i18n';

// The declarationResolver handles variables whose value is a call to i18n.bind.
const i18nK = i18n.bind(null, 'component.navigation');

// The replacer handles calls to identifiers found by the importResolver and declarationResolver
// This means the following calls will be processed:
i18nK('some_key');
i18nK('some_plural_key', {count: 123});
i18nK('some_key_with_param', {someParam: 'hello'});
i18n('component.navigation', 'some_key');
i18n('component.navigation', 'some_plural_key', {count: 123});
i18n('component.navigation', 'some_key_with_param', {someParam: 'hello'});
```

Функция замены дополнительно реализует следующие задачи:

1. Встраивание параметров в строку. Например, если ключ имеет следующее значение:

   ```typescript
   const keyset = {
     some_key: 'string value with {{param}}',
   };

   i18nK('some_key', {param: getSomeParam()})// After the replacements, we will get:
   `string value with ${getSomeParam()}`;
   ```

2. Подстановка самовызывающейся функции для ключей плюрализации:

   ```typescript
   const keyset = {
     pural_key: [
       'one_form {{count}}',
       'few_form {{count}}',
       'many_form {{count}}',
       'other_form {{count}}',
     ],
   };

   i18nK('pural_key', {count: getSomeCount()})(
     // After the replacements, we will get:
     function (f, c) {
       const v = f[!c ? 'zero' : new Intl.PluralRules('${locale}').select(c)];
       return v && v.replaceAll('{{count}}', c);
     },
   )(
     {
       one: 'one_form {{count}}',
       few: 'few_form {{count}}',
       many: 'many_form {{count}}',
       other: 'other_form {{count}}',
     },
     getSomeCount(),
   );
   ```

## ℹ️ Вопросы и ответы

### Чем `webpack-i18n-assets-plugin` отличается от [`webpack-localize-assets-plugin`](https://github.com/privatenumber/webpack-localize-assets-plugin)?

Для реализации `webpack-i18n-assets-plugin` была использована идея из пакета `webpack-localize-assets-plugin` (за что выражаем благодарность его автору).

Основные отличия:

- Более удобный API для работы с любыми функциями интернационализации (включая вспомогательные функции пространств имен, такие как `useTranslation` из `i18next`, функции, импортируемые из других модулей, и пр.).
- Корректная генерация исходных карт относительно исходного кода.
- Поддержка только Webpack 5 (Webpack 4 более не поддерживается).
