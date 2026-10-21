# @gravity-ui/components &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/components)](https://www.npmjs.com/package/@gravity-ui/components) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/components/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/components/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/components/)

[`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit) 위에 구축된 복잡한 React 컴포넌트 세트입니다. [Gravity UI](https://gravity-ui.com) 디자인 시스템의 일부입니다.

## 설치

```shell
npm install @gravity-ui/components
```

## 사용법

`@gravity-ui/uikit` 8 및 React 18/19이 필요합니다. `npm install @gravity-ui/uikit@beta`로 현재 UIKit 8 프리릴리스를 설치하세요.

`@gravity-ui/uikit`는 피어 의존성입니다. 설치하고, 앱 진입점에서 스타일을 한 번 가져오고, 앱을 `Provider`로 감싸세요. 이 패키지의 컴포넌트는 해당 설정 없이는 스타일이 적용되지 않은 상태로 렌더링됩니다.

```tsx
import {Provider, TextInput} from '@gravity-ui/uikit';
import {FormRow} from '@gravity-ui/components';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

export function App() {
  return (
    <Provider theme="light">
      <FormRow label="Name" fieldId="name">
        <TextInput id="name" name="name" />
      </FormRow>
    </Provider>
  );
}
```

### UIKit 8로 마이그레이션하기

- 애플리케이션 수준의 `ThemeProvider`를 `Provider`로 교체하세요.
- `ConfirmDialog` 및 `ChangelogDialog`에서 `onClose` 대신 `onOpenChange`를 사용하세요. `ConfirmDialog`는 `size` 대신 새로운 Dialog props(예: `maxWidth`, `fullWidth`)를 지원합니다.
- `ChangelogDialog` 및 쿠키 동의 팝업 설정에서 `disableHeightTransition`을 제거하세요. UIKit는 더 이상 콘텐츠 높이를 애니메이션하지 않습니다.
- `Stories` 및 `StoriesGroup`은 `onClose`를 유지하며, 선택적으로 이벤트/이유 인자와 UIKit 8의 이유(`escape-key`, `outside-press`, `click`)를 지원합니다.
- `extraProps` 대신 버튼/링크 props에 직접 네이티브 HTML 속성을 전달하세요(예: `StoreBadge`). 사용자 정의 스토리 액션에서 UIKit 8 Button 뷰를 사용하세요.

기본 API 변경 사항은 [UIKit 8 마이그레이션 가이드](https://github.com/gravity-ui/uikit/blob/next/docs/migration-to-v8.md)를 참조하세요. 이 패키지는 레거시 진입점 없이 새로운 List, Menu, Popover API를 사용합니다.

### 확인 대화상자

```tsx
import {ConfirmDialog} from '@gravity-ui/components';

<ConfirmDialog
  open={open}
  title="프로젝트를 삭제하시겠습니까?"
  message="이 작업은 되돌릴 수 없습니다."
  textButtonApply="삭제"
  textButtonCancel="취소"
  onClickButtonApply={handleDelete}
  onClickButtonCancel={() => setOpen(false)}
  onOpenChange={setOpen}
/>;
```

### 더 많은 예제

각 컴포넌트에는 소스 옆에 props와 예제가 있는 README가 있습니다. `src/components/<Component>/README.md`를 참조하세요. 라이브 데모: [Storybook](https://preview.gravity-ui.com/components/).

## 개발

```shell
git clone git@github.com:gravity-ui/components.git
cd components
npm ci
npm run start   # Storybook을 http://localhost:7009에서 시작합니다.
```

기타 유용한 명령어:

```shell
npm test              # 단위 테스트 실행
npm run lint          # JS 및 SCSS 린트
npm run typecheck     # TypeScript 타입 검사
```

## 기여

기여를 환영합니다! 풀 리퀘스트를 제출하기 전에 [CONTRIBUTING.md](CONTRIBUTING.md)를 읽어주세요.

## 라이선스

MIT 라이선스에 따라 배포됩니다. 자세한 내용은 [LICENSE](LICENSE)를 참조하세요.

## AI 에이전트용

Gravity UI의 복합 컴포넌트 계층 — `@gravity-ui/uikit` 기본 요소로 조립된 미리 만들어진 폼 행, 확인 대화상자, 알림, 스토리, 갤러리 및 유사한 제품 수준 위젯으로, 수동으로 다시 구축할 필요가 없습니다.

### 언제 사용해야 할까요?

- 폼 레이아웃: 수동으로 만든 레이블/입력 래퍼 대신 `FormRow` (레이블 + 필드 + 설명).
- 확인 흐름: 두 개의 버튼으로 `Dialog`를 직접 구성하는 대신 `ConfirmDialog`.
- 제품 위젯: `Notifications`, `Stories` / `StoriesGroup`, `ChangelogDialog`, `OnboardingMenu`, `PromoSheet`, `CookieConsent`, `Reactions`, `SharePopover`, `StoreBadge`.
- 데이터 도우미: `InfiniteScroll`, `ItemSelector`, `DelayedTextInput`, `TokenizedInput`, `Gallery`.

### 언제 사용하지 않아야 할까요?

- 기본 컨트롤, 오버레이, 레이아웃 및 테마 — [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit)를 직접 사용하세요. 이 패키지는 그 위에 복합 요소만 추가합니다.
- 데이터 그리드 — [`@gravity-ui/table`](https://github.com/gravity-ui/table)를 사용하세요. 여기에는 테이블이 없습니다.
- 날짜 선택기 및 달력 — [`@gravity-ui/date-components`](https://github.com/gravity-ui/date-components)를 사용하세요.
- 애플리케이션 탐색 셸 (헤더, 푸터 옆) — [`@gravity-ui/navigation`](https://github.com/gravity-ui/navigation)을 사용하세요.
- 스키마 기반 폼 — [`@gravity-ui/dynamic-forms`](https://github.com/gravity-ui/dynamic-forms)를 사용하세요. `FormRow`는 레이아웃 행일 뿐입니다.

### 일반적인 함정

- **uikit 설정 없이는 아무것도 스타일링되지 않습니다.** `@gravity-ui/uikit`를 설치하고, `@gravity-ui/uikit/styles/styles.css` (및 `fonts.css`)를 한 번 가져오고, 앱을 `Provider`로 감싸세요. 이 패키지는 자체적인 전역 스타일을 제공하지 않습니다.
- **`FormRow`가 입력을 렌더링하지 않습니다.** 컨트롤을 `children`으로 전달하고 컨트롤의 `id`와 일치하는 `fieldId`와 연결하세요. `label` prop은 `<label>` 요소가 아니라 레이블 텍스트입니다.
- **`ConfirmDialog`에 `onConfirm` / `onCancel`이 없습니다.** 핸들러는 `onClickButtonApply` 및 `onClickButtonCancel`이며, `textButtonApply` / `textButtonCancel`은 필수입니다.
- **잘못된 가져오기.** 모든 것은 패키지 루트에서 내보내집니다: `import {FormRow} from '@gravity-ui/components'`. `@gravity-ui/components/FormRow`와 같은 하위 경로 가져오기는 없습니다.

## AI 에이전트용 문서

설치된 버전에 대한 에이전트 읽기 가능 문서는 `node_modules/@gravity-ui/components/build/docs/INDEX.md`에 있습니다.