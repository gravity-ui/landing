![Markdown Editor](https://github.com/user-attachments/assets/0b4e5f65-54cf-475f-9c68-557a4e9edb46)

# @gravity-ui/markdown-editor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/markdown-editor)](https://www.npmjs.com/package/@gravity-ui/markdown-editor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/markdown-editor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/markdown-editor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/md-editor/)

## Editor WYSIWYG y de marcado Markdown

MarkdownEditor es una herramienta potente para trabajar con Markdown, que combina los modos WYSIWYG y de marcado. Esto significa que puedes crear y editar contenido en un modo visual cómodo, además de tener control total sobre el marcado.

### 🔧 Características principales

- Soporte para la sintaxis básica de Markdown y [YFM](https://ydocs.tech).
- Extensibilidad mediante el uso de los motores ProseMirror y CodeMirror.
- La capacidad de trabajar en modos WYSIWYG y de marcado para una máxima flexibilidad.

## Instalación

```shell
npm install @gravity-ui/markdown-editor
```

### Dependencias requeridas

Ten en cuenta que para empezar a usar el paquete, tu proyecto también debe tener instalados los siguientes: `@diplodoc/transform`, `react`, `react-dom`, `@gravity-ui/uikit`, `@gravity-ui/components` y algunos otros. Consulta la sección `peerDependencies` de `package.json` para obtener información precisa.

## Primeros pasos

El editor de Markdown se proporciona como un hook de React para crear una instancia del editor y un componente para renderizar la vista.
Para configurar el estilo y el tema, consulta la [documentación de UIKit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles).

```tsx
import React from 'react';
import {useMarkdownEditor, MarkdownEditorView} from '@gravity-ui/markdown-editor';

function Editor({onSubmit}) {
  const editor = useMarkdownEditor({allowHTML: false});

  React.useEffect(() => {
    function submitHandler() {
      // Serializa el contenido actual a marcado markdown
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
Lee más:
- [Cómo conectar el editor en Create React App](https://gravity-ui.github.io/markdown-editor/getting-started/create-react-app.html)
- [Cómo añadir una vista previa para el modo de marcado](https://gravity-ui.github.io/markdown-editor/getting-started/preview.html)
- [Cómo añadir una extensión HTML](https://gravity-ui.github.io/markdown-editor/extensions/html-block.html)
- [Cómo añadir una extensión LaTeX](https://gravity-ui.github.io/markdown-editor/extensions/latex-extension.html)
- [Cómo añadir una extensión Mermaid](https://gravity-ui.github.io/markdown-editor/extensions/mermaid-extension.html)
- [Cómo escribir una extensión](https://gravity-ui.github.io/markdown-editor/develop/extension-creation.html)
- [Cómo añadir una extensión GPT](https://gravity-ui.github.io/markdown-editor/extensions/gpt.html)
- [Cómo añadir una extensión de enlace de texto en markdown](https://gravity-ui.github.io/markdown-editor/develop/extension-with-popup.html)

### Desarrollo

1. Instala el entorno de Nodejs, la versión se especifica en el archivo `.nvmrc`. Recomendamos usar [NVM](https://github.com/nvm-sh/nvm) o una herramienta similar.
2. Instala [pnpm](https://pnpm.io/installation), la versión se especifica en `package.json` en la propiedad "packageManager".
3. Instala las dependencias: `pnpm i`
4. Ejecuta el servidor de desarrollo de storybook: `pnpm start`


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

- [Directrices para colaboradores](https://gravity-ui.github.io/markdown-editor/contributing.html)

## Licencia

Distribuido bajo la Licencia MIT. Consulta [LICENSE](LICENSE.txt) para más detalles.

## Para agentes de IA

Un editor Markdown de doble modo para React que combina un modo WYSIWYG (ProseMirror) y un modo de marcado sin procesar (CodeMirror), con soporte para Markdown básico y YFM.

### Cuándo usarlo

- Edición de contenido Markdown/YFM con una vista visual (WYSIWYG) y de origen (marcado) conmutable.
- Necesitas un editor extensible: marcas, nodos, elementos de barra de herramientas y extensiones personalizadas (HTML, LaTeX, Mermaid, GPT) a través de los motores ProseMirror/CodeMirror.
- Renderizado de la interfaz del editor: crea la instancia con `useMarkdownEditor` y renderízala con `MarkdownEditorView`.

### Cuándo no usarlo

- Renderizado de Markdown a HTML de solo lectura sin edición: transfórmalo con [`@diplodoc/transform`](https://github.com/diplodoc-platform/transform) y renderiza la salida en su lugar.
- Entrada de texto simple multilínea: usa `TextArea` de [`@gravity-ui/uikit`](https://github.com/gravity-ui/uikit).
- Texto enriquecido que no sea Markdown/YFM: este editor está centrado en Markdown.

### Errores comunes

- **Es un hook más una vista, no un solo componente.** Crea la instancia con `useMarkdownEditor(...)` y pásala a `<MarkdownEditorView editor={editor} />`; no hay un único `<MarkdownEditor>` que renderices directamente.
- **Lee el valor a través de la instancia, no de una prop `value` controlada.** Llama a `editor.getValue()` (por ejemplo, en el evento `submit`) para serializar a Markdown; el editor gestiona su propio estado.
- **Se requieren dependencias peer.** Tu proyecto debe proporcionar `@diplodoc/transform`, `@gravity-ui/uikit`, `@gravity-ui/components`, `react` y `react-dom`: consulta `peerDependencies` en `package.json`.
- **Los estilos y la i18n provienen de uikit.** Configura los temas/estilos según la documentación de uikit y llama a `configure({lang})` tanto desde este paquete como desde `@gravity-ui/uikit`.

## Documentación para agentes de IA

La documentación legible por agentes para la versión instalada se encuentra en `node_modules/@gravity-ui/markdown-editor/build/docs/INDEX.md`.