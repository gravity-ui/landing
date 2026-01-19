# Data Source &middot; [![npm version](https://img.shields.io/npm/v/@gravity-ui/data-source?logo=npm&label=version)](https://www.npmjs.com/package/@gravity-ui/data-source) [![ci](https://img.shields.io/github/actions/workflow/status/gravity-ui/data-source/ci.yml?branch=main&label=ci&logo=github)](https://github.com/gravity-ui/data-source/actions/workflows/ci.yml?query=branch:main)

**Data Source** is a simple wrapper around data fetching. It is a kind of "port" in [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). It allows you to make wrappers for stuff around data fetching depending on your use cases. **Data Source** uses [react-query](https://tanstack.com/query/latest) under the hood.

## Installation

```bash
npm install @gravity-ui/data-source @tanstack/react-query
```

`@tanstack/react-query` is a peer dependency.

## Quick Start

### 1. Setup DataManager

First, create and provide a `DataManager` in your application:

```tsx
import React from 'react';
import {ClientDataManager, DataManagerContext} from '@gravity-ui/data-source';

const dataManager = new ClientDataManager({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 3,
    },
    // ... other react-query options
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

### 2. Define Error Types and Wrappers

Define a type of error and make your constructors for data sources based on default constructors:

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

### 3. Create Custom DataLoader Component

Write a `DataLoader` component based on default to define your display of loading status and errors:

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
  LoadingView = YourLoader, // You can use your own loader component
  ErrorView = YourError, // You can use your own error component
  ...restProps
}) => {
  return <DataLoaderBase LoadingView={LoadingView} ErrorView={ErrorView} {...restProps} />;
};
```

### 4. Define Your First Data Source

```ts
import {skipContext} from '@gravity-ui/data-source';

// Your API function
import {fetchUser} from './api';

export const userDataSource = makePlainQueryDataSource({
  // Keys have to be unique. Maybe you should create a helper for making names of data sources
  name: 'user',
  // skipContext is a helper to skip 2 first parameters in the function (context and fetchContext)
  fetch: skipContext(fetchUser),
  // Optional: generate tags for advanced cache invalidation
  tags: (params) => [`user:${params.userId}`, 'users'],
});
```

### 5. Use in Components

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

## Core Concepts

### Data Source Types

The library provides two main types of data sources:

#### Plain Query Data Source

For simple request/response patterns:

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

For pagination and infinite scrolling:

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

### Status Management

The library normalizes query states into three simple statuses:

- `loading` - Actual data loading. The same as `isLoading` in React Query
- `success` - Data available (may be skipped using idle)
- `error` - Failed to fetch data

### Idle Concept

The library provides a special `idle` symbol for skipping query execution:

```ts
import {idle} from '@gravity-ui/data-source';

const UserProfile: React.FC<{userId?: number}> = ({userId}) => {
  // Query won't execute if userId is not defined
  const {data, status} = useQueryData(userDataSource, userId ? {userId} : idle);

  return (
    <DataLoader status={status} error={null}>
      {data && <UserCard user={data} />}
    </DataLoader>
  );
};
```

When parameters equal `idle`:

- Query doesn't execute
- Status remains `success`
- Data remains `undefined`
- Component can safely render without loading

**Benefits of `idle`:**

1. **Type Safety** - TypeScript correctly infers types for conditional parameters
2. **Performance** - Avoids unnecessary server requests
3. **Logic Simplicity** - No need to manage additional `enabled` state
4. **Consistency** - Unified approach for all conditional queries

This is especially useful for conditional queries when you want to load data only under certain conditions while maintaining type safety.

## API Reference

### Creating Data Sources

#### `makePlainQueryDataSource(config)`

Creates a plain query data source for simple request/response patterns.

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

**Parameters:**

- `name` - Unique identifier for the data source
- `fetch` - Function that performs the actual data fetching
- `transformParams` (optional) - Transform input parameters before request
- `transformResponse` (optional) - Transform response data
- `tags` (optional) - Generate cache tags for invalidation
- `options` (optional) - React Query options

#### `makeInfiniteQueryDataSource(config)`

Creates an infinite query data source for pagination and infinite scrolling patterns.

```ts
const infiniteDataSource = makeInfiniteQueryDataSource({
  name: 'infinite-data',
  fetch: skipContext(fetchFunction),
  next: (lastPage, allPages) => nextPageParam || undefined,
  prev: (firstPage, allPages) => prevPageParam || undefined,
  // ... other options same as plain
});
```

**Additional Parameters:**

- `next` - Function to determine next page parameters
- `prev` (optional) - Function to determine previous page parameters

### React Hooks

#### `useQueryData(dataSource, params, options?)`

Main hook for fetching data with a data source.

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

**Returns:**

- `data` - The fetched data
- `status` - Current status ('loading' | 'success' | 'error')
- `error` - Error object if request failed
- `refetch` - Function to manually refetch data
- Other React Query properties

#### `useQueryResponses(responses)`

Combines multiple query responses into a single state.

```ts
const user = useQueryData(userDataSource, {userId});
const posts = useQueryData(postsDataSource, {userId});

const {status, error, refetch, refetchErrored} = useQueryResponses([user, posts]);
```

**Returns:**

- `status` - Combined status of all queries
- `error` - First error encountered
- `refetch` - Function to refetch all queries
- `refetchErrored` - Function to refetch only failed queries

#### `useRefetchAll(states)`

Creates a callback to refetch multiple queries.

```ts
const refetchAll = useRefetchAll([user, posts, comments]);
// refetchAll() will trigger refetch for all queries
```

#### `useRefetchErrored(states)`

Creates a callback to refetch only failed queries.

```ts
const refetchErrored = useRefetchErrored([user, posts, comments]);
// refetchErrored() will only refetch queries with errors
```

#### `useDataManager()`

Returns the DataManager from context.

```ts
const dataManager = useDataManager();
await dataManager.invalidateTag('users');
```

#### `useQueryContext()`

Returns the query context (for building custom data hooks base on react-query).

### React Components

#### `<DataLoader />`

Component for handling loading states and errors.

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

- `status` - Current loading status
- `error` - Error object
- `errorAction` - Function or action config for error retry
- `LoadingView` - Component to show during loading
- `ErrorView` - Component to show on error
- `loadingViewProps` - Props passed to LoadingView
- `errorViewProps` - Props passed to ErrorView

#### `<DataInfiniteLoader />`

Specialized component for infinite queries.

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

**Additional Props:**

- `hasNextPage` - Whether more pages are available
- `fetchNextPage` - Function to fetch next page
- `isFetchingNextPage` - Whether next page is being fetched
- `MoreView` - Component for "load more" button

#### `withDataManager(Component)`

HOC that injects DataManager as a prop.

```tsx
const MyComponent = withDataManager<Props>(({dataManager, ...props}) => {
  // Component has access to dataManager
  return <div>...</div>;
});
```

### Data Management

#### `ClientDataManager`

Main class for data management.

```ts
const dataManager = new ClientDataManager({
  defaultOptions: {
    queries: {
      staleTime: 300000, // 5 minutes
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});
```

**Methods:**

##### `invalidateTag(tag, options?)`

Invalidate all queries with a specific tag.

```ts
await dataManager.invalidateTag('users');
await dataManager.invalidateTag('posts', {
  repeat: {count: 3, interval: 1000}, // Retry invalidation
});
```

##### `invalidateTags(tags, options?)`

Invalidate queries that have all specified tags.

```ts
await dataManager.invalidateTags(['user', 'profile']);
```

##### `invalidateSource(dataSource, options?)`

Invalidate all queries for a data source.

```ts
await dataManager.invalidateSource(userDataSource);
```

##### `invalidateParams(dataSource, params, options?)`

Invalidate a specific query with exact parameters.

```ts
await dataManager.invalidateParams(userDataSource, {userId: 123});
```

##### `resetSource(dataSource)`

Reset (clear) all cached data for a data source.

```ts
await dataManager.resetSource(userDataSource);
```

##### `resetParams(dataSource, params)`

Reset cached data for specific parameters.

```ts
await dataManager.resetParams(userDataSource, {userId: 123});
```

##### `invalidateSourceTags(dataSource, params, options?)`

Invalidate queries based on tags generated by a data source.

```ts
await dataManager.invalidateSourceTags(userDataSource, {userId: 123});
```

### Utilities

#### `skipContext(fetchFunction)`

Utility to adapt existing fetch functions to data source interface.

```ts
// Existing function
async function fetchUser(params: {userId: number}) {
  // ...
}

// Adapted for data source
const dataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(fetchUser), // Skips context and fetchContext params
});
```

#### `withCatch(fetchFunction, errorHandler)`

Adds standardized error handling to fetch functions.

```ts
const safeFetch = withCatch(fetchUser, (error) => ({error: true, message: error.message}));
```

#### `withCancellation(fetchFunction)`

Adds cancellation support to fetch functions.

```ts
const cancellableFetch = withCancellation(fetchFunction);
// Automatically handles AbortSignal from React Query
```

#### `getProgressiveRefetch(options)`

Creates a progressive refetch interval function.

```ts
const progressiveRefetch = getProgressiveRefetch({
  minInterval: 1000, // Start with 1 second
  maxInterval: 30000, // Max 30 seconds
  multiplier: 2, // Double each time
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

Converts React Query statuses to DataLoader status.

```ts
const status = normalizeStatus('pending', 'fetching'); // 'loading'
```

#### Status and Error Utilities

```ts
// Get combined status from multiple states
const status = getStatus([user, posts, comments]);

// Get first error from multiple states
const error = getError([user, posts, comments]);

// Merge multiple statuses
const combinedStatus = mergeStatuses(['loading', 'success', 'error']); // 'error'

// Check if query key has a tag
const hasUserTag = hasTag(queryKey, 'users');
```

#### Key Composition Utilities

```ts
// Compose cache key for a data source
const key = composeKey(userDataSource, {userId: 123});

// Compose full key including tags
const fullKey = composeFullKey(userDataSource, {userId: 123});
```

#### Constants

```ts
import {idle} from '@gravity-ui/data-source';

// Special symbol for skipping query execution
const params = shouldFetch ? {userId: 123} : idle;

// Type-safe alternative to enabled: false
// Instead of:
const {data} = useQueryData(userDataSource, {userId: userId || ''}, {enabled: Boolean(userId)});

// Use:
const {data} = useQueryData(userDataSource, userId ? {userId} : idle);
// TypeScript correctly infers types for both branches
```

#### Query Options Composition

```ts
// Compose React Query options for plain queries
const plainOptions = composePlainQueryOptions(context, dataSource, params, options);

// Compose React Query options for infinite queries
const infiniteOptions = composeInfiniteQueryOptions(context, dataSource, params, options);
```

**Note:** These functions are primarily for internal use when creating custom data source implementations.

## Advanced Patterns

### Conditional Queries with Idle

Use `idle` to create conditional queries:

```ts
import {idle} from '@gravity-ui/data-source';

const ConditionalDataComponent: React.FC<{
  userId?: number;
  shouldLoadPosts: boolean;
}> = ({userId, shouldLoadPosts}) => {
  // Load user only if userId is defined
  const user = useQueryData(
    userDataSource,
    userId ? {userId} : idle
  );

  // Load posts only if user is loaded and flag is enabled
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

### Data Transformation

Transform request parameters and response data:

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

### Tag-Based Cache Invalidation

Use tags for sophisticated cache management:

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

// Invalidate all data for specific user
await dataManager.invalidateTag('user:123');

// Invalidate all user-related data
await dataManager.invalidateTag('users');
```

### Error Handling with Types

Create type-safe error handling:

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

### Infinite Queries with Complex Pagination

Handle complex pagination scenarios:

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

### Combining Multiple Data Sources

Combine data from multiple sources:

```ts
const UserProfile: React.FC<{userId: number}> = ({userId}) => {
  const user = useQueryData(userDataSource, {userId});
  const posts = useQueryData(userPostsDataSource, {userId});
  const followers = useQueryData(userFollowersDataSource, {userId});

  const combined = useQueryResponses([user, posts, followers]);

  return (
    <DataLoader
      status={combined.status}
      error={combined.error}
      errorAction={combined.refetchErrored} // Only retry failed requests
      LoadingView={ProfileSkeleton}
      ErrorView={ProfileError}
    >
      {user && posts && followers && (
        <div>
          <UserInfo user={user.data} />
          <UserPosts posts={posts.data} />
          <UserFollowers followers={followers.data} />
        </div>
      )}
    </DataLoader>
  );
};
```

## TypeScript Support

The library is built with TypeScript-first approach and provides full type inference:

```ts
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

### Custom Error Types

Define and use custom error types:

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

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

MIT License. See [LICENSE](LICENSE) file for details.

