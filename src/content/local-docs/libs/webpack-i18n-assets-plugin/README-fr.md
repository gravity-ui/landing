# 🌍 webpack-i18n-assets-plugin

Un plugin pour Webpack qui remplace les appels aux fonctions de localisation (i18n) par les textes cibles.

### Fonctionnalités

- Intègre les textes i18n dans le bundle (tout en substituant les paramètres dans la chaîne finale)
- Génère des assets pour toutes les locales en une seule compilation
- Le plugin ne fonctionne que pour les builds de production !
- Ne prend en charge que les littéraux comme clés dans l'argument de la fonction de localisation (les chaînes de caractères et les variables ne sont pas autorisées)

## 📝 Comment l'utiliser

1. Installez le package :

    ```sh
    npm i -D @gravity-ui/webpack-i18n-assets-plugin
    ```

2. Connectez le plugin à Webpack (exemple pour `@gravity-ui/app-builder`) :

    Exemple pour la configuration webpack (`webpack.config.js`) :

    ```js
    const {I18nAssetsPlugin} = require('@gravity-ui/webpack-i18n-assets-plugin');

    // Par exemple. Lisez tous les fichiers avec les textes localisés et stockez-les dans ce mapping
    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    module.exports = {
        output: {
            filename: '[name].[locale].js', // [locale] est requis dans le nom du fichier
        },

        plugins: [
            new I18nAssetsPlugin({
                locales
            })
        ]
    }
    ```

    Exemple si vous souhaitez créer des manifestes d'assets pour chaque locale (`webpack.config.js`) :

    ```js
    const {applyPluginToWebpackConfig} = require('@gravity-ui/webpack-i18n-assets-plugin');

    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    // Une configuration webpack existante
    const webpackConfig = {
        plugins: [ ... ],
        ...
    };

    // Lorsque vous utilisez applyPluginToWebpackConfig, le plugin WebpackAssetsManifest sera également connecté,
    // ce qui générera des manifestes d'assets pour chaque locale.
    module.exports = applyPluginToWebpackConfig(webpackConfig, {locales});
    ```

    Exemple si vous utilisez `@gravity-ui/app-builder` :

    ```typescript
    import type {ServiceConfig} from '@gravity-ui/app-builder';
    import {applyPluginToWebpackConfig, Options} from '@gravity-ui/webpack-i18n-assets-plugin';

    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    // Lorsque vous utilisez applyPluginToWebpackConfig, le plugin WebpackAssetsManifest sera également connecté,
    // ce qui générera des manifestes d'assets pour chaque locale.
    const config: ServiceConfig = {
        client: {
            webpack: (originalConfig) => applyPluginToWebpackConfig(originalConfig, {locales}),
        },
    }
    ```

3. Configurez les statiques dynamiques à partir du manifeste d'assets sur le serveur (exemple avec `@gravity-ui/app-layout`) :

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
                title: 'Page d\'accueil',
                pluginsOptions: {
                    layout: {
                        name: 'home',
                    },
                },
            }),
        );
    });
    ```

## 🔧 Paramètres

Par défaut, le plugin est configuré pour fonctionner avec la bibliothèque [`@gravity-ui/i18n`](./frameworks/gravity-i18n.ts), mais vous pouvez personnaliser le traitement pour toute autre bibliothèque i18n.

### importResolver

Type : [`ImportResolver`](./src/types.ts#18)

La fonction qui traite les importations et marque lesquelles doivent être considérées comme des fonctions de localisation (par la suite, les appels aux identifiants marqués sont traités par le replacer).

La signature est similaire à l'[importSpecifier](https://webpack.js.org/api/parser/#importspecifier) original de webpack.

Exemple :

```typescript
const importResolver = (source: string, exportName: string, _identifierName: string, module: string) => {
    // Si vous avez besoin d'ignorer le traitement des modules basés sur des chemins spécifiques, vous pouvez gérer ce cas ainsi.
    if (module.startsWith('src/units/compute')) {
        return undefined;
    }

    // Traitement de l'importation par défaut d'une fonction globale
    // import i18n from 'ui/utils/i18n'
    if (source === 'ui/utils/i18n' && exportName === 'default') {
        return {
            resolved: true,
            keyset: undefined,
        };
    }

    // Traitement de l'importation d'une fonction d'aide et spécification qu'elle appartient au keyset commun (namespace).
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

Type : [`DeclarationResolver`](./src/types.ts#30)

La fonction qui traite les déclarations de variables et marque quelles variables doivent être considérées comme des fonctions de localisation (par la suite, les appels aux identifiants marqués sont traités par la fonction de remplacement).

Exemple :

```typescript
import type {VariableDeclarator} from 'estree';

const declarationResolver = (declarator: VariableDeclarator, module: string) => {
    // Si vous avez besoin d'ignorer le traitement des modules basés sur des chemins spécifiques, vous pouvez gérer ce cas ainsi.
    if (module.startsWith('src/units/compute')) {
        return undefined;
    }

```typescript
// Déclaration de fonctions de traitement comme const i18nK = i18n.bind(null, 'keyset');
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

Type : [`Replacer`](./src/types.ts#55)

Une fonction qui traite les appels de fonctions de localisation et retourne un remplacement sous forme de chaîne de caractères.

Exemple :

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

    // Traitement d'un appel avec un seul argument i18nK('key')
    if (callNode.arguments.length === 1) {
        key = getStringValue(callNode.arguments[0]);
    } else if (callNode.arguments.length === 2) {
        // Traitement de i18n('keyset', 'key') ou i18nK('key', {params})
        const [firstArg, secondArg] = callNode.arguments;

        // Appel i18n('keyset', 'key')
        if (secondArg.type === 'Literal') {
            keyset = getStringValue(firstArg);
            key = getStringValue(secondArg);
        } else {
            // Appel i18nK('key', {params})
            key = getStringValue(firstArg);
            params = secondArg;
        }
    } else if (callNode.arguments.length === 3) {
        // Appel i18n(namespace, key, params)
        const [firstArg, secondArg, thirdArg] = callNode.arguments;
        keyset = getStringValue(firstArg);
        key = getStringValue(secondArg);
        params = thirdArg;
    } else {
        throw new Error('Incorrect count of arguments in localizer call');
    }

    // Assurez-vous de traiter la clé obtenue à partir de l'argument de l'appel de fonction.
    // Si la fonction est liée à un keyset, après modification du code, le keyset peut être inséré dans la clé (c'est une fonctionnalité du plugin).
    // Si vous utilisez la clé de ReplacerArgs, elle vient sans le keyset et n'a pas besoin d'être traitée.
    const keyParts = key.split('::');
    if (keyParts.length === 2) {
        key = keyParts[1];
    }

    const value = this.resolveKey(key, keyset);

    // Implémentez les options de remplacement en fonction de vos besoins ici.
    // Par exemple, si la clé est plurielle, retournez un appel de fonction, etc.

    return JSON.stringify(value);
};
```

### collectUnusedKeys

Type : [`Boolean`] (par défaut - false)

Active le mode de collecte des clés inutilisées dans le projet. Après la compilation, il crée un fichier nommé `unused-keys.json`.

Pour garantir un fonctionnement correct, il est toujours nécessaire de retourner un format détaillé dans la fonction `Replacer`. Ceci est important car lors du remplacement, il existe une possibilité de modifier les clés et les keysets déterminés automatiquement.

## Paramètres des frameworks

### Gravity i18n

Fonctions pour gérer les appels de fonctions de localisation de la bibliothèque [`@gravity-ui/i18n`](https://github.com/gravity-ui/i18n).

Les fonctions prêtes à l'emploi se trouvent [`ici`](./src/frameworks/gravity-i18n.ts).

Un exemple de code avec lequel les fonctions fonctionneront :

```typescript
// L'importResolver ne prend en compte que l'importation par défaut au chemin ui/utils/i18n.
import i18n from 'ui/utils/i18n';

// Le declarationResolver gère les variables dont la valeur est un appel à i18n.bind.
const i18nK = i18n.bind(null, 'component.navigation');

// Le replacer gère les appels aux identifiants trouvés par l'importResolver et le declarationResolver
// Cela signifie que les appels suivants seront traités :
i18nK('some_key');
i18nK('some_plural_key', { count: 123 });
i18nK('some_key_with_param', { someParam: 'hello' });
i18n('component.navigation', 'some_key');
i18n('component.navigation', 'some_plural_key', { count: 123 });
i18n('component.navigation', 'some_key_with_param', { someParam: 'hello' });
```

Le Replacer effectue en outre les opérations suivantes :

1. Intègre les paramètres dans une chaîne de caractères. Par exemple, si la valeur de la clé est la suivante :

    ```typescript
    const keyset = {
        some_key: 'string value with {{param}}'
    };

    i18nK('some_key', {param: getSomeParam()})
    // Après les remplacements, nous obtiendrons :
    `string value with ${getSomeParam()}`
    ```

2. Substitue une fonction auto-invoquée pour les clés plurielles :

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

    // Après les remplacements, nous obtiendrons :
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

### Comment cela se compare-t-il à [webpack-localize-assets-plugin](https://github.com/privatenumber/webpack-localize-assets-plugin) ?

Pour implémenter ce plugin, une idée du package webpack-localize-assets-plugins a été utilisée (un grand merci à son créateur !).

Les différences sont les suivantes :

- Une API plus pratique qui vous permet de travailler avec n'importe quel type de fonction d'internationalisation (y compris les helpers de namespaces comme `useTranslation` d'i18next, les fonctions importées d'autres modules, etc.)
- Génération correcte des cartes sources par rapport au code source
- Prise en charge uniquement de webpack 5. La prise en charge de webpack 4 a été supprimée.