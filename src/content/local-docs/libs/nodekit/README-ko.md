# NodeKit

NodeKit은 Node.js 앱, 스크립트 및 라이브러리를 위한 간단한 도구 모음입니다. 로깅, 원격 측정, 구성 및 오류 처리를 위한 기능을 제공하여 다양한 프로젝트에서 익숙한 기반을 마련할 수 있습니다.

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

- [`docs/configuration.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/configuration.md)는 nodekit 자체와 nodekit 기반 애플리케이션을 구성하는 방법을 설명합니다.
- [`docs/contexts.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/contexts.md)는 NodeKit 컨텍스트, 로깅 및 추적 개념을 설명합니다.
- [`docs/app-error.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/app-error.md)는 NodeKit이 애플리케이션에 제공하는 유용한 사용자 정의 오류 클래스에 대한 설명을 포함합니다.
- [`docs/utils.md`](https://github.com/gravity-ui/nodekit/blob/main/docs/utils.md)는 NodeKit과 함께 제공되는 추가 도우미 함수 목록을 제공합니다.

## 기여하기

### 시작하기

NodeKit 리포지토리와 예제 애플리케이션을 복제하세요:

```bash
git clone git@github.com:gravity-ui/nodekit
git clone git@github.com:gravity-ui/nodekit-examples
```

nodekit을 npm에 연결하고 컴파일러를 시작하세요:

```bash
cd nodekit && npm link && npm run dev
```

그런 다음 다른 터미널에서 예제로 이동하여 관심 있는 것을 열고 nodekit을 연결한 다음 앱을 시작하세요:

```bash
cd nodekit-examples/basic-app && npm i && npm link @gravity-ui/nodekit
npm run dev
```

이 시점에서 NodeKit과 데모 앱 모두에서 변경 사항을 만들고 실시간으로 결과를 확인할 수 있습니다.