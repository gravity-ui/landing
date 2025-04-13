# @gravity-ui/blog-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/blog-constructor)](https://www.npmjs.com/package/@gravity-ui/blog-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/blog-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/blog-constructor/actions/workflows/ci.yml?query=branch:main) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/blog-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/blog-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/blog-constructor/)

## 安装

```shell
npm install @gravity-ui/blog-constructor
```

## Blog-constructor

`Blog-constructor` 是一个基于 [Page-constructor](https://github.com/gravity-ui/page-constructor) 库的库，用于创建博客格式的网页。Blog-constructor 使用 page-constructor 的 [`custom`](https://github.com/gravity-ui/page-constructor#custom-blocks) 属性来添加博客所需的组件。

### 文档 - [storybook](https://preview.gravity-ui.com/blog-constructor/)

### 入门指南

blog-constructor 同时提供客户端组件和服务器组件供导入。博客页面作为 React 组件导入。为确保其正常运行，请将其包装在 `BlogConstructorProvider` 中：

```jsx
import {BlogPage, BlogConstructorProvider} from '@gravity-ui/blog-constructor';

// 主博客页面
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

// 文章页面
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

关于 [providerProps](./src/constructor/README.md) 的文档。

此外，blog-constructor 还有服务器组件，可以帮助您在需要时转换数据

```jsx
import {
  transformPost,
  sanitizeMeta,
  createReadableContent,
  transformPageContent,
} from '@gravity-ui/blog-constructor/server';
```

`blog-constructor` 是一个基于 `uikit` 的库，我们使用 uikit 中的 `i18n` 实例。要设置国际化，您只需使用 uikit 的 `configure`：

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

## 开发

```bash
npm ci
npm run dev
```
