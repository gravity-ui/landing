# @gravity-ui/dynamic-forms &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/dynamic-forms)](https://www.npmjs.com/package/@gravity-ui/dynamic-forms) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/dynamic-forms/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/dynamic-forms/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/dynamic-forms/)

**English** · [Русский](README-ru.md)

JSON Schema와 `react-final-form` 기반의 폼 렌더러입니다. 단일 스키마로 값과 렌더링 방식을 모두 설명합니다. 유효성 검사 규칙은 표준 Draft-07 키워드를 사용하며, 노드가 어떤 것으로 그려지는지는 `nodeParameters` 확장을 통해 결정됩니다.

- 진입점: `@gravity-ui/dynamic-forms`
- 상태: **안정적인 API**.
- 두 가지 계층: `core` (헤드리스 엔진) 및 `kit` (`@gravity-ui/uikit` 기반의 즉시 사용 가능한 엔티티 및 레이아웃).

이전의 DynamicField / DynamicView API는 `@gravity-ui/dynamic-forms/deprecated`에서 사용할 수 있습니다. `/unstable`에서 가져오던 SchemaRenderer 임포트는 패키지 루트로 이동합니다. 전체 전환 과정은 [마이그레이션 가이드](MIGRATION.md)를 참조하고, 이전 API 문서는 [docs/deprecated](docs/deprecated)에서 확인하세요.

## 설치

```shell
npm install --save-dev @gravity-ui/dynamic-forms
```

## 목차

- [사용 방법](docs/en/how-to-use.md) — 빠른 시작, `name` prop, 모드, 선택 방법.
- [API 레퍼런스](docs/en/api.md) — 컴포넌트, 훅, prop, 상수, 유틸리티, `kit` 내보내기, 타입.
- [스키마](docs/en/schema.md) — `nodeParameters`, 플래그, 주석, 키워드, `stringNumber`, `$ref`.
- [런타임](docs/en/runtime.md) — 노드 생명주기, 값 강제 변환, 유효성 검사, 오류, 이벤트, 패치.
- [Kit](docs/en/kit.md) — 레이아웃, 엔티티 카탈로그, 서비스 컴포넌트, 스타일.
- [확장](docs/en/extension.md) — 사용자 정의 엔티티, 레이아웃, 유효성 검사기, 설정, 독립형 렌더러.
- [마이그레이션](MIGRATION.md) — 이전 메인 API 또는 `/unstable`에서 이전, Spec 변환, `/deprecated`를 통한 호환성.
- [주의사항 및 제한 사항](docs/en/limitations.md) — 코드 검증된 불일치, 제한 사항 및 버그.

## 이것은 무엇인가

`src/lib`는 단일 JSON 스키마에서 폼과 값 개요를 모두 구축하는 폼 엔진입니다. `core` 계층은 자체 컨트롤이 없습니다. 렌더링되는 모든 것은 설정에서 가져옵니다. 유효성 검사는 `json-schema-library` (Draft-07)와 사용자 정의 `stringNumber` 키워드를 통해 실행됩니다. `kit` 계층은 즉시 사용 가능한 레지스트리를 제공합니다. 6가지 노드 유형에 걸쳐 30개의 엔티티 키, 7가지 레이아웃 키, 서비스 컴포넌트, `useExpanded` 훅, 오류 텍스트 및 이전 Spec 형식의 `specToJsonSchema` 변환기가 포함됩니다.

## 작동 방식

1. **스키마 및 설정.** `useSchemaRenderer`는 `schema`를 복제하고 유효성 검사기가 있는 서비스 필드에 상태를 저장합니다.
2. **노드.** `SchemaRendererNode`는 포인터를 통해 하위 스키마를 가져와 `final-form` 필드를 등록하고 `entity`와 `layout`을 선택합니다.
3. **변경.** `validateFields`를 통한 값 편집은 서비스 필드 유효성 검사기만 트리거합니다.
4. **오류.** 유효성 검사기는 오류를 이름별로 `srState.errors`에 퍼뜨립니다. 메시지가 변경된 노드는 다시 렌더링됩니다.
5. **명령형.** `useSchemaRendererTools`는 스키마를 패치하고 외부 오류를 추가하여 유효성 검사를 다시 시작합니다.

## 종속성

| 패키지                                      | 역할     | 이유                                                               |
| :------------------------------------------ | :------- | :---------------------------------------------------------------- |
| `react` / `react-dom` / `react-is`          | peer     | 18, 19. 렌더링.                                                |
| `final-form` / `react-final-form`           | peer     | 폼, 필드, 제출, 구독.                              |
| `@gravity-ui/uikit`                         | peer     | 버전 8. Kit 컨트롤: TextInput, Select, Checkbox 등.        |
| `json-schema-library`                       | runtime  | Draft-07 유효성 검사 및 사용자 정의 `stringNumber` 키워드.        |
| `decimal.js`                                | runtime  | `stringNumber` 및 `*_with_scale`에서의 숫자 비교 및 스케일.  |
| `@gravity-ui/date-components`, `date-utils` | runtime  | `DateInput` 및 `DateValue`.                                      |
| `@gravity-ui/icons`                         | runtime  | Alert, Label, TextContent의 `iconName`.                          |
| `@gravity-ui/i18n`                          | runtime  | 오류 텍스트의 현지화.                                      |
| `@bem-react/classname`, `lodash`, `uuid`    | runtime  | 클래스, 유틸리티, 키.                                   |
| Monaco                                      | external | 번들링되지 않음. `userContext.MonacoEditor`를 통해 전달됩니다. |

## I18N

특정 컴포넌트에는 두 가지 언어(기본값 `en` 및 `ru`)로 제공되는 텍스트 토큰(단어 및 구문)이 포함되어 있습니다. 언어를 설정하려면 `configure` 함수를 사용하세요.

```js
// index.js

import {configure, Lang} from '@gravity-ui/dynamic-forms';

configure({lang: Lang.Ru});
```

## 개발

개발 서버를 스토리북과 함께 시작하려면 다음 명령을 실행하세요.

```shell
npm ci
npm run dev
```