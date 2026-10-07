![Markdown Editor](https://github.com/user-attachments/assets/0b4e5f65-54cf-475f-9c68-557a4e9edb46)

# @gravity-ui/markdown-editor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/markdown-editor)](https://www.npmjs.com/package/@gravity-ui/markdown-editor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/markdown-editor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/markdown-editor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/md-editor/)

## Markdown WYSIWYG 및 마크업 에디터

MarkdownEditor는 마크다운 작업을 위한 강력한 도구로, WYSIWYG 모드와 마크업 모드를 결합했습니다. 즉, 편리한 시각적 모드에서 콘텐츠를 생성하고 편집할 수 있을 뿐만 아니라 마크업을 완벽하게 제어할 수 있습니다.

### 🔧 주요 기능

- 기본 마크다운 및 [YFM](https://ydocs.tech) 구문 지원.
- ProseMirror 및 CodeMirror 엔진을 사용한 확장성.
- 최대 유연성을 위한 WYSIWYG 및 마크업 모드 작업 기능.

## 설치

```shell
npm install @gravity-ui/markdown-editor
```

### 필수 종속성

패키지 사용을 시작하려면 프로젝트에 다음이 설치되어 있어야 합니다: `@diplodoc/transform`, `react`, `react-dom`, `@gravity-ui/uikit`, `@gravity-ui/components` 및 기타 일부. 정확한 정보는 `package.json`의 `peerDependencies` 섹션을 확인하세요.

## 시작하기

마크다운 에디터는 에디터 인스턴스를 생성하기 위한 React 훅과 뷰 렌더링을 위한 컴포넌트로 제공됩니다.
스타일링 및 테마 설정은 [UIKit 문서](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles)를 참조하세요.

```tsx
import React from 'react';
import {useMarkdownEditor, MarkdownEditorView} from '@gravity-ui/markdown-editor';

function Editor({onSubmit}) {
  const editor = useMarkdownEditor({allowHTML: false});

  React.useEffect(() => {
    function submitHandler() {
      // 현재 콘텐츠를 마크다운 마크업으로 직렬화
      const value = editor.getValue();
      onSubmit(value);
    }

    editor.on('submit', submitHandler);
    return () => {
      editor.off('submit', submitHandler);
    };
  }, [onSubmit]);

  return <MarkdownEditorView stickyToolbar autofocus editor={editor} />;
}
```
더 알아보기:
- [Create React App에서 에디터 연결 방법](https://gravity-ui.github.io/markdown-editor/getting-started/create-react-app.html)
- [마크업 모드 미리보기 추가 방법](https://gravity-ui.github.io/markdown-editor/getting-started/preview.html)
- [HTML 확장 기능 추가 방법](https://gravity-ui.github.io/markdown-editor/extensions/html-block.html)
- [LaTeX 확장 기능 추가 방법](https://gravity-ui.github.io/markdown-editor/extensions/latex-extension.html)
- [Mermaid 확장 기능 추가 방법](https://gravity-ui.github.io/markdown-editor/extensions/mermaid-extension.html)
- [확장 기능 작성 방법](https://gravity-ui.github.io/markdown-editor/develop/extension-creation.html)
- [GPT 확장 기능 추가 방법](https://gravity-ui.github.io/markdown-editor/extensions/gpt.html)
- [마크다운에서 텍스트 바인딩 확장 기능 추가 방법](https://gravity-ui.github.io/markdown-editor/develop/extension-with-popup.html)

### 개발

1. `.nvmrc` 파일에 지정된 버전의 Nodejs 환경을 설치합니다. [NVM](https://github.com/nvm-sh/nvm) 또는 유사한 도구 사용을 권장합니다.
2. [pnpm](https://pnpm.io/installation)을 설치합니다. 버전은 `package.json`의 "packageManager" 속성에 지정되어 있습니다.
3. 종속성 설치: `pnpm i`
4. 스토리북 개발 서버 실행: `pnpm start`

### i18n

국제화를 설정하려면 `configure`를 사용하면 됩니다.

```typescript
import {configure} from '@gravity-ui/markdown-editor';

configure({
  lang: 'ru',
});
```

[UIKit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#i18n) 및 기타 UI 라이브러리에서 `configure()`를 호출하는 것을 잊지 마세요.

### 기여

- [기여자 가이드라인](https://gravity-ui.github.io/markdown-editor/contributing.html)

## 라이선스

MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE.txt)를 참조하세요.

## AI 에이전트용

WYSIWYG 모드(ProseMirror)와 원시 마크업 모드(CodeMirror)를 결합한 React용 듀얼 모드 마크다운 에디터로, 기본 마크다운 및 YFM을 지원합니다.

### 언제 사용해야 할까요?

- 전환 가능한 시각적(WYSIWYG) 및 소스(마크업) 보기로 마크다운/YFM 콘텐츠 편집.
- 확장 가능한 에디터가 필요한 경우: ProseMirror/CodeMirror 엔진을 통한 사용자 정의 마크, 노드, 툴바 항목 및 확장 기능(HTML, LaTeX, Mermaid, GPT).
- 에디터 UI 렌더링: `useMarkdownEditor`로 인스턴스를 생성하고 `MarkdownEditorView`로 렌더링합니다.

### 언제 사용하지 않아야 할까요?

- 편집 없이 마크다운을 HTML로 읽기 전용 렌더링 — 대신 [`@diplodoc/transform`](https://github.com/diplodoc-platform/transform)으로 변환하고 출력을 렌더링합니다.
- 일반적인 여러 줄 텍스트 입력 — [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit)의 `TextArea`를 사용합니다.
- 마크다운/YFM이 아닌 리치 텍스트 — 이 에디터는 마크다운 우선입니다.

### 일반적인 함정

- **하나의 컴포넌트가 아닌 훅과 뷰입니다.** `useMarkdownEditor(...)`로 인스턴스를 생성하고 `<MarkdownEditorView editor={editor} />`에 전달합니다. 직접 렌더링하는 단일 `<MarkdownEditor>`는 없습니다.
- **제어된 `value` prop이 아닌 인스턴스를 통해 값을 읽습니다.** 마크다운으로 직렬화하려면 `editor.getValue()`(예: `submit` 이벤트에서)를 호출합니다. 에디터는 자체 상태를 관리합니다.
- **Peer 종속성이 필요합니다.** 프로젝트는 `@diplodoc/transform`, `@gravity-ui/uikit`, `@gravity-ui/components`, `react`, `react-dom`을 제공해야 합니다. `package.json`의 `peerDependencies`를 확인하세요.
- **스타일 및 i18n은 uikit에서 제공됩니다.** uikit 문서에 따라 테마/스타일을 설정하고 이 패키지와 `@gravity-ui/uikit` 모두에서 `configure({lang})`을 호출합니다.

## AI 에이전트용 문서

설치된 버전에 대한 에이전트 읽기 가능 문서는 `node_modules/@gravity-ui/markdown-editor/build/docs/INDEX.md`에 있습니다.