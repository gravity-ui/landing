# @gravity-ui/i18n &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/i18n)](https://www.npmjs.com/package/@gravity-ui/i18n) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/i18n/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/i18n/actions/workflows/ci.yml?query=branch:main)

## I18N 工具

I18N 包中的工具是为 Gravity UI 服务的国际化而设计的。

### 安装

`npm install --save @gravity-ui/i18n`

### API

#### constructor(options)

接受带有可选 `logger` 的 `options` 对象，用于记录库警告。

##### logger

Logger 应该有明确的 `log` 方法，具有以下签名：

- `message` - 将被记录的消息字符串
- `options` - 日志选项对象：
  - `level` - 日志消息的级别，始终为 `'info'`
  - `logger` - 在哪里记录库消息
  - `extra` - 附加选项对象，带有单个 `type` 字符串，始终为 `i18n`

### 使用示例

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

// Keyset 允许更简单的翻译检索
const keyset = i18n.keyset('wizard');
console.log(keyset('label_error-widget-no-access')); // -> "No access to the chart"

i18n.setLang('ru');
console.log(keyset('label_error-widget-no-access')); // -> "Нет доступа к чарту"

// 检查 keyset 是否有某个键
if (i18n.has('wizard', 'label_error-widget-no-access')) {
  i18n.i18n('wizard', 'label_error-widget-no-access');
}
```

### 模板

该库支持模板。模板变量用双大括号括起来，值作为键值字典传递给 i18n 函数：

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

### 复数形式

复数形式可用于轻松本地化依赖于数值的键。当前库通过 [Intl.PluralRules API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) 使用 [CLDR 复数规则](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html)。

如果浏览器中不提供 [Intl.Plural Rules API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules)，您可能需要使用 [polyfill](https://github.com/eemeli/intl-pluralrules)。

有 6 种复数形式（参见 [resolvedOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions)）：

- zero（当 count = 0 时也会使用，即使该语言不支持此形式）
- one（单数）
- two（双数）
- few（少数）
- many（也用于分数，如果它们有单独的类别）
- other（所有语言都需要的形式 — 通用复数形式 — 如果语言只有一种形式，也会使用此形式）

#### 带有复数键的 `keysets.json` 示例

```json
{
  "label_seconds": {
    "one": "{{count}} second is left",
    "other": "{{count}} seconds are left",
    "zero": "No time left"
  }
}
```

#### 在 JS 中的用法

```js
i18n('label_seconds', {count: 1}); // => 1 second
i18n('label_seconds', {count: 3}); // => 3 seconds
i18n('label_seconds', {count: 7}); // => 7 seconds
i18n('label_seconds', {count: 10}); // => 10 seconds
i18n('label_seconds', {count: 0}); // => No time left
```

#### [已弃用] 旧复数格式

旧格式将在 v2 中移除。

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

复数键包含 4 个值，每个值对应一个 `PluralForm` 枚举值。枚举值分别是：`One`、`Few`、`Many` 和 `None`。复数形式的模板变量名是 `count`。

#### [已弃用] 自定义复数形式

由于每种语言都有自己的复数形式方式，该库提供了一种方法来为任何选定的语言配置规则。

配置函数接受一个对象，其中语言作为键，复数形式函数作为值。

复数形式函数接受一个数字和 `PluralForm` 枚举，并根据提供的数字返回枚举值之一。

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

#### [已弃用] 提供的复数规则集

默认支持的两种语言是英语和俄语。

##### 英语

语言键：`en`。

- `One` 对应 1 和 -1。
- `Few` 不使用。
- `Many` 对应除 0 外的任何其他数字。
- `None` 对应 0。

##### 俄语

语言键：`ru`。

- `One` 对应以 1 结尾的任何数字，除了 ±11。
- `Few` 对应以 2、3 或 4 结尾的任何数字，除了 ±12、±13 和 ±14。
- `Many` 对应除 0 外的任何其他数字。
- `None` 对应 0。

##### 默认

对于没有配置复数形式函数的任何语言，默认使用英语规则集。

### 嵌套

<!--GITHUB_BLOCK-->
<span style="color:red">
<!--/GITHUB_BLOCK-->

<!--LANDING_BLOCK
<span style={{color: 'red'}}>
LANDING_BLOCK-->

最大嵌套深度有限 - 只有 1 级（用于词汇表）
</span>

嵌套允许您在翻译中引用其他键。这对于构建词汇表术语很有用。

#### 基础

键

```json
{
  "nesting1": "1 $t{nesting2}",
  "nesting2": "2"
}
```

示例

```ts
i18n('nesting1'); // -> "1 2"
```

您可以通过在前面加上 keysetName 来引用其他 keyset 中的键：

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

### 类型

要为 `i18nInstance.i18n` 函数添加类型，请按照以下步骤操作：

#### 准备

准备一个 JSON keyset 文件，以便类型化过程可以获取数据。在获取 keysets 的地方，添加创建额外的 `data.json` 文件。为了减小文件大小并加快 IDE 解析速度，您可以将所有值替换为 `'str'`。

```ts
async function createFiles(keysets: Record<Lang, LangKeysets>) {
  await mkdirp(DEST_PATH);

  const createFilePromises = Object.keys(keysets).map((lang) => {
    const keysetsJSON = JSON.stringify(keysets[lang as Lang], null, 4);
    const content = umdTemplate(keysetsJSON);
    const hash = getContentHash(content);
    const filePath = path.resolve(DEST_PATH, `${lang}.${hash.slice(0, 8)}.js`);

    // <新行>
    let typesPromise;

    if (lang === 'ru') {
      const keyset = keysets[lang as Lang];
      Object.keys(keyset).forEach((keysetName) => {
        const keyPhrases = keyset[keysetName];
        Object.keys(keyPhrases).forEach((keyName) => {
          // 修改对象！
          keyPhrases[keyName] = 'str';
        });
      });

      const JSONForTypes = JSON.stringify(keyset, null, 4);
      typesPromise = writeFile(path.resolve(DEST_PATH, `data.json`), JSONForTypes, 'utf-8');
    }
    // </新行>

    return Promise.all([typesPromise, writeFile(filePath, content, 'utf-8')]);
  });

  await Promise.all(createFilePromises);
}
```

#### 连接

在您的 `ui/utils/i18n` 目录（您配置 i18n 并将其导出以供所有接口使用的地方），使用您的 `Keysets` 导入类型函数 `I18NFn`。在配置 i18n 后，返回转换后的函数

```ts
import {I18NFn} from '@gravity-ui/i18n';
// 这必须是类型导入！
import type Keysets from '../../../dist/public/build/i18n/data.json';

const i18nInstance = new I18N();
type TypedI18n = I18NFn<typeof Keysets>;
// ...
export const ci18n = (i18nInstance.i18n as TypedI18n).bind(i18nInstance, 'common');
export const cui18n = (i18nInstance.i18n as TypedI18n).bind(i18nInstance, 'common.units');
export const i18n = i18nInstance.i18n.bind(i18nInstance) as TypedI18n;
```

#### 其他问题

**类型逻辑**

有几种类型用例：

- 使用作为字符串字面量传递的键调用函数

```ts
i18n('common', 'label_subnet'); // 正确
i18n('dcommon', 'label_dsubnet'); // 错误：类型为 '"dcommon"' 的参数不能赋值给类型为 ... 的参数
i18n('common', 'label_dsubnet'); // 错误：类型为 '"label_dsubnet"' 的参数不能赋值给类型为 ... 的参数
```

- 调用函数，向其传递无法转换为字面量的字符串（如果 ts 无法推导字符串类型，则不会抛出错误）

```ts
const someUncomputebleString = `label_random-index-${Math.floor(Math.random() * 4)}`;
i18n('some_service', someUncomputebleString); // 正确

for (let i = 0; i < 4; i++) {
  i18n('some_service', `label_random-index-${i}`); // 正确
}
```

- 调用函数，向其传递可以转换为字面量的字符串

```ts
const labelColors = ['red', 'green', 'yelllow', 'white'] as const;
for (let i = 0; i < 4; i++) {
  i18n('some_service', `label_color-${labelColors[i]}`); // 正确
}

const labelWrongColors = ['red', 'not-existing', 'yelllow', 'white'] as const;
for (let i = 0; i < 4; i++) {
  i18n('some_service', `label_color-${labelWrongColors[i]}`); // 错误：类型为 '"not-existing"' 的参数不能赋值给类型为 ... 的参数
}
```

**为什么不支持通过类进行类型化**

此功能可能会破坏或使某些 i18n 场景复杂化，因此它被添加为功能扩展。如果证明有效，我们可能会将其添加到类中，以避免转换导出的函数。

**为什么内置方法可能会失败**

使用类型化内置函数方法实现嵌套结构的遍历和条件类型是一个足够复杂的任务。这就是为什么类型化仅在使用直接函数调用和最多到第三个参数的 `bind` 调用时才有效。

**为什么我不能直接生成 ts 文件来同时类型转换键值？**

您可以通过将结果类型传递给 I18NFn 来做到这一点。但是，对于大文件，ts 开始消耗大量资源，大大减慢 IDE 速度，但使用 JSON 文件则不会出现这种情况。

**为什么 I18N 类的其他方法没有被类型化？**

它们可以被类型化，如果您帮助实现它，我们将不胜感激。问题是其他方法仅在 1% 的情况下使用。
