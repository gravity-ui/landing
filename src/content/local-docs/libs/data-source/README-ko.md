# Data Source &middot; [![npm version](https://img.shields.io/npm/v/@gravity-ui/data-source?logo=npm&label=version)](https://www.npmjs.com/package/@gravity-ui/data-source) [![ci](https://img.shields.io/github/actions/workflow/status/gravity-ui/data-source/ci.yml?branch=main&label=ci&logo=github)](https://github.com/gravity-ui/data-source/actions/workflows/ci.yml?query=branch:main)

**Data Source**는 데이터 페칭을 위한 간단한 래퍼입니다. [클린 아키텍처](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)의 일종의 "포트"라고 할 수 있습니다. 이를 통해 사용 사례에 따라 데이터 페칭과 관련된 래퍼를 만들 수 있습니다. **Data Source**는 내부적으로 [react-query](https://tanstack.com/query/latest)를 사용합니다.

## 설치

```bash
npm install @gravity-ui/data-source @tanstack/react-query
```

`@tanstack/react-query`는 피어 의존성입니다.

## 빠른 시작

### 1. DataManager 설정

먼저 애플리케이션에 `DataManager`를 생성하고 제공합니다.

```tsx
import React from 'react';
import {ClientDataManager, DataManagerContext} from '@gravity-ui/data-source';

const dataManager = new ClientDataManager({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5분
      retry: 3,
    },
    // ... 기타 react-query 옵션
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

### 2. 오류 유형 및 래퍼 정의

오류 유형을 정의하고 기본 생성자를 기반으로 데이터 소스 생성자를 만듭니다.

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

### 3. 사용자 정의 DataLoader 컴포넌트 생성

로딩 상태 및 오류 표시를 정의하기 위해 기본값 기반의 `DataLoader` 컴포넌트를 작성합니다.

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
  LoadingView = YourLoader, // 자신만의 로더 컴포넌트를 사용할 수 있습니다.
  ErrorView = YourError, // 자신만의 오류 컴포넌트를 사용할 수 있습니다.
  ...restProps
}) => {
  return <DataLoaderBase LoadingView={LoadingView} ErrorView={ErrorView} {...restProps} />;
};
```

### 4. 첫 번째 데이터 소스 정의

```ts
import {skipContext} from '@gravity-ui/data-source';

// API 함수
import {fetchUser} from './api';

export const userDataSource = makePlainQueryDataSource({
  // 키는 고유해야 합니다. 데이터 소스 이름 생성을 위한 헬퍼를 만드는 것이 좋을 수 있습니다.
  name: 'user',
  // skipContext는 함수의 첫 두 매개변수(context 및 fetchContext)를 건너뛰는 헬퍼입니다.
  fetch: skipContext(fetchUser),
  // 선택 사항: 고급 캐시 무효화를 위한 태그 생성
  tags: (params) => [`user:${params.userId}`, 'users'],
});
```

### 5. 컴포넌트에서 사용

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

## 핵심 개념

### 데이터 소스 유형

라이브러리는 두 가지 주요 데이터 소스 유형을 제공합니다.

#### 일반 쿼리 데이터 소스

간단한 요청/응답 패턴의 경우:

```ts
const userDataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(async (params: {userId: number}) => {
    const response = await fetch(`/api/users/${params.userId}`);
    return response.json();
  }),
});
```

#### 무한 쿼리 데이터 소스

페이지네이션 및 무한 스크롤의 경우:

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

### 상태 관리

라이브러리는 쿼리 상태를 세 가지 간단한 상태로 정규화합니다.

- `loading` - 실제 데이터 로딩 중입니다. React Query의 `isLoading`과 동일합니다.
- `success` - 데이터를 사용할 수 있습니다 (idle로 건너뛸 수 있습니다).
- `error` - 데이터 페칭에 실패했습니다.

### Idle 개념

라이브러리는 쿼리 실행을 건너뛰기 위한 특별한 `idle` 심볼을 제공합니다.

```ts
import {idle} from '@gravity-ui/data-source';

const UserProfile: React.FC<{userId?: number}> = ({userId}) => {
  // userId가 정의되지 않은 경우 쿼리가 실행되지 않습니다.
  const {data, status} = useQueryData(userDataSource, userId ? {userId} : idle);

  return (
    <DataLoader status={status} error={null}>
      {data && <UserCard user={data} />}
    </DataLoader>
  );
};
```

매개변수가 `idle`과 같을 때:

- 쿼리가 실행되지 않습니다.
- 상태는 `success`로 유지됩니다.
- 데이터는 `undefined`로 유지됩니다.
- 컴포넌트는 로딩 없이 안전하게 렌더링할 수 있습니다.

**`idle`의 장점:**

1. **타입 안전성** - TypeScript는 조건부 매개변수에 대한 타입을 올바르게 추론합니다.
2. **성능** - 불필요한 서버 요청을 방지합니다.
3. **로직 단순화** - 추가 `enabled` 상태를 관리할 필요가 없습니다.
4. **일관성** - 모든 조건부 쿼리에 대한 통합된 접근 방식입니다.

이는 타입 안전성을 유지하면서 특정 조건에서만 데이터를 로드하려는 조건부 쿼리에 특히 유용합니다.

## API 참조

### 데이터 소스 생성

#### `makePlainQueryDataSource(config)`

간단한 요청/응답 패턴을 위한 일반 쿼리 데이터 소스를 생성합니다.

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
    // ... 기타 react-query 옵션
  },
});
```

**매개변수:**

- `name` - 데이터 소스의 고유 식별자
- `fetch` - 실제 데이터 페칭을 수행하는 함수
- `transformParams` (선택 사항) - 요청 전 입력 매개변수 변환
- `transformResponse` (선택 사항) - 응답 데이터 변환
- `tags` (선택 사항) - 무효화를 위한 캐시 태그 생성
- `options` (선택 사항) - React Query 옵션

#### `makeInfiniteQueryDataSource(config)`

페이지네이션 및 무한 스크롤 패턴을 위한 무한 쿼리 데이터 소스를 생성합니다.

```ts
const infiniteDataSource = makeInfiniteQueryDataSource({
  name: 'infinite-data',
  fetch: skipContext(fetchFunction),
  next: (lastPage, allPages) => nextPageParam || undefined,
  prev: (firstPage, allPages) => prevPageParam || undefined,
  // ... 일반 옵션과 동일한 기타 옵션
});
```

**추가 매개변수:**

- `next` - 다음 페이지 매개변수를 결정하는 함수
- `prev` (선택 사항) - 이전 페이지 매개변수를 결정하는 함수

### React Hooks

#### `useQueryData(dataSource, params, options?)`

데이터 소스로 데이터를 페칭하는 메인 훅입니다.

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

**반환값:**

- `data` - 페칭된 데이터
- `status` - 현재 상태 ('loading' | 'success' | 'error')
- `error` - 요청 실패 시 오류 객체
- `refetch` - 데이터를 수동으로 다시 페칭하는 함수
- 기타 React Query 속성

#### `useQueryResponses(responses)`

여러 쿼리 응답을 단일 상태로 결합합니다.

```ts
const user = useQueryData(userDataSource, {userId});
const posts = useQueryData(postsDataSource, {userId});

const {status, error, refetch, refetchErrored} = useQueryResponses([user, posts]);
```

**반환값:**

- `status` - 모든 쿼리의 결합된 상태
- `error` - 처음 발생한 오류
- `refetch` - 모든 쿼리를 다시 페칭하는 함수
- `refetchErrored` - 실패한 쿼리만 다시 페칭하는 함수

#### `useRefetchAll(states)`

여러 쿼리를 다시 페칭하는 콜백을 생성합니다.

```ts
const refetchAll = useRefetchAll([user, posts, comments]);
// refetchAll()은 모든 쿼리에 대해 refetch를 트리거합니다.
```

#### `useRefetchErrored(states)`

실패한 쿼리만 다시 페칭하는 콜백을 생성합니다.

```ts
const refetchErrored = useRefetchErrored([user, posts, comments]);
// refetchErrored()는 오류가 있는 쿼리만 다시 페칭합니다.
```

#### `useDataManager()`

컨텍스트에서 DataManager를 반환합니다.

```ts
const dataManager = useDataManager();
await dataManager.invalidateTag('users');
```

#### `useQueryContext()`

쿼리 컨텍스트를 반환합니다 (react-query 기반의 사용자 정의 데이터 훅을 구축하기 위해).

### React 컴포넌트

#### `<DataLoader />`

로딩 상태 및 오류 처리를 위한 컴포넌트입니다.

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

- `status` - 현재 로딩 상태
- `error` - 오류 객체
- `errorAction` - 오류 재시도를 위한 함수 또는 액션 구성
- `LoadingView` - 로딩 중에 표시할 컴포넌트
- `ErrorView` - 오류 발생 시 표시할 컴포넌트
- `loadingViewProps` - LoadingView에 전달되는 props
- `errorViewProps` - ErrorView에 전달되는 props

#### `<DataInfiniteLoader />`

무한 쿼리를 위한 특수 컴포넌트입니다.

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

**추가 Props:**

- `hasNextPage` - 더 많은 페이지를 사용할 수 있는지 여부
- `fetchNextPage` - 다음 페이지를 페칭하는 함수
- `isFetchingNextPage` - 다음 페이지가 페칭 중인지 여부
- `MoreView` - "더 보기" 버튼을 위한 컴포넌트

#### `withDataManager(Component)`

DataManager를 prop으로 주입하는 HOC입니다.

```tsx
const MyComponent = withDataManager<Props>(({dataManager, ...props}) => {
  // 컴포넌트는 dataManager에 접근할 수 있습니다.
  return <div>...</div>;
});
```

### 데이터 관리

#### `ClientDataManager`

데이터 관리를 위한 메인 클래스입니다.

```ts
const dataManager = new ClientDataManager({
  defaultOptions: {
    queries: {
      staleTime: 300000, // 5분
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});
```

**메서드:**

##### `invalidateTag(tag, options?)`

특정 태그를 가진 모든 쿼리를 무효화합니다.

```ts
await dataManager.invalidateTag('users');
await dataManager.invalidateTag('posts', {
  repeat: {count: 3, interval: 1000}, // 무효화 재시도
});
```

##### `invalidateTags(tags, options?)`

지정된 모든 태그를 가진 쿼리를 무효화합니다.

```ts
await dataManager.invalidateTags(['user', 'profile']);
```

##### `invalidateSource(dataSource, options?)`

데이터 소스에 대한 모든 쿼리를 무효화합니다.

```ts
await dataManager.invalidateSource(userDataSource);
```

##### `invalidateParams(dataSource, params, options?)`

정확한 매개변수로 특정 쿼리를 무효화합니다.

```ts
await dataManager.invalidateParams(userDataSource, {userId: 123});
```

##### `resetSource(dataSource)`

데이터 소스의 모든 캐시된 데이터를 재설정(지움)합니다.

```ts
await dataManager.resetSource(userDataSource);
```

##### `resetParams(dataSource, params)`

특정 매개변수에 대한 캐시된 데이터를 재설정합니다.

```ts
await dataManager.resetParams(userDataSource, {userId: 123});
```

##### `invalidateSourceTags(dataSource, params, options?)`

데이터 소스에서 생성된 태그를 기반으로 쿼리를 무효화합니다.

```ts
await dataManager.invalidateSourceTags(userDataSource, {userId: 123});
```

### 유틸리티

#### `skipContext(fetchFunction)`

기존 fetch 함수를 데이터 소스 인터페이스에 맞게 조정하는 유틸리티입니다.

```ts
// 기존 함수
async function fetchUser(params: {userId: number}) {
  // ...
}

// 데이터 소스에 맞게 조정
const dataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(fetchUser), // 컨텍스트 및 fetchContext 매개변수를 건너뜁니다.
});
```

#### `withCatch(fetchFunction, errorHandler)`

```html
<div class="language-selector">
  <a href="/en/readme.html">English</a>
  <a href="/ko/readme.html">한국어</a>
</div>
```

fetch 함수에 표준화된 오류 처리를 추가합니다.

```ts
const safeFetch = withCatch(fetchUser, (error) => ({error: true, message: error.message}));
```

#### `withCancellation(fetchFunction)`

fetch 함수에 취소 기능을 추가합니다.

```ts
const cancellableFetch = withCancellation(fetchFunction);
// React Query의 AbortSignal을 자동으로 처리합니다.
```

#### `getProgressiveRefetch(options)`

점진적인 리페치 간격 함수를 생성합니다.

```ts
const progressiveRefetch = getProgressiveRefetch({
  minInterval: 1000, // 1초부터 시작
  maxInterval: 30000, // 최대 30초
  multiplier: 2, // 매번 두 배씩 증가
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

React Query의 상태를 DataLoader 상태로 변환합니다.

```ts
const status = normalizeStatus('pending', 'fetching'); // 'loading'
```

#### 상태 및 오류 유틸리티

```ts
// 여러 상태에서 결합된 상태 가져오기
const status = getStatus([user, posts, comments]);

// 여러 상태에서 첫 번째 오류 가져오기
const error = getError([user, posts, comments]);

// 여러 상태 병합
const combinedStatus = mergeStatuses(['loading', 'success', 'error']); // 'error'

// 쿼리 키에 태그가 있는지 확인
const hasUserTag = hasTag(queryKey, 'users');
```

#### 키 조합 유틸리티

```ts
// 데이터 소스의 캐시 키 조합
const key = composeKey(userDataSource, {userId: 123});

// 태그를 포함한 전체 키 조합
const fullKey = composeFullKey(userDataSource, {userId: 123});
```

#### 상수

```ts
import {idle} from '@gravity-ui/data-source';

// 쿼리 실행을 건너뛰기 위한 특수 심볼
const params = shouldFetch ? {userId: 123} : idle;

// enabled: false의 타입 안전한 대안
// 대신:
const {data} = useQueryData(userDataSource, {userId: userId || ''}, {enabled: Boolean(userId)});

// 사용:
const {data} = useQueryData(userDataSource, userId ? {userId} : idle);
// TypeScript는 두 분기 모두에 대해 올바르게 타입을 추론합니다.
```

#### 쿼리 옵션 조합

```ts
// 일반 쿼리에 대한 React Query 옵션 조합
const plainOptions = composePlainQueryOptions(context, dataSource, params, options);

// 무한 쿼리에 대한 React Query 옵션 조합
const infiniteOptions = composeInfiniteQueryOptions(context, dataSource, params, options);
```

**참고:** 이 함수들은 주로 사용자 정의 데이터 소스 구현을 생성할 때 내부적으로 사용됩니다.

## 고급 패턴

### Idle을 사용한 조건부 쿼리

`idle`을 사용하여 조건부 쿼리를 생성합니다.

```ts
import {idle} from '@gravity-ui/data-source';

const ConditionalDataComponent: React.FC<{
  userId?: number;
  shouldLoadPosts: boolean;
}> = ({userId, shouldLoadPosts}) => {
  // userId가 정의된 경우에만 사용자 로드
  const user = useQueryData(
    userDataSource,
    userId ? {userId} : idle
  );

  // 사용자가 로드되었고 플래그가 활성화된 경우에만 게시물 로드
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

### 데이터 변환

요청 매개변수 및 응답 데이터를 변환합니다.

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

### 태그 기반 캐시 무효화

태그를 사용하여 정교한 캐시 관리를 수행합니다.

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

// 특정 사용자의 모든 데이터 무효화
await dataManager.invalidateTag('user:123');

// 모든 사용자 관련 데이터 무효화
await dataManager.invalidateTag('users');
```

### 타입 안전한 오류 처리

타입 안전한 오류 처리를 생성합니다.

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

### 복잡한 페이징을 사용한 무한 쿼리

복잡한 페이징 시나리오를 처리합니다.

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

### 여러 데이터 소스 결합

여러 소스의 데이터를 결합합니다.

```ts
const UserProfile: React.FC<{userId: number}> = ({userId}) => {
  const user = useQueryData(userDataSource, {userId});
  const posts = useQueryData(userPostsDataSource, {userId});
  const followers = useQueryData(userFollowersDataSource, {userId});

  const combined = useQueryResponses([user, posts, followers]);
```

```html
<p>
  <a href="https://github.com/gravity-ui/data-sources/blob/main/README.md">English</a> |
  <a href="https://github.com/gravity-ui/data-sources/blob/main/README.ko.md">한국어</a>
</p>
```

# @gravity-ui/data-sources

이 라이브러리는 React 애플리케이션에서 데이터 페칭 및 상태 관리를 위한 간단하고 강력한 솔루션을 제공합니다.

## 주요 기능

*   **간단한 API**: 데이터 소스를 정의하고 훅을 사용하여 데이터를 쉽게 가져올 수 있습니다.
*   **상태 관리**: 로딩, 에러, 성공 상태를 자동으로 관리합니다.
*   **TypeScript 지원**: 타입 안전성을 보장하고 개발 생산성을 높입니다.
*   **캐싱 및 재검증**: 데이터 중복을 피하고 최신 상태를 유지합니다.
*   **유연성**: 다양한 데이터 페칭 시나리오에 맞게 사용자 정의가 가능합니다.

## 설치

```bash
npm install @gravity-ui/data-sources
# 또는
yarn add @gravity-ui/data-sources
```

## 사용법

### 1. 데이터 소스 정의

`makePlainQueryDataSource` 또는 `makeMutationDataSource`를 사용하여 데이터 소스를 정의합니다.

```ts
import { makePlainQueryDataSource, skipContext } from '@gravity-ui/data-sources';

interface User {
  id: number;
  name: string;
}

const userDataSource = makePlainQueryDataSource<
  { userId: number }, // Params type
  User // Response type
>({
  name: 'user',
  fetch: skipContext(async (params) => {
    const response = await fetch(`/api/users/${params.userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return response.json();
  }),
});
```

### 2. 데이터 가져오기

`useQueryData` 훅을 사용하여 정의된 데이터 소스에서 데이터를 가져옵니다.

```ts
import { useQueryData } from '@gravity-ui/data-sources';
import { userDataSource } from './dataSources'; // 위에서 정의한 데이터 소스

function UserProfile({ userId }: { userId: number }) {
  const { data, isLoading, error, refetch } = useQueryData(userDataSource, { userId });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error.message}
        <button onClick={refetch}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>User ID: {data?.id}</p>
    </div>
  );
}
```

### 3. 뮤테이션 (데이터 변경)

`makeMutationDataSource`와 `useMutationData`를 사용하여 데이터를 생성, 업데이트 또는 삭제합니다.

```ts
import { makeMutationDataSource, useMutationData } from '@gravity-ui/data-sources';

interface Post {
  id: number;
  title: string;
  body: string;
}

const createPostDataSource = makeMutationDataSource<
  Post, // Request body type
  Post // Response type
>({
  name: 'createPost',
  fetch: async (postData) => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error('Failed to create post');
    }
    return response.json();
  },
});

function CreatePostForm() {
  const { mutate, isLoading, error } = useMutationData(createPostDataSource);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title') as string;
    const body = formData.get('body') as string;

    await mutate({ title, body });
    alert('Post created successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" required />
      <textarea name="body" placeholder="Body" required />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Creating...' : 'Create Post'}
      </button>
      {error && <div>Error: {error.message}</div>}
    </form>
  );
}
```

### 4. 복합 데이터 소스

여러 데이터 소스를 결합하여 한 번에 로드할 수 있습니다.

```ts
import { useCombinedDataSource } from '@gravity-ui/data-sources';
import { userDataSource, postsDataSource, followersDataSource } from './dataSources';

const combined = useCombinedDataSource([
  { dataSource: userDataSource, params: { userId: 123 } },
  { dataSource: postsDataSource, params: { userId: 123 } },
  { dataSource: followersDataSource, params: { userId: 123 } },
]);

// ... DataLoader 컴포넌트 사용 예시
const MyComponent = () => {
  const combined = useCombinedDataSource([
    { dataSource: userDataSource, params: { userId: 123 } },
    { dataSource: postsDataSource, params: { userId: 123 } },
    { dataSource: followersDataSource, params: { userId: 123 } },
  ]);

  return (
    <DataLoader
      status={combined.status}
      error={combined.error}
      errorAction={combined.refetchErrored} // 실패한 요청만 다시 시도
      LoadingView={ProfileSkeleton}
      ErrorView={ProfileError}
    >
      {combined.data && (
        <div>
          <UserInfo user={combined.data.user.data} />
          <UserPosts posts={combined.data.posts.data} />
          <UserFollowers followers={combined.data.followers.data} />
        </div>
      )}
    </DataLoader>
  );
};
```

## TypeScript 지원

이 라이브러리는 TypeScript 우선 접근 방식으로 구축되었으며 완전한 타입 추론을 제공합니다.

```ts
// 타입은 자동으로 추론됩니다.
const userDataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(async (params: {userId: number}): Promise<User> => {
    // 반환 타입은 User로 추론됩니다.
  }),
});

// 훅 반환 타입은 자동으로 타이핑됩니다.
const {data} = useQueryData(userDataSource, {userId: 123});
// data는 User | undefined로 타이핑됩니다.
```

### 사용자 정의 에러 타입

사용자 정의 에러 타입을 정의하고 사용할 수 있습니다.

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
  {id: number}, // Params 타입
  {id: number}, // Request 타입
  ApiResponse, // Response 타입
  User, // Data 타입
  ApiError // Error 타입
>({
  name: 'typed-user',
  fetch: skipContext(fetchUser),
});
```

## 기여

코드 오브 컨덕트 및 풀 리퀘스트 제출 프로세스에 대한 자세한 내용은 [CONTRIBUTING.md](CONTRIBUTING.md)를 참조하십시오.

## 라이선스

MIT 라이선스. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하십시오.