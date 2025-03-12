# @gravity-ui/blog-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/blog-constructor)](https://www.npmjs.com/package/@gravity-ui/blog-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/blog-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/blog-constructor/actions/workflows/ci.yml?query=branch:main) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/blog-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/blog-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/blog-constructor/)

## Установка

```shell
npm install @gravity-ui/blog-constructor
```

## `Blog-constructor`

`Blog-constructor` — это библиотека, основанная на [`page-constructor`](https://github.com/gravity-ui/page-constructor) и предназначенная для создания веб-страниц в формате блога. `Blog-constructor` использует свойство [`custom`](https://github.com/gravity-ui/page-constructor#custom-blocks) библиотеки `page-constructor` для добавления необходимых компонентов блога.

### Документация (см. [Storybook](https://preview.gravity-ui.com/blog-constructor/))

### Начало работы

`Blog-constructor` включает как клиентские, так и серверные компоненты для импорта. Страница блога импортируется в виде React-компонента. Для корректной работы ее необходимо обернуть в `BlogConstructorProvider`:

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

Подробнее см. в [документации о `providerProps`](./src/constructor/README.md).

Кроме того, `blog-constructor` содержит серверные компоненты для преобразования данных.

```jsx
import {
  transformPost,
  sanitizeMeta,
  createReadableContent,
  transformPageContent,
} from '@gravity-ui/blog-constructor/server';
```

Библиотека `blog-constructor` основана на `UIKit` и работает с ее экземпляром `i18n`. Для настройки интернационализации используйте `configure` из `UIKit`:

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

## Разработка

```bash
npm ci
npm run dev
```
