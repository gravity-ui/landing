![Markdown Editor](https://github.com/user-attachments/assets/0b4e5f65-54cf-475f-9c68-557a4e9edb46)

# @gravity-ui/markdown-editor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/markdown-editor)](https://www.npmjs.com/package/@gravity-ui/markdown-editor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/markdown-editor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/markdown-editor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/md-editor/)

## Editor de marcado y wysiwyg de Markdown

MarkdownEditor es una potente herramienta para trabajar con Markdown, que combina los modos WYSIWYG y Markup. Esto significa que puede crear y editar contenido en un cómodo modo visual, así como tener un control total sobre el marcado.

### 🔧 Características principales

- Soporte para la sintaxis básica de Markdown e [YFM](https://ydocs.tech).
- Extensibilidad mediante el uso de los motores ProseMirror y CodeMirror.
- La capacidad de trabajar en los modos WYSIWYG y Markup para una máxima flexibilidad.

## Instalar

```shell
npm install @gravity-ui/markdown-editor
```

### Dependencias necesarias

Tenga en cuenta que para empezar a usar el paquete, su proyecto también debe tener instalado lo siguiente: `@diplodoc/transform` `react`, `react-dom`, `@gravity-ui/uikit`, `@gravity-ui/components` y algunos otros. Consulte la `peerDependencies` sección de `package.json` para obtener información precisa.

## Cómo empezar

El editor Markdown se suministra como un gancho de React para crear una instancia de editor y un componente para renderizar la vista. \
Para configurar el estilo y el tema, consulta la [documentación de UIKit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles).

```tsx
import React from 'react';
import {useMarkdownEditor, MarkdownEditorView} from '@gravity-ui/markdown-editor';

function Editor({onSubmit}) {
  const editor = useMarkdownEditor({allowHTML: false});

  React.useEffect(() => {
    function submitHandler() {
      // Serialize current content to markdown markup
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

- [Cómo conectar el editor en la aplicación Create React](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-create-react-app--docs)
- [Cómo agregar una vista previa para el modo de marcado](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-preview--docs)
- [Cómo añadir una extensión HTML](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-html-block--docs)
- [Cómo agregar la extensión Latex](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-latex-extension--docs)
- [Cómo agregar la extensión Mermaid](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-mermaid-extension--docs)
- [Cómo escribir una extensión](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-creation--docs)
- [Cómo agregar la extensión GPT](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-gpt--docs)
- [Cómo añadir una extensión de enlace de texto en Markdown](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-with-popup--docs)

### Desarrollo

Para iniciar el libro de cuentos para desarrolladores

```shell
npm start
```

### i18n

Para configurar la internacionalización, solo tiene que utilizar: `configure`

```typescript
import {configure} from '@gravity-ui/markdown-editor';

configure({
  lang: 'ru',
});
```

No olvides llamar `configure()` desde [UIKit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#i18n) y otras bibliotecas de interfaz de usuario.

### Contribuyendo

- [Pautas para los colaboradores](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-contributing--docs)
