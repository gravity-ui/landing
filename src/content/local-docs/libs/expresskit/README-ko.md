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