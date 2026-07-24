# NodeKit

NodeKit은 Node.js 앱, 스크립트 및 라이브러리를 위한 간단한 툴킷입니다. 로깅, 텔레메트리, 구성 및 오류 처리를 위한 기능을 제공하여 다양한 프로젝트에서 익숙한 기반을 마련할 수 있습니다.

## 설치

```bash
npm install --save @gravity-ui/nodekit
```

## 시작하기

프로젝트에 종속성을 추가하세요:

```bash
npm install --save @gravity-ui/nodekit
```

그런 다음 애플리케이션에서 NodeKit을 가져와 초기화하세요:

```typescript
import {NodeKit} from '@gravity-ui/nodekit';

const nodeKit = new NodeKit();
nodekit.ctx.log('App is ready');
```

## 문서

추가 문서는 `docs/` 디렉토리를 참조하세요:

- [`docs/configuration.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/configuration.md)는 NodeKit 자체와 NodeKit 기반 애플리케이션을 구성하는 방법을 설명합니다.
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md)는 NodeKit 컨텍스트, 로깅 및 추적 개념을 설명합니다.
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md)에는 NodeKit이 애플리케이션에 제공하는 유용한 사용자 정의 오류 클래스에 대한 설명이 포함되어 있습니다.
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md)는 NodeKit과 함께 제공되는 추가 도우미 함수 목록을 제공합니다.

## 기여

### 시작하기

NodeKit 저장소와 예제 애플리케이션을 복제하세요:

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

NodeKit을 npm에 연결하고 컴파일러를 시작하세요:

```bash
cd nodekit && npm link && npm run dev
```

그런 다음 다른 터미널에서 예제로 이동하여 관심 있는 것을 열고 NodeKit을 연결한 다음 앱을 시작하세요:

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

이 시점에서 NodeKit과 데모 앱 모두에서 변경하고 실시간으로 결과를 확인할 수 있습니다.

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하세요.

## AI 에이전트용

Gravity UI 백엔드 전반에 걸쳐 공유되는 Node.js 기반 툴킷(로깅, 텔레메트리, 타입화된 오류, 구성, 요청 컨텍스트)입니다. HTTP 계층을 추가하기 전에 일관된 앱 골격을 갖추기 위해 사용하세요. 로깅/오류/구성 파이핑을 직접 조립하는 대신 사용하세요.

### 언제 사용해야 할까요?

- 공유 로깅, 텔레메트리(추적) 및 타입화된 `AppError`를 원하는 모든 Node.js 서비스/스크립트.
- 비동기 경계를 넘어 요청 범위의 컨텍스트(로그/추적)를 제공합니다.
- 여러 서비스가 동일한 생태계에서 일관되게 작동하도록 구성을 중앙 집중화합니다.

### 언제 사용하지 않아야 할까요?

- HTTP 라우트, 미들웨어 또는 서버를 노출하려면 [`@gravity-ui/expresskit`](https://github.com/gravity-ui/expresskit)를 사용하세요. NodeKit을 기반으로 하며 Express/HTTP 계층을 추가합니다.
- 로깅/텔레메트리 요구 사항이 없는 독립형 단일 파일 스크립트의 경우 일반 Node API가 전체 NodeKit 컨텍스트 시스템보다 가볍습니다.

### 일반적인 함정

- **`import {Logger}` / `logger` 환각** — 로깅은 NodeKit 컨텍스트를 통해 액세스됩니다: `new NodeKit()` 다음 `nodekit.ctx.log(...)`, 독립적인 로거 내보내기가 아닙니다.
- **NodeKit을 반복적으로 인스턴스화** — 앱당 하나의 `NodeKit` 인스턴스를 생성하고 해당 `ctx`를 공유하세요. 여러 인스턴스를 생성하면 로깅/텔레메트리 구성이 분할됩니다.
- **일반 `Error`를 던지는 것** — 오류 코드와 텔레메트리가 일관되게 캡처되도록 번들로 제공된 `AppError`( `docs/app-error.md` 참조)를 사용하세요.
- **구성 초기화를 건너뛰는 것** — NodeKit은 생성 시 구성을 읽습니다. 기본값을 가정하기 전에 `docs/configuration.md`를 검토하세요.

## AI 에이전트용 문서

설치된 버전에 대한 에이전트 읽기 가능 문서는 `node_modules/@gravity-ui/nodekit/dist/docs/INDEX.md`에 있습니다.