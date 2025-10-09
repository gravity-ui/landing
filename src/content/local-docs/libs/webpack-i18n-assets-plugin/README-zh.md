# 🌍 webpack-i18n-assets-plugin

一个 Webpack 插件，用于将本地化函数 (i18n) 的调用替换为目标文本。

### 特性

- 将 i18n 文本内联到 bundle 中（同时将参数替换为最终字符串）
- 在一次构建中为所有 locale 生成资源
- 该插件仅适用于生产环境构建！
- 仅支持字面量作为本地化函数参数中的键（不允许使用模板字符串和变量）

## 📝 如何使用

1. 安装包：

    ```sh
    npm i -D @gravity-ui/webpack-i18n-assets-plugin
    ```

2. 将插件连接到 Webpack（以 `@gravity-ui/app-builder` 为例）：

    Webpack 配置示例 (`webpack.config.js`)：

    ```js
    const {I18nAssetsPlugin} = require('@gravity-ui/webpack-i18n-assets-plugin');

    // 示例。读取所有包含本地化文本的文件并存储在此映射中
    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    module.exports = {
        output: {
            filename: '[name].[locale].js', // 文件名中需要 [locale]
        },

        plugins: [
            new I18nAssetsPlugin({
                locales
            })
        ]
    }
    ```

    如果您想为每个 locale 创建资源清单，请参考此示例 (`webpack.config.js`)：

    ```js
    const {applyPluginToWebpackConfig} = require('@gravity-ui/webpack-i18n-assets-plugin');

    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    // 一些现有的 webpack 配置
    const webpackConfig = {
        plugins: [ ... ],
        ...
    };

    // 使用 applyPluginToWebpackConfig 时，还会连接 WebpackAssetsManifest 插件，
    // 该插件将为每个 locale 生成资源清单。
    module.exports = applyPluginToWebpackConfig(webpackConfig, {locales});
    ```

    如果您使用 `@gravity-ui/app-builder`，请参考此示例：

    ```typescript
    import type {ServiceConfig} from '@gravity-ui/app-builder';
    import {applyPluginToWebpackConfig, Options} from '@gravity-ui/webpack-i18n-assets-plugin';

    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    // 使用 applyPluginToWebpackConfig 时，还会连接 WebpackAssetsManifest 插件，
    // 该插件将为每个 locale 生成资源清单。
    const config: ServiceConfig = {
        client: {
            webpack: (originalConfig) => applyPluginToWebpackConfig(originalConfig, {locales}),
        },
    }
    ```

3. 在服务器上配置动态静态资源（以 `@gravity-ui/app-layout` 为例）：

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

## 🔧 设置

默认情况下，该插件配置为与 [`@gravity-ui/i18n`](./frameworks/gravity-i18n.ts) 库一起使用，但您可以为任何其他 i18n 库自定义处理方式。

### importResolver

类型：[`ImportResolver`](./src/types.ts#18)

此函数用于处理导入，并标记哪些导入应被视为本地化函数（之后，对标记标识符的调用将由 replacer 处理）。

签名与 webpack 的原始 [importSpecifier](https://webpack.js.org/api/parser/#importspecifier) 类似。

示例：

```typescript
const importResolver = (source: string, exportName: string, _identifierName: string, module: string) => {
    // 如果您需要根据特定路径忽略模块的处理，可以这样处理。
    if (module.startsWith('src/units/compute')) {
        return undefined;
    }

    // 处理全局函数的默认导入
    // import i18n from 'ui/utils/i18n'
    if (source === 'ui/utils/i18n' && exportName === 'default') {
        return {
            resolved: true,
            keyset: undefined,
        };
    }

    // 处理辅助函数的导入，并指定它属于通用 keyset（命名空间）。
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

类型：[`DeclarationResolver`](./src/types.ts#30)

此函数用于处理变量声明，并标记哪些变量应被视为本地化函数（之后，对标记标识符的调用将由 replacer 函数处理）。

示例：

```typescript
import type {VariableDeclarator} from 'estree';

const declarationResolver = (declarator: VariableDeclarator, module: string) => {
    // 如果您需要根据特定路径忽略模块的处理，可以这样处理。
    if (module.startsWith('src/units/compute')) {
        return undefined;
    }
```

```html
<p>
    <a href="./README.md">English</a> |
    <a href="./README.zh.md">中文</a>
</p>
```

# @gravity-ui/webpack-i18n-assets-plugin

Плагин для Webpack, который позволяет извлекать строки локализации из вашего кода и генерировать соответствующие файлы локализации.

## Установка

```bash
npm install --save-dev @gravity-ui/webpack-i18n-assets-plugin
```

## Использование

Добавьте плагин в ваш файл `webpack.config.js`:

```javascript
const I18nAssetsPlugin = require('@gravity-ui/webpack-i18n-assets-plugin');

module.exports = {
    // ...
    plugins: [
        new I18nAssetsPlugin({
            // ... опции плагина
        }),
    ],
};
```

## Опции

### `outputDir`

Тип: `String`
По умолчанию: `'./i18n'`

Директория, в которую будут сохранены сгенерированные файлы локализации.

### `assetResolver`

Тип: [`AssetResolver`](./src/types.ts#25)

Функция, которая обрабатывает импорты и возвращает информацию о файле локализации.

Пример:

```typescript
const assetResolver: AssetResolver = ({importee, importer}) => {
    // ...
};
```

### `declarationResolver`

Тип: [`DeclarationResolver`](./src/types.ts#40)

Функция, которая обрабатывает объявления функций локализации и возвращает информацию о них.

Пример:

```typescript
const declarationResolver: DeclarationResolver = (declarator) => {
    // Обработка объявлений функций типа const i18nK = i18n.bind(null, 'keyset');
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

### `replacer`

Тип: [`Replacer`](./src/types.ts#55)

Функция, которая обрабатывает вызовы функций локализации и возвращает строку для замены.

Пример:

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

    // Обработка вызова с одним аргументом i18nK('key')
    if (callNode.arguments.length === 1) {
        key = getStringValue(callNode.arguments[0]);
    } else if (callNode.arguments.length === 2) {
        // Обработка i18n('keyset', 'key') или i18nK('key', {params})
        const [firstArg, secondArg] = callNode.arguments;

        // Вызов i18n('keyset', 'key')
        if (secondArg.type === 'Literal') {
            keyset = getStringValue(firstArg);
            key = getStringValue(secondArg);
        } else {
            // Вызов i18nK('key', {params})
            key = getStringValue(firstArg);
            params = secondArg;
        }
    } else if (callNode.arguments.length === 3) {
        // Вызов i18n(namespace, key, params)
        const [firstArg, secondArg, thirdArg] = callNode.arguments;
        keyset = getStringValue(firstArg);
        key = getStringValue(secondArg);
        params = thirdArg;
    } else {
        throw new Error('Incorrect count of arguments in localizer call');
    }

    // Обязательно обработайте ключ, полученный из аргумента вызова функции.
    // Если функция связана с набором ключей, после изменения кода набор ключей может быть вставлен в ключ (это особенность плагина).
    // Если вы используете ключ из ReplacerArgs, он приходит без набора ключей и не требует обработки.
    const keyParts = key.split('::');
    if (keyParts.length === 2) {
        key = keyParts[1];
    }

    const value = this.resolveKey(key, keyset);

    // Реализуйте параметры замены в соответствии с вашими потребностями.
    // Например, если ключ является множественным, верните вызов функции и т. д.

    return JSON.stringify(value);
};
```

### `collectUnusedKeys`

Тип: [`Boolean`] (по умолчанию - `false`)

Включает режим сбора неиспользуемых ключей в проекте. После сборки создается файл с именем `unused-keys.json`.

Для обеспечения правильной работы всегда необходимо возвращать подробный формат в функции `Replacer`. Это важно, поскольку во время замены существует вероятность изменения автоматически определяемых ключей и наборов ключей.

## Настройки фреймворков

### Gravity i18n

Функции для обработки вызовов функций локализации из библиотеки [`@gravity-ui/i18n`](https://github.com/gravity-ui/i18n).

Готовые к использованию функции находятся [`здесь`](./src/frameworks/gravity-i18n.ts).

Пример кода, с которым будут работать функции:

```typescript
// importResolver учитывает только импорт по умолчанию по пути ui/utils/i18n.
import i18n from 'ui/utils/i18n';

// declarationResolver обрабатывает переменные, значением которых является вызов i18n.bind.
const i18nK = i18n.bind(null, 'component.navigation');

// replacer обрабатывает вызовы идентификаторов, найденных importResolver и declarationResolver
// Это означает, что будут обработаны следующие вызовы:
i18nK('some_key');
i18nK('some_plural_key', { count: 123 });
i18nK('some_key_with_param', { someParam: 'hello' });
i18n('component.navigation', 'some_key');
i18n('component.navigation', 'some_plural_key', { count: 123 });
i18n('component.navigation', 'some_key_with_param', { someParam: 'hello' });
```

Replacer дополнительно выполняет следующее:

1. Встраивает параметры в строку. Например, если значение ключа следующее:

    ```typescript
    const keyset = {
        some_key: 'string value with {{param}}'
    };

    i18nK('some_key', {param: getSomeParam()})
    // После замен мы получим:
    `string value with ${getSomeParam()}`
    ```

2. Заменяет самовызывающейся функцией множественные ключи:

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

    // После замен мы получим:
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

### 与 [webpack-localize-assets-plugin](https://github.com/privatenumber/webpack-localize-assets-plugin) 相比如何？

本插件的实现借鉴了 webpack-localize-assets-plugins 包中的一个想法（非常感谢该包的创建者！）。

区别如下：

- 更便捷的 API，允许您使用任何类型的国际化函数（包括命名空间助手，如 i18next 的 `useTranslation`，从其他模块导入的函数等）。
- 相对于源代码正确生成 source maps。
- 仅支持 webpack 5。已移除对 webpack 4 的支持。