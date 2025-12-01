# ExpressKit

ExpressKit는 [NodeKit](https://github.com/gravity-ui/nodekit)과 통합되는 경량 [express.js](https://expressjs.com/) 래퍼로, 요청 로깅, 추적 지원, 비동기 컨트롤러 및 미들웨어, 상세한 라우트 설명과 같은 유용한 기능을 제공합니다.

설치:

```bash
npm install --save @gravity-ui/nodekit @gravity-ui/expresskit
```

기본 사용법:

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

### 기본 설정

CSRF 보호를 활성화하려면 설정에서 비밀 키를 구성하십시오.

```typescript
import type {AppConfig} from '@gravity-ui/nodekit';

const config: Partial<AppConfig> = {
  // ...
  appCsrfSecret: 'your-secret-key-here',
};

export default config;
```

### 설정 옵션

| 옵션              | 타입                 | 기본값                              | 설명                                                                                     |
| ------------------- | -------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `appCsrfSecret`     | `string \| string[]` | -                                    | **필수.** HMAC 토큰 생성을 위한 비밀 키. 여러 개의 비밀 키를 사용하여 키 로테이션이 가능합니다. |
| `appCsrfLifetime`   | `number`             | `2592000` (30일)                  | 토큰 유효 시간(초). 만료 없음으로 설정하려면 `0`으로 설정하십시오.                                        |
| `appCsrfHeaderName` | `string`             | `'x-csrf-token'`                     | 토큰 검증을 위한 HTTP 헤더 이름.                                                          |
| `appCsrfMethods`    | `string[]`           | `['POST', 'PUT', 'DELETE', 'PATCH']` | CSRF 검증이 필요한 HTTP 메서드.                                                      |

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

### 라우트별 설정

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

### 전역 설정

```typescript
const config: Partial<AppConfig> = {
  expressEnableCaching: true, // 기본적으로 캐싱 허용
};
```

### 라우트별 설정

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

- [요청 유효성 검사 및 응답 직렬화](https://github.com/gravity-ui/expresskit/blob/main/docs/VALIDATOR.md) - Zod 스키마를 사용하여 자동 요청 유효성 검사 및 응답 직렬화를 수행합니다.