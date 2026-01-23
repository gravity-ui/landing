# Data Source &middot; [![npm version](https://img.shields.io/npm/v/@gravity-ui/data-source?logo=npm&label=version)](https://www.npmjs.com/package/@gravity-ui/data-source) [![ci](https://img.shields.io/github/actions/workflow/status/gravity-ui/data-source/ci.yml?branch=main&label=ci&logo=github)](https://github.com/gravity-ui/data-source/actions/workflows/ci.yml?query=branch:main)

**Data Source** は、データ取得処理をラップするシンプルなライブラリです。[クリーンアーキテクチャ](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)における「ポート」のようなものです。ユースケースに応じて、データ取得処理のラッパーを作成できます。**Data Source** は内部で [react-query](https://tanstack.com/query/latest) を使用しています。

## インストール

```bash
npm install @gravity-ui/data-source @tanstack/react-query
```

`@tanstack/react-query` はピア依存関係です。

## クイックスタート

### 1. DataManager のセットアップ

まず、アプリケーションで `DataManager` を作成し、提供します。

```tsx
import React from 'react';
import {ClientDataManager, DataManagerContext} from '@gravity-ui/data-source';

const dataManager = new ClientDataManager({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5分
      retry: 3,
    },
    // ... その他の react-query オプション
  },
});

function App() {
  return (
    <DataManagerContext.Provider value={dataManager}>
      <YourApplication />
    </DataManagerContext.Provider>
  );
}
```

### 2. エラータイプとラッパーの定義

エラーの型を定義し、デフォルトコンストラクタに基づいてデータソースのコンストラクタを作成します。

```ts
import {makePlainQueryDataSource as makePlainQueryDataSourceBase} from '@gravity-ui/data-source';

export interface ApiError {
  code: number;
  title: string;
  description?: string;
}

export const makePlainQueryDataSource = <TParams, TRequest, TResponse, TData, TError = ApiError>(
  config: Omit<PlainQueryDataSource<TParams, TRequest, TResponse, TData, TError>, 'type'>,
): PlainQueryDataSource<TParams, TRequest, TResponse, TData, TError> => {
  return makePlainQueryDataSourceBase(config);
};
```

### 3. カスタム DataLoader コンポーネントの作成

デフォルトの `DataLoader` コンポーネントに基づいて、ローディング状態とエラー表示を定義するコンポーネントを作成します。

```tsx
import {
  DataLoader as DataLoaderBase,
  DataLoaderProps as DataLoaderPropsBase,
  ErrorViewProps,
} from '@gravity-ui/data-source';

export interface DataLoaderProps
  extends Omit<DataLoaderPropsBase<ApiError>, 'LoadingView' | 'ErrorView'> {
  LoadingView?: ComponentType;
  ErrorView?: ComponentType<ErrorViewProps<ApiError>>;
}

export const DataLoader: React.FC<DataLoaderProps> = ({
  LoadingView = YourLoader, // 独自のローダーコンポーネントを使用できます
  ErrorView = YourError, // 独自のカスタムエラーコンポーネントを使用できます
  ...restProps
}) => {
  return <DataLoaderBase LoadingView={LoadingView} ErrorView={ErrorView} {...restProps} />;
};
```

### 4. 最初のデータソースの定義

```ts
import {skipContext} from '@gravity-ui/data-source';

// API 関数
import {fetchUser} from './api';

export const userDataSource = makePlainQueryDataSource({
  // キーは一意である必要があります。データソース名の生成ヘルパーを作成すると良いかもしれません
  name: 'user',
  // skipContext は、関数の最初の2つのパラメータ (context と fetchContext) をスキップするためのヘルパーです
  fetch: skipContext(fetchUser),
  // オプション: 高度なキャッシュ無効化のためのタグを生成します
  tags: (params) => [`user:${params.userId}`, 'users'],
});
```

### 5. コンポーネントでの使用

```tsx
import {useQueryData} from '@gravity-ui/data-source';

export const UserProfile: React.FC<{userId: number}> = ({userId}) => {
  const {data, status, error, refetch} = useQueryData(userDataSource, {userId});

  return (
    <DataLoader status={status} error={error} errorAction={refetch}>
      {data && <UserCard user={data} />}
    </DataLoader>
  );
};
```

## コアコンセプト

### データソースの種類

ライブラリは主に2つのデータソースタイプを提供します。

#### Plain Query Data Source

シンプルなリクエスト/レスポンスパターン向けです。

```ts
const userDataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(async (params: {userId: number}) => {
    const response = await fetch(`/api/users/${params.userId}`);
    return response.json();
  }),
});
```

#### Infinite Query Data Source

ページネーションや無限スクロール向けです。

```ts
const postsDataSource = makeInfiniteQueryDataSource({
  name: 'posts',
  fetch: skipContext(async (params: {page: number; limit: number}) => {
    const response = await fetch(`/api/posts?page=${params.page}&limit=${params.limit}`);
    return response.json();
  }),
  next: (lastPage, allPages) => {
    if (lastPage.hasNext) {
      return {page: allPages.length + 1, limit: 20};
    }
    return undefined;
  },
});
```

### ステータス管理

ライブラリはクエリの状態を3つのシンプルなステータスに正規化します。

- `loading` - 実際のデータロード中。React Query の `isLoading` と同じです。
- `success` - データが利用可能（`idle` でスキップされる場合があります）。
- `error` - データ取得に失敗しました。

### Idle コンセプト

ライブラリはクエリ実行をスキップするための特別な `idle` シンボルを提供します。

```ts
import {idle} from '@gravity-ui/data-source';

const UserProfile: React.FC<{userId?: number}> = ({userId}) => {
  // userId が未定義の場合、クエリは実行されません
  const {data, status} = useQueryData(userDataSource, userId ? {userId} : idle);

  return (
    <DataLoader status={status} error={null}>
      {data && <UserCard user={data} />}
    </DataLoader>
  );
};
```

パラメータが `idle` と等しい場合：

- クエリは実行されません。
- ステータスは `success` のままです。
- データは `undefined` のままです。
- コンポーネントはローディングなしで安全にレンダリングできます。

**`idle` の利点:**

1. **型安全性** - TypeScript は条件付きパラメータの型を正しく推論します。
2. **パフォーマンス** - 不要なサーバーリクエストを回避します。
3. **ロジックの簡潔さ** - 追加の `enabled` 状態を管理する必要がありません。
4. **一貫性** - すべての条件付きクエリに対して統一されたアプローチを提供します。

これは、型安全性を維持しながら特定の条件下でのみデータをロードしたい条件付きクエリに特に役立ちます。

## API リファレンス

### データソースの作成

#### `makePlainQueryDataSource(config)`

シンプルなリクエスト/レスポンスパターン用のプレーンクエリデータソースを作成します。

```ts
const dataSource = makePlainQueryDataSource({
  name: 'unique-name',
  fetch: skipContext(fetchFunction),
  transformParams: (params) => transformedRequest,
  transformResponse: (response) => transformedData,
  tags: (params) => ['tag1', 'tag2'],
  options: {
    staleTime: 60000,
    retry: 3,
    // ... other react-query options
  },
});
```

**パラメータ:**

- `name` - データソースの一意な識別子
- `fetch` - 実際のデータ取得を実行する関数
- `transformParams` (オプション) - リクエスト前に入力パラメータを変換
- `transformResponse` (オプション) - レスポンスデータを変換
- `tags` (オプション) - 無効化のためのキャッシュタグを生成
- `options` (オプション) - React Query オプション

#### `makeInfiniteQueryDataSource(config)`

ページネーションや無限スクロールパターン用の無限クエリデータソースを作成します。

```ts
const infiniteDataSource = makeInfiniteQueryDataSource({
  name: 'infinite-data',
  fetch: skipContext(fetchFunction),
  next: (lastPage, allPages) => nextPageParam || undefined,
  prev: (firstPage, allPages) => prevPageParam || undefined,
  // ... other options same as plain
});
```

**追加パラメータ:**

- `next` - 次のページパラメータを決定する関数
- `prev` (オプション) - 前のページパラメータを決定する関数

### React Hooks

#### `useQueryData(dataSource, params, options?)`

データソースでデータを取得するためのメインフックです。

```ts
const {data, status, error, refetch, ...rest} = useQueryData(
  userDataSource,
  {userId: 123},
  {
    enabled: true,
    refetchInterval: 30000,
  },
);
```

**返り値:**

- `data` - 取得されたデータ
- `status` - 現在のステータス ('loading' | 'success' | 'error')
- `error` - リクエストが失敗した場合のエラーオブジェクト
- `refetch` - 手動でデータを再取得する関数
- その他の React Query プロパティ

#### `useQueryResponses(responses)`

複数のクエリレスポンスを単一のステータスに結合します。

```ts
const user = useQueryData(userDataSource, {userId});
const posts = useQueryData(postsDataSource, {userId});

const {status, error, refetch, refetchErrored} = useQueryResponses([user, posts]);
```

**返り値:**

- `status` - 全てのクエリの結合されたステータス
- `error` - 最初に見つかったエラー
- `refetch` - 全てのクエリを再取得する関数
- `refetchErrored` - エラーが発生したクエリのみを再取得する関数

#### `useRefetchAll(states)`

複数のクエリを再取得するためのコールバックを作成します。

```ts
const refetchAll = useRefetchAll([user, posts, comments]);
// refetchAll() は全てのクエリの再取得をトリガーします
```

#### `useRefetchErrored(states)`

エラーが発生したクエリのみを再取得するためのコールバックを作成します。

```ts
const refetchErrored = useRefetchErrored([user, posts, comments]);
// refetchErrored() はエラーが発生したクエリのみを再取得します
```

#### `useDataManager()`

コンテキストから DataManager を返します。

```ts
const dataManager = useDataManager();
await dataManager.invalidateTag('users');
```

#### `useQueryContext()`

クエリコンテキストを返します（react-query をベースにしたカスタムデータフックの構築用）。

### React Components

#### `<DataLoader />`

ローディングステータスとエラーを処理するためのコンポーネントです。

```tsx
<DataLoader
  status={status}
  error={error}
  errorAction={refetch}
  LoadingView={SpinnerComponent}
  ErrorView={ErrorComponent}
  loadingViewProps={{size: 'large'}}
  errorViewProps={{showDetails: true}}
>
  {data && <YourContent data={data} />}
</DataLoader>
```

**Props:**

- `status` - 現在のローディングステータス
- `error` - エラーオブジェクト
- `errorAction` - エラーリトライのための関数またはアクション設定
- `LoadingView` - ローディング中に表示するコンポーネント
- `ErrorView` - エラー時に表示するコンポーネント
- `loadingViewProps` - LoadingView に渡される props
- `errorViewProps` - ErrorView に渡される props

#### `<DataInfiniteLoader />`

無限クエリ専用のコンポーネントです。

```tsx
<DataInfiniteLoader
  status={status}
  error={error}
  hasNextPage={hasNextPage}
  fetchNextPage={fetchNextPage}
  isFetchingNextPage={isFetchingNextPage}
  LoadingView={SpinnerComponent}
  ErrorView={ErrorComponent}
  MoreView={LoadMoreButton}
>
  {data.map((item) => (
    <Item key={item.id} data={item} />
  ))}
</DataInfiniteLoader>
```

**追加 Props:**

- `hasNextPage` - 次のページが利用可能かどうか
- `fetchNextPage` - 次のページを取得する関数
- `isFetchingNextPage` - 次のページが取得中かどうか
- `MoreView` - 「もっと読み込む」ボタン用のコンポーネント

#### `withDataManager(Component)`

DataManager を prop として注入する HOC です。

```ts
const MyComponent = withDataManager<Props>(({dataManager, ...props}) => {
  // Component は dataManager にアクセスできます
  return <div>...</div>;
});
```

### Data Management

#### `ClientDataManager`

データ管理のメインクラスです。

```ts
const dataManager = new ClientDataManager({
  defaultOptions: {
    queries: {
      staleTime: 300000, // 5分
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});
```

**メソッド:**

##### `invalidateTag(tag, options?)`

特定のタグを持つ全てのクエリを無効化します。

```ts
await dataManager.invalidateTag('users');
await dataManager.invalidateTag('posts', {
  repeat: {count: 3, interval: 1000}, // 無効化のリトライ
});
```

##### `invalidateTags(tags, options?)`

指定された全てのタグを持つクエリを無効化します。

```ts
await dataManager.invalidateTags(['user', 'profile']);
```

##### `invalidateSource(dataSource, options?)`

データソースの全てのクエリを無効化します。

```ts
await dataManager.invalidateSource(userDataSource);
```

##### `invalidateParams(dataSource, params, options?)`

正確なパラメータを持つ特定のクエリを無効化します。

```ts
await dataManager.invalidateParams(userDataSource, {userId: 123});
```

##### `resetSource(dataSource)`

データソースの全てのキャッシュデータをリセット（クリア）します。

```ts
await dataManager.resetSource(userDataSource);
```

##### `resetParams(dataSource, params)`

特定のパラメータのキャッシュデータをリセットします。

```ts
await dataManager.resetParams(userDataSource, {userId: 123});
```

##### `invalidateSourceTags(dataSource, params, options?)`

データソースによって生成されたタグに基づいてクエリを無効化します。

```ts
await dataManager.invalidateSourceTags(userDataSource, {userId: 123});
```

### Utilities

#### `skipContext(fetchFunction)`

既存の fetch 関数をデータソースインターフェースに適応させるユーティリティです。

```ts
// 既存の関数
async function fetchUser(params: {userId: number}) {
  // ...
}

// データソース用に適応
const dataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(fetchUser), // context と fetchContext パラメータをスキップします
});
```

#### `withCatch(fetchFunction, errorHandler)`

fetch関数に標準化されたエラーハンドリングを追加します。

```ts
const safeFetch = withCatch(fetchUser, (error) => ({error: true, message: error.message}));
```

#### `withCancellation(fetchFunction)`

fetch関数にキャンセル機能を追加します。

```ts
const cancellableFetch = withCancellation(fetchFunction);
// React QueryのAbortSignalを自動的に処理します
```

#### `getProgressiveRefetch(options)`

段階的なリフェッチ間隔関数を作成します。

```ts
const progressiveRefetch = getProgressiveRefetch({
  minInterval: 1000, // 1秒から開始
  maxInterval: 30000, // 最大30秒
  multiplier: 2, // その都度2倍にする
});

const dataSource = makePlainQueryDataSource({
  name: 'data',
  fetch: skipContext(fetchData),
  options: {
    refetchInterval: progressiveRefetch,
  },
});
```

#### `normalizeStatus(status, fetchStatus)`

React QueryのステータスをDataLoaderのステータスに変換します。

```ts
const status = normalizeStatus('pending', 'fetching'); // 'loading'
```

#### ステータスとエラーユーティリティ

```ts
// 複数のステータスから結合されたステータスを取得
const status = getStatus([user, posts, comments]);

// 複数のステータスから最初のエラーを取得
const error = getError([user, posts, comments]);

// 複数のステータスをマージ
const combinedStatus = mergeStatuses(['loading', 'success', 'error']); // 'error'

// クエリキーにタグが含まれているか確認
const hasUserTag = hasTag(queryKey, 'users');
```

#### キー合成ユーティリティ

```ts
// データソースのキャッシュキーを合成
const key = composeKey(userDataSource, {userId: 123});

// タグを含む完全なキーを合成
const fullKey = composeFullKey(userDataSource, {userId: 123});
```

#### 定数

```ts
import {idle} from '@gravity-ui/data-source';

// クエリ実行をスキップするための特別なシンボル
const params = shouldFetch ? {userId: 123} : idle;

// enabled: false の型安全な代替手段
// 以下のようにする代わりに:
const {data} = useQueryData(userDataSource, {userId: userId || ''}, {enabled: Boolean(userId)});

// 以下のように使用します:
const {data} = useQueryData(userDataSource, userId ? {userId} : idle);
// TypeScript は両方の分岐で型を正しく推論します
```

#### クリオプションの合成

```ts
// プレーンクエリのReact Queryオプションを合成
const plainOptions = composePlainQueryOptions(context, dataSource, params, options);

// 無限クエリのReact Queryオプションを合成
const infiniteOptions = composeInfiniteQueryOptions(context, dataSource, params, options);
```

**注意:** これらの関数は主に、カスタムデータソース実装を作成する際の内部使用を目的としています。

## 高度なパターン

### idle を使用した条件付きクエリ

`idle` を使用して条件付きクエリを作成します。

```ts
import {idle} from '@gravity-ui/data-source';

const ConditionalDataComponent: React.FC<{
  userId?: number;
  shouldLoadPosts: boolean;
}> = ({userId, shouldLoadPosts}) => {
  // userId が定義されている場合のみユーザーをロード
  const user = useQueryData(
    userDataSource,
    userId ? {userId} : idle
  );

  // ユーザーがロードされ、フラグが有効な場合のみ投稿をロード
  const posts = useQueryData(
    userPostsDataSource,
    user.data && shouldLoadPosts ? {userId: user.data.id} : idle
  );

  const combined = useQueryResponses([user, posts]);

  return (
    <DataLoader status={combined.status} error={combined.error}>
      <div>
        {user.data && <UserInfo user={user.data} />}
        {posts.data && <UserPosts posts={posts.data} />}
      </div>
    </DataLoader>
  );
};
```

### データ変換

リクエストパラメータとレスポンスデータを変換します。

```ts
const apiDataSource = makePlainQueryDataSource({
  name: 'api-data',
  transformParams: (params: {id: number}) => ({
    userId: params.id,
    apiVersion: 'v2',
    format: 'json',
  }),
  transformResponse: (response: ApiResponse) => ({
    user: response.data.user,
    metadata: response.meta,
  }),
  fetch: skipContext(apiFetch),
});
```

### タグベースのキャッシュ無効化

タグを使用して高度なキャッシュ管理を行います。

```ts
const userDataSource = makePlainQueryDataSource({
  name: 'user',
  tags: (params) => [`user:${params.userId}`, 'users', 'profiles'],
  fetch: skipContext(fetchUser),
});

const userPostsDataSource = makePlainQueryDataSource({
  name: 'user-posts',
  tags: (params) => [`user:${params.userId}`, 'posts'],
  fetch: skipContext(fetchUserPosts),
});

// 特定ユーザーのすべてのデータを無効化
await dataManager.invalidateTag('user:123');

// すべてのユーザー関連データを無効化
await dataManager.invalidateTag('users');
```

### 型によるエラーハンドリング

型安全なエラーハンドリングを作成します。

```ts
interface ApiError {
  code: number;
  message: string;
  details?: Record<string, unknown>;
}

const ErrorView: React.FC<ErrorViewProps<ApiError>> = ({error, action}) => (
  <div className="error">
    <h3>Error {error?.code}</h3>
    <p>{error?.message}</p>
    {action && (
      <button onClick={action.handler}>
        {action.children || 'Retry'}
      </button>
    )}
  </div>
);
```

### 複雑なページネーションを持つ無限クエリ

複雑なページネーションシナリオを処理します。

```ts
interface PaginationParams {
  cursor?: string;
  limit?: number;
  filters?: Record<string, unknown>;
}

interface PaginatedResponse<T> {
  data: T[];
  nextCursor?: string;
  hasMore: boolean;
}

const infiniteDataSource = makeInfiniteQueryDataSource({
  name: 'paginated-data',
  fetch: skipContext(async (params: PaginationParams) => {
    const response = await fetch(`/api/data?${new URLSearchParams(params)}`);
    return response.json() as PaginatedResponse<DataItem>;
  }),
  next: (lastPage) => {
    if (lastPage.hasMore && lastPage.nextCursor) {
      return {cursor: lastPage.nextCursor, limit: 20};
    }
    return undefined;
  },
});
```

### 複数のデータソースの結合

複数のソースからのデータを結合します。

```ts
const UserProfile: React.FC<{userId: number}> = ({userId}) => {
  const user = useQueryData(userDataSource, {userId});
  const posts = useQueryData(userPostsDataSource, {userId});
  const followers = useQueryData(userFollowersDataSource, {userId});

  const combined = useQueryResponses([user, posts, followers]);
```

```jsx
// Types are automatically inferred
const userDataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(async (params: {userId: number}): Promise<User> => {
    // Return type is inferred as User
  }),
});

// Hook return type is automatically typed
const {data} = useQueryData(userDataSource, {userId: 123});
// data is typed as User | undefined
```

### カスタムエラータイプ

カスタムエラータイプを定義して使用します。

```ts
interface ValidationError {
  field: string;
  message: string;
}

interface ApiError {
  type: 'network' | 'validation' | 'server';
  message: string;
  validation?: ValidationError[];
}

const typedDataSource = makePlainQueryDataSource<
  {id: number}, // Params type
  {id: number}, // Request type
  ApiResponse, // Response type
  User, // Data type
  ApiError // Error type
>({
  name: 'typed-user',
  fetch: skipContext(fetchUser),
});
```

## 貢献

コードオブコンダクトおよびプルリクエストの送信プロセスについては、[CONTRIBUTING.md](CONTRIBUTING.md) をお読みください。

## ライセンス

MIT License. 詳細については、[LICENSE](LICENSE) ファイルを参照してください。