![Markdown Editor](https://github.com/user-attachments/assets/0b4e5f65-54cf-475f-9c68-557a4e9edb46)

# @gravity-ui/markdown-editor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/markdown-editor)](https://www.npmjs.com/package/@gravity-ui/markdown-editor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/markdown-editor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/markdown-editor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/md-editor/)

## Markdown WYSIWYG- und Markup-Editor

MarkdownEditor ist ein leistungsstarkes Werkzeug für die Arbeit mit Markdown, das WYSIWYG- und Markup-Modi kombiniert. Das bedeutet, dass Sie Inhalte in einem praktischen visuellen Modus erstellen und bearbeiten können, während Sie gleichzeitig die volle Kontrolle über das Markup behalten.

### 🔧 Hauptfunktionen

- Unterstützung der grundlegenden Markdown- und [YFM](https://ydocs.tech)-Syntax.
- Erweiterbarkeit durch die Verwendung von ProseMirror- und CodeMirror-Engines.
- Die Möglichkeit, in WYSIWYG- und Markup-Modi zu arbeiten, für maximale Flexibilität.

## Installation

```shell
npm install @gravity-ui/markdown-editor
```

### Erforderliche Abhängigkeiten

Bitte beachten Sie, dass Ihr Projekt für die Nutzung des Pakets auch Folgendes installiert haben muss: `@diplodoc/transform`, `react`, `react-dom`, `@gravity-ui/uikit`, `@gravity-ui/components` und einige andere. Genaue Informationen finden Sie im Abschnitt `peerDependencies` der `package.json`.

## Erste Schritte

Der Markdown-Editor wird als React-Hook zur Erstellung einer Editorinstanz und als Komponente zur Anzeige der Ansicht bereitgestellt.
Informationen zum Einrichten von Styling und Themes finden Sie in der [UIKit-Dokumentation](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles).

```tsx
import React from 'react';
import {useMarkdownEditor, MarkdownEditorView} from '@gravity-ui/markdown-editor';

function Editor({onSubmit}) {
  const editor = useMarkdownEditor({allowHTML: false});

  React.useEffect(() => {
    function submitHandler() {
      // Aktuellen Inhalt in Markdown-Markup serialisieren
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
Mehr erfahren:
- [So verbinden Sie den Editor in Create React App](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-create-react-app--docs)
- [So fügen Sie eine Vorschau für den Markup-Modus hinzu](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-preview--docs)
- [So fügen Sie eine HTML-Erweiterung hinzu](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-html-block--docs)
- [So fügen Sie eine Latex-Erweiterung hinzu](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-latex-extension--docs)
- [So fügen Sie eine Mermaid-Erweiterung hinzu](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-mermaid-extension--docs)
- [So schreiben Sie eine Erweiterung](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-creation--docs)
- [So fügen Sie eine GPT-Erweiterung hinzu](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-gpt--docs)
- [So fügen Sie eine Textbindungs-Erweiterung in Markdown hinzu](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-with-popup--docs)

### Entwicklung
Um den Dev-Storybook zu starten:

```shell
npm start
```


### i18n

Um die Internationalisierung einzurichten, müssen Sie nur `configure` verwenden:

```typescript
import {configure} from '@gravity-ui/markdown-editor';

configure({
  lang: 'ru',
});
```

Vergessen Sie nicht, `configure()` aus [UIKit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#i18n) und anderen UI-Bibliotheken aufzurufen.

### Mitwirken

- [Richtlinien für Mitwirkende](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-contributing--docs)