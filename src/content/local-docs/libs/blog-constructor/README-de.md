# @gravity-ui/blog-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/blog-constructor)](https://www.npmjs.com/package/@gravity-ui/blog-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/blog-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/blog-constructor/actions/workflows/ci.yml?query=branch:main) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/blog-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/blog-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/blog-constructor/)

## Installation

```shell
npm install @gravity-ui/blog-constructor
```

## Blog-constructor

`Blog-constructor` ist eine Bibliothek, die auf der [Page-constructor](https://github.com/gravity-ui/page-constructor)-Bibliothek basiert und zur Erstellung von Webseiten im Blog-Format dient. Blog-constructor verwendet die [`custom`](https://github.com/gravity-ui/page-constructor#custom-blocks)-Prop von page-constructor, um die für den Blog benötigten Komponenten hinzuzufügen.

### Dokumentation - [storybook](https://preview.gravity-ui.com/blog-constructor/)

### Erste Schritte

Der blog-constructor verfügt sowohl über Client- als auch über Server-Komponenten zum Importieren. Die Blog-Seiten werden als React-Komponente importiert. Um sicherzustellen, dass sie ordnungsgemäß funktionieren, wrappen Sie sie in `BlogConstructorProvider`:

```jsx
import {BlogPage, BlogConstructorProvider} from '@gravity-ui/blog-constructor';

// Haupt-Blogseite
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

// Beitragsseite
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

Dokumentation zu [providerProps](./src/constructor/README.md).

Außerdem verfügt blog-constructor über Server-Komponenten, die Ihnen bei der Transformation Ihrer Daten helfen, falls erforderlich:

```jsx
import {
  transformPost,
  sanitizeMeta,
  createReadableContent,
  transformPageContent,
} from '@gravity-ui/blog-constructor/server';
```

Der `blog-constructor` ist eine `uikit-basierte` Bibliothek, und wir verwenden eine Instanz von `i18n` aus uikit. Um die Internationalisierung einzurichten, müssen Sie lediglich `configure` aus uikit verwenden:

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

## Entwicklung

```bash
npm ci
npm run dev
```