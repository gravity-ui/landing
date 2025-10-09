# @gravity-ui/i18n &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/i18n)](https://www.npmjs.com/package/@gravity-ui/i18n) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/i18n/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/i18n/actions/workflows/ci.yml?query=branch:main)

## I18N 유틸리티

I18N 패키지의 유틸리티는 Gravity UI 서비스의 국제화를 위해 설계되었습니다.

### 설치

`npm install --save @gravity-ui/i18n`

### API

#### constructor(options)

라이브러리 경고 로깅에 사용될 `logger`를 포함하는 `options` 객체를 받습니다.

##### logger

Logger는 다음 시그니처를 가진 명시적인 `log` 메서드를 가져야 합니다.

 * `message` - 로깅될 메시지 문자열
 * `options` - 로깅 옵션 객체:
   * `level` - 메시지 로깅 레벨, 항상 `'info'`
   * `logger` - 라이브러리 메시지를 로깅할 대상
   * `extra` - 추가 옵션 객체, 단일 `type` 문자열 포함, 항상 `i18n`

### 사용 예시

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

// Keyset를 사용하면 번역을 더 간단하게 가져올 수 있습니다.
const keyset = i18n.keyset('wizard');
console.log(
    keyset('label_error-widget-no-access')
); // -> "No access to the chart"


i18n.setLang('ru');
console.log(
    keyset('label_error-widget-no-access')
); // -> "Нет доступа к чарту"

// Keyset에 키가 있는지 확인
if (i18n.has('wizard', 'label_error-widget-no-access')) {
    i18n.i18n('wizard', 'label_error-widget-no-access')
}
```

### 템플릿

이 라이브러리는 템플릿을 지원합니다. 템플릿 변수는 이중 중괄호로 묶이며, 값은 키-값 쌍으로 i18n 함수에 전달됩니다.

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

### 복수형 처리

복수형 처리는 숫자 값에 따라 달라지는 키의 현지화를 쉽게 할 수 있도록 지원합니다. 현재 라이브러리는 [Intl.PluralRules API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules)를 통해 [CLDR 복수형 규칙](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/language_plural_rules.html)을 사용합니다.

브라우저에서 [Intl.Plural Rules API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules)를 사용할 수 없는 경우 [폴리필](https://github.com/eemeli/intl-pluralrules)이 필요할 수 있습니다.

복수형은 6가지 형태를 가집니다 ([resolvedOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions) 참조):

- zero (count = 0일 때도 사용되며, 해당 언어에서 지원되지 않는 형태일지라도)
- one (단수)
- two (쌍수)
- few (소수)
- many (분수에도 별도의 클래스가 있는 경우 사용)
- other (모든 언어에 필수적인 형태 — 일반 복수형 — 해당 언어에 단일 형태만 있는 경우에도 사용)

#### 복수형 키가 있는 `keysets.json` 예시

```json
{
  "label_seconds": {
    "one": "{{count}} second is left",
    "other":"{{count}} seconds are left",
    "zero": "No time left"
  }
}
```

#### JS에서의 사용법

```js
i18n('label_seconds', {count: 1});  // => 1 second
i18n('label_seconds', {count: 3});  // => 3 seconds
i18n('label_seconds', {count: 7});  // => 7 seconds
i18n('label_seconds', {count: 10}); // => 10 seconds
i18n('label_seconds', {count: 0});  // => No time left
```

#### [Deprecated] 이전 복수형 형식

이전 형식은 v2에서 제거될 예정입니다.

```json
{
  "label_seconds": ["{{count}} second is left", "{{count}} seconds are left", "{{count}} seconds are left", "No time left"]
}
```

복수형 키는 4개의 값을 포함하며, 각 값은 `PluralForm` 열거형 값에 해당합니다. 열거형 값은 각각 `One`, `Few`, `Many`, `None`입니다. 복수형 처리를 위한 템플릿 변수 이름은 `count`입니다.

#### [Deprecated] 사용자 정의 복수형 처리

모든 언어는 고유한 복수형 처리 방식을 가지고 있으므로, 이 라이브러리는 선택한 언어에 대한 규칙을 구성하는 메서드를 제공합니다.

구성 함수는 언어를 키로, 복수형 처리 함수를 값으로 하는 객체를 받습니다.

복수형 처리 함수는 숫자와 `PluralForm` 열거형을 인자로 받아, 제공된 숫자에 따라 열거형 값 중 하나를 반환해야 합니다.

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

#### [Deprecated] 제공된 복수형 규칙

기본적으로 지원되는 두 가지 언어는 영어와 러시아어입니다.

##### 영어

언어 키: `en`.
* `One`은 1과 -1에 해당합니다.
* `Few`는 사용되지 않습니다.
* `Many`는 0을 제외한 다른 모든 숫자에 해당합니다.
* `None`은 0에 해당합니다.

##### 러시아어

언어 키: `ru`.
* `One`은 ±11을 제외한 1로 끝나는 모든 숫자에 해당합니다.
* `Few`는 ±12, ±13, ±14를 제외한 2, 3 또는 4로 끝나는 모든 숫자에 해당합니다.
* `Many`는 0을 제외한 다른 모든 숫자에 해당합니다.
* `None`은 0에 해당합니다.

```html
<!-- 언어 옵션 -->
<a href="/en/README.md">English</a>
<a href="/ko/README.md">Korean</a>
```

##### 기본

설정된 복수형 함수가 없는 모든 언어의 경우 기본적으로 영어 규칙 세트가 사용됩니다.

### 중첩

<!--GITHUB_BLOCK-->
<span style="color:red">
<!--/GITHUB_BLOCK-->

<!--LANDING_BLOCK
<span style={{color: 'red'}}>
LANDING_BLOCK-->

최대 중첩 깊이 제한 - 1단계만 가능 (용어집의 경우)
</span>

중첩을 사용하면 다른 키를 번역에서 참조할 수 있습니다. 용어집 용어를 만드는 데 유용할 수 있습니다.

#### 기본

키

```json
{
  "nesting1": "1 $t{nesting2}",
  "nesting2": "2"
}
```

샘플

```ts
i18n('nesting1'); // -> "1 2"
```

다른 키셋의 키를 참조하려면 키셋 이름을 앞에 붙입니다:
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

### 타이핑

`i18nInstance.i18n` 함수에 타이핑을 적용하려면 다음 단계를 따르세요.

#### 준비

타이핑 절차가 데이터를 가져올 수 있도록 JSON 키셋 파일을 준비합니다. 키셋을 가져오는 곳에 추가 `data.json` 파일 생성을 추가합니다. 파일 크기를 줄이고 IDE 파싱 속도를 높이려면 모든 값을 `'str'`로 바꿀 수 있습니다.

```ts
async function createFiles(keysets: Record<Lang, LangKeysets>) {
    await mkdirp(DEST_PATH);

    const createFilePromises = Object.keys(keysets).map((lang) => {
        const keysetsJSON = JSON.stringify(keysets[lang as Lang], null, 4);
        const content = umdTemplate(keysetsJSON);
        const hash = getContentHash(content);
        const filePath = path.resolve(DEST_PATH, `${lang}.${hash.slice(0, 8)}.js`);

        // <새 줄>
        let typesPromise;

        if (lang === 'ru') {
            const keyset = keysets[lang as Lang];
            Object.keys(keyset).forEach((keysetName) => {
                const keyPhrases = keyset[keysetName];
                Object.keys(keyPhrases).forEach((keyName) => {
                    // 객체 변경!
                    keyPhrases[keyName] = 'str';
                });
            });

            const JSONForTypes = JSON.stringify(keyset, null, 4);
            typesPromise = writeFile(path.resolve(DEST_PATH, `data.json`), JSONForTypes, 'utf-8');
        }
        // </새 줄>

        return Promise.all([typesPromise, writeFile(filePath, content, 'utf-8')]);
    });

    await Promise.all(createFilePromises);
}
```

#### 연결

`ui/utils/i18n` 디렉토리(i18n을 구성하고 모든 인터페이스에서 사용할 수 있도록 내보내는 곳)에서 `Keysets`와 함께 타이핑 함수 `I18NFn`을 가져옵니다. i18n이 구성된 후 캐스팅된 함수를 반환합니다.

```ts
import {I18NFn} from '@gravity-ui/i18n';
// 이것은 타이핑된 가져오기여야 합니다!
import type Keysets from '../../../dist/public/build/i18n/data.json';

const i18nInstance = new I18N();
type TypedI18n = I18NFn<typeof Keysets>;
// ...
export const ci18n = (i18nInstance.i18n as TypedI18n).bind(i18nInstance, 'common');
export const cui18n = (i18nInstance.i18n as TypedI18n).bind(i18nInstance, 'common.units');
export const i18n = i18nInstance.i18n.bind(i18nInstance) as TypedI18n;
```

#### 추가 문제

**타이핑 로직**

몇 가지 타이핑 사용 사례가 있습니다:

- 문자열 리터럴로 전달된 키로 함수 호출

```ts
i18n('common', 'label_subnet'); // ok
i18n('dcommon', 'label_dsubnet'); // 오류: '"dcommon"' 타입의 인수는 '"..."' 타입의 매개변수에 할당할 수 없습니다.
i18n('common', 'label_dsubnet'); // 오류: '"label_dsubnet"' 타입의 인수는 '"..."' 타입의 매개변수에 할당할 수 없습니다.
```

- 리터럴로 변환할 수 없는 문자열을 전달하여 함수 호출 (ts가 문자열 타입을 파생할 수 없으면 오류가 발생하지 않음)

```ts
const someUncomputebleString = `label_random-index-${Math.floor(Math.random() * 4)}`;
i18n('some_service', someUncomputebleString); // ok

for (let i = 0; i < 4; i++) {
    i18n('some_service', `label_random-index-${i}`); // ok
}
```

- 리터럴로 변환할 수 있는 문자열을 전달하여 함수 호출

```ts
const labelColors = ['red', 'green', 'yelllow', 'white'] as const;
for (let i = 0; i < 4; i++) {
    i18n('some_service', `label_color-${labelColors[i]}`); // ok
}

const labelWrongColors = ['red', 'not-existing', 'yelllow', 'white'] as const;
for (let i = 0; i < 4; i++) {
    i18n('some_service', `label_color-${labelWrongColors[i]}`); // 오류: '"not-existing"' 타입의 인수는 '"..."' 타입의 매개변수에 할당할 수 없습니다.
}
```

**클래스를 통한 타이핑이 지원되지 않는 이유**

이 함수는 일부 i18n 시나리오를 방해하거나 복잡하게 만들 수 있으므로 기능적 확장으로 추가되었습니다. 효과적임이 입증되면 내보낸 함수를 캐스팅하지 않도록 클래스에 추가할 가능성이 높습니다.

**내장 메서드가 실패할 수 있는 이유**

타이핑된 내장 함수 메서드를 사용하여 중첩 구조 및 조건부 타입을 순회하는 것은 상당히 복잡한 작업입니다. 그렇기 때문에 타이핑은 직접 함수 호출 및 세 번째 인수에 대한 `bind` 호출을 사용할 때만 작동합니다.

**키 값도 타이핑할 수 있도록 ts 파일을 직접 생성할 수 없는 이유는 무엇인가요?**

I18NFn에 결과 타입을 전달하여 그렇게 할 수 있습니다. 그러나 파일 크기가 큰 경우 ts는 엄청난 양의 리소스를 소비하기 시작하여 IDE 속도를 크게 늦추지만, JSON 파일의 경우에는 그렇지 않습니다.

**I18N 클래스의 다른 메서드는 왜 타이핑되지 않았나요?**

타이핑이 가능하며 구현에 도움을 주시면 감사하겠습니다. 다른 메서드는 1%의 경우에만 사용됩니다.