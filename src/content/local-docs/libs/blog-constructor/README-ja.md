# @gravity-ui/blog-constructor &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/blog-constructor)](https://www.npmjs.com/package/@gravity-ui/blog-constructor) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/blog-constructor/ci.yml?branch=main&label=CI)](https://github.com/gravity-ui/blog-constructor/actions/workflows/ci.yml?query=branch:main) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/blog-constructor/release.yml?branch=main&label=Release)](https://github.com/gravity-ui/blog-constructor/actions/workflows/release.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/blog-constructor/)

## インストール

```shell
npm install @gravity-ui/blog-constructor
```

## Blog-constructor

`Blog-constructor` は、ブログ形式のウェブページを作成するための [Page-constructor](https://github.com/gravity-ui/page-constructor) ライブラリに基づいたライブラリです。Blog-constructor は、ブログに必要なコンポーネントを追加するために、page-constructor の [`custom`](https://github.com/gravity-ui/page-constructor#custom-blocks) プロパティを使用します。

### ドキュメント - [Storybook](https://preview.gravity-ui.com/blog-constructor/)

### はじめに

blog-constructor には、クライアントコンポーネントとサーバーコンポーネントの両方があり、インポートして使用できます。ブログページは React コンポーネントとしてインポートされます。正しく動作させるには、`BlogConstructorProvider` でラップしてください。

```jsx
import {BlogPage, BlogConstructorProvider} from '@gravity-ui/blog-constructor';

// メインのブログページ
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

// 投稿ページ
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

[providerProps](./src/constructor/README.md) に関するドキュメント。

また、blog-constructor には、必要に応じてデータを変換するのに役立つサーバーコンポーネントも含まれています。

```jsx
import {
  transformPost,
  sanitizeMeta,
  createReadableContent,
  transformPageContent,
} from '@gravity-ui/blog-constructor/server';
```

`blog-constructor` は `uikitベース` のライブラリであり、uikit からの `i18n` インスタンスを使用します。国際化を設定するには、uikit の `configure` を使用するだけです。

```typescript
import {configure} from '@gravity-ui/uikit';

configure({
  lang: 'ru',
});
```

## 開発

```bash
npm ci
npm run dev
```