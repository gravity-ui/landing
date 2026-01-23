# 🌍 webpack-i18n-assets-plugin

Webpack プラグイン。ローカライゼーション関数 (i18n) の呼び出しをターゲットテキストに置き換えます。

### 特徴

- i18n テキストをバンドルにインライン化します (最終的な文字列にパラメータを代入しながら)。
- 1回のビルドですべてのロケールのアセットを生成します。
- このプラグインは本番ビルドでのみ動作します！
- ローカライゼーション関数の引数としてリテラルのみをサポートします (テンプレート文字列や変数は許可されません)。

## 📝 使用方法

1. パッケージをインストールします:

    ```sh
    npm i -D @gravity-ui/webpack-i18n-assets-plugin
    ```

2. Webpack にプラグインを接続します (例: `@gravity-ui/app-builder` の場合):

    Webpack 設定の例 (`webpack.config.js`):

    ```js
    const {I18nAssetsPlugin} = require('@gravity-ui/webpack-i18n-assets-plugin');

    // 例として。ローカライズされたテキストを含むすべてのファイルを読み込み、このマッピングに格納します。
    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    module.exports = {
        output: {
            filename: '[name].[locale].js', // ファイル名に [locale] が必要です
        },

        plugins: [
            new I18nAssetsPlugin({
                locales
            })
        ]
    }
    ```

    各ロケールの資産マニフェストを作成したい場合の例 (`webpack.config.js`):

    ```js
    const {applyPluginToWebpackConfig} = require('@gravity-ui/webpack-i18n-assets-plugin');

    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    // 既存の webpack 設定
    const webpackConfig = {
        plugins: [ ... ],
        ...
    };

    // applyPluginToWebpackConfig を使用すると、WebpackAssetsManifest プラグインも接続され、
    // 各ロケールの資産マニフェストが生成されます。
    module.exports = applyPluginToWebpackConfig(webpackConfig, {locales});
    ```

    `@gravity-ui/app-builder` を使用する場合の例:

    ```typescript
    import type {ServiceConfig} from '@gravity-ui/app-builder';
    import {applyPluginToWebpackConfig, Options} from '@gravity-ui/webpack-i18n-assets-plugin';

    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    // applyPluginToWebpackConfig を使用すると、WebpackAssetsManifest プラグインも接続され、
    // 各ロケールの資産マニフェストが生成されます。
    const config: ServiceConfig = {
        client: {
            webpack: (originalConfig) => applyPluginToWebpackConfig(originalConfig, {locales}),
        },
    }
    ```

3. サーバーでアセットマニフェストから動的な静的ファイルを構成します (例: `@gravity-ui/app-layout` の場合):

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

## 🔧 設定

デフォルトでは、プラグインは [`@gravity-ui/i18n`](./frameworks/gravity-i18n.ts) ライブラリで動作するように構成されていますが、他の i18n ライブラリの処理をカスタマイズすることもできます。

### importResolver

タイプ: [`ImportResolver`](./src/types.ts#18)

インポートを処理し、どのインポートがローカライゼーション関数と見なされるべきかをマークする関数です (その後、マークされた識別子への呼び出しは replacer によって処理されます)。

シグネチャは、webpack の元の [importSpecifier](https://webpack.js.org/api/parser/#importspecifier) と似ています。

例:

```typescript
const importResolver = (source: string, exportName: string, _identifierName: string, module: string) => {
    // 特定のパスに基づいたモジュールの処理を無視する必要がある場合は、このように処理できます。
    if (module.startsWith('src/units/compute')) {
        return undefined;
    }

    // グローバル関数のデフォルトインポートの処理
    // import i18n from 'ui/utils/i18n'
    if (source === 'ui/utils/i18n' && exportName === 'default') {
        return {
            resolved: true,
            keyset: undefined,
        };
    }

    // ヘルパー関数のインポートの処理と、それが共通のキーセット (名前空間) に属することを指定します。
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

タイプ: [`DeclarationResolver`](./src/types.ts#30)

変数宣言を処理し、どの変数がローカライゼーション関数と見なされるべきかをマークする関数です (その後、マークされた識別子への呼び出しは replacer 関数によって処理されます)。

例:

```typescript
import type {VariableDeclarator} from 'estree';

const declarationResolver = (declarator: VariableDeclarator, module: string) => {
    // 特定のパスに基づいたモジュールの処理を無視する必要がある場合は、このように処理できます。
    if (module.startsWith('src/units/compute')) {
        return undefined;
    }
```

```typescript
// const i18nK = i18n.bind(null, 'keyset'); のような関数宣言の処理
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

ローカライゼーション関数の呼び出しを処理し、置換結果を文字列として返します。

例：

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

    // 引数が1つの呼び出し i18nK('key') の処理
    if (callNode.arguments.length === 1) {
        key = getStringValue(callNode.arguments[0]);
    } else if (callNode.arguments.length === 2) {
        // i18n('keyset', 'key') または i18nK('key', {params}) の処理
        const [firstArg, secondArg] = callNode.arguments;

        // i18n('keyset', 'key') の呼び出し
        if (secondArg.type === 'Literal') {
            keyset = getStringValue(firstArg);
            key = getStringValue(secondArg);
        } else {
            // i18nK('key', {params}) の呼び出し
            key = getStringValue(firstArg);
            params = secondArg;
        }
    } else if (callNode.arguments.length === 3) {
        // i18n(namespace, key, params) の呼び出し
        const [firstArg, secondArg, thirdArg] = callNode.arguments;
        keyset = getStringValue(firstArg);
        key = getStringValue(secondArg);
        params = thirdArg;
    } else {
        throw new Error('Incorrect count of arguments in localizer call');
    }

    // 関数呼び出し引数から取得したキーを必ず処理してください。
    // キーセットに関連する関数の場合、コードを変更した後、キーセットをキーに挿入できます（これはプラグインの機能です）。
    // ReplacerArgs からキーを使用する場合、キーセットは含まれていないため、処理する必要はありません。
    const keyParts = key.split('::');
    if (keyParts.length === 2) {
        key = keyParts[1];
    }

    const value = this.resolveKey(key, keyset);

    // ここで必要に応じて置換オプションを実装してください。
    // 例えば、キーが複数形の場合は関数呼び出しを返すなど。

    return JSON.stringify(value);
};
```

### collectUnusedKeys

Type: [`Boolean`] (デフォルト - false)

プロジェクト内の未使用キーを収集するモードを有効にします。ビルド後、`unused-keys.json` という名前のファイルが作成されます。

正しく機能するためには、`Replacer` 関数で常に詳細な形式を返す必要があります。これは、置換中に自動的に決定されたキーとキーセットを変更する可能性があるため重要です。

## Frameworks settings

### Gravity i18n

[`@gravity-ui/i18n`](https://github.com/gravity-ui/i18n) ライブラリからのローカライゼーション関数呼び出しを処理するための関数。

すぐに使用できる関数は [`こちら`](./src/frameworks/gravity-i18n.ts) にあります。

関数が動作するコードの例：

```typescript
// importResolver は ui/utils/i18n のパスにあるデフォルトインポートのみを考慮します。
import i18n from 'ui/utils/i18n';

// declarationResolver は i18n.bind の呼び出しを値とする変数を処理します。
const i18nK = i18n.bind(null, 'component.navigation');

// replacer は importResolver および declarationResolver によって見つかった識別子の呼び出しを処理します。
// これは、以下の呼び出しが処理されることを意味します：
i18nK('some_key');
i18nK('some_plural_key', { count: 123 });
i18nK('some_key_with_param', { someParam: 'hello' });
i18n('component.navigation', 'some_key');
i18n('component.navigation', 'some_plural_key', { count: 123 });
i18n('component.navigation', 'some_key_with_param', { someParam: 'hello' });
```

Replacer はさらに以下の処理を行います：

1. パラメータを文字列にインライン展開します。例えば、キーの値が次のようになっている場合：

    ```typescript
    const keyset = {
        some_key: 'string value with {{param}}'
    };

    i18nK('some_key', {param: getSomeParam()})
    // 置換後、次のようになります：
    `string value with ${getSomeParam()}`
    ```

2. 複数形キーのために自己呼び出し関数を代入します：

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

    // 置換後、次のようになります：
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

### [webpack-localize-assets-plugin](https://github.com/privatenumber/webpack-localize-assets-plugin) との比較

このプラグインの実装にあたり、webpack-localize-assets-plugins パッケージのアイデアを使用しました（パッケージ作成者の方に多大な感謝を申し上げます！）。

主な違いは以下の通りです。

- より便利なAPIにより、あらゆる種類の国際化関数（i18next の useTranslation のようなネームスペースヘルパー、他のモジュールからインポートされた関数など）を扱うことができます。
- ソースコードに対する相対的なソースマップの正しい生成
- webpack 5 のみのサポートです。webpack 4 のサポートは削除されました。