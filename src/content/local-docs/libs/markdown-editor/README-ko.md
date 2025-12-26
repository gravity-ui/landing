```html
<p>
  <a href="https://github.com/gravity-ui/markdown-editor">
    <img src="https://github.com/user-attachments/assets/0b4e5f65-54cf-475f-9c68-557a4e9edb46" alt="Markdown Editor" width="600">
  </a>
</p>

# @gravity-ui/markdown-editor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/markdown-editor)](https://www.npmjs.com/package/@gravity-ui/markdown-editor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/markdown-editor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/markdown-editor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/md-editor/)

## Markdown WYSIWYG 및 마크업 에디터

MarkdownEditor는 Markdown 작업을 위한 강력한 도구로, WYSIWYG(What You See Is What You Get) 모드와 마크업 모드를 결합했습니다. 즉, 편리한 시각적 모드에서 콘텐츠를 생성하고 편집할 수 있을 뿐만 아니라 마크업을 완벽하게 제어할 수도 있습니다.

### 🔧 주요 기능

- 기본 Markdown 및 [YFM](https://ydocs.tech) 구문 지원.
- ProseMirror 및 CodeMirror 엔진을 사용한 확장성.
- 최대 유연성을 위한 WYSIWYG 및 마크업 모드 작업 기능.

## 설치

```shell
npm install @gravity-ui/markdown-editor
```

### 필수 종속성

패키지 사용을 시작하려면 프로젝트에 다음이 설치되어 있어야 합니다: `@diplodoc/transform`, `react`, `react-dom`, `@gravity-ui/uikit`, `@gravity-ui/components` 및 기타 몇 가지. 정확한 정보는 `package.json`의 `peerDependencies` 섹션을 확인하세요.

## 시작하기

Markdown 에디터는 에디터 인스턴스를 생성하기 위한 React 훅과 뷰 렌더링을 위한 컴포넌트로 제공됩니다.
스타일링 및 테마 설정은 [UIKit 문서](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles)를 참조하세요.

```tsx
import React from 'react';
import {useMarkdownEditor, MarkdownEditorView} from '@gravity-ui/markdown-editor';

function Editor({onSubmit}) {
  const editor = useMarkdownEditor({allowHTML: false});

  React.useEffect(() => {
    function submitHandler() {
      // 현재 콘텐츠를 markdown 마크업으로 직렬화
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
- [Create React App에서 에디터 연결 방법](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-create-react-app--docs)
- [마크업 모드 미리보기 추가 방법](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-preview--docs)
- [HTML 확장 기능 추가 방법](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-html-block--docs)
- [Latex 확장 기능 추가 방법](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-latex-extension--docs)
- [Mermaid 확장 기능 추가 방법](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-mermaid-extension--docs)
- [확장 기능 작성 방법](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-creation--docs)
- [GPT 확장 기능 추가 방법](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-gpt--docs)
- [Markdown에서 텍스트 바인딩 확장 기능 추가 방법](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-with-popup--docs)

### 개발
개발용 스토리북 시작하기

```shell
npm start
```


### i18n

국제화를 설정하려면 `configure`를 사용하면 됩니다:

```typescript
import {configure} from '@gravity-ui/markdown-editor';

configure({
  lang: 'ru',
});
```

[UIKit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#i18n) 및 기타 UI 라이브러리에서 `configure()`를 호출하는 것을 잊지 마세요.

### 기여

- [기여자 가이드라인](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-contributing--docs)
```