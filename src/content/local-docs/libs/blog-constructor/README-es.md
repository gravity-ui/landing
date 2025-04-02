# @gravity-ui/blog-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/blog-constructor)](https://www.npmjs.com/package/@gravity-ui/blog-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/blog-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/blog-constructor/actions/workflows/ci.yml?query=branch:main) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/blog-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/blog-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/blog-constructor/)

## Instalar

```shell
npm install @gravity-ui/blog-constructor
```

## Constructor de blogs

`Blog-constructor` es una biblioteca basada en la biblioteca [Page-Constructor](https://github.com/gravity-ui/page-constructor) para crear páginas web en formato blog. Blog-constructor usa el [`custom`](https://github.com/gravity-ui/page-constructor#custom-blocks) accesorio de page-constructor para agregar los componentes necesarios para el blog.

### Documentación: libro de [cuentos](https://preview.gravity-ui.com/blog-constructor/)

### Cómo empezar

El constructor de blogs tiene componentes de cliente y componentes de servidor para importar. Las páginas del blog se importan como un componente de React. Para asegurarte de que funciona correctamente, envuélvelo en `BlogConstructorProvider`:

```jsx
import {BlogPage, BlogConstructorProvider} from '@gravity-ui/blog-constructor';

// Main blog page
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

// Post page
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

Documentación sobre [ProviderProps](./src/constructor/README.md).

Además, los constructores de blogs tienen componentes de servidor para ayudarlo a transformar sus datos si lo necesita

```jsx
import {
  transformPost,
  sanitizeMeta,
  createReadableContent,
  transformPageContent,
} from '@gravity-ui/blog-constructor/server';
```

`blog-constructor` Es una `uikit-based` biblioteca y utilizamos una instancia de `i18n` from uikit. Para configurar la internacionalización, solo necesitas usar el comando `configure` from uikit:

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

## Desarrollo

```bash
npm ci
npm run dev
```
