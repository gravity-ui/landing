# @gravity-ui/i18n &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/i18n)](https://www.npmjs.com/package/@gravity-ui/i18n) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/i18n/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/i18n/actions/workflows/ci.yml?query=branch:main)

## I18N 工具

I18N 包中的工具旨在为 Gravity UI 服务提供国际化支持。

### 安装

`npm install --save @gravity-ui/i18n`

### API

#### constructor(options)

接受一个 `options` 对象，其中包含可选的 `logger`，用于记录库的警告信息。

##### logger

Logger 应该有一个名为 `log` 的方法，签名如下：

 * `message` - 要记录的消息字符串
 * `options` - 日志选项对象：
   * `level` - 记录消息的级别，始终为 `'info'`
   * `logger` - 记录库消息的目标
   * `extra` - 额外的选项对象，包含一个名为 `type` 的字符串，始终为 `i18n`

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
console.log(
    i18n.i18n('wizard', 'label_error-widget-no-access')
); // -> "Нет доступа к чарту"

i18n.setLang('en');
console.log(
    i18n.i18n('wizard', 'label_error-widget-no-access')
); // -> "No access to the chart"

// Keyset 允许更简便地检索翻译
const keyset = i18n.keyset('wizard');
console.log(
    keyset('label_error-widget-no-access')
); // -> "No access to the chart"


i18n.setLang('ru');
console.log(
    keyset('label_error-widget-no-access')
); // -> "Нет доступа к чарту"

// 检查 keyset 是否包含某个键
if (i18n.has('wizard', 'label_error-widget-no-access')) {
    i18n.i18n('wizard', 'label_error-widget-no-access')
}
```

### 模板

该库支持模板功能。模板变量用双大括号括起来，值作为键值对字典传递给 `i18n` 函数：

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

### 复数形式

复数形式可用于轻松本地化依赖于数值的键。当前库通过 [Intl.PluralRules API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) 使用 [CLDR 复数规则](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html)。

如果浏览器不支持 [Intl.Plural Rules API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules)，您可能需要 [polyfill](https://github.com/eemeli/intl-pluralrules)。

有 6 种复数形式（参见 [resolvedOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions)）：

- zero (即使语言不支持该形式，当 count = 0 时也会使用)
- one (单数)
- two (双数)
- few (少数)
- many (也用于分数，如果它们有单独的类别)
- other (所有语言都必需的形式 — 通用复数形式 — 如果语言只有一种形式时也会使用)

#### 包含复数键的 `keysets.json` 示例

```json
{
  "label_seconds": {
    "one": "{{count}} second is left",
    "other":"{{count}} seconds are left",
    "zero": "No time left"
  }
}
```

#### JS 中的用法

```js
i18n('label_seconds', {count: 1});  // => 1 second
i18n('label_seconds', {count: 3});  // => 3 seconds
i18n('label_seconds', {count: 7});  // => 7 seconds
i18n('label_seconds', {count: 10}); // => 10 seconds
i18n('label_seconds', {count: 0});  // => No time left
```

#### [已弃用] 旧的复数格式

旧格式将在 v2 中移除。

```json
{
  "label_seconds": ["{{count}} second is left", "{{count}} seconds are left", "{{count}} seconds are left", "No time left"]
}
```

复数键包含 4 个值，分别对应 `PluralForm` 枚举值。枚举值分别为：`One`、`Few`、`Many` 和 `None`。用于复数形式的模板变量名为 `count`。

#### [已弃用] 自定义复数形式

由于每种语言都有自己的复数形式规则，该库提供了一种方法来配置任何选定语言的规则。

配置函数接受一个对象，其中键是语言，值是复数形式函数。

复数形式函数接受一个数字和一个 `PluralForm` 枚举，并应根据提供的数字返回一个枚举值。

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

开箱即用的支持的两种语言是英语和俄语。

##### 英语

语言键：`en`。
* `One` 对应于 1 和 -1。
* `Few` 未使用。
* `Many` 对应于任何其他数字，除了 0。
* `None` 对应于 0。

##### 俄语

语言键：`ru`。
* `One` 对应于以 1 结尾的任何数字，除了 ±11。
* `Few` 对应于以 2、3 或 4 结尾的任何数字，除了 ±12、±13 和 ±14。
* `Many` 对应于任何其他数字，除了 0。
* `None` 对应于 0。

##### Default

默认使用英文规则集，适用于未配置复数形式函数的任何语言。

### 嵌套

<!--GITHUB_BLOCK-->
<span style="color:red">
<!--/GITHUB_BLOCK-->

<!--LANDING_BLOCK
<span style={{color: 'red'}}>
LANDING_BLOCK-->

最大嵌套深度受限 - 仅 1 层（用于词汇表）
</span>

嵌套允许您引用翻译中的其他键。这对于构建词汇表术语非常有用。

#### 基本用法

键

```json
{
  "nesting1": "1 $t{nesting2}",
  "nesting2": "2",
}
```

示例

```ts
i18n('nesting1'); // -> "1 2"
```

您可以通过在键名前加上 `keysetName:` 来引用其他键集中的键：
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

### 类型检查

要为 `i18nInstance.i18n` 函数添加类型检查，请按照以下步骤操作：

#### 准备工作

准备一个 JSON 键集文件，以便类型检查过程可以获取数据。在获取键集的地方，添加一个额外的 `data.json` 文件。为了减小文件大小并加快 IDE 解析速度，您可以将所有值替换为 `'str'`。

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

在您的 `ui/utils/i18n` 目录中（您在此处配置 i18n 并将其导出供所有界面使用），导入 `I18NFn` 类型函数以及您的 `Keysets`。在配置好 i18n 后，返回类型转换后的函数

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

#### 附加问题

**类型检查逻辑**

有几种类型检查的用例：

- 调用带有字符串字面量键的函数

```ts
i18n('common', 'label_subnet'); // ok
i18n('dcommon', 'label_dsubnet'); // error: Argument of type '"dcommon"' is not assignable to parameter of type ...
i18n('common', 'label_dsubnet'); // error: Argument of type '"label_dsubnet"' is not assignable to parameter of type ...
```

- 调用函数，传递无法转换为字面量的字符串（如果 ts 无法推断字符串类型，则不会抛出错误）

```ts
const someUncomputebleString = `label_random-index-${Math.floor(Math.random() * 4)}`;
i18n('some_service', someUncomputebleString); // ok

for (let i = 0; i < 4; i++) {
    i18n('some_service', `label_random-index-${i}`); // ok
}
```

- 调用函数，传递可以转换为字面量的字符串

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

**为什么不支持通过类进行类型检查**

此函数可能会破坏或复杂化某些 i18n 场景，因此它被添加为一种功能扩展。如果它被证明有效，我们可能会将其添加到类中，以避免对导出的函数进行类型转换。

**为什么内置方法可能会失败**

使用类型化的内置函数方法实现嵌套结构和条件类型的遍历是一项相当复杂的任务。因此，类型检查仅在直接函数调用和最多第三个参数的 `bind` 调用时有效。

**为什么我不能直接生成一个 ts 文件来类型化键值？**

您可以通过将结果类型传递给 `I18NFn` 来实现。但是，对于大型文件，ts 会开始消耗大量资源，极大地减慢 IDE 的速度，而对于 JSON 文件则不会出现这种情况。

**为什么 I18N 类的其他方法没有被类型化？**

它们可以被类型化，如果您能帮助实现，我们将不胜感激。原因是其他方法的使用率只有 1%。