# 🌍 webpack-i18n-assets-plugin

Un plugin para Webpack que reemplaza las llamadas a funciones de localización (i18n) con textos de destino.

### Características

- Incrusta textos i18n en el paquete (mientras sustituye parámetros en la cadena final)
- Genera activos para todos los locales en una sola compilación
- ¡El plugin solo funciona para compilaciones de producción!
- Solo admite literales como claves en el argumento de la función de localización (no se permiten plantillas de cadenas ni variables)

## 📝 Cómo usar

1. Instala el paquete:

    ```sh
    npm i -D @gravity-ui/webpack-i18n-assets-plugin
    ```

2. Conecta el plugin a Webpack (ejemplo para `@gravity-ui/app-builder`):

    Ejemplo para la configuración de webpack (`webpack.config.js`):

    ```js
    const {I18nAssetsPlugin} = require('@gravity-ui/webpack-i18n-assets-plugin');

    // Por ejemplo. Lee todos los archivos con textos localizados y almacénalos en este mapeo
    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    module.exports = {
        output: {
            filename: '[name].[locale].js', // [locale] es obligatorio en el nombre del archivo
        },

        plugins: [
            new I18nAssetsPlugin({
                locales
            })
        ]
    }
    ```

    Ejemplo si quieres crear manifiestos de activos para cada locale (`webpack.config.js`):

    ```js
    const {applyPluginToWebpackConfig} = require('@gravity-ui/webpack-i18n-assets-plugin');

    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    // Alguna configuración existente de webpack
    const webpackConfig = {
        plugins: [ ... ],
        ...
    };

    // Al usar applyPluginToWebpackConfig, también se conectará el plugin WebpackAssetsManifest,
    // que generará manifiestos de activos para cada locale.
    module.exports = applyPluginToWebpackConfig(webpackConfig, {locales});
    ```

    Ejemplo si usas `@gravity-ui/app-builder`:

    ```typescript
    import type {ServiceConfig} from '@gravity-ui/app-builder';
    import {applyPluginToWebpackConfig, Options} from '@gravity-ui/webpack-i18n-assets-plugin';

    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    // Al usar applyPluginToWebpackConfig, también se conectará el plugin WebpackAssetsManifest,
    // que generará manifiestos de activos para cada locale.
    const config: ServiceConfig = {
        client: {
            webpack: (originalConfig) => applyPluginToWebpackConfig(originalConfig, {locales}),
        },
    }
    ```

3. Configura estáticos dinámicos desde el manifiesto de activos en el servidor (ejemplo con `@gravity-ui/app-layout`):

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
                title: 'Página de inicio',
                pluginsOptions: {
                    layout: {
                        name: 'home',
                    },
                },
            }),
        );
    });
    ```

## 🔧 Configuración

Por defecto, el plugin está configurado para funcionar con la biblioteca [`@gravity-ui/i18n`](./frameworks/gravity-i18n.ts), pero puedes personalizar el procesamiento para cualquier otra biblioteca de i18n.

### importResolver

Tipo: [`ImportResolver`](./src/types.ts#18)

La función que procesa las importaciones y marca cuáles de ellas deben considerarse como funciones de localización (posteriormente, las llamadas a los identificadores marcados son procesadas por el reemplazador).

La firma es similar a la [importSpecifier](https://webpack.js.org/api/parser/#importspecifier) original de webpack.

Ejemplo:

```typescript
const importResolver = (source: string, exportName: string, _identifierName: string, module: string) => {
    // Si necesitas ignorar el procesamiento de módulos basándote en rutas específicas, puedes manejar este caso de esta manera.
    if (module.startsWith('src/units/compute')) {
        return undefined;
    }

    // Procesamiento de la importación por defecto de una función global
    // import i18n from 'ui/utils/i18n'
    if (source === 'ui/utils/i18n' && exportName === 'default') {
        return {
            resolved: true,
            keyset: undefined,
        };
    }

    // Procesamiento de la importación de una función auxiliar y especificación de que pertenece al conjunto de claves común (namespace).
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

La función que procesa las declaraciones de variables y marca cuáles variables deben considerarse como funciones de localización (posteriormente, las llamadas a los identificadores marcados son procesadas por la función reemplazadora).

Ejemplo:

```typescript
import type {VariableDeclarator} from 'estree';

const declarationResolver = (declarator: VariableDeclarator, module: string) => {
    // Si necesitas ignorar el procesamiento de módulos basándote en rutas específicas, puedes manejar este caso de esta manera.
    if (module.startsWith('src/units/compute')) {
        return undefined;
    }

```html
<p>
    <a href="README.md">English</a> |
    <a href="README.es.md">Español</a>
</p>
```

# @gravity-ui/webpack-i18n-assets-plugin

Este plugin de Webpack está diseñado para extraer automáticamente las cadenas de localización de su código fuente y generar archivos de activos de localización.

## Características

*   **Extracción automática de cadenas:** Detecta automáticamente las llamadas a funciones de localización en su código.
*   **Soporte para múltiples frameworks:** Compatible con [`@gravity-ui/i18n`](https://github.com/gravity-ui/i18n) y otros sistemas de localización.
*   **Generación de activos:** Crea archivos de activos de localización (por ejemplo, JSON) para cada idioma.
*   **Optimización:** Ayuda a mantener su código limpio y organizado al separar las cadenas de localización.
*   **Detección de claves no utilizadas:** Puede identificar claves de localización que ya no se utilizan en su proyecto.

## Instalación

```bash
npm install --save-dev @gravity-ui/webpack-i18n-assets-plugin
```

o

```bash
yarn add --dev @gravity-ui/webpack-i18n-assets-plugin
```

## Uso

Agregue el plugin a su configuración de Webpack:

```javascript
// webpack.config.js
const I18nAssetsPlugin = require('@gravity-ui/webpack-i18n-assets-plugin');

module.exports = {
    // ... otras configuraciones de Webpack
    plugins: [
        new I18nAssetsPlugin({
            // Opciones del plugin
            // ...
        }),
    ],
};
```

## Opciones del plugin

### `inputDir`

Tipo: [`String`] (obligatorio)

El directorio donde se encuentran sus archivos fuente que contienen las cadenas de localización.

### `outputDir`

Tipo: [`String`] (obligatorio)

El directorio donde se generarán los archivos de activos de localización.

### `locales`

Tipo: [`Array<String>`] (obligatorio)

Una lista de los códigos de idioma para los que desea generar activos de localización.

Ejemplo: `['en', 'es', 'ru']`

### `framework`

Tipo: [`String`] (opcional, por defecto - `'gravity-i18n'`)

El framework de localización que está utilizando. Actualmente, solo se admite `'gravity-i18n'`.

### `importResolver`

Tipo: [`ImportResolver`](./src/types.ts#20) (opcional)

Una función que procesa las declaraciones de importación y devuelve información sobre las funciones de localización importadas.

Ejemplo:

```typescript
import type {ImportResolverArgs, ImportResolverResult} from '@gravity-ui/webpack-i18n-assets-plugin';

const importResolver = ({importPath, importName}: ImportResolverArgs): ImportResolverResult | undefined => {
    if (importPath === 'ui/utils/i18n' && importName === 'default') {
        return {
            functionName: 'i18n',
            keysetFunction: 'i18nK',
        };
    }

    return undefined;
};
```

### `declarationResolver`

Tipo: [`DeclarationResolver`](./src/types.ts#37) (opcional)

Una función que procesa las declaraciones de variables y devuelve información sobre las funciones de localización declaradas.

Ejemplo:

```typescript
import type {VariableDeclarator} from 'estree';
import type {DeclarationResolverArgs, DeclarationResolverResult} from '@gravity-ui/webpack-i18n-assets-plugin';

const isI18nBind = (node: Node) => {
    return (
        node.type === 'CallExpression' &&
        node.callee.type === 'MemberExpression' &&
        node.callee.object.type === 'Identifier' &&
        node.callee.object.name === 'i18n' &&
        node.callee.property.type === 'Identifier' &&
        node.callee.property.name === 'bind'
    );
};

const getKeysetFromBind = (node: CallExpression): string | undefined => {
    if (node.arguments.length > 0 && node.arguments[0].type === 'Literal' && typeof node.arguments[0].value === 'string') {
        return node.arguments[0].value;
    }
    return undefined;
};

const declarationResolver = ({declarator}: DeclarationResolverArgs): DeclarationResolverResult | undefined => {
    // Procesamiento de declaraciones de funciones como const i18nK = i18n.bind(null, 'keyset');
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

Tipo: [`Replacer`](./src/types.ts#55)

Una función que procesa las llamadas a funciones de localización y devuelve un reemplazo como una cadena.

Ejemplo:

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

    // Procesamiento de una llamada con un argumento i18nK('key')
    if (callNode.arguments.length === 1) {
        key = getStringValue(callNode.arguments[0]);
    } else if (callNode.arguments.length === 2) {
        // Procesamiento de i18n('keyset', 'key') o i18nK('key', {params})
        const [firstArg, secondArg] = callNode.arguments;

        // Llamada i18n('keyset', 'key')
        if (secondArg.type === 'Literal') {
            keyset = getStringValue(firstArg);
            key = getStringValue(secondArg);
        } else {
            // Llamada i18nK('key', {params})
            key = getStringValue(firstArg);
            params = secondArg;
        }
    } else if (callNode.arguments.length === 3) {
        // Llamada i18n(namespace, key, params)
        const [firstArg, secondArg, thirdArg] = callNode.arguments;
        keyset = getStringValue(firstArg);
        key = getStringValue(secondArg);
        params = thirdArg;
    } else {
        throw new Error('Incorrect count of arguments in localizer call');
    }

    // Asegúrese de procesar la clave obtenida del argumento de la llamada a la función.
    // Si la función está relacionada con un keyset, después de modificar el código, el keyset se puede insertar en la clave (esta es una característica del plugin).
    // Si utiliza la clave de ReplacerArgs, viene sin el keyset y no necesita ser procesada.
    const keyParts = key.split('::');
    if (keyParts.length === 2) {
        key = keyParts[1];
    }

    const value = this.resolveKey(key, keyset);

    // Implemente las opciones de reemplazo según sus necesidades aquí.
    // Por ejemplo, si la clave es plural, devuelva una llamada a una función, etc.

    return JSON.stringify(value);
};
```

### `collectUnusedKeys`

Tipo: [`Boolean`] (por defecto - `false`)

Habilita el modo para recopilar claves no utilizadas en el proyecto. Después de la compilación, crea un archivo llamado `unused-keys.json`.

Para garantizar un funcionamiento adecuado, siempre es necesario devolver un formato detallado en la función `Replacer`. Esto es importante porque durante el reemplazo, existe la posibilidad de modificar claves y keysets determinados automáticamente.

## Configuración de frameworks

### Gravity i18n

Funciones para manejar llamadas a funciones de localización de la biblioteca [`@gravity-ui/i18n`](https://github.com/gravity-ui/i18n).

Las funciones listas para usar se encuentran [`aquí`](./src/frameworks/gravity-i18n.ts).

Un ejemplo del código con el que funcionarán las funciones:

```typescript
// El importResolver solo considera la importación predeterminada en la ruta ui/utils/i18n.
import i18n from 'ui/utils/i18n';

// El declarationResolver maneja variables cuyo valor es una llamada a i18n.bind.
const i18nK = i18n.bind(null, 'component.navigation');

// El replacer maneja llamadas a identificadores encontrados por el importResolver y el declarationResolver
// Esto significa que se procesarán las siguientes llamadas:
i18nK('some_key');
i18nK('some_plural_key', { count: 123 });
i18nK('some_key_with_param', { someParam: 'hello' });
i18n('component.navigation', 'some_key');
i18n('component.navigation', 'some_plural_key', { count: 123 });
i18n('component.navigation', 'some_key_with_param', { someParam: 'hello' });
```

El `Replacer` realiza adicionalmente lo siguiente:

1.  Incrusta los parámetros en una cadena. Por ejemplo, si el valor de la clave es el siguiente:

    ```typescript
    const keyset = {
        some_key: 'string value with {{param}}'
    };

    i18nK('some_key', {param: getSomeParam()})
    // Después de los reemplazos, obtendremos:
    `string value with ${getSomeParam()}`
    ```

2.  Sustituye una función auto-invocable para claves plurales:

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

    // Después de los reemplazos, obtendremos:
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

## ℹ️ Preguntas frecuentes

Aquí tienes la traducción del archivo README al español, manteniendo el estilo y la estructura solicitados:

```markdown
### ¿Cómo se compara esto con [webpack-localize-assets-plugin](https://github.com/privatenumber/webpack-localize-assets-plugin)?

Para implementar este plugin, se utilizó una idea del paquete webpack-localize-assets-plugins (¡muchas gracias al creador del paquete!).

Las diferencias son las siguientes:

- Una API más conveniente que permite trabajar con cualquier tipo de función de internacionalización (incluyendo helpers de namespaces como `useTranslation` de i18next, funciones importadas de otros módulos, etc.)
- Generación correcta de mapas de origen (source maps) relativos al código fuente
- Solo hay soporte para webpack 5. Se ha eliminado el soporte para webpack 4.
```