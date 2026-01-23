# @gravity-ui/blog-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/blog-constructor)](https://www.npmjs.com/package/@gravity-ui/blog-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/blog-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/blog-constructor/actions/workflows/ci.yml?query=branch:main) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/blog-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/blog-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/blog-constructor/)

## Installation

```shell
npm install @gravity-ui/blog-constructor
```

## Blog-constructor

`Blog-constructor` est une bibliothèque basée sur la bibliothèque [Page-constructor](https://github.com/gravity-ui/page-constructor) pour créer des pages web au format blog. Blog-constructor utilise la prop [`custom`](https://github.com/gravity-ui/page-constructor#custom-blocks) de page-constructor pour ajouter les composants nécessaires au blog.

### Documentation - [storybook](https://preview.gravity-ui.com/blog-constructor/)

### Démarrage rapide

Le blog-constructor dispose de composants côté client et côté serveur pour l'importation. Les pages du blog sont importées en tant que composant React. Pour vous assurer qu'il fonctionne correctement, encapsulez-le dans `BlogConstructorProvider` :

```jsx
import {BlogPage, BlogConstructorProvider} from '@gravity-ui/blog-constructor';

// Page principale du blog
<BlogConstructorProvider {...providerProps}>
    <BlogPage
        content={content}
        posts={posts}
        tags={tags}
        getPosts={handleGetPosts}
        settings={settings}
    />
</BlogConstructorProvider>

---

import {BlogPostPage, BlogConstructorProvider} from '@gravity-ui/blog-constructor';

// Page d'un article
<BlogConstructorProvider {...providerProps}>
    <BlogPostPage
        content={content}
        post={post}
        suggestedPosts={suggestedPosts}
        settings={settings}
        shareOptions={shareOptions}
    />
</BlogConstructorProvider>

```

Documentation sur [providerProps](./src/constructor/README.md).

De plus, blog-constructor propose des composants serveur pour vous aider à transformer vos données si nécessaire.

```jsx
import {
  transformPost,
  sanitizeMeta,
  createReadableContent,
  transformPageContent,
} from '@gravity-ui/blog-constructor/server';
```

Le `blog-constructor` est une bibliothèque basée sur `uikit`, et nous utilisons une instance de `i18n` de uikit. Pour configurer l'internationalisation, il vous suffit d'utiliser la fonction `configure` de uikit :

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

## Développement

```bash
npm ci
npm run dev
```