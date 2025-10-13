# 🌍 webpack-i18n-assets-plugin

Ein Plugin für Webpack, das Aufrufe von Lokalisierungsfunktionen (i18n) durch Zieltexte ersetzt.

### Features

- Inline-i18n-Texte in das Bundle (während Parameter in die endgültige Zeichenkette eingefügt werden)
- Generiert Assets für alle Locales in einem Build
- Das Plugin funktioniert nur für Produktions-Builds!
- Unterstützt nur Literale als Schlüssel im Argument der Lokalisierungsfunktion (Template-Strings und Variablen sind nicht erlaubt)

## 📝 Verwendung

1. Installieren Sie das Paket:

    ```sh
    npm i -D @gravity-ui/webpack-i18n-assets-plugin
    ```

2. Verbinden Sie das Plugin mit Webpack (Beispiel für `@gravity-ui/app-builder`):

    Beispiel für die Webpack-Konfiguration (`webpack.config.js`):

    ```js
    const {I18nAssetsPlugin} = require('@gravity-ui/webpack-i18n-assets-plugin');

    // Zum Beispiel. Lesen Sie alle Dateien mit lokalisierten Texten und speichern Sie sie in dieser Zuordnung
    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    module.exports = {
        output: {
            filename: '[name].[locale].js', // [locale] ist im Dateinamen erforderlich
        },

        plugins: [
            new I18nAssetsPlugin({
                locales
            })
        ]
    }
    ```

    Beispiel, wenn Sie Asset-Manifeste für jedes Locale erstellen möchten (`webpack.config.js`):

    ```js
    const {applyPluginToWebpackConfig} = require('@gravity-ui/webpack-i18n-assets-plugin');

    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    // Eine bestehende Webpack-Konfiguration
    const webpackConfig = {
        plugins: [ ... ],
        ...
    };

    // Bei Verwendung von applyPluginToWebpackConfig wird auch das WebpackAssetsManifest-Plugin verbunden,
    // das Asset-Manifeste für jedes Locale generiert.
    module.exports = applyPluginToWebpackConfig(webpackConfig, {locales});
    ```

    Beispiel, wenn Sie `@gravity-ui/app-builder` verwenden:

    ```typescript
    import type {ServiceConfig} from '@gravity-ui/app-builder';
    import {applyPluginToWebpackConfig, Options} from '@gravity-ui/webpack-i18n-assets-plugin';

    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    // Bei Verwendung von applyPluginToWebpackConfig wird auch das WebpackAssetsManifest-Plugin verbunden,
    // das Asset-Manifeste für jedes Locale generiert.
    const config: ServiceConfig = {
        client: {
            webpack: (originalConfig) => applyPluginToWebpackConfig(originalConfig, {locales}),
        },
    }
    ```

3. Konfigurieren Sie dynamische Statics aus dem Asset-Manifest auf dem Server (Beispiel mit `@gravity-ui/app-layout`):

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

## 🔧 Einstellungen

Standardmäßig ist das Plugin für die Arbeit mit der [`@gravity-ui/i18n`](./frameworks/gravity-i18n.ts) Bibliothek konfiguriert, aber Sie können die Verarbeitung für jede andere i18n-Bibliothek anpassen.

### importResolver

Typ: [`ImportResolver`](./src/types.ts#18)

Die Funktion, die Importe verarbeitet und markiert, welche der Importe als Lokalisierungsfunktionen betrachtet werden sollen (anschließend werden Aufrufe der markierten Bezeichner von der Ersetzungsfunktion verarbeitet).

Die Signatur ähnelt dem ursprünglichen [importSpecifier](https://webpack.js.org/api/parser/#importspecifier) von Webpack.

Beispiel:

```typescript
const importResolver = (source: string, exportName: string, _identifierName: string, module: string) => {
    // Wenn Sie die Verarbeitung von Modulen basierend auf bestimmten Pfaden ignorieren müssen, können Sie diesen Fall so behandeln.
    if (module.startsWith('src/units/compute')) {
        return undefined;
    }

    // Verarbeitung des Standardimports einer globalen Funktion
    // import i18n from 'ui/utils/i18n'
    if (source === 'ui/utils/i18n' && exportName === 'default') {
        return {
            resolved: true,
            keyset: undefined,
        };
    }

    // Verarbeitung des Imports einer Hilfsfunktion und Angabe, dass sie zum gemeinsamen Keyset (Namespace) gehört.
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

Typ: [`DeclarationResolver`](./src/types.ts#30)

Die Funktion, die Variablendeklarationen verarbeitet und markiert, welche Variablen als Lokalisierungsfunktionen betrachtet werden sollen (anschließend werden Aufrufe der markierten Bezeichner von der Ersetzungsfunktion verarbeitet).

Beispiel:

```typescript
import type {VariableDeclarator} from 'estree';

const declarationResolver = (declarator: VariableDeclarator, module: string) => {
    // Wenn Sie die Verarbeitung von Modulen basierend auf bestimmten Pfaden ignorieren müssen, können Sie diesen Fall so behandeln.
    if (module.startsWith('src/units/compute')) {
        return undefined;
    }
```

```html
<div class="language-selector">
    <a href="/en/README.md">English</a>
    <a href="/de/README.md">Deutsch</a>
</div>
```

```typescript
// Verarbeitungsfunktion für Deklarationen wie const i18nK = i18n.bind(null, 'keyset');
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

Typ: [`Replacer`](./src/types.ts#55)

Eine Funktion, die Lokalisierungsfunktionsaufrufe verarbeitet und einen Ersatz als String zurückgibt.

Beispiel:

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

    // Verarbeitung eines Aufrufs mit einem Argument i18nK('key')
    if (callNode.arguments.length === 1) {
        key = getStringValue(callNode.arguments[0]);
    } else if (callNode.arguments.length === 2) {
        // Verarbeitung von i18n('keyset', 'key') oder i18nK('key', {params})
        const [firstArg, secondArg] = callNode.arguments;

        // Aufruf i18n('keyset', 'key')
        if (secondArg.type === 'Literal') {
            keyset = getStringValue(firstArg);
            key = getStringValue(secondArg);
        } else {
            // Aufruf i18nK('key', {params})
            key = getStringValue(firstArg);
            params = secondArg;
        }
    } else if (callNode.arguments.length === 3) {
        // Aufruf i18n(namespace, key, params)
        const [firstArg, secondArg, thirdArg] = callNode.arguments;
        keyset = getStringValue(firstArg);
        key = getStringValue(secondArg);
        params = thirdArg;
    } else {
        throw new Error('Incorrect count of arguments in localizer call');
    }

    // Stellen Sie sicher, dass der aus dem Funktionsargument erhaltene Schlüssel verarbeitet wird.
    // Wenn die Funktion mit einem Keyset zusammenhängt, kann nach der Codeänderung der Keyset in den Schlüssel eingefügt werden (dies ist eine Plugin-Funktion).
    // Wenn Sie den Schlüssel von ReplacerArgs verwenden, kommt er ohne Keyset und muss nicht verarbeitet werden.
    const keyParts = key.split('::');
    if (keyParts.length === 2) {
        key = keyParts[1];
    }

    const value = this.resolveKey(key, keyset);

    // Implementieren Sie hier Ersetzungsoptionen nach Ihren Bedürfnissen.
    // Wenn der Schlüssel beispielsweise Plural ist, geben Sie einen Funktionsaufruf zurück usw.

    return JSON.stringify(value);
};
```

### collectUnusedKeys

Typ: [`Boolean`] (Standard - false)

Aktiviert den Modus zum Sammeln ungenutzter Schlüssel im Projekt. Nach dem Build wird eine Datei namens `unused-keys.json` erstellt.

Um eine ordnungsgemäße Funktionalität zu gewährleisten, ist es immer notwendig, in der `Replacer`-Funktion ein detailliertes Format zurückzugeben. Dies ist wichtig, da während der Ersetzung die Möglichkeit besteht, automatisch ermittelte Schlüssel und Keysets zu ändern.

## Framework-Einstellungen

### Gravity i18n

Funktionen zur Verarbeitung von Lokalisierungsfunktionsaufrufen aus der Bibliothek [`@gravity-ui/i18n`](https://github.com/gravity-ui/i18n).

Die einsatzbereiten Funktionen befinden sich [`hier`](./src/frameworks/gravity-i18n.ts).

Ein Beispiel für den Code, mit dem die Funktionen arbeiten werden:

```typescript
// Der importResolver berücksichtigt nur den Standardimport unter dem Pfad ui/utils/i18n.
import i18n from 'ui/utils/i18n';

// Der declarationResolver verarbeitet Variablen, deren Wert ein Aufruf von i18n.bind ist.
const i18nK = i18n.bind(null, 'component.navigation');

// Der replacer verarbeitet Aufrufe von Bezeichnern, die vom importResolver und declarationResolver gefunden wurden.
// Das bedeutet, dass die folgenden Aufrufe verarbeitet werden:
i18nK('some_key');
i18nK('some_plural_key', { count: 123 });
i18nK('some_key_with_param', { someParam: 'hello' });
i18n('component.navigation', 'some_key');
i18n('component.navigation', 'some_plural_key', { count: 123 });
i18n('component.navigation', 'some_key_with_param', { someParam: 'hello' });
```

Der Replacer führt zusätzlich Folgendes aus:

1. Inline-Parameter in einen String. Wenn der Schlüsselwert beispielsweise wie folgt lautet:

    ```typescript
    const keyset = {
        some_key: 'string value with {{param}}'
    };

    i18nK('some_key', {param: getSomeParam()})
    // Nach den Ersetzungen erhalten wir:
    `string value with ${getSomeParam()}`
    ```

2. Ersetzt eine selbstaufrufende Funktion für Plural-Schlüssel:

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

    // Nach den Ersetzungen erhalten wir:
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

```markdown
### Wie verhält sich das im Vergleich zu [webpack-localize-assets-plugin](https://github.com/privatenumber/webpack-localize-assets-plugin)?

Zur Implementierung dieses Plugins wurde eine Idee aus dem webpack-localize-assets-plugins-Paket übernommen (vielen Dank an den Ersteller des Pakets!).

Die Unterschiede sind wie folgt:

- Eine bequemere API, die es Ihnen ermöglicht, mit jeder Art von Internationalisierungsfunktionen zu arbeiten (einschließlich Namespaces-Helfern wie `useTranslation` von i18next, importierten Funktionen aus anderen Modulen usw.)
- Korrekte Generierung von Source Maps relativ zum Quellcode
- Es wird nur Webpack 5 unterstützt. Die Unterstützung für Webpack 4 wurde entfernt.
```