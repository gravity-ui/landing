# 🌍 webpack-i18n-assets-plugin

Webpack 플러그인으로, 지역화 함수(i18n) 호출을 대상 텍스트로 대체합니다.

### 기능

- i18n 텍스트를 번들에 인라인 처리합니다 (최종 문자열에 매개변수를 치환하면서).
- 단일 빌드에서 모든 로케일에 대한 애셋을 생성합니다.
- 이 플러그인은 프로덕션 빌드에서만 작동합니다!
- 지역화 함수 인자에서 리터럴만 지원합니다 (템플릿 문자열 및 변수는 허용되지 않음).

## 📝 사용 방법

1. 패키지를 설치합니다:

    ```sh
    npm i -D @gravity-ui/webpack-i18n-assets-plugin
    ```

2. Webpack에 플러그인을 연결합니다 (예시: `@gravity-ui/app-builder`):

    Webpack 설정 예시 (`webpack.config.js`):

    ```js
    const {I18nAssetsPlugin} = require('@gravity-ui/webpack-i18n-assets-plugin');

    // 예시. 지역화된 텍스트가 포함된 모든 파일을 읽어 이 매핑에 저장합니다.
    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    module.exports = {
        output: {
            filename: '[name].[locale].js', // 파일 이름에 [locale]이 필수입니다.
        },

        plugins: [
            new I18nAssetsPlugin({
                locales
            })
        ]
    }
    ```

    각 로케일에 대한 애셋 매니페스트를 생성하려는 경우 예시 (`webpack.config.js`):

    ```js
    const {applyPluginToWebpackConfig} = require('@gravity-ui/webpack-i18n-assets-plugin');

    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    // 기존 webpack 설정
    const webpackConfig = {
        plugins: [ ... ],
        ...
    };

    // applyPluginToWebpackConfig를 사용하면 WebpackAssetsManifest 플러그인도 함께 연결되어
    // 각 로케일에 대한 애셋 매니페스트를 생성합니다.
    module.exports = applyPluginToWebpackConfig(webpackConfig, {locales});
    ```

    `@gravity-ui/app-builder`를 사용하는 경우 예시:

    ```typescript
    import type {ServiceConfig} from '@gravity-ui/app-builder';
    import {applyPluginToWebpackConfig, Options} from '@gravity-ui/webpack-i18n-assets-plugin';

    const locales = {
        en: {},
        ru: {},
        tr: {},
    };

    // applyPluginToWebpackConfig를 사용하면 WebpackAssetsManifest 플러그인도 함께 연결되어
    // 각 로케일에 대한 애셋 매니페스트를 생성합니다.
    const config: ServiceConfig = {
        client: {
            webpack: (originalConfig) => applyPluginToWebpackConfig(originalConfig, {locales}),
        },
    }
    ```

3. 서버에서 애셋 매니페스트로부터 동적 정적 파일을 구성합니다 (예시: `@gravity-ui/app-layout` 사용):

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

## 🔧 설정

기본적으로 이 플러그인은 [`@gravity-ui/i18n`](./frameworks/gravity-i18n.ts) 라이브러리와 함께 작동하도록 구성되어 있지만, 다른 i18n 라이브러리에 대한 처리를 사용자 정의할 수 있습니다.

### importResolver

타입: [`ImportResolver`](./src/types.ts#18)

가져오기(import)를 처리하고 어떤 가져오기가 지역화 함수로 간주되어야 하는지 표시하는 함수입니다 (이후, 표시된 식별자에 대한 호출은 replacer에 의해 처리됩니다).

시그니처는 webpack의 원래 [importSpecifier](https://webpack.js.org/api/parser/#importspecifier)와 유사합니다.

예시:

```typescript
const importResolver = (source: string, exportName: string, _identifierName: string, module: string) => {
    // 특정 경로를 기반으로 모듈 처리를 무시해야 하는 경우, 다음과 같이 처리할 수 있습니다.
    if (module.startsWith('src/units/compute')) {
        return undefined;
    }

    // 전역 함수의 기본 가져오기 처리
    // import i18n from 'ui/utils/i18n'
    if (source === 'ui/utils/i18n' && exportName === 'default') {
        return {
            resolved: true,
            keyset: undefined,
        };
    }

    // 헬퍼 함수의 가져오기 처리 및 해당 함수가 공통 키셋(네임스페이스)에 속함을 지정합니다.
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

타입: [`DeclarationResolver`](./src/types.ts#30)

변수 선언을 처리하고 어떤 변수가 지역화 함수로 간주되어야 하는지 표시하는 함수입니다 (이후, 표시된 식별자에 대한 호출은 replacer 함수에 의해 처리됩니다).

예시:

```typescript
import type {VariableDeclarator} from 'estree';

const declarationResolver = (declarator: VariableDeclarator, module: string) => {
    // 특정 경로를 기반으로 모듈 처리를 무시해야 하는 경우, 다음과 같이 처리할 수 있습니다.
    if (module.startsWith('src/units/compute')) {
        return undefined;
    }
```

```typescript
// const i18nK = i18n.bind(null, 'keyset');
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

Type: [`Replacer`](./src/types.ts#55)

지역화 함수 호출을 처리하고 문자열로 대체하는 함수입니다.

예시:

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

    // 인수가 하나인 호출 처리 i18nK('key')
    if (callNode.arguments.length === 1) {
        key = getStringValue(callNode.arguments[0]);
    } else if (callNode.arguments.length === 2) {
        // i18n('keyset', 'key') 또는 i18nK('key', {params}) 처리
        const [firstArg, secondArg] = callNode.arguments;

        // i18n('keyset', 'key') 호출
        if (secondArg.type === 'Literal') {
            keyset = getStringValue(firstArg);
            key = getStringValue(secondArg);
        } else {
            // i18nK('key', {params}) 호출
            key = getStringValue(firstArg);
            params = secondArg;
        }
    } else if (callNode.arguments.length === 3) {
        // i18n(namespace, key, params) 호출
        const [firstArg, secondArg, thirdArg] = callNode.arguments;
        keyset = getStringValue(firstArg);
        key = getStringValue(secondArg);
        params = thirdArg;
    } else {
        throw new Error('Incorrect count of arguments in localizer call');
    }

    // 함수 호출 인자에서 얻은 키를 반드시 처리해야 합니다.
    // 함수가 키셋과 관련이 있다면, 코드를 수정한 후 키셋을 키에 삽입할 수 있습니다 (이것은 플러그인 기능입니다).
    // ReplacerArgs에서 키를 사용하는 경우, 키셋 없이 제공되며 처리할 필요가 없습니다.
    const keyParts = key.split('::');
    if (keyParts.length === 2) {
        key = keyParts[1];
    }

    const value = this.resolveKey(key, keyset);

    // 필요에 따라 대체 옵션을 구현하세요.
    // 예를 들어, 키가 복수형이면 함수 호출을 반환하는 등

    return JSON.stringify(value);
};
```

### collectUnusedKeys

Type: [`Boolean`] (기본값 - false)

프로젝트에서 사용되지 않는 키를 수집하는 모드를 활성화합니다. 빌드 후 `unused-keys.json`이라는 파일이 생성됩니다.

정상적인 작동을 보장하기 위해 `Replacer` 함수에서는 항상 상세한 형식을 반환해야 합니다. 이는 대체 중에 자동으로 결정된 키와 키셋을 수정할 가능성이 있기 때문에 중요합니다.

## 프레임워크 설정

### Gravity i18n

[`@gravity-ui/i18n`](https://github.com/gravity-ui/i18n) 라이브러리의 지역화 함수 호출을 처리하는 함수입니다.

바로 사용할 수 있는 함수는 [`여기`](./src/frameworks/gravity-i18n.ts)에 있습니다.

함수가 작동할 코드 예시:

```typescript
// importResolver는 ui/utils/i18n 경로의 기본 가져오기만 고려합니다.
import i18n from 'ui/utils/i18n';

// declarationResolver는 i18n.bind 호출을 값으로 갖는 변수를 처리합니다.
const i18nK = i18n.bind(null, 'component.navigation');

// replacer는 importResolver 및 declarationResolver에 의해 발견된 식별자에 대한 호출을 처리합니다.
// 즉, 다음 호출이 처리됩니다:
i18nK('some_key');
i18nK('some_plural_key', { count: 123 });
i18nK('some_key_with_param', { someParam: 'hello' });
i18n('component.navigation', 'some_key');
i18n('component.navigation', 'some_plural_key', { count: 123 });
i18n('component.navigation', 'some_key_with_param', { someParam: 'hello' });
```

Replacer는 추가로 다음을 수행합니다:

1. 인수를 문자열로 인라인 처리합니다. 예를 들어, 키 값이 다음과 같다고 가정해 보겠습니다:

    ```typescript
    const keyset = {
        some_key: 'string value with {{param}}'
    };

    i18nK('some_key', {param: getSomeParam()})
    // 대체 후 다음과 같이 됩니다:
    `string value with ${getSomeParam()}`
    ```

2. 복수형 키에 대해 자체 호출 함수를 대체합니다:

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

    // 대체 후 다음과 같이 됩니다:
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

### [webpack-localize-assets-plugin](https://github.com/privatenumber/webpack-localize-assets-plugin)와 비교하면 어떤가요?

이 플러그인을 구현하기 위해 webpack-localize-assets-plugins 패키지의 아이디어를 사용했습니다 (패키지 제작자에게 깊이 감사드립니다!).

차이점은 다음과 같습니다.

- 네임스페이스 헬퍼(i18next의 useTranslation 등), 다른 모듈에서 가져온 함수 등 모든 종류의 국제화 함수와 함께 작업할 수 있는 더 편리한 API
- 소스 코드에 상대적인 소스 맵의 올바른 생성
- webpack 5만 지원합니다. webpack 4 지원은 제거되었습니다.