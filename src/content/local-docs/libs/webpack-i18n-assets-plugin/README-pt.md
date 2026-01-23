# 🌍 webpack-i18n-assets-plugin

Um plugin para Webpack que substitui chamadas de funções de localização (i18n) por textos de destino.

### Funcionalidades

- Incorpora textos de i18n no bundle (enquanto substitui parâmetros na string final)
- Gera assets para todos os idiomas em uma única compilação
- O plugin funciona apenas para compilações de produção!
- Suporta apenas literais como chaves no argumento da função de localização (templates de string e variáveis não são permitidos)

## 📝 Como usar

1. Instale o pacote:

    ```sh
    npm i -D @gravity-ui/webpack-i18n-assets-plugin
    ```

2. Conecte o plugin ao Webpack (exemplo para `@gravity-ui/app-builder`):

    Exemplo para a configuração do webpack (`webpack.config.js`):

    ```js
    const {I18nAssetsPlugin} = require('@gravity-ui/webpack-i18n-assets-plugin');

    // Por exemplo. Leia todos os arquivos com textos localizados e armazene neste mapeamento
    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    module.exports = {
        output: {
            filename: '[name].[locale].js', // [locale] é obrigatório no nome do arquivo
        },

        plugins: [
            new I18nAssetsPlugin({
                locales
            })
        ]
    }
    ```

    Exemplo se você quiser criar manifestos de assets para cada idioma (`webpack.config.js`):

    ```js
    const {applyPluginToWebpackConfig} = require('@gravity-ui/webpack-i18n-assets-plugin');

    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    // Alguma configuração existente do webpack
    const webpackConfig = {
        plugins: [ ... ],
        ...
    };

    // Ao usar applyPluginToWebpackConfig, o plugin WebpackAssetsManifest também será conectado,
    // que gerará manifestos de assets para cada idioma.
    module.exports = applyPluginToWebpackConfig(webpackConfig, {locales});
    ```

    Exemplo se você usa `@gravity-ui/app-builder`:

    ```typescript
    import type {ServiceConfig} from '@gravity-ui/app-builder';
    import {applyPluginToWebpackConfig, Options} from '@gravity-ui/webpack-i18n-assets-plugin';

    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    // Ao usar applyPluginToWebpackConfig, o plugin WebpackAssetsManifest também será conectado,
    // que gerará manifestos de assets para cada idioma.
    const config: ServiceConfig = {
        client: {
            webpack: (originalConfig) => applyPluginToWebpackConfig(originalConfig, {locales}),
        },
    }
    ```

3. Configure estáticas dinâmicas a partir do manifesto de assets no servidor (exemplo com `@gravity-ui/app-layout`):

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
                title: 'Página inicial',
                pluginsOptions: {
                    layout: {
                        name: 'home',
                    },
                },
            }),
        );
    });
    ```

## 🔧 Configurações

Por padrão, o plugin é configurado para funcionar com a biblioteca [`@gravity-ui/i18n`](./frameworks/gravity-i18n.ts), mas você pode personalizar o processamento para qualquer outra biblioteca de i18n.

### importResolver

Tipo: [`ImportResolver`](./src/types.ts#18)

A função que processa imports e marca quais dos imports devem ser considerados como funções de localização (posteriormente, chamadas aos identificadores marcados são processadas pelo substituidor).

A assinatura é semelhante ao [importSpecifier](https://webpack.js.org/api/parser/#importspecifier) original do webpack.

Exemplo:

```typescript
const importResolver = (source: string, exportName: string, _identifierName: string, module: string) => {
    // Se você precisar ignorar o processamento de módulos com base em caminhos específicos, você pode lidar com esse caso desta forma.
    if (module.startsWith('src/units/compute')) {
        return undefined;
    }

    // Processamento do import padrão de uma função global
    // import i18n from 'ui/utils/i18n'
    if (source === 'ui/utils/i18n' && exportName === 'default') {
        return {
            resolved: true,
            keyset: undefined,
        };
    }

    // Processamento do import de uma função auxiliar e especificação de que ela pertence ao keyset comum (namespace).
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

Tipo: [`DeclarationResolver`](./src/types.ts#30)

A função que processa declarações de variáveis e marca quais variáveis devem ser consideradas como funções de localização (posteriormente, chamadas aos identificadores marcados são processadas pela função substituidora).

Exemplo:

```typescript
import type {VariableDeclarator} from 'estree';

const declarationResolver = (declarator: VariableDeclarator, module: string) => {
    // Se você precisar ignorar o processamento de módulos com base em caminhos específicos, você pode lidar com esse caso desta forma.
    if (module.startsWith('src/units/compute')) {
        return undefined;
    }

```typescript
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

Uma função que processa chamadas de função de localização e retorna uma substituição como uma string.

Exemplo:

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

Habilita o modo para coletar chaves não utilizadas no projeto. Após a compilação, ele cria um arquivo chamado `unused-keys.json`.

Para garantir o funcionamento correto, é sempre necessário retornar um formato detalhado na função `Replacer`. Isso é importante porque, durante a substituição, existe a possibilidade de modificar chaves e conjuntos de chaves determinados automaticamente.

## Configurações de Frameworks

### Gravity i18n

Funções para lidar com chamadas de função de localização da biblioteca [`@gravity-ui/i18n`](https://github.com/gravity-ui/i18n).

As funções prontas para uso estão localizadas [`aqui`](./src/frameworks/gravity-i18n.ts).

Um exemplo do código com o qual as funções funcionarão:

```typescript
// O importResolver considera apenas a importação padrão no caminho ui/utils/i18n.
import i18n from 'ui/utils/i18n';

// O declarationResolver lida com variáveis cujo valor é uma chamada para i18n.bind.
const i18nK = i18n.bind(null, 'component.navigation');

// O replacer lida com chamadas para identificadores encontrados pelo importResolver e declarationResolver
// Isso significa que as seguintes chamadas serão processadas:
i18nK('some_key');
i18nK('some_plural_key', { count: 123 });
i18nK('some_key_with_param', { someParam: 'hello' });
i18n('component.navigation', 'some_key');
i18n('component.navigation', 'some_plural_key', { count: 123 });
i18n('component.navigation', 'some_key_with_param', { someParam: 'hello' });
```

O Replacer adicionalmente realiza o seguinte:

1. Inline os parâmetros em uma string. Por exemplo, se o valor da chave for o seguinte:

    ```typescript
    const keyset = {
        some_key: 'string value with {{param}}'
    };

    i18nK('some_key', {param: getSomeParam()})
    // Após as substituições, obteremos:
    `string value with ${getSomeParam()}`
    ```

2. Substitui uma função auto-invocável para chaves plurais:

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

    // Após as substituições, obteremos:
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

### Como isso se compara ao [webpack-localize-assets-plugin](https://github.com/privatenumber/webpack-localize-assets-plugin)?

Para implementar este plugin, uma ideia do pacote webpack-localize-assets-plugins foi utilizada (muito obrigado ao criador do pacote!).

As diferenças são as seguintes:

- Uma API mais conveniente que permite trabalhar com qualquer tipo de função de internacionalização (incluindo helpers de namespaces como `useTranslation` do i18next, funções importadas de outros módulos, etc.)
- Geração correta de source maps em relação ao código fonte
- Há suporte apenas para webpack 5. O suporte para webpack 4 foi removido.