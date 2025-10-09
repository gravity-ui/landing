# @gravity-ui/i18n &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/i18n)](https://www.npmjs.com/package/@gravity-ui/i18n) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/i18n/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/i18n/actions/workflows/ci.yml?query=branch:main)

## Utilidades de I18N

Las utilidades del paquete I18N están diseñadas para la internacionalización de los servicios de Gravity UI.

### Instalación

`npm install --save @gravity-ui/i18n`

### API

#### constructor(options)

Acepta un objeto `options` con un `logger` opcional que se utilizará para registrar advertencias de la biblioteca.

##### logger

El logger debe tener un método `log` explícito con la siguiente firma:

 * `message` - cadena de texto del mensaje que se registrará
 * `options` - objeto de opciones de registro:
   * `level` - nivel para el mensaje de registro, siempre `'info'`
   * `logger` - dónde registrar los mensajes de la biblioteca
   * `extra` - objeto de opciones adicionales, con una única cadena `type`, que siempre es `i18n`

### Ejemplos de uso

#### `keysets/en.json`

```json
{
  "wizard": {
    "label_error-widget-no-access": "No access to the chart"
  }
}
```

#### `keysets/ru.json`

```json
{
  "wizard": {
    "label_error-widget-no-access": "Нет доступа к чарту"
  }
}
```

#### `index.js`

```js
const ru = require('./keysets/ru.json');
const en = require('./keysets/en.json');

const {I18N} = require('@gravity-ui/i18n');

const i18n = new I18N();
i18n.registerKeysets('ru', ru);
i18n.registerKeysets('en', en);

i18n.setLang('ru');
console.log(
    i18n.i18n('wizard', 'label_error-widget-no-access')
); // -> "Нет доступа к чарту"

i18n.setLang('en');
console.log(
    i18n.i18n('wizard', 'label_error-widget-no-access')
); // -> "No access to the chart"

// El conjunto de claves permite una recuperación de traducciones más sencilla
const keyset = i18n.keyset('wizard');
console.log(
    keyset('label_error-widget-no-access')
); // -> "No access to the chart"


i18n.setLang('ru');
console.log(
    keyset('label_error-widget-no-access')
); // -> "Нет доступа к чарту"

// Comprobando si el conjunto de claves tiene una clave
if (i18n.has('wizard', 'label_error-widget-no-access')) {
    i18n.i18n('wizard', 'label_error-widget-no-access')
}
```

### Plantillas

La biblioteca admite plantillas. Las variables de plantilla están encerradas entre llaves dobles y los valores se pasan a la función i18n como un diccionario clave-valor:

#### `keysets.json`

```json
{
  "label_template": "No matches found for '{{inputValue}}' in '{{folderName}}'"
}
```

#### `index.js`

```js
i18n('label_template', {inputValue: 'something', folderName: 'somewhere'});  // => No matches found for "something" in "somewhere"
```

### Pluralización

La pluralización se puede utilizar para la localización sencilla de claves que dependen de valores numéricos. La biblioteca actual utiliza [Reglas de Pluralización CLDR](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html) a través de la [API Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules).

Es posible que necesite [polyfill](https://github.com/eemeli/intl-pluralrules) la [API Intl.Plural Rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) si no está disponible en el navegador.

Hay 6 formas de plural (ver [resolvedOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions)):

- zero (también se usará cuando count = 0, incluso si la forma no es compatible en el idioma)
- one (singular)
- two (dual)
- few (paucal)
- many (también se usa para fracciones si tienen una clase separada)
- other (forma requerida para todos los idiomas — forma plural general — también se usa si el idioma solo tiene una forma)

#### Ejemplo de `keysets.json` con clave de plural

```json
{
  "label_seconds": {
    "one": "{{count}} second is left",
    "other":"{{count}} seconds are left",
    "zero": "No time left"
  }
}
```

#### Uso en JS

```js
i18n('label_seconds', {count: 1});  // => 1 second
i18n('label_seconds', {count: 3});  // => 3 seconds
i18n('label_seconds', {count: 7});  // => 7 seconds
i18n('label_seconds', {count: 10}); // => 10 seconds
i18n('label_seconds', {count: 0});  // => No time left
```

#### Formato de plurales antiguo [Obsoleto]

El formato antiguo se eliminará en la v2.

```json
{
  "label_seconds": ["{{count}} second is left", "{{count}} seconds are left", "{{count}} seconds are left", "No time left"]
}
```

Una clave pluralizada contiene 4 valores, cada uno |correspondiente a un valor de la enumeración `PluralForm`. Los valores de la enumeración son: `One`, `Few`, `Many` y `None`, respectivamente. El nombre de la variable de plantilla para la pluralización es `count`.

#### Pluralización personalizada [Obsoleto]

Dado que cada idioma tiene su propia forma de pluralización, la biblioteca proporciona un método para configurar las reglas para cualquier idioma elegido.

La función de configuración acepta un objeto con idiomas como claves y funciones de pluralización como valores.

Una función de pluralización acepta un número y la enumeración `PluralForm`, y se espera que devuelva uno de los valores de la enumeración según el número proporcionado.

```js
const {I18N} = require('@gravity-ui/i18n');

const i18n = new I18N();

i18n.configurePluralization({
  en: (count, pluralForms) => {
    if (!count) return pluralForms.None;
    if (count === 1) return pluralForms.One;
    return pluralForms.Many;
  },
});
```

#### Conjuntos de reglas de pluralización proporcionados [Obsoleto]

Los dos idiomas compatibles de inmediato son el inglés y el ruso.

##### Inglés

Clave del idioma: `en`.
* `One` corresponde a 1 y -1.
* `Few` no se utiliza.
* `Many` corresponde a cualquier otro número, excepto 0.
* `None` corresponde a 0.

##### Ruso

Clave del idioma: `ru`.
* `One` corresponde a cualquier número que termine en 1, excepto ±11.
* `Few` corresponde a cualquier número que termine en 2, 3 o 4, excepto ±12, ±13 y ±14.
* `Many` corresponde a cualquier otro número, excepto 0.
* `None` corresponde a 0.

```html
<!--
Please keep this HTML snippet in the same place as in the source file.
-->
<div class="language-selector">
  <a href="/en/README.md">English</a>
  <a href="/es/README.md">Español</a>
</div>

##### Predeterminado

Por defecto se utiliza el conjunto de reglas en inglés, para cualquier idioma sin una función de pluralización configurada.

### Anidamiento

<!--GITHUB_BLOCK-->
<span style="color:red">
<!--/GITHUB_BLOCK-->

<!--LANDING_BLOCK
<span style={{color: 'red'}}>
LANDING_BLOCK-->

Profundidad máxima de anidamiento limitada: solo 1 nivel (para el glosario)
</span>

El anidamiento te permite referenciar otras claves dentro de una traducción. Puede ser útil para construir términos de glosario.

#### Básico

claves

```json
{
  "nesting1": "1 $t{nesting2}",
  "nesting2": "2",
}
```

ejemplo

```ts
i18n('nesting1'); // -> "1 2"
```

Puedes referenciar claves de otros conjuntos de claves anteponiendo el nombre del conjunto de claves:
```json
// global/en.json
{
  "app": "App"
}

// service/en.json
{
  "app-service": "$t{global::app} service"
}
```

### Tipado

Para tipar la función `i18nInstance.i18n`, sigue estos pasos:

#### Preparación

Prepara un archivo de conjunto de claves JSON para que el procedimiento de tipado pueda obtener los datos. Donde obtengas los conjuntos de claves, añade la creación de un archivo adicional `data.json`. Para disminuir el tamaño del archivo y acelerar el análisis del IDE, puedes reemplazar todos los valores por `'str'`.

```ts
async function createFiles(keysets: Record<Lang, LangKeysets>) {
    await mkdirp(DEST_PATH);

    const createFilePromises = Object.keys(keysets).map((lang) => {
        const keysetsJSON = JSON.stringify(keysets[lang as Lang], null, 4);
        const content = umdTemplate(keysetsJSON);
        const hash = getContentHash(content);
        const filePath = path.resolve(DEST_PATH, `${lang}.${hash.slice(0, 8)}.js`);

        // <Nuevas líneas>
        let typesPromise;

        if (lang === 'ru') {
            const keyset = keysets[lang as Lang];
            Object.keys(keyset).forEach((keysetName) => {
                const keyPhrases = keyset[keysetName];
                Object.keys(keyPhrases).forEach((keyName) => {
                    // ¡modifica el objeto!
                    keyPhrases[keyName] = 'str';
                });
            });

            const JSONForTypes = JSON.stringify(keyset, null, 4);
            typesPromise = writeFile(path.resolve(DEST_PATH, `data.json`), JSONForTypes, 'utf-8');
        }
        // </Nuevas líneas>

        return Promise.all([typesPromise, writeFile(filePath, content, 'utf-8')]);
    });

    await Promise.all(createFilePromises);
}
```

#### Conexión

En tus directorios `ui/utils/i18n` (donde configuras i18n y lo exportas para que sea utilizado por todas las interfaces), importa la función de tipado `I18NFn` con tus `Keysets`. Después de que tu i18n haya sido configurado, devuelve la función casteada.

```ts
import {I18NFn} from '@gravity-ui/i18n';
// ¡Esto debe ser una importación tipada!
import type Keysets from '../../../dist/public/build/i18n/data.json';

const i18nInstance = new I18N();
type TypedI18n = I18NFn<typeof Keysets>;
// ...
export const ci18n = (i18nInstance.i18n as TypedI18n).bind(i18nInstance, 'common');
export const cui18n = (i18nInstance.i18n as TypedI18n).bind(i18nInstance, 'common.units');
export const i18n = i18nInstance.i18n.bind(i18nInstance) as TypedI18n;
```

#### Problemas adicionales

**Lógica de tipado**

Hay varios casos de uso de tipado:

- Llamar a una función con claves pasadas como literales de cadena

```ts
i18n('common', 'label_subnet'); // ok
i18n('dcommon', 'label_dsubnet'); // error: Argument of type '"dcommon"' is not assignable to parameter of type ...
i18n('common', 'label_dsubnet'); // error: Argument of type '"label_dsubnet"' is not assignable to parameter of type ...
```

- Llamar a una función, pasándole cadenas que no se pueden convertir en literales (si ts no puede derivar el tipo de cadena, no lanza un error)

```ts
const someUncomputebleString = `label_random-index-${Math.floor(Math.random() * 4)}`;
i18n('some_service', someUncomputebleString); // ok

for (let i = 0; i < 4; i++) {
    i18n('some_service', `label_random-index-${i}`); // ok
}
```

- Llamar a una función, pasándole cadenas que se pueden convertir en literales

```ts
const labelColors = ['red', 'green', 'yelllow', 'white'] as const;
for (let i = 0; i < 4; i++) {
    i18n('some_service', `label_color-${labelColors[i]}`); // ok
}

const labelWrongColors = ['red', 'not-existing', 'yelllow', 'white'] as const;
for (let i = 0; i < 4; i++) {
    i18n('some_service', `label_color-${labelWrongColors[i]}`); // error: Argument of type '"not-existing"' is not assignable to parameter of type ...
}
```

**Por qué no se admite el tipado a través de una clase**

Esta función puede romper o complicar algunos escenarios de i18n, por lo que se añadió como una extensión funcional. Si resulta eficaz, probablemente la añadiremos a una clase para evitar el casting de funciones exportadas.

**Por qué los métodos integrados pueden fallar**

La implementación de la traversa de estructuras anidadas y tipos condicionales utilizando métodos de función integrados tipados es una tarea lo suficientemente compleja. Por eso, el tipado solo funciona cuando se utiliza una llamada directa a la función y una llamada `bind` hasta el tercer argumento.

**¿Por qué no puedo generar un archivo ts directamente para tipar también los valores de las claves?**

Puedes hacerlo pasando el tipo de resultado a `I18NFn`. Sin embargo, con archivos de gran tamaño, ts empieza a consumir enormes cantidades de recursos, ralentizando drásticamente el IDE, pero con los archivos JSON esto no ocurre.

**¿Por qué no se han tipado otros métodos de la clase I18N?**

Se pueden tipar, agradeceríamos tu ayuda para implementarlo. El caso es que otros métodos se utilizan en el 1% de los casos.
```