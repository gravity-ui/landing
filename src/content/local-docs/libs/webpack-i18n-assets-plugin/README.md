# 🌍 webpack-i18n-assets-plugin

A plugin for Webpack that replaces calls to localization functions (i18n) with target texts.

### Features

- Inlines i18n texts into the bundle (while substituting parameters into the final string)
- Generates assets for all locales in one build
- The plugin works only for production builds!
- Supports only literals as keys in the localization function argument (template strings and variables are not allowed)

## 📝 How to use

1. Install the package:

    ```sh
    npm i -D @gravity-ui/webpack-i18n-assets-plugin
    ```

2. Connect the plugin to Webpack (example for `@gravity-ui/app-builder`):

    Example for webpack config (`webpack.config.js`):

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
                locales
            })
        ]
    }
    ```

    Example if you want create assets manifests for each locale (`webpack.config.js`):

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

    Example if you use `@gravity-ui/app-builder`:

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
    }
    ```

3. Configure dynamic statics from the asset manifest on the server (example with `@gravity-ui/app-layout`):

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

## 🔧 Settings

By default, the plugin is configured to work with the [`@gravity-ui/i18n`](./frameworks/gravity-i18n.ts) library, but you can customize the processing for any other i18n library.

### importResolver

Type: [`ImportResolver`](./src/types.ts#18)

The function that processes imports and marks which of the imports should be considered as localization functions (subsequently, calls to the marked identifiers are processed by the replacer).

The signature is similar to the original [importSpecifier](https://webpack.js.org/api/parser/#importspecifier) from webpack.

Example:

```typescript
const importResolver = (source: string, exportName: string, _identifierName: string, module: string) => {
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

Type: [`DeclarationResolver`](./src/types.ts#30)

The function that processes variable declarations and marks which variables should be considered as localization functions (subsequently, calls to the marked identifiers are processed by the replacer function).

Example:

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

### replacer

Type: [`Replacer`](./src/types.ts#55)

A function that processes localization function calls and returns a replacement as a string.

Example:

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

Type: [`Boolean`] (default - false)

Enables the mode for collecting unused keys in the project. After building, it creates a file named `unused-keys.json`.

To ensure proper functionality, it is always necessary to return a detailed format in the `Replacer` function. This is important because during replacement, there is a possibility of modifying automatically determined keys and keysets.

## Frameworks settings

### Gravity i18n

Functions for handling localization function calls from the library [`@gravity-ui/i18n`](https://github.com/gravity-ui/i18n).

The ready to use functions are located [`here`](./src/frameworks/gravity-i18n.ts).

An example of the code that functions will work with:

```typescript
// The importResolver only considers the default import at the path ui/utils/i18n.
import i18n from 'ui/utils/i18n';

// The declarationResolver handles variables whose value is a call to i18n.bind.
const i18nK = i18n.bind(null, 'component.navigation');

// The replacer handles calls to identifiers found by the importResolver and declarationResolver
// This means the following calls will be processed:
i18nK('some_key');
i18nK('some_plural_key', { count: 123 });
i18nK('some_key_with_param', { someParam: 'hello' });
i18n('component.navigation', 'some_key');
i18n('component.navigation', 'some_plural_key', { count: 123 });
i18n('component.navigation', 'some_key_with_param', { someParam: 'hello' });
```

The Replacer additionally performs the following:

1. Inline the parameters into a string. For example, if the key value is as follows:

    ```typescript
    const keyset = {
        some_key: 'string value with {{param}}'
    };

    i18nK('some_key', {param: getSomeParam()})
    // After the replacements, we will get:
    `string value with ${getSomeParam()}`
    ```

2. Substitutes a self-invoking function for plural keys:

    ```typescript
    const keyset = {
        pural_key: [
            'one_form {{count}}',
            'few_form {{count}}',
            'many_form {{count}}',
            'other_form {{count}}',
        ],
    };

    i18nK('pural_key', {count: getSomeCount()})

    // After the replacements, we will get:
    (function(f,c){
        const v=f[!c ? "zero" : new Intl.PluralRules("${locale}").select(c)];
        return v && v.replaceAll("{{count}}",c);
    })({
        "one": "one_form {{count}}",
        "few": "few_form {{count}}",
        "many": "many_form {{count}}",
        "other": "other_form {{count}}"
    }, getSomeCount())
    ```

## ℹ️ FAQ

### How does this compare to [webpack-localize-assets-plugin](https://github.com/privatenumber/webpack-localize-assets-plugin)?

To implement this plugin, an idea from the webpack-localize-assets-plugins package was used (for which many thanks to the package creator!).

The differences are as follows:

- A more convenient API that allows you to work with any kind of internationalization functions (including namespaces-helpers like useTranslation from i18next, imported functions from other modules, etc.)
- Correct generation of source maps relative to the source code
- There is only support for webpack 5. Webpack 4 support has been removed.

