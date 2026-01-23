# @gravity-ui/page-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/page-constructor)](https://www.npmjs.com/package/@gravity-ui/page-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/page-constructor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/page-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/page-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/page-constructor/)

## Page constructor

`Page-constructor`는 `JSON` 데이터를 기반으로 웹 페이지 또는 그 일부를 렌더링하는 라이브러리입니다 (향후 `YAML` 형식도 지원할 예정입니다).

페이지를 생성할 때 컴포넌트 기반 접근 방식이 사용됩니다. 페이지는 준비된 블록 세트를 사용하여 구축되며, 이 블록들은 어떤 순서로든 배치될 수 있습니다. 각 블록은 특정 타입과 입력 데이터 매개변수 세트를 가집니다.

입력 데이터 형식 및 사용 가능한 블록 목록은 [문서](https://preview.gravity-ui.com/page-constructor/?path=/docs/documentation-blocks--docs)를 참조하세요.

## 설치

```shell
npm install @gravity-ui/page-constructor
```

## 빠른 시작

먼저 React 프로젝트와 서버가 필요합니다. 예를 들어, Vite와 Express 서버를 사용하여 React 프로젝트를 생성하거나, 클라이언트와 서버 측을 모두 갖춘 Next.js 애플리케이션을 생성할 수 있습니다.

필요한 종속성을 설치합니다:

```shell
npm install @gravity-ui/page-constructor @diplodoc/transform @gravity-ui/uikit
```

페이지에 `Page Constructor`를 삽입합니다. 올바르게 작동하려면 `PageConstructorProvider`로 감싸야 합니다:

```tsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';
import '@gravity-ui/page-constructor/styles/styles.scss';

const App = () => {
  const content = {
    blocks: [
      {
        type: 'header-block',
        title: 'Hello world',
        background: {color: '#f0f0f0'},
        description:
          '**Congratulations!** Have you built a [page-constructor](https://github.com/gravity-ui/page-constructor) into your website',
      },
    ],
  };

  return (
    <PageConstructorProvider>
      <PageConstructor content={content} />
    </PageConstructorProvider>
  );
};

export default App;
```

이것은 가장 간단한 연결 예시입니다. YFM 마크업이 작동하려면 서버에서 콘텐츠를 처리하고 클라이언트에서 받아야 합니다.

서버가 별도의 애플리케이션인 경우, page-constructor를 설치해야 합니다:

```shell
npm install @gravity-ui/page-constructor
```

모든 기본 블록에서 YFM을 처리하려면 `contentTransformer`를 호출하고 콘텐츠와 옵션을 전달합니다:

```ts
const express = require('express');
const app = express();
const {contentTransformer} = require('@gravity-ui/page-constructor/server');

const content = {
  blocks: [
    {
      type: 'header-block',
      title: 'Hello world',
      background: {color: '#f0f0f0'},
      description:
        '**Congratulations!** Have you built a [page-constructor](https://github.com/gravity-ui/page-constructor) into your website',
    },
  ],
};

app.get('/content', (req, res) => {
  res.send({content: contentTransformer({content, options: {lang: 'en'}})});
});

app.listen(3000);
```

클라이언트에서는 콘텐츠를 받기 위해 엔드포인트 호출을 추가합니다:

```tsx
import {PageConstructor, PageConstructorProvider} from '@gravity-ui/page-constructor';
import '@gravity-ui/page-constructor/styles/styles.scss';
import {useEffect, useState} from 'react';

const App = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/content').then((r) => r.json());
      setContent(response.content);
    })();
  }, []);

  return (
    <PageConstructorProvider>
      <PageConstructor content={content} />
    </PageConstructorProvider>
  );
};

export default App;
```

### 준비된 템플릿

새 프로젝트를 시작하려면 저희가 준비한 [Next.js 기반의 준비된 템플릿](https://github.com/gravity-ui/page-constructor-website-template)을 사용할 수 있습니다.

### 정적 사이트 빌더

[Page Constructor Builder](https://github.com/gravity-ui/page-constructor-builder) - @gravity-ui/page-constructor를 사용하여 YAML 구성에서 정적 페이지를 빌드하는 명령줄 유틸리티입니다.

## 문서

### 매개변수

```typescript
interface PageConstructorProps {
  content: PageContent; // 블록 데이터를 JSON 형식으로 제공합니다.
  shouldRenderBlock?: ShouldRenderBlock; // 각 블록을 렌더링할 때 호출되며, 표시 조건을 설정할 수 있는 함수입니다.
  custom?: Custom; // 사용자 정의 블록 (참조: `Customization`).
  renderMenu?: () => React.ReactNode; // 페이지 메뉴와 네비게이션을 렌더링하는 함수입니다 (기본 메뉴 버전 렌더링을 추가할 예정입니다).
  navigation?: NavigationData; // 네비게이션 컴포넌트 사용을 위한 JSON 형식의 네비게이션 데이터입니다.
  isBranded?: boolean; // true인 경우, https://gravity-ui.com/로 연결되는 푸터를 추가합니다. 더 많은 사용자 정의를 위해 BrandFooter 컴포넌트를 사용해 보세요.
}

interface PageConstructorProviderProps {
  isMobile?: boolean; // 모바일 모드에서 코드가 실행되고 있음을 나타내는 플래그입니다.
  locale?: LocaleContextProps; // 언어 및 도메인에 대한 정보입니다 (링크 생성 및 형식 지정 시 사용됩니다).
  location?: Location; // 브라우저 또는 라우터 히스토리 API, 페이지 URL입니다.
  analytics?: AnalyticsContextProps; // 분석 이벤트 처리를 위한 함수입니다.

  ssrConfig?: SSR; // 서버 측에서 코드가 실행되고 있음을 나타내는 플래그입니다.
  theme?: 'light' | 'dark'; // 페이지를 렌더링할 테마입니다.
  mapsContext?: MapsContextType; // 지도 매개변수: apikey, type, scriptSrc, nonce
}

export interface PageContent extends Animatable {
  blocks: Block[];
  menu?: Menu;
  background?: MediaProps;
}

interface Custom {
  blocks?: CustomItems;
  subBlocks?: CustomItems;
  headers?: CustomItems;
  loadable?: LoadableConfig;
}

type ShouldRenderBlock = (block: Block, blockKey: string) => Boolean;

interface Location {
  history?: History;
  search?: string;
  hash?: string;
  pathname?: string;
  hostname?: string;
}

interface Locale {
  lang?: Lang;
  tld?: string;
}

interface SSR {
  isServer?: boolean;
}

interface NavigationData {
  logo: NavigationLogo;
  header: HeaderData;
}

interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}

interface HeaderData {
  leftItems: NavigationItem[];
  rightItems?: NavigationItem[];
}
```

```typescript
interface NavigationLogo {
  icon: ImageProps;
  text?: string;
  url?: string;
}
```

### 서버 유틸리티

이 패키지는 콘텐츠를 변환하기 위한 다양한 서버 유틸리티를 제공합니다.

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

내부적으로 Yandex Flavored Markdown을 HTML로 변환하는 `diplodoc/transfrom` 패키지가 사용되므로, 이 패키지도 peer dependencies에 포함됩니다.

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

더 많은 유틸리티는 이 [섹션](https://github.com/gravity-ui/page-constructor/tree/main/src/text-transform)에서 확인할 수 있습니다.

### 서버 유틸리티 및 트랜스포머에 대한 상세 문서

서버 유틸리티 사용에 대한 포괄적인 가이드, 상세 설명 및 고급 사용 사례는 [서버 유틸리티 사용에 대한 추가 챕터](./docs/data-preparation.md)를 방문하십시오.

### 사용자 정의 블록

페이지 생성기는 앱에서 사용자 정의한 블록을 사용할 수 있도록 합니다. 블록은 일반적인 React 컴포넌트입니다.

사용자 정의 블록을 생성기에 전달하려면 다음 단계를 따르세요.

1. 앱에서 블록을 생성합니다.

2. 코드에서 블록 유형(문자열)을 키로, 가져온 블록 컴포넌트를 값으로 하는 객체를 생성합니다.

3. 생성한 객체를 `PageConstructor` 컴포넌트의 `custom.blocks`, `custom.headers` 또는 `custom.subBlocks` 매개변수에 전달합니다. (`custom.headers`는 일반 콘텐츠 위에 별도로 렌더링될 헤더 블록을 지정합니다.)

4. 이제 입력 데이터(`content` 매개변수)에서 블록 유형과 데이터를 지정하여 생성한 블록을 사용할 수 있습니다.

사용자 정의 블록을 생성할 때 믹스인 및 생성기 스타일 변수를 사용하려면 파일에 다음을 가져오세요.

```css
@import '~@gravity-ui/page-constructor/styles/styles.scss';
```

기본 글꼴을 사용하려면 파일에 다음을 가져오세요.

```css
@import '~@gravity-ui/page-constructor/styles/fonts.scss';
```

### 로드 가능한 블록

때로는 블록이 로드될 데이터를 기반으로 자체를 렌더링해야 하는 경우가 있습니다. 이 경우 로드 가능한 블록이 사용됩니다.

사용자 정의 `loadable` 블록을 추가하려면 `PageConstructor`에 `custom.loadable` 속성을 전달하세요. 이 속성은 컴포넌트에 대한 데이터 소스 이름(문자열)을 키로, 객체를 값으로 합니다.

```typescript
export interface LoadableConfigItem {
  fetch: FetchLoadableData; // 데이터 로딩 메서드
  component: React.ComponentType; // 로드된 데이터를 전달할 블록
}

type FetchLoadableData<TData = any> = (blockKey: string) => Promise<TData>;
```

### 그리드

페이지 생성기는 `bootstrap` 그리드와 이를 기반으로 하는 React 컴포넌트 구현을 사용하며, 프로젝트에서 (생성기와 별도로) 사용할 수 있습니다.

사용 예시:

```jsx
import {Grid, Row, Col} from '@gravity-ui/page-constructor';

const Page = ({children}: PropsWithChildren<PageProps>) => (
  <Grid>
    <Row>
      <Col sizes={{lg: 4, sm: 6, all: 12}}>{children}</Col>
    </Row>
  </Grid>
);
```

### 네비게이션

페이지 네비게이션은 생성기와 별도로 사용할 수도 있습니다.

```jsx
import {Navigation} from '@gravity-ui/page-constructor';

const Page= ({data, logo}: React.PropsWithChildren<PageProps>) => <Navigation data={data} logo={logo} />;
```

### 블록

각 블록은 원자적인 최상위 컴포넌트입니다. 이들은 `src/units/constructor/blocks` 디렉토리에 저장됩니다.

### 하위 블록

하위 블록은 블록의 `children` 속성에서 사용할 수 있는 컴포넌트입니다. 설정에서 하위 블록의 자식 컴포넌트 목록이 지정됩니다. 렌더링되면 이 하위 블록은 `children`으로 블록에 전달됩니다.

### `page-constructor`에 새 블록 추가 방법

1. `src/blocks` 또는 `src/sub-blocks` 디렉토리에 블록 또는 하위 블록 코드를 담은 폴더를 생성합니다.

2. `src/models/constructor-items/blocks.ts` 또는 `src/models/constructor-items/sub-blocks.ts` 파일에서 기존 블록과 유사하게 `BlockType` 또는 `SubBlockType` 열거형에 블록 또는 하위 블록 이름을 추가하고 해당 속성을 설명합니다.

3. `src/blocks/index.ts` 파일에 블록을, `src/sub-blocks/index.ts` 파일에 하위 블록을 내보냅니다.

4. `src/constructor-items.ts` 파일의 매핑에 새 컴포넌트 또는 블록을 추가합니다.

5. 새 블록에 대한 유효성 검사기를 추가합니다.

   - 블록 또는 하위 블록 디렉토리에 `schema.ts` 파일을 추가합니다. 이 파일에서 [`json-schema`](http://json-schema.org/) 형식으로 컴포넌트의 매개변수 유효성 검사기를 설명합니다.
   - `schema/validators/blocks.ts` 또는 `schema/validators/sub-blocks.ts` 파일에 내보냅니다.
   - `schema/index.ts` 파일의 `enum` 또는 `selectCases`에 추가합니다.

6. 블록 디렉토리에 입력 매개변수에 대한 설명을 담은 `README.md` 파일을 추가합니다.
7. 블록 디렉토리에 `__stories__` 폴더에 스토리북 데모를 추가합니다. 스토리의 모든 데모 콘텐츠는 스토리 디렉토리의 `data.json`에 배치해야 합니다. 일반 `Story`는 블록 props의 타입을 받아야 합니다. 그렇지 않으면 스토리북에 잘못된 블록 props가 표시됩니다.
8. `src/editor/data/templates/` 폴더에 블록 데이터 템플릿을 추가합니다. 파일 이름은 블록 유형과 일치해야 합니다.
9. (선택 사항) `src/editor/data/previews/` 폴더에 블록 미리보기 아이콘을 추가합니다. 파일 이름은 블록 유형과 일치해야 합니다.

### 테마

`PageConstructor`를 사용하면 테마를 적용할 수 있습니다. 앱에서 선택한 테마에 따라 개별 블록 속성에 대해 다른 값을 설정할 수 있습니다.

블록 속성에 테마를 추가하려면 다음 단계를 따르세요.

1. `models/blocks.ts` 파일에서 해당 블록 속성의 타입을 `ThemeSupporting<T>` 제네릭을 사용하여 정의합니다. 여기서 `T`는 속성의 타입입니다.

2. 블록의 `react` 컴포넌트가 있는 파일에서 `getThemedValue` 및 `useTheme` 훅을 사용하여 테마가 적용된 속성 값을 가져옵니다. (예는 `MediaBlock.tsx` 블록에서 확인할 수 있습니다.)

3. 블록의 `schema.ts` 파일에서 해당 속성을 `withTheme`으로 감싸서 속성 유효성 검사기에 테마 지원을 추가합니다.

### i18n

`page-constructor`는 `uikit-based` 라이브러리이며, uikit의 `i18n` 인스턴스를 사용합니다. 국제화를 설정하려면 uikit의 `configure`를 사용하면 됩니다.

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

### 지도

지도를 사용하려면 `PageConstructorProvider`의 `mapContext` 필드에 지도 유형, `scriptSrc` 및 `apiKey`를 입력하세요.

프로젝트 루트의 `.env.development` 파일에서 개발 모드에 대한 환경 변수를 정의할 수 있습니다.
`STORYBOOK_GMAP_API_KEY` - Google 지도 API 키

### 분석

#### 초기화

분석을 사용하려면 생성기에 핸들러를 전달하세요. 핸들러는 프로젝트 측에서 생성되어야 합니다. 핸들러는 `default` 및 `custom` 이벤트 객체를 받게 됩니다. 전달된 핸들러는 버튼, 링크, 네비게이션 및 컨트롤 클릭 시 트리거됩니다. 모든 이벤트 처리에 하나의 핸들러가 사용되므로 핸들러를 생성할 때 다양한 이벤트를 처리하는 방법에 주의하세요. 복잡한 로직을 구축하는 데 도움이 되는 미리 정의된 필드가 있습니다.

자동으로 구성된 이벤트를 트리거하려면 생성기에 `autoEvents: true`를 전달하세요.

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

프로젝트에 필요한 이벤트 유형을 구성할 수 있습니다.

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

#### 예약된 이벤트 유형

자동으로 구성된 이벤트를 표시하는 데 사용되는 몇 가지 미리 정의된 이벤트 유형이 있습니다. 예를 들어, 이러한 유형을 사용하여 기본 이벤트를 필터링할 수 있습니다.

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

Vite의 경우 `vite-plugin-dynamic-import` 플러그인을 설치하고 동적 가져오기가 작동하도록 설정을 구성해야 합니다.

## 릴리스 흐름

일반적으로 두 가지 유형의 커밋을 사용합니다.

1. `fix`: 코드베이스의 버그를 수정하는 커밋입니다 (Semantic Versioning의 PATCH와 일치합니다).
2. `feat`: 코드베이스에 새로운 기능을 도입하는 커밋입니다 (MINOR와 일치합니다).
3. `BREAKING CHANGE`: `BREAKING CHANGE:` 푸터를 포함하거나 타입/스코프 뒤에 `!`를 붙이는 커밋은 API 변경을 도입합니다 (MAJOR와 일치합니다). `BREAKING CHANGE`는 모든 유형의 커밋에 포함될 수 있습니다.
4. 릴리스 패키지 버전을 수동으로 설정하려면 커밋 메시지에 `Release-As: <version>`을 추가해야 합니다. 예:

```bash
git commit -m 'chore: bump release

Release-As: 1.2.3'
```

모든 정보는 [여기](https://www.conventionalcommits.org/en/v1.0.0/)에서 확인할 수 있습니다.

코드 소유자의 풀 리퀘스트 승인을 받고 모든 검사를 통과하면 다음 단계를 따르세요.

1. 다른 기여자의 변경 사항이 포함된 릴리스 풀 리퀘스트(예: `chore(main): release 0.0.0`)가 있는지 확인합니다. 있다면 왜 병합되지 않았는지 확인합니다. 기여자가 공유 버전을 릴리스하는 데 동의하면 다음 단계로 진행합니다. 그렇지 않으면 해당 기여자에게 자신의 버전을 릴리스하도록 요청한 후 다음 단계로 진행합니다.
2. PR을 스쿼시하고 병합합니다 (Github-Actions로 새 버전을 릴리스하는 것이 중요합니다).
3. 로봇이 패키지의 새 버전과 CHANGELOG.md에 대한 변경 사항을 포함하는 PR을 생성할 때까지 기다립니다. [Actions 탭](https://github.com/gravity-ui/page-constructor/actions)에서 이 과정을 볼 수 있습니다.
4. CHANGELOG.md에서 변경 사항을 확인하고 로봇의 PR을 승인합니다.
5. PR을 스쿼시하고 병합합니다. 릴리스 과정은 [Actions 탭](https://github.com/gravity-ui/page-constructor/actions)에서 볼 수 있습니다.

### 알파 버전 릴리스

자신의 브랜치에서 패키지의 알파 버전을 릴리스하고 싶다면 수동으로 할 수 있습니다.

1. Actions 탭으로 이동합니다.
2. 왼쪽 페이지에서 "Release alpha version" 워크플로를 선택합니다.
3. 오른쪽에서 "Run workflow" 버튼을 볼 수 있습니다. 여기서 브랜치를 선택할 수 있습니다.
4. 수동 버전 입력 필드도 볼 수 있습니다. 자신의 브랜치에서 처음 알파 버전을 릴리스하는 경우 여기에 아무것도 설정하지 마세요. 첫 릴리스 후에는 브랜치가 곧 만료될 수 있으므로 `package.json`을 변경하지 않기 때문에 새 버전을 수동으로 설정해야 합니다. 수동 버전에는 `alpha` 접두사를 사용해야 오류가 발생하지 않습니다.
5. "Run workflow"를 누르고 작업이 완료될 때까지 기다립니다. 원하는 만큼 버전을 릴리스할 수 있지만 남용하지 말고 정말 필요할 때만 릴리스하세요. 다른 경우에는 [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack)을 사용하세요.

### 베타-메이저 버전 릴리스

새로운 메이저 버전을 릴리스하는 경우 안정 버전 전에 베타 버전이 필요할 수 있습니다. 다음 단계를 따르세요.

1. `beta` 브랜치를 생성하거나 업데이트합니다.
2. 변경 사항을 추가합니다.
3. 새 베타 버전을 준비하면 빈 커밋으로 수동 릴리스합니다 (또는 마지막 커밋에 다음 푸터를 포함할 수 있습니다).

```bash
git commit -m 'fix: last commit

Release-As: 3.0.0-beta.0' --allow-empty
```

4. 릴리스 로봇이 CHANGELOG.md를 업데이트하고 패키지 버전을 올린 새 PR을 `beta` 브랜치에 생성합니다.
5. 원하는 만큼 반복할 수 있습니다. 마지막 메이저 버전을 베타 태그 없이 릴리스할 준비가 되면 `beta` 브랜치에서 `main` 브랜치로 PR을 생성해야 합니다. 패키지 버전이 베타 태그를 포함하는 것은 정상입니다. 로봇은 이를 인지하고 올바르게 처리합니다. `3.0.0-beta.0`은 `3.0.0`이 됩니다.

### 이전 메이저 버전 릴리스 흐름

메인 브랜치에 커밋한 후 이전 메이저 버전에 새 버전을 릴리스하려면 다음 단계를 따르세요.

1. 필요한 브랜치를 업데이트합니다. 이전 메이저 릴리스 브랜치 이름은 다음과 같습니다.
   1. `version-1.x.x/fixes` - 메이저 1.x.x용
   2. `version-2.x.x` - 메이저 2.x.x용
2. 이전 메이저 릴리스 브랜치에서 새 브랜치를 체크아웃합니다.
3. `main` 브랜치의 커밋을 체리픽합니다.
4. PR을 생성하고 승인을 받은 후 이전 메이저 릴리스 브랜치로 병합합니다.
5. PR을 스쿼시하고 병합합니다 (Github-Actions로 새 버전을 릴리스하는 것이 중요합니다).
6. 로봇이 패키지의 새 버전과 CHANGELOG.md에 대한 변경 사항을 포함하는 PR을 생성할 때까지 기다립니다. [Actions 탭](https://github.com/gravity-ui/page-constructor/actions)에서 이 과정을 볼 수 있습니다.
7. CHANGELOG.md에서 변경 사항을 확인하고 로봇의 PR을 승인합니다.
8. PR을 스쿼시하고 병합합니다. 릴리스 과정은 [Actions 탭](https://github.com/gravity-ui/page-constructor/actions)에서 볼 수 있습니다.

## 페이지 생성기 에디터

에디터는 실시간 미리보기와 함께 페이지 콘텐츠 관리를 위한 사용자 인터페이스를 제공합니다.

사용 방법:

```tsx
import {Editor} from '@gravity-ui/page-constructor/editor';

interface MyAppEditorProps {
  initialContent: PageContent;
  transformContent: ContentTransformer;
  onChange: (content: PageContent) => void;
}

export const MyAppEditor = ({initialContent, onChange, transformContent}: MyAppEditorProps) => (
  <Editor content={initialContent} onChange={onChange} transformContent={transformContent} />
);
```

## 메모리 뱅크

이 프로젝트는 포괄적인 **메모리 뱅크(Memory Bank)**를 포함합니다. 이 메모리 뱅크는 프로젝트의 아키텍처, 컴포넌트 및 사용 패턴에 대한 자세한 정보를 제공하는 마크다운 문서 모음입니다. 메모리 뱅크는 특히 AI 에이전트와 함께 작업할 때 유용하며, 다음과 같은 구조화된 정보를 포함합니다.

- **프로젝트 개요**: 핵심 요구 사항, 목표 및 컨텍스트
- **컴포넌트 문서**: 모든 컴포넌트에 대한 자세한 사용 가이드
- **시스템 아키텍처**: 기술 패턴 및 설계 결정
- **개발 진행 상황**: 현재 상태 및 구현 세부 정보

### 메모리 뱅크 사용하기

메모리 뱅크는 `memory-bank/` 디렉토리에 있으며, 다른 문서처럼 읽을 수 있는 일반 마크다운 파일로 구성됩니다.

- `projectbrief.md` - 핵심 요구 사항이 담긴 기초 문서
- `productContext.md` - 프로젝트 목적 및 사용자 경험 목표
- `systemPatterns.md` - 아키텍처 및 기술 결정
- `techContext.md` - 기술, 설정 및 제약 사항
- `activeContext.md` - 현재 작업 초점 및 최근 변경 사항
- `progress.md` - 구현 상태 및 알려진 문제
- `usage/` - 컴포넌트별 사용 문서
- `storybookComponents.md` - Storybook 통합 세부 정보

### AI 에이전트용

이 프로젝트에서 AI 에이전트와 함께 작업할 때, 메모리 뱅크는 에이전트가 다음을 이해하는 데 도움이 되는 포괄적인 지식 기반 역할을 합니다.

- 프로젝트 구조 및 패턴
- 컴포넌트 API 및 사용 예시
- 개발 워크플로우 및 모범 사례
- 현재 구현 상태 및 다음 단계

AI 에이전트는 이러한 파일을 읽고 프로젝트 컨텍스트를 빠르게 파악하여 코드 변경 및 구현에 대해 더 나은 결정을 내릴 수 있습니다.

## 테스트

포괄적인 문서는 제공된 [링크](./test-utils/docs/README.md)에서 확인할 수 있습니다.