# @gravity-ui/i18n &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/i18n)](https://www.npmjs.com/package/@gravity-ui/i18n) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/i18n/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/i18n/actions/workflows/ci.yml?query=branch:main)

## I18N utilities

Utilities in the I18N package are designed for internationalization of Gravity UI services.

### Install

`npm install --save @gravity-ui/i18n`

### API

#### constructor(options)

Accepts `options` object with optional `logger` that would be used for logging library warnings.

##### logger

Logger should have explicit `log` method with following signature:

 * `message` - string of message that would be logged
 * `options` - object of logging options:
   * `level` - level for logging message, always `'info'`
   * `logger` - where to log library messages
   * `extra` - additional options object, with a single `type` string, that is always `i18n`

### Use examples

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
); // -> "No access to the chart

// Keyset allows for a simpler translations retrieval
const keyset = i18n.keyset('wizard');
console.log(
    keyset('label_error-widget-no-access')
); // -> "No access to the chart"


i18n.setLang('ru');
console.log(
    keyset('label_error-widget-no-access')
); // -> "Нет доступа к чарту"

// Checking if keyset has a key
if (i18n.has('wizard', 'label_error-widget-no-access')) {
    i18n.i18n('wizard', 'label_error-widget-no-access')
}
```

### Templating

The library supports templating. Templated variables are enclosed in double curly brackets, and the values are passed to the i18n function as a key-value dictionary:

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

### Pluralization

Pluralization can be used for easy localization of keys that depend on numeric values. Current library uses [CLDR Plural Rules](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html) via [Intl.PluralRules API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules).

You may need to [polyfill](https://github.com/eemeli/intl-pluralrules) the [Intl.Plural Rules API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) if it is not available in the browser.

There are 6 plural forms (see [resolvedOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions)):

- zero (also will be used when count = 0 even if the form is not supported in the language)
- one (singular)
- two (dual)
- few (paucal)
- many (also used for fractions if they have a separate class)
- other (required form for all languages — general plural form — also used if the language only has a single form)

#### Example of `keysets.json` with plural key

```json
{
  "label_seconds": {
    "one": "{{count}} second is left",
    "other":"{{count}} seconds are left",
    "zero": "No time left"
  }
}
```

#### Usage in JS

```js
i18n('label_seconds', {count: 1});  // => 1 second
i18n('label_seconds', {count: 3});  // => 3 seconds
i18n('label_seconds', {count: 7});  // => 7 seconds
i18n('label_seconds', {count: 10}); // => 10 seconds
i18n('label_seconds', {count: 0});  // => No time left
```

#### [Deprecated] Old plurals format

Old format will be removed in v2.

```json
{
  "label_seconds": ["{{count}} second is left", "{{count}} seconds are left", "{{count}} seconds are left", "No time left"]
}
```

A pluralized key contains 4 values, each |corresponding to a `PluralForm` enum value. The enum values are: `One`, `Few`, `Many`, and `None`, respectively. Template variable name for pluralization is `count`.

#### [Deprecated] Custom pluralization

Since every language has its own way of pluralization, the library provides a method to configure the rules for any chosen language.

The configuration function accepts an object with languages as keys, and pluralization functions as values.

A pluralization function accepts a number and the `PluralForm` enum, and is expected to return one of the enum values depending on the provided number.

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

#### [Deprecated] Provided pluralization rulesets

The two languages supported out of the box are English and Russian.

##### English

Language key: `en`.
* `One` corresponds to 1 and -1.
* `Few` is not used.
* `Many` corresponds to any other number, except 0.
* `None` corresponds to 0.

##### Russian

Language key: `ru`.
* `One` corresponds to any number ending in 1, except ±11.
* `Few` corresponds to any number ending in 2, 3 or 4, except ±12, ±13 and ±14.
* `Many` corresponds to any other number, except 0.
* `None` corresponds to 0.

##### Default

The English ruleset is used by default, for any language without a configured pluralization function.

### Nesting

<!--GITHUB_BLOCK-->
<span style="color:red">
<!--/GITHUB_BLOCK-->

<!--LANDING_BLOCK
<span style={{color: 'red'}}>
LANDING_BLOCK-->

Max nesting depth limited - only 1 level (for glossary)
</span>

Nesting allows you to reference other keys in a translation. Could be useful to build glossary terms.

#### Basic

keys

```json
{
  "nesting1": "1 $t{nesting2}",
  "nesting2": "2",
}
```

sample

```ts
i18n('nesting1'); // -> "1 2"
```

You can reference keys from other keyset by prepending the keysetName: 
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

### Typing

To type the `i18nInstance.i18n` function, follow the steps:

#### Preparation

Prepare a JSON keyset file so that the typing procedure can fetch data. Where you fetch keysets from, add creation of an additional `data.json` file. To decrease the file size and speed up IDE parsing, you can replace all values by `'str'`.

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

#### Connection

In your `ui/utils/i18n` directories (where you configure i18n and export it to be used by all interfaces), import the typing function `I18NFn` with your `Keysets`. After your i18n has been configured, return the casted function

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

#### Additional issues

**Typing logic**

There are several typing use cases:

- Calling a function with keys passed as string literals

```ts
i18n('common', 'label_subnet'); // ok
i18n('dcommon', 'label_dsubnet'); // error: Argument of type '"dcommon"' is not assignable to parameter of type ...
i18n('common', 'label_dsubnet'); // error: Argument of type '"label_dsubnet"' is not assignable to parameter of type ...
```

- Calling a function, passing to it strings that can't be converted into literals (if ts can't derive the string type, it doesn't throw an error)

```ts
const someUncomputebleString = `label_random-index-${Math.floor(Math.random() * 4)}`;
i18n('some_service', someUncomputebleString); // ok

for (let i = 0; i < 4; i++) {
    i18n('some_service', `label_random-index-${i}`); // ok
}
```

- Calling a function, passing to it strings that can be converted into literals

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

**Why typing via a class isn't supported**

This function can break or complicate some i18n scenarios, so it was added as a functional extension. If it proves effective, we would probably add it to a class to avoid casting exported functions.

**Why built-in methods might fail**

Implementing of traversal of nested structures and conditional types using typed built-in function methods is a complex enough task. That's why typing works only when using a direct function call and a `bind` call up to the third argument.

**Why can't I generate a ts file straightforwardly to typecast key values as well?**

You can do that by passing the result type to I18NFn. However, with large file sizes, ts starts consuming huge amounts of resources, slowing down the IDE dramatically, but with JSON file this is not the case.

**Why other methods of the I18N class haven't been typed?**

They can be typed, we'll appreciate if you help implementing it. The case is that other methods are used in 1% of cases.

