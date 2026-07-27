# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Page constructor

`Page-constructor`는 `JSON` 데이터를 기반으로 웹 페이지 또는 그 일부를 렌더링하는 라이브러리입니다 (`YAML` 형식 지원은 추후 추가될 예정입니다).

페이지를 생성할 때 컴포넌트 기반 접근 방식이 사용됩니다. 페이지는 준비된 블록 세트를 사용하여 구축되며, 이 블록들은 어떤 순서로든 배치될 수 있습니다. 각 블록은 특정 타입과 입력 데이터 매개변수 세트를 가집니다.

입력 데이터 형식 및 사용 가능한 블록 목록은 [문서](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs)를 참조하세요.

## 설치

```shell
npm install @gravity-ui/page-constructor
```

## 빠른 시작

먼저 React

```typescript
interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}
```

### 서버 유틸리티

이 패키지는 콘텐츠를 변환하기 위한 서버 유틸리티 세트를 제공합니다.

```ts
const {fullTransform} = require('@gravity-ui/page-constructor/server');

const {html} = fullTransform(content, {
  lang,
  extractTitle: true,
  allowHTML: true,
  path: __dirname,
  plugins,
});
```

내부적으로 Yandex Flavored Markdown을 HTML로 변환하는 패키지인 `diplodoc/transfrom`을 사용하므로, 이 또한 peer dependencies에 포함됩니다.

필요한 곳에서 유용한 유틸리티를 사용할 수도 있습니다. 예를 들어 사용자 정의 컴포넌트에서 사용할 수 있습니다.

```ts
const {
  typografToText,
  typografToHTML,
  yfmTransformer,
} = require('@gravity-ui/page-constructor/server');

const post = {
  title: typografToText(title, lang),
  content: typografToHTML(content, lang),
  description: yfmTransformer(lang, description, {plugins}),
};
```

더 많은 유틸리티는 이 [섹션](https://github.com/gravity-ui/page-constructor/tree/main/src/text-transform)에서 찾을 수 있습니다.

### 서버 유틸리티 및 트랜스포머에 대한 자세한 문서

서버 유틸리티 사용에 대한 포괄적인 가이드, 상세 설명 및 고급 사용 사례는 [서버 유틸리티 사용에 대한 추가 챕터](./docs/data-preparation.md)를 방문하십시오.

### 사용자 정의 블록

페이지 생성기는 앱에서 사용자 정의한 블록을 사용할 수 있도록 합니다. 블록은 일반적인 React 컴포넌트입니다.

사용자 정의 블록을 생성기에 전달하려면 다음 단계를 따르세요.

1. 앱에서 블록을 생성합니다.

2. 코드에서 블록 유형(문자열)을 키로, 가져온 블록 컴포넌트를 값으로 하는 객체를 생성합니다.

3. 생성한 객체를 `PageConstructor` 컴포넌트의 `custom.blocks`, `custom.headers` 또는 `custom.subBlocks` 매개변수에 전달합니다. (`custom.headers`는 일반 콘텐츠 위에 별도로 렌더링될 블록 헤더를 지정합니다.)

4. 이제 입력 데이터(`content` 매개변수)에서 블록 유형과 데이터를 지정하여 생성한 블록을 사용할 수 있습니다.

사용자 정의 블록을 생성할 때 믹스인 및 생성기 스타일 변수를 사용하려면 파일에 다음을 가져옵니다.

```css
@import '~@gravity-ui/page-constructor/styles/styles.scss';
```

기본 글꼴을 사용하려면 파일에 다음을 가져옵니다.

```css
@import '~@gravity-ui/page-constructor/styles/fonts.scss';
```

### 로드 가능한 블록

때로는 블록이 로드될 데이터를 기반으로 자체를 렌더링해야 하는 경우가 있습니다. 이 경우 로드 가능한 블록이 사용됩니다.

사용자 정의 `loadable` 블록을 추가하려면 `PageConstructor`에 데이터 소스 이름(문자열)을 키로, 객체를 값으로 하는 `custom.loadable` 속성을 전달합니다.

```typescript
export interface LoadableConfigItem {

```ts
function sendEvents(events: MyEventType []) {
  ...
}

<PageConstructorProvider
    ...

    analytics={{sendEvents, autoEvents: true}}

    ...
/>
```

이벤트 객체는 `name`이라는 필수 필드 하나만 가집니다. 복잡한 로직 관리에 도움이 되는 미리 정의된 필드도 있습니다. 예를 들어, `counter.include`는 여러 분석 시스템이 프로젝트에 사용될 때 특정 카운터에 이벤트를 보내는 데 도움이 될 수 있습니다.

```ts
type AnalyticsEvent<T = {}> = T & {
  name: string;
  type?: string;
  counters?: AnalyticsCounters;
  context?: string;
};
```

프로젝트에 필요한 이벤트 타입을 구성할 수 있습니다.

```ts
type MyEventType = AnalyticsEvent<{
  [key: string]?: string; // 'string' 타입만 지원됩니다.
}>;
```

#### 카운터 선택기

어떤 분석 시스템으로 이벤트를 보낼지 이벤트별로 구성할 수 있습니다.

```ts
type AnalyticsCounters = {
  include?: string[]; // 적용될 분석 카운터 ID 배열
  exclude?: string[]; // 적용되지 않을 분석 카운터 ID 배열
};
```

#### context 매개변수

이벤트가 발생하는 프로젝트 내 위치를 정의하기 위해 `context` 값을 전달합니다.

프로젝트 요구사항에 맞는 로직을 사용하거나 아래 선택기를 사용하세요.

```ts
// analyticsHandler.ts
if (isCounterAllowed(counterName, counters)) {
  analyticsCounter.reachGoal(counterName, name, parameters);
}
```

#### 예약된 이벤트 타입

자동으로 구성된 이벤트를 표시하는 데 사용되는 몇 가지 미리 정의된 이벤트 타입이 있습니다. 예를 들어, 이 타입들을 사용하여 기본 이벤트를 필터링할 수 있습니다.

```ts
enum PredefinedEventTypes {
  Default = 'default-event', // 모든 버튼 클릭 시 발생하는 기본 이벤트
  Play = 'play', // React 플레이어 이벤트
  Stop = 'stop', // React 플레이어 이벤트
}
```

## 개발

```bash
npm ci
npm run dev
```

#### Vite 관련 참고 사항

```ts
import react from '@vitejs/plugin-react-swc';
import dynamicImport from 'vite-plugin-dynamic-import';

export default defineConfig({
  plugins: [
    react(),
    dynamicImport({
      filter: (id) => id.includes('/node_modules/@gravity-ui/page-constructor'),
    }),
  ],
});
```

Vite의 경우 `vite-plugin-dynamic-import` 플러그인을 설치하고 동적 임포트가 작동하도록 설정을 구성해야 합니다.

## 릴리스 흐름

일반적으로 두 가지 유형의 커밋을 사용합니다.

1. `fix`: `fix` 타입의 커밋은 코드베이스의 버그를 수정합니다 (Semantic Versioning의 PATCH와 일치합니다).
2. `feat`: `feat` 타입의 커밋은 코드베이스에 새로운 기능을 도입합니다 (MINOR와 일치합니다).
3. `BREAKING CHANGE`: `BREAKING CHANGE:` 푸터를 포함하거나 타입/스코프 뒤에 `!`를 추가하는 커밋은 API 변경을 도입합니다 (MAJOR와 일치합니다). `BREAKING CHANGE`는 모든 타입의 커밋에 포함될 수 있습니다.
4. 릴리스 패키지 버전을 수동으로 설정하려면 커밋 메시지에 `Release-As: <version>`을 추가해야 합니다. 예:

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

모든 정보는 [여기](https://www.conventionalcommits.org/en/v1.0.0/)에서 확인할 수 있습니다.

코드 소유자의 풀 리퀘스트 승인을 받고 모든 검사를 통과하면 다음 단계를 따르세요.

1. 다른 기여자의 변경 사항이 포함된 로봇의 릴리스 풀 리퀘스트(`chore(main): release 0.0.0`와 같은 형식)가 있는지 확인합니다. 있다면 왜 병합되지 않았는지 확인합니다. 기여자가 공유 버전을 릴리스하는 데 동의하면 다음 단계로 진행합니다. 그렇지 않으면 해당 기여자에게 자신의 버전을 릴리스하도록 요청한 후 다음 단계로 진행합니다.
2. PR을 스쿼시 및 병합합니다 (Github-Actions를 사용하여 새 버전을 릴리스하는 것이 중요합니다).
3. 로봇이 패키지의 새 버전과 CHANGELOG.md에 대한 변경 사항을 포함하는 PR을 생성할 때까지 기다립니다. [Actions 탭](https://github.com/gravity-ui/page-constructor/actions)에서 이 과정을 볼 수 있습니다.
4. CHANGELOG.md에서 변경 사항을 확인하고 로봇의 PR을 승인합니다.
5. PR을 스쿼시

이 프로젝트는 포괄적인 **메모리 뱅크**를 포함합니다. 이 메모리 뱅크는 프로젝트의 아키텍처, 구성 요소 및 사용 패턴에 대한 자세한 정보를 제공하는 Markdown 문서 모음입니다. 메모리 뱅크는 특히 AI 에이전트와 함께 작업할 때 유용하며, 다음과 같은 구조화된 정보를 포함합니다.

- **프로젝트 개요**: 핵심 요구 사항, 목표 및 컨텍스트
- **구성 요소 문서**: 모든 구성 요소에 대한 자세한 사용 가이드
- **시스템 아키텍처**: 기술 패턴 및 설계 결정
- **개발 진행 상황**: 현재 상태 및 구현 세부 정보

### 메모리 뱅크 사용하기

메모리 뱅크는 `memory-bank/` 디렉토리에 있으며 다른 문서와 마찬가지로 읽을 수 있는 일반 Markdown 파일로 구성됩니다.

- `projectbrief.md` - 핵심 요구 사항이 포함된 기본 문서
- `productContext.md` - 프로젝트 목적 및 사용자 경험 목표
- `systemPatterns.md` - 아키텍처 및 기술 결정
- `techContext.md` - 기술, 설정 및 제약 조건
- `activeContext.md` - 현재 작업 초점 및 최근 변경 사항
- `progress.md` - 구현 상태 및 알려진 문제
- `usage/` - 구성 요소별 사용 문서
- `storybookComponents.md` - Storybook 통합 세부 정보

## 테스트

포괄적인 문서는 제공된 [링크](./test-utils/docs/README.md)에서 확인할 수 있습니다.

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하십시오.

## AI 에이전트용

선언적 JSON/YAML 구성을 사용하여 전체 웹 페이지 또는 페이지 섹션을 렌더링하는 라이브러리로, 준비된 순서 지정 가능한 블록 세트를 사용합니다. 마케팅/랜딩 페이지를 구축하는 데 사용하며 일반 애플리케이션 UI에는 사용하지 마십시오.

### 언제 사용해야 할까요?

- 데이터 기반 페이지: `PageConstructorProvider`로 래핑된 `PageConstructor`를 사용하여 타입화된 블록의 `content` 구성을 렌더링합니다.
- 사전 제작된 블록(헤더, 미디어, 카드 등)으로 구성된 마케팅, 랜딩 및 문서 페이지.
- `@gravity-ui/page-constructor/server` 유틸리티(`contentTransformer`, `fullTransform`)를 통한 서버 측 YFM 처리.
- 반응형 그리드(`Grid`/`Row`/`Col`) 또는 `Navigation` 구성 요소만 독립적으로 재사용.

### 언제 사용하지 않아야 할까요?

- 일반 애플리케이션 UI(버튼, 양식, 모달) — [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit)을 사용하십시오.
- Markdown/YFM 콘텐츠 편집 — [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor)을 사용하십시오.
- 앱 탐색 셸(측면 헤더) — [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation)을 사용하십시오. 이 패키지의 `Navigation`은 페이지 수준의 상단 탐색입니다.

### 일반적인 함정

- **`PageConstructor`는 `PageConstructorProvider`로 래핑되어야 합니다.** 이를 래핑하지 않고 렌더링하면 컨텍스트(로케일, 테마, SSR, 분석)가 깨집니다.
- **`content` 속성은 `{blocks: [...]}` 형태의 `content`입니다.** 각 블록 객체는 알려진 블록과 일치하는 `type`과 해당 데이터 필드가 필요합니다. `data`/`config` 속성은 없습니다.
- **블록 텍스트의 YFM은 서버 처리가 필요합니다.** Markdown과 유사한 필드는 `@gravity-ui/page-constructor/server`의 `contentTransformer`/`fullTransform`을 통해 콘텐츠를 실행하지 않으면 일반 텍스트로 렌더링됩니다. `@diplodoc/transform`은 필수 피어 종속성입니다.
- **SCSS 스타일을 가져옵니다.** `@gravity-ui/page-constructor/styles/styles.scss`(CSS가 아닌 SCSS)를 추가하십시오. 사용자 정의 블록은 동일한 파일을 가져와 믹스인/변수를 재사용합니다.
- **Vite에는 `vite-plugin-dynamic-import`가 필요합니다.** 이를 사용하지 않으면 Vite에서 동적 블록 가져오기가 실패합니다.

## AI 에이전트용 문서

설치된 버전에 대한 에이전트 읽기 가능 문서는 `node_modules/@gravity-ui/page-constructor/build/docs/INDEX.md`에 있습니다.