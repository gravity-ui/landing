# AIKit &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/aikit?logo=npm)](https://www.npmjs.com/package/@gravity-ui/aikit) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/aikit/.github/workflows/ci.yml?branch=main&label=CI&logo=github)](https://github.com/gravity-ui/aikit/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685?logo=storybook)](https://preview.gravity-ui.com/aikit/?path=/docs/pages-chatcontainer--docs)

Atomic Design 원칙을 기반으로 구축된 AI 채팅용 UI 컴포넌트 라이브러리입니다.

<!--GITHUB_BLOCK-->

![Cover image](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/aikit_cover.png)

![Example image](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/aikit_example.png)

## 리소스

### ![Globe Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_light.svg#gh-light-mode-only) ![Globe Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/globe_dark.svg#gh-dark-mode-only) [웹사이트](https://gravity-ui.com/libraries/aikit)

### ![Storybook Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_light.svg#gh-light-mode-only) ![Storybook Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/storybook_dark.svg#gh-dark-mode-only) [Storybook](https://preview.gravity-ui.com/aikit/)

### ![Community Logo Light](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_light.svg#gh-light-mode-only) ![Community Logo Dark](https://raw.githubusercontent.com/gravity-ui/aikit/main/docs/assets/telegram_dark.svg#gh-dark-mode-only) [커뮤니티](https://t.me/gravity_ui)

<!--/GITHUB_BLOCK-->

## 설명

**@gravity-ui/aikit**는 복잡한 AI 채팅을 구축하기 위한 유연하고 확장 가능한 React 컴포넌트 라이브러리입니다. 이 라이브러리는 즉시 사용 가능한 컴포넌트 세트를 제공하며, 그대로 사용하거나 필요에 맞게 사용자 정의할 수 있습니다.

### 주요 기능

- 🎨 **Atomic Design** — 원자(atoms)부터 페이지(pages)까지 명확한 컴포넌트 계층 구조
- 🔧 **SDK Agnostic** — 특정 AI SDK에 독립적
- 🎭 **Two-Level Approach** — 즉시 사용 가능한 컴포넌트 + 사용자 정의를 위한 훅
- 🎨 **CSS Variables** — 컴포넌트 재정의 없이 쉬운 테마 설정
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

이 라이브러리는 **Atomic Design** 원칙에 따라 구축되었습니다.

### 🔹 Atoms (원자)

비즈니스 로직이 없는 기본적인 분리 불가능한 UI 요소:

- `ActionButton` — 툴팁이 통합된 버튼
- `Alert` — 다양한 스타일의 알림 메시지
- `ChatDate` — 상대 날짜를 포함한 날짜 형식 지정
- `ContextIndicator` — 토큰 컨텍스트 사용 표시기
- `ContextItem` — 삭제 기능이 있는 컨텍스트 레이블
- `DiffStat` — 코드 변경 통계 표시
- `Disclaimer` — 면책 조항 텍스트 컴포넌트
- `InlineCitation` — 텍스트 인용
- `Loader` — 로딩 표시기
- `MarkdownRenderer` — Yandex Flavored Markdown 렌더러
- `MessageBalloon` — 메시지 래퍼
- `Shimmer` — 로딩 애니메이션 효과
- `SubmitButton` — 상태가 있는 제출 버튼
- `ToolIndicator` — 도구 실행 상태 표시기

### 🔸 Molecules (분자)

원자들의 간단한 조합:

- `BaseMessage` — 모든 메시지 타입의 기본 래퍼
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

### 🔶 Organisms (유기체)

내부 로직이 포함된 복잡한 컴포넌트:

- `AssistantMessage` — AI 어시스턴트 메시지
- `Header` — 채팅 헤더
- `MessageList` — 메시지 목록
- `PromptInput` — 메시지 입력 필드
- `ThinkingMessage` — AI 사고 과정
- `ToolMessage` — 도구 실행
- `UserMessage` — 사용자 메시지

### 📄 Templates (템플릿)

완전한 레이아웃:

- `ChatContent` — 메인 채팅 콘텐츠
- `EmptyContainer` — 빈 상태
- `History` — 채팅 기록

### 📱 Pages (페이지)

완전한 통합:

- `ChatContainer` — 완전히 조립된 채팅

## 문서

- [빠른 시작 가이드](./docs/GETTING_STARTED.md)
- [아키텍처](./docs/ARCHITECTURE.md)
- [프로젝트 구조](./docs/PROJECT_STRUCTURE.md)
- [테스트 가이드](./docs/TESTING.md)
- [Playwright 가이드](./playwright/README.md)

## 테스트

이 프로젝트는 시각적 회귀 테스트를 위해 Playwright 컴포넌트 테스트를 사용합니다.

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

Linux를 사용 중이라면 로컬에서 테스트를 실행할 수 있습니다.

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

개발 및 기여 지침은 [CONTRIBUTING.md](./CONTRIBUTING.md)에서 확인할 수 있습니다.

## 라이선스

MIT

## AI 에이전트용

Atomic Design (atoms → molecules → organisms → templates → pages) 방식으로 구성된 AI 채팅 인터페이스 구축을 위한 React 컴포넌트 라이브러리이며, SDK에 구애받지 않습니다. `@gravity-ui/uikit`으로 이러한 기본 요소들을 수동으로 조합하는 대신, 채팅 UI(메시지 목록, 프롬프트 입력, 도구 호출, 첨부 파일)를 조립하는 데 사용하세요.

### 언제 사용해야 할까요?

- AI/LLM 채팅 UI 구축 시 (어시스턴트/사용자/도구 메시지, 제안이 있는 프롬프트 입력, 첨부 파일 업로드, 생각 중인 상태).
- 미리 만들어진 채팅 레이아웃(`ChatContainer`, `MessageList`, `PromptInput`)과 동작을 사용자 정의하기 위한 훅을 원할 때.
- CSS 변수를 통한 공유 테마를 사용하여 Gravity UI 생태계에 통합할 때.

### 언제 사용하지 않아야 할까요?

- 일반적인 UI 기본 요소(버튼, 입력, 모달)의 경우, [`@gravity-ui/uikit`](https://gravity-ui.com/uikit)를 직접 사용하세요. AIKit은 채팅별 요구 사항을 위해 이를 기반으로 구축됩니다.
- 메시지에서 풍부한 마크다운을 렌더링하려면, AIKit의 `MarkdownRenderer`는 [`@gravity-ui/markdown-editor`](https://github.com/gravity-ui/markdown-editor)를 래핑합니다. 독립적인 마크다운 렌더링을 위해서는 해당 패키지를 직접 사용하세요.
- 채팅 오케스트레이션 없이 단일 채팅 버블의 경우, uikit의 `MarkdownRenderer`/텍스트 블록이 전체 AIKit 메시지 파이프라인보다 가볍습니다.

### 일반적인 함정

- **AI SDK 가져오기 환상** — AIKit은 SDK에 구애받지 않습니다. LLM 클라이언트를 제공하는 것이 아니라 컴포넌트/훅을 제공합니다. 자체 데이터 소스를 가져와 props를 통해 메시지를 전달하세요.
- **`<Chat>` / `<AIChat>` 찾기** — 페이지 수준 내보내기는 `ChatContainer`(및 `AIStudioChat`)입니다. `Chat`이라는 이름의 컴포넌트는 없습니다.
- **사용자 정의 유형에 대한 메시지 유형 등록 건너뛰기** — 사용자 정의 메시지 종류는 메시지 유형 시스템에 등록해야 렌더링됩니다. 그렇지 않으면 알 수 없음으로 표시됩니다.
- **기본 컴포넌트 편집 대신 훅 사용** — 2단계 디자인은 훅/컴포지션을 통한 사용자 정의를 예상합니다. 내부를 직접 재정의하면 업그레이드 시 문제가 발생할 수 있습니다.

## AI 에이전트용 문서

설치된 버전에 대한 에이전트 읽기 가능 문서는 `node_modules/@gravity-ui/aikit/build/docs/INDEX.md`에 있습니다.