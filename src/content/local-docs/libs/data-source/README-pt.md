# Data Source &middot; [![npm version](https://img.shields.io/npm/v/@gravity-ui/data-source?logo=npm&label=version)](https://www.npmjs.com/package/@gravity-ui/data-source) [![ci](https://img.shields.io/github/actions/workflow/status/gravity-ui/data-source/ci.yml?branch=main&label=ci&logo=github)](https://github.com/gravity-ui/data-source/actions/workflows/ci.yml?query=branch:main)

**Data Source** é um wrapper simples para busca de dados. É uma espécie de "porta" na [arquitetura limpa](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). Ele permite que você crie wrappers para coisas relacionadas à busca de dados, dependendo dos seus casos de uso. **Data Source** usa [react-query](https://tanstack.com/query/latest) internamente.

## Instalação

```bash
npm install @gravity-ui/data-source @tanstack/react-query
```

`@tanstack/react-query` é uma dependência peer.

## Início Rápido

### 1. Configurar DataManager

Primeiro, crie e forneça um `DataManager` na sua aplicação:

```tsx
import React from 'react';
import {ClientDataManager, DataManagerContext} from '@gravity-ui/data-source';

const dataManager = new ClientDataManager({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
      retry: 3,
    },
    // ... outras opções do react-query
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

### 2. Definir Tipos de Erro e Wrappers

Defina um tipo de erro e crie seus construtores para fontes de dados com base nos construtores padrão:

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

### 3. Criar Componente DataLoader Personalizado

Escreva um componente `DataLoader` baseado no padrão para definir a exibição do status de carregamento e dos erros:

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
  LoadingView = YourLoader, // Você pode usar seu próprio componente de loader
  ErrorView = YourError, // Você pode usar seu próprio componente de erro
  ...restProps
}) => {
  return <DataLoaderBase LoadingView={LoadingView} ErrorView={ErrorView} {...restProps} />;
};
```

### 4. Definir Sua Primeira Fonte de Dados

```ts
import {skipContext} from '@gravity-ui/data-source';

// Sua função de API
import {fetchUser} from './api';

export const userDataSource = makePlainQueryDataSource({
  // As chaves precisam ser únicas. Talvez você deva criar um helper para criar nomes de fontes de dados
  name: 'user',
  // skipContext é um helper para pular os 2 primeiros parâmetros da função (context e fetchContext)
  fetch: skipContext(fetchUser),
  // Opcional: gerar tags para invalidação avançada de cache
  tags: (params) => [`user:${params.userId}`, 'users'],
});
```

### 5. Usar em Componentes

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

## Conceitos Principais

### Tipos de Fonte de Dados

A biblioteca fornece dois tipos principais de fontes de dados:

#### Fonte de Dados de Consulta Simples (Plain Query Data Source)

Para padrões simples de requisição/resposta:

```ts
const userDataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(async (params: {userId: number}) => {
    const response = await fetch(`/api/users/${params.userId}`);
    return response.json();
  }),
});
```

#### Fonte de Dados de Consulta Infinita (Infinite Query Data Source)

Para paginação e rolagem infinita:

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

### Gerenciamento de Status

A biblioteca normaliza os estados de consulta em três status simples:

- `loading` - Carregamento real dos dados. O mesmo que `isLoading` no React Query.
- `success` - Dados disponíveis (pode ser ignorado usando `idle`).
- `error` - Falha ao buscar os dados.

### Conceito de Idle

A biblioteca fornece um símbolo especial `idle` para pular a execução da consulta:

```ts
import {idle} from '@gravity-ui/data-source';

const UserProfile: React.FC<{userId?: number}> = ({userId}) => {
  // A consulta não será executada se userId não estiver definido
  const {data, status} = useQueryData(userDataSource, userId ? {userId} : idle);

  return (
    <DataLoader status={status} error={null}>
      {data && <UserCard user={data} />}
    </DataLoader>
  );
};
```

Quando os parâmetros são iguais a `idle`:

- A consulta não executa.
- O status permanece `success`.
- Os dados permanecem `undefined`.
- O componente pode renderizar com segurança sem carregar.

**Benefícios do `idle`:**

1. **Segurança de Tipo** - O TypeScript infere corretamente os tipos para parâmetros condicionais.
2. **Desempenho** - Evita requisições desnecessárias ao servidor.
3. **Simplicidade Lógica** - Não há necessidade de gerenciar estado `enabled` adicional.
4. **Consistência** - Abordagem unificada para todas as consultas condicionais.

Isso é especialmente útil para consultas condicionais quando você deseja carregar dados apenas sob certas condições, mantendo a segurança de tipo.

## Referência da API

### Criação de Fontes de Dados

#### `makePlainQueryDataSource(config)`

Cria uma fonte de dados de consulta simples para padrões de requisição/resposta.

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
    // ... outras opções do react-query
  },
});
```

**Parâmetros:**

- `name` - Identificador único para a fonte de dados
- `fetch` - Função que executa a busca real dos dados
- `transformParams` (opcional) - Transforma os parâmetros de entrada antes da requisição
- `transformResponse` (opcional) - Transforma os dados da resposta
- `tags` (opcional) - Gera tags de cache para invalidação
- `options` (opcional) - Opções do React Query

#### `makeInfiniteQueryDataSource(config)`

Cria uma fonte de dados de consulta infinita para padrões de paginação e rolagem infinita.

```ts
const infiniteDataSource = makeInfiniteQueryDataSource({
  name: 'infinite-data',
  fetch: skipContext(fetchFunction),
  next: (lastPage, allPages) => nextPageParam || undefined,
  prev: (firstPage, allPages) => prevPageParam || undefined,
  // ... outras opções iguais às do tipo plain
});
```

**Parâmetros Adicionais:**

- `next` - Função para determinar os parâmetros da próxima página
- `prev` (opcional) - Função para determinar os parâmetros da página anterior

### Hooks do React

#### `useQueryData(dataSource, params, options?)`

Hook principal para buscar dados com uma fonte de dados.

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

**Retorna:**

- `data` - Os dados buscados
- `status` - Status atual ('loading' | 'success' | 'error')
- `error` - Objeto de erro se a requisição falhar
- `refetch` - Função para buscar os dados manualmente
- Outras propriedades do React Query

#### `useQueryResponses(responses)`

Combina múltiplas respostas de consulta em um único estado.

```ts
const user = useQueryData(userDataSource, {userId});
const posts = useQueryData(postsDataSource, {userId});

const {status, error, refetch, refetchErrored} = useQueryResponses([user, posts]);
```

**Retorna:**

- `status` - Status combinado de todas as consultas
- `error` - Primeiro erro encontrado
- `refetch` - Função para buscar todos os dados novamente
- `refetchErrored` - Função para buscar novamente apenas as consultas com erro

#### `useRefetchAll(states)`

Cria um callback para buscar múltiplos dados novamente.

```ts
const refetchAll = useRefetchAll([user, posts, comments]);
// refetchAll() acionará a busca novamente para todas as consultas
```

#### `useRefetchErrored(states)`

Cria um callback para buscar novamente apenas os dados com falha.

```ts
const refetchErrored = useRefetchErrored([user, posts, comments]);
// refetchErrored() buscará novamente apenas as consultas com erros
```

#### `useDataManager()`

Retorna o DataManager do contexto.

```ts
const dataManager = useDataManager();
await dataManager.invalidateTag('users');
```

#### `useQueryContext()`

Retorna o contexto da consulta (para construir hooks de dados personalizados baseados no react-query).

### Componentes do React

#### `<DataLoader />`

Componente para lidar com estados de carregamento e erros.

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

- `status` - Status atual de carregamento
- `error` - Objeto de erro
- `errorAction` - Função ou configuração de ação para retentar o erro
- `LoadingView` - Componente a ser exibido durante o carregamento
- `ErrorView` - Componente a ser exibido em caso de erro
- `loadingViewProps` - Props passadas para o LoadingView
- `errorViewProps` - Props passadas para o ErrorView

#### `<DataInfiniteLoader />`

Componente especializado para consultas infinitas.

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

**Props Adicionais:**

- `hasNextPage` - Se há mais páginas disponíveis
- `fetchNextPage` - Função para buscar a próxima página
- `isFetchingNextPage` - Se a próxima página está sendo buscada
- `MoreView` - Componente para o botão "carregar mais"

#### `withDataManager(Component)`

HOC que injeta o DataManager como uma prop.

```tsx
const MyComponent = withDataManager<Props>(({dataManager, ...props}) => {
  // O componente tem acesso ao dataManager
  return <div>...</div>;
});
```

### Gerenciamento de Dados

#### `ClientDataManager`

Classe principal para gerenciamento de dados.

```ts
const dataManager = new ClientDataManager({
  defaultOptions: {
    queries: {
      staleTime: 300000, // 5 minutos
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});
```

**Métodos:**

##### `invalidateTag(tag, options?)`

Invalida todas as consultas com uma tag específica.

```ts
await dataManager.invalidateTag('users');
await dataManager.invalidateTag('posts', {
  repeat: {count: 3, interval: 1000}, // Tenta invalidar novamente
});
```

##### `invalidateTags(tags, options?)`

Invalida consultas que possuem todas as tags especificadas.

```ts
await dataManager.invalidateTags(['user', 'profile']);
```

##### `invalidateSource(dataSource, options?)`

Invalida todas as consultas para uma fonte de dados.

```ts
await dataManager.invalidateSource(userDataSource);
```

##### `invalidateParams(dataSource, params, options?)`

Invalida uma consulta específica com parâmetros exatos.

```ts
await dataManager.invalidateParams(userDataSource, {userId: 123});
```

##### `resetSource(dataSource)`

Reseta (limpa) todos os dados em cache para uma fonte de dados.

```ts
await dataManager.resetSource(userDataSource);
```

##### `resetParams(dataSource, params)`

Reseta os dados em cache para parâmetros específicos.

```ts
await dataManager.resetParams(userDataSource, {userId: 123});
```

##### `invalidateSourceTags(dataSource, params, options?)`

Invalida consultas com base nas tags geradas por uma fonte de dados.

```ts
await dataManager.invalidateSourceTags(userDataSource, {userId: 123});
```

### Utilitários

#### `skipContext(fetchFunction)`

Utilitário para adaptar funções fetch existentes à interface da fonte de dados.

```ts
// Função existente
async function fetchUser(params: {userId: number}) {
  // ...
}

// Adaptada para a fonte de dados
const dataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(fetchUser), // Ignora o contexto e os parâmetros de fetchContext
});
```

#### `withCatch(fetchFunction, errorHandler)`

Adiciona tratamento de erros padronizado a funções fetch.

```ts
const safeFetch = withCatch(fetchUser, (error) => ({error: true, message: error.message}));
```

#### `withCancellation(fetchFunction)`

Adiciona suporte de cancelamento a funções fetch.

```ts
const cancellableFetch = withCancellation(fetchFunction);
// Lida automaticamente com AbortSignal do React Query
```

#### `getProgressiveRefetch(options)`

Cria uma função de intervalo de refetch progressivo.

```ts
const progressiveRefetch = getProgressiveRefetch({
  minInterval: 1000, // Começa com 1 segundo
  maxInterval: 30000, // Máximo de 30 segundos
  multiplier: 2, // Dobra a cada vez
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

Converte status do React Query para status do DataLoader.

```ts
const status = normalizeStatus('pending', 'fetching'); // 'loading'
```

#### Utilitários de Status e Erro

```ts
// Obtém o status combinado de múltiplos estados
const status = getStatus([user, posts, comments]);

// Obtém o primeiro erro de múltiplos estados
const error = getError([user, posts, comments]);

// Mescla múltiplos status
const combinedStatus = mergeStatuses(['loading', 'success', 'error']); // 'error'

// Verifica se a chave da query tem uma tag
const hasUserTag = hasTag(queryKey, 'users');
```

#### Utilitários de Composição de Chaves

```ts
// Compõe a chave de cache para uma fonte de dados
const key = composeKey(userDataSource, {userId: 123});

// Compõe a chave completa incluindo tags
const fullKey = composeFullKey(userDataSource, {userId: 123});
```

#### Constantes

```ts
import {idle} from '@gravity-ui/data-source';

// Símbolo especial para pular a execução da query
const params = shouldFetch ? {userId: 123} : idle;

// Alternativa type-safe para enabled: false
// Em vez de:
const {data} = useQueryData(userDataSource, {userId: userId || ''}, {enabled: Boolean(userId)});

// Use:
const {data} = useQueryData(userDataSource, userId ? {userId} : idle);
// O TypeScript infere corretamente os tipos para ambos os ramos
```

#### Composição de Opções de Query

```ts
// Compõe opções do React Query para queries simples
const plainOptions = composePlainQueryOptions(context, dataSource, params, options);

// Compõe opções do React Query para queries infinitas
const infiniteOptions = composeInfiniteQueryOptions(context, dataSource, params, options);
```

**Nota:** Estas funções são usadas principalmente internamente ao criar implementações de fontes de dados personalizadas.

## Padrões Avançados

### Queries Condicionais com `idle`

Use `idle` para criar queries condicionais:

```ts
import {idle} from '@gravity-ui/data-source';

const ConditionalDataComponent: React.FC<{
  userId?: number;
  shouldLoadPosts: boolean;
}> = ({userId, shouldLoadPosts}) => {
  // Carrega o usuário apenas se userId estiver definido
  const user = useQueryData(
    userDataSource,
    userId ? {userId} : idle
  );

  // Carrega os posts apenas se o usuário for carregado e o flag estiver habilitado
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

### Transformação de Dados

Transforma parâmetros de requisição e dados de resposta:

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

### Invalidação de Cache Baseada em Tags

Use tags para gerenciamento sofisticado de cache:

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

// Invalida todos os dados de um usuário específico
await dataManager.invalidateTag('user:123');

// Invalida todos os dados relacionados ao usuário
await dataManager.invalidateTag('users');
```

### Tratamento de Erros com Tipos

Cria tratamento de erros type-safe:

```ts
interface ApiError {
  code: number;
  message: string;
  details?: Record<string, unknown>;
}

const ErrorView: React.FC<ErrorViewProps<ApiError>> = ({error, action}) => (
  <div className="error">
    <h3>Erro {error?.code}</h3>
    <p>{error?.message}</p>
    {action && (
      <button onClick={action.handler}>
        {action.children || 'Tentar novamente'}
      </button>
    )}
  </div>
);
```

### Queries Infinitas com Paginação Complexa

Lida com cenários de paginação complexos:

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

### Combinando Múltiplas Fontes de Dados

Combina dados de múltiplas fontes:

```ts
const UserProfile: React.FC<{userId: number}> = ({userId}) => {
  const user = useQueryData(userDataSource, {userId});
  const posts = useQueryData(userPostsDataSource, {userId});
  const followers = useQueryData(userFollowersDataSource, {userId});

  const combined = useQueryResponses([user, posts, followers]);
```

```jsx
// ...
    </DataLoader>
  );
};
```

## Suporte a TypeScript

A biblioteca foi desenvolvida com uma abordagem "TypeScript-first" e oferece inferência de tipos completa:

```ts
// Tipos são inferidos automaticamente
const userDataSource = makePlainQueryDataSource({
  name: 'user',
  fetch: skipContext(async (params: {userId: number}): Promise<User> => {
    // O tipo de retorno é inferido como User
  }),
});

// O tipo de retorno do hook é tipado automaticamente
const {data} = useQueryData(userDataSource, {userId: 123});
// data é tipado como User | undefined
```

### Tipos de Erro Personalizados

Defina e utilize tipos de erro personalizados:

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
  {id: number}, // Tipo dos parâmetros
  {id: number}, // Tipo da requisição
  ApiResponse, // Tipo da resposta
  User, // Tipo dos dados
  ApiError // Tipo do erro
>({
  name: 'typed-user',
  fetch: skipContext(fetchUser),
});
```

## Contribuição

Por favor, leia o [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes sobre nosso código de conduta e o processo para enviar pull requests.

## Licença

Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.