![Markdown Editor](https://github.com/user-attachments/assets/0b4e5f65-54cf-475f-9c68-557a4e9edb46)

# @gravity-ui/markdown-editor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/markdown-editor)](https://www.npmjs.com/package/@gravity-ui/markdown-editor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/markdown-editor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/markdown-editor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/md-editor/)

## Markdown WYSIWYG- und Markup-Editor

MarkdownEditor ist ein leistungsstarkes Werkzeug für die Arbeit mit Markdown, das WYSIWYG- und Markup-Modi kombiniert. Das bedeutet, dass Sie Inhalte in einem komfortablen visuellen Modus erstellen und bearbeiten können, während Sie gleichzeitig die volle Kontrolle über das Markup behalten.

### 🔧 Hauptfunktionen

- Unterstützung der grundlegenden Markdown- und [YFM](https://ydocs.tech)-Syntax.
- Erweiterbarkeit durch die Verwendung von ProseMirror- und CodeMirror-Engines.
- Die Möglichkeit, in WYSIWYG- und Markup-Modi zu arbeiten, für maximale Flexibilität.

## Installation

```shell
npm install @gravity-ui/markdown-editor
```

### Erforderliche Abhängigkeiten

Bitte beachten Sie, dass Ihr Projekt für die Nutzung des Pakets auch Folgendes installiert haben muss: `@diplodoc/transform`, `react`, `react-dom`, `@gravity-ui/uikit`, `@gravity-ui/components` und einige andere. Die genauen Informationen finden Sie im Abschnitt `peerDependencies` der `package.json`.

## Erste Schritte

Der Markdown-Editor wird als React-Hook zur Erstellung einer Editor-Instanz und als Komponente zur Darstellung der Ansicht bereitgestellt.
Um Styling und Theme einzurichten, siehe [UIKit-Dokumentation](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles).

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
- [Wie man den Editor in Create React App einbindet](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-create-react-app--docs)
- [Wie man eine Vorschau für den Markup-Modus hinzufügt](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-preview--docs)
- [Wie man eine HTML-Erweiterung hinzufügt](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-html-block--docs)
- [Wie man eine LaTeX-Erweiterung hinzufügt](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-latex-extension--docs)
- [Wie man eine Mermaid-Erweiterung hinzufügt](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-mermaid-extension--docs)
- [Wie man eine Erweiterung schreibt](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-creation--docs)
- [Wie man eine GPT-Erweiterung hinzufügt](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-gpt--docs)
- [Wie man eine Textbindungs-Erweiterung in Markdown hinzufügt](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-with-popup--docs)

### Entwicklung

1. Installieren Sie die Node.js-Umgebung. Die Version ist in der `.nvmrc`-Datei angegeben. Wir empfehlen die Verwendung von [NVM](https://github.com/nvm-sh/nvm) oder einem ähnlichen Tool.
2. Installieren Sie [pnpm](https://pnpm.io/installation). Die Version ist in der `package.json` unter der Eigenschaft "packageManager" angegeben.
3. Installieren Sie Abhängigkeiten: `pnpm i`
4. Starten Sie den Storybook-Entwicklungsserver: `pnpm start`

### i18n

Um die Internationalisierung einzurichten, müssen Sie nur `configure` verwenden:

```typescript
import {configure} from '@gravity-ui/markdown-editor';

configure({
  lang: 'ru',
});
```

Vergessen Sie nicht, `configure()` von [UIKit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#i18n) und anderen UI-Bibliotheken aufzurufen.

### Mitwirken

- [Richtlinien für Mitwirkende](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-contributing--docs)

## Lizenz

Verteilt unter der MIT-Lizenz. Details finden Sie in [LICENSE](LICENSE.txt).

## Für KI-Agenten

Ein Dual-Mode-Markdown-Editor für React, der einen WYSIWYG-Modus (ProseMirror) und einen reinen Markup-Modus (CodeMirror) kombiniert, mit Unterstützung für grundlegendes Markdown und YFM.

### Wann zu verwenden

- Bearbeiten von Markdown/YFM-Inhalten mit einer umschaltbaren visuellen (WYSIWYG) und Quellcode- (Markup) Ansicht.
- Sie benötigen einen erweiterbaren Editor: benutzerdefinierte Markierungen, Knoten, Symbolleistenelemente und Erweiterungen (HTML, LaTeX, Mermaid, GPT) über die ProseMirror/CodeMirror-Engines.
- Rendern der Editor-UI: Erstellen Sie die Instanz mit `useMarkdownEditor` und rendern Sie sie mit `MarkdownEditorView`.

### Wann nicht zu verwenden

- Nur schreibgeschütztes Rendern von Markdown zu HTML ohne Bearbeitung – transformieren Sie es stattdessen mit [`@diplodoc/transform`](https://github.com/diplodoc-platform/transform) und rendern Sie die Ausgabe.
- Einfache mehrzeilige Texteingabe – verwenden Sie `TextArea` von [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Rich-Text, der kein Markdown/YFM ist – dieser Editor ist primär für Markdown gedacht.

### Häufige Fallstricke

- **Es ist ein Hook plus eine Ansicht, keine einzelne Komponente.** Erstellen Sie die Instanz mit `useMarkdownEditor(...)` und übergeben Sie sie an `<MarkdownEditorView editor={editor} />`; es gibt keine einzelne `<MarkdownEditor>`-Komponente, die Sie direkt rendern.
- **Lesen Sie den Wert über die Instanz, nicht über eine gesteuerte `value`-Prop.** Rufen Sie `editor.getValue()` auf (z. B. beim `submit`-Ereignis), um zu Markdown zu serialisieren; der Editor verwaltet seinen eigenen Zustand.
- **Peer-Abhängigkeiten sind erforderlich.** Ihr Projekt muss `@diplodoc/transform`, `@gravity-ui/uikit`, `@gravity-ui/components`, `react` und `react-dom` bereitstellen – überprüfen Sie die `peerDependencies` in `package.json`.
- **Stile und i18n stammen von uikit.** Richten Sie Theming/Stile gemäß der uikit-Dokumentation ein und rufen Sie `configure({lang})` sowohl von diesem Paket als auch von `@gravity-ui/uikit` auf.