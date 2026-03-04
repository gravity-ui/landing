![Markdown Editor](https://github.com/user-attachments/assets/0b4e5f65-54cf-475f-9c68-557a4e9edb46)

# @gravity-ui/markdown-editor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/markdown-editor)](https://www.npmjs.com/package/@gravity-ui/markdown-editor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/markdown-editor/actions/workflows/ci.yml?query=branch:main) [![Release](https://img.shields.io/github/actions/workflow/status/gravity-ui/markdown-editor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/markdown-editor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/md-editor/)

## Éditeur WYSIWYG et de balisage Markdown

MarkdownEditor est un outil puissant pour travailler avec Markdown, qui combine les modes WYSIWYG (What You See Is What You Get) et Markup. Cela signifie que vous pouvez créer et modifier du contenu dans un mode visuel pratique, tout en ayant un contrôle total sur le balisage.

### 🔧 Fonctionnalités principales

- Prise en charge de la syntaxe Markdown de base et de [YFM](https://ydocs.tech).
- Extensibilité grâce à l'utilisation des moteurs ProseMirror et CodeMirror.
- Possibilité de travailler en modes WYSIWYG et Markup pour une flexibilité maximale.

## Installation

```shell
npm install @gravity-ui/markdown-editor
```

### Dépendances requises

Veuillez noter que pour commencer à utiliser le package, votre projet doit également avoir installé les éléments suivants : `@diplodoc/transform`, `react`, `react-dom`, `@gravity-ui/uikit`, `@gravity-ui/components` et quelques autres. Consultez la section `peerDependencies` de `package.json` pour des informations précises.

## Démarrage

L'éditeur Markdown est fourni sous forme de hook React pour créer une instance de l'éditeur et un composant pour le rendu de la vue.
Pour configurer le style et le thème, consultez la [documentation UIKit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#styles).

```tsx
import React from 'react';
import {useMarkdownEditor, MarkdownEditorView} from '@gravity-ui/markdown-editor';

function Editor({onSubmit}) {
  const editor = useMarkdownEditor({allowHTML: false});

  React.useEffect(() => {
    function submitHandler() {
      // Sérialiser le contenu actuel en balisage markdown
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
En savoir plus :
- [Comment connecter l'éditeur dans Create React App](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-create-react-app--docs)
- [Comment ajouter un aperçu pour le mode balisage](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-getting-started-preview--docs)
- [Comment ajouter une extension HTML](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-html-block--docs)
- [Comment ajouter une extension Latex](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-latex-extension--docs)
- [Comment ajouter une extension Mermaid](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-mermaid-extension--docs)
- [Comment écrire une extension](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-creation--docs)
- [Comment ajouter une extension GPT](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-extensions-gpt--docs)
- [Comment ajouter une extension de liaison de texte en markdown](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-develop-extension-with-popup--docs)

### Développement

1. Installez l'environnement Nodejs, la version est spécifiée dans le fichier `.nvmrc`. Nous recommandons d'utiliser [NVM](https://github.com/nvm-sh/nvm) ou un outil similaire.
2. Installez [pnpm](https://pnpm.io/installation), la version est spécifiée dans `package.json` dans la propriété "packageManager".
3. Installez les dépendances : `pnpm i`
4. Lancez le serveur de développement Storybook : `pnpm start`


### i18n

Pour configurer l'internationalisation, il vous suffit d'utiliser la fonction `configure` :

```typescript
import {configure} from '@gravity-ui/markdown-editor';

configure({
  lang: 'ru',
});
```

N'oubliez pas d'appeler `configure()` depuis [UIKit](https://github.com/gravity-ui/uikit?tab=readme-ov-file#i18n) et d'autres bibliothèques UI.

### Contribution

- [Directives pour les contributeurs](https://preview.gravity-ui.com/md-editor/?path=/docs/docs-contributing--docs)