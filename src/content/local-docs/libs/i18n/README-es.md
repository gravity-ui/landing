# @gravity-ui/i18n &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/i18n)](https://www.npmjs.com/package/@gravity-ui/i18n) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/i18n/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/i18n/actions/workflows/ci.yml?query=branch:main)

## Utilidades I18N

Las utilidades del paquete I18N están diseñadas para la internacionalización de los servicios de Gravity UI.

### Instalar

`npm install --save @gravity-ui/i18n`

### API

#### constructor (opciones)

Acepta `options` objetos con opciones `logger` que se usarían para registrar las advertencias de la biblioteca.

##### leñador

El registrador debe tener un `log` método explícito con la siguiente firma:

- `message`- cadena de mensaje que se registraría
- `options`- objeto de las opciones de registro:
  - `level`- nivel de registro de mensajes, siempre `'info'`
  - `logger`- dónde registrar los mensajes de la biblioteca
  - `extra`- objeto de opciones adicional, con una sola `type` cadena, que es siempre `i18n`

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
console.log(i18n.i18n('wizard', 'label_error-widget-no-access')); // -> "Нет доступа к чарту"

i18n.setLang('en');
console.log(i18n.i18n('wizard', 'label_error-widget-no-access')); // -> "No access to the chart

// Keyset allows for a simpler translations retrieval
const keyset = i18n.keyset('wizard');
console.log(keyset('label_error-widget-no-access')); // -> "No access to the chart"

i18n.setLang('ru');
console.log(keyset('label_error-widget-no-access')); // -> "Нет доступа к чарту"

// Checking if keyset has a key
if (i18n.has('wizard', 'label_error-widget-no-access')) {
  i18n.i18n('wizard', 'label_error-widget-no-access');
}
```

### Creación de plantillas

La biblioteca admite la creación de plantillas. Las variables de plantilla se incluyen entre corchetes dobles y los valores se pasan a la función i18n como un diccionario clave-valor:

#### `keysets.json`

```json
{
  "label_template": "No matches found for '{{inputValue}}' in '{{folderName}}'"
}
```

#### `index.js`

```js
i18n('label_template', {inputValue: 'something', folderName: 'somewhere'}); // => No matches found for "something" in "somewhere"
```

### Pluralización

La pluralización se puede utilizar para localizar fácilmente las claves que dependen de valores numéricos. La biblioteca actual usa [CLDR Plural Rules a través de la API [Intl.PluralRules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules)](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html).

Es posible que tengas que [rellenar de](https://github.com/eemeli/intl-pluralrules) forma múltiple la [API Intl.Plural Rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) si no está disponible en el navegador.

Hay 6 formas plurales (consulte [ResolvedOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions)):

- cero (también se usará cuando count = 0 incluso si el formulario no es compatible con el idioma)
- uno (singular)
- dos (doble)
- pocos (paucal)
- muchos (también se usan para fracciones si tienen una clase separada)
- otro (formulario obligatorio para todos los idiomas; forma plural general; también se usa si el idioma solo tiene una forma única)

#### Ejemplo de `keysets.json` con clave plural

```json
{
  "label_seconds": {
    "one": "{{count}} second is left",
    "other": "{{count}} seconds are left",
    "zero": "No time left"
  }
}
```

#### Uso en JS

```js
i18n('label_seconds', {count: 1}); // => 1 second
i18n('label_seconds', {count: 3}); // => 3 seconds
i18n('label_seconds', {count: 7}); // => 7 seconds
i18n('label_seconds', {count: 10}); // => 10 seconds
i18n('label_seconds', {count: 0}); // => No time left
```

#### [Obsoleto] Formato antiguo de plurales

El formato anterior se eliminará en la versión 2.

```json
{
  "label_seconds": [
    "{{count}} second is left",
    "{{count}} seconds are left",
    "{{count}} seconds are left",
    "No time left"
  ]
}
```

Una clave pluralizada contiene 4 valores, cada uno |correspondiente a un valor `PluralForm` de enumeración. Los valores de enumeración son: `One`, `Few` `Many`, y `None`, respectivamente. El nombre de la variable de plantilla para la pluralización es `count`.

#### [Obsoleto] Pluralización personalizada

Dado que cada idioma tiene su propia forma de pluralización, la biblioteca proporciona un método para configurar las reglas para cualquier idioma elegido.

La función de configuración acepta un objeto con idiomas como claves y funciones de pluralización como valores.

Una función de pluralización acepta un número y la `PluralForm` enumeración, y se espera que devuelva uno de los valores de enumeración según el número proporcionado.

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

#### [Obsoleto] Se proporcionaron conjuntos de reglas de pluralización

Los dos idiomas disponibles de fábrica son el inglés y el ruso.

##### Inglés

Clave de idioma: `en`.

- `One` corresponde a 1 y -1.
- `Few` no se usa.
- `Many` corresponde a cualquier otro número, excepto 0.
- `None` corresponde a 0.

##### rusa

Clave de idioma: `ru`.

- `One` corresponde a cualquier número que termine en 1, excepto ±11.
- `Few` corresponde a cualquier número que termine en 2, 3 o 4, excepto ±12, ±13 y ±14.
- `Many` corresponde a cualquier otro número, excepto 0.
- `None` corresponde a 0.

##### Predeterminado

El conjunto de reglas en inglés se usa de forma predeterminada para cualquier idioma sin una función de pluralización configurada.

### Anidación

<!--GITHUB_BLOCK-->
<span style="color:red">
<!--/GITHUB_BLOCK-->

<!--LANDING_BLOCK
<span style={{color: 'red'}}>
LANDING_BLOCK-->

Profundidad máxima de anidación limitada: solo 1 nivel (para glosario)
</span>

El anidamiento permite hacer referencia a otras claves en una traducción. Podría ser útil para crear términos de glosario.

#### Básico

llaves

```json
{
  "nesting1": "1 $t{nesting2}",
  "nesting2": "2"
}
```

muestra

```ts
i18n('nesting1'); // -> "1 2"
```

Puede hacer referencia a claves de otro conjunto de claves anteponiendo el nombre del conjunto de claves:

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

### Escribiendo

Para escribir la `i18nInstance.i18n` función, sigue estos pasos:

#### Preparación

Prepare un archivo de conjunto de claves JSON para que el procedimiento de escritura pueda obtener datos. Desde donde obtenga los conjuntos de claves, añada la creación de un archivo adicional `data.json`. Para reducir el tamaño del archivo y acelerar el análisis del IDE, puede reemplazar todos los valores por `'str'`.

```ts
async function createFiles(keysets: Record<Lang, LangKeysets>) {
  await mkdirp(DEST_PATH);

  const createFilePromises = Object.keys(keysets).map((lang) => {
    const keysetsJSON = JSON.stringify(keysets[lang as Lang], null, 4);
    const content = umdTemplate(keysetsJSON);
    const hash = getContentHash(content);
    const filePath = path.resolve(DEST_PATH, `${lang}.${hash.slice(0, 8)}.js`);

    // <New lines>
    let typesPromise;

    if (lang === 'ru') {
      const keyset = keysets[lang as Lang];
      Object.keys(keyset).forEach((keysetName) => {
        const keyPhrases = keyset[keysetName];
        Object.keys(keyPhrases).forEach((keyName) => {
          // mutate object!
          keyPhrases[keyName] = 'str';
        });
      });

      const JSONForTypes = JSON.stringify(keyset, null, 4);
      typesPromise = writeFile(path.resolve(DEST_PATH, `data.json`), JSONForTypes, 'utf-8');
    }
    // </New lines>

    return Promise.all([typesPromise, writeFile(filePath, content, 'utf-8')]);
  });

  await Promise.all(createFilePromises);
}
```

#### Conexión

En sus `ui/utils/i18n` directorios (donde configura i18n y lo exporta para que lo utilicen todas las interfaces), importe la función de escritura `I18NFn` con su. `Keysets` Después de configurar su i18n, devuelva la función casted

```ts
import {I18NFn} from '@gravity-ui/i18n';
// This must be a typed import!
import type Keysets from '../../../dist/public/build/i18n/data.json';

const i18nInstance = new I18N();
type TypedI18n = I18NFn<typeof Keysets>;
// ...
export const ci18n = (i18nInstance.i18n as TypedI18n).bind(i18nInstance, 'common');
export const cui18n = (i18nInstance.i18n as TypedI18n).bind(i18nInstance, 'common.units');
export const i18n = i18nInstance.i18n.bind(i18nInstance) as TypedI18n;
```

#### Cuestiones adicionales

**Lógica de escritura**

Hay varios casos de uso de escritura:

- Llamar a una función con claves pasadas como literales de cadena

```ts
i18n('common', 'label_subnet'); // ok
i18n('dcommon', 'label_dsubnet'); // error: Argument of type '"dcommon"' is not assignable to parameter of type ...
i18n('common', 'label_dsubnet'); // error: Argument of type '"label_dsubnet"' is not assignable to parameter of type ...
```

- Llamar a una función, pasarle cadenas que no se pueden convertir en literales (si ts no puede derivar el tipo de cadena, no arroja ningún error)

```ts
const someUncomputebleString = `label_random-index-${Math.floor(Math.random() * 4)}`;
i18n('some_service', someUncomputebleString); // ok

for (let i = 0; i < 4; i++) {
  i18n('some_service', `label_random-index-${i}`); // ok
}
```

- Llamar a una función, pasarle cadenas que se pueden convertir en literales

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

**Por qué no se admite la escritura a través de una clase**

Esta función puede romper o complicar algunos escenarios de i18n, por lo que se agregó como una extensión funcional. Si resulta efectivo, probablemente lo agreguemos a una clase para evitar convertir funciones exportadas.

**Por qué pueden fallar los métodos integrados**

La implementación del recorrido de estructuras anidadas y tipos condicionales mediante métodos de funciones integradas mecanografiados es una tarea bastante compleja. Es por eso que la escritura solo funciona cuando se usa una llamada directa a una función y una `bind` llamada al tercer argumento.

**¿Por qué no puedo generar un archivo ts directamente para escribir también los valores clave?**

Puede hacerlo pasando el tipo de resultado a I18nfn. Sin embargo, con archivos de gran tamaño, ts comienza a consumir enormes cantidades de recursos, lo que ralentiza drásticamente el IDE, pero con los archivos JSON este no es el caso.

**¿Por qué no se han escrito otros métodos de la clase I18N?**

Se pueden escribir, te agradeceremos que nos ayudes a implementarlo. El caso es que se utilizan otros métodos en el 1% de los casos.
