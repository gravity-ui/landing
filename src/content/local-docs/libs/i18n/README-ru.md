# @gravity-ui/i18n &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/i18n)](https://www.npmjs.com/package/@gravity-ui/i18n) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/i18n/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/i18n/actions/workflows/ci.yml?query=branch:main)

## Утилиты I18N

Утилиты пакета `I18N` разработаны для интернационализации компонентов Gravity UI.

### Установка

`npm install --save @gravity-ui/i18n`

### API

#### Конструктор (параметры)

Принимает объект `options`, включающий необязательный параметр `logger` для логирования предупреждений библиотеки.

##### Логгер

Логгер должен содержать явно определенный метод `log` со следующей сигнатурой:

- `message` — строка сообщения, которое будет записано в лог;
- `options` — объект параметров логирования:
  - `severity` — уровень логирования сообщения, всегда принимает значение `level`.
  - `logger` — определяет место для записи сообщений библиотеки.
  - `extra` — дополнительные параметры с единственным строковым полем `type`, которое всегда принимает значение `i18n`.

### Примеры использования

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

### Шаблонизация

Библиотека поддерживает шаблонизацию. Шаблонизируемые переменные заключаются в двойные фигурные скобки, а значения передаются в функцию i18n в форме словаря с парами «ключ-значение»:

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

### Плюрализация

Для удобной локализации ключей, зависящих от числового значения, можно использовать плюрализацию. Текущая библиотека использует [правила плюрализации CLDR](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html) через [API `Intl.PluralRules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules).

Может потребоваться добавление [полифила](https://github.com/eemeli/intl-pluralrules) для [API `Intl.Plural Rules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules), если он недоступен в браузере.

Существует 6 форм множественного числа (см. [`resolvedOptions`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions)):

- `zero` (также используется, когда `count = 0`, даже если форма не поддерживается в языке);
- `one` (единственное число);
- `two` (двойственное число);
- `few` (паукальное число для обозначения нескольких предметов);
- `many` (множественное; также используется для дробей, если у них есть отдельный класс);
- `other` (общая форма множественного числа, обязательная для всех языков; также используется, если язык поддерживает только одну форму).

#### Пример `keysets.json` с ключом для плюрализации

```json
{
  "label_seconds": {
    "one": "{{count}} second is left",
    "other": "{{count}} seconds are left",
    "zero": "No time left"
  }
}
```

#### Использование в JavaScript

```js
i18n('label_seconds', {count: 1}); // => 1 second
i18n('label_seconds', {count: 3}); // => 3 seconds
i18n('label_seconds', {count: 7}); // => 7 seconds
i18n('label_seconds', {count: 10}); // => 10 seconds
i18n('label_seconds', {count: 0}); // => No time left
```

#### Старый формат плюрализации (устаревший формат)

Старый формат будет удален в версии 2.

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

Ключ плюрализации содержит 4 значения, каждое из которых соответствует значению перечисления `PluralForm`.| Значения перечисления: `One`, `Few`, `Many` и `None` соответственно. Имя переменной шаблона плюрализации — `count`.

#### Пользовательская плюрализация (устаревшее свойство)

Так как у каждого языка свои правила плюрализации, библиотека предоставляет метод для настройки этих правил для любого выбранного языка.

Функция конфигурации принимает объект с языками в качестве ключей и функциями плюрализации в качестве значений.

Функция плюрализации принимает число и перечисление `PluralForm` и должна возвращать одно из значений перечисления в зависимости от переданного числа.

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

#### Предустановленные наборы правил плюрализации (устаревшие правила)

Библиотека изначально поддерживает два языка: английский и русский.

##### Английский

Ключ языка — `en`.

- `One` соответствует 1 и -1.
- `Few` не используется.
- `Many` соответствует любому числу, кроме 0.
- `None` соответствует 0.

##### Русский

Ключ языка — `ru`.

- `One` соответствует любому числу, оканчивающемуся на 1, кроме ±11.
- `Few` соответствует любому числу, оканчивающемуся на 2, 3 или 4, кроме ±12, ±13 и ±14.
- `Many` соответствует любому прочему числу, кроме 0.
- `None` соответствует 0.

##### Значение по умолчанию

Если для языка не настроена функция плюрализации, используется набор правил для английского языка.

### Вложенность

<!--GITHUB_BLOCK-->
<span style="color:red">
<!--/GITHUB_BLOCK-->

<!--LANDING_BLOCK
<span style={{color: 'red'}}>
LANDING_BLOCK-->

Глубина вложенности ключей ограничена одним уровнем (для глоссария).
</span>

Вложенность позволяет ссылаться на другие ключи в переводе, что удобно для формирования глоссариев.

#### Базовый уровень

Ключи

```json
{
  "nesting1": "1 $t{nesting2}",
  "nesting2": "2"
}
```

Пример

```ts
i18n('nesting1'); // -> "1 2"
```

На ключи из других наборов можно ссылаться, добавляя в качестве префикса необходимо значение `keysetName`.

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

### Типизация

Для типизации функции `i18nInstance.i18n` нужно выполнить несколько шагов.

#### Подготовка

Создайте JSON-файл с набором ключей, чтобы процедура типизации могла получать данные. Добавьте создание дополнительного файла `data.json` в месте получения наборов ключей. Для уменьшения размера файла и ускорения парсинга в IDE замените все значения на `'str'`.

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

#### Подключение

В директории `ui/utils/i18n` (место настройки и экспорта `i18n` для дальнейшего использования всеми интерфейсами) импортируйте функцию типизации `I18NFn` с вашим `Keysets`. После настройки `i18n` верните функцию с заданным типом.

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

#### Дополнительные аспекты

**Логика работы типизации**

Примеры использования:

- Вызов функции с передачей ключей литералами строк:

```ts
i18n('common', 'label_subnet'); // ok
i18n('dcommon', 'label_dsubnet'); // error: Argument of type '"dcommon"' is not assignable to parameter of type ...
i18n('common', 'label_dsubnet'); // error: Argument of type '"label_dsubnet"' is not assignable to parameter of type ...
```

- Вызов функции с передачей строк, которые нельзя вычислить в литералы (если `ts` не может распознать тип строки, он не выдает ошибку):

```ts
const someUncomputebleString = `label_random-index-${Math.floor(Math.random() * 4)}`;
i18n('some_service', someUncomputebleString); // ok

for (let i = 0; i < 4; i++) {
  i18n('some_service', `label_random-index-${i}`); // ok
}
```

- Вызов функции с передачей строк, которые можно вычислить в литералы:

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

**Почему нет типизации через класс**

Данная функция может поломать или усложнить некоторые сценарии использования i18n, поэтому была добавлена в качестве дополнительной функциональности. Если она хорошо себя проявит, то в будущем можно будет добавить ее в класс, чтобы не вызывать экспортируемые функции.

**Почему могут не работать встроенные методы**

Типизация встроенных методов функций достаточно сложна для реализации обхода вложенных структур и условных типов. Именно поэтому типизация работает только в случае использования непосредственного вызова функции и вызова `bind`до третьего аргумента.

**Почему нельзя генерировать сразу файл `.ts`, чтобы типизация выполнялась и для значений ключей**

Это можно сделать, передав результирующий тип в I18NFn. Однако при больших объемах файла `ts` начинает есть столько ресурсов, что это сильно тормозит IDE, чего не происходит с JSON-файлом.

**Почему не типизированы остальные методы класса I18N**

В принципе, их можно типизировать, и мы будем рады, если вы нам поможете это осуществить. Дело в том, что эти методы используются в 1% случаев.
