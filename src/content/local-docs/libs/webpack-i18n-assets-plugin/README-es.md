# 🌍 complemento de activos webpack-i18n

Un complemento para Webpack que reemplaza las llamadas a las funciones de localización (i18n) por textos de destino.

### Características

- Inserta textos i18n en el paquete (mientras sustituye los parámetros en la cadena final)
- Genera activos para todos los lugares en una sola construcción
- ¡El complemento solo funciona para compilaciones de producción!
- Solo admite literales como claves en el argumento de la función de localización (no se permiten cadenas ni variables de plantilla)

## 📝 Cómo usar

1. Instale el paquete:

   ```sh
   npm i -D @gravity-ui/webpack-i18n-assets-plugin
   ```

2. Conecta el complemento a Webpack (ejemplo para `@gravity-ui/app-builder`):

   Ejemplo de webpack config (`webpack.config.js`):

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

   Por ejemplo, si quieres crear manifiestos de activos para cada configuración regional (`webpack.config.js`):

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

   Por ejemplo, si usas `@gravity-ui/app-builder`:

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

3. Configure la estática dinámica desde el manifiesto de activos del servidor (por ejemplo, con `@gravity-ui/app-layout`):

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

## 🔧 Ajustes

De forma predeterminada, el complemento está configurado para funcionar con la [`@gravity-ui/i18n`](./frameworks/gravity-i18n.ts) biblioteca, pero puedes personalizar el procesamiento para cualquier otra biblioteca de i18n.

### importResolver

Tipo: [`ImportResolver`](./src/types.ts#18)

La función que procesa las importaciones y marca cuáles de las importaciones deben considerarse funciones de localización (posteriormente, el reemplazante procesa las llamadas a los identificadores marcados).

La firma es similar al [ImportSpecifier](https://webpack.js.org/api/parser/#importspecifier) original de webpack.

Ejemplo:

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

Tipo: [`DeclarationResolver`](./src/types.ts#30)

La función que procesa las declaraciones de variables y marca qué variables deben considerarse funciones de localización (posteriormente, la función de reemplazo procesa las llamadas a los identificadores marcados).

Ejemplo:

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

### sustituto

Tipo: [`Replacer`](./src/types.ts#55)

Función que procesa las llamadas a funciones de localización y devuelve un reemplazo en forma de cadena.

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

Tipo: [`Boolean`] (predeterminado: falso)

Activa el modo de recopilación de claves no utilizadas en el proyecto. Tras la construcción, crea un archivo denominado `unused-keys.json`.

Para garantizar una funcionalidad adecuada, siempre es necesario devolver un formato detallado en la `Replacer` función. Esto es importante porque, durante la sustitución, existe la posibilidad de modificar las claves y los conjuntos de claves determinados automáticamente.

## Configuración de Frameworks

### Gravedad i18n

Funciones para gestionar las llamadas a funciones de localización desde la biblioteca [`@gravity-ui/i18n`](https://github.com/gravity-ui/i18n).

Se encuentran las funciones listas para usar [`here`](./src/frameworks/gravity-i18n.ts).

Un ejemplo del código con el que funcionarán las funciones:

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

El Replacer también realiza lo siguiente:

1. Inserte los parámetros en una cadena. Por ejemplo, si el valor de la clave es el siguiente:

   ```typescript
   const keyset = {
     some_key: 'string value with {{param}}',
   };

   i18nK('some_key', {
     param: getSomeParam(),
   }) // After the replacements, we will get:
   `string value with ${getSomeParam()}`;
   ```

2. Sustituye las teclas plurales por una función de autoinvocación:

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

## ℹ️ PREGUNTAS FRECUENTES

### ¿Cómo se compara esto con [webpack-localize-assets-plugin](https://github.com/privatenumber/webpack-localize-assets-plugin)?

Para implementar este complemento, se utilizó una idea del paquete webpack-localize-assets-plugins (¡por lo que muchas gracias al creador del paquete!).

Las diferencias son las siguientes:

- Una API más cómoda que te permite trabajar con cualquier tipo de funciones de internacionalización (incluidos los espacios de nombres ayudantes como UseTranslation de i18next, las funciones importadas de otros módulos, etc.)
- Generación correcta de mapas fuente en relación con el código fuente
- Solo hay soporte para el paquete web 5. Se ha eliminado la compatibilidad con Webpack 4.
