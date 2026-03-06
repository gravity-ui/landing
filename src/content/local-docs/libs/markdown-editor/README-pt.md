![Markdown Editor](https://github.com/user-attachments/assets/0b4e5f65-54cf-475f-9c68-557a4e9edb46)

# @gravity-ui/markdown-editor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/markdown-editor)](https://www.npmjs.com/package/@gravity-ui/markdown-editor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/markdown-editor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/markdown-editor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/md-editor/)

## Editor WYSIWYG e de marcação Markdown

O MarkdownEditor é uma ferramenta poderosa para trabalhar com Markdown, que combina os modos WYSIWYG e de Marcação. Isso significa que você pode criar e editar conteúdo em um modo visual conveniente, além de ter controle total sobre a marcação.

### 🔧 Principais recursos

- Suporte à sintaxe básica do Markdown e [YFM](https://ydocs.tech).
- Extensibilidade através do uso dos motores ProseMirror e CodeMirror.
- A capacidade de trabalhar nos modos WYSIWYG e de Marcação para máxima flexibilidade.

## Instalar

```shell
npm install @gravity-ui/markdown-editor
```

### Dependências necessárias

Por favor, note que para começar a usar o pacote, seu projeto também deve ter os seguintes itens instalados: `@diplodoc/transform`, `react`, `react-dom`, `@gravity-ui/uikit`, `@gravity-ui/components` e alguns outros. Consulte a seção `peerDependencies` do `package.json` para obter informações precisas.

## Primeiros passos

O editor Markdown é fornecido como um hook React para criar uma instância do editor e um componente para renderizar a visualização.
Para configurar estilos e temas, consulte a [documentação do UIKit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles).

```tsx
import React from 'react';
import {useMarkdownEditor, MarkdownEditorView} from '@gravity-ui/markdown-editor';

function Editor({onSubmit}) {
  const editor = useMarkdownEditor({allowHTML: false});

  React.useEffect(() => {
    function submitHandler() {
      // Serializa o conteúdo atual para marcação markdown
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
Leia mais:
- [Como conectar o editor no Create React App](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-create-react-app--docs)
- [Como adicionar pré-visualização para o modo de marcação](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-preview--docs)
- [Como adicionar extensão HTML](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-html-block--docs)
- [Como adicionar extensão Latex](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-latex-extension--docs)
- [Como adicionar extensão Mermaid](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-mermaid-extension--docs)
- [Como escrever uma extensão](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-creation--docs)
- [Como adicionar extensão GPT](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-gpt--docs)
- [Como adicionar extensão de vinculação de texto em markdown](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-with-popup--docs)

### Desenvolvimento

1. Instale o ambiente Nodejs, a versão é especificada no arquivo `.nvmrc`. Recomendamos o uso de [NVM](https://github.com/nvm-sh/nvm) ou uma ferramenta similar.
2. Instale o [pnpm](https://pnpm.io/installation), a versão é especificada na propriedade "packageManager" do `package.json`.
3. Instale as dependências: `pnpm i`
4. Execute o servidor de desenvolvimento do storybook: `pnpm start`


### i18n

Para configurar a internacionalização, basta usar o `configure`:

```typescript
import {configure} from '@gravity-ui/markdown-editor';

configure({
  lang: 'ru',
});
```

Não se esqueça de chamar `configure()` do [UIKit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#i18n) e de outras bibliotecas de UI.

### Contribuição

- [Diretrizes para Contribuintes](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-contributing--docs)