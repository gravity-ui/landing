# playwright-tools

Playwright Test를 사용하여 테스트를 작성하기 위한 추가 유틸리티 라이브러리입니다.

```
npm i -D @gravity-ui/playwright-tools
```

이 패키지에는 다양한 목적을 위한 유틸리티가 포함된 여러 하위 디렉토리가 있습니다. 예를 들어 이러한 하위 디렉토리에서 가져와야 합니다.

```ts
import { matchScreenshot } from 'playwright-tools/actions';
```

- [actions](./actions/README.md) — 브라우저 액션.
- [auth/storage](./auth/storage/README.md) — 브라우저 스토리지 스냅샷을 저장하고 복원하기 위한 인증 함수.
- [component-tests](./component-tests/README.md) — Playwright 컴포넌트 테스트를 위한 유틸리티 및 픽스처.
- [fixtures](./fixtures/README.md) — 테스트에 값을 전달하기 위한 픽스처.
- [har](./har/README.md) — HAR 요청 덤프 작업을 위한 함수.
- [utils](./utils/README.md) — 헬퍼 함수.

[Playwright 문서](https://playwright.dev/docs/intro)에서 Playwright와 구성 방법에 대해 자세히 알아볼 수 있습니다.

## Maintainers

[@Avol-V](https://github.com/Avol-V)
[SwinX](https://github.com/SwinX)