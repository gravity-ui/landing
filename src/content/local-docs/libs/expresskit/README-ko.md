# ExpressKit

ExpressKit는 [express.js](https://expressjs.com/)를 경량화하여 [NodeKit](https://github.com/gravity-ui/nodekit)과 통합하고, 요청 로깅, 추적 지원, 비동기 컨트롤러 및 미들웨어, 상세한 라우트 설명과 같은 유용한 기능을 제공하는 래퍼입니다.

## 설치

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

## 사용법

```typescript
import {ExpressKit} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

const nodekit = new NodeKit();

const app = new ExpressKit(nodekit, {
  'GET /': (req, res) => {
    res.send('Hello World!');
  },
});

app.run();
```

## 자체 원격 측정

기본적으로 자체 원격 측정은 원본 요청 URL을 전송합니다. 쿼리 문자열이 크거나 고유성이 높은 애플리케이션은 통계 전송 전에 쿼리 매개변수를 제거할 수 있습니다.

```typescript
const config: Partial<AppConfig> = {
  appTelemetryChEnableSelfStats: true,
  appTelemetryChSelfStatsStripQueryParams: true,
};
```

## CSP

`config.ts`

```typescript
import type {AppConfig} from '@gravity-ui/nodekit';
import {csp} from '@gravity-ui/expresskit';

const config: Partial<AppConfig> = {
    expressCspEnable: true,
    expressCspPresets: ({getDefaultPresets}) => {
        return getDefaultPresets({defaultNone: true}).concat([
            csp.inline(),
            {csp.directives.REPORT_TO: 'my-report-group'},
        ]);
    },
    expressCspReportTo: [
        {
            group: 'my-report-group',
            max_age: 30 * 60,
            endpoints: [{ url: 'https://cspreport.com/send'}],
            include_subdomains: true,
        }
    ]
}

export default config;
```

## CSRF 보호

ExpressKit는 애플리케이션을 악의적인 교차 출처 요청으로부터 보호하기 위해 내장된 교차 사이트 요청 위조(CSRF) 보호 기능을 제공합니다. CSRF 미들웨어는 상태 변경 HTTP 요청에 대한 토큰을 자동으로 생성하고 검증합니다.

### 기본 구성

CSRF 보호를 활성화하려면 구성에서 비밀 키를 설정하십시오.

```typescript
import type {AppConfig} from '@gravity-ui/nodekit';

const config: Partial<AppConfig> = {
  // ...
  appCsrfSecret: 'your-secret-key-here',
};

export default config;
```

### 구성 옵션

| 옵션              | 유형                 | 기본값                              | 설명                                                                                     |
| ------------------- | -------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `appCsrfSecret`     | `string \| string[]` | -                                    | **필수.** HMAC 토큰 생성을 위한 비밀 키입니다. 여러 개의 비밀 키를 사용하여 키 로테이션이 가능합니다. |
| `appCsrfLifetime`   | `number`             | `2592000` (30일)                  | 토큰 수명(초). 만료 없음은 `0`으로 설정합니다.                                        |
| `appCsrfHeaderName` | `string`             | `'x-csrf-token'`                     | 토큰 검증을 위한 HTTP 헤더 이름입니다.                                                          |
| `appCsrfMethods`    | `string[]`           | `['POST', 'PUT', 'DELETE', 'PATCH']` | CSRF 검증이 필요한 HTTP 메서드입니다.                                                      |

### 사용법

구성 후에는 지정된 HTTP 메서드를 사용하는 모든 라우트에 CSRF 보호가 자동으로 적용됩니다.

```typescript
import {ExpressKit, AuthPolicy} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

const nodekit = new NodeKit({
  config: {
    appCsrfSecret: 'your-secret-key',
    appAuthPolicy: AuthPolicy.required,

    // 미들웨어가 originalContext에 사용자 ID를 설정하는지 확인하십시오. 그렇지 않으면 CSRF 토큰 생성에 실패합니다.
    appAuthHandler: yourAuthHandler,
  },
});

const app = new ExpressKit(nodekit, {
  'GET /api/form': (req, res) => {
    // 토큰은 요청 컨텍스트에서 사용할 수 있습니다.
    res.json({csrfToken: req.originalContext.get('csrfToken')});
  },

  'POST /api/submit': (req, res) => {
    // 이 라우트는 CSRF 토큰을 자동으로 검증합니다.
    res.json({message: 'Form submitted successfully'});
  },
});
```

### 라우트별 구성

특정 라우트에 대해 CSRF 보호를 비활성화할 수 있습니다.

```typescript
const app = new ExpressKit(nodekit, {
  'POST /api/webhook': {
    authPolicy: AuthPolicy.required,
    disableCsrf: true, // 이 라우트에 대해 CSRF 비활성화
    handler: (req, res) => {
      res.json({message: 'Webhook processed'});
    },
  },
});
```

## 캐싱 제어

기본적으로 ExpressKit는 모든 응답에 `no-cache` 헤더를 설정합니다. 이 동작은 전역적으로 또는 라우트별로 제어할 수 있습니다.

### 전역 구성

```typescript
const config: Partial<AppConfig> = {
  expressEnableCaching: true, // 기본적으로 캐싱 허용
};
```

### 라우트별 구성

```typescript
const app = new ExpressKit(nodekit, {
  'GET /api/cached': {
    enableCaching: true, // 이 라우트에 대해 캐싱 허용
    handler: (req, res) => res.json({data: 'cacheable'}),
  },
  'GET /api/fresh': {
    enableCaching: false, // no-cache 강제 적용
    handler: (req, res) => res.json({data: 'always fresh'}),
  },
});
```

라우트 레벨의 `enableCaching`은 전역 설정을 재정의합니다. 캐싱 상태는 `req.routeInfo.enableCaching`에서 사용할 수 있습니다.

## 유효성 검사 및 응답 직렬화

- [요청 유효성 검사 및 응답 직렬화](https://github.com/gravity-ui/expresskit/blob/main/docs/VALIDATOR.md) - Zod 스키마를 사용하여 요청 유효성 검사 및 응답 직렬화를 자동화합니다.

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하십시오.

## AI 에이전트용

NodeKit 위에 구축된 얇은 Express.js 래퍼로, 요청 로깅, 추적, 비동기 컨트롤러/미들웨어 및 선언적 라우트 맵을 추가합니다. Express 미들웨어와 NodeKit을 수동으로 연결하는 대신 NodeKit 로깅/원격 측정 스파인을 가진 HTTP 서버가 필요할 때 사용하세요.

### 언제 사용해야 할까요?

- NodeKit의 로깅, 추적 및 구성을 공유해야 하는 Express HTTP 서비스를 구축할 때.
- 선언적 라우트 (`{'GET /path': handler}`)와 각 라우트별 인증, CSRF 및 캐싱 정책을 사용할 때.
- 요청 컨텍스트와 통합된 내장 보안 기능(CSRF 토큰, CSP 헤더)이 필요할 때.

### 언제 사용하지 않아야 할까요?

- HTTP 계층 없이 기본 로깅/원격 측정/구성을 위해 [`@gravity-ui/nodekit`](https://github.com/gravity-ui/nodekit)을 직접 사용하세요. ExpressKit은 이에 의존하지만 HTTP 부분은 필요하지 않을 수 있습니다.
- Express가 아닌 프레임워크(Fastify, Koa, NestJS)의 경우 ExpressKit은 Express에 특화되어 있으므로 해당 프레임워크의 자체 도구를 사용하세요.

### 일반적인 함정

- **`NodeKit` 인스턴스 없이 `ExpressKit` 구성** - 생성자는 첫 번째 인수로 NodeKit 인스턴스를 요구합니다. 먼저 `new NodeKit()`을 생성하세요.
- **`app.get`/`app.post` 환각** - 라우트는 Express 스타일의 메서드 체이닝이 아닌 `new ExpressKit(nodekit, routes)`에 전달되는 `'METHOD /path': handler` 맵으로 선언됩니다.
- **`app.run()` 호출 누락** - 라우트는 생성 시 등록되지만 서버는 `app.run()`을 호출할 때만 시작됩니다.
- **CSRF가 인증 컨텍스트를 예상하는 경우** - CSRF 토큰 생성은 원본 컨텍스트에 사용자 ID를 설정하기 위해 `appAuthHandler`가 필요합니다. 그렇지 않으면 토큰 생성이 실패합니다.
- **컨텍스트를 우회하는 Express 스타일 미들웨어 사용** - 비동기 컨트롤러/미들웨어는 추적을 유지하기 위해 ExpressKit의 컨텍스트를 사용해야 합니다. 원시 Express 핸들러는 이를 삭제합니다.

## AI 에이전트용 문서

설치된 버전에 대한 에이전트 읽기 가능 문서는 `node_modules/@gravity-ui/expresskit/dist/docs/INDEX.md`에 있습니다.