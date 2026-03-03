# AIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/aikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/aikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/aikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/aikit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/aikit/?path=/docs/pages-chatcontainer--docs)

AI 채팅을 위한 UI 컴포넌트 라이브러리로, Atomic Design 원칙을 기반으로 구축되었습니다.

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/aikit_cover.png)

## 리소스

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [웹사이트](https://gravity-ui.com/libraries/aikit)

### ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/aikit/)

### ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [커뮤니티](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## 설명

**@gravity-ui/aikit**는 복잡한 AI 채팅을 구축하기 위한 유연하고 확장 가능한 React 컴포넌트 라이브러리입니다. 이 라이브러리는 즉시 사용 가능하거나 필요에 맞게 사용자 정의할 수 있는 다양한 기성 컴포넌트를 제공합니다.

### 주요 기능

- 🎨 **Atomic Design** — 원자(atoms)부터 페이지(pages)까지 명확한 컴포넌트 계층 구조
- 🔧 **SDK Agnostic** — 특정 AI SDK에 독립적
- 🎭 **Two-Level Approach** — 기성 컴포넌트 + 사용자 정의를 위한 훅
- 🎨 **CSS Variables** — 컴포넌트 재정의 없이 쉬운 테마 적용
- 📦 **TypeScript** — 즉시 사용 가능한 완전한 타입 안전성
- 🔌 **Extensible** — 사용자 정의 메시지 타입 등록 시스템

## 프로젝트 구조

```
src/
├── components/
│   ├── atoms/          # 기본적인 분리 불가능한 UI 요소
│   ├── molecules/      # 원자들의 간단한 그룹
│   ├── organisms/      # 로직이 포함된 복잡한 컴포넌트
│   ├── templates/      # 완전한 레이아웃
│   └── pages/          # 데이터와의 완전한 통합
├── hooks/              # 범용 훅
├── types/              # TypeScript 타입
├── utils/              # 유틸리티
└── themes/             # CSS 테마 및 변수
```

## 설치

```bash
npm install @gravity-ui/aikit
```

## 빠른 시작

```typescript
import { ChatContainer } from '@gravity-ui/aikit';
import type { ChatType, TChatMessage } from '@gravity-ui/aikit';

function App() {
    const [messages, setMessages] = useState<TChatMessage[]>([]);
    const [chats, setChats] = useState<ChatType[]>([]);
    const [activeChat, setActiveChat] = useState<ChatType | null>(null);

    return (
        <ChatContainer
            chats={chats}
            activeChat={activeChat}
            messages={messages}
            onSendMessage={async (data) => {
                // 메시지 전송 로직
                console.log('Message:', data.content);
            }}
            onSelectChat={setActiveChat}
            onCreateChat={() => {
                // 새 채팅 생성
            }}
            onDeleteChat={(chat) => {
                // 채팅 삭제
            }}
        />
    );
}
```

## 아키텍처

이 라이브러리는 **Atomic Design** 원칙을 기반으로 구축되었습니다.

### 🔹 Atoms

비즈니스 로직이 없는 기본적인 분리 불가능한 UI 요소:

- `ActionButton` — 툴팁이 통합된 버튼
- `Alert` — 다양한 스타일의 알림 메시지
- `ChatDate` — 상대적 날짜를 포함한 날짜 형식 지정
- `ContextIndicator` — 토큰 컨텍스트 사용 지표
- `ContextItem` — 제거 액션이 있는 컨텍스트 레이블
- `DiffStat` — 코드 변경 통계 표시
- `Disclaimer` — 면책 조항 텍스트 컴포넌트
- `InlineCitation` — 텍스트 인용
- `Loader` — 로딩 표시기
- `MarkdownRenderer` — Yandex Flavored Markdown 렌더러
- `MessageBalloon` — 메시지 래퍼
- `Shimmer` — 로딩 애니메이션 효과
- `SubmitButton` — 상태가 있는 제출 버튼
- `ToolIndicator` — 도구 실행 상태 표시기

### 🔸 Molecules

원자들의 간단한 조합:

- `BaseMessage` — 모든 메시지 타입에 대한 기본 래퍼
- `ButtonGroup` — 방향 지원이 있는 버튼 그룹
- `InputContext` — 컨텍스트 관리
- `PromptInputBody` — 자동 크기 조절이 가능한 텍스트 영역
- `PromptInputFooter` — 액션 아이콘 및 제출 버튼이 있는 푸터
- `PromptInputHeader` — 컨텍스트 항목 및 표시기가 있는 헤더
- `PromptInputPanel` — 사용자 정의 콘텐츠를 위한 패널 컨테이너
- `Suggestions` — 클릭 가능한 제안 버튼
- `Tabs` — 삭제 기능이 있는 탐색 탭
- `ToolFooter` — 액션이 있는 도구 메시지 푸터
- `ToolHeader` — 아이콘 및 액션이 있는 도구 메시지 헤더

### 🔶 Organisms

내부 로직이 포함된 복잡한 컴포넌트:

- `AssistantMessage` — AI 어시스턴트 메시지
- `Header` — 채팅 헤더
- `MessageList` — 메시지 목록
- `PromptInput` — 메시지 입력 필드
- `ThinkingMessage` — AI 사고 과정
- `ToolMessage` — 도구 실행
- `UserMessage` — 사용자 메시지

### 📄 Templates

완전한 레이아웃:

- `ChatContent` — 메인 채팅 콘텐츠
- `EmptyContainer` — 빈 상태
- `History` — 채팅 기록

### 📱 Pages

완전한 통합:

- `ChatContainer` — 완전히 조립된 채팅

## 문서

- [빠른 시작 가이드](./docs/GETTING_STARTED.md)
- [아키텍처](./docs/ARCHITECTURE.md)
- [프로젝트 구조](./docs/PROJECT_STRUCTURE.md)
- [테스트 가이드](./docs/TESTING.md)
- [Playwright 가이드](./playwright/README.md)

## 테스트

이 프로젝트는 시각적 회귀 테스트를 위해 Playwright 컴포넌트 테스팅을 사용합니다.

### 테스트 실행

**중요**: 모든 테스트는 다양한 환경에서 일관된 스크린샷을 보장하기 위해 Docker를 통해 실행해야 합니다.

```bash
# Docker에서 모든 컴포넌트 테스트 실행 (권장)
npm run playwright:docker

# Docker에서 스크린샷 기준선 업데이트
npm run playwright:docker:update

# Docker에서 grep 패턴으로 특정 테스트 실행
npm run playwright:docker -- --grep "@ComponentName"

# 필요한 경우 Docker 캐시 삭제
npm run playwright:docker:clear-cache
```

### 로컬 테스트 (Linux 전용)

Linux 환경에서는 로컬에서 테스트를 실행할 수 있습니다.

```bash
# Playwright 브라우저 설치 (한 번 실행)
npm run playwright:install
# 모든 컴포넌트 테스트 실행
npm run playwright
# 스크린샷 기준선 업데이트
npm run playwright:update
```

자세한 테스트 문서는 [Playwright 가이드](./playwright/README.md)를 참조하세요.

## 개발

개발 및 기여 방법은 [CONTRIBUTING.md](./CONTRIBUTING.md)에서 확인할 수 있습니다.

## 라이선스

MIT