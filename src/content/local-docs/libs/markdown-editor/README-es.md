![Markdown Editor](https://github.com/user-attachments/assets/0b4e5f65-54cf-475f-9c68-557a4e9edb46)

# @gravity-ui/markdown-editor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/markdown-editor)](https://www.npmjs.com/package/@gravity-ui/markdown-editor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/markdown-editor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/markdown-editor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/md-editor/)

## Editor wysiwyg y de marcado Markdown

MarkdownEditor es una potente herramienta para trabajar con Markdown, que combina los modos WYSIWYG y Marcado. Esto significa que puedes crear y editar contenido en un modo visual conveniente, así como tener control total sobre el marcado.

### 🔧 Características principales

- Soporte para la sintaxis básica de Markdown y [YFM](https://ydocs.tech).
- Extensibilidad a través del uso de los motores ProseMirror y CodeMirror.
- La capacidad de trabajar en modos WYSIWYG y Marcado para máxima flexibilidad.

## Instalación

```shell
npm install @gravity-ui/markdown-editor
```

### Dependencias requeridas

Ten en cuenta que para comenzar a usar el paquete, tu proyecto también debe tener instalado lo siguiente: `@diplodoc/transform`, `react`, `react-dom`, `@gravity-ui/uikit`, `@gravity-ui/components` y algunos otros. Consulta la sección `peerDependencies` de `package.json` para obtener información precisa.

## Primeros pasos

El editor de markdown se proporciona como un hook de React para crear una instancia del editor y un componente para renderizar la vista.\
Para configurar el estilo y el tema, consulta la [documentación de UIKit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles).

```tsx
import React from 'react';
import {useMarkdownEditor, MarkdownEditorView} from '@gravity-ui/markdown-editor';

function Editor({onSubmit}) {
  const editor = useMarkdownEditor({allowHTML: false});

  React.useEffect(() => {
    function submitHandler() {
      // Serializar el contenido actual a marcado markdown
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

Leer más:

- [Cómo conectar el editor en Create React App](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-create-react-app--docs)
- [Cómo añadir vista previa para el modo de marcado](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-preview--docs)
- [Cómo añadir la extensión HTML](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-html-block--docs)
- [Cómo añadir la extensión Latex](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-latex-extension--docs)
- [Cómo añadir la extensión Mermaid](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-mermaid-extension--docs)
- [Cómo escribir una extensión](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-creation--docs)
- [Cómo añadir la extensión GPT](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-gpt--docs)
- [Cómo añadir la extensión de vinculación de texto en markdown](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-with-popup--docs)

### Desarrollo

Para iniciar el storybook de desarrollo

```shell
npm start
```

### i18n

Para configurar la internacionalización, solo necesitas usar `configure`:

```typescript
import {configure} from '@gravity-ui/markdown-editor';

configure({
  lang: 'ru',
});
```

No olvides llamar a `configure()` desde [UIKit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#i18n) y otras bibliotecas de UI.

### Contribución

- [Directrices para contribuidores](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-contributing--docs)
