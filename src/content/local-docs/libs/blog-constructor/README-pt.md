# @gravity-ui/blog-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/blog-constructor)](https://www.npmjs.com/package/@gravity-ui/blog-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/blog-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/blog-constructor/actions/workflows/ci.yml?query=branch:main) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/blog-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/blog-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/blog-constructor/)

## Instalar

```shell
npm install @gravity-ui/blog-constructor
```

## Blog-constructor

`Blog-constructor` é uma biblioteca baseada na biblioteca [Page-constructor](https://github.com/gravity-ui/page-constructor) para criar páginas web no formato de blog. O Blog-constructor utiliza a propriedade [`custom`](https://github.com/gravity-ui/page-constructor#custom-blocks) do page-constructor para adicionar os componentes necessários para o blog.

### Documentação - [storybook](https://preview.gravity-ui.com/blog-constructor/)

### Primeiros passos

O blog-constructor possui componentes tanto para o lado do cliente quanto para o lado do servidor para importação. As páginas do blog são importadas como um componente React. Para garantir que funcione corretamente, envolva-o em `BlogConstructorProvider`:

```jsx
import {BlogPage, BlogConstructorProvider} from '@gravity-ui/blog-constructor';

// Página principal do blog
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

// Página de postagem
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

Documentação sobre [providerProps](./src/constructor/README.md).

Além disso, o blog-constructor possui componentes de servidor para ajudar a transformar seus dados, se necessário.

```jsx
import {
  transformPost,
  sanitizeMeta,
  createReadableContent,
  transformPageContent,
} from '@gravity-ui/blog-constructor/server';
```

O `blog-constructor` é uma biblioteca baseada em `uikit`, e utilizamos uma instância de `i18n` do uikit. Para configurar a internacionalização, basta usar o `configure` do uikit:

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

## Desenvolvimento

```bash
npm ci
npm run dev
```